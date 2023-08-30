import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const helpers = createMultiStyleConfigHelpers(inputAnatomy.keys);
export const Input = helpers.defineMultiStyleConfig({
  baseStyle: {
    field: {
      p: 'xs',
      borderRadius: '8px',
      gap: '8px',
      _placeholder: {
        color: 'gray.300',
      },
      fontSize: 'md',
    },
  },
  variants: {
    brand: {
      field: {
        border: '2px',
        borderColor: 'gray.300',
        borderRadius: '8px',
        gap: '8px',
        _hover: {
          borderColor: 'brand',
        },
        _focus: {
          borderColor: 'brand',
        },
      },
      addon: {
        _hover: {
          borderColor: 'brand',
        },
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'brand',
  },
});
