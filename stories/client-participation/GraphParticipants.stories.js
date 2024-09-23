import React from 'react'
import GraphParticipants from '../../polis/client-participation/vis2/components/graphParticipants'
import socialAvatar from '../../.storybook/assets/avatar-sample.jpg'
import defaultAvatar from '../../.storybook/assets/avatar-default.png'

const positionVariants = {
  1: [{x: 50, y: 75}, {x: 75, y: 25}],
  2: [{x: 75, y: 50}, {x: 25, y: 25}],
}

export default {
  title: 'Client-Participation/GraphParticipants',
  component: GraphParticipants,
  decorators: [
    // Adds desaturation filter that exists in parent Graph SVG component.
    (Story) => (
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100" height="100">
        <filter id="grayscale">
          <feColorMatrix type="saturate" values="0"/>
        </filter>
        <Story />
      </svg>
    )
  ],
  argTypes: {
    variant: {
      options: ['position 1', 'position 2'],
      control: { type: 'radio' },
    },
  },
  render: ({ variant, ...args }) => {
    if (variant == 'position 1') {
      Object.assign(args.ptptois[0], positionVariants[1][0])
      Object.assign(args.ptptois[1], positionVariants[1][1])
    } else if (variant == 'position 2') {
      Object.assign(args.ptptois[0], positionVariants[2][0])
      Object.assign(args.ptptois[1], positionVariants[2][1])
    }
    return <GraphParticipants {...args} />
  },
}

export const AnimatedMovement = {
  args: {
    variant: 'position 1',
    ptptois: [
      {
        picture_size: 36,
        isSelf: false,
        picture: defaultAvatar,
        x: positionVariants[1][0].x,
        y: positionVariants[1][0].y,
      },
      {
        picture_size: 36,
        isSelf: true,
        picture: socialAvatar,
        x: positionVariants[1][1].x,
        y: positionVariants[1][1].y,
      },
    ],
    points: [],
  }
}
