export const statsCards = [
  { title: "Total Orders", value: "2,847", change: "+12.5%", trend: "up" as const },
  { title: "Active Services", value: "8", change: "+3.2%", trend: "up" as const },
  { title: "Completed Jobs", value: "1,923", change: "+8.1%", trend: "up" as const },
  { title: "Revenue", value: "Ã‚Â£148,290", change: "+22.4%", trend: "up" as const },
];

export const ordersOverTime = [
  { month: "Jan", orders: 120 }, { month: "Feb", orders: 180 },
  { month: "Mar", orders: 240 }, { month: "Apr", orders: 200 },
  { month: "May", orders: 320 }, { month: "Jun", orders: 380 },
  { month: "Jul", orders: 350 }, { month: "Aug", orders: 420 },
  { month: "Sep", orders: 390 }, { month: "Oct", orders: 480 },
  { month: "Nov", orders: 520 }, { month: "Dec", orders: 580 },
];

// Real Car Key Services - Updated from fake services
export const categoryDistribution = [
  { name: "Car Key Replacement", value: 35, fill: "#f43f5e" },
  { name: "Lockout Assistance", value: 25, fill: "#8b5cf6" },
  { name: "Auto Keys Programming", value: 20, fill: "#10b981" },
  { name: "Key Fob Programming", value: 12, fill: "#f59e0b" },
  { name: "Remote Key Fobs", value: 8, fill: "#3b82f6" },
];

export const monthlyRevenue = [
  { month: "Jan", revenue: 8200 }, { month: "Feb", revenue: 9400 },
  { month: "Mar", revenue: 11200 }, { month: "Apr", revenue: 10800 },
  { month: "May", revenue: 14500 }, { month: "Jun", revenue: 16200 },
  { month: "Jul", revenue: 15800 }, { month: "Aug", revenue: 18400 },
  { month: "Sep", revenue: 17200 }, { month: "Oct", revenue: 20100 },
  { month: "Nov", revenue: 22800 }, { month: "Dec", revenue: 24600 },
];

export const recentActivity = [
  { id: 1, action: "New order placed", detail: "Car Key Replacement - BMW keys", time: "2 min ago", type: "order" },
  { id: 2, action: "Service completed", detail: "Lockout Assistance - Ford Fiesta", time: "15 min ago", type: "complete" },
  { id: 3, action: "Payment received", detail: "Ã‚Â£150 from John Smith", time: "1 hr ago", type: "payment" },
  { id: 4, action: "New user registered", detail: "sarah@example.com", time: "2 hrs ago", type: "user" },
  { id: 5, action: "Order status updated", detail: "Auto Keys Programming Ã¢â€ â€™ In Progress", time: "3 hrs ago", type: "update" },
];

export type Service = {
  id: string;
  name: string;
  category: string;
  price: number;
  status: "active" | "inactive";
  description: string;
  image?: string;
};

export const services: Service[] = [
  { id: "1", name: "Car Key Replacement", category: "Car Key Replacement", price: 150, status: "active", description: "Professional car key replacement service for all vehicle makes and models" },
  { id: "2", name: "Lockout Assistance", category: "Lockout Assistance", price: 80, status: "active", description: "Fast and reliable car lockout service" },
  { id: "3", name: "Auto Keys Programming", category: "Auto Keys Programming", price: 120, status: "active", description: "Expert car key programming service" },
  { id: "4", name: "Ignition Repair", category: "Ignition Repair", price: 180, status: "active", description: "Professional ignition switch repair and replacement" },
  { id: "5", name: "Emergency Service", category: "Emergency Service", price: 100, status: "active", description: "24/7 emergency locksmith service for cars" },
  { id: "6", name: "Van Lockout", category: "Van Lockout", price: 90, status: "active", description: "Specialized van lockout service for commercial and private vans" },
  { id: "7", name: "Key Fob Programming", category: "Key Fob Programming", price: 140, status: "active", description: "Professional key fob programming and replacement" },
  { id: "8", name: "Remote Key Fobs", category: "Remote Key Fobs", price: 200, status: "active", description: "Complete remote key fob service including supply and programming" },
];

export type Order = {
  id: string;
  timestamp: string;
  firstName: string;
  lastName: string;
  services: string;
  email: string;
  address: string;
  phoneNumber: string;
  additionalDescription: string;
  status: "pending" | "in_progress" | "completed" | "cancelled";
  amount: number;
  assignedTo?: string;
};

