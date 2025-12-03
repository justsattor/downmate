"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import LandingFooter from "@/components/LandingFooter";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import {
  Zap,
  Shield,
  Download,
  Globe,
  Smartphone,
  Clock,
  ArrowLeft,
  ChevronDown,
} from "lucide-react";

export default function FeaturesPage() {
  const t = useTranslations("featuresPage");
  const locale = useLocale();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const mainFeatures = [
    {
      icon: Zap,
      title: t("mainFeatures.fast.title"),
      description: t("mainFeatures.fast.description"),
    },
    {
      icon: Shield,
      title: t("mainFeatures.secure.title"),
      description: t("mainFeatures.secure.description"),
    },
    {
      icon: Download,
      title: t("mainFeatures.hd.title"),
      description: t("mainFeatures.hd.description"),
    },
    {
      icon: Globe,
      title: t("mainFeatures.multiLang.title"),
      description: t("mainFeatures.multiLang.description"),
    },
    {
      icon: Smartphone,
      title: t("mainFeatures.responsive.title"),
      description: t("mainFeatures.responsive.description"),
    },
    {
      icon: Clock,
      title: t("mainFeatures.instant.title"),
      description: t("mainFeatures.instant.description"),
    },
  ];

  const faqItems = [
    {
      question: t("faq.items.q1.question"),
      answer: t("faq.items.q1.answer"),
    },
    {
      question: t("faq.items.q2.question"),
      answer: t("faq.items.q2.answer"),
    },
    {
      question: t("faq.items.q3.question"),
      answer: t("faq.items.q3.answer"),
    },
    {
      question: t("faq.items.q4.question"),
      answer: t("faq.items.q4.answer"),
    },
    {
      question: t("faq.items.q5.question"),
      answer: t("faq.items.q5.answer"),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
      <Header />

      <main className="flex-1 pt-24 pb-16">
        {/* Back Button */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("back")}
          </Link>
        </div>

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 mb-6">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t("hero.title")}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("hero.subtitle")}
          </p>
        </section>

        {/* Main Features Grid */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            {t("sections.mainFeatures")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {mainFeatures.map((feature, index) => (
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

        {/* Spacer */}
        <div className="h-24 sm:h-32"></div>
        {/* FAQ Section */}
        <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            {t("faq.title")}
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
      </main>

      <LandingFooter />
    </div>
  );
}
