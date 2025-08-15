
import React, { useEffect, useContext } from 'react';
import { CORPORATE_FEATURES_DATA } from '../constants';
import { LanguageContext } from '../contexts/LanguageContext';

declare const gsap: any;
declare const ScrollTrigger: any;

const Corporate: React.FC = () => {
    const { language } = useContext(LanguageContext);
    
    useEffect(() => {
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            gsap.from(".corporate-feature-card", {
                scrollTrigger: {
                    trigger: "#corporate",
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                opacity: 0,
                y: 50,
                stagger: 0.2,
                duration: 0.8,
                ease: "power3.out"
            });
        }
    }, []);

    const content = {
        title: { en: 'NexoraSIM for Business', my: 'လုပ်ငန်းများအတွက် NexoraSIM' },
        subtitle: { en: 'Empower your global team with seamless connectivity. Our corporate and reseller solutions are designed for businesses of any scale.', my: 'သင်၏ကမ္ဘာလုံးဆိုင်ရာအဖွဲ့ကို ချောမွေ့သောချိတ်ဆက်မှုဖြင့် အားဖြည့်ပါ။ ကျွန်ုပ်တို့၏ ကော်ပိုရိတ်နှင့် ပြန်လည်ရောင်းချသူဖြေရှင်းချက်များသည် မည်သည့်အရွယ်အစားမဆိုရှိသော လုပ်ငန်းများအတွက် ဒီဇိုင်းထုတ်ထားပါသည်။' },
        ctaButton: { en: 'Request a Demo', my: 'Demo တောင်းဆိုပါ' }
    };

    return (
        <section id="corporate" className="py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold font-sora">{content.title[language]}</h2>
                    <p className="text-lg text-[#999999] mt-4 max-w-3xl mx-auto">
                        {content.subtitle[language]}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {CORPORATE_FEATURES_DATA.map((feature, index) => (
                        <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#8D77CC]/50 corporate-feature-card">
                            <div className="text-5xl text-[#8D77CC] mb-6">
                                <i className={feature.icon}></i>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{feature.title[language]}</h3>
                            <p className="text-[#999999]">{feature.description[language]}</p>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-16">
                    <button className="bg-gradient-to-r from-[#8D77CC] to-[#7BD5FB] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(141,119,204,0.3)]">
                        {content.ctaButton[language]}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Corporate;