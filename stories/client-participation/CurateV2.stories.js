import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import * as globals from '../../codebases/compdem/client-participation/vis2/components/globals'
import Strings from '../../codebases/compdem/client-participation/js/strings/en_us'
// import CurateV2 from '../../codebases/compdem/client-participation/vis2/components/curate'
import { getMath } from '../../.storybook/utils'

const mathResults = getMath()

const CurateV2Button = ({isSelected, onCurateButtonClick, style, children}) => {
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
    <button style={buttonStyle} onClick={onCurateButtonClick}>
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
    <div style={styles.container}>
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

export default {
  title: 'Client-Participation/CurateV2',
  component: CurateV2,
  argTypes: {
    groupCount: {
      options: [2, 3, 4],
      control: { type: 'inline-radio' },
    }
  }
}

const Template = ({ groupCount, ...args }) => {
  args.math["group-clusters"] = mathResults["group-clusters"].slice(0, groupCount)
  const [selectedTidCuration, setSelectedTidCuration] = useState(globals.tidCuration.majority)
  const handleCurateButtonClick = (tidCuration) => {
    action("Clicked")(tidCuration)
    setSelectedTidCuration(tidCuration)
  }
  return <CurateV2 {...{selectedTidCuration, handleCurateButtonClick}} {...args} />
}

export const Interactive = Template.bind({})
Interactive.args = {
  groupCount: 4,
  Strings: {
    majorityOpinion: Strings.majorityOpinion,
    group_123: Strings.group_123
  },
  math: mathResults,
}

export const Unselected = Template.bind({})
Unselected.args = {
  selectedTidCuration: null,
  Strings: {
    majorityOpinion: Strings.majorityOpinion,
    group_123: Strings.group_123
  },
  handleCurateButtonClick: action('Clicked'),
  math: mathResults,
}

export const MajoritySelected = Template.bind({})
MajoritySelected.args = {
  ...Unselected.args,
  selectedTidCuration: globals.tidCuration.majority
}

export const GroupSelected = Template.bind({})
GroupSelected.args = {
  ...Unselected.args,
  selectedTidCuration: 1
}
