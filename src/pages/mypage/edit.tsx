import { MainLayout } from 'components/Layout/MainLayout';
import { UserUpdateForm } from 'features/user/components/UserUpdateForm';
import { useRouter } from 'next/router';

const MyPageEdit = () => {
  const router = useRouter();
  return (
    <MainLayout>
      <UserUpdateForm
        onSubmit={() => {
          router.push('/mypage');
        }}
      />
    </MainLayout>
  );
};
export default MyPageEdit;
