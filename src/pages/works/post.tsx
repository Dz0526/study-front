import { MainLayout } from 'components/Layout/MainLayout';
import { WorkForm } from 'features/works/components/WorkForm';
import { useRouter } from 'next/router';

const WorksPost = () => {
  const router = useRouter();
  return (
    <MainLayout>
      <WorkForm
        onSubmit={() => {
          router.push('/mypage');
        }}
      />
    </MainLayout>
  );
};
export default WorksPost;
