import React from 'react'
import TutorialsBox from '../../../codebases/UT-HAI/client-deliberation/src/components/TutorialsBox'
import { action } from '@storybook/addon-actions'
import { withDelibThemeUi } from '../../../.storybook/decorators'

export default {
  component: TutorialsBox,
  decorators: [withDelibThemeUi],
}

const Template = (args) => <TutorialsBox {...args} />

export const Default = Template.bind({})
Default.args = {
  current_state_index: 0,
  heading: "Some heading",
  description: [
    "Lorem ipsum 1",
    "Lorem ipsum 2",
    "Lorem ipsum 3",
  ],
  setcurrent_state_index: action("Set index state!"),
}
