import Layout from 'features/auth/components/Layout';
import { LoginForm } from 'features/auth/components/LoginForm';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();
  return (
    <Layout imageSrc='https://i.postimg.cc/v874ckmz/Illustration.png'>
      <LoginForm
        onSubmit={() => {
          router.push('/');
        }}
      />
    </Layout>
  );
};

export default Login;
