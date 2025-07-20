import { AnimatedTestimonials } from "@/components/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Leadership isn't just about guiding — it's about inspiring. This MUN would be nothing without a united vision.",
      name: "Sejal",
      designation: "Secretary General",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "Strong planning and seamless execution — that’s the key to running a successful MUN, and we are proud of it.",
      name: "Vanshika",
      designation: "Deputy Secretary General",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "Coordinating every layer of this event has been both a challenge and a joy. Excellence lies in the details.",
      name: "Ipshita",
      designation: "Director General",
      src: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "As Deputy Director General, I’ve seen firsthand the power of collaboration in bringing ideas to life.",
      name: "Daniel",
      designation: "Deputy Director General",
      src: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "From registrations to resolutions, administration is what keeps the event ticking — and we’ve mastered it.",
      name: "Anvesha",
      designation: "Administrative General",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "Creativity isn’t just design — it’s the soul of our identity. Every detail reflects our spirit.",
      name: "Sparsh",
      designation: "HOD Creative Strategy",
      src: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "Design isn’t just what it looks like — it’s how it works. Strategy turns ideas into impressions.",
      name: "Arnav Rathi",
      designation: "HOD Creative Strategy",
      src: "https://images.unsplash.com/photo-1603415526960-f7e0328f11b8?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "A well-oiled team behind the scenes is what keeps the front running smoothly — that’s the OC spirit.",
      name: "Mayukh",
      designation: "HOD Organizing Committee",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "Culture connects delegates beyond debate — it brings the event to life, and that's what we aimed for.",
      name: "Nitya",
      designation: "HOD Cultural Affairs",
      src: "https://images.unsplash.com/photo-1552058544-6d7e6fafa06b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "Capturing the moments, documenting the legacy — the pen really is mightier than the gavel.",
      name: "Prateesh",
      designation: "HOD Scribe",
      src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "Budgeting is an art — ensuring excellence while staying efficient. Every number tells a story.",
      name: "Akshat",
      designation: "HOD Finance",
      src: "https://images.unsplash.com/photo-1627556704081-4da9c1f30302?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "From posters to people, every message matters. Our media is the voice of the MUN.",
      name: "Shambhavi",
      designation: "HOD Marketing & Media",
      src: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "Moving parts, moving people, moving the event — logistics keeps the momentum alive.",
      name: "Shubharun & Ahaana",
      designation: "HOD Logistics",
      src: "https://images.unsplash.com/photo-1590080876203-6a478ddf49f4?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "Every delegate counts — and it’s our job to make them feel like they belong. Inclusion is key.",
      name: "Shubhroneil",
      designation: "HOD Delegate Affairs",
      src: "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "Building relationships beyond the committee room — that’s what PR is all about.",
      name: "Satparna",
      designation: "HOD Public Relations",
      src: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials} />;
}
