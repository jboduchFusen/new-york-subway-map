
import { useState } from 'react';
import { SubwayLine } from './SubwayLine';
import { StationInfo } from './StationInfo';

interface Station {
  id: string;
  name: string;
  lines: string[];
  x: number;
  y: number;
}

const stations: Station[] = [
  // 1/2/3 Line (Red) - West Side
  { id: 's1', name: 'Times Square-42nd St', lines: ['1', '2', '3', '7', 'N', 'Q', 'R', 'W', 'S'], x: 400, y: 300 },
  { id: 's2', name: '34th St-Penn Station', lines: ['1', '2', '3', 'A', 'C', 'E'], x: 400, y: 350 },
  { id: 's3', name: '14th St', lines: ['1', '2', '3', 'F', 'M', 'L'], x: 400, y: 450 },
  { id: 's4', name: 'Chambers St', lines: ['1', '2', '3'], x: 400, y: 550 },
  
  // 4/5/6 Line (Green) - East Side
  { id: 's5', name: 'Grand Central-42nd St', lines: ['4', '5', '6', '7', 'S'], x: 500, y: 300 },
  { id: 's6', name: '14th St-Union Sq', lines: ['4', '5', '6', 'L', 'N', 'Q', 'R', 'W'], x: 500, y: 450 },
  { id: 's7', name: 'Brooklyn Bridge', lines: ['4', '5', '6'], x: 500, y: 550 },
  
  // 7 Line (Purple)
  { id: 's8', name: 'Flushing-Main St', lines: ['7'], x: 700, y: 200 },
  { id: 's9', name: 'Queensboro Plaza', lines: ['7', 'N', 'W'], x: 600, y: 250 },
  
  // A/C/E Line (Blue)
  { id: 's10', name: 'Columbus Circle', lines: ['A', 'B', 'C', 'D', '1'], x: 350, y: 250 },
  { id: 's11', name: 'W 4th St', lines: ['A', 'C', 'E', 'B', 'D', 'F', 'M'], x: 400, y: 500 },
  { id: 's12', name: 'Fulton St', lines: ['A', 'C', 'J', 'Z', '2', '3', '4', '5'], x: 450, y: 570 },
  
  // L Line (Gray)
  { id: 's13', name: '8th Ave', lines: ['L', 'A', 'C', 'E'], x: 380, y: 450 },
  { id: 's14', name: 'Bedford Ave', lines: ['L'], x: 550, y: 480 },
  
  // N/Q/R/W Line (Yellow)
  { id: 's15', name: 'Herald Square', lines: ['B', 'D', 'F', 'M', 'N', 'Q', 'R', 'W'], x: 420, y: 350 },
  { id: 's16', name: 'Canal St', lines: ['N', 'Q', 'R', 'W', 'J', 'Z', '6'], x: 450, y: 520 },
];

