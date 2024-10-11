import React from 'react'
import StatementButton from '../../../codebases/UT-HAI/client-deliberation/src/components/StatementButton'
import { action } from '@storybook/addon-actions'
import { withDelibThemeUi } from '../../../.storybook/decorators'

export default {
  component: StatementButton,
  decorators: [withDelibThemeUi],
}

const Template = (args) => <StatementButton {...args} />

export const Default = Template.bind({})
Default.args = {
  vote: action("Clicked!"),
}
