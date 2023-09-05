import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Stack, Flex, Box } from '@chakra-ui/react';
import { ControlledInput } from 'components/Form/ControlledInput';
import { Button } from 'components/Elements/Button';
import { useState } from 'react';
import { WorkImageInput } from './WorkImageInput';

const schema = z.object({
  name: z.string({ required_error: '必須項目です' }).min(1, '必須項目です'),
});

export const WorkForm = ({ onSubmit }: { onSubmit: () => void }) => {
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);
  const [imageError, setImageError] = useState('');

  const {
    control,
    handleSubmit,
    formState: { isDirty },
  } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: zodResolver(schema),
    defaultValues: { name: '' },
  });

  const imageMetaValid = (file: File) => {
    if (!['image/png', 'image/jpeg', 'image/jpg'].includes(file.type)) {
      setImageError('.jpg .jpeg .pngの形式が利用できます');
      return false;
    }
    setImageError('');
    return true;
  };
  const imageRead = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <Stack
      as={'form'}
      py={'lg'}
      px={'xl'}
      gap={'lg'}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack px={'xxl'} gap={'lg'} alignItems={'center'}>
        <WorkImageInput
          setImage={setImage}
          imageSrc={typeof image == 'string' ? image : undefined}
          errormessage={imageError}
          onDragEnter={e => e.preventDefault()}
          onDragLeave={e => e.preventDefault()}
          onDragOver={e => e.preventDefault()}
          onDrop={e => {
            if (
              e.dataTransfer.files != null &&
              e.dataTransfer.files.length > 0
            ) {
              const file = e.dataTransfer.files[0];
              if (imageMetaValid(file)) {
                imageRead(file);
              }
            }
            e.dataTransfer.clearData();
          }}
          onChange={e => {
            const files = e.target.files;
            if (files && files.length > 0) {
              const file = files[0];
              if (imageMetaValid(file)) {
                imageRead(file);
              }
            } else {
              setImage(null);
            }
          }}
        />
        <Box>
          <ControlledInput
            name='name'
            control={control}
            placeholder='作品名を記入してください'
            width={'1024px'}
          />
        </Box>
      </Stack>
      <Flex
        py={'sm'}
        gap={'sm'}
        borderTopWidth={'1px'}
        borderColor={'gray.300'}
        justifyContent={'end'}
      >
        <Button variant='normal'>キャンセル</Button>
        <Button
          variant={isDirty && image ? 'brand' : 'incomplete'}
          type='submit'
        >
          保存
        </Button>
      </Flex>
    </Stack>
  );
};
