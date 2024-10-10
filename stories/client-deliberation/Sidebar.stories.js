import React from 'react'
import Sidebar from '../../codebases/UT-HAI/client-deliberation/src/components/Sidebar'
import { withDelibThemeUi } from '../../.storybook/decorators'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Client-Deliberation/Sidebar',
  component: Sidebar,
  decorators: [withDelibThemeUi],
}

const Template = (args) => <Sidebar {...args} />

export const Default = Template.bind({})
Default.args = {
  onModuleClick: action("Clicked!"),
  modules: [
    {
      name: "Some module",
      progress: 20, // percent
      currently_displayed: true,
      not_completed: true,
    },
    {
      name: "Another module",
      progress: 50, // percent
      currently_displayed: true,
      not_completed: true,
    },
  ],
}
