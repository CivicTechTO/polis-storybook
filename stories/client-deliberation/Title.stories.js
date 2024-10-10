import React from 'react'
import Title from '../../codebases/UT-HAI/client-deliberation/src/components/Title'
import { withDelibThemeUi } from '../../.storybook/decorators'

export default {
  title: 'Client-Deliberation/Title',
  component: Title,
  decorators: [withDelibThemeUi],
}

const Template = (args) => <Title {...args} />

export const Default = Template.bind({})
Default.args = {
  value: "Some title",
}
