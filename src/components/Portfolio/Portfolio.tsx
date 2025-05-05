import { component$ } from "@builder.io/qwik";

interface PortfolioItemProps {
  id: number;
  slug: string;
  class?: string;
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
  items: PortfolioItemProps[];
}

export const Portfolio = component$<PortfolioProps>((props) => {
  return (
    <div class={"portfolio-grid grid w-full grid-cols-3 gap-6 " + props.class}>
      {props.items.map((item, index) => {
        const isWideItem =
          index === 0 || (index + 1) % 4 === 0 || index % 4 === 0;
        return (
          <PortfolioItem
            isWideItem={isWideItem}
            class={
              isWideItem
                ? "col-span-3 md:col-span-2"
                : "col-span-3 md:col-span-1"
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
        (props.isWideItem
          ? "col-span-3 md:col-span-2"
          : "col-span-3 md:col-span-1") +
        props.class
      }
    >
      <a href={`works/${props.slug}`}>
        <img
          width={props.thumbnail_width}
          height={props.thumbnail_height}
          alt={props.thumbnail_alt}
          src={props.thumbnail}
        />
        <div class="portfolio-item-text mt-10 flex flex-wrap justify-center">
          <h3 class={`w-full ${props.isWideItem ? "md:w-5/9" : "md:w-1/2"}`}>
            {props.category}
          </h3>
          <div
            class={`right-text w-full ${props.isWideItem ? "md:w-4/9" : "md:w-1/2"}`}
          >
            <h3>{props.title}</h3>
            <p class="text-gray-400">{props.short_description}</p>
          </div>
        </div>
      </a>
    </div>
  );
});
