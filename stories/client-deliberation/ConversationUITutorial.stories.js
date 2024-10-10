import React from 'react'
import ConversationUITutorial from '../../codebases/UT-HAI/client-deliberation/src/components/ConversationUITutorial'
import { withDelibThemeUi } from '../../.storybook/decorators'

export default {
  title: 'Client-Deliberation/ConversationUITutorial',
  component: ConversationUITutorial,
  decorators: [withDelibThemeUi],
}

const Template = (args) => <div>Not Yet Implemented</div>

export const Default = Template.bind({})
Default.args = {}
