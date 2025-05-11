import { component$, useStore, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Portfolio } from "~/components/Portfolio/Portfolio";
import { Header } from "~/components/Header";
import { Shardbg } from "~/components/PaperShards/Shardbg";

// import { FramerTest } from "~/integrations/react/FramerTest";

const mockPosts = [
  {
    id: 1,
    title: "FITC LOGO",
    slug: "fitc-logo-1",
    category: "Work",
    short_description: "Alien fuck off, suck off. No alien. Alient alert!.",
    thumbnail: "x.png",
    thumbnail_width: 1920,
    thumbnail_height: 1080,
    thumbnail_alt: "weird image",
  },
  {
    id: 2,
    title: "FITC LOGO",
    slug: "fitc-logo-2",
    category: "Work",
    short_description: "Alien fuck off, suck off. No alien. Alient alert!.",
    thumbnail: "x.png",
    thumbnail_width: 1920,
    thumbnail_height: 1080,
    thumbnail_alt: "weird image",
  },
  {
    id: 3,
    title: "FITC LOGO",
    slug: "fitc-logo-3",
    category: "Work",
    short_description: "Alien fuck off, suck off. No alien. Alient alert!.",
    thumbnail: "x.png",
    thumbnail_width: 1920,
    thumbnail_height: 1080,
    thumbnail_alt: "weird image",
  },
  {
    id: 4,
    title: "FITC LOGO",
    slug: "fitc-logo-4",
    category: "Work",
    short_description: "Alien fuck off, suck off. No alien. Alient alert!.",
    thumbnail: "x.png",
    thumbnail_width: 1920,
    thumbnail_height: 1080,
    thumbnail_alt: "weird image",
  },
  {
    id: 5,
    title: "FITC LOGO",
    slug: "fitc-logo-5",
    category: "Work",
    short_description: "Alien fuck off, suck off. No alien. Alient alert!.",
    thumbnail: "x.png",
    thumbnail_width: 1920,
    thumbnail_height: 1080,
    thumbnail_alt: "weird image",
  },
  {
    id: 6,
    title: "FITC LOGO",
    slug: "fitc-logo-6",
    category: "Work",
    short_description: "Alien fuck off, suck off. No alien. Alient alert!.",
    thumbnail: "x.png",
    thumbnail_width: 1920,
    thumbnail_height: 1080,
    thumbnail_alt: "weird image",
  },
  {
    id: 7,
    title: "FITC LOGO",
    slug: "fitc-logo-7",
    category: "Work",
    short_description: "Alien fuck off, suck off. No alien. Alient alert!.",
    thumbnail: "x.png",
    thumbnail_width: 1920,
    thumbnail_height: 1080,
    thumbnail_alt: "weird image",
  },
  {
    id: 8,
    title: "FITC LOGO",
    slug: "fitc-logo-8",
    category: "Work",
    short_description: "Alien fuck off, suck off. No alien. Alient alert!.",
    thumbnail: "x.png",
    thumbnail_width: 1920,
    thumbnail_height: 1080,
    thumbnail_alt: "weird image",
  },
  {
    id: 9,
    title: "FITC LOGO",
    slug: "fitc-logo-9",
    category: "Work",
    short_description: "Alien fuck off, suck off. No alien. Alient alert!.",
    thumbnail: "x.png",
    thumbnail_width: 1920,
    thumbnail_height: 1080,
    thumbnail_alt: "weird image",
  },
  {
    id: 10,
    title: "FITC Type",
    slug: "fitc-logo-10",
    category: "Work",
    short_description: "Alien fuck off, suck off. No alien. Alient alert!.",
    thumbnail: "x.mp4",
    isVideo: true,
    thumbnail_width: 1920,
    thumbnail_height: 1080,
    thumbnail_alt: "weird image",
  },
];

export default component$(() => {
  const state = useStore({scrollY:0});

  const handleScroll= $(()=>{ //change this to usevisibletask
    state.scrollY = window.scrollY;
  })

  return (
    <>
      <div class="max-w-screen z-10 mx-auto flex-col overflow-hidden ">
        {/* <FramerTest client:idle /> */}
        <Header class="mb-40 z-20 relative" />
        <Portfolio items={mockPosts} class="z-10 relative" />
        <Shardbg class="z-0" style={ `transform: translateY(${state.scrollY * 0.6}px)` }
        />
      </div>
      <div window:onScroll$={handleScroll}></div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Starling— One of a kind creative development collective.",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
