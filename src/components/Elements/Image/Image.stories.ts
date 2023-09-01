import type { Meta, StoryObj } from '@storybook/react';
import { Image } from '.';

const meta: Meta<typeof Image> = {
  title: 'Components/Elements/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

export const AspectRatio1_1: Story = {
  args: {
    src: 'https://i.postimg.cc/Hk2SXvJF/nord-pop.png',
    ratio: 1 / 1,
    alt: '1/1',
    width: '240px',
  },
};

export const AspectRatio16_9: Story = {
  args: {
    src: 'https://i.postimg.cc/Hk2SXvJF/nord-pop.png',
    ratio: 16 / 9,
    alt: '16/9',
    width: '240px',
  },
};

export const AspectRatio4_3: Story = {
  args: {
    src: 'https://i.postimg.cc/Hk2SXvJF/nord-pop.png',
    ratio: 4 / 3,
    alt: '4/3',
    width: '240px',
  },
};

export const AspectRatio3_2: Story = {
  args: {
    src: 'https://i.postimg.cc/Hk2SXvJF/nord-pop.png',
    ratio: 3 / 2,
    alt: '3/2',
    width: '240px',
  },
};
