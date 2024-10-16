/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import * as Tabs from "@radix-ui/react-tabs"

import React from "react"

const TidCarouselButton = React.forwardRef(({ isSelected, handleClick, style, children, ...rest }, ref) => {
  const styles = {
    button: {
      ...style,
      fontSize: 14,
      letterSpacing: 0.75,
      variant: isSelected ? "buttons.primary" : "buttons.secondary",
      textShadow: isSelected ? "0 0 .65px white" : null,
    }
  }
  return (
    <Box as="button" ref={ref} sx={styles.button} onClick={handleClick} {...rest}>
      {children}
    </Box>
  )
})

const TidCarouselV2Static = ({
  selectedTidCuration,
  // allComments,
  commentsToShow,
  selectedComment,
  handleCommentClick,
  isAccessible = false,
  Strings,
}) => {
  const commentsToShowTids = commentsToShow.map(c => c.tid).sort((a, b) => a - b)

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
      height: [getContainerHeight(5), getContainerHeight(10)],
      display: "flex",
      flexWrap: "wrap", 
      gap: `${gap}px`,
      justifyContent: "flex-start",
    },
    button: {
      height: buttonHeight,
      flex: [`1 0 ${getButtonWidthCalc(5)}`, `1 0 ${getButtonWidthCalc(10)}`],
      maxWidth: [getButtonWidthCalc(5), getButtonWidthCalc(10)],
    },
  }
  return (
    isAccessible
      ? (
        <div>
          <Tabs.Root value={`statement-${selectedComment?.tid}`} activationMode="manual">
            <Tabs.List aria-label="Group X Statements" sx={styles.container}>
              {commentsToShowTids.map(tid => (
                <Tabs.Trigger key={tid} value={`statement-${tid}`} asChild>
                  <TidCarouselButton
                    style={styles.button}
                    isSelected={selectedComment?.tid === tid}
                    handleClick={handleCommentClick(commentsToShow.find(c => c.tid === tid))}
                    children={tid}
                  />
                </Tabs.Trigger>
              ))}
            </Tabs.List>
            {commentsToShowTids.map(tid => (
              <Tabs.Content key={tid} value={`statement-${tid}`}>Statement {tid}...</Tabs.Content>
            ))}
          </Tabs.Root>
        </div>
      )
      : (
        <div sx={styles.container}>
          {commentsToShowTids.map(tid => (
            <TidCarouselButton
              key={tid}
              style={styles.button}
              isSelected={selectedComment?.tid === tid}
              handleClick={handleCommentClick(commentsToShow.find(c => c.tid === tid))}
              children={tid}
            />
          ))}
        </div>
      )
  )
}

export default TidCarouselV2Static
