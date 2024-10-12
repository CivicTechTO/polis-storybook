import React from 'react'
import ConversationUITutorial from '../../../codebases/UT-HAI/client-deliberation/src/components/ConversationUITutorial'
import { withDelibThemeUi } from '../../../.storybook/decorators'

export default {
  component: ConversationUITutorial,
  decorators: [withDelibThemeUi],
}

// Needs to have "route params" passed in to work.
const Template = (args) => <div>Not Yet Implemented</div>

export const Default = Template.bind({})
Default.args = {}
