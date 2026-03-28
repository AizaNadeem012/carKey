import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      // ─── Existing area hierarchy redirects ───────────────────────────────
      {
        source: '/areas/manchester',
        destination: '/areas/stockport/manchester',
        permanent: true,
      },
      {
        source: '/areas/bury',
        destination: '/areas/stockport/bury',
        permanent: true,
      },
      {
        source: '/areas/oldham',
        destination: '/areas/stockport/oldham',
        permanent: true,
      },
      {
        source: '/areas/rochdale',
        destination: '/areas/stockport/rochdale',
        permanent: true,
      },
      {
        source: '/areas/tameside',
        destination: '/areas/stockport/tameside',
        permanent: true,
      },
      {
        source: '/areas/trafford',
        destination: '/areas/stockport/trafford',
        permanent: true,
      },
      {
        source: '/areas/salford',
        destination: '/areas/stockport/salford',
        permanent: true,
      },

      // ─── Root-level orphan location pages → proper hierarchy ─────────────
      {
        source: '/stockport',
        destination: '/areas/stockport',
        permanent: true,
      },
      {
        source: '/bramhall',
        destination: '/areas/stockport/bramhall',
        permanent: true,
      },
      {
        source: '/cheadle',
        destination: '/areas/stockport/cheadle',
        permanent: true,
      },
      {
        source: '/hazel-grove',
        destination: '/areas/stockport/hazel-grove',
        permanent: true,
      },
      {
        source: '/manchester',
        destination: '/areas/stockport/manchester',
        permanent: true,
      },
      {
        source: '/bury',
        destination: '/areas/stockport/bury',
        permanent: true,
      },
      {
        source: '/oldham',
        destination: '/areas/stockport/oldham',
        permanent: true,
      },
      {
        source: '/rochdale',
        destination: '/areas/stockport/rochdale',
        permanent: true,
      },
      {
        source: '/salford',
        destination: '/areas/stockport/salford',
        permanent: true,
      },
      {
        source: '/tameside',
        destination: '/areas/stockport/tameside',
        permanent: true,
      },
      {
        source: '/trafford',
        destination: '/areas/stockport/trafford',
        permanent: true,
      },

      // ─── auto-locksmith-near-me-* → /areas/stockport/* ───────────────────
      {
        source: '/auto-locksmith-near-me-adswood',
        destination: '/areas/stockport/adswood',
        permanent: true,
      },
      {
        source: '/auto-locksmith-near-me-bramhall',
        destination: '/areas/stockport/bramhall',
        permanent: true,
      },
      {
        source: '/auto-locksmith-near-me-bredbury',
        destination: '/areas/stockport/bredbury',
        permanent: true,
      },
      {
        source: '/auto-locksmith-near-me-brinnington',
        destination: '/areas/stockport/brinnington',
        permanent: true,
      },
      {
        source: '/auto-locksmith-near-me-cheadle',
        destination: '/areas/stockport/cheadle',
        permanent: true,
      },
      {
        source: '/auto-locksmith-near-me-davenport',
        destination: '/areas/stockport/davenport',
        permanent: true,
      },
      {
        source: '/auto-locksmith-near-me-edgeley',
        destination: '/areas/stockport/edgeley',
        permanent: true,
      },
      {
        source: '/auto-locksmith-near-me-gatley',
        destination: '/areas/stockport/gatley',
        permanent: true,
      },
      {
        source: '/auto-locksmith-near-me-hazel-grove',
        destination: '/areas/stockport/hazel-grove',
        permanent: true,
      },
      {
        source: '/auto-locksmith-near-me-heaton-mersey',
        destination: '/areas/stockport/heaton-mersey',
        permanent: true,
      },
      {
        source: '/auto-locksmith-near-me-heaton-moor',
        destination: '/areas/stockport/heaton-moor',
        permanent: true,
      },
      {
        source: '/auto-locksmith-near-me-high-lane',
        destination: '/areas/stockport/high-lane',
        permanent: true,
      },
      {
        source: '/auto-locksmith-near-me-marple',
        destination: '/areas/stockport/marple',
        permanent: true,
      },
      {
        source: '/auto-locksmith-near-me-offerton',
        destination: '/areas/stockport/offerton',
        permanent: true,
      },
      {
        source: '/auto-locksmith-near-me-portwood',
        destination: '/areas/stockport/portwood',
        permanent: true,
      },
      {
        source: '/auto-locksmith-near-me-reddish',
        destination: '/areas/stockport/reddish',
        permanent: true,
      },
      {
        source: '/auto-locksmith-near-me-romiley',
        destination: '/areas/stockport/romiley',
        permanent: true,
      },
      {
        source: '/auto-locksmith-near-me-stepping-hill',
        destination: '/areas/stockport/stepping-hill',
        permanent: true,
      },
      {
        source: '/auto-locksmith-near-me-stockport-town-centre',
        destination: '/areas/stockport',
        permanent: true,
      },
      {
        source: '/auto-locksmith-near-me-woodsmoor',
        destination: '/areas/stockport/woodsmoor',
        permanent: true,
      },

      // ─── Duplicate service pages ──────────────────────────────────────────
      {
        source: '/replacement-car-keys-stockport',
        destination: '/services/car-key-replacement',
        permanent: true,
      },

      // ─── Off-target / wrong-city pages ───────────────────────────────────
      {
        source: '/gosport',
        destination: '/',
        permanent: true,
      },
      {
        source: '/lost-car-keys-gosport',
        destination: '/services/car-key-replacement',
        permanent: true,
      },
      {
        source: '/cheshire-car-keys',
        destination: '/areas/stockport',
        permanent: true,
      },

      // ─── Duplicate legal / utility pages ─────────────────────────────────
      {
        source: '/services/terms',
        destination: '/terms-and-conditions',
        permanent: true,
      },

      // ─── Broken footer link ───────────────────────────────────────────────
      {
        source: '/testimonials',
        destination: '/services/testimonials',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
