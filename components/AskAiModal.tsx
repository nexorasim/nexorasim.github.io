
import React, { useState, useEffect, useRef, useContext } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import { LanguageContext } from '../contexts/LanguageContext';

interface Message {
    role: 'user' | 'model';
    text: string;
}

interface AskAiModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SYSTEM_INSTRUCTION = `You are a friendly and knowledgeable customer support agent for NexoraSIM, a global eSIM provider. Your goal is to assist users with their questions about our services. Provide clear, concise, and helpful answers based **only** on the information provided below.

**IMPORTANT**: You are fully bilingual in English and Myanmar. You MUST detect the language of the user's question and ALWAYS respond in that same language.

**Core Product Information:**
- **Product:** NexoraSIM offers digital eSIMs for high-speed data in over 190 countries.
- **What is an eSIM?** It's a digital SIM card embedded in a device, eliminating the need for a physical card.
- **Key Benefits:** Instant activation, global coverage, cost savings up to 90% over roaming, and environmentally friendly (no plastic).

**How to Get Started (3 Steps):**
1.  **Choose Plan:** Select a destination and data plan on our website.
2.  **Install eSIM:** Scan the QR code you receive after purchase.
3.  **Activate & Connect:** Activate the plan upon arrival at your destination to connect to the local network.

**Popular Plans (Provide these as examples if asked about pricing):**
- **Global (130+ Countries):** 1GB/7 Days for $9.90, 5GB/30 Days for $34.90 (Best Value), 10GB/60 Days for $59.90.
- **Regional (e.g., Europe):** 10GB/30 Days for $29.90.
- **Local (e.g., Thailand):** Unlimited Data/8 Days for $9.90.

**Device Compatibility:**
- Most smartphones made after 2018 are compatible (e.g., iPhone XR and newer, Google Pixel 2 and newer, Samsung Galaxy S20 and newer).
- There is a compatibility checker on the website for specific models.
- The user's device must be carrier-unlocked.

**Common Questions:**
- **Can I keep my number?** Yes, the eSIM works alongside your main SIM. You can use NexoraSIM for data and your home number for calls/texts.
- **Hotspot/Tethering?** Yes, most plans support it. Check plan details to confirm.
- **Topping up?** Yes, you can easily top up data on our website if you run out.
- **Phone Calls?** Our plans are data-only. Use apps like WhatsApp or FaceTime for calls over data.

**Your Role:**
- Be helpful and friendly.
- If you cannot answer a question from the information above, politely state: "I don't have that specific information. For more detailed assistance, please contact our 24/7 support team through the 'Contact Us' section of our website." Do not invent answers.`;

