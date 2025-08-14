'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
  IconHome2,
  IconPalette,
} from '@tabler/icons-react';
import { Title, Tooltip, UnstyledButton } from '@mantine/core';
import classes from './DoubleNavbar.module.css';

const mainLinksMockdata = [
  { icon: IconHome2, label: 'Home', href: '/' },
  { icon: IconPalette, label: 'Design system', href: '/design-system' },
];

const getLinksForSection = (activeSection: string) => {
  switch (activeSection) {
    case 'Design system':
      return [
        { name: 'Colors', href: '/design-system' },
        { name: 'Typography', href: '/design-system/typography' },
        { name: 'Icons', href: '/design-system/icons' },
        { name: 'Buttons', href: '/design-system/buttons' },
        { name: 'Badges', href: '/design-system/badges' },
        { name: 'Tables', href: '/design-system/tables' },
        { name: 'Modals', href: '/design-system/modals' }
      ];
    case 'Home':
      return [
        { name: 'Dashboard', href: '/dashboard' }
      ];
    case 'Analytics':
      return [
        { name: 'Traffic', href: '/analytics/traffic' },
        { name: 'User Behavior', href: '/analytics/behavior' },
        { name: 'Conversions', href: '/analytics/conversions' },
        { name: 'Reports', href: '/analytics/reports' }
      ];
    case 'Settings':
      return [
        { name: 'Account', href: '/settings/account' },
        { name: 'Security', href: '/settings/security' },
        { name: 'Notifications', href: '/settings/notifications' },
        { name: 'Preferences', href: '/settings/preferences' }
      ];
    default:
      return [
        { name: 'Overview', href: '/overview' },
        { name: 'Documentation', href: '/docs' },
        { name: 'Settings', href: '/settings' },
        { name: 'Help', href: '/help' }
      ];
  }
};

export function DoubleNavbar() {
  const router = useRouter();
  const pathname = usePathname();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeLink, setActiveLink] = useState('Settings');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine active main link based on current pathname
  const getActiveMainLink = () => {
    if (!mounted) return 'Home'; // Default during SSR
    
    // First check for exact matches
    const currentLink = mainLinksMockdata.find(link => link.href === pathname);
    if (currentLink) return currentLink.label;
    
    // Then check if the current path belongs to any section's sub-links
    const designSystemLinks = ['/design-system', '/design-system/typography', '/design-system/icons', '/design-system/buttons', '/design-system/badges', '/design-system/tables', '/design-system/modals'];
    if (designSystemLinks.includes(pathname) || pathname.startsWith('/design-system/')) {
      return 'Design system';
    }
    
    const homeLinks = ['/dashboard'];
    if (homeLinks.includes(pathname)) {
      return 'Home';
    }
    
    return 'Home'; // Default fallback
  };

  const mainLinks = mainLinksMockdata.map((link) => (
    <Tooltip
      label={link.label}
      position="right"
      withArrow
      transitionProps={{ duration: 0 }}
      key={link.label}
    >
      <UnstyledButton
        onClick={() => router.push(link.href)}
        className={classes.mainLink}
        data-active={link.label === getActiveMainLink() || undefined}
      >
        <link.icon size={22} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  ));

  const currentLinks = getLinksForSection(getActiveMainLink());
  
  const links = currentLinks.map((link) => (
    <a
      className={classes.link}
      data-active={pathname === link.href || undefined}
      href="#"
      onClick={(event) => {
        event.preventDefault();
        router.push(link.href);
      }}
      key={link.name}
    >
      {link.name}
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.wrapper}>
        <div className={classes.aside}>
          <div className={classes.logo}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo/logo-union.svg" alt="Logo" width={36} height={36} />
          </div>
          {mainLinks}
        </div>
        <div className={classes.main}>
          <Title order={4} className={classes.title}>
            {getActiveMainLink()}
          </Title>

          {links}
        </div>
      </div>
    </nav>
  );
}