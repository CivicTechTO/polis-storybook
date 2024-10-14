/** @jsx jsx */
import { jsx } from 'theme-ui'

import React from "react"

const TidCarouselButton = ({ isSelected, children, handleClick, width, height }) => {
  const styles = {
    button: {
      border: 0,
      cursor: "pointer",
      borderRadius: 4,
      fontSize: 14,
      letterSpacing: 0.75,
      boxSizing: "border-box",
      textShadow: isSelected ? "0 0 .65px white" : null,
      backgroundColor: isSelected ? "polisBlue" : "lightGray",
      color: isSelected ? "white" : "darkGray",
      flex: `1 0 ${width}`,
      maxWidth: width,
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
  const cols = 5
  const maxStatements = 10
  const rows = Math.ceil(maxStatements/cols)
  // Example: calc(20%-4px)
  const buttonWidthCalc = `calc(${100/cols}% - ${gap*((cols-1)/cols)}px)`
  const styles = {
    container: {
      height: buttonHeight*rows + gap*(rows-1),
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
          width={buttonWidthCalc}
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
