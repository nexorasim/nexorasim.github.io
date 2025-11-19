import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const translations = {
  en: {
    nav: {
      features: 'Features',
      architecture: 'Architecture',
      compliance: 'Compliance',
      iot: 'IoT Platform',
      contact: 'Contact'
    },
    hero: {
      title: 'Premium IoT eSIM Entertainment Server',
      subtitle: 'Award-winning platform with Azure integration, real-time telemetry, and enterprise-grade security',
      cta: 'Explore Platform',
      demo: 'Live Demo'
    },
    features: {
      title: 'Core Features',
      iccid: {
        title: 'ICCID Lookup',
        description: 'Real-time ICCID validation and device identification'
      },
      esim: {
        title: 'eSIM Profile Generation',
        description: 'GSMA RSP 2.3+ compliant profile provisioning'
      },
      compatibility: {
        title: 'Device Compatibility',
        description: 'Comprehensive device matrix and testing suite'
      }
    }
  },
  mm: {
    nav: {
      features: 'လုပ်ဆောင်ချက်များ',
      architecture: 'ဗိသုကာ',
      compliance: 'လိုက်နာမှု',
      iot: 'IoT ပလပ်ဖောင်း',
      contact: 'ဆက်သွယ်ရန်'
    },
    hero: {
      title: 'ပရီမီယံ IoT eSIM ဖျော်ဖြေရေး ဆာဗာ',
      subtitle: 'Azure ပေါင်းစပ်မှု၊ အချိန်နှင့်တပြေးညီ telemetry နှင့် enterprise-grade လုံခြုံရေးဖြင့် ဆုရရှိသော ပလပ်ဖောင်း',
      cta: 'ပလပ်ဖောင်းကို လေ့လာပါ',
      demo: 'တိုက်ရိုက် သရုပ်ပြ'
    },
    features: {
      title: 'အဓိက လုပ်ဆောင်ချက်များ',
      iccid: {
        title: 'ICCID ရှာဖွေမှု',
        description: 'အချိန်နှင့်တပြေးညီ ICCID အတည်ပြုခြင်းနှင့် စက်ပစ္စည်း ခွဲခြားသတ်မှတ်ခြင်း'
      },
      esim: {
        title: 'eSIM ပရိုဖိုင် ထုတ်လုပ်ခြင်း',
        description: 'GSMA RSP 2.3+ လိုက်နာသော ပရိုဖိုင် ပံ့ပိုးမှု'
      },
      compatibility: {
        title: 'စက်ပစ္စည်း လိုက်ဖက်မှု',
        description: 'ပြည့်စုံသော စက်ပစ္စည်း matrix နှင့် စမ်းသပ်မှု suite'
      }
    }
  }
}