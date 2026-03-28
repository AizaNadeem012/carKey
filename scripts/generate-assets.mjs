/**
 * Asset Generator — Car Keys Stockport
 * Generates all favicons + OG image from Vikki's photo using sharp.
 * Run: node scripts/generate-assets.mjs
 */

import sharp from "sharp"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, "..")
const PUBLIC = path.join(ROOT, "public")
const IMAGES = path.join(PUBLIC, "images")

// Source photo (double-extension as uploaded)
const SOURCE_DOUBLE = path.join(IMAGES, "vikki-heaton-auto-locksmith-stockport.jpg.jpg")
const SOURCE = path.join(IMAGES, "vikki-heaton-auto-locksmith-stockport.jpg")

// ── Step 0: Ensure correct filename exists ────────────────────────────────────
if (!fs.existsSync(SOURCE) && fs.existsSync(SOURCE_DOUBLE)) {
  fs.copyFileSync(SOURCE_DOUBLE, SOURCE)
  console.log("✅ Copied source photo to correct filename")
} else if (fs.existsSync(SOURCE)) {
  console.log("✅ Source photo already at correct path")
} else {
  console.error("❌ Source photo not found:", SOURCE_DOUBLE)
  process.exit(1)
}

// ── Helper: circular SVG mask ──────────────────────────────────────────────────
const circleMask = (size) =>
  Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
       <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="white"/>
     </svg>`
  )

// ── Step 1: Generate favicons (circular crop, face-top) ───────────────────────
const FAVICON_SIZES = [
  { name: "favicon-32.png",        size: 32  },
  { name: "favicon-96.png",        size: 96  },
  { name: "favicon-192.png",       size: 192 },
  { name: "favicon-512.png",       size: 512 },
  { name: "apple-touch-icon.png",  size: 180 },
]

async function generateFavicons() {
  // Get source image dimensions to calculate face crop
  const meta = await sharp(SOURCE).metadata()
  const { width: W, height: H } = meta

  // Crop the top portion of the image to focus on face/head
  // Take roughly the top 55% of height, centered horizontally
  const cropH = Math.round(H * 0.55)
  const cropW = Math.min(W, cropH) // square crop
  const cropLeft = Math.round((W - cropW) / 2)
  const cropTop = 0

  console.log(`\nSource image: ${W}×${H}`)
  console.log(`Face crop region: ${cropW}×${cropH} from (${cropLeft}, ${cropTop})`)

  for (const { name, size } of FAVICON_SIZES) {
    const outPath = path.join(PUBLIC, name)

    await sharp(SOURCE)
      .extract({ left: cropLeft, top: cropTop, width: cropW, height: cropH })
      .resize(size, size, { fit: "cover", position: "top" })
      .composite([{ input: circleMask(size), blend: "dest-in" }])
      .png({ quality: 90, compressionLevel: 9 })
      .toFile(outPath)

    console.log(`✅ ${name} (${size}×${size})`)
  }
}

// ── Step 2: Generate favicon.ico (32×32 PNG saved as .ico via shell workaround)
// Modern browsers accept a 32×32 PNG named favicon.ico — we generate one.
async function generateIco() {
  const outPath = path.join(PUBLIC, "favicon.ico")
  const meta = await sharp(SOURCE).metadata()
  const { width: W, height: H } = meta
  const cropH = Math.round(H * 0.55)
  const cropW = Math.min(W, cropH)
  const cropLeft = Math.round((W - cropW) / 2)

  await sharp(SOURCE)
    .extract({ left: cropLeft, top: 0, width: cropW, height: cropH })
    .resize(32, 32, { fit: "cover", position: "top" })
    .composite([{ input: circleMask(32), blend: "dest-in" }])
    .png()
    .toFile(outPath)

  console.log(`✅ favicon.ico (32×32 PNG-in-ICO)`)
}

// ── Step 3: Generate OG image (1200×630) ─────────────────────────────────────
// Layout: Vikki photo fills left 50% | branded text panel on right 50%
async function generateOgImage() {
  const OG_W = 1200
  const OG_H = 630
  const HALF = OG_W / 2 // 600

  const outPath = path.join(PUBLIC, "og-image.jpg")

  // Left panel: Vikki's photo resized/cropped to 600×630
  const leftPanel = await sharp(SOURCE)
    .resize(HALF, OG_H, { fit: "cover", position: "top" })
    .toBuffer()

  // Right panel: dark slate background + brand text as SVG
  const ORANGE = "#f97316"
  const rightSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="${HALF}" height="${OG_H}">
    <!-- Background -->
    <rect width="${HALF}" height="${OG_H}" fill="#0f172a"/>

    <!-- Top accent bar -->
    <rect width="${HALF}" height="6" fill="${ORANGE}"/>

    <!-- Logo circle (initials) -->
    <circle cx="80" cy="120" r="42" fill="${ORANGE}" opacity="0.15"/>
    <circle cx="80" cy="120" r="36" fill="${ORANGE}" opacity="0.25"/>
    <text x="80" y="128" font-family="system-ui, sans-serif" font-size="24"
          font-weight="900" fill="${ORANGE}" text-anchor="middle">VH</text>

    <!-- Brand name -->
    <text x="60" y="210" font-family="system-ui, sans-serif" font-size="38"
          font-weight="900" fill="white">Car Keys</text>
    <text x="60" y="256" font-family="system-ui, sans-serif" font-size="38"
          font-weight="900" fill="${ORANGE}">Stockport</text>

    <!-- Divider -->
    <rect x="60" y="278" width="120" height="3" fill="${ORANGE}" rx="2"/>

    <!-- Vikki name -->
    <text x="60" y="324" font-family="system-ui, sans-serif" font-size="20"
          font-weight="700" fill="white">Vikki Heaton</text>
    <text x="60" y="352" font-family="system-ui, sans-serif" font-size="17"
          font-weight="400" fill="#94a3b8">Auto Locksmith Specialist</text>

    <!-- Stats row -->
    <rect x="60" y="378" width="460" height="62" rx="10" fill="#1e293b"/>

    <text x="110" y="402" font-family="system-ui, sans-serif" font-size="22"
          font-weight="900" fill="${ORANGE}" text-anchor="middle">24/7</text>
    <text x="110" y="422" font-family="system-ui, sans-serif" font-size="11"
          fill="#94a3b8" text-anchor="middle">Available</text>

    <rect x="190" y="386" width="1" height="44" fill="#334155"/>

    <text x="248" y="402" font-family="system-ui, sans-serif" font-size="22"
          font-weight="900" fill="${ORANGE}" text-anchor="middle">25min</text>
    <text x="248" y="422" font-family="system-ui, sans-serif" font-size="11"
          fill="#94a3b8" text-anchor="middle">Response</text>

    <rect x="306" y="386" width="1" height="44" fill="#334155"/>

    <text x="368" y="402" font-family="system-ui, sans-serif" font-size="22"
          font-weight="900" fill="${ORANGE}" text-anchor="middle">No Fee</text>
    <text x="368" y="422" font-family="system-ui, sans-serif" font-size="11"
          fill="#94a3b8" text-anchor="middle">Call-Out</text>

    <rect x="430" y="386" width="1" height="44" fill="#334155"/>

    <text x="476" y="402" font-family="system-ui, sans-serif" font-size="22"
          font-weight="900" fill="${ORANGE}" text-anchor="middle">5★</text>
    <text x="476" y="422" font-family="system-ui, sans-serif" font-size="11"
          fill="#94a3b8" text-anchor="middle">Rated</text>

    <!-- Phone CTA -->
    <rect x="60" y="460" width="460" height="54" rx="10" fill="${ORANGE}"/>
    <text x="290" y="492" font-family="system-ui, sans-serif" font-size="22"
          font-weight="900" fill="white" text-anchor="middle">📞 07309 903243</text>

    <!-- Location -->
    <text x="290" y="548" font-family="system-ui, sans-serif" font-size="14"
          fill="#64748b" text-anchor="middle">Stockport &amp; Greater Manchester</text>

    <!-- Bottom orange stripe -->
    <rect y="${OG_H - 6}" width="${HALF}" height="6" fill="${ORANGE}"/>
  </svg>`

  const rightPanel = await sharp(Buffer.from(rightSvg))
    .resize(HALF, OG_H)
    .png()
    .toBuffer()

  // Composite: place left panel at x=0, right panel at x=600
  await sharp({
    create: { width: OG_W, height: OG_H, channels: 3, background: "#0f172a" },
  })
    .composite([
      { input: leftPanel,  left: 0,    top: 0 },
      { input: rightPanel, left: HALF, top: 0 },
    ])
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(outPath)

  console.log(`✅ og-image.jpg (${OG_W}×${OG_H})`)
}

