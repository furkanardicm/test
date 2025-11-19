'use client';

import PageLayout from '@/components/PageLayout';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function IletisimPage() {
  const { t } = useLanguage();

  const menuItems = [
    { label: t.pages.contact.contactInfo, href: '/iletisim', icon: Phone },
    { label: t.pages.contact.sendMessage, href: '/iletisim#form', icon: Send },
    { label: t.pages.contact.ourOffices, href: '/iletisim/ofisler', icon: MapPin },
  ];

  const breadcrumbs = [{ label: t.nav.contact }];

  const contactInfo = [
    {
      icon: Phone,
      title: t.footer.phone,
      details: ['+90 (212) 123 45 67', '+90 (212) 123 45 68'],
    },
    {
      icon: Mail,
      title: t.footer.email,
      details: ['info@termiksantral.com.tr', 'destek@termiksantral.com.tr'],
    },
    {
      icon: MapPin,
      title: t.footer.address,
      details: ['Enerji Mahallesi, Santral Caddesi No:1', '34000 İstanbul, Türkiye'],
    },
    {
      icon: Clock,
      title: t.pages.contact.workingHours,
      details: [
        t.pages.contact.weekdays,
        t.pages.contact.saturday,
      ],
    },
  ];

  return (
    <PageLayout
      title={t.nav.contact}
      breadcrumbs={breadcrumbs}
      menuItems={menuItems}
      menuTitle={t.nav.contact}
    >
      <div className="space-y-8">
        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800/30 rounded-lg p-5 border border-gray-200 dark:border-gray-800"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1.5">
                      {info.title}
                    </h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Form */}
        <div id="form" className="bg-gray-50 dark:bg-gray-800/30 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            {t.pages.contact.sendUsMessage}
          </h3>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  {t.pages.contact.fullName}
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2.5 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]/20 outline-none transition-all"
                  placeholder={t.pages.contact.fullNamePlaceholder}
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  {t.footer.email}
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2.5 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]/20 outline-none transition-all"
                  placeholder={t.pages.contact.emailPlaceholder}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                {t.pages.contact.phoneLabel}
              </label>
              <input
                type="tel"
                className="w-full px-3 py-2.5 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]/20 outline-none transition-all"
                placeholder={t.pages.contact.phonePlaceholder}
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                {t.pages.contact.subject}
              </label>
              <input
                type="text"
                className="w-full px-3 py-2.5 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]/20 outline-none transition-all"
                placeholder={t.pages.contact.subjectPlaceholder}
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                {t.pages.contact.message}
              </label>
              <textarea
                rows={5}
                className="w-full px-3 py-2.5 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]/20 outline-none transition-all resize-none"
                placeholder={t.pages.contact.messagePlaceholder}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-6 py-2.5 rounded-lg gradient-bg text-white text-sm font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>{t.pages.contact.sendBtn}</span>
            </button>
          </form>
        </div>

        {/* Map Placeholder */}
        <div className="bg-gray-200 dark:bg-gray-800/50 rounded-xl h-64 flex items-center justify-center border border-gray-300 dark:border-gray-700">
          <div className="text-center text-gray-500 dark:text-gray-400">
            <MapPin className="w-10 h-10 mx-auto mb-3" />
            <p className="text-sm font-medium">
              {t.pages.contact.mapPlaceholder}
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

