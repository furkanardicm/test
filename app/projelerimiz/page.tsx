'use client';

import PageLayout from '@/components/PageLayout';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { FolderOpen, MapPin, Calendar, Zap } from 'lucide-react';

export default function ProjelerimizPage() {
  const { t } = useLanguage();

  const menuItems = [
    { label: t.pages.projects.allProjects, href: '/projelerimiz', icon: FolderOpen },
    { label: t.pages.projects.ongoing, href: '/projelerimiz/devam-eden', icon: Calendar },
    { label: t.pages.projects.completed, href: '/projelerimiz/tamamlanan', icon: Zap },
  ];

  const breadcrumbs = [{ label: t.nav.projects }];

  const projects = [
    {
      name: t.pages.projects.istanbulPlant,
      location: 'İstanbul, Türkiye',
      capacity: '500 MW',
      status: t.pages.projects.ongoing,
      year: '2024-2025',
      description: t.pages.projects.istanbulDesc,
      progress: 75,
    },
    {
      name: t.pages.projects.ankaraPlant,
      location: 'Ankara, Türkiye',
      capacity: '350 MW',
      status: t.pages.projects.completed,
      year: '2023',
      description: t.pages.projects.ankaraDesc,
      progress: 100,
    },
    {
      name: t.pages.projects.izmirPlant,
      location: 'İzmir, Türkiye',
      capacity: '400 MW',
      status: t.pages.projects.completed,
      year: '2022',
      description: t.pages.projects.izmirDesc,
      progress: 100,
    },
  ];

  return (
    <PageLayout
      title={t.nav.projects}
      breadcrumbs={breadcrumbs}
      menuItems={menuItems}
      menuTitle={t.nav.projects}
    >
      <div className="space-y-5">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-gray-800/30 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-[var(--primary)] dark:hover:border-[var(--primary)] transition-colors"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {project.name}
                  </h3>
                  <div className="flex flex-wrap gap-3 text-xs text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[var(--primary)]" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Zap className="w-3.5 h-3.5 text-[var(--primary)]" />
                      <span>{project.capacity}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[var(--primary)]" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>
                <span
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                    project.progress === 100
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">
                    {t.pages.projects.progress}
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {project.progress}%
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full gradient-bg transition-all duration-500"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 rounded-xl border border-green-200 dark:border-green-900">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          {t.pages.projects.newProjects}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          {t.pages.projects.newProjectsDesc}
        </p>
        <button className="px-5 py-2.5 rounded-lg gradient-bg text-white text-sm font-semibold hover:shadow-lg transition-shadow">
          {t.pages.projects.contactUs}
        </button>
      </div>
    </PageLayout>
  );
}

