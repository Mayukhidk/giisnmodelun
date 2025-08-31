import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Article = {
  id: string;
  title: string;
  subtitle?: string;
  excerpt?: string;
  content: string;
  image?: string;
};

interface PressSectionProps {
  articles: Article[];
}

const PressSection: React.FC<PressSectionProps> = ({ articles }) => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-neutral-900 to-black py-16 px-4 md:px-8 text-white">
      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-bold mb-12 text-center tracking-widest text-white">
        PRESS
      </h1>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <motion.div
            key={article.id}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="cursor-pointer rounded-xl border border-white/20 backdrop-blur-lg bg-white/10 overflow-hidden group"
            onClick={() => setSelectedArticle(article)}
          >
            {article.image && (
              <div className="overflow-hidden">
                <motion.img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-1">{article.title}</h2>
              {article.subtitle && (
                <h3 className="text-sm text-gray-300 mb-3">{article.subtitle}</h3>
              )}
              {article.excerpt && (
                <p className="text-gray-400 text-sm leading-relaxed">
                  {article.excerpt}
                </p>
              )}
              <span className="block mt-4 text-xs font-medium text-gray-200">
                READ MORE →
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Full Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              className="bg-neutral-900 text-white rounded-xl shadow-2xl max-w-4xl w-full p-8 overflow-y-auto max-h-[90vh]"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {selectedArticle.image && (
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="rounded-lg mb-4 w-full h-64 object-cover"
                />
              )}
              <h2 className="text-3xl font-bold mb-2">{selectedArticle.title}</h2>
              {selectedArticle.subtitle && (
                <h3 className="text-lg mb-4 text-gray-400">{selectedArticle.subtitle}</h3>
              )}
              <p className="text-gray-300 whitespace-pre-line">
                {selectedArticle.content}
              </p>
              <button
                className="mt-6 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition"
                onClick={() => setSelectedArticle(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const exampleArticles: Article[] = [
  {
    id: "1",
    title: "All India Political Party Meet",
    excerpt:
      "From Rhetoric to Realpolitik",
    content:
      "The Hypocrisy and Fragility of India’s Counter-Terror Discourse The post-Pahalgam terror crisis has transformed India’s political landscape into a theatre of contradictions, where rhetoric of nationalism collides with the compulsions of realpolitik. In the aftermath of the April 22nd Pahalgam massacre—which claimed 26 civilian lives—parties across the spectrum have scrambled to demonstrate both resolve and relevance. Yet, the spectacle of parliamentary exchanges reveals less about national unity and more about opportunism clothed in patriotic fervor.Arvind Kejriwal’s volte-face exemplifies this shift. AAP, once a self-proclaimed antidote to “divisive politics,” now embraces the NDA under the pretext of national security. By endorsing Operation Sindoor and applauding surgical precision strikes, Kejriwal attempted to cloak pragmatism in principle. But the follow-up interrogation—whether aligning with BJP erodes AAP’s alternative politics—remains unanswered, exposing the fragility of his stance.
Foreign policy too lies in the crossfire. External Affairs Minister S. Jaishankar, often India’s diplomatic spearhead, faltered when pressed on the global perception of India’s “zero tolerance” approach. His silence, rationalized by lack of “updated facts,” projected disarray within the very ministry tasked with shaping international narratives.Meanwhile, Amit Shah’s economic-security calculus was underwhelming, collapsing into repetitive assurances of relief funds while evading the deeper tension between militarization and development in Kashmir. Meenakshi Lekhi’s defense of the NIA’s counter-terror numbers devolved into partisan blame-casting against Congress, ignoring the legitimate demand for independent audits that could anchor credibility in transparency rather than propaganda.
On the opposition front, Mallikarjun Kharge’s bluster about “100 mistakes” in Operation Sindoor imploded when he failed to enumerate even one. The discovery of reliance on ChatGPT notes in his rebuttal only deepened the perception of unpreparedness. Similarly, Rahul Gandhi’s indictment of vague anti-terror laws resurrected accusations of Congress’s inertia post-26/11, a stain the party has yet to wash off.The most revealing paradox surfaced in Sukhbir Singh Badal’s exchange, where BJP insisted that dependence on the U.S. during 26/11 reflected weakness, while present reliance constitutes “partnership. Such rhetorical gymnastics underscore the thin line between strategic autonomy and strategic dependency—a line that may blur again if India confronts another 26/11-scale assault.
In the crucible of national security, the debates expose a dangerous truth: India’s political class weaponizes memory, grief, and patriotism, yet seldom rises above electoral one-upmanship. National security becomes less about safeguarding sovereignty and more about scoring points in a perpetual blame game.If democracy is to retain credibility amidst bloodshed, India’s leadership must transcend selective outrage and opportunistic alliances. Until then, the ghosts of Pahalgam and Mumbai will haunt not merely the victims’ families but the conscience of an entire nation.",
    image:
      "WhatsApp Image 2025-08-03 at 23.16.58.jpeg"
  },
  {
    id: "2",
    title: "Coming Soon",
    excerpt:
      "Coming Soon",
    content:
      "Coming Soon",
    image:
      "WhatsApp Image 2025-08-03 at 23.16.14.jpeg"
  },
  {
    id: "3",
    title: "Coming Soon",
    excerpt:
      "Coming Soon",
    content:
      "Coming Soon",
    image:
      "WhatsApp Image 2025-08-03 at 23.17.33.jpeg"
  }
];

export default function PressSectionWithData() {
  return <PressSection articles={exampleArticles} />;
}
