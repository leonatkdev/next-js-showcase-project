import type { Meta, StoryObj } from '@storybook/react';
 

import Header from '@/components/organism/header';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Organisms/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
     
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {   },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Test",
  desc: "Test",
  imgSrc: "Test",
  showButtons: true,
  hasHomepageBadge: true,
  showHeaderTabs: true,
  costumeHeaderClass: "Test",
  },
};
