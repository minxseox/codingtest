const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const T = Number(input[0]);
let result = [];

for (let i = 1; i <= T; i++) {
  const str = input[i].trim();
  const stack = [];
  let isValid = true;

  for (let ch of str)
    if (ch === "(") {
      stack.push("(");
    } else {
      if (stack.length === 0) {
        isValid = false;
        break;
      }
      stack.pop();
    }

  if (isValid && stack.length == 0) {
    result.push("YES");
  } else {
    result.push("NO");
  }
}

console.log(result.join("\n"));
