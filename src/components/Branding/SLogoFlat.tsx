import { component$ } from '@builder.io/qwik';
import LogoFlat from "~/assets/logo-flat.svg?jsx";

export interface LogoFlatProps {
  class?: string;
}

export const SLogoFlat = component$<LogoFlatProps>((props) => {

  return (
   <LogoFlat class={props.class}/>
  )
});