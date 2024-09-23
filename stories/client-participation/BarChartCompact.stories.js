import React from 'react'
import BarChartCompact from '../../polis/client-participation/vis2/components/barChartCompact'
import { getMath } from '../../.storybook/utils'
import { svgDecorator } from '../../.storybook/decorators'
import * as globals from '../../polis/client-participation/vis2/components/globals'

const mathResults = getMath()

const groupIndexFromName = (groupName) => globals.groupLabels.indexOf(groupName)

export default {
  title: 'Client-Participation/BarChartCompact',
  component: BarChartCompact,
  decorators: [svgDecorator],
  argTypes: {
    statement: {
      options: ['1: Foo bar', '2: Foo baz'],
      control: { type: 'select' },
    },
    group: {
      options: ['A', 'B', 'C', 'D'],
      control: { type: 'inline-radio' },
    },
  },
  render: ({ statement, group, ...args }) => {
    const groupIndex = groupIndexFromName(group)

    Object.assign(args.groupVotes, mathResults['group-votes'][groupIndex])
    return <BarChartCompact {...args} />
  },
}

const initialGroup = 'A'
const initialStatement = 4
export const Default = {
  args: {
    group: initialGroup,
    statement: initialStatement,
    selectedComment: { tid: initialStatement },
    groupVotes: mathResults['group-votes'][groupIndexFromName(initialGroup)],
    translate: 'translate(0,0)',
  }
}
