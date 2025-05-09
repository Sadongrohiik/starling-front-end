import { component$ } from '@builder.io/qwik';
import { PaperShards } from '~/components/PaperShards/PaperShards';

export default component$(() => {
  return (
    <div>
      <PaperShards count={3} minSize={30} maxSize={60} width={1080} height={1200}/>
    </div>
  );
});
