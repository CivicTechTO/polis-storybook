import React from 'react'
import ConversationUI from '../../../codebases/UT-HAI/client-deliberation/src/components/ConversationUI'
import { withDelibThemeUi } from '../../../.storybook/decorators'

export default {
  component: ConversationUI,
  decorators: [withDelibThemeUi],
}

// Needs to have "route params" passed in to work.
const Template = (args) => <div>Not Yet Implemented</div>

export const Default = Template.bind({})
Default.args = {}
