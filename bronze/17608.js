//막대기 개수
//첫번째 줄 막대기 개수 ,n
//막대기 높이 정수 h
//오른쪽에서 n개의 막대기 볼때 보이는 막대기의 개수
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const N = input[0];
const heights = input.slice(1, 1 + N);
let maxHeight = 0; //최대 높이
let count = 0;
// 오른쪽에서 왼쪽
for (let i = N - 1; i >= 0; i--) {
  if (heights[i] > maxHeight) {
    count++;
    maxHeight = heights[i];
  }
}

console.log(count);
