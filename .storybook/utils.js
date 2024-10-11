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

export const getVoteColors = () => ({
  agree: globals.brandColors.agree,
  disagree: globals.brandColors.disagree,
  pass: globals.brandColors.pass,
})
