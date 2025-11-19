'use client';

import { ArrowRight, Zap, Award, TrendingUp, Leaf } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const stats = [
    { icon: Zap, value: '1,200', label: t.hero.stats.capacity, suffix: '' },
    { icon: Award, value: '25', label: t.hero.stats.experience, suffix: '+' },
    { icon: Leaf, value: '5', label: t.hero.stats.plants, suffix: '' },
    { icon: TrendingUp, value: '98', label: t.hero.stats.efficiency, suffix: '%' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://www.can2termik.com.tr/uploads/2025091611212723618.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            {t.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <button className="group inline-flex items-center space-x-3 px-8 py-4 rounded-full gradient-bg text-white font-semibold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
              <span>{t.hero.cta}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white">
                      {stat.value}
                      <span className="text-green-400">{stat.suffix}</span>
                    </div>
                    <div className="text-sm text-gray-300 mt-1">{stat.label}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}

