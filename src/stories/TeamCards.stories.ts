import type { Meta, StoryObj } from '@storybook/react';
 

import TeamCards from '@/components/atoms/team-card';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Atoms/Cards/Team Card',
  component: TeamCards,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
     
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {   },
} satisfies Meta<typeof TeamCards>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    imgSrc: "test",
  name: "test",
  title: "test",
  },
};
