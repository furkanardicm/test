'use client';

import PageLayout from '@/components/PageLayout';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Building2, Users, TrendingUp, Award } from 'lucide-react';

export default function HakkimizdaPage() {
  const { t } = useLanguage();

  const menuItems = [
    { label: t.pages.about.companyProfile, href: '/hakkimizda', icon: Building2 },
    { label: t.pages.about.managementTeam, href: '/hakkimizda/yonetim', icon: Users },
    { label: t.pages.about.history, href: '/hakkimizda/tarihce', icon: TrendingUp },
    { label: t.pages.about.qualityCert, href: '/hakkimizda/sertifikalar', icon: Award },
  ];

  const breadcrumbs = [{ label: t.nav.about }];

  return (
    <PageLayout
      title={t.nav.about}
      breadcrumbs={breadcrumbs}
      menuItems={menuItems}
      menuTitle={t.nav.about}
    >
      <div className="space-y-8">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          {t.about.description}
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 rounded-xl p-6 border border-green-200 dark:border-green-900">
            <div className="w-11 h-11 rounded-lg gradient-bg flex items-center justify-center mb-4">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {t.about.mission}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {t.about.missionText}
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 rounded-xl p-6 border border-blue-200 dark:border-blue-900">
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {t.about.vision}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {t.about.visionText}
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
          {t.pages.about.whyChooseUs}
        </h2>

        <div className="grid gap-4">
          {[
            {
              title: t.pages.about.techInfra,
              description: t.pages.about.techInfraDesc,
            },
            {
              title: t.pages.about.expTeam,
              description: t.pages.about.expTeamDesc,
            },
            {
              title: t.pages.about.envAware,
              description: t.pages.about.envAwareDesc,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-5 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <div className="w-7 h-7 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white font-bold text-sm">{index + 1}</span>
              </div>
              <div>
                <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-1.5">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}

