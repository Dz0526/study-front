import Layout from 'features/auth/components/Layout';
import { Stack, Box } from '@chakra-ui/react';
import { Text } from 'components/Elements/Text';
import { Button } from 'components/Elements/Button';

const PasswordResetComplete = () => {
  return (
    <Layout imageSrc='https://i.postimg.cc/NfS8xZ1H/Illustration.png'>
      <Stack gap={'lg'} flexGrow={1}>
        <Text fontSize='xxl' lineHeight='30px' fontWeight={'bold'}>
          新しいパスワードを設定
        </Text>
        <Box py={'md'} px={'xs'} bg='gray.100' textAlign={'center'}>
          <Text fontWeight={'bold'}>パスワードを更新しました．</Text>
        </Box>
        <Button size='lg' variant='normal'>
          ログイン
        </Button>
      </Stack>
    </Layout>
  );
};

export default PasswordResetComplete;
