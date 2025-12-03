"use client";

import { useState } from "react";
import { Download, Link2, Loader2, AlertCircle, CheckCircle2, Instagram } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { InstagramMediaItem, InstagramApiResponse } from "@/lib/types";
import { MediaCard } from "./MediaCard";

export function DownloaderForm() {
  const t = useTranslations();
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<InstagramMediaItem[]>([]);

  const getErrorMessage = (error: string, statusCode?: number): string => {
    if (error.toLowerCase().includes("invalid") && error.toLowerCase().includes("api key")) {
      return t("form.apiErrors.invalidApiKey");
    }
    if (error.toLowerCase().includes("rate limit") || error.toLowerCase().includes("limit exceeded")) {
      return t("form.apiErrors.rateLimitExceeded");
    }
    if (statusCode === 403 || error.toLowerCase().includes("forbidden")) {
      return t("form.apiErrors.forbidden");
    }
    if (statusCode === 500 || error.toLowerCase().includes("server")) {
      return t("form.apiErrors.serverError");
    }
    return error;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!url.trim()) {
      setError(t("form.urlRequired"));
      return;
    }

    setLoading(true);
    setError(null);
    setResults([]);

    try {
      const response = await fetch("/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      if (!response.ok) {
        const errorMsg = getErrorMessage(data.error || t("form.error"), data.statusCode || response.status);
        throw new Error(errorMsg);
      }

      const apiResponse = data as InstagramApiResponse;
      setResults(apiResponse.medias || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : t("form.error"));
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async (item: InstagramMediaItem, index: number) => {
    try {
      const proxyUrl = `/api/proxy?url=${encodeURIComponent(item.url)}&type=${item.type}`;
      const link = document.createElement("a");
      link.href = proxyUrl;
      link.download = `downmate-${item.type}-${index + 1}.${item.type === "video" ? "mp4" : "jpg"}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      window.open(item.url, "_blank");
    }
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t("form.label")}
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <Link2 className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder={t("form.placeholder")}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={cn(
            "w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium transition-all",
            "bg-brand-500 hover:bg-brand-600 text-white",
            "disabled:opacity-50 disabled:cursor-not-allowed"
          )}
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              {t("form.loading")}
            </>
          ) : (
            <>
              <Download className="w-5 h-5" />
              {t("form.submit")}
            </>
          )}
        </button>
      </form>

      {error && (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-error-50 dark:bg-error-500/10 border border-error-200 dark:border-error-500/20">
          <AlertCircle className="w-5 h-5 text-error-500 flex-shrink-0" />
          <p className="text-sm text-error-700 dark:text-error-400">{error}</p>
        </div>
      )}

      {results && results.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-success-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {results.length === 1
                ? t("results.single") 
                : t("results.multiple", { count: results.length })}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {results.map((item, index) => (
              <MediaCard
                key={index}
                item={item}
                onDownload={() => handleDownload(item, index)}
              />
            ))}
          </div>
        </div>
      )}

      {(!results || results.length === 0) && !loading && !error && (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
            <Instagram className="w-8 h-8 text-gray-400" />
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            {t("form.emptyState")}
          </p>
        </div>
      )}
    </div>
  );
}
