import React from 'react'
import { animated, useTransition } from '@react-spring/web'
import useMeasure from 'react-use-measure'

export const TidCarouselButton = ({ label, isShown, isSelected, handleClick, containerWidth }) => {
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
          height: 25,
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
  // TODO: Why doesn't this line avoid infinite renders when null?
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
      height: 55,
      paddingX: 0,
      gap: 5,
      rowGap: 5,
      flexWrap: "wrap",
      justifyContent: "flex-start",
    }}>
      {!bounds.width || allComments.map((c, i) => (
        <TidCarouselButton
          containerWidth={bounds.width}
          id={c.tid}
          label={c.tid}
          handleClick={handleCommentClick(c)}
          isSelected={selectedComment && selectedComment.tid === c.tid}
          isShown={commentsToShowTids.includes(c.tid)}
        />
      ))}
    </div>
  )
}

export default TidCarouselV2
