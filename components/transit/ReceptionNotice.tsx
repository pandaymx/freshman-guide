import { AlertCircle } from "lucide-react";

interface ReceptionNoticeProps {
  notice?: string;
}

export function ReceptionNotice({ notice }: ReceptionNoticeProps) {
  if (!notice) return null;

  return (
    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 rounded-xl p-4 flex items-start gap-3">
      <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" />
      <div>
        <h4 className="text-sm font-semibold text-amber-800 dark:text-amber-500 mb-1">
          迎新温馨提示
        </h4>
        <p className="text-sm text-amber-700 dark:text-amber-400 leading-relaxed">
          {notice}
        </p>
      </div>
    </div>
  );
}
