import React, { useState, useEffect, useRef } from 'react';

interface TimelineItem {
    id: number;
    title: string;
    description: string;
    image: string;
    side: 'left' | 'right';
}

const Services: React.FC = () => {
    const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
    const itemRefs = useRef<Map<number, HTMLDivElement>>(new Map());

    const timelineItems: TimelineItem[] = [
        {
            id: 1,
            title: 'Roof cleaning',
            description: 'Professional roof cleaning to remove debris, moss, and algae, extending roof lifespan.',
            image: 'https://nsroofing.co.za/wp-content/uploads/2022/07/roofcleaning-1030x687.jpg',
            side: 'left',
        },
        {
            id: 2,
            title: 'Gutter cleaning and downpipes',
            description: 'Expert gutter maintenance to ensure proper water flow and prevent damage to your home.',
            image: 'https://s1.kaercher-media.com/media/image/selection/107234/m2/dachrinne-reinigen-1.webp',
            side: 'right',
        },
        {
            id: 3,
            title: 'House wash',
            description: 'Complete exterior house cleaning that revitalizes your home\'s appearance and protects surfaces.',
            image: 'https://langleyhousewashing.com/wp-content/uploads/2023/04/house-washing.jpg',
            side: 'left',
        },
        {
            id: 4,
            title: 'Window cleaning',
            description: 'Streak-free professional window cleaning for crystal clear views inside and outside.',
            image: 'https://i0.wp.com/storables.com/wp-content/uploads/2021/12/Featured-Photo-for-Window-Cleaners-1024x576.jpeg?resize=1024%2C576&ssl=1',
            side: 'right',
        },
        {
            id: 5,
            title: 'Driveway cleaning',
            description: 'Deep driveway cleaning to remove stains, dirt, and restore your driveway\'s original look.',
            image: 'https://cdn.simplegreen.com/web22/images/cleaning_tips/tip_hero/outdoors/driveways.jpg',
            side: 'left',
        },
        {
            id: 6,
            title: 'Patio cleaning',
            description: 'Transform your outdoor spaces with thorough patio cleaning and pressure washing services.',
            image: 'https://www.washyourwalls.uk/wp-content/uploads/2023/01/What-are-the-benefits-of-hiring-a-professional-patio-cleaner.png',
            side: 'right',
        },
        {
            id: 7,
            title: 'Solar panels',
            description: 'Keep your solar panels clean and efficient with our specialized cleaning service.',
            image: 'https://dfisolutions.com/wp-content/uploads/2022/07/Fourth-Blog-Post-Image-1.jpg',
            side: 'left',
        },
        {
            id: 8,
            title: 'Drain cleaning',
            description: 'Professional drain cleaning to clear clogs and maintain proper water flow throughout your home.',
            image: 'https://cdn-ildhebn.nitrocdn.com/mAuZCaIylkoXmgnfdiTzmvovqdoNidVS/assets/images/optimized/rev-739078d/unclogdrains.com/wp-content/uploads/2023/07/unclog-drain-st-paul-mn-750x480.jpeg',
            side: 'right',
        },
        {
            id: 9,
            title: 'Garbage bin cleaning',
            description: 'Hygienic garbage bin cleaning service to eliminate odors and bacteria buildup.',
            image: 'https://bc-user-uploads.brandcrowd.com/public/media-Production/524664d4-d81d-47e5-aebb-171569846d63/3cc18a7b-f930-489f-9b39-65dbcbecbef3_2x',
            side: 'left',
        },
        {
            id: 10,
            title: 'Commercial vehicle and truck cleaning',
            description: 'Professional fleet cleaning services for vehicles, trucks, and commercial equipment.',
            image: 'https://www.fuelcardservices.com/wp-content/uploads/2020/02/shutterstock_1770477506.jpg',
            side: 'right',
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const itemId = parseInt(entry.target.getAttribute('data-id') || '0');
                    if (entry.isIntersecting) {
                        setVisibleItems((prev) => new Set([...prev, itemId]));
                    } else {
                        setVisibleItems((prev) => {
                            const newSet = new Set(prev);
                            newSet.delete(itemId);
                            return newSet;
                        });
                    }
                });
            },
            { threshold: 0.2 }
        );

        itemRefs.current.forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const setItemRef = (id: number, el: HTMLDivElement | null) => {
        if (el) {
            itemRefs.current.set(id, el);
        }
    };

    return (
        <div id='services' className="min-h-screen py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl font-bold text-center text-gray-900 mb-4">Our Services</h1>
                <p className="text-center text-gray-600 mb-20">Scroll to discover our complete range of services</p>

                <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-500"></div>

                    <div className="space-y-16">
                        {timelineItems.map((item) => {
                            const isVisible = visibleItems.has(item.id);
                            const isLeft = item.side === 'left';

                            return (
                                <div
                                    key={item.id}
                                    ref={(el) => setItemRef(item.id, el as HTMLDivElement)}
                                    data-id={item.id}
                                    className="relative"
                                >
                                    <div className="absolute left-1/2 transform -translate-x-1/2 z-10 top-6">
                                        <div className={`w-6 h-6 rounded-full border-4 border-gray-100 transition-all duration-500 ${isVisible ? 'bg-blue-500 shadow-lg shadow-blue-400' : 'bg-gray-400'
                                            }`}></div>
                                    </div>

                                    <div className="flex items-center mt-[150px]">
                                        <div className="w-1/2 pr-8">
                                            {isLeft && (
                                                <div className={`transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                                                    }`}>
                                                    <img
                                                        src={item.image}
                                                        alt={item.title}
                                                        className="w-full h-[250px] object-cover rounded-lg shadow-lg border-2 border-gray-200"
                                                    />
                                                </div>
                                            )}
                                            {!isLeft && (
                                                <div className={`transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                                                    }`}>
                                                    <div>
                                                        <h3 className="text-3xl font-bold text-gray-900 mb-2">{item.title}</h3>                                                        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div className="w-1/2 pl-8">
                                            {isLeft && (
                                                <div className={`transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                                                    }`}>
                                                    <div>
                                                        <h3 className="text-3xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                                        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                                                    </div>
                                                </div>
                                            )}
                                            {!isLeft && (
                                                <div className={`transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                                                    }`}>
                                                    <img
                                                        src={item.image}
                                                        alt={item.title}
                                                        className="w-full h-[250px] object-cover rounded-lg shadow-lg border-2 border-gray-200"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;