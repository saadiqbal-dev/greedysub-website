# GreedySub Dashboard / Settings Page — Build Spec

> **Design Rule #0:** The real dashboard must look **identical** to the browser-mock UI shown in the landing-page hero (`src/components/Hero.jsx`). Copy the layout, spacing, colours, typography, shadows, borders, and radius values exactly. Do not redesign — implement.

---

## 1. Goal

Transform the static mock-up inside `Hero.jsx` into the **living extension dashboard**. Every visual decision has already been made in the landing page. Your job is to:

1. Extract the markup from the `.panel` block in `Hero.jsx`.
2. Replace static text with dynamic React props/state.
3. Wire up CRUD, storage, and interactions.
4. Keep the styling 1:1 with the existing `src/index.css` tokens.

---

## 2. Source of Truth — The Hero Mock-Up

Open `src/components/Hero.jsx`. The dashboard lives inside this structure:

```
<div className="browser">
  <div className="browser-bar"> ... </div>
  <div className="panel">
    <aside className="panel-side"> ... </aside>
    <div className="panel-main"> ... </div>
  </div>
</div>
```

**You must reuse these exact class names and DOM hierarchy.** The CSS is already written in `src/index.css`.

### What to keep pixel-perfect

| Element | Class(es) | Notes |
|---------|-----------|-------|
| Outer chrome | `.browser` | White bg, `1px solid var(--line)`, `border-radius: 16px`, `box-shadow: var(--shadow-lg)` |
| Browser bar | `.browser-bar` | `background: var(--bg-2)`, traffic-light dots, URL bar, extension icon |
| URL bar | `.urlbar` | Height 28px, rounded 7px, lock icon prefix (pseudo-element) |
| Two-column layout | `.panel` | `grid-template-columns: 280px 1fr` |
| Left sidebar | `.panel-side` | `background: var(--bg-2)`, `border-right: 1px solid var(--line)` |
| Sidebar labels | `.side-label` | 11px uppercase, `letter-spacing: 0.08em`, `color: var(--ink-3)` |
| Stat cards | `.stat` | White bg, `border: 1px solid var(--line)`, `border-radius: 12px`, padding 14px |
| Stat numbers | `.stat-num` | 24px, weight 500, `letter-spacing: -0.025em` |
| Main header | `.panel-head` | Flex between, h3 + `.sub` text |
| List rows | `.sub-row` | 5-column grid (22px 1fr 110px 90px 70px), gap 14px |
| Status dots | `.dot.g`, `.dot.a`, `.dot.r` | 8px circles with coloured glow shadows |
| Name + cycle | `.sub-name`, `.sub-cycle` | 14px / 12.5px, ink / ink-3 |
| Meta date | `.sub-meta` | 13px tabular-nums, ink-3 |
| Price | `.price` | 13.5px tabular-nums, right-aligned |
| Cancel button | `.x-btn` | 26×26, rounded 8px, border, hover → red |
| Toast | `.toast` | Absolute positioned, white, 240px wide, 2deg rotation |

**Do not change any of these values.** The dashboard is the mock-up brought to life.

---

## 3. File Layout

```
src/
  dashboard/
    Dashboard.jsx          # Root — renders the .browser shell
    PanelSide.jsx          # Left sidebar stats (was .panel-side)
    SubscriptionList.jsx   # Right panel list header + rows
    SubscriptionRow.jsx    # Single .sub-row component
    EmptyState.jsx         # When no subs exist
    AddEditModal.jsx       # Modal with same rounded styling
    ToastStack.jsx         # Reuse .toast class, stackable
    SettingsPanel.jsx      # Slide-over or tab view
    hooks/
      useSubscriptions.js  # CRUD + chrome.storage.local
```

---

## 4. Data Model

```ts
interface Subscription {
  id: string;
  name: string;             // e.g. "Adobe Creative Cloud"
  status: 'active' | 'trial' | 'inactive' | 'cancelling';
  cycle: 'monthly' | 'yearly' | 'weekly' | 'one-time';
  price: number;
  currency: string;         // ISO code, e.g. "USD"
  nextCharge: string;       // ISO date
  trialEnds?: string;
  usageDays?: number;       // for "unused 15 days"
  cancelUrl?: string;
  source: 'auto-detect' | 'manual';
  createdAt: string;
  updatedAt: string;
}
```

