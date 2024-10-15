import React from 'react'
import SignOut from '../../../codebases/compdem/client-admin/src/components/landers/signout'
import { withThemeUi, withRedux, withRouter } from '../../../.storybook/decorators'

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
