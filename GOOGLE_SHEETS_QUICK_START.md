# 📋 Google Sheets Setup - Step by Step Visual Guide

## 🎯 Quick Overview (5 Minutes)

```
1. Google Cloud → 2. Get Credentials → 3. Update .env.local → 4. Share Sheet → 5. Test!
```

---

## Step 1: Google Cloud Console (2 min)

### 1a. Create Project
```
👉 Go to: https://console.cloud.google.com/
👉 Click: "Create Project" or "Select a project"
👉 Name: "Car Keys Stockport"
👉 Click: "Create"
```

### 1b. Enable Sheets API
```
👉 In your project, click: APIs & Services → Library
👉 Search: "Google Sheets API"
👉 Click on it
👉 Click: "Enable" button
✅ Done!
```

### 1c. Create Service Account
```
👉 Go to: APIs & Services → Credentials
👉 Click: "+ CREATE CREDENTIALS" dropdown
👉 Select: "Service account"
👉 Fill in:
   - Service account name: car-keys-forms
   - Description: For contact form submissions
👉 Click: "CREATE AND CONTINUE"
👉 Click: "CONTINUE" (skip user access)
👉 Click: "DONE"
✅ Service account created!
```

### 1d. Download Key
```
👉 Find your new service account in the list
👉 Click on its email address
👉 Go to: KEYS tab
👉 Click: "ADD KEY" → "Create new key"
👉 Select: "JSON" format
👉 Click: "CREATE"
📥 A file downloads! Keep it safe!
```

**File looks like this:**
```json
{
  "type": "service_account",
  "project_id": "your-project-12345",
  "private_key_id": "abc123...",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASC...\n-----END PRIVATE KEY-----\n",
  "client_email": "car-keys-forms@your-project-12345.iam.gserviceaccount.com",
  "client_id": "123456789",
  ...
}
```

---

## Step 2: Extract Credentials (1 min)

### From the JSON file, you need 2 things:

**1. Client Email** (copy this exactly):
```
car-keys-forms@your-project-12345.iam.gserviceaccount.com
```

**2. Private Key** (tricky part - needs formatting):

The `private_key` value in JSON looks like:
```
-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...
...more lines of gibberish...
abcdefg==
-----END PRIVATE KEY-----
```

**You must convert it to ONE LINE** by replacing each line break with `\n`:

```
-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...
...abcdefg==
-----END PRIVATE KEY-----

```

**Pro tip:** Use a text editor to:
1. Copy the entire private key including BEGIN/END markers
2. Replace actual newlines with `\n` (backslash + n)
3. Make sure it's all on one line
4. You'll paste this into `.env.local` in quotes

---

## Step 3: Update .env.local (1 min)

### Open `.env.local` file

Replace these placeholders:

**BEFORE:**
```bash
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYourPrivateKeyHere\n-----END PRIVATE KEY-----\n"
```

**AFTER (example):**
```bash
GOOGLE_SERVICE_ACCOUNT_EMAIL=car-keys-forms@my-project-123456.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCxyz...\n-----END PRIVATE KEY-----\n"
```

**⚠️ IMPORTANT:**
- Email should end with `.iam.gserviceaccount.com`
- Private key should be in quotes
- Private key should have `\n` (not actual newlines)
- Include `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----`

---

## Step 4: Share Google Sheet (30 sec)

### Give Access to Service Account

```
👉 Open your sheet: 
   https://docs.google.com/spreadsheets/d/1Y4D69zS4dHhO5LcYZvBFog94RyFgZGcnd-w56pdP3Yg/edit

👉 Click: "Share" button (top right, green button)

👉 Under "Add people and groups", paste your service account email:
   car-keys-forms@your-project-12345.iam.gserviceaccount.com

👉 Select permission: "Editor" (important!)

👉 Click: "Send" or "Done"
✅ Shared!
```

**Alternative:** Click "Copy link" and set to "Anyone with the link can view"

---

## Step 5: Set Up Sheet Headers (30 sec)

### In Your Google Sheet

**Row 1 should have these headers:**

