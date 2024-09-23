import React from 'react'
import Home from '../../polis/client-admin/src/components/landers/home'
import { withThemeUi } from '../../.storybook/decorators'
import { withRouter } from 'storybook-addon-remix-react-router'

export default {
  title: 'Client-Admin/Home',
  component: Home,
  decorators: [withRouter, withThemeUi],
}

const Template = (args) => <Home {...args} />

export const Default = Template.bind({})
Default.args = {}
