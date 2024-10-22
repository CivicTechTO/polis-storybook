import * as globals from "../codebases/compdem/client-report/src/components/globals";
import participationData from './data/3ntrtcehas-participation-init.json'
import commentsData from './data/3ntrtcehas-comments.json'
import reportsData from './data/3ntrtcehas-reports.json'
import votesFamousData from './data/3ntrtcehas-votes-famous.json'

// Simulates response data from /api/v3/math/pca2?conversation_id=3ntrtcehas
export const getMath = () => {
  return JSON.parse(participationData.pca)
}

// Simulates manipulation of response data done in application code.
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

// Simulates response data from /api/v3/conversations?conversation_id=3ntrtcehas
export const getConversation = () => {
  return participationData.conversation
}

// Simulates response data from /api/v3/comments?conversation_id=3ntrtcehas&moderation=true&include_voting_patterns=true
export const getComments = () => {
  return commentsData
}

// Simulates response data from /api/v3/reports?report_id=r3bpnywujybyru4rkx92i
export const getReports = () => {
  return reportsData
}

// Simulates response data from /api/v3/votes/famous?conversation_id=3ntrtcehas
export const getVotesFamous = () => {
  return votesFamousData
}

export const getVoteColors = () => ({
  agree: globals.brandColors.agree,
  disagree: globals.brandColors.disagree,
  pass: globals.brandColors.pass,
})
