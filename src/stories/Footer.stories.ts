import type { Meta, StoryObj } from '@storybook/react';
 

import Footer from '@/components/organism/footer';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Organisms/Footer',
  component: Footer,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
     
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  
  },
};
