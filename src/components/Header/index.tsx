import { component$ } from "@builder.io/qwik";
import Logo from "~/assets/logo.svg?jsx";
import { Navbar } from "./Navbar/Navbar";
import { HamburgerMenu } from "./HamburgerMenu/HamburgerMenu";
export interface HeaderProps {
  class?: string;
}

const navItems=[
  {text: "About", href:"/about"},
  {text: "Work", href:"/work"}
]
const tagline= {l1:"Radical Creativity—" ,l2:"Supercharged Technology."};
const aboutText = `Starling is a global creative collective that creates innovative
brands, builds disruptive experiences, and solves unique challenges
            through art, design, and cutting-edge technology.`;

export const Header = component$<HeaderProps>((props) => {
  return (
    <div class={`w-full flex flex-row ${props.class}`}>
      <div class="left-header w-full flex flex-col md:flex-row md:w-2/3">
        <Logo class="mt-1 mr-13 h-10 w-10 md:h-26 md:min-w-20" />
        <div class="mt-25 md:mt-0">
          <h1 class="mb-5 text-3xl">
            {tagline.l1} <br/>
            {tagline.l2}
          </h1>
          <p>
            {aboutText}
          </p>
        </div>
      </div>
      <div class="right-header md:w-2/6 flex justify-end">
      <Navbar links={navItems}/>
      <HamburgerMenu links={navItems}/>
      </div>
    </div>
  );
});
