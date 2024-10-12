import React from 'react'
import AgreeButton from '../../../codebases/UT-HAI/client-deliberation/src/components/AgreeButton'
import { action } from '@storybook/addon-actions'
import { withDelibThemeUi } from '../../../.storybook/decorators'

export default {
  component: AgreeButton,
  decorators: [withDelibThemeUi],
}

const Template = (args) => <AgreeButton {...args} />

export const Default = Template.bind({})
Default.args = {
  vote: action("Voted!"),
}
