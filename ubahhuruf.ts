/** @format */

function ubahHuruf(sentence) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const shiftedAlphabet = "KLMNOPQRSTUVWXYZABCDEFGHIJ";

  // Membuat objek untuk memetakan setiap huruf dengan huruf yang digeser
  const alphabetMap = {};
  for (let i = 0; i < alphabet.length; i++) {
    alphabetMap[alphabet[i]] = shiftedAlphabet[i];
  }

  // Mengubah setiap huruf dalam kalimat
  const encryptedSentence = sentence
    .toUpperCase()
    .split("")
    .map((char) => (alphabetMap[char] ? alphabetMap[char] : char))
    .join("");

  return encryptedSentence;
}

// Test Cases
console.log(ubahHuruf("SEPULSA OKE")); // Output: COZEVCK YUO
console.log(ubahHuruf("ALTERRA ACADEMY")); // Output: KVDOBBK KMKNOWI
console.log(ubahHuruf("INDONESIA")); // Output: SXNYXOCSK
console.log(ubahHuruf("GOLANG")); // Output: QYVKXQ
console.log(ubahHuruf("PROGRAMMER")); // Output: ZBYQBKWWOB
