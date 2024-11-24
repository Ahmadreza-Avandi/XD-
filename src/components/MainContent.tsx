// @ts-ignore
import React from 'react';
import { ConnectButton } from './ConnectButton';
import { Info } from 'lucide-react';

export function MainContent() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center p-6 mt-16 mb-20">
      <div className="text-center space-y-8 max-w-md">
        <h1 className="text-4xl font-bold text-white mb-4">
          Free Ton coin
        </h1>
        
        <div className="bg-[#1C2127] p-6 rounded-xl border border-[#2D3139]">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-gray-400">
              <span>Transaction Fee</span>
              <span className="font-mono">0.01 TON</span>
            </div>
            <div className="flex items-center justify-between text-gray-400">
              <span>Network</span>
              <span className="text-[#0098EA]">TON </span>
            </div>
          </div>
        </div>

        <ConnectButton />

        <div className="flex items-start space-x-2 bg-[#1C2127]/50 p-4 rounded-lg">
          <Info className="w-5 h-5 text-[#0098EA] mt-1 flex-shrink-0" />
          <p className="text-sm text-gray-400 text-left">
            Connect your TON wallet to recive toncoin. A small network fee of 0.01 TON will be applied to process your transaction securely.
          </p>
        </div>
      </div>
    </main>
  );
}