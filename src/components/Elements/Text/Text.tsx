import { Text as CText, TextProps as CTextProps } from '@chakra-ui/react';
import { Color, FontSize } from 'themes';

export type Props = {
  fontSize?: FontSize;
  color?: Color;
} & Omit<CTextProps, 'fontSize' | 'color'>;

export const Text = (props: Props) => {
  return <CText {...props} />;
};
