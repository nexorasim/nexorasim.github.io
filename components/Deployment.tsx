
import React, { useEffect, useContext } from 'react';
import { COVERAGE_DATA } from '../constants';
import { LanguageContext } from '../contexts/LanguageContext';

declare const gsap: any;
declare const ScrollTrigger: any;

const Coverage: React.FC = () => {
    const { language } = useContext(LanguageContext);

    useEffect(() => {
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            gsap.from(".coverage-card", {
                scrollTrigger: {
                    trigger: "#coverage",
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                opacity: 0,
                y: 50,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            });
        }
    }, []);

    const content = {
        title: { en: 'Connect Across The Globe', my: 'ကမ္ဘာတစ်ဝှမ်း ချိတ်ဆက်လိုက်ပါ' },
        subtitle: { en: 'We offer extensive coverage in major regions and over 190 countries worldwide, ensuring you stay connected wherever your journey takes you.', my: 'ကျွန်ုပ်တို့သည် အဓိကဒေသများနှင့် ကမ္ဘာတစ်ဝှမ်းရှိ နိုင်ငံပေါင်း ၁၉၀ ကျော်တွင် ကျယ်ပြန့်သော ကွန်ရက်လွှမ်းခြုံမှုကို ပေးစွမ်းသောကြောင့် သင်ဘယ်ကိုသွားသွား အဆက်မပြတ်ရှိနေမှာပါ။' },
    };

    return (
        <section id="coverage" className="py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold font-sora">{content.title[language]}</h2>
                    <p className="text-lg text-[#999999] mt-4 max-w-3xl mx-auto">
                        {content.subtitle[language]}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {COVERAGE_DATA.map((region, index) => (
                        <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#7BD5FB]/50 coverage-card">
                            <div className="text-5xl text-[#7BD5FB] mb-6">
                                <i className={region.icon}></i>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{region.continent[language]}</h3>
                            <ul className="text-[#999999] space-y-1">
                                {region.countries.map((country, i) => (
                                    <li key={i}>{country}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Coverage;