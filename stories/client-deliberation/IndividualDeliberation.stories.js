import React from 'react'
import IndividualDeliberation from '../../codebases/UT-HAI/client-deliberation/src/components/IndividualDeliberation'
import { withDelibThemeUi } from '../../.storybook/decorators'

export default {
  title: 'Client-Deliberation/IndividualDeliberation',
  component: IndividualDeliberation,
  decorators: [withDelibThemeUi],
  argTypes: {
    currentIndex: {
      options: [0, 1, 2],
      control: { type: 'inline-radio' },
    },
  },
}

const Template = (args) => <IndividualDeliberation {...args} />

export const Default = Template.bind({})
Default.args = {
  currentIndex: 0,
}
