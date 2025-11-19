'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LucideIcon, ChevronRight } from 'lucide-react';

export interface MenuItem {
  label: string;
  href: string;
  icon?: LucideIcon;
}

interface PageMenuProps {
  items: MenuItem[];
  title?: string;
}

export default function PageMenu({ items, title }: PageMenuProps) {
  const pathname = usePathname();

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
      {title && (
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
          <h3 className="text-base font-bold text-gray-900 dark:text-white uppercase tracking-wide">
            {title}
          </h3>
        </div>
      )}
      
      <nav className="p-3">
        <ul className="space-y-1">
          {items.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`group flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-[var(--primary)] text-white font-semibold shadow-md'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    {Icon && (
                      <Icon className={`w-4 h-4 flex-shrink-0 ${
                        isActive ? 'text-white' : 'text-gray-400 dark:text-gray-500'
                      }`} />
                    )}
                    <span className="font-medium text-sm">
                      {item.label}
                    </span>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${
                    isActive 
                      ? 'text-white' 
                      : 'text-gray-400 group-hover:translate-x-1 group-hover:text-[var(--primary)]'
                  }`} />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

