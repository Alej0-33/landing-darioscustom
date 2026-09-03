export interface Product {
  id: number;
  slug: string;
  img: string;
  images?: string[]; 
  title: string;
  category: string;
  tags: string[];
  description: string;
  extendedContent?: {
    subtitle: string;
    intro: string;
    sections: Array<{ heading: string; text: string }>;
    specificationsTable: Array<{ label: string; value: string }>;
  };
}

export const allProducts: Product[] = [
  {
    id: 1,
    slug: "metal-door-lion-heads",
    img: "metal-door.webp",
    images: ["metal-door.webp"],
    title: "Metal Door",
    category: "Puertas",
    tags: ["Silver Metal", "Lion Heads", "Grid Design", "Decorative Rivets", "Robust Style"],
    description: "Monumental monumental silver metal entrance door featuring handcrafted lion head reliefs, engineered by master blacksmith Dario in Miami. Built with a heavy structural grid, decorative rivets, and certified for hurricane impact resistance under Florida Building Code standards.",
    extendedContent: {
      subtitle: "The Pinnacle of Monumental Metal Craftsmanship & Estate Security in South Florida",
      intro: "At Dario's Custom Iron Art, we don't manufacture mass-produced entryways. Every monumental metal door with lion head reliefs is a bespoke masterpiece hand-forged in our local Miami workshop. Designed specifically for luxury residential estates, historical restorations, and high-profile commercial properties across Miami-Dade, Coral Gables, Doral, and Star Island, this entrance combines classical sculptural elements with unyielding modern engineering.",
      sections: [
        {
          heading: "Artistic Forging & Architectural Heritage",
          text: "The conceptual foundation of this monumental metal door lies in Renaissance and European classical architecture, adapted meticulously to the modern luxury standards of South Florida. Master blacksmith Dario hand-sculpts each lion head relief, infusing traditional metal artistry with contemporary structural demands. The integration of heavy structural grid work creates a commanding visual rhythm, establishing an immediate sense of grandeur and uncompromising security the moment you approach the entrance."
        },
        {
          heading: "Engineering for the Miami Climate & Hurricane Resistance",
          text: "Properties in Miami, Key Biscayne, and Pinecrest face unique environmental challenges: aggressive coastal salt spray, intense UV radiation, and high-velocity hurricane winds. This heavy-duty metal door is engineered to strictly comply with the Florida Building Code (FBC). It is structurally reinforced to withstand wind speeds of up to 175 mph, ensuring that your property remains completely protected during severe tropical storm seasons without sacrificing an ounce of artistic elegance."
        },
        {
          heading: "Advanced Powder Coating & Corrosion Protection",
          text: "To combat humidity and coastal salinity, raw steel and metal components undergo an intensive multi-stage treatment process. Following meticulous hand-welding and mechanical smoothing, the entire structure is sealed using an advanced electrostatic Powder Coating finish, baked at over 400 degrees Fahrenheit. This thermoset protective layer fuses permanently to the metal, creating an impenetrable shield against rust, peeling, and fading under the relentless Florida sun."
        },
        {
          heading: "Bespoke Customization & Tailored Fit",
          text: "Because every estate has distinct architectural dimensions, this monumental metal door is built strictly to measure. During our initial technical visit, Dario's team evaluates your entryway's precise load-bearing requirements, threshold alignment, and automated access control integration. Whether you prefer single-door configurations, grand double entryways, or matching sidelights, every component is customized precisely to your architectural vision."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Heavy-gauge Architectural Steel & Custom Metal Alloys" },
        { label: "Artistic Accents", value: "Hand-sculpted Lion Head Reliefs & Forged Decorative Rivets" },
        { label: "Surface Protection", value: "Electrostatic High-Temp Powder Coating (UV & Salt Resistant)" },
        { label: "Wind Load Certification", value: "Engineered to FBC Standards (Up to 175 MPH Hurricane Resistance)" },
        { label: "Manufacturing Origin", value: "100% Handcrafted in Miami, Florida Workshop" },
        { label: "Ideal Applications", value: "Luxury Residential Estates, Waterfront Mansions, High-Profile Commercial Entries" },
        { label: "Maintenance Requirements", value: "Low Maintenance (Periodic cleaning with mild soap and water every 3–6 months)" }
      ]
    }
  },
  {
    id: 2,
    slug: "3d-metal-geometric-wall-sculpture",
    img: "3D-Geometric-Copper-Wall-Sculpture.webp",
    images: ["3D-Geometric-Copper-Wall-Sculpture.webp", "3D-Geometric-Copper-Wall-Sculpture2.webp"],
    title: "3D Metal Geometric Wall Sculpture",
    category: "Arte",
    tags: ["Wall Art", "Interior Decoration", "Copper Finish"],
    description: "Three-dimensional sculptural piece of high visual impact made of metal with an aged copper finish. Its geometry projects dynamic shadows according to ambient lighting, making it the focal point of any contemporary interior space.",
    extendedContent: {
      subtitle: "The Fusion of Architectural Geometry and Avant-Garde Metal Art in Miami Interiors",
      intro: "At Dario's Custom Iron Art, metal transcends structural utility to become a profound medium for artistic expression. This 3D Metal Geometric Wall Sculpture represents the intersection of precision engineering and modern abstract sculpture. Hand-crafted in our Miami workshop for high-end residential penthouses, corporate boardrooms, and luxury foyer installations across Brickell, Coral Gables, and Miami Beach, this statement piece transforms blank architectural walls into dynamic focal points of light, shadow, and texture.",
      sections: [
        {
          heading: "Sculptural Geometry & Spatial Dynamics",
          text: "The conceptual power of this wall sculpture stems from multi-layered geometric folding and precise spatial triangulation. Master metal artisans construct each facet by hand, aligning angles so that the sculpture interacts continuously with its environment. As ambient sunlight shifts across rooms or interior track lighting adjusts throughout the evening, the piece projects shifting shadows that give the metal a living, breathing quality."
        },
        {
          heading: "Aged Copper Patina & Artisanal Finishes",
          text: "Color and texture are critical components of high-end interior design. This piece features a hand-applied aged copper finish developed through specialized chemical and thermal treatments. The resulting patina exhibits rich tonal variations—from warm metallic coppers to deep, oxidized bronze undertones—ensuring that no two sculptures are ever identical. A protective clear-coat seal is baked on to lock in the patina, preventing tarnishing while preserving its organic luster."
        },
        {
          heading: "Custom Scale and Architectural Integration",
          text: "Luxury interiors demand exact proportions. Whether designed as an intimate accent piece for a private dining alcove or scaled into a monumental multi-panel wall installation for a double-height hotel lobby, Dario's workshop customizes the dimensions, projection depth, and mounting hardware to integrate seamlessly with your drywall, concrete, or stone surfaces."
        },
        {
          heading: "Built for Durability & Secure Wall Mounting",
          text: "Despite its delicate, lightweight optical illusion, the sculpture is fabricated from durable, rigid metal substrates engineered for long-term structural integrity. Hidden heavy-duty mounting brackets ensure a flush, secure installation that meets professional safety standards while keeping structural fasteners entirely invisible from any viewing angle."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "High-Grade Architectural Metal Alloy with Hand-Welded Joints" },
        { label: "Surface Finish", value: "Aged Copper Patina with Protective Clear-Coat Seal" },
        { label: "Dimensional Design", value: "Multi-Tiered 3D Geometric Relief with Dynamic Light Projection" },
        { label: "Manufacturing Origin", value: "Handcrafted to Order in Miami, Florida" },
        { label: "Mounting System", value: "Concealed Heavy-Duty Structural Cleats & Anchors Included" },
        { label: "Ideal Applications", value: "Luxury Penthouse Living Rooms, Corporate Lobbies, Modern Foyers, Architectural Accents" },
        { label: "Maintenance", value: "Dust gently with a microfiber cloth; avoid abrasive chemical cleaners" }
      ]
    }
  },
  {
    id: 3,
    slug: "wrought-iron-door-heraldic-shields",
    img: "Forged-Aluminum-Door-with-Heraldic-Crests.webp",
    images: ["Forged-Aluminum-Door-with-Heraldic-Crests.webp", "Forged-Aluminum-Door-with-Heraldic-Crests2.webp", "Forged-Aluminum-Door-with-Heraldic-Crests3.webp", "Forged-Aluminum-Door-with-Heraldic-Crests4.webp", "Heraldic-Crest.webp", "Heraldic-Crest2.webp"],
    title: "Wrought Iron Door with Heraldic Shields",
    category: "Puertas",
    tags: ["Wrought Iron", "Classic Style", "Heraldic Shields", "Gold Details", "Artistic Ironwork"],
    description: "Hand-wrought iron door with integrated heraldic shields and handcrafted gold details. Each piece is unique thanks to the manual forging technique, with finishes that evoke classic European architecture and long-lasting anti-corrosion protection.",
    extendedContent: {
      subtitle: "Majestic European Craftsmanship & Custom Heraldic Forging for South Florida Estates",
      intro: "At Dario's Custom Iron Art, we specialize in translating centuries-old architectural heritage into monumental, secure entryways for modern luxury properties. The Wrought Iron Door with Heraldic Shields is an artistic tour de force, individually hand-forged in our Miami workshop. Tailored for high-end Mediterranean, Spanish revival, and classical estates across Coral Gables, Pinecrest, and Star Island, this entrance integrates custom family crests with uncompromising structural defense.",
      sections: [
        {
          heading: "Traditional Blacksmithing & Custom Heraldry",
          text: "The creation of a heraldic iron door requires elite mastery of traditional anvil forging. Master artisan Dario hand-hammers heavy-gauge iron bars, scrolls, and structural cages, incorporating custom heraldic shields and family crests tailored precisely to your lineage or architectural aesthetic. Hand-applied gold leaf details accent the crest reliefs, creating a striking visual contrast against the dark, textured forged iron framework."
        },
        {
          heading: "Engineered for Miami's Climate & Hurricane Standards",
          text: "While inspired by historic European castles and palatial manors, this door is built explicitly for the aggressive tropical environment of South Florida. Fully compliant with the strict Florida Building Code (FBC), the assembly incorporates reinforced internal steel framing and heavy-duty weather stripping designed to withstand wind loads up to 175 mph and torrential wind-driven rain."
        },
        {
          heading: "Advanced Corrosion Defense & Powder Coating",
          text: "Coastal salt air and high relative humidity are primary catalysts for metal degradation in Miami. To guarantee lifelong durability, every square inch of the ironwork undergoes abrasive grit-blasting, chemical priming, and a multi-stage electrostatic powder coating process baked at high temperatures. This ensures the intricate gold accents and black iron base remain completely immune to blistering, rust, and salt corrosion."
        },
        {
          heading: "Bespoke Integration & Security Hardware",
          text: "Every entryway is measured and custom-built to fit your structural rough opening. We collaborate closely with builders and architects to integrate multipoint locking systems, automated smart-entry deadbolts, and heavy-duty pivot or barrel hinges capable of supporting substantial weight while ensuring effortless, silent operation."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Hand-Forged Architectural Iron & Heavy Structural Steel" },
        { label: "Artistic Embellishments", value: "Custom Heraldic Shields, Hand-Hammered Scrolls & Gold Leaf Accents" },
        { label: "Surface Treatment", value: "Multi-Stage Anti-Corrosion Primer & Baked Electrostatic Powder Coating" },
        { label: "Weather Resistance", value: "Engineered to FBC Standards (Hurricane Impact & Wind Load Certified)" },
        { label: "Manufacturing Location", value: "Custom Built in Miami, Florida Workshop" },
        { label: "Recommended Uses", value: "Mediterranean Estates, Luxury Waterfront Mansions, Historic Architectural Projects" },
        { label: "Hardware Options", value: "Compatible with Multi-Point Locking Systems and Smart Access Control" }
      ]
    }
  },
  {
    id: 4,
    slug: "modern-black-metal-stair-railing",
    img: "Modern-Black-Stair-Railling.webp",
    images: ["Modern-Black-Stair-Railling.webp", "Modern-Black-Stair-Railling2.webp", "Modern-Black-Stair-Railling3.webp", "Modern-Black-Stair-Railling4.webp", "Modern-Black-Stair-Railling5.webp"],
    title: "Modern Black Metal Stair Railing",
    category: "Barandales",
    tags: ["Black Metal", "Minimalist Design", "Horizontal Lines", "Modern Style", "Interiors"],
    description: "Contemporary design railing with horizontal crossbars in matte black metal. Its clean and minimalist profile integrates perfectly into modern and industrial architectures, complying with AWS D1.1 safety regulations for interior stairs and balconies.",
    extendedContent: {
      subtitle: "Sleek Minimalist Engineering & Certified Structural Safety for Contemporary Miami Interiors",
      intro: "At Dario's Custom Iron Art, we design and fabricate architectural metal railings that merge uncompromising safety with clean, modern aesthetics. The Modern Black Metal Stair Railing is crafted for contemporary residences, luxury lofts, and architectural commercial spaces across Miami, Brickell, and Doral. Featuring precise horizontal lines and a sophisticated matte black finish, this railing system defines open-concept interior spaces while strictly satisfying rigorous structural codes.",
      sections: [
        {
          heading: "Minimalist Architectural Design & Flow",
          text: "Contemporary interior architecture relies heavily on clean sightlines and uninterrupted visual flow. This railing utilizes slender vertical posts paired with precise horizontal crossbars, creating a streamlined, low-profile geometric appearance. The linear configuration enhances the sense of space and natural light dispersion across stairwells, mezzanines, and elevated landings without visual clutter."
        },
        {
          heading: "Certified Welding & Structural Compliance (AWS D1.1)",
          text: "Safety is paramount in any multi-level residential or commercial project. Every joint, weld, and anchor point in this railing system is executed by certified professionals adhering strictly to AWS D1.1 structural welding standards. The framing is engineered to withstand high lateral load requirements, ensuring rigid stability, zero flex, and full compliance with local building codes for interior stairways and balconies."
        },
        {
          heading: "Matte Black Powder Coating & Surface Finish",
          text: "To achieve a luxurious texture that resists scuffs, fingerprints, and wear, the metal undergoes meticulous grinding, sanding, and degreasing before receiving a high-grade electrostatic matte black powder coat. This baked-on finish offers superior durability compared to standard liquid paints, ensuring a deep, uniform charcoal-black tone that retains its flawless finish for decades."
        },
        {
          heading: "Custom Fabrication for Complex Stair Geometries",
          text: "No two staircases share identical angles or run lengths. Dario's team conducts precise on-site laser measurements in your home or commercial space to custom-fabricate every section. Whether adapting to floating wood stairs, concrete steps, or glass-edge landings, the installation fits seamlessly with absolute millimeter accuracy."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "High-Strength Structural Steel & Architectural Metal Alloys" },
        { label: "Profile Configuration", value: "Slim Vertical Posts with Multi-Tier Horizontal Crossbars" },
        { label: "Surface Finish", value: "Electrostatic Matte Black Powder Coat (Anti-Scratch & UV Stable)" },
        { label: "Welding Certification", value: "Executed to AWS D1.1 Structural Standards" },
        { label: "Manufacturing Location", value: "Custom Built in Miami, Florida Workshop" },
        { label: "Recommended Applications", value: "Modern Residential Stairs, Loft Mezzanines, Open-Concept Balconies" },
        { label: "Safety Compliance", value: "Engineered to Meet and Exceed Local Residential/Commercial Building Codes" }
      ]
    }
  },
  {
    id: 5,
    slug: "classic-wrought-iron-chandelier",
    img: "Black-chandelier-with-gold-accents.webp",
    images: ["Black-chandelier-with-gold-accents.webp", "Black-chandelier-with-gold-accents2.webp", "Black-chandelier-with-gold-accents3.webp", "Black-chandelier-with-gold-accents4.webp"],
    title: "Classic Wrought Iron Chandelier",
    category: "Iluminación",
    tags: ["Wrought Iron", "Classic Style", "Pendant Lamps", "Gold Details", "Artistic Ironwork"],
    description: "Coordinated set of chandeliers designed for tandem installation. Perfect for double-height spaces or wide hallways, they bring warmth and a classic character with hand-worked gold details.",
    extendedContent: {
      subtitle: "Hand-Forged Masterpieces & High-Ceiling Illumination for Luxury Miami Residences",
      intro: "At Dario's Custom Iron Art, lighting is treated as monumental sculptural art. The Classic Wrought Iron Chandelier set is meticulously hand-forged in our Miami workshop, specifically designed for grand double-height foyers, expansive dining rooms, and luxury architectural spaces across Coral Gables, Pinecrest, and Star Island. Featuring delicate hand-worked gold accents over a deep black iron framework, these coordinating fixtures combine old-world warmth with rigorous modern electrical engineering.",
      sections: [
        {
          heading: "Artistic Blacksmithing & Tandem Harmony",
          text: "Master blacksmith Dario shapes each arm, scroll, and candle cup entirely by hand, ensuring organic movement and balanced symmetry across the entire fixture. Designed as a coordinated set for tandem installation, these chandeliers create visual continuity throughout large open floor plans, echoing classical European palatial design while tailored strictly to contemporary scaling requirements."
        },
        {
          heading: "Engineering for High Ceilings & Structural Safety",
          text: "Hanging massive iron light fixtures in vaulted or double-height ceilings demands precise structural planning. Every chandelier includes customized suspension rods or reinforced chains engineered to handle total deadweight safely. We calculate ceiling anchor points, distribution loads, and electrical junction requirements to guarantee absolute stability and safety compliance."
        },
        {
          heading: "Hand-Worked Gold Leaf & Protective Finishes",
          text: "The rich contrast between the matte black iron body and the hand-applied gold leaf details elevates the fixture's visual depth. Protected with high-grade clear sealants, the metals resist indoor humidity and oxidation, maintaining their opulent luster and gallery-quality finish for generations."
        },
        {
          heading: "Custom Dimensions & Electrical Integration",
          text: "Because luxury properties vary drastically in ceiling height and room volume, every chandelier can be customized in diameter, tier count, and drop length. Our workshop coordinates seamlessly with your interior designers and electricians to ensure smooth installation and compatibility with modern dimmer systems."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Hand-Forged Wrought Iron & Structural Steel Frame" },
        { label: "Artistic Details", value: "Hand-Worked Gold Leaf Accents & Scrollwork" },
        { label: "Surface Finish", value: "Matte Black Protective Enamel with Sealed Gold Highlights" },
        { label: "Installation Type", value: "Vaulted Ceiling, Double-Height Foyer, or Grand Dining Room Suspension" },
        { label: "Manufacturing Location", value: "Handcrafted in Miami, Florida Workshop" },
        { label: "Safety Engineering", value: "Custom Weight Calculation & Secure Ceiling Anchoring System" },
        { label: "Customization", value: "Adjustable Drop Lengths, Tier Counts, and Diameter Sizing" }
      ]
    }
  },
  {
    id: 6,
    slug: "medieval-style-wrought-iron-chandelier",
    img: "Chandelier-with-gold-finishes.webp",
    images: ["Chandelier-with-gold-finishes.webp", "Chandelier-with-gold-finishes2.webp", "Chandelier-with-gold-finishes3.webp", "Chandelier-with-gold-finishes4.webp", "Chandelier-with-gold-finishes5.webp"],
    title: "Medieval Style Wrought Iron Chandelier",
    category: "Iluminación",
    tags: ["Wrought Iron", "Medieval Style", "Pendant Lamps", "Gold Details", "Circular Design"],
    description: "Circular chandeliers inspired by the lighting of medieval castles and palaces. Made of wrought iron with gold applications, they create dramatic and warm environments. Available in multiple diameters according to space.",
    extendedContent: {
      subtitle: "Palatial Circular Iron Chandeliers Inspired by Historic European Castles",
      intro: "Evoking the dramatic ambiance of historic European fortresses and grand cathedrals, the Medieval Style Wrought Iron Chandelier brings imposing scale and romantic warmth to high-end interiors. Forged by hand in our Miami workshop, this grand circular ring chandelier is a favorite among architects and luxury homeowners looking to establish an unforgettable focal point in large dining halls, rustic luxury ranches, and Spanish-revival estates.",
      sections: [
        {
          heading: "Monumental Circular Forging Techniques",
          text: "Constructing a large-diameter circular chandelier requires expert thermal bending and structural ring welding. Master blacksmith Dario crafts the heavy iron hoop by hand, reinforcing it with radial braces and ornate scroll brackets. This robust ring structure supports multiple light tiers or candle sleeves, delivering balanced 360-degree illumination."
        },
        {
          heading: "Aged Gold Leaf & Historic Patinas",
          text: "The fixture's dramatic presence is enhanced by a distressed iron finish paired with hand-brushed gold applications along the edges and rivet heads. This meticulous treatment mimics centuries of authentic aging, adding immediate character and historic prestige to new construction projects."
        },
        {
          heading: "Structural Weight Distribution & Rigging",
          text: "Due to the substantial mass of authentic wrought iron and heavy-gauge rings, safety and engineering are paramount. Every medieval-style chandelier is custom-rigged with heavy-duty central canopy mounts, aircraft-grade suspension cables or chains, and verified load-bearing ceiling attachments designed for heavy commercial or residential loads."
        },
        {
          heading: "Tailored Diameters for Any Space",
          text: "Available in multiple standard and custom diameters—ranging from intimate parlor sizes to monumental multi-meter spans—these fixtures can be adapted precisely to your room's volumetric proportions and ceiling height requirements."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Massive Wrought Iron Circular Ring & Structural Steel Brackets" },
        { label: "Design Motif", value: "Medieval Castle Circular Ring with Distressed Gold Details" },
        { label: "Surface Treatment", value: "Hand-Applied Historic Black Iron Patina & Gold Leaf Highlights" },
        { label: "Mounting System", value: "Heavy-Duty Canopy Kit with Reinforced Multi-Point Suspension" },
        { label: "Manufacturing Location", value: "Custom Forged in Miami, Florida Workshop" },
        { label: "Ideal Applications", value: "Grand Dining Halls, Vaulted Living Rooms, Luxury Hospitality & Estates" },
        { label: "Electrical Standards", value: "UL-Compatible Socket Clusters and Custom Wattage Configuration" }
      ]
    }
  },
  {
    id: 7,
    slug: "aluminum-gate-wood-grain-finish",
    img: "Aluminum-gate-with-a-wood-grain-paint-finish.webp",
    images: ["Aluminum-gate-with-a-wood-grain-paint-finish.webp", "Aluminum-gate-with-a-wood-grain-paint-finish2.webp"],
    title: "Aluminum Gate with Wood Grain Finish",
    category: "Portones",
    tags: ["Aluminum", "Entrance Gate", "Grid Design", "Exterior", "Decorative Wood Color Finish"],
    description: "Exterior entrance gate made of high resistance aluminum with grid design panels and decorative imitation wood finish. Offers optimal privacy and cross ventilation, protected with a highly durable electrostatic finish against sea salt and Florida weathering.",
    extendedContent: {
      subtitle: "High-Durability Aluminum Entry Gates with Realistic Wood-Grain Sublimation",
      intro: "Combine the warm, organic aesthetic of natural timber with the indestructible engineering of marine-grade aluminum. The Aluminum Gate with Wood Grain Finish by Dario's Custom Iron Art is explicitly designed for the brutal humidity and coastal salt air of Miami. Featuring a modern grid design, this entrance gate provides a sophisticated architectural boundary that requires absolutely zero wood maintenance.",
      sections: [
        {
          heading: "Hyper-Realistic Wood Sublimation",
          text: "Through a high-tech sublimation process, rich, natural wood-grain patterns are permanently baked into the metal's powder-coated surface. The result is a stunning architectural finish that is visually indistinguishable from premium exotic timber, yet it will never fade, splinter, or peel under the intense Florida sun."
        },
        {
          heading: "Marine-Grade Zero Rust Aluminum",
          text: "Natural wood gates swell and rot in tropical moisture, while steel gates succumb to coastal salt rust. Fabricated entirely from heavy-duty marine-grade aluminum, this gate chassis is chemically immune to oxidation, biological decay, and termites, ensuring a lifetime of structural perfection."
        },
        {
          heading: "Grid Design for Privacy & Airflow",
          text: "The contemporary grid paneling is engineered to strike the perfect balance between perimeter security and environmental comfort. It provides essential visual privacy from the street while allowing refreshing coastal breezes to flow freely through the structure, maintaining cross-ventilation for your property."
        },
        {
          heading: "Automated Access Integration",
          text: "Despite its massive, imposing look, the lightweight aluminum construction drastically reduces the strain on electric motors. The internal frame is heavily reinforced and pre-configured for seamless integration with high-torque swing or sliding gate operators, magnetic locks, and smart-home entry systems."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Heavy-Gauge Marine-Grade Structural Aluminum" },
        { label: "Surface Finish", value: "Baked Wood-Grain Sublimation (UV & Salt Resistant)" },
        { label: "Corrosion Rating", value: "100% Rust, Rot, and Termite Proof" },
        { label: "Design Configuration", value: "Modern Architectural Grid Panels" },
        { label: "Manufacturing Location", value: "Custom Fabricated in Miami, Florida Workshop" },
        { label: "Automation Ready", value: "Pre-Reinforced for Heavy-Duty Electric Operators" },
        { label: "Maintenance", value: "Zero Upkeep (Periodic rinsing with water)" }
      ]
    }
  },
  {
    id: 8,
    slug: "classic-aluminum-gate",
    img: "matte-black-aluminum-gate.webp",
    images: ["matte-black-aluminum-gate.webp"],
    title: "Classic Aluminum Gate",
    category: "Portones",
    tags: ["Aluminum", "Lightweight", "Durable", "Entrance Gate", "Classic Style", "Arch Design", "Exterior"],
    description: "Double leaf exterior entrance gate with an arched design, made entirely of premium aluminum to ensure a lightweight structure, corrosion-free and highly durable.",
    extendedContent: {
      subtitle: "Zero-Maintenance Luxury Aluminum Driveway Gates Built for Coastal Florida Climates",
      intro: "Combining the timeless aesthetic appeal of heavy traditional wrought iron with the modern engineering advantages of lightweight marine-grade aluminum, the Classic Aluminum Gate is the ultimate entryway solution for Florida properties. Fabricated locally in Miami, this double-leaf arched gate delivers majestic curb appeal, total structural integrity, and absolute immunity to rust—making it ideal for waterfront and coastal residences from Key Biscayne to Fort Lauderdale.",
      sections: [
        {
          heading: "Marine-Grade Aluminum & Zero Corrosion",
          text: "Traditional iron gates struggle in South Florida's coastal air due to salt spray and high humidity, which trigger rapid oxidation. By utilizing high-strength structural aluminum, Dario's workshop eliminates rust entirely. Aluminum forms a natural protective oxide layer, ensuring your driveway gate remains structurally pristine and lightweight for decades with virtually zero maintenance."
        },
        {
          heading: "Arch Design & Classical Elegance",
          text: "The graceful arched top profile mimics the sophisticated lines of historic estate gates without the crushing weight or sagging associated with massive iron equivalents. Integrated scrollwork and clean border frames provide an upscale aesthetic that elevates the property value and security perimeter of any luxury home."
        },
        {
          heading: "Advanced Electrostatic Powder Coating",
          text: "Finished with an industrial-grade matte black or custom-colored electrostatic powder coat baked at high temperatures, the surface resists UV fading, chipping, and chalking under intense tropical sun exposure. The color remains deep and uniform year-round."
        },
        {
          heading: "Automation & Security Integration",
          text: "Engineered specifically for seamless compatibility with modern automated gate operators, swing arms, and intercom access control systems. Includes heavy-duty adjustable hinges, drop rods, and secure locking mechanisms designed to withstand severe weather and unauthorized entry."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "High-Strength Marine-Grade Architectural Aluminum Alloy" },
        { label: "Design Configuration", value: "Double-Leaf Swing Gate with Classical Arched Top Profile" },
        { label: "Surface Protection", value: "Electrostatic High-Durability Powder Coat (Salt & UV Resistant)" },
        { label: "Corrosion Resistance", value: "100% Rust-Proof (Ideal for Waterfront & Coastal Properties)" },
        { label: "Manufacturing Location", value: "Custom Fabricated in Miami, Florida Workshop" },
        { label: "Automation Ready", value: "Pre-Reinforced for Automated Swing Gate Motors & Access Control" },
        { label: "Maintenance", value: "Zero Rust Maintenance (Simple periodic washing with water and mild soap)" }
      ]
    }
  },
  {
    id: 9,
    slug: "ornate-wrought-iron-driveway-gate",
    img: "ornate-wrought-iron-driveway-gate.webp",
    images: ["ornate-wrought-iron-driveway-gate.webp"],
    title: "Ornate Wrought Iron Driveway Gate",
    category: "Portones",
    tags: ["Wrought Iron", "High Security", "Ornate Design", "Residential", "Automated"],
    description: "Spectacular custom driveway gate hand-forged in wrought iron. It features classic ornamental details, decorative finials, and a reinforced structure prepared for automated opening systems. Ideal for luxury estates and residences.",
    extendedContent: {
      subtitle: "Monumental Wrought Iron Security Gates & Hand-Forged Estate Entrance Solutions in Miami",
      intro: "At Dario's Custom Iron Art, security and aesthetic prestige merge seamlessly. The Ornate Wrought Iron Driveway Gate is a heavy-duty, hand-forged masterpiece designed for exclusive luxury estates, gated communities, and waterfront properties across Miami-Dade, Coral Gables, and Pinecrest. Combining classical ornamental scrolls with modern automated opening capabilities, this gate establishes an unyielding perimeter defense without compromising visual elegance.",
      sections: [
        {
          heading: "Hand-Forged Artisanal Forging & Structural Iron",
          text: "Every scroll, finial, and structural bar is heated and hand-hammered by master artisan Dario in our local Miami workshop. The heavy solid-iron construction offers unmatched impact resistance and tensile strength, engineered to protect high-profile residences while projecting timeless classical European architecture."
        },
        {
          heading: "Hurricane Wind Resistance & Florida Building Code Compliance",
          text: "Driveway gates in South Florida must endure intense tropical conditions. This ornate gate is engineered with reinforced internal framing to withstand high wind load pressures, ensuring structural stability during severe hurricane events and preventing operational warping."
        },
        {
          heading: "Multi-Stage Powder Coating & Rust Prevention",
          text: "To combat high humidity and salt air, the iron framework undergoes abrasive blasting followed by a multi-stage anti-corrosion primer and baked-on electrostatic powder coat. This thermoset seal prevents rust and preserves the deep black or custom metallic finish for decades."
        },
        {
          heading: "Seamless Automated Integration",
          text: "Pre-engineered with internal structural reinforcements and mounting plates compatible with leading automated swing-gate operators, smart keypads, loop detectors, and camera intercom systems for modern estate security."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Heavy-Gauge Solid Wrought Iron & Structural Steel Frame" },
        { label: "Ornamental Features", value: "Hand-Hammered Scrolls, Custom Finials & Forged Crest Accents" },
        { label: "Surface Finish", value: "Electrostatic High-Temp Baked Powder Coat (Rust & UV Resistant)" },
        { label: "Wind Load Rating", value: "Engineered to FBC Standards for Hurricane Resistance" },
        { label: "Manufacturing Location", value: "Handcrafted in Miami, Florida Workshop" },
        { label: "Automation Compatibility", value: "Compatible with Heavy-Duty Automated Swing Motors & Smart Access" },
        { label: "Maintenance", value: "Low Maintenance (Routine inspection and mild soap wash every 6 months)" }
      ]
    }
  },
  {
    id: 10,
    slug: "modern-aluminum-horizontal-slat-railing",
    img: "modern-aluminum-horizontal-slat-railing.webp",
    images: ["modern-aluminum-horizontal-slat-railing.webp"],
    title: "Modern Aluminum Horizontal Slat Railing",
    category: "Barandales",
    tags: ["Aluminum", "Privacy", "Modern Design", "Weather Resistant", "Balconies"],
    description: "Contemporary railing system fabricated from premium aluminum with a horizontal slat design providing privacy and optimal airflow. Powder-coated finish ensures extreme resistance against saltpeter and humidity.",
    extendedContent: {
      subtitle: "Contemporary Horizontal Slat Aluminum Railings for Coastal Balconies & Terraces",
      intro: "Designed specifically for modern architectural projects, the Modern Aluminum Horizontal Slat Railing blends clean geometric lines with functional privacy control. Fabricated by Dario's team in Miami, this premium railing system is optimized for multi-family residential balconies, rooftop terraces, and luxury coastal homes where salt air and humidity demand absolute corrosion resistance.",
      sections: [
        {
          heading: "Horizontal Slat Privacy & Airflow Engineering",
          text: "The strategic spacing of the horizontal aluminum slats is engineered to provide an optimal balance: blocking direct sightlines from neighboring properties for enhanced privacy while allowing refreshing coastal breezes to pass through smoothly."
        },
        {
          heading: "Marine-Grade Aluminum Durability",
          text: "Built entirely from high-strength marine-grade aluminum, this railing system will never rust, pit, or degrade, even when installed directly on oceanfront properties in Key Biscayne, Miami Beach, or Sunny Isles."
        },
        {
          heading: "Electrostatic Powder Coating Finish",
          text: "Each slat and post receives an advanced architectural powder coat finish available in matte black, charcoal gray, or custom wood-grain textures, guaranteeing long-lasting color stability against intense Florida UV radiation."
        },
        {
          heading: "Rigorous Structural Testing & Safety",
          text: "Engineered to satisfy strict building codes for impact loads and downward pressure resistance, ensuring absolute safety for elevated balconies and high-rise applications."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Marine-Grade Architectural Aluminum Extrusions" },
        { label: "Design Configuration", value: "Contemporary Horizontal Slats with Custom Spacing Options" },
        { label: "Surface Finish", value: "Architectural Grade Powder Coat (Saltwater & UV Resistant)" },
        { label: "Corrosion Rating", value: "100% Rust-Proof for Waterfront & Coastal Zones" },
        { label: "Manufacturing Location", value: "Custom Built in Miami, Florida Workshop" },
        { label: "Applications", value: "Balconies, Roof Terraces, Stair Landings, Patio Enclosures" },
        { label: "Safety Compliance", value: "Meets Local Structural Building Codes for Elevated Guardrails" }
      ]
    }
  },
  {
    id: 11,
    slug: "modern-abstract-metal-sculpture",
    img: "modern-abstract-metal-sculpture.webp",
    images: ["modern-abstract-metal-sculpture.webp", "modern-abstract-metal-sculpture2.webp", "modern-abstract-metal-sculpture3.webp"],
    title: "Modern Abstract Metal Sculpture",
    category: "Arte",
    tags: ["Sculpture", "Metal Art", "Abstract Design", "Indoor/Outdoor", "Unique Piece"],
    description: "Exquisite contemporary art piece crafted from solid metal. This abstract sculpture stands out for its fluid lines and ability to interact with natural light, creating dynamic shadows. Treated to withstand the elements.",
    extendedContent: {
      subtitle: "Avant-Garde Metal Sculptures & Architectural Focal Points for Luxury Miami Spaces",
      intro: "Art and metallurgy converge in the Modern Abstract Metal Sculpture, an original creation by master craftsman Dario. Designed for luxury interior atriums, corporate headquarters, and high-end residential sculpture gardens throughout Miami and Doral, this piece uses sweeping organic lines and industrial metal to evoke movement, depth, and emotion.",
      sections: [
        {
          heading: "Fluid Metal Manipulation & Handcrafting",
          text: "Shaping solid steel and alloy plates into fluid, organic forms requires advanced thermal bending and precision TIG welding. Each curve is hand-polished and contoured to catch natural and artificial light from every angle."
        },
        {
          heading: "Weather-Resistant Outdoor & Indoor Adaptability",
          text: "Treated with specialized outdoor-grade sealants or architectural patinas, this sculpture can be installed as an imposing lawn or poolside art piece without fear of environmental weathering or corrosion."
        },
        {
          heading: "Custom Siting and Scale Customization",
          text: "Available in various scales—from tabletop statement pieces to monumental 12-foot garden installations—tailored specifically to complement your landscape architecture or interior minimalist layout."
        },
        {
          heading: "Secure Base Engineering",
          text: "Anchored securely to hidden interior pedestals or heavy-duty reinforced concrete footings for outdoor display, guaranteeing absolute stability under high winds."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Solid Steel, Corten Steel, or Marine Aluminum Alloys" },
        { label: "Artistic Form", value: "Hand-Contoured Abstract Three-Dimensional Form" },
        { label: "Finish Options", value: "Polished Metal, Oxidized Patina, or Weatherproof Powder Coat" },
        { label: "Manufacturing Location", value: "Hand-Sculpted in Miami, Florida Workshop" },
        { label: "Placement", value: "Indoor Gallery / Outdoor Garden & Patio Rated" },
        { label: "Mounting", value: "Custom Base Plate or Concealed Structural Anchors" },
        { label: "Uniqueness", value: "Each Piece is Handcrafted and Signed as a Unique Work of Art" }
      ]
    }
  },
  {
    id: 12,
    slug: "outdoor-metal-container-bar",
    img: "outdoor-metal-container-bar.webp",
    images: ["outdoor-metal-container-bar.webp", "outdoor-metal-container-bar2.webp", "outdoor-metal-container-bar3.webp"],
    title: "Outdoor Metal Container Bar",
    category: "Miscelaneas",
    tags: ["Commercial Bar", "Metal Container", "Industrial Design", "Outdoor", "Heavy Structure"],
    description: "Innovative outdoor commercial bar constructed from repurposed shipping container panels and integrated with heavy-duty ironwork. Features fold-down windows, sturdy serving counters, and an unmistakable industrial design.",
    extendedContent: {
      subtitle: "Industrial Shipping Container Bars & Heavy-Duty Commercial Outdoor Kitchens in Miami",
      intro: "Transform your outdoor entertainment area, brewery patio, or restaurant terrace with the Outdoor Metal Container Bar. Engineered and fabricated by Dario's Custom Iron Art in Miami, this robust commercial-grade structure repurposes heavy steel container architecture, integrating fold-down hydraulic service windows, stainless steel counters, and custom iron shelving.",
      sections: [
        {
          heading: "Repurposed Heavy Steel Container Architecture",
          text: "Built using corrugated structural steel framing that provides incredible load-bearing rigidity, storm resistance, and an authentic industrial aesthetic suited for high-traffic commercial environments."
        },
        {
          heading: "Hydraulic Service Windows & Stainless Workstations",
          text: "Equipped with heavy-duty gas strut awnings, commercial stainless steel prep surfaces, integrated bottle rails, and secure lockable steel shutters for effortless daytime operations and nighttime security."
        },
        {
          heading: "Weatherproof Commercial Coatings",
          text: "Coated with marine-grade industrial epoxy primers and UV-resistant exterior enamel paints designed to withstand intense Florida sun, heavy tropical downpours, and constant humidity."
        },
        {
          heading: "Turnkey Custom Layouts",
          text: "Fully customizable interior electrical layouts, plumbing conduits, tap systems, and bar seating configurations built to match your exact commercial or residential entertainment specifications."
        }
      ],
      specificationsTable: [
        { label: "Primary Structure", value: "Recycled Heavy-Gauge Shipping Container Corrugated Steel" },
        { label: "Countertops", value: "Commercial Grade Stainless Steel Prep & Serving Bars" },
        { label: "Windows/Doors", value: "Hydraulic Fold-Down Awning Windows with Steel Security Latches" },
        { label: "Finish", value: "Industrial Epoxy Primer & UV-Resistant Exterior Finish" },
        { label: "Manufacturing Location", value: "Custom Built in Miami, Florida Workshop" },
        { label: "Ideal Uses", value: "Restaurant Patios, Brewery Beer Gardens, Luxury Backyard Entertainment" },
        { label: "Utility Integration", value: "Pre-Configured for Electrical, Plumbing, and Refrigeration Units" }
      ]
    }
  },
  {
    id: 13,
    slug: "black-metal-glass-french-doors",
    img: "black-metal-glass-french-doors.webp",
    images: ["black-metal-glass-french-doors.webp"],
    title: "Black Metal & Glass French Doors",
    category: "Puertas",
    tags: ["Metal & Glass", "Industrial Style", "Modern Interiors", "Natural Light", "Double Doors"],
    description: "Elegant interior french doors combining slender black metal framing with clear tempered glass. Their design maximizes natural light flow while maintaining acoustic separation. Ideal for home offices or living rooms.",
    extendedContent: {
      subtitle: "Slender Black Steel & Glass French Doors for Luxury Modern Interior Architecture",
      intro: "Bring sophisticated industrial chic and seamless room partitioning into your home with Black Metal & Glass French Doors. Custom-built by master metal craftsmen in Miami, these interior double doors feature ultra-slim steel sightlines paired with high-clarity tempered glass, maximizing natural light penetration while maintaining exceptional acoustic and spatial division.",
      sections: [
        {
          heading: "Ultra-Slim Steel Profiles & Maximum Light",
          text: "Unlike bulky wooden frames, our precision-welded steel profiles provide maximum glass surface area, flooding adjoining rooms with radiant daylight while adding an undeniable air of modern luxury."
        },
        {
          heading: "Tempered Safety Glass & Sound Dampening",
          text: "Fitted with certified commercial-grade tempered safety glass that provides robust acoustic insulation, creating quiet home offices or private dining rooms without closing off open-concept floor plans."
        },
        {
          heading: "Matte Black Architectural Finish",
          text: "Finished in a luxurious baked matte black powder coat that resists scratches, fingerprints, and wear, offering a sleek, tactile texture that complements minimalist and transitional interior decor."
        },
        {
          heading: "Custom Millwork & Hardware Integration",
          text: "Built strictly to measure for your interior door jambs, complete with custom pivot or heavy-duty butt hinges, matching handles, and magnetic latches for smooth, silent operation."
        }
      ],
      specificationsTable: [
        { label: "Primary Frame", value: "Precision-Welded Slim Architectural Steel Profiles" },
        { label: "Glazing", value: "High-Clarity Tempered Safety Glass (Clear, Frosted, or Fluted Options)" },
        { label: "Surface Finish", value: "Baked Matte Black Powder Coat Finish" },
        { label: "Configuration", value: "Double French Door Swing or Pivot Operation" },
        { label: "Manufacturing Location", value: "Custom Fabricated in Miami, Florida Workshop" },
        { label: "Recommended Uses", value: "Home Offices, Living Room Dividers, Master Suite Entries, Wine Cellars" },
        { label: "Acoustic Performance", value: "Superior Sound Reduction Compared to Standard Hollow Doors" }
      ]
    }
  },
  {
    id: 14,
    slug: "abstract-blue-green-metal-art",
    img: "abstract-blue-green-metal-art.webp",
    images: ["abstract-blue-green-metal-art.webp"],
    title: "Abstract Blue & Green Metal Art",
    category: "Arte",
    tags: ["Wall Art", "Abstract", "Color Finish", "Interiors"],
    description: "Abstract metal art featuring vibrant blue and green tones. A modern decor piece ideal for adding character to contemporary interior spaces.",
    extendedContent: {
      subtitle: "Vibrant Hand-Painted Abstract Metal Wall Art & Coastal Color Palettes for Miami Interiors",
      intro: "Infuse your living spaces with the calming, vibrant hues of the ocean using Abstract Blue & Green Metal Art. Hand-ground and tinted by artisans in our Miami workshop, this statement wall sculpture captures tropical azure and emerald reflections on textured metal, serving as an eye-catching focal point for modern coastal residences and executive suites.",
      sections: [
        {
          heading: "Hand-Textured Metal Grinding & Depth",
          text: "Before color application, the raw metal surface is meticulously hand-ground with multi-directional patterns that catch and refract ambient lighting, creating a mesmerizing three-dimensional holographic effect."
        },
        {
          heading: "Translucent Resin & Pigment Infusion",
          text: "Rich oceanic blues and lush tropical greens are layered using specialized transparent tints and resin glazes that allow the underlying metallic texture to shimmer through with striking brilliance."
        },
        {
          heading: "Lightweight Wall Mounting",
          text: "Engineered on lightweight aluminum or composite metal backing panels equipped with concealed floating wall mounts, ensuring effortless hanging and secure alignment on any drywall or masonry surface."
        },
        {
          heading: "UV-Resistant Protective Sealing",
          text: "Sealed with professional-grade UV-blocking clear coats to prevent color fading or yellowing when exposed to bright sunlight near large coastal windows."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Lightweight Architectural Metal Canvas Panel" },
        { label: "Artistic Technique", value: "Hand-Ground Texture with Translucent Blue & Green Pigments" },
        { label: "Surface Protection", value: "High-Gloss or Satin UV-Resistant Clear Coat Seal" },
        { label: "Manufacturing Location", value: "Handcrafted in Miami, Florida" },
        { label: "Hanging System", value: "Integrated Concealed Floating Cleat Mounts Included" },
        { label: "Ideal Settings", value: "Coastal Living Rooms, Modern Executive Offices, Luxury Hotel Lobbies" },
        { label: "Custom Sizing", value: "Available in Custom Multi-Panel Triptychs or Oversized Formats" }
      ]
    }
  },
  {
    id: 15,
    slug: "arched-aluminum-pedestrian-gate",
    img: "arched-aluminum-pedestrian-gate.webp",
    images: ["arched-aluminum-pedestrian-gate.webp", "arched-aluminum-pedestrian-gate2.webp", "arched-aluminum-pedestrian-gate3.webp"],
    title: "Arched Aluminum Pedestrian Gate",
    category: "Portones",
    tags: ["Pedestrian Gate", "Aluminum", "Arched Design", "Exterior"],
    description: "Elegant pedestrian gate with a classic arched top design, crafted entirely from lightweight aluminum to guarantee high durability and weather resistance.",
    extendedContent: {
      subtitle: "Elegant Arched Aluminum Walkway & Garden Entry Gates Built for Florida Weather",
      intro: "Create a welcoming yet secure transition to your garden, side yard, or front pathway with the Arched Aluminum Pedestrian Gate. Fabricated in our Miami workshop, this rust-proof gate combines the classic elegance of an arched top profile with marine-grade aluminum construction, ensuring total weather resistance and effortless everyday operation.",
      sections: [
        {
          heading: "Rust-Proof Marine-Grade Aluminum",
          text: "Designed specifically to endure Miami's high humidity and coastal salt air without corroding, pitting, or weakening over time. Requires zero anti-rust painting or heavy upkeep."
        },
        {
          heading: "Classical Arched Top Architecture",
          text: "Features a gracefully curved upper frame that softens property lines and complements Mediterranean, colonial, or modern landscape designs."
        },
        {
          heading: "Secure Hardware & Smart Lock Integration",
          text: "Equipped with heavy-duty self-closing hinges, adjustable latches, and compatibility with modern electronic strike plates and smart keyless entry locks for maximum walkway security."
        },
        {
          heading: "Custom Sizing & Powder Coating",
          text: "Custom-built to match your exact pillar spacing and height requirements, finished in a durable electrostatic powder coat matching your existing perimeter fencing or driveway gates."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Marine-Grade Structural Aluminum Extrusions" },
        { label: "Design Style", value: "Single-Leaf Walkway Gate with Classic Arched Top" },
        { label: "Surface Finish", value: "Baked Electrostatic Powder Coat (Scratch & UV Resistant)" },
        { label: "Corrosion Resistance", value: "100% Rust-Proof for Humid & Coastal Climates" },
        { label: "Manufacturing Location", value: "Custom Fabricated in Miami, Florida Workshop" },
        { label: "Hardware Included", value: "Heavy-Duty Adjustable Hinges & Secure Latch Mechanism" },
        { label: "Access Control", value: "Compatible with Electronic Keypads and Magnetic Locks" }
      ]
    }
  },
  {
    id: 16,
    slug: "arched-metal-driveway-gate",
    img: "arched-metal-driveway-gate.webp",
    images: ["arched-metal-driveway-gate.webp"],
    title: "Arched Metal Driveway Gate",
    category: "Portones",
    tags: ["Driveway Gate", "Metal", "Arched Design", "Heavy Duty"],
    description: "Robust vehicular gate featuring a classic clean-lined arched design. Offers high security and a luxurious entryway for private estates or residences.",
    extendedContent: {
      subtitle: "Robust Arched Metal Driveway Gates & High-Security Estate Entry Systems",
      intro: "Make a grand architectural statement while securing your property perimeter with the Arched Metal Driveway Gate. Expertly crafted in Miami by Dario's Custom Iron Art, this heavy-duty vehicular gate pairs clean architectural lines with a majestic arched profile, offering uncompromising security and timeless curb appeal for luxury Florida residences.",
      sections: [
        {
          heading: "Heavy-Duty Structural Frame Construction",
          text: "Built using thick-walled structural steel tubing designed to withstand high operational frequency, wind load pressures, and vehicle impacts while maintaining perfect alignment."
        },
        {
          heading: "Majestic Arched Profile",
          text: "The sweeping upper arch draws the eye upward, elevating the overall entryway proportions and providing a classic estate aesthetic."
        },
        {
          heading: "Corrosion Shielding & Powder Coating",
          text: "Completely sealed with anti-corrosion primer and an industrial-grade baked powder coat finish that resists moisture, heavy rain, and intense UV exposure."
        },
        {
          heading: "Automated Operator Readiness",
          text: "Pre-engineered with internal motor mounting brackets and reinforced hinge points for smooth integration with automated sliding or swing gate openers."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Heavy-Duty Structural Steel & Architectural Metal Tubing" },
        { label: "Design Profile", value: "Double-Leaf Driveway Gate with Clean Arched Top" },
        { label: "Surface Finish", value: "Industrial Baked Electrostatic Powder Coat" },
        { label: "Wind Load Certification", value: "Engineered to Withstand High Hurricane Wind Speeds" },
        { label: "Manufacturing Location", value: "Custom Fabricated in Miami, Florida Workshop" },
        { label: "Automation Compatibility", value: "Ready for Swing/Slide Electric Operators & Safety Sensors" },
        { label: "Security Features", value: "Heavy-Duty Locking Drop Rods and Deadbolt Provisions" }
      ]
    }
  },
  {
    id: 17,
    slug: "black-aluminum-double-front-door",
    img: "black-aluminum-double-front-door.webp",
    images: ["black-aluminum-double-front-door.webp", "black-aluminum-double-front-door2.webp"],
    title: "Black Aluminum Double Front Door",
    category: "Puertas",
    tags: ["Entry Door", "Aluminum", "Double Door", "Modern"],
    description: "Imposing double entry door in matte black aluminum, featuring a modern asymmetrical geometric design that elevates both home aesthetics and security.",
    extendedContent: {
      subtitle: "Imposing Matte Black Aluminum Double Entry Doors with Modern Geometric Design",
      intro: "Redefine your home's primary threshold with the Black Aluminum Double Front Door. Fabricated by master metal artisans in Miami, this monumental entryway features an asymmetrical geometric design in matte black aluminum, delivering uncompromising weather resilience, hurricane compliance, and ultra-modern aesthetic impact.",
      sections: [
        {
          heading: "Asymmetrical Geometric Modernism",
          text: "The striking geometric panel layout breaks away from conventional symmetry, creating a bold, contemporary artistic statement that commands attention from the curb."
        },
        {
          heading: "Weather-Resistant Aluminum Engineering",
          text: "Constructed from heavy-duty aluminum that will never warp, rust, or swell in high humidity or coastal rainstorms, ensuring a perfect air-tight seal year-round."
        },
        {
          heading: "Impact Glass & Thermal Break Insulation",
          text: "Integrated with energy-efficient thermal breaks and impact-rated glass lites to regulate indoor cooling and meet strict Florida hurricane windborne debris codes."
        },
        {
          heading: "Multi-Point Locking Security",
          text: "Equipped with concealed multi-point locking hardware and heavy-duty pivot hinges for absolute security against forced entry."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Heavy-Duty Architectural Aluminum Frame & Panels" },
        { label: "Design Feature", value: "Asymmetrical Geometric Modern Pattern with Impact Glass" },
        { label: "Surface Finish", value: "Baked Matte Black Powder Coat (UV & Moisture Resistant)" },
        { label: "Hurricane Compliance", value: "Impact-Rated for Florida Building Code Wind Zones" },
        { label: "Manufacturing Location", value: "Custom Built in Miami, Florida Workshop" },
        { label: "Locking System", value: "Concealed Multi-Point Locking Hardware" },
        { label: "Energy Efficiency", value: "Thermal Break Construction for Optimal Climate Control" }
      ]
    }
  },
  {
    id: 18,
    slug: "corrugated-metal-commercial-bar-counter",
    img: "corrugated-metal-commercial-bar-counter.webp",
    images: ["corrugated-metal-commercial-bar-counter.webp", "corrugated-metal-commercial-bar-counter2.webp", "corrugated-metal-commercial-bar-counter3.webp", "corrugated-metal-commercial-bar-counter4.webp", "corrugated-metal-commercial-bar-counter5.webp"],
    title: "Corrugated Metal Commercial Bar Counter",
    category: "Miscelaneas",
    tags: ["Commercial", "Bar Counter", "Corrugated Metal", "Industrial"],
    description: "Rustic industrial-style bar counter made from heavy-duty corrugated metal panels, ideal for restaurants, breweries, or outdoor commercial spaces.",
    extendedContent: {
      subtitle: "Industrial Corrugated Metal Commercial Bar Counters & Custom Hospitality Millwork",
      intro: "Elevate your hospitality venue, rooftop lounge, or craft brewery with the Corrugated Metal Commercial Bar Counter. Custom-engineered in Miami by Dario's Custom Iron Art, this heavy-duty bar combines rugged corrugated steel cladding with commercial-grade work surfaces, delivering an authentic industrial aesthetic built to withstand intense daily service.",
      sections: [
        {
          heading: "Heavy-Duty Corrugated Steel Cladding",
          text: "Wrapped in robust industrial corrugated panels that resist dents, scuffs, and heavy foot traffic while providing a timeless rustic-industrial texture."
        },
        {
          heading: "Sanitary Commercial Work Surfaces",
          text: "Integrated with stainless steel or solid surface bartending tops equipped with deep sink cutouts, speed rail clearances, and ergonomic service ledges."
        },
        {
          heading: "Robust Internal Framing",
          text: "Built on a heavy structural steel skeleton designed to support heavy kegerators, ice chests, POS terminals, and fully stocked liquor displays without flexing."
        },
        {
          heading: "Modular & Custom Radius Configurations",
          text: "Available in straight, L-shaped, or curved radius designs custom-built to fit your venue's exact floor plan and seating capacity."
        }
      ],
      specificationsTable: [
        { label: "Exterior Cladding", value: "Heavy-Gauge Industrial Corrugated Steel Panels" },
        { label: "Work Surfaces", value: "Commercial Grade Stainless Steel or Hardwood Tops" },
        { label: "Internal Structure", value: "Reinforced Welded Steel Tubing Skeleton" },
        { label: "Surface Coating", value: "Industrial Epoxy Seal & Protective Enamel Finish" },
        { label: "Manufacturing Location", value: "Custom Fabricated in Miami, Florida Workshop" },
        { label: "Ideal Venues", value: "Breweries, Restaurants, Rooftop Bars, Outdoor Beer Gardens" },
        { label: "Utility Channels", value: "Pre-Built Conduits for POS Lines, Plumbing, and Draft Beer Towers" }
      ]
    }
  },
  {
    id: 19,
    slug: "custom-aluminum-pool-patio-guardrail",
    img: "custom-aluminum-pool-patio-guardrail.webp",
    images: ["custom-aluminum-pool-patio-guardrail.webp", "custom-aluminum-pool-patio-guardrail2.webp", "custom-aluminum-pool-patio-guardrail3.webp", "custom-aluminum-pool-patio-guardrail4.webp"],
    title: "Custom Aluminum Pool Patio Guardrail",
    category: "Barandales",
    tags: ["Pool Guardrail", "Aluminum", "Patio", "Weather Resistant"],
    description: "Aluminum railing system specifically designed for the perimeter of pool areas and patios. Finish resistant to chemicals and moisture.",
    extendedContent: {
      subtitle: "Chemical-Resistant Aluminum Pool & Patio Guardrails for South Florida Backyards",
      intro: "Ensure safety around your pool deck and outdoor patio without sacrificing style using the Custom Aluminum Pool Patio Guardrail. Fabricated locally in Miami, this marine-grade aluminum railing system is specifically engineered to resist harsh pool chlorine, chemical splash, and persistent tropical moisture.",
      sections: [
        {
          heading: "Chlorine & Moisture Resistance",
          text: "Unlike standard steel or iron railings that rust rapidly when exposed to chlorinated pool water and wet decking, our marine-grade aluminum remains completely immune to chemical degradation."
        },
        {
          heading: "Code-Compliant Safety Barriers",
          text: "Engineered to satisfy local residential safety codes regarding picket spacing, height requirements, and structural load resistance for pool enclosures and raised patio decks."
        },
        {
          heading: "Baked Powder Coat Protection",
          text: "Finished in a specialized exterior-grade powder coat that resists fading under intense sunlight and prevents chemical pitting from pool treatments."
        },
        {
          heading: "Clean Surface-Mount Installation",
          text: "Installed securely using concealed base plates and stainless steel anchors bolted directly into concrete pool decks or stone pavers."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Marine-Grade Structural Aluminum Alloys" },
        { label: "Chemical Defense", value: "100% Resistant to Pool Chlorine, Salt, and Moisture" },
        { label: "Surface Finish", value: "Exterior-Grade UV-Stable Powder Coat" },
        { label: "Manufacturing Location", value: "Custom Built in Miami, Florida Workshop" },
        { label: "Applications", value: "Pool Perimeters, Raised Patios, Sundecks, Backyard Walkways" },
        { label: "Safety Compliance", value: "Engineered to Meet Municipal Pool Safety & Guardrail Codes" },
        { label: "Maintenance", value: "Zero Rust Maintenance (Simple washdown with fresh water)" }
      ]
    }
  },
  {
    id: 20,
    slug: "large-industrial-metal-cog-art",
    img: "large-industrial-metal-cog-art.webp",
    images: ["large-industrial-metal-cog-art.webp"],
    title: "Large Industrial Metal Cog Art",
    category: "Arte",
    tags: ["Wall Art", "Industrial", "Metal Cogs", "Large Scale"],
    description: "Large-scale wall art piece featuring heavy metal cogs, paying homage to raw industrial style and precision engineering.",
    extendedContent: {
      subtitle: "Large-Scale Industrial Metal Cog Wall Art & Steampunk Architectural Decor",
      intro: "Celebrate precision engineering and raw industrial aesthetics with Large Industrial Metal Cog Art. Hand-fabricated in our Miami workshop from reclaimed heavy steel gears and machine cogs, this oversized wall sculpture delivers an imposing visual punch for urban lofts, trendy restaurants, and modern industrial office lobbies.",
      sections: [
        {
          heading: "Reclaimed Industrial Elements & Forging",
          text: "Each cog and gear is sourced from authentic heavy machinery or hand-cut from thick steel plate, preserving authentic wear patterns and mechanical detail."
        },
        {
          heading: "Multi-Tiered Dimensional Layout",
          text: "Welded into a dynamic multi-layered composition where overlapping gears project outward from the wall, creating deep shadows and captivating structural complexity."
        },
        {
          heading: "Aged Rust & Burnished Steel Finishes",
          text: "Finished with a combination of burnished gunmetal, exposed polished teeth, and sealed artificial patinas that highlight the authentic mechanical heritage."
        },
        {
          heading: "Heavy-Duty Wall Anchoring",
          text: "Fitted with concealed structural hanging brackets capable of supporting substantial artwork weight safely on brick, concrete, or reinforced drywall."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Authentic Reclaimed Steel Cogs & Heavy Gauge Plate" },
        { label: "Artistic Style", value: "Industrial Steampunk Large-Scale Wall Sculpture" },
        { label: "Surface Finish", value: "Burnished Steel, Gunmetal, and Sealed Patina Accents" },
        { label: "Manufacturing Location", value: "Handcrafted in Miami, Florida Workshop" },
        { label: "Mounting System", value: "Heavy-Duty Welded Rear Mounting Brackets Included" },
        { label: "Ideal Environments", value: "Industrial Lofts, Craft Breweries, Corporate Tech Offices, Modern Lobbies" },
        { label: "Scale", value: "Oversized Statement Piece Built to Custom Dimensions" }
      ]
    }
  },
  {
    id: 21,
    slug: "laser-cut-metal-balcony-railing",
    img: "laser-cut-metal-balcony-railing.webp",
    images: ["laser-cut-metal-balcony-railing.webp", "laser-cut-metal-balcony-railing2.webp", "laser-cut-metal-balcony-railing3.webp"],
    title: "Laser Cut Metal Balcony Railing",
    category: "Barandales",
    tags: ["Balcony Railing", "Laser Cut", "CNC", "Privacy"],
    description: "Balcony railing with intricate CNC laser-cut patterns. Combines partial privacy with a luxury design.",
    extendedContent: {
      subtitle: "Precision CNC Laser Cut Balcony Railings for Luxury Architectural Facades",
      intro: "Elevate your exterior architecture with the Laser Cut Metal Balcony Railing by Dario's Custom Iron Art. Engineered in Miami, this railing system replaces traditional pickets with state-of-the-art CNC laser-cut metal panels. It delivers a perfect balance of artistic expression and essential privacy for modern residential balconies, high-end apartment terraces, and luxury commercial overlooks.",
      sections: [
        {
          heading: "CNC Laser Precision & Custom Patterns",
          text: "Utilizing advanced computer numerical control (CNC) laser cutting, we can transform solid metal sheets into intricate, flawless geometric or organic patterns. From minimalist perforated meshes to complex architectural motifs, the design possibilities are virtually limitless, allowing your balcony to become a true signature of the property."
        },
        {
          heading: "Strategic Privacy & Airflow Integration",
          text: "The exact open-area ratio of the laser-cut design is engineered to obscure the view from the street level, providing exceptional privacy for your outdoor living spaces while still allowing coastal breezes to flow freely through the structure."
        },
        {
          heading: "Marine-Grade Durability & Finishes",
          text: "Fabricated from high-grade aluminum or structural steel, the panels undergo an intensive pre-treatment process before receiving an architectural-grade electrostatic powder coat. This ensures the intricate cut edges remain completely sealed against rust, salt spray, and intense Florida sun."
        },
        {
          heading: "Rigid Structural Safety",
          text: "Despite the delicate visual nature of the cutouts, the heavy-gauge metal panels act as robust structural barriers. Integrated with heavy-duty top rails and posts, the system exceeds local building code requirements for impact and lateral load resistance on elevated balconies."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Heavy-Gauge Aluminum or Structural Steel Panels" },
        { label: "Fabrication Method", value: "High-Precision CNC Laser Cutting" },
        { label: "Surface Finish", value: "Baked Electrostatic Powder Coat (Salt & UV Resistant)" },
        { label: "Design Options", value: "Custom Geometric, Organic, or Branded Patterns" },
        { label: "Manufacturing Location", value: "Custom Designed & Built in Miami, Florida" },
        { label: "Safety Compliance", value: "Engineered to Meet Municipal Guardrail Codes" },
        { label: "Ideal Applications", value: "Luxury Balconies, Patios, Mezzanines, Privacy Screens" }
      ]
    }
  },
  {
    id: 22,
    slug: "modern-aluminum-outdoor-kitchen-cabinets",
    img: "modern-aluminum-outdoor-kitchen-cabinets.webp",
    images: ["modern-aluminum-outdoor-kitchen-cabinets.webp"],
    title: "Modern Aluminum Outdoor Kitchen Cabinets",
    category: "Miscelaneas",
    tags: ["Outdoor Kitchen", "Cabinets", "Aluminum", "Weather Resistant"],
    description: "Outdoor kitchen cabinetry system crafted from aluminum, guaranteed against rust in saline environments.",
    extendedContent: {
      subtitle: "Marine-Grade Aluminum Outdoor Kitchen Cabinetry Built for South Florida",
      intro: "Redefine outdoor entertaining with the Modern Aluminum Outdoor Kitchen Cabinets by Dario's Custom Iron Art. Traditional wood or basic steel outdoor kitchens rapidly degrade in Miami’s harsh climate. Our custom-built, marine-grade aluminum cabinetry system is explicitly engineered to provide a luxurious, rust-proof, and highly durable foundation for your backyard culinary space.",
      sections: [
        {
          heading: "Zero-Rust Aluminum Construction",
          text: "Fabricated entirely from premium structural aluminum, these cabinets are inherently immune to rust and corrosion. Whether exposed to intense humidity, heavy tropical downpours, or aggressive salt spray from nearby coastal waters, the framework and doors will never warp, rot, or degrade."
        },
        {
          heading: "Weatherproof & Sealed Storage",
          text: "Precision-engineered doors and drawers feature weather-resistant seals to keep interior compartments dry and free from pests. Heavy-duty stainless steel hinges and smooth-glide drawer tracks ensure effortless operation even after years of outdoor exposure."
        },
        {
          heading: "Custom Layouts for Premium Appliances",
          text: "Because every outdoor chef has different needs, we build these cabinets to exact specifications. We integrate precise cutouts and reinforced framing to seamlessly house heavy built-in gas grills, kamado smokers, outdoor refrigerators, and deep stainless steel sinks."
        },
        {
          heading: "Architectural Powder Coat Finishes",
          text: "The aluminum is finished with a baked-on, UV-stable powder coat available in sleek modern hues, textured mattes, or highly realistic faux-wood grain sublimations, allowing you to match your home’s exterior aesthetic perfectly without the maintenance of real wood."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "100% Marine-Grade Structural Aluminum" },
        { label: "Corrosion Resistance", value: "Absolute Immunity to Rust, Rot, and Warping" },
        { label: "Surface Finish", value: "UV-Resistant Powder Coat or Faux-Wood Sublimation" },
        { label: "Hardware", value: "Outdoor-Rated Stainless Steel Hinges & Glides" },
        { label: "Manufacturing Location", value: "Custom Built in Miami, Florida Workshop" },
        { label: "Appliance Integration", value: "Custom Cutouts for Grills, Sinks, and Refrigeration" },
        { label: "Maintenance", value: "Low Maintenance (Wash with water and mild soap)" }
      ]
    }
  },
  {
    id: 23,
    slug: "modern-geometric-aluminum-double-door",
    img: "modern-geometric-aluminum-double-door.webp",
    images: ["modern-geometric-aluminum-double-door.webp", "modern-geometric-aluminum-double-door2.webp"],
    title: "Modern Geometric Aluminum Double Door",
    category: "Puertas",
    tags: ["Double Door", "Geometric", "Aluminum", "Modern Design"],
    description: "Double entry door highlighting an asymmetrical geometric pattern, integrating solid aluminum panels and glass.",
    extendedContent: {
      subtitle: "Asymmetrical Geometric Aluminum Double Doors for Contemporary Entrances",
      intro: "Make a striking modern architectural statement the moment guests arrive. The Modern Geometric Aluminum Double Door is a custom-fabricated masterpiece designed by Dario's Custom Iron Art for contemporary estates and luxury modern homes in Miami. Fusing solid structural aluminum with impact-rated glass through bold, asymmetrical geometric lines, this entryway offers the ultimate combination of avant-garde design and extreme coastal weather protection.",
      sections: [
        {
          heading: "Abstract Geometric Metal Forging",
          text: "Moving away from traditional symmetry, this door features a bold matrix of intersecting geometric angles. The solid aluminum panels and precisely fitted glass panes create a dynamic interplay of light and shadow, resulting in a functional piece of modern art that elevates the home's facade."
        },
        {
          heading: "Lightweight Aluminum Engineering",
          text: "While presenting a massive, commanding profile, the door is engineered from high-strength architectural aluminum. This provides incredible structural rigidity without the crushing weight of steel, ensuring smooth, effortless operation on heavy-duty pivot or barrel hinges while remaining 100% rust-proof."
        },
        {
          heading: "Impact-Rated Glass Integration",
          text: "South Florida entrances demand uncompromising storm defense. The geometric framework securely houses thick, impact-rated laminated glass panels engineered to satisfy rigorous Florida Building Code standards, offering protection against hurricane-force winds and unauthorized forced entry."
        },
        {
          heading: "Electrostatic Finish & Security",
          text: "Coated with a highly durable electrostatic baked powder finish to resist fading and coastal salt pitting. The structural frame is pre-configured to accept state-of-the-art multi-point locking mechanisms and modern smart-home entry hardware."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Architectural Grade Structural Aluminum" },
        { label: "Design Profile", value: "Modern Asymmetrical Geometric Metal & Glass" },
        { label: "Glazing", value: "Impact-Rated Laminated Security Glass" },
        { label: "Weather Resistance", value: "100% Rust-Proof & FBC Hurricane Compliant" },
        { label: "Manufacturing Location", value: "Custom Fabricated in Miami, Florida Workshop" },
        { label: "Hardware Compatibility", value: "Ready for Multi-Point Locks & Pivot Hinges" },
        { label: "Surface Finish", value: "Premium Baked Powder Coat (Custom Colors Available)" }
      ]
    }
  },
  {
    id: 24,
    slug: "modern-horizontal-slat-driveway-gate",
    img: "modern-horizontal-slat-driveway-gate.webp",
    images: ["modern-horizontal-slat-driveway-gate.webp"],
    title: "Modern Horizontal Slat Driveway Gate",
    category: "Portones",
    tags: ["Driveway Gate", "Horizontal Slats", "Modern", "Privacy"],
    description: "Sliding gate with a clean horizontal slat design, perfect for minimalist residences.",
    extendedContent: {
      subtitle: "Minimalist Horizontal Slat Sliding Gates for Ultimate Privacy & Security",
      intro: "Secure your Miami property with sleek, uncompromising modernism. The Modern Horizontal Slat Driveway Gate by Dario's Custom Iron Art is designed specifically for contemporary luxury homes and minimalist estates. Utilizing a clean, horizontal louvered design, this heavy-duty gate provides total perimeter privacy, exceptional structural security, and a sophisticated curb appeal that traditional fences simply cannot match.",
      sections: [
        {
          heading: "Sleek Horizontal Slat Architecture",
          text: "The gate is composed of precisely spaced horizontal metal slats that create a seamless, continuous visual plane. This louvered aesthetic completely blocks sightlines from the street into your private property while maintaining a lightweight, modern architectural feel."
        },
        {
          heading: "Zero-Maintenance Aluminum Construction",
          text: "Fabricated from high-strength marine-grade aluminum, this gate is uniquely suited for South Florida. It is entirely immune to rust, rot, and the corrosive effects of coastal salt spray, ensuring decades of flawless operation without the need for constant repainting."
        },
        {
          heading: "Automated Sliding Mechanism Compatibility",
          text: "The rigid internal frame is engineered to glide effortlessly on heavy-duty V-groove wheels and tracks. We reinforce the mounting points to integrate perfectly with high-torque electric sliding gate operators, safety photo-eyes, and smart access control systems."
        },
        {
          heading: "Premium Powder Coat Finish",
          text: "Finished in a rugged electrostatic powder coat—popular in matte black, dark bronze, or crisp white—the surface resists scratching, chalking, and UV fading under the relentless tropical sun."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "High-Strength Marine-Grade Aluminum Extrusions" },
        { label: "Design Style", value: "Modern Horizontal Slats (Full or Partial Privacy)" },
        { label: "Surface Treatment", value: "Baked Electrostatic Powder Coat (UV & Salt Resistant)" },
        { label: "Corrosion Resistance", value: "100% Rust-Proof Design" },
        { label: "Manufacturing Location", value: "Custom Built in Miami, Florida Workshop" },
        { label: "Automation", value: "Pre-Engineered for Electric Sliding Operators & Smart Access" },
        { label: "Maintenance", value: "Ultra-Low Maintenance (Periodic washing)" }
      ]
    }
  },
  {
    id: 25,
    slug: "modern-metal-base-glass-coffee-table",
    img: "modern-metal-base-glass-coffee-table.webp",
    images: ["modern-metal-base-glass-coffee-table.webp", "modern-metal-base-glass-coffee-table2.webp", "modern-metal-base-glass-coffee-table3.webp"],
    title: "Modern Metal Base Glass Coffee Table",
    category: "Miscelaneas",
    tags: ["Coffee Table", "Glass Top", "Metal Base", "Interior Furniture"],
    description: "Designer coffee table with an intricate sculpted metal base and a clear tempered glass top.",
    extendedContent: {
      subtitle: "Sculptural Hand-Forged Metal Coffee Tables for Luxury Interiors",
      intro: "Center your living space with a piece of functional architectural art. The Modern Metal Base Glass Coffee Table is custom-crafted in our Miami workshop by master blacksmith Dario. Moving beyond conventional furniture, this table features a complex, hand-sculpted metallic base paired with heavy-duty crystal-clear glass, creating a breathtaking focal point for luxury penthouses, modern living rooms, and corporate lounges.",
      sections: [
        {
          heading: "Sculptural Metal Forging",
          text: "The base of the table is an exercise in abstract metallurgy. Hand-welded and contoured from solid steel or premium alloys, the intricate intersecting lines and geometric angles offer a dynamic visual experience from every viewing perspective in the room."
        },
        {
          heading: "Heavy-Duty Tempered Glass",
          text: "Topped with thick, commercial-grade tempered safety glass with polished, beveled edges. The transparent surface allows the beauty and complexity of the metal sculpture beneath to remain fully visible without obstructing the visual flow of the room."
        },
        {
          heading: "Custom Finishes & Patinas",
          text: "Available in a variety of exquisite artisanal finishes, from sleek matte black and brushed stainless to opulent hand-applied gold leaf or aged bronze patinas. A protective clear-coat seals the metal, ensuring resistance against interior humidity, spills, and daily wear."
        },
        {
          heading: "Architectural Proportions",
          text: "Because luxury interior design requires exact spatial harmony, each table is built to your exact custom dimensions. Whether you require a massive centerpiece for a sprawling great room or a slender profile for an intimate sitting area, the proportions are tailored to your space."
        }
      ],
      specificationsTable: [
        { label: "Base Material", value: "Hand-Forged Solid Steel, Aluminum, or Premium Alloy" },
        { label: "Top Material", value: "Heavy-Duty Clear Tempered Safety Glass (Beveled Edges)" },
        { label: "Finish Options", value: "Matte Powder Coat, Brushed Metal, or Artisanal Patina" },
        { label: "Design Style", value: "Modern Abstract Sculptural Furniture" },
        { label: "Manufacturing Location", value: "Handcrafted in Miami, Florida Workshop" },
        { label: "Ideal Settings", value: "Luxury Living Rooms, Corporate Lounges, Penthouse Interiors" },
        { label: "Customization", value: "Dimensions and Finishes Built strictly to Order" }
      ]
    }
  },
  {
    id: 26,
    slug: "ornate-aluminum-french-doors",
    img: "ornate-aluminum-french-doors-with-sidelights.webp",
    images: ["ornate-aluminum-french-doors-with-sidelights.webp", "ornate-aluminum-french-doors-with-sidelights2.webp", "ornate-aluminum-french-doors-with-sidelights3.webp"],
    title: "Ornate Aluminum French Doors",
    category: "Puertas",
    tags: ["French Doors", "Aluminum", "Ornate", "Sidelights"],
    description: "French door set with sidelights, featuring intricate ornamental cast details.",
    extendedContent: {
      subtitle: "Regal Ornate Aluminum French Doors with Matching Sidelights",
      intro: "Welcome natural light and timeless elegance into your home with the Ornate Aluminum French Doors. Designed and fabricated by Dario's Custom Iron Art in Miami, this majestic entryway pairs the historic charm of elaborate European cast ornamentation with the unmatched modern durability of lightweight, rust-proof marine-grade aluminum.",
      sections: [
        {
          heading: "Cast Aluminum Ornamentation",
          text: "The doors and matching sidelights are adorned with intricate, hand-finished cast aluminum scrollwork. This elaborate detailing over the glass provides a regal, classic aesthetic that mimics the opulence of heavy wrought iron manors while remaining incredibly light and easy to operate."
        },
        {
          heading: "French Door & Sidelight Harmony",
          text: "The integration of dual operable French doors flanked by fixed geometric sidelights dramatically increases the visual scale of the entryway. This configuration floods interior foyers with natural sunlight while maintaining an imposing and highly secure architectural presence from the exterior."
        },
        {
          heading: "Coastal Weather & Hurricane Protection",
          text: "Built exclusively for the aggressive Florida climate, the aluminum framing will never rust or swell. The doors are engineered to house heavy-duty, impact-rated hurricane glass and thermal weather stripping, ensuring absolute compliance with Florida Building Codes and extreme energy efficiency."
        },
        {
          heading: "Enduring Powder Coat Finish",
          text: "A multi-stage, high-temperature electrostatic powder coating fuses a deep, protective color layer to the aluminum. This shields the intricate ornate details from UV degradation and coastal salt pitting for decades."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Marine-Grade Structural Aluminum & Cast Ornamentation" },
        { label: "Configuration", value: "Double French Doors with Integrated Fixed Sidelights" },
        { label: "Glazing", value: "Florida Building Code Compliant Impact-Rated Glass" },
        { label: "Surface Finish", value: "Premium Baked Electrostatic Powder Coat" },
        { label: "Corrosion Resistance", value: "100% Rust-Proof (Ideal for Coastal Humidity)" },
        { label: "Manufacturing Location", value: "Custom Fabricated in Miami, Florida Workshop" },
        { label: "Hardware Options", value: "Compatible with Heavy-Duty Multi-Point Locks and Lever Handles" }
      ]
    }
  },
  {
    id: 27,
    slug: "ornate-metal-outdoor-wall-lantern",
    img: "ornate-metal-outdoor-wall-lantern.webp",
    images: ["ornate-metal-outdoor-wall-lantern.webp", "ornate-metal-outdoor-wall-lantern2.webp", "ornate-metal-outdoor-wall-lantern3.webp", "ornate-metal-outdoor-wall-lantern4.webp"],
    title: "Ornate Metal Outdoor Wall Lantern",
    category: "Iluminación",
    tags: ["Wall Lantern", "Outdoor Lighting", "Ornate", "Metal"],
    description: "Classic style outdoor wall lantern, forged with traditional details and seeded glass.",
    extendedContent: {
      subtitle: "Hand-Crafted Classic Metal Wall Lanterns for Exterior Illumination",
      intro: "Illuminate your estate's perimeter with the historic warmth of the Ornate Metal Outdoor Wall Lantern. Hand-forged in Miami by Dario's Custom Iron Art, these classic luminaires are the perfect architectural accent for luxury Mediterranean facades, Spanish colonial verandas, and high-end residential gate pillars.",
      sections: [
        {
          heading: "Traditional Forging Techniques",
          text: "Each lantern housing is individually crafted by master metalworkers using traditional anvil and hammer techniques. Delicate scrollwork, forged finials, and heavy metal canopies combine to create an authentic, robust fixture that stands as a piece of sculptural art even during the day."
        },
        {
          heading: "Seeded Glass & Atmospheric Lighting",
          text: "Fitted with thick, artisan-crafted seeded or hammered glass panels. This specialized glass softly diffuses modern LED bulbs, casting warm, ambient, and dramatic shadows that replicate the romantic glow of historic gaslit street lamps."
        },
        {
          heading: "Weather-Sealed Electrics",
          text: "Engineered for intense outdoor environments, the electrical sockets and wiring are professionally sealed against torrential tropical rain, intense humidity, and salt-laden air, ensuring reliable, safe, and code-compliant exterior illumination."
        },
        {
          heading: "Antique Patinas & Protection",
          text: "Treated with a heavy-duty anti-corrosion primer and hand-painted with specialized patinas such as aged bronze, verdigris, or classic matte black. A final UV-resistant clear coat locks in the historic finish while offering modern weather resistance."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Hand-Forged Wrought Iron or Cast Aluminum" },
        { label: "Glass Type", value: "Artisanal Seeded, Hammered, or Frosted Glass Panels" },
        { label: "Electrical Standard", value: "Outdoor Wet-Location Rated & UL-Compatible Socket" },
        { label: "Surface Finish", value: "Anti-Corrosion Primer with Hand-Applied Historic Patina" },
        { label: "Manufacturing Location", value: "Handcrafted in Miami, Florida Workshop" },
        { label: "Mounting Style", value: "Heavy-Duty Wall Sconce or Pillar Mount" },
        { label: "Ideal Applications", value: "Estate Entrances, Courtyards, Verandas, and Garage Facades" }
      ]
    }
  },
  {
    id: 28,
    slug: "ornate-wrought-iron-railing",
    img: "ornate-wrought-iron-railing.webp",
    images: ["ornate-wrought-iron-railing.webp", "ornate-wrought-iron-railing2.webp", "ornate-wrought-iron-railing3.webp", "ornate-wrought-iron-railing4.webp", "ornate-wrought-iron-railing5.webp", "ornate-wrought-iron-railing6.webp", "ornate-wrought-iron-railing7.webp", "ornate-wrought-iron-railing8.webp"],
    title: "Ornate Wrought Iron Railing",
    category: "Barandales",
    tags: ["Wrought Iron", "Railing", "Ornate", "Classic"],
    description: "Classic railing with elaborate scrolls and floral details in wrought iron, ideal for majestic balconies.",
    extendedContent: {
      subtitle: "Palatial Ornate Wrought Iron Balcony Railings for Luxury Estates",
      intro: "Transform your property's facade into a testament to European grandeur. The Ornate Wrought Iron Railing by Dario's Custom Iron Art is a heavy, hand-forged masterpiece tailored for luxury balconies, Juliet overlooks, and grand terraces in Miami's most exclusive neighborhoods, including Coral Gables and Star Island.",
      sections: [
        {
          heading: "Master Artisanal Scrollwork",
          text: "There are no prefabricated hollow tubes here. Master blacksmith Dario heats and hand-hammers solid iron bars to create breathtaking, elaborate scrollwork, organic floral motifs, and heavy decorative balusters that exude classical Renaissance opulence."
        },
        {
          heading: "Massive Solid Iron Construction",
          text: "Built from heavy-gauge solid wrought iron and structural steel, this railing system offers unparalleled monumental weight and strength. It provides extreme perimeter security and rigidity that perfectly complements the masonry and stone architecture of high-end estates."
        },
        {
          heading: "Strict Safety Compliance",
          text: "Despite its intricate artistic nature, the structural framework and picket spacing are engineered with absolute precision to meet and exceed all strict Florida Building Codes for elevated residential and commercial balcony guardrails."
        },
        {
          heading: "Multi-Stage Rust Prevention",
          text: "To protect this investment from Miami’s aggressive coastal humidity, the raw iron undergoes abrasive blasting, a zinc-rich chemical primer coat, and a high-temperature baked electrostatic powder coating, sealing the metal completely against rust and oxidation."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Heavy-Gauge Solid Wrought Iron & Structural Steel" },
        { label: "Artistic Elements", value: "Hand-Forged Scrolls, Floral Castings, and Decorative Balusters" },
        { label: "Surface Finish", value: "Multi-Stage Anti-Corrosion Primer & Baked Powder Coat" },
        { label: "Safety Compliance", value: "Engineered to FBC Standards for Elevated Guardrails" },
        { label: "Manufacturing Location", value: "Handcrafted to Order in Miami, Florida Workshop" },
        { label: "Ideal Applications", value: "Luxury Juliet Balconies, Grand Terraces, Estate Porches" },
        { label: "Customization", value: "Fully Adjustable Dimensions, Radiuses, and Motif Densities" }
      ]
    }
  },
  {
    id: 29,
    slug: "ornate-wrought-iron-stair-railing",
    img: "ornate-wrought-iron-stair-railing.webp",
    images: ["ornate-wrought-iron-stair-railing.webp"],
    title: "Ornate Wrought Iron Stair Railing",
    category: "Barandales",
    tags: ["Stair Railing", "Wrought Iron", "Ornate", "Interiors"],
    description: "Elegant hand-forged iron handrail, designed for traditional style curved interior staircases.",
    extendedContent: {
      subtitle: "Sweeping Custom Wrought Iron Interior Stair Railings",
      intro: "The staircase is the spine of a home, and its railing should be its most breathtaking jewelry. The Ornate Wrought Iron Stair Railing is a bespoke interior masterpiece hand-forged in Miami by Dario's Custom Iron Art. Designed for double-height foyers and sweeping curved staircases, this heavy iron railing brings the romance and elegance of historic European palaces directly into your luxury residence.",
      sections: [
        {
          heading: "Custom Curvature & Flow",
          text: "Because no two grand staircases are identical, every section of this railing is custom-forged. Dario's team conducts precise on-site templating to ensure the heavy iron base rail and top cap flow perfectly alongside the exact pitch and sweeping radius of your custom wood or marble stairs."
        },
        {
          heading: "Hand-Hammered Balusters & Motifs",
          text: "The infill consists of intricate, hand-hammered iron balusters, ornate belly-bows, and classical scrollwork. Carefully spaced for absolute safety and visual rhythm, these artistic elements create dynamic shadows across the foyer as interior lighting shifts throughout the day."
        },
        {
          heading: "Solid Handrail Ergonomics",
          text: "Capped with a heavy, smoothly polished iron or custom-molded brass top rail. The handrail is ergonomically shaped to provide a luxurious, sturdy grip, ensuring safe transit up and down the staircase while maintaining a flawless aesthetic."
        },
        {
          heading: "Classic Interior Finishes",
          text: "Finished with premium interior-grade enamels, hand-rubbed patinas, or baked powder coats in tones like satin black, oil-rubbed bronze, or accented with hand-applied gold leaf to match the surrounding interior design hardware seamlessly."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Solid Hand-Forged Wrought Iron" },
        { label: "Structural Profile", value: "Custom-Curved and Templated to Staircase Geometry" },
        { label: "Handrail Options", value: "Polished Iron, Molded Brass, or Prepared for Custom Wood Cap" },
        { label: "Finish Options", value: "Satin Black, Antique Bronze, or Custom Gold Leaf Accents" },
        { label: "Manufacturing Location", value: "Custom Built in Miami, Florida Workshop" },
        { label: "Safety Compliance", value: "Engineered to Meet Interior Stairway Code Spacing & Load Limits" },
        { label: "Installation", value: "Precision On-Site Welding and Core-Drilled Anchoring" }
      ]
    }
  },
  {
    id: 30,
    slug: "steampunk-gear-metal-wall-art",
    img: "steampunk-gear-metal-wall-art.webp",
    images: ["steampunk-gear-metal-wall-art.webp"],
    title: "Steampunk Gear Metal Wall Art",
    category: "Arte",
    tags: ["Wall Art", "Steampunk", "Gears", "Interiors"],
    description: "Wall art composition inspired by the steampunk movement, combining pipes and gears.",
    extendedContent: {
      subtitle: "Industrial Steampunk Metal Gear Wall Art & Mechanical Decor",
      intro: "Embrace the mechanical beauty of the industrial age with the Steampunk Gear Metal Wall Art. Exclusively crafted in our Miami workshop by Dario's Custom Iron Art, this striking sculptural composition intertwines rugged metal gears, heavy pipe fittings, and exposed rivets to create an unforgettable focal point for modern urban lofts, craft breweries, and eclectic office spaces.",
      sections: [
        {
          heading: "Authentic Repurposed & Custom Gears",
          text: "This artwork is a masterful collage of heavy metal. We incorporate a mix of authentic reclaimed machinery gears, heavy-duty industrial pipes, and custom CNC-cut cogs to build a visually dense and historically rich mechanical aesthetic."
        },
        {
          heading: "Layered 3D Composition",
          text: "Rather than a flat canvas, the piece is welded in a multi-tiered, three-dimensional arrangement. The overlapping cogs and projecting pipe elements create deep, dynamic shadows on your wall, making the sculpture feel as though it is part of a larger, hidden machine."
        },
        {
          heading: "Industrial Patinas & Finishes",
          text: "To achieve the quintessential steampunk look, the metals are treated with specialized chemical patinas to produce rich, authentic tones of aged copper, rusted iron, and burnished brass. A high-grade clear sealant is then applied to lock in the patina and prevent unwanted flaking."
        },
        {
          heading: "Heavy-Duty Mounting Integrity",
          text: "Given the substantial weight of solid metal components, the artwork is engineered with a reinforced steel backing frame and concealed heavy-duty structural cleats, ensuring it hangs safely and securely on drywall, concrete, or exposed brick."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Reclaimed Steel, Iron Pipes, and Custom Metal Cogs" },
        { label: "Artistic Style", value: "3D Industrial Steampunk / Mechanical Relief" },
        { label: "Surface Finish", value: "Chemically Aged Patinas (Copper, Rust, Brass) with Clear Seal" },
        { label: "Manufacturing Location", value: "Handcrafted in Miami, Florida Workshop" },
        { label: "Mounting System", value: "Concealed Heavy-Duty Structural Cleats Included" },
        { label: "Ideal Settings", value: "Urban Lofts, Breweries, Themed Restaurants, Creative Offices" },
        { label: "Customization", value: "Available in Custom Dimensions and Layout Configurations" }
      ]
    }
  },
  {
    id: 31,
    slug: "wood-look-aluminum-privacy-fence",
    img: "wood-look-aluminum-privacy-fence.webp",
    images: ["wood-look-aluminum-privacy-fence.webp", "wood-look-aluminum-privacy-fence2.webp", "wood-look-aluminum-privacy-fence3.webp", "wood-look-aluminum-privacy-fence4.webp", "wood-look-aluminum-privacy-fence5.webp"],
    title: "Wood Look Aluminum Privacy Fence",
    category: "Portones",
    tags: ["Privacy Fence", "Wood Look", "Aluminum", "Exterior"],
    description: "Perimeter fencing system offering the visual beauty of wood with the eternal durability of aluminum.",
    extendedContent: {
      subtitle: "Wood-Look Aluminum Privacy Fences: Natural Beauty Without the Upkeep",
      intro: "Achieve the organic warmth and luxury aesthetic of natural wood without the nightmare of constant maintenance. The Wood-Look Aluminum Privacy Fence by Dario's Custom Iron Art is the ultimate perimeter solution for humid, coastal climates like Miami. This innovative fencing system pairs the extreme durability of marine-grade aluminum with state-of-the-art wood grain sublimation technology.",
      sections: [
        {
          heading: "Innovative Wood-Grain Sublimation",
          text: "The aluminum slats undergo a high-tech sublimation process where hyper-realistic wood grain patterns are permanently baked into the metal's powder-coated surface. The result is a fence that is visually indistinguishable from premium natural timber, complete with grain textures and rich wood tones."
        },
        {
          heading: "Absolute Rot & Rust Immunity",
          text: "Unlike real wood that warps, splinters, and rots under Miami's torrential rain and termite pressure, this marine-grade aluminum structure is 100% immune to biological decay and rust. It will never require sanding, staining, or sealing."
        },
        {
          heading: "Total Privacy & Security",
          text: "The precise interlocking horizontal or vertical slat design guarantees absolute privacy for your backyard, pool deck, or estate perimeter. The robust metal framework provides superior physical security compared to flimsy vinyl or degrading wood panels."
        },
        {
          heading: "High-Wind Structural Integrity",
          text: "Engineered specifically to endure South Florida's hurricane seasons. The heavy-duty aluminum posts are deeply anchored in concrete, and the reinforced slats are designed to satisfy strict wind-load pressures mandated by the Florida Building Code."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Marine-Grade Structural Aluminum Profiles" },
        { label: "Surface Finish", value: "Baked Wood-Grain Sublimation (UV & Salt Resistant)" },
        { label: "Durability Rating", value: "100% Resistant to Rot, Termites, Rust, and Warping" },
        { label: "Design Configuration", value: "Seamless Horizontal or Vertical Privacy Slats" },
        { label: "Manufacturing Location", value: "Custom Fabricated in Miami, Florida Workshop" },
        { label: "Wind Load Certification", value: "Engineered to FBC Hurricane Resistance Standards" },
        { label: "Maintenance", value: "Zero Upkeep (Periodic rinsing with water)" }
      ]
    }
  },
  {
    id: 32,
    slug: "wrought-iron-chandelier",
    img: "wrought-iron-chandelier.webp",
    images: ["wrought-iron-chandelier.webp", "wrought-iron-chandelier2.webp", "wrought-iron-chandelier3.webp"],
    title: "Wrought Iron Chandelier",
    category: "Iluminación",
    tags: ["Chandelier", "Wrought Iron", "Classic", "High Ceiling"],
    description: "Stunning hand-forged chandelier, ideal for high-ceiling foyers and formal dining rooms.",
    extendedContent: {
      subtitle: "Monumental Wrought Iron Chandeliers for High-Ceiling Estates",
      intro: "Anchor your grand foyer or double-height dining room with the undeniable presence of the Wrought Iron Chandelier. Masterfully hand-forged by Dario's Custom Iron Art in Miami, this massive, multi-tiered luminaire combines the raw power of authentic blacksmithing with the refined elegance required by South Florida's most luxurious architectural estates.",
      sections: [
        {
          heading: "Multi-Tiered Architectural Illumination",
          text: "Designed specifically to fill volumetric vertical space, the chandelier features an imposing multi-tier structure. Dozens of hand-sculpted candle arms stretch outward in perfect symmetry, providing balanced, cascading ambient light that highlights vaulted ceilings and sweeping staircases."
        },
        {
          heading: "Heavy-Gauge Forged Iron",
          text: "Every component is heated in the forge and shaped on the anvil. From the central structural column to the delicate acanthus leaf accents and sweeping scrollwork, the solid iron construction delivers an authentic, historic weight that imitation fixtures cannot replicate."
        },
        {
          heading: "Safe Structural Rigging",
          text: "Safety is critical when suspending heavy ironwork from high ceilings. We engineer custom heavy-duty mounting canopies, aircraft-grade support cables, and reinforced iron chains to ensure absolute stability and strict compliance with weight-bearing building codes."
        },
        {
          heading: "Hand-Applied Finishes & Electrics",
          text: "Finished in deep matte black, distressed bronze, or highlighted with antique gold leaf. The fixture is fully integrated with modern, UL-compatible electrical wiring hidden seamlessly within the iron arms, ready to be paired with advanced smart-home dimming systems."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Solid Hand-Forged Wrought Iron" },
        { label: "Design Architecture", value: "Multi-Tiered Classic Palatial Suspension" },
        { label: "Surface Finish", value: "Custom Baked Enamels & Hand-Applied Patinas" },
        { label: "Safety & Rigging", value: "Heavy-Duty Custom Chain & Load-Tested Canopy" },
        { label: "Manufacturing Location", value: "Handcrafted in Miami, Florida Workshop" },
        { label: "Ideal Settings", value: "Double-Height Foyers, Grand Dining Halls, Hotel Lobbies" },
        { label: "Electrical Integration", value: "Concealed Wiring Compatible with Modern Dimmers" }
      ]
    }
  },
  {
    id: 33,
    slug: "wrought-iron-style-aluminum-entry-door",
    img: "wrought-iron-style-aluminum-entry-door.webp",
    images: ["wrought-iron-style-aluminum-entry-door.webp"],
    title: "Wrought Iron Style Aluminum Entry Door",
    category: "Puertas",
    tags: ["Entry Door", "Aluminum", "Wrought Iron Style", "Lightweight"],
    description: "Lightweight aluminum security door designed to perfectly mimic the heavy aesthetic of antique wrought iron.",
    extendedContent: {
      subtitle: "Wrought Iron Style Aluminum Entry Doors for Humid Coastal Climates",
      intro: "Capture the historic gravity and classical elegance of European manors without the burden of rust. The Wrought Iron Style Aluminum Entry Door by Dario's Custom Iron Art is an engineering marvel designed for Miami's relentless coastal environment. Through meticulous fabrication and specialized finishing, we deliver a door that looks exactly like solid, ancient iron, but is built entirely from lightweight, indestructible aluminum.",
      sections: [
        {
          heading: "Faux-Iron Aluminum Casting & Forging",
          text: "Using heavy-wall aluminum extrusions and intricate cast aluminum ornamental scrolls, our artisans assemble a door profile that accurately replicates the thick, commanding presence of traditional wrought iron. Every weld and joint is smoothed to perfection to maintain the illusion of solid forged steel."
        },
        {
          heading: "Weightless Operation & Hinge Longevity",
          text: "Because aluminum is a fraction of the weight of steel, this monumental door operates with feather-light ease. This massive reduction in weight virtually eliminates hinge sagging and frame stress over time, ensuring effortless daily operation for decades."
        },
        {
          heading: "Impact & Weather Resistance",
          text: "Like all our premium exterior doors, this unit is engineered to satisfy the strict Florida Building Code for hurricane resistance. It features heavy-duty internal bracing and houses thick, impact-rated laminated glass to defend against high-velocity windborne debris."
        },
        {
          heading: "Hand-Painted Faux Patina Finishes",
          text: "The secret to the iron illusion lies in the finish. After a protective electrostatic powder coat base is applied, artisans hand-paint subtle highlights—such as antique bronze rubs or simulated distress marks—creating an incredibly convincing faux-iron patina that will never actually rust."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Heavy-Wall Structural Aluminum Extrusions" },
        { label: "Design Aesthetic", value: "Historic Wrought Iron Replication" },
        { label: "Corrosion Resistance", value: "100% Rust-Proof (Perfect for Oceanfront Homes)" },
        { label: "Glazing", value: "FBC Compliant Impact-Rated Security Glass" },
        { label: "Manufacturing Location", value: "Custom Fabricated in Miami, Florida Workshop" },
        { label: "Surface Finish", value: "Baked Powder Coat with Hand-Applied Faux-Iron Patina" },
        { label: "Hardware Compatibility", value: "Pre-Configured for Multi-Point Locking Systems" }
      ]
    }
  },
  {
    id: 34,
    slug: "black-aluminum-sliding-gate-and-fence",
    img: "black-aluminum-sliding-driveway-gate-and-fence.webp",
    images: ["black-aluminum-sliding-driveway-gate-and-fence.webp"],
    title: "Black Aluminum Sliding Gate & Fence",
    category: "Portones",
    tags: ["Aluminum", "Sliding Gate", "Privacy Fence", "Modern", "Black Matte"],
    description: "Modern black matte aluminum sliding driveway gate integrated with a matching privacy fence. Ensures maximum security and sleek aesthetics for residential properties.",
    extendedContent: {
      subtitle: "Integrated Matte Black Aluminum Sliding Gate & Perimeter Fence",
      intro: "Secure your estate with a unified, ultra-modern aesthetic. The Black Aluminum Sliding Gate and matching Privacy Fence system by Dario's Custom Iron Art provides a seamless architectural perimeter for luxury homes in Miami. Engineered from rust-proof marine-grade aluminum and finished in a striking matte black, this system delivers uncompromising privacy, seamless automation, and zero-maintenance longevity.",
      sections: [
        {
          heading: "Unified Modern Aesthetic",
          text: "By designing and fabricating both the automated driveway gate and the surrounding perimeter fence together, we guarantee perfect alignment of the horizontal louvers and an identical color match. The continuous sleek black lines create a bold, minimalist boundary that vastly increases property curb appeal."
        },
        {
          heading: "Smooth Sliding Automation",
          text: "The heavy-duty sliding gate is built upon an ultra-rigid aluminum chassis that prevents flexing. It glides effortlessly on precision-machined V-tracks and is pre-engineered with reinforced mounting brackets to integrate flawlessly with high-speed, heavy-duty electric gate motors and modern smart-access keypads."
        },
        {
          heading: "Privacy & Airflow Engineering",
          text: "The slat spacing is meticulously calculated to block direct sightlines from the street into your private grounds, acting as a robust visual and physical barrier. However, the subtle louvered gaps still permit the free flow of coastal breezes, essential for comfort in South Florida."
        },
        {
          heading: "Baked Matte Black Finish",
          text: "The entire system is coated in a premium electrostatic matte black powder coat and baked at over 400 degrees. This thermoset layer is incredibly resistant to scratching, chalking, and UV fading, ensuring the deep black color remains rich and flawless against Miami's intense sun."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Marine-Grade Structural Aluminum Profiles" },
        { label: "System Components", value: "Automated Sliding Gate + Matching Perimeter Fence" },
        { label: "Surface Finish", value: "Premium Baked Matte Black Powder Coat" },
        { label: "Weather Resistance", value: "100% Rust-Proof & UV Fade Resistant" },
        { label: "Manufacturing Location", value: "Custom Built in Miami, Florida Workshop" },
        { label: "Automation Ready", value: "Engineered for High-Torque Sliding Gate Operators" },
        { label: "Privacy Level", value: "High (Louvered design blocks direct sightlines)" }
      ]
    }
  },
  {
    id: 35,
    slug: "black-metal-wall-mounted-wine-rack",
    img: "black-metal-wall-mounted-wine-rack.webp",
    images: ["black-metal-wall-mounted-wine-rack.webp", "black-metal-wall-mounted-wine-rack2.webp"],
    title: "Black Metal Wall-Mounted Wine Rack",
    category: "Miscelaneas",
    tags: ["Wine Rack", "Wall Mounted", "Black Metal", "Interior", "Modern Industrial"],
    description: "Elegant wall-mounted wine rack crafted from black metal. A perfect blend of modern industrial design and space-saving functionality for dining rooms or cellars.",
    extendedContent: {
      subtitle: "Industrial Modern Black Metal Wall-Mounted Wine Racks",
      intro: "Showcase your vintage collection as a piece of architectural art. The Black Metal Wall-Mounted Wine Rack by Dario's Custom Iron Art merges modern industrial aesthetics with highly functional space-saving design. Custom-fabricated in Miami, this sleek metal storage solution transforms blank dining room walls or high-end residential wine cellars into sophisticated tasting galleries.",
      sections: [
        {
          heading: "Space-Saving Wall Integration",
          text: "Designed to mount flush against the wall, this vertical wine rack maximizes storage capacity without consuming valuable floor space. Its minimalist profile is perfect for modern apartments, luxury dining rooms, and custom climate-controlled glass wine enclosures."
        },
        {
          heading: "Secure Bottle Cradling",
          text: "Precision-welded metal cradles securely hold each bottle at the optimal horizontal angle, keeping the cork moist and preserving the integrity of the wine. The robust steel construction ensures absolute stability even when fully loaded with heavy bottles."
        },
        {
          heading: "Minimalist Industrial Aesthetic",
          text: "Featuring clean, sharp lines and a deep matte black finish, the rack exudes a contemporary industrial vibe. It effortlessly complements exposed brick, concrete textures, and modern glass architecture, making the wine bottles themselves the focal point."
        },
        {
          heading: "Heavy-Duty Anchoring System",
          text: "Given the significant weight of a fully stocked wine rack, safety is our priority. The unit is designed with hidden, heavy-duty mounting flanges that anchor directly into wall studs or concrete, guaranteeing zero flex or risk of detachment."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Precision-Welded Structural Steel Tubing & Rods" },
        { label: "Bottle Orientation", value: "Horizontal Display (Optimal for Cork Preservation)" },
        { label: "Surface Finish", value: "Baked Matte Black Powder Coat (Scratch Resistant)" },
        { label: "Design Style", value: "Modern Minimalist / Industrial Chic" },
        { label: "Manufacturing Location", value: "Custom Fabricated in Miami, Florida Workshop" },
        { label: "Mounting System", value: "Concealed Heavy-Duty Wall Stud Anchors" },
        { label: "Customization", value: "Available in Custom Heights and Bottle Capacities" }
      ]
    }
  },
  {
    id: 36,
    slug: "custom-laser-cut-metal-salon-display",
    img: "custom-laser-cut-metal-salon-display.webp",
    images: ["custom-laser-cut-metal-salon-display.webp", "custom-laser-cut-metal-salon-display2.webp"],
    title: "Custom Laser Cut Metal Salon Display",
    category: "Miscelaneas",
    tags: ["Commercial Display", "Laser Cut", "Custom Logo", "Metal Shelf"],
    description: "Bespoke metal display shelving unit featuring precision laser-cut branding. Designed specifically for commercial salons and boutiques to showcase high-end products.",
    extendedContent: {
      subtitle: "Custom Laser Cut Metal Shelving & High-End Retail Displays",
      intro: "Present your premium products on a display that matches the quality of your brand. The Custom Laser Cut Metal Salon Display by Dario's Custom Iron Art is a bespoke commercial fixture designed for luxury boutiques, high-end salons, and exclusive retail spaces in Miami. Merging heavy-duty structural steel with precision CNC laser-cut branding, this shelving unit acts as a powerful visual merchandising tool.",
      sections: [
        {
          heading: "Precision Branded Laser Cutting",
          text: "We utilize advanced CNC laser technology to cut your custom business logo, typography, or intricate geometric patterns directly into the solid metal header and side panels. This permanent, high-precision branding elevates the fixture from a simple shelf to a signature piece of commercial architecture."
        },
        {
          heading: "High-Capacity Structural Shelving",
          text: "Unlike flimsy wire racks or basic wood shelves, this unit is welded from heavy-gauge steel. It is engineered to support substantial weight without bowing, making it perfect for safely displaying rows of heavy glass product bottles, boutique merchandise, or heavy salon equipment."
        },
        {
          heading: "Commercial-Grade Finishes",
          text: "In high-traffic retail environments, durability is key. The entire display is finished with a commercial-grade electrostatic powder coat. Available in elegant matte black, crisp white, or custom brand colors, the finish is highly resistant to scratches, scuffs, and daily wear-and-tear."
        },
        {
          heading: "Ambient Backlighting Ready",
          text: "The laser-cut logos and patterns are specifically designed with a slight offset, making them perfect for integrating ambient LED backlighting. When illuminated, the metal cutouts create a striking, glowing silhouette that immediately draws customer attention."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Heavy-Gauge Structural Steel & Sheet Metal" },
        { label: "Branding Integration", value: "Custom CNC Laser-Cut Logos and Patterns" },
        { label: "Surface Finish", value: "Commercial-Grade Scratch-Resistant Powder Coat" },
        { label: "Load Capacity", value: "Engineered to Support Heavy Retail Merchandise" },
        { label: "Manufacturing Location", value: "Custom Fabricated in Miami, Florida Workshop" },
        { label: "Ideal Environments", value: "Luxury Salons, Boutiques, Spas, and Retail Showrooms" },
        { label: "Lighting Integration", value: "Pre-Configured for Concealed LED Strip Backlighting" }
      ]
    }
  },
  {
    id: 37,
    slug: "custom-stainless-steel-laundry-countertop",
    img: "custom-stainless-steel-laundry-countertop.webp",
    images: ["custom-stainless-steel-laundry-countertop.webp"],
    title: "Custom Stainless Steel Laundry Countertop",
    category: "Miscelaneas",
    tags: ["Stainless Steel", "Countertop", "Utility", "Heavy Duty", "Custom Fit"],
    description: "Heavy-duty custom stainless steel countertop designed for laundry and utility rooms. Offers extreme durability, easy maintenance, and a sleek, hygienic surface.",
    extendedContent: {
      subtitle: "Heavy-Duty Custom Stainless Steel Laundry & Utility Countertops",
      intro: "Upgrade your utility spaces with the ultimate combination of hygiene, modern design, and indestructible durability. The Custom Stainless Steel Laundry Countertop by Dario's Custom Iron Art brings professional-grade commercial kitchen quality into the luxury residential home. Custom-measured and fabricated in Miami, this seamless metal surface transforms laundry rooms and garages into sleek, highly functional workspaces.",
      sections: [
        {
          heading: "Hygienic 304/316L Stainless Steel",
          text: "Fabricated from premium 304 or marine-grade 316L stainless steel, this countertop is entirely non-porous. It is completely immune to water damage, chemical spills from detergents, and bacteria buildup, making it the most hygienic and easy-to-clean surface available for utility work."
        },
        {
          heading: "Seamless Custom Sink Integrations",
          text: "Because we fabricate entirely from scratch, we can seamlessly weld and polish deep utility sinks directly into the countertop. This eliminates caulked seams where dirt and grime typically hide, providing a flawless, continuous metal surface that looks incredible and functions perfectly."
        },
        {
          heading: "Heavy-Duty Load Capacity",
          text: "Backed by a solid, water-resistant substrate and reinforced structural channels, the countertop is engineered to handle extreme weight. It easily supports heavy laundry baskets, tools, and appliances without denting, flexing, or compromising its sleek profile."
        },
        {
          heading: "Scratch-Resistant Brushed Finish",
          text: "Finished with a professional #4 brushed polish. This directional grain finish not only provides a sophisticated, modern industrial aesthetic but also helps to mask minor scratches and daily wear, keeping the countertop looking pristine year after year."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Premium Type 304 or Marine-Grade 316L Stainless Steel" },
        { label: "Surface Finish", value: "Professional #4 Brushed Directional Grain" },
        { label: "Hygiene Rating", value: "100% Non-Porous, Anti-Microbial, and Chemical Resistant" },
        { label: "Custom Integrations", value: "Seamlessly Welded Utility Sinks and Custom Backsplashes" },
        { label: "Manufacturing Location", value: "Custom Fabricated in Miami, Florida Workshop" },
        { label: "Ideal Applications", value: "Luxury Laundry Rooms, Garages, Mudrooms, Outdoor Prep Areas" },
        { label: "Maintenance", value: "Ultra-Low (Wipe clean with stainless steel polish or mild soap)" }
      ]
    }
  },
  {
    id: 38,
    slug: "custom-wrought-iron-rose-sculpture",
    img: "custom-wrought-iron-rose.webp",
    images: ["custom-wrought-iron-rose.webp", "custom-wrought-iron-rose2.webp", "custom-wrought-iron-rose3.webp"],
    title: "Custom Wrought Iron Rose Sculpture",
    category: "Arte",
    tags: ["Metal Art", "Wrought Iron", "Hand Forged", "Floral Sculpture", "Unique Piece"],
    description: "Exquisite, hand-forged wrought iron rose sculpture. This delicate yet eternal piece of metal art showcases master craftsmanship and makes a perfect romantic gift or decorative accent.",
    extendedContent: {
      subtitle: "Hand-Forged Eternal Wrought Iron Rose Sculptures",
      intro: "Capture the fleeting beauty of nature in eternal, solid metal. The Custom Wrought Iron Rose Sculpture is an exquisite demonstration of master craftsmanship by Dario's Custom Iron Art. Hand-forged on the anvil in our Miami workshop, each rose is a completely unique piece of art, blending the brutal strength of iron with the delicate, organic curves of a blooming flower.",
      sections: [
        {
          heading: "Delicate Anvil Forging",
          text: "Creating a realistic rose from cold steel requires the highest level of traditional blacksmithing. Master Dario heats the metal to a glowing red, carefully hammering and shaping each individual petal and thorny stem by hand. No two roses are ever identical, ensuring your sculpture is a true one-of-a-kind original."
        },
        {
          heading: "Eternal Durability",
          text: "Unlike real flowers that wither or fragile glass that breaks, this solid iron rose is built to last for generations. It serves as an indestructible symbol of love and dedication, making it an extraordinary gift for anniversaries—especially the traditional 'Iron' 6th anniversary—or as a striking centerpiece."
        },
        {
          heading: "Bespoke Patina Details",
          text: "The raw forged iron is treated with specialized techniques to enhance its visual depth. We offer finishes ranging from raw burnished steel with a protective clear coat to heat-blued petals or subtle, hand-painted red and green patinas that highlight the organic textures of the hammer strikes."
        },
        {
          heading: "Unique Artisanal Signatures",
          text: "Every piece is proudly handcrafted in Miami and carries the distinct signature of the artisan's hammer. These sculptures can be mounted on custom metal bases, integrated into larger ironwork projects, or displayed intimately on a mantle or bookshelf."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Solid Hand-Forged Iron & Mild Steel" },
        { label: "Fabrication Technique", value: "Traditional Anvil Hammering & Thermal Bending" },
        { label: "Surface Finish", value: "Burnished Steel, Clear-Coat Seal, or Custom Color Patina" },
        { label: "Uniqueness", value: "100% Unique; No Two Roses are Exactly Alike" },
        { label: "Manufacturing Location", value: "Handcrafted in Miami, Florida Workshop" },
        { label: "Ideal Uses", value: "Anniversary Gifts, Interior Decor Centerpieces, Fine Metal Art" },
        { label: "Durability", value: "Virtually Indestructible Solid Metal Construction" }
      ]
    }
  },
  {
    id: 39,
    slug: "laser-cut-metal-bar-front-panels",
    img: "laser-cut-metal-bar-front-panels.webp",
    images: ["laser-cut-metal-bar-front-panels.webp", "laser-cut-metal-bar-front-panels2.webp", "laser-cut-metal-bar-front-panels3.webp", "laser-cut-metal-bar-front-panels4.webp", "laser-cut-metal-bar-front-panels5.webp"],
    title: "Laser Cut Metal Bar Front Panels",
    category: "Miscelaneas",
    tags: ["Bar Front", "Laser Cut", "Commercial", "Backlit Potential", "Modern Pattern"],
    description: "Custom laser-cut metal panels designed to clad commercial or residential bar fronts. The intricate patterns are ideal for backlighting, adding an upscale, dynamic vibe to any entertainment space.",
    extendedContent: {
      subtitle: "Backlit Laser Cut Metal Bar Front Cladding Panels",
      intro: "Transform commercial bars, restaurant counters, and luxury home entertainment spaces with our Laser Cut Metal Bar Front Panels. Custom-designed and fabricated in Miami by Dario's Custom Iron Art, these heavy-duty architectural metal panels replace boring wood facades with striking, precision-cut geometric or organic patterns that command the room’s attention.",
      sections: [
        {
          heading: "Intricate CNC Cut Patterns",
          text: "Using state-of-the-art CNC laser technology, we cut high-resolution, complex patterns into solid metal sheets. From modern abstract webs to art-deco geometric lines or custom corporate logos, the design possibilities allow you to perfectly match the thematic aesthetic of your venue."
        },
        {
          heading: "LED Backlighting Optimization",
          text: "The true magic of these panels is revealed when illuminated. We engineer the metal cladding with precise stand-offs and translucent acrylic backings, creating the perfect housing for RGB or warm LED strip lights. The light pushes through the laser-cut voids, creating a spectacular glowing focal point for nightlife and evening entertaining."
        },
        {
          heading: "Durable Kick-Zone Protection",
          text: "Bar fronts endure constant abuse from shoes and barstools. These solid metal panels act as impenetrable armor, protecting the underlying bar structure from scuffs, kicks, and impacts while maintaining their flawless, high-end appearance."
        },
        {
          heading: "Modular Custom Installation",
          text: "Fabricated strictly to measure based on your bar's exact dimensions. The panels are finished in a highly durable, wipe-clean electrostatic powder coat and are designed for modular installation, allowing for seamless corner wrapping and easy removal for lighting maintenance."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Heavy-Gauge Steel or Marine Aluminum Sheets" },
        { label: "Fabrication Method", value: "High-Precision CNC Laser Cutting" },
        { label: "Surface Finish", value: "Commercial-Grade Baked Powder Coat (Scuff Resistant)" },
        { label: "Design Options", value: "Custom Geometric, Floral, Art-Deco, or Branded Logos" },
        { label: "Manufacturing Location", value: "Custom Built in Miami, Florida Workshop" },
        { label: "Lighting Integration", value: "Engineered with Stand-Offs for LED Backlighting" },
        { label: "Ideal Environments", value: "Nightclubs, Restaurant Bars, Luxury Home Theaters & Lounges" }
      ]
    }
  },
  {
    id: 40,
    slug: "laser-cut-metal-staircase-railing-panels",
    img: "laser-cut-metal-staircase-railing-panels.webp",
    images: ["laser-cut-metal-staircase-railing-panels.webp"],
    title: "Laser Cut Metal Staircase Railing Panels",
    category: "Barandales",
    tags: ["Stair Railing", "Laser Cut", "Custom Pattern", "Interiors", "Modern Staircase"],
    description: "Innovative interior staircase railing featuring custom laser-cut metal panels. Replaces traditional balusters with a continuous, artistic geometric pattern for a highly contemporary look.",
    extendedContent: {
      subtitle: "Avant-Garde Laser Cut Metal Staircase Railing Panels",
      intro: "Replace traditional, repetitive balusters with a continuous, sweeping canvas of modern art. The Laser Cut Metal Staircase Railing Panels by Dario's Custom Iron Art offer a revolutionary approach to interior architecture. Fabricated in Miami, these custom CNC-cut metal panels provide rigid structural safety while transforming your residential or commercial staircase into a breathtaking geometric focal point.",
      sections: [
        {
          heading: "Continuous Geometric & Organic Patterns",
          text: "Freed from the limitations of vertical iron bars, CNC laser cutting allows us to design flowing, continuous patterns that run the entire length of the staircase. Whether you prefer aggressive modern geometry, flowing natural vines, or custom abstract motifs, the railing becomes a seamless, unified piece of sculpture."
        },
        {
          heading: "Rigid Structural Safety Panels",
          text: "While they look delicate and lace-like, the panels are cut from heavy-gauge structural steel or thick aluminum. Framed tightly within rigid metal borders, this system provides incredible lateral strength and zero flex, easily surpassing local building codes for interior stair safety and fall protection."
        },
        {
          heading: "Seamless Stair Geometry Integration",
          text: "Staircases involve complex angles and inclines. Our team conducts highly precise on-site digital measurements to ensure the laser-cut patterns align flawlessly with the pitch of your specific stairs, ensuring the artwork looks intentional, proportional, and perfectly leveled."
        },
        {
          heading: "Modern Powder Coat Finishes",
          text: "The intricate edges of the cut metal are smoothed and the entire panel is sealed in a premium electrostatic powder coat. Popular in sleek matte black, metallic silver, or bold architectural whites, the finish offers a luxurious tactile feel and total protection against interior wear and tear."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Heavy-Gauge Structural Steel or Aluminum Plate" },
        { label: "Fabrication Method", value: "Custom Mapped CNC Laser Cutting" },
        { label: "Surface Finish", value: "Premium Electrostatic Powder Coat (Scratch & Fade Resistant)" },
        { label: "Design Capabilities", value: "Unlimited Custom Continuous Patterns & Geometries" },
        { label: "Manufacturing Location", value: "Custom Engineered & Cut in Miami, Florida" },
        { label: "Safety Compliance", value: "Exceeds Strict FBC Structural Codes for Stairways" },
        { label: "Installation", value: "Precision Templated to Match Exact Staircase Pitch" }
      ]
    }
  },
  {
    id: 41,
    slug: "laser-cut-penny-farthing-wall-art",
    img: "laser-cut-penny-farthing-metal-wall-art.webp",
    images: ["laser-cut-penny-farthing-metal-wall-art.webp"],
    title: "Laser Cut Penny Farthing Wall Art",
    category: "Arte",
    tags: ["Wall Art", "Laser Cut", "Vintage Bicycle", "Metal Decor"],
    description: "Charming laser-cut metal wall art depicting a vintage penny-farthing bicycle. A perfect conversation piece that adds a touch of retro whimsy to cafes, studies, or living areas.",
    extendedContent: {
      subtitle: "Vintage Whimsy Meets High-Precision Laser Cut Metal Art",
      intro: "Add a touch of historic charm and conversational whimsy to your space with the Laser Cut Penny Farthing Wall Art. Custom-cut in our Miami workshop, this delightful piece merges the nostalgia of the 19th-century high-wheel bicycle with modern, precision CNC laser cutting technology. It is an ideal accent for eclectic cafes, personal studies, and retro-inspired lofts.",
      sections: [
        {
          heading: "CNC Precision Silhouette",
          text: "Utilizing advanced laser technology, the intricate details of the bicycle's oversized spokes, vintage frame, and saddle are cut from a solid sheet of heavy-gauge steel. This ensures perfectly crisp, burr-free edges that elevate the piece from simple decor to high-quality metal art."
        },
        {
          heading: "Playful Shadow Projection",
          text: "Mounted with slight stand-offs, the artwork floats gently away from the wall. This intentional spacing allows natural and ambient light to cast playful, dynamic shadows of the bicycle’s wheels directly onto the wall, adding a striking sense of depth to the room."
        },
        {
          heading: "Industrial & Antique Finishes",
          text: "To complement the vintage theme, the metal is finished with specialized treatments. Choose from a raw industrial burnish, a rusted faux-patina, or a sleek matte black powder coat. All finishes are sealed with a protective clear coat to prevent deterioration."
        },
        {
          heading: "Effortless Wall Installation",
          text: "Designed to be lightweight yet rigid, the artwork includes integrated, concealed hanging brackets. It can be easily and securely mounted on drywall, exposed brick, or wood paneling without exposing unsightly screws."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Heavy-Gauge Sheet Metal / Steel" },
        { label: "Fabrication Method", value: "High-Precision CNC Laser Cutting" },
        { label: "Surface Finish", value: "Matte Black, Rusted Patina, or Burnished Steel" },
        { label: "Design Motif", value: "Vintage 19th Century Penny Farthing Bicycle" },
        { label: "Manufacturing Location", value: "Custom Cut in Miami, Florida" },
        { label: "Mounting System", value: "Concealed Stand-Off Wall Brackets Included" },
        { label: "Ideal Settings", value: "Cafes, Retro Lofts, Home Studies, Eclectic Living Rooms" }
      ]
    }
  },
  {
    id: 42,
    slug: "ornate-black-metal-loft-railing",
    img: "ornate-black-metal-loft-railing.webp",
    images: ["ornate-black-metal-loft-railing.webp", "ornate-black-metal-loft-railing2.webp", "ornate-black-metal-loft-railing3.webp", "ornate-black-metal-loft-railing4.webp"],
    title: "Ornate Black Metal Loft Railing",
    category: "Barandales",
    tags: ["Loft Railing", "Black Metal", "Ornate Castings", "Interior", "Luxury Mezzanine"],
    description: "Luxurious black metal railing designed for interior lofts and mezzanines. Features ornate cast details and a sturdy top rail, blending classic elegance with structural safety.",
    extendedContent: {
      subtitle: "Luxurious Ornate Black Metal Railings for High-End Mezzanines",
      intro: "Define your interior loft or mezzanine with safety and classic grandeur. The Ornate Black Metal Loft Railing by Dario's Custom Iron Art bridges the gap between open-concept modern living and historic architectural elegance. Custom-fabricated in Miami, this heavy-duty interior railing is perfect for luxury multi-level penthouses, double-height libraries, and sweeping gallery overlooks.",
      sections: [
        {
          heading: "Elaborate Cast Ornamentation",
          text: "The body of the railing features heavy, intricately cast iron knuckles, floral motifs, and alternating twisted balusters. This detailed ornamentation provides an opulent, textured aesthetic that commands attention from the lower floor while gracefully framing the upper loft."
        },
        {
          heading: "Uncompromising Structural Safety",
          text: "Mezzanine and loft edges require rigorous safety standards to prevent falls. Welded entirely from solid structural steel by AWS-certified welders, this railing system offers extreme lateral load resistance and zero sway, ensuring absolute protection for your family or guests."
        },
        {
          heading: "Luxurious Matte Black Finish",
          text: "Finished in a premium, baked-on matte black powder coat. This sophisticated interior finish resists fingerprints, dust buildup, and accidental scuffs, maintaining a rich, deep charcoal tone that effortlessly complements hardwood flooring and contemporary lighting."
        },
        {
          heading: "Precision Custom Fit",
          text: "Every loft edge is unique. We conduct precise laser templating to custom-fabricate the railing system. It is meticulously fitted to the exact length of your mezzanine edge and seamlessly integrated into the floor joists via concealed, heavy-duty base plates."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Heavy-Gauge Structural Steel & Cast Iron Balusters" },
        { label: "Design Aesthetic", value: "Classic Ornate Motifs in an Open-Loft Setting" },
        { label: "Surface Finish", value: "Premium Interior Baked Matte Black Powder Coat" },
        { label: "Safety Compliance", value: "Exceeds FBC & AWS D1.1 Interior Guardrail Standards" },
        { label: "Manufacturing Location", value: "Custom Built in Miami, Florida Workshop" },
        { label: "Mounting System", value: "Concealed Heavy-Duty Core or Flange Mounts" },
        { label: "Ideal Applications", value: "Penthouses, Mezzanines, Multi-Level Libraries" }
      ]
    }
  },
  {
    id: 43,
    slug: "outdoor-black-metal-spiral-staircase",
    img: "outdoor-black-metal-spiral-staircase.webp",
    images: ["outdoor-black-metal-spiral-staircase.webp", "outdoor-black-metal-spiral-staircase2.webp"],
    title: "Outdoor Black Metal Spiral Staircase",
    category: "Barandales",
    tags: ["Spiral Staircase", "Black Metal", "Outdoor", "Space Saving", "Durable Finish"],
    description: "Heavy-duty outdoor spiral staircase crafted from black metal. Designed to provide safe, space-saving access to upper decks or balconies, finished with weather-resistant powder coating.",
    extendedContent: {
      subtitle: "Space-Saving Heavy-Duty Metal Spiral Staircases for Coastal Decks",
      intro: "Access your upper terraces and rooftop decks safely without sacrificing valuable ground space. The Outdoor Black Metal Spiral Staircase by Dario's Custom Iron Art is an engineering triumph fabricated in Miami. Designed specifically for aggressive South Florida weather, this rugged, highly functional staircase combines industrial strength with a sleek, compact footprint.",
      sections: [
        {
          heading: "Space-Optimized Vertical Access",
          text: "A spiral staircase is the ultimate architectural solution for constrained spaces. By revolving around a single structural center column, it provides comfortable, safe access to second-story balconies or rooftop decks while occupying a fraction of the footprint required by a traditional straight stair run."
        },
        {
          heading: "Marine-Grade Weather Protection",
          text: "Outdoor metal structures in Miami must endure intense sun, humidity, and salt spray. The entire staircase—including the center column, treads, and handrails—is treated with a heavy-duty zinc-rich primer and a high-temperature electrostatic powder coat, rendering it highly resistant to rust and oxidation."
        },
        {
          heading: "Diamond-Plate Anti-Slip Treads",
          text: "Safety in wet tropical weather is paramount. The stair treads are fabricated from heavy-gauge diamond-plate steel or perforated grates. This provides maximum grip underfoot during heavy rain while allowing water to drain instantly, preventing dangerous puddles."
        },
        {
          heading: "Monolithic Structural Welding",
          text: "There are no flimsy bolt-together kits here. Our spiral staircases are fully welded monoliths built to strict AWS D1.1 structural standards. Once anchored to a solid concrete footer and bolted to the upper landing, the staircase delivers rock-solid, vibration-free stability."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Heavy-Duty Structural Steel & Diamond Plate Treads" },
        { label: "Surface Finish", value: "Zinc-Primer & Exterior UV-Stable Powder Coat" },
        { label: "Structural Layout", value: "Space-Saving Central Column Spiral" },
        { label: "Tread Safety", value: "Anti-Slip Diamond Plate with Drainage Profiles" },
        { label: "Manufacturing Location", value: "Custom Fabricated & Welded in Miami, Florida" },
        { label: "Installation", value: "Heavy-Duty Concrete Footer Anchoring" },
        { label: "Ideal Uses", value: "Rooftop Access, Balcony Connections, Compact Patios" }
      ]
    }
  },
  {
    id: 44,
    slug: "modern-abstract-aluminum-double-doors",
    img: "modern-abstract-aluminum-double-doors.webp",
    images: ["modern-abstract-aluminum-double-doors.webp", "modern-abstract-aluminum-double-doors2.webp", "modern-abstract-aluminum-double-doors3.webp"],
    title: "Modern Abstract Aluminum Double Doors",
    category: "Puertas",
    tags: ["Aluminum", "Double Doors", "Abstract Design", "Modern", "Entrance"],
    description: "Stunning modern double doors crafted from premium aluminum, featuring an abstract geometric design. This entryway masterpiece combines robust security with a highly contemporary aesthetic.",
    extendedContent: {
      subtitle: "Striking Abstract Aluminum Double Doors for Contemporary Miami Estates",
      intro: "The ultimate fusion of modern art and monumental security. The Modern Abstract Aluminum Double Doors, crafted exclusively by Dario's Custom Iron Art in Miami, are designed to make an unforgettable first impression. Replacing traditional symmetry with a bold, free-flowing abstract matrix of premium aluminum and impact glass, these doors redefine the luxury contemporary entryway.",
      sections: [
        {
          heading: "Avant-Garde Abstract Matrix",
          text: "Breaking away from standard grid designs, the solid aluminum framing is welded into a stunning abstract web. The chaotic yet balanced intersection of metal lines creates a dramatic visual display, playing with natural light to cast dynamic, ever-changing shadows across your foyer throughout the day."
        },
        {
          heading: "Zero-Rust Aluminum Construction",
          text: "Built exclusively for high-end coastal properties in South Florida, the structural frame is fabricated from heavy-duty architectural aluminum. This ensures the monumental doors remain lightweight for effortless daily operation while being 100% immune to rust, corrosion, and swelling."
        },
        {
          heading: "Hurricane-Rated Impact Glass",
          text: "Security and weather resilience are paramount. The abstract metal matrix houses premium, laminated impact glass panels certified under the strict Florida Building Code. This provides absolute protection against 175 mph hurricane winds and unparalleled defense against forced entry."
        },
        {
          heading: "Custom Finish & Heavy Hardware",
          text: "Coated with a highly resilient baked electrostatic powder finish to withstand intense UV exposure without fading. The doors are pre-engineered to accept massive contemporary pull handles, heavy-duty concealed pivot hinges, and state-of-the-art multipoint locking systems."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "High-Strength Architectural Aluminum Extrusions" },
        { label: "Design Profile", value: "Avant-Garde Abstract Metal Matrix" },
        { label: "Glazing", value: "FBC-Certified Hurricane Impact Laminated Glass" },
        { label: "Corrosion Resistance", value: "100% Rust-Proof (Ideal for Coastal & Waterfront Homes)" },
        { label: "Manufacturing Location", value: "Custom Built in Miami, Florida Workshop" },
        { label: "Hardware Options", value: "Concealed Pivots & Multipoint Smart Locks Compatible" },
        { label: "Surface Finish", value: "Premium Baked Powder Coat (UV and Salt Resistant)" }
      ]
    }
  },
  {
    id: 45,
    slug: "wrought-iron-gazebo-dome",
    img: "wrought-iron-gazebo-dome.webp",
    images: ["wrought-iron-gazebo-dome.webp", "wrought-iron-gazebo-dome2.webp", "wrought-iron-gazebo-dome3.webp", "wrought-iron-gazebo-dome4.webp"],
    title: "Wrought Iron Gazebo Dome",
    category: "Miscelaneas",
    tags: ["Wrought Iron", "Gazebo", "Dome", "Outdoor Structure", "Classic Design"],
    description: "Magnificent hand-forged wrought iron gazebo dome. Designed to be the ultimate focal point for luxury gardens and estates, featuring intricate classic detailing and a durable weather-resistant finish.",
    extendedContent: {
      subtitle: "Monumental Wrought Iron Gazebo Domes for Luxury Estate Gardens",
      intro: "Transform your landscape architecture with a breathtaking centerpiece. The Wrought Iron Gazebo Dome by Dario's Custom Iron Art is a monumental outdoor structure hand-forged in Miami. Evoking the romantic garden pavilions of historic European palaces, this massive iron canopy provides a luxurious, shaded retreat for weddings, estate gardens, and high-end outdoor entertaining.",
      sections: [
        {
          heading: "Massive Hand-Forged Canopy",
          text: "The soaring arched dome is meticulously engineered and hand-shaped from heavy-gauge solid iron bars. The majestic sweeping roofline draws the eye upward, creating a grand, open-air cathedral effect that serves as the ultimate focal point for any sprawling estate landscape."
        },
        {
          heading: "Intricate Floral & Scroll Accents",
          text: "Master blacksmith Dario embellishes the structural pillars and the dome’s crown with elaborate, hand-hammered scrollwork, vines, and floral rosettes. These classic artistic details soften the massive iron structure, allowing climbing ivy or blooming jasmine to naturally intertwine with the metal."
        },
        {
          heading: "Extreme Weather Defenses",
          text: "Designed to stand permanently in the aggressive Florida climate, the entire massive assembly undergoes industrial abrasive blasting, is sealed with a rust-inhibiting zinc-rich epoxy primer, and finished with a baked exterior powder coat to endure torrential rains and high humidity."
        },
        {
          heading: "Heavy-Duty Concrete Anchoring",
          text: "Because of its monumental weight and the severe wind loads typical in Miami, the gazebo's heavy iron pillars are engineered to be bolted directly into reinforced concrete footings. This guarantees rock-solid stability and safety during severe tropical weather events."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Heavy-Gauge Solid Wrought Iron & Structural Steel" },
        { label: "Design Architecture", value: "Classic European Arched Dome & Pillar Pavilion" },
        { label: "Artistic Embellishments", value: "Hand-Forged Scrolls, Vines, and Floral Accents" },
        { label: "Surface Finish", value: "Zinc-Primer & High-Durability Exterior Powder Coat" },
        { label: "Manufacturing Location", value: "Handcrafted in Miami, Florida Workshop" },
        { label: "Installation Method", value: "Heavy-Duty Flange Anchoring into Concrete Footers" },
        { label: "Ideal Environments", value: "Estate Gardens, Wedding Venues, Luxury Hotel Courtyards" }
      ]
    }
  },
  {
    id: 46,
    slug: "custom-stainless-steel-outdoor-bbq-hood",
    img: "custom-stainless-steel-outdoor-bbq-hood.webp",
    images: ["custom-stainless-steel-outdoor-bbq-hood.webp", "custom-stainless-steel-outdoor-bbq-hood2.webp", "custom-stainless-steel-outdoor-bbq-hood3.webp", "custom-stainless-steel-outdoor-bbq-hood4.webp"],
    title: "Custom Stainless Steel Outdoor BBQ Hood",
    category: "Miscelaneas",
    tags: ["Stainless Steel", "BBQ Hood", "Outdoor Kitchen", "Miami FL", "Custom Metal Fabrication"],
    description: "Bespoke stainless steel outdoor BBQ exhaust hood, engineered for coastal Miami kitchens. Maximum corrosion resistance against salt air and heavy-duty smoke extraction.",
    extendedContent: {
      subtitle: "Heavy-Duty Marine-Grade Stainless Steel BBQ Hoods for Coastal Kitchens",
      intro: "No luxury outdoor kitchen in South Florida is complete without proper ventilation. The Custom Stainless Steel Outdoor BBQ Hood by Dario's Custom Iron Art delivers professional-grade smoke extraction wrapped in stunning, modern aesthetics. Fabricated strictly to measure in Miami, this heavy-duty hood provides absolute immunity to coastal salt corrosion and intense grill heat.",
      sections: [
        {
          heading: "Marine-Grade 316L Stainless Steel",
          text: "Standard appliance steel rusts rapidly outdoors in Miami. We fabricate our custom hoods using heavy-gauge marine-grade 316L stainless steel. This alloy provides superior resistance to chlorides, salt spray, and extreme humidity, ensuring your outdoor hood remains brilliant and rust-free for life."
        },
        {
          heading: "Commercial Smoke Extraction Volume",
          text: "The hood is geometrically engineered with a deep capture area to corral massive plumes of thick smoke and grease generated by high-BTU outdoor gas grills and kamado smokers, funneling it efficiently into your high-CFM exhaust fan systems."
        },
        {
          heading: "Seamless Welds & #4 Brushed Finish",
          text: "There are no cheap rivets or overlapped joints. Every edge is meticulously TIG welded, ground smooth, and polished to a flawless #4 directional brushed finish. This creates a sanitary, continuous surface that is incredibly easy to clean and visually stunning."
        },
        {
          heading: "Custom Sizing & Baffle Integration",
          text: "Because custom outdoor kitchens feature unique grill sizes, we build every hood to the exact width and depth required. We also integrate custom stainless steel mounting lips for your specific baffle filters, lighting arrays, and heavy-duty exhaust blowers."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Premium Marine-Grade 316L Stainless Steel" },
        { label: "Corrosion Resistance", value: "100% Rust-Proof (Built for Oceanfront Environments)" },
        { label: "Fabrication Method", value: "Seamless TIG Welding & Smooth Polishing" },
        { label: "Surface Finish", value: "Professional #4 Brushed Directional Grain" },
        { label: "Manufacturing Location", value: "Custom Built in Miami, Florida Workshop" },
        { label: "Hardware Integration", value: "Custom Lip Flanges for Filters and Exhaust Blowers" },
        { label: "Maintenance", value: "Wipe down with standard stainless steel polish" }
      ]
    }
  },
  {
    id: 47,
    slug: "custom-wrought-aluminum-waterfront-gate",
    img: "custom-wrought-aluminum-waterfront-gate.webp",
    images: ["custom-wrought-aluminum-waterfront-gate.webp", "custom-wrought-aluminum-waterfront-gate2.webp"],
    title: "Custom Wrought Aluminum Waterfront Gate",
    category: "Portones",
    tags: ["Aluminum Gate", "Waterfront Property", "Rust Proof", "Miami FL", "High Security"],
    description: "Premium wrought aluminum waterfront security gate. Specially powder-coated for South Florida properties to prevent rust while maintaining a luxurious aesthetic.",
    extendedContent: {
      subtitle: "Zero-Maintenance Wrought Aluminum Gates for Oceanfront Properties",
      intro: "Defend your waterfront perimeter with uncompromising style and absolute weather immunity. The Custom Wrought Aluminum Waterfront Gate by Dario's Custom Iron Art is explicitly designed for the extreme marine environments of Key Biscayne, Star Island, and Miami Beach. It delivers the heavy, majestic aesthetic of antique iron without a single ounce of rust.",
      sections: [
        {
          heading: "Faux-Iron Aluminum Mastery",
          text: "Through advanced fabrication techniques and the use of heavy-wall aluminum extrusions, our artisans replicate the dense, commanding look of traditional forged iron. Intricate cast aluminum finials and scrolls complete the illusion, providing high-end estate security with a fraction of the weight."
        },
        {
          heading: "100% Coastal Rust Immunity",
          text: "Constant exposure to sea salt spray will destroy steel gates within a few years. By utilizing high-strength marine-grade aluminum, this gate is chemically immune to oxidation and red rust, providing a lifetime of flawless service directly on the oceanfront."
        },
        {
          heading: "High-Velocity Wind Load Engineering",
          text: "Waterfront properties face the highest wind pressures during hurricane season. The gate's internal chassis is heavily reinforced to satisfy strict Florida Building Code (FBC) wind load certifications, ensuring it will not buckle or warp under extreme tropical storm conditions."
        },
        {
          heading: "Effortless Automation",
          text: "The massive weight reduction provided by aluminum drastically increases the lifespan of electric gate operators and hinges. The gate is pre-configured with reinforced mounting plates for seamless integration with high-speed swing arms or sliding motors and smart access keypads."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Marine-Grade Heavy-Wall Architectural Aluminum" },
        { label: "Design Aesthetic", value: "Historic Wrought Iron Replication" },
        { label: "Corrosion Resistance", value: "100% Rust-Proof (Designed for Oceanfront Estates)" },
        { label: "Wind Load Certification", value: "Engineered to FBC Hurricane Resistance Standards" },
        { label: "Manufacturing Location", value: "Custom Fabricated in Miami, Florida Workshop" },
        { label: "Automation Compatibility", value: "Ready for Heavy-Duty Swing or Slide Electric Operators" },
        { label: "Surface Finish", value: "Premium Baked Powder Coat (UV & Salt Defiant)" }
      ]
    }
  },
  {
    id: 48,
    slug: "custom-wrought-iron-chandelier",
    img: "custom-wrought-iron-chandelier.webp",
    images: ["custom-wrought-iron-chandelier.webp"],
    title: "Custom Wrought Iron Chandelier",
    category: "Iluminación",
    tags: ["Wrought Iron", "Chandelier", "Luxury Lighting", "Hand Forged", "Coral Gables"],
    description: "Hand-forged custom wrought iron chandelier designed for luxury high-ceiling homes in Coral Gables and Pinecrest. A true piece of bespoke metal art.",
    extendedContent: {
      subtitle: "Bespoke Hand-Forged Iron Chandeliers for Luxury Vaulted Ceilings",
      intro: "Crown your grandest interior spaces with authentic blacksmithing artistry. The Custom Wrought Iron Chandelier by Dario's Custom Iron Art is a monumental lighting fixture designed specifically for the soaring ceilings of luxury Mediterranean estates in Coral Gables and Pinecrest. This heavy, hand-hammered luminaire radiates historical prestige and romantic warmth.",
      sections: [
        {
          heading: "Master Forged Detailing",
          text: "Every sweeping arm, twisted column, and acanthus leaf is heated in a forge and shaped by hand over an anvil. This intensive traditional process ensures that your chandelier possesses the organic, imperfect beauty and massive weight that machine-made fixtures simply cannot replicate."
        },
        {
          heading: "Monumental Volumetric Scale",
          text: "Double-height foyers and vaulted great rooms require lighting of immense scale. Built completely to measure, we customize the diameter, tier count, and drop length of the chandelier to perfectly balance and fill the massive airspace of your specific architectural design."
        },
        {
          heading: "Safe Heavy-Duty Rigging",
          text: "Suspending hundreds of pounds of solid iron requires precision engineering. We calculate total deadweight loads and provide custom-forged ceiling canopies, aircraft-grade safety cables, and heavy-welded chain links to guarantee absolute structural safety and code compliance."
        },
        {
          heading: "Custom Patinas & Wiring",
          text: "Finished in exquisite hand-rubbed patinas—ranging from aged bronze to distressed black with gold leaf highlights. The hollowed iron channels conceal modern UL-compatible electrical wiring, allowing the classic candle sleeves to be powered by advanced, dimmable smart-home LED systems."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Solid Hand-Forged Wrought Iron" },
        { label: "Design Scale", value: "Monumental (Customizable Diameter & Tier Count)" },
        { label: "Safety & Rigging", value: "Heavy-Welded Chain & Verified Load-Bearing Canopy" },
        { label: "Surface Finish", value: "Custom Artisanal Patinas and Baked Enamels" },
        { label: "Manufacturing Location", value: "Handcrafted in Miami, Florida Workshop" },
        { label: "Electrical Integration", value: "Concealed Wiring Compatible with Smart Dimmers" },
        { label: "Ideal Environments", value: "Double-Height Foyers, Great Rooms, Vaulted Dining Halls" }
      ]
    }
  },
  {
    id: 49,
    slug: "custom-wrought-iron-double-entry-doors",
    img: "custom-wrought-iron-double-entry-doors.webp",
    images: ["custom-wrought-iron-double-entry-doors.webp"],
    title: "Custom Wrought Iron Double Entry Doors",
    category: "Puertas",
    tags: ["Iron Doors", "Double Entry", "Estate Security", "Custom Ironwork", "Miami-Dade"],
    description: "Monumental custom wrought iron double entry doors, crafted to elevate the curb appeal and security of exclusive estates across Miami-Dade.",
    extendedContent: {
      subtitle: "Imposing Custom Iron Double Entry Doors for High-Security Estates",
      intro: "Establish unparalleled security and historic majesty at the threshold of your home. The Custom Wrought Iron Double Entry Doors are the crown jewel of Dario's Custom Iron Art. Hand-forged in our Miami workshop, this massive double doorway merges classic European palatial design with the uncompromising structural defenses required by luxury South Florida estates.",
      sections: [
        {
          heading: "Heavy Iron Forging & Scrollwork",
          text: "The structural chassis and intricate overlays are forged from heavy-gauge solid iron. Master blacksmith Dario hand-hammers the decorative scrollwork, ensuring the aesthetic matches the imposing, impenetrable physical weight of the doors, projecting ultimate security and prestige."
        },
        {
          heading: "FBC-Certified Hurricane Protection",
          text: "These monumental doors are explicitly engineered to combat Miami's hurricane season. The thick iron frames firmly grip heavy-duty laminated impact glass, fully satisfying the strict Florida Building Code for resistance against 175 mph windborne debris and high-velocity storms."
        },
        {
          heading: "Multi-Stage Coastal Protective Coating",
          text: "To conquer intense tropical humidity, the raw iron undergoes an intensive abrasive blasting and chemical priming process. It is then sealed with a baked-on electrostatic powder coat, rendering the deep, rich finish highly resistant to rust, peeling, and sun fading."
        },
        {
          heading: "Heavy-Duty Security Hardware",
          text: "Despite their massive weight, the doors swing effortlessly on custom-machined heavy-duty barrel hinges equipped with ball bearings. The frame is pre-configured to accept commercial-grade multi-point locking systems and modern smart-home deadbolts for absolute peace of mind."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Heavy-Gauge Solid Wrought Iron & Structural Steel" },
        { label: "Glazing", value: "Florida Building Code Certified Impact Laminated Glass" },
        { label: "Weather Defense", value: "Multi-Stage Anti-Corrosion Primer & Baked Powder Coat" },
        { label: "Wind Load Rating", value: "Engineered to Withstand Category 5 Hurricane Pressures" },
        { label: "Manufacturing Location", value: "Custom Built in Miami, Florida Workshop" },
        { label: "Hardware Options", value: "Compatible with Multi-Point Locks and Ball-Bearing Hinges" },
        { label: "Ideal Uses", value: "Luxury Estate Main Entrances, High-Security Residential Fronts" }
      ]
    }
  },
  {
    id: 50,
    slug: "decorative-scrollwork-iron-entry-gate",
    img: "decorative-scrollwork-iron-entry-gate.webp",
    images: ["decorative-scrollwork-iron-entry-gate.webp", "decorative-scrollwork-iron-entry-gate2.webp", "decorative-scrollwork-iron-entry-gate3.webp"],
    title: "Decorative Scrollwork Iron Entry Gate",
    category: "Portones",
    tags: ["Iron Gate", "Scrollwork", "Automated Gate", "Driveway Security", "Custom Design"],
    description: "Driveway entry gate featuring elaborate decorative scrollwork. Custom metal design combining classic elegance with heavy-duty automated security for Florida homes.",
    extendedContent: {
      subtitle: "Majestic Iron Entry Gates Featuring Elaborate Master Scrollwork",
      intro: "Set the tone for your sprawling estate with a barricade of breathtaking artistry. The Decorative Scrollwork Iron Entry Gate by Dario's Custom Iron Art is an impenetrable, heavy-duty vehicular gate hand-forged in Miami. It combines the romantic elegance of intricate European scrollwork with the heavy industrial strength required to secure South Florida's most exclusive properties.",
      sections: [
        {
          heading: "Master Hand-Hammered Scrolls",
          text: "The body of the gate is a showcase of traditional blacksmithing. Solid iron bars are heated and hand-bent over the anvil to create sweeping, organic scrolls, rosettes, and imposing spear-tipped finials. This bespoke detailing guarantees that your driveway entrance is a unique, irreplaceable piece of architectural art."
        },
        {
          heading: "Uncompromising Estate Security",
          text: "Beneath the beautiful scrollwork lies a massive, thick-walled steel tubular frame. This rigid chassis prevents sagging, withstands high-velocity vehicle impacts, and provides a daunting physical perimeter defense to protect your family and property."
        },
        {
          heading: "Electrostatic Powder Coating",
          text: "To combat Miami's harsh coastal environment, the entire iron assembly is sandblasted to bare metal, coated with a rust-inhibiting zinc primer, and finished with a high-temperature baked powder coat. This ensures the intricate scrolls remain free of rust and the color stays vibrant for decades."
        },
        {
          heading: "Automated Access Integration",
          text: "Engineered specifically for modern convenience, the gate's structural geometry includes heavy-duty internal mounting plates. It is ready for flawless integration with high-torque electric swing or sliding gate operators, magnetic locks, and camera-equipped smart intercom systems."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Heavy-Gauge Solid Wrought Iron & Structural Steel Tubing" },
        { label: "Artistic Features", value: "Hand-Forged Scrolls, Custom Rosettes, and Spear Finials" },
        { label: "Surface Finish", value: "Anti-Corrosion Primer & Baked Electrostatic Powder Coat" },
        { label: "Wind Load Rating", value: "Engineered to FBC Hurricane Resistance Standards" },
        { label: "Manufacturing Location", value: "Custom Forged in Miami, Florida Workshop" },
        { label: "Automation Ready", value: "Pre-Configured for Heavy-Duty Electric Operators & Smart Access" },
        { label: "Security Level", value: "Maximum Perimeter Defense for Luxury Estates" }
      ]
    }
  },
  {
    id: 51,
    slug: "faux-wood-aluminum-sliding-driveway-gate",
    img: "faux-wood-aluminum-sliding-driveway-gate.webp",
    images: ["faux-wood-aluminum-sliding-driveway-gate.webp", "faux-wood-aluminum-sliding-driveway-gate2.webp"],
    title: "Faux Wood Aluminum Sliding Driveway Gate",
    category: "Portones",
    tags: ["Aluminum Gate", "Sliding Gate", "Faux Wood", "Privacy Fence", "Miami Climate"],
    description: "Modern sliding driveway gate made of lightweight aluminum with a highly durable faux wood finish. The perfect zero-maintenance privacy solution for Miami's humid climate.",
    extendedContent: {
      subtitle: "Zero-Maintenance Faux Wood Aluminum Sliding Gates",
      intro: "Enjoy the warmth of a wooden privacy gate without the relentless upkeep. The Faux Wood Aluminum Sliding Driveway Gate by Dario's Custom Iron Art is a marvel of modern materials. Fabricated in Miami, this heavy-duty sliding gate utilizes advanced sublimation technology to provide the hyper-realistic look of premium timber on a lightweight, indestructible, rust-proof aluminum chassis.",
      sections: [
        {
          heading: "Hyper-Realistic Wood Sublimation",
          text: "The aluminum privacy slats undergo a high-tech sublimation process where rich, realistic wood grain patterns are permanently baked into the powder-coated metal. The result is an entrance that exudes the organic luxury of natural wood but will never warp, splinter, or rot."
        },
        {
          heading: "Marine-Grade Aluminum Chassis",
          text: "Built on a heavy-wall marine-grade aluminum frame, the structure is completely immune to rust and the corrosive effects of Miami's coastal salt air. Its lightweight nature drastically reduces wear and tear on electric gate motors while maintaining exceptional physical security."
        },
        {
          heading: "Total Perimeter Privacy",
          text: "The tightly spaced horizontal or vertical slat design completely blocks visibility from the street into your property. This creates a secure, private sanctuary for your family without sacrificing contemporary architectural aesthetics."
        },
        {
          heading: "Smooth Sliding Automation",
          text: "Engineered with precision V-groove wheels and a rigid track system, the gate slides silently and effortlessly. It is pre-reinforced for immediate integration with high-speed sliding gate operators, safety photo-eyes, and smart-home entry keypads."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Marine-Grade Structural Aluminum Extrusions" },
        { label: "Surface Finish", value: "Baked Faux-Wood Grain Sublimation (UV Resistant)" },
        { label: "Corrosion Rating", value: "100% Immunity to Rust, Rot, and Termites" },
        { label: "Privacy Level", value: "Maximum (Zero Visibility from Street Level)" },
        { label: "Manufacturing Location", value: "Custom Built in Miami, Florida Workshop" },
        { label: "Automation Compatibility", value: "Ready for High-Torque Electric Sliding Motors" },
        { label: "Maintenance", value: "Zero Upkeep (Periodic rinsing with water)" }
      ]
    }
  },
  {
    id: 52,
    slug: "geometric-frosted-glass-double-doors",
    img: "geometric-frosted-glass-double-doors.webp",
    images: ["geometric-frosted-glass-double-doors.webp"],
    title: "Geometric Frosted Glass Double Doors",
    category: "Puertas",
    tags: ["Metal & Glass", "Frosted Glass", "Double Doors", "Modern Architecture", "Privacy"],
    description: "Contemporary double entry doors integrating a sleek metal geometric frame with frosted glass. Offers privacy and abundant natural light for modern South Florida architecture.",
    extendedContent: {
      subtitle: "Contemporary Geometric Metal & Frosted Glass Double Entrances",
      intro: "Maximize natural light and interior privacy simultaneously. The Geometric Frosted Glass Double Doors by Dario's Custom Iron Art bring bright, modern sophistication to your home's entrance. Custom-crafted in Miami, these doors fuse a sleek, minimalist metal geometric framework with high-security frosted impact glass, perfectly tailored for contemporary South Florida architecture.",
      sections: [
        {
          heading: "Sleek Geometric Profiling",
          text: "The door's architecture relies on ultra-slim, precision-welded metal mullions arranged in a crisp geometric grid or abstract pattern. This provides a sharp, clean-lined industrial edge that beautifully contrasts with the soft, glowing translucence of the frosted glass."
        },
        {
          heading: "Frosted Impact-Rated Glass",
          text: "To ensure absolute privacy in your foyer without utilizing dark solid panels, the doors are fitted with heavily frosted, laminated security glass. This specialized glazing diffuses brilliant natural sunlight inward while obscuring all details from the outside, while fully complying with Florida's strict hurricane impact codes."
        },
        {
          heading: "Weather-Sealed Engineering",
          text: "Designed to combat aggressive tropical weather, the frame incorporates deep channels and high-grade thermal weather stripping. This creates an airtight and watertight seal that drastically improves interior cooling efficiency and prevents water intrusion during heavy driving rain."
        },
        {
          heading: "Matte Powder Coat & Modern Hardware",
          text: "The metal grid is sealed in a baked matte powder coat—often in stark black or crisp white—to resist UV fading and coastal scratching. Pre-engineered heavy-duty mounting points easily accommodate massive modern pull bars and concealed multi-point locking systems."
        }
      ],
      specificationsTable: [
        { label: "Primary Frame", value: "Precision-Welded High-Strength Architectural Metal" },
        { label: "Glazing", value: "FBC Compliant Frosted Laminated Impact Glass" },
        { label: "Design Style", value: "Modern Geometric Grid with High Privacy" },
        { label: "Weather Resistance", value: "Fully Weather-Stripped for Airtight Climate Control" },
        { label: "Manufacturing Location", value: "Custom Fabricated in Miami, Florida Workshop" },
        { label: "Surface Finish", value: "Baked Electrostatic Powder Coat (Scratch & Fade Defiant)" },
        { label: "Hardware", value: "Pre-Configured for Oversized Pull Bars & Smart Deadbolts" }
      ]
    }
  },
  {
    id: 53,
    slug: "industrial-wire-mesh-stair-railing",
    img: "industrial-wire-mesh-stair-railing.webp",
    images: ["industrial-wire-mesh-stair-railing.webp", "industrial-wire-mesh-stair-railing2.webp", "industrial-wire-mesh-stair-railing3.webp", "industrial-wire-mesh-stair-railing4.webp"],
    title: "Industrial Wire Mesh Stair Railing",
    category: "Barandales",
    tags: ["Wire Mesh", "Stair Railing", "Industrial Style", "Custom Welded", "Loft Design"],
    description: "Industrial style stair railing featuring welded wire mesh panels and a heavy-duty steel frame. Custom fabricated for lofts, commercial spaces, and modern industrial homes.",
    extendedContent: {
      subtitle: "Rugged Industrial Wire Mesh Railings for Urban Lofts & Offices",
      intro: "Bring the authentic raw energy of industrial design directly into your space. The Industrial Wire Mesh Stair Railing is custom-welded by Dario's Custom Iron Art in Miami. Built for modern urban lofts, craft breweries, and trendy tech office spaces, this heavy-duty steel and wire mesh system offers uncompromising structural safety wrapped in an edgy, minimalist aesthetic.",
      sections: [
        {
          heading: "Welded Wire Mesh Panels",
          text: "Moving away from traditional glass or vertical pickets, the infill of this railing utilizes heavy-gauge, tightly woven steel wire mesh. This provides an unobstructed line of sight and excellent light flow while delivering an incredibly durable, warehouse-inspired visual texture."
        },
        {
          heading: "Heavy-Duty Structural Steel Framing",
          text: "The mesh panels are securely framed within thick, structural steel angle iron and square tubing. Welded together by AWS-certified professionals, the framework provides extreme rigidity, zero flex, and heavy industrial strength that complies strictly with commercial building codes."
        },
        {
          heading: "Raw & Refined Finishes",
          text: "Depending on your aesthetic, the metal can be finished in a sophisticated baked matte black powder coat for a refined modern look, or sealed with a clear-coat over raw, burnished steel to highlight the authentic heat marks and weld beads of the manufacturing process."
        },
        {
          heading: "Versatile Stairway Integration",
          text: "Custom-templated on site, the wire mesh panels are precision-angled to perfectly match the pitch of your staircase or the flat edges of a mezzanine, ensuring a seamless, gap-free installation on both wood and concrete surfaces."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Heavy-Gauge Woven Steel Mesh & Structural Tubing" },
        { label: "Welding Standard", value: "Executed to AWS D1.1 Commercial Safety Codes" },
        { label: "Surface Finish", value: "Matte Black Powder Coat or Clear-Sealed Raw Steel" },
        { label: "Design Aesthetic", value: "Authentic Urban Warehouse / Modern Industrial" },
        { label: "Manufacturing Location", value: "Custom Built in Miami, Florida Workshop" },
        { label: "Ideal Environments", value: "Urban Lofts, Breweries, Creative Offices, Modern Mezzanines" },
        { label: "Durability", value: "High Impact Resistance and Zero Frame Flex" }
      ]
    }
  },
  {
    id: 54,
    slug: "modern-abstract-metal-staircase-railing",
    img: "modern-abstract-metal-staircase-railing.webp",
    images: ["modern-abstract-metal-staircase-railing.webp", "modern-abstract-metal-staircase-railing2.webp", "modern-abstract-metal-staircase-railing3.webp", "modern-abstract-metal-staircase-railing4.webp"],
    title: "Modern Abstract Metal Staircase Railing",
    category: "Barandales",
    tags: ["Staircase Railing", "Abstract Design", "Metal Art", "Interior Design", "Handcrafted"],
    description: "Unique staircase railing featuring a modern abstract metal design. Handcrafted by Dario's Custom Iron Art to serve as a stunning architectural focal point in any interior.",
    extendedContent: {
      subtitle: "Fluid Abstract Metal Art Staircase Railings for Avant-Garde Interiors",
      intro: "Turn your staircase into a flowing, organic sculpture. The Modern Abstract Metal Staircase Railing is an exclusive, hand-crafted creation by master artisan Dario in Miami. Designed for luxury contemporary homes and avant-garde commercial galleries, this railing replaces rigid geometric lines with a chaotic yet perfectly balanced matrix of fluid metal art.",
      sections: [
        {
          heading: "Hand-Forged Abstract Matrix",
          text: "Each section of this railing is a unique artistic expression. Solid metal bars are thermally bent, twisted, and welded by hand to create an interlocking abstract web that mimics organic roots or fluid kinetic energy. No two installations are ever identical."
        },
        {
          heading: "Continuous Visual Flow",
          text: "The abstract pattern is meticulously designed to flow continuously upward alongside the pitch of your stairs and smoothly transition around mezzanine corners. This creates a sweeping visual dynamic that draws the eye upward, enhancing the volumetric feel of double-height foyers."
        },
        {
          heading: "Uncompromising Structural Rigidity",
          text: "Despite the chaotic, art-driven design, the internal welding nodes are strategically calculated to provide immense lateral strength. Capped with a solid, heavy-duty handrail, the entire system easily surpasses residential safety codes for fall protection."
        },
        {
          heading: "Bespoke Finishing Options",
          text: "Finished to flawlessly match your interior decor. We offer everything from sleek baked matte black powder coats to hand-brushed metallic silvers, or rich artisanal patinas sealed with a UV-resistant clear coat to guarantee a lifetime of zero-maintenance luxury."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Solid Hand-Bent Steel or Aluminum Bars" },
        { label: "Artistic Style", value: "Flowing Organic & Abstract Kinetic Art" },
        { label: "Structural Integrity", value: "AWS Certified Welding (Exceeds Fall Protection Codes)" },
        { label: "Surface Finish", value: "Premium Powder Coat or Hand-Rubbed Patinas" },
        { label: "Manufacturing Location", value: "Handcrafted to Order in Miami, Florida" },
        { label: "Ideal Applications", value: "Luxury Foyers, Open-Concept Lofts, Art Galleries" },
        { label: "Customization", value: "Pattern Density and Scale Tailored to Space" }
      ]
    }
  },
  {
    id: 55,
    slug: "modern-black-metal-sliding-driveway-gate",
    img: "modern-black-metal-sliding-driveway-gate.webp",
    images: ["modern-black-metal-sliding-driveway-gate.webp", "modern-black-metal-sliding-driveway-gate2.webp", "modern-black-metal-sliding-driveway-gate3.webp"],
    title: "Modern Black Metal Sliding Driveway Gate",
    category: "Portones",
    tags: ["Sliding Gate", "Black Metal", "Driveway Gate", "Privacy Gate", "South Florida"],
    description: "Sleek, modern black metal sliding driveway gate providing maximum security and privacy. Custom-built and powder-coated to withstand extreme weather in South Florida.",
    extendedContent: {
      subtitle: "Sleek Black Metal Sliding Gates for Maximum Privacy & Security",
      intro: "For the modern minimalist estate requiring absolute privacy and an imposing aesthetic. The Modern Black Metal Sliding Driveway Gate by Dario's Custom Iron Art is precision-fabricated in Miami. Offering a bold, monolithic black profile, this heavy-duty sliding gate ensures total perimeter defense while seamlessly complementing contemporary residential architecture.",
      sections: [
        {
          heading: "Minimalist Opaque Architecture",
          text: "Constructed with wide, flat metal panels or tightly packed louvers with zero gaps, this gate acts as a solid black wall. It completely obscures your property from street view, providing maximum privacy for your family and enhancing the imposing, secure feel of your entrance."
        },
        {
          heading: "Heavy-Duty Structural Chassis",
          text: "A sliding gate of this scale requires an ultra-rigid internal backbone to prevent sagging or twisting during operation. Our master welders construct the hidden chassis from thick-walled steel tubing, engineered specifically to resist extreme wind loads and high-frequency opening cycles."
        },
        {
          heading: "Advanced Electrostatic Black Finish",
          text: "To maintain its striking, deep black monolithic look against Miami's harsh coastal environment, the metal is sandblasted, primed, and sealed with a heavy-duty baked electrostatic powder coat. This prevents chalking, UV fading, and rust, keeping the gate looking flawless year-round."
        },
        {
          heading: "Seamless Sliding Automation",
          text: "Equipped with heavy-duty V-groove carriage wheels and designed to run on a perfectly leveled steel floor track. The gate's reinforced mounting plates allow for immediate, vibration-free integration with high-speed commercial sliding motors and smart access systems."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Heavy-Duty Structural Steel & Solid Metal Paneling" },
        { label: "Privacy Level", value: "Absolute (Zero visibility from exterior)" },
        { label: "Surface Finish", value: "Baked Electrostatic Matte Black Powder Coat" },
        { label: "Wind Resistance", value: "Engineered to FBC Hurricane Standards" },
        { label: "Manufacturing Location", value: "Custom Fabricated in Miami, Florida Workshop" },
        { label: "Automation Compatibility", value: "Pre-Engineered for High-Torque Electric Sliding Motors" },
        { label: "Security Level", value: "Maximum Vehicular and Pedestrian Perimeter Defense" }
      ]
    }
  },
  {
    id: 56,
    slug: "modern-black-steel-double-entry-doors",
    img: "modern-black-steel-double-entry-doors.webp",
    images: ["modern-black-steel-double-entry-doors.webp", "modern-black-steel-double-entry-doors2.webp"],
    title: "Modern Black Steel Double Entry Doors",
    category: "Puertas",
    tags: ["Steel Doors", "Double Entry", "Black Steel", "Minimalist", "Luxury Entrance"],
    description: "Ultra-modern black steel double entry doors featuring minimalist lines and robust security. A high-end bespoke metal design for luxury residential entrances.",
    extendedContent: {
      subtitle: "Ultra-Modern Minimalist Black Steel Double Entry Doors",
      intro: "Redefine luxury with sharp, clean lines and massive steel proportions. The Modern Black Steel Double Entry Doors are precision-engineered by Dario's Custom Iron Art in Miami. Tailored for ultra-contemporary estates and high-end commercial entryways, these doors deliver the overwhelming physical security of solid steel wrapped in a sleek, minimalist architectural aesthetic.",
      sections: [
        {
          heading: "Minimalist Steel Framing",
          text: "Stripped of all unnecessary ornamentation, the design focuses entirely on the bold impact of thick, straight steel mullions and massive glass panes. This minimalist approach floods interior foyers with light while projecting a highly sophisticated, industrial-chic exterior presence."
        },
        {
          heading: "FBC Hurricane Impact Defenses",
          text: "Security is non-negotiable in South Florida. The rigid steel frame tightly encapsulates heavy-duty, laminated impact glass. Fully compliant with strict Florida Building Codes, these doors provide an impenetrable barrier against 175 mph hurricane winds and forced entry attempts."
        },
        {
          heading: "Precision Heavy-Duty Hardware",
          text: "Due to the massive weight of solid steel and impact glass, these doors are engineered to operate on heavy-duty, commercial-grade pivot hinges equipped with ball bearings. This ensures the massive doors swing open smoothly, silently, and effortlessly with a single push."
        },
        {
          heading: "Thermal Efficiency & Matte Finish",
          text: "Sealed with professional-grade thermal weather stripping to keep Miami's humidity and heat outside. The entire steel structure is coated in a baked electrostatic matte black powder finish, providing superior scratch resistance and UV protection for a flawless, lifelong aesthetic."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Thick-Walled Architectural Steel Tubing" },
        { label: "Design Aesthetic", value: "Ultra-Modern Minimalist Linear Grid" },
        { label: "Glazing", value: "FBC Certified Laminated Impact Security Glass" },
        { label: "Surface Finish", value: "Baked Electrostatic Matte Black Powder Coat" },
        { label: "Manufacturing Location", value: "Custom Built in Miami, Florida Workshop" },
        { label: "Hardware System", value: "Engineered for Heavy-Duty Ball Bearing Pivot Hinges" },
        { label: "Weather Sealing", value: "High-Efficiency Thermal and Acoustic Stripping" }
      ]
    }
  },
  {
    id: 57,
    slug: "modern-geometric-iron-double-entry-doors",
    img: "modern-geometric-iron-double-entry-doors.webp",
    images: ["modern-geometric-iron-double-entry-doors.webp"],
    title: "Modern Geometric Iron Double Entry Doors",
    category: "Puertas",
    tags: ["Iron Doors", "Geometric Pattern", "Modern Design", "Artistic Forging", "Miami Fabrication"],
    description: "Custom iron double entry doors with a striking modern geometric pattern. Combines artistic forging with heavy-duty structural integrity for Miami properties.",
    extendedContent: {
      subtitle: "Striking Geometric Custom Iron Double Doors",
      intro: "Combining the sheer mass of wrought iron with contemporary angular designs. The Modern Geometric Iron Double Entry Doors by Dario's Custom Iron Art bring a bold, architectural edge to luxury Miami homes. Designed for clients who want the extreme security of traditional iron but demand a crisp, modern aesthetic, this entryway is a masterclass in modern metal forging.",
      sections: [
        {
          heading: "Angular Geometric Forging",
          text: "Replacing classic swooping scrolls with sharp, intersecting angles and asymmetrical polygons. Master artisans hand-weld thick iron bars into a complex geometric web that spans the entire glass surface, creating a dynamic, ultra-modern visual statement from the curb."
        },
        {
          heading: "Unwavering Iron Security",
          text: "Beneath the modern design lies an incredibly heavy, solid wrought iron and steel frame. This provides a level of impact resistance, physical weight, and barrier security that lighter materials simply cannot match, establishing your entryway as a true fortress."
        },
        {
          heading: "Hurricane-Rated Impact Glass",
          text: "The geometric iron grid protects a continuous pane of heavy-duty, laminated impact glass. Engineered and tested to meet strict Florida Building Code standards, the doors provide total defense against high-velocity hurricane winds and extreme weather conditions."
        },
        {
          heading: "Electrostatic Finish & Smart Integration",
          text: "To prevent the iron from rusting in Miami's coastal humidity, the doors are completely sealed with an anti-corrosion primer and a baked electrostatic powder coat. The heavy frame is also pre-machined to easily accept high-tech multipoint locking hardware and smart-home entry systems."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Heavy-Gauge Solid Iron & Structural Steel" },
        { label: "Design Style", value: "Contemporary Asymmetrical Geometric Grid" },
        { label: "Glazing", value: "FBC Hurricane Compliant Laminated Impact Glass" },
        { label: "Surface Protection", value: "Multi-Stage Primer & Baked Powder Coat (Rust Proof)" },
        { label: "Manufacturing Location", value: "Custom Forged in Miami, Florida Workshop" },
        { label: "Hardware Compatibility", value: "Pre-Configured for Multipoint Locks & Heavy Hinges" },
        { label: "Ideal Uses", value: "Modern Luxury Estates, High-Security Residences" }
      ]
    }
  },
  {
    id: 58,
    slug: "modern-horizontal-metal-stair-railing",
    img: "modern-horizontal-metal-stair-railing.webp",
    images: ["modern-horizontal-metal-stair-railing.webp", "modern-horizontal-metal-stair-railing2.webp"],
    title: "Modern Horizontal Metal Stair Railing",
    category: "Barandales",
    tags: ["Metal Railing", "Horizontal Lines", "Modern Aesthetic", "Certified Welding", "Interior Railing"],
    description: "Contemporary stair railing with clean horizontal metal lines. AWS D1.1 certified welding ensures safety while maintaining a sleek, modern aesthetic for interior spaces.",
    extendedContent: {
      subtitle: "Certified Modern Horizontal Slat Stair Railings for Minimalist Interiors",
      intro: "Enhance your open-concept living space with sleek, uninterrupted linear geometry. The Modern Horizontal Metal Stair Railing by Dario's Custom Iron Art is an architectural interior feature tailored for contemporary Miami homes. Providing vital safety without visually closing off the room, this clean-lined design is the perfect complement to modern wood stairs and minimalist decor.",
      sections: [
        {
          heading: "Streamlined Horizontal Flow",
          text: "By utilizing slim, perfectly spaced horizontal metal slats instead of bulky vertical pickets, this railing creates a strong sense of continuous linear flow. This design strategy visually elongates the staircase and maintains an open, airy feel across the entire interior space."
        },
        {
          heading: "AWS Certified Structural Welding",
          text: "Minimalist designs require flawless execution to remain strong. Every joint and intersection is fully welded and ground smooth by AWS-certified professionals, ensuring the railing provides rock-solid lateral stability and zero flex, safely supporting daily use on elevated stairs and lofts."
        },
        {
          heading: "Flawless Powder Coat Finish",
          text: "To ensure a premium tactile feel and extreme scratch resistance, the metal is finished with a baked electrostatic powder coat. Available in deep matte black, crisp white, or custom architectural tones, the finish will not chip or fade like traditional liquid paint."
        },
        {
          heading: "Precision Staircase Templating",
          text: "Because stair inclines vary greatly, we conduct precise on-site digital measurements to ensure the horizontal bars run perfectly parallel to the stair pitch. The system is securely anchored to the floor joists via concealed base plates, maintaining the clean, minimalist illusion."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "High-Strength Structural Steel or Aluminum Tubing" },
        { label: "Design Profile", value: "Sleek Horizontal Slat / Linear Minimalist" },
        { label: "Welding Certification", value: "AWS D1.1 Standards for Extreme Lateral Stability" },
        { label: "Surface Finish", value: "Interior-Grade Baked Powder Coat (Scratch Resistant)" },
        { label: "Manufacturing Location", value: "Custom Built in Miami, Florida Workshop" },
        { label: "Mounting System", value: "Concealed Heavy-Duty Core or Plate Anchors" },
        { label: "Safety Compliance", value: "Engineered to Meet Municipal Stairway Codes" }
      ]
    }
  },
  {
    id: 59,
    slug: "modern-stainless-steel-horizontal-stair-railing",
    img: "modern-stainless-steel-horizontal-stair-railing.webp",
    images: ["modern-stainless-steel-horizontal-stair-railing.webp"],
    title: "Modern Stainless Steel Horizontal Stair Railing",
    category: "Barandales",
    tags: ["Stainless Steel", "316L", "Stair Railing", "Coastal Properties", "Rust Resistant"],
    description: "Premium 316L stainless steel horizontal stair railing. Exceptionally durable and rust-resistant, making it the top choice for modern coastal properties in Miami.",
    extendedContent: {
      subtitle: "316L Marine-Grade Stainless Steel Horizontal Stair Railings",
      intro: "The pinnacle of sleek, modern corrosion resistance for coastal interiors and exterior balconies. The Modern Stainless Steel Horizontal Stair Railing is custom-fabricated by Dario's Custom Iron Art in Miami. Utilizing premium 316L marine-grade stainless steel, this railing offers a hyper-modern, reflective aesthetic completely immune to the corrosive effects of oceanfront salt air.",
      sections: [
        {
          heading: "Marine-Grade 316L Stainless Steel",
          text: "Standard steel and even basic 304 stainless will pit and rust when exposed to Miami's humid, salty environment. We exclusively use premium 316L marine-grade stainless steel for coastal applications, providing an impenetrable defense against oxidation, ensuring the metal retains its brilliant luster for decades."
        },
        {
          heading: "Professional #4 Brushed Polish",
          text: "Every inch of the tubing is subjected to a professional #4 directional brushed polish. This sophisticated finish not only provides a highly luxurious, modern sheen that reflects ambient light beautifully, but it also effectively masks minor scratches and fingerprints from daily use."
        },
        {
          heading: "Seamless TIG Welding",
          text: "There are no cheap modular joints or bulky visible bolts. Our certified welders use advanced TIG (Tungsten Inert Gas) welding to fuse the horizontal bars to the posts. The welds are then ground and polished flawlessly, creating what appears to be a single, continuous, monolithic metal sculpture."
        },
        {
          heading: "Unwavering Safety Compliance",
          text: "Whether installed on an interior floating staircase or an exterior high-rise balcony, the heavy-wall stainless steel tubing provides immense structural rigidity. It is engineered to comfortably exceed local building code requirements for impact and lateral downward pressure."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Premium Marine-Grade 316L Stainless Steel" },
        { label: "Corrosion Resistance", value: "Absolute Immunity to Salt Spray and Coastal Humidity" },
        { label: "Surface Finish", value: "Professional #4 Brushed Directional Polish" },
        { label: "Fabrication Method", value: "Seamless TIG Welding and Smooth Joint Blending" },
        { label: "Manufacturing Location", value: "Custom Built in Miami, Florida Workshop" },
        { label: "Applications", value: "Oceanfront Balconies, Luxury Interior Stairs, Yacht Docks" },
        { label: "Safety Rating", value: "Exceeds FBC Guardrail Load Regulations" }
      ]
    }
  },
  {
    id: 60,
    slug: "modern-wall-mounted-metal-handrail",
    img: "modern-wall-mounted-metal-handrail.webp",
    images: ["modern-wall-mounted-metal-handrail.webp", "modern-wall-mounted-metal-handrail2.webp"],
    title: "Modern Wall-Mounted Metal Handrail",
    category: "Barandales",
    tags: ["Wall Mounted", "Handrail", "Minimalist", "Powder Coated", "Safety"],
    description: "Minimalist wall-mounted metal handrail designed for both safety and style. Custom fabricated and powder-coated for long-lasting durability in residential or commercial settings.",
    extendedContent: {
      subtitle: "Minimalist Wall-Mounted Handrails for Safety & Sleek Design",
      intro: "Provide essential stairway safety without compromising your modern design language. The Modern Wall-Mounted Metal Handrail by Dario's Custom Iron Art is a bespoke safety feature fabricated in Miami. Designed to run flawlessly along enclosed stairwells or long hallway ramps, this sleek handrail delivers a heavy-duty, ergonomic grip wrapped in minimalist elegance.",
      sections: [
        {
          heading: "Low-Profile Minimalist Architecture",
          text: "Using slim, heavy-wall rectangular or circular tubing, the handrail maintains an ultra-low profile against the wall. It provides vital structural support without adding visual clutter to narrow stairwells or enclosed corridors, making it ideal for modern and transitional spaces."
        },
        {
          heading: "Ergonomic & Continuous Grip",
          text: "The rail is meticulously templated to follow the exact incline of your stairs. All joints and corner returns are seamlessly welded and polished smooth, ensuring a continuous, snag-free ergonomic grip from the top landing all the way to the bottom floor."
        },
        {
          heading: "Heavy-Duty Wall Anchoring",
          text: "Safety is paramount for a wall-mounted rail. We fabricate custom, concealed structural stand-off brackets that anchor deeply into wall studs or concrete block. This guarantees rock-solid stability and zero flex, easily supporting the heavy weight of an adult in case of a slip."
        },
        {
          heading: "Tactile Powder Coat Finishes",
          text: "Finished in a premium baked electrostatic powder coat. This not only protects the metal from moisture and rust but provides a luxurious, slightly textured matte finish (popular in black, white, or bronze) that resists fingerprints, ring scratches, and daily wear."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Heavy-Wall Structural Steel or Aluminum Tubing" },
        { label: "Design Style", value: "Sleek, Continuous Minimalist Profile" },
        { label: "Surface Finish", value: "Tactile Baked Powder Coat (Fingerprint Resistant)" },
        { label: "Mounting System", value: "Heavy-Duty Concealed Stud/Concrete Wall Brackets" },
        { label: "Manufacturing Location", value: "Custom Measured & Built in Miami, Florida" },
        { label: "Safety Compliance", value: "Engineered to Meet ADA and Local Stair Safety Codes" },
        { label: "Applications", value: "Enclosed Stairwells, Hallway Ramps, Exterior Steps" }
      ]
    }
  },
  {
    id: 61,
    slug: "ornamental-aluminum-sliding-driveway-gate",
    img: "ornamental-aluminum-sliding-driveway-gate.webp",
    images: ["ornamental-aluminum-sliding-driveway-gate.webp"],
    title: "Ornamental Aluminum Sliding Driveway Gate",
    category: "Portones",
    tags: ["Aluminum Gate", "Sliding Gate", "Ornamental", "Rust Proof", "Florida Homes"],
    description: "Elegant sliding driveway gate crafted from lightweight, rust-proof aluminum with intricate ornamental details. A perfect blend of classic style and modern engineering for Florida homes.",
    extendedContent: {
      subtitle: "Rust-Proof Ornamental Aluminum Sliding Estate Gates",
      intro: "Experience the ornate beauty of a traditional estate gate with the cutting-edge performance of modern materials. The Ornamental Aluminum Sliding Driveway Gate is custom-fabricated by Dario's Custom Iron Art in Miami. Combining classic cast ornamentation with a lightweight, rust-proof aluminum chassis, this sliding gate provides spectacular curb appeal and flawless, lifelong automated operation.",
      sections: [
        {
          heading: "Classic Cast Aluminum Ornamentation",
          text: "To achieve the sophisticated look of historic ironwork, the gate is adorned with intricate cast aluminum finials, rosettes, and scrollwork. The meticulous hand-finishing of these details creates a majestic, regal aesthetic that elevates the perceived value of any luxury property."
        },
        {
          heading: "100% Coastal Weather Immunity",
          text: "Miami's intense humidity and coastal salt spray rapidly destroy traditional steel gates. Constructed entirely from premium marine-grade aluminum, this gate is chemically immune to red rust and corrosion, ensuring it remains structurally sound and visually pristine without the need for constant maintenance."
        },
        {
          heading: "High-Speed Sliding Track Dynamics",
          text: "The inherent lightweight nature of aluminum drastically reduces the stress and friction on the gate's V-groove wheels and floor track. This ensures ultra-smooth, silent gliding and significantly extends the lifespan of the heavy-duty electric sliding motor."
        },
        {
          heading: "Automated Access Integration",
          text: "Built with internal structural reinforcements specifically to mount high-torque gate operators. The system easily integrates with modern smart-home features, including keypad entry, magnetic vehicle loop detectors, and security intercom cameras."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Marine-Grade Aluminum & Cast Ornamentation" },
        { label: "Design Aesthetic", value: "Classic Ornate European Estate Style" },
        { label: "Corrosion Resistance", value: "Absolute Immunity to Rust and Salt Pitting" },
        { label: "Surface Finish", value: "Premium Baked Electrostatic Powder Coat" },
        { label: "Manufacturing Location", value: "Custom Fabricated in Miami, Florida Workshop" },
        { label: "Automation Compatibility", value: "Pre-Engineered for High-Speed Sliding Motors" },
        { label: "Maintenance", value: "Ultra-Low (Periodic wash down with mild soap)" }
      ]
    }
  },
  {
    id: 62,
    slug: "vertical-metal-slat-room-divider",
    img: "vertical-metal-slat-room-divider.webp",
    images: ["vertical-metal-slat-room-divider.webp"],
    title: "Vertical Metal Slat Room Divider",
    category: "Miscelaneas",
    tags: ["Room Divider", "Metal Slats", "Interior Design", "Architectural Metal", "Custom Fabrication"],
    description: "Bespoke vertical metal slat room divider. An architectural metal fabrication piece that defines interior spaces while allowing natural light and airflow.",
    extendedContent: {
      subtitle: "Architectural Vertical Metal Slat Room Dividers",
      intro: "Sculpt your interior space with light and shadow without building visually oppressive walls. The Vertical Metal Slat Room Divider by Dario's Custom Iron Art is a bespoke architectural feature designed for modern Miami interiors. This precision-fabricated metal partition elegantly defines living areas, dining rooms, or office spaces while preserving an open, airy, and interconnected floor plan.",
      sections: [
        {
          heading: "Vertical Slat Spatial Engineering",
          text: "Constructed with thick, evenly spaced vertical metal slats, the divider creates a physical boundary that separates room functions. However, the intentional gaps allow natural sunlight and HVAC airflow to pass through freely, maintaining the voluminous feel of open-concept architecture."
        },
        {
          heading: "Floor-to-Ceiling Structural Mounting",
          text: "To ensure absolute stability and safety, the heavy-duty metal frame is engineered to anchor directly into the floor slab and the ceiling joists above. This tension-mounted, rigid installation guarantees the heavy divider will not sway or rattle, even in high-traffic areas."
        },
        {
          heading: "Dynamic Light & Shadow Play",
          text: "As the sun moves across your windows or interior track lighting shifts, the deep vertical slats cast striking, elongated shadows across your floors and walls. The divider acts as a living, kinetic piece of modern art that changes the mood of the room throughout the day."
        },
        {
          heading: "Premium Architectural Finishes",
          text: "Finished in a luxurious baked powder coat to resist interior scuffs and fingerprints. Choose from deep matte black for a stark industrial contrast, crisp white to blend seamlessly into modern drywall, or rich metallic bronze to add a touch of high-end corporate luxury."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Heavy-Gauge Structural Steel or Aluminum Slats" },
        { label: "Design Function", value: "Open-Concept Spatial Division & Light Filtering" },
        { label: "Mounting System", value: "Rigid Floor-to-Ceiling Concealed Anchoring" },
        { label: "Surface Finish", value: "Interior-Grade Baked Powder Coat (Scuff Resistant)" },
        { label: "Manufacturing Location", value: "Custom Measured & Fabricated in Miami, Florida" },
        { label: "Ideal Applications", value: "Luxury Living Rooms, Dining Areas, Executive Offices" },
        { label: "Customization", value: "Slat Width and Spacing Tailored to Privacy Needs" }
      ]
    }
  },
  {
    id: 63,
    slug: "wrought-iron-style-aluminum-front-doors",
    img: "wrought-iron-style-aluminum-front-doors.webp",
    images: ["wrought-iron-style-aluminum-front-doors.webp", "wrought-iron-style-aluminum-front-doors2.webp"],
    title: "Wrought Iron Style Aluminum Front Doors",
    category: "Puertas",
    tags: ["Aluminum Doors", "Wrought Iron Style", "Front Doors", "Weather Resistant", "Coastal Climate"],
    description: "Custom double front doors made of weather-resistant aluminum but forged to replicate the heavy, historic look of traditional wrought iron. Perfect for humid coastal climates.",
    extendedContent: {
      subtitle: "Indestructible Wrought-Iron Replica Aluminum Front Doors",
      intro: "Defy Miami's coastal humidity with a door that boasts the monumental look of iron but the eternal lifespan of aluminum. The Wrought Iron Style Aluminum Front Doors are custom-fabricated by Dario's Custom Iron Art. This entryway delivers the massive, historic prestige of European blacksmithing, completely re-engineered using rust-proof, lightweight marine-grade aluminum.",
      sections: [
        {
          heading: "Faux-Iron Architectural Casting",
          text: "Our master artisans utilize heavy-wall aluminum extrusions and intricate cast aluminum panels to meticulously replicate the dense, imposing presence of classic wrought iron. The welds are ground smooth and the decorative scrolls are applied with such precision that it is visually indistinguishable from solid forged steel."
        },
        {
          heading: "100% Coastal Rust Immunity",
          text: "Unlike real iron doors that require constant touch-ups to combat salt spray and high humidity, this aluminum frame is chemically incapable of rusting. It is the ultimate luxury entryway solution for waterfront mansions and coastal estates in South Florida."
        },
        {
          heading: "Hurricane Defenses & Impact Glass",
          text: "The lightweight nature of the frame does not compromise its strength. Built to satisfy stringent Florida Building Code requirements, the thick aluminum chassis grips heavy-duty laminated impact glass, providing absolute defense against hurricane-force winds and forced entry."
        },
        {
          heading: "Weightless Operation & Faux Patinas",
          text: "Because aluminum is significantly lighter than iron, these massive double doors swing open with incredible ease, preventing long-term hinge sagging. They are finished with a baked powder coat and hand-painted faux patinas (like aged bronze or distressed black) to complete the authentic iron illusion."
        }
      ],
      specificationsTable: [
        { label: "Primary Material", value: "Heavy-Wall Marine-Grade Architectural Aluminum" },
        { label: "Design Aesthetic", value: "Monumental Wrought Iron Replica" },
        { label: "Glazing", value: "FBC Certified Laminated Impact Security Glass" },
        { label: "Corrosion Resistance", value: "Absolute Immunity to Rust and Coastal Salt Spray" },
        { label: "Manufacturing Location", value: "Custom Built in Miami, Florida Workshop" },
        { label: "Surface Finish", value: "Baked Powder Coat with Hand-Applied Faux Patina" },
        { label: "Hardware Options", value: "Pre-Machined for Multipoint Locks and Heavy Hinges" }
      ]
    }
  }
];

// --- FUNCIONES Y TRADUCTOR DE URLs ---
export const CATEGORY_SLUGS: Record<string, { en: string; es: string }> = {
  "Iluminación": { en: "lighting", es: "iluminacion" },
  "Puertas": { en: "doors", es: "puertas" },
  "Barandales": { en: "railings", es: "barandales" },
  "Portones": { en: "gates", es: "portones" },
  "Arte": { en: "art", es: "arte" },
  "Miscelaneas": { en: "miscellaneous", es: "miscelaneas" },
};

export function getCategorySlug(categoryName: string, lang: string): string {
  const normalizedLang = lang === "es" ? "es" : "en";
  return CATEGORY_SLUGS[categoryName]?.[normalizedLang] || categoryName.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}

export function getRelatedProducts(currentId: number, category: string, limit = 4): Product[] {
  return allProducts.filter((p) => p.id !== currentId && p.category === category).slice(0, limit);
}