import React from 'react'
import { action } from '@storybook/addon-actions'
import * as globals from '../../polis/client-participation/vis2/components/globals'
import { Button as CurateButton } from '../../polis/client-participation/vis2/components/curate'

export default {
  title: 'Client-Participation/CurateButton',
  component: CurateButton,
}

const Template = (args) => <CurateButton {...args} />

export const Default = Template.bind({})
Default.args = {
  selectedTidCuration: null,
  handleCurateButtonClick: action('Clicked'),
  identifier: "default-identifier",
  children: "Button",
}

export const LongLabelSelected = Template.bind({})
LongLabelSelected.args = {
  ...Default.args,
  identifier: "long-identifier",
  selectedTidCuration: "long-identifier",
  children: "Really Long Button",
}

export const LongLabelNoneSelected = Template.bind({})
LongLabelNoneSelected.args = {
  ...LongLabelSelected.args,
  selectedTidCuration: null,
}

export const LongLabelOtherSelected = Template.bind({})
LongLabelOtherSelected.args = {
  ...LongLabelSelected.args,
  selectedTidCuration: "other-identifier",
}

export const MajoritySelected = Template.bind({})
MajoritySelected.args = {
  ...Default.args,
  identifier: globals.tidCuration.majority,
  selectedTidCuration: globals.tidCuration.majority,
  children: "Majority Opinion",
}