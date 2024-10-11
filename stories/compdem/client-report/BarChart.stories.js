import React from 'react'
import BarChart from '../../../codebases/compdem/client-report/src/components/barChart'
import { getMath } from '../../../.storybook/utils'
import { svgDecorator } from '../../../.storybook/decorators'

const mathResults = getMath()

export default {
  component: BarChart,
  decorators: [svgDecorator],
}

const Template = (args) => <BarChart {...args} />

export const Default = Template.bind({})
Default.args = {
  comment: { tid: 4 },
  groupVotes: mathResults['group-votes'][0],
  ptptCount: mathResults['n'],
}

export const SomeOtherComment = Template.bind({})
SomeOtherComment.args = {
  ...Default.args,
  comment: { tid: 15 }
}

export const SomeOtherGroup = Template.bind({})
SomeOtherGroup.args = {
  ...Default.args,
  groupVotes: mathResults['group-votes'][2]
}
