
import React, { useContext } from 'react';
import { FOOTER_LINKS } from '../constants';
import { LanguageContext } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
    const { language } = useContext(LanguageContext);
    const content = {
        description: {
            en: 'Providing innovative eSIM solutions for global travelers since 2022. Stay connected anywhere, anytime.',
            my: '၂၀၂၂ ခုနှစ်မှစ၍ ကမ္ဘာလှည့်ခရီးသွားများအတွက် ဆန်းသစ်သော eSIM ဖြေရှင်းချက်များကို ပံ့ပိုးပေးလျက်ရှိသည်။ နေရာမရွေး၊ အချိန်မရွေး ချိတ်ဆက်ထားပါ။'
        },
        quickLinks: { en: 'Quick Links', my: 'အသုံးဝင်သောလင့်များ' },
        support: { en: 'Support', my: 'အကူအညီ' },
        legal: { en: 'Legal', my: 'ဥပဒေရေးရာ' },
        rights: { en: 'All rights reserved.', my: 'မူပိုင်ခွင့်များရယူပြီး။' }
    }
    return (
        <footer id="contact" className="bg-black/50 py-16 mt-24">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="md:col-span-2 lg:col-span-1">
                        <a href="#home" className="text-3xl text-white font-sora mb-4 inline-block">
                            Nexora<span className="text-[#8D77CC]">SIM</span>
                        </a>
                        <p className="text-[#999999] max-w-xs">
                           {content.description[language]}
                        </p>
                        <div className="flex gap-4 mt-6">
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-[#8D77CC] hover:-translate-y-1"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-[#8D77CC] hover:-translate-y-1"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-[#8D77CC] hover:-translate-y-1"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-[#8D77CC] hover:-translate-y-1"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">{content.quickLinks[language]}</h3>
                        <ul className="space-y-2">
                            {FOOTER_LINKS.quickLinks.map(link => (
                                <li key={link.name.en}><a href={link.href} className="text-[#999999] hover:text-white transition-colors">{link.name[language]}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">{content.support[language]}</h3>
                        <ul className="space-y-2">
                            {FOOTER_LINKS.support.map(link => (
                                <li key={link.name.en}><a href={link.href} className="text-[#999999] hover:text-white transition-colors">{link.name[language]}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">{content.legal[language]}</h3>
                        <ul className="space-y-2">
                            {FOOTER_LINKS.legal.map(link => (
                                <li key={link.name.en}><a href={link.href} className="text-[#999999] hover:text-white transition-colors">{link.name[language]}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="text-center pt-12 mt-12 border-t border-white/10 text-[#999999] text-sm">
                    &copy; {new Date().getFullYear()} NexoraSIM. {content.rights[language]} nexorasim.com
                </div>
            </div>
        </footer>
    );
};

export default Footer;
