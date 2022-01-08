import React from "react";


const Features: React.FC = () => {
  const featuresData = [
    {
      title: "Manage Portfolio",
      icon: "manage-portfolio.svg",
      text: "Buy and sell popular digital currencies, keep track of them in the one place."
    },
    {
      title: "Manage Portfolio",
      icon: "manage-portfolio.svg",
      text: "Buy and sell popular digital currencies, keep track of them in the one place."
    },
    {
      title: "Manage Portfolio",
      icon: "manage-portfolio.svg",
      text: "Buy and sell popular digital currencies, keep track of them in the one place."
    },
    {
      title: "Manage Portfolio",
      icon: "manage-portfolio.svg",
      text: "Buy and sell popular digital currencies, keep track of them in the one place."
    }
  ];
  return (
    <section className="mt-16">
      <div className="container">
        <h1 className="text-4xl text-center text-white font-bold mb-4">CryptoCap Amazing Features</h1>
        <h3 className="text-center text-white">
          Explore sensational features to prepare your best investment in
          cryptocurrency</h3>
        <div className="flex gap-8 mt-8">
          {featuresData.map((feature, index) => (
            <div className="feature-card" key={index}>
              <img src={feature.icon} alt={feature.title} />
              <h5 className="mt-8 mb-4 font-bold">{feature.title}</h5>
              <p className="text-gray-600">
                {feature.text}
              </p>
              <button type="button" className="mt-4 text-primary">See Explained</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;