// ── Step 4: Favicon SVG (scalable, brand orange + initials) ──────────────────
function generateFaviconSvg() {
  const svgPath = path.join(PUBLIC, "favicon.svg")
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="50" fill="#f97316"/>
  <text x="50" y="66" font-family="system-ui, Arial, sans-serif"
        font-size="42" font-weight="900" fill="white"
        text-anchor="middle">VH</text>
</svg>`
  fs.writeFileSync(svgPath, svg)
  console.log(`✅ favicon.svg (scalable SVG)`)
}

// ── Run all ───────────────────────────────────────────────────────────────────
console.log("\n🎨 Car Keys Stockport — Asset Generator\n")

try {
  await generateFavicons()
  await generateIco()
  await generateOgImage()
  generateFaviconSvg()
  console.log("\n🚀 All assets generated successfully!\n")
  console.log("Files written to:")
  console.log("  /public/favicon.ico")
  console.log("  /public/favicon.svg")
  console.log("  /public/favicon-32.png")
  console.log("  /public/favicon-96.png")
  console.log("  /public/favicon-192.png")
  console.log("  /public/favicon-512.png")
  console.log("  /public/apple-touch-icon.png")
  console.log("  /public/og-image.jpg\n")
} catch (err) {
  console.error("❌ Error:", err.message)
  process.exit(1)
}
