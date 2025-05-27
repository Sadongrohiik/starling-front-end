import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { Header } from "~/components/Header";
import { CategoryLink } from "~/components/Work/CategoryLink";
import { Works } from "~/components/Work/Works";

export default component$(() => {
  const categoriesResource = useResource$<any[]>(async () => {
    const response = await fetch("http://localhost:3000/api/categories");
    const data = await response.json();

    return data.docs.map((category: any) => ({
      id: category.id,
      label: category.title,
      slug: category.slug,
    }));
  });


  return (
    <div>
      <Header class="relative z-20" />
      <div class="mb-20 flex w-full flex-wrap text-[clamp(1rem,1.5vw,1.5rem)] md:w-2/3">
        <Resource
          value={categoriesResource}
          onPending={() => <div>Loading...</div>}
          onRejected={() => <div>Error loading data</div>}
          onResolved={(categories) =>
            categories.map((category) => (
              // <a key={category.id} href={"/category/" + category.slug}> {category.label}</a>
              <CategoryLink
                key={category.id}
                slug={category.slug}
                label={category.label}
                isActive={false}
                class="mt-6 w-[clamp(10rem,15vw,15rem)]"
              />
            ))
          }
        />
      </div>
      <Works />
    </div>
  );
});
