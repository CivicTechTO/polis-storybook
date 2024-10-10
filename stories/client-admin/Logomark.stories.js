import React from 'react'
import Logomark from '../../codebases/compdem/client-admin/src/components/framework/logomark'
import settings from '../../codebases/compdem/client-admin/src/settings'

export default {
  title: 'Client-Admin/Logomark',
  component: Logomark,
}

const Template = (args) => <Logomark {...args} />

export const Default = Template.bind({})
Default.args = {
  style: {
    marginRight: 10,
    position: 'relative',
    top: 6,
  },
  fill: settings.polisBlue,
}
