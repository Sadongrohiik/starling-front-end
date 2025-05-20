import { component$ } from "@builder.io/qwik";
import Logotype from "~/assets/logotype.svg?jsx";

export interface FooterProps {
  class?: string;
  socialLinks: { text: string; href: string }[];
  copyrightText: string;
  contactList: { city: string; email: string; phone: string }[];
}

export const Footer = component$<FooterProps>((props) => {
  return (
    <div
      class={`bg-crt-black text-retro-white/60 z-10 flex w-full flex-col items-center justify-center ${props.class}`}
    >

      <div class="border-retro-white/30 text-retro-white flex w-full flex-col lg:flex-row border-b-1 text-xl p-6 lg:p-10 ">
        <span class="w-full mb-10 lg:w-2/3 font-bold">New Business Inquiries</span>
        <div class="contact-list w-full lg:w-1/3">
          <ul class="contact-info ">
            {props.contactList.map((contact) => (
              <li
                key={contact.city}
                class="contact flex flex-row items-start justify-between font-semibold  "
              >
                <span class="city ">{contact.city}</span>
                <a class=" underline cursor-pointer hover:text-retro-white/80 transition-all" href={`mailto:${contact.email}`}>{contact.email}</a>
                <span class="phone  font-fraktion">{contact.phone}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div class="justify-left flex w-full items-center p-6 pt-10 lg:p-10">
        <Logotype class="h-auto w-full" />
      </div>
      <div class="flex w-full flex-col-reverse justify-between p-6 pt-10 md:flex-row-reverse lg:p-10">
        <div class="copyright font-fraktion col-span-4 col-start-0 row-end-8 justify-center text-xl font-light">
          {props.copyrightText}
        </div>
        <div class="social row-end-8">
          <ul class="mt-0 flex w-full flex-row items-end justify-between">
            {props.socialLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  class="hover:text-retro-white mr-10 text-xl transition-all"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
});
