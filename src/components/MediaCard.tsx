import { Download, Play, Image as ImageIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { InstagramMediaItem } from "@/lib/types";

interface MediaCardProps {
  item: InstagramMediaItem;
  onDownload: () => void;
}

function formatSize(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

export function MediaCard({ item, onDownload }: MediaCardProps) {
  const t = useTranslations("results");
  const imageSrc = item.type === "video" ? item.thumbnail : item.url;

  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <div className="aspect-square relative">
        <img
          src={imageSrc}
          alt="Media"
          className="w-full h-full object-cover"
        />

        <div className="absolute top-3 left-3">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium",
              item.type === "video"
                ? "bg-brand-500 text-white"
                : "bg-gray-900/80 text-white"
            )}
          >
            {item.type === "video" ? (
              <Play className="w-3 h-3" />
            ) : (
              <ImageIcon className="w-3 h-3" />
            )}
            {item.type === "video" ? t("video") : t("image")}
          </span>
        </div>
      </div>

      <div className="p-4">
        <button
          onClick={onDownload}
          className={cn(
            "w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
            item.type === "video"
              ? "bg-brand-500 hover:bg-brand-600 text-white"
              : "bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white"
          )}
        >
          <Download className="w-4 h-4" />
          {t("download")} ({formatSize(item.size)})
        </button>
      </div>
    </div>
  );
}
