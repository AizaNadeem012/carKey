# Service Hub Pro Integration - Car Key Stockport

## Integration Complete! ✅

Your contact form is now connected to Service Hub Pro admin panel.

## How It Works:

1. **Customer fills form** on Car Key Stockport website
2. **Data is saved** to Service Hub Pro backend
3. **You can view** all submissions in the admin panel

## How to Run:

### Option 1: Use the Startup Script (Easiest)
Double-click `start-with-admin.bat` file

This will automatically start both servers:
- Car Key Stockport website: http://localhost:3000
- Service Hub Pro admin panel: http://localhost:5173

### Option 2: Manual Start

**Terminal 1 - Start Service Hub Pro Backend:**
```bash
cd service-hub-pro-main\service-hub-pro-main
npx tsx server.ts
```

**Terminal 2 - Start Car Key Stockport Website:**
```bash
pnpm dev
```

**Terminal 3 - Start Service Hub Pro Frontend (Admin Panel):**
```bash
cd service-hub-pro-main\service-hub-pro-main
npm run dev
```

## How to Use:

### Step 1: Start the Servers
Run the `start-with-admin.bat` file or manually start all servers as shown above.

### Step 2: Test the Contact Form
1. Open http://localhost:3000/contact
2. Fill out the contact form with test data
3. Click "Send Message"

### Step 3: View Submissions in Admin Panel
1. Open http://localhost:5173
2. Login (if required)
3. Navigate to "Contacts" page
4. You will see all form submissions with:
   - Customer name
   - Email address
   - Phone number
   - Service required
   - Message
   - Timestamp

## Data Flow:

```
Contact Form (Port 3000)
        ↓
Service Hub Pro API (Port 3001)
        ↓
Admin Panel - Contacts Page (Port 5173)
```

## Features:

✅ All contact form fields are captured:
- Name
- Email
- Phone
- Service Type
- Message

✅ Real-time data sync
✅ Easy to view in admin panel
✅ Timestamp tracking

## Testing:

1. Go to http://localhost:3000/contact
2. Fill the form:
   - Name: Test Customer
   - Email: test@example.com
   - Phone: 07123456789
   - Service: Car Key Replacement
   - Message: I need a new car key
3. Submit the form
4. Go to http://localhost:5173/contacts
5. You should see your submission!

## Notes:

- Currently using in-memory storage (data resets when server restarts)
- For production, you can connect a database to the server.ts file
- Both servers must be running for the integration to work

## Troubleshooting:

**Form not submitting?**
- Check if Service Hub Pro backend is running on port 3001
- Check browser console for errors

**Can't see data in admin panel?**
- Refresh the Contacts page
- Make sure backend server is running

**Port conflicts?**
- Change ports in server.ts and update the URL in contact-form.tsx

---

**Need Help?** 
Check that all three components are running:
1. ✅ Car Key Stockport website (Port 3000)
2. ✅ Service Hub Pro backend API (Port 3001)
3. ✅ Service Hub Pro admin panel (Port 5173)
