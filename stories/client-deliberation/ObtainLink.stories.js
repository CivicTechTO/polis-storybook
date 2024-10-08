import React from 'react'
import ObtainLink from '../../polis-UT-HAI/client-deliberation/src/components/ObtainLink'
import { withDelibThemeUi } from '../../.storybook/decorators'

export default {
  title: 'Client-Deliberation/ObtainLink',
  component: ObtainLink,
  decorators: [withDelibThemeUi],
}

const Template = (args) => <ObtainLink {...args} />

export const Default = Template.bind({})
Default.args = {}
