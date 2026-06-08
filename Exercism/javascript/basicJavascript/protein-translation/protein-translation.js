//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (proteinString) => {
  const mapping = {
    AUG: "Methionine",
    UUU: "Phenylalanine",
    UUC: "Phenylalanine",
    UUA: "Leucine",
    UUG: "Leucine",
    UCU: "Serine",
    UCC: "Serine",
    UCA: "Serine",
    UCG: "Serine",
    UAU: "Tyrosine",
    UAC: "Tyrosine",
    UGU: "Cysteine",
    UGC: "Cysteine",
    UGG: "Tryptophan",
    UAA: "STOP",
    UAG: "STOP",
    UGA: "STOP"
  };

  let result = [];
  if (!proteinString) return result;
  for (let i = 0; i < proteinString.length; i += 3) {
    const codon = proteinString.slice(i, i + 3);
    if (mapping[codon] === 'STOP') { break; }
    if (!mapping[codon] || codon.length !== 3) {
      throw new Error("Invalid codon");
    }
    result.push(mapping[codon]);
  }
  return result;
};
