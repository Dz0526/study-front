import { menuAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const helpers = createMultiStyleConfigHelpers(menuAnatomy.keys);
export const Menu = helpers.defineMultiStyleConfig({
  baseStyle: {
    list: {
      border: '2px',
      borderColor: 'gray.300',
    },
    item: {
      _hover: {
        bg: 'gray.100',
      },
      _focus: {
        bg: 'gray.100',
      },
    },
    divider: {
      height: '1px',
      borderColor: 'gray.100',
    },
  },

  defaultProps: {},
});
