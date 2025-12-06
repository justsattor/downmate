"use client";

import { Header } from "@/components/Header";
import LandingFooter from "@/components/LandingFooter";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Last updated: December 3, 2025
            </p>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                1. Agreement to Terms
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                By accessing or using Downmate&apos;s Instagram downloader service (&quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you disagree with any part of these terms, you may not use the Service.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                These Terms apply to all visitors and users who access or use our Service.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                2. Description of Service
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Downmate provides a free Instagram media downloader service that allows users to download Instagram posts, reels, stories, and images. The service is provided as-is for personal use only.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                3. User Accounts
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Our service does not require account registration. You can use the Service directly without creating an account.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                4. Service Usage
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Our service is provided free of charge. However, we implement rate limits to ensure fair usage and service availability for all users.
              </p>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                Usage Limits
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To prevent abuse, we may limit the number of downloads per user. Excessive use may result in temporary restrictions or IP blocking.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                5. Acceptable Use
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                You agree not to use the Service:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                <li>In any way that violates applicable laws or regulations</li>
                <li>To download copyrighted content without permission</li>
                <li>For commercial purposes without authorization</li>
                <li>To attempt unauthorized access to systems or networks</li>
                <li>To interfere with or disrupt the Service or servers</li>
                <li>To engage in automated bulk downloading or scraping</li>
                <li>To circumvent rate limits or usage restrictions</li>
                <li>To violate Instagram&apos;s Terms of Service</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                6. Intellectual Property
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                The Service and its original content, features, and functionality are owned by Downmate and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Downloaded content remains the property of its original creators. You are responsible for ensuring you have the right to download and use any content obtained through our Service.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                7. Content Responsibility
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                You are solely responsible for:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                <li>Ensuring you have rights to download the content</li>
                <li>Complying with copyright laws and Instagram&apos;s terms</li>
                <li>Using downloaded content only for lawful purposes</li>
                <li>Not distributing downloaded content without permission</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                8. Service Availability
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                We strive to maintain high availability of our Service but do not guarantee uninterrupted access. We may temporarily suspend the Service for maintenance, updates, or other reasons.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                The Service depends on Instagram&apos;s availability and may be affected by changes to Instagram&apos;s platform or policies.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                9. Limitation of Liability
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, Downmate SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Our total liability for any claims arising out of or relating to these Terms or the Service shall not exceed the amount you paid to us in the twelve (12) months preceding the claim.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                10. Disclaimer of Warranties
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE OF PERFORMANCE.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                11. Indemnification
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                You agree to defend, indemnify, and hold harmless Downmate and its officers, directors, employees, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, or expenses arising out of or relating to your use of the Service or violation of these Terms.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                12. Termination
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including but not limited to breach of these Terms.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Upon termination, your right to use the Service will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                13. Governing Law
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the Republic of Uzbekistan, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved in the courts of Uzbekistan.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                14. Changes to Terms
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
              </p>
            </section>
          </div>
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}
