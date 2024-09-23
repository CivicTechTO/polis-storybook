import React from 'react'
import Layout from '../../polis/client-admin/src/components/landers/lander-layout'
import { withThemeUi } from '../../.storybook/decorators'
import { withRouter } from 'storybook-addon-remix-react-router';

export default {
  title: 'Client-Admin/Layout',
  component: Layout,
  decorators: [withThemeUi, withRouter],
}

const Template = (args) => <Layout {...args} />

export const Default = Template.bind({})
Default.args = {
    children: <div>some content</div>
}
