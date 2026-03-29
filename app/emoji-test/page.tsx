import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Emoji Test | Car Keys Stockport",
  description: "Test page for emoji encoding",
}

export default function EmojiTest() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold">🔧 Emoji Encoding Test</h1>
        
        <section className="bg-slate-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Common Emojis</h2>
          <div className="grid grid-cols-4 gap-4 text-center">
            <div>📞 Phone</div>
            <div>🔒 Lock</div>
            <div>⭐ Star</div>
            <div>✅ Check</div>
            <div>❌ Cross</div>
            <div>⚠️ Warning</div>
            <div>ℹ️ Info</div>
            <div>🔑 Key</div>
            <div>🚗 Car</div>
            <div>🏠 Home</div>
            <div>💰 Money</div>
            <div>🎯 Target</div>
          </div>
        </section>

        <section className="bg-slate-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Special Characters</h2>
          <div className="space-y-2">
            <p>Bullet Point: •</p>
            <p>Em Dash: —</p>
            <p>En Dash: –</p>
            <p>Pound Sign: £</p>
            <p>Euro: €</p>
            <p>Yen: ¥</p>
            <p>Copyright: ©</p>
            <p>Registered: ®</p>
            <p>Trademark: ™</p>
          </div>
        </section>

        <section className="bg-slate-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Arrows & Symbols</h2>
          <div className="grid grid-cols-4 gap-4 text-center">
            <div>→ Right Arrow</div>
            <div>← Left Arrow</div>
            <div>↑ Up Arrow</div>
            <div>↓ Down Arrow</div>
            <div>⇒ Implies</div>
            <div>⇐ Implied By</div>
            <div>✓ Check Mark</div>
            <div>✗ X Mark</div>
          </div>
        </section>

        <section className="bg-slate-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Test Strings</h2>
          <div className="space-y-2 font-mono text-sm">
            <p>Vikki Heaton – Auto Locksmith</p>
            <p>Available 24/7 • No Call-Out Fee</p>
            <p>Call 📞 07309 903243</p>
            <p>Price: £150</p>
            <p>Rating: ⭐⭐⭐⭐⭐</p>
            <p>Status: ✅ Completed</p>
          </div>
        </section>

        <section className="bg-green-600/20 border border-green-500 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">✅ If you see all emojis correctly:</h2>
          <p>Your browser and server are properly handling UTF-8!</p>
        </section>

        <section className="bg-red-600/20 border border-red-500 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">❌ If you see strange characters like:</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>ÃƒÆ'Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â£ instead of £</li>
            <li>ÃƒÆ'Ã‚Â°Ãƒâ€¦Ã‚Â¸ instead of 📞</li>
            <li>Ã¢â‚¬Â¢ instead of •</li>
            <li>ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“ instead of —</li>
          </ul>
          <p className="mt-4">Then your files have encoding corruption!</p>
        </section>
      </div>
    </div>
  )
}