Persist to `chrome.storage.local` under key `subscriptions_v1`.

---

## 5. Dashboard Shell (`Dashboard.jsx`)

Copy the hero's `.browser` markup exactly. Replace the static subscriptions array with `{items.map(...)}`.

```jsx
export default function Dashboard() {
  const { items, add, update, remove } = useSubscriptions();

  return (
    <div className="browser">
      <div className="browser-bar">
        <div className="traffic"><span></span><span></span><span></span></div>
        <div className="urlbar">greedysub.com/dashboard</div>
        <div className="ext-icon" aria-hidden="true"></div>
      </div>
      <div className="panel">
        <PanelSide items={items} />
        <SubscriptionList items={items} onUpdate={update} onRemove={remove} />
      </div>
    </div>
  );
}
```

### 5.1 Browser bar

Keep the traffic lights, URL bar, and extension icon exactly as in the hero. Optional: make the URL bar show the current tab's domain when auto-detecting.

---

## 6. Left Sidebar (`PanelSide.jsx`)

Use the exact markup from `Hero.jsx` `.panel-side`:

```jsx
<aside className="panel-side">
  <div className="side-label">This month</div>
  <div className="stat">
    <div className="stat-label">Spending</div>
    <div className="stat-num sky">{formatCurrency(spending)}</div>
  </div>
  <div className="stat">
    <div className="stat-label">Saved by canceling</div>
    <div className="stat-num green">{formatCurrency(saved)}</div>
  </div>
  <div className="side-label">Active trials</div>
  <div className="stat">
    <div className="stat-label">Ending soon</div>
    <div className="stat-num">{endingSoonCount}</div>
  </div>
</aside>
```

**Stats logic:**
- **Spending** — sum of all active subscription prices (home currency).
- **Saved** — read from `lifetimeSaved` in storage; increment on cancel.
- **Ending soon** — count where `nextCharge` or `trialEnds` is within 7 days.

**Responsive:** On narrow viewports (< 880px), the `.panel` grid collapses to `1fr` and `.panel-side` becomes a horizontal row of 3 mini cards. This behaviour is already defined in `index.css` media queries.

---

## 7. Subscription List (`SubscriptionList.jsx`)

Header + rows, matching the hero exactly:

```jsx
<div className="panel-main">
  <div className="panel-head">
    <h3>Subscriptions</h3>
    <span className="sub">{items.length} active · sorted by next charge</span>
  </div>
  {items.map(sub => <SubscriptionRow key={sub.id} sub={sub} ... />)}
</div>
```

### 7.1 Row Component (`SubscriptionRow.jsx`)

Reuse the exact `.sub-row` grid and child classes from the hero:

```jsx
<div className="sub-row">
  <StatusDot sub={sub} />
  <span>
    <span className="sub-name">{sub.name}</span>
    <br />
    <span className="sub-cycle">{cycleText(sub)}</span>
  </span>
  <span className="sub-meta">{relativeDate(sub.nextCharge || sub.trialEnds)}</span>
  <span className="price">{formatCurrency(sub.price, sub.currency)}</span>
  <button className="x-btn" title="Cancel" onClick={onCancel}>✕</button>
</div>
```

**Status dot mapping (must match hero colours):**

| Class | Condition | Visual |
|-------|-----------|--------|
| `.dot.g` | `status === 'active'` AND `days > 7` | Green with green glow |
| `.dot.a` | `status === 'trial'` OR `days <= 7` OR `usageDays > 14` | Amber with amber glow |
| `.dot.r` | `days <= 2` OR `status === 'cancelling'` | Red with red glow, pulsing animation |

The red pulse animation is already in `index.css` (`@keyframes pulse`).

### 7.2 Row hover state

Already defined in `index.css`:
```css
.sub-row:hover {
  background: var(--sky-tint);
  transform: translateX(3px);
}
```
Do not override or remove this.

