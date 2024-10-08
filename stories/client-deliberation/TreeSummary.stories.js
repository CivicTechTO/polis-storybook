import React from 'react'
import TreeSummary from '../../polis-UT-HAI/client-deliberation/src/components/TreeSummary'
import { action } from '@storybook/addon-actions'
import { withDelibThemeUi } from '../../.storybook/decorators'

export default {
  title: 'Client-Deliberation/TreeSummary',
  component: TreeSummary,
  decorators: [withDelibThemeUi],
}

const Template = (args) => <TreeSummary {...args} />

export const Default = Template.bind({})
Default.args = {
  topics: [
    "topic 1",
    "topic 2",
  ],
  onButtonClick: action("Clicked!"),
  onBack: action("Go Back!"),
  topicsHistory: [
    ["topic 1"],
    "topic 2",
  ],
}
