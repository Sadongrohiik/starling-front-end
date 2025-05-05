import { component$, useSignal } from '@builder.io/qwik';
import {HiBars3BottomLeftSolid} from '@qwikest/icons/heroicons'
export interface HamburgerMenuProps {
  links:{text:string, href:string}[];
  class?: string;
}

export const HamburgerMenu = component$<HamburgerMenuProps>((props) => {
  const isOpen=useSignal(false);
  return (
    <div class={` ${props.class}`}>
      <button class=" cursor-pointer hover:opacity-60 transition-all" onClick$={()=>{isOpen.value=!isOpen.value;}}>
      <HiBars3BottomLeftSolid class="text-2xl"/>
      </button>
    </div>
  );
});
