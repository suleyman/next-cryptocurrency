import React from "react";
import Link from "next/link"

const MarketTrendItem: React.FC = () => {
  return (
    <div className="text-white bg-white bg-opacity-5 py-6 px-16 rounded-2xl border-2 border-white border-opacity-10">
      <div className="flex items-center">
        <img src="btc.svg" className="rounded-full" alt="" />
        <span className="mr-5 ml-5">BTC</span>
        <span className="bg-gray-300 text-black text-xs rounded-md p-1">BITCOIN</span>
        <Link href="#">
          <a className="bg-white bg-opacity-10 rounded-full p-2 ml-auto">
            <img src="arrow-up-right.svg" alt="" />
          </a>
        </Link>
      </div>
      <div className="my-4 border-b-2 border-gray-200 border-opacity-5"></div>
      <div className="flex">
        <div>
          <span className="block text-white text-lg font-medium">$56,623.54</span>
          <span className="block text-gray-600">1.41%</span>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
};

export default MarketTrendItem;