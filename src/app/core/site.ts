export const SITE = {
  name: 'Ahmedabad Sofa Cleaning',
  shortName: 'ASC',
  tagline: 'Your Sofa, Deep Cleaned & Sanitized',
  phoneDisplay: '+91 81285 15199',
  phoneTel: '+918000384001',
  whatsapp: '918000384001',
  email: 'ahmedabadsofacleaning@gmail.com',
  domain: 'https://ahmedabadsofacleaning.in',
  hours: 'Monday–Sunday, 8:00 AM – 10:00 PM',
  hoursShort: 'Open 8 AM – 10 PM, all week',
  cities: ['Ahmedabad', 'Gandhinagar'] as const,
  priceSeat: 170,
  priceCushion: 50,
  ogImage: '/images/hero-sofa-cleaning.png',
} as const;

export function telHref(): string {
  return `tel:${SITE.phoneTel}`;
}

export function waHref(message?: string): string {
  const text =
    message ??
    'Hi Ahmedabad Sofa Cleaning, I would like to book a cleaning in Ahmedabad / Gandhinagar.';
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function waChatHref(): string {
  return waHref(
    'Hi Ahmedabad Sofa Cleaning, I want to chat about a cleaning in Ahmedabad / Gandhinagar.',
  );
}

export function mailtoHref(): string {
  return `mailto:${SITE.email}`;
}

export type ServiceGroup = 'home' | 'venue';

export interface ServiceItem {
  slug: string;
  name: string;
  short: string;
  summary: string;
  image: string;
  imageAlt: string;
  seoTitle: string;
  seoDescription: string;
  includes: string[];
  body: string[];
  group: ServiceGroup;
}

export const SERVICES: ServiceItem[] = [
  {
    slug: 'sofa-cleaning',
    name: 'Sofa cleaning',
    short: 'Deep clean for fabric sofas of every size.',
    summary:
      'Surface dust, body oils, and trapped grit come out of the seats — not just the armrests you can see.',
    image: '/images/hero-sofa-cleaning.png',
    imageAlt: 'Technician deep-cleaning a fabric sofa in a living room',
    seoTitle: 'Sofa Cleaning in Ahmedabad & Gandhinagar | ₹170 per seat',
    seoDescription:
      'Professional sofa cleaning in Ahmedabad and Gandhinagar. Deep fabric cleaning from ₹170 per seat and ₹50 per cushion. Book on call or WhatsApp.',
    includes: [
      'Vacuum and pre-treat visible marks',
      'Fabric-safe extraction on seats, backs, and arms',
      'Cushion cleaning priced separately at ₹50 each',
      'Drying guidance before we leave',
    ],
    body: [
      'Most sofas in Ahmedabad collect dust, pollen, and cooking film faster than a weekly wipe can handle. We clean the usable surface of each seat — the parts your family actually sits on — with a method matched to the fabric.',
      'Pricing is straightforward: ₹170 per seat and ₹50 per cushion. A 3-seater with two loose cushions is quoted before work starts, so there is no guesswork at the door.',
    ],
    group: 'home',
  },
  {
    slug: 'sofa-shampoo-wash',
    name: 'Sofa shampoo / wet wash',
    short: 'A fuller wash when the fabric can take moisture.',
    summary:
      'Shampoo agitation plus extraction for sofas that need more than a dry pass.',
    image: '/images/sofa-shampoo.png',
    imageAlt: 'Foam shampoo on a fabric sofa cushion during a wet wash',
    seoTitle: 'Sofa Shampoo Wash in Ahmedabad | Wet Wash at Home',
    seoDescription:
      'Sofa shampoo and wet wash at home in Ahmedabad and Gandhinagar. Fabric-checked before we wet the piece. Book on WhatsApp.',
    includes: [
      'Fabric check before any wet work',
      'Shampoo on seats and high-touch areas',
      'Rinse extraction to pull residue out',
      'Faster dry-down with airflow advice',
    ],
    body: [
      'A shampoo wash is for sofas that look dull, feel greasy, or have general soil rather than one isolated stain. We only wet a piece after checking the fabric — velvet, some linens, and cheap dyes are treated more gently.',
      'This is quoted on the visit or on a call once we know the sofa type and how many seats you need done.',
    ],
    group: 'home',
  },
  {
    slug: 'leather-sofa-cleaning',
    name: 'Leather sofa cleaning',
    short: 'Clean and condition leather without soaking it.',
    summary: 'pH-balanced cleaners and a light condition — not a fabric wash.',
    image: '/images/leather-sofa.png',
    imageAlt: 'Brown leather sofa being cleaned with a microfiber cloth',
    seoTitle: 'Leather Sofa Cleaning Ahmedabad & Gandhinagar',
    seoDescription:
      'Leather sofa cleaning and conditioning at home in Ahmedabad and Gandhinagar. Safe for genuine leather. Get a quote on call.',
    includes: [
      'Dust and crumb removal from seams',
      'Leather-safe wipe down of seats and arms',
      'Light conditioning where the hide looks dry',
      'Care notes so the finish lasts',
    ],
    body: [
      'Leather does not want a sofa shampoo. Water sitting in the grain leaves tide marks and can stiffen cheaper hides. We clean with leather-safe products and add a light conditioner when the surface looks thirsty.',
      'Bonded leather and some rexine pieces are treated as wipe-clean upholstery, not genuine hide — we will say so before starting.',
    ],
    group: 'home',
  },
  {
    slug: 'carpet-rug-cleaning',
    name: 'Carpet & rug cleaning',
    short: 'Area rugs and fitted carpets, lifted of grit and spills.',
    summary: 'Hot-water extraction where the fibre can take it; gentler methods for delicate rugs.',
    image: '/images/carpet-cleaning.png',
    imageAlt: 'Carpet extraction wand cleaning a patterned rug',
    seoTitle: 'Carpet and Rug Cleaning in Ahmedabad & Gandhinagar',
    seoDescription:
      'Carpet and rug cleaning at home in Ahmedabad and Gandhinagar. Pet hair, spills, and dull pile. Quote on call or WhatsApp.',
    includes: [
      'Vacuum and edge work',
      'Spot treatment on food and drink marks',
      'Extraction or low-moisture clean by fibre type',
      'Groomed pile so the colour reads evenly',
    ],
    body: [
      'Rugs in Ahmedabad homes pick up street dust and festival spills. We clean area rugs and wall-to-wall carpet at your doorstep, after checking fibre and colour-fastness.',
      'Price depends on size and soil level — send a photo on WhatsApp for a working quote, or we measure on site.',
    ],
    group: 'home',
  },
  {
    slug: 'mattress-cleaning',
    name: 'Mattress cleaning',
    short: 'Surface sanitation for the bed you sleep on every night.',
    summary: 'Dust, sweat marks, and odour on the sleeping surface — not a dry-clean factory job.',
    image: '/images/mattress-cleaning.png',
    imageAlt: 'Mattress surface being steam-cleaned in a bedroom',
    seoTitle: 'Mattress Cleaning Service in Ahmedabad & Gandhinagar',
    seoDescription:
      'Mattress cleaning at home in Ahmedabad and Gandhinagar. Dust, sweat marks, and odour treatment. Book on call or WhatsApp.',
    includes: [
      'Both sides where the mattress can be turned',
      'Vacuum of the sleeping surface',
      'Targeted treatment on sweat and spill marks',
      'Time to dry before you make the bed',
    ],
    body: [
      'A mattress holds skin cells, sweat, and whatever the monsoon leaves in the room. We clean the sleeping surface at home so you do not haul a king-size bed across the city.',
      'Quoted per piece on a call — size and whether you want both sides done changes the time on site.',
    ],
    group: 'home',
  },
  {
    slug: 'stain-odour-removal',
    name: 'Stain & odour removal',
    short: 'Targeted work on marks, pets, and cooking smell.',
    summary: 'We treat the spot you care about, then tell you honestly if it will fully lift.',
    image: '/images/stain-odour.png',
    imageAlt: 'Close-up of fabric stain treatment on a sofa armrest',
    seoTitle: 'Sofa Stain and Odour Removal in Ahmedabad',
    seoDescription:
      'Stain and odour treatment for sofas, carpets, and mattresses in Ahmedabad and Gandhinagar. Honest assessment before we start.',
    includes: [
      'Identification of likely stain type',
      'Spot chemistry matched to the fabric',
      'Odour work on pet, food, and damp smells',
      'Clear yes/no on what will fully lift',
    ],
    body: [
      'Old turmeric, ink, and pet accidents do not all behave the same. We try the least aggressive method that can work, and we will say if a dye or a set stain is likely to remain as a lighter mark.',
      'Often combined with a full sofa or carpet clean so the rest of the piece matches the treated area.',
    ],
    group: 'home',
  },
  {
    slug: 'party-plot-sofa',
    name: 'Party plot sofa',
    short: 'Banquet and lawn sofas cleaned on site before the function.',
    summary:
      'Wedding and party-plot sofa sets — rows of banquet seating cleaned at the venue, quoted by piece count.',
    image: '/images/party-plot-sofa.png',
    imageAlt: 'Rows of banquet sofas under a party-plot tent',
    seoTitle: 'Party Plot Sofa Cleaning Ahmedabad & Gandhinagar',
    seoDescription:
      'Party plot and banquet sofa cleaning in Ahmedabad and Gandhinagar. On-site cleaning before weddings and functions. Quote on WhatsApp.',
    includes: [
      'Count and fabric check of the sofa set',
      'Vacuum, spot treatment, and extraction as the fabric allows',
      'Work scheduled around your decorator and catering load-in',
      'Quoted per piece after a photo or a site visit',
    ],
    body: [
      'Party-plot sofas take dust, makeup, and food from back-to-back functions. We clean banquet sets at the plot or warehouse so they look even under tent lighting.',
      'Send a photo and approximate piece count on WhatsApp for a working quote. Large sets are scheduled as a crew job, not a single-sofa slot.',
    ],
    group: 'venue',
  },
  {
    slug: 'chair-cleaning',
    name: 'Chair cleaning',
    short: 'Dining, lounge, and accent chairs — fabric or leather.',
    summary: 'Individual chairs cleaned with the same care as a sofa, priced as a quoted set.',
    image: '/images/chair-cleaning.png',
    imageAlt: 'Upholstered dining chair being cleaned in a home',
    seoTitle: 'Chair Cleaning Service in Ahmedabad & Gandhinagar',
    seoDescription:
      'Dining and lounge chair cleaning in Ahmedabad and Gandhinagar. Fabric and leather chairs. Get a set quote on WhatsApp.',
    includes: [
      'Seat, back, and arm clean',
      'Method matched to fabric or leather',
      'Sets of six or more quoted together',
      'Can be booked with sofa cleaning on the same visit',
    ],
    body: [
      'Dining chairs pick up dal, oil, and school-bag dust on the same seats every day. We clean the upholstered seat and back — not a wipe of the wooden frame only.',
      'A mixed set (some fabric, some leather) is assessed chair by chair. Message how many chairs and a photo for a quote.',
    ],
    group: 'venue',
  },
  {
    slug: 'restaurant-chair-sofa',
    name: 'Restaurant chair & sofa',
    short: 'Booths, banquettes, and dining chairs for F&B spaces.',
    summary: 'After-hours cleaning for restaurant seating so covers look even for the next service.',
    image: '/images/restaurant-seating.png',
    imageAlt: 'Restaurant dining chairs and booth sofa in a warm interior',
    seoTitle: 'Restaurant Chair and Sofa Cleaning Ahmedabad',
    seoDescription:
      'Restaurant chair, booth, and sofa cleaning in Ahmedabad and Gandhinagar. After-hours slots. Quote on call or WhatsApp.',
    includes: [
      'Booths, banquettes, and loose dining chairs',
      'Grease and food-spot treatment',
      'Slots after close or before open, agreed in advance',
      'Quoted by cover count after a walk-through or photos',
    ],
    body: [
      'Restaurant fabric holds kitchen film and table-side spills. We clean chairs and sofa seating on a schedule that does not sit in the lunch rush.',
      'Hotels, cafes, and cloud-kitchen waiting areas use the same service. Send photos of the covers and we quote before we arrive.',
    ],
    group: 'venue',
  },
  {
    slug: 'office-chair-sofa',
    name: 'Office chair & sofa',
    short: 'Workstation chairs and reception sofas, done around office hours.',
    summary: 'Task chairs, visitor chairs, and lounge sofas cleaned at the workplace.',
    image: '/images/office-seating.png',
    imageAlt: 'Office chairs and a waiting-lounge sofa in a sunlit workplace',
    seoTitle: 'Office Chair and Sofa Cleaning Ahmedabad & Gandhinagar',
    seoDescription:
      'Office chair and sofa cleaning in Ahmedabad and Gandhinagar, including GIFT City. Weekend or after-hours slots. Quote on WhatsApp.',
    includes: [
      'Mesh, fabric, and leather task chairs',
      'Reception and cabin sofas',
      'Weekend or late-evening slots when needed',
      'Quoted per chair plus sofa seats',
    ],
    body: [
      'Office chairs collect hair, dust, and food from desk hours. We clean the seat and back at your workplace so you do not cart fifty chairs home.',
      'GIFT City, SG Highway, and Ashram Road offices are regular runs. Share a floor photo and headcount for a quote.',
    ],
    group: 'venue',
  },
  {
    slug: 'auditorium-seating',
    name: 'Auditorium seating',
    short: 'Hall and theatre rows cleaned seat by seat.',
    summary: 'School, college, and community auditorium chairs — quoted by row or by hall.',
    image: '/images/auditorium-seating.png',
    imageAlt: 'Rows of upholstered auditorium seats in an empty hall',
    seoTitle: 'Auditorium Seat Cleaning in Ahmedabad & Gandhinagar',
    seoDescription:
      'Auditorium and hall seating cleaning in Ahmedabad and Gandhinagar. Schools, colleges, and community theatres. Quote on WhatsApp.',
    includes: [
      'Fixed theatre-style seats, row by row',
      'Armrests and seat folds',
      'Work planned around events and exams',
      'Quoted after a seat count or a site walk',
    ],
    body: [
      'Auditorium fabric holds years of dust in the fold of each seat. We clean hall seating in sections so a school or community venue does not shut for a week.',
      'Message the hall name, approximate seat count, and a photo of one row. We quote and lock a window between your programmes.',
    ],
    group: 'venue',
  },
  {
    slug: 'home-theater-cinema',
    name: 'Home theater & cinema',
    short: 'Recliners and cinema chairs in homes and private theatres.',
    summary: 'Power recliners and cinema rows cleaned without soaking the electrics.',
    image: '/images/cinema-seating.png',
    imageAlt: 'Home theater reclining cinema chairs in a private screening room',
    seoTitle: 'Home Theater and Cinema Chair Cleaning Ahmedabad',
    seoDescription:
      'Home theater recliner and cinema chair cleaning in Ahmedabad and Gandhinagar. Fabric-safe, electrics-aware. Book on WhatsApp.',
    includes: [
      'Recliner seats, footrests, and arm consoles',
      'Care around motors and cup holders',
      'Private home theatres and small commercial screens',
      'Quoted per chair after a photo',
    ],
    body: [
      'Cinema fabric shows popcorn oil and fingerprints under house lights. We clean recliners without flooding the motor housing or the cup-holder well.',
      'Home theatres in Bopal, Science City, and Kudasan villas are a typical job. Send a photo of the row for a per-chair quote.',
    ],
    group: 'venue',
  },
  {
    slug: 'bus-chair',
    name: 'Bus chair cleaning',
    short: 'Coach, staff-bus, and tempo-traveller seats at the depot or yard.',
    summary: 'Passenger seat fabric cleaned in the vehicle — not removed and sent away.',
    image: '/images/bus-chair.png',
    imageAlt: 'Coach bus passenger seats being cleaned in the aisle',
    seoTitle: 'Bus Seat Cleaning Ahmedabad & Gandhinagar',
    seoDescription:
      'Bus and coach seat cleaning in Ahmedabad and Gandhinagar. Staff buses, tourist coaches, tempo travellers. Quote on WhatsApp.',
    includes: [
      'Seat base, back, and headrest',
      'Aisle-side work inside the vehicle',
      'Fleet jobs quoted per bus',
      'Yard or depot visit, scheduled with your driver roster',
    ],
    body: [
      'Bus fabric takes dust from the highway and whatever passengers leave in the weave. We clean seats inside the vehicle at your yard so the bus is not off the road for a factory job.',
      'One bus or a small fleet — send a photo of a row and how many vehicles. We quote per coach.',
    ],
    group: 'venue',
  },
];

export const HOME_SERVICES = SERVICES.filter((s) => s.group === 'home');
export const VENUE_SERVICES = SERVICES.filter((s) => s.group === 'venue');

export const AHMEDABAD_LOCALITIES = [
  'Satellite',
  'Bopal',
  'South Bopal',
  'Shela',
  'Prahlad Nagar',
  'Bodakdev',
  'Thaltej',
  'Vastrapur',
  'SG Highway',
  'Ambli',
  'Shilaj',
  'Science City',
  'Gota',
  'Chandkheda',
  'Motera',
  'Sabarmati',
  'Ranip',
  'Ghatlodia',
  'Sola',
  'Memnagar',
  'Navrangpura',
  'Naranpura',
  'CG Road',
  'Ellisbridge',
  'Paldi',
  'Vasna',
  'Ambawadi',
  'Jodhpur',
  'Shyamal',
  'Nehrunagar',
  'Maninagar',
  'Isanpur',
  'Vatva',
  'Narol',
  'Odhav',
  'Vastral',
  'Nikol',
  'Naroda',
  'Bapunagar',
  'Shahibaug',
  'Ashram Road',
  'Sarkhej',
  'Makarba',
  'Vejalpur',
  'Paldi West',
  'Anandnagar',
  'Iskcon',
  'Ramdev Nagar',
] as const;

export const GANDHINAGAR_LOCALITIES = [
  'Kudasan',
  'Sargasan',
  'Infocity',
  'GIFT City',
  'Raysan',
  'Randesan',
  'Pethapur',
  'Adalaj',
  'Kolavada',
  'Chiloda',
  'Bhat',
  'Koba',
  'Vavol',
  'Por',
  'Sector 7',
  'Sector 16',
  'Sector 21',
  'Sector 24',
  'Sector 26',
  'Sector 29',
  'PDPU / Raisan',
  'Lekawada',
] as const;

export interface FaqItem {
  q: string;
  a: string;
}

export const FAQS: FaqItem[] = [
  {
    q: 'How is sofa cleaning priced?',
    a: 'Fabric sofa cleaning starts at ₹170 per seat and ₹50 per cushion. A 3-seater is three seats. Loose back or seat cushions are counted separately. Leather, carpets, mattresses, and heavy stain work are quoted on a call once we know the piece.',
  },
  {
    q: 'Do you serve both Ahmedabad and Gandhinagar?',
    a: 'Yes. We take bookings across Ahmedabad city and Gandhinagar, including GIFT City, Kudasan, Bopal, Satellite, Chandkheda, Maninagar, and the localities listed on our service-area pages.',
  },
  {
    q: 'How do I book?',
    a: 'Call +91 81285 15199 or WhatsApp the same number. Share your locality, the service you need, and roughly how many seats. You can also send the form on this website — it opens WhatsApp with those details already filled.',
  },
  {
    q: 'How long until the sofa can be used again?',
    a: 'Most fabric jobs are surface-dry within a few hours with a fan or AC on. We avoid soaking a piece. Leather is usually ready as soon as the wipe-down is done. We will tell you on site if a wetter wash needs overnight drying.',
  },
  {
    q: 'Are the products safe around children and pets?',
    a: 'We use fabric-appropriate, household-safe cleaners and rinse residue out of the fibre on wet jobs. Keep children and pets off a damp sofa until it is dry. If anyone at home has a known chemical sensitivity, mention it when you book.',
  },
  {
    q: 'Can you remove old stains and cooking or pet odour?',
    a: 'Many food, drink, and fresh pet marks lighten a lot. Set turmeric, ink, and long-sat odour are less predictable. We will test a discreet area and tell you before we treat the whole piece if a mark is likely to stay as a shadow.',
  },
  {
    q: 'Do you clean leather, carpets, and mattresses as well?',
    a: 'Yes. Leather sofas get a different process from fabric. Carpets, rugs, and mattresses are booked on the same visit when the schedule allows — ask when you call.',
  },
  {
    q: 'Do you clean party-plot sofas, restaurant chairs, offices, auditoriums, home theatres, and bus seats?',
    a: 'Yes. Party-plot banquet sofas, dining chairs, restaurant booths, office chairs and sofas, auditorium rows, home-theatre recliners, and bus seats are quoted on a call or WhatsApp after a photo or a seat count. They are not the ₹170 home-sofa seat rate.',
  },
  {
    q: 'Do I need to be at home?',
    a: 'Someone 18 or older should be present to confirm the work, move small objects off the sofa, and check the result. We work around your furniture; we do not take sofas away.',
  },
  {
    q: 'What time do you work?',
    a: 'We take calls and bookings every day from 8:00 AM to 10:00 PM. Visit slots are agreed on WhatsApp or phone so they fit your building and family routine.',
  },
  {
    q: 'Do you give a written invoice?',
    a: 'Yes — ask when we confirm the booking. Payment is collected as agreed on the call. There is no extra “visit charge” beyond the quoted seats, cushions, or on-call items.',
  },
];

export const PROCESS_STEPS = [
  {
    n: '01',
    title: 'Book',
    text: 'Call or WhatsApp with your locality, sofa size, and the service you need. We confirm a visit window.',
  },
  {
    n: '02',
    title: 'Assess',
    text: 'On site we check fabric, stains, and whether a dry clean, shampoo, or leather care is the right call.',
  },
  {
    n: '03',
    title: 'Clean',
    text: 'Seats, cushions, and problem spots are treated with the method we agreed — no surprise soaking.',
  },
  {
    n: '04',
    title: 'Dry',
    text: 'We set the piece up to dry, share simple aftercare, and leave only when you have seen the result.',
  },
] as const;

export const WHY_POINTS = [
  {
    title: 'Price you can see first',
    text: '₹170 per seat and ₹50 per cushion for fabric sofa cleaning. Other work is quoted before we start — not after.',
  },
  {
    title: 'Method matched to the fabric',
    text: 'Fabric extraction, shampoo wash, or leather care. We do not run one machine setting on every sofa in the city.',
  },
  {
    title: 'Ahmedabad and Gandhinagar',
    text: 'One number for both cities. If you can share a landmark, we can usually place you on the next workable slot.',
  },
  {
    title: 'Book the way you already message',
    text: 'No app to install. Call, WhatsApp, or the form on this site — it opens WhatsApp with your details filled in.',
  },
  {
    title: 'Honest on stains',
    text: 'If a mark will not fully lift, we say so before treating the whole sofa. Better an honest shadow than a ruined dye.',
  },
  {
    title: 'At your home',
    text: 'Work happens at your doorstep — or at the plot, office, hall, or bus yard. We ask you to clear small objects; we handle the seats.',
  },
] as const;

export interface NavLink {
  path: string;
  label: string;
}

export const NAV: NavLink[] = [
  { path: '/services', label: 'Services' },
  { path: '/pricing', label: 'Pricing' },
  { path: '/service-areas', label: 'Areas' },
  { path: '/faq', label: 'FAQ' },
  { path: '/contact', label: 'Contact' },
];

export function bookingMessage(input: {
  name: string;
  phone: string;
  locality: string;
  service: string;
}): string {
  return [
    'Hello Ahmedabad Sofa Cleaning,',
    '',
    `Name: ${input.name}`,
    `Phone: ${input.phone}`,
    `Locality: ${input.locality}`,
    `Service: ${input.service}`,
    '',
    'Please share a booking slot.',
  ].join('\n');
}

export function findService(slug: string): ServiceItem | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export const LOCAL_BUSINESS_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: SITE.name,
  url: SITE.domain,
  telephone: SITE.phoneTel,
  email: SITE.email,
  image: `${SITE.domain}${SITE.ogImage}`,
  priceRange: '₹₹',
  openingHours: 'Mo-Su 08:00-22:00',
  areaServed: [
    { '@type': 'City', name: 'Ahmedabad' },
    { '@type': 'City', name: 'Gandhinagar' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    addressCountry: 'IN',
  },
  sameAs: [waHref()],
  makesOffer: SERVICES.map((s) => ({
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name: s.name },
  })),
};
