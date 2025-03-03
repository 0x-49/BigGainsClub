import React from 'react';

const AFFILIATE_URL = "https://whop.com/big-gains-club/?a=digitalartlab"; // Replace with your actual affiliate URL

const CTASection12 = () => {
  return (
    <div className="responsive-container relative py-20">
      <div className="text-center">
        <p className="text-blue-1200 dark:text-blue-8400 mb-12 max-w-3xl mx-auto text-xl leading-relaxed">
          Real signals. Real mentorship. Real gains.  Get everything you need to elevate your trading, all in one place.
        </p>
        <a
          href={AFFILIATE_URL}
          className="inline-block px-10 py-5 bg-gradient-to-r from-lime-700 to-green-700 hover:from-lime-800 hover:to-green-800 text-black rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xl font-bold"
        >
          Get Real Gains Today
        </a>
      </div>
    </div>
  );
};

export default CTASection12;
