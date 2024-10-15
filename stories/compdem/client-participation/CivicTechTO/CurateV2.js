/** @jsx jsx */
import { jsx, Box } from 'theme-ui'

import React from 'react'
import * as Tabs from "@radix-ui/react-tabs"
import * as globals from '../../../../codebases/compdem/client-participation/vis2/components/globals'

export const CurateV2Button = React.forwardRef(({isSelected, handleClick, style, children, ...rest}, ref) => {
  const styles = {
    button: {
      ...style,
      fontSize: 14,
      letterSpacing: 0.75,
      variant: isSelected ? "buttons.primary" : "buttons.secondary",
      textShadow: isSelected ? "0 0 .65px #fff" : null,
    },
  }
  return (
    <Box as="button" ref={ref} sx={styles.button} onClick={handleClick} {...rest}>
      {children}
    </Box>
  )
})

const CurateV2 = ({selectedTidCuration, handleCurateButtonClick = () => {}, math}) => {
  const GROUP_COUNT = math["group-clusters"].length
  const styles = {
    container: {
      display: "flex",
      flexDirection: ["column-reverse", "row"],
      gap: "5px",
      rowGap: "5px",
    },
    groupContainer: {
      display: "flex",
      flex: [1, "1 1 66.667%"],
      gap: "5px",
    },
    groupButton: {
      height: 35,
      flex: 1,
    },
    majorityContainer: {
      flex: [1, "1 1 33.333%"],
    },
    majorityButton: {
      height: 35,
      width: "100%",
    },
  }
  const groups = ['A', 'B', 'C', 'D', 'E']
  
  return(
    // <div>
      <Tabs.Root defaultValue="group-majority" activationMode="manual">
        <Tabs.List aria-label="Groups" sx={styles.container}>
          <div sx={styles.majorityContainer}>
            <Tabs.Trigger value="group-majority" asChild>
              <CurateV2Button
                handleClick={() => handleCurateButtonClick(globals.tidCuration.majority)}
                isSelected={selectedTidCuration === globals.tidCuration.majority}
                style={styles.majorityButton}
                children="Diverse Majority Opinion"
              />
            </Tabs.Trigger>
            </div>
          <div sx={styles.groupContainer}>
            {groups.slice(0, GROUP_COUNT).map((groupLabel, index) => (
              <Tabs.Trigger key={index} value={`group-${index}`} asChild>
                <CurateV2Button
                  key={groupLabel}
                  handleClick={() => handleCurateButtonClick(index)}
                  isSelected={selectedTidCuration === index}
                  style={styles.groupButton}
                  children={groupLabel}
                />
              </Tabs.Trigger>
            ))}
          </div>
        </Tabs.List>
      </Tabs.Root>
    // </div>
  )
}

export default CurateV2
