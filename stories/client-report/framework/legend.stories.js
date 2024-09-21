import React from 'react'

import '../../../polis/client-report/src/index.css';

import Legend from '../../../polis/client-report/src/components/framework/legend'

export default {
  title: 'Client-Report/Legend',
  component: Legend,
}

const Template = (args) => <Legend {...args} />

export const Default = Template.bind({})
Default.args = {
  voteColors: {
    "agree": "rgb(46, 204, 113)",
    "disagree": "rgb(231, 76, 60)",
    "pass": "rgb(230,230,230)"
  },
}
