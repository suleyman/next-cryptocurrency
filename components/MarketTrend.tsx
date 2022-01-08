import React from "react";
import MarketTrendItem from "./MarketTrendItem";

const MarketTrend: React.FC = () => {
  return (
    <section className="mt-16">
      <div className="container">
        <h2 className="text-white font-bold text-2xl mb-8">Market Trend</h2>
        <div className="grid grid-cols-3 gap-4">
          {[...Array(3)].map((x, i) =>
            <MarketTrendItem key={i} />
          )}
        </div>
      </div>
    </section>
  );
};

export default MarketTrend;