import {
  component$,
  useStore,
  useContext,
  useContextProvider,
  createContextId,
} from "@builder.io/qwik";
import { HiMagnifyingGlassSolid, HiXMarkSolid } from "@qwikest/icons/heroicons";

export const CTX = createContextId<{ visible: boolean }>("false");

export interface SearchProps {
  class?: string;
}

interface SearchOverlayProps {
  class?: string;
  categories?: string[];
  isOpen: boolean;
}

export const Search = component$<SearchProps>((props) => {
  const overlay = useStore({ visible: false });
  useContextProvider(CTX, overlay);
  

  return (
    <div class={` ${props.class}`}>
      <button
      name="menu"
        class="cursor-pointer transition-all hover:opacity-60"
        onClick$={() => {
          overlay.visible = true;
          document.body.classList.add('overflow-hidden');
        }}
      >
        <HiMagnifyingGlassSolid class="text-3xl" />
      </button>
      <SearchOverlay
        isOpen={overlay.visible}
        class={
          overlay.visible ? "visible opacity-100 top-0" : "invisible opacity-0 top-10"
        }
      />
    </div>
  );
});

const SearchOverlay = component$<SearchOverlayProps>((props) => {
  const overlay = useContext(CTX);
  return (
    <div
      class={`fixed left-0 z-10 flex h-full w-full flex-col items-center bg-white p-6 lg:p-15 transition-all ${props.class}`}
    >
      <button
        onClick$={() => {
          overlay.visible = false;
          document.body.classList.remove('overflow-hidden');
        }}
        class={`search-close-button absolute top-3 right-3 md:top-6 md:right-6 lg:top-13 lg:right-11 cursor-pointer bg-white transition-all hover:bg-gray-100`}
      >
        <HiXMarkSolid class="text-4xl lg:text-5xl" />
      </button>
      <div class="search-content h-full w-full md:w-1/2">
        <div class="h-4/10 w-full">
          <h3 class="md: text-[24px] lg:text-[26px] invisible md:visible">Search</h3>
        </div>
        <div class="search-box flex w-full flex-row border-b-1 border-b-gray-300 pb-4">
          <input
            class="search-bar flex-1 text-[26px] outline-none placeholder:text-gray-300 focus:border-transparent focus:ring-0"
            type="text"
            name="search-bar"
            id="search-var"
            placeholder="Search for. . ."
          />
          <HiMagnifyingGlassSolid class="text-4xl ml-auto visible md:invisible lg:visible min-w-12" />
        </div>
      </div>
    </div>
  );
});
