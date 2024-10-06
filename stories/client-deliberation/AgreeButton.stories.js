import React from 'react'
import AgreeButton from '../../polis-UT-HAI/client-deliberation/src/components/AgreeButton'
import { action } from '@storybook/addon-actions'
import { withDelibThemeUi } from '../../.storybook/decorators'

export default {
  title: 'Client-Deliberation/AgreeButton',
  component: AgreeButton,
  decorators: [withDelibThemeUi],
}

const Template = (args) => <AgreeButton {...args} />

export const Default = Template.bind({})
Default.args = {
  vote: action("Voted!"),
}
