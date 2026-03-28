# 📋 Google Sheets Integration Setup Guide

## Overview
Your contact form is now integrated with Google Sheets! All form submissions will be automatically saved to your spreadsheet.

## 📊 Your Spreadsheet
**Spreadsheet URL:** https://docs.google.com/spreadsheets/d/1Y4D69zS4dHhO5LcYZvBFog94RyFgZGcnd-w56pdP3Yg/edit

## 🔐 Step-by-Step Setup Instructions

### Step 1: Create Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click **"Create Project"** or select an existing project
3. Name it something like "Car Keys Stockport"

### Step 2: Enable Google Sheets API
1. In your project, go to **APIs & Services** > **Library**
2. Search for "Google Sheets API"
3. Click on it and press **Enable**

### Step 3: Create Service Account
1. Go to **APIs & Services** > **Credentials**
2. Click **+ CREATE CREDENTIALS** > **Service account**
3. Fill in:
   - **Service account name**: `car-keys-forms`
   - **Service account ID**: (auto-generated)
   - **Description**: `Service account for contact form submissions`
4. Click **CREATE AND CONTINUE**
5. Skip granting user access (click **CONTINUE**)
6. Click **DONE**

### Step 4: Generate Service Account Key
1. Click on the newly created service account
2. Go to the **KEYS** tab
3. Click **ADD KEY** > **Create new key**
4. Select **JSON** format
5. Click **CREATE**
6. A JSON file will download - **keep this secure!**

### Step 5: Get Credentials from JSON
Open the downloaded JSON file. You'll see something like:
```json
{
  "type": "service_account",
  "project_id": "your-project-id",
  "private_key_id": "...",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQ...\n-----END PRIVATE KEY-----\n",
  "client_email": "car-keys-forms@your-project.iam.gserviceaccount.com",
  "client_id": "...",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  ...
}
```

You need:
- `client_email` → This is your **GOOGLE_SERVICE_ACCOUNT_EMAIL**
- `private_key` → This is your **GOOGLE_PRIVATE_KEY** (include the entire string with BEGIN/END markers)

### Step 6: Share Google Sheet with Service Account
1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1Y4D69zS4dHhO5LcYZvBFog94RyFgZGcnd-w56pdP3Yg/edit
2. Click the **Share** button (top right)
3. Click **Copy link** and set it to "Anyone with the link can view" OR
4. Under "Add people and groups", paste the `client_email` from Step 5
5. Give it **Editor** access
6. Click **Send** / **Done**

### Step 7: Configure Environment Variables
1. Open the `.env.local` file in your project root
2. Replace the placeholder values:

```bash
# Replace with your actual service account email
GOOGLE_SERVICE_ACCOUNT_EMAIL=car-keys-forms@your-project-12345.iam.gserviceaccount.com

# Replace with your actual private key (include quotes and escape newlines)
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIE...your-key-here...\n-----END PRIVATE KEY-----\n"

# This is already set correctly from your URL
GOOGLE_SHEET_ID=1Y4D69zS4dHhO5LcYZvBFog94RyFgZGcnd-w56pdP3Yg

# Make sure this matches your sheet tab name (default is "Sheet1" or "Contacts")
GOOGLE_SHEET_NAME=Contacts
```

**⚠️ IMPORTANT for Private Key:**
- Include the entire key including `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----`
- Replace actual newlines with `\n` (backslash + n)
- Keep it all in one line within quotes
- Example: `"-----BEGIN PRIVATE KEY-----\nABC123...\n-----END PRIVATE KEY-----\n"`

### Step 8: Set Up Your Google Sheet
1. Open your spreadsheet
2. Rename "Sheet1" to "Contacts" (or update `GOOGLE_SHEET_NAME` in `.env.local`)
3. Add these headers in row 1:
   - **A1**: `ID`
   - **B1**: `Name`
   - **C1**: `Email`
   - **D1**: `Phone`
   - **E1**: `Service`
   - **F1**: `Message`
   - **G1**: `Timestamp`

### Step 9: Test the Integration
1. Restart your development server: `npm run dev`
2. Go to your contact form page
3. Submit a test message
4. Check your Google Sheet - you should see the data appear!
5. Check the browser console for any errors

## 🎯 What Happens Now?

✅ **Every time someone submits the contact form:**
- Data is automatically saved to your Google Sheet
- Each submission gets a unique ID and timestamp
- You can view all submissions in real-time

✅ **Admin Panel:**
- Visit `/admin/contacts` to see all form submissions
- Data is pulled directly from Google Sheets
- No database needed!

## 🔧 Troubleshooting

### "Google Sheets credentials not configured"
- Check that all three environment variables are set in `.env.local`
- Make sure there are no extra spaces or quotes
- Restart your dev server after changing `.env.local`

### "Permission denied" or "403 Error"
- Make sure you've shared the Google Sheet with the service account email
- The service account needs **Editor** access
- Double-check the spreadsheet ID matches your URL

### "Invalid private key"
- Ensure the private key is on one line with `\n` for newlines
- Include the `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----` markers
- Make sure there are no extra spaces at the beginning or end

### Data not appearing in sheet
- Check the browser console and terminal for error messages
- Verify the sheet name matches (`Contacts` vs `Sheet1`)
- Make sure headers are set up correctly in row 1

## 📝 Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | Service account email from Google Cloud | `car-keys-forms@project.iam.gserviceaccount.com` |
| `GOOGLE_PRIVATE_KEY` | Private key (one line, with `\n`) | `"-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"` |
| `GOOGLE_SHEET_ID` | Your spreadsheet ID (from URL) | `1Y4D69zS4dHhO5LcYZvBFog94RyFgZGcnd-w56pdP3Yg` |
| `GOOGLE_SHEET_NAME` | Tab/sheet name | `Contacts` |

## 🔒 Security Notes

- ⚠️ **NEVER** commit `.env.local` to Git (it's already in `.gitignore`)
- ⚠️ **NEVER** share your private key publicly
- ✅ Store your credentials securely
- ✅ Use environment variables in production (Vercel, Netlify, etc.)

## 🚀 Deploying to Production

When deploying to Vercel/Netlify/other platforms:
1. Go to your project settings
2. Find **Environment Variables** section
3. Add all four variables:
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - `GOOGLE_PRIVATE_KEY`
   - `GOOGLE_SHEET_ID`
   - `GOOGLE_SHEET_NAME`

## 📊 Customization

### Change Sheet Columns
Edit `lib/google-sheets.ts` and modify the `values` array in `appendToGoogleSheet()`:

```typescript
const values = [
  [
    data.id || Date.now(),      // Column A
    data.name || '',             // Column B
    data.email || '',            // Column C
    data.phone || '',            // Column D
    data.service || '',          // Column E
    data.message || '',          // Column F
    timestamp,                   // Column G
  ],
]
```

### Add More Fields
Just add more properties to the data object and they'll be added as new columns!

---

## ✅ Quick Checklist

- [ ] Created Google Cloud project
- [ ] Enabled Google Sheets API
- [ ] Created service account
- [ ] Downloaded JSON key file
- [ ] Shared Google Sheet with service account
- [ ] Updated `.env.local` with credentials
- [ ] Set up sheet headers
- [ ] Tested form submission
- [ ] Verified data appears in Google Sheet

**Need help?** Check the troubleshooting section or review each step carefully!

🎉 **Congratulations! Your contact form is now integrated with Google Sheets!** 🎉
