'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
  IconCalendarStats,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconHome2,
  IconPalette,
  IconSettings,
  IconUser,
} from '@tabler/icons-react';
import { Title, Tooltip, UnstyledButton } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './DoubleNavbar.module.css';

const mainLinksMockdata = [
  { icon: IconHome2, label: 'Home', href: '/' },
  { icon: IconPalette, label: 'Components', href: '/components' },
  { icon: IconDeviceDesktopAnalytics, label: 'Analytics', href: '/analytics' },
  { icon: IconCalendarStats, label: 'Releases', href: '/releases' },
  { icon: IconUser, label: 'Account', href: '/account' },
  { icon: IconFingerprint, label: 'Security', href: '/security' },
  { icon: IconSettings, label: 'Settings', href: '/settings' },
];

const getLinksForSection = (activeSection: string) => {
  switch (activeSection) {
    case 'Components':
      return [
        { name: 'Design Tokens', href: '/components' },
        { name: 'Buttons', href: '/buttons' },
        { name: 'Typography', href: '/typography' },
        { name: 'Forms', href: '/forms' },
        { name: 'Cards', href: '/cards' },
        { name: 'Navigation', href: '/navigation' },
        { name: 'Icons', href: '/icons' },
        { name: 'Layout', href: '/layout' },
        { name: 'Grids', href: '/grids' }
      ];
    case 'Home':
      return [
        { name: 'Dashboard', href: '/dashboard' },
        { name: 'Overview', href: '/overview' },
        { name: 'Recent Activity', href: '/activity' },
        { name: 'Quick Actions', href: '/actions' }
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
  const [activeLink, setActiveLink] = useState('Settings');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine active main link based on current pathname
  const getActiveMainLink = () => {
    if (!mounted) return 'Home'; // Default during SSR
    const currentLink = mainLinksMockdata.find(link => link.href === pathname);
    return currentLink?.label || 'Home';
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
            <MantineLogo type="mark" size={30} />
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