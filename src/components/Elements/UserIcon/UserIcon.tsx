import { Avatar, AvatarProps, Box, Icon } from '@chakra-ui/react';
import { FaImage } from 'react-icons/fa';

type Props = {
  size: 'sm' | 'md' | 'lg';
} & Omit<AvatarProps, 'size'>;

export const UserIcon = (props: Props) => {
  return (
    /* よくない */
    <Avatar {...props} name={props.name?.split(' ')[0]}>
      {props.variant == 'choose' && (
        <Box
          position={'absolute'}
          boxSize={
            props.size == 'lg' ? '96px' : props.size == 'md' ? '72px' : '48px'
          }
          borderRadius={'full'}
          opacity={'50%'}
          bgColor={'gray.500'}
        />
      )}
      {props.variant == 'choose' && (
        <Icon position={'absolute'} as={FaImage} color={'white'} />
      )}
    </Avatar>
  );
};
