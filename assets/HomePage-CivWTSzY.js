import { j as jsxRuntimeExports, B as Button, A as ArrowRight24Regular, n as Card, o as CardHeader, p as CardPreview, q as CloudSync24Regular, P as Play24Regular, r as Shield24Regular, G as Globe24Regular } from "./microsoft-DzWYVBzk.js";
import { r as reactExports } from "./vendor-CNj5xcql.js";
import { L as Link } from "./index--Sgcq5xx.js";
import { C as Canvas, O as OrbitControls, B as Box, S as Sphere } from "./three-DPyFhS_9.js";
import { g as gsapWithCSS, S as ScrollTrigger } from "./ScrollTrigger-yeD_1Ynm.js";
gsapWithCSS.registerPlugin(ScrollTrigger);
const ThreeBackground = () => {
  const groupRef = reactExports.useRef();
  reactExports.useEffect(() => {
    if (groupRef.current) {
      gsapWithCSS.to(groupRef.current.rotation, {
        y: Math.PI * 2,
        duration: 20,
        repeat: -1,
        ease: "none"
      });
    }
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("group", { ref: groupRef, children: [
    Array.from({ length: 12 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        position: [
          Math.sin(i * 0.5) * 8,
          Math.cos(i * 0.3) * 4,
          Math.sin(i * 0.7) * 6
        ],
        scale: [0.3, 0.2, 0.02],
        rotation: [i * 0.2, i * 0.3, i * 0.1],
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#00D1FF", transparent: true, opacity: 0.7 })
      },
      i
    )),
    Array.from({ length: 8 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Sphere,
      {
        position: [
          Math.cos(i * 0.8) * 10,
          Math.sin(i * 0.6) * 5,
          Math.cos(i * 0.4) * 8
        ],
        scale: 0.1,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#F5F5F5", emissive: "#00D1FF", emissiveIntensity: 0.3 })
      },
      i
    )),
    Array.from({ length: 20 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 15
        ],
        scale: [0.05, 0.05, Math.random() * 2 + 1],
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#333333", transparent: true, opacity: 0.4 })
      },
      i
    ))
  ] });
};
const HomePage = () => {
  const heroRef = reactExports.useRef();
  const featuresRef = reactExports.useRef();
  const statsRef = reactExports.useRef();
  reactExports.useEffect(() => {
    gsapWithCSS.fromTo(
      ".hero-title",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
    gsapWithCSS.fromTo(
      ".hero-subtitle",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" }
    );
    gsapWithCSS.fromTo(
      ".hero-actions",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.6, ease: "power3.out" }
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
    ScrollTrigger.create({
      trigger: statsRef.current,
      start: "top 80%",
      onEnter: () => {
        gsapWithCSS.fromTo(
          ".stat-number",
          { textContent: 0 },
          {
            textContent: (i, target) => target.getAttribute("data-value"),
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            stagger: 0.2
          }
        );
      }
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  const features = [
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CloudSync24Regular, {}),
      title: "Multi-Operator eSIM",
      description: "MPT, MYTEL, ATOM, U9 networks with 95% Myanmar coverage",
      link: "/features"
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Play24Regular, {}),
      title: "5G Entertainment",
      description: "Premium streaming with VoLTE HD voice clarity",
      link: "/5g"
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield24Regular, {}),
      title: "Zero Trust Security",
      description: "Enterprise-grade security with Cloudflare integration",
      link: "/security"
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe24Regular, {}),
      title: "Global Roaming",
      description: "Seamless connectivity across ASEAN and worldwide",
      link: "/roaming"
    },
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CloudSync24Regular, {}),
      title: "Real-time Management",
      description: "Live device analytics and profile lifecycle control",
      link: "/enterprise"
    }
  ];
  const stats = [
    { value: 50, label: "Million Users", suffix: "M+" },
    { value: 95, label: "Network Coverage", suffix: "%" },
    { value: 45, label: "API Endpoints", suffix: "" },
    { value: 99.9, label: "Uptime SLA", suffix: "%" }
  ];
  const networks = [
    { name: "MPT", coverage: "95%", tech: "4G/5G", color: "#FF6B35" },
    { name: "MYTEL", coverage: "90%", tech: "4G/5G", color: "#4ECDC4" },
    { name: "ATOM", coverage: "85%", tech: "4G/NB-IoT", color: "#45B7D1" },
    { name: "U9", coverage: "80%", tech: "4G/LTE-M", color: "#96CEB4" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "home-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "hero-3d", ref: heroRef, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Canvas, { className: "three-canvas", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", { intensity: 0.5 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [10, 10, 10] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ThreeBackground, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(OrbitControls, { enableZoom: false, enablePan: false, autoRotate: true, autoRotateSpeed: 0.5 })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-content", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "hero-title", children: "NexoraSIM Entertainment Server" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "hero-subtitle", children: "Enterprise eSIM platform powering premium streaming across Myanmar's leading networks" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-actions", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { appearance: "primary", size: "large", as: Link, to: "/entitlement-server", children: [
            "Explore Platform",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight24Regular, {})
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { appearance: "outline", size: "large", as: Link, to: "/api", children: "API Documentation" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "network-status parallax-section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section-content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-title", children: "Live Network Status" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "network-grid", children: networks.map((network, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "network-card glass-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "network-info", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "network-name", style: { color: network.color }, children: network.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "network-status-indicator", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "status-dot active" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Operational" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardPreview, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "network-stats", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "stat-label", children: "Coverage" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "stat-value", children: network.coverage })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "stat-label", children: "Technology" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "stat-value", children: network.tech })
          ] })
        ] }) })
      ] }, index)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "features-section parallax-section", ref: featuresRef, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section-content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-title", children: "Platform Capabilities" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "features-grid", children: features.map((feature, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "feature-card glass-card", as: Link, to: feature.link, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "feature-icon", children: feature.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "feature-title", children: feature.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardPreview, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "feature-description", children: feature.description }) })
      ] }, index)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "stats-section parallax-section", ref: statsRef, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section-content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-title", children: "Platform Scale" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stats-grid", children: stats.map((stat, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat-item glass-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-number", "data-value": stat.value, children: "0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-suffix", children: stat.suffix }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-label", children: stat.label })
      ] }, index)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "cta-section parallax-section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-content", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cta-content glass-morphism", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Ready to Transform Your eSIM Experience?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Join 50+ million users across ASEAN enjoying premium eSIM services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "cta-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { appearance: "primary", size: "large", as: Link, to: "/enterprise", children: "Enterprise Solutions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { appearance: "outline", size: "large", as: Link, to: "/contact", children: "Contact Sales" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { jsx: true, children: `
        .home-page {
          min-height: 100vh;
        }

        .hero-3d {
          height: 100vh;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .three-canvas {
          position: absolute !important;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 800px;
          padding: var(--space-2xl);
        }

        .hero-title {
          font-size: clamp(2.5rem, 8vw, 6rem);
          font-weight: 700;
          margin-bottom: var(--space-lg);
          background: linear-gradient(135deg, var(--black) 0%, var(--accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: clamp(1.2rem, 3vw, 1.8rem);
          color: var(--graphite);
          margin-bottom: var(--space-xl);
          font-weight: 400;
        }

        .hero-actions {
          display: flex;
          gap: var(--space-lg);
          justify-content: center;
          flex-wrap: wrap;
        }

        .section-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 600;
          text-align: center;
          margin-bottom: var(--space-2xl);
          color: var(--black);
        }

        .network-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--space-lg);
        }

        .network-card {
          padding: var(--space-lg);
          text-decoration: none;
          color: inherit;
        }

        .network-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-md);
        }

        .network-name {
          font-size: 1.5rem;
          font-weight: 700;
        }

        .network-status-indicator {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          font-size: 0.9rem;
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

        .network-stats {
          display: flex;
          justify-content: space-between;
        }

        .stat {
          text-align: center;
        }

        .stat-label {
          display: block;
          font-size: 0.85rem;
          color: var(--graphite);
          margin-bottom: var(--space-xs);
        }

        .stat-value {
          display: block;
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--black);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--space-lg);
        }

        .feature-card {
          padding: var(--space-xl);
          text-decoration: none;
          color: inherit;
          cursor: pointer;
        }

        .feature-icon {
          font-size: 2rem;
          color: var(--accent);
          margin-bottom: var(--space-md);
        }

        .feature-title {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: var(--space-md);
          color: var(--black);
        }

        .feature-description {
          color: var(--graphite);
          line-height: 1.6;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--space-lg);
        }

        .stat-item {
          padding: var(--space-xl);
          text-align: center;
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 700;
          color: var(--accent);
          display: inline;
        }

        .stat-suffix {
          font-size: 2rem;
          font-weight: 700;
          color: var(--accent);
          display: inline;
        }

        .stat-label {
          display: block;
          font-size: 1rem;
          color: var(--graphite);
          margin-top: var(--space-sm);
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
          .hero-actions {
            flex-direction: column;
            align-items: center;
          }

          .network-grid,
          .features-grid,
          .stats-grid {
            grid-template-columns: 1fr;
          }

          .cta-actions {
            flex-direction: column;
            align-items: center;
          }
        }
      ` })
  ] });
};
export {
  HomePage as default
};
