import React from 'react'
import Tutorials from '../../codebases/UT-HAI/client-deliberation/src/components/Tutorials'
import { action } from '@storybook/addon-actions'
import { withDelibThemeUi } from '../../.storybook/decorators'

export default {
  title: 'Client-Deliberation/Tutorials', 
  component: Tutorials,
  decorators: [withDelibThemeUi],
  argTypes: {
    current_state_index: {
      options: [0, 1, 2, 3, 4],
      control: { type: 'inline-radio' },
    },
  },
}

const Template = (args) => <Tutorials {...args} />

export const Default = Template.bind({})
Default.args = {
  email: null,
  current_state_index: 0,
  setcurrent_state_index: action("Set index!"),
  heading: "Some Tutorial",
}
