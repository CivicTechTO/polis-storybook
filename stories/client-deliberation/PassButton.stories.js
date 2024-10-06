import React from 'react'
import PassButton from '../../polis-UT-HAI/client-deliberation/src/components/PassButton'
import { action } from '@storybook/addon-actions'
import { withDelibThemeUi } from '../../.storybook/decorators'

export default {
  title: 'Client-Deliberation/PassButton',
  component: PassButton,
  decorators: [withDelibThemeUi],
}

const Template = (args) => <PassButton {...args} />

export const Default = Template.bind({})
Default.args = {
  vote: action("Voted!"),
}
