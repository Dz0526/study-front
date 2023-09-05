import { Box, Flex, Icon, Stack } from '@chakra-ui/react';
import { Text } from 'components/Elements/Text';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

export const SuccessToast = () => {
  return (
    <Box bgColor={'link'} color={'white'} borderRadius={'4px'} py='xs' px='sm'>
      <Stack gap='x3s'>
        <Flex gap={'x3s'}>
          <Icon mt={'x3s'} as={FaCheckCircle} />
          <Text fontWeight={'bold'}>Success</Text>
        </Flex>
        <Text>保存されました</Text>
      </Stack>
    </Box>
  );
};

export const ErrorToast = () => {
  return (
    <Box
      bgColor={'danger'}
      color={'white'}
      borderRadius={'4px'}
      py='xs'
      px='sm'
    >
      <Stack gap='x3s'>
        <Flex gap={'x3s'}>
          <Icon mt={'x3s'} as={FaExclamationCircle} />
          <Text fontWeight={'bold'}>Error</Text>
        </Flex>
        <Text>エラーが発生しました．</Text>
        <Text>恐れ入りますが再度お試しください．</Text>
      </Stack>
    </Box>
  );
};
