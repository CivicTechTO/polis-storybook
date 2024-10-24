import React from "react";
import { withRedux, withThemeUi } from "../../../.storybook/decorators";
import { getUnmoderatedComments } from "../../../.storybook/utils";
import ModerateCommentsTodo from "../../../codebases/compdem/client-admin/src/components/conversation-admin/comment-moderation/moderate-comments-todo";

export default {
  component: ModerateCommentsTodo,
  decorators: [withThemeUi, withRedux],
  parameters: {
    store: {
      initialState: {
        mod_comments_unmoderated: {},
      },
    },
  },
};

const Template = (args) => <ModerateCommentsTodo {...args} />;

export const Default = Template.bind({});
Default.args = {
  unmoderated_comments: getUnmoderatedComments(),
}
