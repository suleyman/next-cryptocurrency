import React from "react";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section>
      <div className="container mx-auto text-center mt-28">
        <h1 className="text-4xl text-white font-bold mb-4">Start and Build Your Crypto Portfolio Here</h1>
        <h3 className="text-gray-400 text-md">
          Only at CryptoCap, you can build a good portfolio and learn <br />
          best practices
          about cryptocurrency
        </h3>
        <Link href="#">
          <a className="button px-9 py-4 mt-8 inline-block">Get Started</a>
        </Link>
      </div>
    </section>
  );
};

export default Hero;