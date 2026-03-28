/** @type {import('next-sitemap').IConfig} */

// All 45 car brand slugs — kept in sync with /data/carBrands.ts
const CAR_BRAND_SLUGS = [
  // European
  "alfa-romeo", "audi", "bmw", "citroen", "dacia", "ds-automobiles",
  "fiat", "ford", "honda", "hyundai", "jaguar", "jeep", "kia",
  "land-rover", "lexus", "mazda", "mercedes-benz", "mini", "mitsubishi",
  "nissan", "vauxhall", "peugeot", "porsche", "renault", "seat", "skoda",
  "smart", "subaru", "tesla", "toyota", "volkswagen", "volvo",
  // British
  "aston-martin", "bentley", "mg", "mclaren", "rolls-royce",
  // Asian & Other
  "byd", "chevrolet", "chrysler", "dodge", "haval", "isuzu",
  "maserati", "suzuki",
]

module.exports = {
  siteUrl: "https://carkeysinstockport.co.uk",
  generateRobotsTxt: true,
  exclude: ["/api/*", "/admin/*"],
  additionalPaths: async (config) => {
    const transforms = [
      // Service pages
      await config.transform(config, "/services/car-key-replacement"),
      await config.transform(config, "/services/auto-keys-programming"),
      await config.transform(config, "/services/lockout-assistance"),
      await config.transform(config, "/services/key-fob-programming"),
      await config.transform(config, "/services/emergency-service"),
      await config.transform(config, "/services/ignition-repair"),
      await config.transform(config, "/services/remote-key-fobs"),
      await config.transform(config, "/services/van-lockout"),
      await config.transform(config, "/services/testimonials"),
      await config.transform(config, "/services/terms"),

      // Area pages
      await config.transform(config, "/areas/stockport"),
      await config.transform(config, "/areas/cheadle"),
      await config.transform(config, "/areas/bramhall"),
      await config.transform(config, "/areas/stockport/bury"),
      await config.transform(config, "/areas/stockport/manchester"),
      await config.transform(config, "/areas/stockport/oldham"),
      await config.transform(config, "/areas/stockport/rochdale"),
      await config.transform(config, "/areas/stockport/salford"),
      await config.transform(config, "/areas/stockport/tameside"),
      await config.transform(config, "/areas/stockport/trafford"),

      // Cars hub
      await config.transform(config, "/cars"),

      // Other main pages
      await config.transform(config, "/about"),
      await config.transform(config, "/contact"),
      await config.transform(config, "/faq"),
      await config.transform(config, "/terms-and-conditions"),
      await config.transform(config, "/privacy-policy"),
    ]

    // All 45 brand pages
    const brandTransforms = await Promise.all(
      CAR_BRAND_SLUGS.map((slug) =>
        config.transform(config, `/cars/${slug}`)
      )
    )

    return [...transforms, ...brandTransforms]
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
    additionalSitemaps: ["https://carkeysinstockport.co.uk/sitemap.xml"],
  },
}
