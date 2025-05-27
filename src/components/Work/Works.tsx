import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { Portfolio } from "~/components/Portfolio/Portfolio";

export interface WorksProps {
  class?: string;
  category?: string;
}

export const Works = component$<WorksProps>((props) => {
  const worksResource = useResource$<any[]>(async () => {
    let url = "http://localhost:3000/api/works";
    if (props.category) {
      url += `?where[categories.slug][equals]=${props.category}`;
      console.log(url);
    }
    console.log(url);
    const response = await fetch(url);
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
