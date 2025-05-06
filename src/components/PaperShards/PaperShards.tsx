import { component$, useTask$ ,useStore } from '@builder.io/qwik';

interface Shard{
  path:string;
  transform: string;
  fill:string;
}

export interface PaperShardsProps {
  class?:string;
  count:number;
  minSize:number;
  maxSize:number;
}



export const PaperShards = component$<PaperShardsProps>(({count=3,minSize=20,maxSize=80}) => {

  const store= useStore<{shards:Shard[]}>({ shards: []});

  //Server-size generation task
  useTask$(({track})=>{track(()=>count);
    
  //Only run on server
  if(typeof document !== 'undefined') return;

  const generateShard = (): Shard=>{
    const size = Math.random()*(maxSize - minSize)+minSize;
    const x = Math.random() * (100-size);
    const y = Math.random() * (100-size);
  }

  });

  return (
    <div class={``}>
      PaperShards component works!
    </div>
  );
});
