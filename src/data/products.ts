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
    img: "product1.webp",
    images: ["product1.webp", "product2.webp"],
    title: "Puerta Metálica",
    category: "Puertas",
    tags: ["Metal Plateado", "Cabezas de León", "Diseño de Rejilla", "Remaches Decorativos", "Estilo Robusto"],
    description:
      "Puerta monumental fabricada en metal plateado con relieves artesanales de cabezas de león. Su diseño de rejilla estructural combina funcionalidad y estética, con remaches decorativos que refuerzan la solidez del conjunto. Ideal para entradas principales residenciales o comerciales de alto perfil.",
  },
  {
    id: 3,
    slug: "3",
    img: "product3.webp",
    images: ["product3.webp"],
    title: "Escultura de Pared Geométrica en Metal 3D",
    category: "Arte",
    tags: ["Arte de Pared", "Decoracion de Interiores", "Acabado Cobre"],
    description:
      "Pieza escultórica tridimensional de alto impacto visual fabricada en metal con acabado de cobre envejecido. Su geometría proyecta sombras dinámicas según la iluminación ambiente, convirtiéndola en el elemento focal de cualquier espacio interior contemporáneo.",
  },
  {
    id: 4,
    slug: "4",
    img: "product4.webp",
    images: ["product19.webp", "product4.webp", "product5.webp"],
    title: "Puerta de Hierro Forjado con Escudos Heráldicos",
    category: "Puertas",
    tags: ["Hierro Forjado", "Estilo Clásico", "Escudos Heráldicos", "Detalles Dorados", "Herrería Artística"],
    description:
      "Puerta de hierro forjado a mano con escudos heráldicos integrados y detalles en dorado artesanal. Cada pieza es única gracias a la técnica de forja manual, con acabados que evocan la arquitectura europea clásica y protección anticorrosiva de larga duración.",
  },
  {
    id: 7,
    slug: "7",
    img: "product8.webp",
    images: ["product8.webp", "product11.webp", "product8.webp"],
    title: "Barandal de Escalera Moderno en Metal Negro",
    category: "Barandales",
    tags: ["Metal Negro", "Diseño Minimalista", "Líneas Horizontales", "Estilo Moderno", "Interiores"],
    description:
      "Barandal de diseño contemporáneo con travesaños horizontales en metal negro mate. Su perfil limpio y minimalista se integra perfectamente en arquitecturas modernas e industriales, cumpliendo normativas de seguridad AWS D1.1 para escaleras y balcones interiores.",
  },
  {
    id: 13,
    slug: "13",
    img: "product12.webp",
    images: ["product13.webp", "product12.webp"],
    title: "Candelabros",
    category: "Iluminación",
    tags: ["Hierro Forjado", "Estilo Clásico", "Lámparas Colgantes", "Detalles Dorados", "Herrería Artística"],
    description:
      "Conjunto coordinado de candelabros diseñados para instalación en tándem. Perfectos para espacios de doble altura o pasillos amplios, aportan calidez y carácter clásico con detalles dorados trabajados a mano.",
  },
  {
    id: 14,
    slug: "14",
    img: "product14.webp",
    images: ["product14.webp"],
    title: "Candelabros",
    category: "Iluminación",
    tags: ["Hierro Forjado", "Estilo Medieval", "Lámparas Colgantes", "Detalles Dorados", "Diseño Circular"],
    description:
      "Candelabros de forma circular inspirados en la iluminación de castillos y palacios medievales. Fabricados en hierro forjado con aplicaciones doradas, crean ambientes dramáticos y cálidos. Disponibles en múltiples diámetros según el espacio.",
  },
  {
    id: 17,
    slug: "17",
    img: "product17.webp",
    images: ["product17.webp"],
    title: "Portón de Aluminio",
    category: "Portones",
    tags: ["Aluminio", "Portón de Entrada", "Diseño de Rejilla", "Exterior", "Terminacion color madera Decorativa"],
    description:
      "Portón de entrada exterior fabricado en aluminio de alta resistencia con paneles en diseño de rejilla y terminación decorativa imitación madera. Ofrece privacidad óptima y ventilación cruzada, protegido con un acabado electrostático de alta durabilidad ante el salitre marino y la intemperie de Florida.",
  },
  {
    id: 20,
    slug: "20",
    img: "product20.webp",
    images: ["product20.webp"],
    title: "Portón de Aluminio Clásico",
    category: "Portones",
    tags: ["Aluminio", "Ligero", "Durable", "Portón de Entrada", "Estilo Clásico", "Diseño con Arco", "Exterior"],
    description:
      "Portón de entrada exterior de dos hojas con diseño arqueado, fabricado íntegramente en aluminio premium para asegurar una estructura ligera, libre de corrosión y sumamente durable. Su manufactura evoca la elegancia estética del hierro forjado clásico sin su peso ni mantenimiento. Incluye cerradura de seguridad y herrajes coordinados.",
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