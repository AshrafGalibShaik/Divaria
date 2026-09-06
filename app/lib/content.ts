export const site = {
  name: "Label Divaria",
  signature: "Divaria by Dimple",
  tagline: "Pret | Bridal",
  city: "Guntur, Andhra Pradesh",
  phone: "+91 00000 00000", // TODO: real number
  whatsapp: "910000000000", // TODO: digits only, country code first
  email: "atelier@labeldivaria.com", // TODO: real address
  instagram: "https://www.instagram.com/label_divaria/",
  facebook: "https://www.facebook.com/divariaofficial/",
} as const;

/** Everything in /public/gallery is the label's own Instagram archive. */
const img = (name: string) => `/gallery/${name}.jpg`;
/** Brand-designed posters from the same archive. */
const brand = (name: string) => `/brand/${name}.jpg`;

export type Piece = { name: string; note: string; src: string; alt: string };

export type Collection = {
  slug: string;
  name: string;
  eyebrow: string;
  blurb: string;
  intro: string;
  lead: string; // start to delivery
  cover: string;
  pieces: Piece[];
  /** Optional campaign card, e.g. a named collection launch. One of src or reel. */
  feature?: { title: string; body: string; src?: string; alt?: string; reel?: string };
};

export const collections: Collection[] = [
  {
    slug: "bridal",
    name: "Bridal Couture",
    eyebrow: "Made to order",
    blurb:
      "Kanjivaram, silk and tissue drapes built for the muhurtham, the reception and every ceremony between.",
    intro:
      "A bridal commission starts as a conversation with Dimple and ends in a fitting room. Nothing here is stocked. Each piece is cut for the bride who ordered it, so the same design never goes out twice.",
    lead: "16-20 weeks",
    cover: img("scarlet-02"),
    feature: {
      reel: "mannequin-to-bride",
      title: "Mannequin to bride",
      body: "The blouse is built on a form first, with the cups, the boning and the back opening settled before anyone tries it on. Then it goes on the bride and gets worked again. The piece in the film left the atelier looking exactly like that, for one wearer.",
    },
    pieces: [
      {
        name: "Muhurtham Kanjivaram",
        note: "Gold tissue, hand-worked blouse",
        src: img("muhurtham-04"),
        alt: "Bride in a gold tissue kanjivaram at the muhurtham",
      },
      {
        name: "Scarlet Silk",
        note: "Red on red, zardosi border",
        src: img("scarlet-01"),
        alt: "Bride in a scarlet silk saree under a red veil",
      },
      {
        name: "Blouse, Hand-Worked",
        note: "Open back, gold and stone work",
        src: img("muhurtham-11"),
        alt: "Back view of a hand-worked pink bridal blouse, open back, with the jadai over it",
      },
      {
        name: "Reception Drape",
        note: "Copper silk, pre-pleated",
        src: img("reception-14"),
        alt: "Bride in a copper silk saree at the reception",
      },
      {
        name: "Rose Tissue Set",
        note: "Blush tissue, gold check",
        src: img("muhurtham-06"),
        alt: "Bride in a blush tissue saree",
      },
      {
        name: "Kalamkari Lehenga",
        note: "Rust silk, kalamkari dupatta",
        src: img("editorial-05"),
        alt: "Bride in a rust orange lehenga with a hand-embroidered kalamkari dupatta",
      },
      {
        name: "Pellikuthuru Half Sarees",
        note: "Pink and yellow, made as a pair",
        src: img("pellikuthuru-01"),
        alt: "Two young women in pink and yellow half sarees at a pellikuthuru",
      },
    ],
  },
  {
    slug: "pret",
    name: "Pret",
    eyebrow: "Ready to wear",
    blurb:
      "Anarkalis, shararas and draped sets for the days around the wedding, and the years after it.",
    intro:
      "Pret is the lighter end of the workroom. Cleaner lines and less hand-work, so a piece can go to a family lunch and then to a sangeet without looking wrong at either.",
    lead: "3-5 weeks",
    cover: img("pret-02"),
    feature: {
      src: brand("mul"),
      alt: "Introducing the Mul collection",
      title: "The Mul Collection",
      body: "Timeless silhouettes, delicate craftsmanship and the finest mul fabric, created for effortless elegance every day.",
    },
    pieces: [
      {
        name: "Mul Anarkali",
        note: "From the Mul collection",
        src: img("pret-07"),
        alt: "Mustard cotton anarkali set from the Mul collection",
      },
      {
        name: "Sharara Set, Sage",
        note: "Chikan-worked, unlined",
        src: img("pret-01"),
        alt: "Sage green sharara set with a scalloped dupatta",
      },
      {
        name: "Meadow Gown",
        note: "Thread work on the bodice",
        src: img("pret-02"),
        alt: "Pale mint gown with floral thread work on the bodice",
      },
      {
        name: "Lilac Anarkali",
        note: "Multicolour floral thread work",
        src: img("pret-03"),
        alt: "Lilac anarkali with multicolour floral thread work",
      },
      {
        name: "Ivory Anarkali",
        note: "Bell sleeve, silk organza",
        src: img("pret-05"),
        alt: "Ivory anarkali with bell sleeves and an embroidered yoke",
      },
      {
        name: "Draped Kaftan, Black",
        note: "Sequin jacket, crepe drape",
        src: img("pret-06"),
        alt: "Black draped kaftan worn with a sequinned jacket",
      },
      {
        name: "Rani Pink Kurta Set",
        note: "Georgette, tonal thread",
        src: img("pret-08"),
        alt: "Rani pink kurta set with a matching dupatta",
      },
      {
        name: "Corset Bodice",
        note: "Boned, cup-fitted to measure",
        src: img("pret-04"),
        alt: "Ivory corset bodice with pastel floral work, on a dress form",
      },
    ],
  },
  {
    slug: "menswear",
    name: "Menswear & Family",
    eyebrow: "For the groom and the party",
    blurb:
      "Kurtas, panchas and layered sets cut on the same table, to the same calendar, as the bride's.",
    intro:
      "Grooms are measured and fitted in the same workroom, on the same calendar as the bride. That is why the colours and the hand-work look related when everyone stands together.",
    lead: "8-10 weeks",
    cover: img("reception-07"),
    feature: {
      reel: "tailored-to-you",
      title: "Tailored to you",
      body: "The design is drawn on a tablet, then cut, stitched and adjusted on the body until the shoulder sits right. Tailored for moments that matter.",
    },
    pieces: [
      {
        name: "Muhurtham Pancha Set",
        note: "Cream silk, gold border",
        src: img("muhurtham-03"),
        alt: "Groom in a cream kurta and pancha beside the bride, both garlanded",
      },
      {
        name: "Rose Kurta Set",
        note: "Tonal thread, matched to the bride",
        src: img("muhurtham-16"),
        alt: "Couple in matched rose pink at the wedding",
      },
      {
        name: "Groom and Party",
        note: "Made together, one palette",
        src: img("reception-07"),
        alt: "Couple and family in matched cream and gold silk",
      },
      {
        name: "Ceremony Kurta",
        note: "Silk, minimal work",
        src: img("reception-10"),
        alt: "Couple in silk under a floral mandapam",
      },
      {
        name: "Family Edit",
        note: "Six pieces, one commission",
        src: img("reception-06"),
        alt: "Couple and family in matched pastels and cream",
      },
      {
        name: "Muhurtham Kurta",
        note: "Ivory, thread and sequin",
        src: img("muhurtham-09"),
        alt: "Couple seated during the wedding rituals",
      },
    ],
  },
  {
    slug: "bespoke",
    name: "Customised Designer Wear",
    eyebrow: "One commission at a time",
    blurb:
      "Half sarees, haldi sets and family edits, drafted from a sketch or from a fabric you have carried for years.",
    intro:
      "Bring a sketch, a photograph, or a saree that belonged to your mother. Dimple drafts a fresh pattern for it, makes a toile, and fits it until it is right.",
    lead: "10-14 weeks",
    cover: img("halfsaree-01"),
    pieces: [
      {
        name: "Voni, Purple and Gold",
        note: "Half saree, drafted to measure",
        src: img("halfsaree-01"),
        alt: "Young woman in a purple and gold half saree",
      },
      {
        name: "Haldi Saree, Mauve",
        note: "Handloom silk, light body",
        src: img("haldi-02"),
        alt: "Woman in a mauve handloom saree against marigolds at a haldi",
      },
      {
        name: "Sister Sets",
        note: "One palette, many people",
        src: img("haldi-05"),
        alt: "Two young women in green and lilac half sarees",
      },
      {
        name: "Pellikuthuru Pink",
        note: "Pink, green and yellow",
        src: img("pellikuthuru-03"),
        alt: "Two young women in pink, green and yellow at a pellikuthuru",
      },
      {
        name: "Family Occasion Edit",
        note: "One family, one palette",
        src: img("halfsaree-03"),
        alt: "A family of five in coordinated pink and lilac occasion wear",
      },
      {
        name: "Haldi Green",
        note: "Kanjivaram, contemporary drape",
        src: img("haldi-07"),
        alt: "Woman in a green kanjivaram saree against marigolds at a haldi",
      },
    ],
  },
];

