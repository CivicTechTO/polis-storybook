import React from "react"

const Button = ({ isSelected, style, children, handleClick }) => {
  const colors = {
    polisBlue: "#03a9f4",
    darkGray: "rgb(100,100,100)",
    lightGray: "rgb(235,235,235)",
  }
  const buttonStyle = {
    ...style,
    border: 0,
    cursor: "pointer",
    borderRadius: 4,
    fontSize: 14,
    // padding: "6px 12px",
    letterSpacing: 0.75,
    // fontWeight: isSelected ? 700 : 500,
    textShadow: isSelected ? "0 0 .65px #fff" : null,
    backgroundColor: isSelected ? colors.polisBlue : colors.lightGray,
    color: isSelected ? "white" : colors.darkGray,
  }
  return <button style={buttonStyle} onClick={handleClick}>{children}</button>
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
  // Example: calc(20%-4px)
  const buttonWidthCalc = `calc(${100/cols}% - ${gap*((cols-1)/cols)}px)`
  const styles = {
    container: {
      height: buttonHeight*2 + gap,
      display: "flex",
      flexWrap: "wrap",
      gap: gap,
      justifyContent: "flex-start",
    },
    button: {
      flex: `1 0 ${buttonWidthCalc}`,
      maxWidth: buttonWidthCalc,
      height: buttonHeight,
      boxSizing: "border-box",
    }
  }
  return (
    <div style={styles.container}>
      {commentsToShowTids.map(tid => (
        <Button
          style={styles.button}
          key={tid}
          isSelected={selectedComment?.tid === tid}
          handleClick={handleCommentClick(commentsToShow.find(c => c.tid === tid))}
        >
          {tid}
        </Button>
      ))}
    </div>
  )
}

export default TidCarouselV2Static
