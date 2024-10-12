import React from 'react'
import TutorialBox from '../../../codebases/UT-HAI/client-deliberation/src/components/TutorialBox'
import { withDelibThemeUi } from '../../../.storybook/decorators'
import { action } from '@storybook/addon-actions'

export default {
  component: TutorialBox,
  decorators: [withDelibThemeUi],
}

const Template = (args) => <TutorialBox {...args} />

export const Default = Template.bind({})
Default.args = {
  heading: "Some heading",
  description: [
    "Lorem ipsum 1",
    "Lorem ipsum 2",
    "Lorem ipsum 3",
  ],
  currentIndex: 0,
  email: "foo@example.com",
  onHide: action("onHide!"),
  setnextButtonstate: action("setnextButtonstate!"),
  setCurrentIndex: action("setCurrentIndex!"),
}
