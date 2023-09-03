import Layout from 'features/auth/components/Layout';
import { Box, Stack } from '@chakra-ui/react';
import { Text } from 'components/Elements/Text';

const SignupComplete = () => {
  return (
    <Layout imageSrc='https://i.postimg.cc/GmDQRF7Y/Illustration.png'>
      <Stack gap='lg' flexGrow={1}>
        <Text fontSize='xxl' lineHeight='30px' fontWeight={'bold'}>
          SLOOW 新規会員登録
        </Text>
        <Stack py='md' px='xs' bg='gray.100' textAlign='center'>
          <Text fontWeight='bold'>登録確認用のメールを送信しました</Text>
          <Box color='gray.500'>
            <Text>メールに記載されたURLにアクセスし，</Text>
            <Text>
              スクールおよび管理者アカウントの登録を完了させてください．
            </Text>
          </Box>
        </Stack>
      </Stack>
    </Layout>
  );
};

export default SignupComplete;
