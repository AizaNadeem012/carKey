# Dashboard Real-time Update Test Guide ✅

## How to Test: Completed Orders Should Update Automatically

### Test Scenario:
Jab aap Orders page mein kisi order ko **"Completed"** mark karte ho, toh Dashboard mein **Completed Orders** ka number turant update hona chahiye.

---

## Step-by-Step Testing:

### Method 1: Same Tab (Instant Update)

1. **Open Dashboard:**
   - Navigate to: `http://localhost:3000/admin/dashboard`
   - Note the current "Completed Orders" count
   - Example: "Completed Orders: 5"

2. **Go to Orders Page:**
   - Navigate to: `http://localhost:3000/admin/orders`
   - Find any order with status "Pending" or "In Progress"

3. **Change Status to Completed:**
   - Click on the status dropdown
   - Select "Completed"
   - You should see:
     - ✅ Status badge changes to green immediately
     - ✅ Toast notification: "Order ORD-XXX updated - Status changed to Completed"

4. **Switch Back to Dashboard:**
   - Go back to dashboard tab
   - **Expected Result:**
     - ✅ "Completed Orders" count increases by 1
     - ✅ "Pending Orders" count decreases (if changed from Pending)
     - ✅ Update happens within 1-2 seconds

---

### Method 2: Different Tabs (Cross-tab Sync)

1. **Open Dashboard in Tab 1:**
   - URL: `http://localhost:3000/admin/dashboard`
   - Keep this tab open

2. **Open Orders in Tab 2:**
   - URL: `http://localhost:3000/admin/orders`
   - Use a different browser tab

3. **Change Status in Tab 2:**
   - In Orders tab, change any order to "Completed"
   - You should see success toast

4. **Check Dashboard in Tab 1:**
   - Switch to Dashboard tab
   - **Expected Result:**
     - ✅ Dashboard automatically refreshes
     - ✅ "Completed Orders" count updates
     - ✅ Happens within 5 seconds (polling fallback)

---

## What Should Update on Dashboard:

### Stats Cards:
```
┌─────────────────┬─────────────────┬─────────────────┬─────────────────┐
│ Total Orders    │ Pending Orders  │ Completed Orders│ Total Revenue   │
│       25        │        8        │        12       │   £45,230       │
│                 │   (decreases)   │   (increases)   │                 │
└─────────────────┴─────────────────┴─────────────────┴─────────────────┘
```

### Example Flow:

**Before:**
- Total Orders: 24
- Pending Orders: 8
- Completed Orders: 12
- In Progress: 4

**You Change:** Order #ORD-123 from "Pending" → "Completed"

**After:**
- Total Orders: 24 (no change)
- Pending Orders: 7 ⬇️ (-1)
- Completed Orders: 13 ⬆️ (+1)
- In Progress: 4 (no change)

---

## Console Logs to Verify:

### In Orders Page (when changing status):
```
🔄 Updating order status: { id: 'ORD-123', newStatus: 'completed' }
📡 Response status: 200
📡 API Response: { success: true, orderId: 'ORD-123', newStatus: 'completed' }
✅ Google Sheets updated: { success: true, orderId: 'ORD-123', newStatus: 'completed' }
📢 Dispatching event: { id: 'ORD-123', newStatus: 'completed', timestamp: 1234567890 }
💾 Stored in localStorage: { id: 'ORD-123', newStatus: 'completed', timestamp: 1234567890 }
```

### In Dashboard Page (when receiving update):
```
🎯 Order status changed event received: { id: 'ORD-123', newStatus: 'completed', timestamp: 1234567890 }
🔄 Fetching dashboard data...
📊 Received orders: 24
✅ Dashboard stats updated: { totalOrders: 24, pendingOrders: 7, completedOrders: 13, ... }
```

---

## Troubleshooting:

### Issue: Dashboard Doesn't Update Immediately

**Solution 1: Check Browser Console**
- Press F12 → Console tab
- Look for error messages
- Should see: "🎯 Order status changed event received"

**Solution 2: Verify Event Listener**
- In Dashboard console, type:
```javascript
window.hasEventListener = true // temporary flag
```
- Then check if events are firing

**Solution 3: Manual Refresh**
- If auto-update fails, press F5 to refresh dashboard
- Stats should show updated numbers after page reload

**Solution 4: Check Google Sheets**
- Open your Google Sheet
- Verify the order status actually changed to "completed"
- If not changed in Sheet, API might have failed

---

## Quick Verification Commands:

### Check if Events are Working:
Open browser console on Dashboard page and run:
```javascript
window.addEventListener('order-status-changed', (e) => {
  console.log('✅ Event listener working!', e.detail);
});
```

Then change an order status - you should see the log.

### Check Current Stats:
Open browser console on Dashboard page and run:
```javascript
console.log('Current stats:', window.dashboardStats);
```

---

## Success Criteria:

✅ **Test Passes If:**
1. Status changes instantly in Orders page UI
2. Toast notification appears
3. Dashboard "Completed Orders" count increases
4. Dashboard "Pending Orders" count decreases (if from Pending)
5. Update happens within 5 seconds maximum

❌ **Test Fails If:**
1. No instant UI update in Orders page
2. Error toast appears
3. Dashboard numbers don't change
4. Need to manually refresh dashboard

---

## Common Issues & Fixes:

| Issue | Cause | Fix |
|-------|-------|-----|
| No toast message | API call failed | Check Google Sheets credentials |
| UI updates but reverts | Google Sheets update failed | Verify column structure |
| Dashboard doesn't update | Event not dispatched | Check browser console for errors |
| Cross-tab sync fails | localStorage blocked | Allow cookies/storage |

---

## Expected Behavior Summary:

```
User Action          →  Orders Page      →  Dashboard
─────────────────────────────────────────────────────────────
Select "Completed"   →  Instant UI update →  (waiting...)
                     →  API call          →  (waiting...)
                     →  Google Sheets ✓   →  (waiting...)
                     →  Dispatch event ─────→  Receives event
                                            ↓
                                     Fetch data
                                            ↓
                                     Update stats
                                            ↓
                                     Show new count ✅
```

---

**Test Karne Ke Baad:**
Agar sab kuch sahi hai, toh aapko har baar order complete karne par dashboard mein **Completed Orders** count badhta hua dikhai dega! 🎉
