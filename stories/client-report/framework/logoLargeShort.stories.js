import React from 'react'

import '../../../polis/client-report/src/index.css';

import LogoLargeShort from '../../../polis/client-report/src/components/framework/logoLargeShort'

export default {
  title: 'Client-Report/LogoLargeShort',
  component: LogoLargeShort,
}

const Template = (args) => <LogoLargeShort {...args} />

export const Default = Template.bind({})
Default.args = {}
