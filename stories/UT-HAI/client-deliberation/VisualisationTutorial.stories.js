import React from 'react'
import VisualisationTutorial from '../../../codebases/UT-HAI/client-deliberation/src/components/VisualisationTutorial'
import { withDelibThemeUi } from '../../../.storybook/decorators'

export default {
  component: VisualisationTutorial,
  decorators: [withDelibThemeUi],
}

// TODO: Need to mock PolisNet API calls.
const Template = (args) => <div>Not Yet Implemented</div>

export const Default = Template.bind({})
Default.args = {}
