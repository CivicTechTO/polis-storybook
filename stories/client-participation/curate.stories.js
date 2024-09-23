import React from 'react'
import { action } from '@storybook/addon-actions'
import * as globals from '../../polis/client-participation/vis2/components/globals'
import Curate from '../../polis/client-participation/vis2/components/curate'
import { getMath } from '../../.storybook/utils'

const mathResults = getMath()

export default {
  title: 'Client-Participation/Curate',
  component: Curate
}

const Template = (args) => <Curate {...args} />

export const Default = Template.bind({})
Default.args = {
  math: mathResults,
  handleCurateButtonClick: action('Clicked'),
  selectedTidCuration: null,
  Strings: {majorityOpinion: 'Majority Opinion', group_123: 'Group:'}
}

export const MajoritySelected = Template.bind({})
MajoritySelected.args = {
  ...Default.args,
  selectedTidCuration: globals.tidCuration.majority
}

export const GroupSelected = Template.bind({})
GroupSelected.args = {
  ...Default.args,
  selectedTidCuration: 1
}
