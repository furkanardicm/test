'use client';

import { Languages } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  const toggleLanguage = () => {
    setLocale(locale === 'tr' ? 'en' : 'tr');
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors ${className || ''}`}
      aria-label="Toggle Language"
    >
      <Languages className="w-5 h-5" />
      <span className="font-medium text-sm uppercase">{locale}</span>
    </button>
  );
}

