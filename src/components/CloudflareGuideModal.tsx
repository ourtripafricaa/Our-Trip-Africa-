import React, { useState } from 'react';
import { X, Globe, CheckCircle2, Copy, Shield, Cloud, ExternalLink, ArrowRight, Server } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/safariData';

interface CloudflareGuideModalProps {
  onClose: () => void;
}

export const CloudflareGuideModal: React.FC<CloudflareGuideModalProps> = ({ onClose }) => {
  const [copiedStep, setCopiedStep] = useState<string | null>(null);

  const copyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(id);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#092218] border border-[#c5a059]/40 rounded-3xl shadow-2xl overflow-hidden my-6 flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="bg-[#081a13]/95 backdrop-blur-md border-b border-[#1a4a35] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-full bg-[#f38020]/20 text-[#f38020] flex items-center justify-center border border-[#f38020]/40">
              <Cloud size={18} />
            </span>
            <div>
              <h2 className="font-serif text-lg font-bold text-white">
                How to Host Our Trip Africa on Cloudflare Pages (Free Plan)
              </h2>
              <p className="text-[11px] text-[#c5a059]">
                Step-by-Step Guide for Domain: <strong className="text-white">ourtripafrica.com</strong>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close guide"
            className="p-1.5 rounded-full text-[#a49a88] hover:text-white hover:bg-[#1a4a35] transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 flex-1 text-xs sm:text-sm text-[#dcd4c7]">
          {/* Summary Box */}
          <div className="bg-[#0e271e] p-5 rounded-2xl border border-[#1a4a35] space-y-2">
            <h3 className="font-serif text-base font-bold text-white flex items-center gap-2">
              <Globe size={16} className="text-[#c5a059]" />
              <span>Good News: You Do NOT Need to Write Code!</span>
            </h3>
            <p className="leading-relaxed">
              Your website for <strong className="text-white">Our Trip Africa</strong> is completely built as a modern, lightning-fast web application. Cloudflare Pages offers a <strong>100% Free Plan</strong> that gives you unlimited bandwidth, global high-speed CDN, free SSL (HTTPS), and DDoS protection.
            </p>
          </div>

          {/* 4 Clear Steps */}
          <div className="space-y-4">
            {/* Step 1 */}
            <div className="bg-[#0e2c20] p-5 rounded-2xl border border-[#1a4a35] space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-[#c5a059] text-[#081a13] font-bold text-xs flex items-center justify-center">
                  1
                </span>
                <h4 className="font-serif text-base font-bold text-white">
                  Step 1: Create a Free Cloudflare Account & Open Pages
                </h4>
              </div>
              <ol className="list-decimal list-inside space-y-1.5 text-xs text-[#dcd4c7] pl-2">
                <li>Go to <a href="https://dash.cloudflare.com/sign-up" target="_blank" rel="noreferrer" className="text-[#c5a059] underline font-semibold">dash.cloudflare.com</a> and sign up for a free account.</li>
                <li>In the left dashboard menu, click on <strong>Compute (Workers & Pages)</strong>, then click <strong>Create application</strong>.</li>
                <li>Select the <strong>Pages</strong> tab.</li>
              </ol>
            </div>

            {/* Step 2 */}
            <div className="bg-[#0e2c20] p-5 rounded-2xl border border-[#1a4a35] space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-[#c5a059] text-[#081a13] font-bold text-xs flex items-center justify-center">
                  2
                </span>
                <h4 className="font-serif text-base font-bold text-white">
                  Step 2: Connect Your Project & Set Build Settings
                </h4>
              </div>
              <p className="text-xs">
                You can either connect your GitHub repository or use Direct Upload. When prompted for build configuration:
              </p>
              <div className="bg-[#081a13] p-4 rounded-xl border border-[#1a4a35] space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-[#a49a88]">Framework Preset:</span>
                  <span className="text-[#c5a059] font-bold">Vite</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#a49a88]">Build Command:</span>
                  <div className="flex items-center gap-2">
                    <span className="text-white">npm run build</span>
                    <button
                      onClick={() => copyText('npm run build', 'build')}
                      className="text-[#c5a059] hover:underline text-[10px]"
                    >
                      {copiedStep === 'build' ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#a49a88]">Build Output Directory:</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[#25D366] font-bold">dist</span>
                    <button
                      onClick={() => copyText('dist', 'dist')}
                      className="text-[#c5a059] hover:underline text-[10px]"
                    >
                      {copiedStep === 'dist' ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>
              </div>
              <p className="text-xs text-[#a49a88]">
                Click <strong>Save and Deploy</strong>. Cloudflare will build the site and give you a live preview link (e.g., <code className="text-[#c5a059]">our-trip-africa.pages.dev</code>).
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#0e2c20] p-5 rounded-2xl border border-[#1a4a35] space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-[#c5a059] text-[#081a13] font-bold text-xs flex items-center justify-center">
                  3
                </span>
                <h4 className="font-serif text-base font-bold text-white">
                  Step 3: Connect Your Custom Domain (ourtripafrica.com)
                </h4>
              </div>
              <ol className="list-decimal list-inside space-y-1.5 text-xs text-[#dcd4c7] pl-2">
                <li>Inside your Cloudflare Pages project, click the <strong>Custom domains</strong> tab.</li>
                <li>Click <strong>Set up a custom domain</strong>.</li>
                <li>Type <strong className="text-white">ourtripafrica.com</strong> and click <strong>Continue</strong>.</li>
                <li>Repeat and add <strong className="text-white">www.ourtripafrica.com</strong> so both work seamlessly.</li>
                <li>Cloudflare will show you 2 Nameservers (for example: <code className="text-[#c5a059]">anna.ns.cloudflare.com</code>).</li>
                <li>Go to where you bought your domain (e.g. Namecheap, GoDaddy, Hostinger) and replace the existing nameservers with those 2 Cloudflare nameservers.</li>
              </ol>
            </div>

            {/* Step 4 */}
            <div className="bg-[#0e2c20] p-5 rounded-2xl border border-[#1a4a35] space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-[#c5a059] text-[#081a13] font-bold text-xs flex items-center justify-center">
                  4
                </span>
                <h4 className="font-serif text-base font-bold text-white">
                  Step 4: Configure Free Automatic SSL (HTTPS)
                </h4>
              </div>
              <div className="space-y-2 text-xs">
                <p>
                  Cloudflare provides a <strong>free universal SSL certificate</strong> automatically once your domain is verified!
                </p>
                <div className="p-3 bg-[#081a13] rounded-xl border border-[#1a4a35] space-y-1 text-xs">
                  <p className="flex items-center gap-2 text-white">
                    <Shield size={14} className="text-[#25D366]" />
                    <span>In Cloudflare Dashboard, go to <strong>SSL/TLS</strong>:</span>
                  </p>
                  <p className="pl-6 text-[#a49a88]">• Set SSL/TLS encryption mode to: <strong className="text-white">Full</strong></p>
                  <p className="pl-6 text-[#a49a88]">• Under <strong>Edge Certificates</strong>, turn ON: <strong className="text-white">Always Use HTTPS</strong></p>
                  <p className="pl-6 text-[#a49a88]">• Turn ON: <strong className="text-white">Automatic HTTPS Rewrites</strong></p>
                </div>
                <p className="text-[#25D366] font-semibold flex items-center gap-1.5 pt-1">
                  <CheckCircle2 size={14} />
                  <span>Your website will now display the green security padlock at https://ourtripafrica.com!</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#081a13]/95 backdrop-blur-md border-t border-[#1a4a35] px-6 py-4 flex items-center justify-between">
          <span className="text-xs text-[#a49a88]">
            Need help? Email <a href={`mailto:${COMPANY_DETAILS.supportEmail}`} className="text-[#c5a059] underline">{COMPANY_DETAILS.supportEmail}</a>
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#c5a059] text-[#081a13] font-bold text-xs hover:bg-[#d6b36d] cursor-pointer"
          >
            Got It, Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
