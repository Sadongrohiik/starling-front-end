import {
  component$,
  useTask$,
  useSignal,
  Resource,
  useResource$,
} from "@builder.io/qwik";
import { Header } from "~/components/Header";
import { Portfolio } from "~/components/Portfolio/Portfolio";
import { CategoryLink } from "~/components/Work/CategoryLink";

export default component$(() => {
  const categoriesResource = useResource$<any[]>(async () => {
    const response = await fetch("http://localhost:3000/api/categories");
    const data = await response.json();
    console.log(data.docs[0].label);

    return data.docs.map((category: any) => ({
      id: category.id,
      label: category.title,
      slug: category.slug ,
    }));
  });

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

  return (
    <div>
      <Header class="relative z-20 mb-40" />
      <div class="text-[clamp(1rem,1.5vw,1.5rem)] flex mb-20 w-full md:w-2/3 flex-wrap ">
      <Resource
      value={categoriesResource}
      onPending={() => <div>Loading...</div>}
      onRejected={() => <div>Error loading data</div>}
      onResolved={(categories) => (
        categories.map ((category) => (
          // <a key={category.id} href={"/category/" + category.slug}> {category.label}</a>
          <CategoryLink key={category.id} slug={"/category/" + category.slug} label={category.label} isActive={false} class="w-[clamp(10rem,15vw,15rem)] mt-6" />
        ))
      )}
    />
    </div>
      <Resource
        value={worksResource}
        onPending={() => <div>Loading...</div>}
        onRejected={() => <div>Error loading data</div>}
        onResolved={(items) => (
          <Portfolio items={items} class="relative z-10" />
        )}
      />
    </div>
  );
});
