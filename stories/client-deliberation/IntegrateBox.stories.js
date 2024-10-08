import React from 'react'
import IntegrateBox from '../../polis-UT-HAI/client-deliberation/src/components/IntegrateBox'
import { withDelibThemeUi } from '../../.storybook/decorators'

export default {
  title: 'Client-Deliberation/IntegrateBox',
  component: IntegrateBox,
  decorators: [withDelibThemeUi],
}

const Template = (args) => <IntegrateBox {...args} />

export const Default = Template.bind({})
Default.args = {
  heading: "Some heading",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  items: ["Some bullet", "Some other bullet", "Yet another bullet"],
}
