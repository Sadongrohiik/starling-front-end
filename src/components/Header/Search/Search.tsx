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
          overlay.visible ? "visible opacity-100" : "invisible opacity-0"
        }
      />
    </div>
  );
});

const SearchOverlay = component$<SearchOverlayProps>((props) => {
  const overlay = useContext(CTX);
  return (
    <div
      class={`fixed top-0 left-0 z-10 flex h-full w-full flex-col items-center bg-white p-4 md:p-15 transition-all ${props.class}`}
    >
      <button
        onClick$={() => {
          overlay.visible = false;
          document.body.classList.remove('overflow-hidden');
        }}
        class={`search-close-button absolute top-4 right-4 md:top-15 md:right-15 cursor-pointer bg-white transition-all hover:bg-gray-100`}
      >
        <HiXMarkSolid class="text-3xl md:text-5xl" />
      </button>
      <div class="search-content h-full w-full md:w-1/2">
        <div class="h-2/5 w-full">
          <h3 class="text-[26px] invisible md:visible">Search</h3>
        </div>
        <div class="search-box flex w-full flex-row border-b-1 border-b-gray-300 pb-4">
          <input
            class="search-bar flex-1 text-[26px] outline-none placeholder:text-gray-300 focus:border-transparent focus:ring-0"
            type="text"
            name="search-bar"
            id="search-var"
            placeholder="Search for. . ."
          />
          <HiMagnifyingGlassSolid class="text-4xl ml-auto invisible md:visible min-w-12" />
        </div>
      </div>
    </div>
  );
});
