# ✅ Exact Google Sheet Structure - Orders

## 📋 Required Column Order (A to H)

### **Your Exact Format:**

```
Column A: Timestamp
Column B: First Name  
Column C: Last Name
Column D: Services
Column E: Email
Column F: Address
Column G: Phone Number
Column H: Additional Description
```

---

## 🎯 Example Data (Exactly as you want):

| Timestamp | First Name | Last Name | Services | Email | Address | Phone Number | Additional Description |
|-----------|------------|-----------|----------|-------|---------|--------------|----------------------|
| 3/26/2026 22:01:03 | Aiza | Nadeem | car-key-replacement, auto-keys-programming, emergency-service | aiza@gmail.com | hous 12 | 97376356363 | hello |
| 3/26/2026 22:40:45 | Aiza | Khan | ignition-repair | aiza@gmail.com | aizahoue12 | 7882992002 | hello |

---

## 📝 How to Set Up Your Google Sheet

### Step 1: Open Your Google Sheet
```
https://docs.google.com/spreadsheets/d/1Y4D69zS4dHhO5LcYZvBFog94RyFgZGcnd-w56pdP3Yg/edit
```

### Step 2: Go to "Orders" Tab
(Create if it doesn't exist)

### Step 3: Add Headers in Row 1

**Copy-Paste This Exactly:**

| Cell | Value |
|------|-------|
| A1 | **Timestamp** |
| B1 | **First Name** |
| C1 | **Last Name** |
| D1 | **Services** |
| E1 | **Email** |
| F1 | **Address** |
| G1 | **Phone Number** |
| H1 | **Additional Description** |

---

## ✨ Updated Code Mapping

### File: `lib/google-orders.ts`

#### Reading from Sheet (Row → Object):
```typescript
timestamp: row[0]      // Column A
firstName: row[1]      // Column B
lastName: row[2]       // Column C
services: row[3]       // Column D
email: row[4]          // Column E
address: row[5]        // Column F
phoneNumber: row[6]    // Column G
additionalDescription: row[7]  // Column H
id: row[8]             // Column I (Optional - auto-generated)
status: row[9]         // Column J (Optional - default: pending)
amount: row[10]        // Column K (Optional - default: 0)
```

#### Writing to Sheet (Object → Row):
```typescript
values: [
  timestamp,              // Column A
  firstName,              // Column B
  lastName,               // Column C
  services,               // Column D
  email,                  // Column E
  address,                // Column F
  phoneNumber,            // Column G
  additionalDescription,  // Column H
  id,                     // Column I (auto-generated)
  status,                 // Column J
  amount,                 // Column K
]
```

---

## 🔧 How Data Will Flow

### From Contact Form → Google Sheet:

```
User submits contact form
        ↓
Form data collected:
  - firstName: "Aiza"
  - lastName: "Nadeem"
  - services: "car-key-replacement, auto-keys-programming"
  - email: "aiza@gmail.com"
  - address: "hous 12"
  - phoneNumber: "97376356363"
  - additionalDescription: "hello"
        ↓
Saved to Google Sheet:
  Column A: 3/26/2026 22:01:03
  Column B: Aiza
  Column C: Nadeem
  Column D: car-key-replacement, auto-keys-programming
  Column E: aiza@gmail.com
  Column F: hous 12
  Column G: 97376356363
  Column H: hello
```

---

## 📊 Admin Panel Display

When you visit `/admin/orders`, data will show as:

```
┌─────────┬────────────┬────────────┬──────────────────────────┬───────────────┐
│ Order   │ First Name │ Last Name  │ Services                 │ Email         │
├─────────┼────────────┼────────────┼──────────────────────────┼───────────────┤
│ ORD-001 │ Aiza       │ Nadeem     │ car-key-replacement,     │ aiza@gmail.com│
│         │            │            │ auto-keys-programming    │               │
├─────────┴────────────┴────────────┴──────────────────────────┼───────────────┤
│ Address           │ Phone         │ Additional Desc          │ Status  │ Amt │
├───────────────────┼───────────────┼──────────────────────────┼─────────┼─────┤
│ hous 12           │ 97376356363   │ hello                    │ Pending │ £0  │
└───────────────────┴───────────────┴──────────────────────────┴─────────┴─────┘
```

---

## ✅ Verification Checklist

### In Your Google Sheet ("Orders" tab):

- [ ] Row 1 has exact headers:
  - A1: Timestamp
  - B1: First Name
  - C1: Last Name
  - D1: Services
  - E1: Email
  - F1: Address
  - G1: Phone Number
  - H1: Additional Description

- [ ] Row 2 onwards has your data:
  - Example: `3/26/2026 22:01:03 | Aiza | Nadeem | car-key-replacement...`

### In Admin Panel (`/admin/orders`):

- [ ] First Name column shows "Aiza"
- [ ] Last Name column shows "Nadeem" / "Khan"
- [ ] Services column shows all services (comma-separated)
- [ ] Email column shows "aiza@gmail.com"
- [ ] Address column shows "hous 12" / "aizahoue12"
- [ ] Phone column shows "97376356363" / "7882992002"
- [ ] Additional Description shows "hello"

---

## 🚀 Quick Test

### 1. Add This Data to Your Sheet:

**Row 2:**
```
A2: 3/26/2026 22:01:03
B2: Aiza
C2: Nadeem
D2: car-key-replacement, auto-keys-programming, emergency-service
E2: aiza@gmail.com
F2: hous 12
G2: 97376356363
H2: hello
```

**Row 3:**
```
A3: 3/26/2026 22:40:45
B3: Aiza
C3: Khan
D3: ignition-repair
E3: aiza@gmail.com
F3: aizahoue12
G3: 7882992002
H3: hello
```

### 2. Refresh Admin Panel:
```
http://localhost:3001/admin/orders
```

### 3. Verify Display:
You should see exactly this data in the table!

---

## 📝 Important Notes

### Services Field:
- Multiple services separated by commas
- Example: `car-key-replacement, auto-keys-programming, emergency-service`
- Admin panel will display all services

### Timestamp Format:
- Google Sheets auto-formats timestamps
- Format: `M/D/YYYY HH:MM:SS`
- Example: `3/26/2026 22:01:03`

### Optional Columns (I onwards):
- Column I: Order ID (auto-generated if not provided)
- Column J: Status (default: "pending")
- Column K: Amount (default: 0)
- Column L: Assigned To (optional)
- Column M: Notes (optional)

---

## 🎉 Success!

**Ab aapka Google Sheet exactly aapke required format mein hai!**

```
✅ Timestamp     → Column A
✅ First Name    → Column B
✅ Last Name     → Column C
✅ Services      → Column D
✅ Email         → Column E
✅ Address       → Column F
✅ Phone Number  → Column G
✅ Additional Description → Column H
```

**Just copy-paste your example data and refresh the admin page!** 🚀
