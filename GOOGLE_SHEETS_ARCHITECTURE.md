# 🏗️ Google Sheets Integration Architecture

## System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                     CAR KEYS STOCKPORT                          │
│                         WEBSITE                                 │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │
        ┌─────────────────────┴─────────────────────┐
        │                                           │
        ▼                                           ▼
┌──────────────────┐                    ┌──────────────────┐
│  Contact Form    │                    │   Admin Panel    │
│   /contact       │                    │  /admin/contacts │
│                  │                    │                  │
│  • Name          │                    │  • View all      │
│  • Email         │                    │  • Filter        │
│  • Phone         │                    │  • Export        │
│  • Service       │                    │                  │
│  • Message       │                    │                  │
└────────┬─────────┘                    └─────────▲────────┘
         │                                        │
         │ POST                                   │ GET
         ▼                                        │
┌─────────────────────────────────────────────────┴────────┐
│              NEXT.JS API ROUTES                          │
│                                                          │
│  ┌────────────────────┐    ┌────────────────────┐       │
│  │ /api/contact       │    │ /api/contacts      │       │
│  │ (POST)             │    │ (GET)              │       │
│  │                    │    │                    │       │
│  │ • Validate         │    │ • Fetch from       │       │
│  │ • Save to Sheet    │    │   Google Sheets    │       │
│  │ • Return success   │    │ • Return JSON      │       │
│  └────────┬───────────┘    └─────────▲──────────┘       │
└───────────┼──────────────────────────┼──────────────────┘
            │                          │
            │ appendToGoogleSheet()    │ getGoogleSheetData()
            │                          │
            └──────────┬───────────────┘
                       │
                       │ Google Sheets API v4
                       │
                       ▼
            ┌─────────────────────────┐
            │   GOOGLE CLOUD PLATFORM │
            │                         │
            │  ┌──────────────────┐   │
            │  │ Service Account  │   │
            │  │ Authentication   │   │
            │  └────────┬─────────┘   │
            └───────────┼─────────────┘
                        │
                        │
                        ▼
            ┌─────────────────────────┐
            │    GOOGLE SHEETS API    │
            │                         │
            │  spreadsheets.values    │
            │    .append()            │
            │    .get()               │
            └───────────┬─────────────┘
                        │
                        │
                        ▼
┌───────────────────────────────────────────────────────────┐
│                    YOUR GOOGLE SHEET                      │
│                                                           │
│  URL: docs.google.com/spreadsheets/d/1Y4D69zS4dHhO5Lc... │
│                                                           │
│  ┌─────┬──────┬───────┬───────┬─────────┬─────────┬──────┐
│  │ ID  │Name  │Email  │Phone  │Service  │Message  │Time  │
│  ├─────┼──────┼───────┼───────┼─────────┼─────────┼──────┤
│  │ 001 │John  │j@...  │07123..│Emergency│Help!   │10:30 │
│  │ 002 │Jane  │ja@... │07987..│Key Prog │Need key│11:45 │
│  └─────┴──────┴───────┴───────┴─────────┴─────────┴──────┘
└───────────────────────────────────────────────────────────┘
```

---

## Data Flow

### 1. Contact Form Submission (Write Path)

```
User fills form
      ↓
Frontend validates (React Hook Form + Zod)
      ↓
POST /api/contact
      ↓
API validates data
      ↓
Create Google Auth client
      ↓
Call sheets.spreadsheets.values.append()
      ↓
Google Sheets adds new row
      ↓
Return success to user
      ↓
Show success message
```

### 2. Admin Panel Display (Read Path)

```
Admin visits /admin/contacts
      ↓
Frontend calls GET /api/contacts
      ↓
Create Google Auth client
      ↓
Call sheets.spreadsheets.values.get()
      ↓
Google Sheets returns data
      ↓
Convert rows to objects
      ↓
Return JSON to frontend
      ↓
Display in table/cards
```

---

## Component Breakdown

### Frontend Components

```
app/
├── contact/
│   ├── page.tsx          → Contact form page
│   └── contact-form.tsx  → Form component with validation
│
└── admin/
    └── contacts/
        └── page.tsx      → Admin contacts viewer
