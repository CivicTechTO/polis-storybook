import React from 'react'
import { action } from '@storybook/addon-actions'
import { Hull } from '../../codebases/compdem/client-participation/vis2/components/hull'

export default {
  title: 'Client-Participation/Hull',
  component: Hull,
  decorators: [
    (Story) => (
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={400} height={400}>
        <Story />
      </svg>
    )
  ]
}

const Template = (args) => <Hull {...args} />

export const Default = Template.bind({})
Default.args = {
  gid: 2,
  selectedGroup: null,
  pathString: 'M422.8101166110204,163.61632504882766L412.3646448995831,228.89395991401378L401.4341938681133,269.65940938610925L279.46357662898936,304.98018771161065L217.74164128374287,245.00007079872233L227.11722756540448,220.3191358443033L414.4221203956728,122.83963557283175L422.8101166110204,163.61632504882766',
  handleClick: action('Clicked'),
  getHullElems: action('Created ref'),
}

export const IsSelected = Template.bind({})
IsSelected.args = {
  ...Default.args,
  selectedGroup: 2
}
