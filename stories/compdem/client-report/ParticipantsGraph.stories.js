import React from 'react'
import ParticipantsGraph from '../../../codebases/compdem/client-report/src/components/participantsGraph/participantsGraph';

import '../../../codebases/compdem/client-report/src/index.css';
import { getComments, getMath, getReports, getVoteColors } from '../../../.storybook/utils';

export default {
  title: 'compdem/client-report/ParticipantsGraph',
  component: ParticipantsGraph,
}

const Template = (args) => <ParticipantsGraph {...args} />

export const AllNull = Template.bind({})
AllNull.args = {
  comments: null,
  groupNames: null,
  badTids: null,
  colorBlindMode: null,
  formatTid: null,
  repfulAgreeTidsByGroup: null,
  math: null,
  renderHeading: null,
  report: null,
  voteColors: null,
}

const comments = getComments();

// Logic from client-report/src/components/app.js#L274-291
let maxTid = -1;
for (let i = 0; i < comments.length; i++) {
  if (comments[i].tid > maxTid) {
    maxTid = comments[i].tid;
  }
}
const tidWidth = ("" + maxTid).length;

function pad(n, width, z) {
  z = z || "0";
  n = n + "";
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
function formatTid(tid) {
  // let padded = "" + tid;
  // return '#' + pad(""+tid, tidWidth);
  return pad("" + tid, tidWidth);
}
// end copied logic

export const Default = Template.bind({})
Default.args = {
  comments: comments,
  groupNames: {},
  badTids: {},
  colorBlindMode: false,
  formatTid: formatTid,
  repfulAgreeTidsByGroup: null,
  math: getMath(),
  renderHeading: true,
  report: getReports()[0],
  voteColors: getVoteColors(),
}
