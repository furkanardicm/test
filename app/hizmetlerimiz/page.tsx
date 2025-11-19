'use client';

import PageLayout from '@/components/PageLayout';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Zap, Cog, Wrench, Headphones } from 'lucide-react';

export default function HizmetlerimizPage() {
  const { t, locale } = useLanguage();

  const menuItems = [
    { label: t.pages.services.allServices, href: '/hizmetlerimiz', icon: Cog },
    { label: t.pages.services.energyProduction, href: '/hizmetlerimiz/enerji-uretimi', icon: Zap },
    { label: t.pages.services.maintenance, href: '/hizmetlerimiz/bakim-onarim', icon: Wrench },
    { label: t.pages.services.consulting, href: '/hizmetlerimiz/danismanlik', icon: Headphones },
  ];

  const breadcrumbs = [{ label: t.nav.services }];

  const services = [
    {
      icon: Zap,
      title: t.pages.services.energyProduction,
      description: t.pages.services.energyProductionDesc,
      features: [
        locale === 'tr' ? '24/7 Kesintisiz Üretim' : '24/7 Uninterrupted Production',
        locale === 'tr' ? 'Yüksek Verimlilik' : 'High Efficiency',
        locale === 'tr' ? 'Çevre Dostu' : 'Eco-Friendly',
      ],
    },
    {
      icon: Wrench,
      title: t.pages.services.maintenance,
      description: t.pages.services.maintenanceDesc,
      features: [
        locale === 'tr' ? 'Periyodik Bakım' : 'Periodic Maintenance',
        locale === 'tr' ? 'Acil Müdahale' : 'Emergency Response',
        locale === 'tr' ? 'Yedek Parça Desteği' : 'Spare Parts Support',
      ],
    },
    {
      icon: Headphones,
      title: t.pages.services.consulting,
      description: t.pages.services.consultingDesc,
      features: [
        locale === 'tr' ? 'Proje Geliştirme' : 'Project Development',
        locale === 'tr' ? 'Verimlilik Analizi' : 'Efficiency Analysis',
        locale === 'tr' ? 'Optimizasyon' : 'Optimization',
      ],
    },
  ];

  return (
    <PageLayout
      title={t.nav.services}
      breadcrumbs={breadcrumbs}
      menuItems={menuItems}
      menuTitle={t.nav.services}
    >
      <div className="space-y-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800/30 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:border-[var(--primary)] dark:hover:border-[var(--primary)] transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-lg gradient-bg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-1.5">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-xs">
                        <div className="w-1 h-1 rounded-full gradient-bg"></div>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 rounded-xl border border-green-200 dark:border-green-900">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          {t.pages.services.moreInfo}
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          {t.pages.services.moreInfoDesc}
        </p>
        <button className="px-5 py-2.5 rounded-lg gradient-bg text-white text-sm font-semibold hover:shadow-lg transition-shadow">
          {t.nav.contact}
        </button>
      </div>
    </PageLayout>
  );
}

