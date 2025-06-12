import {
  component$,
  useStore,
  useContext,
  useContextProvider,
  createContextId,
  useSignal,
  $,
} from "@builder.io/qwik";
import { HiMagnifyingGlassSolid, HiXMarkSolid } from "@qwikest/icons/heroicons";
import { searchMeili, type Work } from "~/routes/api/search";

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
          document.body.classList.add("overflow-hidden");
        }}
      >
        <HiMagnifyingGlassSolid class="text-3xl" />
      </button>
      <SearchOverlay
        isOpen={overlay.visible}
        class={
          overlay.visible
            ? "visible top-0 opacity-100"
            : "invisible top-10 opacity-0"
        }
      />
    </div>
  );
});

const SearchOverlay = component$<SearchOverlayProps>((props) => {
  const overlay = useContext(CTX);
  const searchQuery = useSignal('');
  const searchResults = useStore<{ hits: Work[]; isLoading: boolean }>({
    hits: [],
    isLoading: false,
  });
  const debounceTimer = useSignal<number>();

  const performSearch = $(async (query: string) => {
    if (query.length < 2) {
      searchResults.hits = [];
      return;
    }
    searchResults.isLoading = true;
    const results = await searchMeili(query);
    searchResults.hits = results.hits;
    searchResults.isLoading = false;
  });
  return (
    <div
      class={`fixed left-0 z-10 flex h-full w-full flex-col items-center bg-white p-6 transition-all lg:p-15 ${props.class}`}
    >
      <button
        onClick$={() => {
          overlay.visible = false;
          document.body.classList.remove("overflow-hidden");
        }}
        class={`search-close-button absolute top-3 right-3 cursor-pointer bg-white transition-all hover:bg-gray-100 md:top-6 md:right-6 lg:top-13 lg:right-11`}
      >
        <HiXMarkSolid class="text-4xl lg:text-5xl" />
      </button>
      <div class="search-content h-full w-full md:w-1/2">
        <div class="h-4/10 w-full">
          <h3 class="md: invisible text-[24px] md:visible lg:text-[26px]">
            Search
          </h3>
        </div>
        <div class="search-box flex w-full flex-row border-b-1 border-b-gray-300 pb-4">
          <input
            class="search-bar flex-1 text-[26px] outline-none placeholder:text-gray-300 focus:border-transparent focus:ring-0"
            type="text"
            name="search-bar"
            id="search-var"
            placeholder="Search for. . ."
            value={searchQuery.value}
            // This onInput$ handler includes debouncing
            onInput$={(e) => {
              const query = (e.target as HTMLInputElement).value;
              searchQuery.value = query;

              // Debounce the search request by 300ms
              clearTimeout(debounceTimer.value);
              debounceTimer.value = setTimeout(() => {
                performSearch(query);
              }, 300) as unknown as number; // Cast for Node/Browser timeout type difference
            }}
          />
          <HiMagnifyingGlassSolid class="visible ml-auto min-w-12 text-4xl md:invisible lg:visible" />
        </div>
              <ul class="results-list">
        {searchResults.isLoading && <div class="loading">Searching...</div>}

        {!searchResults.isLoading && searchResults.hits.length === 0 && searchQuery.value.length > 1 && (
          <div class="no-results">No results found for "{searchQuery.value}"</div>
        )}

        {!searchResults.isLoading && searchResults.hits.map((hit) => (
          <li key={hit.id} class="result-item">
            {/* Use dangerouslySetInnerHTML to render the highlighted title */}
            <h3 dangerouslySetInnerHTML={hit._formatted?.title || hit.title} />
            <img src={hit._formatted?.thumbnail || hit.thumbnail}/>
          </li>
        ))}
      </ul>

      </div>
    </div>
  );
});
