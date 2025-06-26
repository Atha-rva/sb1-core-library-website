import React from 'react';
import { 
  Layers, 
  Zap, 
  Shield, 
  Code, 
  Smartphone, 
  GitBranch,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: 'Performance First',
      description: 'Optimized algorithms and zero dependencies ensure minimal impact on your bundle size.',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: Shield,
      title: 'Type Safety',
      description: 'Written in TypeScript with comprehensive type definitions for better developer experience.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Layers,
      title: 'Modular Design',
      description: 'Tree-shakable modules allow you to import only the utilities you need.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Code,
      title: 'Developer Friendly',
      description: 'Intuitive API design with comprehensive documentation and examples.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Smartphone,
      title: 'Cross Platform',
      description: 'Works seamlessly in browsers, Node.js, and React Native environments.',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: GitBranch,
      title: 'Battle Tested',
      description: 'Used by thousands of developers with comprehensive test coverage.',
      color: 'bg-indigo-100 text-indigo-600'
    }
  ];

  const codeExamples = [
    {
      title: 'Array Utilities',
      code: `import { chunk, uniq, flatten } from '@coreutils/array';

const data = [1, 2, 3, 4, 5, 6, 7, 8];
const chunked = chunk(data, 3);
// [[1, 2, 3], [4, 5, 6], [7, 8]]

const duplicates = [1, 2, 2, 3, 3, 4];
const unique = uniq(duplicates);
// [1, 2, 3, 4]`
    },
    {
      title: 'Object Utilities',
      code: `import { pick, omit, deepMerge } from '@coreutils/object';

const user = { id: 1, name: 'John', email: 'john@example.com', age: 30 };
const publicUser = pick(user, ['name', 'email']);
// { name: 'John', email: 'john@example.com' }

const merged = deepMerge(obj1, obj2);
// Deep merge with nested objects`
    },
    {
      title: 'String Utilities',
      code: `import { camelCase, kebabCase, truncate } from '@coreutils/string';

const title = 'hello world example';
const camelCased = camelCase(title);
// 'helloWorldExample'

const longText = 'This is a very long text...';
const short = truncate(longText, 20);
// 'This is a very long...'`
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why Choose CoreUtils?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Built with modern JavaScript best practices, CoreUtils provides everything you need 
            to write cleaner, more maintainable code.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={feature.title}
                className="group p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                  <IconComponent size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Code Examples */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              See It In Action
            </h3>
            <p className="text-lg text-gray-600">
              Simple, powerful utilities for common JavaScript operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {codeExamples.map((example, index) => (
              <div key={example.title} className="bg-gray-900 rounded-xl overflow-hidden shadow-lg">
                <div className="px-6 py-4 bg-gray-800 border-b border-gray-700">
                  <h4 className="text-white font-semibold">{example.title}</h4>
                </div>
                <pre className="p-6 text-sm text-gray-300 overflow-x-auto">
                  <code>{example.code}</code>
                </pre>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of developers who are already using CoreUtils to build better applications.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl"
                onClick={() => {
                  window.location.hash = '/docs';
                }}
              >
                <span>View Documentation</span>
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-200">
                Browse Examples
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;