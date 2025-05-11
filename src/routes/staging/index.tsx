import { component$ } from '@builder.io/qwik';
import { SLogoFlat } from '~/components/Branding/SLogoFlat';

export default component$(() => {
  return (
    <div class="bg-gradient-to-r from-digitalInk to-digitalInkDark">
      {/* <PaperShards count={3} minSize={30} maxSize={60} width={1080} height={1200}/> */}
      <SLogoFlat class=" "/>
    </div>
  );
});
