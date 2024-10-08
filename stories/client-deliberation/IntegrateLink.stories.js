import React from 'react'
import IntegrateLink from '../../polis-UT-HAI/client-deliberation/src/components/IntegrateLink'
import { withDelibThemeUi } from '../../.storybook/decorators'

export default {
  title: 'Client-Deliberation/IntegrateLink',
  component: IntegrateLink,
  decorators: [withDelibThemeUi],
}

const Template = (args) => <IntegrateLink {...args} />

export const Default = Template.bind({})
Default.args = {
  link: '<script async src="https://example.com/embed.js"></script>',
}
