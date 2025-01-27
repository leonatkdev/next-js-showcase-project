import type { Meta, StoryObj } from '@storybook/react';
//  

import AchievementCard from '@/components/atoms/achievement-card';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Atoms/Cards/Achievement Card',
  component: AchievementCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { o  },
} satisfies Meta<typeof AchievementCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'test',
    desc: "test"
  },
};
