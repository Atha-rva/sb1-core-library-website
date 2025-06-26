import React, { useState } from 'react';
import { Play, Copy, Check, Code2 } from 'lucide-react';

const Examples = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState('');

  const examples = [
    {
      category: 'Array Manipulation',
      title: 'Working with Arrays',
      description: 'Powerful utilities for array operations like chunking, filtering, and transformation.',
      code: `import { chunk, uniq, groupBy, flatten } from '@coreutils/array';

// Chunk array into smaller arrays
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const chunked = chunk(numbers, 3);
console.log(chunked); // [[1, 2, 3], [4, 5, 6], [7, 8]]

// Remove duplicates
const duplicates = [1, 2, 2, 3, 3, 4, 5];
const unique = uniq(duplicates);
console.log(unique); // [1, 2, 3, 4, 5]

// Group array of objects
const users = [
  { name: 'John', role: 'admin' },
  { name: 'Jane', role: 'user' },
  { name: 'Bob', role: 'admin' }
];
const grouped = groupBy(users, 'role');
console.log(grouped);
// { admin: [...], user: [...] }

// Flatten nested arrays
const nested = [[1, 2], [3, [4, 5]], 6];
const flat = flatten(nested);
console.log(flat); // [1, 2, 3, 4, 5, 6]`,
      output: `[[1, 2, 3], [4, 5, 6], [7, 8]]
[1, 2, 3, 4, 5]
{ admin: [{ name: 'John', role: 'admin' }, { name: 'Bob', role: 'admin' }], user: [{ name: 'Jane', role: 'user' }] }
[1, 2, 3, 4, 5, 6]`
    },
    {
      category: 'Object Operations',
      title: 'Object Utilities',
      description: 'Transform and manipulate objects with ease using deep merge, pick, and omit operations.',
      code: `import { pick, omit, deepMerge, has } from '@coreutils/object';

const user = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
  password: 'secret',
  profile: {
    age: 30,
    city: 'New York'
  }
};

// Pick specific properties
const publicUser = pick(user, ['id', 'name', 'email']);
console.log(publicUser);

// Omit sensitive data
const safeUser = omit(user, ['password']);
console.log(safeUser);

// Deep merge objects
const updates = {
  profile: {
    age: 31,
    country: 'USA'
  }
};
const merged = deepMerge(user, updates);
console.log(merged.profile);

// Check if property exists
const hasEmail = has(user, 'email');
const hasPhone = has(user, 'profile.phone');
console.log({ hasEmail, hasPhone });`,
      output: `{ id: 1, name: 'John Doe', email: 'john@example.com' }
{ id: 1, name: 'John Doe', email: 'john@example.com', profile: { age: 30, city: 'New York' } }
{ age: 31, city: 'New York', country: 'USA' }
{ hasEmail: true, hasPhone: false }`
    },
    {
      category: 'String Processing',
      title: 'String Transformations',
      description: 'Format, validate, and transform strings with comprehensive string utilities.',
      code: `import { 
  camelCase, 
  kebabCase, 
  snakeCase,
  truncate,
  capitalize,
  isEmail
} from '@coreutils/string';

// Case transformations
const title = 'hello world example';
console.log('camelCase:', camelCase(title));
console.log('kebab-case:', kebabCase(title));
console.log('snake_case:', snakeCase(title));

// String formatting
const longText = 'This is a very long text that needs to be truncated';
console.log('truncated:', truncate(longText, 30));

const name = 'john doe';
console.log('capitalized:', capitalize(name));

// Validation
const emails = ['test@example.com', 'invalid-email', 'user@domain.co.uk'];
emails.forEach(email => {
  console.log(\`\${email}: \${isEmail(email) ? 'valid' : 'invalid'}\`);
});`,
      output: `camelCase: helloWorldExample
kebab-case: hello-world-example
snake_case: hello_world_example
truncated: This is a very long text th...
capitalized: John Doe
test@example.com: valid
invalid-email: invalid
user@domain.co.uk: valid`
    },
    {
      category: 'Async Operations',
      title: 'Async Utilities',
      description: 'Handle asynchronous operations with retry logic, delays, and parallel execution.',
      code: `import { delay, retry, parallel, series } from '@coreutils/async';

// Simple delay
async function example1() {
  console.log('Starting...');
  await delay(1000); // Wait 1 second
  console.log('Done!');
}

// Retry failed operations
async function unreliableAPI() {
  if (Math.random() > 0.7) {
    throw new Error('API failed');
  }
  return { data: 'Success!' };
}

const result = await retry(unreliableAPI, {
  maxAttempts: 3,
  delay: 500
});
console.log('API result:', result);

// Parallel execution
const tasks = [
  () => fetch('/api/users'),
  () => fetch('/api/posts'),
  () => fetch('/api/comments')
];

const results = await parallel(tasks);
console.log('All APIs completed:', results.length);

// Series execution
const steps = [
  () => console.log('Step 1'),
  () => delay(500).then(() => console.log('Step 2')),
  () => console.log('Step 3')
];

await series(steps);
console.log('All steps completed');`,
      output: `Starting...
Done!
API result: { data: 'Success!' }
All APIs completed: 3
Step 1
Step 2
Step 3
All steps completed`
    }
  ];

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(code);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <section id="examples" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Interactive Examples
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Explore real-world examples and see how CoreUtils can simplify your code.
            All examples are runnable and demonstrate best practices.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8">
          {examples.map((example, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 m-2 rounded-lg font-medium transition-all duration-200 ${
                activeTab === index
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:text-blue-600 hover:bg-blue-50 border border-gray-200'
              }`}
            >
              {example.category}
            </button>
          ))}
        </div>

        {/* Active Example */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Example Header */}
            <div className="px-8 py-6 border-b border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {examples[activeTab].title}
              </h3>
              <p className="text-gray-600">
                {examples[activeTab].description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Code Panel */}
              <div className="bg-gray-900">
                <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
                  <div className="flex items-center space-x-2">
                    <Code2 size={18} className="text-gray-400" />
                    <span className="text-white font-medium">Code</span>
                  </div>
                  <button
                    onClick={() => copyCode(examples[activeTab].code)}
                    className="flex items-center space-x-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                  >
                    {copied === examples[activeTab].code ? (
                      <Check size={16} className="text-green-400" />
                    ) : (
                      <Copy size={16} className="text-gray-400" />
                    )}
                    <span className="text-gray-300 text-sm">
                      {copied === examples[activeTab].code ? 'Copied!' : 'Copy'}
                    </span>
                  </button>
                </div>
                <pre className="p-6 text-sm text-gray-300 overflow-x-auto h-96 lg:h-[500px]">
                  <code>{examples[activeTab].code}</code>
                </pre>
              </div>

              {/* Output Panel */}
              <div className="bg-gray-50">
                <div className="flex items-center justify-between px-6 py-4 bg-gray-100 border-b border-gray-200">
                  <div className="flex items-center space-x-2">
                    <Play size={18} className="text-gray-600" />
                    <span className="text-gray-800 font-medium">Output</span>
                  </div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <pre className="p-6 text-sm text-gray-800 h-96 lg:h-[500px] overflow-y-auto">
                  <code>{examples[activeTab].output}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Try These Examples
            </h3>
            <p className="text-gray-600 mb-6">
              Install CoreUtils and start using these utilities in your project today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                Get Started
              </button>
              <button className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200">
                View Full Documentation →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Examples;