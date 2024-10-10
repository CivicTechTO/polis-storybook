import React from 'react'
import IntegrateBoxAndConclusion from '../../codebases/UT-HAI/client-deliberation/src/components/IntegrateBoxAndConclusion'
import { withDelibThemeUi } from '../../.storybook/decorators'
import { Default as DefaultIntegrateBoxStory } from './IntegrateBox.stories'

export default {
  title: 'Client-Deliberation/IntegrateBoxAndConclusion',
  component: IntegrateBoxAndConclusion,
  decorators: [withDelibThemeUi],
}

const Template = (args) => <IntegrateBoxAndConclusion {...args} />

export const Default = Template.bind({})
Default.args = {
  ...DefaultIntegrateBoxStory.args,
  conclusion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
}
