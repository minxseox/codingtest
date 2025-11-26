//케이스 번호 입력
//케이스 번호 n개
//입력한 단어들 반대 순서로 출력
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = Number(input[0]);
let result = [];

for (let i = 1; i <= N; i++) {
  const words = input[i].trim().split(" ");
  const reversed = words.reverse().join(" ");
  result.push(`Case #${i}: ${reversed}`);
}

console.log(result.join("\n"));

//3
//this is a test
//foobar
//all your base
