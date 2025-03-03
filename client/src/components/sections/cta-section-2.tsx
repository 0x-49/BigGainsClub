import React from 'react';

const AFFILIATE_URL = "https://whop.com/big-gains-club/?a=digitalartlab"; // Replace with your actual affiliate URL

const CTASection2 = () => {
  return (
    <div className="responsive-container relative py-20">
      <div className="text-center">
        <p className="text-blue-1200 dark:text-blue-8400 mb-12 max-w-3xl mx-auto text-xl leading-relaxed">
          Tired of trading losses?  It's time to flip the script.  Big Gains Club Premium delivers the edge you need to finally profit consistently.
        </p>
        <a
          href={AFFILIATE_URL}
          className="inline-block px-10 py-5 bg-gradient-to-r from-green-600 to-lime-600 hover:from-green-700 hover:to-lime-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xl font-bold"
        >
          Start Profiting Today
        </a>
      </div>
    </div>
  );
};

export default CTASection2;
