import { Timeline } from "@/components/timeline"

export default function TimelineDemo() {
  const data = [
    {
      title: "Registrations",
      content: (
        <div>
          <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
            Registerations for our Model United Nations conference!
          </h3>
          <div className="space-y-2">
            {[
              ["15th July", "Registrations"],
            ].map(([time, label]) => (
              <div
                key={time}
                className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400"
              >
                <span className="font-medium">{time}</span> - {label}
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "22 Aug",
      content: (
        <div>
          <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
            Day 1
          </h3>
          <p className="mb-4 text-sm text-neutral-700 dark:text-neutral-300">
            First day of Model United Nations conference.
          </p>
          <div className="space-y-2">
            {[
              ["8:00 AM", "Registration & Opening Ceremony"],
              ["9:00 AM", "Committee Sessions Begin"],
              ["12:00 PM", "Lunch Break"],
              ["1:00 PM", "Committee Sessions Resume"],
              ["4:30 PM", "Closing for the Day"],
              ["5:00 PM", "End of Day 1"],
            ].map(([time, label]) => (
              <div
                key={time}
                className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400"
              >
                <span className="font-medium">{time}</span> - {label}
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "23 Aug",
      content: (
        <div>
          <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
            Day 2
          </h3>
          <p className="mb-4 text-sm text-neutral-700 dark:text-neutral-300">
            Second day of Model United Nations conference.
          </p>
          <div className="space-y-2">
            {[
              ["8:00 AM", "Committee Sessions Resume"],
              ["12:00 PM", "Lunch Break"],
              ["1:00 PM", "Final Committee Sessions"],
              ["4:00 PM", "Closing Ceremony"],
              ["5:00 PM", "End of Conference"],
            ].map(([time, label]) => (
              <div
                key={time}
                className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400"
              >
                <span className="font-medium">{time}</span> - {label}
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="relative w-full min-h-screen overflow-visible pb-32">
      <div className="hidden md:flex absolute top-0 right-0 h-full w-full justify-end pointer-events-none z-10">
        <div className="relative w-[340px] h-full flex flex-col items-center justify-evenly gap-6">
          <img
            src="/hi.png"
            alt="Decor 1"
            className="w-[220px] h-[32vh] object-cover border-8 border-blue-500 shadow-2xl rotate-[-8deg] transition-transform duration-300 hover:scale-110"
          />
          <img
            src="/hi.png"
            alt="Decor 2"
            className="w-[200px] h-[30vh] object-cover border-8 border-pink-500 shadow-2xl rotate-[7deg] transition-transform duration-300 hover:scale-110"
          />
          <img
            src="/hi.png"
            alt="Decor 3"
            className="w-[210px] h-[32vh] object-cover border-8 border-yellow-500 shadow-2xl rotate-[-5deg] transition-transform duration-300 hover:scale-110"
          />
          <img
            src="/hi.png"
            alt="Decor 4"
            className="w-[200px] h-[30vh] object-cover border-8 border-green-500 shadow-2xl rotate-[4deg] transition-transform duration-300 hover:scale-110"
          />
          <img
            src="/hi.png"
            alt="Decor 5"
            className="w-[220px] h-[32vh] object-cover border-8 border-purple-500 shadow-2xl rotate-[-3deg] transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>

      {/* Timeline */}
      <Timeline data={data} />

      {/* Mobile decor (non-overlapping grid) */}
      <div className="block lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 py-8">
        <img
          src="/img1.jpg"
          alt="Decor 1"
          className="w-full h-48 object-cover border-4 border-blue-500 shadow-lg rotate-[-3deg]"
        />
        <img
          src="/img2.jpg"
          alt="Decor 2"
          className="w-full h-48 object-cover border-4 border-pink-500 shadow-lg rotate-[3deg]"
        />
        <img
          src="/img3.jpg"
          alt="Decor 3"
          className="w-full h-48 object-cover border-4 border-yellow-500 shadow-lg rotate-[-2deg]"
        />  
        <img
          src="/img4.jpg"
          alt="Decor 4"
          className="w-full h-48 object-cover border-4 border-green-500 shadow-lg rotate-[3deg]"
        />
        <img
          src="/img5.jpg"
          alt="Decor 5"
          className="w-full h-48 object-cover border-4 border-purple-500 shadow-lg rotate-[-2deg]"
        />
      </div>
    </div>
  )
}
