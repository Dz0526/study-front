import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';

const meta: Meta<typeof Button> = {
  title: 'Components/Elements/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Brand: Story = {
  args: {
    children: 'Brand Button',
    variant: 'brand',
  },
};

export const Normal = {
  args: {
    children: 'Normal Button',
    variant: 'normal',
  },
};

export const Incomplete = {
  args: {
    children: 'Incomplete Button',
    variant: 'incomplete',
  },
};
export const Danger = {
  args: {
    children: 'Danger Button',
    variant: 'danger',
  },
};
