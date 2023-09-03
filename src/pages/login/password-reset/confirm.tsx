import Layout from 'features/auth/components/Layout';
import { Stack, Box } from '@chakra-ui/react';
import { Text } from 'components/Elements/Text';

const PasswordResetConfirm = () => {
  return (
    <Layout imageSrc='https://i.postimg.cc/NfS8xZ1H/Illustration.png'>
      <Stack gap={'lg'} flexGrow={1}>
        <Text fontSize='xxl' lineHeight='30px' fontWeight={'bold'}>
          パスワード再設定
        </Text>
        <Box py={'md'} px={'xs'} bg='gray.100' textAlign={'center'}>
          <Text fontWeight={'bold'}>
            再設定用のURLを記載したメールを送信しました．
          </Text>
        </Box>
      </Stack>
    </Layout>
  );
};

export default PasswordResetConfirm;
