
import React, { useEffect, useContext } from 'react';
import { FEATURES_DATA } from '../constants';
import { Feature } from '../types';
import { LanguageContext } from '../contexts/LanguageContext';

declare const gsap: any;
declare const ScrollTrigger: any;

const iconColors = ['text-[#8D77CC]', 'text-[#7BD5FB]', 'text-[#B2F79C]'];

const FeatureCard: React.FC<Feature & { index: number }> = ({ icon, title, description, index }) => {
    const { language } = useContext(LanguageContext);
    return (
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-8 transition-all duration-300 hover:-translate-y-2.5 hover:border-[#8D77CC]/30 feature-card">
            <div className={`text-4xl ${iconColors[index % 3]} mb-4`}>
                <i className={icon}></i>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">{title[language]}</h3>
            <p className="text-[#999999]">{description[language]}</p>
        </div>
    );
};


const Features: React.FC = () => {
    const { language } = useContext(LanguageContext);
    useEffect(() => {
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
             gsap.from(".feature-card", {
                scrollTrigger: {
                    trigger: ".features-grid",
                    start: "top 85%",
                    toggleActions: "play none none none"
                },
                opacity: 0,
                y: 40,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out"
            });
        }
    }, []);

    const title = {
        en: 'Why Choose NexoraSIM?',
        my: 'NexoraSIM ကို ဘာကြောင့်ရွေးချယ်သင့်သလဲ။'
    }

    return (
        <section id="features" className="py-24 bg-black/30">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 font-sora">{title[language]}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 features-grid">
                    {FEATURES_DATA.map((feature, index) => (
                        <FeatureCard key={index} {...feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
