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
const socialLinks = [
  { text: "Instagram", href: "https://www.instagram.com/" },
  { text: "Dribbble", href: "https://dribbble.com/StarlingStudio" },
  { text: "Vimeo", href: "https://vimeo.com/" },
  { text: "GitHub", href: "https://GitHub.com/" },
];

const contacts = [
  { city: "Tehran", email: "tehran@starlingcc.net", phone: "+98 21 444 4544" },
  { city: "Ottawa", email: "ottawa@starlingcc.net", phone: "+98 21 245 4544" },
  { city: "Berlin", email: "berlin@starlingcc.net", phone: "+98 21 225 4544" },
];

const copyright = "© 2025 STARLING";
export default component$(() => {
  return (
    <>
      <a href="/">
        <Logo class="absolute top-5 left-5 z-50 h-14 w-14 md:top-6 md:left-6 md:h-24 md:min-w-22 lg:top-10 lg:left-11 lg:h-34 lg:min-w-28" />
      </a>
      <div class="bg-white p-6 md:p-6 lg:p-10">
        <Slot />
      </div>
      <Footer
    class="relative z-10"
        socialLinks={socialLinks}
        copyrightText={copyright}
        contactList={contacts}
      />
    </>
  );
});
