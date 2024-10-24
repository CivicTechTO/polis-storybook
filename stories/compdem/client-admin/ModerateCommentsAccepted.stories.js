import React from "react";
import { withRedux, withThemeUi } from "../../../.storybook/decorators";
import ModerateCommentsAccepted from "../../../codebases/compdem/client-admin/src/components/conversation-admin/comment-moderation/moderate-comments-accepted";
import { getAcceptedComments } from "../../../.storybook/utils";

export default {
  component: ModerateCommentsAccepted,
  decorators: [withThemeUi, withRedux],
};

const Template = (args) => <ModerateCommentsAccepted {...args} />;

export const Default = Template.bind({});
Default.args = {
  accepted_comments: getAcceptedComments(),
};
