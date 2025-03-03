import React from 'react';

const AFFILIATE_URL = "https://whop.com/big-gains-club/?a=digitalartlab"; // Replace with your actual affiliate URL

const CTASection6 = () => {
  return (
    <div className="responsive-container relative py-20">
      <div className="text-center">
        <p className="text-blue-1200 dark:text-blue-8400 mb-12 max-w-3xl mx-auto text-xl leading-relaxed">
          Transform yourself from struggling trader to market dominator. The tools, mentorship, and community you need are here.
        </p>
        <a
          href={AFFILIATE_URL}
          className="inline-block px-10 py-5 bg-gradient-to-r from-indigo-700 to-blue-700 hover:from-indigo-800 hover:to-blue-800 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xl font-semibold"
        >
          Transform Your Trading
        </a>
      </div>
    </div>
  );
};

export default CTASection6;
