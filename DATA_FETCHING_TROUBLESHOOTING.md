# 🔧 Google Sheets Data Fetching - Troubleshooting Guide

## ❓ Problem: Admin Panel Se Data Fetch Nahi Ho Raha?

Follow these steps to diagnose and fix the issue.

---

## 📋 Step-by-Step Diagnosis

### ✅ Step 1: Check if Sheet Exists

**For Contacts (/admin/contacts):**
1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1Y4D69zS4dHhO5LcYZvBFog94RyFgZGcnd-w56pdP3Yg/edit
2. Look for a tab named **"CarForm"** at the bottom
3. Make sure it has data in row 2 onwards (row 1 should have headers)

**For Orders (/admin/orders):**
1. Same Google Sheet
2. Look for a tab named **"Orders"** at the bottom
3. If it doesn't exist, create it and add headers

---

### ✅ Step 2: Verify Service Account Access

Your service account email:
```
sheet-access@carkeywebsite.iam.gserviceaccount.com
```

**Check Sharing:**
1. In Google Sheet, click "Share" button (top right)
2. Look for above email in the list
3. Should say "Editor" permission
4. If not there, click "Share" → Add email → Give Editor access → Send

---

### ✅ Step 3: Test API Directly

**Test Contacts API:**

Open browser and go to:
```
http://localhost:3001/api/contacts
```

**What you should see:**
- If working: `{"contacts":[...]}` (array with your data)
- If no data: `{"contacts":[],"message":"No contacts found"}`
- If error: `{"error":"Failed to fetch contacts",...}`

**Test Orders API:**

Go to:
```
http://localhost:3001/api/orders
```

**Expected responses same as above.**

---

### ✅ Step 4: Check Browser Console

**On Admin Panel Pages:**

1. Go to `/admin/contacts` or `/admin/orders`
2. Press **F12** to open Developer Tools
3. Click **Console** tab
4. Look for errors (red text)

**Common Errors:**

```javascript
// Error 1: Network error
Error: getaddrinfo ENOTFOUND oauth2.googleapis.com
// Solution: Check internet connection, firewall, or DNS

// Error 2: Permission denied
Error: Request had insufficient authentication scopes
// Solution: Re-share sheet with service account

// Error 3: Credentials missing
Google Sheets credentials not configured
// Solution: Check .env.local file exists and has values
```

---

### ✅ Step 5: Check Terminal/Server Logs

**Look at your terminal where `npm run dev` is running**

When you visit admin pages, you should see logs like:
```
GET /api/contacts 200
GET /admin/contacts 200
```

If there's an error, you'll see:
```
Error fetching contacts: [error details]
```

---

### ✅ Step 6: Verify Environment Variables

**Check `.env.local` file exists:**

Open the file and verify these lines exist:
```bash
GOOGLE_SERVICE_ACCOUNT_EMAIL=sheet-access@carkeywebsite.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=1Y4D69zS4dHhO5LcYZvBFog94RyFgZGcnd-w56pdP3Yg
GOOGLE_SHEET_NAME=CarForm
GOOGLE_ORDERS_SHEET_NAME=Orders
```

**Run Configuration Check:**
```bash
npm run check-google-sheets
```

Should show all green checkmarks ✅

---

## 🐛 Common Issues & Solutions

### Issue 1: "No contacts/orders found" but sheet has data

**Possible Causes:**
- Sheet name mismatch
- Service account can't access sheet
- Headers not in row 1

**Solution:**
1. Verify sheet tab name is exactly "CarForm" (case-sensitive)
2. Re-share sheet with service account
3. Make sure headers are in row 1, data starts from row 2

---

### Issue 2: Network error (ENOTFOUND)

**Error:**
```
Error: getaddrinfo ENOTFOUND oauth2.googleapis.com
```

**Causes:**
- No internet connection
- Firewall blocking Google APIs
- DNS issues
- Corporate proxy

**Solutions:**
1. Check internet is working
2. Try accessing https://oauth2.googleapis.com in browser
3. Disable VPN/proxy temporarily
4. Whitelist `oauth2.googleapis.com` in firewall
5. Try again in few minutes (temporary issue)

---

### Issue 3: Permission Denied (403)

**Error:**
```
Request had insufficient authentication scopes
```

