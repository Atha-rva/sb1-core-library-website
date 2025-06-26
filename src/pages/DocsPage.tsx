import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Documentation from '../components/Documentation';

const DocsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header docsPage />
      {/* Give space for fixed header */}
      <main className="pt-24">
        <Documentation />
      </main>
      <Footer />
    </div>
  );
};

export default DocsPage;
