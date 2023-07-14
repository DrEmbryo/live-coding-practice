type DigitDisplayProps = { input: number };

const HexMap: { [key: number]: number } = {
  0: 0x7e,
  1: 0x22,
  2: 0x6d,
  3: 0x6b,
  4: 0x33,
  5: 0x5b,
  6: 0x5f,
  7: 0x62,
  8: 0x7f,
  9: 0x7b,
};

export const DigitDisplay: React.FC<DigitDisplayProps> = ({ input }) => {
  const bitShift = (value: number, shift: number) => (value >> shift) & 1;
  const segments = ["a", "b", "c", "d", "e", "f", "g"];
  return (
    <div className="relative container">
      {segments.map((segment, index) => {
        const shift = segments.length - 1 - index;
        return (
          <div
            className={`absolute segment-${segment} bg-red-600 ${
              !bitShift(HexMap[input], shift) && "bg-opacity-20"
            }`}
          />
        );
      })}
    </div>
  );
};
