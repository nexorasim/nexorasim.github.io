
import React from 'react';

interface AskAiButtonProps {
    onOpen: () => void;
}

const AskAiButton: React.FC<AskAiButtonProps> = ({ onOpen }) => {
    return (
        <button
            onClick={onOpen}
            className="fixed bottom-6 right-6 bg-gradient-to-r from-[#8D77CC] to-[#7BD5FB] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:-translate-y-1 transition-transform z-40 animate-pulse hover:animate-none"
            aria-label="Ask AI"
            title="Ask AI"
        >
            <i className="fas fa-robot text-2xl"></i>
        </button>
    );
};

export default AskAiButton;
