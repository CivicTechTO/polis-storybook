import React from 'react'
import ExploreKnowledgeBase from '../../polis/client-admin/src/components/landers/exploreKnowledgeBase'
import { withThemeUi } from '../../.storybook/decorators'

export default {
  title: 'Client-Admin/ExploreKnowledgeBase',
  component: ExploreKnowledgeBase,
  decorators: [withThemeUi],
}

const Template = (args) => <ExploreKnowledgeBase {...args} />

export const Default = Template.bind({})
Default.args = {}
