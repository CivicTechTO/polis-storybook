import React from 'react'
import Press from '../../../codebases/compdem/client-admin/src/components/landers/press'
import { withThemeUi } from '../../../.storybook/decorators'
import { withRouter } from 'storybook-addon-remix-react-router';

export default {
  component: Press,
  decorators: [withThemeUi, withRouter],
}

const Template = (args) => <Press {...args} />

export const Default = Template.bind({})
Default.args = {}
