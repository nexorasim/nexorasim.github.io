import { j as jsxRuntimeExports, t as Badge, B as Button, n as Card, o as CardHeader, p as CardPreview, u as Server24Regular, r as Shield24Regular, G as Globe24Regular, q as CloudSync24Regular } from "./microsoft-Boih_X-j.js";
import { r as reactExports } from "./vendor-CNj5xcql.js";
import { L as Link } from "./index-iLQnzUJ6.js";
import { g as gsapWithCSS, S as ScrollTrigger } from "./ScrollTrigger-yeD_1Ynm.js";
import "./three-B7jgAvzJ.js";
gsapWithCSS.registerPlugin(ScrollTrigger);
const Features = () => {
  const heroRef = reactExports.useRef();
  const featuresRef = reactExports.useRef();
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
  const platformFeatures = [
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Server24Regular, {}),
      title: "Multi-Operator eSIM Management",
      description: "Complete eSIM profile lifecycle management across MPT, MYTEL, ATOM, and U9 networks with 95% Myanmar coverage",
      capabilities: ["Profile Provisioning", "Remote Management", "Real-time Status", "Bulk Operations"],
      status: "Production Ready"
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield24Regular, {}),
      title: "Zero Trust Security Architecture",
      description: "Enterprise-grade security with Microsoft Defender, Cloudflare Zero Trust, and Azure Key Vault integration",
      capabilities: ["End-to-End Encryption", "Identity Protection", "Threat Detection", "Compliance Monitoring"],
      status: "Fully Secured"
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe24Regular, {}),
      title: "Global Roaming Platform",
      description: "Seamless connectivity across ASEAN and worldwide with real-time network optimization and coverage mapping",
      capabilities: ["200+ Countries", "Real-time Switching", "Cost Optimization", "Coverage Analytics"],
      status: "ASEAN Ready"
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CloudSync24Regular, {}),
      title: "Real-time Device Analytics",
      description: "Live device management with Microsoft Graph integration, Power BI dashboards, and predictive analytics",
      capabilities: ["Live Monitoring", "Predictive Analytics", "Performance Metrics", "Health Diagnostics"],
      status: "AI-Powered"
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe24Regular, {}),
      title: "Entertainment Streaming Optimization",
      description: "5G streaming performance with VoLTE HD voice clarity, network slicing, and content delivery optimization",
      capabilities: ["5G Optimization", "VoLTE HD", "Network Slicing", "CDN Integration"],
      status: "5G Ready"
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Server24Regular, {}),
      title: "API-First Architecture",
      description: "RESTful API with comprehensive documentation, Microsoft Graph Toolkit integration, and enterprise scalability",
      capabilities: ["45 Endpoints", "Real-time Events", "Webhook Support", "SDK Libraries"],
      status: "Developer Ready"
    }
  ];
  const technicalSpecs = [
    {
      category: "Performance",
      specs: [
        { metric: "API Response Time", value: "<100ms", description: "95th percentile" },
        { metric: "Concurrent Users", value: "50M+", description: "Global capacity" },
        { metric: "Uptime SLA", value: "99.9%", description: "Enterprise grade" },
        { metric: "Data Processing", value: "1M ops/sec", description: "Real-time throughput" }
      ]
    },
    {
      category: "Security",
      specs: [
        { metric: "Encryption", value: "TLS 1.3", description: "End-to-end security" },
        { metric: "Authentication", value: "OAuth 2.0", description: "Microsoft Entra ID" },
        { metric: "Compliance", value: "SOC 2", description: "Enterprise certified" },
        { metric: "Zero Trust", value: "Active", description: "Cloudflare integration" }
      ]
    },
    {
      category: "Coverage",
      specs: [
        { metric: "Myanmar Networks", value: "4 Operators", description: "MPT, MYTEL, ATOM, U9" },
        { metric: "ASEAN Ready", value: "6 Countries", description: "Regional expansion" },
        { metric: "Global Roaming", value: "200+ Countries", description: "Worldwide coverage" },
        { metric: "Languages", value: "7 Supported", description: "EN/ZH/TH/VI/ID/MS/MM" }
      ]
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "features-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "hero-section parallax-section", ref: heroRef, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-content", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { appearance: "filled", color: "brand", size: "large", children: "Platform Features" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "hero-title", children: "Interactive 3D Feature Grid" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "hero-subtitle", children: "Comprehensive eSIM platform capabilities with real-time analytics, enterprise security, and global reach across ASEAN networks" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { appearance: "primary", size: "large", as: Link, to: "/api", children: "Explore API" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { appearance: "outline", size: "large", as: Link, to: "/enterprise", children: "Enterprise Demo" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "features-grid-section parallax-section", ref: featuresRef, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section-content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-title", children: "Core Platform Capabilities" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "features-grid", children: platformFeatures.map((feature, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "feature-card glass-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "feature-header", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "feature-icon", children: feature.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { appearance: "filled", color: "success", children: feature.status })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "feature-title", children: feature.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardPreview, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "feature-description", children: feature.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "feature-capabilities", children: feature.capabilities.map((capability, capIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { appearance: "outline", className: "capability-badge", children: capability }, capIndex)) })
        ] })
      ] }, index)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "technical-specs-section parallax-section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section-content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-title", children: "Technical Specifications" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "specs-grid", children: technicalSpecs.map((category, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "specs-card glass-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "specs-category", children: category.category }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardPreview, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "specs-list", children: category.specs.map((spec, specIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "spec-item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "spec-metric", children: spec.metric }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "spec-value", children: spec.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "spec-description", children: spec.description })
        ] }, specIndex)) }) })
      ] }, index)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "cta-section parallax-section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-content", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cta-content glass-morphism", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Ready to Experience Premium eSIM Features?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Discover how NexoraSIM transforms eSIM management with enterprise-grade capabilities" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cta-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { appearance: "primary", size: "large", as: Link, to: "/architecture", children: "View Architecture" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { appearance: "outline", size: "large", as: Link, to: "/contact", children: "Contact Sales" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { jsx: true, children: `
        .features-page {
          min-height: 100vh;
        }

        .hero-content {
          text-align: center;
          max-width: 800px;
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

        .hero-actions {
          display: flex;
          gap: var(--space-lg);
          justify-content: center;
          flex-wrap: wrap;
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
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
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

        .feature-title {
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: var(--space-md);
          color: var(--black);
        }

        .feature-description {
          color: var(--graphite);
          line-height: 1.6;
          margin-bottom: var(--space-lg);
        }

        .feature-capabilities {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-sm);
        }

        .capability-badge {
          font-size: 0.85rem;
        }

        .specs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--space-xl);
        }

        .specs-card {
          padding: var(--space-xl);
        }

        .specs-category {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--black);
          margin-bottom: var(--space-lg);
        }

        .specs-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
        }

        .spec-item {
          display: flex;
          flex-direction: column;
          gap: var(--space-xs);
        }

        .spec-metric {
          font-size: 0.9rem;
          color: var(--graphite);
          font-weight: 500;
        }

        .spec-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--accent);
        }

        .spec-description {
          font-size: 0.85rem;
          color: var(--graphite);
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

        @media (max-width: 768px) {
          .hero-actions,
          .cta-actions {
            flex-direction: column;
            align-items: center;
          }

          .features-grid,
          .specs-grid {
            grid-template-columns: 1fr;
          }
        }
      ` })
  ] });
};
export {
  Features as default
};
