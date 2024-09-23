import React from 'react'
import SignIn from '../../polis/client-admin/src/components/landers/signin'
import { withThemeUi, withRedux } from '../../.storybook/decorators'
import { withRouter } from 'storybook-addon-remix-react-router'

export default {
  title: 'Client-Admin/SignIn',
  component: SignIn,
  decorators: [withThemeUi, withRedux, withRouter],
}

const Template = (args) => <SignIn {...args} />

export const Default = Template.bind({})
Default.args = {
  location: {
    pathname: '/signin',
  }
}
