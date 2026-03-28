export type AreaLocation = {
  name: string
  fullName: string
  metaTitle: string
  metaDescription: string
  heroDescription: string
  description: string
  areas: string[]
  whyChoose: string
}

export const areaLocationData: Record<string, AreaLocation> = {
  manchester: {
    name: "Manchester",
    fullName: "Auto Locksmith Services in Manchester",
    metaTitle: "Auto Locksmith Manchester | Car Key Replacement & Emergency Service 24/7",
    metaDescription:
      "Professional auto locksmith services in Manchester and surrounding areas. Car key replacement, emergency lockout assistance, key fob programming. 25-min response. Call 07309903243",
    heroDescription: "Expert auto locksmith services throughout Manchester and the surrounding areas.",
    description:
      "Manchester residents and businesses rely on our professional auto locksmith services. From the city centre to outer regions, our mobile locksmiths provide fast car key replacement, emergency lockout assistance, and professional key programming. Whether you're locked out of your car, need a new key, or require key fob programming, we're available 24/7.",
    areas: ["City Centre", "Salford", "Trafford", "Tameside", "Oldham", "Rochdale", "Bury"],
    whyChoose:
      "Based in the Greater Manchester area, we understand Manchester's traffic patterns and geography. Our mobile locksmiths arrive within 25 minutes on average. We serve all of Manchester with transparent pricing and professional, fully insured service.",
  },
  bury: {
    name: "Bury",
    fullName: "Auto Locksmith Services in Bury",
    metaTitle: "Auto Locksmith Bury | Car Key Replacement & Emergency Lockout Service 24/7",
    metaDescription:
      "Professional auto locksmith services in Bury, Greater Manchester. Car key replacement, emergency lockout, key fob programming. Fast response. Fully insured. Call 07309903243",
    heroDescription: "Professional car locksmith and auto key services in Bury.",
    description:
      "Locked out of your car in Bury? Need a new key? Our certified locksmiths provide damage-free entry, rapid response times, and transparent pricing. We handle all vehicle types and modern security systems. Whether it's an emergency lockout or planned key replacement, we're ready to help.",
    areas: ["Bury Town Centre", "Radcliffe", "Whitefield", "Prestwich", "Heywood"],
    whyChoose:
      "We're local to Bury and know the area well. Fast response times, professional service, and no hidden charges. Available 24/7 for emergencies including evenings, weekends, and bank holidays.",
  },
  oldham: {
    name: "Oldham",
    fullName: "Auto Locksmith Services in Oldham",
    metaTitle: "Auto Locksmith Oldham | Car Key & Van Locksmith Emergency Service 24/7",
    metaDescription:
      "Trusted auto locksmith services in Oldham. Car lockout, van locksmith, key replacement, key fob programming. 25-min response. Fully insured. Call 07309903243",
    heroDescription: "Trusted auto locksmith services in Oldham, offering comprehensive solutions for car and van lockouts.",
    description:
      "Oldham's trusted auto locksmith service for all your car and van locksmith needs. Our experienced technicians are equipped to handle all makes and models with professional, non-destructive techniques. From emergency lockouts to key replacement and programming, we provide fast, reliable service.",
    areas: ["Oldham Town Centre", "Chadderton", "Failsworth", "Lees", "Royton"],
    whyChoose:
      "We understand Oldham's busy streets and can reach you quickly. Professional, certified locksmiths with modern equipment. Transparent pricing with no surprises.",
  },
  rochdale: {
    name: "Rochdale",
    fullName: "Auto Locksmith Services in Rochdale",
    metaTitle: "Auto Locksmith Rochdale | Car Key Replacement & Emergency Service 24/7",
    metaDescription:
      "Fast, reliable auto locksmith services in Rochdale. Car key replacement, emergency lockout, key fob programming. 24/7 service. Call 07309903243",
    heroDescription: "Fast, reliable locksmith services for Rochdale residents and businesses.",
    description:
      "Rochdale's trusted auto locksmith service. Specializing in car key replacement, emergency lockout assistance, and key fob programming. Available 24/7 for urgent situations. Our mobile locksmiths bring the solution directly to you with no call-out fee.",
    areas: ["Rochdale Town Centre", "Middleton", "Littleborough", "Milnrow", "Heywood"],
    whyChoose:
      "Local knowledge of Rochdale and fast response times. Professional, fully insured technicians. Same-day service available for emergencies.",
  },
  tameside: {
    name: "Tameside",
    fullName: "Auto Locksmith Services in Tameside",
    metaTitle: "Auto Locksmith Tameside | Car Key & Emergency Lockout Service 24/7",
    metaDescription:
      "Professional auto locksmith services in Tameside including Ashton-under-Lyne and Denton. Car key replacement, emergency lockout, key fob programming. Call 07309903243",
    heroDescription: "Professional auto locksmith services across Tameside, including Ashton-under-Lyne and Denton.",
    description:
      "Tameside's professional auto locksmith service. Whether you need emergency car lockout help or car key replacement, our mobile locksmiths provide fast, professional service with transparent pricing. We handle all vehicle types and security systems.",
    areas: ["Ashton-under-Lyne", "Denton", "Dukinfield", "Mossley", "Stalybridge"],
    whyChoose: "Serving Tameside with fast response times and professional service. Fully insured and certified technicians available 24/7.",
  },
  trafford: {
    name: "Trafford",
    fullName: "Auto Locksmith Services in Trafford",
    metaTitle: "Auto Locksmith Trafford | Car Key Replacement & Emergency Service 24/7",
    metaDescription:
      "Expert auto locksmith services in Trafford including Sale and Altrincham. Car key replacement, emergency lockout, key fob programming. Call 07309903243",
    heroDescription: "Expert auto locksmith and car key services throughout Trafford.",
    description:
      "Serving Trafford with professional auto locksmith services. From Sale to Altrincham, we provide emergency lockout assistance, professional key replacement, and advanced key fob programming. Fast response times, fully insured service.",
    areas: ["Sale", "Altrincham", "Stretford", "Urmston", "Partington"],
    whyChoose: "Local service covering all Trafford areas. Professional technicians, transparent pricing, and 25-minute average response.",
  },
  salford: {
    name: "Salford",
    fullName: "Auto Locksmith Services in Salford",
    metaTitle: "Auto Locksmith Salford | Car Key Replacement & Emergency Lockout 24/7",
    metaDescription:
      "Comprehensive auto locksmith services in Salford. Car key replacement, emergency lockout, key programming. Available 24/7. Call 07309903243",
    heroDescription: "Comprehensive auto locksmith services for Salford and surrounding areas.",
    description:
      "Salford's auto locksmith service for all your automotive key and lockout needs. Our mobile locksmiths specialize in car key replacement, emergency lockout solutions, and professional key coding. Available around the clock for urgent locksmith emergencies.",
    areas: ["Salford City Centre", "Eccles", "Worsley", "Irlam", "Pendlebury"],
    whyChoose: "Based locally in Greater Manchester, we understand Salford well. Fast response, professional service, fully insured.",
  },
}

