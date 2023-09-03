import { Box, Flex } from '@chakra-ui/react';
import { Image } from 'components/Elements/Image';
import { ReactNode } from 'react';

type Props = {
  imageSrc: string;
  children: ReactNode;
};

const Layout = ({ imageSrc, children }: Props) => {
  return (
    <Box py='lg' px='xl' gap='xs'>
      <Image
        src='https://i.postimg.cc/bwS6JcJZ/SLOOW-Design-02-1.png'
        alt='company logo'
        mb='xs'
      />
      <Flex gap='lg'>
        <Image src={imageSrc} alt='auth picture' />
        {children}
      </Flex>
    </Box>
  );
};

export default Layout;
