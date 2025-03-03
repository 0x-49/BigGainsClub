import React from 'react';

const AFFILIATE_URL = "https://whop.com/big-gains-club/?a=digitalartlab"; // Replace with your actual affiliate URL

const CTASection4 = () => {
  return (
    <div className="responsive-container relative py-20">
      <div className="text-center">
        <p className="text-blue-1200 dark:text-blue-8400 mb-12 max-w-3xl mx-auto text-xl leading-relaxed">
          Stop hesitating, start dominating.  Unlock real-time signals, daily mentorship, and the community that will change your trading game.
        </p>
        <a
          href={AFFILIATE_URL}
          className="inline-block px-10 py-5 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-black rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xl font-bold"
        >
          Unlock Your Edge
        </a>
      </div>
    </div>
  );
};

export default CTASection4;
