export interface Product {
  id: number;
  slug: string;
  img: string;
  images?: string[]; // Propiedad opcional para soportar múltiples imágenes en el slider
  title: string;
  category: string;
  tags: string[];
  description: string;
}

export const allProducts: Product[] = [
  {
    id: 1,
    slug: "1",
    img: "metal-door.webp",
    images: ["metal-door.webp"],
    title: "Metal Door",
    category: "Puertas",
    tags: ["Silver Metal", "Lion Heads", "Grid Design", "Decorative Rivets", "Robust Style"],
    description:
      "Monumental door made of silver metal with handcrafted lion head reliefs. Its structural grid design combines functionality and aesthetics, with decorative rivets that reinforce the solidity of the whole. Ideal for high-profile residential or commercial main entrances.",
  },
  {
    id: 2,
    slug: "2",
    img: "3D-Geometric-Copper-Wall-Sculpture.webp",
    images: [
      "3D-Geometric-Copper-Wall-Sculpture.webp",
      "3D-Geometric-Copper-Wall-Sculpture2.webp"
    ],
    title: "3D Metal Geometric Wall Sculpture",
    category: "Arte",
    tags: ["Wall Art", "Interior Decoration", "Copper Finish"],
    description:
      "Three-dimensional sculptural piece of high visual impact made of metal with an aged copper finish. Its geometry projects dynamic shadows according to ambient lighting, making it the focal point of any contemporary interior space.",
  },
  {
    id: 3,
    slug: "3",
    img: "Forged-Aluminum-Door-with-Heraldic-Crests.webp",
    images: [
      "Forged-Aluminum-Door-with-Heraldic-Crests.webp",
      "Forged-Aluminum-Door-with-Heraldic-Crests2.webp",
      "Heraldic-Crest.webp"
    ],
    title: "Wrought Iron Door with Heraldic Shields",
    category: "Puertas",
    tags: ["Wrought Iron", "Classic Style", "Heraldic Shields", "Gold Details", "Artistic Ironwork"],
    description:
      "Hand-wrought iron door with integrated heraldic shields and handcrafted gold details. Each piece is unique thanks to the manual forging technique, with finishes that evoke classic European architecture and long-lasting anti-corrosion protection.",
  },
  {
    id: 4,
    slug: "4",
    img: "Modern-Black-Stair-Railling.webp",
    images: [
      "Modern-Black-Stair-Railling.webp",
      "Modern-Black-Stair-Railling2.webp",
      "Modern-Black-Stair-Railling3.webp",
      "Modern-Black-Stair-Railling4.webp",
      "Modern-Black-Stair-Railling5.webp"
    ],
    title: "Modern Black Metal Stair Railing",
    category: "Barandales",
    tags: ["Black Metal", "Minimalist Design", "Horizontal Lines", "Modern Style", "Interiors"],
    description:
      "Contemporary design railing with horizontal crossbars in matte black metal. Its clean and minimalist profile integrates perfectly into modern and industrial architectures, complying with AWS D1.1 safety regulations for interior stairs and balconies.",
  },
  {
    id: 5,
    slug: "5",
    img: "Black-chandelier-with-gold-accents.webp",
    images: [
      "Black-chandelier-with-gold-accents.webp",
      "Black-chandelier-with-gold-accents2.webp",
      "Black-chandelier-with-gold-accents3.webp",
      "Black-chandelier-with-gold-accents4.webp"
    ],
    title: "Classic Wrought Iron Chandelier",
    category: "Iluminación",
    tags: ["Wrought Iron", "Classic Style", "Pendant Lamps", "Gold Details", "Artistic Ironwork"],
    description:
      "Coordinated set of chandeliers designed for tandem installation. Perfect for double-height spaces or wide hallways, they bring warmth and a classic character with hand-worked gold details.",
  },
  {
    id: 6,
    slug: "6",
    img: "Chandelier-with-gold-finishes.webp",
    images: [
      "Chandelier-with-gold-finishes.webp",
      "Chandelier-with-gold-finishes2.webp",
      "Chandelier-with-gold-finishes3.webp",
      "Chandelier-with-gold-finishes4.webp",
      "Chandelier-with-gold-finishes5.webp"
    ],
    title: "Medieval Style Wrought Iron Chandelier",
    category: "Iluminación",
    tags: ["Wrought Iron", "Medieval Style", "Pendant Lamps", "Gold Details", "Circular Design"],
    description:
      "Circular chandeliers inspired by the lighting of medieval castles and palaces. Made of wrought iron with gold applications, they create dramatic and warm environments. Available in multiple diameters according to space.",
  },
  {
    id: 7,
    slug: "7",
    img: "Aluminum-gate-with-a-wood-grain-paint-finish.webp",
    images: [
      "Aluminum-gate-with-a-wood-grain-paint-finish.webp",
      "Aluminum-gate-with-a-wood-grain-paint-finish2.webp"
    ],
    title: "Aluminum Gate with Wood Grain Finish",
    category: "Portones",
    tags: ["Aluminum", "Entrance Gate", "Grid Design", "Exterior", "Decorative Wood Color Finish"],
    description:
      "Exterior entrance gate made of high resistance aluminum with grid design panels and decorative imitation wood finish. Offers optimal privacy and cross ventilation, protected with a highly durable electrostatic finish against sea salt and Florida weathering.",
  },
  {
    id: 8,
    slug: "8",
    img: "matte-black-aluminum-gate.webp",
    images: ["matte-black-aluminum-gate.webp"],
    title: "Classic Aluminum Gate",
    category: "Portones",
    tags: ["Aluminum", "Lightweight", "Durable", "Entrance Gate", "Classic Style", "Arch Design", "Exterior"],
    description:
      "Double leaf exterior entrance gate with an arched design, made entirely of premium aluminum to ensure a lightweight structure, corrosion-free and highly durable. Its manufacture evokes the aesthetic elegance of classic wrought iron without its weight or maintenance. Includes security lock and coordinated hardware.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}

export function getRelatedProducts(
  currentId: number,
  category: string,
  limit = 3
): Product[] {
  return allProducts
    .filter((p) => p.id !== currentId && p.category === category)
    .slice(0, limit);
}