import React from 'react'
import HexLogo from '../../codebases/UT-HAI/client-deliberation/src/components/hexLogo'
import { withDelibThemeUi } from '../../.storybook/decorators'

export default {
  title: 'Client-Deliberation/HexLogo',
  component: HexLogo,
  decorators: [withDelibThemeUi],
}

const Template = (args) => <HexLogo {...args} />

export const Default = Template.bind({})
Default.args = {}
