import React from 'react'
import SignIn from '../../../codebases/compdem/client-admin/src/components/landers/signin'
import { withThemeUi, withRedux, withRouter } from '../../../.storybook/decorators'

export default {
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
