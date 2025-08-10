import {
  BentoCell,
  BentoGrid,
  ContainerScale,
  ContainerScroll,
} from "@/components/hero-gallery-scroll-animation"

const IMAGES = [
  "Screenshot 2025-08-10 at 22.18.56.png",
  "WhatsApp Image 2025-08-03 at 23.18.30.jpeg",
  "WhatsApp Image 2025-08-03 at 23.33.09.jpeg",
  "WhatsApp Image 2025-08-03 at 23.38.50.jpeg",
  "WhatsApp Image 2025-08-03 at 23.22.04.jpeg",
]
const HeroDemo = () => {
  return (
    <ContainerScroll className="h-[350vh]">
      <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full p-4">
    {IMAGES.map((imageUrl, index) => (
      <BentoCell
        key={index}
        className="overflow-hidden rounded-xl shadow-xl"
      >
        <img
              className="size-full object-cover object-center"
          src={imageUrl}
          alt=""
        />
      </BentoCell>
    ))}
  </BentoGrid>

      <ContainerScale className="relative z-10 text-center">
        <h1 className="max-w-xl text-5xl font-bold tracking-tighter text-slate-800">
      Welcome!
    </h1>
        <p className="my-6 max-w-xl text-sm text-slate-700 md:text-base">
      Global Indian International School's Model United Nations conference
    </p>
        <div className="flex items-center justify-center gap-4">

        </div>
  </ContainerScale>
</ContainerScroll>
  )
}
export { HeroDemo }
