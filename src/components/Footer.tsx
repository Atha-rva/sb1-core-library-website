import React from 'react';
import { Github, Twitter, Mail, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
  const links = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Documentation', href: '#docs' },
      { name: 'Examples', href: '#examples' },
      { name: 'Changelog', href: '#' },
      { name: 'Roadmap', href: '#' }
    ],
    developers: [
      { name: 'API Reference', href: '#' },
      { name: 'TypeScript Definitions', href: '#' },
      { name: 'Contributing Guide', href: '#' },
      { name: 'Code of Conduct', href: '#' },
      { name: 'Security Policy', href: '#' }
    ],
    resources: [
      { name: 'Blog', href: '#' },
      { name: 'Tutorials', href: '#' },
      { name: 'Community', href: '#community' },
      { name: 'Support', href: '#' },
      { name: 'Status Page', href: '#' }
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'License', href: '#' },
      { name: 'Contact', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/coreutils/coreutils', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com/coreutilsjs', label: 'Twitter' },
    { icon: Mail, href: 'mailto:hello@coreutils.dev', label: 'Email' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CU</span>
              </div>
              <span className="text-xl font-bold">CoreUtils</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              The modern utility library for JavaScript. Lightweight, type-safe, and designed for developers who care about code quality.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {links.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Developers</h4>
            <ul className="space-y-3">
              {links.developers.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-1">2.4M+</div>
              <div className="text-gray-400 text-sm">Monthly Downloads</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400 mb-1">15.2K</div>
              <div className="text-gray-400 text-sm">GitHub Stars</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400 mb-1">180+</div>
              <div className="text-gray-400 text-sm">Contributors</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400 mb-1">99.9%</div>
              <div className="text-gray-400 text-sm">Uptime</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © 2025 CoreUtils. All rights reserved.
              </p>
              <div className="flex items-center space-x-1 text-gray-400">
                <span className="text-sm">Made with</span>
                <Heart size={14} className="text-red-500" />
                <span className="text-sm">for developers</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-400 text-sm">All systems operational</span>
              </div>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center space-x-1"
              >
                <span>View Status</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;