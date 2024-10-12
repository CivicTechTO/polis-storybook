import React from 'react'
import Legal from '../../../codebases/UT-HAI/client-deliberation/src/components/Legal'
import { withDelibThemeUi } from '../../../.storybook/decorators'

export default {
  component: Legal,
  decorators: [withDelibThemeUi],
  argTypes: {
    currentIndex: {
      options: [7, 8, 9],
      control: { type: "inline-radio" },
    },
  },
}

const Template = (args) => <Legal {...args} />

export const Default = Template.bind({})
Default.args = {
  currentIndex: 7,
}

export const ZoomStep = Template.bind({})
ZoomStep.args = {
  currentIndex: 9,
}
