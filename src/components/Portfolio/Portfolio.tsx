import { component$ } from "@builder.io/qwik";

interface PortfolioItemProps {
  id: number;
  slug: string;
  class?: string;
  isVideo?:boolean;
  thumbnail: string;
  thumbnail_width: number;
  thumbnail_height: number;
  thumbnail_alt: string;
  title: string;
  short_description: string;
  category: string;
  isWideItem?: boolean;

}

export interface PortfolioProps {
  class?: string;
  style?: string;
  items: PortfolioItemProps[];
}

export const Portfolio = component$<PortfolioProps>((props) => {
  return (
    <div class={"portfolio-grid grid w-full grid-cols-5 md:gap-4 lg:gap-8 " + props.class} style={props.style}>
      
      {props.items.map((item, index) => {
        const isWideItem =
          index === 0 || (index + 1) % 4 === 0 || index % 4 === 0;
        return (
          <PortfolioItem
            isWideItem={isWideItem}
            class={
              isWideItem
                ? "col-span-5 md:col-span-3"
                : "col-span-5 md:col-span-2"
            }
            id={item.id}
            key={item.id}
            slug={item.slug}
            category={item.category}
            title={item.title}
            short_description={item.short_description}
            thumbnail={item.thumbnail}
            thumbnail_width={item.thumbnail_width}
            thumbnail_height={item.thumbnail_height}
            thumbnail_alt={item.thumbnail_alt}
            isVideo={item.isVideo}
          />
        );
      })}
    </div>
  );
});

const PortfolioItem = component$<PortfolioItemProps>((props) => {
  return (
    <div
      class={
        "portfolio-item mb-30 " +
        props.class
      }
    >
      <a href={`work/${props.slug}`}>
      {props.isVideo?
        <video
        autoplay
        muted
        loop
        playsInline
        preload="auto"
        aria-label={props.thumbnail_alt}
        class="w-full object-cover"
      >
        <source src={props.thumbnail} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      :
      <img
      class="w-full object-cover"
      width={props.thumbnail_width}
      height={props.thumbnail_height}
      alt={props.thumbnail_alt}
      src={props.thumbnail}
    />
}
        <div class="portfolio-item-text mt-10 flex flex-wrap justify-center text-[clamp(1.1rem,1.5vw,1.4rem)]">
          <h3 class={`w-full mb-5 ${props.isWideItem ? "md:w-5/9" : "md:w-1/2"}`}>
            {props.category}
          </h3>
          <div
            class={`right-text w-full ${props.isWideItem ? "md:w-4/9" : "md:w-1/2"}`}
          >
            <h3 class="mb-3">{props.title}</h3>
            <p class="text-gray-800">{props.short_description}</p>
          </div>
        </div>
      </a>
    </div>
  );
});
