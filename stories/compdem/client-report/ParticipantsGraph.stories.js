import React from 'react'
import ParticipantsGraph from '../../../codebases/compdem/client-report/src/components/participantsGraph/participantsGraph';

import '../../../codebases/compdem/client-report/src/index.css';
import { comments, math } from './testData';

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

var maxTid = -1;
for (let i = 0; i < comments.length; i++) {
  if (comments[i].tid > maxTid) {
    maxTid = comments[i].tid;
  }
}
var tidWidth = ("" + maxTid).length;
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

export const Default = Template.bind({})
Default.args = {
  comments: comments,
  groupNames: {},
  badTids: {},
  colorBlindMode: false,
  formatTid: formatTid,
  repfulAgreeTidsByGroup: null,
  math: math,
  renderHeading: true,
  report: {
    "report_id": "r3bpnywujybyru4rkx92i",
    "created": "1718153339926",
    "modified": "1718153339926",
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
    "conversation_id": "5esrbenwxs"
  },
  voteColors: {
    "agree": "rgb(46, 204, 113)",
    "disagree": "rgb(231, 76, 60)",
    "pass": "rgb(230,230,230)"
  },
}
