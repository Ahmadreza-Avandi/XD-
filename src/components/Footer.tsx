import React from 'react';
import { Shield, HelpCircle, FileText } from 'lucide-react';

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-[#1C2127] border-t border-[#2D3139] backdrop-blur-sm bg-opacity-80">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            © 2024 TON Connect. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
              <Shield className="w-4 h-4" />
              <span>Security</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
              <FileText className="w-4 h-4" />
              <span>Terms</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
              <HelpCircle className="w-4 h-4" />
              <span>Support</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}