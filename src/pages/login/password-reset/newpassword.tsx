import Layout from 'features/auth/components/Layout';
import { NewPasswordForm } from 'features/auth/components/NewPasswordForm';
import { useRouter } from 'next/router';

const PasswordResetNewPassword = () => {
  const router = useRouter();
  return (
    <Layout imageSrc='https://i.postimg.cc/NfS8xZ1H/Illustration.png'>
      <NewPasswordForm
        onSubmit={() => {
          router.push('/login/password-reset/complete');
        }}
      />
    </Layout>
  );
};

export default PasswordResetNewPassword;
