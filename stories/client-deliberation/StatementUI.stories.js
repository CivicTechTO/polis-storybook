import React from 'react'
import StatementUI from '../../codebases/UT-HAI/client-deliberation/src/components/StatementUI'
import StatementUIContainer from '../../codebases/UT-HAI/client-deliberation/src/components/StatementUIContainer'
import { action } from '@storybook/addon-actions'
import socialAvatar from '../../.storybook/assets/avatar-sample.jpg'
import { withDelibThemeUi } from '../../.storybook/decorators'

export default {
  title: 'Client-Deliberation/StatementUI',
  component: StatementUI,
  decorators: [withDelibThemeUi],
}

const Template = (args) => <StatementUIContainer>
  <StatementUI {...args} />
</StatementUIContainer>

export const Default = Template.bind({})
Default.args = {
  author: "Anonymous",
  authorAvatar: null,
  numStatementsRemaining: 54,
  statement: "I feel frustrated that this thing is that way.",
  vote: action("Voted!"),
}

export const KnownUser = Template.bind({})
KnownUser.args = {
  author: "Audrey Tang",
  authorAvatar: socialAvatar,
  numStatementsRemaining: 54,
  statement: "I feel frustrated that this thing is that way.",
  vote: action("Voted!"),
}
