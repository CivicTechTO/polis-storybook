import React from 'react'
import { action } from '@storybook/addon-actions'
import Strings from '../../polis/client-participation/js/strings/en_us'

import commentsData from '../../.storybook/data/3ntrtcehas-comments.json'
import { A } from 'storybook/internal/components'

commentsData.sort((a,b) => a.tid - b.tid)

const TidCarouselButton = ({ label, isShown, isSelected, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      style={{
        marginRight: isShown ? 5 : 0,
        width: isShown ? null : 0,
        minWidth: isShown ? 22 : null,
        padding: isShown ? "6px 1px" : 0 ,
        border: isSelected ? "1px solid rgb(80, 80, 80)" :  "none",
        fontWeight: isSelected ? 700 : 300,
        maxWidth: 32,
        cursor: "pointer",
        backgroundColor: "rgb(235,235,235)",
        color: "rgb(0,0,0)",
        borderRadius: 4,
        overflow: "hidden",
      }}>
      {label}
    </button>
  )
}

const TidCarouselV2 = ({
  selectedTidCuration,
  allComments,
  commentsToShow,
  selectedComment,
  handleCommentClick,
  Strings,
}) => {
  if ( selectedTidCuration === null ) return null

  allComments = allComments.sort((a, b) => a.tid - b.tid)
  const commentsToShowTids = commentsToShow.map(c => c.tid)

  return (
    <div>
      {allComments.map(c => (
        <TidCarouselButton
          id={c.tid}
          label={c.tid}
          handleClick={() => handleCommentClick(c)}
          isSelected={selectedComment && selectedComment.tid === c.tid}
          isShown={commentsToShowTids.includes(c.tid)}
        />
      ))}
    </div>
  )
}

export default {
  title: 'Client-Participation/TidCarouselV2',
  component: TidCarouselV2,
}

const Template = (args) => <TidCarouselV2 {...args} />

export const Default = Template.bind({})
Default.args = {
  selectedTidCuration: undefined,
  allComments: commentsData,
  commentsToShow: commentsData.filter(c => [2,5,32,52].includes(c.tid)),
  selectedComment: null,
  handleCommentClick: action("Clicked"),
  Strings,
}
