/** @jsx jsx */
import { jsx, Box } from 'theme-ui'

import React from 'react'
import { animated, useTransition } from '@react-spring/web'
import useMeasure from 'react-use-measure'

const AnimatedBox = animated(Box)

export const TidCarouselButton = ({ label, isShown, isSelected, handleClick, containerWidth, style }) => {
  const styles = {
    button: {
      ...style,
      padding: 0,
      overflow: "hidden",
      fontSize: 14,
      letterSpacing: 0.75,
      variant: isSelected ? "buttons.primary" : "buttons.secondary",
      textShadow: isSelected ? "0 0 .65px white" : null,
    },
    span: {
      // 1s is rought estimate, but react-spring uses forces, not duration.
      transition: "transform 1s ease-in-out",
      transform: isShown ? "scaleX(1)" : "scaleX(0.5)",
      // Needed in order to transform.
      display: "inline-block",
    },
  }
  const transition = useTransition(isShown, {
    from: {
      width: 0,
      marginRight: 0,
      opacity: 1,
    },
    enter: {
      width: containerWidth/5-4,
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
      isShownTransition && <AnimatedBox as="button"
        onClick={handleClick}
        sx={{
          ...styles.button,
        }}
        style={{
          width: style.width,
          marginRight: style.marginRight,
          // fontSize changes seem slow. Scale span instead.
          // fontSize: style.fontSize,
          opacity: style.opacity,
        }}>
        <span sx={styles.span}>
          {label}
        </span>
      </AnimatedBox>
    ))
  )
}

const TidCarouselV2Animated = ({
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

  const buttonHeight = 25
  const gap = 5
  const getRows = cols => {
    const maxStatements = 10
    return Math.ceil(maxStatements/cols)
  }
  // Example: calc(20%-4px)
  const getButtonWidthCalc = cols => `calc(${100/cols}% - ${gap*((cols-1)/cols)}px)`
  const getContainerHeight = cols => buttonHeight*getRows(cols) + gap*(getRows(cols)-1)

  const styles = {
    container: {
      height: getContainerHeight(5),
      display: "flex",
      flexWrap: "wrap",
      gap: `${gap}px`,
      justifyContent: "flex-start",
      marginRight: -30,
    },
    button: {
      height: buttonHeight,
      // flex: `1 0 ${getButtonWidthCalc(5)}`,
      // maxWidth: getButtonWidthCalc(5),
    },
  }

  // ref not available on first render, so only render map after bounds exists.
  return (
    <div ref={ref} style={{overflow: "hidden"}}>
    <div style={styles.container}>
      {!bounds.width || allComments.map((c, i) => (
        <TidCarouselButton
          style={styles.button}
          containerWidth={bounds.width}
          key={c.tid}
          label={c.tid}
          handleClick={handleCommentClick(c)}
          isSelected={selectedComment?.tid === c.tid}
          isShown={commentsToShow.some(cts => cts.tid == c.tid)}
        />
      ))}
    </div>
    </div>
  )
}

export default TidCarouselV2Animated
