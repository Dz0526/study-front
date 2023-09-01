import { avatarAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const helpers = createMultiStyleConfigHelpers(avatarAnatomy.keys);
export const Avatar = helpers.defineMultiStyleConfig({
  baseStyle: {
    container: {
      bgColor: 'brand',
      color: 'white',
    },
  },

  sizes: {
    sm: {
      container: {
        boxSize: '48px',
      },
      label: {
        fontSize: 'md',
        lineHeight: '20px',
      },
    },
    md: {
      container: {
        boxSize: '72px',
      },
      label: {
        fontSize: 'xxl',
        lineHeight: '30px',
      },
    },
    lg: {
      container: {
        boxSize: '96px',
      },
      label: {
        fontSize: 'x4l',
        lineHeight: '40px',
      },
    },
  },
  variants: {
    choose: {
      container: {
        position: 'relative',
        // bgColor: 'brand',
        // opacity: '50%',
      },
    },
  },
  defaultProps: {
    size: 'md',
  },
});
