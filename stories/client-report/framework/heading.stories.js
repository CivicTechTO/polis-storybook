import React from 'react'

import '../../../polis/client-report/src/index.css';

import Heading from '../../../polis/client-report/src/components/framework/heading'

import participationData from '../../../.storybook/data/3ntrtcehas-participation-init.json'

export default {
  title: 'Client-Report/Heading',
  component: Heading,
}

const Template = (args) => <Heading {...args} />

export const Default = Template.bind({})
Default.args = {
  conversation: participationData.conversation,
}
