const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./HomePage-BMenhfR2.js","./microsoft-Boih_X-j.js","./vendor-CNj5xcql.js","./three-B7jgAvzJ.js","./ScrollTrigger-yeD_1Ynm.js","./EntitlementServer-6JFP0hG5.js","./Features-B9Qeaeya.js","./Architecture-CrZ6ejNm.js","./Technology--77opvkO.js","./Devices-NOz4SeYG.js","./Transfer-C41nBzre.js","./Migration-C1z6SNX8.js","./Roaming-CwmdlybX.js","./FiveG-dv_Fx8X9.js","./VoLTE-D4gdM1OV.js","./Security-YzQmnaJ3.js","./Compliance-DRCr3s20.js","./Partners-BUDsWyTb.js","./Enterprise-BcDOzZwX.js","./API-DL4T3rL_.js","./Contact-s3FQ8ZVW.js","./Support-D2LlR_y2.js","./FAQ-BdQl45mc.js","./About-B-mLzPah.js","./Team-CLSsBlGf.js","./Careers-Llqr-6HZ.js","./News-Ct29t6Un.js","./Blog-Dfb3SWXf.js","./Press-Dbl7EUxR.js","./Whitepaper-DWlvhMK9.js","./Brochure-BHatK_j9.js","./Flyer-td1M1e9l.js","./RegionalPages-DJg86ksM.js"])))=>i.map(i=>d[i]);
import { j as jsxRuntimeExports, M as Menu, a as MenuTrigger, B as Button, b as MenuPopover, c as MenuList, d as MenuItem, G as Globe24Regular, N as Navigation24Regular, e as Mail24Regular, C as Code24Regular, D as Dialog, f as DialogTrigger, g as Bot24Regular, h as DialogSurface, i as DialogTitle, k as Dismiss24Regular, l as DialogContent, m as DialogBody, _ as __vitePreload, S as Spinner, F as FluentProvider, w as webLightTheme } from "./microsoft-Boih_X-j.js";
import { r as reactExports, R as React, b as React$1 } from "./vendor-CNj5xcql.js";
import { c as client } from "./three-B7jgAvzJ.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends$2() {
  _extends$2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2.apply(this, arguments);
}
var Action;
(function(Action2) {
  Action2["Pop"] = "POP";
  Action2["Push"] = "PUSH";
  Action2["Replace"] = "REPLACE";
})(Action || (Action = {}));
const PopStateEventType = "popstate";
function createBrowserHistory(options) {
  if (options === void 0) {
    options = {};
  }
  function createBrowserLocation(window2, globalHistory) {
    let {
      pathname,
      search,
      hash
    } = window2.location;
    return createLocation(
      "",
      {
        pathname,
        search,
        hash
      },
      // state defaults to `null` because `window.history.state` does
      globalHistory.state && globalHistory.state.usr || null,
      globalHistory.state && globalHistory.state.key || "default"
    );
  }
  function createBrowserHref(window2, to) {
    return typeof to === "string" ? to : createPath(to);
  }
  return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
}
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function warning(cond, message) {
  if (!cond) {
    if (typeof console !== "undefined") console.warn(message);
    try {
      throw new Error(message);
    } catch (e) {
    }
  }
}
function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
function getHistoryState(location, index) {
  return {
    usr: location.state,
    key: location.key,
    idx: index
  };
}
function createLocation(current, to, state, key) {
  if (state === void 0) {
    state = null;
  }
  let location = _extends$2({
    pathname: typeof current === "string" ? current : current.pathname,
    search: "",
    hash: ""
  }, typeof to === "string" ? parsePath(to) : to, {
    state,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: to && to.key || key || createKey()
  });
  return location;
}
function createPath(_ref) {
  let {
    pathname = "/",
    search = "",
    hash = ""
  } = _ref;
  if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
function parsePath(path) {
  let parsedPath = {};
  if (path) {
    let hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }
    let searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
  if (options === void 0) {
    options = {};
  }
  let {
    window: window2 = document.defaultView,
    v5Compat = false
  } = options;
  let globalHistory = window2.history;
  let action = Action.Pop;
  let listener = null;
  let index = getIndex();
  if (index == null) {
    index = 0;
    globalHistory.replaceState(_extends$2({}, globalHistory.state, {
      idx: index
    }), "");
  }
  function getIndex() {
    let state = globalHistory.state || {
      idx: null
    };
    return state.idx;
  }
  function handlePop() {
    action = Action.Pop;
    let nextIndex = getIndex();
    let delta = nextIndex == null ? null : nextIndex - index;
    index = nextIndex;
    if (listener) {
      listener({
        action,
        location: history.location,
        delta
      });
    }
  }
  function push(to, state) {
    action = Action.Push;
    let location = createLocation(history.location, to, state);
    index = getIndex() + 1;
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    try {
      globalHistory.pushState(historyState, "", url);
    } catch (error) {
      if (error instanceof DOMException && error.name === "DataCloneError") {
        throw error;
      }
      window2.location.assign(url);
    }
    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 1
      });
    }
  }
  function replace(to, state) {
    action = Action.Replace;
    let location = createLocation(history.location, to, state);
    index = getIndex();
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    globalHistory.replaceState(historyState, "", url);
    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 0
      });
    }
  }
  function createURL(to) {
    let base = window2.location.origin !== "null" ? window2.location.origin : window2.location.href;
    let href = typeof to === "string" ? to : createPath(to);
    href = href.replace(/ $/, "%20");
    invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
    return new URL(href, base);
  }
  let history = {
    get action() {
      return action;
    },
    get location() {
      return getLocation(window2, globalHistory);
    },
    listen(fn) {
      if (listener) {
        throw new Error("A history only accepts one active listener");
      }
      window2.addEventListener(PopStateEventType, handlePop);
      listener = fn;
      return () => {
        window2.removeEventListener(PopStateEventType, handlePop);
        listener = null;
      };
    },
    createHref(to) {
      return createHref(window2, to);
    },
    createURL,
    encodeLocation(to) {
      let url = createURL(to);
      return {
        pathname: url.pathname,
        search: url.search,
        hash: url.hash
      };
    },
    push,
    replace,
    go(n) {
      return globalHistory.go(n);
    }
  };
  return history;
}
var ResultType;
(function(ResultType2) {
  ResultType2["data"] = "data";
  ResultType2["deferred"] = "deferred";
  ResultType2["redirect"] = "redirect";
  ResultType2["error"] = "error";
})(ResultType || (ResultType = {}));
function matchRoutes(routes, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }
  return matchRoutesImpl(routes, locationArg, basename);
}
function matchRoutesImpl(routes, locationArg, basename, allowPartial) {
  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;
  for (let i = 0; matches == null && i < branches.length; ++i) {
    let decoded = decodePath(pathname);
    matches = matchRouteBranch(branches[i], decoded);
  }
  return matches;
}
function flattenRoutes(routes, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }
  if (parentsMeta === void 0) {
    parentsMeta = [];
  }
  if (parentPath === void 0) {
    parentPath = "";
  }
  let flattenRoute = (route, index, relativePath) => {
    let meta = {
      relativePath: relativePath === void 0 ? route.path || "" : relativePath,
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };
    if (meta.relativePath.startsWith("/")) {
      invariant(meta.relativePath.startsWith(parentPath), 'Absolute route path "' + meta.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.");
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    if (route.children && route.children.length > 0) {
      invariant(
        // Our types know better, but runtime JS may not!
        // @ts-expect-error
        route.index !== true,
        "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".')
      );
      flattenRoutes(route.children, branches, routesMeta, path);
    }
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  };
  routes.forEach((route, index) => {
    var _route$path;
    if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) {
      flattenRoute(route, index);
    } else {
      for (let exploded of explodeOptionalSegments(route.path)) {
        flattenRoute(route, index, exploded);
      }
    }
  });
  return branches;
}
function explodeOptionalSegments(path) {
  let segments = path.split("/");
  if (segments.length === 0) return [];
  let [first, ...rest] = segments;
  let isOptional = first.endsWith("?");
  let required = first.replace(/\?$/, "");
  if (rest.length === 0) {
    return isOptional ? [required, ""] : [required];
  }
  let restExploded = explodeOptionalSegments(rest.join("/"));
  let result = [];
  result.push(...restExploded.map((subpath) => subpath === "" ? required : [required, subpath].join("/")));
  if (isOptional) {
    result.push(...restExploded);
  }
  return result.map((exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded);
}
function rankRouteBranches(branches) {
  branches.sort((a, b) => a.score !== b.score ? b.score - a.score : compareIndexes(a.routesMeta.map((meta) => meta.childrenIndex), b.routesMeta.map((meta) => meta.childrenIndex)));
}
const paramRe = /^:[\w-]+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;
const isSplat = (s) => s === "*";
function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index) {
    initialScore += indexRouteValue;
  }
  return segments.filter((s) => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a, b) {
  let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
  return siblings ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    a[a.length - 1] - b[b.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function matchRouteBranch(branch, pathname, allowPartial) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];
  for (let i = 0; i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    let route = meta.route;
    if (!match) {
      return null;
    }
    Object.assign(matchedParams, match.params);
    matches.push({
      // TODO: Can this as be avoided?
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    });
    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }
  let [matcher, compiledParams] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match) return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = compiledParams.reduce((memo, _ref, index) => {
    let {
      paramName,
      isOptional
    } = _ref;
    if (paramName === "*") {
      let splatValue = captureGroups[index] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }
    const value = captureGroups[index];
    if (isOptional && !value) {
      memo[paramName] = void 0;
    } else {
      memo[paramName] = (value || "").replace(/%2F/g, "/");
    }
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  if (end === void 0) {
    end = true;
  }
  warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
  let params = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (_, paramName, isOptional) => {
    params.push({
      paramName,
      isOptional: isOptional != null
    });
    return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
  });
  if (path.endsWith("*")) {
    params.push({
      paramName: "*"
    });
    regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
  } else if (end) {
    regexpSource += "\\/*$";
  } else if (path !== "" && path !== "/") {
    regexpSource += "(?:(?=\\/|$))";
  } else ;
  let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
  return [matcher, params];
}
function decodePath(value) {
  try {
    return value.split("/").map((v) => decodeURIComponent(v).replace(/\//g, "%2F")).join("/");
  } catch (error) {
    warning(false, 'The URL path "' + value + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + error + ")."));
    return value;
  }
}
function stripBasename(pathname, basename) {
  if (basename === "/") return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== "/") {
    return null;
  }
  return pathname.slice(startIndex) || "/";
}
function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach((segment) => {
    if (segment === "..") {
      if (segments.length > 1) segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function getInvalidPathError(char, field, dest, path) {
  return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function getPathContributingMatches(matches) {
  return matches.filter((match, index) => index === 0 || match.route.path && match.route.path.length > 0);
}
function getResolveToMatches(matches, v7_relativeSplatPath) {
  let pathMatches = getPathContributingMatches(matches);
  if (v7_relativeSplatPath) {
    return pathMatches.map((match, idx) => idx === pathMatches.length - 1 ? match.pathname : match.pathnameBase);
  }
  return pathMatches.map((match) => match.pathnameBase);
}
function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
  if (isPathRelative === void 0) {
    isPathRelative = false;
  }
  let to;
  if (typeof toArg === "string") {
    to = parsePath(toArg);
  } else {
    to = _extends$2({}, toArg);
    invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
    invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
    invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
  }
  let isEmptyPath = toArg === "" || to.pathname === "";
  let toPathname = isEmptyPath ? "/" : to.pathname;
  let from;
  if (toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (!isPathRelative && toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to.pathname = toSegments.join("/");
    }
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to, from);
  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }
  return path;
}
const joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
const normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
const normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
const normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
function isRouteErrorResponse(error) {
  return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}
const validMutationMethodsArr = ["post", "put", "patch", "delete"];
new Set(validMutationMethodsArr);
const validRequestMethodsArr = ["get", ...validMutationMethodsArr];
new Set(validRequestMethodsArr);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
const DataRouterContext = /* @__PURE__ */ reactExports.createContext(null);
const DataRouterStateContext = /* @__PURE__ */ reactExports.createContext(null);
const NavigationContext = /* @__PURE__ */ reactExports.createContext(null);
const LocationContext = /* @__PURE__ */ reactExports.createContext(null);
const RouteContext = /* @__PURE__ */ reactExports.createContext({
  outlet: null,
  matches: [],
  isDataRoute: false
});
const RouteErrorContext = /* @__PURE__ */ reactExports.createContext(null);
function useHref(to, _temp) {
  let {
    relative
  } = _temp === void 0 ? {} : _temp;
  !useInRouterContext() ? invariant(false) : void 0;
  let {
    basename,
    navigator
  } = reactExports.useContext(NavigationContext);
  let {
    hash,
    pathname,
    search
  } = useResolvedPath(to, {
    relative
  });
  let joinedPathname = pathname;
  if (basename !== "/") {
    joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
  }
  return navigator.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}
function useInRouterContext() {
  return reactExports.useContext(LocationContext) != null;
}
function useLocation() {
  !useInRouterContext() ? invariant(false) : void 0;
  return reactExports.useContext(LocationContext).location;
}
function useIsomorphicLayoutEffect(cb) {
  let isStatic = reactExports.useContext(NavigationContext).static;
  if (!isStatic) {
    reactExports.useLayoutEffect(cb);
  }
}
function useNavigate() {
  let {
    isDataRoute
  } = reactExports.useContext(RouteContext);
  return isDataRoute ? useNavigateStable() : useNavigateUnstable();
}
function useNavigateUnstable() {
  !useInRouterContext() ? invariant(false) : void 0;
  let dataRouterContext = reactExports.useContext(DataRouterContext);
  let {
    basename,
    future,
    navigator
  } = reactExports.useContext(NavigationContext);
  let {
    matches
  } = reactExports.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(getResolveToMatches(matches, future.v7_relativeSplatPath));
  let activeRef = reactExports.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = reactExports.useCallback(function(to, options) {
    if (options === void 0) {
      options = {};
    }
    if (!activeRef.current) return;
    if (typeof to === "number") {
      navigator.go(to);
      return;
    }
    let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");
    if (dataRouterContext == null && basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
    }
    (!!options.replace ? navigator.replace : navigator.push)(path, options.state, options);
  }, [basename, navigator, routePathnamesJson, locationPathname, dataRouterContext]);
  return navigate;
}
function useResolvedPath(to, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    future
  } = reactExports.useContext(NavigationContext);
  let {
    matches
  } = reactExports.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(getResolveToMatches(matches, future.v7_relativeSplatPath));
  return reactExports.useMemo(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [to, routePathnamesJson, locationPathname, relative]);
}
function useRoutes(routes, locationArg) {
  return useRoutesImpl(routes, locationArg);
}
function useRoutesImpl(routes, locationArg, dataRouterState, future) {
  !useInRouterContext() ? invariant(false) : void 0;
  let {
    navigator
  } = reactExports.useContext(NavigationContext);
  let {
    matches: parentMatches
  } = reactExports.useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  routeMatch && routeMatch.route;
  let locationFromContext = useLocation();
  let location;
  if (locationArg) {
    var _parsedLocationArg$pa;
    let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? invariant(false) : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }
  let pathname = location.pathname || "/";
  let remainingPathname = pathname;
  if (parentPathnameBase !== "/") {
    let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
    let segments = pathname.replace(/^\//, "").split("/");
    remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
  }
  let matches = matchRoutes(routes, {
    pathname: remainingPathname
  });
  let renderedMatches = _renderMatches(matches && matches.map((match) => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: joinPaths([
      parentPathnameBase,
      // Re-encode pathnames that were decoded inside matchRoutes
      navigator.encodeLocation ? navigator.encodeLocation(match.pathname).pathname : match.pathname
    ]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([
      parentPathnameBase,
      // Re-encode pathnames that were decoded inside matchRoutes
      navigator.encodeLocation ? navigator.encodeLocation(match.pathnameBase).pathname : match.pathnameBase
    ])
  })), parentMatches, dataRouterState, future);
  if (locationArg && renderedMatches) {
    return /* @__PURE__ */ reactExports.createElement(LocationContext.Provider, {
      value: {
        location: _extends$1({
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default"
        }, location),
        navigationType: Action.Pop
      }
    }, renderedMatches);
  }
  return renderedMatches;
}
function DefaultErrorComponent() {
  let error = useRouteError();
  let message = isRouteErrorResponse(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
  let stack = error instanceof Error ? error.stack : null;
  let lightgrey = "rgba(200,200,200, 0.5)";
  let preStyles = {
    padding: "0.5rem",
    backgroundColor: lightgrey
  };
  let devInfo = null;
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ reactExports.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, message), stack ? /* @__PURE__ */ reactExports.createElement("pre", {
    style: preStyles
  }, stack) : null, devInfo);
}
const defaultErrorElement = /* @__PURE__ */ reactExports.createElement(DefaultErrorComponent, null);
class RenderErrorBoundary extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      revalidation: props.revalidation,
      error: props.error
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
      return {
        error: props.error,
        location: props.location,
        revalidation: props.revalidation
      };
    }
    return {
      error: props.error !== void 0 ? props.error : state.error,
      location: state.location,
      revalidation: props.revalidation || state.revalidation
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("React Router caught the following error during render", error, errorInfo);
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ reactExports.createElement(RouteContext.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ reactExports.createElement(RouteErrorContext.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function RenderedRoute(_ref) {
  let {
    routeContext,
    match,
    children
  } = _ref;
  let dataRouterContext = reactExports.useContext(DataRouterContext);
  if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
    dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
  }
  return /* @__PURE__ */ reactExports.createElement(RouteContext.Provider, {
    value: routeContext
  }, children);
}
function _renderMatches(matches, parentMatches, dataRouterState, future) {
  var _dataRouterState;
  if (parentMatches === void 0) {
    parentMatches = [];
  }
  if (dataRouterState === void 0) {
    dataRouterState = null;
  }
  if (future === void 0) {
    future = null;
  }
  if (matches == null) {
    var _future;
    if (!dataRouterState) {
      return null;
    }
    if (dataRouterState.errors) {
      matches = dataRouterState.matches;
    } else if ((_future = future) != null && _future.v7_partialHydration && parentMatches.length === 0 && !dataRouterState.initialized && dataRouterState.matches.length > 0) {
      matches = dataRouterState.matches;
    } else {
      return null;
    }
  }
  let renderedMatches = matches;
  let errors = (_dataRouterState = dataRouterState) == null ? void 0 : _dataRouterState.errors;
  if (errors != null) {
    let errorIndex = renderedMatches.findIndex((m) => m.route.id && (errors == null ? void 0 : errors[m.route.id]) !== void 0);
    !(errorIndex >= 0) ? invariant(false) : void 0;
    renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
  }
  let renderFallback = false;
  let fallbackIndex = -1;
  if (dataRouterState && future && future.v7_partialHydration) {
    for (let i = 0; i < renderedMatches.length; i++) {
      let match = renderedMatches[i];
      if (match.route.HydrateFallback || match.route.hydrateFallbackElement) {
        fallbackIndex = i;
      }
      if (match.route.id) {
        let {
          loaderData,
          errors: errors2
        } = dataRouterState;
        let needsToRunLoader = match.route.loader && loaderData[match.route.id] === void 0 && (!errors2 || errors2[match.route.id] === void 0);
        if (match.route.lazy || needsToRunLoader) {
          renderFallback = true;
          if (fallbackIndex >= 0) {
            renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
          } else {
            renderedMatches = [renderedMatches[0]];
          }
          break;
        }
      }
    }
  }
  return renderedMatches.reduceRight((outlet, match, index) => {
    let error;
    let shouldRenderHydrateFallback = false;
    let errorElement = null;
    let hydrateFallbackElement = null;
    if (dataRouterState) {
      error = errors && match.route.id ? errors[match.route.id] : void 0;
      errorElement = match.route.errorElement || defaultErrorElement;
      if (renderFallback) {
        if (fallbackIndex < 0 && index === 0) {
          warningOnce("route-fallback");
          shouldRenderHydrateFallback = true;
          hydrateFallbackElement = null;
        } else if (fallbackIndex === index) {
          shouldRenderHydrateFallback = true;
          hydrateFallbackElement = match.route.hydrateFallbackElement || null;
        }
      }
    }
    let matches2 = parentMatches.concat(renderedMatches.slice(0, index + 1));
    let getChildren = () => {
      let children;
      if (error) {
        children = errorElement;
      } else if (shouldRenderHydrateFallback) {
        children = hydrateFallbackElement;
      } else if (match.route.Component) {
        children = /* @__PURE__ */ reactExports.createElement(match.route.Component, null);
      } else if (match.route.element) {
        children = match.route.element;
      } else {
        children = outlet;
      }
      return /* @__PURE__ */ reactExports.createElement(RenderedRoute, {
        match,
        routeContext: {
          outlet,
          matches: matches2,
          isDataRoute: dataRouterState != null
        },
        children
      });
    };
    return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /* @__PURE__ */ reactExports.createElement(RenderErrorBoundary, {
      location: dataRouterState.location,
      revalidation: dataRouterState.revalidation,
      component: errorElement,
      error,
      children: getChildren(),
      routeContext: {
        outlet: null,
        matches: matches2,
        isDataRoute: true
      }
    }) : getChildren();
  }, null);
}
var DataRouterHook$1 = /* @__PURE__ */ function(DataRouterHook2) {
  DataRouterHook2["UseBlocker"] = "useBlocker";
  DataRouterHook2["UseRevalidator"] = "useRevalidator";
  DataRouterHook2["UseNavigateStable"] = "useNavigate";
  return DataRouterHook2;
}(DataRouterHook$1 || {});
var DataRouterStateHook$1 = /* @__PURE__ */ function(DataRouterStateHook2) {
  DataRouterStateHook2["UseBlocker"] = "useBlocker";
  DataRouterStateHook2["UseLoaderData"] = "useLoaderData";
  DataRouterStateHook2["UseActionData"] = "useActionData";
  DataRouterStateHook2["UseRouteError"] = "useRouteError";
  DataRouterStateHook2["UseNavigation"] = "useNavigation";
  DataRouterStateHook2["UseRouteLoaderData"] = "useRouteLoaderData";
  DataRouterStateHook2["UseMatches"] = "useMatches";
  DataRouterStateHook2["UseRevalidator"] = "useRevalidator";
  DataRouterStateHook2["UseNavigateStable"] = "useNavigate";
  DataRouterStateHook2["UseRouteId"] = "useRouteId";
  return DataRouterStateHook2;
}(DataRouterStateHook$1 || {});
function useDataRouterContext(hookName) {
  let ctx = reactExports.useContext(DataRouterContext);
  !ctx ? invariant(false) : void 0;
  return ctx;
}
function useDataRouterState(hookName) {
  let state = reactExports.useContext(DataRouterStateContext);
  !state ? invariant(false) : void 0;
  return state;
}
function useRouteContext(hookName) {
  let route = reactExports.useContext(RouteContext);
  !route ? invariant(false) : void 0;
  return route;
}
function useCurrentRouteId(hookName) {
  let route = useRouteContext();
  let thisRoute = route.matches[route.matches.length - 1];
  !thisRoute.route.id ? invariant(false) : void 0;
  return thisRoute.route.id;
}
function useRouteError() {
  var _state$errors;
  let error = reactExports.useContext(RouteErrorContext);
  let state = useDataRouterState();
  let routeId = useCurrentRouteId();
  if (error !== void 0) {
    return error;
  }
  return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
}
function useNavigateStable() {
  let {
    router
  } = useDataRouterContext(DataRouterHook$1.UseNavigateStable);
  let id = useCurrentRouteId(DataRouterStateHook$1.UseNavigateStable);
  let activeRef = reactExports.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = reactExports.useCallback(function(to, options) {
    if (options === void 0) {
      options = {};
    }
    if (!activeRef.current) return;
    if (typeof to === "number") {
      router.navigate(to);
    } else {
      router.navigate(to, _extends$1({
        fromRouteId: id
      }, options));
    }
  }, [router, id]);
  return navigate;
}
const alreadyWarned$1 = {};
function warningOnce(key, cond, message) {
  if (!alreadyWarned$1[key]) {
    alreadyWarned$1[key] = true;
  }
}
function logV6DeprecationWarnings(renderFuture, routerFuture) {
  if ((renderFuture == null ? void 0 : renderFuture.v7_startTransition) === void 0) ;
  if ((renderFuture == null ? void 0 : renderFuture.v7_relativeSplatPath) === void 0 && true) ;
}
function Route(_props) {
  invariant(false);
}
function Router(_ref5) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = Action.Pop,
    navigator,
    static: staticProp = false,
    future
  } = _ref5;
  !!useInRouterContext() ? invariant(false) : void 0;
  let basename = basenameProp.replace(/^\/*/, "/");
  let navigationContext = reactExports.useMemo(() => ({
    basename,
    navigator,
    static: staticProp,
    future: _extends$1({
      v7_relativeSplatPath: false
    }, future)
  }), [basename, future, navigator, staticProp]);
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let locationContext = reactExports.useMemo(() => {
    let trailingPathname = stripBasename(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      location: {
        pathname: trailingPathname,
        search,
        hash,
        state,
        key
      },
      navigationType
    };
  }, [basename, pathname, search, hash, state, key, navigationType]);
  if (locationContext == null) {
    return null;
  }
  return /* @__PURE__ */ reactExports.createElement(NavigationContext.Provider, {
    value: navigationContext
  }, /* @__PURE__ */ reactExports.createElement(LocationContext.Provider, {
    children,
    value: locationContext
  }));
}
function Routes(_ref6) {
  let {
    children,
    location
  } = _ref6;
  return useRoutes(createRoutesFromChildren(children), location);
}
new Promise(() => {
});
function createRoutesFromChildren(children, parentPath) {
  if (parentPath === void 0) {
    parentPath = [];
  }
  let routes = [];
  reactExports.Children.forEach(children, (element, index) => {
    if (!/* @__PURE__ */ reactExports.isValidElement(element)) {
      return;
    }
    let treePath = [...parentPath, index];
    if (element.type === reactExports.Fragment) {
      routes.push.apply(routes, createRoutesFromChildren(element.props.children, treePath));
      return;
    }
    !(element.type === Route) ? invariant(false) : void 0;
    !(!element.props.index || !element.props.children) ? invariant(false) : void 0;
    let route = {
      id: element.props.id || treePath.join("-"),
      caseSensitive: element.props.caseSensitive,
      element: element.props.element,
      Component: element.props.Component,
      index: element.props.index,
      path: element.props.path,
      loader: element.props.loader,
      action: element.props.action,
      errorElement: element.props.errorElement,
      ErrorBoundary: element.props.ErrorBoundary,
      hasErrorBoundary: element.props.ErrorBoundary != null || element.props.errorElement != null,
      shouldRevalidate: element.props.shouldRevalidate,
      handle: element.props.handle,
      lazy: element.props.lazy
    };
    if (element.props.children) {
      route.children = createRoutesFromChildren(element.props.children, treePath);
    }
    routes.push(route);
  });
  return routes;
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
  return event.button === 0 && // Ignore everything but left clicks
  (!target || target === "_self") && // Let browser handle "target=_blank" etc.
  !isModifiedEvent(event);
}
const _excluded = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"];
const REACT_ROUTER_VERSION = "6";
try {
  window.__reactRouterVersion = REACT_ROUTER_VERSION;
} catch (e) {
}
const START_TRANSITION = "startTransition";
const startTransitionImpl = React[START_TRANSITION];
function BrowserRouter(_ref4) {
  let {
    basename,
    children,
    future,
    window: window2
  } = _ref4;
  let historyRef = reactExports.useRef();
  if (historyRef.current == null) {
    historyRef.current = createBrowserHistory({
      window: window2,
      v5Compat: true
    });
  }
  let history = historyRef.current;
  let [state, setStateImpl] = reactExports.useState({
    action: history.action,
    location: history.location
  });
  let {
    v7_startTransition
  } = future || {};
  let setState = reactExports.useCallback((newState) => {
    v7_startTransition && startTransitionImpl ? startTransitionImpl(() => setStateImpl(newState)) : setStateImpl(newState);
  }, [setStateImpl, v7_startTransition]);
  reactExports.useLayoutEffect(() => history.listen(setState), [history, setState]);
  reactExports.useEffect(() => logV6DeprecationWarnings(future), [future]);
  return /* @__PURE__ */ reactExports.createElement(Router, {
    basename,
    children,
    location: state.location,
    navigationType: state.action,
    navigator: history,
    future
  });
}
const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
const Link = /* @__PURE__ */ reactExports.forwardRef(function LinkWithRef(_ref7, ref) {
  let {
    onClick,
    relative,
    reloadDocument,
    replace: replace2,
    state,
    target,
    to,
    preventScrollReset,
    viewTransition
  } = _ref7, rest = _objectWithoutPropertiesLoose(_ref7, _excluded);
  let {
    basename
  } = reactExports.useContext(NavigationContext);
  let absoluteHref;
  let isExternal = false;
  if (typeof to === "string" && ABSOLUTE_URL_REGEX.test(to)) {
    absoluteHref = to;
    if (isBrowser) {
      try {
        let currentUrl = new URL(window.location.href);
        let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
        let path = stripBasename(targetUrl.pathname, basename);
        if (targetUrl.origin === currentUrl.origin && path != null) {
          to = path + targetUrl.search + targetUrl.hash;
        } else {
          isExternal = true;
        }
      } catch (e) {
      }
    }
  }
  let href = useHref(to, {
    relative
  });
  let internalOnClick = useLinkClickHandler(to, {
    replace: replace2,
    state,
    target,
    preventScrollReset,
    relative,
    viewTransition
  });
  function handleClick(event) {
    if (onClick) onClick(event);
    if (!event.defaultPrevented) {
      internalOnClick(event);
    }
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ reactExports.createElement("a", _extends({}, rest, {
      href: absoluteHref || href,
      onClick: isExternal || reloadDocument ? onClick : handleClick,
      ref,
      target
    }))
  );
});
var DataRouterHook;
(function(DataRouterHook2) {
  DataRouterHook2["UseScrollRestoration"] = "useScrollRestoration";
  DataRouterHook2["UseSubmit"] = "useSubmit";
  DataRouterHook2["UseSubmitFetcher"] = "useSubmitFetcher";
  DataRouterHook2["UseFetcher"] = "useFetcher";
  DataRouterHook2["useViewTransitionState"] = "useViewTransitionState";
})(DataRouterHook || (DataRouterHook = {}));
var DataRouterStateHook;
(function(DataRouterStateHook2) {
  DataRouterStateHook2["UseFetcher"] = "useFetcher";
  DataRouterStateHook2["UseFetchers"] = "useFetchers";
  DataRouterStateHook2["UseScrollRestoration"] = "useScrollRestoration";
})(DataRouterStateHook || (DataRouterStateHook = {}));
function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state,
    preventScrollReset,
    relative,
    viewTransition
  } = _temp === void 0 ? {} : _temp;
  let navigate = useNavigate();
  let location = useLocation();
  let path = useResolvedPath(to, {
    relative
  });
  return reactExports.useCallback((event) => {
    if (shouldProcessLinkClick(event, target)) {
      event.preventDefault();
      let replace2 = replaceProp !== void 0 ? replaceProp : createPath(location) === createPath(path);
      navigate(to, {
        replace: replace2,
        state,
        preventScrollReset,
        relative,
        viewTransition
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to, preventScrollReset, relative, viewTransition]);
}
const Header = () => {
  const [isScrolled, setIsScrolled] = reactExports.useState(false);
  const location = useLocation();
  reactExports.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const mainNavItems = [
    { path: "/", label: "Home" },
    { path: "/entitlement-server", label: "Entitlement Server" },
    { path: "/features", label: "Features" },
    { path: "/architecture", label: "Architecture" },
    { path: "/technology", label: "Technology" },
    { path: "/devices", label: "Devices" },
    { path: "/api", label: "API" }
  ];
  const solutionsItems = [
    { path: "/transfer", label: "eSIM Transfer" },
    { path: "/migration", label: "SIM Migration" },
    { path: "/roaming", label: "Global Roaming" },
    { path: "/5g", label: "5G Streaming" },
    { path: "/volte", label: "VoLTE HD" },
    { path: "/security", label: "Security" },
    { path: "/compliance", label: "Compliance" }
  ];
  const companyItems = [
    { path: "/about", label: "About" },
    { path: "/team", label: "Team" },
    { path: "/careers", label: "Careers" },
    { path: "/news", label: "News" },
    { path: "/blog", label: "Blog" },
    { path: "/press", label: "Press" }
  ];
  const supportItems = [
    { path: "/contact", label: "Contact" },
    { path: "/support", label: "Support" },
    { path: "/faq", label: "FAQ" },
    { path: "/whitepaper", label: "Whitepaper" },
    { path: "/brochure", label: "Brochure" },
    { path: "/flyer", label: "Flyer" }
  ];
  const languages = [
    { code: "en", label: "English" },
    { code: "zh", label: "中文" },
    { code: "th", label: "ไทย" },
    { code: "vi", label: "Tiếng Việt" },
    { code: "id", label: "Bahasa Indonesia" },
    { code: "ms", label: "Bahasa Malaysia" },
    { code: "mm", label: "မြန်မာ" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: `dynamic-island ${isScrolled ? "scrolled" : ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "header-nav", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "logo", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "logo-text", children: "NexoraSIM" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "nav-menu", children: [
        mainNavItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: item.path,
            className: `nav-link ${location.pathname === item.path ? "active" : ""}`,
            children: item.label
          },
          item.path
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Menu, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuTrigger, { disableButtonEnhancement: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { appearance: "subtle", children: "Solutions" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuPopover, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuList, { children: solutionsItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: item.path, className: "menu-item-link", children: item.label }) }, item.path)) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Menu, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuTrigger, { disableButtonEnhancement: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { appearance: "subtle", children: "Company" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuPopover, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuList, { children: companyItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: item.path, className: "menu-item-link", children: item.label }) }, item.path)) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Menu, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuTrigger, { disableButtonEnhancement: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { appearance: "subtle", children: "Support" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuPopover, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuList, { children: supportItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: item.path, className: "menu-item-link", children: item.label }) }, item.path)) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "header-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Menu, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuTrigger, { disableButtonEnhancement: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { appearance: "subtle", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe24Regular, {}), children: "Language" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuPopover, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuList, { children: languages.map((lang) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/${lang.code}`, className: "menu-item-link", children: lang.label }) }, lang.code)) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { appearance: "primary", as: Link, to: "/enterprise", children: "Enterprise" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          appearance: "subtle",
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Navigation24Regular, {}),
          className: "mobile-menu-toggle"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { jsx: true, children: `
        .header-nav {
          display: flex;
          align-items: center;
          gap: var(--space-lg);
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
        }

        .logo {
          text-decoration: none;
          color: var(--black);
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, var(--black) 0%, var(--accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-menu {
          display: flex;
          align-items: center;
          gap: var(--space-md);
          flex: 1;
          margin-left: var(--space-xl);
        }

        .nav-link {
          text-decoration: none;
          color: var(--black);
          font-weight: 500;
          padding: var(--space-sm) var(--space-md);
          border-radius: var(--radius-medium);
          transition: all 0.3s ease;
        }

        .nav-link:hover,
        .nav-link.active {
          background: var(--accent);
          color: white;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: var(--space-md);
        }

        .menu-item-link {
          text-decoration: none;
          color: var(--black);
          display: block;
          width: 100%;
          padding: var(--space-sm);
        }

        .mobile-menu-toggle {
          display: none;
        }

        @media (max-width: 768px) {
          .nav-menu {
            display: none;
          }

          .header-actions {
            display: none;
          }

          .mobile-menu-toggle {
            display: flex;
          }
        }
      ` })
  ] });
};
const Footer = () => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const footerSections = [
    {
      title: "Platform",
      links: [
        { path: "/entitlement-server", label: "Entitlement Server" },
        { path: "/features", label: "Features" },
        { path: "/architecture", label: "Architecture" },
        { path: "/technology", label: "Technology" },
        { path: "/devices", label: "Devices" },
        { path: "/api", label: "API Documentation" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { path: "/transfer", label: "eSIM Transfer" },
        { path: "/migration", label: "SIM Migration" },
        { path: "/roaming", label: "Global Roaming" },
        { path: "/5g", label: "5G Streaming" },
        { path: "/volte", label: "VoLTE HD Voice" },
        { path: "/security", label: "Security" }
      ]
    },
    {
      title: "Networks",
      links: [
        { path: "/partners/mpt", label: "MPT Myanmar" },
        { path: "/partners/mytel", label: "MYTEL" },
        { path: "/partners/atom", label: "ATOM" },
        { path: "/partners/u9", label: "U9 Network" },
        { path: "/partners", label: "All Partners" },
        { path: "/enterprise", label: "Enterprise" }
      ]
    },
    {
      title: "Company",
      links: [
        { path: "/about", label: "About NexoraSIM" },
        { path: "/team", label: "Team" },
        { path: "/careers", label: "Careers" },
        { path: "/news", label: "News" },
        { path: "/blog", label: "Blog" },
        { path: "/press", label: "Press Kit" }
      ]
    },
    {
      title: "Resources",
      links: [
        { path: "/whitepaper", label: "Whitepaper" },
        { path: "/brochure", label: "Brochure" },
        { path: "/flyer", label: "Flyer" },
        { path: "/compliance", label: "Compliance" },
        { path: "/support", label: "Support" },
        { path: "/faq", label: "FAQ" }
      ]
    },
    {
      title: "Languages",
      links: [
        { path: "/en", label: "English" },
        { path: "/zh", label: "中文 (Chinese)" },
        { path: "/th", label: "ไทย (Thai)" },
        { path: "/vi", label: "Tiếng Việt" },
        { path: "/id", label: "Bahasa Indonesia" },
        { path: "/ms", label: "Bahasa Malaysia" },
        { path: "/mm", label: "မြန်မာ (Myanmar)" }
      ]
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "premium-footer", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer-content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer-brand", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "brand-logo", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "logo-text", children: "NexoraSIM" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "logo-subtitle", children: "Entertainment Server" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "brand-description", children: "Enterprise-grade eSIM Profile Management platform for MPT, MYTEL, ATOM, and U9 networks in Myanmar. Premium streaming, 5G, and VoLTE support across ASEAN and globally." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "contact-info", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "contact-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Globe24Regular, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "nexorasim.com" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "contact-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail24Regular, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "info@nexorasim.com" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "contact-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Code24Regular, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "github.com/nexorasim" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "footer-sections", children: footerSections.map((section, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer-section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "section-title", children: section.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "section-links", children: section.links.map((link, linkIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: link.path, className: "footer-link", children: link.label }) }, linkIndex)) })
      ] }, index)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "footer-bottom", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer-bottom-content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "copyright", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "© ",
          currentYear,
          " NexoraSIM. All rights reserved."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Proprietary - Enterprise eSIM Platform" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer-links", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/privacy", className: "legal-link", children: "Privacy Policy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/terms", className: "legal-link", children: "Terms of Service" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/security", className: "legal-link", children: "Security" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/compliance", className: "legal-link", children: "Compliance" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "deployment-status", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "status-indicator", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "status-dot active" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "System Operational" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "build-info", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "v2.0.0 | Production Ready" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { jsx: true, children: `
        .premium-footer {
          background: var(--pearl);
          border-top: 1px solid rgba(0,0,0,0.1);
          margin-top: var(--space-3xl);
        }

        .footer-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: var(--space-3xl) var(--space-lg);
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: var(--space-3xl);
        }

        .footer-brand {
          max-width: 400px;
        }

        .brand-logo {
          margin-bottom: var(--space-lg);
        }

        .logo-text {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          background: linear-gradient(135deg, var(--black) 0%, var(--accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .logo-subtitle {
          display: block;
          font-size: 1rem;
          color: var(--graphite);
          font-weight: 500;
          margin-top: var(--space-xs);
        }

        .brand-description {
          color: var(--graphite);
          line-height: 1.6;
          margin-bottom: var(--space-lg);
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          color: var(--graphite);
          font-size: 0.9rem;
        }

        .footer-sections {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--space-xl);
        }

        .footer-section {
          display: flex;
          flex-direction: column;
        }

        .section-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--black);
          margin-bottom: var(--space-md);
        }

        .section-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
        }

        .footer-link {
          color: var(--graphite);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .footer-link:hover {
          color: var(--accent);
        }

        .footer-bottom {
          border-top: 1px solid rgba(0,0,0,0.1);
          background: rgba(0,0,0,0.02);
        }

        .footer-bottom-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: var(--space-lg);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: var(--space-lg);
        }

        .copyright {
          color: var(--graphite);
          font-size: 0.85rem;
        }

        .footer-links {
          display: flex;
          gap: var(--space-lg);
        }

        .legal-link {
          color: var(--graphite);
          text-decoration: none;
          font-size: 0.85rem;
          transition: color 0.3s ease;
        }

        .legal-link:hover {
          color: var(--accent);
        }

        .deployment-status {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: var(--space-xs);
        }

        .status-indicator {
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

        .build-info {
          font-size: 0.75rem;
          color: var(--graphite);
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: var(--space-xl);
          }

          .footer-sections {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .footer-content {
            padding: var(--space-xl) var(--space-lg);
          }

          .footer-sections {
            grid-template-columns: 1fr;
          }

          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
            gap: var(--space-md);
          }

          .footer-links {
            flex-wrap: wrap;
            justify-content: center;
          }

          .deployment-status {
            align-items: center;
          }
        }
      ` })
  ] });
};
const CopilotOrb = () => {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const copilotFeatures = [
    {
      title: "eSIM Technology Expert",
      description: "Get instant answers about eSIM provisioning, GSMA standards, and technical specifications"
    },
    {
      title: "Network Integration Guide",
      description: "Learn about MPT, MYTEL, ATOM, and U9 network integration processes"
    },
    {
      title: "API Documentation Helper",
      description: "Navigate our comprehensive API documentation with intelligent assistance"
    },
    {
      title: "Compliance Advisor",
      description: "Understand global telecom regulations and compliance requirements"
    },
    {
      title: "Multilingual Support",
      description: "Available in English, Chinese, Thai, Vietnamese, Indonesian, Malay, and Myanmar"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open: isOpen, onOpenChange: (event, data) => setIsOpen(data.open), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { disableButtonEnhancement: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "copilot-orb", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot24Regular, {}) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogSurface, { className: "copilot-dialog", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "dialog-title", children: [
          "NexoraSIM AI Copilot",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              appearance: "subtle",
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Dismiss24Regular, {}),
              onClick: () => setIsOpen(false),
              className: "close-button"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "copilot-content", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "copilot-intro", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Your eSIM Technology Assistant" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Powered by Microsoft Copilot Studio with custom GPT trained on 3000+ eSIM FAQs, global telecom regulations, and NexoraSIM architecture documentation." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "copilot-features", children: copilotFeatures.map((feature, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "feature-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: feature.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: feature.description })
          ] }, index)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "copilot-chat", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "chat-header", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Start a Conversation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Ask me anything about eSIM technology, network integration, or NexoraSIM platform" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "chat-interface", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "iframe",
              {
                src: "https://web.powerva.microsoft.com/environments/Default-YOUR-TENANT/bots/YOUR-BOT-ID/webchat",
                style: {
                  width: "100%",
                  height: "400px",
                  border: "none",
                  borderRadius: "var(--radius-medium)"
                },
                title: "NexoraSIM AI Copilot"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "copilot-footer", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "disclaimer", children: "Powered by Microsoft Copilot Studio | Real-time translation via Azure AI Translator" }) })
        ] }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { jsx: true, children: `
        .copilot-orb {
          position: fixed;
          bottom: var(--space-xl);
          right: var(--space-xl);
          width: 64px;
          height: 64px;
          border-radius: 50%;
          backdrop-filter: var(--blur-intense);
          background: var(--glass);
          border: 1px solid rgba(255,255,255,0.2);
          box-shadow: var(--shadow-floating);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 1001;
          transition: all 0.3s ease;
          color: var(--accent);
        }

        .copilot-orb:hover {
          transform: scale(1.1);
          background: var(--accent);
          color: white;
        }

        .copilot-dialog {
          max-width: 800px;
          width: 90vw;
          max-height: 90vh;
          overflow-y: auto;
          backdrop-filter: var(--blur-intense);
          background: var(--glass);
          border: 1px solid rgba(255,255,255,0.2);
          box-shadow: var(--shadow-floating);
        }

        .dialog-title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--black);
          margin-bottom: var(--space-lg);
        }

        .close-button {
          margin-left: auto;
        }

        .copilot-content {
          display: flex;
          flex-direction: column;
          gap: var(--space-xl);
        }

        .copilot-intro h3 {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--black);
          margin-bottom: var(--space-sm);
        }

        .copilot-intro p {
          color: var(--graphite);
          line-height: 1.6;
        }

        .copilot-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--space-md);
        }

        .feature-card {
          padding: var(--space-md);
          border-radius: var(--radius-medium);
          background: rgba(255,255,255,0.5);
          border: 1px solid rgba(255,255,255,0.2);
        }

        .feature-card h4 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--black);
          margin-bottom: var(--space-sm);
        }

        .feature-card p {
          font-size: 0.9rem;
          color: var(--graphite);
          line-height: 1.5;
        }

        .copilot-chat {
          border-top: 1px solid rgba(0,0,0,0.1);
          padding-top: var(--space-lg);
        }

        .chat-header {
          margin-bottom: var(--space-lg);
        }

        .chat-header h4 {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--black);
          margin-bottom: var(--space-sm);
        }

        .chat-header p {
          color: var(--graphite);
        }

        .chat-interface {
          border-radius: var(--radius-medium);
          overflow: hidden;
          box-shadow: var(--shadow-glass);
        }

        .copilot-footer {
          border-top: 1px solid rgba(0,0,0,0.1);
          padding-top: var(--space-md);
        }

        .disclaimer {
          font-size: 0.85rem;
          color: var(--graphite);
          text-align: center;
        }

        @media (max-width: 768px) {
          .copilot-orb {
            bottom: var(--space-lg);
            right: var(--space-lg);
            width: 56px;
            height: 56px;
          }

          .copilot-dialog {
            width: 95vw;
            max-height: 85vh;
          }

          .copilot-features {
            grid-template-columns: 1fr;
          }

          .chat-interface iframe {
            height: 300px !important;
          }
        }
      ` })
  ] });
};
const HomePage = React$1.lazy(() => __vitePreload(() => import("./HomePage-BMenhfR2.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0, import.meta.url));
const EntitlementServer = React$1.lazy(() => __vitePreload(() => import("./EntitlementServer-6JFP0hG5.js"), true ? __vite__mapDeps([5,1,2,4,3]) : void 0, import.meta.url));
const Features = React$1.lazy(() => __vitePreload(() => import("./Features-B9Qeaeya.js"), true ? __vite__mapDeps([6,1,2,4,3]) : void 0, import.meta.url));
const Architecture = React$1.lazy(() => __vitePreload(() => import("./Architecture-CrZ6ejNm.js"), true ? __vite__mapDeps([7,1,2]) : void 0, import.meta.url));
const Technology = React$1.lazy(() => __vitePreload(() => import("./Technology--77opvkO.js"), true ? __vite__mapDeps([8,1,2]) : void 0, import.meta.url));
const Devices = React$1.lazy(() => __vitePreload(() => import("./Devices-NOz4SeYG.js"), true ? __vite__mapDeps([9,1,2]) : void 0, import.meta.url));
const Transfer = React$1.lazy(() => __vitePreload(() => import("./Transfer-C41nBzre.js"), true ? __vite__mapDeps([10,1,2]) : void 0, import.meta.url));
const Migration = React$1.lazy(() => __vitePreload(() => import("./Migration-C1z6SNX8.js"), true ? __vite__mapDeps([11,1,2]) : void 0, import.meta.url));
const Roaming = React$1.lazy(() => __vitePreload(() => import("./Roaming-CwmdlybX.js"), true ? __vite__mapDeps([12,1,2]) : void 0, import.meta.url));
const FiveG = React$1.lazy(() => __vitePreload(() => import("./FiveG-dv_Fx8X9.js"), true ? __vite__mapDeps([13,1,2]) : void 0, import.meta.url));
const VoLTE = React$1.lazy(() => __vitePreload(() => import("./VoLTE-D4gdM1OV.js"), true ? __vite__mapDeps([14,1,2]) : void 0, import.meta.url));
const Security = React$1.lazy(() => __vitePreload(() => import("./Security-YzQmnaJ3.js"), true ? __vite__mapDeps([15,1,2]) : void 0, import.meta.url));
const Compliance = React$1.lazy(() => __vitePreload(() => import("./Compliance-DRCr3s20.js"), true ? __vite__mapDeps([16,1,2]) : void 0, import.meta.url));
const Partners = React$1.lazy(() => __vitePreload(() => import("./Partners-BUDsWyTb.js"), true ? __vite__mapDeps([17,1,2]) : void 0, import.meta.url));
const Enterprise = React$1.lazy(() => __vitePreload(() => import("./Enterprise-BcDOzZwX.js"), true ? __vite__mapDeps([18,1,2]) : void 0, import.meta.url));
const API = React$1.lazy(() => __vitePreload(() => import("./API-DL4T3rL_.js"), true ? __vite__mapDeps([19,1,2]) : void 0, import.meta.url));
const Contact = React$1.lazy(() => __vitePreload(() => import("./Contact-s3FQ8ZVW.js"), true ? __vite__mapDeps([20,1,2]) : void 0, import.meta.url));
const Support = React$1.lazy(() => __vitePreload(() => import("./Support-D2LlR_y2.js"), true ? __vite__mapDeps([21,1,2]) : void 0, import.meta.url));
const FAQ = React$1.lazy(() => __vitePreload(() => import("./FAQ-BdQl45mc.js"), true ? __vite__mapDeps([22,1,2]) : void 0, import.meta.url));
const About = React$1.lazy(() => __vitePreload(() => import("./About-B-mLzPah.js"), true ? __vite__mapDeps([23,1,2]) : void 0, import.meta.url));
const Team = React$1.lazy(() => __vitePreload(() => import("./Team-CLSsBlGf.js"), true ? __vite__mapDeps([24,1,2]) : void 0, import.meta.url));
const Careers = React$1.lazy(() => __vitePreload(() => import("./Careers-Llqr-6HZ.js"), true ? __vite__mapDeps([25,1,2]) : void 0, import.meta.url));
const News = React$1.lazy(() => __vitePreload(() => import("./News-Ct29t6Un.js"), true ? __vite__mapDeps([26,1,2]) : void 0, import.meta.url));
const Blog = React$1.lazy(() => __vitePreload(() => import("./Blog-Dfb3SWXf.js"), true ? __vite__mapDeps([27,1,2]) : void 0, import.meta.url));
const Press = React$1.lazy(() => __vitePreload(() => import("./Press-Dbl7EUxR.js"), true ? __vite__mapDeps([28,1,2]) : void 0, import.meta.url));
const Whitepaper = React$1.lazy(() => __vitePreload(() => import("./Whitepaper-DWlvhMK9.js"), true ? __vite__mapDeps([29,1,2]) : void 0, import.meta.url));
const Brochure = React$1.lazy(() => __vitePreload(() => import("./Brochure-BHatK_j9.js"), true ? __vite__mapDeps([30,1,2]) : void 0, import.meta.url));
const Flyer = React$1.lazy(() => __vitePreload(() => import("./Flyer-td1M1e9l.js"), true ? __vite__mapDeps([31,1,2]) : void 0, import.meta.url));
const RegionalPages = React$1.lazy(() => __vitePreload(() => import("./RegionalPages-DJg86ksM.js"), true ? __vite__mapDeps([32,1,2]) : void 0, import.meta.url));
const LoadingSpinner = () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "loading-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, { size: "large", label: "Loading NexoraSIM..." }) });
function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "app", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "main-content", children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Routes, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/", element: /* @__PURE__ */ jsxRuntimeExports.jsx(HomePage, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/entitlement-server", element: /* @__PURE__ */ jsxRuntimeExports.jsx(EntitlementServer, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/features", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Features, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/architecture", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Architecture, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/technology", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Technology, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/devices", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Devices, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/transfer", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Transfer, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/migration", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Migration, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/roaming", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Roaming, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/5g", element: /* @__PURE__ */ jsxRuntimeExports.jsx(FiveG, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/volte", element: /* @__PURE__ */ jsxRuntimeExports.jsx(VoLTE, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/security", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Security, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/compliance", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Compliance, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/partners", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Partners, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/enterprise", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Enterprise, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/api", element: /* @__PURE__ */ jsxRuntimeExports.jsx(API, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/contact", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/support", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Support, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/faq", element: /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/about", element: /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/team", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Team, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/careers", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Careers, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/news", element: /* @__PURE__ */ jsxRuntimeExports.jsx(News, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/blog", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Blog, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/press", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Press, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/whitepaper", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Whitepaper, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/brochure", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Brochure, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/flyer", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Flyer, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/:lang/*", element: /* @__PURE__ */ jsxRuntimeExports.jsx(RegionalPages, {}) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CopilotOrb, {})
  ] });
}
const nexoraTheme = {
  ...webLightTheme,
  colorBrandBackground: "#00D1FF",
  colorBrandForeground1: "#000000",
  colorNeutralBackground1: "#F5F5F5",
  colorNeutralForeground1: "#000000"
};
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React$1.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(FluentProvider, { theme: nexoraTheme, children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserRouter, { basename: "/", children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) }) }) })
);
export {
  Link as L
};
