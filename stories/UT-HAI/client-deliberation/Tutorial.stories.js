import React from 'react'
import Tutorial from '../../../codebases/UT-HAI/client-deliberation/src/components/Tutorial'
import { action } from '@storybook/addon-actions'
import { withDelibThemeUi } from '../../../.storybook/decorators'

export default {
  component: Tutorial,
  decorators: [withDelibThemeUi],
  argTypes: {
    currentIndexpage: {
      options: [0, 1, 2],
      control: { type: 'inline-radio' },
    },
    tutorialprogress: {
      options: [0, 1, 2, 3],
      control: { type: 'inline-radio' },
    },
  },
}

const Template = (args) => <Tutorial {...args} />

export const Default = Template.bind({})
Default.args = {
  tutorialprogress: 0,
  currentIndexpage: 0,
  email: "foo@example.com",
  currentIndex: 1,
  setCurrentIndex: action("setCurrentIndex!"),
  setnextButtonState: action("setnextButtonState!"),
}
