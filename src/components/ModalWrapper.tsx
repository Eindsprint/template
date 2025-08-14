import { Modal as MantineModal, ModalProps as MantineModalProps } from '@mantine/core';
import { forwardRef } from 'react';
import classes from './ModalWrapper.module.css';

// Custom ModalWrapper props - restrict certain Mantine props
interface ModalWrapperProps extends Omit<MantineModalProps, 'centered' | 'size' | 'fullScreen'> {
  small?: boolean;
  fullScreen?: boolean;
}

export const ModalWrapper = forwardRef<HTMLDivElement, ModalWrapperProps>(
  ({ 
    small = false,
    fullScreen = false,
    className,
    ...props 
  }, ref) => {
    
    return (
      <MantineModal
        ref={ref}
        centered
        size={small ? 'sm' : 'lg'}
        fullScreen={fullScreen}
        className={`${classes.modal} ${className || ''}`}
        zIndex={2000}
        radius="md"
        {...props}
      />
    );
  }
);

ModalWrapper.displayName = 'ModalWrapper';

// Export sub-components for convenience
export const ModalHeader = MantineModal.Header;
export const ModalTitle = MantineModal.Title;
export const ModalCloseButton = MantineModal.CloseButton;
export const ModalBody = MantineModal.Body;
export const ModalContent = MantineModal.Content;
export const ModalRoot = MantineModal.Root;
export const ModalOverlay = MantineModal.Overlay;