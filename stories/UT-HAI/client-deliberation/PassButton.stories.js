import React from 'react'
import PassButton from '../../../codebases/UT-HAI/client-deliberation/src/components/PassButton'
import { action } from '@storybook/addon-actions'
import { withDelibThemeUi } from '../../../.storybook/decorators'

export default {
  component: PassButton,
  decorators: [withDelibThemeUi],
}

const Template = (args) => <PassButton {...args} />

export const Default = Template.bind({})
Default.args = {
  vote: action("Voted!"),
}
