import React from 'react'
import { action } from '@storybook/addon-actions'
import TidCarousel from '../../../codebases/compdem/client-participation/vis2/components/tidCarousel'
import Strings from '../../../codebases/compdem/client-participation/js/strings/en_us'

import commentsData from '../../../.storybook/data/3ntrtcehas-comments.json'

commentsData.sort((a,b) => a.tid - b.tid)

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
  component: TidCarousel
}

const Template = (args) => <TidCarousel {...args} />

export const Default = Template.bind({})
Default.args = {
  selectedTidCuration: 1,
  commentsToShow: commentsData.slice(10,20),
  selectedComment: null,
  // TODO: Pretty sure this is janky. It should be simply action("Clicked")
  // and the prop in tidCarousel should be:
  // onClick={() => this.props.handleCommentClick(c)}
  // not just
  // onClick={this.props.handleCommentClick(c)}
  handleCommentClick: () => action("Clicked"),
  Strings,
}

// TODO: Load dataset with hundreds/thousands of comments.
//export const DoubleToTripleDigits = Template.bind({})
//DoubleToTripleDigits.args = {
//  ...Default.args,
//  commentsToShow: commentsData.slice(95,105),
//}

export const StatementSelected = Template.bind({})
StatementSelected.args = {
  ...Default.args,
  selectedComment: { tid: commentsData[11].tid }
}

export const FewStatements = Template.bind({})
FewStatements.args = {
  ...Default.args,
  commentsToShow: commentsData.slice(10,15),
}

export const Pagination = Template.bind({})
Pagination.args = {
  ...Default.args,
  commentsToShow: commentsData.slice(10,40),
}

export const UpToDoubleDigits = Template.bind({})
UpToDoubleDigits.args = {
  ...Default.args,
  commentsToShow: [
    ...pluckNBetweenLowerUpper(10, 0, commentsData.length-1).map(i => commentsData[i])
  ]
} 

export const NoGroupSelectedSoHidden = Template.bind({})
NoGroupSelectedSoHidden.args = {
  ...Default.args,
  selectedTidCuration: null
}
