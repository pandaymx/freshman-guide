import { TransitRule } from "@/types/transit";
import { Bus, Train, Car, Navigation, Clock, Phone, MapPin } from "lucide-react";

interface TransitCardProps {
  rule: TransitRule;
}

const getIcon = (type: TransitRule["type"]) => {
  switch (type) {
    case "shuttle_bus":
      return <Bus className="w-6 h-6" />;
    case "subway":
      return <Train className="w-6 h-6" />;
    case "taxi":
      return <Car className="w-6 h-6" />;
    case "self_driving":
      return <Navigation className="w-6 h-6" />;
  }
};

const getTypeLabel = (type: TransitRule["type"]) => {
  switch (type) {
    case "shuttle_bus":
      return "接站大巴";
    case "subway":
      return "公共交通";
    case "taxi":
      return "出租/网约车";
    case "self_driving":
      return "自驾";
  }
};

export function TransitCard({ rule }: TransitCardProps) {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="bg-slate-50 dark:bg-slate-800/50 p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-start gap-4">
        <div className="p-3 bg-blue-100 dark:bg-indigo-900/50 text-blue-600 dark:text-indigo-400 rounded-xl">
          {getIcon(rule.type)}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold px-2 py-1 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-md">
              {getTypeLabel(rule.type)}
            </span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            {rule.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 space-y-6">
        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {rule.operatingHours && (
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">运营时间</p>
                <p className="font-medium text-slate-800 dark:text-slate-200">{rule.operatingHours}</p>
              </div>
            </div>
          )}
          {rule.interval && (
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">发车间隔</p>
                <p className="font-medium text-slate-800 dark:text-slate-200">{rule.interval}</p>
              </div>
            </div>
          )}
          {(rule.pickupPoint || rule.dropoffPoint) && (
            <div className="flex items-start gap-3 sm:col-span-2">
              <MapPin className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
              <div className="space-y-2 w-full">
                {rule.pickupPoint && (
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <span className="text-sm text-slate-500 dark:text-slate-400 w-16">上车点:</span>
                    <span className="font-medium text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md text-sm">{rule.pickupPoint}</span>
                  </div>
                )}
                {rule.dropoffPoint && (
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <span className="text-sm text-slate-500 dark:text-slate-400 w-16">下车点:</span>
                    <span className="font-medium text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md text-sm">{rule.dropoffPoint}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Instructions */}
        {rule.instructions && rule.instructions.length > 0 && (
          <div className="bg-blue-50 dark:bg-indigo-900/20 p-4 rounded-xl">
            <h4 className="text-sm font-semibold text-blue-800 dark:text-indigo-300 mb-3 flex items-center gap-2">
              <Navigation className="w-4 h-4" /> 乘车指引
            </h4>
            <ol className="space-y-3">
              {rule.instructions.map((step, idx) => (
                <li key={idx} className="flex gap-3 text-slate-700 dark:text-slate-300 text-sm">
                  <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-blue-200 dark:bg-indigo-800 text-blue-800 dark:text-indigo-200 font-bold text-xs">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Contacts */}
        {rule.contacts && rule.contacts.length > 0 && (
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800/50">
            <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">现场联系人</h4>
            <div className="flex flex-wrap gap-3">
              {rule.contacts.map((contact, idx) => (
                <a
                  key={idx}
                  href={`tel:${contact.phone.replace(/-/g, '')}`}
                  className="flex items-center gap-2 px-3 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors group"
                >
                  <Phone className="w-4 h-4 text-slate-400 group-hover:text-blue-500 dark:group-hover:text-indigo-400" />
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{contact.name}</p>
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{contact.phone}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
