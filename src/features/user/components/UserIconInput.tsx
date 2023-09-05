import { Box, FormControl } from '@chakra-ui/react';
import { UserIcon } from 'components/Elements/UserIcon';
import { Input, InputProps } from 'components/Form/Input';

type Props = {
  username: string;
  imageSrc?: string;
  size: 'sm' | 'md' | 'lg';
} & Omit<InputProps, 'type'>;

export const UserIconInput = ({ username, imageSrc, size, ...rest }: Props) => {
  return (
    <Box position={'relative'}>
      <FormControl zIndex={rest.zIndex}>
        <Input
          top={0}
          type='file'
          position={'absolute'}
          width={100}
          height={100}
          _hover={{ cursor: 'pointer' }}
          opacity={0}
          {...rest}
        />
      </FormControl>
      <UserIcon variant={'choose'} name={username} size={size} src={imageSrc} />
    </Box>
  );
};
