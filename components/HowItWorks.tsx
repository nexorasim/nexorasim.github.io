
import React, { useEffect, useContext } from 'react';
import { HOW_IT_WORKS_STEPS } from '../constants';
import { LanguageContext } from '../contexts/LanguageContext';

declare const gsap: any;
declare const ScrollTrigger: any;

const HowItWorks: React.FC = () => {
    const { language } = useContext(LanguageContext);
    useEffect(() => {
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
             gsap.from(".step-card", {
                scrollTrigger: {
                    trigger: ".steps-container",
                    start: "top 85%",
                    toggleActions: "play none none none"
                },
                opacity: 0,
                x: -40,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            });
        }
    }, []);

    const title = {
        en: 'Get Connected in 3 Easy Steps',
        my: 'လွယ်ကူသော အဆင့် ၃ ဆင့်ဖြင့် ချိတ်ဆက်လိုက်ပါ။'
    }

    return (
        <section id="how-it-works" className="py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 font-sora">{title[language]}</h2>
                <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto steps-container relative">
                    {HOW_IT_WORKS_STEPS.map((step, index) => (
                        <div key={index} className="relative text-center step-card z-10">
                           <div className="flex items-center justify-center mb-6">
                               <div className="bg-[#8D77CC] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl">
                                   <i className={step.icon}></i>
                               </div>
                           </div>
                            <h3 className="text-2xl font-bold mb-3">{step.title[language]}</h3>
                            <p className="text-[#999999]">{step.description[language]}</p>
                        </div>
                    ))}
                    <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-white/10"></div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
