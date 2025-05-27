import { component$ } from "@builder.io/qwik";
import { Navbar } from "./Navbar/Navbar";
import { HamburgerMenu } from "./HamburgerMenu/HamburgerMenu";
import { Search } from "./Search/Search";
export interface HeaderProps {
  class?: string;
  style?: string;
}

const navItems = [
  { text: "Work", href: "/work" },
  { text: "About", href: "/about" },
];

const hamburgerItems=[
  {text:"Work", href:"/work"},
  {text:"About", href:"/about"},
  {text:"Contact", href:"/contact"},
  {text:"Blog", href:"/blog"},
  {text:"News", href:"/news"},

]

const socialLinks=[
  {text: "Instagram", href:"https://www.instagram.com/"},
  {text: "Dribbble", href:"https://dribbble.com/StarlingStudio"},
  {text: "Vimeo", href:"https://vimeo.com/"},
  {text: "GitHub", href:"https://GitHub.com/"}

]

const copyright="© 2025 STARLING";
const tagline = { l1: "Radical Creativity—", l2: "Supercharged Technology." };
const aboutText = `Starling is a global creative collective that creates innovative
brands, builds disruptive experiences, and solves unique challenges
            through art, design, and cutting-edge technology.`;

export const Header = component$<HeaderProps>((props) => {
  return (
    <div class={`flex w-full flex-col-reverse lg:flex-row mb-60 ${props.class}`} style={props.style}>


      <div class="left-header flex w-full flex-col md:w-full md:flex-row">
        <div class="mt-1 h-10 w-10 lg:h-26 lg:min-w-40 invisible lg:visible"></div>
        <div class="mt-25 lg:mt-0">
          <h1 class="mb-5 text-[clamp(1.75rem,2.5vw,2.75rem)] ">
            {tagline.l1} <br />
            {tagline.l2}
          </h1>
          <p class="font-fraktion w-full md:w-3/4 text-[clamp(1.2rem,1.5vw,1.9rem)]">{aboutText}</p>
        </div>
      </div>
      <div class="right-header flex justify-end w-full lg:w-2/6">
        <Navbar class="text-2xl invisible lg:visible" links={navItems} />
        <Search class="mr-10" />
        <HamburgerMenu links={hamburgerItems} socialLinks={socialLinks} copyrightText={copyright}/>
      </div>
    </div>
  );
});
