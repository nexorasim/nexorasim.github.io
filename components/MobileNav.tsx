
import React, { useContext } from 'react';
import { NAV_LINKS } from '../constants';
import { LanguageContext } from '../contexts/LanguageContext';

interface MobileNavProps {
    isOpen: boolean;
    onClose: () => void;
    onAskAiOpen: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose, onAskAiOpen }) => {
    const { language } = useContext(LanguageContext);

    return (
        <div className={`fixed top-0 right-0 h-full w-72 bg-[#1B1B1B] z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
            <div className="p-6 flex justify-end">
                <button onClick={onClose} className="text-white text-2xl">
                    <i className="fas fa-times"></i>
                </button>
            </div>
            <nav className="mt-8 flex flex-col justify-between h-[calc(100%-100px)]">
                <ul>
                    {NAV_LINKS.map((link) => (
                        <li key={link.href} className="py-2">
                            <a 
                                href={link.href} 
                                className="block px-6 text-white text-lg hover:text-[#8D77CC]" 
                                onClick={(e) => {
                                    if (link.href === '#ask-ai') {
                                        e.preventDefault();
                                        onAskAiOpen();
                                    }
                                    onClose();
                                }}
                            >
                                {link.name[language]}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="px-6 pb-6">
                     <button className="w-full bg-gradient-to-r from-[#8D77CC] to-[#7BD5FB] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5">
                        {language === 'en' ? 'Get eSIM' : 'eSIM ရယူပါ'}
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default MobileNav;
