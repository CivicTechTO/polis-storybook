import React from 'react'
import Beeswarm from '../../polis/client-report/src/components/beeswarm/beeswarm'
import { getMath, getConversation, getExtremity } from '../../.storybook/utils'

import '../../polis/client-report/src/index.css';

const mathResult = getMath()

export default {
  title: 'Client-Report/Beeswarm (not working)',
  component: Beeswarm,
}

const Template = (args) => <Beeswarm {...args} />

export const AllNull = Template.bind({})
AllNull.args = {
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
  conversation: getConversation(),
  extremity: getExtremity(),
  math: mathResult,
  comments: null, //{this.state.comments}
  probabilities: null, //{this.state.filteredCorrelationMatrix}
  probabilitiesTids: null, //{this.state.filteredCorrelationTids}
  voteColors: null, //{this.state.voteColors}
}

