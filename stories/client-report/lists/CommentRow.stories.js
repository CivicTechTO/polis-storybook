import React from 'react'

import { CommentRow } from '../../../codebases/compdem/client-report/src/components/lists/commentList.js'

import participationData from '../../../.storybook/data/3ntrtcehas-participation-init.json'
const pcaData = JSON.parse(participationData.pca)

export default {
  title: 'Client-Report/CommentRow',
  component: CommentRow,
}

const Template = (args) => <CommentRow {...args} />

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
  groups: {
    "0": {
      "n-members": 56,
      "votes": {
        "0": {
          "A": 44,
          "D": 1,
          "S": 45
        },
        "1": {
          "A": 31,
          "D": 6,
          "S": 45
        },
        "2": {
          "A": 40,
          "D": 2,
          "S": 48
        },
        "3": {
          "A": 21,
          "D": 18,
          "S": 49
        },
        "4": {
          "A": 30,
          "D": 4,
          "S": 47
        },
        "5": {
          "A": 30,
          "D": 15,
          "S": 50
        },
        "6": {
          "A": 40,
          "D": 1,
          "S": 46
        },
        "7": {
          "A": 44,
          "D": 1,
          "S": 48
        },
        "8": {
          "A": 39,
          "D": 5,
          "S": 50
        },
        "9": {
          "A": 33,
          "D": 3,
          "S": 44
        },
        "10": {
          "A": 35,
          "D": 4,
          "S": 47
        },
        "11": {
          "A": 5,
          "D": 32,
          "S": 46
        },
        "12": {
          "A": 29,
          "D": 6,
          "S": 44
        },
        "13": {
          "A": 6,
          "D": 31,
          "S": 42
        },
        "14": {
          "A": 20,
          "D": 11,
          "S": 46
        },
        "15": {
          "A": 27,
          "D": 14,
          "S": 46
        },
        "16": {
          "A": 18,
          "D": 15,
          "S": 43
        },
        "17": {
          "A": 13,
          "D": 17,
          "S": 45
        },
        "18": {
          "A": 40,
          "D": 2,
          "S": 44
        },
        "19": {
          "A": 16,
          "D": 22,
          "S": 45
        },
        "20": {
          "A": 26,
          "D": 9,
          "S": 47
        },
        "21": {
          "A": 38,
          "D": 6,
          "S": 46
        },
        "22": {
          "A": 23,
          "D": 5,
          "S": 46
        },
        "23": {
          "A": 8,
          "D": 27,
          "S": 48
        },
        "24": {
          "A": 1,
          "D": 42,
          "S": 49
        },
        "25": {
          "A": 0,
          "D": 26,
          "S": 35
        },
        "26": {
          "A": 2,
          "D": 0,
          "S": 3
        },
        "27": {
          "A": 0,
          "D": 0,
          "S": 3
        },
        "28": {
          "A": 21,
          "D": 2,
          "S": 28
        },
        "29": {
          "A": 23,
          "D": 15,
          "S": 49
        },
        "30": {
          "A": 10,
          "D": 13,
          "S": 31
        },
        "31": {
          "A": 41,
          "D": 0,
          "S": 46
        },
        "32": {
          "A": 11,
          "D": 16,
          "S": 41
        },
        "33": {
          "A": 38,
          "D": 0,
          "S": 46
        },
        "34": {
          "A": 12,
          "D": 14,
          "S": 47
        },
        "35": {
          "A": 2,
          "D": 17,
          "S": 29
        },
        "36": {
          "A": 14,
          "D": 29,
          "S": 51
        },
        "37": {
          "A": 19,
          "D": 1,
          "S": 24
        },
        "38": {
          "A": 29,
          "D": 8,
          "S": 44
        },
        "39": {
          "A": 9,
          "D": 34,
          "S": 48
        },
        "40": {
          "A": 15,
          "D": 26,
          "S": 46
        },
        "41": {
          "A": 12,
          "D": 4,
          "S": 22
        },
        "42": {
          "A": 4,
          "D": 31,
          "S": 44
        },
        "43": {
          "A": 9,
          "D": 24,
          "S": 43
        },
        "44": {
          "A": 5,
          "D": 13,
          "S": 42
        },
        "45": {
          "A": 13,
          "D": 13,
          "S": 41
        },
        "46": {
          "A": 10,
          "D": 27,
          "S": 47
        },
        "47": {
          "A": 36,
          "D": 4,
          "S": 47
        },
        "48": {
          "A": 30,
          "D": 4,
          "S": 44
        },
        "49": {
          "A": 11,
          "D": 22,
          "S": 47
        },
        "50": {
          "A": 30,
          "D": 2,
          "S": 41
        },
        "51": {
          "A": 13,
          "D": 21,
          "S": 48
        },
        "52": {
          "A": 0,
          "D": 0,
          "S": 4
        },
        "53": {
          "A": 1,
          "D": 0,
          "S": 1
        },
        "54": {
          "A": 2,
          "D": 0,
          "S": 4
        },
        "55": {
          "A": 2,
          "D": 0,
          "S": 4
        },
        "56": {
          "A": 1,
          "D": 0,
          "S": 4
        },
        "57": {
          "A": 1,
          "D": 0,
          "S": 2
        },
        "58": {
          "A": 12,
          "D": 3,
          "S": 36
        },
        "59": {
          "A": 25,
          "D": 5,
          "S": 37
        },
        "60": {
          "A": 2,
          "D": 0,
          "S": 2
        },
        "61": {
          "A": 20,
          "D": 8,
          "S": 37
        },
        "62": {
          "A": 3,
          "D": 0,
          "S": 3
        },
        "63": {
          "A": 3,
          "D": 0,
          "S": 3
        },
        "64": {
          "A": 39,
          "D": 1,
          "S": 44
        },
        "65": {
          "A": 2,
          "D": 0,
          "S": 2
        },
        "66": {
          "A": 14,
          "D": 10,
          "S": 36
        },
        "67": {
          "A": 11,
          "D": 16,
          "S": 39
        },
        "68": {
          "A": 1,
          "D": 0,
          "S": 2
        },
        "69": {
          "A": 6,
          "D": 28,
          "S": 43
        },
        "70": {
          "A": 2,
          "D": 0,
          "S": 2
        },
        "71": {
          "A": 3,
          "D": 0,
          "S": 3
        },
        "72": {
          "A": 18,
          "D": 12,
          "S": 41
        },
        "73": {
          "A": 2,
          "D": 0,
          "S": 2
        },
        "74": {
          "A": 1,
          "D": 1,
          "S": 3
        },
        "75": {
          "A": 18,
          "D": 5,
          "S": 41
        },
        "76": {
          "A": 1,
          "D": 2,
          "S": 3
        },
        "77": {
          "A": 2,
          "D": 0,
          "S": 2
        },
        "78": {
          "A": 1,
          "D": 0,
          "S": 1
        },
        "79": {
          "A": 2,
          "D": 0,
          "S": 2
        },
        "80": {
          "A": 1,
          "D": 0,
          "S": 1
        },
        "81": {
          "A": 22,
          "D": 5,
          "S": 39
        },
        "82": {
          "A": 2,
          "D": 0,
          "S": 2
        },
        "83": {
          "A": 1,
          "D": 0,
          "S": 1
        },
        "84": {
          "A": 2,
          "D": 0,
          "S": 2
        },
        "85": {
          "A": 36,
          "D": 2,
          "S": 41
        },
        "86": {
          "A": 35,
          "D": 5,
          "S": 43
        },
        "87": {
          "A": 1,
          "D": 0,
          "S": 1
        },
        "88": {
          "A": 1,
          "D": 0,
          "S": 1
        },
        "89": {
          "A": 1,
          "D": 0,
          "S": 1
        },
        "90": {
          "A": 1,
          "D": 0,
          "S": 1
        },
        "91": {
          "A": 2,
          "D": 0,
          "S": 2
        },
        "92": {
          "A": 1,
          "D": 0,
          "S": 1
        },
        "93": {
          "A": 2,
          "D": 0,
          "S": 2
        },
        "94": {
          "A": 17,
          "D": 13,
          "S": 38
        },
        "95": {
          "A": 2,
          "D": 0,
          "S": 2
        },
        "96": {
          "A": 2,
          "D": 0,
          "S": 2
        },
        "97": {
          "A": 2,
          "D": 0,
          "S": 2
        },
        "98": {
          "A": 1,
          "D": 0,
          "S": 2
        },
        "99": {
          "A": 1,
          "D": 0,
          "S": 1
        },
        "100": {
          "A": 1,
          "D": 0,
          "S": 1
        },
        "101": {
          "A": 14,
          "D": 9,
          "S": 36
        },
        "102": {
          "A": 8,
          "D": 16,
          "S": 40
        },
        "103": {
          "A": 2,
          "D": 0,
          "S": 2
        },
        "104": {
          "A": 1,
          "D": 0,
          "S": 1
        },
        "105": {
          "A": 7,
          "D": 30,
          "S": 44
        },
        "106": {
          "A": 13,
          "D": 13,
          "S": 39
        },
        "107": {
          "A": 1,
          "D": 0,
          "S": 1
        },
        "108": {
          "A": 0,
          "D": 0,
          "S": 0
        },
        "109": {
          "A": 0,
          "D": 0,
          "S": 0
        },
        "110": {
          "A": 32,
          "D": 1,
          "S": 38
        },
        "111": {
          "A": 33,
          "D": 1,
          "S": 38
        },
        "112": {
          "A": 33,
          "D": 1,
          "S": 36
        },
        "113": {
          "A": 2,
          "D": 0,
          "S": 12
        },
        "114": {
          "A": 7,
          "D": 20,
          "S": 35
        },
        "115": {
          "A": 0,
          "D": 0,
          "S": 0
        },
        "116": {
          "A": 0,
          "D": 0,
          "S": 0
        },
        "117": {
          "A": 23,
          "D": 0,
          "S": 35
        },
        "118": {
          "A": 1,
          "D": 6,
          "S": 14
        },
        "119": {
          "A": 31,
          "D": 1,
          "S": 34
        },
        "120": {
          "A": 11,
          "D": 16,
          "S": 39
        },
        "121": {
          "A": 0,
          "D": 0,
          "S": 0
        },
        "122": {
          "A": 0,
          "D": 0,
          "S": 0
        },
        "123": {
          "A": 25,
          "D": 7,
          "S": 38
        },
        "124": {
          "A": 0,
          "D": 0,
          "S": 0
        },
        "125": {
          "A": 24,
          "D": 4,
          "S": 36
        },
        "126": {
          "A": 12,
          "D": 6,
          "S": 34
        },
        "127": {
          "A": 23,
          "D": 5,
          "S": 33
        },
        "128": {
          "A": 25,
          "D": 7,
          "S": 37
        },
        "129": {
          "A": 6,
          "D": 4,
          "S": 13
        },
        "130": {
          "A": 16,
          "D": 11,
          "S": 37
        },
        "131": {
          "A": 10,
          "D": 8,
          "S": 32
        },
        "132": {
          "A": 32,
          "D": 2,
          "S": 34
        },
        "133": {
          "A": 0,
          "D": 21,
          "S": 30
        },
        "134": {
          "A": 4,
          "D": 4,
          "S": 28
        },
        "135": {
          "A": 0,
          "D": 0,
          "S": 0
        },
        "136": {
          "A": 8,
          "D": 0,
          "S": 8
        },
        "137": {
          "A": 17,
          "D": 9,
          "S": 33
        },
        "138": {
          "A": 13,
          "D": 7,
          "S": 31
        },
        "139": {
          "A": 24,
          "D": 3,
          "S": 33
        },
        "140": {
          "A": 1,
          "D": 0,
          "S": 1
        },
        "141": {
          "A": 1,
          "D": 0,
          "S": 1
        },
        "142": {
          "A": 1,
          "D": 0,
          "S": 1
        },
        "143": {
          "A": 19,
          "D": 6,
          "S": 32
        },
        "144": {
          "A": 3,
          "D": 8,
          "S": 25
        },
        "145": {
          "A": 3,
          "D": 6,
          "S": 26
        },
        "146": {
          "A": 28,
          "D": 2,
          "S": 31
        },
        "147": {
          "A": 28,
          "D": 1,
          "S": 31
        },
        "148": {
          "A": 26,
          "D": 2,
          "S": 30
        },
        "149": {
          "A": 5,
          "D": 0,
          "S": 6
        },
        "150": {
          "A": 11,
          "D": 6,
          "S": 28
        },
        "151": {
          "A": 0,
          "D": 0,
          "S": 0
        },
        "152": {
          "A": 5,
          "D": 0,
          "S": 6
        },
        "153": {
          "A": 11,
          "D": 5,
          "S": 24
        },
        "154": {
          "A": 0,
          "D": 0,
          "S": 0
        },
        "155": {
          "A": 16,
          "D": 10,
          "S": 30
        },
        "156": {
          "A": 1,
          "D": 1,
          "S": 4
        },
        "157": {
          "A": 13,
          "D": 6,
          "S": 28
        },
        "158": {
          "A": 18,
          "D": 3,
          "S": 28
        },
        "159": {
          "A": 0,
          "D": 0,
          "S": 1
        },
        "160": {
          "A": 10,
          "D": 10,
          "S": 26
        },
        "161": {
          "A": 21,
          "D": 0,
          "S": 26
        },
        "162": {
          "A": 0,
          "D": 0,
          "S": 1
        },
        "163": {
          "A": 3,
          "D": 17,
          "S": 27
        },
        "164": {
          "A": 5,
          "D": 16,
          "S": 26
        },
        "165": {
          "A": 1,
          "D": 22,
          "S": 25
        },
        "166": {
          "A": 6,
          "D": 21,
          "S": 29
        },
        "167": {
          "A": 20,
          "D": 1,
          "S": 24
        },
        "168": {
          "A": 2,
          "D": 14,
          "S": 22
        },
        "169": {
          "A": 0,
          "D": 0,
          "S": 0
        },
        "170": {
          "A": 0,
          "D": 0,
          "S": 0
        },
        "171": {
          "A": 0,
          "D": 0,
          "S": 0
        },
        "172": {
          "A": 0,
          "D": 0,
          "S": 0
        },
        "173": {
          "A": 4,
          "D": 12,
          "S": 25
        },
        "174": {
          "A": 0,
          "D": 0,
          "S": 0
        },
        "175": {
          "A": 19,
          "D": 6,
          "S": 28
        },
        "176": {
          "A": 0,
          "D": 0,
          "S": 0
        },
        "177": {
          "A": 1,
          "D": 0,
          "S": 1
        },
        "178": {
          "A": 1,
          "D": 0,
          "S": 1
        },
        "179": {
          "A": 13,
          "D": 5,
          "S": 21
        },
        "180": {
          "A": 19,
          "D": 3,
          "S": 24
        },
        "181": {
          "A": 1,
          "D": 0,
          "S": 1
        },
        "182": {
          "A": 0,
          "D": 0,
          "S": 0
        },
        "183": {
          "A": 0,
          "D": 0,
          "S": 0
        },
        "184": {
          "A": 7,
          "D": 10,
          "S": 23
        },
        "185": {
          "A": 16,
          "D": 4,
          "S": 23
        },
        "186": {
          "A": 13,
          "D": 5,
          "S": 22
        },
        "187": {
          "A": 0,
          "D": 0,
          "S": 0
        },
        "188": {
          "A": 15,
          "D": 3,
          "S": 20
        },
        "189": {
          "A": 11,
          "D": 0,
          "S": 19
        },
        "190": {
          "A": 1,
          "D": 11,
          "S": 17
        },
        "191": {
          "A": 11,
          "D": 1,
          "S": 19
        },
        "192": {
          "A": 1,
          "D": 13,
          "S": 17
        },
        "193": {
          "A": 16,
          "D": 0,
          "S": 19
        },
        "194": {
          "A": 12,
          "D": 1,
          "S": 18
        },
        "195": {
          "A": 11,
          "D": 1,
          "S": 17
        },
        "196": {
          "A": 1,
          "D": 0,
          "S": 1
        },
        "197": {
          "A": 1,
          "D": 0,
          "S": 1
        },
        "198": {
          "A": 1,
          "D": 0,
          "S": 1
        },
        "199": {
          "A": 0,
          "D": 0,
          "S": 0
        },
        "200": {
          "A": 0,
          "D": 0,
          "S": 0
        },
        "201": {
          "A": 0,
          "D": 0,
          "S": 0
        },
        "202": {
          "A": 1,
          "D": 0,
          "S": 1
        },
        "203": {
          "A": 1,
          "D": 0,
          "S": 1
        },
        "204": {
          "A": 0,
          "D": 0,
          "S": 0
        },
        "205": {
          "A": 0,
          "D": 0,
          "S": 0
        },
        "206": {
          "A": 0,
          "D": 0,
          "S": 0
        },
        "207": {
          "A": 0,
          "D": 0,
          "S": 0
        },
        "208": {
          "A": 0,
          "D": 0,
          "S": 0
        },
        "209": {
          "A": 1,
          "D": 0,
          "S": 1
        },
        "210": {
          "A": 0,
          "D": 0,
          "S": 0
        }
      },
      "id": 0
    },
    "1": {
      "n-members": 161,
      "votes": {
        "0": {
          "A": 94,
          "D": 1,
          "S": 99
        },
        "1": {
          "A": 84,
          "D": 3,
          "S": 92
        },
        "2": {
          "A": 90,
          "D": 1,
          "S": 96
        },
        "3": {
          "A": 71,
          "D": 8,
          "S": 102
        },
        "4": {
          "A": 39,
          "D": 20,
          "S": 96
        },
        "5": {
          "A": 88,
          "D": 3,
          "S": 103
        },
        "6": {
          "A": 78,
          "D": 1,
          "S": 88
        },
        "7": {
          "A": 83,
          "D": 3,
          "S": 97
        },
        "8": {
          "A": 80,
          "D": 1,
          "S": 95
        },
        "9": {
          "A": 91,
          "D": 4,
          "S": 101
        },
        "10": {
          "A": 75,
          "D": 3,
          "S": 92
        },
        "11": {
          "A": 46,
          "D": 13,
          "S": 100
        },
        "12": {
          "A": 35,
          "D": 15,
          "S": 87
        },
        "13": {
          "A": 11,
          "D": 54,
          "S": 76
        },
        "14": {
          "A": 44,
          "D": 11,
          "S": 85
        },
        "15": {
          "A": 73,
          "D": 15,
          "S": 104
        },
        "16": {
          "A": 10,
          "D": 59,
          "S": 91
        },
        "17": {
          "A": 47,
          "D": 25,
          "S": 102
        },
        "18": {
          "A": 86,
          "D": 1,
          "S": 96
        },
        "19": {
          "A": 19,
          "D": 53,
          "S": 92
        },
        "20": {
          "A": 73,
          "D": 4,
          "S": 97
        },
        "21": {
          "A": 85,
          "D": 2,
          "S": 94
        },
        "22": {
          "A": 26,
          "D": 25,
          "S": 84
        },
        "23": {
          "A": 67,
          "D": 6,
          "S": 104
        },
        "24": {
          "A": 43,
          "D": 36,
          "S": 106
        },
        "25": {
          "A": 9,
          "D": 17,
          "S": 58
        },
        "26": {
          "A": 3,
          "D": 0,
          "S": 17
        },
        "27": {
          "A": 5,
          "D": 1,
          "S": 18
        },
        "28": {
          "A": 65,
          "D": 1,
          "S": 68
        },
        "29": {
          "A": 80,
          "D": 8,
          "S": 101
        },
        "30": {
          "A": 22,
          "D": 14,
          "S": 60
        },
        "31": {
          "A": 82,
          "D": 3,
          "S": 87
        },
        "32": {
          "A": 38,
          "D": 19,
          "S": 79
        },
        "33": {
          "A": 44,
          "D": 13,
          "S": 91
        },
        "34": {
          "A": 46,
          "D": 16,
          "S": 88
        },
        "35": {
          "A": 24,
          "D": 12,
          "S": 57
        },
        "36": {
          "A": 39,
          "D": 33,
          "S": 105
        },
        "37": {
          "A": 29,
          "D": 2,
          "S": 47
        },
        "38": {
          "A": 77,
          "D": 3,
          "S": 94
        },
        "39": {
          "A": 41,
          "D": 41,
          "S": 108
        },
        "40": {
          "A": 53,
          "D": 32,
          "S": 109
        },
        "41": {
          "A": 28,
          "D": 7,
          "S": 49
        },
        "42": {
          "A": 31,
          "D": 28,
          "S": 81
        },
        "43": {
          "A": 21,
          "D": 23,
          "S": 77
        },
        "44": {
          "A": 17,
          "D": 11,
          "S": 69
        },
        "45": {
          "A": 27,
          "D": 10,
          "S": 68
        },
        "46": {
          "A": 93,
          "D": 4,
          "S": 116
        },
        "47": {
          "A": 74,
          "D": 5,
          "S": 89
        },
        "48": {
          "A": 67,
          "D": 2,
          "S": 80
        },
        "49": {
          "A": 63,
          "D": 14,
          "S": 95
        },
        "50": {
          "A": 37,
          "D": 6,
          "S": 74
        },
        "51": {
          "A": 47,
          "D": 17,
          "S": 85
        },
        "52": {
          "A": 2,
          "D": 0,
          "S": 4
        },
        "53": {
          "A": 0,
          "D": 0,
          "S": 0
        },
        "54": {
          "A": 1,
          "D": 0,
          "S": 3
        },
        "55": {
          "A": 2,
          "D": 0,
          "S": 3
        },
        "56": {
          "A": 0,
          "D": 0,
          "S": 2
        },
        "57": {
          "A": 3,
          "D": 2,
          "S": 5
        },
        "58": {
          "A": 24,
          "D": 5,
          "S": 61
        },
        "59": {
          "A": 38,
          "D": 14,
          "S": 75
        },
        "60": {
          "A": 3,
          "D": 0,
          "S": 3
        },
        "61": {
          "A": 27,
          "D": 13,
          "S": 62
        },
        "62": {
          "A": 5,
          "D": 0,
          "S": 5
        },
        "63": {
          "A": 4,
          "D": 0,
          "S": 4
        },
        "64": {
          "A": 62,
          "D": 9,
          "S": 81
        },
        "65": {
          "A": 2,
          "D": 1,
          "S": 4
        },
        "66": {
          "A": 19,
          "D": 19,
          "S": 65
        },
        "67": {
          "A": 12,
          "D": 25,
          "S": 66
        },
        "68": {
          "A": 1,
          "D": 0,
          "S": 2
        },
        "69": {
          "A": 36,
          "D": 12,
          "S": 79
        },
        "70": {
          "A": 5,
          "D": 1,
          "S": 6
        },
        "71": {
          "A": 5,
          "D": 0,
          "S": 5
        },
        "72": {
          "A": 51,
          "D": 5,
          "S": 79
        },
        "73": {
          "A": 5,
          "D": 0,
          "S": 6
        },
        "74": {
          "A": 4,
          "D": 1,
          "S": 5
        },
        "75": {
          "A": 34,
          "D": 9,
          "S": 71
        },
        "76": {
          "A": 5,
          "D": 0,
          "S": 5
        },
        "77": {
          "A": 3,
          "D": 0,
          "S": 4
        },
        "78": {
          "A": 4,
          "D": 1,
          "S": 6
        },
        "79": {
          "A": 6,
          "D": 0,
          "S": 6
        },
        "80": {
          "A": 4,
          "D": 0,
          "S": 5
        },
        "81": {
          "A": 32,
          "D": 7,
          "S": 67
        },
        "82": {
          "A": 3,
          "D": 0,
          "S": 5
        },
        "83": {
          "A": 3,
          "D": 1,
          "S": 5
        },
        "84": {
          "A": 4,
          "D": 0,
          "S": 6
        },
        "85": {
          "A": 72,
          "D": 1,
          "S": 80
        },
        "86": {
          "A": 74,
          "D": 1,
          "S": 80
        },
        "87": {
          "A": 4,
          "D": 0,
          "S": 5
        },
        "88": {
          "A": 4,
          "D": 0,
          "S": 5
        },
        "89": {
          "A": 2,
          "D": 1,
          "S": 4
        },
        "90": {
          "A": 3,
          "D": 0,
          "S": 3
        },
        "91": {
          "A": 4,
          "D": 0,
          "S": 4
        },
        "92": {
          "A": 4,
          "D": 0,
          "S": 5
        },
        "93": {
          "A": 4,
          "D": 0,
          "S": 5
        },
        "94": {
          "A": 49,
          "D": 5,
          "S": 81
        },
        "95": {
          "A": 6,
          "D": 0,
          "S": 6
        },
        "96": {
          "A": 6,
          "D": 0,
          "S": 6
        },
        "97": {
          "A": 4,
          "D": 0,
          "S": 4
        },
        "98": {
          "A": 4,
          "D": 0,
          "S": 4
        },
        "99": {
          "A": 4,
          "D": 0,
          "S": 5
        },
        "100": {
          "A": 5,
          "D": 0,
          "S": 5
        },
        "101": {
          "A": 19,
          "D": 14,
          "S": 63
        },
        "102": {
          "A": 47,
          "D": 9,
          "S": 78
        },
        "103": {
          "A": 4,
          "D": 1,
          "S": 5
        },
        "104": {
          "A": 3,
          "D": 1,
          "S": 5
        },
        "105": {
          "A": 39,
          "D": 24,
          "S": 85
        },
        "106": {
          "A": 24,
          "D": 24,
          "S": 78
        },
        "107": {
          "A": 2,
          "D": 0,
          "S": 2
        },
        "108": {
          "A": 0,
          "D": 0,
          "S": 0
        },
        "109": {
          "A": 1,
          "D": 0,
          "S": 1
        },
        "110": {
          "A": 53,
          "D": 0,
          "S": 58
        },
        "111": {
          "A": 52,
          "D": 9,
          "S": 75
        },
        "112": {
          "A": 56,
          "D": 5,
          "S": 71
        },
        "113": {
          "A": 4,
          "D": 0,
          "S": 21
        },
        "114": {
          "A": 47,
          "D": 12,
          "S": 76
        },
        "115": {
          "A": 1,
          "D": 0,
          "S": 1
        },
        "116": {
          "A": 1,
          "D": 0,
          "S": 1
        },
        "117": {
          "A": 31,
          "D": 2,
          "S": 51
        },
        "118": {
          "A": 7,
          "D": 3,
          "S": 22
        },
        "119": {
          "A": 36,
          "D": 5,
          "S": 64
        },
        "120": {
          "A": 23,
          "D": 12,
          "S": 57
        },
        "121": {
          "A": 1,
          "D": 0,
          "S": 1
        },
        "122": {
          "A": 1,
          "D": 0,
          "S": 1
        },
        "123": {
          "A": 56,
          "D": 6,
          "S": 67
        },
        "124": {
          "A": 1,
          "D": 0,
          "S": 1
        },
        "125": {
          "A": 26,
          "D": 12,
          "S": 58
        },
        "126": {
          "A": 15,
          "D": 7,
          "S": 47
        },
        "127": {
          "A": 36,
          "D": 6,
          "S": 62
        },
        "128": {
          "A": 60,
          "D": 2,
          "S": 64
        },
        "129": {
          "A": 21,
          "D": 3,
          "S": 26
        },
        "130": {
          "A": 44,
          "D": 19,
          "S": 81
        },
        "131": {
          "A": 26,
          "D": 5,
          "S": 52
        },
        "132": {
          "A": 52,
          "D": 4,
          "S": 64
        },
        "133": {
          "A": 4,
          "D": 31,
          "S": 40
        },
        "134": {
          "A": 1,
          "D": 6,
          "S": 39
        },
        "135": {
          "A": 1,
          "D": 0,
          "S": 1
        },
        "136": {
          "A": 22,
          "D": 1,
          "S": 24
        },
        "137": {
          "A": 52,
          "D": 6,
          "S": 69
        },
        "138": {
          "A": 42,
          "D": 4,
          "S": 62
        },
        "139": {
          "A": 43,
          "D": 4,
          "S": 56
        },
        "140": {
          "A": 0,
          "D": 0,
          "S": 0
        },
        "141": {
          "A": 0,
          "D": 0,
          "S": 0
        },
        "142": {
          "A": 0,
          "D": 0,
          "S": 0
        },
        "143": {
          "A": 29,
          "D": 10,
          "S": 53
        },
        "144": {
          "A": 2,
          "D": 15,
          "S": 34
        },
        "145": {
          "A": 4,
          "D": 16,
          "S": 37
        },
        "146": {
          "A": 53,
          "D": 2,
          "S": 58
        },
        "147": {
          "A": 52,
          "D": 0,
          "S": 57
        },
        "148": {
          "A": 50,
          "D": 6,
          "S": 63
        },
        "149": {
          "A": 16,
          "D": 0,
          "S": 20
        },
        "150": {
          "A": 12,
          "D": 5,
          "S": 39
        },
        "151": {
          "A": 0,
          "D": 0,
          "S": 0
        },
        "152": {
          "A": 13,
          "D": 1,
          "S": 20
        },
        "153": {
          "A": 16,
          "D": 3,
          "S": 38
        },
        "154": {
          "A": 1,
          "D": 0,
          "S": 1
        },
        "155": {
          "A": 53,
          "D": 2,
          "S": 58
        },
        "156": {
          "A": 7,
          "D": 3,
          "S": 17
        },
        "157": {
          "A": 20,
          "D": 11,
          "S": 46
        },
        "158": {
          "A": 37,
          "D": 5,
          "S": 48
        },
        "159": {
          "A": 1,
          "D": 0,
          "S": 2
        },
        "160": {
          "A": 3,
          "D": 34,
          "S": 44
        },
        "161": {
          "A": 21,
          "D": 5,
          "S": 41
        },
        "162": {
          "A": 4,
          "D": 0,
          "S": 6
        },
        "163": {
          "A": 30,
          "D": 6,
          "S": 42
        },
        "164": {
          "A": 29,
          "D": 4,
          "S": 45
        },
        "165": {
          "A": 25,
          "D": 10,
          "S": 49
        },
        "166": {
          "A": 39,
          "D": 2,
          "S": 55
        },
        "167": {
          "A": 23,
          "D": 7,
          "S": 41
        },
        "168": {
          "A": 6,
          "D": 14,
          "S": 33
        },
        "169": {
          "A": 1,
          "D": 0,
          "S": 1
        },
        "170": {
          "A": 1,
          "D": 0,
          "S": 1
        },
        "171": {
          "A": 1,
          "D": 0,
          "S": 1
        },
        "172": {
          "A": 1,
          "D": 0,
          "S": 1
        },
        "173": {
          "A": 31,
          "D": 1,
          "S": 47
        },
        "174": {
          "A": 1,
          "D": 0,
          "S": 1
        },
        "175": {
          "A": 41,
          "D": 2,
          "S": 49
        },
        "176": {
          "A": 1,
          "D": 0,
          "S": 1
        },
        "177": {
          "A": 0,
          "D": 0,
          "S": 0
        },
        "178": {
          "A": 0,
          "D": 0,
          "S": 0
        },
        "179": {
          "A": 19,
          "D": 12,
          "S": 38
        },
        "180": {
          "A": 33,
          "D": 6,
          "S": 42
        },
        "181": {
          "A": 0,
          "D": 0,
          "S": 0
        },
        "182": {
          "A": 1,
          "D": 0,
          "S": 1
        },
        "183": {
          "A": 1,
          "D": 0,
          "S": 1
        },
        "184": {
          "A": 26,
          "D": 6,
          "S": 44
        },
        "185": {
          "A": 40,
          "D": 3,
          "S": 45
        },
        "186": {
          "A": 25,
          "D": 5,
          "S": 34
        },
        "187": {
          "A": 1,
          "D": 0,
          "S": 1
        },
        "188": {
          "A": 27,
          "D": 6,
          "S": 37
        },
        "189": {
          "A": 19,
          "D": 1,
          "S": 30
        },
        "190": {
          "A": 4,
          "D": 9,
          "S": 24
        },
        "191": {
          "A": 19,
          "D": 3,
          "S": 30
        },
        "192": {
          "A": 3,
          "D": 16,
          "S": 26
        },
        "193": {
          "A": 27,
          "D": 2,
          "S": 32
        },
        "194": {
          "A": 13,
          "D": 6,
          "S": 26
        },
        "195": {
          "A": 15,
          "D": 1,
          "S": 28
        },
        "196": {
          "A": 0,
          "D": 0,
          "S": 1
        },
        "197": {
          "A": 0,
          "D": 0,
          "S": 1
        },
        "198": {
          "A": 1,
          "D": 0,
          "S": 1
        },
        "199": {
          "A": 1,
          "D": 0,
          "S": 3
        },
        "200": {
          "A": 2,
          "D": 0,
          "S": 3
        },
        "201": {
          "A": 2,
          "D": 0,
          "S": 3
        },
        "202": {
          "A": 0,
          "D": 1,
          "S": 1
        },
        "203": {
          "A": 1,
          "D": 0,
          "S": 2
        },
        "204": {
          "A": 0,
          "D": 0,
          "S": 1
        },
        "205": {
          "A": 1,
          "D": 0,
          "S": 2
        },
        "206": {
          "A": 1,
          "D": 0,
          "S": 2
        },
        "207": {
          "A": 1,
          "D": 0,
          "S": 2
        },
        "208": {
          "A": 1,
          "D": 0,
          "S": 2
        },
        "209": {
          "A": 1,
          "D": 0,
          "S": 1
        },
        "210": {
          "A": 0,
          "D": 0,
          "S": 0
        }
      },
      "id": 1
    }
  },
  voteColors: {
    "agree": "rgb(46, 204, 113)",
    "disagree": "rgb(231, 76, 60)",
    "pass": "rgb(230,230,230)"
  },
}
