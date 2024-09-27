import React from 'react'
import Header from '../../polis/client-admin/src/components/landers/lander-header'
import { withThemeUi } from '../../.storybook/decorators'
import { withRouter } from 'storybook-addon-remix-react-router'

export default {
  title: 'Client-Admin/Header',
  component: Header,
  decorators: [withRouter, withThemeUi],
}

const Template = (args) => <Header {...args} />

export const Default = Template.bind({})
Default.args = {}
