import React from 'react'
import { action } from '@storybook/addon-actions'
import Strings from '../../../codebases/compdem/client-participation/js/strings/en_us'
import { getComments, getMath } from '../../../.storybook/utils'
import TidCarouselV2 from './TidCarouselV2'

const mathResult = getMath()
const commentsData = getComments()
commentsData.sort((a,b) => a.tid - b.tid)

export default {
  component: TidCarouselV2,
  argTypes: {
    selectedTidCuration: {
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

  const handleCommentClick = (c) => {
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
  return <TidCarouselV2 {...args} {...{
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
