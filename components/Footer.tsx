'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { href: '/', label: t.nav.home },
    { href: '/hakkimizda', label: t.nav.about },
    { href: '/hizmetlerimiz', label: t.nav.services },
    { href: '/projelerimiz', label: t.nav.projects },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Image 
              src="/ce_logo.png" 
              alt="Çayırhan Enerji Logo" 
              width={200}
              height={60}
              className="h-14 w-auto object-contain brightness-0 invert"
            />
            <p className="text-sm text-gray-400 leading-relaxed">
              {t.footer.description}
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-[var(--primary)] flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-[var(--primary-light)] transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[var(--primary)] mr-0 group-hover:mr-2 transition-all"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.contact}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                <span>Enerji Mahallesi, Santral Caddesi No:1, 34000 İstanbul</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone className="w-5 h-5 text-[var(--primary)] flex-shrink-0" />
                <span>+90 (212) 123 45 67</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail className="w-5 h-5 text-[var(--primary)] flex-shrink-0" />
                <span>info@termiksantral.com.tr</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.newsletter}</h3>
            <p className="text-sm text-gray-400 mb-4">
              {t.footer.newsletterDesc}
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder={t.footer.email}
                className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-[var(--primary)] focus:outline-none text-sm"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-lg gradient-bg text-white font-medium text-sm hover:shadow-lg transition-shadow"
              >
                {t.footer.subscribe}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Termik Santral. {t.footer.rights}
            </p>
            <div className="flex space-x-6">
              <Link href="/gizlilik" className="text-sm text-gray-400 hover:text-[var(--primary-light)] transition-colors">
                {t.footer.privacyPolicy}
              </Link>
              <Link href="/kullanim" className="text-sm text-gray-400 hover:text-[var(--primary-light)] transition-colors">
                {t.footer.termsOfUse}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

