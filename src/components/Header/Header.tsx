import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import { Navigation } from './Navigation/Navigation';
import { Button } from '../Button';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Announcement Strip */}
      <div className="fixed top-0 left-0 right-0 bg-cyan-500/10 backdrop-blur-sm border-b border-cyan-500/20 z-40">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <p className="text-center text-xs sm:text-sm text-cyan-400">
            <span className="font-medium">Limited Time Offer:</span>{' '}
            <a 
              href="https://calendly.com/shreyasrajsony11/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-cyan-300 transition-colors duration-300"
            >
              Book Your Free Business Audit
            </a>
          </p>
        </div>
      </div>

      {/* Main Header */}
      <header className="fixed top-12 sm:top-16 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-auto">
        <div className="bg-cyan-950/30 backdrop-blur-xl border border-cyan-500/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:border-cyan-500/30 transition-all duration-300">
          <div className="flex items-center justify-between sm:space-x-8">
            <Link to="/" className="interactive">
              <Logo />
            </Link>
            
            {/* Mobile menu button */}
            <button 
              className="sm:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-cyan-400" />
              ) : (
                <Menu className="w-6 h-6 text-cyan-400" />
              )}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden sm:flex items-center space-x-8">
              <Navigation />
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-fuchsia-600 to-cyan-600 hover:from-fuchsia-500 hover:to-cyan-500"
                onClick={() => window.open('https://calendly.com/shreyasrajsony11/30min', '_blank')}
              >
                Get Quote
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="sm:hidden mt-4 py-4 border-t border-cyan-500/20">
              <Navigation mobile />
              <div className="mt-4 px-2">
                <Button 
                  size="sm"
                  className="w-full bg-gradient-to-r from-fuchsia-600 to-cyan-600"
                  onClick={() => window.open('https://calendly.com/shreyasrajsony11/30min', '_blank')}
                >
                  Get Quote
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}