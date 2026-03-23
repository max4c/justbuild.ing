import Image from 'next/image';
import type { Metadata } from 'next';
import CopyCard from '@/components/ui/CopyCard';
export const metadata: Metadata = {
  title: "Brand - JustBuild",
  description: "JustBuild brand guidelines, logos, and press assets.",
};

function DownloadButton({ href, dark }: { href: string; dark?: boolean }) {
  return (
    <a
      href={href}
      download
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
        dark
          ? 'bg-white/10 text-gray-300 hover:bg-white/20'
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      }`}
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      PNG
    </a>
  );
}

export default function BrandPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-tertiary pt-32 md:pt-48 pb-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-semibold text-gray-900 mb-2">Brand</h1>
          <p className="text-sm text-gray-500">
            Logos, usage guidelines, and assets for sponsors, press, and partners.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-14 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">About</h2>

          <div className="space-y-3">
            <CopyCard
              label="One-liner"
              text="JustBuild is Utah's AI-native builder community."
            />
            <CopyCard
              label="Short description"
              text="JustBuild is Utah's AI-native builder community. We bring together founders, engineers, designers, PMs, and curious builders to learn fast, build real things, and grow the local startup ecosystem. Through hackathons, coworking sessions, and hands-on events, JustBuild helps people meet collaborators, sharpen their skills, and ship real projects. The community is led by Max Forsey and Jacob Wright."
            />
          </div>
        </div>
      </section>

      {/* Logo */}
      <section className="py-14 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Logo</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Standard */}
            <div className="rounded-xl overflow-hidden border border-gray-100">
              <div className="bg-white p-6 flex items-center justify-center h-32">
                <Image src="/assets/brand/logo-standard.png" alt="Logo — standard" width={200} height={100} className="h-16 w-auto" />
              </div>
              <div className="px-4 py-3 flex items-center justify-between bg-white border-t border-gray-100">
                <div>
                  <p className="text-sm font-medium text-gray-900">Standard</p>
                  <p className="text-xs text-gray-400">Red</p>
                </div>
                <DownloadButton href="/assets/brand/logo-standard.png" />
              </div>
            </div>

            {/* Black */}
            <div className="rounded-xl overflow-hidden border border-gray-100">
              <div className="bg-white p-6 flex items-center justify-center h-32">
                <Image src="/assets/brand/logo-black.png" alt="Logo — black" width={200} height={100} className="h-16 w-auto" />
              </div>
              <div className="px-4 py-3 flex items-center justify-between bg-white border-t border-gray-100">
                <div>
                  <p className="text-sm font-medium text-gray-900">Black</p>
                  <p className="text-xs text-gray-400">Monochrome</p>
                </div>
                <DownloadButton href="/assets/brand/logo-black.png" />
              </div>
            </div>

            {/* White */}
            <div className="rounded-xl overflow-hidden border border-gray-700 bg-gray-900">
              <div className="p-6 flex items-center justify-center h-32">
                <Image src="/assets/brand/logo-white.png" alt="Logo — white" width={200} height={100} className="h-16 w-auto" />
              </div>
              <div className="px-4 py-3 flex items-center justify-between border-t border-gray-700">
                <div>
                  <p className="text-sm font-medium text-white">White</p>
                  <p className="text-xs text-gray-500">Dark backgrounds</p>
                </div>
                <DownloadButton href="/assets/brand/logo-white.png" dark />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wordmark */}
      <section className="py-14 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Wordmark</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Standard */}
            <div className="rounded-xl overflow-hidden border border-gray-100">
              <div className="bg-white p-6 flex items-center justify-center h-32">
                <Image src="/assets/brand/wordmark-standard.png" alt="Wordmark standard" width={800} height={160} className="w-full h-auto px-1" />
              </div>
              <div className="px-4 py-3 flex items-center justify-between bg-white border-t border-gray-100">
                <div>
                  <p className="text-sm font-medium text-gray-900">Standard</p>
                  <p className="text-xs text-gray-400">Red</p>
                </div>
                <DownloadButton href="/assets/brand/wordmark-standard.png" />
              </div>
            </div>

            {/* Black */}
            <div className="rounded-xl overflow-hidden border border-gray-100">
              <div className="bg-white p-6 flex items-center justify-center h-32">
                <Image src="/assets/brand/wordmark-black.png" alt="Wordmark black" width={800} height={160} className="w-full h-auto px-1" />
              </div>
              <div className="px-4 py-3 flex items-center justify-between bg-white border-t border-gray-100">
                <div>
                  <p className="text-sm font-medium text-gray-900">Black</p>
                  <p className="text-xs text-gray-400">Monochrome</p>
                </div>
                <DownloadButton href="/assets/brand/wordmark-black.png" />
              </div>
            </div>

            {/* White */}
            <div className="rounded-xl overflow-hidden border border-gray-700 bg-gray-900">
              <div className="p-6 flex items-center justify-center h-32">
                <Image src="/assets/brand/wordmark-white.png" alt="Wordmark white" width={800} height={160} className="w-full h-auto px-1" />
              </div>
              <div className="px-4 py-3 flex items-center justify-between border-t border-gray-700">
                <div>
                  <p className="text-sm font-medium text-white">White</p>
                  <p className="text-xs text-gray-500">Dark backgrounds</p>
                </div>
                <DownloadButton href="/assets/brand/wordmark-white.png" dark />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage */}
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Usage</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="rounded-xl p-6 border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-bridge-500 flex items-center justify-center text-white text-[10px]">&#10003;</span>
                Do
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>Use provided files without modification</li>
                <li>Maintain clear space equal to the bridge tower height</li>
                <li>Standard or black on light, white on dark</li>
                <li>Write &ldquo;JustBuild&rdquo; as one word, capital J and B</li>
              </ul>
            </div>
            <div className="rounded-xl p-6 border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center text-white text-[10px]">&#10005;</span>
                Don&apos;t
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>Stretch, rotate, or distort the logo</li>
                <li>Change colors beyond provided variants</li>
                <li>Place on busy backgrounds without contrast</li>
                <li>Write as &ldquo;Just Build&rdquo; or &ldquo;JUSTBUILD&rdquo;</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
