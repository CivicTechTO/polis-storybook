/** @jsx jsx */
import { jsx, Box } from 'theme-ui'

import React from 'react'
import * as Tabs from "@radix-ui/react-tabs"
import { animated, useTransition } from '@react-spring/web'
import useMeasure from 'react-use-measure'

const AnimatedBox = animated(Box)

export const TidCarouselButton = React.forwardRef(({ label, isShown, isSelected, handleClick, containerWidth, style, ...rest }, ref) => {
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
      // TODO: Why is this such a funny number? Would expect 4 to work.
      width: containerWidth/5-4.8,
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
      isShownTransition && <AnimatedBox as="button" ref={ref}
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
        }}
        {...rest}
      >
        <span sx={styles.span}>
          {label}
        </span>
      </AnimatedBox>
    ))
  )
})

const TidCarouselV2Animated = React.forwardRef(({
  selectedTidCuration,
  allComments,
  commentsToShow,
  selectedComment,
  handleCommentClick,
  isAccessible = false,
  Strings,
}, ref) => {
  // TODO: Why doesn't this line avoid infinite renders when null?
  if ( selectedTidCuration === null ) return null
  // TODO: If we ever need to use the forwardRef, we'll need another package.
  // See: https://github.com/pmndrs/react-use-measure?tab=readme-ov-file#multiple-refs
  const [localRef, bounds] = useMeasure()

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

  return (
    // padding and margins here are to ensure focus glow is visible with overflow: hidden.
    <div ref={localRef} style={{overflow: "hidden", padding: "2px", margin: "-2px"}}>
    {isAccessible
      ? (
          <Tabs.Root value={`statement-${selectedComment?.tid}`} activationMode="manual">
            <Tabs.List aria-label="Group X Statements" sx={styles.container}>
              {!bounds.width || allComments.map(c => (
                <Tabs.Trigger key={c.tid} value={`statement-${c.tid}`} asChild>
                  <TidCarouselButton
                    containerWidth={bounds.width}
                    style={styles.button}
                    label={c.tid}
                    handleClick={handleCommentClick(c)}
                    isSelected={selectedComment?.tid === c.tid}
                    isShown={commentsToShow.some(cts => cts.tid == c.tid)}
                  />
                </Tabs.Trigger>
              ))}
            </Tabs.List>
            {/* {commentsToShowTids.map(tid => (
              <Tabs.Content key={tid} value={`statement-${tid}`}>Statement {tid}...</Tabs.Content>
            ))} */}
          </Tabs.Root>
      )
      : (
        <div style={styles.container}>
          {/* ref not available on first render, so only render map after bounds exists. */}
          {!bounds.width || allComments.map(c => (
            <TidCarouselButton
              key={c.tid}
              containerWidth={bounds.width}
              style={styles.button}
              label={c.tid}
              handleClick={handleCommentClick(c)}
              isSelected={selectedComment?.tid === c.tid}
              isShown={commentsToShow.some(cts => cts.tid == c.tid)}
            />
          ))}
        </div>
      )
    }
    </div>
  )
})

export default TidCarouselV2Animated
