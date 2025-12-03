import { Metadata } from "next";
import { Header } from "@/components/Header";
import { DownloaderForm } from "@/components/DownloaderForm";
import { HomeContent } from "@/components/HomeContent";
import LandingFooter from "@/components/LandingFooter";

export const metadata: Metadata = {
  title: "Instagram Downloader | MultiSave",
  description: "Download Instagram videos and images easily with MultiSave API",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <HomeContent>
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 shadow-theme-sm">
              <DownloaderForm />
            </div>
          </HomeContent>
        </div>
      </main>

      <LandingFooter />
    </div>
  );
}
