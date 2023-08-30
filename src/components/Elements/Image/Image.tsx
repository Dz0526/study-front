import {
  AspectRatio,
  Image as CImage,
  ImageProps as CImageProps,
  ResponsiveValue,
} from '@chakra-ui/react';

type Props = {
  ratio: ResponsiveValue<number>;
} & CImageProps;

export const Image = (props: Props) => {
  return (
    <AspectRatio ratio={props.ratio} width={props.width}>
      <CImage objectFit={'cover'} {...props} />
    </AspectRatio>
  );
};
