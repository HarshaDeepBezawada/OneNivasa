# OneNivasa 🏢

> **The Digital Operating System for Modern Gated Communities**  
> *Connect. Manage. Discover. Live Better.*  
> Developed & Engineered by **BZA Tech Solutions** | Founder: **Harsha Deep Bezawada**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Platform](https://img.shields.io/badge/Platform-Web%20SPA-teal.svg)](https://github.com/HarshaDeepBezawada/OneNivasa)
[![Tech Stack](https://img.shields.io/badge/Tech-Vanilla%20ES6%2B%20%7C%20CSS3%20%7C%20Node.js-black.svg)](https://github.com/HarshaDeepBezawada/OneNivasa)
[![Startup Ready](https://img.shields.io/badge/Status-Venture--Ready%20MVP-success.svg)](https://github.com/HarshaDeepBezawada/OneNivasa)

---

## 🌟 Executive Summary & Vision

Traditional housing societies and gated condominiums operate on fragmented WhatsApp groups, physical paper guard registers, delayed complaint ticketing, and disjointed maintenance dues tracking. 

**OneNivasa** is a modern PropTech SaaS platform designed to function as the **digital operating system for gated residential communities**. Inspired by minimalist design systems (Linear, Notion, Stripe), OneNivasa consolidates four distinct community user groups—**Residents, Community Management / Admins, Gate Security Staff, and On-Demand Service Providers**—into a single, unified web application.

Whether it is generating one-tap visitor passes, booking badminton courts, scheduling trusted home plumbers, splitting school rides, paying society maintenance, or triggering emergency security SOS alarms, OneNivasa provides a seamless experience for modern neighborhood living.

---

## 🚀 Key User Personas & Core Capabilities

```
                           ┌────────────────────────────────────────┐
                           │            OneNivasa Platform          │
                           │         (BZA Tech Solutions)           │
                           └──────────────────┬─────────────────────┘
                                              │
         ┌───────────────────┬────────────────┴───────────────────┬───────────────────┐
         ▼                   ▼                                    ▼                   ▼
  🏡 RESIDENTS       🛠️ ADMINS / RWA                     🛡️ SECURITY GUARDS    🔌 SERVICE PROVIDERS
  • Doorstep Services • Property Analytics                • Live SOS Monitor   • Verified Job Queue
  • Community Bazaar  • Resident Directory               • QR/Passcode Check  • Rating & Feedback
  • Facility Booking  • Parking Bay Allocation            • Delivery Auto-Pass • Availability Slates
  • NIVA AI Copilot   • Circulars Broadcast               • Helper Check-ins   • Lead Fulfillment
  • SOS Emergency     • Financial Ledger Collections      • Entry/Exit Audit
```

---

## 💎 Feature Breakdown by Module

### 1. 🏡 Resident Dashboard & Portal
* **Personalized Overview**: Real-time greeting with the resident's name, flat allocation, today's schedule, pending dues summary, and recommended utility services.
* **Doorstep Utilities**: On-demand directory of 11+ service categories:
  * *Cleaning, Electrician, Plumber, Car Wash, Laundry, Ironing, Beauty & Salon, Food, Grocery Delivery, and Home Maintenance*.
  * Complete interactive booking flow: Select provider, choose time slot, enter instructions, and receive instant confirmation.
* **Community Marketplace (Bazaar)**:
  * **Buy & Sell**: Neighborhood resale for furniture, electronics, cycles, books, appliances, and kids' gear.
  * **Homemade Corner**: Hyperlocal section for resident home bakers, cooks, pickle-makers, and artisan craftspeople.
  * Listing flow: Upload product photos, pricing, category, condition, and block location.
* **Social Community Feed**: Private neighborhood forum for discussions, recommendations, events, lost-and-found items, and general announcements with reactions and reply threads.
* **Mobility & Eco-Connect**:
  * **Parking Hub**: View assigned parking bay (`P-204`), display linked vehicle plates (car & bike), and toggle temporary parking spot-sharing.
  * **Community Carpool**: Offer or request rides to tech parks and hubs with seat counts.
  * **School Connect**: Privacy-conscious ridesharing connecting parents whose children attend the same school.
* **Clubhouse & Facility Reservation**:
  * Real-time slot availability matrix for Badminton Courts, Swimming Pool, Gym, Tennis Court, Yoga Hall, and Clubhouse Party Hall.
  * Conflict-free booking with instant slot locking.
* **Visitor Passes & Delivery Clearances**:
  * One-tap invite pass generator with unique 6-character digital access codes.
  * **Pre-Approve Deliveries**: Whitelist Swiggy, Zomato, Amazon, Blinkit, or Dunzo couriers for 1, 4, or 24-hour windows without guard phone calls.
  * **Daily Domestic Help Registry**: View live gate check-in status and attendance history of personal maids, cooks, and drivers.
* **Maintenance SLA & Helpdesk**:
  * File society maintenance tickets with priority levels (Low, Medium, Critical) and real-time SLA resolution tracking.
* **Society Billing & Financial Ledger**:
  * Dynamic, algorithmically computed maintenance dues based on the resident's registered profile.
  * One-click checkout modal simulating online UPI, Card, and NetBanking payments with downloadable ledger receipts.
* **NIVA AI Copilot**:
  * Autonomous conversational AI assistant built directly into the community layout.
  * Answers society bylaws, facility timings, checks outstanding balances, and navigates residents straight to facility reservations and payment flows.
* **Floating Emergency Panic SOS**:
  * Dedicated high-visibility bottom-right emergency button.
  * Broadcasts immediate Medical, Fire, or Security panic alerts straight to the Gate Security console.

---

### 2. 🏛️ Community / Admin Management Console
* **Property Analytics Hub**: High-level KPIs tracking total registered residents, active verified vendors, open SLA complaints, daily visitor footfall, and monthly financial collection ratios.
* **Resident Database**: Comprehensive apartment-wise directory with contact details, flat numbers, and mapped vehicle plates.
* **Approved Vendor Directory**: Approved technician records, compliance badges, and rate cards.
* **Society Parking Map**: Complete audit matrix of all physical parking bays, assigned residents, and sharing status.
* **Financial Ledger & Cash Approvals**: Real-time invoice registry allowing administrators to review payment statuses and log offline cash collections.
* **Circulars & Notice Publisher**: Draft and broadcast urgent notices (water shutdown notices, festival celebrations, AGM meetings) directly to resident dashboards.
* **Facility Slot Configurator**: Dynamic controls for court and clubhouse availability slates.

---

### 3. 🛡️ Gate Security Operations Terminal
* **Live Emergency Monitor**: Prominent real-time alert banner that instantly triggers when any resident hits the Emergency SOS button, displaying the exact flat number, resident name, and emergency nature with an *Acknowledge & Dispatch* action.
* **Passcode & QR Scanner**: Fast validation interface to authenticate 6-character visitor invite codes against the society database.
* **Quick Delivery Entry**: Fast-lane check-in for verified couriers (Amazon, Zomato, Swiggy) without requiring resident phone calls when pre-approved.
* **Inside Complex Log**: Real-time roster of visitors currently on premises with one-click exit logging.
* **Daily Help Biometric Simulator**: Gate entry/exit logging for housemaids, cooks, drivers, and cleaning personnel.

---

### 4. 🔌 Service Provider Pipeline
* **Vendor Job Execution Pipeline**: Real-time workbench for society-contracted electricians, plumbers, and technicians to view incoming bookings, update work order statuses, and track completed tasks.

---

## 🛠️ Technical Architecture & Design System

OneNivasa was architected with a **zero-dependency, ultra-fast, robust modern web stack**:

| Layer | Technology | Details |
|---|---|---|
| **Frontend Framework** | Vanilla ES6+ JavaScript | Zero build-step requirement, lightweight, lightning-fast boot (<100ms) |
| **Styling & Design** | Modern CSS3 Custom Properties | Minimalist SaaS aesthetic, Linear/Stripe inspired dark charcoal & teal accents |
| **Typography** | Inter & Outfit (Google Fonts) | Clean, startup-grade typographic hierarchy |
| **Iconography** | Lucide Icons (CDN) | Modern, sharp, consistent SVG glyphs |
| **State Management** | Custom Reactive State Machine | In-memory reactive state synchronized with browser `localStorage` |
| **SPA Router** | HTML5 History API (`pushState` / `popstate`) | Seamless browser back/forward button support across all sub-panels |
| **Backend / Web Server** | Node.js Built-in `http`, `fs`, `path` | Zero external npm dependencies; serves clean MIME types out-of-the-box |
| **Port / Networking** | Configurable via `PORT` env var | Defaults to port `3001` |

---

## 📂 Repository File Structure

```
One_Nivasa/
├── index.html        # Single-page application markup (Landing, Auth, Resident, Admin, Security portals)
├── app.js            # Core application state machine, business logic, SPA router, NIVA AI copilot
├── styles.css        # Startup design system, responsive layouts, CSS grid, modals, and toasts
├── server.js         # Zero-dependency Node.js HTTP server with full static MIME type resolution
├── package.json      # Project manifest, scripts, and repository metadata
└── README.md         # Comprehensive product, architectural, and commercial documentation
```

---

## 💻 Getting Started & Local Development

### Prerequisites
* [Node.js](https://nodejs.org/) (v16.0.0 or higher recommended), **OR** [Python 3](https://www.python.org/) (for static hosting).

### Option 1: Running with Node.js (Recommended)
1. Clone the repository:
   ```bash
   git clone https://github.com/HarshaDeepBezawada/OneNivasa.git
   cd OneNivasa
   ```
2. Start the local server (no `npm install` needed!):
   ```bash
   npm start
   ```
   *(or run `node server.js` directly)*
3. Open your browser and navigate to:
   ```
   http://localhost:3001
   ```

### Option 2: Running with Python
If you prefer not to use Node.js:
```bash
python -m http.server 3001
```
Open `http://localhost:3001` in your browser.

---

## 🧪 Demo Credentials & User Personas

The login interface features strict field validation with helpful placeholders for quick testing:

| Role | Name Field | Identifier / Email | Password / PIN | Target Landing |
|---|---|---|---|---|
| **Resident** | `Ashok Kumar` | Mobile / `ashok@onenivasa.in` | Any password | Resident Suite (Home, Services, Market, Bookings) |
| **Admin** | `Pradeep Hegde` | `admin@onenivasa.in` | Any password | Management Console (Analytics, Directory, Parking) |
| **Security** | `Guard Shivappa` | `EMP-GATE-01` | `1234` | Gate Security Terminal (SOS Monitor, Passes, Deliveries) |

---

## 💼 Startup & Commercial Business Model

OneNivasa is structured as a high-margin B2B2C PropTech SaaS enterprise:

1. **RWA / Society SaaS Subscription**:
   * Tiered monthly software subscription charged per apartment unit (₹30–₹60 per flat/month) for community administration, guard terminals, and maintenance tracking.
2. **Doorstep Utility Marketplace Take-Rate**:
   * 8%–15% commission on transactions originating through community-vetted electricians, house-cleaning, pest control, and car wash bookings.
3. **Hyperlocal Resident Commerce**:
   * Freemium peer-to-peer listings with promoted/sponsored pins for resident home bakers, tutors, and neighborhood artisans.
4. **Fintech Maintenance Payment Processing**:
   * Integrated payment gateway fees and convenience charges on society maintenance dues collections.
5. **Brand & Delivery Partnership Integrations**:
   * Direct API integrations with national quick-commerce and delivery logistics platforms (Zomato, Swiggy, Blinkit, Amazon).

---

## 🗺️ Product Roadmap

- [x] Full Single-Page Application (SPA) architecture with browser back-button navigation
- [x] Multi-persona access (Resident, Management Admin, Gate Security Guard, Service Provider)
- [x] NIVA AI Resident Copilot with interactive shortcut modals
- [x] Dynamic algorithmic billing dues generator
- [x] Real-time emergency panic alarm broadcast to security terminals
- [ ] Automated Number Plate Recognition (ANPR) & IoT gate barrier integration
- [ ] Multi-Society Super-Admin dashboard for real estate developers & facility management companies
- [ ] Native iOS & Android companion applications (React Native / Flutter)
- [ ] Real-time WebSockets / Supabase database sync for live multi-device messaging

---

## 📄 License & Attribution

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

**Engineered with pride by BZA Tech Solutions**  
*Lead Architect & Founder:* **Harsha Deep Bezawada**  
*GitHub Repository:* [https://github.com/HarshaDeepBezawada/OneNivasa](https://github.com/HarshaDeepBezawada/OneNivasa)
