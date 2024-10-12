import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import TidCarouselV2Static from './TidCarouselV2Static'
import * as globals from '../../../../codebases/compdem/client-participation/vis2/components/globals'
import Strings from '../../../../codebases/compdem/client-participation/js/strings/en_us'
import { getMath, getComments } from '../../../../.storybook/utils'

const mathResults = getMath()
const commentsData = getComments()

export default {
  component: TidCarouselV2Static,
}

const Template = (args) => {
  const [selectedComment, setSelectedComment] = useState(null)

  const handleCommentClick = (comment) => () => {
    action("Clicked")(comment)
    setSelectedComment(comment)
  }

  const commentsByGroup = Object.assign({},
    mathResults.repness,
    {
      "majority": [
        ...mathResults.consensus.agree,
        ...mathResults.consensus.disagree,
      ],
    }
  )
  const commentsToShow = commentsData
    .filter(c => commentsByGroup[args.selectedTidCuration]
      ?.map(i => i.tid).includes(c.tid)
    )

  return <TidCarouselV2Static {...{
    handleCommentClick,
    selectedComment,
    commentsToShow
  }} {...args} />
}

export const Interactive = Template.bind({})
Interactive.args = {
  selectedTidCuration: 0,
  Strings,
}
Interactive.argTypes = {
  selectedTidCuration: {
    options: [null, 'majority', 0, 1, 2, 3],
    control: { type: 'inline-radio' },
  },
}

export const Empty = Template.bind({})
Empty.args = {
  commentsToShow: [],
  selectedTidCuration: null,
  selectedComment: null,
  // TODO: Pretty sure this is janky. It should be simply action("Clicked")
  // and the prop in tidCarousel should be:
  // onClick={() => this.props.handleCommentClick(c)}
  // not just
  // onClick={this.props.handleCommentClick(c)}
  handleCommentClick: (c) => () => action("Clicked")(c),
  Strings,
}

export const OneStatement = Template.bind({})
OneStatement.args = {
  ...Empty.args,
  commentsToShow: commentsData.slice(10,11),
}

export const FullFirstRow = Template.bind({})
FullFirstRow.args = {
  ...Empty.args,
  commentsToShow: commentsData.slice(10,15),
}

export const StartSecondRow = Template.bind({})
StartSecondRow.args = {
  ...Empty.args,
  commentsToShow: commentsData.slice(10,16),
}

export const FullSecondRow = Template.bind({})
FullSecondRow.args = {
  ...Empty.args,
  commentsToShow: commentsData.slice(10,20),
}

export const Selected = Template.bind({})
Selected.args = {
  ...Empty.args,
  commentsToShow: commentsData.slice(10,20),
  selectedComment: commentsData[11],
}
