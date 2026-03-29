import { useEffect } from 'react'
import { toast } from './use-toast'

interface KeyboardShortcutOptions {
  enableSearch?: boolean
  enableNavigation?: boolean
  enableActions?: boolean
  customShortcuts?: Record<string, () => void>
}

export function useKeyboardShortcuts(options: KeyboardShortcutOptions = {}) {
  const {
    enableSearch = true,
    enableNavigation = false,
    enableActions = true,
    customShortcuts = {}
  } = options

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger shortcuts when typing in input fields
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return
      }

      // Search shortcut (Ctrl/Cmd + K)
      if (enableSearch && (e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        const searchInput = document.querySelector('input[type="text"], input[type="search"]') as HTMLInputElement
        if (searchInput) {
          searchInput.focus()
          toast({
            title: "Search focused",
            description: "Start typing to search orders, contacts, or services",
          })
        }
      }

      // Refresh shortcut (Ctrl/Cmd + R)
      if (enableActions && (e.ctrlKey || e.metaKey) && e.key === 'r') {
        e.preventDefault()
        window.location.reload()
      }

      // Export shortcut (Ctrl/Cmd + E)
      if (enableActions && (e.ctrlKey || e.metaKey) && e.key === 'e') {
        e.preventDefault()
        const exportButton = document.querySelector('button:contains("Export")') as HTMLButtonElement
        if (exportButton) {
          exportButton.click()
          toast({
            title: "Export initiated",
            description: "Your file is being downloaded",
          })
        }
      }

      // Dashboard shortcut (Ctrl/Cmd + D)
      if (enableNavigation && (e.ctrlKey || e.metaKey) && e.key === 'd') {
        e.preventDefault()
        window.location.href = '/admin/dashboard'
      }

      // Orders page shortcut (Ctrl/Cmd + O)
      if (enableNavigation && (e.ctrlKey || e.metaKey) && e.key === 'o') {
        e.preventDefault()
        window.location.href = '/admin/orders'
      }

      // Contacts page shortcut (Ctrl/Cmd + C)
      if (enableNavigation && (e.ctrlKey || e.metaKey) && e.key === 'c') {
        e.preventDefault()
        window.location.href = '/admin/contacts'
      }

      // Analytics page shortcut (Ctrl/Cmd + A)
      if (enableNavigation && (e.ctrlKey || e.metaKey) && e.key === 'a') {
        e.preventDefault()
        window.location.href = '/admin/analytics'
      }

      // Settings page shortcut (Ctrl/Cmd + ,)
      if (enableNavigation && (e.ctrlKey || e.metaKey) && e.key === ',') {
        e.preventDefault()
        window.location.href = '/admin/settings'
      }

      // Help/Shortcuts modal (Shift + ?)
      if (e.shiftKey && e.key === '?') {
        e.preventDefault()
        showShortcutsHelp()
      }

      // Custom shortcuts
      Object.entries(customShortcuts).forEach(([key, handler]) => {
        if (e.key === key) {
          e.preventDefault()
          handler()
        }
      })
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [enableSearch, enableNavigation, enableActions, customShortcuts])
}

function showShortcutsHelp() {
  const shortcuts = [
    { keys: 'Ctrl/Cmd + K', action: 'Focus search' },
    { keys: 'Ctrl/Cmd + R', action: 'Refresh page' },
    { keys: 'Ctrl/Cmd + E', action: 'Export data' },
    { keys: 'Ctrl/Cmd + D', action: 'Go to Dashboard' },
    { keys: 'Ctrl/Cmd + O', action: 'Go to Orders' },
    { keys: 'Ctrl/Cmd + C', action: 'Go to Contacts' },
    { keys: 'Ctrl/Cmd + A', action: 'Go to Analytics' },
    { keys: 'Ctrl/Cmd + ,', action: 'Go to Settings' },
    { keys: 'Shift + ?', action: 'Show this help' },
  ]

  const html = `
    <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: hsl(0 0% 10%); padding: 24px; border-radius: 12px; box-shadow: 0 20px 50px rgba(0,0,0,0.5); z-index: 9999; max-width: 500px; width: 90%;">
      <h3 style="margin-bottom: 16px; font-size: 20px; font-weight: bold; color: hsl(0 0% 100%);">Ã¢Å’Â¨Ã¯Â¸Â Keyboard Shortcuts</h3>
      <div style="display: grid; gap: 8px;">
        ${shortcuts.map(s => `
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; background: hsl(0 0% 15%); border-radius: 6px;">
            <span style="color: hsl(0 0% 70%); font-size: 14px;">${s.action}</span>
            <kbd style="background: hsl(0 0% 20%); padding: 4px 8px; border-radius: 4px; color: hsl(0 0% 90%); font-family: monospace; font-size: 12px; border: 1px solid hsl(0 0% 30%);">${s.keys}</kbd>
          </div>
        `).join('')}
      </div>
      <button onclick="this.closest('div[style*=fixed]').remove()" style="margin-top: 16px; width: 100%; padding: 10px; background: hsl(0 99% 47.6%); color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;">
        Close
      </button>
    </div>
  `

  const div = document.createElement('div')
  div.innerHTML = html
  document.body.appendChild(div)
}
