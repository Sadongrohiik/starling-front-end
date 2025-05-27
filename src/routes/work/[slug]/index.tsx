import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { Header } from '~/components/Header';
import { CategoryLinks } from '~/components/Work/CategoryLinks';
import { Works } from '~/components/Work/Works';

export default component$(() => {
  const location=useLocation();
  return (
    <div>
      <Header class="relative z-20"/>
      <CategoryLinks/>
      <Works category={location.params.slug} />
    </div>
  );
});
