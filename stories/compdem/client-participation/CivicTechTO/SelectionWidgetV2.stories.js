import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import * as globals from '../../../../codebases/compdem/client-participation/vis2/components/globals'
import Strings from '../../../../codebases/compdem/client-participation/js/strings/en_us'
import { getMath, getComments } from '../../../../.storybook/utils'
import { withParticipationThemeUi } from '../../../../.storybook/decorators'
import TidCarouselV2 from './TidCarouselV2'
import TidCarouselV2Static from './TidCarouselV2Static'
import CurateV2 from './CurateV2'

const mathResult = getMath()
const commentsData = getComments()

const SelectionWidgetV2 = ({isStatic, isAccessible, math}) => {
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
  const TidCarouselComponent = isStatic ? TidCarouselV2Static : TidCarouselV2
  return (
    <div style={styles.container}>
      <CurateV2
        {...{ selectedTidCuration, handleCurateButtonClick, math }}
      />
      <TidCarouselComponent
        {...{ selectedTidCuration, selectedComment, handleCommentClick, isAccessible }}
        allComments={commentsData}
        commentsToShow={commentsToShow}
      />
    </div>
  )
}

export default {
  component: SelectionWidgetV2,
  decorators: [withParticipationThemeUi],
  argTypes: {
    isStatic: {
      type: "boolean",
    }
  }
}

const Template = (args) => {
  // TODO: Figure out how to make this sticky at the bottom
  return <div style={{
    maxWidth: "608px",
  }}>
    <SelectionWidgetV2 {...args} />
  </div>
}

export const Interactive = Template.bind({})
Interactive.args = {
  isStatic: true,
  isAccessible: true,
  math: mathResult,
}