export const orders: Order[] = [
  { id: "ORD-001", timestamp: "2024-03-15T10:30:00Z", firstName: "John", lastName: "Smith", services: "Car Key Replacement", email: "john@example.com", address: "123 High Street, Stockport SK1 1AA", phoneNumber: "07700 900001", additionalDescription: "BMW key replacement needed", status: "in_progress", amount: 150, assignedTo: "Mike Johnson" },
  { id: "ORD-002", timestamp: "2024-03-14T14:20:00Z", firstName: "Sarah", lastName: "Jones", services: "Lockout Assistance", email: "sarah@example.com", address: "45 Market Street, Cheadle SK8 2AB", phoneNumber: "07700 900002", additionalDescription: "Locked out of Ford Fiesta", status: "pending", amount: 80 },
  { id: "ORD-003", timestamp: "2024-03-13T09:15:00Z", firstName: "Tom", lastName: "Wilson", services: "Auto Keys Programming", email: "tom@example.com", address: "78 London Road, Hazel Grove SK7 3CD", phoneNumber: "07700 900003", additionalDescription: "Audi A4 key programming", status: "completed", amount: 120, assignedTo: "Alex Rivera" },
  { id: "ORD-004", timestamp: "2024-03-12T16:45:00Z", firstName: "Emma", lastName: "Brown", services: "Key Fob Programming", email: "emma@example.com", address: "22 Church Lane, Bramhall SK7 4EF", phoneNumber: "07700 900004", additionalDescription: "VW Golf key fob not working", status: "in_progress", amount: 140, assignedTo: "Sarah Chen" },
  { id: "ORD-005", timestamp: "2024-03-11T11:00:00Z", firstName: "David", lastName: "Lee", services: "Remote Key Fobs", email: "david@example.com", address: "56 Park Road, Gatley SK8 5GH", phoneNumber: "07700 900005", additionalDescription: "Need spare remote key for Mercedes", status: "completed", amount: 200, assignedTo: "Mike Johnson" },
  { id: "ORD-006", timestamp: "2024-03-10T13:30:00Z", firstName: "Lisa", lastName: "Garcia", services: "Emergency Service", email: "lisa@example.com", address: "89 Station Road, Marple SK6 6IJ", phoneNumber: "07700 900006", additionalDescription: "Emergency lockout at night", status: "pending", amount: 100 },
  { id: "ORD-007", timestamp: "2024-03-09T08:20:00Z", firstName: "James", lastName: "Martin", services: "Van Lockout", email: "james@example.com", address: "34 Mill Lane, Romiley SK6 7KL", phoneNumber: "07700 900007", additionalDescription: "Transit van lockout assistance", status: "completed", amount: 90, assignedTo: "Alex Rivera" },
  { id: "ORD-008", timestamp: "2024-03-08T15:10:00Z", firstName: "Anna", lastName: "Taylor", services: "Ignition Repair", email: "anna@example.com", address: "67 Bridge Street, Bury BL9 8MN", phoneNumber: "07700 900008", additionalDescription: "Ignition switch broken", status: "cancelled", amount: 180 },
];

export type User = {
  id: string;
  name: string;
  email: string;
  role: "admin" | "manager" | "agent";
  status: "active" | "inactive";
  lastActive: string;
  avatar?: string;
};

export const users: User[] = [
  { id: "1", name: "Admin User", email: "admin@carkeysinstockport.co.uk", role: "admin", status: "active", lastActive: "Now" },
  { id: "2", name: "Mike Johnson", email: "mike@company.com", role: "manager", status: "active", lastActive: "15 min ago" },
  { id: "3", name: "Alex Rivera", email: "alex@company.com", role: "agent", status: "active", lastActive: "1 hr ago" },
  { id: "4", name: "Sarah Chen", email: "sarah@company.com", role: "agent", status: "active", lastActive: "3 hrs ago" },
];

export const categories = [
  "Car Key Replacement", "Lockout Assistance", "Auto Keys Programming", "Ignition Repair", 
  "Emergency Service", "Van Lockout", "Key Fob Programming", "Remote Key Fobs", "Other"
];

export const notifications = [
  { id: 1, title: "New order received", message: "ORD-009 from BMW customer", time: "Just now", read: false },
  { id: 2, title: "Payment confirmed", message: "Ã‚Â£150 from John Smith", time: "5 min ago", read: false },
  { id: 3, title: "Service completed", message: "Lockout Assistance for Ford Fiesta", time: "1 hr ago", read: true },
  { id: 4, title: "New team member", message: "Lisa Wong joined as Agent", time: "3 hrs ago", read: true },
];
