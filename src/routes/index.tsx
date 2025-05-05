import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Portfolio } from "~/components/Portfolio/Portfolio";
import { Header } from "~/components/Header";
// import { FramerTest } from "~/integrations/react/FramerTest";

const mockPosts = [{
  id:1,
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
  id:2,
  title: "FITC LOGO",
  slug: "fitc-logo-2",
  category: "Work",
  short_description: "Alien fuck off, suck off. No alien. Alient alert!.",
  thumbnail: "x.png",
  thumbnail_width: 1920,
  thumbnail_height: 1080,
  thumbnail_alt: "weird image",
},{
  id:3,
  title: "FITC LOGO",
  slug: "fitc-logo-3",
  category: "Work",
  short_description: "Alien fuck off, suck off. No alien. Alient alert!.",
  thumbnail: "x.png",
  thumbnail_width: 1920,
  thumbnail_height: 1080,
  thumbnail_alt: "weird image",
},{
  id:4,
  title: "FITC LOGO",
  slug: "fitc-logo-4",
  category: "Work",
  short_description: "Alien fuck off, suck off. No alien. Alient alert!.",
  thumbnail: "x.png",
  thumbnail_width: 1920,
  thumbnail_height: 1080,
  thumbnail_alt: "weird image",
},{
  id:5,
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
  id:6,
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
  id:7,
  title: "FITC LOGO",
  slug: "fitc-logo-7",
  category: "Work",
  short_description: "Alien fuck off, suck off. No alien. Alient alert!.",
  thumbnail: "x.png",
  thumbnail_width: 1920,
  thumbnail_height: 1080,
  thumbnail_alt: "weird image",
},{
  id:8,
  title: "FITC LOGO",
  slug: "fitc-logo-8",
  category: "Work",
  short_description: "Alien fuck off, suck off. No alien. Alient alert!.",
  thumbnail: "x.png",
  thumbnail_width: 1920,
  thumbnail_height: 1080,
  thumbnail_alt: "weird image",
},{
  id:9,
  title: "FITC LOGO",
  slug: "fitc-logo-9",
  category: "Work",
  short_description: "Alien fuck off, suck off. No alien. Alient alert!.",
  thumbnail: "x.png",
  thumbnail_width: 1920,
  thumbnail_height: 1080,
  thumbnail_alt: "weird image",
},{
  id:10,
  title: "FITC LOGO",
  slug: "fitc-logo-10",
  category: "Work",
  short_description: "Alien fuck off, suck off. No alien. Alient alert!.",
  thumbnail: "x.png",
  thumbnail_width: 1920,
  thumbnail_height: 1080,
  thumbnail_alt: "weird image",
},

];

export default component$(() => {
  return (
    <>
      <div class="flex-col mx-auto max-w-screen-3xl ">
        {/* <FramerTest client:idle /> */}
        <Header class="mb-30"/>
        <Portfolio items={mockPosts}
        />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
