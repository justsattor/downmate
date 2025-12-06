"use client";

import { useState } from "react";
import { Moon, Sun, MessageCircle, Globe, ChevronDown, Sparkles, HelpCircle, CirclePlay, BookOpen, Menu, X } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const languages = [
  { code: "uz", label: "O'zbek", flag: "🇺🇿" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "hi", label: "हिन्दी", flag: "🇮🇳" },
];

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const t = useTranslations("header");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [langOpen, setLangOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLanguageChange = (code: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${code}`);
    router.push(newPath);
    setLangOpen(false);
  };

  const currentLang = languages.find((l) => l.code === locale) || languages[0];

  const navLinks = [
    { href: `/${locale}#features`, icon: Sparkles, label: t("features") },
    { href: `/${locale}#how-to`, icon: BookOpen, label: t("howToUse") },
    { href: `/${locale}#faq`, icon: HelpCircle, label: t("faq") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6">
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <CirclePlay className="w-8 h-8 text-brand-500" />
          <span className="text-lg font-semibold text-gray-900 dark:text-white">
            Downmate
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2 sm:gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-1.5 px-3 py-2 rounded-lg",
                "text-gray-600 dark:text-gray-300",
                "hover:bg-gray-100 dark:hover:bg-gray-800",
                "transition-colors text-sm font-medium"
              )}
            >
              <link.icon className="w-4 h-4" />
              <span>{link.label}</span>
            </a>
          ))}

          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className={cn(
                "flex items-center gap-1.5 p-2 rounded-lg",
                "text-gray-500 dark:text-gray-400",
                "hover:bg-gray-100 dark:hover:bg-gray-800",
                "transition-colors"
              )}
            >
              <Globe className="w-5 h-5" />
              <span className="text-sm font-medium">{currentLang.label}</span>
              <ChevronDown className={cn("w-4 h-4 transition-transform", langOpen && "rotate-180")} />
            </button>

            {langOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
                <div className="absolute right-0 top-full mt-1 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-1 min-w-[140px]">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={cn(
                        "w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center gap-2",
                        locale === lang.code
                          ? "text-brand-500 dark:text-brand-400"
                          : "text-gray-700 dark:text-gray-300"
                      )}
                    >
                      <span>{lang.flag}</span>
                      {lang.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          <button
            onClick={toggleTheme}
            className={cn(
              "p-2 rounded-lg",
              "text-gray-500 dark:text-gray-400",
              "hover:bg-gray-100 dark:hover:bg-gray-800",
              "transition-colors"
            )}
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          <a
            href="https://t.me/techiboyz"
            target="_blank"
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-lg",
              "bg-brand-500 hover:bg-brand-600",
              "text-white text-sm font-medium",
              "transition-colors"
            )}
          >
            <span>{t("support")}</span>
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className={cn(
              "p-2 rounded-lg",
              "text-gray-500 dark:text-gray-400",
              "hover:bg-gray-100 dark:hover:bg-gray-800",
              "transition-colors"
            )}
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* Mobile Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className={cn(
                "p-2 rounded-lg",
                "text-gray-500 dark:text-gray-400",
                "hover:bg-gray-100 dark:hover:bg-gray-800",
                "transition-colors"
              )}
            >
              <Globe className="w-5 h-5" />
            </button>

            {langOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
                <div className="absolute right-0 top-full mt-1 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-1 min-w-[140px]">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={cn(
                        "w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center gap-2",
                        locale === lang.code
                          ? "text-brand-500 dark:text-brand-400"
                          : "text-gray-700 dark:text-gray-300"
                      )}
                    >
                      <span>{lang.flag}</span>
                      {lang.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn(
              "p-2 rounded-lg",
              "text-gray-500 dark:text-gray-400",
              "hover:bg-gray-100 dark:hover:bg-gray-800",
              "transition-colors"
            )}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg",
                  "text-gray-700 dark:text-gray-300",
                  "hover:bg-gray-100 dark:hover:bg-gray-800",
                  "transition-colors text-sm font-medium"
                )}
              >
                <link.icon className="w-5 h-5" />
                {link.label}
              </a>
            ))}

            <div className="pt-2">
              <a
                href="https://t.me/techiboyz"
                target="_blank"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg",
                  "bg-brand-500 hover:bg-brand-600",
                  "text-white text-sm font-medium",
                  "transition-colors"
                )}
              >
                <MessageCircle className="w-5 h-5" />
                {t("support")}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
