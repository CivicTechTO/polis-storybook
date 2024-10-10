import React from 'react'
import OpinionContainer from '../../codebases/UT-HAI/client-deliberation/src/components/OpinionContainer'
import { withDelibThemeUi } from '../../.storybook/decorators'

export default {
  title: 'Client-Deliberation/OpinionContainer',
  component: OpinionContainer,
  decorators: [withDelibThemeUi],
}

const Template = (args) => <OpinionContainer {...args} />

export const Default = Template.bind({})
Default.args = {
  showHelperText: true,
}

export const HideHelperText = Template.bind({})
HideHelperText.args = {
  showHelperText: 0,
}
