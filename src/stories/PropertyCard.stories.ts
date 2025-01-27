import type { Meta, StoryObj } from '@storybook/react';
 

import PropertyCards from '@/components/atoms/property-cards';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Atoms/Cards/Property Card',
  component: PropertyCards,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
     
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {   },
} satisfies Meta<typeof PropertyCards>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    imgSrc: "test",
    title: "test",
    desc: "test",
    bedrooms: "test",
    bathrooms: "test",
    type: "test",
  },
};
