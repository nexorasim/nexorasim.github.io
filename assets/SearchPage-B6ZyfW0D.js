import { j as jsxRuntimeExports, I as Input, S as Search24Regular, B as Button, J as Filter24Regular, r as Spinner, C as Card, p as CardHeader, b as Badge, q as CardPreview } from "./microsoft-BN5Ld_HN.js";
import { r as reactExports } from "./vendor-CNj5xcql.js";
import { L as Link } from "./index-CstSpp-M.js";
import "./three-ARRUQTc-.js";
const SearchPage = () => {
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [searchResults, setSearchResults] = reactExports.useState([]);
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [selectedCategory, setSelectedCategory] = reactExports.useState("all");
  const searchData = [
    {
      id: 1,
      title: "eSIM Transfer Guide",
      description: "Complete guide for transferring eSIM profiles between Android and Apple devices",
      category: "guide",
      url: "/features",
      keywords: ["esim", "transfer", "android", "apple", "guide"]
    },
    {
      id: 2,
      title: "Network Coverage Maps",
      description: "Real-time coverage maps for MPT, MYTEL, ATOM, and U9 networks in Myanmar",
      category: "network",
      url: "/operators/mpt",
      keywords: ["coverage", "network", "mpt", "mytel", "atom", "u9", "myanmar"]
    },
    {
      id: 3,
      title: "API Documentation",
      description: "Interactive API playground and comprehensive developer documentation",
      category: "technical",
      url: "/api",
      keywords: ["api", "documentation", "developer", "integration", "sdk"]
    },
    {
      id: 4,
      title: "5G Network Integration",
      description: "Next-generation 5G connectivity with VoLTE HD voice support",
      category: "technology",
      url: "/5g",
      keywords: ["5g", "volte", "network", "technology", "connectivity"]
    },
    {
      id: 5,
      title: "Enterprise Solutions",
      description: "Business-grade eSIM management for enterprise customers",
      category: "business",
      url: "/enterprise",
      keywords: ["enterprise", "business", "management", "corporate", "solutions"]
    },
    {
      id: 6,
      title: "Global Roaming Plans",
      description: "International roaming across 200+ countries with competitive rates",
      category: "service",
      url: "/roaming",
      keywords: ["roaming", "international", "global", "travel", "plans"]
    },
    {
      id: 7,
      title: "Security Architecture",
      description: "Zero Trust security model with end-to-end encryption",
      category: "security",
      url: "/security",
      keywords: ["security", "zero trust", "encryption", "protection", "privacy"]
    },
    {
      id: 8,
      title: "Technical Architecture",
      description: "System architecture overview with Microsoft-only technology stack",
      category: "technical",
      url: "/architecture",
      keywords: ["architecture", "system", "microsoft", "technical", "infrastructure"]
    }
  ];
  const categories = [
    { value: "all", label: "All Results" },
    { value: "guide", label: "Guides" },
    { value: "network", label: "Network" },
    { value: "technical", label: "Technical" },
    { value: "technology", label: "Technology" },
    { value: "business", label: "Business" },
    { value: "service", label: "Services" },
    { value: "security", label: "Security" }
  ];
  const performSearch = reactExports.useMemo(() => {
    if (!searchQuery.trim()) {
      return [];
    }
    const query = searchQuery.toLowerCase();
    const results = searchData.filter((item) => {
      if (selectedCategory !== "all" && item.category !== selectedCategory) {
        return false;
      }
      const searchableText = [
        item.title,
        item.description,
        ...item.keywords
      ].join(" ").toLowerCase();
      const queryWords = query.split(" ").filter((word) => word.length > 0);
      return queryWords.every((word) => searchableText.includes(word));
    });
    return results.sort((a, b) => {
      const aTitle = a.title.toLowerCase().includes(query) ? 1 : 0;
      const bTitle = b.title.toLowerCase().includes(query) ? 1 : 0;
      return bTitle - aTitle;
    });
  }, [searchQuery, selectedCategory]);
  reactExports.useEffect(() => {
    if (searchQuery.trim()) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setSearchResults(performSearch);
        setIsLoading(false);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setSearchResults([]);
      setIsLoading(false);
    }
  }, [performSearch, searchQuery]);
  const handleSearch = (e) => {
    e.preventDefault();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "search-hero-section parallax-section", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-content", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-hero-content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "search-title", children: "Search NexoraSIM" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "search-subtitle", children: "Find information about eSIM services, network coverage, API documentation, and more" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: handleSearch, className: "search-form", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-input-container", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value: searchQuery,
            onChange: (e) => setSearchQuery(e.target.value),
            placeholder: "Search for guides, documentation, network info...",
            size: "large",
            contentBefore: /* @__PURE__ */ jsxRuntimeExports.jsx(Search24Regular, {}),
            className: "search-input"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "submit",
            appearance: "primary",
            size: "large",
            className: "search-button",
            children: "Search"
          }
        )
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "search-results-section parallax-section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section-content", children: [
      searchQuery && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-filters", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filter-header", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Filter24Regular, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Filter by category:" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "filter-buttons", children: categories.map((category) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            appearance: selectedCategory === category.value ? "primary" : "outline",
            size: "small",
            onClick: () => setSelectedCategory(category.value),
            className: "filter-button",
            children: category.label
          },
          category.value
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-results", children: [
        isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "loading-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: "large", label: "Searching..." }) }),
        !isLoading && searchQuery && searchResults.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "no-results", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "No results found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Try adjusting your search terms or browse our main sections:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "suggestion-links", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/features", children: "Features" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/api", children: "API Documentation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/enterprise", children: "Enterprise Solutions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/operators/mpt", children: "Network Coverage" })
          ] })
        ] }),
        !isLoading && searchResults.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "results-header", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { children: [
              "Search Results (",
              searchResults.length,
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              "Found ",
              searchResults.length,
              " result",
              searchResults.length !== 1 ? "s" : "",
              ' for "',
              searchQuery,
              '"'
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "results-grid", children: searchResults.map((result) => {
            var _a;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "result-card glass-card", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "result-header", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "result-title", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: result.url, children: result.title }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { appearance: "outline", size: "small", children: (_a = categories.find((cat) => cat.value === result.category)) == null ? void 0 : _a.label })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardPreview, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "result-description", children: result.description }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "result-keywords", children: result.keywords.slice(0, 4).map((keyword) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { appearance: "outline", size: "extra-small", children: keyword }, keyword)) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: result.url, className: "result-link", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { appearance: "transparent", size: "small", children: "View Details →" }) })
              ] })
            ] }, result.id);
          }) })
        ] }),
        !searchQuery && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-suggestions", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Popular Searches" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "suggestion-tags", children: ["eSIM transfer", "API documentation", "5G coverage", "Enterprise solutions", "Global roaming", "Security features"].map((suggestion) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              appearance: "outline",
              size: "small",
              onClick: () => setSearchQuery(suggestion),
              className: "suggestion-tag",
              children: suggestion
            },
            suggestion
          )) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { jsx: true, children: `
        .search-page {
          min-height: 100vh;
        }

        .search-hero-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .search-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 700;
          margin: var(--space-lg) 0;
          color: var(--black);
        }

        .search-subtitle {
          font-size: clamp(1.1rem, 2.5vw, 1.4rem);
          color: var(--graphite);
          margin-bottom: var(--space-2xl);
          line-height: 1.6;
        }

        .search-form {
          margin-bottom: var(--space-2xl);
        }

        .search-input-container {
          display: flex;
          gap: var(--space-md);
          max-width: 600px;
          margin: 0 auto;
        }

        .search-input {
          flex: 1;
        }

        .search-button {
          white-space: nowrap;
        }

        .search-filters {
          margin-bottom: var(--space-xl);
          padding: var(--space-lg);
          background: var(--glass);
          border-radius: var(--radius-lg);
          backdrop-filter: var(--glass-blur);
        }

        .filter-header {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          margin-bottom: var(--space-md);
          font-weight: 600;
          color: var(--black);
        }

        .filter-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-sm);
        }

        .filter-button {
          font-size: 0.9rem;
        }

        .loading-container {
          text-align: center;
          padding: var(--space-3xl);
        }

        .no-results {
          text-align: center;
          padding: var(--space-3xl);
        }

        .no-results h3 {
          font-size: 1.5rem;
          color: var(--black);
          margin-bottom: var(--space-md);
        }

        .no-results p {
          color: var(--graphite);
          margin-bottom: var(--space-lg);
        }

        .suggestion-links {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-md);
          justify-content: center;
        }

        .suggestion-links a {
          color: var(--accent);
          text-decoration: none;
          padding: var(--space-sm) var(--space-md);
          border: 1px solid var(--accent);
          border-radius: var(--radius-md);
          transition: all 0.2s ease;
        }

        .suggestion-links a:hover {
          background: var(--accent);
          color: white;
        }

        .results-header {
          margin-bottom: var(--space-xl);
        }

        .results-header h2 {
          font-size: 1.8rem;
          color: var(--black);
          margin-bottom: var(--space-sm);
        }

        .results-header p {
          color: var(--graphite);
        }

        .results-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--space-xl);
        }

        .result-card {
          padding: var(--space-xl);
          transition: all 0.3s ease;
        }

        .result-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-xl);
        }

        .result-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: var(--space-md);
        }

        .result-title {
          font-size: 1.3rem;
          font-weight: 600;
          margin: 0;
        }

        .result-title a {
          color: var(--black);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .result-title a:hover {
          color: var(--accent);
        }

        .result-description {
          color: var(--graphite);
          line-height: 1.6;
          margin-bottom: var(--space-md);
        }

        .result-keywords {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-xs);
          margin-bottom: var(--space-md);
        }

        .result-link {
          text-decoration: none;
        }

        .search-suggestions {
          text-align: center;
          padding: var(--space-3xl);
        }

        .search-suggestions h3 {
          font-size: 1.5rem;
          color: var(--black);
          margin-bottom: var(--space-lg);
        }

        .suggestion-tags {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-sm);
          justify-content: center;
        }

        .suggestion-tag {
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .search-input-container {
            flex-direction: column;
          }

          .filter-buttons {
            justify-content: center;
          }

          .results-grid {
            grid-template-columns: 1fr;
          }

          .result-header {
            flex-direction: column;
            gap: var(--space-sm);
          }
        }
      ` })
  ] });
};
export {
  SearchPage as default
};
