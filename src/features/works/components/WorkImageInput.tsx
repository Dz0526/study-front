import {
  AspectRatio,
  Box,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Stack,
} from '@chakra-ui/react';
import { Button } from 'components/Elements/Button';
import { Image } from 'components/Elements/Image';
import { Text } from 'components/Elements/Text';
import { Input, InputProps } from 'components/Form/Input';
import { Dispatch, SetStateAction, useRef } from 'react';
import { FaImages } from 'react-icons/fa';

type Props = {
  imageSrc?: string;
  setImage: Dispatch<SetStateAction<string | ArrayBuffer | null>>;
} & Omit<InputProps, 'type'>;

export const WorkImageInput = ({ imageSrc, setImage, ...rest }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <Stack gap='sm'>
      <FormControl width={'1024px'} height={'768px'}>
        <FormLabel position={'absolute'} zIndex={10}>
          <AspectRatio
            ratio={4 / 3}
            width={'1024px'}
            border={'dashed'}
            borderWidth={'2px'}
            borderColor={'gray.300'}
            borderRadius={'8px'}
          >
            <Input
              ref={inputRef}
              type='file'
              accept='image/*'
              width={'100%'}
              height={'100%'}
              border={'dashed'}
              borderWidth={'2px'}
              borderColor={'gray.300'}
              display={'none'}
              {...rest}
            />
          </AspectRatio>
        </FormLabel>
        <Stack
          gap={'xs'}
          position={'absolute'}
          alignItems={'center'}
          justifyContent={'center'}
          top={0}
          height={'100%'}
          width={'100%'}
        >
          <Icon color={'brand'} as={FaImages} boxSize={'24'} />
          <Text fontWeight={'bold'}>画像をドラッグ＆ドロップ，または選択</Text>
        </Stack>
        {imageSrc && (
          <Image
            src={imageSrc}
            alt='preview'
            position={'absolute'}
            height={'97%'}
            width={'97%'}
            top={3}
            left={4}
            borderRadius={'8px'}
          />
        )}
        <Box
          _hover={{ cursor: 'pointer' }}
          position={'absolute'}
          zIndex={'20'}
          width={'100%'}
          height={'100%'}
          opacity={0}
          onDragEnter={e => e.preventDefault()}
          onDragLeave={e => e.preventDefault()}
          onDragOver={e => e.preventDefault()}
          onDrop={rest.onDrop}
          onClick={() => {
            inputRef.current != undefined && inputRef.current.click();
          }}
        />
      </FormControl>
      {imageSrc && (
        <Flex gap={'sm'} justifyContent={'end'}>
          <Button
            variant='danger'
            fontWeight={'bold'}
            onClick={() => {
              setImage(null);
            }}
          >
            削除
          </Button>
          <Button
            variant='normal'
            fontWeight={'bold'}
            onClick={() => {
              inputRef.current != null && inputRef.current.click();
            }}
          >
            画像変更
          </Button>
        </Flex>
      )}
    </Stack>
  );
};
