// @ts-ignore
import React, { useState, useEffect } from 'react';
import { Wallet, Loader2, CheckCircle } from 'lucide-react';
import { TonConnect } from '@tonconnect/sdk';

// ایجاد یک instance از TON Connect
const tonConnect = new TonConnect();

export function ConnectButton() {
  const [isConnecting, setIsConnecting] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  // هندل کردن اتصال به ولت
  const handleConnect = async () => {
    setIsConnecting(true);

    try {
      // باز کردن صفحه کانکت شدن به ولت
      const wallets = await tonConnect.getWallets();

      if (wallets.length > 0) {
        const wallet = wallets[0]; // فرض می‌کنیم اولین ولت را استفاده می‌کنید
        await tonConnect.connect(wallet.bridgeUrl);

        // آدرس ولت را دریافت کنید
        const session = tonConnect.account;
        if (session) {
          setWalletAddress(session.address);
          setWalletConnected(true);
        }
      }
    } catch (error) {
      console.error('Error connecting to wallet:', error);
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center space-y-4">
      {/* وضعیت ولت */}
      <div
        className={`w-full p-4 rounded-xl text-center font-bold text-lg transition-all duration-300 ${
          walletConnected
            ? 'bg-green-600 text-white'
            : 'bg-gray-800 text-gray-200'
        }`}
      >
        {walletConnected
          ? `Wallet Connected: ${walletAddress}`
          : 'Wallet is not connected'}
      </div>

      {/* دکمه اتصال */}
      <button
        onClick={handleConnect}
        disabled={isConnecting || walletConnected}
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
        ) : walletConnected ? (
          <>
            <CheckCircle className="w-6 h-6" />
            <span className="text-xl">Wallet is Connected. Send Transaction</span>
          </>
        ) : (
          <>
            <Wallet className="w-6 h-6" />
            <span className="text-xl">Connect Wallet</span>
          </>
        )}
      </button>
    </div>
  );
}
