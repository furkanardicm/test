'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import PageHeader from './PageHeader';
import PageMenu, { MenuItem } from './PageMenu';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageLayoutProps {
  title: string;
  breadcrumbs?: BreadcrumbItem[];
  coverImage?: string;
  menuItems?: MenuItem[];
  menuTitle?: string;
  children: ReactNode;
}

export default function PageLayout({
  title,
  breadcrumbs,
  coverImage,
  menuItems,
  menuTitle,
  children,
}: PageLayoutProps) {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950">
      <PageHeader coverImage={coverImage} />
      
      {/* Container with Floating Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 pb-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Main Content Card */}
          <div className="flex-1 w-full">
            <div className="bg-white dark:bg-gray-900 shadow-2xl rounded-lg overflow-hidden">
              {/* Title & Breadcrumb Section */}
              <div className="px-8 sm:px-10 lg:px-12 py-10 text-center">
                {/* Title */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  {title}
                </h1>

                {/* Breadcrumbs */}
                {breadcrumbs && breadcrumbs.length > 0 && (
                  <nav className="flex items-center justify-center space-x-2 text-sm">
                    <Link
                      href="/"
                      className="text-gray-500 dark:text-gray-400 hover:text-[var(--primary)] transition-colors font-medium"
                    >
                      {t.breadcrumb.home}
                    </Link>
                    {breadcrumbs.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                        {item.href ? (
                          <Link
                            href={item.href}
                            className="text-gray-500 dark:text-gray-400 hover:text-[var(--primary)] transition-colors font-medium"
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <span className="text-gray-900 dark:text-gray-100 font-semibold">
                            {item.label}
                          </span>
                        )}
                      </div>
                    ))}
                  </nav>
                )}
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>

              {/* Content Section */}
              <div className="px-8 sm:px-10 lg:px-12 py-10 lg:py-12">
                {children}
              </div>
            </div>
          </div>
          
          {/* Floating Sidebar - Independent */}
          {menuItems && menuItems.length > 0 && (
            <div className="w-full lg:w-80 lg:sticky lg:top-28">
              <PageMenu items={menuItems} title={menuTitle} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

