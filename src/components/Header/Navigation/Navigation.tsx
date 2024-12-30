import React from 'react';
import { NavDropdown } from './NavDropdown';
import { NavLink } from './NavLink';

interface NavigationProps {
  mobile?: boolean;
}

export function Navigation({ mobile = false }: NavigationProps) {
  return (
    <nav className={`${mobile ? 'flex flex-col space-y-4 px-2' : 'hidden md:flex items-center space-x-4'}`}>
      <NavDropdown
        label="Teams"
        items={[
          { label: 'Team Alpha', to: '/teams/alpha' },
          { label: 'Team Bravo', to: '/teams/bravo' },
          { label: 'Team Delta', to: '/teams/delta' },
          { label: 'Team Papa Bear', to: '/teams/papa' },
        ]}
        mobile={mobile}
      />
      <NavLink to="/about" mobile={mobile}>About</NavLink>
      <NavLink to="/pricing" mobile={mobile}>Pricing</NavLink>
      <NavLink to="/contact" mobile={mobile}>Contact</NavLink>
    </nav>
  );
}