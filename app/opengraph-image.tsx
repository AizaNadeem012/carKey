import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt =
  "Vikki Heaton ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Female Auto Locksmith Stockport | Car Keys Stockport"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: 1200,
          height: 630,
          backgroundColor: "#0f172a",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Left panel ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â photo placeholder with gradient overlay */}
        <div
          style={{
            display: "flex",
            width: 600,
            height: 630,
            backgroundColor: "#1e293b",
            position: "relative",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://carkeysinstockport.co.uk/images/vikki-heaton-auto-locksmith-stockport.jpg"
            alt="Vikki Heaton"
            width={600}
            height={630}
            style={{ objectFit: "cover", objectPosition: "top" }}
          />
          {/* Gradient fade from photo to right panel */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: 80,
              height: 630,
              background: "linear-gradient(to right, transparent, #0f172a)",
            }}
          />
        </div>

        {/* Right panel ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â branding */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 600,
            height: 630,
            padding: "48px 52px",
            backgroundColor: "#0f172a",
          }}
        >
          {/* Top accent */}
          <div
            style={{
              width: 60,
              height: 5,
              backgroundColor: "#f97316",
              borderRadius: 3,
              marginBottom: 32,
            }}
          />

          {/* Brand name */}
          <div
            style={{
              fontSize: 44,
              fontWeight: 900,
              color: "white",
              lineHeight: 1.1,
              marginBottom: 4,
            }}
          >
            Car Keys
          </div>
          <div
            style={{
              fontSize: 44,
              fontWeight: 900,
              color: "#f97316",
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            Stockport
          </div>

          {/* Divider */}
          <div
            style={{
              width: 100,
              height: 3,
              backgroundColor: "#f97316",
              borderRadius: 2,
              marginBottom: 20,
            }}
          />

          {/* Vikki name */}
          <div style={{ fontSize: 22, fontWeight: 700, color: "white", marginBottom: 4 }}>
            Vikki Heaton
          </div>
          <div style={{ fontSize: 16, color: "#94a3b8", marginBottom: 28 }}>
            Auto Locksmith Specialist
          </div>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              gap: 0,
              backgroundColor: "#1e293b",
              borderRadius: 12,
              padding: "14px 0",
              marginBottom: 20,
            }}
          >
            {[
              { value: "24/7", label: "Available" },
              { value: "25min", label: "Response" },
              { value: "No Fee", label: "Call-Out" },
              { value: "5ÃƒÆ’Ã‚Â¢Ãƒâ€¹Ã…â€œÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¦", label: "Rated" },
            ].map(({ value, label }, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  flex: 1,
                  borderRight: i < 3 ? "1px solid #334155" : "none",
                }}
              >
                <div style={{ fontSize: 20, fontWeight: 900, color: "#f97316" }}>
                  {value}
                </div>
                <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 2 }}>
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* Phone CTA */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f97316",
              borderRadius: 12,
              padding: "16px 24px",
              fontSize: 24,
              fontWeight: 900,
              color: "white",
              marginBottom: 20,
            }}
          >
            ÃƒÆ’Ã‚Â°Ãƒâ€¦Ã‚Â¸ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œÃƒâ€¦Ã‚Â¾ 07309 903243
          </div>

          {/* Location */}
          <div style={{ fontSize: 13, color: "#475569", textAlign: "center" }}>
            Stockport &amp; Greater Manchester
          </div>

          {/* Bottom orange stripe */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 600,
              width: 600,
              height: 5,
              backgroundColor: "#f97316",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
