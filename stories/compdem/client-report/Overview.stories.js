import React from 'react'
import Overview from '../../../codebases/compdem/client-report/src/components/overview'
import { getMath, getConversation } from '../../../.storybook/utils'

import '../../../codebases/compdem/client-report/src/index.css';

export default {
  component: Overview,
}

const Template = (args) => <Overview {...args} />

const computedStats = {
  //votesPerVoterAvg: totalVotes / ptptCountTotal,
  votesPerVoterAvg: 123,
  //commentsPerCommenterAvg: comments.length / numUniqueCommenters,
  commentsPerCommenterAvg: 4,
};

export const Default = Template.bind({})
Default.args = {
  conversation: getConversation(),
  // demographics,
  ptptCount: 100,
  ptptCountTotal: 100,
  math: getMath(),
  // comments,
  //stats,
  computedStats,
}