const AskAiModal: React.FC<AskAiModalProps> = ({ isOpen, onClose }) => {
    const { language } = useContext(LanguageContext);
    const [chat, setChat] = useState<Chat | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const content = {
        welcomeMessage: {
            en: "Hello! I'm the NexoraSIM AI assistant. How can I help you with your eSIM questions today?",
            my: "မင်္ဂလာပါ! ကျွန်တော်က NexoraSIM AI လက်ထောက်ပါ။ သင်၏ eSIM မေးခွန်းများကို ကျွန်တော် ဘယ်လိုကူညီပေးရမလဲ။"
        },
        suggestedQuestions: [
            { en: 'Is my phone compatible?', my: 'ကျွန်ုပ်၏ဖုန်းသည် ကိုက်ညီမှုရှိပါသလား။' },
            { en: 'How do I set up my eSIM?', my: 'eSIM ကို ဘယ်လိုတပ်ဆင်ရမလဲ။' },
            { en: 'What are the benefits of an eSIM?', my: 'eSIM ၏ အကျိုးကျေးဇူးများကား အဘယ်နည်း။' },
        ],
        tryOne: { en: 'Or try one of these:', my: 'သို့မဟုတ် ဤအရာများထဲမှ တစ်ခုကို စမ်းကြည့်ပါ:' },
        placeholder: { en: 'Ask about eSIMs, plans, compatibility...', my: 'eSIMs၊ package များ၊ ကိုက်ညီမှုအကြောင်းမေးပါ...' },
        unavailable: { en: "Sorry, the AI assistant is currently unavailable.", my: "တောင်းပန်ပါတယ်၊ AI လက်ထောက် လက်ရှိတွင် မရနိုင်ပါ။" },
        errorMessage: { en: "Sorry, something went wrong. Please try again.", my: "တောင်းပန်ပါတယ်၊ တစ်ခုခုမှားယွင်းသွားပါတယ်။ ကျေးဇူးပြု၍ နောက်တစ်ကြိမ်ကြိုးစားပါ။" },
        connectionError: { en: 'I seem to be having trouble connecting. Please check your connection or try again later.', my: 'ချိတ်ဆက်ရာတွင် အခက်အခဲရှိနေပုံရသည်။ ကျေးဇူးပြု၍ သင်၏ချိတ်ဆက်မှုကိုစစ်ဆေးပါ သို့မဟုတ် နောက်မှထပ်ကြိုးစားပါ။' }
    };

    useEffect(() => {
        if (isOpen) {
            try {
                const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
                const chatSession = ai.chats.create({
                    model: 'gemini-2.5-flash',
                    config: {
                      systemInstruction: SYSTEM_INSTRUCTION,
                    }
                });
                setChat(chatSession);
                setMessages([
                    { role: 'model', text: content.welcomeMessage[language] }
                ]);
                setError(null);
            } catch (e) {
                console.error("Failed to initialize AI Chat:", e);
                setError(content.unavailable[language]);
            }
        } else {
            setMessages([]);
            setUserInput('');
            setIsLoading(false);
            setError(null);
            setChat(null);
        }
    }, [isOpen, language]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);

    const handleSendMessage = async (messageText: string) => {
        if (!messageText.trim() || isLoading || !chat) return;

        const newUserMessage: Message = { role: 'user', text: messageText };
        setMessages(prev => [...prev, newUserMessage]);
        setIsLoading(true);
        setUserInput('');
        setError(null);

        try {
            const result = await chat.sendMessageStream({ message: messageText });
            
            let modelResponse = '';
            setMessages(prev => [...prev, { role: 'model', text: '' }]);

            for await (const chunk of result) {
                modelResponse += chunk.text;
                setMessages(prev => {
                    const newMessages = [...prev];
                    newMessages[newMessages.length - 1].text = modelResponse;
                    return newMessages;
                });
            }
        } catch (e) {
            console.error("Error sending message:", e);
            setError(content.errorMessage[language]);
            setMessages(prev => [...prev, { role: 'model', text: content.connectionError[language] }]);
        } finally {
            setIsLoading(false);
        }
    };
    
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 font-manrope">
            <div className="bg-[#121212] border border-[#8D77CC]/50 rounded-xl p-4 sm:p-6 max-w-2xl w-full h-[90vh] max-h-[700px] flex flex-col shadow-2xl shadow-[#8D77CC]/20">
                <div className="flex justify-between items-center mb-4 flex-shrink-0">
                    <h2 className="text-xl font-bold font-sora flex items-center gap-3">
                        <i className="fas fa-robot text-[#8D77CC]"></i>
                        <span>Ask NexoraSIM AI</span>
                    </h2>
                    <button onClick={onClose} className="text-3xl text-gray-400 hover:text-white transition-colors">&times;</button>
                </div>
                
                <div className="flex-grow overflow-y-auto pr-2 space-y-4">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-md p-3 rounded-lg ${msg.role === 'user' ? 'bg-[#8D77CC] text-white rounded-br-none' : 'bg-white/10 text-gray-200 rounded-bl-none'}`}>
                                <p className="whitespace-pre-wrap">{msg.text}</p>
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start">
                             <div className="max-w-md p-3 rounded-lg bg-white/10 text-gray-200 rounded-bl-none">
                                <div className="flex items-center gap-2">
                                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></span>
                                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-150"></span>
                                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-300"></span>
                                </div>
                            </div>
                        </div>
                    )}
                     {messages.length === 1 && !isLoading && (
                        <div className="pt-4 border-t border-white/10">
                            <p className="text-sm text-gray-400 mb-3">{content.tryOne[language]}</p>
                            <div className="flex flex-wrap gap-2">
                                {content.suggestedQuestions.map(q => (
                                    <button 
                                        key={q.en}
                                        onClick={() => handleSendMessage(q[language])}
                                        className="bg-white/10 text-white text-sm px-3 py-1.5 rounded-full hover:bg-white/20 transition-colors"
                                    >
                                        {q[language]}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
                
                {error && <p className="text-red-400 text-sm mt-2 text-center">{error}</p>}
                
                <div className="mt-4 pt-4 border-t border-white/10 flex-shrink-0">
                    <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(userInput); }} className="flex items-center gap-3">
                        <input 
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            placeholder={content.placeholder[language]}
                            className="flex-grow bg-white/5 border border-white/20 rounded-full px-5 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8D77CC] transition-all"
                            disabled={isLoading}
                        />
                        <button 
                            type="submit"
                            disabled={isLoading || !userInput.trim()}
                            className="bg-gradient-to-r from-[#8D77CC] to-[#7BD5FB] text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        >
                           <i className="fas fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AskAiModal;