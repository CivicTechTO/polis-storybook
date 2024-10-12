import React from 'react'
import ObtainLink from '../../../codebases/UT-HAI/client-deliberation/src/components/ObtainLink'
import { withDelibThemeUi } from '../../../.storybook/decorators'

export default {
  component: ObtainLink,
  decorators: [withDelibThemeUi],
}

const Template = (args) => <ObtainLink {...args} />

export const Default = Template.bind({})
Default.args = {}
