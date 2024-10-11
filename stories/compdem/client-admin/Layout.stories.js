import React from 'react'
import Layout from '../../../codebases/compdem/client-admin/src/components/landers/lander-layout'
import { withThemeUi } from '../../../.storybook/decorators'
import { withRouter } from 'storybook-addon-remix-react-router';

export default {
  component: Layout,
  decorators: [withThemeUi, withRouter],
}

const Template = (args) => <Layout {...args} />

export const Default = Template.bind({})
Default.args = {
    children: <div>some content</div>
}
