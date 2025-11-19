'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Partners() {
  const { t } = useLanguage();

  const partners = [
    { name: 'Siemens Energy', logo: 'https://logo.clearbit.com/siemens-energy.com' },
    { name: 'General Electric', logo: 'https://logo.clearbit.com/ge.com' },
    { name: 'ABB Power', logo: 'https://logo.clearbit.com/abb.com' },
    { name: 'Schneider Electric', logo: 'https://logo.clearbit.com/se.com' },
    { name: 'BOTAŞ', logo: 'https://logo.clearbit.com/botas.gov.tr' },
    { name: 'TEİAŞ', logo: 'https://logo.clearbit.com/teias.gov.tr' },
    { name: 'Mitsubishi Power', logo: 'https://logo.clearbit.com/power.mhi.com' },
    { name: 'Alstom', logo: 'https://logo.clearbit.com/alstom.com' },
    { name: 'Honeywell', logo: 'https://logo.clearbit.com/honeywell.com' },
    { name: 'EÜAŞ', logo: 'https://logo.clearbit.com/euas.gov.tr' },
    { name: 'Shell Energy', logo: 'https://logo.clearbit.com/shell.com' },
    { name: 'Zorlu Enerji', logo: 'https://logo.clearbit.com/zorluenerji.com.tr' },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
            <span className="text-sm font-semibold gradient-text">{t.partners.subtitle}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t.partners.title}
          </h2>
        </div>

        {/* Partners Logo Grid - Simple & Clean */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group flex items-center justify-center p-6 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="w-full h-auto max-w-[140px] object-contain filter transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Info Text */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            {t.partners.description}
          </p>
        </div>
      </div>
    </section>
  );
}

