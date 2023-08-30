import type { NextPage } from 'next';
import { Button } from 'components/Elements/Button';
import { Image } from 'components/Elements/Image';

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
    </>
  );
};

export default Home;
