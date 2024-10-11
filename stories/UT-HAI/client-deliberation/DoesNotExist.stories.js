import React from 'react'
import DoesNotExist from '../../../codebases/UT-HAI/client-deliberation/src/components/DoesNotExist'
import { withDelibThemeUi } from '../../../.storybook/decorators'

export default {
  component: DoesNotExist,
  decorators: [withDelibThemeUi],
}

const Template = (args) => <DoesNotExist {...args} />

export const Default = Template.bind({})
Default.args = {
  title: "Some title",
}
