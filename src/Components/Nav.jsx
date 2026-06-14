import { useState } from 'react';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../Constants';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="padding-x py-8 absolute z-50 w-full">
      <nav className="flex justify-between items-center max-container" aria-label="Main Navigation">
        {/* Logo */}
        <a href="/" aria-label="Home">
          <img 
            src={headerLogo} 
            alt="Company Logo" 
            width={130} 
            height={30} 
            className="object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a 
                href={item.href} 
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red transition-colors duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="hidden max-lg:block">
          <button
            type="button"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
            className="p-2 cursor-pointer hover:opacity-70 transition-opacity focus-visible:outline-2 focus-visible:outline-coral-red rounded"
          >
            <img 
              src={hamburger} 
              alt="" 
              aria-hidden="true" 
              width={25} 
              height={25} 
            />
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md py-6 hidden max-lg:block border-t border-slate-100 animate-fadeIn">
            <ul className="flex flex-col items-center gap-6">
              {navLinks.map((item) => (
                <li key={item.label} className="w-full text-center">
                  <a 
                    href={item.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 font-montserrat text-lg text-slate-gray hover:text-coral-red w-full transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
