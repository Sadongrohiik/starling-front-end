import {
  component$,
  useTask$,
  useSignal,
  Resource,
  useResource$,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Portfolio } from "~/components/Portfolio/Portfolio";
import { Header } from "~/components/Header";
import { Shardbg } from "~/components/PaperShards/Shardbg";
import { HiArrowUpRightSolid } from "@qwikest/icons/heroicons";

// import { FramerTest } from "~/integrations/react/FramerTest";

// const mockPosts = [
//   {
//     id: 1,
//     title: "FITC LOGO",
//     slug: "fitc-logo-1",
//     category: "Work",
//     short_description: "Alien fuck off, suck off. No alien. Alient alert!.",
//     thumbnail: "x.png",
//     thumbnail_width: 200,
//     thumbnail_height: 300,
//     thumbnail_alt: "weird image",
//   },
//   {
//     id: 2,
//     title: "FITC LOGO",
//     slug: "fitc-logo-2",
//     category: "Work",
//     short_description: "Alien fuck off, suck off. No alien. Alient alert!.",
//     thumbnail: "x.png",
//     thumbnail_width: 1920,
//     thumbnail_height: 1080,
//     thumbnail_alt: "weird image",
//   },
//   {
//     id: 3,
//     title: "FITC LOGO",
//     slug: "fitc-logo-3",
//     category: "Work",
//     short_description: "Alien fuck off, suck off. No alien. Alient alert!.",
//     thumbnail: "x.png",
//     thumbnail_width: 1920,
//     thumbnail_height: 1080,
//     thumbnail_alt: "weird image",
//   },
//   {
//     id: 4,
//     title: "FITC LOGO",
//     slug: "fitc-logo-4",
//     category: "Work",
//     short_description: "Alien fuck off, suck off. No alien. Alient alert!.",
//     thumbnail: "x.png",
//     thumbnail_width: 1920,
//     thumbnail_height: 1080,
//     thumbnail_alt: "weird image",
//   },
//   {
//     id: 5,
//     title: "FITC LOGO",
//     slug: "fitc-logo-5",
//     category: "Work",
//     short_description: "Alien fuck off, suck off. No alien. Alient alert!.",
//     thumbnail: "x.png",
//     thumbnail_width: 1920,
//     thumbnail_height: 1080,
//     thumbnail_alt: "weird image",
//   },
//   {
//     id: 6,
//     title: "FITC LOGO",
//     slug: "fitc-logo-6",
//     category: "Work",
//     short_description: "Alien fuck off, suck off. No alien. Alient alert!.",
//     thumbnail: "x.png",
//     thumbnail_width: 1920,
//     thumbnail_height: 1080,
//     thumbnail_alt: "weird image",
//   },
//   {
//     id: 7,
//     title: "FITC LOGO",
//     slug: "fitc-logo-7",
//     category: "Work",
//     short_description: "Alien fuck off, suck off. No alien. Alient alert!.",
//     thumbnail: "x.png",
//     thumbnail_width: 1920,
//     thumbnail_height: 1080,
//     thumbnail_alt: "weird image",
//   },
//   {
//     id: 8,
//     title: "FITC LOGO",
//     slug: "fitc-logo-8",
//     category: "Work",
//     short_description: "Alien fuck off, suck off. No alien. Alient alert!.",
//     thumbnail: "x.png",
//     thumbnail_width: 1920,
//     thumbnail_height: 1080,
//     thumbnail_alt: "weird image",
//   },
//   {
//     id: 9,
//     title: "FITC LOGO",
//     slug: "fitc-logo-9",
//     category: "Work",
//     short_description: "Alien fuck off, suck off. No alien. Alient alert!.",
//     thumbnail: "x.png",
//     thumbnail_width: 1920,
//     thumbnail_height: 1080,
//     thumbnail_alt: "weird image",
//   },
//   {
//     id: 10,
//     title: "FITC Type",
//     slug: "fitc-logo-10",
//     category: "Work",
//     short_description: "Alien fuck off, suck off. No alien. Alient alert!.",
//     thumbnail: "x.mp4",
//     isVideo: true,
//     thumbnail_width: 1920,
//     thumbnail_height: 1080,
//     thumbnail_alt: "weird image",
//   },
// ];

const tagline = { l1: "Radical Creativity—", l2: "Supercharged Technology." };
const aboutText = `Starling is a global creative collective that creates innovative
brands, builds disruptive experiences, and solves unique challenges
            through art, design, and cutting-edge technology.`;


export default component$(() => {
  const height = useSignal(0);
  const divRef = useSignal<HTMLElement>();
  const worksResource = useResource$<any[]>(async () => {
    const response = await fetch("http://localhost:3000/api/works");
    const data = await response.json();
    // console.log(data.docs);

    return data.docs.map((item: any) => ({
      id: item.id,
      title: item.title,
      slug: item.slug,
      category: item.categories[0].title,
      short_description: item.shortDescription,
      thumbnail:
        item.heroMedia.type === "video"
          ? "http://localhost:3000" + item.heroMedia.video?.url
          : "http://localhost:3000" + item.heroMedia.image?.url,
      thumbnail_width: item.heroMedia.image?.width || 1920,
      thumbnail_height: item.heroMedia.image?.height || 1080,
      thumbnail_alt: item.thumbnail_alt,
      isVideo: item.heroMedia.type === "video" || false, // Assuming isVideo is optional
    }));
  });

  useTask$(async () => {
    if (divRef.value) {
      const rect = divRef.value.clientHeight;
      height.value = rect;
    }
  });

  return (
    <>
      <div
        class="main-container z-10 mx-auto max-w-screen flex-col overflow-hidden"
        ref={divRef}
      >
        {/* <FramerTest client:idle /> */}
        <Header class="relative z-20" >
                  <div class="mt-25 lg:mt-0">
                    <h1 class="mb-5 text-[clamp(1.75rem,2.5vw,2.75rem)] ">
          
                      {tagline.l1} <br />
                      {tagline.l2}
                    </h1>
                    <p class="font-fraktion w-full md:w-3/4 text-[clamp(1.2rem,1.5vw,1.9rem)]">{aboutText}</p>
                  </div>
        </Header>
    
        <Resource
          value={worksResource}
          onPending={() => <div>Loading...</div>}
          onRejected={() => <div>Error loading data</div>}
          onResolved={(items) => (
            <Portfolio items={items} class="relative z-10" />
          )}
        />
        <a
          href="/work"
          class="group hover:text-powerlight-red h-20 relative z-10 mx-auto mt-20 mb-40 block w-1/3 overflow-hidden px-5 py-5 text-center text-3xl capitalize transition-all"
        >
          <div class="flex w-full justify-between">
            <div class="w-1/2 flex-col">
              <div class="text-left transition-transform duration-300">
                View All Projects
              </div>
            </div>
            <div class="flex-col">
              <HiArrowUpRightSolid class="" />
            </div>
          </div>
        </a>
      </div>
      <Shardbg class="z-0" maxHeight={divRef.value?.clientHeight} />
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
