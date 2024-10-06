import React from 'react'
import Visualization from '../../polis-UT-HAI/client-deliberation/src/components/Visualization'
import { withDelibThemeUi } from '../../.storybook/decorators'

export default {
  title: 'Client-Deliberation/Visualization',
  component: Visualization,
  decorators: [withDelibThemeUi],
}

const Template = (args) => <div>Not Yet Implemented</div>

export const Default = Template.bind({})
Default.args = {}
