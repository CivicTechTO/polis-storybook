import React from 'react'

import '../../polis/client-report/src/index.css';

import Overview from '../../polis/client-report/src/components/overview'

import participationData from '../../.storybook/data/3ntrtcehas-participation-init.json'
const pcaData = JSON.parse(participationData.pca)

export default {
  title: 'Client-Report/Overview',
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
  conversation: participationData.conversation,
  // demographics,
  ptptCount: 100,
  ptptCountTotal: 100,
  math: pcaData,
  // comments,
  //stats,
  computedStats,
}
