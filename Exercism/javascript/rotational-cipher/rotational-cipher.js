//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rotate = (text, shift) => {

  return text.split('').map(char => {

    const code = char.charCodeAt(0);

    if (code >= 65 && code <= 90) {
      return String.fromCharCode((code - 65 + shift) % 26 + 65);
    }
    if (code >= 97 && code <= 122) {
      return String.fromCharCode((code - 97 + shift) % 26 + 97);
    }
    return char; //if char is not upper of lowercase
  }).join('');
};
