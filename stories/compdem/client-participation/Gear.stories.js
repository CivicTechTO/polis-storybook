import React from 'react'
import Gear from '../../../codebases/compdem/client-participation/vis2/components/gear'

export default {
  component: Gear,
}

const Template = (args) => <Gear {...args} />

export const Default = Template.bind({})
Default.args = {
  conversation_id: '123456',
}
