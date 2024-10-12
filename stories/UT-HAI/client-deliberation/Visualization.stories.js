import React from 'react'
import Visualization from '../../../codebases/UT-HAI/client-deliberation/src/components/Visualization'
import { withDelibThemeUi } from '../../../.storybook/decorators'

export default {
  component: Visualization,
  decorators: [withDelibThemeUi],
}

// TODO: Need to mock PolisNet API calls.
const Template = (args) => <div>Not Yet Implemented</div>

export const Default = Template.bind({})
Default.args = {}
