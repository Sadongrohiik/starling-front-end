import { component$ } from '@builder.io/qwik';
import Shard1 from "~/assets/shards/shard_1.svg?jsx";
import Shard2 from "~/assets/shards/shard_2.svg?jsx";
import Shard3 from "~/assets/shards/shard_3.svg?jsx";


export interface ShardbgProps {
  class?: string;
  style? :string;
}

export const Shardbg = component$<ShardbgProps>((props) => {

  return (
   <div class={"absolute max-w-full h-[clamp(300px, 100vw, 2000px)] top-80 grid grid-cols-6 grid-rows-4  " + props.class} style={props.style}>
    <div class="flex w-full row-start-1 col-end-6">
    <Shard1/>
    </div>
    <div class="flex w-full row-start-2 col-end-2">
    <Shard2/>
    </div>
    <div class="flex w-full row-end-4 col-start-4 col-span-3">
    <Shard3/>
    </div>

   </div>
  )
});