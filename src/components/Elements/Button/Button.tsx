import {
  Button as CButton,
  ButtonProps as CButtonProps,
} from '@chakra-ui/react';

export type Props = {
  variant?: 'brand' | 'normal' | 'incomplete' | 'danger';
  size?: 'md' | 'lg';
} & Omit<CButtonProps, 'variant' | 'size'>;

export const Button = (props: Props) => {
  return <CButton {...props} />;
};
