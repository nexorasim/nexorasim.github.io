
import React, { useEffect, useContext } from 'react';
import { NAV_LINKS } from '../constants';
import { LanguageContext } from '../contexts/LanguageContext';

interface HeaderProps {
    onMenuOpen: () => void;
    onAskAiOpen: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuOpen, onAskAiOpen }) => {
    const { language, toggleLanguage } = useContext(LanguageContext);

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('nav a');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.forEach(link => {
                        const linkHref = link.getAttribute('href');
                         if (linkHref !== '#ask-ai') {
                            link.classList.remove('text-white', 'after:w-full');
                            link.classList.add('text-[#999999]', 'after:w-0');
                         }
                        if (linkHref === `#${entry.target.id}`) {
                            link.classList.add('text-white', 'after:w-full');
                            link.classList.remove('text-[#999999]', 'after:w-0');
                        }
                    });
                }
            });
        }, { rootMargin: "-50% 0px -50% 0px" });

        sections.forEach(section => {
            observer.observe(section);
        });
        
        const homeLink = document.querySelector('nav a[href="#home"]');
        if (homeLink) {
             homeLink.classList.add('text-white', 'after:w-full');
             homeLink.classList.remove('text-[#999999]', 'after:w-0');
        }

        return () => sections.forEach(section => observer.unobserve(section));
    }, []);

    return (
        <header className="container mx-auto px-4 py-4 relative z-20">
            <div className="flex justify-between items-center">
                <a href="#home" className="text-3xl text-white font-sora">
                    Nexora<span className="text-[#8D77CC]">SIM</span>
                </a>
                
                <nav className="hidden lg:block">
                    <ul className="flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={(e) => {
                                        if (link.href === '#ask-ai') {
                                            e.preventDefault();
                                            onAskAiOpen();
                                        }
                                    }}
                                    className={`text-[#999999] font-medium transition-colors duration-300 relative hover:text-white after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:bg-[#8D77CC] after:transition-all after:duration-300 after:w-0`}
                                >
                                    {link.name[language]}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex items-center gap-4">
                    <button onClick={toggleLanguage} className="bg-white/10 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-colors duration-300 hover:bg-white/20 text-sm">
                        <span className={language === 'en' ? 'font-bold' : ''}>EN</span> | <span className={language === 'my' ? 'font-bold' : ''}>မြန်မာ</span>
                    </button>
                    <button className="hidden sm:block bg-gradient-to-r from-[#8D77CC] to-[#7BD5FB] text-white font-semibold px-6 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(141,119,204,0.3)]">
                        {language === 'en' ? 'Get eSIM' : 'eSIM ရယူပါ'}
                    </button>
                    <button className="lg:hidden text-white text-2xl" onClick={onMenuOpen}>
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
