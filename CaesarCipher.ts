/** @format */

function caesarCipher(offset: number, input: string): string {
  const panjang = 26;
  const result = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "") {
      result.push(" ");
    } else {
      const charCode = input.charCodeAt(i);
      const isLowerCase = input[i] >= "a" && input[i] <= "z";
      const baseCharCode = isLowerCase ? "a".charCodeAt(0) : "A".charCodeAt(0);
      const shiftedCharCode =
        ((charCode - baseCharCode + offset) % panjang) + baseCharCode;
      result.push(String.fromCharCode(shiftedCharCode));
    }
  }

  return result.join("");
}

// Test Cases
console.log(caesarCipher(3, "abc")); // Output: def
console.log(caesarCipher(2, "alta")); // Output: cnvc
console.log(caesarCipher(10, "alterraacademy")); // Output: kvdobbkkmknowi
console.log(caesarCipher(1, "abcdefghijklmnopqrstuvwxyz"));
// Output: bcdefghijklmnopqrstuvwxyza
console.log(caesarCipher(1000, "abcdefghijklmnopqrstuvwxyz"));
// Output: mnopqrstuvwxyzabcdefghijkl
