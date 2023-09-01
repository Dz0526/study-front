import type { Meta, StoryObj } from '@storybook/react';
import { UserIcon } from '.';

const meta: Meta<typeof UserIcon> = {
  title: 'Components/Elements/UserIcon',
  component: UserIcon,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof UserIcon>;

export const Default: Story = {
  args: {
    name: 'Taichi Okuda',
  },
};

export const Small: Story = {
  args: { size: 'sm', name: 'Taichi Okuda' },
};

export const Large: Story = {
  args: {
    size: 'lg',
    name: 'Taichi Okuda',
  },
};

export const Picture: Story = {
  args: {
    size: 'lg',
    name: 'Taichi Okuda',
    src: 'https://i.postimg.cc/Hk2SXvJF/nord-pop.png',
  },
};

export const Choose: Story = {
  args: {
    size: 'lg',
    name: 'Taichi Okuda',
    variant: 'choose',
  },
};

export const ChoosePicture: Story = {
  args: {
    size: 'lg',
    name: 'Taichi Okuda',
    src: 'https://i.postimg.cc/Hk2SXvJF/nord-pop.png',
    variant: 'choose',
  },
};
