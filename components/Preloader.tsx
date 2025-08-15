
import React, { useEffect, useState } from 'react';

interface PreloaderProps {
    finished: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ finished }) => {
    const [isHiding, setIsHiding] = useState(false);

    useEffect(() => {
        if (finished) {
            const timer = setTimeout(() => setIsHiding(true), 100);
            return () => clearTimeout(timer);
        }
    }, [finished]);

    return (
        <div 
            className={`fixed inset-0 bg-[#1B1B1B] z-[100] flex flex-col justify-center items-center transition-opacity duration-1000 ${finished ? 'opacity-0' : 'opacity-100'} ${isHiding ? 'pointer-events-none' : ''}`}
        >
            <div className={`transition-all duration-700 ease-in-out ${finished ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'}`}>
                <h1 className="text-5xl text-white font-sora mb-4">
                    Nexora<span className="text-[#8D77CC]">SIM</span>
                </h1>
                <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#8D77CC] to-[#7BD5FB] animate-preloader-bar"></div>
                </div>
            </div>
            <style>{`
                @keyframes preloader-bar-animation {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .animate-preloader-bar {
                    animation: preloader-bar-animation 1.5s infinite linear;
                }
            `}</style>
        </div>
    );
};

export default Preloader;
