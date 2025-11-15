import { j as jsxRuntimeExports, b as Badge, C as Card, p as CardHeader, q as CardPreview, B as Button, v as Play24Regular, T as Textarea, z as Copy24Regular } from "./microsoft-BN5Ld_HN.js";
import { r as reactExports } from "./vendor-CNj5xcql.js";
const API = () => {
  const [selectedEndpoint, setSelectedEndpoint] = reactExports.useState("profiles");
  const [requestBody, setRequestBody] = reactExports.useState("");
  const [response, setResponse] = reactExports.useState("");
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const apiEndpoints = [
    {
      id: "profiles",
      method: "GET",
      path: "/api/v1/profiles",
      title: "List eSIM Profiles",
      description: "Retrieve all eSIM profiles with filtering and pagination",
      parameters: [
        { name: "operator", type: "string", description: "Filter by operator (mpt, mytel, atom, u9)" },
        { name: "status", type: "string", description: "Filter by status (active, inactive, suspended)" },
        { name: "limit", type: "integer", description: "Number of results per page (max 100)" },
        { name: "offset", type: "integer", description: "Pagination offset" }
      ],
      example: {
        request: "GET /api/v1/profiles?operator=mpt&status=active&limit=10",
        response: {
          profiles: [
            {
              id: "prof_12345",
              iccid: "8959501234567890123",
              operator: "mpt",
              status: "active",
              created_at: "2025-01-01T00:00:00Z",
              device_info: {
                model: "iPhone 15 Pro",
                os_version: "iOS 17.2"
              }
            }
          ],
          total: 1,
          has_more: false
        }
      }
    },
    {
      id: "provision",
      method: "POST",
      path: "/api/v1/profiles/provision",
      title: "Provision eSIM Profile",
      description: "Create and provision a new eSIM profile for a device",
      parameters: [
        { name: "operator", type: "string", required: true, description: "Target operator (mpt, mytel, atom, u9)" },
        { name: "device_id", type: "string", required: true, description: "Unique device identifier" },
        { name: "plan_id", type: "string", required: true, description: "Selected plan identifier" },
        { name: "customer_info", type: "object", required: true, description: "Customer information object" }
      ],
      example: {
        request: {
          operator: "mpt",
          device_id: "dev_67890",
          plan_id: "plan_unlimited_5g",
          customer_info: {
            name: "John Doe",
            phone: "+959123456789",
            email: "john@example.com"
          }
        },
        response: {
          profile_id: "prof_12346",
          iccid: "8959501234567890124",
          activation_code: "LPA:1$smdp.example.com$12345",
          qr_code: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...",
          status: "pending_activation",
          expires_at: "2025-01-08T00:00:00Z"
        }
      }
    },
    {
      id: "transfer",
      method: "POST",
      path: "/api/v1/profiles/transfer",
      title: "Transfer eSIM Profile",
      description: "Transfer eSIM profile between devices or operators",
      parameters: [
        { name: "profile_id", type: "string", required: true, description: "Profile to transfer" },
        { name: "target_device", type: "string", required: true, description: "Target device identifier" },
        { name: "target_operator", type: "string", description: "Target operator (optional)" },
        { name: "preserve_data", type: "boolean", description: "Preserve existing data plan" }
      ],
      example: {
        request: {
          profile_id: "prof_12345",
          target_device: "dev_67891",
          target_operator: "mytel",
          preserve_data: true
        },
        response: {
          transfer_id: "xfer_78901",
          status: "in_progress",
          estimated_completion: "2025-01-01T00:05:00Z",
          new_profile_id: "prof_12347"
        }
      }
    },
    {
      id: "analytics",
      method: "GET",
      path: "/api/v1/analytics/usage",
      title: "Usage Analytics",
      description: "Retrieve real-time usage analytics and network performance metrics",
      parameters: [
        { name: "profile_id", type: "string", description: "Specific profile analytics" },
        { name: "operator", type: "string", description: "Operator-specific metrics" },
        { name: "timeframe", type: "string", description: "Time period (1h, 24h, 7d, 30d)" },
        { name: "metrics", type: "array", description: "Specific metrics to retrieve" }
      ],
      example: {
        request: "GET /api/v1/analytics/usage?operator=mpt&timeframe=24h",
        response: {
          operator: "mpt",
          timeframe: "24h",
          metrics: {
            data_usage: {
              total_mb: 1024,
              upload_mb: 256,
              download_mb: 768
            },
            network_performance: {
              avg_speed_mbps: 45.2,
              latency_ms: 12,
              uptime_percentage: 99.8
            },
            active_profiles: 15420,
            new_activations: 234
          }
        }
      }
    }
  ];
  const handleTryEndpoint = async () => {
    setIsLoading(true);
    setTimeout(() => {
      const endpoint = apiEndpoints.find((ep) => ep.id === selectedEndpoint);
      setResponse(JSON.stringify(endpoint.example.response, null, 2));
      setIsLoading(false);
    }, 1e3);
  };
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };
  const currentEndpoint = apiEndpoints.find((ep) => ep.id === selectedEndpoint);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "api-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "hero-section parallax-section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-content", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { appearance: "filled", color: "brand", size: "large", children: "Interactive API Playground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "hero-title", children: "NexoraSIM API Documentation" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "hero-subtitle", children: "Comprehensive RESTful API with 45 endpoints for complete eSIM lifecycle management, real-time analytics, and enterprise integration" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "api-stats", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat-item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-number", children: "45" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-label", children: "API Endpoints" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat-item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-number", children: "1000" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-label", children: "Requests/Min" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat-item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-number", children: "99.9%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-label", children: "Uptime SLA" })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "api-playground-section parallax-section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-content", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "playground-container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "endpoints-sidebar", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "API Endpoints" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "endpoints-list", children: apiEndpoints.map((endpoint) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `endpoint-item ${selectedEndpoint === endpoint.id ? "active" : ""}`,
            onClick: () => setSelectedEndpoint(endpoint.id),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { appearance: "outline", className: `method-badge ${endpoint.method.toLowerCase()}`, children: endpoint.method }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "endpoint-info", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "endpoint-title", children: endpoint.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "endpoint-path", children: endpoint.path })
              ] })
            ]
          },
          endpoint.id
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "playground-main", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "endpoint-details glass-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "endpoint-header", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { appearance: "filled", className: `method-badge ${currentEndpoint.method.toLowerCase()}`, children: currentEndpoint.method }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: currentEndpoint.title })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "endpoint-description", children: currentEndpoint.description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardPreview, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "endpoint-content", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "parameters-section", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Parameters" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "parameters-list", children: currentEndpoint.parameters.map((param, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "parameter-item", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "parameter-header", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "parameter-name", children: param.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { appearance: "outline", size: "small", children: param.type }),
                param.required && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { appearance: "filled", color: "danger", size: "small", children: "Required" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "parameter-description", children: param.description })
            ] }, index)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "try-section", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "try-header", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Try it out" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  appearance: "primary",
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Play24Regular, {}),
                  onClick: handleTryEndpoint,
                  disabled: isLoading,
                  children: isLoading ? "Sending..." : "Send Request"
                }
              )
            ] }),
            currentEndpoint.method === "POST" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "request-body", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Request Body (JSON)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  value: requestBody || JSON.stringify(currentEndpoint.example.request, null, 2),
                  onChange: (e) => setRequestBody(e.target.value),
                  rows: 8,
                  className: "json-textarea"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "response-section", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "response-header", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Response" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    appearance: "subtle",
                    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Copy24Regular, {}),
                    onClick: () => copyToClipboard(response),
                    size: "small",
                    children: "Copy"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "response-body", children: response || JSON.stringify(currentEndpoint.example.response, null, 2) })
            ] })
          ] })
        ] }) })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { jsx: true, children: `
        .api-page {
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

        .api-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-lg);
          max-width: 400px;
          margin: 0 auto;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: var(--accent);
          display: block;
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--graphite);
          margin-top: var(--space-xs);
        }

        .playground-container {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: var(--space-xl);
          min-height: 800px;
        }

        .endpoints-sidebar {
          background: var(--glass);
          border-radius: var(--radius-large);
          padding: var(--space-lg);
          backdrop-filter: var(--blur-subtle);
          border: 1px solid rgba(255,255,255,0.1);
        }

        .endpoints-sidebar h3 {
          margin-bottom: var(--space-lg);
          color: var(--black);
        }

        .endpoints-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
        }

        .endpoint-item {
          padding: var(--space-md);
          border-radius: var(--radius-medium);
          cursor: pointer;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }

        .endpoint-item:hover,
        .endpoint-item.active {
          background: rgba(0,209,255,0.1);
          border-color: var(--accent);
        }

        .endpoint-info {
          margin-top: var(--space-sm);
        }

        .endpoint-title {
          font-weight: 600;
          color: var(--black);
          font-size: 0.9rem;
        }

        .endpoint-path {
          font-size: 0.8rem;
          color: var(--graphite);
          font-family: monospace;
        }

        .method-badge.get { background: #10B981; color: white; }
        .method-badge.post { background: #3B82F6; color: white; }
        .method-badge.put { background: #F59E0B; color: white; }
        .method-badge.delete { background: #EF4444; color: white; }

        .endpoint-details {
          padding: var(--space-xl);
          height: fit-content;
        }

        .endpoint-header {
          display: flex;
          align-items: center;
          gap: var(--space-md);
          margin-bottom: var(--space-md);
        }

        .endpoint-header h2 {
          margin: 0;
          color: var(--black);
        }

        .endpoint-description {
          color: var(--graphite);
          line-height: 1.6;
          margin-bottom: var(--space-lg);
        }

        .parameters-section {
          margin-bottom: var(--space-xl);
        }

        .parameters-section h4 {
          margin-bottom: var(--space-md);
          color: var(--black);
        }

        .parameters-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
        }

        .parameter-item {
          padding: var(--space-md);
          background: rgba(0,0,0,0.02);
          border-radius: var(--radius-medium);
        }

        .parameter-header {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          margin-bottom: var(--space-xs);
        }

        .parameter-name {
          font-weight: 600;
          font-family: monospace;
          color: var(--black);
        }

        .parameter-description {
          font-size: 0.9rem;
          color: var(--graphite);
        }

        .try-section {
          border-top: 1px solid rgba(0,0,0,0.1);
          padding-top: var(--space-lg);
        }

        .try-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-lg);
        }

        .try-header h4 {
          margin: 0;
          color: var(--black);
        }

        .request-body {
          margin-bottom: var(--space-lg);
        }

        .request-body label {
          display: block;
          margin-bottom: var(--space-sm);
          font-weight: 600;
          color: var(--black);
        }

        .json-textarea {
          width: 100%;
          font-family: monospace;
          font-size: 0.9rem;
        }

        .response-section {
          margin-top: var(--space-lg);
        }

        .response-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-sm);
        }

        .response-header label {
          font-weight: 600;
          color: var(--black);
        }

        .response-body {
          background: var(--black);
          color: #00ff00;
          padding: var(--space-lg);
          border-radius: var(--radius-medium);
          font-family: monospace;
          font-size: 0.85rem;
          overflow-x: auto;
          white-space: pre-wrap;
        }

        @media (max-width: 1024px) {
          .playground-container {
            grid-template-columns: 1fr;
          }

          .endpoints-sidebar {
            order: 2;
          }
        }

        @media (max-width: 768px) {
          .api-stats {
            grid-template-columns: 1fr;
          }
        }
      ` })
  ] });
};
export {
  API as default
};
