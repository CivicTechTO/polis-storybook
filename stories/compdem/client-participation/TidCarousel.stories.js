import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import TidCarousel from '../../../codebases/compdem/client-participation/vis2/components/tidCarousel'
import * as globals from '../../../codebases/compdem/client-participation/vis2/components/globals'
import Strings from '../../../codebases/compdem/client-participation/js/strings/en_us'
import { getMath, getComments } from '../../../.storybook/utils'

const mathResults = getMath()
const commentsData = getComments().sort((a, b) => a.tid - b.tid)

const pluckNBetweenLowerUpper = (n, lower, upper) => {
  let numbers = []
  while (numbers.length < n) {
    let candidate = Math.floor(Math.random() * (upper - lower)) + (lower + 1)
    if (!numbers.includes(candidate)) {
      numbers.push(candidate)
    }
  }
  // Ascending integer sort.
  numbers.sort((a, b) => a - b)

  return numbers
}

export default {
  component: TidCarousel,
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

  return <TidCarousel {...{
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
    options: [null, "majority", 0, 1, 2, 3],
    control: { type: 'inline-radio' },
  },
}

export const Default = Template.bind({})
Default.args = {
  selectedTidCuration: undefined,
  commentsToShow: commentsData.slice(10,20),
  selectedComment: null,
  // TODO: Pretty sure this is janky. It should be simply action("Clicked")
  // and the prop in tidCarousel should be:
  // onClick={() => this.props.handleCommentClick(c)}
  // not just
  // onClick={this.props.handleCommentClick(c)}
  handleCommentClick: (c) => () => action("Clicked")(c),
  Strings,
}

export const Empty = Template.bind({})
Empty.args = {
  commentsToShow: [],
  selectedTidCuration: globals.tidCuration.majority,
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
  commentsToShow: pluckNBetweenLowerUpper(1, 0, 25).map(i => ({ tid: i })),
}

export const FiveStatements = Template.bind({})
FiveStatements.args = {
  ...Empty.args,
  commentsToShow: pluckNBetweenLowerUpper(5, 0, 25).map(i => ({ tid: i })),
}

export const SixStatements = Template.bind({})
SixStatements.args = {
  ...Empty.args,
  commentsToShow: pluckNBetweenLowerUpper(6, 0, 25).map(i => ({ tid: i })),
}

export const TenStatements = Template.bind({})
TenStatements.args = {
  ...Empty.args,
  commentsToShow: pluckNBetweenLowerUpper(10, 0, 25).map(i => ({ tid: i })),
}

export const Selected = Template.bind({})
Selected.args = {
  ...Empty.args,
  commentsToShow: commentsData.slice(10,20),
  selectedComment: commentsData[11],
}

// TODO: Load dataset with hundreds/thousands of comments.
//export const DoubleToTripleDigits = Template.bind({})
//DoubleToTripleDigits.args = {
//  ...Default.args,
//  commentsToShow: commentsData.slice(95,105),
//}

// export const Pagination = Template.bind({})
// Pagination.args = {
//   ...Default.args,
//   commentsToShow: commentsData.slice(10,40),
// }

export const UpToDoubleDigits = Template.bind({})
UpToDoubleDigits.args = {
  ...Default.args,
  commentsToShow: pluckNBetweenLowerUpper(10, 0, 100).map(i => ({ tid: i })),
}

export const UpToTripleDigits = Template.bind({})
UpToTripleDigits.args = {
  ...Default.args,
  commentsToShow: pluckNBetweenLowerUpper(10, 0, 400).map(i => ({ tid: i })),
}

export const NoGroupSelectedSoHidden = Template.bind({})
NoGroupSelectedSoHidden.args = {
  ...Default.args,
  selectedTidCuration: null
}
