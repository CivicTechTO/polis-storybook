import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import * as globals from '../../../../codebases/compdem/client-participation/vis2/components/globals'
import Strings from '../../../../codebases/compdem/client-participation/js/strings/en_us'
import CurateV2 from './CurateV2'
import { getMath } from '../../../../.storybook/utils'

const mathResults = getMath()

export default {
  component: CurateV2,
  argTypes: {
    groupCount: {
      options: [2, 3, 4],
      control: { type: 'inline-radio' },
    }
  }
}

const Template = ({ groupCount, ...args }) => {
  args.math["group-clusters"] = mathResults["group-clusters"].slice(0, groupCount)
  const [selectedTidCuration, setSelectedTidCuration] = useState(globals.tidCuration.majority)
  const handleCurateButtonClick = (tidCuration) => {
    action("Clicked")(tidCuration)
    setSelectedTidCuration(tidCuration)
  }
  return <CurateV2 {...{selectedTidCuration, handleCurateButtonClick}} {...args} />
}

export const Interactive = Template.bind({})
Interactive.args = {
  groupCount: 4,
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
