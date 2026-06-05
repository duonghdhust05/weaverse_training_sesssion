//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (string) => {
  if (!string) return "";
  return string.replace(/(.)\1+/g, (match, char) => match.length + char);
};


export const decode = (string) => {
  if (!string) return "";
  return string.replace(/(\d+)(.)/g, (_, count, char) => char.repeat(count));
};
