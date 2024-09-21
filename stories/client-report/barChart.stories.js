import React from 'react'

import BarChart from '../../polis/client-report/src/components/barChart'

import participationData from '../../.storybook/data/3ntrtcehas-participation-init.json'
const pcaData = JSON.parse(participationData.pca)

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
  groupVotes: pcaData['group-votes'][0],
  ptptCount: pcaData['n'],
}

export const SomeOtherComment = Template.bind({})
SomeOtherComment.args = {
  ...Default.args,
  comment: { tid: 15 }
}

export const SomeOtherGroup = Template.bind({})
SomeOtherGroup.args = {
  ...Default.args,
  groupVotes: pcaData['group-votes'][2]
}
