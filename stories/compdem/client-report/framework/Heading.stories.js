import React from 'react'
import Heading from '../../../../codebases/compdem/client-report/src/components/framework/heading'
import { getConversation } from '../../../../.storybook/utils'

import '../../../../codebases/compdem/client-report/src/index.css';

export default {
  component: Heading,
}

const Template = (args) => <Heading {...args} />

export const Default = Template.bind({})
Default.args = {
  conversation: getConversation(),
}
