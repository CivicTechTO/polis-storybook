import React from 'react'
import InteriorHeader from '../../../codebases/UT-HAI/client-deliberation/src/components/interior-header'
import { withDelibThemeUi } from '../../../.storybook/decorators'
import { withRouter } from 'storybook-addon-remix-react-router'


export default {
  component: InteriorHeader,
  decorators: [withDelibThemeUi, withRouter],
}

const Template = (args) => <InteriorHeader {...args}>
  <div>Lorem ipsum dolor sit amet...</div>
</InteriorHeader>

export const Default = Template.bind({})
