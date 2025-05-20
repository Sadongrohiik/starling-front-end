import { component$, useStore, $ , useSignal} from "@builder.io/qwik";
import Shard1 from "~/assets/shards/shard_1.svg?jsx";
import Shard2 from "~/assets/shards/shard_2.svg?jsx";
import Shard3 from "~/assets/shards/shard_3.svg?jsx";

export interface ShardbgProps {
  class?: string;
  style?: string;
  maxHeight?:number;
}

export const Shardbg = component$<ShardbgProps>((props) => {
  const state = useStore({ scrollY: 0 });
  const maxHeight = useSignal(0);
  const tranlateZ = 0.1;
  const handleScroll = $(() => {
    //change this to usevisibletask
    state.scrollY = window.scrollY;
    if(props.maxHeight)
      maxHeight.value = props.maxHeight;
    
  });
  return (
    <div
      class="pointer-none absolute top-60 flex max-w-full items-start justify-center overflow-hidden"
      style={`height: ${maxHeight.value}px`}
    >
      <div
        class={
          "shard-bg grid max-w-3/4 grid-cols-6 grid-rows-4 perspective-midrange " +
          props.class
        }
        style={`transform: translateY(${state.scrollY * 0.6}px) `}
      >
        <div
          class="col-end-6 row-start-1 flex w-full"
          style={`transform: translateZ(${state.scrollY * tranlateZ}px) rotateX(${state.scrollY * -0.03}deg) rotateY(10deg);
`}
        >
          <Shard1 />
        </div>
        <div
          class="col-end-2 row-start-2 flex w-full"
          style={`transform: translateZ(${state.scrollY * tranlateZ * -1}px) translateY(-150px) rotateX(${state.scrollY * -0.04}deg`}
        >
          <Shard2 />
        </div>
        <div
          class="col-span-3 col-start-4 row-end-4 flex w-full"
          style={`transform: translateX(${state.scrollY * tranlateZ * 0.5}px) rotateX(${20 + state.scrollY * -0.02}deg`}
        >
          <Shard3 />
        </div>
        <div window:onScroll$={handleScroll}></div>
      </div>
    </div>
  );
});
