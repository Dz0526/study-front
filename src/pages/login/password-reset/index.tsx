import Layout from 'features/auth/components/Layout';
import { PasswordResetMailForm } from 'features/auth/components/PasswordResetMailForm';
import { useRouter } from 'next/router';

const PasswordReset = () => {
  const router = useRouter();
  return (
    <Layout imageSrc='https://i.postimg.cc/NfS8xZ1H/Illustration.png'>
      <PasswordResetMailForm
        onSubmit={() => {
          router.push('/login/password-reset/confirm');
        }}
      />
    </Layout>
  );
};

export default PasswordReset;
