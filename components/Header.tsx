import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="py-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#">
            <img src="/logo.svg" alt="Next Cryptocurreny" />
          </Link>
          {/* Navigation */}
          <nav className="mr-auto ml-auto flex gap-8">
            <Link href="#">
              <a className="text-white font-medium hover:text-primary">Home</a>
            </Link>
            <Link href="#">
              <a className="text-white font-medium hover:text-primary">About Us</a>
            </Link>
            <Link href="#">
              <a className="text-white font-medium hover:text-primary">Trade</a>
            </Link>
            <Link href="#">
              <a className="text-white font-medium hover:text-primary">Market</a>
            </Link>
            <Link href="#">
              <a className="text-white font-medium hover:text-primary">Learn</a>
            </Link>
            <Link href="#">
              <a className="text-white font-medium hover:text-primary">Contact</a>
            </Link>
          </nav>
          {/* Language Picker */}
          <div className="text-white mr-8">
            EN
          </div>
          {/* Login  */}
          <Link href="#">
            <a className="button px-8 py-3">Login</a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;