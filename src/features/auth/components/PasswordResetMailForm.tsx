import { Text } from 'components/Elements/Text';
import { Button } from 'components/Elements/Button';
import { ControlledInput } from 'components/Form/ControlledInput';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Stack, Link, Divider } from '@chakra-ui/react';

const schema = z.object({
  email: z
    .string({ required_error: '必須項目です' })
    .regex(
      /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
      '有効なメールアドレスではありません',
    ),
});
type PasswordResetMailFormValues = z.infer<typeof schema>;

export const PasswordResetMailForm = ({
  onSubmit,
}: {
  onSubmit: () => void;
}) => {
  const {
    control,
    handleSubmit,
    formState: { isDirty },
  } = useForm<PasswordResetMailFormValues>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: zodResolver(schema),
    defaultValues: { email: '' },
  });

  return (
    <Stack
      as={'form'}
      gap={'lg'}
      flexGrow={1}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Text fontSize='xxl' lineHeight='30px' fontWeight={'bold'}>
        パスワード再設定
      </Text>
      <ControlledInput
        name='email'
        control={control}
        label='登録メールアドレス'
        placeholder='mail@example.com'
        type='email'
        isRequired
      />
      <Button
        variant={isDirty ? 'brand' : 'incomplete'}
        size='lg'
        type='submit'
      >
        パスワード変更メールを送信
      </Button>
      <Stack>
        <Divider color='gray.300' />
        <Link textAlign={'center'} flexGrow={'1'}>
          ログインに戻る
        </Link>
      </Stack>
    </Stack>
  );
};
