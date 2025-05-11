import { component$, useSignal } from "@builder.io/qwik";
import {
  HiBars3BottomLeftSolid,
  HiXMarkSolid,
  HiArrowRightSolid,
} from "@qwikest/icons/heroicons";
export interface HamburgerMenuProps {
  links: { text: string; href: string }[];
  socialLinks: { text: string; href: string }[];
  copyrightText: string;
  class?: string;
}

export const HamburgerMenu = component$<HamburgerMenuProps>((props) => {
  const isOpen = useSignal(false);
  const isOverlayOpen = useSignal(false);
  return (
    <div class={` ${props.class}`}>
      <button
        class="cursor-pointer transition-all hover:opacity-60"
        onClick$={() => {
          isOpen.value = !isOpen.value;
          isOverlayOpen.value = !isOverlayOpen.value;
          document.body.classList.add("overflow-hidden");
        }}
      >
        <HiBars3BottomLeftSolid class="text-3xl" />
      </button>
      <div
        class={`bg-retro-white fixed left-0 z-10 grid h-full w-full grid-cols-19 grid-rows-6 items-center p-6 transition-all lg:p-15 ${isOverlayOpen.value ? "visible top-0 opacity-100" : "invisible top-10 opacity-0"}`}
      >
        <button
          onClick$={() => {
            isOverlayOpen.value = false;
            document.body.classList.remove("overflow-hidden");
          }}
          class="text-crt-black bg-retro-white absolute top-3 right-3 cursor-pointer transition-all hover:bg-gray-100 md:top-6 md:right-6 lg:top-13 lg:right-11"
        >
          <HiXMarkSolid class="text-4xl lg:text-5xl" />
        </button>
        <div class="text-digitalInk hover:text-digitalInkDark col-start-0 mt-30 md:mt-0 flex h-full flex-col items-start justify-center md:col-start-10 row-start-3">
          <ul class="space-y-8">
            {props.links.map((link) => (
              <li key={link.href} class="group relative">
                <a
                  href={link.href}
                  class="flex items-start text-5xl transition-all duration-300 group-hover:pl-8 md:text-5xl lg:text-6xl"
                >
                  <div class="group- flex w-0 items-center overflow-hidden transition-all duration-300 group-hover:w-20">
                    <HiArrowRightSolid class="-translate-x-full transform transition-transform duration-400 group-hover:translate-x-0" />
                  </div>
                  <div class="group- flex w-0 items-center overflow-hidden transition-all duration-300 group-hover:w-20">
                    <HiArrowRightSolid class="-translate-x-full transform transition-transform duration-300 group-hover:translate-x-0" />
                  </div>

                  <span class="ml-2">{link.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div class="copyright mt-3 font-fraktion font-light col-span-4 col-start-0 row-end-8 text-xl md:text-2xl justify-center">
          {props.copyrightText}
        </div>
        <div class="social ml-3 col-span-7 col-start-19 mb-3 md:mb-0 md:col-start-10 row-end-8 items-center justify-center">
          <ul class="flex flex-col md:flex-row justify-between items-end w-full">
            {props.socialLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}

                  class=" hover:opacity-80 text-xl lg:text-2xl transition-all"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
});
