export const site = {
  name: "Padmashree Arts",
  tagline: "Patachitra art from Odisha",
  description:
    "Handcrafted Odisha Patachitra wall hangings and designs for ladies, gents and kids. DM to order.",
  instagram: "https://instagram.com/padmashree_arts",
  dm: "https://ig.me/m/padmashree_arts",
  handle: "@padmashree_arts",
};

// Change the name and text below to match your artist.
export const artist = {
  name: "Amitosh Mishra",
  role: "Patachitra Artist",
  photo: "/artist.jpg",
  about: [
    "For our artist, Patachitra is more than a craft. It is a way to tell stories. Every line is drawn by hand, every colour is chosen with care, and every piece carries the feeling of Odisha's temples, gods and village life.",
    "Painting is a daily act of patience and love. It takes time, steady hands and a deep respect for the tradition, and that is what you feel when you hold a finished piece.",
  ],
  mission:
    "To keep the Patachitra tradition of Odisha alive, and to bring handcrafted art to more homes and wardrobes.",
  values: ["Handmade", "Traditional", "Made with love"],
};

export const categories = [
  { id: "wall", name: "Wall Hangings", text: "Traditional Patachitra scenes and motifs for your walls." },
  { id: "ladies", name: "Ladies", text: "Hand-painted sarees, stoles and designs made for women." },
  { id: "gents", name: "Gents", text: "Bold Patachitra designs for men." },
  { id: "kids", name: "Kids", text: "Playful, colourful pieces for little ones." },
];

// Rename titles or move items between categories here.
export const products: { id: number; title: string; category: string; image: string }[] = [
  { id: 1, title: "Radha Krishna Pond Scene", category: "ladies", image: "/products/p01.jpg" },
  { id: 2, title: "Swing Gopis, Black", category: "ladies", image: "/products/p02.jpg" },
  { id: 3, title: "Krishna Chariot, Blue & Purple", category: "ladies", image: "/products/p03.jpg" },
  { id: 4, title: "Raas Leela, Tussar", category: "ladies", image: "/products/p04.jpg" },
  { id: 5, title: "Village Gathering, Green", category: "ladies", image: "/products/p05.jpg" },
  { id: 6, title: "Hand-painted Plate", category: "wall", image: "/products/p06.jpg" },
  { id: 7, title: "Krishna Chariot Painting", category: "wall", image: "/products/p07.jpg" },
  { id: 9, title: "Boat Scene, Purple", category: "ladies", image: "/products/p09.jpg" },
  { id: 10, title: "Boat & Elephants, Blue", category: "ladies", image: "/products/p10.jpg" },
  { id: 11, title: "Deer & Palm, Maroon", category: "ladies", image: "/products/p11.jpg" },
  { id: 12, title: "Ram Chariot, Maroon", category: "ladies", image: "/products/p12.jpg" },
  { id: 14, title: "Musicians, Purple", category: "ladies", image: "/products/p14.jpg" },
  { id: 15, title: "Folk Story Panels", category: "ladies", image: "/products/p15.jpg" },
  { id: 16, title: "Krishna on Elephant", category: "wall", image: "/products/p16.jpg" },
  { id: 17, title: "Radha Krishna Medallion, Green", category: "ladies", image: "/products/p17.jpg" },
  { id: 18, title: "Wedding Procession, Purple", category: "ladies", image: "/products/p18.jpg" },
  { id: 19, title: "Deer & Tree, Red", category: "ladies", image: "/products/p19.jpg" },
];

export const steps = [
  { title: "Sketch", text: "The design is drawn by hand with fine, flowing lines." },
  { title: "Colour", text: "Bold, rich colours are filled in with care." },
  { title: "Detail", text: "Borders and small details finish the work." },
  { title: "Finish", text: "Each piece is checked and packed for you." },
];

export const orderSteps = [
  { title: "Browse", text: "Pick a design from the collection or on Instagram." },
  { title: "Send a DM", text: "Message us on Instagram with the design you like." },
  { title: "Confirm", text: "We share price, size and timeline with you." },
  { title: "Delivery", text: "Your piece is made and sent to you." },
];
