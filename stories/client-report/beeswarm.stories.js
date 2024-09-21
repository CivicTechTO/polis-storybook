import React from 'react'

import '../../polis/client-report/src/index.css';

import Beeswarm from '../../polis/client-report/src/components/beeswarm/beeswarm'

import participationData from '../../.storybook/data/3ntrtcehas-participation-init.json'
const pcaData = JSON.parse(participationData.pca)

export default {
  title: 'Client-Report/Beeswarm',
  component: Beeswarm,
}

const Template = (args) => <Beeswarm {...args} />

export const AllNull = Template.bind({})
AllNull.args = {
  //conversation: participationData.conversation,
  conversation: null,
  extremity: null, //{this.state.extremity}
  math: null, //{this.state.math}
  comments: null, //{this.state.comments}
  probabilities: null, //{this.state.filteredCorrelationMatrix}
  probabilitiesTids: null, //{this.state.filteredCorrelationTids}
  voteColors: null, //{this.state.voteColors}
}

export const Default = Template.bind({})
Default.args = {
  ...AllNull.args,
  conversation: participationData.conversation,
  extremity: null, //{this.state.extremity}
  math: pcaData, //{this.state.math}
  comments: null, //{this.state.comments}
  probabilities: null, //{this.state.filteredCorrelationMatrix}
  probabilitiesTids: null, //{this.state.filteredCorrelationTids}
  voteColors: null, //{this.state.voteColors}
}
