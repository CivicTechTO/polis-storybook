import React from 'react'
import Header from '../../../codebases/compdem/client-admin/src/components/landers/lander-header'
import { withThemeUi, withRouter } from '../../../.storybook/decorators'

export default {
  component: Header,
  decorators: [withRouter, withThemeUi],
}

const Template = (args) => <Header {...args} />

export const Default = Template.bind({})
Default.args = {}
