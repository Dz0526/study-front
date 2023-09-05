import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '.';

const meta: Meta<typeof Input> = {
  title: 'Components/Form/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {},
};

export const Placeholder: Story = {
  args: { placeholder: '山田' },
};

export const ErrorMessage: Story = {
  args: { errormessage: 'Error' },
};

// suffix
