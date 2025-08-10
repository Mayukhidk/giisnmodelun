"use client";

import React from "react";
import { Carousel, Card } from "@/components/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        All Committes
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "United Nations General Assembly",
    title: "Addressing the Global Refugee Crisis: Evaluating Humanitarian Access and Migration Policies in Conflict Zones with a Focus on Gaza and Sudan.",
    src: "/WhatsApp Image 2025-08-03 at 23.33.09.jpeg",
    content: "Explore the humanitarian challenges and migration policies affecting refugees in conflict zones.",
  },
  {
    category: "United Nations Security Council",
    title: "China's Role in the Indo-Pacific: Security Implications of Maritime Tensions and the Taiwan Strait Crisis.",
    src: "/WhatsApp Image 2025-08-10 at 22.34.16.jpeg",
    content: "Analyze security implications and maritime tensions in the Indo-Pacific region.",
  },
  {
    category: "United Nations Human Rights Council",
    title: "Combating the Global Backlash Against LGBTQ+ Rights in Authoritarian and Democratic Regimes: A Comparative Analysis of Policy Responses and International Advocacy.",
    src: "/WhatsApp Image 2025-08-10 at 22.32.33.jpeg",
    content: "Discuss policy responses and advocacy for LGBTQ+ rights worldwide.",
  },
  {
    category: "United Nations Council On The Status Of Women",
    title: "Women in Stateless and Occupied Territories: Rights Without a Nation.",
    src: "/WhatsApp Image 2025-08-10 at 22.28.15.jpeg",
    content: "Examine the rights and challenges faced by women in stateless and occupied regions.",
  },
  {
    category: "World Health Organization 6-8 Graders",
    title: "Strengthening Mental Health Infrastructure for Youth in the Wake of Climate Anxiety and Digital Overload.",
    src: "/WhatsApp Image 2025-08-10 at 22.34.16.jpeg",
    content: "Focus on youth mental health in the context of climate change and digital challenges.",
  },
  {
    category: "All India Political Parties Meet",
    title: "Deliberation on India's Response to Recent Cross-Border Terrorism and Ceasefire Violations by Pakistan.",
    src: "/WhatsApp Image 2025-08-10 at 22.32.33.jpeg",
    content: "Debate India's strategies for addressing cross-border terrorism and ceasefire issues.",
  },
];
