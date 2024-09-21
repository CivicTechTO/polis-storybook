import React from 'react'

import BarChart from '../polis/client-participation/vis2/components/barChart'

import participationData from '../.storybook/data/3ntrtcehas-participation-init.json'
const pcaData = JSON.parse(participationData.pca)

export default {
  title: 'Visualization/BarChart',
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
  selectedComment: { tid: 4 },
  groupVotes: pcaData['group-votes'][0],
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
  groupVotes: pcaData['group-votes'][2]
}

export const GlobalAggregate = Template.bind({})
GlobalAggregate.args = {
  ...Default.args,
  groupVotes: null,
  groups: pcaData['group-votes']
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
