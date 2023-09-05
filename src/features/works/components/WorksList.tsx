import {
  AspectRatio,
  Box,
  Divider,
  Grid,
  GridItem,
  Stack,
} from '@chakra-ui/react';
import { Button } from 'components/Elements/Button';
import { Text } from 'components/Elements/Text';
import { useState } from 'react';
import { WorkItem } from './WorkItem';
import { useRouter } from 'next/router';

type Work = {
  name: string;
  imageSrc: string;
};

const works: Work[] = [
  { name: 'kami', imageSrc: 'https://i.postimg.cc/NfS8xZ1H/Illustration.png' },
  { name: 'nord', imageSrc: 'https://i.postimg.cc/Hk2SXvJF/nord-pop.png' },
  { name: 'kami', imageSrc: 'https://i.postimg.cc/NfS8xZ1H/Illustration.png' },
  { name: 'nord', imageSrc: 'https://i.postimg.cc/Hk2SXvJF/nord-pop.png' },
  { name: 'kami', imageSrc: 'https://i.postimg.cc/NfS8xZ1H/Illustration.png' },
  { name: 'nord', imageSrc: 'https://i.postimg.cc/Hk2SXvJF/nord-pop.png' },
  { name: 'kami', imageSrc: 'https://i.postimg.cc/NfS8xZ1H/Illustration.png' },
  { name: 'nord', imageSrc: 'https://i.postimg.cc/Hk2SXvJF/nord-pop.png' },
];

const addWorks: Work[] = [
  { name: 'kami', imageSrc: 'https://i.postimg.cc/NfS8xZ1H/Illustration.png' },
  { name: 'nord', imageSrc: 'https://i.postimg.cc/Hk2SXvJF/nord-pop.png' },
  { name: 'kami', imageSrc: 'https://i.postimg.cc/NfS8xZ1H/Illustration.png' },
];

const DummyItem = () => (
  <AspectRatio ratio={4 / 3} width={'100%'}>
    <Box
      borderRadius={'8px'}
      p={'xs'}
      bgGradient={'linear(to-b, #F4F5F5, #FFFFFF)'}
    />
  </AspectRatio>
);

export const WorksList = () => {
  const [worksState, setWorksState] = useState(works);
  const [page, setPage] = useState(1);
  const router = useRouter();
  return (
    <Stack gap={'sm'}>
      <Stack px={'xxs'}>
        <Box
          fontWeight={'bold'}
          borderRadius={'4px'}
          py={'xxs'}
          px={'xs'}
          bg={'gray.100'}
          mb={'xs'}
          width={'78px'}
          textAlign={'center'}
        >
          Work
        </Box>
        <Divider borderBottomWidth={'1px'} borderColor={'gray.300'} />
      </Stack>
      <Grid gridTemplateColumns={'1fr 1fr 1fr'} columnGap={'sm'} rowGap={'md'}>
        <GridItem>
          <AspectRatio ratio={4 / 3} width={'100%'}>
            <Stack
              gap={'sm'}
              border={'dashed'}
              borderColor={'gray.300'}
              borderWidth={'2px'}
              borderRadius={'8px'}
              p={'xs'}
              justifyContent={'center'}
            >
              <Stack gap={'xs'} textAlign={'center'}>
                <Text fontWeight={'bold'}>作品画像のアップロード</Text>
                <Text color={'gray.500'} fontSize={'xs'}>
                  フィードバックや「いいね」をもらい，成鳥羽するコミュニティの一員になりましょう
                </Text>
              </Stack>
              <Button
                onClick={() => {
                  router.push('/works/post');
                }}
              >
                アップロード
              </Button>
            </Stack>
          </AspectRatio>
        </GridItem>
        {worksState.map((work, i) => {
          return (
            <GridItem key={i}>
              <WorkItem workName={work.name} imageSrc={work.imageSrc} />
            </GridItem>
          );
        })}
        {[...Array(8 + (page - 1) * 9 - worksState.length)].map(arrayIndex => (
          <GridItem key={arrayIndex}>
            <DummyItem />
          </GridItem>
        ))}
      </Grid>
      {(worksState.length + 1) % 9 == 0 && (
        <Stack py='sm' alignItems={'center'}>
          <Button
            variant='normal'
            onClick={() => {
              setPage(page + 1);
              setWorksState(worksState.concat(addWorks));
            }}
          >
            Load more works
          </Button>
        </Stack>
      )}
    </Stack>
  );
};
