import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Stack, Flex, Icon, Textarea } from '@chakra-ui/react';
import { ControlledInput } from 'components/Form/ControlledInput';
import { Button } from 'components/Elements/Button';
import { Text } from 'components/Elements/Text';
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { UserIconInput } from './UserIconInput';
import { useState } from 'react';

const useAuth = () => {
  return {
    name: 'Taichi Okuda',
    description: '',
    link: { twitter: '', facebook: '', instagram: '', youtube: '' },
    imageSrc: '',
  };
};

const schema = z.object({
  name: z.string({ required_error: '必須項目です' }).min(1, '必須項目です'),
  description: z.string().max(140, '140字以下で入力してください'),
  twitterLink: z.string(),
  facebookLink: z.string(),
  instagramLink: z.string(),
  youtubeLink: z.string(),
});
type UserUpdateFormValues = z.infer<typeof schema>;

export const UserUpdateForm = ({ onSubmit }: { onSubmit: () => void }) => {
  const { name, description, link, imageSrc } = useAuth();
  const [image, setImage] = useState<string | ArrayBuffer | null>(imageSrc);
  const [imageError, setImageError] = useState('');

  const {
    control,
    handleSubmit,
    formState: { isDirty },
  } = useForm<UserUpdateFormValues>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: zodResolver(schema),
    defaultValues: {
      name: name,
      description: description,
      twitterLink: link.twitter,
      facebookLink: link.facebook,
      instagramLink: link.instagram,
      youtubeLink: link.youtube,
      // imageSrc
    },
  });
  return (
    <Flex
      py={'lg'}
      px={'xl'}
      gap={'lg'}
      onSubmit={handleSubmit(onSubmit)}
      as={'form'}
    >
      <UserIconInput
        username={name}
        size={'lg'}
        name='iconImage'
        zIndex={10}
        errormessage={imageError}
        imageSrc={typeof image == 'string' ? image : undefined}
        onChange={e => {
          const files = e.target.files;
          if (files && files.length > 0) {
            const file = files[0];
            if (!['image/png', 'image/jpeg', 'image/jpg'].includes(file.type)) {
              setImageError('.jpg .jpeg .pngの形式が利用できます');
            } else {
              setImageError('');
              const reader = new FileReader();
              reader.onload = () => {
                setImage(reader.result);
              };
              reader.readAsDataURL(file);
            }
          } else {
            setImage(null);
          }
        }}
      />
      <Stack gap={'lg'} flexGrow={1}>
        <Stack gap={'xs'}>
          <ControlledInput
            name='name'
            control={control}
            placeholder='田中 太郎'
          />
          <ControlledInput
            name='description'
            control={control}
            placeholder='あなたの自己紹介を書きましょう（140字以内）'
            height={'120px'}
            as={Textarea}
          />
        </Stack>
        <Stack gap={'sm'}>
          <Stack gap={'xxs'}>
            <Text fontWeight={'bold'}>ソーシャルリンク</Text>
            <Text color='gray.500' fontSize='xs'>
              マイページに設定した内容を表示します．
            </Text>
          </Stack>
          <Flex gap={'lg'}>
            <Flex gap={'xs'} flexGrow={1}>
              <Icon as={FaTwitter} size={'24px'} mt={'x3s'} />
              <ControlledInput
                control={control}
                name='twitterLink'
                label='Twitter'
                placeholder='例：https://twitter.com/example'
              />
            </Flex>
            <Flex gap={'xs'} flexGrow={1}>
              <Icon as={FaFacebook} size={'24px'} mt={'x3s'} />
              <ControlledInput
                control={control}
                name='facebookLink'
                label='Facebook'
                placeholder='例：https://facebook.com/example'
              />
            </Flex>
          </Flex>
          <Flex gap={'lg'}>
            <Flex gap={'xs'} flexGrow={1}>
              <Icon as={FaInstagram} size={'24px'} mt={'x3s'} />
              <ControlledInput
                control={control}
                name='instagramLink'
                label='Instagram'
                placeholder='例：https://instagram.com/example'
              />
            </Flex>
            <Flex gap={'xs'} flexGrow={1}>
              <Icon as={FaYoutube} size={'24px'} mt={'x3s'} />
              <ControlledInput
                control={control}
                name='youtubeLink'
                label='YouTube'
                placeholder='例：https://youtube.com/example'
              />
            </Flex>
          </Flex>
        </Stack>
        <Flex
          py={'sm'}
          gap={'sm'}
          borderTopWidth={'1px'}
          borderColor={'gray.300'}
          justifyContent={'end'}
        >
          <Button variant='normal'>キャンセル</Button>
          <Button variant={isDirty ? 'brand' : 'incomplete'} type='submit'>
            保存
          </Button>
        </Flex>
      </Stack>
    </Flex>
  );
};
