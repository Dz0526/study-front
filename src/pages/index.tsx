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

const Home: NextPage = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
