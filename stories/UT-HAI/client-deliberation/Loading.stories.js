import React from 'react'
import Loading from '../../../codebases/UT-HAI/client-deliberation/src/components/Loading'
import { action } from '@storybook/addon-actions'
import { withDelibThemeUi } from '../../../.storybook/decorators'

export default {
  component: Loading,
  decorators: [withDelibThemeUi],
}

const Template = (args) => <Loading {...args} />

export const Default = Template.bind({})
Default.args = {
  vote: action("Voted!"),
}
