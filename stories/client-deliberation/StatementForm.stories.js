import React from 'react'
import StatementForm from '../../codebases/UT-HAI/client-deliberation/src/components/StatementForm'
import { action } from '@storybook/addon-actions'
import { withDelibThemeUi } from '../../.storybook/decorators'
import socialAvatar from '../../.storybook/assets/avatar-sample.jpg'

export default {
  title: 'Client-Deliberation/StatementForm',
  component: StatementForm,
  decorators: [withDelibThemeUi],
}

const Template = (args) => <StatementForm {...args} />

export const Default = Template.bind({})
Default.args = {
  myAvatar: null,
  conversation_id: "2demo",
  processPidResponse: action("Processing response!"),
}

export const KnownUser = Template.bind({})
KnownUser.args = {
  myAvatar: socialAvatar,
  conversation_id: "2demo",
  processPidResponse: action("Processing response!"),
}
