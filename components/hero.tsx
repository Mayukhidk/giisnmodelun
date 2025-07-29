import {
  BentoCell,
  BentoGrid,
  ContainerScale,
  ContainerScroll,
} from "@/components/hero-gallery-scroll-animation"

const IMAGES = [
  "https://media.discordapp.net/attachments/780755248762978324/1399807488823394345/164e8a00-e1a6-4048-9687-a6b761313e4a.png?ex=688a57d0&is=68890650&hm=3878f88ed499bcd89c3245bd07f6bf5246188ed0689e25eb73f7fd05c0cf2e1f&=&format=webp&quality=lossless&width=846&height=423",
  "https://media.discordapp.net/attachments/780755248762978324/1399808231735427172/e055b403-b9fa-4589-843d-9c8ce078295f.jpg?ex=688a5881&is=68890701&hm=2360ccb71a94a79115dd3b10c64d215a8c6fdec66fcb0db4da21701903a7c885&=&format=webp&width=527&height=527",
  "https://media.discordapp.net/attachments/780755248762978324/1399808701761851463/4ad90b83-fb82-4c2f-8090-d187cb37629a.png?ex=688a58f1&is=68890771&hm=79f8ab1dff8facc37826d586cecf49c0e501fe16059fd06d622437a3fdc79a0c&=&format=webp&quality=lossless",
  "https://media.discordapp.net/attachments/780755248762978324/1399809078242447511/c8fe3929-fd31-4aac-8263-2a6986066f58.png?ex=688a594b&is=688907cb&hm=96891faa211a1631094d3e85014a9829a6c70cdeb7b7268ff3cab143436c83b1&=&format=webp&quality=lossless",
  "https://media.discordapp.net/attachments/780755248762978324/1399809230218727454/f06a9e_fbf9ea1fc3f04a03bbb2c48851b5af0c.png?ex=688a596f&is=688907ef&hm=7ec88d7482048b4440d998bdc4c7e67f1165aac0c26ccf6747fe73f22377ad5f&=&format=webp&quality=lossless",
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
        <p className="my-6 max-w-xl text-sm text md:text-base">
          Global Indian International School's Model United Nations conference
        </p>
        <div className="flex items-center justify-center gap-4">

        </div>
      </ContainerScale>
    </ContainerScroll>
  )
}
export { HeroDemo }
