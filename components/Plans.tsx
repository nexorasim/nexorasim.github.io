
import React, { useState, useEffect, useMemo, useContext } from 'react';
import { PLANS_DATA } from '../constants';
import { Plan } from '../types';
import { LanguageContext } from '../contexts/LanguageContext';

declare const gsap: any;
declare const ScrollTrigger: any;

type PlanCategory = 'Global' | 'Regional' | 'Local';

const PlanCard: React.FC<Plan> = ({ region, data, validity, price, bestValue }) => {
    const { language } = useContext(LanguageContext);
    const isBestValue = bestValue === true;
    const borderClass = isBestValue ? 'p-0.5 bg-gradient-to-br from-[#8D77CC] to-[#7BD5FB]' : 'border border-white/10';
    const bgColor = isBestValue ? 'bg-[#1F1D2B]' : 'bg-white/5';

    const content = {
        bestValue: { en: 'BEST VALUE', my: 'တန်ဖိုးအရှိဆုံး' },
        validity: { en: 'Validity', my: 'သက်တမ်း' },
        buyNow: { en: 'Buy Now', my: 'ယခုဝယ်ပါ' },
    }

    return (
        <div className={`rounded-xl plan-card ${borderClass}`}>
            <div className={`relative ${bgColor} backdrop-blur-md rounded-[11px] p-6 h-full flex flex-col`}>
                {isBestValue && (
                    <div className="absolute top-0 right-6 -translate-y-1/2 bg-gradient-to-r from-[#B2F79C] to-[#7BD5FB] text-black text-xs font-bold px-3 py-1 rounded-full">
                        {content.bestValue[language]}
                    </div>
                )}
                <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-[#999999]">{region[language]}</h3>
                    <div className="my-4">
                        <span className="text-5xl font-bold text-white">{data}</span>
                    </div>
                    <p className="text-white">
                        <i className="far fa-calendar-alt mr-2 text-[#7BD5FB]"></i>
                        {content.validity[language]}: <span className="font-semibold">{validity[language]}</span>
                    </p>
                </div>
                <div className="mt-6">
                    <div className="text-3xl font-bold text-white mb-4">${price}</div>
                    <button className="w-full bg-gradient-to-r from-[#8D77CC] to-[#7BD5FB] text-white font-semibold py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(141,119,204,0.25)]">
                        {content.buyNow[language]}
                    </button>
                </div>
            </div>
        </div>
    );
};

const Plans: React.FC = () => {
    const { language } = useContext(LanguageContext);
    const [activeTab, setActiveTab] = useState<PlanCategory>('Global');

    const filteredPlans = useMemo(() => 
        PLANS_DATA.filter(plan => plan.category === activeTab)
    , [activeTab]);
    
    useEffect(() => {
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            gsap.from(".plan-section-title, .plan-tabs, .plan-card", {
                scrollTrigger: {
                    trigger: "#plans",
                    start: "top 80%",
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
    
    const content = {
        title: { en: 'Choose Your Perfect eSIM Plan', my: 'သင်နှင့်အကိုက်ညီဆုံး eSIM Package ကို ရွေးချယ်ပါ' },
        description: { en: 'Flexible plans for every type of traveler. Get high-speed data in one country or across the globe.', my: 'ခရီးသွားတိုင်းအတွက် ပြောင်းလွယ်ပြင်လွယ်ရှိသော Package များ။ တစ်နိုင်ငံတည်းတွင်ဖြစ်စေ၊ ကမ္ဘာတစ်ဝှမ်းတွင်ဖြစ်စေ မြန်နှုန်းမြင့်ဒေတာကို ရယူပါ။' },
        tabs: {
            Global: { en: 'Global', my: 'ကမ္ဘာလုံးဆိုင်ရာ' },
            Regional: { en: 'Regional', my: 'ဒေသဆိုင်ရာ' },
            Local: { en: 'Local', my: 'ပြည်တွင်း' }
        }
    }
    
    const tabs: PlanCategory[] = ['Global', 'Regional', 'Local'];

    return (
        <section id="plans" className="py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold font-sora plan-section-title">{content.title[language]}</h2>
                    <p className="text-lg text-[#999999] mt-4 max-w-2xl mx-auto plan-section-title">
                        {content.description[language]}
                    </p>
                </div>
                
                <div className="flex justify-center mb-10 plan-tabs">
                    <div className="bg-white/5 p-1.5 rounded-full flex items-center gap-2">
                        {tabs.map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-semibold transition-colors duration-300 ${
                                    activeTab === tab ? 'bg-white text-black' : 'text-white hover:bg-white/10'
                                }`}
                            >
                                {content.tabs[tab][language]}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {filteredPlans.map((plan, index) => (
                        <PlanCard key={`${activeTab}-${index}`} {...plan} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Plans;
