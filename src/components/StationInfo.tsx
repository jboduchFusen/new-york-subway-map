
interface Station {
  id: string;
  name: string;
  lines: string[];
  x: number;
  y: number;
}

interface StationInfoProps {
  station: Station;
  getLineColor: (line: string) => string;
}

export function StationInfo({ station, getLineColor }: StationInfoProps) {
  return (
    <div className="border border-border rounded-lg p-4 bg-background">
      <h3 className="text-xl font-bold text-foreground mb-3">{station.name}</h3>
      
      <div className="space-y-2">
        <p className="text-sm font-semibold text-muted-foreground">Available Lines:</p>
        <div className="flex flex-wrap gap-2">
          {station.lines.map((line) => (
            <div
              key={line}
              className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md"
              style={{ backgroundColor: getLineColor(line) }}
            >
              {line}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-border">
        <p className="text-xs text-muted-foreground">
          Transfer station with {station.lines.length} line{station.lines.length > 1 ? 's' : ''}
        </p>
      </div>
    </div>
  );
}