import React from 'react'
import Graph from '../../../codebases/compdem/client-participation/vis2/components/graph'
import { getComments, getMath } from '../../../.storybook/utils'
import Strings from '../../../codebases/compdem/client-participation/js/strings/en_us'
import { action } from '@storybook/addon-actions'

const commentsData = getComments()
const mathResult = getMath()

export default {
  title: 'compdem/client-participation/Graph (buggy)',
  component: Graph,
}

const Template = (args) => <Graph {...args} />

export const Default = Template.bind({})
Default.args = {
  comments: commentsData,
  badTids: mathResult['mod-out'],
  tidsToShow: mathResult.repness[1].map((c) => c.tid ),
  //...pcaData.consensus.agree.map((c) => c.tid ),
  //...pcaData.consensus.disagree.map((c) => c.tid ),
  //],
  jumpstartToggle: false,
  Strings,
  ptptois: [],
  math: mathResult,
  onCurationChange: action('Clicked'),
}
