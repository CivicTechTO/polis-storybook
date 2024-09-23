import * as globals from "../polis/client-report/src/components/globals";
import participationData from './data/3ntrtcehas-participation-init.json'

export const getMath = () => {
  return JSON.parse(participationData.pca)
}

export const getVoteColors = () => ({
  agree: globals.brandColors.agree,
  disagree: globals.brandColors.disagree,
  pass: globals.brandColors.pass,
})
