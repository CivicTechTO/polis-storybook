import React from 'react'
import Heading from '../../../codebases/compdem/client-report/src/components/framework/heading'
import { getConversation } from '../../../.storybook/utils'

import '../../../codebases/compdem/client-report/src/index.css';

export default {
  title: 'Client-Report/Heading',
  component: Heading,
}

const Template = (args) => <Heading {...args} />

export const Default = Template.bind({})
Default.args = {
  conversation: getConversation(),
}
