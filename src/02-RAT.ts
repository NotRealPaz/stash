function getQuestionPart(phrases: string[]): string[] {
  let common = "";
  for (let wordlen = 1; wordlen < phrases[0].length; wordlen++) {
    for (let step = 0; step <= phrases[0].length - wordlen; step++) {
      const word = phrases[0].substring(step, step + wordlen);
      if (phrases[1].includes(word) && phrases[2].includes(word)) common = word;
    }
  }
  return phrases.map((word: string): string => word.replace(common, "").trim());
}