import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: '8px',
    gap: '10px',
    py: 'xs',
    fontSize: 'md',
    fontWeight: '600',
  },

  sizes: {
    md: {
      px: 'lg',
    },
    lg: {
      px: 'xl',
    },
  },

  variants: {
    brand: {
      bg: 'brand',
      color: 'white',
      _hover: {
        bg: '#ce3700',
      },
    },
    normal: {
      bg: 'white',
      color: 'black',
      border: '2px',
      borderColor: 'gray.300',
      _hover: {
        borderColor: '#b3b4b5',
      },
    },
    incomplete: {
      bg: 'gray.300',
      color: 'white',
      _hover: {
        cursor: 'not-allowed',
      },
    },
    danger: {
      bg: 'danger',
      color: 'white',
    },
  },

  defaultProps: {
    size: 'md',
    variant: 'brand',
  },
});
