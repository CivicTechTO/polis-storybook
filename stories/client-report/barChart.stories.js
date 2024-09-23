import React from 'react'
import BarChart from '../../polis/client-report/src/components/barChart'
import { getMath } from '../../.storybook/utils'

const mathResults = getMath()

export default {
  title: 'Client-Report/BarChart',
  component: BarChart,
  decorators: [
    (Story) => (
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="100">
        <Story />
      </svg>
    )
  ]
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
