import React from 'react'
import { withRedux, withThemeUi } from '../../../.storybook/decorators'
import { getRejectedComments } from '../../../.storybook/utils'
import ModerateCommentsRejected from '../../../codebases/compdem/client-admin/src/components/conversation-admin/comment-moderation/moderate-comments-rejected'

export default {
  component: ModerateCommentsRejected,
  decorators: [withThemeUi, withRedux],
}

const Template = (args) => <ModerateCommentsRejected {...args} />

export const Default = Template.bind({})
Default.args = {
  rejected_comments: getRejectedComments(),
}