function ubahHuruf(sentence: string): string {
    const alphabet: Record<string, string> = {}; 
    const abjad: string[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    const abjad2: string[] = "KLMNOPQRSTUVWXYZABCDEFGHIJ".split('');
  
    // memlakukan looping untuk mapping data abjad
    for (let i = 0; i < abjad.length; i++) {
      alphabet[abjad[i]] = abjad2[i];
    }
  
    // merubah setiap huruf kedalam sebuah kalimat
    const encryptedkata = sentence
      .toUpperCase()
      .split('')
      .map((char: string) => (alphabet[char] ? alphabet[char] : char))
      .join('');
  
    return encryptedkata;
  }
  
  // Test Cases
  console.log(ubahHuruf("SEPULSA OKE"));     // Output: COZEVCK YUO
  console.log(ubahHuruf("ALTERRA ACADEMY")); // Output: KVDOBBK KMKNOWI
  console.log(ubahHuruf("INDONESIA"));       // Output: SXNYXOCSK
  console.log(ubahHuruf("GOLANG"));          // Output: QYVKXQ
  console.log(ubahHuruf("PROGRAMMER"));      // Output: ZBYQBKWWOB
  