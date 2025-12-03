"use client";

import { ReactNode } from "react";
import { useTranslations } from "next-intl";
import { Instagram, Zap, Shield, Download } from "lucide-react";

interface HomeContentProps {
  children: ReactNode;
}

export function HomeContent({ children }: HomeContentProps) {
  const t = useTranslations();

  const features = [
    {
      icon: Zap,
      title: t("features.fast.title"),
      description: t("features.fast.description"),
    },
    {
      icon: Shield,
      title: t("features.secure.title"),
      description: t("features.secure.description"),
    },
    {
      icon: Download,
      title: t("features.hd.title"),
      description: t("features.hd.description"),
    },
  ];

  return (
    <>
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 mb-6">
          <Instagram className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {t("home.title")}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {t("home.subtitle")}
        </p>
      </div>

      {children}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 text-center"
          >
            <feature.icon className="w-6 h-6 text-brand-500 mx-auto mb-3" />
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
              {feature.title}
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {t("footer.poweredBy")}{" "}
          <a
            href="https://www.multisave.uz"
            target="_blank"
            className="text-brand-500 hover:text-brand-600 font-medium"
          >
            MultiSave API
          </a>
        </p>
      </div>
    </>
  );
}
