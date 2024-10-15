import React from 'react'
import CreateUser from '../../../codebases/compdem/client-admin/src/components/landers/createuser'
import { withThemeUi, withRedux, withRouter } from '../../../.storybook/decorators'

export default {
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
