import React from 'react'
import UnderstandAI from '../../../codebases/UT-HAI/client-deliberation/src/components/UnderstandAI'
import { withDelibThemeUi } from '../../../.storybook/decorators'

export default {
  component: UnderstandAI,
  decorators: [withDelibThemeUi],
  argTypes: {
    currentIndex: {
      options: [0, 1, 2, 3, 4, 5],
      control: { type: "inline-radio" },
    },
  },
}

const Template = (args) => <UnderstandAI {...args} />

export const Default = Template.bind({})
Default.args = {
  currentIndex: 0,
}

export const ZoomStep = Template.bind({})
ZoomStep.args = {
  currentIndex: 5,
}
