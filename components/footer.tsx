import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
}

const defaultSocialLinks = [
  { icon: <FaInstagram className="size-5" />, href: "https://www.instagram.com/giisn_mun?utm_source=ig_web_button_share_sheet&igsh=MTJ2b2FzbmozNDIwZg==", label: "Instagram" },
  { icon: <FaFacebook className="size-5" />, href: "https://www.instagram.com/giisn_mun?utm_source=ig_web_button_share_sheet&igsh=MTJ2b2FzbmozNDIwZg==", label: "Facebook" },
];

export const Footer7 = ({
  logo = {
    url: "https://www.giis.com",
    src: "Giis Background Removed.png",
    alt: "Global Indian International School",
    title: "Global Indian International School",
  },
  description = "Empowering global thinkers through inclusive diplomacy and collaborative dialogue.",
  sections = [],
  socialLinks = defaultSocialLinks,
  copyright = "© 2025 Global Indian International School Model United Nations. All rights reserved.",
}: Footer7Props) => {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          {/* Left: Logo + Desc + Social */}
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            <div className="flex items-center gap-2 lg:justify-start">
              <a href={logo.url}>
                <img src={logo.src} alt={logo.alt} title={logo.title} className="h-8" />
              </a>
              <h2 className="text-xl font-semibold">{logo.title}</h2>
            </div>
            {description && (
              <p className="max-w-[70%] text-sm text-muted-foreground">{description}</p>
            )}
            <ul className="flex items-center space-x-6 text-muted-foreground">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="font-medium hover:text-primary">
                  <a href={social.href} aria-label={social.label} target="_blank" rel="noreferrer">
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Sections */}
          {sections.length > 0 && (
            <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
              {sections.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className="mb-4 font-bold">{section.title}</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx} className="font-medium hover:text-primary">
                        <a href={link.href}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom: Copyright Only */}
        <div className="mt-8 border-t py-8 text-xs font-medium text-muted-foreground text-center md:text-left">
          <p>{copyright}</p>
        </div>
      </div>
    </section>
  );
};
