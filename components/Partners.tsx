
import React, { useEffect, useContext } from 'react';
import { PARTNERS_LOGOS } from '../constants';
import { LanguageContext } from '../contexts/LanguageContext';

declare const gsap: any;
declare const ScrollTrigger: any;

const Partners: React.FC = () => {
    const { language } = useContext(LanguageContext);

    useEffect(() => {
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            gsap.from(".partner-logo", {
                scrollTrigger: {
                    trigger: "#partners",
                    start: "top 85%",
                    toggleActions: "play none none none"
                },
                opacity: 0,
                y: 20,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out"
            });
        }
    }, []);

    const content = {
        title: { en: 'Trusted by Industry Leaders', my: 'စက်မှုလုပ်ငန်းခေါင်းဆောင်များမှ ယုံကြည်ခြင်း' },
    };

    return (
        <section id="partners" className="py-24 bg-black/30">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-center text-gray-400 mb-12 font-sora">
                    {content.title[language]}
                </h2>
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 max-w-4xl mx-auto">
                    {PARTNERS_LOGOS.map((partner) => (
                        <div key={partner.name} className="partner-logo">
                            <img 
                                src={partner.logoUrl} 
                                alt={partner.name} 
                                className="h-8 sm:h-10 object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;