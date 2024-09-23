import React from 'react'
import Header from '../../polis/client-admin/src/components/landers/lander-header'
import { withThemeUi } from '../../.storybook/decorators'

export default {
  title: 'Client-Admin/Header',
  component: Header,
  decorators: [withThemeUi],
}

const Template = (args) => <Header {...args} />

export const Default = Template.bind({})
Default.args = {}