| A | B | C | D | E | F | G |
|---|---|---|---|---|---|---|
| **ID** | **Name** | **Email** | **Phone** | **Service** | **Message** | **Timestamp** |

**How to add:**
1. Click cell A1, type: `ID`
2. Click cell B1, type: `Name`
3. Continue for all 7 columns
4. Optional: Bold the row, add background color

---

## Step 6: Verify & Test (1 min)

### Check Configuration
```bash
# In your terminal
npm run check-google-sheets
```

**Expected output:**
```
✅ .env.local file found
✅ GOOGLE_SERVICE_ACCOUNT_EMAIL: Present
✅ GOOGLE_PRIVATE_KEY: Present
✅ GOOGLE_SHEET_ID: Present
✅ GOOGLE_SHEET_NAME: Present
✅ Service account email format looks good
✅ Private key format looks good
✅ Google Sheet ID is set correctly
✅ Sheet name: "Contacts"

🎉 Configuration looks good!

Next steps:
1. Share your Google Sheet with the service account email ✅
2. Add headers to your sheet ✅
3. Restart your dev server: npm run dev
4. Test by submitting the contact form
```

### Restart Server
```bash
# Stop current server (Ctrl+C)
npm run dev
```

### Submit Test Form
```
👉 Go to: http://localhost:3000/contact
👉 Fill out form:
   - Name: Test User
   - Email: test@example.com  
   - Phone: 07123456789
   - Service: Emergency Locksmith
   - Message: Testing Google Sheets integration!
👉 Click: Submit
```

### Check Results
```
✅ Success message appears on website
✅ Check Google Sheet - new row added!
✅ Check admin panel: /admin/contacts
✅ Data matches what you submitted
```

---

## 🎉 SUCCESS! 

Your contact form now saves directly to Google Sheets!

---

## 🔧 Troubleshooting

### ❌ "Credentials not configured"
**Fix:** Check `.env.local` has all values filled in

### ❌ "Invalid private key"
**Fix:** 
- Make sure key is on ONE line
- Has `\n` between sections
- Includes BEGIN/END markers

### ❌ "Permission denied"
**Fix:** Share sheet with service account email as Editor

### ❌ "No data in sheet"
**Fix:**
- Check headers match exactly
- Check sheet name is "Contacts"
- Look at browser console for errors

---

## 📊 Visual Flow

```
┌─────────────┐
│   Visitor   │
│  fills out  │
│contact form │
└──────┬──────┘
       │
       ▼
┌─────────────────┐
│  Next.js API    │
│ Route validates │
│     & saves     │
└──────┬──────────┘
       │
       ▼
┌─────────────────┐
│  Google Sheets  │
│  adds new row   │
│  automatically  │
└──────┬──────────┘
       │
       ▼
┌─────────────────┐
│  Admin Panel    │
│  shows data at  │
│  /admin/contacts│
└─────────────────┘
```

---

## ✅ Checklist

Before testing, make sure:

- [ ] Created Google Cloud project
- [ ] Enabled Sheets API
- [ ] Created service account
- [ ] Downloaded JSON key
- [ ] Extracted email from JSON
- [ ] Formatted private key correctly (one line with `\n`)
- [ ] Updated `.env.local` with real values
- [ ] Shared sheet with service account email
- [ ] Added headers to sheet (ID, Name, Email, etc.)
- [ ] Restarted dev server
- [ ] Tested form submission

**All checked?** It should work! 🎉

---

## 📞 Quick Reference

**Commands:**
```bash
npm run check-google-sheets  # Verify config
npm run dev                  # Start server
npm run build                # Build for production
```

**URLs:**
- Contact Form: `/contact`
- Admin Contacts: `/admin/contacts`
- Your Sheet: https://docs.google.com/spreadsheets/d/1Y4D69zS4dHhO5LcYZvBFog94RyFgZGcnd-w56pdP3Yg/edit

**Files:**
- `.env.local` - Your credentials (secret!)
- `lib/google-sheets.ts` - Integration code
- `GOOGLE_SHEETS_SETUP.md` - Detailed guide

---

**Need more help?** Read `GOOGLE_SHEETS_SETUP.md` for detailed instructions.

**Good luck!** 🚀
