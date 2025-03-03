import React from 'react';

const AFFILIATE_URL = "https://whop.com/big-gains-club/?a=digitalartlab"; // Replace with your actual affiliate URL

const CTASection1 = () => {
  return (
    <div className="responsive-container relative py-20">
      <div className="text-center">
        <p className="text-blue-1200 dark:text-blue-8400 mb-12 max-w-3xl mx-auto text-xl leading-relaxed">
          Stop watching from the sidelines.  Demand your gains.  Start trading like the 1%.  Real mentorship and signals are waiting.
        </p>
        <a
          href={AFFILIATE_URL}
          className="inline-block px-10 py-5 bg-gradient-to-r from-red-700 to-black hover:from-red-800 hover:to-gray-900 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xl font-bold uppercase"
        >
          Claim Your Gains Now
        </a>
      </div>
    </div>
  );
};

export default CTASection1;
