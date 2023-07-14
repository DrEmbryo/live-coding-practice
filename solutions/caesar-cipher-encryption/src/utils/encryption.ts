export const CaesarCipherEncryption = (
  input: string,
  shift: string
): string => {
  let output = "";

  for (let charIndex = 0; charIndex < input.length; charIndex++) {
    const charCode = input.charCodeAt(charIndex);

    output += String.fromCharCode(charCode + parseInt(shift, 10));
  }

  return output;
};

export const CaesarCipherDecryption = (
  input: string,
  shift: string
): string => {
  let output = "";

  for (let charIndex = 0; charIndex < input.length; charIndex++) {
    const charCode = input.charCodeAt(charIndex);

    output += String.fromCharCode(charCode - parseInt(shift, 10));
  }

  return output;
};
