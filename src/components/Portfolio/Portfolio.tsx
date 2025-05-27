import { component$ } from "@builder.io/qwik";
import { PortfolioItem } from "./PortfolioItem";
import type {PortfolioItemProps} from "./PortfolioItem";

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

