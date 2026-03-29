"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Shield, ShieldCheck, User, Plus, Edit2, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"

interface AdminUser {
  id: string
  name: string
  email: string
  role: 'admin' | 'manager' | 'agent'
  lastActive: string
}

const roleIcons = { admin: ShieldCheck, manager: Shield, agent: User }
const roleColors = {
  admin: "bg-primary/20 text-primary border-primary/30",
  manager: "bg-warning/20 text-warning border-warning/30",
  agent: "bg-muted text-muted-foreground border-border",
}

// Default admin user (you)
const defaultUsers: AdminUser[] = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@carkeysinstockport.co.uk",
    role: "admin",
    lastActive: "Now"
  }
]

export default function Users() {
  const [usersList, setUsersList] = useState<AdminUser[]>([])
  const [loading, setLoading] = useState(true)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editingUser, setEditingUser] = useState<AdminUser | null>(null)
  const [form, setForm] = useState({ name: "", email: "", role: "agent" })

  useEffect(() => {
    // Load users from localStorage or use defaults
    const savedUsers = localStorage.getItem('adminUsers')
    if (savedUsers) {
      setUsersList(JSON.parse(savedUsers))
    } else {
      setUsersList(defaultUsers)
      localStorage.setItem('adminUsers', JSON.stringify(defaultUsers))
    }
    setLoading(false)
  }, [])

  const saveUsers = (users: AdminUser[]) => {
    setUsersList(users)
    localStorage.setItem('adminUsers', JSON.stringify(users))
  }

  const openCreate = () => {
    setEditingUser(null)
    setForm({ name: "", email: "", role: "agent" })
    setDialogOpen(true)
  }

  const openEdit = (user: AdminUser) => {
    setEditingUser(user)
    setForm({ name: user.name, email: user.email, role: user.role })
    setDialogOpen(true)
  }

  const handleSave = () => {
    if (!form.name || !form.email) return
    
    if (editingUser) {
      // Update existing user
      const updated = usersList.map(u => 
        u.id === editingUser.id 
          ? { ...u, name: form.name, email: form.email, role: form.role as any }
          : u
      )
      saveUsers(updated)
      toast({ title: "User updated" })
    } else {
      // Create new user
      const newUser: AdminUser = {
        id: String(Date.now()),
        name: form.name,
        email: form.email,
        role: form.role as any,
        lastActive: "Just now"
      }
      saveUsers([...usersList, newUser])
      toast({ title: "User created" })
    }
    setDialogOpen(false)
  }

  const deleteUser = (id: string) => {
    if (id === "1") {
      toast({ 
        title: "Cannot delete", 
        description: "Main admin user cannot be deleted",
        variant: "destructive"
      })
      return
    }
    saveUsers(usersList.filter(u => u.id !== id))
    toast({ title: "User deleted", variant: "destructive" })
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground tracking-tight">Users</h1>
          <p className="text-sm text-muted-foreground mt-1">Loading team members...</p>
        </div>
        <div className="glass-card p-6 flex items-center justify-center" style={{ minHeight: '400px' }}>
          <div className="animate-pulse text-muted-foreground text-lg">Loading users...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground tracking-tight">Users</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage team members and roles
            {usersList.length > 0 && ` ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ ${usersList.length} users`}
          </p>
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openCreate} className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Plus className="h-4 w-4 mr-2" /> Add User
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-card border-border">
            <DialogHeader>
              <DialogTitle className="text-foreground">{editingUser ? "Edit" : "Add"} User</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <Input 
                placeholder="Full name" 
                value={form.name} 
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))} 
                className="bg-muted/50 border-border" 
              />
              <Input 
                type="email" 
                placeholder="Email address" 
                value={form.email} 
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))} 
                className="bg-muted/50 border-border" 
              />
              <Select value={form.role} onValueChange={v => setForm(f => ({ ...f, role: v }))}>
                <SelectTrigger className="bg-muted/50 border-border"><SelectValue /></SelectTrigger>
                <SelectContent className="bg-card border-border">
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="manager">Manager</SelectItem>
                  <SelectItem value="agent">Agent</SelectItem>
                </SelectContent>
              </Select>
              <Button onClick={handleSave} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                {editingUser ? "Update" : "Create"} User
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {usersList.map((user) => {
          const RoleIcon = roleIcons[user.role]
          return (
            <div key={user.id} className="glass-card p-5 animate-fade-in hover:border-primary/30 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-sm font-semibold">{user.name.split(" ").map(n => n[0]).join("")}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground truncate">{user.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <Badge className={roleColors[user.role]}>
                  <RoleIcon className="h-3 w-3 mr-1" />
                  {user.role}
                </Badge>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">{user.lastActive}</span>
                  <button onClick={() => openEdit(user)} className="p-1.5 rounded-md hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors">
                    <Edit2 className="h-3 w-3" />
                  </button>
                  <button onClick={() => deleteUser(user.id)} className="p-1.5 rounded-md hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors">
                    <Trash2 className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
