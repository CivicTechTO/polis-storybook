/** @jsx jsx */
import { jsx, Box } from 'theme-ui'

import React from "react"

const TidCarouselButton = React.forwardRef(({ isSelected, children, handleClick, widths, height, ...rest }, ref) => {
  const styles = {
    button: {
      fontSize: 14,
      letterSpacing: 0.75,
      variant: isSelected ? "buttons.primary" : "buttons.secondary",
      textShadow: isSelected ? "0 0 .65px white" : null,
      flex: widths.map(w => (`1 0 ${w}`)),
      maxWidth: widths,
      height: height,
    }
  }
  return <Box ref={ref} as="button" sx={styles.button} onClick={handleClick} {...rest}>{children}</Box>
})

const TidCarouselV2Static = ({
  selectedTidCuration,
  // allComments,
  commentsToShow,
  selectedComment,
  handleCommentClick,
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
  }
  return (
    <div sx={styles.container}>
      {commentsToShowTids.map(tid => (
        <TidCarouselButton
          key={tid}
          widths={[getButtonWidthCalc(5), getButtonWidthCalc(10)]}
          height={buttonHeight}
          isSelected={selectedComment?.tid === tid}
          handleClick={handleCommentClick(commentsToShow.find(c => c.tid === tid))}
          children={tid}
        />
      ))}
    </div>
  )
}

export default TidCarouselV2Static
