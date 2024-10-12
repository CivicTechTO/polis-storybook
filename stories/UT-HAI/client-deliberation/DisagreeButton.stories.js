import React from 'react'
import DisagreeButton from '../../../codebases/UT-HAI/client-deliberation/src/components/DisagreeButton'
import { action } from '@storybook/addon-actions'
import { withDelibThemeUi } from '../../../.storybook/decorators'

export default {
  component: DisagreeButton,
  decorators: [withDelibThemeUi],
}

const Template = (args) => <DisagreeButton {...args} />

export const Default = Template.bind({})
Default.args = {
  vote: action("Voted!"),
}
