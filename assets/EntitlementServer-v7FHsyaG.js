import { j as jsxRuntimeExports, t as Badge, B as Button, n as Card, o as CardHeader, p as CardPreview, u as Server24Regular, r as Shield24Regular, G as Globe24Regular, q as CloudSync24Regular } from "./microsoft-DzWYVBzk.js";
import { r as reactExports } from "./vendor-CNj5xcql.js";
import { L as Link } from "./index--Sgcq5xx.js";
import { g as gsapWithCSS, S as ScrollTrigger } from "./ScrollTrigger-yeD_1Ynm.js";
import "./three-DPyFhS_9.js";
gsapWithCSS.registerPlugin(ScrollTrigger);
const EntitlementServer = () => {
  const heroRef = reactExports.useRef();
  const featuresRef = reactExports.useRef();
  const architectureRef = reactExports.useRef();
  reactExports.useEffect(() => {
    gsapWithCSS.fromTo(
      ".hero-title",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
    ScrollTrigger.create({
      trigger: featuresRef.current,
      start: "top 80%",
      onEnter: () => {
        gsapWithCSS.fromTo(
          ".feature-card",
          { opacity: 0, y: 50, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" }
        );
      }
    });
    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);
  const coreFeatures = [
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Server24Regular, {}),
      title: "Enterprise eSIM Management",
      description: "Complete lifecycle management for eSIM profiles across MPT, MYTEL, ATOM, and U9 networks",
      status: "Production Ready",
      coverage: "95% Myanmar Coverage"
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield24Regular, {}),
      title: "Zero Trust Security",
      description: "Enterprise-grade security with Cloudflare integration and Microsoft Defender protection",
      status: "Fully Secured",
      coverage: "SOC 2 Compliant"
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe24Regular, {}),
      title: "Global Roaming Platform",
      description: "Seamless connectivity across ASEAN and worldwide with real-time network optimization",
      status: "ASEAN Ready",
      coverage: "200+ Countries"
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Server24Regular, {}),
      title: "5G Entertainment Streaming",
      description: "Premium streaming optimization with VoLTE HD voice clarity and network slicing",
      status: "5G Optimized",
      coverage: "Ultra-Low Latency"
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CloudSync24Regular, {}),
      title: "Real-time Device Analytics",
      description: "Live device management with Microsoft Graph integration and Power BI dashboards",
      status: "Live Monitoring",
      coverage: "99.9% Uptime SLA"
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Server24Regular, {}),
      title: "API-First Architecture",
      description: "RESTful API with comprehensive documentation and Microsoft Graph Toolkit integration",
      status: "45 Endpoints",
      coverage: "1000 req/min"
    }
  ];
  const networkOperators = [
    {
      name: "MPT Myanmar",
      logo: "🇲🇲",
      coverage: "95%",
      technology: "4G/5G",
      subscribers: "20M+",
      status: "Operational",
      color: "#FF6B35"
    },
    {
      name: "MYTEL",
      logo: "📱",
      coverage: "90%",
      technology: "4G/5G",
      subscribers: "15M+",
      status: "Operational",
      color: "#4ECDC4"
    },
    {
      name: "ATOM",
      logo: "⚛️",
      coverage: "85%",
      technology: "4G/NB-IoT",
      subscribers: "8M+",
      status: "Operational",
      color: "#45B7D1"
    },
    {
      name: "U9 Network",
      logo: "🔗",
      coverage: "80%",
      technology: "4G/LTE-M",
      subscribers: "5M+",
      status: "Operational",
      color: "#96CEB4"
    }
  ];
  const architectureLayers = [
    {
      layer: "Presentation Layer",
      components: ["React 18 + Vite", "Microsoft Graph Toolkit", "Fluent UI Components", "iOS 26 Design"],
      description: "Premium user interface with glassmorphism and 3D animations"
    },
    {
      layer: "API Gateway Layer",
      components: ["Azure API Management", "OAuth 2.0 + Entra ID", "Rate Limiting", "Request Validation"],
      description: "Enterprise API gateway with Microsoft security integration"
    },
    {
      layer: "Business Logic Layer",
      components: ["Profile Lifecycle", "Network Orchestration", "Real-time Analytics", "AI Optimization"],
      description: "Core eSIM management and entertainment server logic"
    },
    {
      layer: "Integration Layer",
      components: ["SM-DP+ Connectors", "Operator APIs", "Cloudflare Zero Trust", "Microsoft Graph"],
      description: "Secure integration with telecom operators and Microsoft services"
    },
    {
      layer: "Data Layer",
      components: ["Azure SQL Hyperscale", "Cosmos DB", "Key Vault", "Application Insights"],
      description: "Scalable data storage with enterprise security and monitoring"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "entitlement-server-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "hero-section parallax-section", ref: heroRef, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-content", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { appearance: "filled", color: "brand", size: "large", children: "Enterprise eSIM Platform" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "hero-title", children: "NexoraSIM Entitlement Server" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "hero-subtitle", children: "Enterprise-grade eSIM Profile Management platform powering premium entertainment streaming across Myanmar's leading networks with Microsoft-only architecture" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-stats", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat-item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-number", children: "50M+" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-label", children: "Users Ready" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat-item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-number", children: "95%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-label", children: "Myanmar Coverage" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat-item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-number", children: "45" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-label", children: "API Endpoints" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat-item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-number", children: "99.9%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-label", children: "Uptime SLA" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { appearance: "primary", size: "large", as: Link, to: "/api", children: "Explore API" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { appearance: "outline", size: "large", as: Link, to: "/architecture", children: "View Architecture" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "features-section parallax-section", ref: featuresRef, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section-content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-title", children: "Platform Capabilities" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "features-grid", children: coreFeatures.map((feature, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "feature-card glass-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "feature-header", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "feature-icon", children: feature.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "feature-badges", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { appearance: "filled", color: "success", children: feature.status }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { appearance: "outline", children: feature.coverage })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "feature-title", children: feature.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardPreview, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "feature-description", children: feature.description }) })
      ] }, index)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "operators-section parallax-section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section-content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-title", children: "Supported Network Operators" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "operators-grid", children: networkOperators.map((operator, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "operator-card glass-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "operator-header", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "operator-logo", children: operator.logo }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "operator-status", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "status-dot active" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: operator.status })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "operator-name", style: { color: operator.color }, children: operator.name })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardPreview, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "operator-stats", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "stat-label", children: "Coverage" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "stat-value", children: operator.coverage })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "stat-label", children: "Technology" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "stat-value", children: operator.technology })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "stat-label", children: "Subscribers" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "stat-value", children: operator.subscribers })
          ] })
        ] }) })
      ] }, index)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "architecture-section parallax-section", ref: architectureRef, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section-content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-title", children: "Microsoft-Only Architecture" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "architecture-layers", children: architectureLayers.map((layer, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "architecture-layer glass-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "layer-header", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "layer-title", children: layer.layer }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "layer-description", children: layer.description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "layer-components", children: layer.components.map((component, compIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { appearance: "outline", className: "component-badge", children: component }, compIndex)) })
      ] }, index)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "cta-section parallax-section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-content", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cta-content glass-morphism", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Ready to Scale Your eSIM Platform?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Join the enterprise-grade eSIM revolution with Microsoft-powered infrastructure" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cta-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { appearance: "primary", size: "large", as: Link, to: "/enterprise", children: "Enterprise Demo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { appearance: "outline", size: "large", as: Link, to: "/contact", children: "Contact Sales" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { jsx: true, children: `
        .entitlement-server-page {
          min-height: 100vh;
        }

        .hero-content {
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
        }

        .hero-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 700;
          margin: var(--space-lg) 0;
          background: linear-gradient(135deg, var(--black) 0%, var(--accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: clamp(1.1rem, 2.5vw, 1.4rem);
          color: var(--graphite);
          margin-bottom: var(--space-xl);
          line-height: 1.6;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: var(--space-lg);
          margin: var(--space-xl) 0;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--accent);
          display: block;
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--graphite);
          margin-top: var(--space-xs);
        }

        .hero-actions {
          display: flex;
          gap: var(--space-lg);
          justify-content: center;
          flex-wrap: wrap;
          margin-top: var(--space-xl);
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 600;
          text-align: center;
          margin-bottom: var(--space-2xl);
          color: var(--black);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--space-xl);
        }

        .feature-card {
          padding: var(--space-xl);
        }

        .feature-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: var(--space-md);
        }

        .feature-icon {
          font-size: 2.5rem;
          color: var(--accent);
        }

        .feature-badges {
          display: flex;
          flex-direction: column;
          gap: var(--space-xs);
          align-items: flex-end;
        }

        .feature-title {
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: var(--space-md);
          color: var(--black);
        }

        .feature-description {
          color: var(--graphite);
          line-height: 1.6;
        }

        .operators-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--space-lg);
        }

        .operator-card {
          padding: var(--space-lg);
        }

        .operator-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-md);
        }

        .operator-logo {
          font-size: 2rem;
        }

        .operator-status {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          font-size: 0.85rem;
          color: var(--graphite);
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10B981;
        }

        .status-dot.active {
          animation: pulse 2s infinite;
        }

        .operator-name {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: var(--space-md);
        }

        .operator-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-md);
        }

        .stat {
          text-align: center;
        }

        .stat-label {
          display: block;
          font-size: 0.8rem;
          color: var(--graphite);
          margin-bottom: var(--space-xs);
        }

        .stat-value {
          display: block;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--black);
        }

        .architecture-layers {
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
          max-width: 800px;
          margin: 0 auto;
        }

        .architecture-layer {
          padding: var(--space-xl);
        }

        .layer-header {
          margin-bottom: var(--space-lg);
        }

        .layer-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--black);
          margin-bottom: var(--space-sm);
        }

        .layer-description {
          color: var(--graphite);
          line-height: 1.5;
        }

        .layer-components {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-sm);
        }

        .component-badge {
          font-size: 0.85rem;
        }

        .cta-content {
          text-align: center;
          padding: var(--space-3xl);
          max-width: 600px;
          margin: 0 auto;
        }

        .cta-content h2 {
          font-size: 2.5rem;
          font-weight: 600;
          margin-bottom: var(--space-lg);
          color: var(--black);
        }

        .cta-content p {
          font-size: 1.2rem;
          color: var(--graphite);
          margin-bottom: var(--space-xl);
        }

        .cta-actions {
          display: flex;
          gap: var(--space-lg);
          justify-content: center;
          flex-wrap: wrap;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @media (max-width: 768px) {
          .hero-stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .hero-actions,
          .cta-actions {
            flex-direction: column;
            align-items: center;
          }

          .features-grid,
          .operators-grid {
            grid-template-columns: 1fr;
          }

          .operator-stats {
            grid-template-columns: 1fr;
          }
        }
      ` })
  ] });
};
export {
  EntitlementServer as default
};
