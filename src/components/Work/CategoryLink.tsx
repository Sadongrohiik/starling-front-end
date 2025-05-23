import { component$ } from '@builder.io/qwik';

export interface CategoryLinkProps {
  class?: string;
  label: string;
  slug: string;
  isActive: boolean;
}

export const CategoryLink = component$<CategoryLinkProps>((props) => {
  return (
       <a class={`hover:opacity-50 transition-all ${props.class}`} href={"/category/" + props.slug}> {props.label}</a>
  
  );
});
