import React from "react";
import { withRedux, withThemeUi } from "../../../.storybook/decorators";
import ModerateCommentsRejected from "../../../codebases/compdem/client-admin/src/components/conversation-admin/comment-moderation/moderate-comments-rejected";
import { getRejectedComments } from "../../../.storybook/utils";

export default {
  component: ModerateCommentsRejected,
  decorators: [withThemeUi, withRedux],
  parameters: {
    store: {
      initialState: {
        mod_comments_rejected: {},
      },
    },
  },
};

const Template = (args) => <ModerateCommentsRejected {...args} />;

export const Default = Template.bind({});
Default.args = {
  rejected_comments: getRejectedComments(),
};
