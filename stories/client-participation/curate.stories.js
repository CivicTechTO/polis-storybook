import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import * as globals from '../../codebases/compdem/client-participation/vis2/components/globals'
import Strings from '../../codebases/compdem/client-participation/js/strings/en_us'
import Curate from '../../codebases/compdem/client-participation/vis2/components/curate'
import { getMath } from '../../.storybook/utils'

const mathResults = getMath()

export default {
  title: 'Client-Participation/Curate',
  component: Curate
}

const Template = (args) => {
  const [selectedTidCuration, setSelectedTidCuration] = useState(globals.tidCuration.majority)
  const handleCurateButtonClick = (tidCuration) => {
    action("Clicked")(tidCuration)
    setSelectedTidCuration(tidCuration)
  }
  return <Curate {...{selectedTidCuration, handleCurateButtonClick}} {...args} />
}

export const Interactive = Template.bind({})
Interactive.args = {
  Strings: {
    majorityOpinion: Strings.majorityOpinion,
    group_123: Strings.group_123
  },
  math: mathResults,
}

export const Unselected = Template.bind({})
Unselected.args = {
  selectedTidCuration: null,
  Strings: {
    majorityOpinion: Strings.majorityOpinion,
    group_123: Strings.group_123
  },
  handleCurateButtonClick: action('Clicked'),
  math: mathResults,
}

export const MajoritySelected = Template.bind({})
MajoritySelected.args = {
  ...Unselected.args,
  selectedTidCuration: globals.tidCuration.majority
}

export const GroupSelected = Template.bind({})
GroupSelected.args = {
  ...Unselected.args,
  selectedTidCuration: 1
}
