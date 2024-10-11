import React from 'react'
import Deliberation from '../../../codebases/UT-HAI/client-deliberation/src/components/Deliberation'
import { withDelibThemeUi } from '../../../.storybook/decorators'

export default {
  component: Deliberation,
  decorators: [withDelibThemeUi],
}

const Template = (args) => <div>Not Yet Implemented</div>

export const Default = Template.bind({})
Default.args = {}
