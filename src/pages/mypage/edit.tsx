import { useToast } from '@chakra-ui/react';
import { ErrorToast, SuccessToast } from 'components/Elements/Toast';
import { MainLayout } from 'components/Layout/MainLayout';
import { UserUpdateForm } from 'features/user/components/UserUpdateForm';
import { useRouter } from 'next/router';
import { getRandomInt } from 'utils/getRandomInt';

const MyPageEdit = () => {
  const router = useRouter();
  const toast = useToast();
  return (
    <MainLayout>
      <UserUpdateForm
        onSubmit={() => {
          try {
            if (getRandomInt() >= 5) {
              toast({
                render: () => <SuccessToast />,
              });
              router.push('/mypage');
              return;
            }
            throw Error;
          } catch {
            toast({
              render: () => <ErrorToast />,
            });
          }
        }}
      />
    </MainLayout>
  );
};
export default MyPageEdit;
