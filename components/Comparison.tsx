
import React, { useEffect, useContext } from 'react';
import { COMPARISON_DATA } from '../constants';
import { LanguageContext } from '../contexts/LanguageContext';

declare const gsap: any;
declare const ScrollTrigger: any;

const Comparison: React.FC = () => {
    const { language } = useContext(LanguageContext);
    
    useEffect(() => {
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            gsap.from(".comparison-row", {
                scrollTrigger: {
                    trigger: "#comparison",
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                opacity: 0,
                y: 30,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out"
            });
        }
    }, []);

    const content = {
        title: { en: 'The Future is Digital', my: 'အနာဂတ်သည် ဒစ်ဂျစ်တယ်ဖြစ်သည်' },
        subtitle: { en: 'See how eSIM technology stacks up against traditional physical SIM cards.', my: 'eSIM နည်းပညာသည် သမားရိုးကျ physical SIM ကတ်များနှင့် နှိုင်းယှဉ်လျှင် မည်သို့ကွာခြားသည်ကို ကြည့်ပါ။' },
        feature: { en: 'Feature', my: 'အင်္ဂါရပ်' },
        esim: { en: 'NexoraSIM (eSIM)', my: 'NexoraSIM (eSIM)' },
        physical: { en: 'Physical SIM', my: 'ရုပ်ပိုင်းဆိုင်ရာ SIM' },
    };

    return (
        <section id="comparison" className="py-24 bg-black/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold font-sora">{content.title[language]}</h2>
                    <p className="text-lg text-[#999999] mt-4 max-w-2xl mx-auto">
                        {content.subtitle[language]}
                    </p>
                </div>
                <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-xl p-4 sm:p-8">
                    <div className="grid grid-cols-3 gap-4 text-center font-bold text-white mb-6 px-4">
                        <div className="text-left">{content.feature[language]}</div>
                        <div>{content.esim[language]}</div>
                        <div>{content.physical[language]}</div>
                    </div>
                    <div className="space-y-2">
                        {COMPARISON_DATA.map((item, index) => (
                             <div key={index} className="grid grid-cols-3 gap-4 items-center bg-white/5 hover:bg-white/10 transition-colors duration-300 p-4 rounded-lg comparison-row">
                                <div className="text-white text-left font-medium">{item.feature[language]}</div>
                                <div className="text-center">
                                    {item.esim ? (
                                        <i className="fas fa-check-circle text-2xl text-[#B2F79C]"></i>
                                    ) : (
                                        <i className="fas fa-times-circle text-2xl text-red-500/70"></i>
                                    )}
                                </div>
                                <div className="text-center">
                                    {item.physical ? (
                                         <i className="fas fa-check-circle text-2xl text-[#B2F79C]"></i>
                                    ) : (
                                        <i className="fas fa-times-circle text-2xl text-red-500/70"></i>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Comparison;