/** Enquiry categories, tied to a collection so lead times can be quoted live. */
export const enquiryOptions = [
  { label: "Bridal couture", slug: "bridal" },
  { label: "Pret", slug: "pret" },
  { label: "Menswear & family", slug: "menswear" },
  { label: "Customised designer wear", slug: "bespoke" },
  { label: "Trousseau or family edit", slug: "bridal" },
];

export const journey = [
  {
    step: "01",
    title: "Consultation",
    body: "A call or a visit with Dimple. Occasion, dates, palette, budget. Video consultations are scheduled to your time zone.",
  },
  {
    step: "02",
    title: "Design",
    body: "Sketches, fabric and hand-work samples. Nothing goes to the karigars until the drawing is signed off.",
  },
  {
    step: "03",
    title: "Measurement",
    body: "In the atelier, or a guided self-measurement session on video for clients abroad. We keep your chart on file.",
  },
  {
    step: "04",
    title: "Fittings",
    body: "Two to three fittings for couture. For overseas clients, a fit garment is shipped ahead of the final piece.",
  },
  {
    step: "05",
    title: "Delivery",
    body: "Hand-finished, pressed, packed and shipped worldwide with tracking and insurance.",
  },
];

export const press = {
  cover: img("press-01"),
  alt: "She Tamil magazine cover featuring a Label Divaria lehenga",
  title: "She Tamil, cover",
  note: "The rust lehenga, worn by Saanve Meghana",
};

