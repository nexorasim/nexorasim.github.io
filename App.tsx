
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Plans from './components/Plans';
import Compatibility from './components/Compatibility';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Background from './components/Background';
import MobileNav from './components/MobileNav';
import AskAiModal from './components/AskAiModal';
import AskAiButton from './components/AskAiButton';
import { LanguageProvider } from './contexts/LanguageContext';
import Preloader from './components/Preloader';
import Comparison from './components/Comparison';
import Deployment from './components/Deployment';
import Corporate from './components/Corporate';
import Partners from './components/Partners';

const App: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isContentVisible, setIsContentVisible] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isAskAiModalOpen, setAskAiModalOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); 

        const contentTimer = setTimeout(() => {
            setIsContentVisible(true);
        }, 1500);

        return () => {
            clearTimeout(timer);
            clearTimeout(contentTimer);
        };
    }, []);


    return (
        <LanguageProvider>
            <Preloader finished={!isLoading} />
            <div className={`bg-[#1B1B1B] text-white overflow-x-hidden relative min-h-screen transition-opacity duration-1000 ${isContentVisible ? 'opacity-100' : 'opacity-0'}`}>
                <Background />
                <div className="relative z-10">
                    <Header onMenuOpen={() => setMobileMenuOpen(true)} onAskAiOpen={() => setAskAiModalOpen(true)} />
                    <MobileNav 
                        isOpen={isMobileMenuOpen} 
                        onClose={() => setMobileMenuOpen(false)} 
                        onAskAiOpen={() => {
                            setAskAiModalOpen(true);
                            setMobileMenuOpen(false);
                        }} 
                    />
                    <main>
                        <Hero />
                        <Features />
                        <HowItWorks />
                        <Comparison />
                        <Plans />
                        <Deployment />
                        <Compatibility />
                        <Corporate />
                        <Partners />
                        <FAQ />
                    </main>
                    <Footer />
                </div>
                <AskAiButton onOpen={() => setAskAiModalOpen(true)} />
                <AskAiModal isOpen={isAskAiModalOpen} onClose={() => setAskAiModalOpen(false)} />
            </div>
        </LanguageProvider>
    );
};

export default App;