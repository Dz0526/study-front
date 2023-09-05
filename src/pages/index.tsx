import type { NextPage } from 'next';
import { Button } from 'components/Elements/Button';
import { Image } from 'components/Elements/Image';
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from 'components/Elements/Menu';
import { MainLayout } from 'components/Layout/MainLayout';
import { UserProfilePreview } from 'features/user/components/UserProfilePreview';

const Home: NextPage = () => {
  return (
    <MainLayout>
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
      <Button variant='danger' size='lg'>
        aiueo
      </Button>
      <Image
        src='https://i.postimg.cc/Hk2SXvJF/nord-pop.png'
        ratio={1 / 1}
        alt='1/1'
        width={'240px'}
      />
      <Image
        src='https://i.postimg.cc/Hk2SXvJF/nord-pop.png'
        ratio={16 / 9}
        alt='1/1'
        width={'240px'}
      />
      <Image
        src='https://i.postimg.cc/Hk2SXvJF/nord-pop.png'
        ratio={4 / 3}
        alt='1/1'
        width={'240px'}
      />
      <Image
        src='https://i.postimg.cc/Hk2SXvJF/nord-pop.png'
        ratio={3 / 2}
        alt='1/1'
        width={'240px'}
      />
      <Menu>
        <MenuButton>aiueo</MenuButton>
        <MenuList>
          <MenuItem>kami</MenuItem>
          <MenuDivider />
          <MenuItem>kami</MenuItem>
          <MenuDivider />
          <MenuItem>kami</MenuItem>
        </MenuList>
      </Menu>
    </MainLayout>
  );
};

export default Home;
