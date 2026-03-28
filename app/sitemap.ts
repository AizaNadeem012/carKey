import type { MetadataRoute } from "next"
import { carBrandsData } from "@/carKey/data/carBrands"

const SITE_URL = "https://carkeysinstockport.co.uk"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const corePriority: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      priority: 1.0,
      changeFrequency: "weekly",
      lastModified: now,
    },
  ]

  const servicePages: MetadataRoute.Sitemap = [
    "/services/car-key-replacement",
    "/services/lockout-assistance",
    "/services/auto-keys-programming",
    "/services/ignition-repair",
    "/services/emergency-service",
    "/services/van-lockout",
    "/services/key-fob-programming",
    "/services/remote-key-fobs",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    priority: 0.9,
    changeFrequency: "monthly" as const,
    lastModified: now,
  }))

  const servicesHub: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/services`,
      priority: 0.85,
      changeFrequency: "monthly",
      lastModified: now,
    },
  ]

  const primaryAreaPage: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/areas/stockport`,
      priority: 0.95,
      changeFrequency: "weekly",
      lastModified: now,
    },
  ]

  const subAreaPages: MetadataRoute.Sitemap = [
    "/areas/stockport/cheadle",
    "/areas/stockport/bramhall",
    "/areas/stockport/hazel-grove",
    "/areas/stockport/marple",
    "/areas/stockport/romiley",
    "/areas/stockport/bredbury",
    "/areas/stockport/reddish",
    "/areas/stockport/edgeley",
    "/areas/stockport/offerton",
    "/areas/stockport/davenport",
    "/areas/stockport/gatley",
    "/areas/stockport/heaton-mersey",
    "/areas/stockport/heaton-moor",
    "/areas/stockport/high-lane",
    "/areas/stockport/portwood",
    "/areas/stockport/woodsmoor",
    "/areas/stockport/stepping-hill",
    "/areas/stockport/adswood",
    "/areas/stockport/brinnington",
    "/areas/stockport/manchester",
    "/areas/stockport/bury",
    "/areas/stockport/oldham",
    "/areas/stockport/rochdale",
    "/areas/stockport/salford",
    "/areas/stockport/tameside",
    "/areas/stockport/trafford",
    "/areas/stockport/denton",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
    lastModified: now,
  }))

  const supportPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/about`, priority: 0.6, changeFrequency: "monthly" as const, lastModified: now },
    { url: `${SITE_URL}/contact`, priority: 0.7, changeFrequency: "monthly" as const, lastModified: now },
    { url: `${SITE_URL}/faq`, priority: 0.7, changeFrequency: "monthly" as const, lastModified: now },
    { url: `${SITE_URL}/blog`, priority: 0.6, changeFrequency: "weekly" as const, lastModified: now },
    { url: `${SITE_URL}/blog/cheap-locksmith-denton-24-hours`, priority: 0.7, changeFrequency: "monthly" as const, lastModified: now },
  ]

  // /cars hub + one page per brand
  const carsHub: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/cars`,
      priority: 0.9,
      changeFrequency: "weekly",
      lastModified: now,
    },
  ]

  const brandPages: MetadataRoute.Sitemap = carBrandsData.map((brand) => ({
    url: `${SITE_URL}/cars/${brand.slug}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
    lastModified: now,
  }))

  return [
    ...corePriority,
    ...servicesHub,
    ...servicePages,
    ...primaryAreaPage,
    ...subAreaPages,
    ...carsHub,
    ...brandPages,
    ...supportPages,
  ]
}
