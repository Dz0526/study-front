import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Stack, Flex, Link, Divider } from '@chakra-ui/react';
import { ControlledInput } from 'components/Form/ControlledInput';
import { Button } from 'components/Elements/Button';
import { Text } from 'components/Elements/Text';
import { ControlledPasswordInput } from 'components/Form/ControlledPasswordInput/ControlledPasswordInput';

const schema = z.object({
  email: z
    .string({ required_error: '必須項目です' })
    .regex(
      /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
      '有効なメールアドレスではありません',
    ),
  password: z
    .string({ required_error: '必須項目です' })
    .regex(/^([a-zA-Z0-9]{8,})$/, '英数字8文字以上で入力してください'),
});
type LoginFormValues = z.infer<typeof schema>;

export const LoginForm = ({ onSubmit }: { onSubmit: () => void }) => {
  const {
    control,
    handleSubmit,
    formState: { dirtyFields },
  } = useForm<LoginFormValues>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: zodResolver(schema),
    defaultValues: { email: '', password: '' },
  });

  return (
    <Stack as='form' gap={'lg'} flexGrow={1} onSubmit={handleSubmit(onSubmit)}>
      <Text fontSize='xxl' lineHeight='30px' fontWeight={'bold'}>
        SLOOW ログイン
      </Text>
      <Stack gap='sm'>
        <ControlledInput
          name='email'
          control={control}
          label='メールアドレス'
          placeholder='mail@example.com'
          type='email'
          isRequired
        />
        <ControlledPasswordInput
          name='password'
          control={control}
          label='パスワード'
          placeholder='英数字8文字以上'
          isRequired
        />
      </Stack>
      <Button
        size='lg'
        variant={
          dirtyFields.email && dirtyFields.password ? 'brand' : 'incomplete'
        }
        type='submit'
      >
        新規登録
      </Button>
      <Stack>
        <Divider color='gray.300' />
        <Flex color='gray.500' justifyContent='center' gap='xxs'>
          <Link textAlign={'center'}>新規会員登録</Link>
          <Text>/</Text>
          <Link textAlign={'center'}>パスワード忘れた方</Link>
        </Flex>
      </Stack>
    </Stack>
  );
};
