import type { Meta, StoryObj } from '@storybook/react';
 

import FAQ from '@/components/atoms/faq';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Atoms/Cards/FAQ Card',
  component: FAQ,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
     
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {  },
} satisfies Meta<typeof FAQ>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    faqTitle: 'test',
    faqDesc: "test"
  },
};
