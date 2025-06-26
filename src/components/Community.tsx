import React from 'react';
import { 
  Github, 
  MessageCircle, 
  Users, 
  Star, 
  Download, 
  Heart,
  ExternalLink,
  Mail,
  Twitter
} from 'lucide-react';

const Community = () => {
  const stats = [
    { icon: Download, label: 'Weekly Downloads', value: '2.4M+', color: 'text-blue-600' },
    { icon: Star, label: 'GitHub Stars', value: '15.2K', color: 'text-yellow-600' },
    { icon: Users, label: 'Contributors', value: '180+', color: 'text-green-600' },
    { icon: MessageCircle, label: 'Discord Members', value: '3.2K', color: 'text-purple-600' }
  ];

  const contributors = [
    { name: 'Sarah Chen', role: 'Core Maintainer', avatar: 'SC', commits: '1,247' },
    { name: 'Mike Johnson', role: 'Documentation', avatar: 'MJ', commits: '892' },
    { name: 'Alex Rodriguez', role: 'TypeScript Expert', avatar: 'AR', commits: '643' },
    { name: 'Emma Wilson', role: 'Performance', avatar: 'EW', commits: '521' },
    { name: 'David Kim', role: 'Testing', avatar: 'DK', commits: '398' },
    { name: 'Lisa Zhang', role: 'Security', avatar: 'LZ', commits: '267' }
  ];

  const resources = [
    {
      title: 'GitHub Repository',
      description: 'Source code, issues, and contributions',
      icon: Github,
      link: 'https://github.com/coreutils/coreutils',
      color: 'bg-gray-900 text-white'
    },
    {
      title: 'Discord Community',
      description: 'Chat with other developers and get help',
      icon: MessageCircle,
      link: 'https://discord.gg/coreutils',
      color: 'bg-purple-600 text-white'
    },
    {
      title: 'Stack Overflow',
      description: 'Questions and answers tagged with coreutils',
      icon: ExternalLink,
      link: 'https://stackoverflow.com/questions/tagged/coreutils',
      color: 'bg-orange-500 text-white'
    },
    {
      title: 'Twitter Updates',
      description: 'Follow for latest news and updates',
      icon: Twitter,
      link: 'https://twitter.com/coreutilsjs',
      color: 'bg-blue-500 text-white'
    }
  ];

  return (
    <section id="community" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Join Our Community
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            CoreUtils is built by developers, for developers. Join thousands of contributors 
            and users who make this project better every day.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={stat.label} className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4">
                  <IconComponent size={24} className={stat.color} />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Community Resources */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Community Resources
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <a
                  key={resource.title}
                  href={resource.link}
                  className="group block bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-xl ${resource.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                      <IconComponent size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {resource.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{resource.description}</p>
                    </div>
                    <ExternalLink size={16} className="text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Contributors */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Top Contributors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contributors.map((contributor, index) => (
              <div
                key={contributor.name}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {contributor.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{contributor.name}</h4>
                    <p className="text-gray-600 text-sm">{contributor.role}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Commits: {contributor.commits}</span>
                  <Heart size={16} className="text-red-500" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail size={24} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Stay Updated
              </h3>
              <p className="text-gray-600">
                Get the latest updates, tutorials, and community highlights delivered to your inbox.
              </p>
            </div>
            
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-xs text-gray-500 mt-4 text-center">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;