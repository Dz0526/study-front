import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '.';

const meta: Meta<typeof Text> = {
  title: 'Components/Elements/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: { children: 'おはよう' },
};

export const Color: Story = {
  args: { children: 'おはよう', color: 'brand' },
};

export const Size: Story = {
  args: { children: 'おはよう', fontSize: 'x6l' },
};
