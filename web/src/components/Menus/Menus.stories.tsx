// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import Menus from './Menus'

const meta: Meta<typeof Menus> = {
  component: Menus,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Menus>

export const Primary: Story = {}
