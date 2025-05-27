import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { Header } from '~/components/Header';
import { Works } from '~/components/Work/Works';

export default component$(() => {
  const location=useLocation();
  return (
    <div class="">
      <Header class="relative z-20"/>
      <Works category={location.params.slug} />
    </div>
  );
});
