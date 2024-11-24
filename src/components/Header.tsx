import React from 'react';
import { Wallet } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#1C2127] border-b border-[#2D3139] backdrop-blur-sm bg-opacity-80">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Wallet className="w-8 h-8 text-[#0098EA]" />
            <span className="text-xl font-bold text-white">TON Connect</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm px-3 py-1 rounded-full bg-[#0098EA]/10 text-[#0098EA] border border-[#0098EA]/20">
              Mainnet
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}