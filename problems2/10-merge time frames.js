/*
Your company built an in-house calendar tool called HiCal. 
You want to add a feature to see the times in a day when everyone is available.
To do this, you’ll need to know when any team is having a meeting. 
In HiCal, a meeting is stored as objects ↴ with integer properties
startTime and endTime. These integers represent the 
number of 30-minute blocks past 9:00am.

For example:

  {startTime: 2, endTime: 3} // meeting from 10:00 – 10:30 am
  {startTime: 6, endTime: 9} // meeting from 12:00 – 1:30 pm

Write a function mergeRanges() that takes an array of meeting time 
ranges and returns an array of condensed ranges.

For example, given:

  [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
  ]

your function would return:

  [
    {startTime: 0, endTime: 1},
    {startTime: 3, endTime: 8},
    {startTime: 9, endTime: 12},
  ]

Do not assume the meetings are in order. The meeting times are coming from multiple teams.
*/

function mergerTimeFrames(arr){
  let dict = {};

  for(let i=0; i<arr.length; i++){
    let snap = arr[i];

    for(let j=snap.startTime; j<snap.endTime; j++){
      dict[j] = true;
    }
  }

  // merge
  let start = null;
  let end;
  let vals = Object.keys(dict);
  let min = vals[0];
  let max = vals[vals.length-1];
  let ret = [];

  for(let i=min; i<=max+1; i++){
    if(dict[i] && !start){
      start = i;
    }
    else if(start && !dict[i]) {
      ret.push({ startTime: start, endTime: i });
      start = null;
    }
  }

  return ret;
}

const arr =  [
  {startTime: 0,  endTime: 1},
  {startTime: 3,  endTime: 5},
  {startTime: 4,  endTime: 8},
  {startTime: 10, endTime: 12},
  {startTime: 9,  endTime: 10},
];

console.log(mergerTimeFrames(arr));

const arr2 =   [
    {startTime: 1, endTime: 10},
    {startTime: 2, endTime: 6},
    {startTime: 3, endTime: 5},
    {startTime: 7, endTime: 9},
];

console.log("---");

console.log(mergerTimeFrames(arr2));

