import { Flex, Icon, Stack, Link } from '@chakra-ui/react';
import { Button } from 'components/Elements/Button';
import { Text } from 'components/Elements/Text';
import { UserIcon } from 'components/Elements/UserIcon';
import { useRouter } from 'next/router';
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

type SocialLink = {
  twitter: string | undefined;
  facebook: string | undefined;
  instagram: string | undefined;
  youtube: string | undefined;
};

type User = {
  name: string;
  imageSrc?: string;
  description?: string;
  link?: SocialLink;
};

export const UserProfilePreview = ({
  name,
  imageSrc,
  description,
  link,
}: User) => {
  const router = useRouter();
  return (
    <Stack gap={'xs'} fontWeight={'bold'}>
      <UserIcon name={name} src={imageSrc} size='md' />
      <Text fontSize='xxl'>{name}</Text>
      {description && (
        <Text fontSize='xs' color='gray.500'>
          {description}
        </Text>
      )}
      <Button
        variant='normal'
        fontSize={'xs'}
        onClick={() => {
          router.push('/mypage/edit');
        }}
      >
        プロフィール設定
      </Button>
      <Flex gap={'16px'} color={'gray.500'}>
        {link?.twitter && (
          <Link href={link.twitter}>
            <Icon as={FaTwitter} boxSize={'24px'} />
          </Link>
        )}
        {link?.facebook && (
          <Link href={link.facebook}>
            <Icon as={FaFacebook} boxSize={'24px'} />
          </Link>
        )}
        {link?.instagram && (
          <Link href={link.instagram}>
            <Icon as={FaInstagram} boxSize={'24px'} />
          </Link>
        )}
        {link?.youtube && (
          <Link href={link.youtube}>
            <Icon as={FaYoutube} boxSize={'24px'} />
          </Link>
        )}
      </Flex>
    </Stack>
  );
};
