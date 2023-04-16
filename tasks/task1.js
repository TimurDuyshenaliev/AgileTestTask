const fs = require('fs');

const data = fs.readFileSync('data/inputData.json');
const inputData = JSON.parse(data);

const a = inputData.task1.firstNumber;
const b = inputData.task1.secondNumber;

function isPossibleToTransform(a, b) {
  while (b > a) {
    if (b % 2 === 0) {
      b /= 2;
    } else {
      b--;
      b/= 10;
    }
  }
  return b === a;
}
if (isPossibleToTransform(a, b)) {
  let result = (`Можливо перетворити число ${a} на число ${b}`);
  const outputData = JSON.stringify({"task1" : { result }});
  fs.writeFileSync('data/resultData.json', outputData);
} else {
  let result = (`Неможливо перетворити число ${a} на число ${b}`);
  const outputData = JSON.stringify({"task1" : { result }});
  fs.writeFileSync('data/resultData.json', outputData);
}
