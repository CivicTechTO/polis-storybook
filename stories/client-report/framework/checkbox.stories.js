import React from 'react'
import Checkbox from '../../../polis/client-report/src/components/framework/checkbox'
import settings from '../../../polis/client-report/src/settings'

import '../../../polis/client-report/src/index.css';

export default {
  title: 'Client-Report/Checkbox (buggy)',
  component: Checkbox,
}

const Template = (args) => <Checkbox {...args} />

export const Default = Template.bind({})
Default.args = {
  label: "foo",
  disabled: false,
  checked: true,
  clickHandler: () => {},
  labelPosition: "left",
  labelWrapperColor: settings.darkGray,
  color: settings.polisBlue,
}