```

### Backend Components

```
app/api/
├── contact/
│   └── route.ts          → POST handler (saves to sheet)
│
└── contacts/
    └── route.ts          → GET handler (fetches from sheet)
```

### Utility Layer

```
lib/
└── google-sheets.ts      → Google Sheets API wrapper
    ├── appendToGoogleSheet()
    └── getGoogleSheetData()
```

### Configuration

```
.env.local                → Credentials
├── GOOGLE_SERVICE_ACCOUNT_EMAIL
├── GOOGLE_PRIVATE_KEY
├── GOOGLE_SHEET_ID
└── GOOGLE_SHEET_NAME
```

---

## Security Model

```
┌─────────────────────────────────────────┐
│         SECURITY LAYERS                 │
├─────────────────────────────────────────┤
│                                         │
│  1. Environment Variables               │
│     • Credentials in .env.local         │
│     • NOT committed to git              │
│     • Protected by .gitignore           │
│                                         │
│  2. Service Account                     │
│     • Limited scope (Sheets only)       │
│     • Specific spreadsheet access       │
│     • No user data exposure             │
│                                         │
│  3. API Routes                          │
│     • Server-side only                  │
│     • Client never sees credentials     │
│     • Input validation                  │
│                                         │
│  4. Google Sheets Permissions           │
│     • Editor access only for SA         │
│     • Controlled sharing                │
│     • Audit trail in Google             │
│                                         │
└─────────────────────────────────────────┘
```

---

## File Dependencies

```
Contact Form Components
│
├─→ app/api/contact/route.ts
│   │
│   ├─→ lib/google-sheets.ts
│   │   │
│   │   └─→ googleapis package
│   │
│   └─→ .env.local (credentials)
│
└─→ Google Sheets API
    │
    └─→ Your Spreadsheet


Admin Contacts Page
│
├─→ app/api/contacts/route.ts
│   │
│   ├─→ lib/google-sheets.ts
│   │   │
│   │   └─→ googleapis package
│   │
│   └─→ .env.local (credentials)
│
└─→ Google Sheets API
    │
    └─→ Your Spreadsheet
```

---

## Technology Stack

```
┌───────────────────────────────────────┐
│           TECHNOLOGY STACK            │
├───────────────────────────────────────┤
│                                       │
│  Framework: Next.js 15.5.9            │
│  React: 18.3.1                        │
│  TypeScript: 5.x                      │
│                                       │
│  API: Google Sheets API v4            │
│  Client: googleapis (npm)             │
│  Auth: Service Account (JWT)          │
│                                       │
│  Forms: React Hook Form 7.60.0        │
│  Validation: Zod 3.25.67              │
│  UI: Radix UI + Tailwind CSS          │
│                                       │
│  Deployment: Vercel-ready             │
│  Env Management: .env.local           │
│                                       │
└───────────────────────────────────────┘
```

---

## API Endpoints

### POST /api/contact

**Purpose:** Save contact form submission to Google Sheets

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "07123456789",
  "service": "Emergency Locksmith",
  "message": "Lost my keys, need help!"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Your message has been received",
  "savedToSheet": true
}
```

**Response (Error):**
```json
{
  "error": "Missing required fields: name, phone, and message are required"
}
```

---

### GET /api/contacts

**Purpose:** Fetch all contact submissions from Google Sheets

**Response:**
```json
{
  "contacts": [
    {
      "id": "001",
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "07123456789",
      "service": "Emergency Locksmith",
      "message": "Lost my keys, need help!",
      "createdAt": "2026-03-26T10:30:00.000Z"
    }
  ]
}
```

---

## Google Sheets Functions

### appendToGoogleSheet(data)

**Location:** `lib/google-sheets.ts`

**Parameters:**
- `data: Record<string, any>` - Object with contact info

**Returns:**
```typescript
Promise<{
  success: boolean;
  message: string;
}>
```

**Side Effects:**
- Adds new row to Google Sheet
- Logs to console

**Example:**
```typescript
await appendToGoogleSheet({
  name: "John",
  email: "john@example.com",
  phone: "07123456789",
  service: "Emergency",
  message: "Help needed"
})
```

