import { component$ } from '@builder.io/qwik';

export interface FooterProps {
  class?:string;
}

export const Footer = component$<FooterProps>((props) => {
  return (
    <div class={` ${props.class}`}>
      Footer component works!
    </div>
  );
});
