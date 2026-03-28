# 🔧 Order Status Update - Debugging Guide

## ✅ Fixes Applied

### **1. Fixed API Authentication:**
- ❌ Before: Tried to import `sheets` from google-sheets.ts (didn't exist)
- ✅ After: Creates own auth client with credentials

### **2. Added Detailed Logging:**
Console mein ab har step dikhai dega:
```
🔍 Searching for order: ORD-123
📊 Found 15 rows in Orders sheet
✅ Found order at row 5
📋 Sheet headers: ['Order ID', 'Name', 'Status', ...]
📍 Status column index: 2 (Letter: C)
✅ Order ORD-123 status updated to: completed
```

### **3. Better Error Messages:**
Ab specific error milega:
- Credentials missing
- Order not found
- Status column not found
- etc.

---

## 🧪 Testing Steps

### **Step 1: Open Browser Console**

Press `F12` → Console tab

Clear console (trash icon)

---

### **Step 2: Try Updating Order**

1. Go to: `http://localhost:3001/admin/orders`
2. Find any order
3. Change status to "Completed"
4. Click "Update"

---

### **Step 3: Check Console Logs**

#### **Expected Success Flow:**

```
🔄 Updating order status: { id: 'ORD-123', newStatus: 'completed' }
🔍 Searching for order: ORD-123
📊 Found 15 rows in Orders sheet
✅ Found order at row 5
📋 Sheet headers: [Array]
📍 Status column index: 2 (Letter: C)
✅ Order ORD-123 status updated to: completed
📡 API Response: { success: true, ... }
✅ Google Sheets updated: { success: true, ... }
📢 Dispatching event: {...}
💾 Stored in localStorage: {...}
```

#### **If You See This:**

✅ **All good!** Your order is updating properly.

---

### **Common Errors & Solutions:**

#### **Error 1: "Google Sheets credentials not configured"**

**Console shows:**
```
❌ Google Sheets credentials not configured
```

**Cause:**
Environment variables missing in `.env.local`

**Solution:**

Check your `.env.local` file:
```env
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your-spreadsheet-id
```

Make sure:
- All 3 variables are present
- No extra spaces or quotes
- Private key includes `\n` characters
- Service account email is correct

---

#### **Error 2: "Order not found"**

**Console shows:**
```
🔍 Searching for order: ORD-123
📊 Found 15 rows in Orders sheet
❌ Order not found: ORD-123
```

**Possible Causes:**

1. **Order ID doesn't match Column A:**
   - Check if Order IDs in your sheet match what you're sending
   - Column A should have Order IDs

2. **Different sheet name:**
   - Sheet should be named exactly "Orders" (case-sensitive)
   - Check your Google Sheet tab name

3. **Empty sheet:**
   - Make sure there's data in the sheet
   - At least headers + 1 row

**Solution:**

Open your Google Sheet and verify:
- Tab name is "Orders"
- Column A has Order IDs
- Order ID format matches (e.g., "ORD-123")

---

#### **Error 3: "Status column not found"**

**Console shows:**
```
📋 Sheet headers: ['Order ID', 'Customer Name', 'Email', ...]
❌ Status column not found
```

**Cause:**
No column named "Status" in row 1

**Solution:**

Add a "Status" column header in your Google Sheet:

| Order ID | Customer | Email | **Status** | Amount |
|----------|----------|-------|------------|--------|
| ORD-123  | John     | ...   | pending    | £100   |

Make sure:
- Spelling is exactly "Status" (not "status" or "STATUS")
- It's in row 1 (header row)
- No extra spaces

---

#### **Error 4: Network Error / Failed to fetch**

**Console shows:**
```
Failed to fetch
TypeError: Failed to fetch
```

**Possible Causes:**

1. **API route not running:**
   - Next.js dev server stopped
   - Route file has syntax errors

2. **CORS issue:**
   - Unlikely in same-origin

**Solution:**

1. Restart dev server:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

2. Check terminal for errors

3. Verify API route exists:
   ```
   app/api/update-order-status/route.ts
   ```

---

## 📊 Manual Verification

### **Check Google Sheet Directly:**

1. Open Google Sheets
2. Find your spreadsheet
3. Go to "Orders" tab
4. Look for the order you just updated
5. Status column should show new status

**If status IS updated in Google Sheets but frontend shows error:**
- Frontend caching issue
- Hard refresh: `Ctrl+Shift+R`
- Clear browser cache

**If status NOT updated in Google Sheets:**
- API call failed
- Check console logs
- See error messages above

---

## 🔍 Advanced Debugging

### **Test API Directly:**

Open terminal and run:

```bash
curl -X POST http://localhost:3001/api/update-order-status \
  -H "Content-Type: application/json" \
  -d "{\"orderId\":\"ORD-123\",\"newStatus\":\"completed\"}"
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Order status updated successfully",
  "orderId": "ORD-123",
  "newStatus": "completed"
}
```

**If you get error:**
- Check terminal output
- Look for detailed error message
- Verify credentials

---

## 🎯 Quick Checklist

Before trying to update order status:

- [ ] `.env.local` has all 3 Google variables
- [ ] Google Sheet exists and is accessible
- [ ] Sheet tab is named "Orders"
- [ ] Column A has Order IDs
- [ ] Row 1 has headers including "Status"
- [ ] Dev server is running (`npm run dev`)
- [ ] Browser console is open
- [ ] At least 1 order exists in sheet

---

## ✅ Expected Behavior

### **When Everything Works:**

1. Click dropdown on order
2. Select "Completed"
3. Click "Update"
4. Console shows success logs
5. Toast notification: "Order updated"
6. Dashboard stats update automatically
7. Refresh page → status still "Completed"
8. Check Google Sheet → Status column updated

---

## 🐛 Still Not Working?

### **Collect This Info:**

1. **Console Logs:**
   - Copy entire console output
   - Include both frontend and backend logs

2. **Environment Variables:**
   - Screenshot of `.env.local` (hide sensitive values)
   - Just show variable names exist

3. **Google Sheet Structure:**
   - Screenshot of first 2 rows (headers + 1 data row)
   - Show column names clearly

4. **Error Message:**
   - Exact error text
   - When it appears (before/after click)

5. **Terminal Output:**
   - Any errors in VS Code terminal
   - Next.js dev server logs

---

## 📝 Summary

### **What Was Fixed:**

✅ API now creates its own auth client  
✅ Proper error messages added  
✅ Detailed console logging  
✅ Type safety improved  

### **Current Flow:**

```
Frontend Request
        ↓
API Route (/api/update-order-status)
        ↓
Authenticate with Google
        ↓
Find Order in Sheet
        ↓
Update Status Column
        ↓
Return Success/Failure
        ↓
Frontend Updates UI
```

### **Next Step:**

Try updating an order again and check the console logs. The detailed logging will tell you exactly where it's failing if there's an issue!

---

**Test now with console open!** 🔍
