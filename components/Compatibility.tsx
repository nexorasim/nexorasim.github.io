
import React, { useState, useEffect, useContext } from 'react';
import { COMPATIBILITY_DATA } from '../constants';
import { DeviceModel } from '../types';
import { LanguageContext } from '../contexts/LanguageContext';

const Compatibility: React.FC = () => {
    const { language } = useContext(LanguageContext);
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedModel, setSelectedModel] = useState('');
    const [models, setModels] = useState<DeviceModel[]>([]);
    const [result, setResult] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
    const [isChecking, setIsChecking] = useState(false);

    const content = {
        title: { en: 'Is Your Device Compatible?', my: 'သင့်စက်ပစ္စည်းသည် ကိုက်ညီမှုရှိပါသလား။' },
        description: { en: 'Most smartphones manufactured after 2018 are eSIM compatible. Select your device brand and model to check instantly.', my: '၂၀၁၈ ခုနှစ်နောက်ပိုင်းထုတ်လုပ်သော စမတ်ဖုန်းအများစုသည် eSIM နှင့် ကိုက်ညီမှုရှိသည်။ သင်၏စက်ပစ္စည်းအမှတ်တံဆိပ်နှင့် မော်ဒယ်ကို ရွေးချယ်ပြီး ချက်ချင်းစစ်ဆေးပါ။' },
        selectBrand: { en: 'Select Brand', my: 'အမှတ်တံဆိပ်ရွေးချယ်ပါ' },
        selectModel: { en: 'Select Model', my: 'မော်ဒယ်ရွေးချယ်ပါ' },
        checkButton: { en: 'Check Compatibility', my: 'ကိုက်ညီမှုစစ်ဆေးပါ' },
        checkingButton: { en: 'Checking...', my: 'စစ်ဆေးနေသည်...' },
        successMessage: { en: 'Congratulations! The {model} is fully compatible with NexoraSIM.', my: 'ဂုဏ်ယူပါတယ်။ {model} သည် NexoraSIM နှင့် အပြည့်အဝကိုက်ညီမှုရှိပါသည်။' },
        errorMessage: { en: 'Unfortunately, the {model} does not support eSIM technology.', my: 'ဝမ်းနည်းပါသည်၊ {model} သည် eSIM နည်းပညာကို အထောက်အပံ့မပေးပါ။' },
        viewList: { en: "Can't find your device? View full list →", my: 'သင့်စက်ကို ရှာမတွေ့ဘူးလား? စာရင်းအပြည့်အစုံကြည့်ရန် →' }
    };

    useEffect(() => {
        if (selectedBrand) {
            const brandData = COMPATIBILITY_DATA.find(b => b.brand === selectedBrand);
            setModels(brandData ? brandData.models : []);
            setSelectedModel('');
            setResult(null);
        } else {
            setModels([]);
            setSelectedModel('');
            setResult(null);
        }
    }, [selectedBrand]);

    const handleCheck = () => {
        if (!selectedBrand || !selectedModel) return;

        setIsChecking(true);
        setResult(null);

        setTimeout(() => {
            const modelData = models.find(m => m.name === selectedModel);
            if (modelData?.compatible) {
                setResult({
                    type: 'success',
                    message: content.successMessage[language].replace('{model}', selectedModel),
                });
            } else {
                setResult({
                    type: 'error',
                    message: content.errorMessage[language].replace('{model}', selectedModel),
                });
            }
            setIsChecking(false);
        }, 1000);
    };
    
    const selectClass = "w-full bg-white/10 border border-white/20 rounded-full px-6 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8D77CC] transition-all appearance-none";

    return (
        <section id="compatibility" className="py-24 bg-black/30">
            <div className="container mx-auto px-4 text-center max-w-3xl">
                <h2 className="text-4xl font-bold mb-6 font-sora">{content.title[language]}</h2>
                <p className="text-lg text-[#999999] mb-8">
                    {content.description[language]}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto items-center">
                    <div className="relative">
                        <select
                            value={selectedBrand}
                            onChange={(e) => setSelectedBrand(e.target.value)}
                            className={selectClass}
                        >
                            <option value="">{content.selectBrand[language]}</option>
                            {COMPATIBILITY_DATA.map(brand => (
                                <option key={brand.brand} value={brand.brand}>{brand.brand}</option>
                            ))}
                        </select>
                        <i className="fas fa-chevron-down absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                    </div>
                    <div className="relative">
                        <select
                            value={selectedModel}
                            onChange={(e) => setSelectedModel(e.target.value)}
                            className={selectClass}
                            disabled={!selectedBrand}
                        >
                            <option value="">{content.selectModel[language]}</option>
                            {models.map(model => (
                                <option key={model.name} value={model.name}>{model.name}</option>
                            ))}
                        </select>
                        <i className="fas fa-chevron-down absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                    </div>
                </div>
                <div className="mt-6">
                     <button
                        onClick={handleCheck}
                        disabled={isChecking || !selectedModel}
                        className="bg-gradient-to-r from-[#8D77CC] to-[#7BD5FB] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(141,119,204,0.3)] disabled:opacity-50 disabled:cursor-not-allowed w-full max-w-xs mx-auto"
                    >
                        {isChecking ? (
                            <><i className="fas fa-spinner fa-spin mr-2"></i>{content.checkingButton[language]}</>
                        ) : content.checkButton[language]}
                    </button>
                </div>
                {result && (
                    <div className={`mt-6 p-4 rounded-lg max-w-2xl mx-auto transition-all duration-300 animate-fade-in ${
                        result.type === 'success'
                            ? 'bg-[#B2F79C]/10 border border-[#B2F79C]/20 text-[#B2F79C]'
                            : 'bg-red-500/10 border border-red-500/20 text-red-400'
                    }`}>
                        <i className={`fas ${result.type === 'success' ? 'fa-check-circle' : 'fa-times-circle'} mr-2`}></i>
                        {result.message}
                    </div>
                )}
                <div className="mt-8">
                    <a href="#" className="text-[#7BD5FB] hover:underline">
                        {content.viewList[language]}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Compatibility;
