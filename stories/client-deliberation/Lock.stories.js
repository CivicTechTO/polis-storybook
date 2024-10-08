import React from 'react'
import Lock from '../../polis-UT-HAI/client-deliberation/src/components/Lock'

export default {
  title: 'Client-Deliberation/Lock',
  component: Lock,
}

const Template = (args) => <Lock {...args} />

export const Default = Template.bind({})
Default.args = {
  style: {
    fill: "blue",
  },
}
