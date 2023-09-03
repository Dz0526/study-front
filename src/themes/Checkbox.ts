import { checkboxAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const helpers = createMultiStyleConfigHelpers(checkboxAnatomy.keys);
export const Checkbox = helpers.defineMultiStyleConfig({
  baseStyle: {
    icon: {
      color: 'black',
    },
    control: {
      bg: 'gray.100',
      borderColor: 'gray.300',
      _checked: {
        bg: 'gray.100',
        borderColor: 'gray.300',
      },
    },
  },
});
