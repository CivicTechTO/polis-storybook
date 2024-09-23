import * as globals from "../polis/client-report/src/components/globals";
import participationData from './data/3ntrtcehas-participation-init.json'

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

export const getVoteColors = () => ({
  agree: globals.brandColors.agree,
  disagree: globals.brandColors.disagree,
  pass: globals.brandColors.pass,
})
