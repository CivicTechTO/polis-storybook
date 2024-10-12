import React from 'react'
import Lock from '../../../codebases/UT-HAI/client-deliberation/src/components/Lock'

export default {
  component: Lock,
}

const Template = (args) => <Lock {...args} />

export const Default = Template.bind({})
Default.args = {
  style: {
    fill: "blue",
  },
}
