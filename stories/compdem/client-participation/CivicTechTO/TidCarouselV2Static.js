/** @jsx jsx */
import { jsx } from 'theme-ui'

import React from "react"

const TidCarouselButton = ({ isSelected, children, handleClick, widths, height }) => {
  const styles = {
    button: {
      // variant: isSelected ? "button.primary" : "button.secondary",
      border: 0,
      cursor: "pointer",
      borderRadius: 4,
      fontSize: 14,
      letterSpacing: 0.75,
      textShadow: isSelected ? "0 0 .65px white" : null,
      backgroundColor: isSelected ? "polisBlue" : "lightGray",
      color: isSelected ? "white" : "darkGray",
      flex: widths.map(w => (`1 0 ${w}`)),
      maxWidth: widths,
      height: height,
    }
  }
  return <button sx={styles.button} onClick={handleClick}>{children}</button>
}

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
          widths={[getButtonWidthCalc(5), getButtonWidthCalc(10)]}
          height={buttonHeight}
          key={tid}
          isSelected={selectedComment?.tid === tid}
          handleClick={handleCommentClick(commentsToShow.find(c => c.tid === tid))}
          children={tid}
        />
      ))}
    </div>
  )
}

export default TidCarouselV2Static
