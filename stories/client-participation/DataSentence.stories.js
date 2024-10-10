import React from 'react'
import * as globals from '../../codebases/compdem/client-participation/vis2/components/globals'
import { DataSentence } from '../../codebases/compdem/client-participation/vis2/components/exploreTid'
import { getMath } from '../../.storybook/utils'
import Strings from '../../codebases/compdem/client-participation/js/strings/en_us'

const mathResults = getMath()

export default {
  title: 'Client-Participation/DataSentence',
  component: DataSentence,
}

const Template = (args) => <DataSentence {...args} />

export const SomeStatementSomeGroup = Template.bind({})
SomeStatementSomeGroup.args = {
  selectedComment: { tid: 18 },
  selectedTidCuration: 0,
  Strings: {
    pctAgreedLong: Strings.pctAgreedLong,
    pctAgreedOfGroupLong: Strings.pctAgreedOfGroupLong,
    pctDisagreedLong: Strings.pctDisagreedLong,
    pctDisagreedOfGroupLong: Strings.pctDisagreedOfGroupLong,
  },
  math: mathResults,
}

export const SameStatementOtherGroup = Template.bind({})
SameStatementOtherGroup.args = {
  ...SomeStatementSomeGroup.args,
  selectedTidCuration: 1,
}

export const OtherStatementAnotherGroup = Template.bind({})
OtherStatementAnotherGroup.args = {
  ...SomeStatementSomeGroup.args,
  selectedComment: { tid: 3 },
  selectedTidCuration: 2,
}

export const MajorityStatement = Template.bind({})
MajorityStatement.args = {
  ...SomeStatementSomeGroup.args,
  selectedComment: { tid: 1 },
  selectedTidCuration: globals.tidCuration.majority,
}
