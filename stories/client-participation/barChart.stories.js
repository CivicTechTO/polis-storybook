import React from 'react'
import BarChart from '../../polis/client-participation/vis2/components/barChart'
import { getMath } from '../../.storybook/utils'

export default {
  title: 'Client-Participation/BarChart',
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

const mathResults = getMath()

export const Default = Template.bind({})
Default.args = {
  selectedComment: { tid: 4 },
  groupVotes: mathResults['group-votes'][0],
  translate: 'translate(0,0)',
  groups: []
}

export const SomeOtherComment = Template.bind({})
SomeOtherComment.args = {
  ...Default.args,
  selectedComment: { tid: 15 }
}

export const SomeOtherGroup = Template.bind({})
SomeOtherGroup.args = {
  ...Default.args,
  groupVotes: mathResults['group-votes'][2]
}

export const GlobalAggregate = Template.bind({})
GlobalAggregate.args = {
  ...Default.args,
  groupVotes: null,
  groups: mathResults['group-votes']
}

export const NewPosition = Template.bind({})
NewPosition.args = {
  ...Default.args,
  translate: 'translate(25,25)'
}

export const NoSelectedComment = Template.bind({})
NoSelectedComment.args = {
  ...Default.args,
  selectedComment: null
}
