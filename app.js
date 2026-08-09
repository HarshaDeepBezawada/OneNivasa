/* OneNivasa Gated Community Digital Operating System - Application Logic */

// ==================================================
// 1. INITIAL MOCK DATABASE STATE SETUP
// ==================================================

const DEFAULT_RESIDENTS = [
  { id: "R-101", name: "Rahul Sharma", flat: "Block B-204", email: "rahul@onenivasa.in", phone: "+91 98765 43210", vehicle: "KA-03-MY-8890 (Tata Safari)" },
  { id: "R-102", name: "Priya Rao", flat: "Block A-501", email: "priya@onenivasa.in", phone: "+91 98765 54321", vehicle: "KA-51-MB-4512 (Hyundai i20)" },
  { id: "R-103", name: "Arjun Kumar", flat: "Block C-302", email: "arjun@onenivasa.in", phone: "+91 98765 67890", vehicle: "KA-01-ND-1002 (Honda City)" },
  { id: "R-104", name: "Deepika Patel", flat: "Block D-104", email: "deepika@onenivasa.in", phone: "+91 98765 89012", vehicle: "KA-04-MN-3321 (Maruti Swift)" }
];

const DEFAULT_SERVICES = [
  { id: "SERV-01", category: "Cleaning", name: "Deep Home Cleaning", rating: 4.8, bookings: 142, price: 599, providerId: "PROV-CLEAN-01", providerName: "EcoClean India", verified: true, duration: "2 Hours" },
  { id: "SERV-02", category: "Electrician", name: "Electrical Wiring & Fixing", rating: 4.7, bookings: 210, price: 299, providerId: "PROV-ELEC-01", providerName: "Apex Electricals", verified: true, duration: "1 Hour" },
  { id: "SERV-03", category: "Plumber", name: "Leakage Repair & Faucet Install", rating: 4.9, bookings: 185, price: 249, providerId: "PROV-PLUMB-01", providerName: "Metro Plumbers", verified: true, duration: "1 Hour" },
  { id: "SERV-04", category: "Laundry", name: "Premium Ironing & Dry Cleaning", rating: 4.6, bookings: 98, price: 149, providerId: "PROV-LAUND-01", providerName: "BrightWash Labs", verified: false, duration: "Same day pickup" },
  { id: "SERV-05", category: "Car Wash", name: "Eco Waterless Car Detailing", rating: 4.8, bookings: 320, price: 349, providerId: "PROV-CAR-01", providerName: "GreenWash Hub", verified: true, duration: "45 Mins" },
  { id: "SERV-06", category: "Beauty & Salon", name: "Relaxing Facial & Hair styling", rating: 4.5, bookings: 75, price: 499, providerId: "PROV-SALON-01", providerName: "Zen Salon Express", verified: true, duration: "1.5 Hours" }
];

const DEFAULT_PROVIDERS = [
  { id: "PROV-CLEAN-01", name: "EcoClean India", phone: "+91 91112 22333", rating: 4.8, category: "Cleaning", jobsCompleted: 142, earnings: 45200 },
  { id: "PROV-ELEC-01", name: "Apex Electricals", phone: "+91 92223 33444", rating: 4.7, category: "Electrician", jobsCompleted: 210, earnings: 56700 },
  { id: "PROV-PLUMB-01", name: "Metro Plumbers", phone: "+91 93334 44555", rating: 4.9, category: "Plumber", jobsCompleted: 185, earnings: 42100 },
  { id: "PROV-LAUND-01", name: "BrightWash Labs", phone: "+91 94445 55666", rating: 4.6, category: "Laundry", jobsCompleted: 98, earnings: 12500 }
];

const DEFAULT_MARKETPLACE = [
  { id: "MKT-01", title: "Hercules Mountain Cycle", type: "SELL", condition: "Excellent", price: 4500, category: "Bicycles", flat: "Block C-302", seller: "Arjun Kumar", description: "2 years old, dual disc brakes, barely used on city roads. Selling because we are upgrading.", image: "🚲" },
  { id: "MKT-02", title: "Wooden Study Table / Desk", type: "SELL", condition: "Like New", price: 2900, category: "Furniture", flat: "Block A-501", seller: "Priya Rao", description: "Solid pinewood study desk with two drawer cabinets. Perfect condition, 1.2m width.", image: "🪑" },
  { id: "MKT-03", title: "Homemade Fresh Chocolate Fudge", type: "HOMEMADE", condition: "Freshly Made", price: 349, category: "Food", flat: "Block B-204", seller: "Rahul Sharma", description: "100% vegetarian chocolate fudge made with organic dark chocolate and walnuts. Pack of 6 pieces.", image: "🍫" },
  { id: "MKT-04", title: "Pre-owned Harry Potter Boxset (Books 1-7)", type: "SELL", condition: "Good", price: 1200, category: "Books", flat: "Block D-104", seller: "Deepika Patel", description: "Original paperbacks in a clean cardboard sleeve. No torn pages, minor corner folding on Book 3.", image: "📚" }
];

const DEFAULT_COMMUNITY_POSTS = [
  { id: "POST-01", author: "Priya Rao", flat: "Block A-501", body: "Does anyone know a good high school math tutor for Class 8 in our area? Looking for offline options who can come to the complex.", likes: 8, likedBy: [], comments: [{ author: "Arjun Kumar", flat: "Block C-302", text: "My daughter studies with Mr. Anand. He is excellent! I can share his card." }], tag: "Help Request", date: "Today, 10:15 AM" },
  { id: "POST-02", author: "Arjun Kumar", flat: "Block C-302", body: "Found a set of keys near the Badminton Courts lobby this morning. Left them with the guard at Gate 2 reception.", likes: 3, likedBy: [], comments: [], tag: "Lost & Found", date: "Yesterday, 8:40 PM" }
];

const DEFAULT_COMMUNITY_EVENTS = [
  { id: "EV-01", name: "Independence Day Celebration", date: "15 Aug", location: "Central Lawn", desc: "Flag hoisting at 9 AM, followed by resident cultural events, games, and high tea.", attendees: 48 },
  { id: "EV-02", name: "Monsoon Plantation Drive", date: "22 Aug", location: "Block B Perimeter", desc: "Help plant 100 native saplings in our community zone. Gardening gloves provided.", attendees: 24 }
];

const DEFAULT_MOBILITY = {
  parking: [
    { slot: "P-204", status: "Active", occupant: "Rahul Sharma", type: "Owned", canShare: true },
    { slot: "P-501", status: "Active", occupant: "Priya Rao", type: "Owned", canShare: false },
    { slot: "P-302", status: "Active", occupant: "Arjun Kumar", type: "Owned", canShare: true }
  ],
  carpool: [
    { id: "CP-01", host: "Arjun Kumar", route: "Block C → XYZ Tech Park", time: "08:15 AM", seats: 2, members: ["Priya Rao"], days: "Mon-Fri", phone: "+91 98765 67890" },
    { id: "CP-02", host: "Rahul Sharma", route: "Block B → Sarjapur Outer Ring Road", time: "09:00 AM", seats: 3, members: [], days: "Mon, Wed, Fri", phone: "+91 98765 43210" }
  ],
  schoolConnect: [
    { school: "Greenwood High International School", familiesCount: 14, carpoolsCount: 2, timings: " pickup: 07:15 AM, return: 03:00 PM" },
    { school: "The International School Bangalore (TISB)", familiesCount: 8, carpoolsCount: 1, timings: " pickup: 07:00 AM, return: 03:30 PM" }
  ]
};

const DEFAULT_FACILITIES = [
  { id: "FAC-01", name: "Badminton Court 01", capacity: "4 Players", rules: "Non-marking shoes mandatory. Max 1 hour booking.", image: "🏸", slots: { "06:00 AM": "Available", "07:00 AM": "Booked", "06:00 PM": "Available", "07:00 PM": "Available", "08:00 PM": "Available" } },
  { id: "FAC-02", name: "Infinity Swimming Pool", capacity: "20 People", rules: "Swimming trunks/suits mandatory. Shower before entering.", image: "🏊", slots: { "07:00 AM": "Available", "08:00 AM": "Available", "04:00 PM": "Available", "05:00 PM": "Booked", "06:00 PM": "Available" } },
  { id: "FAC-03", name: "Premium Gymnasium", capacity: "15 People", rules: "Bring your own towel. Re-rack weights after use.", image: "🏋️", slots: { "06:00 AM": "Booked", "07:00 AM": "Booked", "08:00 AM": "Available", "05:00 PM": "Available", "06:00 PM": "Booked" } },
  { id: "FAC-04", name: "Community Clubhouse Hall", capacity: "80 Guests", rules: "Music system must be turned off by 10:00 PM.", image: "🏢", slots: { "10:00 AM": "Available", "02:00 PM": "Available", "06:00 PM": "Available" } }
];

const DEFAULT_VISITORS = [
  { id: "VIS-101", name: "Rahul Sharma (Guest)", type: "Guest", expectedTime: "Today, 07:30 PM", code: "VIS-445", flat: "Block B-204", resident: "Rahul Sharma", status: "Expected", contact: "+91 99880 11223" },
  { id: "VIS-102", name: "Amazon Delivery Agent", type: "Delivery", expectedTime: "Today, 02:15 PM", code: "VIS-892", flat: "Block A-501", resident: "Priya Rao", status: "Inside", contact: "+91 98881 22334" },
  { id: "VIS-103", name: "HDFC Courier Dispatch", type: "Delivery", expectedTime: "Today, 11:30 AM", code: "VIS-112", flat: "Block C-302", resident: "Arjun Kumar", status: "Exited", contact: "+91 97772 33445" }
];

const DEFAULT_REQUESTS = [
  { id: "REQ-2048", category: "Plumbing", desc: "Slow water leakage in the washroom wall faucet.", status: "In Progress", flat: "Block B-204", resident: "Rahul Sharma", assignee: "Metro Plumbers (Rohan)", eta: "Today, 4:00 PM", ticketId: "REQ-2048" },
  { id: "REQ-2049", category: "Electrical", desc: "Balcony main light panel flickering constantly.", status: "Submitted", flat: "Block A-501", resident: "Priya Rao", assignee: "Apex Electricals", eta: "Pending Assignment", ticketId: "REQ-2049" },
  { id: "REQ-2040", category: "Lift", desc: "Block B elevator making creaking sound while landing on 5th floor.", status: "Resolved", flat: "Block B-204", resident: "Rahul Sharma", assignee: "Otis Support team", eta: "Completed Yesterday", ticketId: "REQ-2040" }
];

const DEFAULT_TRANSACTIONS = [
  { id: "TX-401", type: "Maintenance Charges (Aug 2026)", amount: 4500, category: "Society Dues", date: "01 Aug 2026", status: "Pending", paymentMethod: "-" },
  { id: "TX-402", type: "Facility Booking (Badminton Court)", amount: 150, category: "Facility Dues", date: "05 Aug 2026", status: "Paid", paymentMethod: "UPI (Google Pay)" },
  { id: "TX-403", type: "EcoClean Deep Kitchen Cleaning", amount: 599, category: "Service Bookings", date: "08 Aug 2026", status: "Paid", paymentMethod: "UPI (PhonePe)" }
];

const DEFAULT_ANNOUNCEMENTS = [
  { id: "ANN-01", type: "Important", title: "Borewell Pump Maintenance", body: "Water supply will be temporarily shut off for Blocks A & B on Tuesday, August 11, from 2:00 PM to 4:30 PM due to pump maintenance. Please store water.", date: "Today", read: false },
  { id: "ANN-02", type: "Events", title: "Independence Day Flag Hoisting", body: "Join us at the Central Lawn on August 15 at 9:00 AM. Refreshments and kids drawing competitions will follow.", date: "2 days ago", read: false },
  { id: "ANN-03", type: "General", title: "Green Waste Separation Rules", body: "Please ensure wet waste is disposed of strictly in green bins and plastic recyclables in blue bins. Co-operation requested.", date: "5 days ago", read: true }
];

const DEFAULT_NOTIFICATIONS = [
  { id: "NOT-01", text: "Delivery Agent 'Amazon Express' has entered the complex through Gate 1.", time: "2:15 PM", type: "security", unread: true },
  { id: "NOT-02", text: "Water pipe maintenance scheduled for Block B tomorrow.", time: "11:30 AM", type: "announcement", unread: true },
  { id: "NOT-03", text: "Electrician booking confirmed with Apex Electricals.", time: "Yesterday", type: "booking", unread: false }
];

const DEFAULT_DAILY_HELP = [
  { id: "DH-01", name: "Sunita Devi", role: "Maid / Cleaner", flat: "Block B-204", status: "Checked In", time: "Today, 07:15 AM", code: "ON-HELP-101" },
  { id: "DH-02", name: "Ramesh Gowda", role: "Cook / Chef", flat: "Block B-204", status: "Absent", time: "-", code: "ON-HELP-102" },
  { id: "DH-03", name: "Vikas Patil", role: "Private Driver", flat: "Block B-204", status: "Checked Out", time: "Today, 10:45 AM", code: "ON-HELP-103" }
];

// Helper to initialize and retrieve localStorage state safely
function getDB(key, defaultData) {
  const local = localStorage.getItem(`ON_DB_${key}`);
  if (!local) {
    localStorage.setItem(`ON_DB_${key}`, JSON.stringify(defaultData));
    return defaultData;
  }
  return JSON.parse(local);
}

function saveDB(key, data) {
  localStorage.setItem(`ON_DB_${key}`, JSON.stringify(data));
}

// Global active database state objects
let db = {
  residents: getDB("residents", DEFAULT_RESIDENTS),
  services: getDB("services", DEFAULT_SERVICES),
  providers: getDB("providers", DEFAULT_PROVIDERS),
  marketplace: getDB("marketplace", DEFAULT_MARKETPLACE),
  posts: getDB("posts", DEFAULT_COMMUNITY_POSTS),
  events: getDB("events", DEFAULT_COMMUNITY_EVENTS),
  mobility: getDB("mobility", DEFAULT_MOBILITY),
  facilities: getDB("facilities", DEFAULT_FACILITIES),
  visitors: getDB("visitors", DEFAULT_VISITORS),
  requests: getDB("requests", DEFAULT_REQUESTS),
  transactions: getDB("transactions", DEFAULT_TRANSACTIONS),
  announcements: getDB("announcements", DEFAULT_ANNOUNCEMENTS),
  notifications: getDB("notifications", DEFAULT_NOTIFICATIONS),
  dailyHelp: getDB("dailyHelp", DEFAULT_DAILY_HELP)
};

function commitState() {
  saveDB("residents", db.residents);
  saveDB("services", db.services);
  saveDB("providers", db.providers);
  saveDB("marketplace", db.marketplace);
  saveDB("posts", db.posts);
  saveDB("events", db.events);
  saveDB("mobility", db.mobility);
  saveDB("facilities", db.facilities);
  saveDB("visitors", db.visitors);
  saveDB("requests", db.requests);
  saveDB("transactions", db.transactions);
  saveDB("announcements", db.announcements);
  saveDB("notifications", db.notifications);
  saveDB("dailyHelp", db.dailyHelp);
}


// ==================================================
// 2. AUTHENTICATION & PORTAL SESSION STATE
// ==================================================

let currentSession = null; // { role: 'resident'|'admin'|'security'|'provider', name, id, meta }
let activeResidentSection = "home"; // Sub-navigation router for residents
let activeAdminSection = "overview"; // Sub-navigation router for admins
let selectedPaymentMethod = "upi";

// Role views configuration mapping (OneNivasa)
const RESIDENT_NAV_GROUPS = {
  "HOME": [
    { id: "home", label: "Overview", icon: "home" }
  ],
  "DISCOVER": [
    { id: "services", label: "Doorstep Services", icon: "briefcase" },
    { id: "marketplace", label: "Marketplace Bazaar", icon: "shopping-bag" },
    { id: "community", label: "Social Community", icon: "users" }
  ],
  "COMMUNITY": [
    { id: "mobility", label: "Mobility & Rides", icon: "navigation" },
    { id: "facilities", label: "Facility Reservation", icon: "calendar" },
    { id: "visitors", label: "Visitor Passes", icon: "key" }
  ],
  "MANAGE": [
    { id: "requests", label: "My SLA Requests", icon: "wrench" },
    { id: "payments", label: "Society Billing", icon: "credit-card" },
    { id: "updates", label: "Official Circulars", icon: "megaphone" }
  ],
  "SPECIAL": [
    { id: "ai", label: "NIVA AI", icon: "sparkles" }
  ]
};

const ADMIN_NAV_GROUPS = {
  "MANAGEMENT": [
    { id: "overview", label: "Overview Stats", icon: "bar-chart-2" },
    { id: "residents", label: "Resident Register", icon: "users" },
    { id: "providers", label: "Service Registry", icon: "truck" },
    { id: "requests", label: "Complaints Tracker", icon: "wrench" }
  ],
  "OPERATIONS": [
    { id: "visitors", label: "Visitor Clearance", icon: "key" },
    { id: "facilities", label: "Amenities Matrix", icon: "calendar" },
    { id: "parking", label: "Parking Mapping", icon: "navigation" }
  ],
  "FINANCIALS & DISPATCH": [
    { id: "payments", label: "Maintenance Billing", icon: "credit-card" },
    { id: "announcements", label: "Circular Publisher", icon: "megaphone" },
    { id: "analytics", label: "Core Analytics", icon: "pie-chart" }
  ]
};

const LANDING_ROLES = {
  resident: {
    title: "A friction-free portal for residents",
    desc: "Book sports facilities, monitor daily domestic staff checked-in logs, authorize delivery codes digitally, buy items from neighbors, and chat with OneNivasa AI—all under one login.",
    features: ["Book slots for Tennis, Gym, & Pool", "Authorize visitor codes digitally", "Pre-approve Swiggy/Amazon gate pass", "Daily help attendance check-in monitoring"],
    statNum: "2.4 hrs",
    statLbl: "Avg time saved monthly"
  },
  admin: {
    title: "Operational dashboards for property managers",
    desc: "Track maintenance collection ratios, distribute community-wide notices, review vendor complaints, assign SLA tickets, and audit security checkpoint logs from a cloud dashboard.",
    features: ["Society collections invoicing engine", "Full register of residents and tenants", "Visual analytical charts for society metrics", "SLA violation alerts and dispatch logs"],
    statNum: "₹1.4L",
    statLbl: "Unpaid dues recovered per block"
  },
  security: {
    title: "Heavy-duty security interface at the gate",
    desc: "A simplified layout built to handle hundreds of delivery check-ins, visitor clearances, and pre-approved code sweeps in seconds. Integrates QR validation.",
    features: ["Passcode/QR scan verification screen", "Auto-notify resident on guest arrival", "Instant one-click ALLOW/REJECT buttons", "Active logs for security shifts auditing"],
    statNum: "4.8s",
    statLbl: "Avg gate validation speed"
  },
  provider: {
    title: "Order execution pipeline for local vendors",
    desc: "Let electricians, cleaning services, and local laundry providers view and accept jobs requested by estate residents. Update work stages in real-time.",
    features: ["Interactive dispatch job queue list", "Status milestones: Accept, On Way, Complete", "Transparent digital ledger tracking earnings", "Customer feedback and review logging"],
    statNum: "4.7★",
    statLbl: "Avg partner rating score"
  }
};


