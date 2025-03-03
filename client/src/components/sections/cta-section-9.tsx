import React from 'react';

const AFFILIATE_URL = "https://whop.com/big-gains-club/?a=digitalartlab"; // Replace with your actual affiliate URL

const CTASection9 = () => {
  return (
    <div className="responsive-container relative py-20">
      <div className="text-center">
        <p className="text-blue-1200 dark:text-blue-8400 mb-12 max-w-3xl mx-auto text-xl leading-relaxed">
          Premium access. Premium results. Premium community.  Step into the world of elite trading with Big Gains Club Premium.
        </p>
        <a
          href={AFFILIATE_URL}
          className="inline-block px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-black rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xl font-semibold"
        >
          Access Premium Trading
        </a>
      </div>
    </div>
  );
};

export default CTASection9;
