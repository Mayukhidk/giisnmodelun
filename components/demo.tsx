import { AnimatedTestimonials } from "@/components/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Leadership isn't just about guiding — it's about inspiring. This MUN would be nothing without a united vision.",
      name: "Sejal",
      designation: "Secretary General",
      src: "/sej.jpeg",
    },
    {
      quote:
        "A well-oiled team behind the scenes is what keeps the front running smoothly — that’s the OC spirit.",
      name: "Mayukh",
      designation: "HOD Organizing Committee",
      src: "/may.jpeg",
    },
    {
      quote:
        "Strong planning and seamless execution — that’s the key to running a successful MUN, and we are proud of it.",
      name: "Vanshika",
      designation: "Deputy Secretary General",
      src: "/van.jpeg",
    },
    {
      quote:
        "Coordinating every layer of this event has been both a challenge and a joy. Excellence lies in the details.",
      name: "Ipshita",
      designation: "Director General",
      src: "/sha.jpeg",
    },
    {
      quote:
        "As Deputy Director General, I’ve seen firsthand the power of collaboration in bringing ideas to life.",
      name: "Daniel",
      designation: "Deputy Director General",
      src: "/Dan.jpeg",
    },
    {
      quote:
        "From registrations to resolutions, administration is what keeps the event ticking — and we’ve mastered it.",
      name: "Anvesha",
      designation: "Administrative General",
      src: "/anv.jpeg",
    },
    {
      quote:
        "Creativity isn’t just design — it’s the soul of our identity. Every detail reflects our spirit.",
      name: "Sparsh",
      designation: "HOD Creative Strategy",
      src: "/spa.jpeg",
    },
    {
      quote:
        "Design isn’t just what it looks like — it’s how it works. Strategy turns ideas into impressions.",
      name: "Arnav Rathi",
      designation: "HOD Creative Strategy",
      src: "/arn.jpeg",
    },
    {
      quote:
        "Culture connects delegates beyond debate — it brings the event to life, and that's what we aimed for.",
      name: "Nitya",
      designation: "HOD Cultural Affairs",
      src: "/nit.jpeg",
    },
    {
      quote:
        "Capturing the moments, documenting the legacy — the pen really is mightier than the gavel.",
      name: "Prateesh",
      designation: "HOD Scribe",
      src: "/pra.jpeg",
    },
    {
      quote:
        "Budgeting is an art — ensuring excellence while staying efficient. Every number tells a story.",
      name: "Akshat",
      designation: "HOD Finance",
      src: "/aks.jpeg",
    },
    {
      quote:
        "From posters to people, every message matters. Our media is the voice of the MUN.",
      name: "Shambhavi",
      designation: "HOD Marketing & Media",
      src: "/xy.jpeg",
    },
    {
      quote:
        "Moving parts, moving people, moving the event — logistics keeps the momentum alive.",
      name: "Shubharun & Ahaana",
      designation: "HOD Logistics",
      src: "/shub.jpeg",
    },
    {
      quote:
        "Every delegate counts — and it’s our job to make them feel like they belong. Inclusion is key.",
      name: "Shubhroneil",
      designation: "HOD Delegate Affairs",
      src: "/shubro.jpeg",
    },
    {
      quote:
        "Building relationships beyond the committee room — that’s what PR is all about.",
      name: "Satparna",
      designation: "HOD Public Relations",
      src: "/choti.jpeg",
    },
  ];



  return <AnimatedTestimonials testimonials={testimonials} />;
}
