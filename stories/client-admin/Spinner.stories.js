import React from 'react'
import Spinner from '../../polis/client-admin/src/components/framework/spinner'

export default {
  title: 'Client-Admin/Spinner',
  component: Spinner,
}

const Template = (args) => <Spinner {...args} />

export const Default = Template.bind({})
Default.args = {}
