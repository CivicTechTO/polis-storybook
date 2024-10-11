import React from 'react'
import * as globals from '../../../codebases/compdem/client-participation/vis2/components/globals'

export const CurateV2Button = ({isSelected, onCurateButtonClick, style, children}) => {
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
    padding: "6px 12px",
    letterSpacing: 0.75,
    // fontWeight: isSelected ? 700 : 500,
    textShadow: isSelected ? "0 0 .65px #fff" : null,
    backgroundColor: isSelected ? colors.polisBlue : colors.lightGray,
    color: isSelected ? "white" : colors.darkGray,
  }
  return (
    <button style={buttonStyle} role="tab" aria-selected={isSelected} onClick={onCurateButtonClick}>
      {children}
    </button>
  )
}

const CurateV2 = ({selectedTidCuration, handleCurateButtonClick = () => {}, math}) => {
  const GROUP_COUNT = math["group-clusters"].length
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      rowGap: 5,
    },
    groupContainer: {
      display: "flex",
      gap: 5,
    },
    groupButton: {
      flex: 1,
    },
    majorityButton: {
      width: "100%",
    },
  }
  const groups = ['A', 'B', 'C', 'D', 'E']
  
  return(
    <div style={styles.container} role="tablist">
      <div style={styles.groupContainer}>
        {groups.slice(0, GROUP_COUNT).map((groupLabel, index) => (
          <CurateV2Button
            key={groupLabel}
            onCurateButtonClick={() => handleCurateButtonClick(index)}
            isSelected={selectedTidCuration === index}
            style={styles.groupButton}
          >
            {groupLabel}
          </CurateV2Button>
        ))}
      </div>
      <CurateV2Button
        onCurateButtonClick={() => handleCurateButtonClick(globals.tidCuration.majority)}
        isSelected={selectedTidCuration === globals.tidCuration.majority}
        style={styles.majorityButton}
      >
        Diverse Majority Opinion
      </CurateV2Button>
    </div>
  )
}

export default CurateV2
