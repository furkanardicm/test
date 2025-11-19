'use client';

import { Target, Eye, Award, Users } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Target,
      title: t.about.mission,
      description: t.about.missionText,
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Eye,
      title: t.about.vision,
      description: t.about.visionText,
      color: 'from-purple-500 to-purple-600',
    },
  ];

  const values = [
    {
      icon: Award,
      title: t.pages.about.excellence,
      description: t.pages.about.excellenceDesc,
    },
    {
      icon: Users,
      title: t.pages.about.reliability,
      description: t.pages.about.reliabilityDesc,
    },
  ];

  return (
    <section id="hakkimizda" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
            <span className="text-sm font-semibold gradient-text">{t.about.subtitle}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t.about.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t.about.description}
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative group bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <Icon className="w-full h-full" />
                </div>
                <div className="relative">
                  <div className={`inline-flex w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} items-center justify-center mb-4 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Values */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-700">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {t.pages.about.values}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg gradient-bg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

