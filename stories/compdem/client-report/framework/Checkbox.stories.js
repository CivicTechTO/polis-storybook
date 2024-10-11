import React from 'react'
import Checkbox from '../../../../codebases/compdem/client-report/src/components/framework/checkbox'
import settings from '../../../../codebases/compdem/client-report/src/settings'

import '../../../../codebases/compdem/client-report/src/index.css';

export default {
  title: 'compdem/client-report/framework/Checkbox (buggy)',
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
