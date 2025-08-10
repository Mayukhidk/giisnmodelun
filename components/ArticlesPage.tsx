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

// Example dummy data
const exampleArticles: Article[] = [
  {
    id: "1",
    title: "Im So cool",
    subtitle: "Global Indian International School's Model United Nations",
    excerpt:
      "We aren't just any model UN conference. We are the Global Indian International School's Model United Nations, where students from around the world come together to discuss pressing global issues.",
    content:
      "Aren't we so cool? Our conference is a platform for students to engage in meaningful discussions, develop leadership skills, and foster international understanding. Participants simulate UN committees, debate global challenges, and propose solutions, all while enhancing their public speaking and negotiation abilities. It's an enriching experience that prepares them for future roles in diplomacy and global governance.",
    image:
      "WhatsApp Image 2025-08-03 at 23.16.58.jpeg"
  },
  {
    id: "2",
    title: "Global Indian International School's Model United Nations",
    excerpt:
      "Model United Nations conference showcases the skill and dedication of students.",
    content:
      "Global Indian International School's Model United Nations conference is a testament to the hard work and dedication of students. The event brings together young minds to discuss global issues, fostering leadership and diplomacy skills that are essential in today's world. The conference not only provides a platform for students to engage in meaningful debates but also encourages them to think critically about international relations and global challenges. Through this experience, participants develop a deeper understanding of the complexities of diplomacy and the importance of collaboration in addressing world issues.",
    image:
      "WhatsApp Image 2025-08-03 at 23.16.14.jpeg"
  },
  {
    id: "3",
    title: "The Art of Mayukh",
    subtitle: "Why Mayukh our HOD of OC is so Cool",
    excerpt:
      "He is the best HOD of OC in the world. He is so cool that he can make even the most boring tasks seem interesting, Fun fact he also made this website. He is the best. He is the best. He is the best. He is the best. He is the best. He is the best. He is the best.",
    content:
      "Why is he the best? Because he is the best. He is the best. He is the best. He is the best. He is the best. He is the best. He is the best. He is the best. He is the best. He is the best. He is the best.",
    image:
      "WhatsApp Image 2025-08-03 at 23.17.33.jpeg"
  }
];

export default function PressSectionWithData() {
  return <PressSection articles={exampleArticles} />;
}
