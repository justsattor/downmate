"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

const DOCS_URL = "https://docs.multisave.uz";
const STATUS_URL = "https://status.multisave.uz";
const SUPPORT_URL = "https://support.multisave.uz";

export default function LandingFooter() {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Categories", href: "/explore" },
      { name: "Pricing", href: "/pricing" },
      { name: "API Docs", href: DOCS_URL, external: true },
    ],
    resources: [
      { name: "Documentation", href: DOCS_URL, external: true },
      { name: "System Status", href: STATUS_URL, external: true },
      { name: "Support", href: SUPPORT_URL, external: true },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  };

  const socialLinks = [
    {
      name: "Telegram",
      href: "https://t.me/multisaveapi",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/multisave",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200 dark:bg-gray-900 dark:border-gray-800">
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '48px 24px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '48px' }}>
          <div style={{ maxWidth: '280px' }}>
            <Link href="/">
              <Image
                src={theme === 'dark' ? '/images/logo/logo-dark.svg' : '/images/logo/logo.svg'}
                alt="Multisave"
                width={160}
                height={32}
              />
            </Link>
            <p style={{ marginTop: '16px', fontSize: '14px' }} className="text-gray-600 dark:text-gray-400">
              Your ultimate API marketplace. Discover, connect, and integrate powerful APIs in minutes.
            </p>
            <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '64px' }}>
            <div>
              <h3 style={{ fontSize: '14px', fontWeight: '600' }} className="text-gray-900 dark:text-white">Product</h3>
              <ul style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      style={{ fontSize: '14px' }}
                      className="text-gray-600 hover:text-brand-500 transition-colors dark:text-gray-400 dark:hover:text-brand-400"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 style={{ fontSize: '14px', fontWeight: '600' }} className="text-gray-900 dark:text-white">Resources</h3>
              <ul style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      style={{ fontSize: '14px' }}
                      className="text-gray-600 hover:text-brand-500 transition-colors dark:text-gray-400 dark:hover:text-brand-400"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 style={{ fontSize: '14px', fontWeight: '600' }} className="text-gray-900 dark:text-white">Legal</h3>
              <ul style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      style={{ fontSize: '14px' }}
                      className="text-gray-600 hover:text-brand-500 transition-colors dark:text-gray-400 dark:hover:text-brand-400"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '48px', paddingTop: '32px' }} className="border-t border-gray-200 dark:border-gray-800">
          <p style={{ fontSize: '14px', textAlign: 'center' }} className="text-gray-500 dark:text-gray-400">
            © {currentYear} Multisave. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
