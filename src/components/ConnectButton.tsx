import React, { useState } from 'react';
import { Wallet, Loader2 } from 'lucide-react';

export function ConnectButton() {
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = async () => {
    setIsConnecting(true);
    // Here you would typically integrate with TON Connect SDK
    setTimeout(() => setIsConnecting(false), 1500);
  };

  return (
    <button 
      onClick={handleConnect}
      disabled={isConnecting}
      className="w-full bg-[#0098EA] hover:bg-[#00A9FF] disabled:bg-[#0098EA]/50 
                transition-all duration-300 text-white font-bold py-4 px-8 
                rounded-xl flex items-center justify-center space-x-3 
                shadow-lg shadow-[#0098EA]/20 hover:scale-[1.02] transform"
    >
      {isConnecting ? (
        <>
          <Loader2 className="w-6 h-6 animate-spin" />
          <span className="text-xl">Connecting...</span>
        </>
      ) : (
        <>
          <Wallet className="w-6 h-6" />
          <span className="text-xl">Connect Wallet</span>
        </>
      )}
    </button>
  );
}