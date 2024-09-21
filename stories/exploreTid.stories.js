import React from 'react'
import { action } from '@storybook/addon-actions'

import ExploreTid from '../polis/client-participation/vis2/components/exploreTid'

import participationData from '../.storybook/data/3ntrtcehas-participation-init.json'
const pcaData = JSON.parse(participationData.pca)

export default {
  title: 'Visualization/ExploreTid',
  component: ExploreTid
}

const Template = (args) => <ExploreTid {...args} />

export const Default = Template.bind({})
Default.args = {
  onVoteClicked: action('Clicked'),
  handleReturnToVoteClicked: action('Clicked'),
  selectedComment: { tid: 49, txt: 'This comment is foobar.' },
  browserDimensions: 800,
  Strings: {
    pctAgreedOfGroupLong: '{{pct}}% of those in group {{group}} who voted on statement {{comment_id}} agreed.',
    pctDisagreedOfGroupLong: '{{pct}}% of those in group {{group}} who voted on statement {{comment_id}} disagreed.'
  },
  math: pcaData,
  selectedTidCuration: 0,
  comments: [],
  votesByMe: [],
}

export const NarrowBrowserWidth = Template.bind({})
NarrowBrowserWidth.args = {
 ...Default.args,
 browserDimensions: 700
}
