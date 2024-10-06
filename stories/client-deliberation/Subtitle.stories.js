import React from 'react'
import Subtitle from '../../polis-UT-HAI/client-deliberation/src/components/Subtitle'
import { withDelibThemeUi } from '../../.storybook/decorators'

export default {
  title: 'Client-Deliberation/Subtitle',
  component: Subtitle,
  decorators: [withDelibThemeUi],
}

const Template = (args) => <Subtitle {...args} />

export const Default = Template.bind({})
Default.args = {
  valeu: "Some subtitle",
}