### 7.3 Sorting

Default: **nearest `nextCharge` / `trialEnds` first**.
Render a small segmented control (same style as landing-page pills) to toggle:
- Next charge (default)
- Price (high → low)
- Name (A → Z)
- Status

### 7.4 Filtering

Only show when `items.length >= 5`:
- Search input (filters by `name`)
- Chip pills: All | Active | Trials | Ending soon | Inactive

Use the existing `.chip` class from `index.css` for filter pills.

---

## 8. Empty State

When `items.length === 0`, replace the list with:

```jsx
<div className="empty" style={{ textAlign: 'center', padding: '60px 24px' }}>
  <div style={{ fontSize: 40, marginBottom: 16 }}>✦</div>
  <h3 style={{ fontWeight: 500, margin: '0 0 8px' }}>No subscriptions yet</h3>
  <p style={{ color: 'var(--ink-2)', margin: '0 0 24px', fontSize: 14 }}>
    GreedySub will auto-detect when you sign up for trials or subscriptions.
  </p>
  <div className="cta-row">
    <button className="btn btn-primary" onClick={openAddModal}>Add manually</button>
    <button className="btn btn-ghost" onClick={triggerDetect}>Detect on this page</button>
  </div>
</div>
```

Style the buttons with existing `.btn`, `.btn-primary`, `.btn-ghost` classes.

---

## 9. Add / Edit Modal

A modal that matches the dashboard's rounded, soft aesthetic:

- Background overlay: `background: oklch(0.22 0.02 240 / 0.35)` with `backdrop-filter: blur(8px)`
- Modal card: `background: white`, `border: 1px solid var(--line)`, `border-radius: var(--r-lg)`, `box-shadow: var(--shadow-lg)`
- Form inputs: reuse `.urlbar` styling or create `.input-field` using the same border-radius (7px), border colour (`var(--line)`), and height (28px)
- Buttons at bottom: `.btn-primary` (save) + `.btn-ghost` (cancel)

### Fields

| Field | Type |
|-------|------|
| Name | text |
| Price | number |
| Currency | select |
| Cycle | select |
| Next charge | date |
| Trial ends | date (optional) |
| Cancel URL | text (optional) |

---

## 10. Toast / Alert Stack (`ToastStack.jsx`)

Reuse the `.toast` component from the hero exactly:

```jsx
<div className="toast">
  <div className="toast-head">
    <span className="dot a"></span> Trial ends in 3 days
  </div>
  <div className="toast-body">
    <b>ChatGPT Plus</b> renews May 1 at <b>$20.00</b>. Cancel now to avoid charge.
  </div>
</div>
```

- Stack up to 3 toasts at absolute position top-right of the panel.
- Auto-dismiss: 6s, pause on hover.
- Toast types:
  - `info` → blue dot
  - `warning` → amber dot
  - `success` → green dot

---

## 11. Settings Panel

A secondary view that slides over or tabs into the dashboard. Keep the same island aesthetic:

- Container: `.island` or `.island tinted` classes from `index.css`
- Section headers: `.section-tag` (uppercase, sky-deep, 12px)
- Inputs: same rounded 7px style as URL bar
- Budget bar: reuse `.budget-bar` + `.budget-fill` from the hero

### Sections

| Section | Content |
|---------|---------|
| **Currency** | Home currency dropdown, live-rate toggle |
| **Budget** | Monthly limit input, enable/disable toggle, visual bar |
| **Regional** | Timezone, date format, first day of week |
| **Data** | Export CSV, Import, Clear all (red `.x-btn` style) |
| **Pro** | License status, upgrade CTA |

---

## 12. State Hook (`useSubscriptions.js`)

```js
export default function useSubscriptions() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    chrome.storage.local.get('subscriptions_v1').then(({ subscriptions_v1 }) => {
      setItems(subscriptions_v1 || []);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!loading) {
      chrome.storage.local.set({ subscriptions_v1: items });
    }
  }, [items, loading]);

  const add = (sub) =>
    setItems(prev => [...prev, { ...sub, id: crypto.randomUUID(), createdAt: new Date().toISOString() }]);

  const update = (id, patch) =>
    setItems(prev => prev.map(s => s.id === id ? { ...s, ...patch, updatedAt: new Date().toISOString() } : s));

  const remove = (id) =>
    setItems(prev => prev.filter(s => s.id !== id));

  return { items, loading, add, update, remove };
}
```

