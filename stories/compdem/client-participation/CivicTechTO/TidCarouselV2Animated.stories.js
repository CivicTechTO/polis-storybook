import React from 'react'
import { action } from '@storybook/addon-actions'
import Strings from '../../../../codebases/compdem/client-participation/js/strings/en_us'
import { getComments, getMath } from '../../../../.storybook/utils'
import TidCarouselV2Animated from './TidCarouselV2Animated'

const mathResult = getMath()
const commentsData = getComments()

export default {
  component: TidCarouselV2Animated,
  argTypes: {
    selectedTidCuration: {
      // TODO: Figure out why null does infinite renders.
      // options: [null, 'majority', 0, 1, 2, 3],
      options: ['majority', 0, 1, 2, 3],
      control: { type: 'inline-radio' },
    },
  },
}

const Template = (args) => {
  const [selectedComment, setSelectedComment] = React.useState(null)
  const commentsByGroup = Object.assign({},
    mathResult.repness,
    {
      "majority": [
        ...mathResult.consensus.agree,
        ...mathResult.consensus.disagree,
      ],
    }
  )

  const handleCommentClick = (c) => () => {
    setSelectedComment(c)
    action("Clicked")(c)
  }
  const commentsToShow = commentsData
    .filter(c => commentsByGroup[args.selectedTidCuration]
      ?.map(i => i.tid).includes(c.tid)
  )
  if (!commentsToShow.map(c => c.tid).includes(selectedComment?.tid)) {
    handleCommentClick(commentsToShow[0])
  }
  return <TidCarouselV2Animated {...args} {...{
    handleCommentClick,
    selectedComment,
    commentsToShow,
  }} />
}

export const Interactive = Template.bind({})
Interactive.args = {
  selectedTidCuration: 1,
  allComments: commentsData,
  Strings,
}
