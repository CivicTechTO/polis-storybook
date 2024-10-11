import React from 'react'
import { action } from '@storybook/addon-actions'
import ExploreTid from '../../../codebases/compdem/client-participation/vis2/components/exploreTid'
import { getMath } from '../../../.storybook/utils'
import Strings from '../../../codebases/compdem/client-participation/js/strings/en_us'

const mathResults = getMath()

export default {
  component: ExploreTid
}

const Template = (args) => <ExploreTid {...args} />

export const Default = Template.bind({})
Default.args = {
  selectedComment: { tid: 49, txt: 'This comment is foobar.' },
  browserDimensions: 800,
  Strings: {
    pctAgreedLong: Strings.pctAgreedLong,
    pctAgreedOfGroupLong: Strings.pctAgreedOfGroupLong,
    pctDisagreedLong: Strings.pctDisagreedLong,
    pctDisagreedOfGroupLong: Strings.pctDisagreedOfGroupLong,
  },
  selectedTidCuration: 0,
  comments: [],
  votesByMe: [],
  onVoteClicked: action('Clicked'),
  handleReturnToVoteClicked: action('Clicked'),
  math: mathResults,
}

export const NarrowBrowserWidth = Template.bind({})
NarrowBrowserWidth.args = {
 ...Default.args,
 browserDimensions: 700
}
