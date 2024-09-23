import React from 'react'
import Footer from '../../polis/client-admin/src/components/landers/lander-footer'
import { withThemeUi } from '../../.storybook/decorators'

export default {
  title: 'Client-Admin/Footer',
  component: Footer,
  decorators: [withThemeUi],
}

const Template = (args) => <Footer {...args} />

export const Default = Template.bind({})
Default.args = {}
