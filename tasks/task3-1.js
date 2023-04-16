const fs = require('fs');
const data = fs.readFileSync('data/inputData.json');
const inputData = JSON.parse(data);

const record = inputData.task3.part1.athlete1;
const barbell = inputData.task3.part1.weight.barbell;
const plateSizes = inputData.task3.part1.weight.kg;
const lbPlateSizes = inputData.task3.part1.weight.lbs;

function findNextWeight(currentWeight) {
  const maxPlatesPerSide = 12;
  for (let j = 0; j <= maxPlatesPerSide; j++) {
    for (let i = 0; i <= maxPlatesPerSide; i++) {
      let weight = barbell + (plateSizes[i] + ((lbPlateSizes[j]) * 0.4535923)) * 2;
      if (weight > currentWeight) {
        return weight;
      }
    }
  }
  return nextWeight = `${weight}kg`;
}

const result = findNextWeight(record);
const outputData = JSON.stringify({"task3-1" : { result }});
fs.appendFileSync('data/resultData.json', `\n${outputData}`);