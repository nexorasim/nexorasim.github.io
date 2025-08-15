
import React, { useState, useEffect, useContext } from 'react';
import { FAQ_DATA } from '../constants';
import { FAQItem } from '../types';
import { LanguageContext } from '../contexts/LanguageContext';

declare const gsap: any;
declare const ScrollTrigger: any;

const AccordionItem: React.FC<{ item: FAQItem, isOpen: boolean, onClick: () => void }> = ({ item, isOpen, onClick }) => {
    const contentRef = React.useRef<HTMLDivElement>(null);
    const { language } = useContext(LanguageContext);
    
    useEffect(() => {
        if (typeof gsap !== 'undefined') {
            gsap.to(contentRef.current, {
                height: isOpen ? "auto" : 0,
                duration: 0.4,
                ease: "power3.inOut"
            });
        }
    }, [isOpen]);

    return (
        <div className="border-b border-white/10">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center text-left py-6"
            >
                <span className="text-lg font-medium text-white">{item.question[language]}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                    <i className="fas fa-plus text-[#8D77CC]"></i>
                </span>
            </button>
            <div ref={contentRef} className="overflow-hidden" style={{ height: 0 }}>
                <p className="pb-6 text-[#999999]">{item.answer[language]}</p>
            </div>
        </div>
    );
};

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const { language } = useContext(LanguageContext);
    
    useEffect(() => {
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
             gsap.from(".faq-item", {
                scrollTrigger: {
                    trigger: "#faq",
                    start: "top 85%",
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

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const title = {
        en: 'Frequently Asked Questions',
        my: 'အမေးများသောမေးခွန်းများ'
    }

    return (
        <section id="faq" className="py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 font-sora">{title[language]}</h2>
                <div className="max-w-3xl mx-auto">
                    {FAQ_DATA.map((item, index) => (
                        <div className="faq-item" key={index}>
                           <AccordionItem
                                item={item}
                                isOpen={openIndex === index}
                                onClick={() => handleToggle(index)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
