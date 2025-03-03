import React from 'react';

const AFFILIATE_URL = "https://whop.com/big-gains-club/?a=digitalartlab"; // Replace with your actual affiliate URL

const CTASection3 = () => {
  return (
    <div className="responsive-container relative py-20">
      <div className="text-center">
        <p className="text-blue-1200 dark:text-blue-8400 mb-12 max-w-3xl mx-auto text-xl leading-relaxed">
          Don't trade alone and get crushed.  Join the elite. Learn from the best.  Big Gains Club Premium community is your unfair advantage.
        </p>
        <a
          href={AFFILIATE_URL}
          className="inline-block px-10 py-5 bg-gradient-to-r from-blue-900 to-indigo-900 hover:from-blue-800 hover:to-indigo-800 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xl font-semibold"
        >
          Join the Elite Now
        </a>
      </div>
    </div>
  );
};

export default CTASection3;
