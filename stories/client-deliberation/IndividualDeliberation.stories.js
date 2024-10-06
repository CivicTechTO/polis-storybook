import React from 'react'
import IndividualDeliberation from '../../polis-UT-HAI/client-deliberation/src/components/IndividualDeliberation'
import { withDelibThemeUi } from '../../.storybook/decorators'

export default {
  title: 'Client-Deliberation/IndividualDeliberation',
  component: IndividualDeliberation,
  decorators: [withDelibThemeUi],
}

const Template = (args) => <IndividualDeliberation {...args} />

export const Default = Template.bind({})
Default.args = {}
