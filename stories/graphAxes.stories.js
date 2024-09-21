import React from 'react'

import * as globals from '../polis/client-participation/vis2/components/globals'
import GraphAxes from '../polis/client-participation/vis2/components/graphAxes'

export default {
  title: 'Visualization/GraphAxes',
  component: GraphAxes,
  decorators: [
    (Story) => (
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={globals.sideWithPadding} height={globals.svgHeightWithPadding+500}>
        <Story />
      </svg>
    )
  ]
}

const Template = (args) => <GraphAxes {...args} />

export const Default = Template.bind({})
Default.args = {
  yCenter: globals.svgHeightWithPadding/2,
  xCenter: globals.sideWithPadding/2,
  report: {
    label_y_pos: '',
    label_y_neg: '',
    label_x_neg: '',
    label_x_pos: '',
  }
}

export const NewOrigin = Template.bind({})
NewOrigin.args = {
  ...Default.args,
  yCenter: 200,
  xCenter: 200
}

export const LabelYAxis = Template.bind({})
LabelYAxis.args = {
  ...Default.args,
  report: {
    ...Default.args.report,
    label_y_pos: globals.axisLabels.yRight,
    label_y_neg: globals.axisLabels.yLeft
  }
}

export const LabelXAxis = Template.bind({})
LabelXAxis.args = {
  ...Default.args,
  report: {
    ...Default.args.report,
    label_x_neg: globals.axisLabels.xLeft,
    label_x_pos: globals.axisLabels.xRight
  }
}
