
import React, { useEffect, useContext } from 'react';
import Globe from './Globe';
import { LanguageContext } from '../contexts/LanguageContext';

declare const gsap: any;

const Hero: React.FC = () => {
    const { language } = useContext(LanguageContext);
    
    const content = {
        title: {
            en: 'Seamless Global Connectivity, Instantly.',
            my: 'ကမ္ဘာတစ်ဝှမ်း ချောမွေ့စွာချိတ်ဆက်မှု၊ ချက်ချင်းရယူလိုက်ပါ။',
        },
        subtitle: {
            en: 'Travel connected in over 190 countries. Get your NexoraSIM eSIM in minutes for high-speed global data. No hidden fees, no plastic waste.',
            my: 'နိုင်ငံပေါင်း ၁၉၀ ကျော်တွင် ချိတ်ဆက်ပြီး ခရီးသွားပါ။ မြန်နှုန်းမြင့် ကမ္ဘာလုံးဆိုင်ရာဒေတာအတွက် သင်၏ NexoraSIM eSIM ကို မိနစ်ပိုင်းအတွင်း ရယူလိုက်ပါ။ လျှို့ဝှက်အခကြေးငွေမရှိ၊ ပလတ်စတစ်စွန့်ပစ်ပစ္စည်းမရှိ။',
        },
        getButton: { en: 'Get Your eSIM', my: 'eSIM ရယူပါ' },
        plansButton: { en: 'View Plans', my: 'Package များကြည့်ရန်' },
        trustedBy: { en: 'Trusted by 50,000+ happy travelers', my: 'ပျော်ရွှင်သောခရီးသွား ၅၀,၀၀၀+ ၏ ယုံကြည်မှုကို ရရှိထားသည်။' },
    };

    useEffect(() => {
        if (typeof gsap !== 'undefined') {
            gsap.timeline()
                .from(".hero-content > *", {
                    duration: 1,
                    opacity: 0,
                    y: 30,
                    stagger: 0.2,
                    delay: 0.3,
                    ease: "power3.out"
                })
                .from(".globe-container", {
                    duration: 1.5,
                    opacity: 0,
                    scale: 0.8,
                    ease: "power3.out"
                }, "-=1.2");
        }
    }, [])

    return (
        <section id="home" className="container mx-auto px-4 py-24 min-h-[90vh] flex items-center">
             <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                <div className="max-w-2xl hero-content">
                    <h1 className="font-sora text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-white to-[#B2F79C] bg-clip-text text-transparent mb-4">
                        {content.title[language]}
                    </h1>
                    <p className="text-lg text-[#999999] mb-8 max-w-xl">
                        {content.subtitle[language]}
                    </p>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
                        <button className="bg-gradient-to-r from-[#8D77CC] to-[#7BD5FB] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(141,119,204,0.3)]">
                            {content.getButton[language]}
                        </button>
                        <div className="p-0.5 rounded-full bg-gradient-to-r from-[#8D77CC] via-[#7BD5FB] to-[#B2F79C]">
                            <button className="bg-[#1B1B1B] w-full text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:bg-opacity-80">
                                {content.plansButton[language]}
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex -space-x-3">
                            <img className="inline-block h-12 w-12 rounded-full ring-2 ring-[#181818]" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="User avatar 1" />
                            <img className="inline-block h-12 w-12 rounded-full ring-2 ring-[#181818]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="User avatar 2" />
                            <img className="inline-block h-12 w-12 rounded-full ring-2 ring-[#181818]" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80" alt="User avatar 3" />
                        </div>
                        <div>
                            <p className="font-semibold text-white">{content.trustedBy[language]}</p>
                            <div className="flex items-center gap-1 text-yellow-400">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                                <span className="text-sm text-[#999999] ml-1">4.9/5 stars</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:flex justify-center items-center globe-container">
                    <Globe />
                </div>
            </div>
        </section>
    );
};

export default Hero;
