import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Stack, Link, Divider } from '@chakra-ui/react';
import { ControlledInput } from 'components/Form/ControlledInput';
import { Button } from 'components/Elements/Button';
import { Text } from 'components/Elements/Text';
import { ControlledCheckbox } from 'components/Form/ControlledCheckbox';
import { useState } from 'react';
import { ControlledPasswordInput } from 'components/Form/ControlledPasswordInput/ControlledPasswordInput';

const schema = z.object({
  name: z.string({ required_error: '必須項目です' }),
  password: z
    .string({ required_error: '必須項目です' })
    .regex(/^([a-zA-Z0-9]{8,})$/, '英数字8文字以上で入力してください'),
  email: z
    .string({ required_error: '必須項目です' })
    .regex(
      /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
      '有効なメールアドレスではありません',
    ),
});
type SignupFormValues = z.infer<typeof schema>;

export const SignupForm = ({ onSubmit }: { onSubmit: () => void }) => {
  const { control, handleSubmit } = useForm<SignupFormValues>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: zodResolver(schema),
  });
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Stack as='form' gap={'lg'} flexGrow={1} onSubmit={handleSubmit(onSubmit)}>
      <Text fontSize='xxl' lineHeight='30px' fontWeight={'bold'}>
        SLOOW 新規会員登録
      </Text>
      <Stack gap='sm'>
        <ControlledInput
          name='name'
          control={control}
          label='名前'
          placeholder='田中太郎'
          isRequired
        />
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
      <Stack gap='xs'>
        <ControlledCheckbox
          isChecked={isChecked}
          onChange={() => {
            setIsChecked(!isChecked);
          }}
        >
          <Link color='link'>利用規約</Link>と
          <Link color='link'>プライバシポリシー</Link>に同意する
        </ControlledCheckbox>
        <Button
          size='lg'
          variant={isChecked ? 'brand' : 'incomplete'}
          type='submit'
        >
          新規登録
        </Button>
      </Stack>
      <Stack>
        <Divider color='gray.300' />
        <Link color='gray.500' textAlign={'center'}>
          ログイン
        </Link>
      </Stack>
    </Stack>
  );
};
