"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Lock, User, ArrowLeft, Key } from "lucide-react"

export default function ChangePassword() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    oldUsername: "",
    oldPassword: "",
    newUsername: "",
    newPassword: "",
    confirmPassword: "",
  })
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Validation
    if (!formData.oldUsername || !formData.oldPassword) {
      setError("Please enter your current username and password")
      return
    }

    if (!formData.newUsername || !formData.newPassword) {
      setError("Please enter new username and password")
      return
    }

    if (formData.newPassword.length < 6) {
      setError("New password must be at least 6 characters long")
      return
    }

    if (formData.newPassword !== formData.confirmPassword) {
      setError("New passwords do not match")
      return
    }

    setIsLoading(true)

    // Simulate password change
    // In production, this would validate old credentials and update new ones
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      console.log("Password change requested:")
      console.log("Old Username:", formData.oldUsername)
      console.log("Old Password:", formData.oldPassword)
      console.log("New Username:", formData.newUsername)
      console.log("New Password:", formData.newPassword)
      
      // Store in localStorage for demo
      localStorage.setItem("adminUsername", formData.newUsername)
      
      // Redirect to login
      setTimeout(() => {
        router.push("/admin/login")
      }, 1000)
    } catch (err) {
      setError("Failed to change password. Please check your credentials.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <Link
          href="/admin/login"
          className="flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Login
        </Link>

        {/* Change Password Card */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Key className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Change Password</h1>
            <p className="text-gray-300">Update your username and password</p>
          </div>

          {/* Change Password Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Current Credentials Section */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-orange-400 uppercase tracking-wide">Current Credentials</h3>
              
              <div>
                <label htmlFor="oldUsername" className="block text-sm font-medium text-white mb-2">
                  Current Username
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="oldUsername"
                    name="oldUsername"
                    required
                    value={formData.oldUsername}
                    onChange={(e) => setFormData({ ...formData, oldUsername: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-orange-400 text-white placeholder-gray-400"
                    placeholder="admin@carkeysinstockport.co.uk"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="oldPassword" className="block text-sm font-medium text-white mb-2">
                  Current Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    id="oldPassword"
                    name="oldPassword"
                    required
                    value={formData.oldPassword}
                    onChange={(e) => setFormData({ ...formData, oldPassword: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-orange-400 text-white placeholder-gray-400"
                    placeholder="ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¢"
                  />
                </div>
              </div>
            </div>

            {/* New Credentials Section */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <h3 className="text-sm font-semibold text-green-400 uppercase tracking-wide">New Credentials</h3>
              
              <div>
                <label htmlFor="newUsername" className="block text-sm font-medium text-white mb-2">
                  New Username
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="newUsername"
                    name="newUsername"
                    required
                    value={formData.newUsername}
                    onChange={(e) => setFormData({ ...formData, newUsername: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-green-400 text-white placeholder-gray-400"
                    placeholder="Enter new username"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-white mb-2">
                  New Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    required
                    value={formData.newPassword}
                    onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-green-400 text-white placeholder-gray-400"
                    placeholder="ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¢"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-2">Must be at least 6 characters</p>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-white mb-2">
                  Confirm New Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    required
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-green-400 text-white placeholder-gray-400"
                    placeholder="ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¢"
                  />
                </div>
              </div>
            </div>

            {error && (
              <div className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-all duration-200"
            >
              {isLoading ? "Changing..." : "Change Password"}
            </button>
          </form>

          {/* Info Box */}
          <div className="mt-6 p-4 bg-blue-500/20 rounded-lg border border-blue-500/30">
            <p className="text-xs text-blue-200 mb-2 font-semibold">ÃƒÆ’Ã‚Â°Ãƒâ€¦Ã‚Â¸ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ Security Notice:</p>
            <p className="text-xs text-blue-300">
              Enter your current credentials to verify your identity, then set your new username and password.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
