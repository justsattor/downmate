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
                By accessing or using Multisave&apos;s API marketplace platform (&quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you disagree with any part of these terms, you may not access the Service.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                These Terms apply to all visitors, users, and others who access or use the Service, including API providers and consumers.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                2. Description of Service
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Multisave provides an API marketplace platform that enables developers and businesses to discover, subscribe to, and integrate various APIs. Our services include API hosting, management, analytics, billing, and related tools to facilitate API consumption and distribution.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                3. User Accounts
              </h2>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                Account Registration
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                To access certain features of the Service, you must register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
              </p>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                Account Security
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                You are responsible for safeguarding your account credentials and for all activities that occur under your account. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
              </p>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                API Keys
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                API keys are confidential and must be kept secure. You are responsible for all API calls made using your keys. Do not share your API keys publicly or embed them in client-side code.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                4. Subscription and Payments
              </h2>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                Pricing and Billing
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Certain features of the Service require a paid subscription. You agree to pay all fees associated with your subscription plan. Fees are billed in advance on a monthly or annual basis, depending on your selected plan.
              </p>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                Usage Limits
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Each subscription plan includes specific usage limits (API calls, requests per minute, etc.). Exceeding these limits may result in additional charges or temporary suspension of service.
              </p>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                Refunds
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Subscription fees are generally non-refundable. However, we may provide refunds at our sole discretion in certain circumstances. Contact our support team for refund requests.
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
                <li>To transmit harmful, malicious, or offensive content</li>
                <li>To attempt unauthorized access to systems or networks</li>
                <li>To interfere with or disrupt the Service or servers</li>
                <li>To engage in any automated scraping or data harvesting</li>
                <li>To resell or redistribute APIs without authorization</li>
                <li>To circumvent rate limits or usage restrictions</li>
                <li>To impersonate others or provide false information</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                6. Intellectual Property
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                The Service and its original content, features, and functionality are owned by Multisave and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                APIs available through our platform may be subject to their own intellectual property rights and licensing terms. Please review individual API documentation for specific terms.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                7. API Provider Terms
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                If you provide APIs through our platform, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                <li>Maintain accurate and up-to-date API documentation</li>
                <li>Ensure your APIs comply with all applicable laws</li>
                <li>Provide reasonable uptime and performance</li>
                <li>Respond to support requests in a timely manner</li>
                <li>Not include malicious code or vulnerabilities</li>
                <li>Grant Multisave necessary rights to display and distribute your API</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                8. Service Availability
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                We strive to maintain high availability of our Service but do not guarantee uninterrupted access. We may temporarily suspend the Service for maintenance, updates, or other reasons. We will provide advance notice when possible.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Current service status is available at status.multisave.uz.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                9. Limitation of Liability
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, MULTISAVE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
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
                You agree to defend, indemnify, and hold harmless Multisave and its officers, directors, employees, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, or expenses arising out of or relating to your use of the Service or violation of these Terms.
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

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                15. Contact Us
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Email:</strong> legal@multisave.uz
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  <strong>Support:</strong> support.multisave.uz
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}
