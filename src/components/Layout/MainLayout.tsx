import { Flex, MenuItem } from '@chakra-ui/react';
import { Image } from 'components/Elements/Image';
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuList,
} from 'components/Elements/Menu';
import { Text } from 'components/Elements/Text';
import { UserIcon } from 'components/Elements/UserIcon';
import { ReactNode } from 'react';

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Flex
        py={'xs'}
        px={'xl'}
        justifyContent={'space-between'}
        borderColor={'gray.300'}
        borderBottomWidth={'1px'}
      >
        <Image
          src='https://i.postimg.cc/bwS6JcJZ/SLOOW-Design-02-1.png'
          alt='company logo'
        />
        <Menu>
          <MenuButton>
            <UserIcon name='Taichi Okuda' size='sm' />
          </MenuButton>
          <MenuList>
            <MenuItem flexDirection={'column'} alignItems={'start'}>
              <Text fontWeight={'bold'}>Taichi Okuda</Text>
              <Text fontSize='xs' color='gray.500'>
                マイページを表示
              </Text>
            </MenuItem>
            <MenuDivider />
            <MenuItem>
              <Text fontWeight={'bold'} color='danger'>
                ログアウト
              </Text>
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      {children}
    </>
  );
};
