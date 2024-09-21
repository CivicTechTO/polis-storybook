import React from 'react'

import '../../../polis/client-report/src/index.css';

import LogoSmallLong from '../../../polis/client-report/src/components/framework/logoSmallLong'

export default {
  title: 'Client-Report/LogoSmallLong',
  component: LogoSmallLong,
}

const Template = (args) => <LogoSmallLong {...args} />

export const Default = Template.bind({})
Default.args = {}