export function SubwayMap() {
  const [selectedStation, setSelectedStation] = useState<Station | null>(null);

  const getLineColor = (line: string): string => {
    if (['1', '2', '3'].includes(line)) return 'hsl(var(--line-1-2-3))';
    if (['4', '5', '6'].includes(line)) return 'hsl(var(--line-4-5-6))';
    if (line === '7') return 'hsl(var(--line-7))';
    if (['A', 'C', 'E'].includes(line)) return 'hsl(var(--line-a-c-e))';
    if (['B', 'D', 'F', 'M'].includes(line)) return 'hsl(var(--line-b-d-f-m))';
    if (line === 'G') return 'hsl(var(--line-g))';
    if (['J', 'Z'].includes(line)) return 'hsl(var(--line-j-z))';
    if (line === 'L') return 'hsl(var(--line-l))';
    if (['N', 'Q', 'R', 'W'].includes(line)) return 'hsl(var(--line-n-q-r-w))';
    return 'hsl(var(--line-s))';
  };

  return (
    <div className="w-full h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground p-6 shadow-lg">
        <h1 className="text-4xl font-bold">New York City Subway Map</h1>
        <p className="text-primary-foreground/80 mt-2">Click on any station to view details</p>
      </header>

      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 overflow-auto bg-muted/30 p-8">
          <svg
            viewBox="0 0 900 700"
            className="w-full h-full"
            style={{ minWidth: '900px', minHeight: '700px' }}
          >
            {/* Route Lines */}
            {/* 1/2/3 Line */}
            <SubwayLine
              points={[
                { x: 400, y: 150 },
                { x: 400, y: 300 },
                { x: 400, y: 350 },
                { x: 400, y: 450 },
                { x: 400, y: 550 },
                { x: 400, y: 650 },
              ]}
              color="hsl(var(--line-1-2-3))"
            />

            {/* 4/5/6 Line */}
            <SubwayLine
              points={[
                { x: 500, y: 150 },
                { x: 500, y: 300 },
                { x: 500, y: 450 },
                { x: 500, y: 550 },
                { x: 500, y: 650 },
              ]}
              color="hsl(var(--line-4-5-6))"
            />

            {/* 7 Line */}
            <SubwayLine
              points={[
                { x: 700, y: 200 },
                { x: 600, y: 250 },
                { x: 500, y: 300 },
                { x: 400, y: 300 },
              ]}
              color="hsl(var(--line-7))"
            />

            {/* A/C/E Line */}
            <SubwayLine
              points={[
                { x: 350, y: 150 },
                { x: 350, y: 250 },
                { x: 400, y: 350 },
                { x: 400, y: 500 },
                { x: 450, y: 570 },
              ]}
              color="hsl(var(--line-a-c-e))"
            />

            {/* L Line */}
            <SubwayLine
              points={[
                { x: 300, y: 450 },
                { x: 380, y: 450 },
                { x: 400, y: 450 },
                { x: 500, y: 450 },
                { x: 550, y: 480 },
                { x: 650, y: 480 },
              ]}
              color="hsl(var(--line-l))"
            />

            {/* N/Q/R/W Line */}
            <SubwayLine
              points={[
                { x: 600, y: 250 },
                { x: 500, y: 300 },
                { x: 420, y: 350 },
                { x: 450, y: 520 },
              ]}
              color="hsl(var(--line-n-q-r-w))"
            />

            {/* Stations */}
            {stations.map((station) => (
              <g
                key={station.id}
                onClick={() => setSelectedStation(station)}
                className="cursor-pointer transition-transform hover:scale-110"
              >
                <circle
                  cx={station.x}
                  cy={station.y}
                  r="8"
                  fill="white"
                  stroke={getLineColor(station.lines[0])}
                  strokeWidth="3"
                  className="drop-shadow-md"
                />
                {station.lines.length > 1 && (
                  <circle
                    cx={station.x}
                    cy={station.y}
                    r="12"
                    fill="none"
                    stroke={getLineColor(station.lines[1])}
                    strokeWidth="2"
                    opacity="0.6"
                  />
                )}
                <text
                  x={station.x + 15}
                  y={station.y + 5}
                  fontSize="12"
                  fontWeight="600"
                  fill="hsl(var(--foreground))"
                  className="pointer-events-none select-none"
                >
                  {station.name}
                </text>
              </g>
            ))}
          </svg>
        </div>

        <aside className="w-80 bg-card border-l border-border p-6 overflow-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4">Legend</h2>
          
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-1 rounded" style={{ backgroundColor: 'hsl(var(--line-1-2-3))' }} />
              <span className="text-sm font-medium">1 2 3 - Broadway-7th Ave</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-1 rounded" style={{ backgroundColor: 'hsl(var(--line-4-5-6))' }} />
              <span className="text-sm font-medium">4 5 6 - Lexington Ave</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-1 rounded" style={{ backgroundColor: 'hsl(var(--line-7))' }} />
              <span className="text-sm font-medium">7 - Flushing</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-1 rounded" style={{ backgroundColor: 'hsl(var(--line-a-c-e))' }} />
              <span className="text-sm font-medium">A C E - 8th Ave</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-1 rounded" style={{ backgroundColor: 'hsl(var(--line-b-d-f-m))' }} />
              <span className="text-sm font-medium">B D F M - 6th Ave</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-1 rounded" style={{ backgroundColor: 'hsl(var(--line-l))' }} />
              <span className="text-sm font-medium">L - 14th St-Canarsie</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-1 rounded" style={{ backgroundColor: 'hsl(var(--line-n-q-r-w))' }} />
              <span className="text-sm font-medium">N Q R W - Broadway</span>
            </div>
          </div>

          {selectedStation && <StationInfo station={selectedStation} getLineColor={getLineColor} />}
        </aside>
      </div>
    </div>
  );
}