import { component$ } from "@builder.io/qwik";
import { Header } from "~/components/Header";
import { CategoryLinks } from "~/components/Work/CategoryLinks";
import { Works } from "~/components/Work/Works";

export default component$(() => {
  return (
    <div>
      <Header class="relative z-20" />
      <CategoryLinks />

      <Works />
    </div>
  );
});
