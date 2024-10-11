import React from 'react'
import ExploreKnowledgeBase from '../../../codebases/compdem/client-admin/src/components/landers/exploreKnowledgeBase'
import { withThemeUi } from '../../../.storybook/decorators'

export default {
  component: ExploreKnowledgeBase,
  decorators: [withThemeUi],
}

const Template = (args) => <ExploreKnowledgeBase {...args} />

export const Default = Template.bind({})
Default.args = {}
