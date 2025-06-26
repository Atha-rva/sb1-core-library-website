import React, { useState } from 'react';
import {
  Search,
  Book,
  ExternalLink,
  ChevronRight,
  Filter,
  Copy,
  Check
} from 'lucide-react';

interface Method {
  name: string;
  category: string;
  description: string;
  signature: string;
  example: string;
}

const Documentation = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMethod, setSelectedMethod] = useState<Method | null>(null);
  const [copied, setCopied] = useState('');

  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(''), 2000);
  };

  const categories = ['All', 'Array', 'Object', 'String', 'Async', 'Math', 'Date'];

  const methods = [
    {
      name: 'chunk',
      category: 'Array',
      description: 'Creates an array of elements split into groups the length of size.',
      signature: 'chunk<T>(array: T[], size: number): T[][]',
      example: "chunk([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]"
    },
    {
      name: 'uniq',
      category: 'Array',
      description: 'Creates a duplicate-free version of an array.',
      signature: 'uniq<T>(array: T[]): T[]',
      example: "uniq([1, 2, 2, 3, 3, 4]) // [1, 2, 3, 4]"
    },
    {
      name: 'groupBy',
      category: 'Array',
      description: 'Creates an object composed of keys generated from the results of running each element through iteratee.',
      signature: 'groupBy<T>(array: T[], key: keyof T | ((item: T) => string)): Record<string, T[]>',
      example: "groupBy(users, 'role') // { admin: [...], user: [...] }"
    },
    {
      name: 'pick',
      category: 'Object',
      description: 'Creates an object composed of the picked object properties.',
      signature: 'pick<T, K extends keyof T>(object: T, keys: K[]): Pick<T, K>',
      example: "pick(user, ['name', 'email']) // { name: '...', email: '...' }"
    },
    {
      name: 'omit',
      category: 'Object',
      description: 'Creates an object composed of the own and inherited enumerable property paths of object that are not omitted.',
      signature: 'omit<T, K extends keyof T>(object: T, keys: K[]): Omit<T, K>',
      example: "omit(user, ['password']) // user without password field"
    },
    {
      name: 'deepMerge',
      category: 'Object',
      description: 'Recursively merges own and inherited enumerable string keyed properties of source objects.',
      signature: 'deepMerge<T extends Record<string, any>>(target: T, ...sources: Partial<T>[]): T',
      example: "deepMerge(obj1, obj2) // merged object with nested properties"
    },
    {
      name: 'camelCase',
      category: 'String',
      description: 'Converts string to camel case.',
      signature: 'camelCase(str: string): string',
      example: "camelCase('hello world') // 'helloWorld'"
    },
    {
      name: 'kebabCase',
      category: 'String',
      description: 'Converts string to kebab case.',
      signature: 'kebabCase(str: string): string',
      example: "kebabCase('Hello World') // 'hello-world'"
    },
    {
      name: 'truncate',
      category: 'String',
      description: 'Truncates string if it\'s longer than the given maximum string length.',
      signature: 'truncate(str: string, length: number, suffix?: string): string',
      example: "truncate('Long text...', 10) // 'Long te...'"
    },
    {
      name: 'delay',
      category: 'Async',
      description: 'Creates a promise that resolves after the specified delay.',
      signature: 'delay(ms: number): Promise<void>',
      example: "await delay(1000) // Wait 1 second"
    },
    {
      name: 'retry',
      category: 'Async',
      description: 'Retries an async function with configurable options.',
      signature: 'retry<T>(fn: () => Promise<T>, options?: RetryOptions): Promise<T>',
      example: "await retry(apiCall, { maxAttempts: 3 })"
    },
    {
      name: 'parallel',
      category: 'Async',
      description: 'Executes multiple async functions in parallel.',
      signature: 'parallel<T>(tasks: (() => Promise<T>)[]): Promise<T[]>',
      example: "await parallel([api1, api2, api3])"
    }
  ];

  const filteredMethods = methods.filter(method => {
    const matchesSearch = method.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         method.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || method.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="docs" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            API Documentation
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Comprehensive documentation for all CoreUtils functions with TypeScript signatures and examples.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search methods..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-12 pr-8 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white min-w-[150px]"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-600 border-gray-300 hover:bg-blue-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Methods List */}
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-6">
            {filteredMethods.map((method, index) => (
              <div
                key={method.name}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-xl font-semibold text-gray-900">{method.name}</h3>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {method.category}
                    </span>
                  </div>
                  <button
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                    onClick={() => setSelectedMethod(method)}
                  >
                    <ExternalLink size={18} />
                  </button>
                </div>

                <p className="text-gray-600 mb-4">{method.description}</p>

                {/* Signature */}
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-semibold text-gray-700">Signature</h4>
                    <button onClick={() => copy(method.signature)}>
                      {copied === method.signature ? (
                        <Check size={16} className="text-green-500" />
                      ) : (
                        <Copy size={16} className="text-gray-500" />
                      )}
                    </button>
                  </div>
                  <code className="text-sm text-gray-800 font-mono">{method.signature}</code>
                </div>

                {/* Example */}
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-semibold text-blue-700">Example</h4>
                    <button onClick={() => copy(method.example)}>
                      {copied === method.example ? (
                        <Check size={16} className="text-green-500" />
                      ) : (
                        <Copy size={16} className="text-blue-700" />
                      )}
                    </button>
                  </div>
                  <code className="text-sm text-blue-800 font-mono">{method.example}</code>
                </div>
              </div>
            ))}
        </div>

        {filteredMethods.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search size={24} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No methods found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
        )}
      </div>

      {selectedMethod && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSelectedMethod(null)}
        >
          <div
            className="bg-white rounded-xl p-6 max-w-lg w-full mx-4"
            onClick={e => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-4">
              {selectedMethod.name}
              <span className="ml-3 px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                {selectedMethod.category}
              </span>
            </h3>
            <p className="text-gray-600 mb-4">{selectedMethod.description}</p>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-semibold text-gray-700">Signature</h4>
                <button onClick={() => copy(selectedMethod.signature)}>
                  {copied === selectedMethod.signature ? (
                    <Check size={16} className="text-green-500" />
                  ) : (
                    <Copy size={16} className="text-gray-500" />
                  )}
                </button>
              </div>
              <code className="text-sm text-gray-800 font-mono">{selectedMethod.signature}</code>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-semibold text-blue-700">Example</h4>
                <button onClick={() => copy(selectedMethod.example)}>
                  {copied === selectedMethod.example ? (
                    <Check size={16} className="text-green-500" />
                  ) : (
                    <Copy size={16} className="text-blue-700" />
                  )}
                </button>
              </div>
              <code className="text-sm text-blue-800 font-mono">{selectedMethod.example}</code>
            </div>
            <button
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold"
              onClick={() => setSelectedMethod(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Documentation CTA */}
      <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Book size={32} className="text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Documentation
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              This is just a preview. Access the full documentation with detailed guides, 
              tutorials, and advanced usage patterns.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl"
                onClick={() => {
                  window.location.hash = '/docs';
                }}
              >
                <span>View Full Docs</span>
                <ChevronRight size={20} />
              </button>
              <button className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-200">
                Download PDF Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documentation;
