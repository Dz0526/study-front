import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Stack } from '@chakra-ui/react';
import { ControlledInput } from 'components/Form/ControlledInput';
import { Button } from 'components/Elements/Button';
import { Text } from 'components/Elements/Text';
import { ControlledPasswordInput } from 'components/Form/ControlledPasswordInput/ControlledPasswordInput';

const schema = z
  .object({
    newPassword: z
      .string({ required_error: '必須項目です' })
      .regex(/^([a-zA-Z0-9]{8,})$/, '英数字8文字以上で入力してください'),
    confirmPassword: z
      .string({ required_error: '必須項目です' })
      .regex(/^([a-zA-Z0-9]{8,})$/, '英数字8文字以上で入力してください'),
  })
  .superRefine(({ newPassword, confirmPassword }, ctx) => {
    if (newPassword != confirmPassword) {
      ctx.addIssue({
        path: ['confirmPassword'],
        code: 'custom',
        message: 'パスワードが一致しません',
      });
    }
  });
type NewPasswordFormValues = z.infer<typeof schema>;

export const NewPasswordForm = ({ onSubmit }: { onSubmit: () => void }) => {
  const {
    control,
    handleSubmit,
    formState: { dirtyFields },
  } = useForm<NewPasswordFormValues>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: zodResolver(schema),
    defaultValues: { newPassword: '', confirmPassword: '' },
  });

  return (
    <Stack as='form' gap={'lg'} flexGrow={1} onSubmit={handleSubmit(onSubmit)}>
      <Text fontSize='xxl' lineHeight='30px' fontWeight={'bold'}>
        新しいパスワードを設定
      </Text>
      <Stack gap='sm'>
        <ControlledPasswordInput
          name='newPassword'
          control={control}
          label='新しいパスワード'
          placeholder='英数字8文字以上'
          isRequired
        />
        <ControlledInput
          name='confirmPassword'
          control={control}
          label='新しいパスワードの再入力'
          placeholder='英数字8文字以上'
          type='password'
          isRequired
        />
      </Stack>
      <Button
        size='lg'
        variant={
          dirtyFields.newPassword && dirtyFields.confirmPassword
            ? 'brand'
            : 'incomplete'
        }
        type='submit'
      >
        新しいパスワードを設定
      </Button>
    </Stack>
  );
};
