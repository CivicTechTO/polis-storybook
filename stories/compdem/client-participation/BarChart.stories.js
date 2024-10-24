import React from 'react'
import BarChart from '../../../codebases/compdem/client-participation/vis2/components/barChart'
import { getMath } from '../../../.storybook/utils'
import { svgDecorator } from '../../../.storybook/decorators'

const mathResults = getMath()

export default {
  title: 'compdem/client-participation/BarChart (unused)',
  component: BarChart,
  decorators: [svgDecorator],
}

const Template = (args) => <BarChart {...args} />

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
