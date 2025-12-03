"use client";

import { useState } from "react";
import { Moon, Sun, ExternalLink, Globe, ChevronDown, Sparkles, HelpCircle } from "lucide-react";
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

  const handleLanguageChange = (code: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${code}`);
    router.push(newPath);
    setLangOpen(false);
  };

  const currentLang = languages.find((l) => l.code === locale) || languages[0];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="8" className="fill-brand-50 dark:fill-brand-500/10" />
            <path d="M16 6L8 11V21L16 26L24 21V11L16 6Z" className="stroke-brand-500" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M16 6V26" className="stroke-brand-500" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M8 11L16 16L24 11" className="stroke-brand-500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 21L16 16" className="stroke-brand-500" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M24 21L16 16" className="stroke-brand-500" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="text-lg font-semibold text-gray-900 dark:text-white">
            MultiSave
          </span>
          <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
            Demo
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href={`/${locale}/features`}
            className={cn(
              "flex items-center gap-1.5 px-3 py-2 rounded-lg",
              "text-gray-600 dark:text-gray-300",
              "hover:bg-gray-100 dark:hover:bg-gray-800",
              "transition-colors text-sm font-medium"
            )}
          >
            <Sparkles className="w-4 h-4" />
            <span className="hidden sm:inline">{t("features")}</span>
          </Link>

          <Link
            href={`/${locale}/features#faq`}
            className={cn(
              "flex items-center gap-1.5 px-3 py-2 rounded-lg",
              "text-gray-600 dark:text-gray-300",
              "hover:bg-gray-100 dark:hover:bg-gray-800",
              "transition-colors text-sm font-medium"
            )}
          >
            <HelpCircle className="w-4 h-4" />
            <span className="hidden sm:inline">{t("faq")}</span>
          </Link>

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
              <span className="hidden sm:inline text-sm font-medium">{currentLang.label}</span>
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
            href="https://docs.multisave.uz"
            target="_blank"
            className={cn(
              "flex items-center gap-2 p-2 sm:px-4 sm:py-2 rounded-lg",
              "bg-brand-500 hover:bg-brand-600",
              "text-white text-sm font-medium",
              "transition-colors"
            )}
          >
            <span className="hidden sm:inline">{t("docs")}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
