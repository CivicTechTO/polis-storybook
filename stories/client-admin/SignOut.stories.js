import React from 'react'
import SignOut from '../../polis/client-admin/src/components/landers/signout'
import { withThemeUi, withRedux } from '../../.storybook/decorators'
import { withRouter } from 'storybook-addon-remix-react-router'

export default {
  title: 'Client-Admin/SignOut',
  component: SignOut,
  decorators: [withThemeUi, withRedux, withRouter],
}

const Template = (args) => <SignOut {...args} />

export const Default = Template.bind({})
Default.args = {
  location: {
    pathname: '/signin',
  }
}
