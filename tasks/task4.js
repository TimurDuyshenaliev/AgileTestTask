const fs = require('fs');

const data = fs.readFileSync('data/inputData.json');
const inputData = JSON.parse(data);

const scene = inputData.task4.scene;

function countGoodPositions(scene) {
    const n = scene.length;
    const m = scene[0].length;
    let count = 0;
    
    function countDirection(dx, dy) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (scene[i][j] === '0') {
                    let x = i + dx;
                    let y = j + dy;
                    let f = false;
                    while (x >= 0 && x < n && y >= 0 && y < m) {
                        if (scene[x][y] === '1') {
                            f = true;
                            break;
                        }
                        x += dx;
                        y += dy;
                    }
                    if (f) count++;
                }
            }
        }
    }
    countDirection(0, -1); // Left
    countDirection(-1, 0); // Up
    countDirection(0, 1); // Right
    countDirection(1, 0); // Down
    
    return count;
}

const result = countGoodPositions(scene);
const outputData = JSON.stringify({"task4" : { result }});
fs.appendFileSync('data/resultData.json', `\n${outputData}`);
