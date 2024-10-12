import React from 'react'
import StatementFormTutorial from '../../../codebases/UT-HAI/client-deliberation/src/components/StatementFormTutorial'
import { withDelibThemeUi } from '../../../.storybook/decorators'
import socialAvatar from '../../../.storybook/assets/avatar-sample.jpg'

export default {
  component: StatementFormTutorial,
  decorators: [withDelibThemeUi],
}

const Template = (args) => <StatementFormTutorial {...args} />

export const Default = Template.bind({})
Default.args = {
  myAvatar: null,
}

export const KnownUser = Template.bind({})
KnownUser.args = {
  myAvatar: socialAvatar,
}
