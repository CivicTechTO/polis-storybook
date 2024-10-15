import React from 'react'
import Home from '../../../codebases/compdem/client-admin/src/components/landers/home'
import { withThemeUi, withRouter } from '../../../.storybook/decorators'

export default {
  component: Home,
  decorators: [withRouter, withThemeUi],
}

const Template = (args) => <Home {...args} />

export const Default = Template.bind({})
Default.args = {}
