import {
  Menu as CMenu,
  MenuList as CMenuList,
  MenuButton as CMenuButton,
  MenuItem as CMenuItem,
  MenuDivider as CMenuDivider,
  MenuProps as CMenuProps,
  MenuListProps as CMenuListProps,
  MenuButtonProps as CMenuButtonProps,
  MenuItemProps as CMenuItemProps,
  MenuDividerProps as CMenuDividerProps,
} from '@chakra-ui/react';

export const Menu = (props: CMenuProps) => {
  return <CMenu {...props} />;
};

export const MenuList = (props: CMenuListProps) => {
  return <CMenuList {...props} />;
};

export const MenuButton = (props: CMenuButtonProps) => {
  return <CMenuButton {...props} />;
};

export const MenuItem = (props: CMenuItemProps) => {
  return <CMenuItem {...props} />;
};

export const MenuDivider = (props: CMenuDividerProps) => {
  return <CMenuDivider {...props} />;
};
