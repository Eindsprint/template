import { Button as MantineButton, ButtonProps as MantineButtonProps } from '@mantine/core';
import { forwardRef } from 'react';
import React from 'react';
import classes from './Button.module.css';

// Define allowed variants
type ButtonVariant = 'primary' | 'secondary' | 'text';

// Custom Button props - restrict certain Mantine props
interface CustomButtonProps extends Omit<MantineButtonProps, 'variant' | 'size' | 'color' | 'radius'> {
  variant?: ButtonVariant;
  small?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ variant = 'primary', small = false, className, leftSection, rightSection, ...props }, ref) => {
    // Development warnings for incorrect usage
    if (process.env.NODE_ENV === 'development') {
      if (leftSection && rightSection) {
        console.warn('Button: Using both leftSection and rightSection is not recommended. Use either leftSection OR rightSection.');
      }
      
      // Check for non-standard icon sizes
      if (leftSection && React.isValidElement(leftSection)) {
        const iconProps = leftSection.props as { size?: number };
        const iconSize = iconProps?.size;
        if (iconSize && iconSize !== 14) {
          console.warn(`Button: Icon size should be 14 for consistency. Current size: ${iconSize}`);
        }
      }
      
      if (rightSection && React.isValidElement(rightSection)) {
        const iconProps = rightSection.props as { size?: number };
        const iconSize = iconProps?.size;
        if (iconSize && iconSize !== 14) {
          console.warn(`Button: Icon size should be 14 for consistency. Current size: ${iconSize}`);
        }
      }
    }

    const getVariantConfig = () => {
      switch (variant) {
        case 'primary':
          return {
            variant: 'filled' as const,
            className: `${classes.primary} ${className || ''}`
          };
        case 'secondary':
          return {
            variant: 'outline' as const,
            className: `${classes.secondary} ${className || ''}`
          };
        case 'text':
          return {
            variant: 'subtle' as const,
            className: `${classes.text} ${className || ''}`
          };
        default:
          return {
            variant: 'filled' as const,
            className: className || ''
          };
      }
    };

    const config = getVariantConfig();

    return (
      <MantineButton
        ref={ref}
        variant={config.variant}
        size={small ? 'xs' : 'md'}
        radius="xl"
        className={config.className}
        leftSection={leftSection}
        rightSection={rightSection}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';