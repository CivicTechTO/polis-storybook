import * as globals from "../codebases/compdem/client-report/src/components/globals";
import participationData from './data/3ntrtcehas-participation-init.json'
import commentsData from './data/3ntrtcehas-comments.json'

export const getMath = () => {
  return JSON.parse(participationData.pca)
}

export const getExtremity = () => {
  const mathResult = getMath()
  return mathResult.pca["comment-extremity"].reduce(
    (acc, curr, i) => ({
      ...acc,
      [mathResult.tids[i]]: curr
    }),
    {}
  )
}

export const getConversation = () => {
  return participationData.conversation
}

export const getComments = () => {
  return commentsData
}

export const getReport = () => {
  return {
    "report_id": "r3bpnywujybyru4rkx92i", // example; might not match
    "created": participationData.conversation.created,
    "modified": participationData.conversation.modified,
    "label_x_neg": null,
    "label_y_neg": null,
    "label_y_pos": null,
    "label_x_pos": null,
    "label_group_0": null,
    "label_group_1": null,
    "label_group_2": null,
    "label_group_3": null,
    "label_group_4": null,
    "label_group_5": null,
    "label_group_6": null,
    "label_group_7": null,
    "label_group_8": null,
    "label_group_9": null,
    "report_name": null,
    "conversation_id": participationData.conversation.conversation_id
  }
}

export const getVoteColors = () => ({
  agree: globals.brandColors.agree,
  disagree: globals.brandColors.disagree,
  pass: globals.brandColors.pass,
})
