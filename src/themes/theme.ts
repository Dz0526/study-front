import { extendTheme } from '@chakra-ui/react';
import { Button, Input, Avatar, Menu, Checkbox, Textarea } from '.';

export type Color =
  | 'black'
  | 'white'
  | 'brand'
  | 'subBrand'
  | 'link'
  | 'warning'
  | 'danger'
  | 'gray.100'
  | 'gray.300'
  | 'gray.500';

export type Space =
  | 'x3s'
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'x3l';

export type FontSize =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'x3l'
  | 'x4l'
  | 'x5l'
  | 'x6l';

export const theme = extendTheme({
  colors: {
    gray: {
      100: '#f4f5f5',
      300: '#d5d6d8',
      500: '#4A5568',
    },
  },
  semanticTokens: {
    colors: {
      brand: '#f64200',
      subBrand: '#eb6300',
      link: '#1d94e0',
      warning: '#ff9800',
      danger: '#c62157',
    },
    space: {
      x3s: '4px',
      xxs: '8px',
      xs: '16px',
      sm: '24px',
      md: '32px',
      lg: '48px',
      xl: '72px',
      xxl: '96px',
      x3l: '144px',
    },
    fontSizes: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '20px',
      xxl: '24px',
      x3l: '30px',
      x4l: '36px',
      x5l: '48px',
      x6l: '60px',
    },
  },
  components: {
    Button,
    Input,
    Avatar,
    Menu,
    Checkbox,
    Textarea,
  },
});
