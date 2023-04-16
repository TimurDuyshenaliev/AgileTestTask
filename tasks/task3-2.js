const fs = require('fs');
const data = fs.readFileSync('data/inputData.json');
const inputData = JSON.parse(data);

let cnt = inputData.task3.part2.sizes;
let members = inputData.task3.part2.members;

function distributeShirts(cnt, members) {
  const ans = new Array(members.length).fill(-1);
  
  function assignSize(i, size) {
    if (cnt[size] > 0) {
      ans[i] = size;
      cnt[size]--;
    } else if (cnt[size - 1] > 0) {
      ans[i] = size - 1;
      cnt[size - 1]--;
    } else if (cnt[size + 1] > 0) {
      ans[i] = size + 1;
      cnt[size + 1]--;
    } else {
    return false;
    }
    return true;
  }
  
  function assignNextSize(i, size) {
    if (size === "S" && assignSize(i, "S")) {
      return;
    }
    if ((size === "S" || size === "M") && assignSize(i, "M")) {
      return;
    }
    if ((size === "M" || size === "L") && assignSize(i, "L")) {
      return;
    }
    if ((size === "L" || size === "XL") && assignSize(i, "XL")) {
      return;
    }
    if ((size === "XL" || size === "XXL") && assignSize(i, "XXL")) {
      return;
    }
    if ((size === "XXL" || size === "XXXL") && assignSize(i, "XXXL")) {
      return;
    }
    return false;
  }
  
  for (let i = 0; i < members.length; i++) {
    const size = members[i];
    if (ans[i] === -1) {
      if (!assignSize(i, size)) {
        if (!assignNextSize(i, size)) {
          return null;
        }
      }
    }
  }
  
  return ans;
  }
let result = distributeShirts(cnt, members);
const outputData = JSON.stringify({"task3-2" : { result }});
fs.appendFileSync('data/resultData.json', `\n${outputData}`);