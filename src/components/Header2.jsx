import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full   bg-slate-900 text-blue-500 relative">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <h1 className="text-5xl font-bold">LOGO</h1>

        {/* Desktop */}
        <nav className="hidden lg:flex gap-6 text-lg">
          {menuItems.map((item) => (
            <Link key={item.name} to={item.path} className="text-slate-300 hover:underline hover:text-blue-500">
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Burger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col gap-1.5 z-50 cursor-pointer"
        >
          <span
            className={`block h-[3px] w-[30px] bg-white transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-[3px] w-[30px] bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[3px] w-[30px] bg-white transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-slate-900 shadow-lg text-center text-slate-300 pt-9 transform transition-all duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col p-6 gap-6">
          {menuItems.map((item, index) => (
            <div
              key={item.name}
              className={`transition-all duration-300 ${
                isOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-5"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-lg hover:underline"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}