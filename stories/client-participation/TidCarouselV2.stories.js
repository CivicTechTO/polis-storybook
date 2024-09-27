import React from 'react'
import { action } from '@storybook/addon-actions'
import Strings from '../../polis/client-participation/js/strings/en_us'
import { animated, useTransition } from '@react-spring/web'
import commentsData from '../../.storybook/data/3ntrtcehas-comments.json'

commentsData.sort((a,b) => a.tid - b.tid)

const TidCarouselButton = ({ label, isShown, isSelected, handleClick }) => {
  const transition = useTransition(isShown, {
    from: {
      width: 0,
      marginRight: 0,
      minWidth: 0,
      paddingX: 0,
      paddingY: 0,
      fontSize: 0,
    },
    enter: {
      // Set to maxWidth. Can't do percent.
      width: 32,
      marginRight: 5,
      minWidth: 22,
      paddingX: 1,
      paddingY: 6,
      // Rough estimate. Would rather not hardcore.
      fontSize: 14,
    },
    leave: {
      width: 0,
      marginRight: 0,
      minWidth: 0,
      paddingX: 0,
      paddingY: 0,
      fontSize: 6,
    }
  })
  return (
    transition((style, isShown) => (
      isShown && <animated.button
        onClick={handleClick}
        style={{
          marginRight: style.marginRight,
          width: style.width,
          minWidth: style.minWidth,
          // paddingX and paddingY don't work so well with react-spring for some reason.
          paddingTop: style.paddingY,
          paddingBottom: style.paddingY,
          paddingLeft: style.paddingX,
          paddingRight: style.paddingX,
          // Seems to be performance hit.
          fontSize: style.fontSize,
          // Opacity, so doesn't jump around when going from unselected to selected.
          border: isSelected ? "1px solid rgb(80, 80, 80, 1)" : "1px solid rgb(80, 80, 80, 0)",
          fontWeight: isSelected ? 700 : 300,
          maxWidth: 32,
          cursor: "pointer",
          backgroundColor: "rgb(235,235,235)",
          color: "rgb(0,0,0)",
          borderRadius: 4,
          overflow: "hidden",
        }}>
        {label}
      </animated.button>
    ))
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

const Template = (args) => {
  const [selectedComment, setSelectedComment] = React.useState(null)

  const handleCommentClick = (c) => {
    setSelectedComment(c)
    action("Clicked")(c)
  }
  return <TidCarouselV2 {...args} {...{handleCommentClick, selectedComment}} />
}

export const Default = Template.bind({})
Default.args = {
  selectedTidCuration: 1,
  commentsToShow: commentsData.filter(c => [2, 5, 32, 52, 60].includes(c.tid)),
  allComments: commentsData,
  Strings,
}
