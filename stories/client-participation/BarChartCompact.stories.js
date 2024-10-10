import React from 'react'
import BarChartCompact from '../../codebases/compdem/client-participation/vis2/components/barChartCompact'
import { getMath } from '../../.storybook/utils'
import { svgDecorator } from '../../.storybook/decorators'
import * as globals from '../../codebases/compdem/client-participation/vis2/components/globals'

const mathResult = getMath()
const getGroupIds = (mathResult) => (mathResult['group-clusters'].map(g => g.id))
const getGroupLabels = (mathResult) => (
  getGroupIds(mathResult).map((gid) => globals.groupLabels[gid])
)

const groupIndexFromName = (groupName) => globals.groupLabels.indexOf(groupName)

export default {
  title: 'Client-Participation/BarChartCompact',
  component: BarChartCompact,
  decorators: [svgDecorator],
  argTypes: {
    // TODO: make statement display logic.
    statement: {
      options: ['1: Foo bar', '2: Foo baz'],
      control: { type: 'select' },
    },
    group: {
      // Makes [0, 1, 2, 3]
      options: getGroupIds(mathResult),
      control: {
        type: 'inline-radio',
        // Makes {0: 'A', 1: 'B', 2: 'C', 3: 'D'}
        labels: Object.assign({}, getGroupLabels(mathResult)),
      },
    },
  },
  render: ({ statement, group, ...args }) => {
    Object.assign(args.groupVotes, mathResult['group-votes'][group])
    // TODO: make statement logic.
    return <BarChartCompact {...args} />
  },
}

const initialGroup = 0
const initialStatement = 4
export const Default = {
  args: {
    group: initialGroup,
    statement: initialStatement,
    selectedComment: { tid: initialStatement },
    groupVotes: Object.assign({}, mathResult['group-votes'][initialGroup]),
    translate: 'translate(1,1)',
  }
}
