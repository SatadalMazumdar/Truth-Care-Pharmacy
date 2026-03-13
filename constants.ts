import { CostItem, ProposalData } from './types';

export const PROPOSAL_CONTENT: ProposalData = {
  meta: {
    client: "StayWell Pharmacy",
    project: "StayWell Pharmacy - Pharmacy App",
    platform: "React Native (iOS + Android)",
    preparedBy: "Haris&Co.",
    totalDuration: "~18 Weeks",
    totalInvestment: "USD TBD"
  },
  executiveSummary: `This proposal covers the rebuilding of StayWell Pharmacy's e-commerce mobile app and improving the existing platform for the client. The website is already live and hosted on Hostinger, and Shopify is already configured in production.

Our approach: Shopify as the sole backend (inventory, orders, products, payments via Shopify APIs), a custom-built React Native mobile app, and Firebase for real-time features (push notifications, analytics, auth, remote config). The existing website continues as-is with targeted improvements.

Key Principle: The client owns everything - codebase, hosting, credentials, and stores.`,
  objectives: [
    "Rebuild the mobile app with a proper native React Native experience (iOS + Android)",
    "Fix broken features: coupon system, real-time order tracking, refund flow, invoice generation",
    "Surface hidden product ratings & reviews (Yotpo) that are currently collected but inaccessible",
    "Implement multi-location awareness with GPS-based nearest pharmacy detection",
    "Deliver a robust admin panel for orders, inventory, promotions, and analytics",
    "Establish Firebase push notifications with deep linking to products, orders, and promos",
    "Ensure the client owns the full codebase, hosting, and all credentials at handover"
  ],
  phases: [
    {
      id: "phase-1",
      number: 1,
      title: "Discovery & Requirements",
      duration: "2 Weeks",
      activities: [
        "Stakeholder discussions and requirement clarification",
        "Audit of existing Shopify setup, product catalog, and current app pain points",
        "Delivery flow review - your courier partner & Shopify fulfillment integration",
        "Multi-location inventory strategy: GPS radius, warehouse fallback logic",
        "Firebase project setup and architecture planning",
        "Authentication strategy: Email + Mobile OTP flow design"
      ],
      deliverables: [
        "Technical architecture document",
        "Approved feature scope & API surface map",
        "Firebase project scaffolding"
      ]
    },
    {
      id: "phase-2",
      number: 2,
      title: "UI/UX Design",
      duration: "4 Weeks",
      activities: [],
      subSections: [
        {
          title: "Customer App Design",
          items: [
            "Mobile-first Figma design for all customer-facing screens",
            "Product browsing, search, filters, and product detail pages",
            "Cart, checkout (Shopify), and payment flow",
            "Order tracking with real-time map view",
            "User profile: order history, saved addresses, wish lists",
            "Push notification and deep-link screen designs"
          ]
        },
        {
          title: "Admin Panel Design",
          items: [
            "Order management and fulfillment views",
            "Promotion and banner management interface",
            "Push notification manager UI",
            "Analytics and customer data dashboard",
            "Review moderation and role-based access screens"
          ]
        },
        {
          title: "Revisions",
          items: [
            "Up to 2 design revision rounds per screen section",
            "Structural flow changes after approval are treated as additional scope"
          ]
        }
      ]
    },
    {
      id: "phase-3",
      number: 3,
      title: "Mobile App Development",
      duration: "8 Weeks",
      activities: [],
      subSections: [
        {
          title: "Customer App",
          items: [
            "React Native app (iOS + Android) with Shopify Storefront API integration",
            "Firebase Auth: Email + Mobile OTP login, JWT session management",
            "Product browsing, search, cart, and Shopify Checkout API",
            "Real-time order tracking with Google Maps + Firebase Realtime DB",
            "Push notifications via Firebase FCM with deep linking",
            "Ratings & reviews surfaced via Yotpo API",
            "Multi-location detection: GPS-based nearest pharmacy, quick vs. standard delivery",
            "In-app refund initiation flow",
            "Auto-generated invoice on order completion (email + in-app)"
          ]
        },
        {
          title: "Admin Custom App",
          items: [
            "Banner and app configuration manager (web-based custom admin)",
            "Promotion creation/scheduling interface connected to Shopify",
            "Push notification manager via FCM webhooks",
            "Role-based access: Admin, Pharmacy Manager, Delivery Manager"
          ]
        }
      ]
    },
    {
      id: "phase-4",
      number: 4,
      title: "Backend & Integrations",
      duration: "2 Weeks",
      activities: [],
      subSections: [
        {
          title: "Custom Backend (Auth API)",
          items: [
            "OTP delivery service (SMS gateway integration)",
            "Shopify customer creation and ID linking via Admin API",
            "JWT / refresh token issuance and management",
            "Webhook handler: Shopify order events → Firebase FCM triggers"
          ]
        },
        {
          title: "Third-Party Integrations",
          items: [
            "Shopify Storefront API + Admin API",
            "Firebase Auth, Firestore, FCM, and Realtime Database",
            "Google Maps API for delivery radius and tracking",
            "Yotpo API for product reviews",
            "your courier partner integration (standard delivery beyond 20km)"
          ]
        }
      ],
      deliverables: [
        "Working auth API",
        "Shopify ↔ Firebase sync",
        "FCM notification pipeline"
      ]
    },
    {
      id: "phase-5",
      number: 5,
      title: "QA, App Store & Launch",
      duration: "2 Weeks",
      activities: [],
      subSections: [
        {
          title: "Quality Assurance",
          items: [
            "Cross-device testing on iOS and Android",
            "End-to-end checkout flow, payment, and order tracking QA",
            "Push notification deep-link validation",
            "Performance testing: load times, API latency, map rendering"
          ]
        },
        {
          title: "Launch",
          items: [
            "App Store (iOS) and Google Play submission",
            "Firebase Analytics and Grafana dashboard setup",
            "Post-launch monitoring and bug fixes",
            "Handover: codebase, credentials, deployment documentation"
          ]
        }
      ]
    }
  ],
  costs: [
    { name: "UI/UX Design", value: 300000, fill: "#ea580c" },
    { name: "Frontend", value: 625000, fill: "#f97316" },
    { name: "Backend", value: 355000, fill: "#fb923c" }
  ]
};

export const MENU_ITEMS = [
  { id: 'executive-summary', label: 'Overview' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'features', label: 'Features' },
  { id: 'cost-breakdown', label: 'Cost Breakdown' },
];
