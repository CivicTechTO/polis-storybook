import React from 'react'
import Beeswarm from '../../../codebases/compdem/client-report/src/components/beeswarm/beeswarm'
import { getMath, getConversation, getExtremity } from '../../../.storybook/utils'

import '../../../codebases/compdem/client-report/src/index.css';
import { comments, conversation, extremity, math } from './testData';

const mathResult = getMath()

export default {
  title: 'compdem/client-report/Beeswarm',
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
  conversation: conversation,
  extremity: extremity,
  math: math,
  comments: comments,
  probabilities: {}, //{this.state.filteredCorrelationMatrix}
  probabilitiesTids: {}, //{this.state.filteredCorrelationTids}
  voteColors: {
    "agree": "rgb(46, 204, 113)",
    "disagree": "rgb(231, 76, 60)",
    "pass": "rgb(230,230,230)"
  }, //{this.state.voteColors},

}