// ==================================================
// 3. PAGE INITIALIZATION & RUNTIMES
// ==================================================

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide icons on landing
  lucide.createIcons();
  switchLandingRole('resident');
  
  // Set default search input handler
  document.getElementById("global-search").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const query = e.target.value;
      if (query.trim()) {
        triggerGlobalSearchAction(query);
      }
    }
  });

  // Setup emergency buttons click
  document.getElementById("floating-emergency-btn").addEventListener("click", () => {
    openEmergencyModal();
  });
});

// Switch preview tabs on the landing page
function switchLandingRole(roleKey) {
  const tabs = document.querySelectorAll(".role-tab-item");
  tabs.forEach((tab, index) => {
    tab.classList.remove("active");
    if (
      (roleKey === 'resident' && index === 0) ||
      (roleKey === 'admin' && index === 1) ||
      (roleKey === 'security' && index === 2) ||
      (roleKey === 'provider' && index === 3)
    ) {
      tab.classList.add("active");
    }
  });

  const preview = LANDING_ROLES[roleKey];
  const container = document.getElementById("landing-role-preview");
  
  container.innerHTML = `
    <div class="role-preview-content">
      <div class="landing-badge">Target Role</div>
      <h3>${preview.title}</h3>
      <p>${preview.desc}</p>
      <ul class="role-preview-features">
        ${preview.features.map(f => `<li><i data-lucide="check-circle" style="color:var(--accent); width:16px;"></i> ${f}</li>`).join('')}
      </ul>
      <button class="btn btn-primary" onclick="showLoginView('${roleKey}')">Launch Demo</button>
    </div>
    <div class="role-preview-graphic">
      <div class="login-stat-box" style="align-self: center; text-align: center; border: 1px solid var(--border-color); background: var(--surface); padding: 32px; width: 100%; max-width: 240px; box-shadow: var(--shadow-md);">
        <div style="font-size: 3rem; font-weight: 800; color: var(--accent); line-height: 1;">${preview.statNum}</div>
        <div style="font-size: 11px; text-transform: uppercase; font-weight: 700; color: var(--text-muted); margin-top: 8px;">${preview.statLbl}</div>
      </div>
    </div>
  `;
  
  // Re-run lucide renderer on the newly generated components
  lucide.createIcons();
}


// ==================================================
// 4. ROUTING / VIEWS NAVIGATION SYSTEM
// ==================================================

let suppressHistoryPush = false;

function showLoginView(preselectedRole = 'resident') {
  document.getElementById("landing-page").style.display = "none";
  document.getElementById("login-page").style.display = "flex";
  document.getElementById("app-layout").classList.remove("active");
  document.getElementById("floating-emergency-btn").style.display = "none";
  switchLoginRole(preselectedRole);
  
  if (!suppressHistoryPush) {
    history.pushState({ view: "login", role: preselectedRole }, "", `#login-${preselectedRole}`);
  }
}

function exitToLanding() {
  document.getElementById("landing-page").style.display = "block";
  document.getElementById("login-page").style.display = "none";
  document.getElementById("app-layout").classList.remove("active");
  document.getElementById("floating-emergency-btn").style.display = "none";
  currentSession = null;
  
  if (!suppressHistoryPush) {
    history.pushState({ view: "landing" }, "", "#home");
  }
}

function switchLoginRole(role) {
  const tabs = document.querySelectorAll(".auth-role-tab");
  tabs.forEach(tab => {
    tab.classList.remove("active");
    if (tab.innerText.toLowerCase().includes(role.substring(0, 4))) {
      tab.classList.add("active");
    }
  });

  const forms = document.querySelectorAll(".auth-form");
  forms.forEach(f => f.classList.remove("active"));
  
  document.getElementById(`form-${role}`).classList.add("active");
}

function demoLogin(role) {
  if (role === 'resident') {
    currentSession = {
      role: 'resident',
      id: "R-101",
      name: "Rahul Sharma",
      flat: "Block B-204",
      vehicles: "KA-03-MY-8890 (Car), KA-03-BK-4560 (Bike)",
      carPlate: "KA-03-MY-8890 (Car)",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60"
    };
    activeResidentSection = "home";
  } else if (role === 'admin') {
    currentSession = {
      role: 'admin',
      id: "ADM-901",
      name: "Pradeep Hegde",
      flat: "Estate Manager",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60"
    };
    activeAdminSection = "overview";
  } else if (role === 'security') {
    currentSession = {
      role: 'security',
      id: "EMP-GATE-01",
      name: "Guard Shivappa",
      flat: "Gate 1 Terminal",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&auto=format&fit=crop&q=60"
    };
  } else if (role === 'provider') {
    currentSession = {
      role: 'provider',
      id: "PROV-ELEC-01",
      name: "Anil (Apex Electricals)",
      flat: "Electrical Partner",
      avatar: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=100&auto=format&fit=crop&q=60"
    };
  }
  
  launchAppDashboard();
}

function submitResidentLogin() {
  const nameVal = document.getElementById("resident-name").value.trim();
  const flatVal = document.getElementById("resident-flat").value.trim();
  const carVal = document.getElementById("resident-car-plate").value.trim();
  const bikeVal = document.getElementById("resident-bike-plate").value.trim();
  const phoneVal = document.getElementById("resident-phone").value.trim();
  const emailVal = document.getElementById("resident-email").value.trim();
  const pass = document.getElementById("resident-pass").value;
  
  if (!nameVal) {
    showToast("Resident Full Name is required to sign in", "danger");
    return;
  }
  if (!flatVal) {
    showToast("Assigned Flat/Block is required to sign in", "danger");
    return;
  }
  if (!carVal) {
    showToast("Car Plate Number is required to sign in", "danger");
    return;
  }
  if (!bikeVal) {
    showToast("Bike Plate Number is required to sign in", "danger");
    return;
  }
  if (!phoneVal) {
    showToast("Mobile Number is required to sign in", "danger");
    return;
  }
  if (!emailVal) {
    showToast("Email Address is required to sign in", "danger");
    return;
  }
  if (!pass) {
    showToast("Password is required to sign in", "danger");
    return;
  }

  demoLogin('resident');
  currentSession.name = nameVal;
  currentSession.flat = flatVal;
  currentSession.phone = phoneVal;
  currentSession.email = emailVal;
  currentSession.carPlate = carVal;
  
  // Aggregate multiple vehicles
  const vehiclesArr = [carVal, bikeVal];
  const vehiclesStr = vehiclesArr.join(', ');
  currentSession.vehicles = vehiclesStr;
  
  // Calculate consistent dynamic society pending dues based on username string hash
  let dynamicAmount = 4500;
  if (nameVal) {
    let hash = 0;
    for (let i = 0; i < nameVal.length; i++) {
      hash = nameVal.charCodeAt(i) + ((hash << 5) - hash);
    }
    dynamicAmount = 2500 + Math.abs(hash % 110) * 50; // Dynamic amount between 2500 and 8000
  }
  
  const mainTx = db.transactions.find(t => t.id === "TX-401");
  if (mainTx) {
    mainTx.amount = dynamicAmount;
    mainTx.type = `Maintenance Charges (${flatVal})`;
  }
  
  // Sync custom session fields back to mock database register
  const resIdx = db.residents.find(r => r.id === currentSession.id);
  if (resIdx) {
    resIdx.name = nameVal;
    resIdx.flat = flatVal;
    resIdx.phone = phoneVal;
    resIdx.email = emailVal;
    resIdx.vehicle = vehiclesStr;
  }
  commitState();
  
  // Directly refresh layout DOM components
  document.getElementById("sidebar-user-name").innerText = nameVal;
  document.getElementById("sidebar-user-flat").innerText = flatVal;
  document.getElementById("dropdown-user-name").innerText = nameVal;
  document.getElementById("dropdown-user-role").innerText = `RESIDENT (${flatVal})`;
  
  showToast("Resident session validated", "success");
}

function submitAdminLogin() {
  const nameVal = document.getElementById("admin-name").value.trim();
  const emailVal = document.getElementById("admin-user").value.trim();
  const passVal = document.getElementById("admin-pass").value;

  if (!nameVal) {
    showToast("Administrator Full Name is required to sign in", "danger");
    return;
  }
  if (!emailVal) {
    showToast("Administrator Email is required to sign in", "danger");
    return;
  }
  if (!passVal) {
    showToast("Password is required to sign in", "danger");
    return;
  }
  if (emailVal.includes("@")) {
    demoLogin('admin');
    currentSession.name = nameVal;
    
    // Directly update DOM menu headers
    document.getElementById("sidebar-user-name").innerText = nameVal;
    document.getElementById("dropdown-user-name").innerText = nameVal;
    
    showToast("Admin session validated", "success");
  } else {
    showToast("Invalid admin email format", "danger");
  }
}

function submitSecurityLogin() {
  const nameVal = document.getElementById("security-name").value.trim();
  const idVal = document.getElementById("security-id").value.trim();
  const pinVal = document.getElementById("security-pin").value;

  if (!nameVal) {
    showToast("Security Guard Name is required to sign in", "danger");
    return;
  }
  if (!idVal) {
    showToast("Gate Employee ID is required to sign in", "danger");
    return;
  }
  if (!pinVal) {
    showToast("Gate Pass PIN is required to sign in", "danger");
    return;
  }

  demoLogin('security');
  currentSession.name = nameVal;
  
  // Directly update DOM menu headers
  document.getElementById("sidebar-user-name").innerText = nameVal;
  document.getElementById("dropdown-user-name").innerText = nameVal;
  
  showToast("Security terminal linked", "success");
}

function submitProviderLogin() {
  demoLogin('provider');
  showToast("Vendor pipeline synchronized", "success");
}

function logoutUser() {
  showToast("Session closed successfully", "info");
  exitToLanding();
}

function launchAppDashboard() {
  document.getElementById("login-page").style.display = "none";
  document.getElementById("app-layout").classList.add("active");
  
  document.getElementById("sidebar-user-name").innerText = currentSession.name;
  document.getElementById("sidebar-user-flat").innerText = currentSession.flat;
  document.getElementById("sidebar-user-avatar").src = currentSession.avatar;
  
  document.getElementById("navbar-user-avatar").src = currentSession.avatar;
  document.getElementById("dropdown-user-name").innerText = currentSession.name;
  document.getElementById("dropdown-user-role").innerText = `${currentSession.role.toUpperCase()} (${currentSession.flat})`;
  
  closeAllDropdowns();
  buildSidebarMenu();

  if (currentSession.role === 'resident') {
    document.getElementById("floating-emergency-btn").style.display = "flex";
    navigateToPanel(activeResidentSection);
  } else if (currentSession.role === 'admin') {
    document.getElementById("floating-emergency-btn").style.display = "none";
    navigateToPanel(activeAdminSection);
  } else if (currentSession.role === 'security') {
    document.getElementById("floating-emergency-btn").style.display = "none";
    navigateToPanel("security-dashboard");
  } else if (currentSession.role === 'provider') {
    document.getElementById("floating-emergency-btn").style.display = "none";
    navigateToPanel("provider-dashboard");
  }

  updateNotificationsCount();
}

function buildSidebarMenu() {
  const container = document.getElementById("sidebar-nav-links");
  container.innerHTML = ""; // reset

  let navStructure = null;
  if (currentSession.role === 'resident') {
    navStructure = RESIDENT_NAV_GROUPS;
  } else if (currentSession.role === 'admin') {
    navStructure = ADMIN_NAV_GROUPS;
  } else {
    container.innerHTML = `
      <div class="sidebar-nav-group">
        <div class="sidebar-nav-title">Console</div>
        <a class="nav-item active"><span class="nav-item-icon"><i data-lucide="layout"></i></span> <span>Dashboard Console</span></a>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  for (const [groupName, links] of Object.entries(navStructure)) {
    const groupDiv = document.createElement("div");
    groupDiv.className = "sidebar-nav-group";
    
    const titleDiv = document.createElement("div");
    titleDiv.className = "sidebar-nav-title";
    titleDiv.innerText = groupName;
    groupDiv.appendChild(titleDiv);

    links.forEach(link => {
      const a = document.createElement("a");
      a.className = "nav-item";
      a.id = `sidebar-link-${link.id}`;
      a.onclick = () => navigateToPanel(link.id);
      
      const iconSpan = document.createElement("span");
      iconSpan.className = "nav-item-icon";
      iconSpan.innerHTML = `<i data-lucide="${link.icon}"></i>`;
      a.appendChild(iconSpan);

      const labelSpan = document.createElement("span");
      labelSpan.innerText = link.label;
      a.appendChild(labelSpan);

      groupDiv.appendChild(a);
    });

    container.appendChild(groupDiv);
  }

  lucide.createIcons();
}

function navigateToPanel(sectionId) {
  const layout = document.getElementById("app-layout");
  layout.classList.remove("sidebar-open");

  if (currentSession.role === 'resident') {
    activeResidentSection = sectionId;
  } else if (currentSession.role === 'admin') {
    activeAdminSection = sectionId;
  }

  const items = document.querySelectorAll(".nav-item");
  items.forEach(i => i.classList.remove("active"));
  
  const activeSidebarLink = document.getElementById(`sidebar-link-${sectionId}`);
  if (activeSidebarLink) {
    activeSidebarLink.classList.add("active");
  }

  const titleMap = {
    home: "Welcome Home",
    services: "Doorstep Utilities Services",
    marketplace: "Bazaar Marketplace",
    community: "Social Conversations",
    mobility: "Carpools & Parking Mapping",
    facilities: "Reserve Facilities",
    visitors: "Security Codes & Visitors",
    requests: "Complaints & SLA Tickets",
    payments: "Billing Ledger Receipts",
    updates: "Official Bulletins Circulars",
    ai: "NIVA AI Assistant",
    profile: "User Settings Profile",
    settings: "System Configuration",
    // Admin
    overview: "Property Management Analytics",
    residents: "Residents Database Log",
    providers: "Approved Vendor Directory",
    parking: "Allocated Parking Map",
    analytics: "Financial Ledger Analytics",
    "security-dashboard": "Gate Security Terminal",
    "provider-dashboard": "Vendor Job Execution Pipeline"
  };

  document.getElementById("navbar-page-title").innerText = titleMap[sectionId] || "Community Dashboard";

  renderPanelContent(sectionId);
  closeAllDropdowns();
  
  if (!suppressHistoryPush && currentSession) {
    history.pushState({ view: "dashboard", role: currentSession.role, panel: sectionId }, "", `#${sectionId}`);
  }
}

function toggleMobileSidebar() {
  document.getElementById("app-layout").classList.toggle("sidebar-open");
}


// ==================================================
// 5. CORE DYNAMIC CONTENT COMPILER / RENDERER
// ==================================================

function renderPanelContent(sectionId) {
  const panel = document.getElementById("main-panel");
  panel.innerHTML = ""; // Clear content to re-render fresh elements

  panel.innerHTML = `
    <div class="skeleton-title skeleton"></div>
    <div class="grid-3" style="margin-bottom: 24px;">
      <div class="card skeleton" style="height: 120px;"></div>
      <div class="card skeleton" style="height: 120px;"></div>
      <div class="card skeleton" style="height: 120px;"></div>
    </div>
    <div class="card skeleton" style="height: 300px;"></div>
  `;

  setTimeout(() => {
    panel.innerHTML = "";
    
    if (currentSession.role === 'resident') {
      compileResidentPanel(sectionId, panel);
    } else if (currentSession.role === 'admin') {
      compileAdminPanel(sectionId, panel);
    } else if (currentSession.role === 'security') {
      compileSecurityPanel(panel);
    } else if (currentSession.role === 'provider') {
      compileProviderPanel(panel);
    }
    
    lucide.createIcons();
  }, 150);
}

