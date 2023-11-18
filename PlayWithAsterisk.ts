/** @format */

function playWithAsterik(n: number): string {
  let result = "";
  

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i; j++) {
      result += " ";
    }

    for (let k = 0; k < i; k++) {
      result += "✌️ ";
    }

    result += "\n";
  }

  return result;
}

console.log(playWithAsterik(5));
