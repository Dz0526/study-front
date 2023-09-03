import Layout from 'features/auth/components/Layout';
import { SignupForm } from 'features/auth/components/SignupForm';
import { useRouter } from 'next/router';

const Signup = () => {
  const router = useRouter();
  return (
    <Layout imageSrc='https://i.postimg.cc/GmDQRF7Y/Illustration.png'>
      <SignupForm
        onSubmit={() => {
          router.push('/signup/complete');
        }}
      />
    </Layout>
  );
};

export default Signup;
