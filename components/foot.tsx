import { University, Instagram, Facebook } from "lucide-react"
import { Footer } from "@/components/footer"

function Foot() {
  return (
    <div className="w-full">
      <Footer
        logo={<University className="h-10 w-10" />}
        brandName="Global Schools Group"
        socialLinks={[
          {
            icon: <Facebook className="h-5 w-5" />,
            href: "https://www.facebook.com/GIIS.Noida/",
            label: "Twitter",
          },
          {
            icon: <Instagram className="h-5 w-5" />,
            href: "https://www.instagram.com/giis.noida/?utm_source=ig_web_button_share_sheet",
            label: "GitHub",
          },
        ]}
        mainLinks={[
          { href: "/", label: "Home" },
          { href: "/", label: "About" },
        ]}
        legalLinks={[
        ]}
        copyright={{
          text: "© 2025 Global Indian International School Noida.",
          license: "All rights reserved",
        }}
      />
    </div>
  )
}

export { Foot }