// --------------------------------------------------
// RESIDENT SUB-PANELS COMPILER
// --------------------------------------------------
function compileResidentPanel(sectionId, panel) {
  switch (sectionId) {
    
    case "home":
      const openReqs = db.requests.filter(r => r.flat === currentSession.flat && r.status !== "Resolved").length;
      const expectedVis = db.visitors.filter(v => v.flat === currentSession.flat && v.status === "Expected").length;
      const bookingsCount = db.facilities.filter(f => Object.values(f.slots).includes(`${currentSession.name} (${currentSession.flat})`)).length;
      const pendingDues = db.transactions.filter(t => t.status === "Pending").reduce((sum, item) => sum + item.amount, 0);

      panel.innerHTML = `
        <div class="home-welcome">
          <h2>Good morning, ${currentSession.name.split(' ')[0]} 👋</h2>
          <p class="text-muted">Here's your community security log and attendance report for today.</p>
        </div>

        <div class="home-stats-grid">
          <div class="card home-stat-card" onclick="navigateToPanel('requests')" style="cursor:pointer;">
            <div>
              <div class="home-stat-label">SLA Tickets</div>
              <div class="home-stat-val">${openReqs} Open</div>
            </div>
            <div class="home-stat-icon-box" style="background:#FEF2F2; color:#EF4444;"><i data-lucide="wrench"></i></div>
          </div>
          <div class="card home-stat-card" onclick="navigateToPanel('visitors')" style="cursor:pointer;">
            <div>
              <div class="home-stat-label">Expected Guest Logs</div>
              <div class="home-stat-val">${expectedVis} Pending</div>
            </div>
            <div class="home-stat-icon-box" style="background:var(--accent-light); color:var(--accent);"><i data-lucide="key"></i></div>
          </div>
          <div class="card home-stat-card" onclick="navigateToPanel('facilities')" style="cursor:pointer;">
            <div>
              <div class="home-stat-label">Facility Reservations</div>
              <div class="home-stat-val">${bookingsCount} Reserved</div>
            </div>
            <div class="home-stat-icon-box" style="background:#EFF6FF; color:#3B82F6;"><i data-lucide="calendar"></i></div>
          </div>
          <div class="card home-stat-card" onclick="navigateToPanel('payments')" style="cursor:pointer;">
            <div>
              <div class="home-stat-label">Pending Society Dues</div>
              <div class="home-stat-val text-danger">₹${pendingDues.toLocaleString('en-IN')}</div>
            </div>
            <div class="home-stat-icon-box" style="background:#FEF3C7; color:#D97706;"><i data-lucide="credit-card"></i></div>
          </div>
        </div>

        <div class="quick-actions-section">
          <h3>Quick Actions Shortcuts</h3>
          <div class="quick-actions-grid">
            <button class="quick-action-btn" onclick="openModal('modal-preapprove-delivery')">
              <div class="quick-action-icon"><i data-lucide="truck"></i></div>
              <span>Pre-Approve Delivery</span>
            </button>
            <button class="quick-action-btn" onclick="openModal('modal-invite-visitor')">
              <div class="quick-action-icon"><i data-lucide="user-plus"></i></div>
              <span>Invite Guest Pass</span>
            </button>
            <button class="quick-action-btn" onclick="openModal('modal-create-request')">
              <div class="quick-action-icon"><i data-lucide="wrench"></i></div>
              <span>File SLA Ticket</span>
            </button>
            <button class="quick-action-btn" onclick="navigateToPanel('facilities')">
              <div class="quick-action-icon"><i data-lucide="calendar"></i></div>
              <span>Reserve Squash/Court</span>
            </button>
          </div>
        </div>

        <div class="home-row">
          <div>
            <div class="panel-section-title">
              <span>Society Alerts & notices</span>
              <button class="btn btn-text btn-sm" onclick="navigateToPanel('updates')">See All</button>
            </div>
            <div class="home-card-list">
              ${db.announcements.slice(0, 3).map(ann => `
                <div class="feed-announcement-card">
                  <div class="announcement-icon-badge">
                    <i data-lucide="${ann.type === 'Important' ? 'alert-circle' : ann.type === 'Events' ? 'calendar' : 'megaphone'}" class="${ann.type === 'Important' ? 'text-danger' : 'text-accent'}"></i>
                  </div>
                  <div class="announcement-main">
                    <div class="announcement-header">
                      <span class="announcement-title">${ann.title}</span>
                      <span class="badge ${ann.type === 'Important' ? 'badge-danger' : ann.type === 'Events' ? 'badge-teal' : 'badge-info'}">${ann.type}</span>
                    </div>
                    <p class="announcement-desc">${ann.body}</p>
                    <div class="announcement-meta">
                      <span>OneNivasa Management</span>
                      <span>•</span>
                      <span>${ann.date}</span>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <div>
            <div class="panel-section-title">
              <span>Daily Staff Log</span>
            </div>
            <div class="card" style="padding: 16px;">
              <div class="home-card-list" id="daily-help-home-list">
                ${renderDailyHelpWidget()}
              </div>
            </div>
            
            <div class="panel-section-title" style="margin-top:24px;">
              <span>My Schedule</span>
            </div>
            <div class="card" style="padding: 16px;">
              <div class="home-card-list">
                ${renderScheduleItems()}
              </div>
            </div>

            <div class="panel-section-title" style="margin-top:24px;">
              <span>🏫 Estate Specifications</span>
            </div>
            <div class="card" style="padding: 16px; font-size: 12px; color: var(--text-muted); line-height: 1.6;">
              <div style="margin-bottom: 8px;"><strong>Managed & Owned By:</strong> OneNivasa Resident Welfare Association (RWA)</div>
              <div style="margin-bottom: 8px;"><strong>Year of Completion:</strong> October 2022</div>
              <div style="margin-bottom: 8px;"><strong>Front Gate Hotline:</strong> +91 80 4967 8000</div>
              <div><strong>Support Email:</strong> board@onenivasa.in</div>
            </div>
          </div>
        </div>

        <div>
          <div class="panel-section-title">
            <span>Recommended Local Services</span>
            <button class="btn btn-text btn-sm" onclick="navigateToPanel('services')">View Catalog</button>
          </div>
          <div class="rec-grid">
            ${db.services.slice(0, 4).map(serv => `
              <div class="card service-card card-hoverable" onclick="viewServiceDetails('${serv.id}')" style="cursor:pointer;">
                <div>
                  <div class="service-icon-banner">
                    <i data-lucide="${serv.category === 'Cleaning' ? 'sparkles' : serv.category === 'Electrician' ? 'zap' : serv.category === 'Plumber' ? 'droplet' : 'help-circle'}" style="width:36px; height:36px; color:var(--accent);"></i>
                  </div>
                  <div class="service-name">${serv.name}</div>
                  <div class="service-meta-line">
                    <span style="font-weight:600;"><i data-lucide="star" style="width:12px; display:inline-block; fill:var(--warning); color:var(--warning);"></i> ${serv.rating}</span>
                    <span class="service-meta-dot"></span>
                    <span>${serv.bookings}+ orders</span>
                  </div>
                </div>
                <div class="service-footer">
                  <div class="service-price">
                    <span class="price-lbl">Starting Price</span>
                    <span class="price-val">₹${serv.price}</span>
                  </div>
                  <div class="badge badge-teal">Verified</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
      break;

    case "services":
      panel.innerHTML = `
        <div class="home-welcome">
          <h2>Doorstep Utilities Services</h2>
          <p class="text-muted">On-demand home cleaning, electricians, plumbing, and laundry services verified inside OneNivasa.</p>
        </div>

        <div class="service-search-row">
          <div class="global-search-container" style="flex-grow: 1;">
            <i class="global-search-icon" data-lucide="search" style="width: 18px;"></i>
            <input type="text" class="global-search-input" id="services-search-bar" placeholder="Search cleaning, laundry, plumber, electrician..." oninput="filterServicesCatalog()">
          </div>
          <select class="form-select" style="max-width: 200px;" id="services-sort-filter" onchange="filterServicesCatalog()">
            <option value="popular">Most Popular</option>
            <option value="rating">Highest Rated</option>
            <option value="price-low">Price: Low to High</option>
          </select>
        </div>

        <div class="categories-filter-bar">
          <div class="category-pill active" onclick="selectServiceCategory('All', this)">All Utilities</div>
          <div class="category-pill" onclick="selectServiceCategory('Cleaning', this)">Cleaning</div>
          <div class="category-pill" onclick="selectServiceCategory('Electrician', this)">Electrician</div>
          <div class="category-pill" onclick="selectServiceCategory('Plumber', this)">Plumber</div>
          <div class="category-pill" onclick="selectServiceCategory('Laundry', this)">Laundry</div>
          <div class="category-pill" onclick="selectServiceCategory('Car Wash', this)">Car Detailing</div>
          <div class="category-pill" onclick="selectServiceCategory('Beauty & Salon', this)">Beauty & Salon</div>
        </div>

        <div class="grid-4" id="services-catalog-grid">
          <!-- Rendered dynamically -->
        </div>
      `;
      filterServicesCatalog();
      break;

    case "marketplace":
      panel.innerHTML = `
        <div class="marketplace-tabs">
          <div>
            <h2>Community Bazaar Marketplace</h2>
            <p class="text-muted">Buy, sell, and share second-hand goods or homemade meals directly with neighbors.</p>
          </div>
          <button class="btn btn-primary" onclick="openModal('modal-sell-product')"><i data-lucide="plus"></i> Sell Something</button>
        </div>

        <div class="tabs-container">
          <button class="tab-btn active" onclick="switchMarketplaceTab('ALL', this)">All Items</button>
          <button class="tab-btn" onclick="switchMarketplaceTab('SELL', this)">Pre-Owned listings</button>
          <button class="tab-btn" onclick="switchMarketplaceTab('HOMEMADE', this)">Homemade & Eats</button>
          <button class="tab-btn" onclick="switchMarketplaceTab('BUY', this)">Wanted requests</button>
        </div>

        <div class="market-grid" id="market-catalog-grid">
          <!-- Rendered dynamically -->
        </div>
      `;
      renderMarketplaceListings("ALL");
      break;

    case "community":
      panel.innerHTML = `
        <div class="home-welcome">
          <h2>Society Conversations Feed</h2>
          <p class="text-muted">A private social forum for OneNivasa residents to recommend vendors, report lost items, or coordinate meets.</p>
        </div>

        <div class="community-layout">
          <div>
            <div class="card post-creator-card">
              <div class="visitor-avatar-initial" style="background:var(--accent-light); color:var(--accent); font-weight:700; width:40px; height:40px;">RS</div>
              <div class="post-creator-input-box">
                <textarea class="post-creator-textarea" id="community-post-input" placeholder="Have an announcement, question, or need helper recommendations? Ask your block..."></textarea>
                <div class="post-creator-actions">
                  <div style="display:flex; gap:8px;">
                    <select class="form-select btn-sm" id="community-post-tag" style="padding:4px 10px; font-size:11px;">
                      <option value="Discussion">General Discussion</option>
                      <option value="Help Request">Help Needed</option>
                      <option value="Recommendation">Recommendation</option>
                      <option value="Lost & Found">Lost & Found</option>
                    </select>
                  </div>
                  <button class="btn btn-primary btn-sm" onclick="submitCommunityPost()"><i data-lucide="send" style="width:14px;"></i> Publish Post</button>
                </div>
              </div>
            </div>

            <div class="social-feed" id="community-social-feed">
              <!-- Rendered dynamically -->
            </div>
          </div>

          <div>
            <div class="card event-sidebar-card">
              <div class="panel-section-title" style="margin-bottom: 12px; font-size: 14px;">
                <span>Society Event Circulars</span>
              </div>
              <div style="display:flex; flex-direction:column; gap:4px;">
                ${db.events.map(ev => `
                  <div class="event-item">
                    <div class="event-date-box">
                      <span>${ev.date.split(' ')[0]}</span>
                      ${ev.date.split(' ')[1] || 'AUG'}
                    </div>
                    <div class="event-details">
                      <div class="event-name">${ev.name}</div>
                      <div class="event-loc"><i data-lucide="map-pin" style="width:10px; display:inline;"></i> ${ev.location}</div>
                      <div style="font-size:10px; color:var(--text-light); margin-top:4px;">
                        <span>${ev.attendees} attending</span>
                        <span style="margin:0 4px;">•</span>
                        <a href="#" style="color:var(--accent); text-decoration:none; font-weight:600;" onclick="rsvpToEvent('${ev.id}')">RSVP</a>
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      `;
      renderCommunityFeed();
      break;

    case "mobility":
      panel.innerHTML = `
        <div class="home-welcome">
          <h2>Mobility & Carpooling</h2>
          <p class="text-muted">Coordinate parking swap options and school commutes securely inside OneNivasa.</p>
        </div>

        <div class="mobility-row">
          <div class="card" style="padding: 20px;">
            <div class="mobility-block-header">
              <span>Allocated Parking Bay</span>
              <i data-lucide="navigation" style="color:var(--accent);"></i>
            </div>
            
            <div class="parking-slot-card">
              <div style="font-size:11px; text-transform:uppercase; color:var(--accent); font-weight:700;">My Primary Bay</div>
              <div style="font-size:1.75rem; font-weight:800; color:var(--primary);">Slot P-204</div>
              <div style="font-size:11px; color:var(--text-muted);">Status: Active | Allocated (Vehicle: ${currentSession.carPlate || 'KA-03-MY-8890'})</div>
            </div>

            <div style="display:flex; flex-direction:column; gap:8px;">
              <button class="btn btn-secondary btn-sm" onclick="showToast('Temporarily offering slot to visitor bay... Available for next 24 Hours.', 'success')">Offer Temp Parking</button>
              <button class="btn btn-text btn-sm" onclick="showToast('Request ticket logged with management for extra slot request.', 'info')">Request Secondary Bay Allocation</button>
            </div>
          </div>

          <div class="card" style="padding: 20px;">
            <div class="mobility-block-header">
              <span>Carpool Ride Sharing</span>
              <button class="btn btn-primary btn-sm" onclick="createNewCarpoolPrompt()"><i data-lucide="plus"></i> Offer Ride</button>
            </div>
            
            <div id="mobility-carpools-container">
              <!-- Rendered dynamically -->
            </div>
          </div>

          <div class="card" style="padding: 20px;">
            <div class="mobility-block-header">
              <span>School Commute Connect</span>
              <i data-lucide="users" style="color:var(--accent);"></i>
            </div>
            <p style="font-size:11px; color:var(--text-muted); margin-bottom:16px;">Coordinate school bus runs or drop-offs with parents from same blocks. Privacy protected.</p>
            
            <div style="display:flex; flex-direction:column; gap:12px;">
              ${db.mobility.schoolConnect.map(school => `
                <div class="school-card" style="background:var(--bg-app); border:1px solid var(--border-color);">
                  <div class="school-header">${school.school}</div>
                  <div class="school-details">
                    <div>Families Enrolled: <b>${school.familiesCount} families</b></div>
                    <div>Active Carpools: <b>${school.carpoolsCount} carpools</b></div>
                    <div style="font-size:10px; margin-top:4px; color:var(--text-light);"><i data-lucide="clock" style="width:10px; display:inline-block;"></i> ${school.timings}</div>
                  </div>
                  <button class="btn btn-secondary btn-sm" style="width:100%; font-size:11px;" onclick="showToast('Details requested. Greenwood coordinator parent will contact you.', 'success')">Join Private School Chat</button>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
      renderCarpoolRides();
      break;

    case "facilities":
      panel.innerHTML = `
        <div class="home-welcome">
          <h2>Reserve Gated Community Facilities</h2>
          <p class="text-muted">Reserve badminton courts, party halls, gyms, or swimming pools under clear society rules.</p>
        </div>

        <div class="facilities-grid">
          ${db.facilities.map(fac => `
            <div class="card facility-card card-hoverable">
              <div class="facility-img">
                <span style="font-size:3rem;">${fac.image}</span>
              </div>
              <div class="facility-details">
                <div class="facility-name">${fac.name}</div>
                <p class="facility-rules">${fac.rules}</p>
                
                <div class="facility-meta">
                  <span>Capacity: <b>${fac.capacity}</b></span>
                  <span>Slots: <b>${Object.keys(fac.slots).length} Available</b></span>
                </div>
                
                <button class="btn btn-primary" style="margin-top:14px; width:100%;" onclick="openFacilityBookingModal('${fac.id}')">Reserve Slot Now</button>
              </div>
            </div>
          `).join('')}
        </div>
      `;
      break;

    case "visitors":
      panel.innerHTML = `
        <div class="visitor-action-header">
          <div>
            <h2>Visitor Codes & Pre-Approvals</h2>
            <p class="text-muted">Generate digital access passes, invite guest entries, or pre-approve Swiggy/Amazon delivery runners.</p>
          </div>
          <div style="display:flex; gap:10px;">
            <button class="btn btn-secondary" onclick="openModal('modal-preapprove-delivery')"><i data-lucide="truck"></i> Pre-Approve Delivery</button>
            <button class="btn btn-primary" onclick="openModal('modal-invite-visitor')"><i data-lucide="user-plus"></i> Invite Guest</button>
          </div>
        </div>

        <div class="visitor-list-title">Expected / Logged In Today</div>
        <div class="card visitors-table-card">
          <table class="visitors-table">
            <thead>
              <tr>
                <th>Visitor Guest</th>
                <th>Access Reason</th>
                <th>Clearance Code</th>
                <th>Expected Schedule</th>
                <th>Current Status</th>
                <th>Verify Pass</th>
              </tr>
            </thead>
            <tbody id="visitors-table-body">
              <!-- Rendered dynamically -->
            </tbody>
          </table>
        </div>
      `;
      renderVisitorsList();
      break;

    case "requests":
      panel.innerHTML = `
        <div class="visitor-action-header">
          <div>
            <h2>My Active SLA Requests</h2>
            <p class="text-muted">Track ticket progress, plumber allocations, electrical fixes, or elevator complaints.</p>
          </div>
          <button class="btn btn-primary" onclick="openModal('modal-create-request')"><i data-lucide="plus"></i> File SLA Ticket</button>
        </div>

        <div class="tabs-container">
          <button class="tab-btn active" onclick="switchRequestTab('All', this)">All Tickets</button>
          <button class="tab-btn" onclick="switchRequestTab('Submitted', this)">Open</button>
          <button class="tab-btn" onclick="switchRequestTab('In Progress', this)">In Progress</button>
          <button class="tab-btn" onclick="switchRequestTab('Resolved', this)">Resolved</button>
        </div>

        <div class="requests-tracker-grid" id="requests-cards-container">
          <!-- Rendered dynamically -->
        </div>
      `;
      renderRequestsList("All");
      break;

    case "payments":
      const outstandingTotal = db.transactions.filter(t => t.status === "Pending").reduce((sum, item) => sum + item.amount, 0);

      panel.innerHTML = `
        <div class="home-welcome">
          <h2>Society billing Ledger</h2>
          <p class="text-muted">Review maintenance invoices, download transaction receipts, and settle dues in two clicks.</p>
        </div>

        <div class="payments-overview-row">
          <div class="card" style="display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <span class="text-muted" style="font-size:11px; text-transform:uppercase; font-weight:600; letter-spacing:0.05em;">Total Amount Outstanding</span>
              <h2 style="font-size:2.25rem; font-weight:800; color:var(--primary); margin-top:8px;" class="${outstandingTotal > 0 ? 'text-danger' : 'text-success'}">₹${outstandingTotal.toLocaleString('en-IN')}</h2>
              
              <div class="due-breakdown-list">
                ${db.transactions.filter(t => t.status === "Pending").map(t => `
                  <div class="due-breakdown-item">
                    <span class="text-muted">${t.type}</span>
                    <span class="font-semibold">₹${t.amount}</span>
                  </div>
                `).join('')}
                ${outstandingTotal === 0 ? `<div style="font-size:12px; color:var(--success);">🎉 All society invoices cleared!</div>` : ''}
              </div>
            </div>
            
            ${outstandingTotal > 0 ? `<button class="btn btn-primary btn-lg" style="width:100%; margin-top:24px;" onclick="openPaymentCheckout(${outstandingTotal})">Pay Outstanding Dues Now</button>` : ''}
          </div>

          <div class="card" style="padding: 24px;">
            <div class="panel-section-title" style="margin-bottom: 12px;">
              <span>Past Transactions Ledger</span>
            </div>
            <div class="recent-transactions-list">
              ${db.transactions.map(tx => `
                <div class="transaction-row">
                  <div class="transaction-left">
                    <div class="transaction-icon-box" style="background:${tx.status === 'Paid' ? 'var(--accent-light)' : '#FEF2F2'}; color:${tx.status === 'Paid' ? 'var(--accent)' : '#EF4444'};">
                      <i data-lucide="${tx.category.includes('Facility') ? 'calendar' : tx.category.includes('Service') ? 'wrench' : 'credit-card'}"></i>
                    </div>
                    <div class="transaction-details">
                      <span class="transaction-title">${tx.type}</span>
                      <span class="transaction-time">${tx.date} • Reference ID: ${tx.id}</span>
                    </div>
                  </div>
                  <div class="transaction-right">
                    <span class="transaction-amount">₹${tx.amount}</span>
                    <span class="badge ${tx.status === 'Paid' ? 'badge-teal' : 'badge-danger'}">${tx.status}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
      break;

    case "updates":
      panel.innerHTML = `
        <div class="home-welcome">
          <h2>Official circular Announcements</h2>
          <p class="text-muted">Circulars, borehole shutoff notices, and festive circular announcements distributed by society committees.</p>
        </div>

        <div class="announcements-grid">
          ${db.announcements.map(ann => `
            <div class="card announcement-full-card">
              <div class="announcement-badge-corner">
                <span class="badge ${ann.type === 'Important' ? 'badge-danger' : ann.type === 'Events' ? 'badge-teal' : 'badge-info'}">${ann.type}</span>
              </div>
              <div style="max-width: 80%;">
                <div style="font-size:11px; color:var(--text-light); font-weight:600; margin-bottom:4px;">ONENIVASA OFFICE DESK • ${ann.date.toUpperCase()}</div>
                <h3 style="font-size:1.15rem; margin-bottom:12px; font-weight:700;">${ann.title}</h3>
                <p class="text-muted" style="font-size:0.875rem; line-height:1.6; margin-bottom:16px;">${ann.body}</p>
                <div style="display:flex; gap:12px;">
                  <button class="btn btn-secondary btn-sm" onclick="showToast('Circular acknowledged', 'success')"><i data-lucide="check" style="width:14px;"></i> Acknowledge Notice</button>
                  <button class="btn btn-text btn-sm" onclick="showToast('Link copied (simulated)', 'info')"><i data-lucide="share-2" style="width:14px;"></i> Share Link</button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      `;
      break;

    case "ai":
      panel.innerHTML = `
        <div class="ai-layout">
          <div class="ai-container">
            <div class="ai-header">
              <div style="background:var(--accent-light); color:var(--accent); padding:10px; border-radius:50%; display:flex; align-items:center; justify-content:center;">
                <i data-lucide="sparkles"></i>
              </div>
              <div class="ai-header-info">
                <h3>NIVA AI Assistant</h3>
                <p>Smart conversational community operating system</p>
              </div>
            </div>
            
            <div class="ai-chat-body no-scrollbar" id="ai-chat-scroller">
              <div class="ai-welcome-box">
                <h4>Good morning, ${currentSession.name.split(' ')[0]} 👋</h4>
                <p>I can verify visitor codes, pre-approve delivery runners, reserve squash courts, or display payment balances.</p>
                
                <div class="ai-suggested-prompts">
                  <button class="ai-prompt-btn" onclick="sendAIChatQuery('Pre-approve a delivery agent')">🛵 "Pre-approve delivery"</button>
                  <button class="ai-prompt-btn" onclick="sendAIChatQuery('Check squash court reservation status')">🏸 "Squash/Badminton court booking"</button>
                  <button class="ai-prompt-btn" onclick="sendAIChatQuery('Lodge utility water issue')">🔧 "Lodge tap leakage ticket"</button>
                  <button class="ai-prompt-btn" onclick="sendAIChatQuery('Show society maintenance due balance')">💳 "Outstanding dues balance"</button>
                </div>
              </div>

              <div id="ai-messages-list" style="display:flex; flex-direction:column; gap:16px; width:100%;">
                <div class="chat-bubble chat-bubble-ai">
                  Hello ${currentSession.name.split(' ')[0]}! I am NIVA AI, your virtual community assistant. 👋<br><br>
                  I can perform actions instantly inside your portal. Try clicking any of the quick suggestion buttons above or type details like "book badminton court" to get started!
                </div>
              </div>
            </div>

            <div class="ai-input-bar">
              <input type="text" class="ai-chat-input" id="ai-chat-box" placeholder="Ask NIVA AI about your home..." onkeydown="handleAIChatKey(event)">
              <button class="btn btn-primary btn-icon-only" onclick="submitAIChat()"><i data-lucide="send"></i></button>
            </div>
          </div>
        </div>
      `;
      break;

    case "profile":
      panel.innerHTML = `
        <div class="home-welcome">
          <h2>Resident Profile Settings</h2>
          <p class="text-muted">Configure private contacts, vehicles index, and notification preferences.</p>
        </div>

        <div class="profile-layout">
          <div class="card profile-avatar-card">
            <img class="profile-avatar-large" id="profile-pic-editor" src="${currentSession.avatar}">
            <div>
              <h3>${currentSession.name}</h3>
              <p class="text-muted">${currentSession.flat}</p>
            </div>
            <div class="badge badge-teal">Verified Member</div>
            
            <button class="btn btn-secondary btn-sm" style="width:100%; margin-top:12px;" onclick="showToast('Avatar editor simulated', 'info')"><i data-lucide="camera" style="width:14px;"></i> Upload Picture</button>
          </div>

          <div class="card" style="padding: 28px;">
            <div class="settings-section-list">
              <div>
                <div class="settings-group-title">Personal Information</div>
                <div class="grid-2">
                  <div class="form-group">
                    <label class="form-label">Full Name</label>
                    <input type="text" class="form-input" value="${currentSession.name}" id="profile-field-name">
                  </div>
                  <div class="form-group">
                    <label class="form-label">Primary Email</label>
                    <input type="email" class="form-input" value="${currentSession.email || 'rahul@onenivasa.in'}" id="profile-field-email">
                  </div>
                </div>
                <div class="grid-2">
                  <div class="form-group">
                    <label class="form-label">Mobile Number</label>
                    <input type="text" class="form-input" value="${currentSession.phone || '+91 98765 43210'}" id="profile-field-phone">
                  </div>
                  <div class="form-group">
                    <label class="form-label">Assigned Flat/Block</label>
                    <input type="text" class="form-input" value="${currentSession.flat}" disabled style="background:#F1F5F9;">
                  </div>
                </div>
              </div>

              <div>
                <div class="settings-group-title">Registered Vehicle Log</div>
                <div class="form-group">
                  <label class="form-label">Vehicle Plate & Model Details</label>
                  <input type="text" class="form-input" value="${currentSession.vehicles || 'None registered'}" id="profile-field-vehicle">
                </div>
              </div>

              <div style="display:flex; justify-content:flex-end; border-top: 1px solid var(--border-color); padding-top: 20px;">
                <button class="btn btn-primary" onclick="updateProfileSettings()"><i data-lucide="check" style="width:16px;"></i> Save Profile Details</button>
              </div>
            </div>
          </div>
        </div>
      `;
      break;

    case "settings":
      panel.innerHTML = `
        <div class="home-welcome">
          <h2>Account Configuration Settings</h2>
          <p class="text-muted">Configure security preferences, notifications hubs, and dashboard parameters.</p>
        </div>

        <div class="card" style="max-width: 600px; margin: 0 auto; padding: 28px;">
          <div class="settings-section-list">
            <div>
              <div class="settings-group-title">Notification Channels</div>
              <div class="form-group" style="flex-direction:row; justify-content:space-between; align-items:center;">
                <div>
                  <div class="font-medium" style="font-size:0.875rem;">Gate Entry Alerts</div>
                  <div class="text-muted" style="font-size:11px;">Receive browser notifications when guest QR passes check-in.</div>
                </div>
                <input type="checkbox" checked style="width: 18px; height: 18px; accent-color: var(--accent);">
              </div>
              <div class="form-group" style="flex-direction:row; justify-content:space-between; align-items:center; border-top:1px solid var(--border-color); padding-top:12px;">
                <div>
                  <div class="font-medium" style="font-size:0.875rem;">WhatsApp Helper Notifications</div>
                  <div class="text-muted" style="font-size:11px;">Receive WhatsApp alerts when your maids/cooks clear gate checkpoints.</div>
                </div>
                <input type="checkbox" checked style="width: 18px; height: 18px; accent-color: var(--accent);">
              </div>
            </div>

            <div>
              <div class="settings-group-title">SaaS Premium Configurations</div>
              <div class="form-group" style="flex-direction:row; justify-content:space-between; align-items:center;">
                <div>
                  <div class="font-medium" style="font-size:0.875rem;">Dynamic Light Mode</div>
                  <div class="text-muted" style="font-size:11px;">Enable warm-gray tinting background frames across card grids.</div>
                </div>
                <input type="checkbox" checked style="width: 18px; height: 18px; accent-color: var(--accent);">
              </div>
            </div>

            <div style="border-top:1px solid var(--border-color); padding-top:20px; display:flex; justify-content:flex-end;">
              <button class="btn btn-primary" onclick="showToast('Configurations Saved!', 'success')">Save Settings</button>
            </div>
          </div>
        </div>
      `;
      break;

    default:
      panel.innerHTML = `<div class="empty-state"><h3>Feature Coming Soon</h3></div>`;
  }
}

// Render Helper logs list widget inside Resident dashboard overview
function renderDailyHelpWidget() {
  return db.dailyHelp.map(h => {
    let badgeClass = h.status === "Checked In" ? "badge-teal" : h.status === "Checked Out" ? "badge-info" : "badge-warning";
    return `
      <div style="display:flex; justify-content:space-between; align-items:center; padding: 10px 0; border-bottom: 1px solid var(--border-color);">
        <div>
          <span class="font-semibold" style="font-size:13px; color:var(--primary);">${h.name}</span>
          <div style="font-size:10px; color:var(--text-muted);">${h.role} • Code: ${h.code}</div>
        </div>
        <div style="text-align:right;">
          <span class="badge ${badgeClass}" style="font-size:10px; padding:2px 8px;">${h.status}</span>
          <div style="font-size:9px; color:var(--text-light); margin-top:2px;">${h.time}</div>
        </div>
      </div>
    `;
  }).join('');
}

function renderScheduleItems() {
  const items = [];
  
  db.facilities.forEach(fac => {
    for (const [time, slotVal] of Object.entries(fac.slots)) {
      if (slotVal === `${currentSession.name} (${currentSession.flat})`) {
        items.push({
          time: time,
          title: fac.name,
          subtitle: "Facility Reservation Active"
        });
      }
    }
  });

  db.visitors.forEach(v => {
    if (v.flat === currentSession.flat && v.status === "Expected") {
      items.push({
        time: v.expectedTime.replace("Today, ", ""),
        title: `${v.name} Expected`,
        subtitle: `Access Code: ${v.code}`
      });
    } else if (v.flat === currentSession.flat && (v.status === "Inside" || v.status === "Pre-Approved")) {
      items.push({
        time: "Gate Pass",
        title: `${v.name} Clear`,
        subtitle: v.status
      });
    }
  });

  db.requests.forEach(r => {
    if (r.flat === currentSession.flat && r.status === "In Progress") {
      items.push({
        time: "Ongoing",
        title: `SLA Task: ${r.category}`,
        subtitle: r.assignee
      });
    }
  });

  if (items.length === 0) {
    return `
      <div style="text-align:center; padding: 12px 0; color:var(--text-light);">
        <i data-lucide="calendar" style="width:24px; margin-bottom:4px; display:block; margin-left:auto; margin-right:auto;"></i>
        <span style="font-size:11px;">No appointments mapped for today.</span>
      </div>
    `;
  }

  return items.map(item => `
    <div class="upcoming-item">
      <div class="upcoming-time-col">${item.time}</div>
      <div class="upcoming-details">
        <div class="upcoming-title">${item.title}</div>
        <div class="upcoming-subtitle">${item.subtitle}</div>
      </div>
    </div>
  `).join('');
}


// --------------------------------------------------
// ADMIN SUB-PANELS COMPILER
// --------------------------------------------------
function compileAdminPanel(sectionId, panel) {
  switch (sectionId) {
    
    case "overview":
      const totalRes = db.residents.length;
      const activeProv = db.providers.length;
      const openReq = db.requests.filter(r => r.status !== 'Resolved').length;
      const visitorGateCount = db.visitors.filter(v => v.status === 'Expected').length;
      const monthlyTotalCollections = db.transactions.filter(t => t.status === 'Paid').reduce((sum, item) => sum + item.amount, 0);
      const activeBookingsCount = db.facilities.reduce((sum, f) => {
        let cnt = 0;
        for (const val of Object.values(f.slots)) {
          if (val !== 'Available') cnt++;
        }
        return sum + cnt;
      }, 0);

      panel.innerHTML = `
        <div class="home-welcome">
          <h2>Property Management Overview</h2>
          <p class="text-muted">A bird's-eye view of OneNivasa operational parameters, security indices, and collections.</p>
        </div>

        <div class="admin-stats-grid">
          <div class="card admin-stat-card">
            <span class="home-stat-label">Residents</span>
            <div class="admin-stat-num">${totalRes} Flats</div>
          </div>
          <div class="card admin-stat-card">
            <span class="home-stat-label">Vendors</span>
            <div class="admin-stat-num">${activeProv} Active</div>
          </div>
          <div class="card admin-stat-card">
            <span class="home-stat-label">Complaints</span>
            <div class="admin-stat-num text-danger">${openReq} Open</div>
          </div>
          <div class="card admin-stat-card">
            <span class="home-stat-label">Expected Gate</span>
            <div class="admin-stat-num">${visitorGateCount} Today</div>
          </div>
          <div class="card admin-stat-card">
            <span class="home-stat-label">Ledger Collections</span>
            <div class="admin-stat-num text-success">₹${(monthlyTotalCollections / 1000).toFixed(1)}k</div>
          </div>
          <div class="card admin-stat-card">
            <span class="home-stat-label">Bookings</span>
            <div class="admin-stat-num">${activeBookingsCount} Reserved</div>
          </div>
        </div>

        <div class="admin-charts-grid">
          <div class="card" style="display:flex; flex-direction:column; justify-content:space-between;">
            <div class="panel-section-title" style="margin-bottom:8px;">
              <span>Society SLA Ticket Speeds (Volume vs Days)</span>
              <span style="font-size:11px; font-weight:500;" class="text-muted">Avg resolution SLA: <b>14.2 Hours</b></span>
            </div>
            
            <div class="chart-box">
              <div class="chart-col">
                <div class="chart-bar-fill active" style="height: 60%;"><div class="chart-bar-tooltip">12 Requests</div></div>
                <div class="chart-col-lbl">Mon</div>
              </div>
              <div class="chart-col">
                <div class="chart-bar-fill active" style="height: 45%;"><div class="chart-bar-tooltip">9 Requests</div></div>
                <div class="chart-col-lbl">Tue</div>
              </div>
              <div class="chart-col">
                <div class="chart-bar-fill active" style="height: 80%;"><div class="chart-bar-tooltip">16 Requests</div></div>
                <div class="chart-col-lbl">Wed</div>
              </div>
              <div class="chart-col">
                <div class="chart-bar-fill active" style="height: 35%;"><div class="chart-bar-tooltip">7 Requests</div></div>
                <div class="chart-col-lbl">Thu</div>
              </div>
              <div class="chart-col">
                <div class="chart-bar-fill active" style="height: 90%;"><div class="chart-bar-tooltip">18 Requests</div></div>
                <div class="chart-col-lbl">Fri</div>
              </div>
              <div class="chart-col">
                <div class="chart-bar-fill" style="height: 25%;"><div class="chart-bar-tooltip">5 Requests</div></div>
                <div class="chart-col-lbl">Sat</div>
              </div>
              <div class="chart-col">
                <div class="chart-bar-fill" style="height: 15%;"><div class="chart-bar-tooltip">3 Requests</div></div>
                <div class="chart-col-lbl">Sun</div>
              </div>
            </div>
          </div>

          <div class="card" style="padding: 24px;">
            <div class="panel-section-title" style="margin-bottom:8px;">
              <span>Service Category Spreads</span>
            </div>
            <div style="height: 100px; display:flex; align-items:center; justify-content:center;">
              <div style="width:90px; height:90px; border-radius:50%; background: conic-gradient(var(--accent) 0% 45%, #3B82F6 45% 75%, #F59E0B 75% 100%);"></div>
            </div>
            <div class="pie-chart-legend">
              <div class="legend-item">
                <div class="legend-left"><div class="legend-color-dot" style="background:var(--accent);"></div> <span>Utility Services (45%)</span></div>
                <span class="font-semibold">₹2,840</span>
              </div>
              <div class="legend-item">
                <div class="legend-left"><div class="legend-color-dot" style="background:#3B82F6;"></div> <span>Facility Bookings (30%)</span></div>
                <span class="font-semibold">₹1,800</span>
              </div>
              <div class="legend-item">
                <div class="legend-left"><div class="legend-color-dot" style="background:#F59E0B;"></div> <span>Society Admin Fees (25%)</span></div>
                <span class="font-semibold">₹1,500</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="panel-section-title">
            <span>Recent SLA Tickets Filed</span>
          </div>
          <div class="card admin-table-card">
            <table class="admin-table">
              <thead>
                <tr>
                  <th>Ticket ID</th>
                  <th>Flat Block</th>
                  <th>Description</th>
                  <th>Assigned Partner</th>
                  <th>Current Status</th>
                  <th>Administrative Actions</th>
                </tr>
              </thead>
              <tbody>
                ${db.requests.map(req => `
                  <tr>
                    <td class="font-semibold">${req.id}</td>
                    <td>${req.flat}</td>
                    <td style="max-width: 250px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${req.desc}</td>
                    <td>${req.assignee}</td>
                    <td>
                      <span class="badge ${req.status === 'Resolved' ? 'badge-teal' : req.status === 'In Progress' ? 'badge-info' : 'badge-warning'}">${req.status}</span>
                    </td>
                    <td>
                      ${req.status !== 'Resolved' ? `
                        <button class="btn btn-secondary btn-sm" onclick="adminQuickResolveRequest('${req.id}')">Resolve Ticket</button>
                      ` : `
                        <span class="text-muted" style="font-size:11px;">No Action Required</span>
                      `}
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;
      break;

    case "residents":
      panel.innerHTML = `
        <div class="visitor-action-header">
          <div>
            <h2>Resident Directory Register</h2>
            <p class="text-muted">A full digital audit log of society flats, registered tenants, and gate vehicles index.</p>
          </div>
          <button class="btn btn-primary" onclick="adminAddNewResidentPrompt()"><i data-lucide="user-plus"></i> Enroll Flat</button>
        </div>

        <div class="card admin-table-card">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Resident Full Name</th>
                <th>Assigned Flat</th>
                <th>Primary Contact</th>
                <th>Secondary Email</th>
                <th>Registered Vehicle</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${db.residents.map(res => `
                <tr>
                  <td class="font-semibold">${res.name}</td>
                  <td>${res.flat}</td>
                  <td>${res.phone}</td>
                  <td>${res.email}</td>
                  <td style="font-size:11px; font-weight:500;">${res.vehicle || 'No vehicle linked'}</td>
                  <td>
                    <button class="btn btn-text btn-sm" style="color:var(--danger);" onclick="adminRemoveResident('${res.id}')">Deregister Flat</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
      break;

    case "providers":
      panel.innerHTML = `
        <div class="visitor-action-header">
          <div>
            <h2>Vendor Partner Registry</h2>
            <p class="text-muted">Manage plumbers, dry-cleaners, car washing companies, and local gate dispatch partners.</p>
          </div>
          <button class="btn btn-primary" onclick="adminAddNewVendorPrompt()"><i data-lucide="plus"></i> Add Vendor</button>
        </div>

        <div class="card admin-table-card">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Vendor Company</th>
                <th>Category Specialty</th>
                <th>Verification Code</th>
                <th>Contact Line</th>
                <th>Ratings Average</th>
                <th>Earnings</th>
              </tr>
            </thead>
            <tbody>
              ${db.providers.map(prov => `
                <tr>
                  <td class="font-semibold">${prov.name}</td>
                  <td><span class="badge badge-teal">${prov.category}</span></td>
                  <td>${prov.id}</td>
                  <td>${prov.phone}</td>
                  <td>⭐ ${prov.rating}</td>
                  <td>₹${prov.earnings.toLocaleString('en-IN')}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
      break;

    case "requests":
      panel.innerHTML = `
        <div class="home-welcome">
          <h2>Active Society Complaints Register</h2>
          <p class="text-muted">Review, assign, escalate, or resolve active maintenance issues filed by estate residents.</p>
        </div>

        <div class="card admin-table-card">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Ticket ID</th>
                <th>Reporter flat</th>
                <th>Category</th>
                <th>Complaint Description</th>
                <th>Assigned partner</th>
                <th>Current Status</th>
                <th>Dispatch Escalate</th>
              </tr>
            </thead>
            <tbody>
              ${db.requests.map(req => `
                <tr>
                  <td class="font-semibold">${req.id}</td>
                  <td>${req.flat} (${req.resident})</td>
                  <td>${req.category}</td>
                  <td>${req.desc}</td>
                  <td>
                    <select class="form-select btn-sm" style="padding:4px;" onchange="adminReassignProvider('${req.id}', this.value)">
                      <option value="Apex Electricals" ${req.assignee.includes('Electricals') ? 'selected' : ''}>Apex Electricals</option>
                      <option value="Metro Plumbers" ${req.assignee.includes('Plumbers') ? 'selected' : ''}>Metro Plumbers</option>
                      <option value="EcoClean India" ${req.assignee.includes('EcoClean') ? 'selected' : ''}>EcoClean India</option>
                      <option value="Otis Support team" ${req.assignee.includes('Otis') ? 'selected' : ''}>Otis Support team</option>
                    </select>
                  </td>
                  <td>
                    <span class="badge ${req.status === 'Resolved' ? 'badge-teal' : req.status === 'In Progress' ? 'badge-info' : 'badge-warning'}">${req.status}</span>
                  </td>
                  <td>
                    <button class="btn btn-secondary btn-sm" onclick="adminQuickResolveRequest('${req.id}')">Force Resolve</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
      break;

    case "visitors":
      panel.innerHTML = `
        <div class="home-welcome">
          <h2>Visitor Clearance Log Register</h2>
          <p class="text-muted">Live logs of guests checked in, expected passes, and delivery vehicles active inside.</p>
        </div>

        <div class="card admin-table-card">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Visitor Guest Name</th>
                <th>Clearance Code</th>
                <th>Block Target</th>
                <th>Visit Reason</th>
                <th>Gate Check-in Time</th>
                <th>Status State</th>
              </tr>
            </thead>
            <tbody>
              ${db.visitors.map(v => `
                <tr>
                  <td class="font-semibold">${v.name}</td>
                  <td><code>${v.code}</code></td>
                  <td>${v.flat} (${v.resident})</td>
                  <td>${v.type}</td>
                  <td>${v.expectedTime}</td>
                  <td>
                    <span class="badge ${v.status === 'Expected' ? 'badge-warning' : v.status === 'Inside' ? 'badge-teal' : 'badge-info'}">${v.status}</span>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
      break;

    case "facilities":
      panel.innerHTML = `
        <div class="home-welcome">
          <h2>Facilities Operational Matrix</h2>
          <p class="text-muted">Manage court configurations, opening slots, and active guest bookings across community centers.</p>
        </div>

        <div class="grid-2">
          ${db.facilities.map(fac => `
            <div class="card" style="margin-bottom: 24px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                <div style="display:flex; align-items:center; gap:8px;">
                  <span style="font-size:2rem;">${fac.image}</span>
                  <div>
                    <h4 style="font-size:15px; font-weight:700;">${fac.name}</h4>
                    <p style="font-size:11px; color:var(--text-muted);">Max capacity: ${fac.capacity}</p>
                  </div>
                </div>
                <button class="btn btn-secondary btn-sm" onclick="showToast('Facility details configuration updated (simulated)', 'success')">Configure Options</button>
              </div>
              <div style="border-top:1px solid var(--border-color); padding-top:12px;">
                <div style="font-size:11px; font-weight:700; color:var(--text-light); text-transform:uppercase; margin-bottom:6px;">Current Slot Matrix (Today)</div>
                <div style="display:flex; flex-direction:column; gap:4px;">
                  ${Object.entries(fac.slots).map(([time, state]) => `
                    <div style="display:flex; justify-content:space-between; font-size:12px; padding:4px 0; border-bottom:1px solid var(--bg-app);">
                      <span>${time}</span>
                      <span class="font-semibold ${state === 'Available' ? 'text-success' : 'text-accent'}">${state}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      `;
      break;

    case "parking":
      panel.innerHTML = `
        <div class="home-welcome">
          <h2>Society Parking Bay Mapping</h2>
          <p class="text-muted">Audit logs of parking structures, swap allocations, and vehicle details.</p>
        </div>

        <div class="card admin-table-card">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Parking Bay ID</th>
                <th>Assigned Flat Resident</th>
                <th>Linked Vehicle Details</th>
                <th>Swap Sharing Enabled</th>
                <th>Operational Status</th>
              </tr>
            </thead>
            <tbody>
              ${db.mobility.parking.map(park => `
                <tr>
                  <td class="font-semibold">${park.slot}</td>
                  <td>${park.occupant}</td>
                  <td>${db.residents.find(r => r.name === park.occupant)?.vehicle || 'No vehicle details registered'}</td>
                  <td>
                    <span class="badge ${park.canShare ? 'badge-teal' : 'badge-danger'}">${park.canShare ? 'Enabled' : 'Disabled'}</span>
                  </td>
                  <td>
                    <span class="badge badge-success">Active allocation</span>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
      break;

    case "payments":
      panel.innerHTML = `
        <div class="visitor-action-header">
          <div>
            <h2>Society Maintenance Invoices Ledger</h2>
            <p class="text-muted">Record and verify transaction lists, fee collections ratios, and cash balance registers.</p>
          </div>
          <button class="btn btn-primary" onclick="adminTriggerMaintenanceInvoiceRun()"><i data-lucide="plus"></i> Run Invoice Generation</button>
        </div>

        <div class="card admin-table-card">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Invoice Code</th>
                <th>Transaction Item</th>
                <th>Amount Due</th>
                <th>Bill Category</th>
                <th>Billing Date</th>
                <th>Verification State</th>
                <th>Quick Actions</th>
              </tr>
            </thead>
            <tbody>
              ${db.transactions.map(tx => `
                <tr>
                  <td class="font-semibold">${tx.id}</td>
                  <td>${tx.type}</td>
                  <td class="font-semibold">₹${tx.amount}</td>
                  <td><span class="badge badge-info">${tx.category}</span></td>
                  <td>${tx.date}</td>
                  <td>
                    <span class="badge ${tx.status === 'Paid' ? 'badge-teal' : 'badge-danger'}">${tx.status}</span>
                  </td>
                  <td>
                    ${tx.status === 'Pending' ? `
                      <button class="btn btn-secondary btn-sm" onclick="adminQuickMarkInvoicePaid('${tx.id}')">Record Cash Payment</button>
                    ` : `
                      <span class="text-muted" style="font-size:11px;">Cleared via ${tx.paymentMethod}</span>
                    `}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
      break;

    case "announcements":
      panel.innerHTML = `
        <div class="visitor-action-header">
          <div>
            <h2>Circulars Bulletins Publisher</h2>
            <p class="text-muted">Send official circulars, water interruption notices, or alerts to resident dashboards.</p>
          </div>
        </div>

        <div class="grid-2">
          <div class="card" style="padding: 24px;">
            <div class="panel-section-title" style="margin-bottom:16px;">
              <span>Publish New Circular Notice</span>
            </div>
            
            <div class="form-group">
              <label class="form-label">Circular Title</label>
              <input type="text" class="form-input" id="ann-form-title" placeholder="E.g., Borewell A repair schedule">
            </div>
            <div class="grid-2">
              <div class="form-group">
                <label class="form-label">Category Group</label>
                <select class="form-select" id="ann-form-type">
                  <option value="Important">Important Alert / Warning</option>
                  <option value="Maintenance">Maintenance Shutoff Window</option>
                  <option value="Events">Community Meetup Event</option>
                  <option value="General">General Announcement</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Date Label</label>
                <input type="text" class="form-input" id="ann-form-date" value="Today">
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Announcement Content</label>
              <textarea class="form-textarea" id="ann-form-body" placeholder="Describe instructions, timelines..."></textarea>
            </div>
            
            <div style="display:flex; justify-content:flex-end; margin-top:8px;">
              <button class="btn btn-primary" onclick="submitAdminAnnouncement()"><i data-lucide="megaphone" style="width:16px;"></i> Broadcast Circular</button>
            </div>
          </div>

          <div class="card" style="padding: 24px;">
            <div class="panel-section-title" style="margin-bottom:16px;">
              <span>Circulars Active Log</span>
            </div>
            <div class="home-card-list">
              ${db.announcements.map(ann => `
                <div style="border-bottom:1px solid var(--border-color); padding-bottom:12px; margin-bottom:12px; position:relative;">
                  <span class="badge ${ann.type === 'Important' ? 'badge-danger' : ann.type === 'Events' ? 'badge-teal' : 'badge-info'}" style="position:absolute; top:0; right:0;">${ann.type}</span>
                  <h4 style="font-size:13px; font-weight:700; margin-bottom:4px; max-width:80%;">${ann.title}</h4>
                  <p class="text-muted" style="font-size:11px; line-height:1.4; margin-bottom:6px;">${ann.body}</p>
                  <span style="font-size:10px; color:var(--text-light);">${ann.date}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
      break;

    case "analytics":
      panel.innerHTML = `
        <div class="home-welcome">
          <h2>Core Estate Analytics</h2>
          <p class="text-muted">Charts tracking collection rates, complaint resolution speed, and facility utilization.</p>
        </div>

        <div class="grid-2">
          <div class="card">
            <div class="panel-section-title">
              <span>Facility Reservation Matrix</span>
            </div>
            <div class="chart-box">
              <div class="chart-col">
                <div class="chart-bar-fill active" style="height: 85%;"><div class="chart-bar-tooltip">85% booked</div></div>
                <div class="chart-col-lbl">Badminton</div>
              </div>
              <div class="chart-col">
                <div class="chart-bar-fill active" style="height: 60%;"><div class="chart-bar-tooltip">60% booked</div></div>
                <div class="chart-col-lbl">Gym</div>
              </div>
              <div class="chart-col">
                <div class="chart-bar-fill active" style="height: 40%;"><div class="chart-bar-tooltip">40% booked</div></div>
                <div class="chart-col-lbl">Pool</div>
              </div>
              <div class="chart-col">
                <div class="chart-bar-fill active" style="height: 20%;"><div class="chart-bar-tooltip">20% booked</div></div>
                <div class="chart-col-lbl">Clubhouse</div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="panel-section-title">
              <span>Maintenance Collections Index</span>
            </div>
            <div style="height: 150px; display:flex; align-items:center; justify-content:center;">
              <div style="width:120px; height:120px; border-radius:50%; background: conic-gradient(var(--accent) 0% 88%, var(--danger) 88% 100%); display:flex; align-items:center; justify-content:center;">
                <div style="width:70px; height:70px; border-radius:50%; background:white; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:16px;">88%</div>
              </div>
            </div>
            <p class="text-muted" style="font-size:11px; text-align:center; margin-top:8px;">88% of invoices settled. ₹4,500 outstanding.</p>
          </div>
        </div>
      `;
      break;

    default:
      panel.innerHTML = `<div class="empty-state"><h3>Admin Panel</h3></div>`;
  }
}


// --------------------------------------------------
// SECURITY DASHBOARD COMPILER
// --------------------------------------------------
function compileSecurityPanel(panel) {
  const expectedList = db.visitors.filter(v => v.status === 'Expected' || v.status === 'Pre-Approved');
  const insideList = db.visitors.filter(v => v.status === 'Inside');

  panel.innerHTML = `
    <div class="home-welcome">
      <h2>Gate Security Operations</h2>
      <p class="text-muted">Active Guard Shift: <b>${currentSession.name}</b> (Terminal: ${currentSession.flat})</p>
    </div>

    <!-- Live Panic Alert Monitor banner -->
    <div class="security-alert-bar" id="security-alert-banner" style="display:none;">
      <div style="display:flex; align-items:center; gap:12px;">
        <i data-lucide="alert-octagon" style="animation:pulse 1s infinite;"></i>
        <span><b>EMERGENCY REPORTED:</b> Flat ${db.residents.find(r => r.id === "R-101")?.flat || 'Block B-204'} (${db.residents.find(r => r.id === "R-101")?.name || 'Ashok Kumar'}) has triggered a Medical panic alarm!</span>
      </div>
      <button class="btn btn-secondary btn-sm" style="background:white; color:var(--danger); border-color:white;" onclick="acknowledgeEmergencyFromSecurity()">Acknowledge & Dispatch</button>
    </div>

    <div class="security-action-hub">
      <div class="card security-action-card card-hoverable" onclick="openModal('modal-security-scanner')">
        <div class="security-action-icon"><i data-lucide="qr-code"></i></div>
        <h3>Verify QR Guest Code</h3>
        <p class="text-muted" style="font-size:11px;">Input passcode / scan visitor pass code</p>
      </div>

      <div class="card security-action-card card-hoverable" onclick="adminTriggerSecurityQuickDelivery()">
        <div class="security-action-icon"><i data-lucide="truck"></i></div>
        <h3>Quick Delivery Entry</h3>
        <p class="text-muted" style="font-size:11px;">Register Amazon/Zomato/Swiggy entry without invite code</p>
      </div>
    </div>

    <div class="security-grid">
      <div class="card" style="padding: 20px;">
        <div class="mobility-block-header">
          <span>Expected Visitors (${expectedList.length})</span>
        </div>
        <div class="gate-logs-list">
          ${expectedList.map(v => {
            const isPre = v.status === "Pre-Approved";
            return `
              <div class="gate-log-item" style="${isPre ? 'background:#F0FDFA; border-left: 4px solid var(--accent); padding:8px 12px; border-radius:6px; margin-bottom:4px;' : ''}">
                <div class="gate-log-info">
                  <div style="display:flex; align-items:center; gap:6px;">
                    <span class="gate-log-title" style="font-weight:700;">${v.name}</span>
                    ${isPre ? `<span class="badge badge-teal" style="font-size:8px; padding:1px 4px;">Pre-Approved</span>` : ''}
                  </div>
                  <span class="text-muted" style="font-size:11px;">Target: <b>${v.flat}</b> • Reason: ${v.type}</span>
                </div>
                <div style="display:flex; gap:6px;">
                  <button class="btn btn-primary btn-sm" onclick="securityDirectVerify('${v.code}')">Verify Entry</button>
                </div>
              </div>
            `;
          }).join('')}
          ${expectedList.length === 0 ? '<div style="font-size:11px; text-align:center; padding:20px; color:var(--text-light);">No expected guests logged.</div>' : ''}
        </div>
      </div>

      <div class="card" style="padding: 20px;">
        <div class="mobility-block-header">
          <span>Guests Inside Complex (${insideList.length})</span>
        </div>
        <div class="gate-logs-list">
          ${insideList.map(v => `
            <div class="gate-log-item">
              <div class="gate-log-info">
                <span class="gate-log-title" style="font-weight:700;">${v.name}</span>
                <span class="text-muted" style="font-size:11px;">Target Flat: <b>${v.flat}</b> • Checked In: ${v.expectedTime}</span>
              </div>
              <button class="btn btn-secondary btn-sm" onclick="securityDirectCheckOut('${v.id}')">Log Exit</button>
            </div>
          `).join('')}
          ${insideList.length === 0 ? '<div style="font-size:11px; text-align:center; padding:20px; color:var(--text-light);">No guests checked inside complex.</div>' : ''}
        </div>
      </div>
    </div>
  `;
}


// --------------------------------------------------
// SERVICE PROVIDER DASHBOARD COMPILER
// --------------------------------------------------
function compileProviderPanel(panel) {
  const providerJobs = db.requests.filter(r => r.assignee.includes("Apex Electricals") || r.assignee.includes("Anil"));
  
  const pendingJobs = providerJobs.filter(j => j.status !== 'Resolved');
  const completedJobs = providerJobs.filter(j => j.status === 'Resolved');
  const totalEarnings = completedJobs.length * 299;

  panel.innerHTML = `
    <div class="home-welcome">
      <h2>Vendor Dispatch Dashboard</h2>
      <p class="text-muted">Review service calls assigned to your company, update progress logs, and check billing payouts.</p>
    </div>

    <div class="provider-stats-grid">
      <div class="card provider-stat-card">
        <span class="home-stat-label">Active Orders</span>
        <div class="admin-stat-num">${pendingJobs.length} Pending</div>
      </div>
      <div class="card provider-stat-card">
        <span class="home-stat-label">Completed Jobs</span>
        <div class="admin-stat-num">${completedJobs.length} Resolved</div>
      </div>
      <div class="card provider-stat-card">
        <span class="home-stat-label">Calculated Payouts</span>
        <div class="admin-stat-num text-success">₹${totalEarnings.toLocaleString('en-IN')}</div>
      </div>
      <div class="card provider-stat-card">
        <span class="home-stat-label">Customer Rating</span>
        <div class="admin-stat-num text-accent">⭐ 4.8 / 5.0</div>
      </div>
    </div>

    <div class="provider-jobs-container">
      <div class="card" style="padding:20px;">
        <div class="panel-section-title">Active Dispatch Orders</div>
        <div class="jobs-list">
          ${pendingJobs.map(job => `
            <div class="card job-card" style="background:var(--bg-app); border:1px solid var(--border-color);">
              <div class="job-header">
                <div class="job-client">
                  <div class="visitor-avatar-initial" style="background:var(--accent-light); color:var(--accent); font-weight:700; width:36px; height:36px;">
                    ${job.resident.split(' ')[0][0]}
                  </div>
                  <div>
                    <h4 style="font-size:13px; font-weight:700;">${job.resident}</h4>
                    <p style="font-size:11px; color:var(--text-muted);">Flat: ${job.flat}</p>
                  </div>
                </div>
                <span class="badge ${job.status === 'In Progress' ? 'badge-info' : 'badge-warning'}">${job.status}</span>
              </div>
              
              <div class="job-details-row">
                <div class="job-detail-box">
                  <span class="text-muted" style="font-size:9px; text-transform:uppercase;">Specialty requested</span>
                  <span style="font-weight:600;">${job.category} Repair</span>
                </div>
                <div class="job-detail-box">
                  <span class="text-muted" style="font-size:9px; text-transform:uppercase;">Requested slot</span>
                  <span style="font-weight:600;">As soon as possible</span>
                </div>
                <div class="job-detail-box">
                  <span class="text-muted" style="font-size:9px; text-transform:uppercase;">Reported Issue details</span>
                  <span>${job.desc}</span>
                </div>
              </div>

              <div class="job-action-strip">
                ${job.status === 'Submitted' ? `
                  <button class="btn btn-primary btn-sm" onclick="providerUpdateJobStatus('${job.id}', 'In Progress')">Accept & Mark In-Progress</button>
                ` : job.status === 'In Progress' ? `
                  <button class="btn btn-primary btn-sm" onclick="providerUpdateJobStatus('${job.id}', 'Resolved')">Mark Job Completed</button>
                ` : ''}
              </div>
            </div>
          `).join('')}
          ${pendingJobs.length === 0 ? '<div class="empty-state">No pending work orders.</div>' : ''}
        </div>
      </div>

      <div class="card" style="padding:20px;">
        <div class="panel-section-title">Rules Dashboard</div>
        <p style="font-size:11px; color:var(--text-muted); margin-bottom:12px;">Official directives from society management regarding vendor operations.</p>
        <div style="background:var(--bg-app); border:1px solid var(--border-color); padding:12px; border-radius:6px; font-size:11px; line-height:1.4;">
          <b>Gate Rules Updated</b><br>
          All service staff vehicles must register at Gate 1. Handheld QR codes must be scanned prior to entrance clearance.
        </div>
      </div>
    </div>
  `;
}


// ==================================================
// 6. DETAILED INTERACTIVE COMPONENT BEHAVIORS
// ==================================================

// --------------------------------------------------
// A. SERVICES CATALOG MANAGEMENT
// --------------------------------------------------
let activeServiceCategory = "All";

function selectServiceCategory(catName, pillElement) {
  activeServiceCategory = catName;
  const pills = document.querySelectorAll(".category-pill");
  pills.forEach(p => p.classList.remove("active"));
  pillElement.classList.add("active");

  filterServicesCatalog();
}

function filterServicesCatalog() {
  const query = document.getElementById("services-search-bar")?.value.toLowerCase() || "";
  const sortBy = document.getElementById("services-sort-filter")?.value || "popular";
  const grid = document.getElementById("services-catalog-grid");
  
  if (!grid) return;
  
  let list = db.services;

  if (activeServiceCategory !== "All") {
    list = list.filter(s => s.category === activeServiceCategory);
  }

  if (query) {
    list = list.filter(s => s.name.toLowerCase().includes(query) || s.category.toLowerCase().includes(query));
  }

  if (sortBy === "popular") {
    list.sort((a, b) => b.bookings - a.bookings);
  } else if (sortBy === "rating") {
    list.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === "price-low") {
    list.sort((a, b) => a.price - b.price);
  }

  if (list.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: span 4;">
        <div class="empty-state">
          <div class="empty-state-icon"><i data-lucide="briefcase"></i></div>
          <h3>No services found</h3>
          <p>Try refining your search terms.</p>
        </div>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  grid.innerHTML = list.map(serv => `
    <div class="card service-card card-hoverable" onclick="viewServiceDetails('${serv.id}')" style="cursor:pointer;">
      <div>
        <div class="service-icon-banner">
          <i data-lucide="${serv.category === 'Cleaning' ? 'sparkles' : serv.category === 'Electrician' ? 'zap' : serv.category === 'Plumber' ? 'droplet' : 'help-circle'}" style="width:36px; height:36px; color:var(--accent);"></i>
        </div>
        <div class="service-name">${serv.name}</div>
        <div class="service-meta-line">
          <span style="font-weight:600;"><i data-lucide="star" style="width:12px; display:inline-block; fill:var(--warning); color:var(--warning);"></i> ${serv.rating}</span>
          <span class="service-meta-dot"></span>
          <span>${serv.bookings}+ orders</span>
        </div>
      </div>
      <div class="service-footer">
        <div class="service-price">
          <span class="price-lbl">Starting Price</span>
          <span class="price-val">₹${serv.price}</span>
        </div>
        <span class="badge ${serv.verified ? 'badge-teal' : 'badge-info'}">${serv.verified ? 'Verified' : 'Local'}</span>
      </div>
    </div>
  `).join('');
  
  lucide.createIcons();
}

let activeBookingService = null;

function viewServiceDetails(serviceId) {
  const service = db.services.find(s => s.id === serviceId);
  if (!service) return;

  activeBookingService = service;
  const provider = db.providers.find(p => p.id === service.providerId) || { name: service.providerName, rating: service.rating, phone: "+91 XXXXX XXXXX" };

  const body = document.getElementById("service-detail-body");
  document.getElementById("service-booking-title").innerText = service.name;

  body.innerHTML = `
    <div class="service-detail-container">
      <div class="service-provider-brief">
        <div class="visitor-avatar-initial" style="width:48px; height:48px; background:var(--accent-light); color:var(--accent); font-weight:700; font-size:1.25rem;">
          ${provider.name[0]}
        </div>
        <div class="provider-info">
          <h4>${provider.name}</h4>
          <span class="provider-rating">⭐ ${provider.rating} • Verified Society Partner</span>
        </div>
      </div>

      <div class="service-modal-pricing">
        <div class="service-price">
          <span class="price-lbl">Fixed Consultation Fee</span>
          <span class="price-val" style="font-size: 1.5rem;">₹${service.price}</span>
        </div>
        <div style="text-align: right;">
          <span class="price-lbl" style="display:block;">Estimated Duration</span>
          <span class="font-semibold" style="font-size: 0.9375rem;">${service.duration}</span>
        </div>
      </div>

      <div>
        <label class="form-label">Choose Available Time Slot (Today)</label>
        <div class="time-slot-grid">
          <button class="time-slot-btn active" onclick="selectBookingTimeSlot('02:00 PM', this)">02:00 PM</button>
          <button class="time-slot-btn" onclick="selectBookingTimeSlot('04:00 PM', this)">04:00 PM</button>
          <button class="time-slot-btn" onclick="selectBookingTimeSlot('06:00 PM', this)">06:00 PM</button>
        </div>
      </div>
    </div>
  `;

  document.getElementById("btn-confirm-service-booking").onclick = executeServiceBooking;
  openModal("modal-service-booking");
}

let selectedBookingTime = "02:00 PM";
function selectBookingTimeSlot(time, element) {
  selectedBookingTime = time;
  const btns = document.querySelectorAll(".time-slot-btn");
  btns.forEach(b => b.classList.remove("active"));
  element.classList.add("active");
}

function executeServiceBooking() {
  if (!activeBookingService) return;

  const ticketId = "REQ-" + Math.floor(2000 + Math.random() * 9000);
  const newRequest = {
    id: ticketId,
    ticketId: ticketId,
    category: activeBookingService.category,
    desc: `Scheduled professional service for ${activeBookingService.name}. Requested time slot: ${selectedBookingTime}`,
    status: "Submitted",
    flat: currentSession.flat,
    resident: currentSession.name,
    assignee: activeBookingService.providerName,
    eta: `Today, ${selectedBookingTime}`
  };

  db.requests.unshift(newRequest);

  const txId = "TX-" + Math.floor(400 + Math.random() * 900);
  const newTx = {
    id: txId,
    type: `${activeBookingService.name} booking`,
    amount: activeBookingService.price,
    category: "Service Bookings",
    date: "Today",
    status: "Pending",
    paymentMethod: "-"
  };

  db.transactions.unshift(newTx);
  commitState();
  closeModal("modal-service-booking");
  showToast(`Booking Successful! Service logged under ticket ${ticketId}`, "success");
  
  navigateToPanel("requests");
}


// --------------------------------------------------
// B. MARKETPLACE BAZAAR
// --------------------------------------------------
let activeMarketTab = "ALL";

function switchMarketplaceTab(tabKey, element) {
  activeMarketTab = tabKey;
  const btns = element.parentNode.querySelectorAll(".tab-btn");
  btns.forEach(b => b.classList.remove("active"));
  element.classList.add("active");

  renderMarketplaceListings(tabKey);
}

function renderMarketplaceListings(tabType) {
  const grid = document.getElementById("market-catalog-grid");
  if (!grid) return;

  let list = db.marketplace;

  if (tabType !== "ALL") {
    list = list.filter(item => item.type === tabType);
  }

  if (list.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: span 4;">
        <div class="empty-state">
          <div class="empty-state-icon"><i data-lucide="shopping-bag"></i></div>
          <h3>No items found</h3>
          <p>Be the first to post an item in this category.</p>
        </div>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  grid.innerHTML = list.map(item => `
    <div class="card product-card card-hoverable">
      <div class="product-img">
        <span style="font-size:4rem;">${item.image}</span>
        <span class="product-tag">${item.type}</span>
        <button class="product-heart" onclick="toggleFavoriteListing('${item.id}', this)"><i data-lucide="heart" style="width:14px;"></i></button>
      </div>
      <div class="product-details">
        <div class="product-cond">${item.condition}</div>
        <div class="product-title">${item.title}</div>
        <div class="product-meta-sub">
          <span>Seller: <b>${item.seller}</b></span>
          <span>Loc: <b>${item.flat.split(' ')[1]}</b></span>
        </div>
      </div>
      <div class="product-footer">
        <span class="product-price">₹${item.price}</span>
        <button class="btn btn-secondary btn-sm" onclick="contactMarketplaceSeller('${item.id}')">Contact Seller</button>
      </div>
    </div>
  `).join('');

  lucide.createIcons();
}

function toggleFavoriteListing(id, element) {
  event.stopPropagation();
  element.classList.toggle("active");
  const isFav = element.classList.contains("active");
  showToast(isFav ? "Added to favorites" : "Removed from favorites", "info");
}

function contactMarketplaceSeller(id) {
  const item = db.marketplace.find(m => m.id === id);
  if (!item) return;

  showToast(`Contact card requested: Contact ${item.seller} at flat ${item.flat}. Preference: Call`, "success");
}

function submitMarketplaceListing() {
  const title = document.getElementById("market-form-title").value;
  const type = document.getElementById("market-form-type").value;
  const condition = document.getElementById("market-form-condition").value;
  const price = parseInt(document.getElementById("market-form-price").value) || 0;
  const category = document.getElementById("market-form-category").value;
  const desc = document.getElementById("market-form-desc").value;

  if (!title) {
    showToast("Please enter an item title", "danger");
    return;
  }

  const imagesMap = {
    Electronics: "📱",
    Furniture: "🪑",
    Books: "📚",
    Bicycles: "🚲",
    Food: "🍱",
    Other: "📦"
  };

  const newProduct = {
    id: "MKT-" + Math.floor(100 + Math.random() * 900),
    title: title,
    type: type,
    condition: condition,
    price: price,
    category: category,
    flat: currentSession.flat,
    seller: currentSession.name,
    description: desc,
    image: imagesMap[category] || "📦"
  };

  db.marketplace.unshift(newProduct);
  commitState();
  closeModal("modal-sell-product");
  showToast("Listing published inside community bazaar!", "success");
  renderMarketplaceListings(activeMarketTab);
}


// --------------------------------------------------
// C. SOCIETY SOCIAL COMMUNICATION
// --------------------------------------------------
function renderCommunityFeed() {
  const feed = document.getElementById("community-social-feed");
  if (!feed) return;

  feed.innerHTML = db.posts.map(post => `
    <div class="post-card">
      <div class="post-header">
        <div class="visitor-avatar-initial" style="background:var(--bg-app); color:var(--text-muted); font-weight:600; width:40px; height:40px;">
          ${post.author.split(' ')[0][0]}${post.author.split(' ')[1] ? post.author.split(' ')[1][0] : ''}
        </div>
        <div class="post-user-info">
          <h4>${post.author}</h4>
          <p>${post.flat} • ${post.date}</p>
        </div>
      </div>
      
      <div class="post-body">${post.body}</div>
      <span class="post-tag-pill">${post.tag}</span>

      <div class="post-actions">
        <button class="post-action-btn ${post.likedBy.includes(currentSession.id) ? 'active' : ''}" onclick="likeCommunityPost('${post.id}')">
          <i data-lucide="thumbs-up" style="width:14px;"></i> <span>Like (${post.likes})</span>
        </button>
        <button class="post-action-btn" onclick="commentCommunityPostPrompt('${post.id}')">
          <i data-lucide="message-square" style="width:14px;"></i> <span>Comment (${post.comments.length})</span>
        </button>
      </div>

      ${post.comments.length > 0 ? `
        <div style="margin-top:16px; background:var(--bg-app); padding:12px; border-radius:var(--radius-md); display:flex; flex-direction:column; gap:8px;">
          ${post.comments.map(c => `
            <div style="font-size:12px;">
              <span style="font-weight:700; color:var(--primary);">${c.author} (${c.flat}):</span>
              <span style="color:var(--text-muted);">${c.text}</span>
            </div>
          `).join('')}
        </div>
      ` : ''}
    </div>
  `).join('');

  lucide.createIcons();
}

function likeCommunityPost(postId) {
  const post = db.posts.find(p => p.id === postId);
  if (!post) return;

  const userIndex = post.likedBy.indexOf(currentSession.id);
  if (userIndex === -1) {
    post.likedBy.push(currentSession.id);
    post.likes++;
  } else {
    post.likedBy.splice(userIndex, 1);
    post.likes--;
  }

  commitState();
  renderCommunityFeed();
}

function commentCommunityPostPrompt(postId) {
  const text = prompt("Enter your comment text:");
  if (!text || !text.trim()) return;

  const post = db.posts.find(p => p.id === postId);
  if (!post) return;

  post.comments.push({
    author: currentSession.name,
    flat: currentSession.flat,
    text: text
  });

  commitState();
  renderCommunityFeed();
  showToast("Comment published", "success");
}

function submitCommunityPost() {
  const body = document.getElementById("community-post-input").value;
  const tag = document.getElementById("community-post-tag").value;

  if (!body.trim()) {
    showToast("Post content cannot be empty", "danger");
    return;
  }

  const newPost = {
    id: "POST-" + Math.floor(100 + Math.random() * 900),
    author: currentSession.name,
    flat: currentSession.flat,
    body: body,
    likes: 0,
    likedBy: [],
    comments: [],
    tag: tag,
    date: "Just now"
  };

  db.posts.unshift(newPost);
  commitState();
  document.getElementById("community-post-input").value = "";
  showToast("Post published successfully!", "success");
  renderCommunityFeed();
}

function rsvpToEvent(eventId) {
  event.preventDefault();
  const ev = db.events.find(e => e.id === eventId);
  if (!ev) return;

  ev.attendees++;
  commitState();
  showToast("RSVP Confirmed!", "success");
  navigateToPanel("home");
}


// --------------------------------------------------
// D. MOBILITY & CARPOOL
// --------------------------------------------------
function renderCarpoolRides() {
  const container = document.getElementById("mobility-carpools-container");
  if (!container) return;

  container.innerHTML = db.mobility.carpool.map(ride => `
    <div class="card carpool-card" style="border: 1px solid var(--border-color); background:var(--surface);">
      <div class="carpool-header">
        <span class="carpool-route">${ride.route}</span>
        <span class="badge badge-teal">${ride.time}</span>
      </div>
      <div class="carpool-details">
        <div>Host: <b>${ride.host}</b></div>
        <div>Schedule: <b>${ride.days}</b></div>
        <div>Seats Available: <b class="text-accent">${ride.seats}</b></div>
        ${ride.members.length > 0 ? `<div style="font-size:10px;">Joined: ${ride.members.join(', ')}</div>` : ''}
      </div>
      <div class="carpool-footer">
        <button class="btn btn-secondary btn-sm" onclick="showToast('Contacting host at ${ride.phone}', 'info')">Call Host</button>
        ${ride.seats > 0 ? `
          <button class="btn btn-primary btn-sm" onclick="joinCarpoolRide('${ride.id}')">Join Ride</button>
        ` : `
          <button class="btn btn-secondary btn-sm" disabled>Full</button>
        `}
      </div>
    </div>
  `).join('');

  lucide.createIcons();
}

function joinCarpoolRide(rideId) {
  const ride = db.mobility.carpool.find(c => c.id === rideId);
  if (!ride) return;

  if (ride.seats > 0) {
    ride.seats--;
    ride.members.push(currentSession.name);
    commitState();
    showToast("Successfully joined carpool ride!", "success");
    renderCarpoolRides();
  }
}

function createNewCarpoolPrompt() {
  const route = prompt("Enter Route (e.g. Block B → Whitefield Metro):");
  if (!route) return;
  const time = prompt("Enter Time (e.g. 09:30 AM):", "09:30 AM");
  if (!time) return;
  const seats = parseInt(prompt("Seats Available:", "3")) || 3;

  const newRide = {
    id: "CP-" + Math.floor(100 + Math.random() * 900),
    host: currentSession.name,
    route: route,
    time: time,
    seats: seats,
    members: [],
    days: "Mon-Fri",
    phone: currentSession.phone
  };

  db.mobility.carpool.unshift(newRide);
  commitState();
  showToast("Ride offered successfully!", "success");
  renderCarpoolRides();
}


// --------------------------------------------------
// E. FACILITIES RESERVATIONS
// --------------------------------------------------
let activeBookingFacility = null;

function openFacilityBookingModal(facId) {
  const fac = db.facilities.find(f => f.id === facId);
  if (!fac) return;

  activeBookingFacility = fac;
  document.getElementById("facility-booking-title").innerText = fac.name;

  const slotsContainer = document.getElementById("facility-slots-container");
  slotsContainer.innerHTML = "";

  for (const [time, occupant] of Object.entries(fac.slots)) {
    const isAvail = occupant === "Available";
    const btn = document.createElement("div");
    btn.className = `slot-pill ${isAvail ? 'available' : 'booked'}`;
    btn.innerText = `${time} ${isAvail ? '(Available)' : '(Reserved)'}`;
    
    if (isAvail) {
      btn.onclick = () => {
        const pills = slotsContainer.querySelectorAll(".slot-pill");
        pills.forEach(p => p.classList.remove("selected"));
        btn.classList.add("selected");
        selectedBookingSlotTime = time;
      };
    }
    slotsContainer.appendChild(btn);
  }

  document.getElementById("btn-confirm-facility-booking").onclick = executeFacilityBooking;
  openModal("modal-facility-booking");
}

let selectedBookingSlotTime = null;

function executeFacilityBooking() {
  if (!activeBookingFacility || !selectedBookingSlotTime) {
    showToast("Please select an available time slot", "danger");
    return;
  }

  activeBookingFacility.slots[selectedBookingSlotTime] = `${currentSession.name} (${currentSession.flat})`;

  const txId = "TX-" + Math.floor(400 + Math.random() * 900);
  const newTx = {
    id: txId,
    type: `Facility reservation (${activeBookingFacility.name})`,
    amount: 150,
    category: "Facility Dues",
    date: "Today",
    status: "Paid",
    paymentMethod: "UPI Wallet"
  };
  db.transactions.unshift(newTx);

  commitState();
  closeModal("modal-facility-booking");
  showToast(`Reserved ${activeBookingFacility.name} successfully at ${selectedBookingSlotTime}`, "success");
  
  navigateToPanel("home");
}


// --------------------------------------------------
// F. VISITORS & PRE-APPROVED DELIVERIES
// --------------------------------------------------
function renderVisitorsList() {
  const container = document.getElementById("visitors-table-body");
  if (!container) return;

  const list = db.visitors.filter(v => v.flat === currentSession.flat || v.resident === currentSession.name);

  if (list.length === 0) {
    container.innerHTML = `
      <tr>
        <td colspan="6" style="text-align:center; padding:32px 0; color:var(--text-light);">
          No visitors logged for your flat block today.
        </td>
      </tr>
    `;
    return;
  }

  container.innerHTML = list.map(v => {
    let badgeClass = "badge-warning";
    if (v.status === "Inside") badgeClass = "badge-teal";
    if (v.status === "Exited") badgeClass = "badge-danger";
    if (v.status === "Pre-Approved") badgeClass = "badge-info";

    return `
      <tr>
        <td>
          <div class="visitor-profile-cell">
            <div class="visitor-avatar-initial" style="background:var(--bg-app);">${v.name[0]}</div>
            <div>
              <div class="font-semibold">${v.name}</div>
              <div class="text-muted" style="font-size:11px;">${v.contact || 'No phone'}</div>
            </div>
          </div>
        </td>
        <td>
          <span class="badge ${v.type === 'Guest' ? 'badge-teal' : v.type === 'Emergency' ? 'badge-danger' : 'badge-info'}">${v.type}</span>
        </td>
        <td><code>${v.code}</code></td>
        <td>${v.expectedTime}</td>
        <td>
          <span class="badge ${badgeClass}">${v.status}</span>
        </td>
        <td>
          ${v.status === 'Pre-Approved' ? `
            <span class="text-success" style="font-size:11px; font-weight:600;"><i data-lucide="check" style="width:12px; display:inline-block;"></i> Pre-Cleared</span>
          ` : `
            <button class="btn btn-secondary btn-sm" onclick="viewDigitalVisitorPass('${v.id}')"><i data-lucide="qr-code" style="width:14px;"></i> View Pass</button>
          `}
        </td>
      </tr>
    `;
  }).join('');

  lucide.createIcons();
}

function submitVisitorInvitation() {
  const name = document.getElementById("visitor-form-name").value;
  const phone = document.getElementById("visitor-form-phone").value;
  const purpose = document.getElementById("visitor-form-purpose").value;
  const date = document.getElementById("visitor-form-date").value;
  const time = document.getElementById("visitor-form-time").value;

  if (!name || !phone) {
    showToast("Please fill in visitor name and contact info", "danger");
    return;
  }

  const timeFormatted = `${date} at ${time}`;
  const code = "VIS-" + Math.floor(100 + Math.random() * 900);

  const newVisitor = {
    id: "VIS-" + Math.floor(1000 + Math.random() * 9000),
    name: name,
    type: purpose,
    expectedTime: timeFormatted,
    code: code,
    flat: currentSession.flat,
    resident: currentSession.name,
    status: "Expected",
    contact: phone
  };

  db.visitors.unshift(newVisitor);
  commitState();
  closeModal("modal-invite-visitor");
  
  viewDigitalVisitorPass(newVisitor.id);
  renderVisitorsList();
  showToast(`Visitor pass code generated: ${code}`, "success");
}

function openPreApproveDeliveryModal() {
  openModal("modal-preapprove-delivery");
}

function submitPreApprovedDelivery() {
  const company = document.getElementById("preapprove-company").value;
  const windowHour = document.getElementById("preapprove-window").value;

  const code = "PRE-" + Math.floor(100 + Math.random() * 900);
  const expiryText = windowHour === "1" ? "Next 1 Hour" : windowHour === "4" ? "Next 4 Hours" : "Next 24 Hours";

  const newVisitor = {
    id: "VIS-" + Math.floor(1000 + Math.random() * 9000),
    name: `${company} Delivery Agent`,
    type: "Delivery",
    expectedTime: `Pre-Approved (Expires: ${expiryText})`,
    code: code,
    flat: currentSession.flat,
    resident: currentSession.name,
    status: "Pre-Approved",
    contact: "Auto-Cleared Gate Pass"
  };

  db.visitors.unshift(newVisitor);
  commitState();
  closeModal("modal-preapprove-delivery");
  
  renderVisitorsList();
  showToast(`Pre-approval logged. Clearance code: ${code}`, "success");
}

function viewDigitalVisitorPass(visitorId) {
  const v = db.visitors.find(item => item.id === visitorId);
  if (!v) return;

  const container = document.getElementById("visitor-pass-card-body");
  
  container.innerHTML = `
    <div class="qr-code-placeholder">
      <svg class="qr-svg" viewBox="0 0 100 100">
        <rect x="5" y="5" width="20" height="20" fill="var(--primary)" />
        <rect x="8" y="8" width="14" height="14" fill="#FFF" />
        <rect x="11" y="11" width="8" height="8" fill="var(--primary)" />
        
        <rect x="75" y="5" width="20" height="20" fill="var(--primary)" />
        <rect x="78" y="8" width="14" height="14" fill="#FFF" />
        <rect x="81" y="11" width="8" height="8" fill="var(--primary)" />

        <rect x="5" y="75" width="20" height="20" fill="var(--primary)" />
        <rect x="8" y="78" width="14" height="14" fill="#FFF" />
        <rect x="11" y="81" width="8" height="8" fill="var(--primary)" />

        <rect x="35" y="35" width="30" height="30" fill="var(--primary)" />
        <rect x="40" y="40" width="20" height="20" fill="#FFF" />
        <rect x="45" y="45" width="10" height="10" fill="var(--accent)" />
        
        <rect x="30" y="10" width="5" height="15" fill="var(--primary)" />
        <rect x="50" y="5" width="15" height="5" fill="var(--primary)" />
        <rect x="10" y="35" width="10" height="5" fill="var(--primary)" />
        <rect x="75" y="45" width="15" height="10" fill="var(--primary)" />
        <rect x="45" y="75" width="25" height="5" fill="var(--primary)" />
      </svg>
    </div>
    
    <div style="font-size: 11px; text-transform: uppercase; font-weight: 700; color: var(--accent);">Passcode: ${v.code}</div>

    <div class="visitor-pass-card">
      <div class="visitor-pass-row">
        <span class="visitor-pass-lbl">Guest Name:</span>
        <span class="visitor-pass-val">${v.name}</span>
      </div>
      <div class="visitor-pass-row">
        <span class="visitor-pass-lbl">Target:</span>
        <span class="visitor-pass-val">${v.flat}</span>
      </div>
      <div class="visitor-pass-row">
        <span class="visitor-pass-lbl">Schedule:</span>
        <span class="visitor-pass-val">${v.expectedTime}</span>
      </div>
      <div class="visitor-pass-row">
        <span class="visitor-pass-lbl">Verification:</span>
        <span class="visitor-pass-val" style="color:var(--warning);">${v.status}</span>
      </div>
    </div>
    <p class="text-muted" style="font-size:10px;">Provide this QR code image or code to your visitor. Security staff will verify this upon entrance.</p>
  `;

  openModal("modal-visitor-pass");
}


// --------------------------------------------------
// G. MAINTENANCE SLA REQUESTS
// --------------------------------------------------
let activeRequestTab = "All";

function switchRequestTab(tabName, element) {
  activeRequestTab = tabName;
  const btns = element.parentNode.querySelectorAll(".tab-btn");
  btns.forEach(b => b.classList.remove("active"));
  element.classList.add("active");

  renderRequestsList(tabName);
}

function renderRequestsList(tabFilter) {
  const container = document.getElementById("requests-cards-container");
  if (!container) return;

  let list = db.requests.filter(r => r.flat === currentSession.flat);

  if (tabFilter !== "All") {
    list = list.filter(r => r.status === tabFilter);
  }

  if (list.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon"><i data-lucide="wrench"></i></div>
        <h3>No maintenance tickets</h3>
        <p>Log a plumbing, electrical, or utility concern for your flat.</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  container.innerHTML = list.map(req => {
    const statusWidth = req.status === "Submitted" ? "20%" : req.status === "Assigned" ? "50%" : req.status === "In Progress" ? "75%" : "100%";
    const badgeClass = req.status === "Resolved" ? "badge-teal" : req.status === "In Progress" ? "badge-info" : req.status === "Assigned" ? "badge-warning" : "badge-danger";

    return `
      <div class="card request-ticket-card">
        <div class="ticket-header">
          <span class="ticket-id">Ticket: <b>${req.id}</b></span>
          <span class="badge ${badgeClass}">${req.status}</span>
        </div>
        
        <div>
          <h3 class="ticket-title">${req.category} Repair</h3>
          <p class="ticket-body" style="margin-top:6px;">${req.desc}</p>
        </div>

        <div class="ticket-progress">
          <div style="display:flex; justify-content:space-between; font-size:10px; font-weight:600; color:var(--text-muted);">
            <span>Submitted</span>
            <span>In Dispatch</span>
            <span>Work Ongoing</span>
            <span>Resolved</span>
          </div>
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" style="width: ${statusWidth};"></div>
          </div>
        </div>

        <div class="ticket-footer">
          <div class="ticket-assignee">
            <div class="visitor-avatar-initial" style="width:20px; height:20px; font-size:9px; background:var(--bg-app);">${req.assignee[0]}</div>
            <span>Provider: <b>${req.assignee}</b></span>
          </div>
          <span class="text-muted">ETA: <b>${req.eta}</b></span>
        </div>
      </div>
    `;
  }).join('');

  lucide.createIcons();
}

function submitRequestTicket() {
  const category = document.getElementById("request-form-category").value;
  const desc = document.getElementById("request-form-desc").value;

  if (!desc.trim()) {
    showToast("Please provide description details", "danger");
    return;
  }

  const ticketId = "REQ-" + Math.floor(2000 + Math.random() * 9000);
  const newReq = {
    id: ticketId,
    ticketId: ticketId,
    category: category,
    desc: desc,
    status: "Submitted",
    flat: currentSession.flat,
    resident: currentSession.name,
    assignee: "OneNivasa Dispatch Desk",
    eta: "Pending review"
  };

  db.requests.unshift(newReq);
  commitState();
  closeModal("modal-create-request");
  showToast(`Maintenance ticket logged: ${ticketId}`, "success");
  
  renderRequestsList(activeRequestTab);
}


// --------------------------------------------------
// H. SOCIETY BILLING & CHECKOUT
// --------------------------------------------------
let activePaymentCheckoutAmount = 0;

function openPaymentCheckout(amount) {
  activePaymentCheckoutAmount = amount;
  document.getElementById("checkout-amount-lbl").innerText = `₹${amount.toLocaleString('en-IN')}`;
  document.getElementById("checkout-ref-lbl").innerText = `Ref: ON-MAINT-2026-POOL-` + Math.floor(100 + Math.random() * 900);
  openModal("modal-payment-checkout");
}

function selectPaymentOption(method) {
  selectedPaymentMethod = method;
  const options = document.querySelectorAll(".payment-method-option");
  options.forEach(opt => opt.classList.remove("selected"));
  event.currentTarget.classList.add("selected");
}

function executeMockPayment() {
  db.transactions.forEach(tx => {
    if (tx.status === "Pending") {
      tx.status = "Paid";
      tx.paymentMethod = selectedPaymentMethod === "upi" ? "UPI Wallet" : selectedPaymentMethod === "card" ? "Credit Card" : "Net Banking";
    }
  });

  commitState();
  closeModal("modal-payment-checkout");
  showToast("Payment Processed Successfully!", "success");
  navigateToPanel("payments");
}


// --------------------------------------------------
// I. ONENIVASA AI BOT
// --------------------------------------------------
function handleAIChatKey(e) {
  if (e.key === "Enter") {
    submitAIChat();
  }
}

function sendAIChatQuery(queryText) {
  const input = document.getElementById("ai-chat-box");
  if (input) {
    input.value = queryText;
    submitAIChat();
  }
}

function submitAIChat() {
  const input = document.getElementById("ai-chat-box");
  const query = input.value.trim();
  if (!query) return;

  appendChatBubble(query, "user");
  input.value = "";

  const chatBody = document.getElementById("ai-chat-scroller");
  setTimeout(() => {
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 50);

  setTimeout(() => {
    const response = processSimulatedAIResponse(query);
    appendChatBubble(response, "ai");
    chatBody.scrollTop = chatBody.scrollHeight;
    lucide.createIcons();
  }, 600);
}

function appendChatBubble(text, role) {
  const container = document.getElementById("ai-messages-list");
  if (!container) return;

  const div = document.createElement("div");
  div.className = `chat-bubble chat-bubble-${role}`;
  div.innerHTML = text;

  container.appendChild(div);
}

function processSimulatedAIResponse(query) {
  const q = query.toLowerCase();
  
  if (q.includes("delivery") || q.includes("pre-approve") || q.includes("amazon") || q.includes("swiggy")) {
    return `
      I can help you log a pre-approved delivery clearance instantly.
      <div class="ai-shortcuts-container">
        <button class="ai-shortcut-btn" onclick="openModal('modal-preapprove-delivery')">Open Pre-Approval Form</button>
      </div>
    `;
  }
  
  if (q.includes("squash") || q.includes("court") || q.includes("badminton") || q.includes("pool")) {
    return `
      Badminton Court 01 is open today! Here are the next available slots:
      <ul>
        <li>• 06:00 PM - Available</li>
        <li>• 07:00 PM - Available</li>
      </ul>
      <div class="ai-shortcuts-container">
        <button class="ai-shortcut-btn" onclick="openFacilityBookingModal('FAC-01')">Reserve Court 1</button>
      </div>
    `;
  }
  
  if (q.includes("leak") || q.includes("plumber") || q.includes("water") || q.includes("repair") || q.includes("issue")) {
    return `
      I can file a washing leakage or faucet repair ticket with the maintenance desk:
      <div class="ai-shortcuts-container">
        <button class="ai-shortcut-btn" onclick="openModal('modal-create-request')">File Water SLA Ticket</button>
      </div>
    `;
  }

  if (q.includes("due") || q.includes("bill") || q.includes("maintenance") || q.includes("outstanding")) {
    const pending = db.transactions.filter(t => t.status === "Pending").reduce((sum, item) => sum + item.amount, 0);
    return `
      Your outstanding society bill is <b>₹${pending.toLocaleString('en-IN')}</b> (Maintenance charges).
      <div class="ai-shortcuts-container">
        <button class="ai-shortcut-btn" onclick="openPaymentCheckout(${pending})">Pay Outstanding Bill</button>
      </div>
    `;
  }

  return `
    I'm not quite sure. You can ask me to:
    <ul>
      <li>• "Pre-approve delivery agent"</li>
      <li>• "Check badminton court availability"</li>
      <li>• "Show society maintenance due balance"</li>
      <li>• "Lodge tap leakage ticket"</li>
    </ul>
  `;
}


// ==================================================
// 7. ADMIN DASHBOARD OPERATIONS
// ==================================================

function adminQuickResolveRequest(ticketId) {
  const req = db.requests.find(item => item.id === ticketId);
  if (!req) return;

  req.status = "Resolved";
  req.eta = "Completed (Admin Force Resolve)";
  commitState();
  showToast(`SLA Ticket ${ticketId} resolved`, "success");
  
  renderPanelContent(activeAdminSection);
}

function adminReassignProvider(ticketId, providerVal) {
  const req = db.requests.find(item => item.id === ticketId);
  if (!req) return;

  req.assignee = providerVal;
  req.status = "In Progress";
  req.eta = "Today, 6:00 PM";
  
  commitState();
  showToast(`Reassigned ticket ${ticketId} to ${providerVal}`, "info");
}

function adminRemoveResident(id) {
  db.residents = db.residents.filter(r => r.id !== id);
  commitState();
  showToast("Flat record de-registered", "info");
  renderPanelContent(activeAdminSection);
}

function adminAddNewResidentPrompt() {
  const name = prompt("Enter Resident Name:");
  if (!name) return;
  const flat = prompt("Enter flat (e.g. Block C-404):", "Block C-404");
  if (!flat) return;

  const newRes = {
    id: "R-" + Math.floor(100 + Math.random() * 900),
    name: name,
    flat: flat,
    email: `${name.toLowerCase().replace(' ', '')}@onenivasa.in`,
    phone: "+91 98765 " + Math.floor(10000 + Math.random() * 90000),
    vehicle: "-"
  };

  db.residents.push(newRes);
  commitState();
  showToast("Flat record enrolled successfully", "success");
  renderPanelContent(activeAdminSection);
}

function adminAddNewVendorPrompt() {
  const name = prompt("Enter Vendor Company:");
  if (!name) return;
  const cat = prompt("Specialty category:", "Carpenter");
  if (!cat) return;

  const newProv = {
    id: "PROV-" + cat.substring(0, 4).toUpperCase() + "-" + Math.floor(10 + Math.random() * 90),
    name: name,
    phone: "+91 99990 " + Math.floor(10000 + Math.random() * 90000),
    rating: 4.8,
    category: cat,
    jobsCompleted: 0,
    earnings: 0
  };

  db.providers.push(newProv);
  commitState();
  showToast("Vendor partner integrated", "success");
  renderPanelContent(activeAdminSection);
}

function adminTriggerMaintenanceInvoiceRun() {
  db.residents.forEach(res => {
    const txId = "TX-" + Math.floor(400 + Math.random() * 900);
    const newTx = {
      id: txId,
      type: "Monthly Maintenance Run",
      amount: 4500,
      category: "Society Dues",
      date: "Today",
      status: "Pending",
      paymentMethod: "-"
    };
    db.transactions.unshift(newTx);
  });

  commitState();
  showToast("Bulk billing invoices generated!", "success");
  renderPanelContent(activeAdminSection);
}

function adminQuickMarkInvoicePaid(id) {
  const tx = db.transactions.find(t => t.id === id);
  if (!tx) return;

  tx.status = "Paid";
  tx.paymentMethod = "Cash Register (Admin)";
  commitState();
  showToast(`Transaction ${id} recorded as cash payment`, "success");
  renderPanelContent(activeAdminSection);
}

function submitAdminAnnouncement() {
  const title = document.getElementById("ann-form-title").value;
  const type = document.getElementById("ann-form-type").value;
  const date = document.getElementById("ann-form-date").value;
  const body = document.getElementById("ann-form-body").value;

  if (!title || !body) {
    showToast("Please fill in circular fields", "danger");
    return;
  }

  const newAnn = {
    id: "ANN-" + Math.floor(100 + Math.random() * 900),
    type: type,
    title: title,
    body: body,
    date: date,
    read: false
  };

  db.announcements.unshift(newAnn);

  const noti = {
    id: "NOT-" + Math.floor(100 + Math.random() * 900),
    text: `New official circular notice: ${title}`,
    time: "Just now",
    type: "announcement",
    unread: true
  };
  db.notifications.unshift(noti);

  commitState();
  showToast("Circular Notice broadcast successfully!", "success");
  renderPanelContent(activeAdminSection);
}


// ==================================================
// 8. SECURITY GUARD PROCEDURES
// ==================================================

function adminTriggerSecurityQuickDelivery() {
  const vendorName = prompt("Enter Delivery Company (e.g. Swiggy, Amazon, Blinkit):", "Swiggy");
  if (!vendorName) return;
  const flat = prompt("Target Flat (e.g. Block B-204):", "Block B-204");
  if (!flat) return;

  const newVis = {
    id: "VIS-" + Math.floor(1000 + Math.random() * 9000),
    name: `${vendorName} Delivery Agent`,
    type: "Delivery",
    expectedTime: "Today, Gate entry registered",
    code: "DEL-" + Math.floor(100 + Math.random() * 900),
    flat: flat,
    resident: "Quick Delivery Gate Registry",
    status: "Inside",
    contact: "+91 99900 XXXXX"
  };

  db.visitors.unshift(newVis);
  
  const targetRes = db.residents.find(r => r.flat === flat);
  if (targetRes) {
    const noti = {
      id: "NOT-" + Math.floor(100 + Math.random() * 900),
      text: `${vendorName} delivery runner checked in at main gate.`,
      time: "Just now",
      type: "security",
      unread: true
    };
    db.notifications.unshift(noti);
  }

  commitState();
  showToast("Delivery Check-in Registered", "success");
  renderPanelContent("security-dashboard");
}

let activeSecurityScannerTargetCode = null;

function verifyScannedVisitorCode() {
  const code = document.getElementById("security-scan-code-input").value.trim().toUpperCase();
  if (!code) {
    showToast("Please enter verification passcode", "danger");
    return;
  }

  const visitor = db.visitors.find(v => v.code.toUpperCase() === code && (v.status === "Expected" || v.status === "Pre-Approved"));
  if (!visitor) {
    showToast("Invalid code or visitor already inside", "danger");
    return;
  }

  activeSecurityScannerTargetCode = visitor;
  closeModal("modal-security-scanner");

  const body = document.getElementById("visitor-gate-details-body");
  body.innerHTML = `
    <div style="display:flex; flex-direction:column; gap:12px;">
      <div style="background:var(--bg-app); padding:16px; border-radius:var(--radius-md); text-align:center;">
        <span class="text-muted" style="font-size:11px; text-transform:uppercase; font-weight:600; display:block;">Verification Result</span>
        <h4 style="font-size:1.5rem; font-weight:800; color:var(--accent); margin-top:4px;">VALID PASS</h4>
      </div>
      
      <div style="display:flex; flex-direction:column; gap:8px; font-size:13px;">
        <div style="display:flex; justify-content:space-between;"><span class="text-muted">Visitor Name:</span><span class="font-semibold">${visitor.name}</span></div>
        <div style="display:flex; justify-content:space-between;"><span class="text-muted">Target Flat:</span><span class="font-semibold">${visitor.flat}</span></div>
        <div style="display:flex; justify-content:space-between;"><span class="text-muted">Purpose:</span><span class="badge badge-teal">${visitor.type}</span></div>
        <div style="display:flex; justify-content:space-between;"><span class="text-muted">Invite Resident:</span><span class="font-semibold">${visitor.resident}</span></div>
      </div>
    </div>
  `;

  openModal("modal-visitor-allow-deny");
}

function securityDirectVerify(code) {
  document.getElementById("security-scan-code-input").value = code;
  verifyScannedVisitorCode();
}

function processGateDecision(isAllowed) {
  if (!activeSecurityScannerTargetCode) return;

  if (isAllowed) {
    activeSecurityScannerTargetCode.status = "Inside";
    activeSecurityScannerTargetCode.expectedTime = "Entry registered";
    
    const noti = {
      id: "NOT-" + Math.floor(1000 + Math.random() * 9000),
      text: `${activeSecurityScannerTargetCode.name} has entered through Gate 1 checkpoint.`,
      time: "Just now",
      type: "security",
      unread: true
    };
    db.notifications.unshift(noti);
    
    showToast(`Visitor cleared. Notification sent to flat ${activeSecurityScannerTargetCode.flat}`, "success");
  } else {
    activeSecurityScannerTargetCode.status = "Rejected";
    showToast("Visitor entry request rejected", "warning");
  }

  commitState();
  closeModal("modal-visitor-allow-deny");
  renderPanelContent("security-dashboard");
}

function securityDirectCheckOut(id) {
  const visitor = db.visitors.find(v => v.id === id);
  if (!visitor) return;

  visitor.status = "Exited";
  visitor.expectedTime = "Exited gate checkpoint";
  
  commitState();
  showToast(`${visitor.name} checked out`, "info");
  renderPanelContent("security-dashboard");
}


// ==================================================
// 9. SERVICE PROVIDER UPDATES
// ==================================================

function providerUpdateJobStatus(jobId, newStatus) {
  const job = db.requests.find(item => item.id === jobId);
  if (!job) return;

  job.status = newStatus;
  
  if (newStatus === "Resolved") {
    job.eta = "Completed Today";
  } else if (newStatus === "In Progress") {
    job.eta = "Work in progress";
  }

  const noti = {
    id: "NOT-" + Math.floor(1000 + Math.random() * 9000),
    text: `Job status update on ticket ${jobId}: Marked as ${newStatus}`,
    time: "Just now",
    type: "booking",
    unread: true
  };
  db.notifications.unshift(noti);

  commitState();
  showToast(`Work order status updated to ${newStatus}`, "success");
  renderPanelContent("provider-dashboard");
}


// ==================================================
// 10. GLOBAL EMERGENCY ALERTS SYSTEM
// ==================================================
let emergencyPanicCountdownTimerInstance = null;
let emergencyPanicCountdownVal = 5;
let selectedPanicType = 'medical';

function openEmergencyModal() {
  document.getElementById("emergency-initial-view").style.display = "block";
  document.getElementById("emergency-countdown-view").style.display = "none";
  document.getElementById("emergency-broadcast-view").style.display = "none";
  document.getElementById("emergency-overlay").classList.add("active");
  
  selectEmergencyType('medical');
}

function closeEmergencyModal() {
  document.getElementById("emergency-overlay").classList.remove("active");
  if (emergencyPanicCountdownTimerInstance) {
    clearInterval(emergencyPanicCountdownTimerInstance);
  }
}

function selectEmergencyType(type) {
  selectedPanicType = type;
  const btns = document.querySelectorAll(".emergency-option-btn");
  btns.forEach(b => {
    b.classList.remove("selected");
    if (b.innerText.toLowerCase().includes(type.substring(0, 4))) {
      b.classList.add("selected");
    }
  });
}

function triggerPanicAlert() {
  document.getElementById("emergency-initial-view").style.display = "none";
  document.getElementById("emergency-countdown-view").style.display = "block";
  
  emergencyPanicCountdownVal = 5;
  document.getElementById("panic-countdown-timer").innerText = emergencyPanicCountdownVal;
  
  emergencyPanicCountdownTimerInstance = setInterval(() => {
    emergencyPanicCountdownVal--;
    document.getElementById("panic-countdown-timer").innerText = emergencyPanicCountdownVal;
    
    if (emergencyPanicCountdownVal <= 0) {
      clearInterval(emergencyPanicCountdownTimerInstance);
      broadcastPanicDispatch();
    }
  }, 1000);
}

function cancelPanicAlert() {
  clearInterval(emergencyPanicCountdownTimerInstance);
  closeEmergencyModal();
  showToast("Panic alarm cancelled. Security unit notified of abort.", "warning");
}

function broadcastPanicDispatch() {
  document.getElementById("emergency-countdown-view").style.display = "none";
  document.getElementById("emergency-broadcast-view").style.display = "block";
  document.getElementById("dispatched-type-lbl").innerText = selectedPanicType;

  const code = "EMERG-" + Math.floor(10 + Math.random() * 90);
  const newAlert = {
    id: "VIS-" + Math.floor(1000 + Math.random() * 9000),
    name: `🚨 EMERGENCY UNIT (${selectedPanicType.toUpperCase()})`,
    type: "Emergency",
    expectedTime: "En Route to Block B-204",
    code: code,
    flat: "Block B-204",
    resident: "Rahul Sharma",
    status: "Expected",
    contact: "Emergency Unit"
  };
  
  db.visitors.unshift(newAlert);
  commitState();
  showToast("Security dispatch broadcast completed!", "danger");
}

function acknowledgeEmergencyFromSecurity() {
  document.getElementById("security-alert-banner").style.display = "none";
  showToast("Emergency dispatch responders sent to Block B-204!", "success");
}


// ==================================================
// 11. GLOBAL SYSTEM SEARCH ENGINE
// ==================================================

function showSearchResults() {
  const panel = document.getElementById("search-results-panel");
  panel.classList.add("active");
  const query = document.getElementById("global-search").value;
  handleGlobalSearch(query);
}

function hideSearchResultsDelayed() {
  setTimeout(() => {
    document.getElementById("search-results-panel").classList.remove("active");
  }, 200);
}

function handleGlobalSearch(query) {
  const panel = document.getElementById("search-results-panel");
  if (!panel) return;

  const q = query.toLowerCase().trim();

  if (!q) {
    panel.innerHTML = `
      <div class="search-results-section">
        <div class="search-section-title">Popular Suggestions</div>
        <div class="search-result-item" onclick="triggerGlobalSearchAction('services')">
          <div class="search-result-info"><span class="search-result-title">⚡ Book an electrician</span><span class="search-result-desc">Services Directory</span></div>
        </div>
        <div class="search-result-item" onclick="triggerGlobalSearchAction('facilities')">
          <div class="search-result-info"><span class="search-result-title">🏸 Badminton Court Availability</span><span class="search-result-desc">Facilities Reservations</span></div>
        </div>
        <div class="search-result-item" onclick="triggerGlobalSearchAction('marketplace')">
          <div class="search-result-info"><span class="search-result-title">🛍️ Marketplace bazaar listings</span><span class="search-result-desc">Discover Marketplace</span></div>
        </div>
      </div>
    `;
    return;
  }

  const matchesServices = db.services.filter(s => s.name.toLowerCase().includes(q) || s.category.toLowerCase().includes(q));
  const matchesMarket = db.marketplace.filter(m => m.title.toLowerCase().includes(q) || m.category.toLowerCase().includes(q));
  const matchesUpdates = db.announcements.filter(a => a.title.toLowerCase().includes(q) || a.body.toLowerCase().includes(q));

  let html = "";

  if (matchesServices.length > 0) {
    html += `<div class="search-results-section">`;
    html += `<div class="search-section-title">Services</div>`;
    matchesServices.forEach(s => {
      html += `
        <div class="search-result-item" onclick="triggerGlobalSearchAction('services')">
          <div class="search-result-info"><span class="search-result-title">${s.name}</span><span class="search-result-desc">Starting at ₹${s.price}</span></div>
        </div>
      `;
    });
    html += `</div>`;
  }

  if (matchesMarket.length > 0) {
    html += `<div class="search-results-section">`;
    html += `<div class="search-section-title">Bazaar Listings</div>`;
    matchesMarket.forEach(m => {
      html += `
        <div class="search-result-item" onclick="triggerGlobalSearchAction('marketplace')">
          <div class="search-result-info"><span class="search-result-title">${m.title}</span><span class="search-result-desc">₹${m.price} • ${m.seller}</span></div>
        </div>
      `;
    });
    html += `</div>`;
  }

  if (matchesUpdates.length > 0) {
    html += `<div class="search-results-section">`;
    html += `<div class="search-section-title">Circular Notice</div>`;
    matchesUpdates.forEach(u => {
      html += `
        <div class="search-result-item" onclick="triggerGlobalSearchAction('updates')">
          <div class="search-result-info"><span class="search-result-title">${u.title}</span><span class="search-result-desc">${u.date}</span></div>
        </div>
      `;
    });
    html += `</div>`;
  }

  if (!html) {
    panel.innerHTML = `<div style="padding:16px; font-size:12px; color:var(--text-light); text-align:center;">No results matched "${query}"</div>`;
  } else {
    panel.innerHTML = html;
  }
}

function triggerGlobalSearchAction(tabKey) {
  document.getElementById("global-search").value = "";
  navigateToPanel(tabKey);
}


// ==================================================
// 12. TOAST SYSTEM & NOTIFICATION ENGINE
// ==================================================

function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  
  const icons = {
    success: "check-circle-2",
    warning: "alert-triangle",
    danger: "alert-octagon",
    info: "info"
  };
  const colors = {
    success: "var(--success)",
    warning: "var(--warning)",
    danger: "var(--danger)",
    info: "var(--accent)"
  };

  toast.innerHTML = `
    <div class="toast-icon" style="color:${colors[type]};"><i data-lucide="${icons[type] || 'check-circle'}"></i></div>
    <div style="font-size: 0.8125rem; font-weight: 500;">${message}</div>
  `;

  container.appendChild(toast);
  lucide.createIcons();

  setTimeout(() => {
    toast.style.animation = "slideIn 0.2s reverse ease-in";
    setTimeout(() => {
      toast.remove();
    }, 200);
  }, 3500);
}

function toggleNotificationsDropdown() {
  const panel = document.getElementById("notifications-panel");
  const profilePanel = document.getElementById("profile-dropdown-panel");
  profilePanel.classList.remove("active");
  panel.classList.toggle("active");
  
  renderNotificationsList();
}

function toggleProfileDropdown() {
  const panel = document.getElementById("profile-dropdown-panel");
  const notiPanel = document.getElementById("notifications-panel");
  notiPanel.classList.remove("active");
  panel.classList.toggle("active");
}

function closeAllDropdowns() {
  document.getElementById("notifications-panel")?.classList.remove("active");
  document.getElementById("profile-dropdown-panel")?.classList.remove("active");
}

function renderNotificationsList() {
  const container = document.getElementById("notifications-list-container");
  if (!container) return;

  if (db.notifications.length === 0) {
    container.innerHTML = `<div style="padding:24px; text-align:center; font-size:12px; color:var(--text-light);">No notifications</div>`;
    return;
  }

  const iconsMap = {
    security: "shield-alert",
    announcement: "megaphone",
    booking: "calendar"
  };

  container.innerHTML = db.notifications.map(n => `
    <div class="notification-dropdown-item ${n.unread ? 'unread' : ''}" onclick="markNotiAsRead('${n.id}')">
      <div class="notification-dd-icon"><i data-lucide="${iconsMap[n.type] || 'bell'}" style="width:16px;"></i></div>
      <div class="notification-dd-info">
        <span class="notification-dd-text">${n.text}</span>
        <span class="notification-dd-time">${n.time}</span>
      </div>
    </div>
  `).join('');

  lucide.createIcons();
}

function markNotiAsRead(id) {
  const noti = db.notifications.find(item => item.id === id);
  if (noti) {
    noti.unread = false;
    commitState();
    updateNotificationsCount();
    renderNotificationsList();
  }
}

function markAllNotificationsAsRead() {
  db.notifications.forEach(n => n.unread = false);
  commitState();
  updateNotificationsCount();
  renderNotificationsList();
  showToast("Notifications cleared", "info");
}

function updateNotificationsCount() {
  const unreadCount = db.notifications.filter(n => n.unread).length;
  const indicator = document.getElementById("noti-indicator");
  if (indicator) {
    indicator.style.display = unreadCount > 0 ? "block" : "none";
  }
}


// ==================================================
// 13. DIALOG / MODALS HELPER
// ==================================================

function openModal(modalId) {
  const m = document.getElementById(modalId);
  if (m) {
    m.classList.add("active");
    lucide.createIcons();
  }
}

function closeModal(modalId) {
  const m = document.getElementById(modalId);
  if (m) {
    m.classList.remove("active");
  }
}


// ==================================================
// 14. PROFILE UPDATOR UTILITIES
// ==================================================

function updateProfileSettings() {
  const name = document.getElementById("profile-field-name").value;
  const email = document.getElementById("profile-field-email").value;
  const phone = document.getElementById("profile-field-phone").value;
  const vehicle = document.getElementById("profile-field-vehicle").value;

  if (!name) {
    showToast("Name field cannot be left blank", "danger");
    return;
  }

  currentSession.name = name;
  currentSession.email = email;
  currentSession.phone = phone;
  currentSession.vehicles = vehicle;

  const rRecord = db.residents.find(r => r.id === currentSession.id);
  if (rRecord) {
    rRecord.name = name;
    rRecord.email = email;
    rRecord.phone = phone;
    rRecord.vehicle = vehicle;
  }

  commitState();
  showToast("Profile Settings Saved successfully!", "success");
  launchAppDashboard();
}

// ==================================================
// 15. HTML5 HISTORY API SPA ROUTER
// ==================================================

window.addEventListener("DOMContentLoaded", () => {
  const hash = window.location.hash;
  if (!hash || hash === "#home") {
    history.replaceState({ view: "landing" }, "", "#home");
  } else if (hash.startsWith("#login")) {
    const role = hash.split("-")[1] || "resident";
    history.replaceState({ view: "login", role: role }, "", hash);
    showLoginView(role);
  } else {
    history.replaceState({ view: "landing" }, "", "#home");
    exitToLanding();
  }
});

window.addEventListener("popstate", (event) => {
  const state = event.state;
  if (!state) {
    suppressHistoryPush = true;
    exitToLanding();
    suppressHistoryPush = false;
    return;
  }

  suppressHistoryPush = true;
  if (state.view === "landing") {
    exitToLanding();
  } else if (state.view === "login") {
    showLoginView(state.role);
  } else if (state.view === "dashboard") {
    if (!currentSession || currentSession.role !== state.role) {
      demoLogin(state.role);
    }
    navigateToPanel(state.panel);
  }
  suppressHistoryPush = false;
});
