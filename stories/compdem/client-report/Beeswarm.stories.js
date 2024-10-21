import React from 'react'
import Beeswarm from '../../../codebases/compdem/client-report/src/components/beeswarm/beeswarm'
import { getMath, getConversation, getExtremity, getComments, getVoteColors } from '../../../.storybook/utils'

import '../../../codebases/compdem/client-report/src/index.css';

const mathResult = getMath()

export default {
  title: 'compdem/client-report/Beeswarm',
  component: Beeswarm,
}

const Template = (args) => <Beeswarm {...args} />

export const Default = Template.bind({})
Default.args = {
  conversation: getConversation(),
  extremity: getExtremity(),
  math: mathResult,
  comments: getComments(),
  probabilities: {}, //{this.state.filteredCorrelationMatrix}
  probabilitiesTids: {}, //{this.state.filteredCorrelationTids}
  voteColors: getVoteColors(), //{this.state.voteColors},
}