export const areaSlugs = Object.keys(areaLocationData)

// ─── Stockport sub-area data (for /areas/stockport/[slug]) ───────────────────

export type StockportSubArea = {
  name: string
  postcode: string
  metaTitle: string
  metaDescription: string
  heroDescription: string
  description: string
  nearbyAreas: string[]
  whyChoose: string
  landmarks: string[]
  responseTime: string
}

export const stockportSubAreaData: Record<string, StockportSubArea> = {
  cheadle: {
    name: "Cheadle",
    postcode: "SK8",
    metaTitle: "Auto Locksmith Cheadle | Car Keys & Lockout 24/7",
    metaDescription: "Locked out in Cheadle? Vikki Heaton provides 24/7 car key replacement, emergency lockout and key fob programming in Cheadle SK8. 20-min response. No call-out fee.",
    heroDescription: "Fast, professional auto locksmith services in Cheadle and the surrounding SK8 area.",
    description: "Cheadle residents can rely on our fast, professional auto locksmith service. Whether you're locked out of your car on the A34 Kingsway, near Cheadle Royal Business Park, or at home in Cheadle Village, our mobile locksmith is with you quickly. We handle all car makes and models, from Ford and Vauxhall to BMW and Mercedes — with keys cut and programmed on-site.",
    nearbyAreas: ["Cheadle Hulme", "Gatley", "Cheadle Heath", "Cheadle Village", "East Didsbury"],
    whyChoose: "We know Cheadle's roads and can navigate directly to you. Transparent pricing, no hidden fees, and a fully insured professional service every time.",
    landmarks: ["Cheadle Royal Hospital", "Cheadle Village", "Kingsway A34", "Cheadle Heath"],
    responseTime: "20 minutes",
  },
  bramhall: {
    name: "Bramhall",
    postcode: "SK7",
    metaTitle: "Auto Locksmith Bramhall | Car Key Replacement 24/7",
    metaDescription: "Car locksmith in Bramhall SK7. Emergency car lockout, car key replacement, key fob programming. 25-min response, no call-out fee. Call Vikki Heaton 07309903243.",
    heroDescription: "Reliable auto locksmith services in Bramhall SK7, available 24 hours a day.",
    description: "Serving Bramhall and the surrounding SK7 area with professional auto locksmith services. If you're locked out near Bramhall Park, on Bramhall Lane, or at Bramhall Village, our certified mobile locksmith will reach you fast. We provide car key cutting and programming, emergency lockout assistance, and ignition repair for all vehicles.",
    nearbyAreas: ["Bramhall Village", "Woodsmoor", "Hazel Grove", "Poynton", "Davenport"],
    whyChoose: "Local to Bramhall, we know the area and arrive quickly. Professional, damage-free entry techniques and on-site key programming for all modern vehicles.",
    landmarks: ["Bramhall Park", "Bramhall Lane", "Bramhall Village Centre", "Bramhall Station"],
    responseTime: "25 minutes",
  },
  "hazel-grove": {
    name: "Hazel Grove",
    postcode: "SK7",
    metaTitle: "Auto Locksmith Hazel Grove | 24/7 Car Key Service",
    metaDescription: "Auto locksmith in Hazel Grove SK7. Car key replacement, emergency lockouts, key fob programming. Female locksmith expert. 25-min response. No call-out fee. 24/7.",
    heroDescription: "24/7 auto locksmith services in Hazel Grove, covering all of SK7.",
    description: "Need a locksmith in Hazel Grove? Our mobile auto locksmith covers the full SK7 area including Hazel Grove village, London Road A6, and surrounding streets. We specialise in car key replacement, emergency lockout assistance, and key fob programming for all makes and models. All work carried out on-site at your location.",
    nearbyAreas: ["Hazel Grove Village", "Bramhall", "Stepping Hill", "High Lane", "Norbury"],
    whyChoose: "Quick response across Hazel Grove. Female auto locksmith, fully insured, transparent pricing. No surprises, no call-out fee.",
    landmarks: ["Stepping Hill Hospital", "London Road A6", "Hazel Grove Golf Club", "Torkington Park"],
    responseTime: "20 minutes",
  },
  marple: {
    name: "Marple",
    postcode: "SK6",
    metaTitle: "Auto Locksmith Marple | Car Keys & Lockout SK6 24/7",
    metaDescription: "Car locksmith in Marple SK6. Emergency lockout, car key replacement and key programming. 24/7 availability. No call-out fee. Call Vikki Heaton on 07309903243.",
    heroDescription: "Professional auto locksmith services in Marple and the wider SK6 area.",
    description: "Marple residents can count on our professional auto locksmith service around the clock. Whether you're locked out near Marple Bridge, on Stockport Road, or close to the Peak Forest Canal, we'll arrive quickly and professionally. We carry all the equipment needed to cut and programme replacement keys on-site for all modern vehicles.",
    nearbyAreas: ["Marple Bridge", "Romiley", "High Lane", "Mellor", "Compstall"],
    whyChoose: "We know the Marple SK6 area and can reach you without delay. Certified technicians, modern programming equipment, and no call-out fees.",
    landmarks: ["Peak Forest Canal", "Marple Bridge", "Roman Lakes", "Marple Station"],
    responseTime: "25 minutes",
  },
  romiley: {
    name: "Romiley",
    postcode: "SK6",
    metaTitle: "Auto Locksmith Romiley | Emergency Car Keys SK6",
    metaDescription: "Auto locksmith in Romiley SK6. Emergency lockout, car key replacement, van locksmith services. 24/7 availability, no call-out fee. Call 07309903243.",
    heroDescription: "Prompt auto locksmith services in Romiley SK6, available day and night.",
    description: "Our mobile auto locksmith covers all of Romiley and the surrounding SK6 area. Locked out on Compstall Road or Mill Lane? Lost your car keys near Romiley Forum? We'll be with you quickly with the tools to resolve any car key or lockout situation on the spot. All vehicle makes and models catered for, 24 hours a day.",
    nearbyAreas: ["Bredbury", "Marple", "Compstall", "Woodley", "Hatherlow"],
    whyChoose: "Romiley SK6 specialist — fast response, professional service, and honest upfront pricing. Fully insured, female locksmith operator.",
    landmarks: ["Romiley Forum", "Compstall Road", "Romiley Station", "Etherow Country Park"],
    responseTime: "25 minutes",
  },
  bredbury: {
    name: "Bredbury",
    postcode: "SK6",
    metaTitle: "Auto Locksmith Bredbury | Car Key Replacement 24/7",
    metaDescription: "Car locksmith in Bredbury SK6. Emergency car lockouts, key replacement, van locksmith. 24/7 service. No call-out fee. Fully insured. Call 07309903243.",
    heroDescription: "24/7 auto locksmith covering Bredbury and the SK6 area.",
    description: "Bredbury's local auto locksmith service, available 24 hours a day, 7 days a week. Whether you're locked out near Bredbury Retail Park, at home, or on Ashton Road, our mobile locksmith will arrive promptly. We offer car key replacement, van lockout service, key fob programming, and ignition repair for all vehicle makes and models.",
    nearbyAreas: ["Romiley", "Woodley", "Bredbury Green", "Brinnington", "Reddish"],
    whyChoose: "Fast response across Bredbury SK6. Professional, non-destructive entry and on-site key programming. No call-out fee, no hidden charges.",
    landmarks: ["Bredbury Retail Park", "Ashton Road", "Bredbury Station", "Goyt Valley"],
    responseTime: "20 minutes",
  },
  reddish: {
    name: "Reddish",
    postcode: "SK5",
    metaTitle: "Auto Locksmith Reddish | Car Keys & Lockout SK5",
    metaDescription: "Emergency car locksmith in Reddish SK5. Car key replacement, lockout assistance, key fob programming. 24/7, no call-out fee. Call Vikki Heaton 07309903243.",
    heroDescription: "Fast auto locksmith services in Reddish SK5, available around the clock.",
    description: "Reddish residents and businesses can rely on our rapid auto locksmith service. Close to the Tesco on Houldsworth Street, on Gorton Road, or anywhere across SK5 — we'll reach you quickly and sort your car key or lockout problem efficiently. Emergency service available 24/7 including bank holidays.",
    nearbyAreas: ["Brinnington", "Edgeley", "Bredbury", "Heaton Chapel", "Gorton"],
    whyChoose: "We're quick to reach Reddish from our base in Stockport. Transparent pricing, damage-free vehicle entry, and on-site key programming.",
    landmarks: ["Houldsworth Street", "Gorton Road", "Reddish Vale Country Park", "Reddish Station"],
    responseTime: "20 minutes",
  },
  edgeley: {
    name: "Edgeley",
    postcode: "SK3",
    metaTitle: "Auto Locksmith Edgeley | Car Keys Stockport SK3",
    metaDescription: "Auto locksmith in Edgeley SK3, next to Stockport town centre. Car key replacement, emergency lockout, key programming. No call-out fee. 24/7. Call 07309903243.",
    heroDescription: "Local auto locksmith in Edgeley SK3, minutes from Stockport town centre.",
    description: "Edgeley sits right next to Stockport town centre, meaning we can reach you here faster than almost anywhere. From Castle Street to Hardcastle Road, near Edgeley Park stadium, or on any Edgeley residential street, we provide professional car key replacement, emergency lockout assistance, and key fob programming. Fully equipped mobile workshop comes to you.",
    nearbyAreas: ["Stockport Town Centre", "Cheadle Heath", "Adswood", "Davenport", "Heaton Norris"],
    whyChoose: "Edgeley is one of our fastest response areas — often under 15 minutes. Professional service, no call-out fee, honest upfront pricing.",
    landmarks: ["Edgeley Park (Stockport County FC)", "Castle Street", "Hardcastle Road", "Edgeley Station"],
    responseTime: "15 minutes",
  },
  offerton: {
    name: "Offerton",
    postcode: "SK2",
    metaTitle: "Auto Locksmith Offerton | Car Key Replacement SK2",
    metaDescription: "Car locksmith in Offerton SK2. Emergency lockout, car key replacement, key fob programming. Available 24/7, no call-out fee. Fully insured. Call 07309903243.",
    heroDescription: "Professional auto locksmith services in Offerton SK2, available 24/7.",
    description: "Covering all of Offerton and the SK2 area, our mobile auto locksmith service brings the solution to your door. Locked out near Offerton Road, on Dialstone Lane, or in the Offerton Estate? Our certified locksmith will be with you promptly. We can cut and programme keys for all vehicle makes, including newer models with advanced transponder systems.",
    nearbyAreas: ["Hazel Grove", "Woodsmoor", "Davenport", "Stockport Town Centre", "Stepping Hill"],
    whyChoose: "Local knowledge of the Offerton SK2 area means fast arrival times. Professional, insured service with no unnecessary charges.",
    landmarks: ["Offerton Road", "Dialstone Lane", "Offerton Estate", "Cale Green Park"],
    responseTime: "20 minutes",
  },
  davenport: {
    name: "Davenport",
    postcode: "SK3",
    metaTitle: "Auto Locksmith Davenport | Car Keys SK3 24/7",
    metaDescription: "Auto locksmith in Davenport SK3. Car key replacement, emergency car lockout, key fob programming. Female locksmith. No call-out fee. 24/7. Call 07309903243.",
    heroDescription: "Trusted auto locksmith services in Davenport SK3, day and night.",
    description: "Our mobile auto locksmith covers Davenport and the surrounding SK3 area. Whether you need emergency car lockout help near Davenport Station, on Bramhall Lane South, or at home, we provide a fast, professional response. All car key types handled — remote keys, transponder keys, smart keys, and traditional cut keys — all programmed on-site.",
    nearbyAreas: ["Edgeley", "Bramhall", "Woodsmoor", "Offerton", "Stepping Hill"],
    whyChoose: "Davenport SK3 is a core service area for us — fast response guaranteed. Professional service with modern equipment and transparent pricing.",
    landmarks: ["Davenport Station", "Bramhall Lane South", "Davenport Park", "Lisvane Road"],
    responseTime: "20 minutes",
  },
  gatley: {
    name: "Gatley",
    postcode: "SK8",
    metaTitle: "Auto Locksmith Gatley | Car Key Replacement SK8",
    metaDescription: "Car locksmith in Gatley SK8. Emergency lockout, car key replacement, key fob programming. 24/7 service, no call-out fee. Fully insured. Call 07309903243.",
    heroDescription: "Reliable auto locksmith services in Gatley SK8, available 24 hours.",
    description: "Gatley residents can count on our professional auto locksmith service, day or night. From Gatley village centre to Gatley Road and beyond, our mobile locksmith arrives fully equipped to handle any car key or lockout situation. We serve all vehicle types and programming needs across the SK8 postcode.",
    nearbyAreas: ["Cheadle", "Cheadle Hulme", "East Didsbury", "Northenden", "Heald Green"],
    whyChoose: "Fast, professional service in Gatley SK8. Female auto locksmith, fully insured, no call-out fee, transparent upfront pricing.",
    landmarks: ["Gatley Village", "Gatley Road", "Gatley Station", "Stenner Woods"],
    responseTime: "20 minutes",
  },
  "heaton-mersey": {
    name: "Heaton Mersey",
    postcode: "SK4",
    metaTitle: "Auto Locksmith Heaton Mersey | Car Keys SK4",
    metaDescription: "Emergency auto locksmith in Heaton Mersey SK4. Car key replacement, lockout assistance, key fob programming. 24/7, no call-out fee. Call 07309903243.",
    heroDescription: "Professional auto locksmith in Heaton Mersey SK4, just minutes from Stockport.",
    description: "Heaton Mersey is one of our closest service areas, offering some of the fastest response times in our network. Locked out on Didsbury Road, near Heaton Mersey Park, or on any residential street in SK4? We'll arrive quickly with everything needed to resolve your car key issue on the spot. Available every hour of every day, 365 days a year.",
    nearbyAreas: ["Heaton Moor", "Heaton Norris", "Cheadle Heath", "Didsbury", "Burnage"],
    whyChoose: "Heaton Mersey SK4 is one of our fastest response areas. Expert auto locksmith, fully insured, no hidden fees.",
    landmarks: ["Didsbury Road", "Heaton Mersey Park", "Parrs Wood", "Mersey Vale"],
    responseTime: "15 minutes",
  },
  "heaton-moor": {
    name: "Heaton Moor",
    postcode: "SK4",
    metaTitle: "Auto Locksmith Heaton Moor | Car Lockout SK4 24/7",
    metaDescription: "Auto locksmith in Heaton Moor SK4. Emergency car lockout, key replacement, key fob programming. 24/7, no call-out fee. Fully insured. Call 07309903243.",
    heroDescription: "Expert auto locksmith services in Heaton Moor SK4, available around the clock.",
    description: "Our auto locksmith covers all of Heaton Moor and the SK4 area. Whether you're locked out near Heaton Moor Road, outside a restaurant on Shaw Road, or at home, our certified locksmith will be with you fast. We handle all modern car security systems — transponder keys, remote fobs, smart keys, and traditional keys — programmed on-site.",
    nearbyAreas: ["Heaton Mersey", "Heaton Norris", "Edgeley", "Didsbury", "Reddish"],
    whyChoose: "Close to Heaton Moor SK4, fast response guaranteed. Professional, damage-free locksmith service with no call-out fee.",
    landmarks: ["Heaton Moor Road", "Shaw Road", "Heaton Moor Park", "Heaton Moor Station"],
    responseTime: "15 minutes",
  },
  "high-lane": {
    name: "High Lane",
    postcode: "SK6",
    metaTitle: "Auto Locksmith High Lane | Car Key Replacement SK6",
    metaDescription: "Auto locksmith in High Lane SK6. Emergency car lockout, car key replacement, key fob programming. 24/7, no call-out fee. Fully insured. Call 07309903243.",
    heroDescription: "Dependable auto locksmith services in High Lane SK6, available 24/7.",
    description: "High Lane sits on the edge of the Peak District and our mobile auto locksmith serves the full SK6 area including High Lane village. Whether you're locked out at the junction of the A6 and Andrew Lane, near Windlehurst Road, or after a walk in the hills, we'll reach you and have your vehicle back in action quickly.",
    nearbyAreas: ["Hazel Grove", "Marple", "Poynton", "Disley", "Newtown"],
    whyChoose: "We know the roads in and around High Lane and can reach you without delay. Professional, fully insured mobile locksmith service.",
    landmarks: ["Andrew Lane", "A6 Buxton Road", "High Lane Village", "Windlehurst Road"],
    responseTime: "25 minutes",
  },
  portwood: {
    name: "Portwood",
    postcode: "SK1",
    metaTitle: "Auto Locksmith Portwood | Car Keys Stockport SK1",
    metaDescription: "Auto locksmith in Portwood SK1, Stockport. Car key replacement, emergency lockout. Minutes from town centre. No call-out fee. 24/7. Call 07309903243.",
    heroDescription: "Fast auto locksmith services in Portwood SK1, right next to Stockport town centre.",
    description: "Portwood is one of our quickest response areas, being so close to Stockport town centre. Industrial estates, retail parks, or residential streets — wherever you're locked out in Portwood, we'll be there rapidly. We handle all car key types and models, providing on-site key cutting and programming services.",
    nearbyAreas: ["Stockport Town Centre", "Heaton Norris", "Reddish", "Brinnington", "Edgeley"],
    whyChoose: "One of our fastest response areas in SK1. Professional locksmith service, no call-out fee, transparent pricing.",
    landmarks: ["Portwood Retail Park", "Tiviot Dale", "Portwood Roundabout", "River Goyt"],
    responseTime: "15 minutes",
  },
  woodsmoor: {
    name: "Woodsmoor",
    postcode: "SK2",
    metaTitle: "Auto Locksmith Woodsmoor | Car Key Service SK2",
    metaDescription: "Car locksmith in Woodsmoor SK2. Emergency lockout, car key replacement, key programming. 24/7 service, no call-out fee. Fully insured. Call 07309903243.",
    heroDescription: "Trusted auto locksmith services in Woodsmoor SK2, available 24 hours a day.",
    description: "Woodsmoor is a quiet, leafy suburb of Stockport and we know its streets well. Locked out on Woodsmoor Lane, near Woodsmoor Station, or anywhere in the SK2 area? Our certified mobile locksmith will be with you quickly, fully equipped to cut and programme keys for any vehicle on the spot.",
    nearbyAreas: ["Hazel Grove", "Bramhall", "Davenport", "Offerton", "Stepping Hill"],
    whyChoose: "Experienced with the Woodsmoor SK2 area. Fast arrival, professional damage-free service, and clear honest pricing.",
    landmarks: ["Woodsmoor Lane", "Woodsmoor Station", "Cale Green Park", "A6 London Road"],
    responseTime: "20 minutes",
  },
  "stepping-hill": {
    name: "Stepping Hill",
    postcode: "SK2",
    metaTitle: "Auto Locksmith Stepping Hill | Car Keys SK2 24/7",
    metaDescription: "Auto locksmith near Stepping Hill Hospital SK2. Emergency lockout, car key replacement. 24/7, no call-out fee. Fast response. Call Vikki Heaton 07309903243.",
    heroDescription: "Rapid auto locksmith services in Stepping Hill SK2, covering the hospital and surrounding areas.",
    description: "Stepping Hill is home to one of Stockport's main hospitals, and we understand that car lockouts here can be especially stressful. Our mobile locksmith provides rapid response to Stepping Hill Hospital car park, Poplar Grove, Dialstone Lane, and all surrounding streets. We never charge a call-out fee and always provide an upfront price before starting any work.",
    nearbyAreas: ["Hazel Grove", "Offerton", "Woodsmoor", "High Lane", "Davenport"],
    whyChoose: "Fast response to Stepping Hill SK2. We know this can be an urgent situation. Honest pricing, no call-out fee, fully insured service.",
    landmarks: ["Stepping Hill Hospital", "Poplar Grove", "Dialstone Lane", "Lisvane Road"],
    responseTime: "20 minutes",
  },
  adswood: {
    name: "Adswood",
    postcode: "SK3",
    metaTitle: "Auto Locksmith Adswood | Car Key Replacement SK3",
    metaDescription: "Auto locksmith in Adswood SK3. Car key replacement, emergency lockout, key fob programming. 24/7, no call-out fee. Fully insured. Call 07309903243.",
    heroDescription: "Reliable auto locksmith services in Adswood SK3, minutes from Stockport centre.",
    description: "Adswood is a residential area of Stockport just minutes from the town centre, making it one of our fastest response zones. Whether you're locked out on Adswood Road, near Adswood Park, or on any local street, our mobile locksmith will be with you quickly. Full car key replacement and programming service available on-site.",
    nearbyAreas: ["Edgeley", "Davenport", "Cheadle Heath", "Stockport Town Centre", "Heaton Norris"],
    whyChoose: "One of our closest service areas. Fast response, professional service, transparent pricing. Fully insured female auto locksmith.",
    landmarks: ["Adswood Road", "Adswood Park", "Adswood Estate", "A34 Kingsway"],
    responseTime: "15 minutes",
  },
  brinnington: {
    name: "Brinnington",
    postcode: "SK5",
    metaTitle: "Auto Locksmith Brinnington | Car Keys SK5 24/7",
    metaDescription: "Emergency auto locksmith in Brinnington SK5. Car key replacement, lockout assistance, key programming. 24/7, no call-out fee. Fully insured. Call 07309903243.",
    heroDescription: "Professional auto locksmith services in Brinnington SK5, available 24/7.",
    description: "Brinnington is a residential area in east Stockport that we cover as part of our core service zone. Locked out in Brinnington? Our mobile auto locksmith serves all streets including Brinnington Road, Ladybridge Road, and the surrounding area. We handle all car makes and models with fully equipped on-site key cutting and programming.",
    nearbyAreas: ["Reddish", "Bredbury", "Portwood", "Heaton Norris", "Woodley"],
    whyChoose: "Brinnington SK5 is within our fast-response zone. Certified, fully insured auto locksmith. No call-out fee, upfront pricing.",
    landmarks: ["Brinnington Road", "Ladybridge Road", "Brinnington Park", "Goyt Valley"],
    responseTime: "20 minutes",
  },
}

export const stockportSubAreaSlugs = Object.keys(stockportSubAreaData)
