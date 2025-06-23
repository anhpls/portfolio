import { FC, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    title: "Tag-N-Trac",
    company: "Software Engineer Intern",
    date: "June 2025 – Sept 2025",
    description:
      "• Developed and prototyped IoT tracking devices using microcontrollers, Bluetooth, and WiFi.\n• Working on embedded firmware development and device integration for real-time asset monitoring.\n• Implemented real-time data ingestion pipelines using n8n, Supabase, and Next.js, integrating hardware IoT tracker data into a cloud-based analytics platform.\n• Built real-time tracking dashboards, integrated APIs, and developed backend pipelines for IoT tracking systems.",
    logo: "/images/tag_n_trac_logo.jpeg",
  },
  {
    title: "AristoVLT",
    company: "CEO/Founder",
    date: "Ongoing",
    description:
      "• Led brand strategy, product design, and digital experience, driving identity-focused growth.\n" +
      "• Built and managed a cross-functional team across marketing, logistics, development, and design.\n" +
      "• Developed a full e-commerce platform using Next.js, Stripe, and Supabase with dynamic product pages, customer accounts, payments, and email automation.\n" +
      "• Managed apparel design, production, quality control, and fulfillment.\n" +
      "• Executed marketing, social media, and promotional campaigns to drive customer engagement.\n" +
      "• Oversaw inventory management, global shipping, and full business operations.",
    logo: "/images/avlt.png",
  },
  {
    title: "Tiny Tiger",
    company: "Web Developer Intern",
    date: "Jan 2025 – Apr 2025",
    description:
      "• Maintained and updated the website by integrating monthly activities and special events to enhance user engagement.\n" +
      "• Designed and implemented user-friendly UX/UI components, ensuring a seamless experience for visitors.\n" +
      "• Developed and connected a ticketing system to the website’s front-end, streamlining customer interactions and operations.",
    logo: "/images/tt.png",
  },
];

const ExperienceSection: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-32 px-4 max-w-5xl mx-auto " id="experience">
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Tabs */}
        <motion.div
          className="flex md:flex-col gap-4 md:min-w-[200px] w-full md:w-[250px]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {experiences.map((exp, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative p-3 w-full rounded-lg transition-all text-left font-bold ${
                activeIndex === index
                  ? "bg-white shadow-lg"
                  : "border-gray-50 hover:bg-zinc-100"
              }`}
            >
              {activeIndex === index && (
                <span className="absolute left-0 top-0 h-full w-1 bg-orange-600 rounded-l-lg"></span>
              )}
              <span
                className={`ml-2 ${
                  activeIndex === index
                    ? "text-orange-600 font-semibold"
                    : "text-gray-700"
                }`}
              >
                {exp.title}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <div className="flex-1 min-h-[450px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-2xl border border-gray-200 shadow-lg bg-white"
            >
              {experiences[activeIndex].logo && (
                <div className="flex justify-center mb-4">
                  <img
                    src={experiences[activeIndex].logo}
                    alt={`${experiences[activeIndex].company} logo`}
                    className="w-40 h-40 object-contain rounded-lg"
                  />
                </div>
              )}
              <h3 className="text-2xl font-semibold">
                {experiences[activeIndex].title}
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                {experiences[activeIndex].company} —{" "}
                {experiences[activeIndex].date}
              </p>
              <p className="text-gray-700 whitespace-pre-line">
                {experiences[activeIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
