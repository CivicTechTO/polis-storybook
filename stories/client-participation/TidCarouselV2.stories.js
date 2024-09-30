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
      fontSize: 6,
      opacity: 1,
    },
    enter: {
      width: 32,
      marginRight: 5,
      fontSize: 14,
      opacity: 1,
    },
    leave: {
      width: 0,
      marginRight: 0,
      fontSize: 0,
      opacity: 0,
    }
  })
  return (
    transition((style, isShown) => (
      isShown && <animated.button
        onClick={handleClick}
        style={{
          width: style.width,
          marginRight: style.marginRight,
          fontSize: style.fontSize,
          opacity: style.opacity,
          padding: 0,
          border: 0,
          cursor: "pointer",
          overflow: "hidden",
          borderRadius: 4,
          fontWeight: isSelected ? 700 : 300,
          backgroundColor: isSelected ? "#03a9f4" : "rgb(235,235,235)",
          color: isSelected ? "white" : "rgb(0,0,0)",
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
    <div style={{
      display: "flex",
      flex: 1,
      width: 250,
      height: 30,
      paddingX: 0,
      justifyContent: "flex-start",
      gap: 0,
    }}>
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
  argTypes: {
    group: {
      options: ['A', 'B', 'C', 'D'],
      control: { type: 'inline-radio' },
    },
  },
}

const Template = (args) => {
  const [selectedComment, setSelectedComment] = React.useState(null)
  const NUMBERS_DATA = {
    A: [2,4,5,18,49],
    B: [2,4,5,18,22],
    C: [3,9,17,25,33],
    D: [59],
  }

  const handleCommentClick = (c) => {
    setSelectedComment(c)
    action("Clicked")(c)
  }
  const commentsToShow = commentsData.filter(c => NUMBERS_DATA[args.group].includes(c.tid))
  if (!NUMBERS_DATA[args.group].includes(selectedComment?.tid)) {
    setSelectedComment(commentsToShow[0])
  }
  return <TidCarouselV2 {...args} {...{
    handleCommentClick,
    selectedComment,
    commentsToShow: commentsToShow,
  }} />
}

export const Default = Template.bind({})
Default.args = {
  group: 'A',
  selectedTidCuration: 1,
  allComments: commentsData,
  Strings,
}
