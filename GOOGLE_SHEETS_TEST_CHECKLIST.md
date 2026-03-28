# Google Sheets Integration - Quick Test Checklist

## ✅ Pre-Setup Verification

### 1. Check Your Files Exist
- [ ] `.env.local` file exists in project root
- [ ] `lib/google-sheets.ts` exists
- [ ] `app/api/contact/route.ts` has been updated
- [ ] `app/api/contacts/route.ts` exists
- [ ] `GOOGLE_SHEETS_SETUP.md` exists

### 2. Verify Package Installation
Run: `npm list googleapis`
Should show: `googleapis@xx.x.x` (version number)

---

## 🔧 Setup Steps

### Step 1: Google Cloud Console
1. Go to https://console.cloud.google.com/
2. Create or select a project
3. Enable Google Sheets API
4. Create Service Account
5. Download JSON key file

### Step 2: Get Credentials
From downloaded JSON:
- Copy `client_email` → Use for `GOOGLE_SERVICE_ACCOUNT_EMAIL`
- Copy `private_key` → Use for `GOOGLE_PRIVATE_KEY`

**⚠️ CRITICAL: Format Private Key Correctly**
The private key in the JSON file looks like this:
```
-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...
...more lines...
...abcdefg==
-----END PRIVATE KEY-----
```

You need to convert it to ONE LINE by replacing newlines with `\n`:
```
"-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...\n...abcdefg==\n-----END PRIVATE KEY-----\n"
```

### Step 3: Update .env.local
Open `.env.local` and replace:
- `your-service-account@your-project.iam.gserviceaccount.com` with your actual service account email
- The entire private key string with your formatted one-line key
- Sheet ID is already correct: `1Y4D69zS4dHhO5LcYZvBFog94RyFgZGcnd-w56pdP3Yg`
- Sheet name should be `Contacts` (or rename your sheet tab)

### Step 4: Share Google Sheet
1. Open: https://docs.google.com/spreadsheets/d/1Y4D69zS4dHhO5LcYZvBFog94RyFgZGcnd-w56pdP3Yg/edit
2. Click **Share** button
3. Add your service account email (the one from `GOOGLE_SERVICE_ACCOUNT_EMAIL`)
4. Give **Editor** permissions
5. Click **Done**

### Step 5: Set Up Sheet Headers
In your Google Sheet, row 1 should have:
| A | B | C | D | E | F | G |
|---|---|---|---|---|---|---|
| ID | Name | Email | Phone | Service | Message | Timestamp |

---

## 🧪 Testing

### Test 1: Environment Variables Loaded
1. Start dev server: `npm run dev`
2. Check terminal - should see no errors about env vars
3. In browser console, you can check if app loads without errors

### Test 2: Submit Contact Form
1. Go to your website's contact page
2. Fill out the form:
   - Name: Test User
   - Email: test@example.com
   - Phone: 07123456789
   - Service: Emergency Locksmith
   - Message: This is a test submission
3. Submit the form
4. Check:
   - ✅ Success message appears
   - ✅ Check browser console for logs
   - ✅ Check your Google Sheet - new row should appear
   - ✅ Data should match what you submitted

### Test 3: Admin Panel
1. Go to `/admin/contacts`
2. You should see all submissions from Google Sheets
3. Check if test submission appears

---

## 🐛 Common Issues & Solutions

### Issue: "Google Sheets credentials not configured"
**Cause:** Environment variables not set or loaded

**Solution:**
1. Check `.env.local` exists
2. Verify all 4 variables are set
3. Restart dev server
4. Check terminal for any warnings

---

### Issue: "Invalid private key format"
**Cause:** Private key not formatted correctly

**Solution:**
1. Ensure key is on ONE line
2. Replace actual newlines with `\n` characters
3. Include `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----`
4. No extra spaces at start/end
5. Should look like: `"-----BEGIN PRIVATE KEY-----\nABC...\n-----END PRIVATE KEY-----\n"`

---

### Issue: "Permission denied" or "403 Error"
**Cause:** Service account doesn't have access to the sheet

**Solution:**
1. Verify you shared the sheet with the CORRECT email (from `GOOGLE_SERVICE_ACCOUNT_EMAIL`)
2. Make sure you gave **Editor** access (not just Viewer)
3. Wait 1-2 minutes after sharing and try again

---

### Issue: "Cannot find module '@/lib/google-sheets'"
**Cause:** Import path issue

**Solution:**
1. Check `tsconfig.json` has `paths` configured for `@/*`
2. Restart dev server
3. Clear `.next` folder: `rm -rf .next` then `npm run dev`

---

### Issue: Data saves but columns are wrong
**Cause:** Sheet headers don't match data order

**Solution:**
Verify your sheet headers in row 1 match this order:
- A1: ID
- B1: Name
- C1: Email
- D1: Phone
- E1: Service
- F1: Message
- G1: Timestamp

---

## 📊 Expected Behavior

### When Working Correctly:
✅ Form submission shows success message
✅ New row appears in Google Sheet within 1-2 seconds
✅ Admin panel shows all submissions
✅ Console logs show "Data appended to Google Sheet successfully"
✅ Each submission has unique timestamp

### If Not Working:
❌ Error messages in browser console
❌ Terminal shows errors
❌ No data in Google Sheet
❌ Admin panel shows empty list

**Check:**
1. All credentials are correct
2. Sheet is shared properly
3. Headers are set up
4. Server is restarted after `.env.local` changes

---

## 🎯 Production Deployment

When deploying to Vercel/Netlify:

1. **Add Environment Variables** in platform dashboard:
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - `GOOGLE_PRIVATE_KEY` (with `\n` for newlines)
   - `GOOGLE_SHEET_ID`
   - `GOOGLE_SHEET_NAME`

2. **DO NOT** upload `.env.local` file

3. **Test** after deployment to ensure it works

---

## 📞 Quick Reference

**Files Modified/Created:**
- `.env.local` - Your credentials (NOT in git)
- `lib/google-sheets.ts` - Google Sheets functions
- `app/api/contact/route.ts` - Saves form to sheet
- `app/api/contacts/route.ts` - Fetches from sheet
- `GOOGLE_SHEETS_SETUP.md` - Full documentation

**Commands:**
```bash
npm run dev          # Start development server
npm list googleapis  # Check if package installed
```

**Key URLs:**
- Contact Form: `/contact`
- Admin Contacts: `/admin/contacts`
- Google Sheet: https://docs.google.com/spreadsheets/d/1Y4D69zS4dHhO5LcYZvBFog94RyFgZGcnd-w56pdP3Yg/edit

---

## ✨ That's It!

Once everything is set up, every contact form submission will automatically appear in your Google Sheet! 🎉

Need help? Review the troubleshooting section or check each step carefully.
