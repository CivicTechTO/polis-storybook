import React from 'react'
import CreateUser from '../../polis/client-admin/src/components/landers/createuser'
import { withThemeUi, withRedux } from '../../.storybook/decorators'
import { withRouter, reactRouterParameters } from 'storybook-addon-remix-react-router'

export default {
  title: 'Client-Admin/CreateUser',
  component: CreateUser,
  decorators: [withThemeUi, withRedux, withRouter],
}

const Template = (args) => <CreateUser {...args} />

export const Default = Template.bind({})
Default.args = {
  location: {
    pathname: '/createuser',
  }
}
