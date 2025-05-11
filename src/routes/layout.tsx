import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { Footer } from "~/components/Footer/Footer";
import Logo from "~/assets/logo.svg?jsx";


export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <>
          <a href="/">
        <Logo class="absolute top-5 left-5 md:top-6 md:left-6 lg:top-10 lg:left-11 h-14 w-14 md:h-24 md:min-w-22 lg:h-34 lg:min-w-28 z-50" />
      </a>
    <div class="p-6 md:p-6 lg:p-10 bg-retro-white">
      <Slot />
      </div>
      <Footer />
    </>
  );
});
