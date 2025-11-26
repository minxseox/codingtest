//정수 n개
//첫째 줄에 남게 되는 카드의 번호 출력
//
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();
const N = Number(input);

const queue = Array.from({ length: N }, (_, i) => i + 1);
let head = 0;
let last = N;
while (last - head > 1) {
  head++;
  queue[last] = queue[head];
  head++;
  last++;
}
console.log(queue[head]);
