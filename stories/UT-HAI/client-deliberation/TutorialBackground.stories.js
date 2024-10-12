import React from 'react'
import TutorialBackground from '../../../codebases/UT-HAI/client-deliberation/src/components/TutorialBackground'
import { withDelibThemeUi } from '../../../.storybook/decorators'

export default {
  component: TutorialBackground,
  decorators: [withDelibThemeUi],
  argTypes: {
    currentIndex: {
      options: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      control: { type: "inline-radio" },
    },
  },
}

const Template = (args) => <TutorialBackground {...args} />

export const Default = Template.bind({})
Default.args = {
  currentIndex: 0,
  tutorial_text: [],
}

export const OverrideText = Template.bind({})
OverrideText.args = {
  currentIndex: 0,
  tutorial_text: [
    {
      name: "Some name",
      subheading_one: "Subheading 1",
      paragraph_one: "Paragraph 1...",
      bulletpoint_one: ["Bullet point 1A...", "Bullet point 1B..."],
      subheading_two: "Subheading 2",
      paragraph_two: "Paragraph 2...",
      bulletpoint_two: ["Bullet point 2A...", "Bullet point 2B..."],
      conclusion: "Lorem ipsum conclusion...",

    }
  ],
}