---

### getGoogleSheetData()

**Location:** `lib/google-sheets.ts`

**Parameters:** None

**Returns:**
```typescript
Promise<Array<{
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  createdAt: string;
}>>
```

**Side Effects:**
- Reads from Google Sheet
- Logs to console

**Example:**
```typescript
const contacts = await getGoogleSheetData()
// Returns array of contact objects
```

---

## Error Handling

```
┌─────────────────────────────────────┐
│      ERROR HANDLING STRATEGY        │
├─────────────────────────────────────┤
│                                     │
│  Level 1: Validation Errors         │
│  • Missing fields                   │
│  • Invalid format (email, phone)    │
│  • Return 400 Bad Request           │
│                                     │
│  Level 2: Configuration Errors      │
│  • Missing credentials              │
│  • Invalid private key              │
│  • Log warning, skip sheet update   │
│                                     │
│  Level 3: API Errors                │
│  • Permission denied                │
│  • Network issues                   │
│  • Return 500 Internal Server Error │
│                                     │
│  Level 4: Sheet Errors              │
│  • Sheet not found                  │
│  • Headers mismatch                 │
│  • Log error, return failure        │
│                                     │
└─────────────────────────────────────┘
```

---

## Performance Characteristics

### Write Operation (Save to Sheet)

```
┌──────────────────────────────────────┐
│  Metric          │  Value            │
├──────────────────┼───────────────────┤
│  Latency         │  500-2000ms       │
│  Depends on      │  Network, Google  │
│  Concurrent ops  │  Supported        │
│  Rate limit      │  100 req/100s     │
└──────────────────┴───────────────────┘
```

### Read Operation (Fetch from Sheet)

```
┌──────────────────────────────────────┐
│  Metric          │  Value            │
├──────────────────┼───────────────────┤
│  Latency         │  300-1500ms       │
│  Depends on      │  Data size        │
│  Cache strategy  │  Client-side      │
│  Rate limit      │  500 req/100s     │
└──────────────────┴───────────────────┘
```

---

## Scalability Considerations

### Current Design

✅ **Good for:**
- Up to 100 submissions/day
- Up to 10,000 total rows in sheet
- Single location business
- Simple contact forms

⚠️ **Limitations:**
- Google Sheets has row limits (~10M cells)
- API rate limits apply
- Not suitable for high-frequency data
- No complex querying

### Future Enhancements

If you outgrow this:

1. **Add Database:** PostgreSQL/MongoDB
2. **Add Queue:** Redis/RabbitMQ for batching
3. **Add Caching:** Redis for frequent reads
4. **Keep Sheets:** For reporting/analytics

---

## Monitoring Points

### What to Watch

```
✓ Form submission success rate
✓ Google Sheets API errors
✓ Response times
✓ Rate limit usage
✓ Sheet row count
✓ Permission errors
```

### Where to Check

```
• Browser Console (frontend errors)
• Terminal/Logs (backend errors)
• Google Cloud Console (API usage)
• Google Sheet (data verification)
• Admin Panel (data display)
```

---

## Testing Strategy

### Unit Tests (Recommended)

```typescript
// Test appendToGoogleSheet
// Test getGoogleSheetData
// Test validation logic
// Test error handling
```

### Integration Tests

```typescript
// Test full form submission flow
// Test admin panel data fetch
// Test API endpoints
```

### Manual Tests

```
✓ Submit contact form
✓ Verify sheet update
✓ Check admin panel
✓ Test error cases
✓ Verify validation
```

---

## Deployment Checklist

### Before Deploy

- [ ] All env vars set in production
- [ ] Service account has production sheet access
- [ ] Sheet headers configured
- [ ] Tested in staging
- [ ] Error logging enabled
- [ ] Rate limits understood
- [ ] Backup strategy in place

### After Deploy

- [ ] Test form submission
- [ ] Verify sheet updates
- [ ] Check admin panel
- [ ] Monitor error logs
- [ ] Verify performance

---

**This architecture provides a simple, effective solution for small to medium businesses!** 🚀
