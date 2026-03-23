'use client';

import { useState } from 'react';

export default function CopyCard({ label, text }: { label: string; text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="group rounded-xl p-5 border border-gray-100 hover:border-gray-200 transition-colors">
      <div className="flex items-center justify-between mb-2">
        <p className="text-[10px] text-gray-400 uppercase tracking-widest">{label}</p>
        <button
          onClick={handleCopy}
          className={`text-xs font-medium px-2.5 py-1 rounded-md transition-all ${
            copied
              ? 'bg-bridge-50 text-bridge-500'
              : 'bg-gray-100 text-gray-500 hover:bg-gray-200 opacity-0 group-hover:opacity-100'
          }`}
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <p className="text-sm text-gray-900 leading-relaxed">{text}</p>
    </div>
  );
}
