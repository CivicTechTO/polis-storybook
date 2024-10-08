import React from 'react'
import PolisButton from '../../polis-UT-HAI/client-deliberation/src/components/PolisButton'
import { action } from '@storybook/addon-actions'
import { withDelibThemeUi } from '../../.storybook/decorators'

export default {
  title: 'Client-Deliberation/PolisButton',
  component: PolisButton,
  decorators: [withDelibThemeUi],
}

const Template = (args) => <PolisButton {...args} />

export const Default = Template.bind({})
Default.args = {
  onClick: action("Clicked!"),
  buttonText: "Click me",
}
