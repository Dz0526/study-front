import { Box, Flex } from '@chakra-ui/react';
import { MainLayout } from 'components/Layout/MainLayout';
import { UserProfilePreview } from 'features/user/components/UserProfilePreview';
import { WorksList } from 'features/works/components/WorksList';

const MyPage = () => {
  return (
    <MainLayout>
      <Flex py={'lg'} px={'xl'} gap={'lg'}>
        <Box flexBasis={'20%'}>
          <UserProfilePreview
            name='Taichi Okuda'
            description='つれづれなるまゝに、日暮らし、硯にむかひて、心にうつりゆくよしなし事を、そこはかとなく書きつくれば、あやしうこそものぐるほしけれ。（Wikipediaより）'
            link={{
              twitter: 'https://twitter.com',
              facebook: 'https://facebook.com',
              instagram: '',
              youtube: '',
            }}
          />
        </Box>
        <Box flexBasis={'80%'}>
          <WorksList />
        </Box>
      </Flex>
    </MainLayout>
  );
};
export default MyPage;
