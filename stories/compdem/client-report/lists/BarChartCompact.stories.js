import React from 'react'

import { BarChartCompact } from '../../../../codebases/compdem/client-report/src/components/lists/commentList.js'

import participationData from '../../../../.storybook/data/3ntrtcehas-participation-init.json'
const pcaData = JSON.parse(participationData.pca)

export default {
  component: BarChartCompact,
}

const Template = (args) => <BarChartCompact {...args} />

export const Default = Template.bind({})
Default.args = {
  comment: {
    "txt": "We should address implications of genAI for other rights and interests (data protection, use of a person's likeness or identity)",
    "tid": 2,
    "created": "1707893240932",
    "tweet_id": null,
    "quote_src_url": null,
    "is_seed": true,
    "is_meta": false,
    "lang": "en",
    "pid": 0,
    "velocity": 1,
    "mod": 1,
    "active": true,
    "agree_count": 131,
    "disagree_count": 3,
    "pass_count": 11,
    "count": 145,
    "conversation_id": "6bkf4ujff9",
    "group-aware-consensus": 0.7614285714285715,
    "agreed": 130,
    "disagreed": 3,
    "saw": 144,
    "pctAgreed": 0.9027777777777778,
    "pctDisagreed": 0.020833333333333332,
    "pctVoted": 0.0763888888888889
  },
  nMembers: 161,
  voteColors: {
    "agree": "rgb(46, 204, 113)",
    "disagree": "rgb(231, 76, 60)",
    "pass": "rgb(230,230,230)"
  },
  voteCounts: {
    "A": 90,
    "D": 1,
    "S": 96
  },
}
