import React from 'react'
import SidebarModule from '../../polis-UT-HAI/client-deliberation/src/components/SidebarModule'
import Sidebar from '../../polis-UT-HAI/client-deliberation/src/components/Sidebar'
import { withDelibThemeUi } from '../../.storybook/decorators'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Client-Deliberation/SidebarModule',
  component: SidebarModule,
  decorators: [withDelibThemeUi],
}

const Template = (args) => <Sidebar modules={[
  {...args},
  {
    name: "Another module",
    progress: 50, // percent
    currently_displayed: false,
    not_completed: true,
  }]}
  onModuleClick={action("Clicked!")}
/>

export const Default = Template.bind({})
Default.args = {
  name: "Some module",
  progress: 20, // percent
  currently_displayed: true,
  not_completed: true,
}
