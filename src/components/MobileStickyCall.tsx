import { Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../config';

export default function MobileStickyCall() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-white border-t border-slate-200 p-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
      <a
        href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9+]/g, '')}`}
        className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-bold text-lg shadow-sm transition-colors"
      >
        <Phone className="w-5 h-5 animate-pulse" />
        Call {BUSINESS_INFO.phone}
      </a>
    </div>
  );
}
