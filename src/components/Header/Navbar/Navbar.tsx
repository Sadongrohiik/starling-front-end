import { component$ } from '@builder.io/qwik';

export interface NavbarProps {
  links:{text:string, href:string}[];
  class?: string;
}

export const Navbar = component$<NavbarProps>((props) => {
  return (
    <div class={`flex flex-row ${props.class}`}>
      {props.links.map((item) =>
        <a class="mr-10  " key={item.text} href={item.href}>{item.text}</a>
      )}
    </div>
  );
});
