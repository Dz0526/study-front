import { AspectRatio, Box } from '@chakra-ui/react';
import { Image } from 'components/Elements/Image';
import { Text } from 'components/Elements/Text';

export const WorkItem = ({
  workName,
  imageSrc,
}: {
  workName: string;
  imageSrc: string;
}) => {
  return (
    <AspectRatio ratio={4 / 3} width={'100%'} position={'relative'}>
      <Box position={'relative'}>
        <Image
          borderRadius={'8px'}
          alt={workName}
          src={imageSrc}
          height={'100%'}
          width={'100%'}
        />
        <Box
          sx={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(74, 85, 104, 1) 100%)',
          }}
          position={'absolute'}
          top={0}
          zIndex={'5'}
          width={'100%'}
          height={'100%'}
          borderRadius={'8px'}
        />
        <Text
          color='white'
          fontWeight={'bold'}
          fontSize='xs'
          position={'absolute'}
          zIndex={'10'}
          bottom={0}
          left={1}
        >
          {workName}
        </Text>
      </Box>
    </AspectRatio>
  );
};
