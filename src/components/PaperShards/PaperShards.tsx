import { component$, useTask$, useStore } from "@builder.io/qwik";

interface Shard {
  path: string;
  transform: string;
  fill: string;
  x: number;
  y: number;
  size: number;
}

export interface PaperShardsProps {
  class?: string;
  count: number;
  minSize: number;
  maxSize: number;
  width?: number;
  height?: number;
  collisionPadding?: number;
}

export const PaperShards = component$<PaperShardsProps>(
  ({
    count = 3,
    minSize = 20,
    maxSize = 80,
    width = 100,
    height = 100,
    collisionPadding = 5,
  }) => {
    const store = useStore<{ shards: Shard[] }>({ shards: [] });

    //Server-size generation task
    useTask$(
      ({ track }) => {
        track(() => count);

        //Only run on server
        if (typeof document !== "undefined") return;

        const generateShard = (attempt = 0): Shard | null => {
          const size = Math.random() * (maxSize - minSize) + minSize;
          const halfSize = size / 2;
          const x = Math.random() * (100 - size) + halfSize;
          const y = Math.random() * (100 - size) + halfSize;
          const rotation = Math.random() * 360;
          const hue = Math.floor(Math.random() * 360);

          //generate triangle points
          const point1 = `${Math.random() * size},${Math.random() * size}`;
          const point2 = `${Math.random() * size},${Math.random() * size}`;
          const point3 = `${Math.random() * size},${Math.random() * size}`;

          const collision = store.shards.some((existing) => {
            const distance = Math.sqrt(
              Math.pow(existing.x - y, 2) + Math.pow(existing.y - y, 2),
            );
            const minDistance = existing.size / 2 + size / 2 + collisionPadding;
            return distance < minDistance;
          });
          if (collision && attempt < 100) {
            return generateShard(attempt + 1);
          }

          return {
            path: `M ${point1} L ${point2} L ${point3} Z`,
            transform: `translate(${x - halfSize}, ${y - halfSize}) rotate(${rotation} ${halfSize} ${halfSize})`,
            fill: `hsl(${hue}, 70%, 85%)`,
            x,
            y,
            size
          };
        };

        const shards: Shard[] =[];
        for (let i=0; i<count; i++){
          const shard = generateShard();
          if(shard) shards.push(shard);
        }
        //Generate and store shards
        store.shards = shards;
      },
      { eagerness: "load" },
    );

    return (
      <svg
        viewBox="0 0 100 100"
        class="h-full w-full"
        preserveAspectRatio="none"
      >
        {store.shards.map((shard, i) => (
          <path
            key={`shard-${i}`}
            d={shard.path}
            transform={shard.transform}
            fill={shard.fill}
          />
        ))}
      </svg>
    );
  },
);