**Solution:**
1. Open Google Sheet
2. Click "Share"
3. Add: `sheet-access@carkeywebsite.iam.gserviceaccount.com`
4. Give "Editor" permissions (not Viewer!)
5. Wait 2-3 minutes
6. Refresh admin panel

---

### Issue 4: Empty Array Always Returned

**Check:**
1. ✅ Sheet actually has data (not just headers)
2. ✅ Data starts from row 2 (row 1 is headers)
3. ✅ Sheet name matches `.env.local`
4. ✅ Using correct spreadsheet ID

**Debug:**
Add this to your sheet for testing:

**CarForm Tab (for contacts):**
| Timestamp | Name | Email | Phone | Service | Message |
|-----------|------|-------|-------|---------|---------|
| 2026-03-26 | Test User | test@example.com | 07123456789 | Key Programming | Test submission |

**Orders Tab (for orders):**
| ID | Timestamp | Name | Email | Phone | Service | Make | Model | Year | Issue | Status | Amount | AssignedTo | Notes |
|----|-----------|------|-------|-------|---------|------|-------|------|-------|--------|--------|------------|-------|
| ORD-001 | 2026-03-26 | Test Customer | test@example.com | 07123456789 | Key Prog | BMW | 3 Series | 2020 | Need key | pending | 150 | John | Test |

---

## 🧪 Manual Testing Script

### Test 1: Direct API Call

```bash
# In browser address bar or using curl
curl http://localhost:3001/api/contacts
curl http://localhost:3001/api/orders
```

**Expected Response:**
```json
{
  "contacts": [
    {
      "id": 1,
      "name": "Test User",
      "email": "test@example.com",
      ...
    }
  ]
}
```

---

### Test 2: Check Server Logs

Restart server and watch for errors:
```bash
npm run dev
```

Then visit admin pages and watch terminal output.

---

### Test 3: Force Refresh Data

In browser console on admin page:
```javascript
// Clear cache and reload
localStorage.clear()
window.location.reload(true)
```

---

## ✨ Quick Fix Checklist

Run through this checklist:

- [ ] Google Sheet has correct tab name ("CarForm" or "Orders")
- [ ] Tab has headers in row 1
- [ ] Tab has data starting from row 2
- [ ] Service account has Editor access
- [ ] `.env.local` has all required variables
- [ ] Ran `npm run check-google-sheets` successfully
- [ ] Internet connection is working
- [ ] No firewall blocking Google APIs
- [ ] Tested direct API endpoints (`/api/contacts`, `/api/orders`)
- [ ] Checked browser console for errors
- [ ] Checked terminal/server logs

---

## 📞 What to Share for Debugging

If still having issues, share these details:

1. **Screenshot of your Google Sheet tabs** (bottom of sheet)
2. **Response from** `http://localhost:3001/api/contacts`
3. **Browser console errors** (F12 → Console)
4. **Terminal logs** when visiting admin pages
5. **Confirmation that service account has access**

---

## 🎯 Expected Behavior

### When Everything Works:

**Contacts Page (`/admin/contacts`):**
```
✓ Loading... (brief moment)
✓ Shows table with contact submissions
✓ Name, email, phone visible
✓ Clickable links
✓ Timestamp displayed
```

**Orders Page (`/admin/orders`):**
```
✓ Loading... (brief moment)
✓ Shows table with orders
✓ Customer info, vehicle, service visible
✓ Status dropdown works
✓ Amount in £ displayed
```

### If No Data Exists:

Should show friendly message:
```
"No contacts yet" or "No orders yet"
With instructions how to add data
```

NOT an error or infinite loading!

---

## 🔔 Important Notes

### For Contacts:
- Uses tab name: **"CarForm"**
- Reads from your existing Google Form submissions
- Should already have data if form was submitted

### For Orders:
- Uses tab name: **"Orders"**
- You need to CREATE this tab manually
- Add headers and sample data yourself
- Not connected to Google Form (yet)

---

## 🚀 Next Steps After Fixing

Once data starts loading:

1. ✅ Test both contacts and orders pages
2. ✅ Add more sample data to sheets
3. ✅ Test search and filter functionality
4. ✅ Test status updates (for orders)
5. ✅ Verify clickable contact links work

---

**Still having issues?** 

Go through each step carefully and check all the points above. Most issues are:
- ❌ Wrong sheet name
- ❌ No service account access  
- ❌ Network/firewall blocking
- ❌ Empty sheet (no data)

**Fix these 4 things and it will work!** 💪
