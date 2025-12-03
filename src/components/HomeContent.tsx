"use client";

import { ReactNode, useState } from "react";
import { useTranslations } from "next-intl";
import {
  Instagram,
  Zap,
  Shield,
  Download,
  Globe,
  Smartphone,
  Clock,
  ChevronDown,
  Link,
  Clipboard,
  ArrowDown,
} from "lucide-react";

interface HomeContentProps {
  children: ReactNode;
}

export function HomeContent({ children }: HomeContentProps) {
  const t = useTranslations();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const allFeatures = [
    {
      icon: Zap,
      title: t("featuresPage.mainFeatures.fast.title"),
      description: t("featuresPage.mainFeatures.fast.description"),
    },
    {
      icon: Shield,
      title: t("featuresPage.mainFeatures.secure.title"),
      description: t("featuresPage.mainFeatures.secure.description"),
    },
    {
      icon: Download,
      title: t("featuresPage.mainFeatures.hd.title"),
      description: t("featuresPage.mainFeatures.hd.description"),
    },
    {
      icon: Globe,
      title: t("featuresPage.mainFeatures.multiLang.title"),
      description: t("featuresPage.mainFeatures.multiLang.description"),
    },
    {
      icon: Smartphone,
      title: t("featuresPage.mainFeatures.responsive.title"),
      description: t("featuresPage.mainFeatures.responsive.description"),
    },
    {
      icon: Clock,
      title: t("featuresPage.mainFeatures.instant.title"),
      description: t("featuresPage.mainFeatures.instant.description"),
    },
  ];

  const faqItems = [
    {
      question: t("featuresPage.faq.items.q1.question"),
      answer: t("featuresPage.faq.items.q1.answer"),
    },
    {
      question: t("featuresPage.faq.items.q2.question"),
      answer: t("featuresPage.faq.items.q2.answer"),
    },
    {
      question: t("featuresPage.faq.items.q3.question"),
      answer: t("featuresPage.faq.items.q3.answer"),
    },
    {
      question: t("featuresPage.faq.items.q4.question"),
      answer: t("featuresPage.faq.items.q4.answer"),
    },
    {
      question: t("featuresPage.faq.items.q5.question"),
      answer: t("featuresPage.faq.items.q5.answer"),
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

      {/* Features Section */}
      <section id="features" className="mt-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
          {t("featuresPage.sections.mainFeatures")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {allFeatures.map((feature, index) => (
            <div
              key={index}
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
      </section>

      {/* How to Download Section */}
      <section id="how-to" className="mt-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
          {t("howTo.title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 text-center">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-500/10 text-brand-500 mb-3">
              <Link className="w-5 h-5" />
            </div>
            <div className="text-xs font-medium text-brand-500 mb-2">{t("howTo.step")} 1</div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
              {t("howTo.steps.copy.title")}
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              {t("howTo.steps.copy.description")}
            </p>
          </div>
          <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 text-center">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-500/10 text-brand-500 mb-3">
              <Clipboard className="w-5 h-5" />
            </div>
            <div className="text-xs font-medium text-brand-500 mb-2">{t("howTo.step")} 2</div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
              {t("howTo.steps.paste.title")}
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              {t("howTo.steps.paste.description")}
            </p>
          </div>
          <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 text-center">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-500/10 text-brand-500 mb-3">
              <ArrowDown className="w-5 h-5" />
            </div>
            <div className="text-xs font-medium text-brand-500 mb-2">{t("howTo.step")} 3</div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
              {t("howTo.steps.download.title")}
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              {t("howTo.steps.download.description")}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="mt-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
          {t("featuresPage.faq.title")}
        </h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === index && (
                <div className="px-4 pb-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
