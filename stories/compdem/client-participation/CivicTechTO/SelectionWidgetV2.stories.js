import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import * as globals from '../../../../codebases/compdem/client-participation/vis2/components/globals'
import Strings from '../../../../codebases/compdem/client-participation/js/strings/en_us'
import { getMath, getComments } from '../../../../.storybook/utils'
import { withParticipationThemeUi } from '../../../../.storybook/decorators'
import TidCarouselV2Animated from './TidCarouselV2Animated'
import TidCarouselV2Static from './TidCarouselV2Static'
import CurateV2 from './CurateV2'
import ExploreTidV2 from './ExploreTidV2'

const mathResult = getMath()
const commentsData = getComments()

const SelectionWidgetV2 = React.forwardRef(({isStatic, isAccessible, math}, ref) => {
  const [selectedTidCuration, setSelectedTidCuration] = useState(globals.tidCuration.majority)
  const [selectedComment, setSelectedComment] = useState(null)

  const commentsByGroup = Object.assign({},
    math.repness,
    {
      "majority": [
        ...math.consensus.agree,
        ...math.consensus.disagree,
      ],
    }
  )

  const commentsToShow = commentsData
    .filter(c => commentsByGroup[selectedTidCuration]
      ?.map(i => i.tid).includes(c.tid)
    )

  if (!commentsToShow.map(c => c.tid).includes(selectedComment?.tid)) {
    setSelectedComment(commentsToShow[0])
  }

  const handleCurateButtonClick = (tidCuration) => {
    action("Clicked")(tidCuration)
    setSelectedTidCuration(tidCuration)
  }

  const handleCommentClick = (c) => () => {
    setSelectedComment(c)
    action("Clicked")(c)
  }

  const styles = {
    container: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      rowGap: 5,
    }
  }
  const TidCarouselComponent = isStatic ? TidCarouselV2Static : TidCarouselV2Animated
  return (
    <div ref={ref} style={styles.container}>
      <CurateV2
        {...{ selectedTidCuration, handleCurateButtonClick, math, isAccessible }}
      />
      <TidCarouselComponent
        {...{ selectedTidCuration, selectedComment, handleCommentClick, isAccessible }}
        allComments={commentsData}
        commentsToShow={commentsToShow}
      />
      <ExploreTidV2
        math={mathResult}
        selectedComment={selectedComment}
        selectedTidCuration={selectedTidCuration}
        Strings={Strings}
      />
    </div>
  )
})

export default {
  component: SelectionWidgetV2,
  decorators: [withParticipationThemeUi],
  argTypes: {
    isStatic: {
      type: "boolean",
    }
  }
}

const StickToBottom = ({ children }) => (
  <div style={{
    position: "fixed",
    width: "100%",
    bottom: 0,
    left: 0,
  }}>
    <div style={{
      // Match storybook viewport margin.
      margin: 16,
    }}>
      {children}
    </div>
  </div>
)

const Template = (args) => {
  // TODO: Figure out how to make this sticky at the bottom
  return <StickToBottom>
    <SelectionWidgetV2 {...args} />
  </StickToBottom>
}

export const Interactive = Template.bind({})
Interactive.args = {
  isStatic: true,
  isAccessible: true,
  math: mathResult,
}
