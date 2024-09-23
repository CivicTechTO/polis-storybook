import React from 'react'
import Graph from '../../polis/client-participation/vis2/components/graph'
import { getMath } from '../../.storybook/utils'
import Strings from '../../polis/client-participation/js/strings/en_us'
import commentsData from '../../.storybook/data/3ntrtcehas-comments.json'
import { action } from '@storybook/addon-actions'

const mathResult = getMath()

export default {
  title: 'Client-Participation/Graph (buggy)',
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
