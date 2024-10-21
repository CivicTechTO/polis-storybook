import React from 'react'
import Visualization from '../../../codebases/UT-HAI/client-deliberation/src/components/Visualization'
import { withDelibThemeUi } from '../../../.storybook/decorators'



export default {
  component: Visualization,
  decorators: [withDelibThemeUi],
}

const Template = (args) => <Visualization {...args} />

export const Default = Template.bind({})
// No props on this component.
// We pass in all data by mocking jQuery $.ajax calls made by PolisNet.
// See: .storybook/preview.js
Default.args = {}