---

## 13. Chrome Extension Notes

### 13.1 Render targets

| Target | Dimensions | Default View |
|--------|-----------|--------------|
| **Popup** | 380×600px max | Dashboard (list + stats) |
| **Options page** | Full width | Dashboard with Settings tab open |
| **Side panel** | 360–480px | Dashboard, comfortable two-column |

### 13.2 Permissions

```json
"permissions": ["storage", "alarms", "notifications", "activeTab"],
"host_permissions": ["https://api.exchangerate.host/*"]
```

### 13.3 Background service worker

```js
chrome.alarms.create('daily-check', { periodInMinutes: 1440 });
chrome.alarms.onAlarm.addListener(async (alarm) => {
  if (alarm.name !== 'daily-check') return;
  const { subscriptions_v1 = [] } = await chrome.storage.local.get('subscriptions_v1');
  const soon = subscriptions_v1.filter(s => {
    const d = new Date(s.trialEnds || s.nextCharge);
    return (d - Date.now()) / 864e5 <= 2 && (d - Date.now()) >= 0;
  });
  soon.forEach(s => chrome.notifications.create(s.id, {
    type: 'basic',
    iconUrl: 'icons/icon128.png',
    title: `${s.name} renews soon`,
    message: `Cancel now to avoid the ${s.currency}${s.price} charge.`,
  }));
});
```

---

## 14. Design Compliance Checklist

Before submitting, verify every item:

- [ ] `.browser` wrapper with `.browser-bar` and `.panel` inside
- [ ] Traffic-light dots (`.traffic span`) are present
- [ ] URL bar (`.urlbar`) has lock icon pseudo-element
- [ ] Extension icon (`.ext-icon`) with white dot pseudo-element
- [ ] Left sidebar is `.panel-side` with `.stat` cards inside
- [ ] Stat numbers use `.stat-num.sky`, `.stat-num.green`, or default
- [ ] List rows use exact `.sub-row` 5-column grid
- [ ] Status dots use `.dot.g`, `.dot.a`, `.dot.r` with glow shadows
- [ ] Row hover shifts right 3px and tints background
- [ ] Prices are tabular-nums, right-aligned
- [ ] Cancel button is `.x-btn` with red hover state
- [ ] Toasts use `.toast` with rotation and shadow
- [ ] All colours come from CSS variables (`--sky`, `--ink`, `--line`, etc.)
- [ ] Border radii use `--r` (14px) and `--r-sm` (8px)
- [ ] Font is `'Geist'` with tabular-nums for numbers
- [ ] No new colours introduced outside the OKLCH token system
- [ ] Responsive collapse matches `index.css` media queries (< 880px)

---

## 15. Quick Start — Copy-Paste Bootstrap

If you need to bootstrap fast, literally copy this from `Hero.jsx` and swap the static data:

```jsx
// Dashboard.jsx — minimal viable shell
import { useSubscriptions } from './hooks/useSubscriptions';
import PanelSide from './PanelSide';
import SubscriptionList from './SubscriptionList';

export default function Dashboard() {
  const { items, add, update, remove } = useSubscriptions();

  return (
    <div className="browser">
      <div className="browser-bar">
        <div className="traffic"><span></span><span></span><span></span></div>
        <div className="urlbar">greedysub.com/dashboard</div>
        <div className="ext-icon" aria-hidden="true"></div>
      </div>
      <div className="panel">
        <PanelSide items={items} />
        <SubscriptionList items={items} onUpdate={update} onRemove={remove} onAdd={add} />
      </div>
    </div>
  );
}
```

Then copy the markup inside `.panel-side` and `.panel-main` directly from `Hero.jsx` and replace hardcoded strings with `{props}`.

---

*Document version: 1.1 — design must match hero mock-up pixel-for-pixel.*
