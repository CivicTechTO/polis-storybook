import React from 'react'
import Tutorial from '../../codebases/UT-HAI/client-deliberation/src/components/Tutorial'
import { action } from '@storybook/addon-actions'
import { withDelibThemeUi } from '../../.storybook/decorators'

export default {
  title: 'Client-Deliberation/Tutorial', 
  component: Tutorial,
  decorators: [withDelibThemeUi],
  argTypes: {
    currentIndexpage: {
      options: [0, 1, 2, 3],
      control: { type: 'inline-radio' },
    },
  },
}

const Template = (args) => <Tutorial {...args} />

export const Default = Template.bind({})
Default.args = {
  email: null,
  currentIndex: 0,
  tutorialprogress: 0,
  setCurrentIndex: action("Set index!"),
  currentIndexpage: 0,
  setnextButtonState: () => {},
}
