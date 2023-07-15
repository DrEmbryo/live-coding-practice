export const calculateScore = (origin: string[], buffer: string[]) => {
  let correctAnswers = 0;
  origin.forEach((char, index) => {
    if (char === buffer[index]) correctAnswers++;
  });

  return correctAnswers;
};

export const calculateWPM = (bufferLength: number, totalTime: number) => {
  const SPS = bufferLength / Math.floor(totalTime);
  const SPM = SPS * 60;
  return Math.floor(SPM / 5);
};

export const calculateAccuracy = (score: number, bufferLength: number) => {
  return ((score / bufferLength) * 100).toFixed(2);
};
