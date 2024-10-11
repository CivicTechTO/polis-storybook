import React from 'react'
import Legend from '../../../../codebases/compdem/client-report/src/components/framework/legend'
import { getVoteColors } from '../../../../.storybook/utils'

import '../../../../codebases/compdem/client-report/src/index.css';

export default {
  component: Legend,
}

const Template = (args) => <Legend {...args} />

export const Default = Template.bind({})
Default.args = {
  voteColors: getVoteColors(),
}
