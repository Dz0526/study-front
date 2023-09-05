import { useToast } from '@chakra-ui/react';
import { ErrorToast, SuccessToast } from 'components/Elements/Toast';
import { MainLayout } from 'components/Layout/MainLayout';
import { WorkForm } from 'features/works/components/WorkForm';
import { useRouter } from 'next/router';
import { getRandomInt } from 'utils/getRandomInt';

const WorksPost = () => {
  const router = useRouter();
  const toast = useToast();
  return (
    <MainLayout>
      <WorkForm
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
export default WorksPost;
