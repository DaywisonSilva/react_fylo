import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from '../components/atoms/Button/Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    bg: {
      name: 'Background Color (bg)',
      control: 'color',
      defaultValue: '#3065f8',
    },
    label: {},
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
