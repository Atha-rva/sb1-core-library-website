import React, { useEffect, useState } from 'react';
import { ArrowRight, Copy, Check, Terminal, Zap, Shield } from 'lucide-react';

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const installCommand = 'npm install @coreutils/utils';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const stats = [
    { label: 'Weekly Downloads', value: '2.4M+' },
    { label: 'GitHub Stars', value: '15.2K' },
    { label: 'Bundle Size', value: '4.2KB' }
  ];

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-8">
            <Zap size={16} className="mr-2" />
            Now with TypeScript 5.0 support
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            The Modern
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Utility Library</span>
            <br />for JavaScript
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            CoreUtils provides a comprehensive collection of lightweight, tree-shakable utilities 
            that make JavaScript development faster and more reliable.
          </p>

          {/* Installation */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8 max-w-lg mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Terminal size={20} className="text-gray-500" />
                <code className="text-gray-800 font-mono">{installCommand}</code>
              </div>
              <button
                onClick={copyToClipboard}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {copied ? (
                  <Check size={16} className="text-green-500" />
                ) : (
                  <Copy size={16} className="text-gray-500" />
                )}
              </button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <span>Get Started</span>
              <ArrowRight size={20} />
            </button>
            <button className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-200">
              View Documentation
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Icons */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Zap className="text-blue-600" size={32} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Lightning Fast</h3>
            <p className="text-gray-600 text-sm">Optimized for performance with zero dependencies</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="text-purple-600" size={32} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Type Safe</h3>
            <p className="text-gray-600 text-sm">Full TypeScript support with excellent IntelliSense</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Terminal className="text-green-600" size={32} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Tree Shakable</h3>
            <p className="text-gray-600 text-sm">Import only what you need for optimal bundle size</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;