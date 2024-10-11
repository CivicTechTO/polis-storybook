import React from 'react'
import IntegrateLink from '../../../codebases/UT-HAI/client-deliberation/src/components/IntegrateLink'
import { withDelibThemeUi } from '../../../.storybook/decorators'

export default {
  component: IntegrateLink,
  decorators: [withDelibThemeUi],
}

const Template = (args) => <IntegrateLink {...args} />

export const Default = Template.bind({})
Default.args = {
  link: '<script async src="https://example.com/embed.js"></script>',
}
