import React from 'react'
import { action } from '@storybook/addon-actions'
import Strings from '../../polis/client-participation/js/strings/en_us'
import { animated, useTransition } from '@react-spring/web'
import commentsData from '../../.storybook/data/3ntrtcehas-comments.json'
import useMeasure from 'react-use-measure'

commentsData.sort((a,b) => a.tid - b.tid)

const TidCarouselButton = ({ label, isShown, isSelected, handleClick, containerWidth }) => {
  const transition = useTransition(isShown, {
    from: {
      width: 0,
      marginRight: 0,
      opacity: 1,
    },
    enter: {
      width: containerWidth/5-5,
      marginRight: 0,
      opacity: 1,
    },
    leave: {
      width: 0,
      marginRight: -5,
      opacity: 0,
    },
  })
  return (
    transition((style, isShownTransition) => (
      isShownTransition && <animated.button
        onClick={handleClick}
        style={{
          width: style.width,
          height: 30,
          marginRight: style.marginRight,
          // fontSize changes seem slow. Scale span instead.
          // fontSize: style.fontSize,
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
        <span style={{
          // 1s is rought estimate, but react-spring uses forces, not duration.
          transition: "transform 1s ease-in-out",
          transform: isShown ? "scaleX(1)" : "scaleX(0.5)",
          // Needed in order to transform.
          display: "inline-block",
        }}>
          {label}
        </span>
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
  const [ref, bounds] = useMeasure()

  allComments = allComments.sort((a, b) => a.tid - b.tid)
  const commentsToShowTids = commentsToShow.map(c => c.tid)

  // ref not available on first render, so only render map after bounds exists.
  return (
    <div ref={ref} style={{
      display: "flex",
      flex: 1,
      width: "100%",
      height: 65,
      paddingX: 0,
      gap: 5,
      rowGap: 5,
      flexWrap: "wrap",
    }}>
      {!bounds.width || allComments.map((c, i) => (
        <TidCarouselButton
          containerWidth={bounds.width}
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
      options: ['Majority', 'A', 'B', 'C', 'D'],
      control: { type: 'inline-radio' },
    },
  },
}

const Template = (args) => {
  const [selectedComment, setSelectedComment] = React.useState(null)
  const NUMBERS_DATA = {
    Majority: [1,19,20,31,36,33,37,42,43,52],
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
    handleCommentClick(commentsToShow[0])
  }
  return <TidCarouselV2 {...args} {...{
    handleCommentClick,
    selectedComment,
    commentsToShow: commentsToShow,
  }} />
}

export const Default = Template.bind({})
Default.args = {
  group: 'Majority',
  selectedTidCuration: 1,
  allComments: commentsData,
  Strings,
}