export const atelierArt = {
  craft: img("muhurtham-11"),
  craftAlt: "Detail of hand embroidery on an open-back bridal blouse",
};

/** Copy and artwork lifted from the label's own brand posters. */
export const story = {
  tagline: "A garden of heritage, woven in every thread.",
  manifesto:
    "A label born not out of trend, but out of truth. A brand built through challenges, trust, and craftsmanship. A designer-led house that believes fashion isn't just what you wear, it's how you feel.",
  /** The closing line, kept apart so it can be set apart. */
  manifestoClose: "This is Dimple's journey. This is Label Divaria.",
  paragraphs: [
    "Fifteen years ago, in a time when designer boutiques were rare in India, Dimple launched Label Divaria from a tiny shop with a single karigar and a head full of designs.",
    "What began as a passion project grew organically through client trust, word of mouth, and an unwavering commitment to quality. From sketching on email to dressing over 5,000 clients across South India and beyond, Dimple built more than a label. She built lasting relationships.",
    "Today, Label Divaria returns to its roots with renewed vision, original collections, and the same heart that started it all.",
  ],
  stats: [
    ["15 yrs", "Since the first shop"],
    ["5,000+", "Clients dressed"],
    ["1 → many", "Karigars, still in-house"],
  ],
};

export const art = {
  motif: brand("motif-birds"),
  motifAlt: "Illustrated parakeets and jharokha arches, a Divaria house motif",
  heirloom: brand("heirloom"),
  heirloomAlt: "A karigar tracing an embroidery pattern onto net by hand",
  story: brand("brand-story"),
  storyAlt: "The Label Divaria brand story, set on a red banarasi border",
  texture: brand("texture-leaf"),
  house: img("editorial-01"),
  houseAlt:
    "Model in an orange silk blouse and kalamkari drape, shot against a warm ground",
};

/** Silent looping clips in /public/film (16s or less, poster frame alongside). */
export const film = {
  making: [
    { name: "before-it-gets-to-you", label: "Hand embroidery on a red bridal blouse, before it reaches the client", caption: "Before it gets to you" },
    { name: "motifs", label: "Aari work: hand-crafted motifs being stitched on a frame", caption: "Hand-crafted motifs" },
    { name: "loom", label: "The loom in action, different weaves in one day", caption: "Loom in action" },
  ],
  atelier: [
    { name: "behind-the-seams", label: "Close-up of gold thread and stone work, behind the scenes", caption: "Behind the scenes" },
    { name: "process-vs-design", label: "Gold mesh work on purple, the process beside the finished design", caption: "The process vs the design" },
  ],
  showroom: { name: "showroom", label: "Clients in kanjivaram sarees inside the Divaria boutique", caption: "In the boutique" },
  /** The same clip cropped past its own titles, for use behind type. */
  hero: {
    name: "kaadhal-hero",
    label: "A karigar embroidering a gold parakeet for the Kaadhal collection",
  },
  /** The collection the hero clip is teasing. */
  teaser: { season: "Spring/Summer '26", title: "Kaadhal" },
};

/** Dimple's own introduction. Captions are burned into the clip; the quotes below
    are transcribed from it verbatim. */
export const founder = {
  clip: "/film/founder.mp4",
  poster: "/film/founder.jpg",
  name: "Dimple B",
  role: "Founder, Label Divaria",
  quote: "I have been part of hundreds of weddings, and it still gives me goosebumps.",
  closing: "Where that feels personal, and truly yours.",
  gist: "She introduces herself, counts fifteen years of dressing brides and their families, and describes how a client usually turns up wanting one outfit and then comes back for the wedding, the reception, and the celebration after that. Fabric, colour and fine embroidery are what she says separate simply dressing from standing out.",
};
