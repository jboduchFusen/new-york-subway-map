
interface Point {
  x: number;
  y: number;
}

interface SubwayLineProps {
  points: Point[];
  color: string;
}

export function SubwayLine({ points, color }: SubwayLineProps) {
  const pathData = points
    .map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`)
    .join(' ');

  return (
    <path
      d={pathData}
      stroke={color}
      strokeWidth="6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.9"
    />
  );
}