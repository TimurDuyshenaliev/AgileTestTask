const fs = require('fs');
const data = fs.readFileSync('data/inputData.json');
const inputData = JSON.parse(data);

const arr = inputData.task2;

function repeatedNumber(arr) {
  if (arr.length <= 1) {
    return -1;
  }
    
  let count = new Array(arr.length - 1).fill(0);
    
  for (let i = 0; i < arr.length; i++) {
    let n = arr[i] - 1;
    count[n]++;
    if (count[n] > 1) {
      return arr[i];
    }
  }
  return -1;
}

const result = repeatedNumber(arr);
const outputData = JSON.stringify({"task2" : { result }});
fs.appendFileSync('data/resultData.json', `\n${outputData}`);
    