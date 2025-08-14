'use client';

import { Badge } from '@mantine/core';
import classes from './BadgeWrapper.module.css';

interface BadgeWrapperProps {
  children: React.ReactNode;
  state?: 'success' | 'warning' | 'information' | 'error';
  circle?: boolean;
  large?: boolean;
}

export const BadgeWrapper = ({ 
  children, 
  state = 'information',
  circle = false,
  large = false
}: BadgeWrapperProps) => {
  
  // Map state to CSS class
  const getClassForState = (state: string) => {
    switch (state) {
      case 'success':
        return classes.success;
      case 'warning':
        return classes.warning;
      case 'information':
        return classes.information;
      case 'error':
        return classes.error;
      default:
        return classes.information;
    }
  };

  return (
    <Badge 
      className={getClassForState(state)}
      circle={circle}
      size={large ? 'lg' : 'md'}
    >
      {children}
    </Badge>
  );
};