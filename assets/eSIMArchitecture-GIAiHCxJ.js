import { j as jsxRuntimeExports, b as Badge, B as Button, C as Card, p as CardHeader, u as Server24Regular, q as CardPreview, x as CloudSync24Regular, H as Settings24Regular, w as Shield24Regular } from "./microsoft-BN5Ld_HN.js";
import "./vendor-CNj5xcql.js";
import { L as Link } from "./index-CstSpp-M.js";
import "./three-ARRUQTc-.js";
const eSIMArchitecture = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "technical-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "hero-section parallax-section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-content", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { appearance: "filled", color: "brand", size: "large", children: "Technical Deep-Dive" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "hero-title", children: "eSIM Architecture" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "hero-subtitle", children: "Comprehensive technical overview of eSIM architecture, GSMA standards, and implementation details" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { appearance: "primary", size: "large", as: Link, to: "/tech/gsma-standards", children: "GSMA Standards" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { appearance: "outline", size: "large", as: Link, to: "/tech/sm-dp-plus", children: "SM-DP+ Details" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "architecture-section parallax-section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section-content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-title", children: "eSIM System Components" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "architecture-grid", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "architecture-card glass-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "architecture-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Server24Regular, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "SM-DP+ Server" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardPreview, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Subscription Manager Data Preparation server for profile creation and management" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tech-specs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { appearance: "outline", children: "Profile Generation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { appearance: "outline", children: "Encryption" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { appearance: "outline", children: "GSMA Compliant" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "architecture-card glass-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "architecture-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CloudSync24Regular, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "SM-SR Server" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardPreview, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Subscription Manager Secure Routing for profile delivery and lifecycle management" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tech-specs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { appearance: "outline", children: "Profile Delivery" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { appearance: "outline", children: "Remote Management" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { appearance: "outline", children: "Security" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "architecture-card glass-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "architecture-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Settings24Regular, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "eUICC Chip" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardPreview, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Embedded Universal Integrated Circuit Card with secure element capabilities" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tech-specs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { appearance: "outline", children: "Secure Element" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { appearance: "outline", children: "Multi-Profile" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { appearance: "outline", children: "Tamper Resistant" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "architecture-card glass-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "architecture-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield24Regular, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "LPA Client" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardPreview, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Local Profile Assistant for device-side profile management and user interface" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tech-specs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { appearance: "outline", children: "Profile Management" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { appearance: "outline", children: "User Interface" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { appearance: "outline", children: "Device Integration" })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "standards-section parallax-section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section-content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-title", children: "GSMA Standards Compliance" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "standards-grid", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "standards-card glass-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "RSP Technical Specification" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardPreview, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Remote SIM Provisioning architecture and protocols" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "SGP.21 - Architecture" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "SGP.22 - Technical Requirements" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "SGP.23 - API Specification" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "standards-card glass-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Security Framework" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardPreview, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "End-to-end security and cryptographic requirements" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "PKI Infrastructure" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Certificate Management" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Secure Channels" })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "cta-section parallax-section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-content", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cta-content glass-morphism", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Explore eSIM Implementation" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Deep dive into technical specifications and implementation guides" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cta-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { appearance: "primary", size: "large", as: Link, to: "/tech/profile-lifecycle", children: "Profile Lifecycle" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { appearance: "outline", size: "large", as: Link, to: "/api", children: "API Documentation" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { jsx: true, children: `
        .architecture-grid,
        .standards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--space-xl);
        }

        .architecture-card,
        .standards-card {
          padding: var(--space-xl);
        }

        .architecture-icon {
          font-size: 2.5rem;
          color: var(--accent);
          margin-bottom: var(--space-md);
        }

        .tech-specs {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-sm);
          margin-top: var(--space-md);
        }

        .standards-card ul {
          list-style: none;
          padding: 0;
        }

        .standards-card li {
          padding: var(--space-xs) 0;
          border-bottom: 1px solid var(--glass);
        }

        .standards-card li:last-child {
          border-bottom: none;
        }
      ` })
  ] });
};
export {
  eSIMArchitecture as default
};
