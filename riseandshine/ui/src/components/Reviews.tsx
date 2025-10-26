import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, User } from 'lucide-react';

interface Review {
    id: number;
    author: string;
    role: string;
    content: string;
    rating: number;
    avatar: string;
}

interface ScrollState {
    canScrollLeft: boolean;
    canScrollRight: boolean;
}

const ReviewsCarousel: React.FC = () => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const [scrollState, setScrollState] = useState<ScrollState>({
        canScrollLeft: false,
        canScrollRight: true,
    });
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Mock data with initials for avatars
    useEffect(() => {
        const mockReviews: Review[] = [
            {
                id: 1,
                author: 'Margaret Thompson',
                role: 'Homeowner',
                content:
                    'Professional team transformed our home! Our driveway looks brand new and the house wash was exceptional. Highly recommend their services.',
                rating: 5,
                avatar: 'MT',
            },
            {
                id: 2,
                author: 'Robert Jackson',
                role: 'Business Owner',
                content:
                    'Outstanding commercial cleaning service. They maintained our property beautifully. Their roof cleaning work was impeccable and on time.',
                rating: 5,
                avatar: 'RJ',
            },
            {
                id: 3,
                author: 'Jennifer Lee',
                role: 'Property Manager',
                content:
                    'Fantastic window cleaning and gutter service. The attention to detail is remarkable. Our tenants noticed the difference immediately.',
                rating: 5,
                avatar: 'JL',
            },
            {
                id: 4,
                author: 'David Martinez',
                role: 'Homeowner',
                content:
                    'Great patio cleaning work! They were efficient, professional, and the results exceeded expectations. Worth every penny.',
                rating: 5,
                avatar: 'DM',
            },
            {
                id: 5,
                author: 'Susan Williams',
                role: 'Commercial Client',
                content:
                    'Their solar panel cleaning service is top-notch. Professional team and excellent customer service. Highly satisfied!',
                rating: 5,
                avatar: 'SW',
            },
            {
                id: 6,
                author: 'Michael Chen',
                role: 'Homeowner',
                content:
                    'Best decision to hire them for our house wash and drain cleaning. The team was courteous and thorough. Definitely calling them again!',
                rating: 5,
                avatar: 'MC',
            },
            {
                id: 7,
                author: 'Patricia Brown',
                role: 'Property Owner',
                content:
                    'Exceptional garbage bin cleaning service. Our whole street noticed the difference. Professional and reliable team.',
                rating: 5,
                avatar: 'PB',
            },
            {
                id: 8,
                author: 'James Wilson',
                role: 'Fleet Manager',
                content:
                    'Their commercial vehicle and truck cleaning service is outstanding. Fleet looks spotless and professional. Highly recommended!',
                rating: 5,
                avatar: 'JW',
            },
        ];
        setReviews(mockReviews);
    }, []);

    const scroll = (direction: 'left' | 'right'): void => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const scrollAmount = 400;
        const newPosition =
            direction === 'left'
                ? scrollPosition - scrollAmount
                : scrollPosition + scrollAmount;

        container.scrollTo({
            left: newPosition,
            behavior: 'smooth',
        });
        setScrollPosition(newPosition);
    };

    const handleScroll = (): void => {
        const container = scrollContainerRef.current;
        if (!container) return;

        setScrollPosition(container.scrollLeft);
        setScrollState({
            canScrollLeft: container.scrollLeft > 0,
            canScrollRight:
                container.scrollLeft <
                container.scrollWidth - container.clientWidth - 50,
        });
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
            return () => container.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const renderStars = (rating: number): React.ReactNode => {
        return [...Array(5)].map((_, i) => (
            <Star
                key={i}
                className={`w-5 h-5 ${i < rating
                    ? 'fill-amber-400 text-amber-400'
                    : 'text-slate-300'
                    }`}
            />
        ));
    };

    const getAvatarColor = (id: number): string => {
        const colors = [
            'bg-blue-500',
            'bg-green-500',
            'bg-purple-500',
            'bg-pink-500',
            'bg-indigo-500',
            'bg-teal-500',
            'bg-orange-500',
            'bg-cyan-500',
        ];
        return colors[id % colors.length];
    };

    return (
        <div className="min-h-screen from-slate-50 to-slate-100 py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-center text-gray-900 mb-4">
                        What Our Clients Say
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-6">
                        Join hundreds of satisfied customers who've transformed their environment!
                    </p>
                </div>

                <div className="relative">
                    <button
                        onClick={() => scroll('left')}
                        disabled={!scrollState.canScrollLeft}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 p-3 rounded-full bg-white shadow-lg hover:shadow-xl disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 hover:scale-110"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-6 h-6 text-slate-900" />
                    </button>

                    <button
                        onClick={() => scroll('right')}
                        disabled={!scrollState.canScrollRight}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 p-3 rounded-full bg-white shadow-lg hover:shadow-xl disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 hover:scale-110"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-6 h-6 text-slate-900" />
                    </button>

                    <div
                        ref={scrollContainerRef}
                        className="overflow-x-auto scroll-smooth scrollbar-hide"
                        style={{ scrollBehavior: 'smooth' }}
                    >
                        <div className="flex gap-6 pb-4">
                            {reviews.map((review, index) => (
                                <div
                                    key={review.id}
                                    className="flex-shrink-0 w-96 group animate-fade-in"
                                    style={{
                                        animationDelay: `${index * 50}ms`,
                                        animation: 'fadeIn 0.6s ease-out forwards',
                                    }}
                                >
                                    <div className="h-full bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-slate-100 hover:border-slate-200">
                                        <div className="flex gap-1 mb-4">{renderStars(review.rating)}</div>

                                        <p className="text-slate-700 mb-6 leading-relaxed min-h-24">
                                            &quot;{review.content}&quot;
                                        </p>

                                        <div className="flex items-center gap-3 pt-6 border-t border-slate-100">
                                            <div className={`w-12 h-12 rounded-full ${getAvatarColor(review.id)} flex items-center justify-center text-white font-semibold text-sm shadow-md`}>
                                                {review.avatar}
                                            </div>
                                            <div>
                                                <p className="font-semibold text-slate-900">
                                                    {review.author}
                                                </p>
                                                <p className="text-sm text-slate-500">{review.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex justify-center gap-2 mt-8">
                    {reviews.map((_, idx) => (
                        <div
                            key={idx}
                            className="h-1 bg-slate-300 rounded-full transition-all duration-300"
                            style={{
                                width:
                                    idx === Math.floor(scrollPosition / 410) ? '32px' : '8px',
                                backgroundColor:
                                    idx === Math.floor(scrollPosition / 410)
                                        ? '#1e293b'
                                        : '#cbd5e1',
                            }}
                        />
                    ))}
                </div>
            </div>

            <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
        </div>
    );
};

export default ReviewsCarousel;