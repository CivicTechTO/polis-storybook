import React from 'react'
import SignOut from '../../../codebases/compdem/client-admin/src/components/landers/signout'
import { withThemeUi, withRedux } from '../../../.storybook/decorators'
import { withRouter } from 'storybook-addon-remix-react-router'

export default {
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
