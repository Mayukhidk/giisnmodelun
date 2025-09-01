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
  "id": "1",
  "title": "All India Political Party Meet",
  "excerpt": "From Rhetoric to Realpolitik",
  "content": "The Hypocrisy and Fragility of India’s Counter-Terror Discourse\n\nThe post-Pahalgam terror crisis has turned India’s political landscape into a theatre of contradictions, where the rhetoric of nationalism collides with the compulsions of realpolitik. In the aftermath of the April 22nd Pahalgam massacre—which claimed 26 civilian lives—parties across the spectrum scrambled to project both resolve and relevance. Yet the spectacle of parliamentary exchanges revealed less about unity and more about opportunism cloaked in patriotic fervor.\n\nArvind Kejriwal’s volte-face captured this shift. AAP, once branding itself as an antidote to ‘divisive politics,’ now embraces the NDA under the banner of national security. By endorsing Operation Sindoor and applauding surgical strikes, Kejriwal attempted to cloak pragmatism in principle. But the unanswered question—whether aligning with BJP erodes AAP’s alternative identity—laid bare the fragility of his stance.\n\nForeign policy too fell into the crossfire. External Affairs Minister S. Jaishankar, usually India’s diplomatic spearhead, faltered when pressed on global perceptions of India’s ‘zero tolerance’ approach. His refusal to comment for lack of ‘updated facts’ projected disarray within the very ministry entrusted with shaping international narratives.\n\nAmit Shah’s economic-security calculus was similarly underwhelming, reduced to repetitive promises of relief funds while dodging the deeper tension between militarization and development in Kashmir. Meenakshi Lekhi’s defense of NIA statistics collapsed into partisan blame-shifting against Congress, ignoring calls for independent audits that could root credibility in transparency rather than propaganda.\n\nOn the opposition side, Mallikarjun Kharge’s bluster about ‘100 mistakes’ in Operation Sindoor unraveled when he failed to list even one. His reliance on ChatGPT-generated notes in rebuttal only deepened the perception of unpreparedness. Rahul Gandhi’s critique of vague anti-terror laws resurrected old accusations of Congress’s inertia post-26/11—an unresolved stain on the party’s record.\n\nThe sharpest paradox came from Sukhbir Singh Badal’s exchange: BJP dismissed U.S. support during 26/11 as weakness, yet now frames reliance on Washington as ‘partnership.’ Such rhetorical gymnastics expose the thin line between strategic autonomy and strategic dependency—a line that may blur again if India faces another 26/11-scale assault.\n\nIn the crucible of national security, these debates reveal a sobering truth: India’s political class weaponizes memory, grief, and patriotism, yet seldom rises above electoral one-upmanship. National security becomes less about safeguarding sovereignty and more about scoring points in a perpetual blame game.\n\nIf democracy is to retain credibility amidst bloodshed, India’s leadership must transcend selective outrage and opportunistic alliances. Until then, the ghosts of Pahalgam and Mumbai will continue to haunt not just victims’ families but the conscience of an entire nation.",
  "image": "IMG_7151.jpeg"
},
{
  id: "2",
  title: "Meenakshi Lekhi (Priyanshi Singh)",
  excerpt: "Minister of External Affairs and Culture’s response to Pahalgam attack",
  content: "Journalist- Shriya Gupta Delegate- Meenakshi Lekhi (Priyanshi Singh) Q1. You’ve said zero tolerance is India’s sindoor ki laal rekha. How does that principle translate into action against Pakistan’s repeated ceasefire violations? Answer: It should be known without no doubt that any violation is met with strong military and diplomatic response. Be it strikes to the issue being raised on a global forum. India will not tolerate terrorism in any form. The policy of Vasudhaiva Kutumbkam shall be followed only when it is reciprocated. Follow-up: If India’s response is so strong, why do ceasefire violations and infiltration attempts still continue year after year? India is today the 4th largest economy in the world. We have achieved tgus feat in such a short span of time. Considering that, some people do have an objection to India rising as a global superpower. But, it it to be noted that Uri happened after so many years of silence, Balakot strikes happened, Operation Sindoor happened. So, we're a strong, resolute nation which will fight terror with unwaveribg courage. Q2. After the Pahalgam attack, what message is India sending to Pakistan and the world? Answer: The message is crystal clear — no terrorism will be tolerated, and perpetrators, sponsors of terrorism will face severe consequences. Follow-up: If that’s the message, do you believe the 2021 ceasefire understanding with Pakistan has any credibility left, or is it permanently broken? Answer: Pakistan should be perceived as a nation who feeds terrorists and carries the message of terrorism through its acts of cowardice. As of now, any negotitaion with such a nation seems amusing and shall not be entertained. Q3. Drone-dropped weapons and explosives have increased along the LoC. How is India adapting to this new threat? Answer: India is using modern technology. Be it AI-driven surveillance, or thermal imaging, or stronger border fencing to counter these shameful tactics. Our security forces are fully prepared for any sort of threat. Follow-up: If technology is being deployed so extensively, how do you explain the rising infiltration success rate — estimated at 30% in 2025? Answer: 55% drone neutralization has been achieved along our borders. More than 260 drones were recovered/shot down in 2024 than 110 in 2023. Systems integrating manpower, sensors, networks, intelligence and command control are being improvised under multi domain detection. So we are continually working towards neutralizing ceasefire violation threats.",
  image: "IMG_7148.jpeg"
},
  {
    id: "3",
    title: "“National Security is not a Prop” Rahul Gandhi Opens Up in AIPPM Exclusive",
    excerpt:
      "Ajita Pandey, All India Political Parties Meet",
    content:
      "New Delhi — The All India Political Parties Meet turned into a political spectacle today, but away from the noisy speeches and walkouts, Congress leader Rahul Gandhi sat down for an exclusive conversation with the International Press. Calm, measured, yet sharp in his words, he offered insights into both the committee’s drama and the pressing issue of terrorism financing. On being asked about the unexpected AAP–BJP alliance, Gandhi smiled wryly before responding. “This alliance exposes the double standards of both parties. They spent years attacking each other, and now they claim to have suddenly found common ground. National security should never be reduced to stage drama.” Moving to the agenda, Gandhi spoke firmly about the real roots of terrorism financing. “We cannot fight terrorism if we ignore hawala networks, shell companies, and the black money that flows freely in our system. And let’s be honest — unless political funding itself becomes transparent, any motion inside this room will remain lip service.” His critique was sharp, but he also stressed the need for unity. “This fight is bigger than BJP, AAP or Congress. At the end of the day, it is about protecting ordinary Indians — the child going to school, the shopkeeper opening his store, the family boarding a train. We cannot let them live under the shadow of fear.” The interview showed Rahul Gandhi at his most real — blunt about the opportunism in the room, yet still pushing for cooperation. While others traded drama and accusations, his words cut through, reminding everyone that beyond party games, India just wants leaders to act.",
    image:
      "IMG_7149.jpeg"
  }
];

export default function PressSectionWithData() {
  return <PressSection articles={exampleArticles} />;
}
