import React from 'react'
import ConversationUI from '../../codebases/UT-HAI/client-deliberation/src/components/ConversationUI'
import { withDelibThemeUi } from '../../.storybook/decorators'

export default {
  title: 'Client-Deliberation/ConversationUI',
  component: ConversationUI,
  decorators: [withDelibThemeUi],
}

const Template = (args) => <div>Not Yet Implemented</div>

export const Default = Template.bind({})
Default.args = {}
