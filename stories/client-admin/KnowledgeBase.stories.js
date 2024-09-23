import React from 'react'
import KnowledgeBase from '../../polis/client-admin/src/components/landers/knowledgeBase'
import { withThemeUi } from '../../.storybook/decorators'

export default {
  title: 'Client-Admin/KnowledgeBase',
  component: KnowledgeBase,
  decorators: [withThemeUi],
}

const Template = (args) => <KnowledgeBase {...args} />

export const Default = Template.bind({})
Default.args = {
    url: "https://compdemocracy.org/Welcome",
    e: "🔍",
    txt: "Google"
}
