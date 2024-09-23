import React from 'react'
import { action } from '@storybook/addon-actions'
import { Label as HullLabel } from '../../polis/client-participation/vis2/components/hullLabels'
import { svgDecorator } from '../../.storybook/decorators'

export default {
  title: 'Client-Participation/HullLabel (fix styling)',
  component: HullLabel,
  decorators: [svgDecorator],
}

const Template = (args) => <HullLabel {...args} />

export const Default = Template.bind({})
Default.args = {
  ptptCount: 4,
  centroid: {
    x: 50,
    y: 50
  },
  gid: 3,
  selectedGroup: 0,
  handleClick: action('Clicked')
}

export const Selected = Template.bind({})
Selected.args = {
  ...Default.args,
  selectedGroup: 3
}


export const TensOfMembers = Template.bind({})
TensOfMembers.args = {
  ...Selected.args,
  ptptCount: 45
}

export const HundredsOfMembers = Template.bind({})
HundredsOfMembers.args = {
  ...Selected.args,
  ptptCount: 456
}

export const ThousandsOfMembers = Template.bind({})
ThousandsOfMembers.args = {
  ...Selected.args,
  ptptCount: 4567
}

export const TensOfThousandsOfMembers = Template.bind({})
TensOfThousandsOfMembers.args = {
  ...Selected.args,
  ptptCount: 45678
}

export const RepeatedDigit = Template.bind({})
RepeatedDigit.args = {
  ...Selected.args,
  ptptCount: 99999
}
