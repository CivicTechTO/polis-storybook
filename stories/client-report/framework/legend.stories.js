import React from 'react'

import '../../../polis/client-report/src/index.css';

import Legend from '../../../polis/client-report/src/components/framework/legend'
import { getVoteColors } from '../../../.storybook/utils'

export default {
  title: 'Client-Report/Legend',
  component: Legend,
}

const Template = (args) => <Legend {...args} />

export const Default = Template.bind({})
Default.args = {
  voteColors: getVoteColors(),
}
