/**
 * When adding videos
 * Required: id, title, description, youtube video ID
 * Simply append to end of the list, will dynamically render via the videopages component
 */
export const videoData = [
  {
    id: 1,
    title: "Example Title",
    description:
      "Example Description",
    youtubeId: "BYNCsdumpI8",
  },
  {
    id: 2,
    title: "Example Title",
    description:
      "Example Description",
    youtubeId: "BYNCsdumpI8",
  },
  {
    id: 3,
    title: "Example Title",
    description:
      "Example Description",
    youtubeId: "BYNCsdumpI8",
  },

];

/**
 * When adding FAQs 
 * Required: question, answer
 * Just append to the end of the list. Will dynamically render via FAQS Page
 */
export const faqData = [
  {
    question: "Example FAQ",
    answer:
      "Example FAQ answer.",
  },
  // Add more FAQs as needed
];

/**
 * When adding quick links
 * Required: Label, link (href), description 
 * Just append to end of list, will dynamically render via quick links page.
 */
export const quickLinks = [
  {
    label: "Example quicklink",
    href: "https://www.perfectgame.org/Schedule/FeaturedGroups.aspx?PrtID=270",
    description:
      "BExample description",
  },

  // Add more as needed
];

/**
 * When adding SOPs
 * Required Label, Description 
 * Just append to end of list, will dynamically render via the SOP page
 */
export const sopLinks = [
  {
    label: "Example SOP",
    description:
      "Example SOP Description.",
  },

];
