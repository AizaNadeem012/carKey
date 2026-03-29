"use client"

import { useEffect } from "react"

export default function ContactForm() {
  useEffect(() => {
    // Google Form is embedded via iframe
    // No additional setup needed
  }, [])

  return (
    <div className="w-full">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScIlH0fpzh4lb84t_jR92V_eXNO1mQdOfXto3BS5pKfBSCBUQ/viewform?embedded=true"
        width="100%"
        height="800"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        className="w-full bg-transparent"
        style={{ minHeight: "600px" }}
      >
        LoadingÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¦
      </iframe>
    </div>
  )
}
