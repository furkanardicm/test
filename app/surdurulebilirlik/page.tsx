'use client';

import PageLayout from '@/components/PageLayout';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Leaf, Droplets, Wind, Recycle, TreePine, Sun } from 'lucide-react';

export default function SurdurulebilirlikPage() {
  const { t } = useLanguage();

  const menuItems = [
    { label: t.pages.sustainability.overview, href: '/surdurulebilirlik', icon: Leaf },
    { label: t.pages.sustainability.envPolicy, href: '/surdurulebilirlik/cevre', icon: TreePine },
    { label: t.pages.sustainability.reports, href: '/surdurulebilirlik/raporlar', icon: Sun },
  ];

  const breadcrumbs = [{ label: t.nav.sustainability }];

  const initiatives = [
    {
      icon: Droplets,
      title: t.pages.sustainability.waterManagement,
      description: t.pages.sustainability.waterDesc,
      metrics: [
        { label: t.pages.sustainability.waterSavings, value: '45%' },
        { label: t.pages.sustainability.recycling, value: '80%' },
      ],
    },
    {
      icon: Wind,
      title: t.pages.sustainability.airQuality,
      description: t.pages.sustainability.airDesc,
      metrics: [
        { label: t.pages.sustainability.emissionReduction, value: '60%' },
        { label: t.pages.sustainability.cleanEnergy, value: '95%' },
      ],
    },
    {
      icon: Recycle,
      title: t.pages.sustainability.wasteManagement,
      description: t.pages.sustainability.wasteDesc,
      metrics: [
        { label: t.pages.sustainability.recyclingRate, value: '92%' },
        { label: t.pages.sustainability.wasteReduction, value: '75%' },
      ],
    },
    {
      icon: TreePine,
      title: t.pages.sustainability.greenSpaces,
      description: t.pages.sustainability.greenDesc,
      metrics: [
        { label: t.pages.sustainability.treeCount, value: '10K+' },
        { label: t.pages.sustainability.greenArea, value: '5000m²' },
      ],
    },
  ];

  const commitments = [
    t.pages.sustainability.carbonNeutral,
    t.pages.sustainability.renewableIntegration,
    t.pages.sustainability.sustainableResource,
    t.pages.sustainability.envEducation,
    t.pages.sustainability.communityParticipation,
  ];

  return (
    <PageLayout
      title={t.nav.sustainability}
      breadcrumbs={breadcrumbs}
      menuItems={menuItems}
      menuTitle={t.nav.sustainability}
    >
      <div className="space-y-8">
        {/* Introduction */}
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          {t.pages.sustainability.intro}
        </p>

        {/* Initiatives */}
        <div className="grid md:grid-cols-2 gap-5">
          {initiatives.map((initiative, index) => {
            const Icon = initiative.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800/30 rounded-xl p-5 border border-gray-200 dark:border-gray-800"
              >
                <div className="flex items-start space-x-3 mb-3">
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">
                      {initiative.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
                      {initiative.description}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                  {initiative.metrics.map((metric, idx) => (
                    <div key={idx}>
                      <div className="text-xl font-bold gradient-text">{metric.value}</div>
                      <div className="text-[10px] text-gray-600 dark:text-gray-400 leading-tight">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Commitments */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 rounded-xl p-6 border border-green-200 dark:border-green-900">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center">
              <Sun className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              {t.pages.sustainability.commitments}
            </h3>
          </div>
          <ul className="space-y-2.5">
            {commitments.map((commitment, index) => (
              <li key={index} className="flex items-start space-x-2.5">
                <div className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-[10px] font-bold">{index + 1}</span>
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-300">{commitment}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { value: '50%', label: t.pages.sustainability.carbonReduction },
            { value: '100%', label: t.pages.sustainability.greenEnergy },
            { value: '85%', label: t.pages.sustainability.efficiency },
            { value: '0', label: t.pages.sustainability.wasteTarget },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-gray-50 dark:bg-gray-800/30 rounded-lg border border-gray-200 dark:border-gray-800"
            >
              <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-[11px] text-gray-600 dark:text-gray-400 leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}

