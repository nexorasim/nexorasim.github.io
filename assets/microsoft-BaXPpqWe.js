import { r as reactExports, g as getDefaultExportFromCjs, R as React$1, a as reactDomExports } from "./vendor-CNj5xcql.js";
function _mergeNamespaces(n2, m2) {
  for (var i = 0; i < m2.length; i++) {
    const e2 = m2[i];
    if (typeof e2 !== "string" && !Array.isArray(e2)) {
      for (const k2 in e2) {
        if (k2 !== "default" && !(k2 in n2)) {
          const d2 = Object.getOwnPropertyDescriptor(e2, k2);
          if (d2) {
            Object.defineProperty(n2, k2, d2.get ? d2 : {
              enumerable: true,
              get: () => e2[k2]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }));
}
var jsxRuntime$1 = { exports: {} };
var reactJsxRuntime_production_min = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f$1 = reactExports, k$1 = Symbol.for("react.element"), l$1 = Symbol.for("react.fragment"), m$1 = Object.prototype.hasOwnProperty, n$1 = f$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$1 = { key: true, ref: true, __self: true, __source: true };
function q$1(c2, a, g2) {
  var b2, d2 = {}, e2 = null, h2 = null;
  void 0 !== g2 && (e2 = "" + g2);
  void 0 !== a.key && (e2 = "" + a.key);
  void 0 !== a.ref && (h2 = a.ref);
  for (b2 in a) m$1.call(a, b2) && !p$1.hasOwnProperty(b2) && (d2[b2] = a[b2]);
  if (c2 && c2.defaultProps) for (b2 in a = c2.defaultProps, a) void 0 === d2[b2] && (d2[b2] = a[b2]);
  return { $$typeof: k$1, type: c2, key: e2, ref: h2, props: d2, _owner: n$1.current };
}
reactJsxRuntime_production_min.Fragment = l$1;
reactJsxRuntime_production_min.jsx = q$1;
reactJsxRuntime_production_min.jsxs = q$1;
{
  jsxRuntime$1.exports = reactJsxRuntime_production_min;
}
var jsxRuntimeExports = jsxRuntime$1.exports;
const jsxRuntime = /* @__PURE__ */ getDefaultExportFromCjs(jsxRuntimeExports);
const ReactRuntime = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: jsxRuntime
}, [jsxRuntimeExports]);
const scriptRel = "modulepreload";
const assetsURL = function(dep, importerUrl) {
  return new URL(dep, importerUrl).href;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    const links = document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector(
      "meta[property=csp-nonce]"
    );
    const cspNonce = (cspNonceMeta == null ? void 0 : cspNonceMeta.nonce) || (cspNonceMeta == null ? void 0 : cspNonceMeta.getAttribute("nonce"));
    promise = Promise.allSettled(
      deps.map((dep) => {
        dep = assetsURL(dep, importerUrl);
        if (dep in seen) return;
        seen[dep] = true;
        const isCss = dep.endsWith(".css");
        const cssSelector = isCss ? '[rel="stylesheet"]' : "";
        const isBaseRelative = !!importerUrl;
        if (isBaseRelative) {
          for (let i = links.length - 1; i >= 0; i--) {
            const link2 = links[i];
            if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
              return;
            }
          }
        } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
          return;
        }
        const link = document.createElement("link");
        link.rel = isCss ? "stylesheet" : scriptRel;
        if (!isCss) {
          link.as = "script";
        }
        link.crossOrigin = "";
        link.href = dep;
        if (cspNonce) {
          link.setAttribute("nonce", cspNonce);
        }
        document.head.appendChild(link);
        if (isCss) {
          return new Promise((res, rej) => {
            link.addEventListener("load", res);
            link.addEventListener(
              "error",
              () => rej(new Error(`Unable to preload CSS for ${dep}`))
            );
          });
        }
      })
    );
  }
  function handlePreloadError(err) {
    const e2 = new Event("vite:preloadError", {
      cancelable: true
    });
    e2.payload = err;
    window.dispatchEvent(e2);
    if (!e2.defaultPrevented) {
      throw err;
    }
  }
  return promise.then((res) => {
    for (const item of res || []) {
      if (item.status !== "rejected") continue;
      handlePreloadError(item.reason);
    }
    return baseModule().catch(handlePreloadError);
  });
};
const __GLOBAL__ = typeof window === "undefined" ? global : window;
const __NAMESPACE_PREFIX__ = "@griffel/";
function getGlobalVar(name, defaultValue) {
  if (!__GLOBAL__[Symbol.for(__NAMESPACE_PREFIX__ + name)]) {
    __GLOBAL__[Symbol.for(__NAMESPACE_PREFIX__ + name)] = defaultValue;
  }
  return __GLOBAL__[Symbol.for(__NAMESPACE_PREFIX__ + name)];
}
const DEFINITION_LOOKUP_TABLE = /* @__PURE__ */ getGlobalVar("DEFINITION_LOOKUP_TABLE", {});
const DATA_BUCKET_ATTR = "data-make-styles-bucket";
const DATA_PRIORITY_ATTR = "data-priority";
const SEQUENCE_HASH_LENGTH = 7;
const SEQUENCE_PREFIX = "___";
const SEQUENCE_SIZE = SEQUENCE_PREFIX.length + SEQUENCE_HASH_LENGTH;
const LOOKUP_DEFINITIONS_INDEX = 0;
const LOOKUP_DIR_INDEX = 1;
function murmur2(str) {
  var h2 = 0;
  var k2, i = 0, len = str.length;
  for (; len >= 4; ++i, len -= 4) {
    k2 = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
    k2 = /* Math.imul(k, m): */
    (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16);
    k2 ^= /* k >>> r: */
    k2 >>> 24;
    h2 = /* Math.imul(k, m): */
    (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  }
  switch (len) {
    case 3:
      h2 ^= (str.charCodeAt(i + 2) & 255) << 16;
    case 2:
      h2 ^= (str.charCodeAt(i + 1) & 255) << 8;
    case 1:
      h2 ^= str.charCodeAt(i) & 255;
      h2 = /* Math.imul(h, m): */
      (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  }
  h2 ^= h2 >>> 13;
  h2 = /* Math.imul(h, m): */
  (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  return ((h2 ^ h2 >>> 15) >>> 0).toString(36);
}
function padEndHash(value) {
  const hashLength = value.length;
  if (hashLength === SEQUENCE_HASH_LENGTH) {
    return value;
  }
  for (let i = hashLength; i < SEQUENCE_HASH_LENGTH; i++) {
    value += "0";
  }
  return value;
}
function hashSequence(classes, dir, sequenceIds = []) {
  {
    return SEQUENCE_PREFIX + padEndHash(murmur2(classes + dir));
  }
}
function reduceToClassName(classMap, dir) {
  let classString = "";
  let hashString = "";
  for (const propertyHash in classMap) {
    const classNameMapping = classMap[propertyHash];
    if (classNameMapping === 0) {
      hashString += propertyHash + " ";
      continue;
    }
    const hasRTLClassName = Array.isArray(classNameMapping);
    const className = dir === "rtl" ? (hasRTLClassName ? classNameMapping[1] : classNameMapping) + " " : (hasRTLClassName ? classNameMapping[0] : classNameMapping) + " ";
    classString += className;
    hashString += className;
  }
  return [classString.slice(0, -1), hashString.slice(0, -1)];
}
function reduceToClassNameForSlots(classesMapBySlot, dir) {
  const classNamesForSlots = {};
  for (const slotName in classesMapBySlot) {
    const [slotClasses, slotClassesHash] = reduceToClassName(classesMapBySlot[slotName], dir);
    if (slotClassesHash === "") {
      classNamesForSlots[slotName] = "";
      continue;
    }
    const sequenceHash = hashSequence(slotClassesHash, dir);
    const resultSlotClasses = sequenceHash + (slotClasses === "" ? "" : " " + slotClasses);
    DEFINITION_LOOKUP_TABLE[sequenceHash] = [classesMapBySlot[slotName], dir];
    classNamesForSlots[slotName] = resultSlotClasses;
  }
  return classNamesForSlots;
}
const mergeClassesCachedResults = {};
function mergeClasses() {
  let dir = null;
  let resultClassName = "";
  let sequenceMatch = "";
  const sequencesIds = new Array(arguments.length);
  for (let i = 0; i < arguments.length; i++) {
    const className = arguments[i];
    if (typeof className === "string" && className !== "") {
      const sequenceIndex = className.indexOf(SEQUENCE_PREFIX);
      if (sequenceIndex === -1) {
        resultClassName += className + " ";
      } else {
        const sequenceId = className.substr(sequenceIndex, SEQUENCE_SIZE);
        if (sequenceIndex > 0) {
          resultClassName += className.slice(0, sequenceIndex);
        }
        sequenceMatch += sequenceId;
        sequencesIds[i] = sequenceId;
      }
    }
  }
  if (sequenceMatch === "") {
    return resultClassName.slice(0, -1);
  }
  const mergeClassesResult = mergeClassesCachedResults[sequenceMatch];
  if (mergeClassesResult !== void 0) {
    return resultClassName + mergeClassesResult;
  }
  const sequenceMappings = [];
  for (let i = 0; i < arguments.length; i++) {
    const sequenceId = sequencesIds[i];
    if (sequenceId) {
      const sequenceMapping = DEFINITION_LOOKUP_TABLE[sequenceId];
      if (sequenceMapping) {
        sequenceMappings.push(sequenceMapping[LOOKUP_DEFINITIONS_INDEX]);
        dir = sequenceMapping[LOOKUP_DIR_INDEX];
      }
    }
  }
  const resultClassesMap = Object.assign.apply(
    Object,
    // .assign() mutates the first object, we can't mutate mappings as it will produce invalid results later
    [{}].concat(sequenceMappings)
  );
  const [atomicClasses, classesMapHash] = reduceToClassName(resultClassesMap, dir);
  const newSequenceHash = hashSequence(classesMapHash, dir, sequencesIds);
  const newClassName = newSequenceHash + " " + atomicClasses;
  mergeClassesCachedResults[sequenceMatch] = newClassName;
  DEFINITION_LOOKUP_TABLE[newSequenceHash] = [resultClassesMap, dir];
  return resultClassName + newClassName;
}
function normalizeCSSBucketEntry(entry) {
  if (!Array.isArray(entry)) {
    return [entry];
  }
  return entry;
}
function createIsomorphicStyleSheet(styleElement, bucketName, priority, elementAttributes) {
  const __cssRulesForSSR = [];
  elementAttributes[DATA_BUCKET_ATTR] = bucketName;
  elementAttributes[DATA_PRIORITY_ATTR] = String(priority);
  if (styleElement) {
    for (const attrName in elementAttributes) {
      styleElement.setAttribute(attrName, elementAttributes[attrName]);
    }
  }
  function insertRule(rule) {
    if (styleElement === null || styleElement === void 0 ? void 0 : styleElement.sheet) {
      return styleElement.sheet.insertRule(rule, styleElement.sheet.cssRules.length);
    }
    return __cssRulesForSSR.push(rule);
  }
  return {
    elementAttributes,
    insertRule,
    element: styleElement,
    bucketName,
    cssRules() {
      if (styleElement === null || styleElement === void 0 ? void 0 : styleElement.sheet) {
        return Array.from(styleElement.sheet.cssRules).map((cssRule) => cssRule.cssText);
      }
      return __cssRulesForSSR;
    }
  };
}
const styleBucketOrdering = [
  // reset styles
  "r",
  // catch-all
  "d",
  // link
  "l",
  // visited
  "v",
  // focus-within
  "w",
  // focus
  "f",
  // focus-visible
  "i",
  // hover
  "h",
  // active
  "a",
  // at rules for reset styles
  "s",
  // keyframes
  "k",
  // at-rules
  "t",
  // @media rules
  "m",
  // @container rules
  "c"
];
const styleBucketOrderingMap = /* @__PURE__ */ styleBucketOrdering.reduce((acc, cur, j) => {
  acc[cur] = j;
  return acc;
}, {});
function getStyleSheetKey(bucketName, media, priority) {
  return (bucketName === "m" ? bucketName + media : bucketName) + priority;
}
function getStyleSheetForBucket(bucketName, targetDocument, insertionPoint, renderer, metadata = {}) {
  var _a, _b;
  const isMediaBucket = bucketName === "m";
  const media = (_a = metadata["m"]) !== null && _a !== void 0 ? _a : "0";
  const priority = (_b = metadata["p"]) !== null && _b !== void 0 ? _b : 0;
  const stylesheetKey = getStyleSheetKey(bucketName, media, priority);
  if (!renderer.stylesheets[stylesheetKey]) {
    const tag = targetDocument && targetDocument.createElement("style");
    const stylesheet = createIsomorphicStyleSheet(tag, bucketName, priority, Object.assign({}, renderer.styleElementAttributes, isMediaBucket && {
      media
    }));
    renderer.stylesheets[stylesheetKey] = stylesheet;
    if ((targetDocument === null || targetDocument === void 0 ? void 0 : targetDocument.head) && tag) {
      targetDocument.head.insertBefore(tag, findInsertionPoint(targetDocument, insertionPoint, bucketName, renderer, metadata));
    }
  }
  return renderer.stylesheets[stylesheetKey];
}
function isSameInsertionKey(element, bucketName, metadata) {
  var _a, _b;
  const targetKey = bucketName + ((_a = metadata["m"]) !== null && _a !== void 0 ? _a : "");
  const elementKey = element.getAttribute(DATA_BUCKET_ATTR) + ((_b = element.media) !== null && _b !== void 0 ? _b : "");
  return targetKey === elementKey;
}
function findInsertionPoint(targetDocument, insertionPoint, targetBucket, renderer, metadata = {}) {
  var _a, _b;
  const targetOrder = styleBucketOrderingMap[targetBucket];
  const media = (_a = metadata["m"]) !== null && _a !== void 0 ? _a : "";
  const priority = (_b = metadata["p"]) !== null && _b !== void 0 ? _b : 0;
  let comparer = (el) => targetOrder - styleBucketOrderingMap[el.getAttribute(DATA_BUCKET_ATTR)];
  let styleElements = targetDocument.head.querySelectorAll(`[${DATA_BUCKET_ATTR}]`);
  if (targetBucket === "m") {
    const mediaElements = targetDocument.head.querySelectorAll(`[${DATA_BUCKET_ATTR}="${targetBucket}"]`);
    if (mediaElements.length) {
      styleElements = mediaElements;
      comparer = (el) => renderer.compareMediaQueries(media, el.media);
    }
  }
  const comparerWithPriority = (el) => {
    if (isSameInsertionKey(el, targetBucket, metadata)) {
      return priority - Number(el.getAttribute("data-priority"));
    }
    return comparer(el);
  };
  const length = styleElements.length;
  let index = length - 1;
  while (index >= 0) {
    const styleElement = styleElements.item(index);
    if (comparerWithPriority(styleElement) > 0) {
      return styleElement.nextSibling;
    }
    index--;
  }
  if (length > 0) {
    return styleElements.item(0);
  }
  return insertionPoint ? insertionPoint.nextSibling : null;
}
function safeInsertRule(sheet, ruleCSS) {
  try {
    sheet.insertRule(ruleCSS);
  } catch (e2) {
  }
}
let lastIndex = 0;
const defaultCompareMediaQueries = (a, b2) => a < b2 ? -1 : a > b2 ? 1 : 0;
function createDOMRenderer(targetDocument = typeof document === "undefined" ? void 0 : document, options = {}) {
  const {
    classNameHashSalt,
    unstable_filterCSSRule,
    insertionPoint,
    styleElementAttributes,
    compareMediaQueries = defaultCompareMediaQueries
  } = options;
  const renderer = {
    classNameHashSalt,
    insertionCache: {},
    stylesheets: {},
    styleElementAttributes: Object.freeze(styleElementAttributes),
    compareMediaQueries,
    id: `d${lastIndex++}`,
    insertCSSRules(cssRules) {
      for (const styleBucketName in cssRules) {
        const cssRulesForBucket = cssRules[styleBucketName];
        for (let i = 0, l2 = cssRulesForBucket.length; i < l2; i++) {
          const [ruleCSS, metadata] = normalizeCSSBucketEntry(cssRulesForBucket[i]);
          const sheet = getStyleSheetForBucket(styleBucketName, targetDocument, insertionPoint || null, renderer, metadata);
          if (renderer.insertionCache[ruleCSS]) {
            continue;
          }
          renderer.insertionCache[ruleCSS] = styleBucketName;
          if (unstable_filterCSSRule) {
            if (unstable_filterCSSRule(ruleCSS)) {
              safeInsertRule(sheet, ruleCSS);
            }
          } else {
            safeInsertRule(sheet, ruleCSS);
          }
        }
      }
    }
  };
  return renderer;
}
const insertionFactory$1 = () => {
  const insertionCache = {};
  return function insertStyles(renderer, cssRules) {
    if (insertionCache[renderer.id] === void 0) {
      renderer.insertCSSRules(cssRules);
      insertionCache[renderer.id] = true;
    }
  };
};
function __styles$1(classesMapBySlot, cssRules, factory = insertionFactory$1) {
  const insertStyles = factory();
  let ltrClassNamesForSlots = null;
  let rtlClassNamesForSlots = null;
  function computeClasses(options) {
    const {
      dir,
      renderer
    } = options;
    const isLTR = dir === "ltr";
    if (isLTR) {
      if (ltrClassNamesForSlots === null) {
        ltrClassNamesForSlots = reduceToClassNameForSlots(classesMapBySlot, dir);
      }
    } else {
      if (rtlClassNamesForSlots === null) {
        rtlClassNamesForSlots = reduceToClassNameForSlots(classesMapBySlot, dir);
      }
    }
    insertStyles(renderer, cssRules);
    const classNamesForSlots = isLTR ? ltrClassNamesForSlots : rtlClassNamesForSlots;
    return classNamesForSlots;
  }
  return computeClasses;
}
function __resetStyles$1(ltrClassName, rtlClassName, cssRules, factory = insertionFactory$1) {
  const insertStyles = factory();
  function computeClassName(options) {
    const {
      dir,
      renderer
    } = options;
    const className = dir === "ltr" ? ltrClassName : rtlClassName || ltrClassName;
    insertStyles(renderer, Array.isArray(cssRules) ? {
      r: cssRules
    } : cssRules);
    return className;
  }
  return computeClassName;
}
function canUseDOM$1() {
  return typeof window !== "undefined" && !!(window.document && window.document.createElement);
}
const useInsertionEffect$2 = (
  // @ts-expect-error Hack to make sure that `useInsertionEffect` will not cause bundling issues in older React versions
  // eslint-disable-next-line no-useless-concat
  React$1["useInsertionEffect"] ? React$1["useInsertionEffect"] : void 0
);
const insertionFactory = () => {
  const insertionCache = {};
  return function insert(renderer, cssRules) {
    if (useInsertionEffect$2 && canUseDOM$1()) {
      useInsertionEffect$2(() => {
        renderer.insertCSSRules(cssRules);
      }, [renderer, cssRules]);
      return;
    }
    if (insertionCache[renderer.id] === void 0) {
      renderer.insertCSSRules(cssRules);
      insertionCache[renderer.id] = true;
    }
  };
};
const RendererContext = /* @__PURE__ */ reactExports.createContext(/* @__PURE__ */ createDOMRenderer());
function useRenderer() {
  return reactExports.useContext(RendererContext);
}
const TextDirectionContext = /* @__PURE__ */ reactExports.createContext("ltr");
const TextDirectionProvider = ({
  children,
  dir
}) => {
  return /* @__PURE__ */ reactExports.createElement(TextDirectionContext.Provider, {
    value: dir
  }, children);
};
function useTextDirection() {
  return reactExports.useContext(TextDirectionContext);
}
function __styles(classesMapBySlot, cssRules) {
  const getStyles = __styles$1(classesMapBySlot, cssRules, insertionFactory);
  return function useClasses() {
    const dir = useTextDirection();
    const renderer = useRenderer();
    return getStyles({
      dir,
      renderer
    });
  };
}
function __resetStyles(ltrClassName, rtlClassName, cssRules) {
  const getStyles = __resetStyles$1(ltrClassName, rtlClassName, cssRules, insertionFactory);
  return function useClasses() {
    const dir = useTextDirection();
    const renderer = useRenderer();
    return getStyles({
      dir,
      renderer
    });
  };
}
function createCSSRuleFromTheme(selector, theme) {
  if (theme) {
    const cssVarsAsString = Object.keys(theme).reduce((cssVarRule, cssVar) => {
      return `${cssVarRule}--${cssVar}: ${theme[cssVar]}; `;
    }, "");
    return `${selector} { ${cssVarsAsString} }`;
  }
  return `${selector} {}`;
}
const SLOT_RENDER_FUNCTION_SYMBOL = Symbol.for("fui.slotRenderFunction");
const SLOT_ELEMENT_TYPE_SYMBOL = Symbol.for("fui.slotElementType");
const SLOT_CLASS_NAME_PROP_SYMBOL = Symbol.for("fui.slotClassNameProp");
function always(value, options) {
  const { defaultProps, elementType } = options;
  const props = resolveShorthand(value);
  const propsWithMetadata = {
    ...defaultProps,
    ...props,
    [SLOT_ELEMENT_TYPE_SYMBOL]: elementType,
    [SLOT_CLASS_NAME_PROP_SYMBOL]: props === null || props === void 0 ? void 0 : props.className
  };
  if (props && typeof props.children === "function") {
    propsWithMetadata[SLOT_RENDER_FUNCTION_SYMBOL] = props.children;
    propsWithMetadata.children = defaultProps === null || defaultProps === void 0 ? void 0 : defaultProps.children;
  }
  return propsWithMetadata;
}
function optional(value, options) {
  if (value === null || value === void 0 && !options.renderByDefault) {
    return void 0;
  }
  return always(value, options);
}
function resolveShorthand(value) {
  if (typeof value === "string" || typeof value === "number" || isIterable(value) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reactExports.isValidElement(value)) {
    return {
      children: value
    };
  }
  return value;
}
const isIterable = (value) => typeof value === "object" && value !== null && Symbol.iterator in value;
function isResolvedShorthand(shorthand) {
  return shorthand !== null && typeof shorthand === "object" && !Array.isArray(shorthand) && !reactExports.isValidElement(shorthand);
}
function isSlot(element) {
  return Boolean(element === null || element === void 0 ? void 0 : element.hasOwnProperty(SLOT_ELEMENT_TYPE_SYMBOL));
}
const toObjectMap = (...items) => {
  const result = {};
  for (const item of items) {
    const keys = Array.isArray(item) ? item : Object.keys(item);
    for (const key of keys) {
      result[key] = 1;
    }
  }
  return result;
};
const baseElementEvents = toObjectMap([
  "onAuxClick",
  "onAnimationEnd",
  "onAnimationStart",
  "onCopy",
  "onCut",
  "onPaste",
  "onCompositionEnd",
  "onCompositionStart",
  "onCompositionUpdate",
  "onFocus",
  "onFocusCapture",
  "onBlur",
  "onBlurCapture",
  "onChange",
  "onInput",
  "onSubmit",
  "onLoad",
  "onError",
  "onKeyDown",
  "onKeyDownCapture",
  "onKeyPress",
  "onKeyUp",
  "onAbort",
  "onCanPlay",
  "onCanPlayThrough",
  "onDurationChange",
  "onEmptied",
  "onEncrypted",
  "onEnded",
  "onLoadedData",
  "onLoadedMetadata",
  "onLoadStart",
  "onPause",
  "onPlay",
  "onPlaying",
  "onProgress",
  "onRateChange",
  "onSeeked",
  "onSeeking",
  "onStalled",
  "onSuspend",
  "onTimeUpdate",
  "onVolumeChange",
  "onWaiting",
  "onClick",
  "onClickCapture",
  "onContextMenu",
  "onDoubleClick",
  "onDrag",
  "onDragEnd",
  "onDragEnter",
  "onDragExit",
  "onDragLeave",
  "onDragOver",
  "onDragStart",
  "onDrop",
  "onMouseDown",
  "onMouseDownCapture",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseMove",
  "onMouseOut",
  "onMouseOver",
  "onMouseUp",
  "onMouseUpCapture",
  "onSelect",
  "onTouchCancel",
  "onTouchEnd",
  "onTouchMove",
  "onTouchStart",
  "onScroll",
  "onWheel",
  "onPointerCancel",
  "onPointerDown",
  "onPointerEnter",
  "onPointerLeave",
  "onPointerMove",
  "onPointerOut",
  "onPointerOver",
  "onPointerUp",
  "onGotPointerCapture",
  "onLostPointerCapture"
]);
const baseElementProperties = toObjectMap([
  "accessKey",
  "children",
  "className",
  "contentEditable",
  "dir",
  "draggable",
  "hidden",
  "htmlFor",
  "id",
  "lang",
  "ref",
  "role",
  "style",
  "tabIndex",
  "title",
  "translate",
  "spellCheck",
  "name"
]);
const microdataProperties = toObjectMap([
  "itemID",
  "itemProp",
  "itemRef",
  "itemScope",
  "itemType"
]);
const htmlElementProperties = toObjectMap(baseElementProperties, baseElementEvents, microdataProperties);
const labelProperties = toObjectMap(htmlElementProperties, [
  "form"
]);
const audioProperties = toObjectMap(htmlElementProperties, [
  "height",
  "loop",
  "muted",
  "preload",
  "src",
  "width"
]);
const videoProperties = toObjectMap(audioProperties, [
  "poster"
]);
const olProperties = toObjectMap(htmlElementProperties, [
  "start"
]);
const liProperties = toObjectMap(htmlElementProperties, [
  "value"
]);
const anchorProperties = toObjectMap(htmlElementProperties, [
  "download",
  "href",
  "hrefLang",
  "media",
  "referrerPolicy",
  "rel",
  "target",
  "type"
]);
const timeProperties = toObjectMap(htmlElementProperties, [
  "dateTime"
]);
const buttonProperties = toObjectMap(htmlElementProperties, [
  "autoFocus",
  "disabled",
  "form",
  "formAction",
  "formEncType",
  "formMethod",
  "formNoValidate",
  "formTarget",
  "type",
  "value"
]);
const inputProperties = toObjectMap(buttonProperties, [
  "accept",
  "alt",
  "autoCorrect",
  "autoCapitalize",
  "autoComplete",
  "checked",
  "dirname",
  "form",
  "height",
  "inputMode",
  "list",
  "max",
  "maxLength",
  "min",
  "minLength",
  "multiple",
  "pattern",
  "placeholder",
  "readOnly",
  "required",
  "src",
  "step",
  "size",
  "type",
  "value",
  "width"
]);
const textAreaProperties = toObjectMap(buttonProperties, [
  "autoCapitalize",
  "cols",
  "dirname",
  "form",
  "maxLength",
  "placeholder",
  "readOnly",
  "required",
  "rows",
  "wrap"
]);
const selectProperties = toObjectMap(buttonProperties, [
  "form",
  "multiple",
  "required"
]);
const optionProperties = toObjectMap(htmlElementProperties, [
  "selected",
  "value"
]);
const tableProperties = toObjectMap(htmlElementProperties, [
  "cellPadding",
  "cellSpacing"
]);
const trProperties = htmlElementProperties;
const thProperties = toObjectMap(htmlElementProperties, [
  "colSpan",
  "rowSpan",
  "scope"
]);
const tdProperties = toObjectMap(htmlElementProperties, [
  "colSpan",
  "headers",
  "rowSpan",
  "scope"
]);
const colGroupProperties = toObjectMap(htmlElementProperties, [
  "span"
]);
const colProperties = toObjectMap(htmlElementProperties, [
  "span"
]);
const fieldsetProperties = toObjectMap(htmlElementProperties, [
  "disabled",
  "form"
]);
const formProperties = toObjectMap(htmlElementProperties, [
  "acceptCharset",
  "action",
  "encType",
  "encType",
  "method",
  "noValidate",
  "target"
]);
const iframeProperties = toObjectMap(htmlElementProperties, [
  "allow",
  "allowFullScreen",
  "allowPaymentRequest",
  "allowTransparency",
  "csp",
  "height",
  "importance",
  "referrerPolicy",
  "sandbox",
  "src",
  "srcDoc",
  "width"
]);
const imgProperties = toObjectMap(htmlElementProperties, [
  "alt",
  "crossOrigin",
  "height",
  "src",
  "srcSet",
  "useMap",
  "width"
]);
const dialogProperties = toObjectMap(htmlElementProperties, [
  "open",
  "onCancel",
  "onClose"
]);
function getNativeProps(props, allowedPropNames, excludedPropNames) {
  const isArray = Array.isArray(allowedPropNames);
  const result = {};
  const keys = Object.keys(props);
  for (const key of keys) {
    const isNativeProp = !isArray && allowedPropNames[key] || isArray && allowedPropNames.indexOf(key) >= 0 || key.indexOf("data-") === 0 || key.indexOf("aria-") === 0;
    if (isNativeProp && (!excludedPropNames || (excludedPropNames === null || excludedPropNames === void 0 ? void 0 : excludedPropNames.indexOf(key)) === -1)) {
      result[key] = props[key];
    }
  }
  return result;
}
const nativeElementMap = {
  label: labelProperties,
  audio: audioProperties,
  video: videoProperties,
  ol: olProperties,
  li: liProperties,
  a: anchorProperties,
  button: buttonProperties,
  input: inputProperties,
  textarea: textAreaProperties,
  select: selectProperties,
  option: optionProperties,
  table: tableProperties,
  tr: trProperties,
  th: thProperties,
  td: tdProperties,
  colGroup: colGroupProperties,
  col: colProperties,
  fieldset: fieldsetProperties,
  form: formProperties,
  iframe: iframeProperties,
  img: imgProperties,
  time: timeProperties,
  dialog: dialogProperties
};
function getNativeElementProps(tagName, props, excludedPropNames) {
  const allowedPropNames = tagName && nativeElementMap[tagName] || htmlElementProperties;
  allowedPropNames.as = 1;
  return getNativeProps(props, allowedPropNames, excludedPropNames);
}
const getPartitionedNativeProps = ({ primarySlotTagName, props, excludedPropNames }) => {
  return {
    root: {
      style: props.style,
      className: props.className
    },
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    primary: getNativeElementProps(primarySlotTagName, props, [
      ...excludedPropNames || [],
      "style",
      "className"
    ])
  };
};
const getIntrinsicElementProps = (tagName, props, excludedPropNames) => {
  var _props_as;
  return getNativeElementProps((_props_as = props.as) !== null && _props_as !== void 0 ? _props_as : tagName, props, excludedPropNames);
};
function useBrowserTimer(setTimer, cancelTimer) {
  const id = reactExports.useRef(void 0);
  const set = reactExports.useCallback((fn, delay) => {
    if (id.current !== void 0) {
      cancelTimer(id.current);
    }
    id.current = setTimer(fn, delay);
    return id.current;
  }, [
    cancelTimer,
    setTimer
  ]);
  const cancel = reactExports.useCallback(() => {
    if (id.current !== void 0) {
      cancelTimer(id.current);
      id.current = void 0;
    }
  }, [
    cancelTimer
  ]);
  reactExports.useEffect(() => cancel, [
    cancel
  ]);
  return [
    set,
    cancel
  ];
}
const ThemeContext = reactExports.createContext(void 0);
const ThemeProvider = ThemeContext.Provider;
const ThemeClassNameContext = reactExports.createContext(void 0);
const themeClassNameContextDefaultVaue = "";
const ThemeClassNameProvider = ThemeClassNameContext.Provider;
function useThemeClassName() {
  var _React_useContext;
  return (_React_useContext = reactExports.useContext(ThemeClassNameContext)) !== null && _React_useContext !== void 0 ? _React_useContext : themeClassNameContextDefaultVaue;
}
const TooltipVisibilityContext = reactExports.createContext(void 0);
const TooltipVisibilityProvider = TooltipVisibilityContext.Provider;
const ProviderContext = reactExports.createContext(void 0);
const providerContextDefaultValue = {
  // eslint-disable-next-line @nx/workspace-no-restricted-globals -- expected ignore ( SSR friendly acquisition of globals )
  targetDocument: typeof document === "object" ? document : void 0,
  dir: "ltr"
};
const Provider = ProviderContext.Provider;
function useFluent() {
  var _React_useContext;
  return (_React_useContext = reactExports.useContext(ProviderContext)) !== null && _React_useContext !== void 0 ? _React_useContext : providerContextDefaultValue;
}
const OverridesContext = reactExports.createContext(void 0);
const OverridesProvider = OverridesContext.Provider;
function useOverrides() {
  var _React_useContext;
  return (_React_useContext = reactExports.useContext(OverridesContext)) !== null && _React_useContext !== void 0 ? _React_useContext : {};
}
const CustomStyleHooksContext = reactExports.createContext(void 0);
const noop$1 = () => {
};
const CustomStyleHooksProvider = CustomStyleHooksContext.Provider;
const useCustomStyleHook = (hook) => {
  var _React_useContext;
  var _React_useContext_hook;
  return (_React_useContext_hook = (_React_useContext = reactExports.useContext(CustomStyleHooksContext)) === null || _React_useContext === void 0 ? void 0 : _React_useContext[hook]) !== null && _React_useContext_hook !== void 0 ? _React_useContext_hook : noop$1;
};
const PortalMountNodeContext = reactExports.createContext(void 0);
PortalMountNodeContext.Provider;
function usePortalMountNode$1() {
  return reactExports.useContext(PortalMountNodeContext);
}
const setAnimationFrameNoop = (callback) => {
  callback(0);
  return 0;
};
const cancelAnimationFrameNoop = (handle) => handle;
function useAnimationFrame() {
  const { targetDocument } = useFluent();
  const win = targetDocument === null || targetDocument === void 0 ? void 0 : targetDocument.defaultView;
  const setAnimationFrame = win ? win.requestAnimationFrame : setAnimationFrameNoop;
  const clearAnimationFrame = win ? win.cancelAnimationFrame : cancelAnimationFrameNoop;
  return useBrowserTimer(setAnimationFrame, clearAnimationFrame);
}
function isFactoryDispatch(newState) {
  return typeof newState === "function";
}
const useControllableState = (options) => {
  "use no memo";
  const [internalState, setInternalState] = reactExports.useState(() => {
    if (options.defaultState === void 0) {
      return options.initialState;
    }
    return isInitializer(options.defaultState) ? options.defaultState() : options.defaultState;
  });
  const stateValueRef = reactExports.useRef(options.state);
  reactExports.useEffect(() => {
    stateValueRef.current = options.state;
  }, [
    options.state
  ]);
  const setControlledState = reactExports.useCallback((newState) => {
    if (isFactoryDispatch(newState)) {
      newState(stateValueRef.current);
    }
  }, []);
  return useIsControlled(options.state) ? [
    options.state,
    setControlledState
  ] : [
    internalState,
    setInternalState
  ];
};
function isInitializer(value) {
  return typeof value === "function";
}
const useIsControlled = (controlledValue) => {
  "use no memo";
  const [isControlled] = reactExports.useState(() => controlledValue !== void 0);
  return isControlled;
};
function canUseDOM() {
  return (
    /* eslint-disable @nx/workspace-no-restricted-globals -- expected ignore ( SSR friendly acquisition of globals )*/
    typeof window !== "undefined" && !!(window.document && // eslint-disable-next-line @typescript-eslint/no-deprecated
    window.document.createElement)
  );
}
const defaultSSRContextValue = {
  current: 0
};
const SSRContext = /* @__PURE__ */ reactExports.createContext(void 0);
function useSSRContext() {
  var _React_useContext;
  return (_React_useContext = reactExports.useContext(SSRContext)) !== null && _React_useContext !== void 0 ? _React_useContext : defaultSSRContextValue;
}
const useIsomorphicLayoutEffect = canUseDOM() ? reactExports.useLayoutEffect : reactExports.useEffect;
const useEventCallback = (fn) => {
  const callbackRef = reactExports.useRef(() => {
    throw new Error("Cannot call an event handler while rendering");
  });
  useIsomorphicLayoutEffect(() => {
    callbackRef.current = fn;
  }, [
    fn
  ]);
  return reactExports.useCallback((...args) => {
    const callback = callbackRef.current;
    return callback(...args);
  }, [
    callbackRef
  ]);
};
function useFirstMount() {
  const isFirst = reactExports.useRef(true);
  reactExports.useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
    }
  }, []);
  return isFirst.current;
}
function useForceUpdate() {
  return reactExports.useReducer((x) => x + 1, 0)[1];
}
const IdPrefixContext = reactExports.createContext(void 0);
IdPrefixContext.Provider;
function useIdPrefix() {
  return reactExports.useContext(IdPrefixContext) || "";
}
function useId(prefix = "fui-", providedId) {
  "use no memo";
  const contextValue = useSSRContext();
  const idPrefix = useIdPrefix();
  const _useId = React$1["useId"];
  if (_useId) {
    const generatedId = _useId();
    const escapedId = reactExports.useMemo(() => generatedId.replace(/:/g, ""), [
      generatedId
    ]);
    return providedId || `${idPrefix}${prefix}${escapedId}`;
  }
  return reactExports.useMemo(() => {
    if (providedId) {
      return providedId;
    }
    return `${idPrefix}${prefix}${++contextValue.current}`;
  }, [
    idPrefix,
    prefix,
    providedId,
    contextValue
  ]);
}
function useMergedRefs(...refs) {
  "use no memo";
  const mergedCallback = reactExports.useCallback(
    (value) => {
      mergedCallback.current = value;
      for (const ref of refs) {
        if (typeof ref === "function") {
          ref(value);
        } else if (ref) {
          ref.current = value;
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps -- already exhaustive
    [
      ...refs
    ]
  );
  return mergedCallback;
}
const DEFAULT_CONTAINS = (parent, child) => !!(parent === null || parent === void 0 ? void 0 : parent.contains(child));
const useOnClickOutside = (options) => {
  const { targetDocument } = useFluent();
  const win = targetDocument === null || targetDocument === void 0 ? void 0 : targetDocument.defaultView;
  const { refs, callback, element, disabled, disabledFocusOnIframe, contains = DEFAULT_CONTAINS } = options;
  const timeoutId = reactExports.useRef(void 0);
  useIFrameFocus({
    element,
    disabled: disabledFocusOnIframe || disabled,
    callback,
    refs,
    contains
  });
  const isMouseDownInsideRef = reactExports.useRef(false);
  const listener = useEventCallback((ev) => {
    if (isMouseDownInsideRef.current) {
      isMouseDownInsideRef.current = false;
      return;
    }
    const target = ev.composedPath()[0];
    const isOutside = refs.every((ref) => !contains(ref.current || null, target));
    if (isOutside && !disabled) {
      callback(ev);
    }
  });
  const handleMouseDown = useEventCallback((ev) => {
    isMouseDownInsideRef.current = refs.some((ref) => contains(ref.current || null, ev.target));
  });
  reactExports.useEffect(() => {
    if (disabled) {
      return;
    }
    let currentEvent = getWindowEvent(win);
    const conditionalHandler = (event) => {
      if (event === currentEvent) {
        currentEvent = void 0;
        return;
      }
      listener(event);
    };
    element === null || element === void 0 ? void 0 : element.addEventListener("click", conditionalHandler, true);
    element === null || element === void 0 ? void 0 : element.addEventListener("touchstart", conditionalHandler, true);
    element === null || element === void 0 ? void 0 : element.addEventListener("contextmenu", conditionalHandler, true);
    element === null || element === void 0 ? void 0 : element.addEventListener("mousedown", handleMouseDown, true);
    timeoutId.current = win === null || win === void 0 ? void 0 : win.setTimeout(() => {
      currentEvent = void 0;
    }, 1);
    return () => {
      element === null || element === void 0 ? void 0 : element.removeEventListener("click", conditionalHandler, true);
      element === null || element === void 0 ? void 0 : element.removeEventListener("touchstart", conditionalHandler, true);
      element === null || element === void 0 ? void 0 : element.removeEventListener("contextmenu", conditionalHandler, true);
      element === null || element === void 0 ? void 0 : element.removeEventListener("mousedown", handleMouseDown, true);
      win === null || win === void 0 ? void 0 : win.clearTimeout(timeoutId.current);
      currentEvent = void 0;
    };
  }, [
    listener,
    element,
    disabled,
    handleMouseDown,
    win
  ]);
};
const getWindowEvent = (target) => {
  if (target) {
    var _target_ownerDocument_defaultView, _target_ownerDocument;
    if (typeof target.window === "object" && target.window === target) {
      return target.event;
    }
    var _target_ownerDocument_defaultView_event;
    return (_target_ownerDocument_defaultView_event = (_target_ownerDocument = target.ownerDocument) === null || _target_ownerDocument === void 0 ? void 0 : (_target_ownerDocument_defaultView = _target_ownerDocument.defaultView) === null || _target_ownerDocument_defaultView === void 0 ? void 0 : _target_ownerDocument_defaultView.event) !== null && _target_ownerDocument_defaultView_event !== void 0 ? _target_ownerDocument_defaultView_event : void 0;
  }
  return void 0;
};
const FUI_FRAME_EVENT = "fuiframefocus";
const useIFrameFocus = (options) => {
  const { disabled, element: targetDocument, callback, contains = DEFAULT_CONTAINS, pollDuration = 100, refs } = options;
  const timeoutRef = reactExports.useRef(void 0);
  const listener = useEventCallback((e2) => {
    const isOutside = refs.every((ref) => !contains(ref.current || null, e2.target));
    if (isOutside && !disabled) {
      callback(e2);
    }
  });
  reactExports.useEffect(() => {
    if (disabled) {
      return;
    }
    targetDocument === null || targetDocument === void 0 ? void 0 : targetDocument.addEventListener(FUI_FRAME_EVENT, listener, true);
    return () => {
      targetDocument === null || targetDocument === void 0 ? void 0 : targetDocument.removeEventListener(FUI_FRAME_EVENT, listener, true);
    };
  }, [
    targetDocument,
    disabled,
    listener
  ]);
  reactExports.useEffect(() => {
    var _targetDocument_defaultView;
    if (disabled) {
      return;
    }
    timeoutRef.current = targetDocument === null || targetDocument === void 0 ? void 0 : (_targetDocument_defaultView = targetDocument.defaultView) === null || _targetDocument_defaultView === void 0 ? void 0 : _targetDocument_defaultView.setInterval(() => {
      const activeElement = targetDocument === null || targetDocument === void 0 ? void 0 : targetDocument.activeElement;
      if ((activeElement === null || activeElement === void 0 ? void 0 : activeElement.tagName) === "IFRAME" || (activeElement === null || activeElement === void 0 ? void 0 : activeElement.tagName) === "WEBVIEW") {
        const event = new CustomEvent(FUI_FRAME_EVENT, {
          bubbles: true
        });
        activeElement.dispatchEvent(event);
      }
    }, pollDuration);
    return () => {
      var _targetDocument_defaultView2;
      targetDocument === null || targetDocument === void 0 ? void 0 : (_targetDocument_defaultView2 = targetDocument.defaultView) === null || _targetDocument_defaultView2 === void 0 ? void 0 : _targetDocument_defaultView2.clearInterval(timeoutRef.current);
    };
  }, [
    targetDocument,
    disabled,
    pollDuration
  ]);
};
const useOnScrollOutside = (options) => {
  const { refs, callback, element, disabled, contains: containsProp } = options;
  const listener = useEventCallback((ev) => {
    const contains = containsProp || ((parent, child) => !!(parent === null || parent === void 0 ? void 0 : parent.contains(child)));
    const target = ev.composedPath()[0];
    const isOutside = refs.every((ref) => !contains(ref.current || null, target));
    if (isOutside && !disabled) {
      callback(ev);
    }
  });
  reactExports.useEffect(() => {
    if (disabled) {
      return;
    }
    element === null || element === void 0 ? void 0 : element.addEventListener("wheel", listener);
    element === null || element === void 0 ? void 0 : element.addEventListener("touchmove", listener);
    return () => {
      element === null || element === void 0 ? void 0 : element.removeEventListener("wheel", listener);
      element === null || element === void 0 ? void 0 : element.removeEventListener("touchmove", listener);
    };
  }, [
    listener,
    element,
    disabled
  ]);
};
const setTimeoutNoop = (_callback) => -1;
const clearTimeoutNoop = (_handle) => void 0;
function useTimeout() {
  const { targetDocument } = useFluent();
  const win = targetDocument === null || targetDocument === void 0 ? void 0 : targetDocument.defaultView;
  const setTimerFn = win ? win.setTimeout : setTimeoutNoop;
  const clearTimerFn = win ? win.clearTimeout : clearTimeoutNoop;
  return useBrowserTimer(setTimerFn, clearTimerFn);
}
const IS_REACT_19_OR_HIGHER = parseInt(reactExports.version, 10) >= 19;
function getReactElementRef(element) {
  if (!element) {
    return void 0;
  }
  if (IS_REACT_19_OR_HIGHER) {
    return element.props.ref;
  }
  return element.ref;
}
function mergeCallbacks(callback1, callback2) {
  return (...args) => {
    callback1 === null || callback1 === void 0 ? void 0 : callback1(...args);
    callback2 === null || callback2 === void 0 ? void 0 : callback2(...args);
  };
}
function isHTMLElement$2(element, options) {
  var _typedElement_ownerDocument;
  const typedElement = element;
  var _options_constructorName;
  return Boolean((typedElement === null || typedElement === void 0 ? void 0 : (_typedElement_ownerDocument = typedElement.ownerDocument) === null || _typedElement_ownerDocument === void 0 ? void 0 : _typedElement_ownerDocument.defaultView) && typedElement instanceof typedElement.ownerDocument.defaultView[(_options_constructorName = void 0) !== null && _options_constructorName !== void 0 ? _options_constructorName : "HTMLElement"]);
}
function isFluentTrigger(element) {
  return Boolean(element.type.isFluentTriggerComponent);
}
function applyTriggerPropsToChildren(children, triggerChildProps) {
  if (typeof children === "function") {
    return children(triggerChildProps);
  } else if (children) {
    return cloneTriggerTree(children, triggerChildProps);
  }
  return children || null;
}
function cloneTriggerTree(child, triggerProps) {
  if (!reactExports.isValidElement(child) || child.type === reactExports.Fragment) {
    throw new Error("A trigger element must be a single element for this component. Please ensure that you're not using React Fragments.");
  }
  if (isFluentTrigger(child)) {
    const grandchild = cloneTriggerTree(child.props.children, triggerProps);
    return reactExports.cloneElement(child, void 0, grandchild);
  } else {
    return reactExports.cloneElement(child, triggerProps);
  }
}
function getTriggerChild(children) {
  if (!reactExports.isValidElement(children)) {
    return null;
  }
  return isFluentTrigger(children) ? getTriggerChild(
    // FIXME: This casting should be unnecessary as isFluentTrigger is a guard type method,
    // but for some reason it's failing on build
    children.props.children
  ) : children;
}
function isVirtualElement(element) {
  return element && !!element._virtual;
}
function getVirtualParent(child) {
  return isVirtualElement(child) ? child._virtual.parent || null : null;
}
function getParent(child, options = {}) {
  if (!child) {
    return null;
  }
  if (!options.skipVirtual) {
    const virtualParent = getVirtualParent(child);
    if (virtualParent) {
      return virtualParent;
    }
  }
  const parent = child.parentNode;
  if (parent && parent.nodeType === 11) {
    return parent.host;
  }
  return parent;
}
function elementContains(parent, child) {
  if (!parent || !child) {
    return false;
  }
  if (parent === child) {
    return true;
  } else {
    const set = /* @__PURE__ */ new WeakSet();
    while (child) {
      const nextParent = getParent(child, {
        skipVirtual: set.has(child)
      });
      set.add(child);
      if (nextParent === parent) {
        return true;
      }
      child = nextParent;
    }
  }
  return false;
}
function setVirtualParent(child, parent) {
  if (!child) {
    return;
  }
  Object.assign(child, {
    _virtual: {
      parent
    }
  });
}
function createCompatSlotComponent(type, props) {
  return {
    ...props,
    [SLOT_ELEMENT_TYPE_SYMBOL]: type
  };
}
var reactIs_production_min = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b = 60103, c = 60106, d = 60107, e = 60108, f = 60114, g = 60109, h = 60110, k = 60112, l = 60113, m = 60120, n = 60115, p = 60116, q = 60121, r = 60122, u = 60117, v = 60129, w = 60131;
if ("function" === typeof Symbol && Symbol.for) {
  var x = Symbol.for;
  b = x("react.element");
  c = x("react.portal");
  d = x("react.fragment");
  e = x("react.strict_mode");
  f = x("react.profiler");
  g = x("react.provider");
  h = x("react.context");
  k = x("react.forward_ref");
  l = x("react.suspense");
  m = x("react.suspense_list");
  n = x("react.memo");
  p = x("react.lazy");
  q = x("react.block");
  r = x("react.server.block");
  u = x("react.fundamental");
  v = x("react.debug_trace_mode");
  w = x("react.legacy_hidden");
}
function y(a) {
  if ("object" === typeof a && null !== a) {
    var t = a.$$typeof;
    switch (t) {
      case b:
        switch (a = a.type, a) {
          case d:
          case f:
          case e:
          case l:
          case m:
            return a;
          default:
            switch (a = a && a.$$typeof, a) {
              case h:
              case k:
              case p:
              case n:
              case g:
                return a;
              default:
                return t;
            }
        }
      case c:
        return t;
    }
  }
}
var z = g, A = b, B = k, C = d, D = p, E = n, F = c, G = f, H = e, I = l;
reactIs_production_min.ContextConsumer = h;
reactIs_production_min.ContextProvider = z;
reactIs_production_min.Element = A;
reactIs_production_min.ForwardRef = B;
reactIs_production_min.Fragment = C;
reactIs_production_min.Lazy = D;
reactIs_production_min.Memo = E;
reactIs_production_min.Portal = F;
reactIs_production_min.Profiler = G;
reactIs_production_min.StrictMode = H;
reactIs_production_min.Suspense = I;
reactIs_production_min.isAsyncMode = function() {
  return false;
};
reactIs_production_min.isConcurrentMode = function() {
  return false;
};
reactIs_production_min.isContextConsumer = function(a) {
  return y(a) === h;
};
reactIs_production_min.isContextProvider = function(a) {
  return y(a) === g;
};
reactIs_production_min.isElement = function(a) {
  return "object" === typeof a && null !== a && a.$$typeof === b;
};
reactIs_production_min.isForwardRef = function(a) {
  return y(a) === k;
};
reactIs_production_min.isFragment = function(a) {
  return y(a) === d;
};
reactIs_production_min.isLazy = function(a) {
  return y(a) === p;
};
reactIs_production_min.isMemo = function(a) {
  return y(a) === n;
};
reactIs_production_min.isPortal = function(a) {
  return y(a) === c;
};
reactIs_production_min.isProfiler = function(a) {
  return y(a) === f;
};
reactIs_production_min.isStrictMode = function(a) {
  return y(a) === e;
};
reactIs_production_min.isSuspense = function(a) {
  return y(a) === l;
};
reactIs_production_min.isValidElementType = function(a) {
  return "string" === typeof a || "function" === typeof a || a === d || a === f || a === v || a === e || a === l || a === m || a === w || "object" === typeof a && null !== a && (a.$$typeof === p || a.$$typeof === n || a.$$typeof === g || a.$$typeof === h || a.$$typeof === k || a.$$typeof === u || a.$$typeof === q || a[0] === r) ? true : false;
};
reactIs_production_min.typeOf = y;
function createJSX(runtime, slotRuntime) {
  return function jsx2(type, overrideProps, key, source, self) {
    if (isSlot(overrideProps)) {
      return slotRuntime(createCompatSlotComponent(type, overrideProps), null, key, source, self);
    }
    if (isSlot(type)) {
      return slotRuntime(type, overrideProps, key, source, self);
    }
    return runtime(type, overrideProps, key, source, self);
  };
}
function getMetadataFromSlotComponent(type) {
  const { as, [SLOT_CLASS_NAME_PROP_SYMBOL]: _classNameProp, [SLOT_ELEMENT_TYPE_SYMBOL]: baseElementType, [SLOT_RENDER_FUNCTION_SYMBOL]: renderFunction, ...propsWithoutMetadata } = type;
  const props = propsWithoutMetadata;
  const elementType = typeof baseElementType === "string" ? as !== null && as !== void 0 ? as : baseElementType : baseElementType;
  if (typeof elementType !== "string" && as) {
    props.as = as;
  }
  return {
    elementType,
    props,
    renderFunction
  };
}
const Runtime = ReactRuntime;
const jsxSlot = (type, overrideProps, key) => {
  const { elementType, renderFunction, props: slotProps } = getMetadataFromSlotComponent(type);
  const props = {
    ...slotProps,
    ...overrideProps
  };
  if (renderFunction) {
    return Runtime.jsx(reactExports.Fragment, {
      children: renderFunction(elementType, props)
    }, key);
  }
  return Runtime.jsx(elementType, props, key);
};
const jsxsSlot = (type, overrideProps, key) => {
  const { elementType, renderFunction, props: slotProps } = getMetadataFromSlotComponent(type);
  const props = {
    ...slotProps,
    ...overrideProps
  };
  if (renderFunction) {
    return Runtime.jsx(reactExports.Fragment, {
      children: renderFunction(elementType, {
        ...props,
        children: Runtime.jsxs(reactExports.Fragment, {
          children: props.children
        }, void 0)
      })
    }, key);
  }
  return Runtime.jsxs(elementType, props, key);
};
const jsx = createJSX(Runtime.jsx, jsxSlot);
const jsxs = createJSX(Runtime.jsxs, jsxsSlot);
const IconDirectionContext = reactExports.createContext(void 0);
const IconDirectionContextDefaultValue = {};
const IconDirectionContextProvider = IconDirectionContext.Provider;
const useIconContext = () => {
  const context = reactExports.useContext(IconDirectionContext);
  return context !== null && context !== void 0 ? context : IconDirectionContextDefaultValue;
};
const renderFluentProvider_unstable = (state, contextValues) => {
  return /* @__PURE__ */ jsx(Provider, {
    value: contextValues.provider,
    children: /* @__PURE__ */ jsx(ThemeProvider, {
      value: contextValues.theme,
      children: /* @__PURE__ */ jsx(ThemeClassNameProvider, {
        value: contextValues.themeClassName,
        children: /* @__PURE__ */ jsx(CustomStyleHooksProvider, {
          value: contextValues.customStyleHooks_unstable,
          children: /* @__PURE__ */ jsx(TooltipVisibilityProvider, {
            value: contextValues.tooltip,
            children: /* @__PURE__ */ jsx(TextDirectionProvider, {
              dir: contextValues.textDirection,
              children: /* @__PURE__ */ jsx(IconDirectionContextProvider, {
                value: contextValues.iconDirection,
                children: /* @__PURE__ */ jsx(OverridesProvider, {
                  value: contextValues.overrides_unstable,
                  children: /* @__PURE__ */ jsxs(state.root, {
                    children: [
                      canUseDOM() ? null : /* @__PURE__ */ jsx("style", {
                        // Using dangerous HTML because react can escape characters
                        // which can lead to invalid CSS.
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML: {
                          __html: state.serverStyleProps.cssRule
                        },
                        ...state.serverStyleProps.attributes
                      }),
                      state.root.children
                    ]
                  })
                })
              })
            })
          })
        })
      })
    })
  });
};
var _canUseWeakRef = typeof WeakRef !== "undefined";
var WeakRefInstance = class {
  constructor(instance) {
    if (_canUseWeakRef && typeof instance === "object") {
      this._weakRef = new WeakRef(instance);
    } else {
      this._instance = instance;
    }
  }
  /**
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef/deref}
   */
  deref() {
    var _a, _b;
    let instance;
    if (this._weakRef) {
      instance = (_a = this._weakRef) == null ? void 0 : _a.deref();
      if (!instance) {
        delete this._weakRef;
      }
    } else {
      instance = this._instance;
      if ((_b = instance == null ? void 0 : instance.isDisposed) == null ? void 0 : _b.call(instance)) {
        delete this._instance;
      }
    }
    return instance;
  }
};
var KEYBORG_FOCUSIN = "keyborg:focusin";
var KEYBORG_FOCUSOUT = "keyborg:focusout";
function canOverrideNativeFocus(win) {
  const HTMLElement2 = win.HTMLElement;
  const origFocus = HTMLElement2.prototype.focus;
  let isCustomFocusCalled = false;
  HTMLElement2.prototype.focus = function focus() {
    isCustomFocusCalled = true;
  };
  const btn = win.document.createElement("button");
  btn.focus();
  HTMLElement2.prototype.focus = origFocus;
  return isCustomFocusCalled;
}
var _canOverrideNativeFocus = false;
function nativeFocus(element) {
  const focus = element.focus;
  if (focus.__keyborgNativeFocus) {
    focus.__keyborgNativeFocus.call(element);
  } else {
    element.focus();
  }
}
function setupFocusEvent(win) {
  const kwin = win;
  if (!_canOverrideNativeFocus) {
    _canOverrideNativeFocus = canOverrideNativeFocus(kwin);
  }
  const origFocus = kwin.HTMLElement.prototype.focus;
  if (origFocus.__keyborgNativeFocus) {
    return;
  }
  kwin.HTMLElement.prototype.focus = focus;
  const shadowTargets = /* @__PURE__ */ new Set();
  const focusOutHandler = (e2) => {
    const target = e2.target;
    if (!target) {
      return;
    }
    const event = new CustomEvent(KEYBORG_FOCUSOUT, {
      cancelable: true,
      bubbles: true,
      // Allows the event to bubble past an open shadow root
      composed: true,
      detail: {
        originalEvent: e2
      }
    });
    target.dispatchEvent(event);
  };
  const focusInHandler = (e2) => {
    const target = e2.target;
    if (!target) {
      return;
    }
    let node = e2.composedPath()[0];
    const currentShadows = /* @__PURE__ */ new Set();
    while (node) {
      if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
        currentShadows.add(node);
        node = node.host;
      } else {
        node = node.parentNode;
      }
    }
    for (const shadowRootWeakRef of shadowTargets) {
      const shadowRoot = shadowRootWeakRef.deref();
      if (!shadowRoot || !currentShadows.has(shadowRoot)) {
        shadowTargets.delete(shadowRootWeakRef);
        if (shadowRoot) {
          shadowRoot.removeEventListener("focusin", focusInHandler, true);
          shadowRoot.removeEventListener("focusout", focusOutHandler, true);
        }
      }
    }
    onFocusIn(target, e2.relatedTarget || void 0);
  };
  const onFocusIn = (target, relatedTarget, originalEvent) => {
    var _a;
    const shadowRoot = target.shadowRoot;
    if (shadowRoot) {
      for (const shadowRootWeakRef of shadowTargets) {
        if (shadowRootWeakRef.deref() === shadowRoot) {
          return;
        }
      }
      shadowRoot.addEventListener("focusin", focusInHandler, true);
      shadowRoot.addEventListener("focusout", focusOutHandler, true);
      shadowTargets.add(new WeakRefInstance(shadowRoot));
      return;
    }
    const details = {
      relatedTarget,
      originalEvent
    };
    const event = new CustomEvent(KEYBORG_FOCUSIN, {
      cancelable: true,
      bubbles: true,
      // Allows the event to bubble past an open shadow root
      composed: true,
      detail: details
    });
    event.details = details;
    if (_canOverrideNativeFocus || data.lastFocusedProgrammatically) {
      details.isFocusedProgrammatically = target === ((_a = data.lastFocusedProgrammatically) == null ? void 0 : _a.deref());
      data.lastFocusedProgrammatically = void 0;
    }
    target.dispatchEvent(event);
  };
  const data = kwin.__keyborgData = {
    focusInHandler,
    focusOutHandler,
    shadowTargets
  };
  kwin.document.addEventListener(
    "focusin",
    kwin.__keyborgData.focusInHandler,
    true
  );
  kwin.document.addEventListener(
    "focusout",
    kwin.__keyborgData.focusOutHandler,
    true
  );
  function focus() {
    const keyborgNativeFocusEvent = kwin.__keyborgData;
    if (keyborgNativeFocusEvent) {
      keyborgNativeFocusEvent.lastFocusedProgrammatically = new WeakRefInstance(
        this
      );
    }
    return origFocus.apply(this, arguments);
  }
  let activeElement = kwin.document.activeElement;
  while (activeElement && activeElement.shadowRoot) {
    onFocusIn(activeElement);
    activeElement = activeElement.shadowRoot.activeElement;
  }
  focus.__keyborgNativeFocus = origFocus;
}
function disposeFocusEvent(win) {
  const kwin = win;
  const proto = kwin.HTMLElement.prototype;
  const origFocus = proto.focus.__keyborgNativeFocus;
  const keyborgNativeFocusEvent = kwin.__keyborgData;
  if (keyborgNativeFocusEvent) {
    kwin.document.removeEventListener(
      "focusin",
      keyborgNativeFocusEvent.focusInHandler,
      true
    );
    kwin.document.removeEventListener(
      "focusout",
      keyborgNativeFocusEvent.focusOutHandler,
      true
    );
    for (const shadowRootWeakRef of keyborgNativeFocusEvent.shadowTargets) {
      const shadowRoot = shadowRootWeakRef.deref();
      if (shadowRoot) {
        shadowRoot.removeEventListener(
          "focusin",
          keyborgNativeFocusEvent.focusInHandler,
          true
        );
        shadowRoot.removeEventListener(
          "focusout",
          keyborgNativeFocusEvent.focusOutHandler,
          true
        );
      }
    }
    keyborgNativeFocusEvent.shadowTargets.clear();
    delete kwin.__keyborgData;
  }
  if (origFocus) {
    proto.focus = origFocus;
  }
}
var _dismissTimeout = 500;
var _lastId = 0;
var KeyborgCore = class {
  constructor(win, props) {
    this._isNavigatingWithKeyboard_DO_NOT_USE = false;
    this._onFocusIn = (e2) => {
      if (this._isMouseOrTouchUsedTimer) {
        return;
      }
      if (this.isNavigatingWithKeyboard) {
        return;
      }
      const details = e2.detail;
      if (!details.relatedTarget) {
        return;
      }
      if (details.isFocusedProgrammatically || details.isFocusedProgrammatically === void 0) {
        return;
      }
      this.isNavigatingWithKeyboard = true;
    };
    this._onMouseDown = (e2) => {
      if (e2.buttons === 0 || e2.clientX === 0 && e2.clientY === 0 && e2.screenX === 0 && e2.screenY === 0) {
        return;
      }
      this._onMouseOrTouch();
    };
    this._onMouseOrTouch = () => {
      const win2 = this._win;
      if (win2) {
        if (this._isMouseOrTouchUsedTimer) {
          win2.clearTimeout(this._isMouseOrTouchUsedTimer);
        }
        this._isMouseOrTouchUsedTimer = win2.setTimeout(() => {
          delete this._isMouseOrTouchUsedTimer;
        }, 1e3);
      }
      this.isNavigatingWithKeyboard = false;
    };
    this._onKeyDown = (e2) => {
      const isNavigatingWithKeyboard = this.isNavigatingWithKeyboard;
      if (isNavigatingWithKeyboard) {
        if (this._shouldDismissKeyboardNavigation(e2)) {
          this._scheduleDismiss();
        }
      } else {
        if (this._shouldTriggerKeyboardNavigation(e2)) {
          this.isNavigatingWithKeyboard = true;
        }
      }
    };
    this.id = "c" + ++_lastId;
    this._win = win;
    const doc = win.document;
    if (props) {
      const triggerKeys = props.triggerKeys;
      const dismissKeys = props.dismissKeys;
      if (triggerKeys == null ? void 0 : triggerKeys.length) {
        this._triggerKeys = new Set(triggerKeys);
      }
      if (dismissKeys == null ? void 0 : dismissKeys.length) {
        this._dismissKeys = new Set(dismissKeys);
      }
    }
    doc.addEventListener(KEYBORG_FOCUSIN, this._onFocusIn, true);
    doc.addEventListener("mousedown", this._onMouseDown, true);
    win.addEventListener("keydown", this._onKeyDown, true);
    doc.addEventListener("touchstart", this._onMouseOrTouch, true);
    doc.addEventListener("touchend", this._onMouseOrTouch, true);
    doc.addEventListener("touchcancel", this._onMouseOrTouch, true);
    setupFocusEvent(win);
  }
  get isNavigatingWithKeyboard() {
    return this._isNavigatingWithKeyboard_DO_NOT_USE;
  }
  set isNavigatingWithKeyboard(val) {
    if (this._isNavigatingWithKeyboard_DO_NOT_USE !== val) {
      this._isNavigatingWithKeyboard_DO_NOT_USE = val;
      this.update();
    }
  }
  dispose() {
    const win = this._win;
    if (win) {
      if (this._isMouseOrTouchUsedTimer) {
        win.clearTimeout(this._isMouseOrTouchUsedTimer);
        this._isMouseOrTouchUsedTimer = void 0;
      }
      if (this._dismissTimer) {
        win.clearTimeout(this._dismissTimer);
        this._dismissTimer = void 0;
      }
      disposeFocusEvent(win);
      const doc = win.document;
      doc.removeEventListener(KEYBORG_FOCUSIN, this._onFocusIn, true);
      doc.removeEventListener("mousedown", this._onMouseDown, true);
      win.removeEventListener("keydown", this._onKeyDown, true);
      doc.removeEventListener("touchstart", this._onMouseOrTouch, true);
      doc.removeEventListener("touchend", this._onMouseOrTouch, true);
      doc.removeEventListener("touchcancel", this._onMouseOrTouch, true);
      delete this._win;
    }
  }
  isDisposed() {
    return !!this._win;
  }
  /**
   * Updates all keyborg instances with the keyboard navigation state
   */
  update() {
    var _a, _b;
    const keyborgs = (_b = (_a = this._win) == null ? void 0 : _a.__keyborg) == null ? void 0 : _b.refs;
    if (keyborgs) {
      for (const id of Object.keys(keyborgs)) {
        Keyborg.update(keyborgs[id], this.isNavigatingWithKeyboard);
      }
    }
  }
  /**
   * @returns whether the keyboard event should trigger keyboard navigation mode
   */
  _shouldTriggerKeyboardNavigation(e2) {
    var _a;
    if (e2.key === "Tab") {
      return true;
    }
    const activeElement = (_a = this._win) == null ? void 0 : _a.document.activeElement;
    const isTriggerKey = !this._triggerKeys || this._triggerKeys.has(e2.keyCode);
    const isEditable = activeElement && (activeElement.tagName === "INPUT" || activeElement.tagName === "TEXTAREA" || activeElement.isContentEditable);
    return isTriggerKey && !isEditable;
  }
  /**
   * @returns whether the keyboard event should dismiss keyboard navigation mode
   */
  _shouldDismissKeyboardNavigation(e2) {
    var _a;
    return (_a = this._dismissKeys) == null ? void 0 : _a.has(e2.keyCode);
  }
  _scheduleDismiss() {
    const win = this._win;
    if (win) {
      if (this._dismissTimer) {
        win.clearTimeout(this._dismissTimer);
        this._dismissTimer = void 0;
      }
      const was = win.document.activeElement;
      this._dismissTimer = win.setTimeout(() => {
        this._dismissTimer = void 0;
        const cur = win.document.activeElement;
        if (was && cur && was === cur) {
          this.isNavigatingWithKeyboard = false;
        }
      }, _dismissTimeout);
    }
  }
};
var Keyborg = class _Keyborg {
  constructor(win, props) {
    this._cb = [];
    this._id = "k" + ++_lastId;
    this._win = win;
    const current = win.__keyborg;
    if (current) {
      this._core = current.core;
      current.refs[this._id] = this;
    } else {
      this._core = new KeyborgCore(win, props);
      win.__keyborg = {
        core: this._core,
        refs: { [this._id]: this }
      };
    }
  }
  static create(win, props) {
    return new _Keyborg(win, props);
  }
  static dispose(instance) {
    instance.dispose();
  }
  /**
   * Updates all subscribed callbacks with the keyboard navigation state
   */
  static update(instance, isNavigatingWithKeyboard) {
    instance._cb.forEach((callback) => callback(isNavigatingWithKeyboard));
  }
  dispose() {
    var _a;
    const current = (_a = this._win) == null ? void 0 : _a.__keyborg;
    if (current == null ? void 0 : current.refs[this._id]) {
      delete current.refs[this._id];
      if (Object.keys(current.refs).length === 0) {
        current.core.dispose();
        delete this._win.__keyborg;
      }
    }
    this._cb = [];
    delete this._core;
    delete this._win;
  }
  /**
   * @returns Whether the user is navigating with keyboard
   */
  isNavigatingWithKeyboard() {
    var _a;
    return !!((_a = this._core) == null ? void 0 : _a.isNavigatingWithKeyboard);
  }
  /**
   * @param callback - Called when the keyboard navigation state changes
   */
  subscribe(callback) {
    this._cb.push(callback);
  }
  /**
   * @param callback - Registered with subscribe
   */
  unsubscribe(callback) {
    const index = this._cb.indexOf(callback);
    if (index >= 0) {
      this._cb.splice(index, 1);
    }
  }
  /**
   * Manually set the keyboard navigtion state
   */
  setVal(isNavigatingWithKeyboard) {
    if (this._core) {
      this._core.isNavigatingWithKeyboard = isNavigatingWithKeyboard;
    }
  }
};
function createKeyborg(win, props) {
  return Keyborg.create(win, props);
}
function disposeKeyborg(instance) {
  Keyborg.dispose(instance);
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
const TABSTER_ATTRIBUTE_NAME = "data-tabster";
const TABSTER_DUMMY_INPUT_ATTRIBUTE_NAME = "data-tabster-dummy";
const FOCUSABLE_SELECTOR = /* @__PURE__ */ ["a[href]", "button:not([disabled])", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "*[tabindex]", "*[contenteditable]", "details > summary", "audio[controls]", "video[controls]"].join(", ");
const AsyncFocusSources = {
  EscapeGroupper: 1,
  Restorer: 2,
  Deloser: 3
};
const Visibilities = {
  Invisible: 0,
  PartiallyVisible: 1,
  Visible: 2
};
const RestorerTypes = {
  Source: 0,
  Target: 1
};
const MoverDirections = {
  Both: 0,
  // Default, both left/up keys move to the previous, right/down move to the next.
  Vertical: 1,
  // Only up/down arrows move to the next/previous.
  Horizontal: 2,
  // Only left/right arrows move to the next/previous.
  Grid: 3,
  // Two-dimentional movement depending on the visual placement.
  GridLinear: 4
  // Two-dimentional movement depending on the visual placement. Allows linear movement.
};
const MoverKeys = {
  ArrowUp: 1,
  ArrowDown: 2,
  ArrowLeft: 3,
  ArrowRight: 4,
  PageUp: 5,
  PageDown: 6,
  Home: 7,
  End: 8
};
const GroupperTabbabilities = {
  Unlimited: 0,
  Limited: 1,
  // The tabbability is limited to the container and explicit Enter is needed to go inside.
  LimitedTrapFocus: 2
  // The focus is limited as above, plus trapped when inside.
};
const GroupperMoveFocusActions = {
  Enter: 1
};
const SysDummyInputsPositions = {
  // Tabster will always place dummy inputs inside the container.
  Outside: 2
  // Tabster will always place dummy inputs outside of the container.
};
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
function getTabsterOnElement(tabster, element) {
  var _a;
  return (_a = tabster.storageEntry(element)) === null || _a === void 0 ? void 0 : _a.tabster;
}
function updateTabsterByAttribute(tabster, element, dispose) {
  var _a, _b;
  const newAttrValue = dispose || tabster._noop ? void 0 : element.getAttribute(TABSTER_ATTRIBUTE_NAME);
  let entry = tabster.storageEntry(element);
  let newAttr;
  if (newAttrValue) {
    if (newAttrValue !== ((_a = entry === null || entry === void 0 ? void 0 : entry.attr) === null || _a === void 0 ? void 0 : _a.string)) {
      try {
        const newValue = JSON.parse(newAttrValue);
        if (typeof newValue !== "object") {
          throw new Error(`Value is not a JSON object, got '${newAttrValue}'.`);
        }
        newAttr = {
          string: newAttrValue,
          object: newValue
        };
      } catch (e2) {
      }
    } else {
      return;
    }
  } else if (!entry) {
    return;
  }
  if (!entry) {
    entry = tabster.storageEntry(element, true);
  }
  if (!entry.tabster) {
    entry.tabster = {};
  }
  const tabsterOnElement = entry.tabster || {};
  const oldTabsterProps = ((_b = entry.attr) === null || _b === void 0 ? void 0 : _b.object) || {};
  const newTabsterProps = (newAttr === null || newAttr === void 0 ? void 0 : newAttr.object) || {};
  for (const key of Object.keys(oldTabsterProps)) {
    if (!newTabsterProps[key]) {
      if (key === "root") {
        const root = tabsterOnElement[key];
        if (root) {
          tabster.root.onRoot(root, true);
        }
      }
      switch (key) {
        case "deloser":
        case "root":
        case "groupper":
        case "modalizer":
        case "restorer":
        case "mover":
          const part = tabsterOnElement[key];
          if (part) {
            part.dispose();
            delete tabsterOnElement[key];
          }
          break;
        case "observed":
          delete tabsterOnElement[key];
          if (tabster.observedElement) {
            tabster.observedElement.onObservedElementUpdate(element);
          }
          break;
        case "focusable":
        case "outline":
        case "uncontrolled":
        case "sys":
          delete tabsterOnElement[key];
          break;
      }
    }
  }
  for (const key of Object.keys(newTabsterProps)) {
    const sys = newTabsterProps.sys;
    switch (key) {
      case "deloser":
        if (tabsterOnElement.deloser) {
          tabsterOnElement.deloser.setProps(newTabsterProps.deloser);
        } else {
          if (tabster.deloser) {
            tabsterOnElement.deloser = tabster.deloser.createDeloser(element, newTabsterProps.deloser);
          }
        }
        break;
      case "root":
        if (tabsterOnElement.root) {
          tabsterOnElement.root.setProps(newTabsterProps.root);
        } else {
          tabsterOnElement.root = tabster.root.createRoot(element, newTabsterProps.root, sys);
        }
        tabster.root.onRoot(tabsterOnElement.root);
        break;
      case "modalizer":
        if (tabsterOnElement.modalizer) {
          tabsterOnElement.modalizer.setProps(newTabsterProps.modalizer);
        } else {
          if (tabster.modalizer) {
            tabsterOnElement.modalizer = tabster.modalizer.createModalizer(element, newTabsterProps.modalizer, sys);
          }
        }
        break;
      case "restorer":
        if (tabsterOnElement.restorer) {
          tabsterOnElement.restorer.setProps(newTabsterProps.restorer);
        } else {
          if (tabster.restorer) {
            if (newTabsterProps.restorer) {
              tabsterOnElement.restorer = tabster.restorer.createRestorer(element, newTabsterProps.restorer);
            }
          }
        }
        break;
      case "focusable":
        tabsterOnElement.focusable = newTabsterProps.focusable;
        break;
      case "groupper":
        if (tabsterOnElement.groupper) {
          tabsterOnElement.groupper.setProps(newTabsterProps.groupper);
        } else {
          if (tabster.groupper) {
            tabsterOnElement.groupper = tabster.groupper.createGroupper(element, newTabsterProps.groupper, sys);
          }
        }
        break;
      case "mover":
        if (tabsterOnElement.mover) {
          tabsterOnElement.mover.setProps(newTabsterProps.mover);
        } else {
          if (tabster.mover) {
            tabsterOnElement.mover = tabster.mover.createMover(element, newTabsterProps.mover, sys);
          }
        }
        break;
      case "observed":
        if (tabster.observedElement) {
          tabsterOnElement.observed = newTabsterProps.observed;
          tabster.observedElement.onObservedElementUpdate(element);
        }
        break;
      case "uncontrolled":
        tabsterOnElement.uncontrolled = newTabsterProps.uncontrolled;
        break;
      case "outline":
        if (tabster.outline) {
          tabsterOnElement.outline = newTabsterProps.outline;
        }
        break;
      case "sys":
        tabsterOnElement.sys = newTabsterProps.sys;
        break;
      default:
        console.error(`Unknown key '${key}' in data-tabster attribute value.`);
    }
  }
  if (newAttr) {
    entry.attr = newAttr;
  } else {
    if (Object.keys(tabsterOnElement).length === 0) {
      delete entry.tabster;
      delete entry.attr;
    }
    tabster.storageEntry(element, false);
  }
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
const TabsterFocusInEventName = "tabster:focusin";
const TabsterFocusOutEventName = "tabster:focusout";
const TabsterMoveFocusEventName = "tabster:movefocus";
const ModalizerActiveEventName = "tabster:modalizer:active";
const ModalizerInactiveEventName = "tabster:modalizer:inactive";
const MoverStateEventName = "tabster:mover:state";
const MoverMoveFocusEventName = "tabster:mover:movefocus";
const MoverMemorizedElementEventName = "tabster:mover:memorized-element";
const GroupperMoveFocusEventName = "tabster:groupper:movefocus";
const RestorerRestoreFocusEventName = "tabster:restorer:restore-focus";
const RootFocusEventName = "tabster:root:focus";
const RootBlurEventName = "tabster:root:blur";
const CustomEvent_ = typeof CustomEvent !== "undefined" ? CustomEvent : function() {
};
class TabsterCustomEvent extends CustomEvent_ {
  constructor(type, detail) {
    super(type, {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail
    });
    this.details = detail;
  }
}
class TabsterFocusInEvent extends TabsterCustomEvent {
  constructor(detail) {
    super(TabsterFocusInEventName, detail);
  }
}
class TabsterFocusOutEvent extends TabsterCustomEvent {
  constructor(detail) {
    super(TabsterFocusOutEventName, detail);
  }
}
class TabsterMoveFocusEvent extends TabsterCustomEvent {
  constructor(detail) {
    super(TabsterMoveFocusEventName, detail);
  }
}
class MoverStateEvent extends TabsterCustomEvent {
  constructor(detail) {
    super(MoverStateEventName, detail);
  }
}
class ModalizerActiveEvent extends TabsterCustomEvent {
  constructor(detail) {
    super(ModalizerActiveEventName, detail);
  }
}
class ModalizerInactiveEvent extends TabsterCustomEvent {
  constructor(detail) {
    super(ModalizerInactiveEventName, detail);
  }
}
class RestorerRestoreFocusEvent extends TabsterCustomEvent {
  constructor() {
    super(RestorerRestoreFocusEventName);
  }
}
class RootFocusEvent extends TabsterCustomEvent {
  constructor(detail) {
    super(RootFocusEventName, detail);
  }
}
class RootBlurEvent extends TabsterCustomEvent {
  constructor(detail) {
    super(RootBlurEventName, detail);
  }
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
const _createMutationObserver = (callback) => new MutationObserver(callback);
const _createTreeWalker = (doc, root, whatToShow, filter) => doc.createTreeWalker(root, whatToShow, filter);
const _getParentNode = (node) => node ? node.parentNode : null;
const _getParentElement = (element) => element ? element.parentElement : null;
const _nodeContains = (parent, child) => !!(child && (parent === null || parent === void 0 ? void 0 : parent.contains(child)));
const _getActiveElement = (doc) => doc.activeElement;
const _querySelector = (element, selector) => element.querySelector(selector);
const _querySelectorAll = (element, selector) => Array.prototype.slice.call(element.querySelectorAll(selector), 0);
const _getElementById = (doc, id) => doc.getElementById(id);
const _getFirstChild = (node) => (node === null || node === void 0 ? void 0 : node.firstChild) || null;
const _getLastChild = (node) => (node === null || node === void 0 ? void 0 : node.lastChild) || null;
const _getNextSibling = (node) => (node === null || node === void 0 ? void 0 : node.nextSibling) || null;
const _getPreviousSibling = (node) => (node === null || node === void 0 ? void 0 : node.previousSibling) || null;
const _getFirstElementChild = (element) => (element === null || element === void 0 ? void 0 : element.firstElementChild) || null;
const _getLastElementChild = (element) => (element === null || element === void 0 ? void 0 : element.lastElementChild) || null;
const _getNextElementSibling = (element) => (element === null || element === void 0 ? void 0 : element.nextElementSibling) || null;
const _getPreviousElementSibling = (element) => (element === null || element === void 0 ? void 0 : element.previousElementSibling) || null;
const _appendChild = (parent, child) => parent.appendChild(child);
const _insertBefore = (parent, child, referenceChild) => parent.insertBefore(child, referenceChild);
const _getSelection = (ref) => {
  var _a;
  return ((_a = ref.ownerDocument) === null || _a === void 0 ? void 0 : _a.getSelection()) || null;
};
const _getElementsByName = (referenceElement, name) => referenceElement.ownerDocument.getElementsByName(name);
const dom = {
  createMutationObserver: _createMutationObserver,
  createTreeWalker: _createTreeWalker,
  getParentNode: _getParentNode,
  getParentElement: _getParentElement,
  nodeContains: _nodeContains,
  getActiveElement: _getActiveElement,
  querySelector: _querySelector,
  querySelectorAll: _querySelectorAll,
  getElementById: _getElementById,
  getFirstChild: _getFirstChild,
  getLastChild: _getLastChild,
  getNextSibling: _getNextSibling,
  getPreviousSibling: _getPreviousSibling,
  getFirstElementChild: _getFirstElementChild,
  getLastElementChild: _getLastElementChild,
  getNextElementSibling: _getNextElementSibling,
  getPreviousElementSibling: _getPreviousElementSibling,
  appendChild: _appendChild,
  insertBefore: _insertBefore,
  getSelection: _getSelection,
  getElementsByName: _getElementsByName
};
function setDOMAPI(domapi) {
  for (const key of Object.keys(domapi)) {
    dom[key] = domapi[key];
  }
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
let _isBrokenIE11;
const _DOMRect = typeof DOMRect !== "undefined" ? DOMRect : class {
  constructor(x, y2, width, height) {
    this.left = x || 0;
    this.top = y2 || 0;
    this.right = (x || 0) + (width || 0);
    this.bottom = (y2 || 0) + (height || 0);
  }
};
let _uidCounter = 0;
try {
  document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT);
  _isBrokenIE11 = false;
} catch (e2) {
  _isBrokenIE11 = true;
}
const _updateDummyInputsTimeout = 100;
function getInstanceContext(getWindow2) {
  const win = getWindow2();
  let ctx = win.__tabsterInstanceContext;
  if (!ctx) {
    ctx = {
      elementByUId: {},
      basics: {
        Promise: win.Promise || void 0,
        WeakRef: win.WeakRef || void 0
      },
      containerBoundingRectCache: {},
      lastContainerBoundingRectCacheId: 0,
      fakeWeakRefs: [],
      fakeWeakRefsStarted: false
    };
    win.__tabsterInstanceContext = ctx;
  }
  return ctx;
}
function disposeInstanceContext(win) {
  const ctx = win.__tabsterInstanceContext;
  if (ctx) {
    ctx.elementByUId = {};
    delete ctx.WeakRef;
    ctx.containerBoundingRectCache = {};
    if (ctx.containerBoundingRectCacheTimer) {
      win.clearTimeout(ctx.containerBoundingRectCacheTimer);
    }
    if (ctx.fakeWeakRefsTimer) {
      win.clearTimeout(ctx.fakeWeakRefsTimer);
    }
    ctx.fakeWeakRefs = [];
    delete win.__tabsterInstanceContext;
  }
}
function createWeakMap(win) {
  const ctx = win.__tabsterInstanceContext;
  return new ((ctx === null || ctx === void 0 ? void 0 : ctx.basics.WeakMap) || WeakMap)();
}
function hasSubFocusable(element) {
  return !!element.querySelector(FOCUSABLE_SELECTOR);
}
class FakeWeakRef {
  constructor(target) {
    this._target = target;
  }
  deref() {
    return this._target;
  }
  static cleanup(fwr, forceRemove) {
    if (!fwr._target) {
      return true;
    }
    if (forceRemove || !documentContains(fwr._target.ownerDocument, fwr._target)) {
      delete fwr._target;
      return true;
    }
    return false;
  }
}
class WeakHTMLElement {
  constructor(getWindow2, element, data) {
    const context = getInstanceContext(getWindow2);
    let ref;
    if (context.WeakRef) {
      ref = new context.WeakRef(element);
    } else {
      ref = new FakeWeakRef(element);
      context.fakeWeakRefs.push(ref);
    }
    this._ref = ref;
    this._data = data;
  }
  get() {
    const ref = this._ref;
    let element;
    if (ref) {
      element = ref.deref();
      if (!element) {
        delete this._ref;
      }
    }
    return element;
  }
  getData() {
    return this._data;
  }
}
function cleanupFakeWeakRefs(getWindow2, forceRemove) {
  const context = getInstanceContext(getWindow2);
  context.fakeWeakRefs = context.fakeWeakRefs.filter((e2) => !FakeWeakRef.cleanup(e2, forceRemove));
}
function startFakeWeakRefsCleanup(getWindow2) {
  const context = getInstanceContext(getWindow2);
  if (!context.fakeWeakRefsStarted) {
    context.fakeWeakRefsStarted = true;
    context.WeakRef = getWeakRef(context);
  }
  if (!context.fakeWeakRefsTimer) {
    context.fakeWeakRefsTimer = getWindow2().setTimeout(() => {
      context.fakeWeakRefsTimer = void 0;
      cleanupFakeWeakRefs(getWindow2);
      startFakeWeakRefsCleanup(getWindow2);
    }, 2 * 60 * 1e3);
  }
}
function stopFakeWeakRefsCleanupAndClearStorage(getWindow2) {
  const context = getInstanceContext(getWindow2);
  context.fakeWeakRefsStarted = false;
  if (context.fakeWeakRefsTimer) {
    getWindow2().clearTimeout(context.fakeWeakRefsTimer);
    context.fakeWeakRefsTimer = void 0;
    context.fakeWeakRefs = [];
  }
}
function createElementTreeWalker(doc, root, acceptNode) {
  if (root.nodeType !== Node.ELEMENT_NODE) {
    return void 0;
  }
  const filter = _isBrokenIE11 ? acceptNode : {
    acceptNode
  };
  return dom.createTreeWalker(
    doc,
    root,
    NodeFilter.SHOW_ELEMENT,
    filter,
    // @ts-ignore: We still don't want to completely break IE11, so, entityReferenceExpansion argument is not optional.
    false
    /* Last argument is not optional for IE11! */
  );
}
function getBoundingRect(getWindow2, element) {
  let cacheId = element.__tabsterCacheId;
  const context = getInstanceContext(getWindow2);
  const cached = cacheId ? context.containerBoundingRectCache[cacheId] : void 0;
  if (cached) {
    return cached.rect;
  }
  const scrollingElement = element.ownerDocument && element.ownerDocument.documentElement;
  if (!scrollingElement) {
    return new _DOMRect();
  }
  let left = 0;
  let top = 0;
  let right = scrollingElement.clientWidth;
  let bottom = scrollingElement.clientHeight;
  if (element !== scrollingElement) {
    const r2 = element.getBoundingClientRect();
    left = Math.max(left, r2.left);
    top = Math.max(top, r2.top);
    right = Math.min(right, r2.right);
    bottom = Math.min(bottom, r2.bottom);
  }
  const rect = new _DOMRect(left < right ? left : -1, top < bottom ? top : -1, left < right ? right - left : 0, top < bottom ? bottom - top : 0);
  if (!cacheId) {
    cacheId = "r-" + ++context.lastContainerBoundingRectCacheId;
    element.__tabsterCacheId = cacheId;
  }
  context.containerBoundingRectCache[cacheId] = {
    rect,
    element
  };
  if (!context.containerBoundingRectCacheTimer) {
    context.containerBoundingRectCacheTimer = window.setTimeout(() => {
      context.containerBoundingRectCacheTimer = void 0;
      for (const cId of Object.keys(context.containerBoundingRectCache)) {
        delete context.containerBoundingRectCache[cId].element.__tabsterCacheId;
      }
      context.containerBoundingRectCache = {};
    }, 50);
  }
  return rect;
}
function isElementVerticallyVisibleInContainer(getWindow2, element, tolerance) {
  const container = getScrollableContainer(element);
  if (!container) {
    return false;
  }
  const containerRect = getBoundingRect(getWindow2, container);
  const elementRect = element.getBoundingClientRect();
  const intersectionTolerance = elementRect.height * (1 - tolerance);
  const topIntersection = Math.max(0, containerRect.top - elementRect.top);
  const bottomIntersection = Math.max(0, elementRect.bottom - containerRect.bottom);
  const totalIntersection = topIntersection + bottomIntersection;
  return totalIntersection === 0 || totalIntersection <= intersectionTolerance;
}
function scrollIntoView(getWindow2, element, alignToTop) {
  const container = getScrollableContainer(element);
  if (container) {
    const containerRect = getBoundingRect(getWindow2, container);
    const elementRect = element.getBoundingClientRect();
    if (alignToTop) {
      container.scrollTop += elementRect.top - containerRect.top;
    } else {
      container.scrollTop += elementRect.bottom - containerRect.bottom;
    }
  }
}
function getScrollableContainer(element) {
  const doc = element.ownerDocument;
  if (doc) {
    for (let el = dom.getParentElement(element); el; el = dom.getParentElement(el)) {
      if (el.scrollWidth > el.clientWidth || el.scrollHeight > el.clientHeight) {
        return el;
      }
    }
    return doc.documentElement;
  }
  return null;
}
function makeFocusIgnored(element) {
  element.__shouldIgnoreFocus = true;
}
function shouldIgnoreFocus(element) {
  return !!element.__shouldIgnoreFocus;
}
function getUId(wnd) {
  const rnd = new Uint32Array(4);
  if (wnd.crypto && wnd.crypto.getRandomValues) {
    wnd.crypto.getRandomValues(rnd);
  } else if (wnd.msCrypto && wnd.msCrypto.getRandomValues) {
    wnd.msCrypto.getRandomValues(rnd);
  } else {
    for (let i = 0; i < rnd.length; i++) {
      rnd[i] = 4294967295 * Math.random();
    }
  }
  const srnd = [];
  for (let i = 0; i < rnd.length; i++) {
    srnd.push(rnd[i].toString(36));
  }
  srnd.push("|");
  srnd.push((++_uidCounter).toString(36));
  srnd.push("|");
  srnd.push(Date.now().toString(36));
  return srnd.join("");
}
function getElementUId(getWindow2, element) {
  const context = getInstanceContext(getWindow2);
  let uid = element.__tabsterElementUID;
  if (!uid) {
    uid = element.__tabsterElementUID = getUId(getWindow2());
  }
  if (!context.elementByUId[uid] && documentContains(element.ownerDocument, element)) {
    context.elementByUId[uid] = new WeakHTMLElement(getWindow2, element);
  }
  return uid;
}
function clearElementCache(getWindow2, parent) {
  const context = getInstanceContext(getWindow2);
  for (const key of Object.keys(context.elementByUId)) {
    const wel = context.elementByUId[key];
    const el = wel && wel.get();
    if (el && parent) {
      if (!dom.nodeContains(parent, el)) {
        continue;
      }
    }
    delete context.elementByUId[key];
  }
}
function documentContains(doc, element) {
  return dom.nodeContains(doc === null || doc === void 0 ? void 0 : doc.body, element);
}
function matchesSelector(element, selector) {
  const matches = element.matches || element.matchesSelector || element.msMatchesSelector || element.webkitMatchesSelector;
  return matches && matches.call(element, selector);
}
function getPromise(getWindow2) {
  const context = getInstanceContext(getWindow2);
  if (context.basics.Promise) {
    return context.basics.Promise;
  }
  throw new Error("No Promise defined.");
}
function getWeakRef(context) {
  return context.basics.WeakRef;
}
let _lastTabsterPartId = 0;
class TabsterPart {
  constructor(tabster, element, props) {
    const getWindow2 = tabster.getWindow;
    this._tabster = tabster;
    this._element = new WeakHTMLElement(getWindow2, element);
    this._props = {
      ...props
    };
    this.id = "i" + ++_lastTabsterPartId;
  }
  getElement() {
    return this._element.get();
  }
  getProps() {
    return this._props;
  }
  setProps(props) {
    this._props = {
      ...props
    };
  }
}
class DummyInput {
  constructor(getWindow2, isOutside, props, element, fixedTarget) {
    var _a;
    this._focusIn = (e2) => {
      if (this._fixedTarget) {
        const target = this._fixedTarget.get();
        if (target) {
          nativeFocus(target);
        }
        return;
      }
      const input2 = this.input;
      if (this.onFocusIn && input2) {
        const relatedTarget = e2.relatedTarget;
        this.onFocusIn(this, this._isBackward(true, input2, relatedTarget), relatedTarget);
      }
    };
    this._focusOut = (e2) => {
      if (this._fixedTarget) {
        return;
      }
      this.useDefaultAction = false;
      const input2 = this.input;
      if (this.onFocusOut && input2) {
        const relatedTarget = e2.relatedTarget;
        this.onFocusOut(this, this._isBackward(false, input2, relatedTarget), relatedTarget);
      }
    };
    const win = getWindow2();
    const input = win.document.createElement("i");
    input.tabIndex = 0;
    input.setAttribute("role", "none");
    input.setAttribute(TABSTER_DUMMY_INPUT_ATTRIBUTE_NAME, "");
    input.setAttribute("aria-hidden", "true");
    const style = input.style;
    style.position = "fixed";
    style.width = style.height = "1px";
    style.opacity = "0.001";
    style.zIndex = "-1";
    style.setProperty("content-visibility", "hidden");
    makeFocusIgnored(input);
    this.input = input;
    this.isFirst = props.isFirst;
    this.isOutside = isOutside;
    this._isPhantom = (_a = props.isPhantom) !== null && _a !== void 0 ? _a : false;
    this._fixedTarget = fixedTarget;
    input.addEventListener("focusin", this._focusIn);
    input.addEventListener("focusout", this._focusOut);
    input.__tabsterDummyContainer = element;
    if (this._isPhantom) {
      this._disposeTimer = win.setTimeout(() => {
        delete this._disposeTimer;
        this.dispose();
      }, 0);
      this._clearDisposeTimeout = () => {
        if (this._disposeTimer) {
          win.clearTimeout(this._disposeTimer);
          delete this._disposeTimer;
        }
        delete this._clearDisposeTimeout;
      };
    }
  }
  dispose() {
    var _a;
    if (this._clearDisposeTimeout) {
      this._clearDisposeTimeout();
    }
    const input = this.input;
    if (!input) {
      return;
    }
    delete this._fixedTarget;
    delete this.onFocusIn;
    delete this.onFocusOut;
    delete this.input;
    input.removeEventListener("focusin", this._focusIn);
    input.removeEventListener("focusout", this._focusOut);
    delete input.__tabsterDummyContainer;
    (_a = dom.getParentNode(input)) === null || _a === void 0 ? void 0 : _a.removeChild(input);
  }
  setTopLeft(top, left) {
    var _a;
    const style = (_a = this.input) === null || _a === void 0 ? void 0 : _a.style;
    if (style) {
      style.top = `${top}px`;
      style.left = `${left}px`;
    }
  }
  _isBackward(isIn, current, previous) {
    return isIn && !previous ? !this.isFirst : !!(previous && current.compareDocumentPosition(previous) & Node.DOCUMENT_POSITION_FOLLOWING);
  }
}
const DummyInputManagerPriorities = {
  Root: 1,
  Modalizer: 2,
  Mover: 3,
  Groupper: 4
};
class DummyInputManager {
  constructor(tabster, element, priority, sys, outsideByDefault, callForDefaultAction) {
    this._element = element;
    this._instance = new DummyInputManagerCore(tabster, element, this, priority, sys, outsideByDefault, callForDefaultAction);
  }
  _setHandlers(onFocusIn, onFocusOut) {
    this._onFocusIn = onFocusIn;
    this._onFocusOut = onFocusOut;
  }
  moveOut(backwards) {
    var _a;
    (_a = this._instance) === null || _a === void 0 ? void 0 : _a.moveOut(backwards);
  }
  moveOutWithDefaultAction(backwards, relatedEvent) {
    var _a;
    (_a = this._instance) === null || _a === void 0 ? void 0 : _a.moveOutWithDefaultAction(backwards, relatedEvent);
  }
  getHandler(isIn) {
    return isIn ? this._onFocusIn : this._onFocusOut;
  }
  setTabbable(tabbable) {
    var _a;
    (_a = this._instance) === null || _a === void 0 ? void 0 : _a.setTabbable(this, tabbable);
  }
  dispose() {
    if (this._instance) {
      this._instance.dispose(this);
      delete this._instance;
    }
    delete this._onFocusIn;
    delete this._onFocusOut;
  }
  static moveWithPhantomDummy(tabster, element, moveOutOfElement, isBackward, relatedEvent) {
    const dummy = new DummyInput(tabster.getWindow, true, {
      isPhantom: true,
      isFirst: true
    });
    const input = dummy.input;
    if (input) {
      let parent;
      let insertBefore2;
      if (element.tagName === "BODY") {
        parent = element;
        insertBefore2 = moveOutOfElement && isBackward || !moveOutOfElement && !isBackward ? dom.getFirstElementChild(element) : null;
      } else {
        if (moveOutOfElement && (!isBackward || isBackward && !tabster.focusable.isFocusable(element, false, true, true))) {
          parent = element;
          insertBefore2 = isBackward ? element.firstElementChild : null;
        } else {
          parent = dom.getParentElement(element);
          insertBefore2 = moveOutOfElement && isBackward || !moveOutOfElement && !isBackward ? element : dom.getNextElementSibling(element);
        }
        let potentialDummy;
        let dummyFor;
        do {
          potentialDummy = moveOutOfElement && isBackward || !moveOutOfElement && !isBackward ? dom.getPreviousElementSibling(insertBefore2) : insertBefore2;
          dummyFor = getDummyInputContainer(potentialDummy);
          if (dummyFor === element) {
            insertBefore2 = moveOutOfElement && isBackward || !moveOutOfElement && !isBackward ? potentialDummy : dom.getNextElementSibling(potentialDummy);
          } else {
            dummyFor = null;
          }
        } while (dummyFor);
      }
      if (parent === null || parent === void 0 ? void 0 : parent.dispatchEvent(new TabsterMoveFocusEvent({
        by: "root",
        owner: parent,
        next: null,
        relatedEvent
      }))) {
        dom.insertBefore(parent, input, insertBefore2);
        nativeFocus(input);
      }
    }
  }
  static addPhantomDummyWithTarget(tabster, sourceElement, isBackward, targetElement) {
    const dummy = new DummyInput(tabster.getWindow, true, {
      isPhantom: true,
      isFirst: true
    }, void 0, new WeakHTMLElement(tabster.getWindow, targetElement));
    const input = dummy.input;
    if (input) {
      let dummyParent;
      let insertBefore2;
      if (hasSubFocusable(sourceElement) && !isBackward) {
        dummyParent = sourceElement;
        insertBefore2 = dom.getFirstElementChild(sourceElement);
      } else {
        dummyParent = dom.getParentElement(sourceElement);
        insertBefore2 = isBackward ? sourceElement : dom.getNextElementSibling(sourceElement);
      }
      if (dummyParent) {
        dom.insertBefore(dummyParent, input, insertBefore2);
      }
    }
  }
}
class DummyInputObserver {
  constructor(win) {
    this._updateQueue = /* @__PURE__ */ new Set();
    this._lastUpdateQueueTime = 0;
    this._changedParents = /* @__PURE__ */ new WeakSet();
    this._dummyElements = [];
    this._dummyCallbacks = /* @__PURE__ */ new WeakMap();
    this._domChanged = (parent) => {
      var _a;
      if (this._changedParents.has(parent)) {
        return;
      }
      this._changedParents.add(parent);
      if (this._updateDummyInputsTimer) {
        return;
      }
      this._updateDummyInputsTimer = (_a = this._win) === null || _a === void 0 ? void 0 : _a.call(this).setTimeout(() => {
        delete this._updateDummyInputsTimer;
        for (const ref of this._dummyElements) {
          const dummyElement = ref.get();
          if (dummyElement) {
            const callback = this._dummyCallbacks.get(dummyElement);
            if (callback) {
              const dummyParent = dom.getParentNode(dummyElement);
              if (!dummyParent || this._changedParents.has(dummyParent)) {
                callback();
              }
            }
          }
        }
        this._changedParents = /* @__PURE__ */ new WeakSet();
      }, _updateDummyInputsTimeout);
    };
    this._win = win;
  }
  add(dummy, callback) {
    if (!this._dummyCallbacks.has(dummy) && this._win) {
      this._dummyElements.push(new WeakHTMLElement(this._win, dummy));
      this._dummyCallbacks.set(dummy, callback);
      this.domChanged = this._domChanged;
    }
  }
  remove(dummy) {
    this._dummyElements = this._dummyElements.filter((ref) => {
      const element = ref.get();
      return element && element !== dummy;
    });
    this._dummyCallbacks.delete(dummy);
    if (this._dummyElements.length === 0) {
      delete this.domChanged;
    }
  }
  dispose() {
    var _a;
    const win = (_a = this._win) === null || _a === void 0 ? void 0 : _a.call(this);
    if (this._updateTimer) {
      win === null || win === void 0 ? void 0 : win.clearTimeout(this._updateTimer);
      delete this._updateTimer;
    }
    if (this._updateDummyInputsTimer) {
      win === null || win === void 0 ? void 0 : win.clearTimeout(this._updateDummyInputsTimer);
      delete this._updateDummyInputsTimer;
    }
    this._changedParents = /* @__PURE__ */ new WeakSet();
    this._dummyCallbacks = /* @__PURE__ */ new WeakMap();
    this._dummyElements = [];
    this._updateQueue.clear();
    delete this.domChanged;
    delete this._win;
  }
  updatePositions(compute) {
    if (!this._win) {
      return;
    }
    this._updateQueue.add(compute);
    this._lastUpdateQueueTime = Date.now();
    this._scheduledUpdatePositions();
  }
  _scheduledUpdatePositions() {
    var _a;
    if (this._updateTimer) {
      return;
    }
    this._updateTimer = (_a = this._win) === null || _a === void 0 ? void 0 : _a.call(this).setTimeout(() => {
      delete this._updateTimer;
      if (this._lastUpdateQueueTime + _updateDummyInputsTimeout <= Date.now()) {
        const scrollTopLeftCache = /* @__PURE__ */ new Map();
        const setTopLeftCallbacks = [];
        for (const compute of this._updateQueue) {
          setTopLeftCallbacks.push(compute(scrollTopLeftCache));
        }
        this._updateQueue.clear();
        for (const setTopLeft of setTopLeftCallbacks) {
          setTopLeft();
        }
        scrollTopLeftCache.clear();
      } else {
        this._scheduledUpdatePositions();
      }
    }, _updateDummyInputsTimeout);
  }
}
class DummyInputManagerCore {
  constructor(tabster, element, manager, priority, sys, outsideByDefault, callForDefaultAction) {
    this._wrappers = [];
    this._isOutside = false;
    this._transformElements = /* @__PURE__ */ new Set();
    this._onFocusIn = (dummyInput, isBackward, relatedTarget) => {
      this._onFocus(true, dummyInput, isBackward, relatedTarget);
    };
    this._onFocusOut = (dummyInput, isBackward, relatedTarget) => {
      this._onFocus(false, dummyInput, isBackward, relatedTarget);
    };
    this.moveOut = (backwards) => {
      var _a;
      const first = this._firstDummy;
      const last = this._lastDummy;
      if (first && last) {
        this._ensurePosition();
        const firstInput = first.input;
        const lastInput = last.input;
        const element2 = (_a = this._element) === null || _a === void 0 ? void 0 : _a.get();
        if (firstInput && lastInput && element2) {
          let toFocus;
          if (backwards) {
            firstInput.tabIndex = 0;
            toFocus = firstInput;
          } else {
            lastInput.tabIndex = 0;
            toFocus = lastInput;
          }
          if (toFocus) {
            nativeFocus(toFocus);
          }
        }
      }
    };
    this.moveOutWithDefaultAction = (backwards, relatedEvent) => {
      var _a;
      const first = this._firstDummy;
      const last = this._lastDummy;
      if (first && last) {
        this._ensurePosition();
        const firstInput = first.input;
        const lastInput = last.input;
        const element2 = (_a = this._element) === null || _a === void 0 ? void 0 : _a.get();
        if (firstInput && lastInput && element2) {
          let toFocus;
          if (backwards) {
            if (!first.isOutside && this._tabster.focusable.isFocusable(element2, true, true, true)) {
              toFocus = element2;
            } else {
              first.useDefaultAction = true;
              firstInput.tabIndex = 0;
              toFocus = firstInput;
            }
          } else {
            last.useDefaultAction = true;
            lastInput.tabIndex = 0;
            toFocus = lastInput;
          }
          if (toFocus && element2.dispatchEvent(new TabsterMoveFocusEvent({
            by: "root",
            owner: element2,
            next: null,
            relatedEvent
          }))) {
            nativeFocus(toFocus);
          }
        }
      }
    };
    this.setTabbable = (manager2, tabbable) => {
      var _a, _b;
      for (const w2 of this._wrappers) {
        if (w2.manager === manager2) {
          w2.tabbable = tabbable;
          break;
        }
      }
      const wrapper = this._getCurrent();
      if (wrapper) {
        const tabIndex = wrapper.tabbable ? 0 : -1;
        let input = (_a = this._firstDummy) === null || _a === void 0 ? void 0 : _a.input;
        if (input) {
          input.tabIndex = tabIndex;
        }
        input = (_b = this._lastDummy) === null || _b === void 0 ? void 0 : _b.input;
        if (input) {
          input.tabIndex = tabIndex;
        }
      }
    };
    this._addDummyInputs = () => {
      if (this._addTimer) {
        return;
      }
      this._addTimer = this._getWindow().setTimeout(() => {
        delete this._addTimer;
        this._ensurePosition();
        this._addTransformOffsets();
      }, 0);
    };
    this._addTransformOffsets = () => {
      this._tabster._dummyObserver.updatePositions(this._computeTransformOffsets);
    };
    this._computeTransformOffsets = (scrollTopLeftCache) => {
      var _a, _b;
      const from = ((_a = this._firstDummy) === null || _a === void 0 ? void 0 : _a.input) || ((_b = this._lastDummy) === null || _b === void 0 ? void 0 : _b.input);
      const transformElements = this._transformElements;
      const newTransformElements = /* @__PURE__ */ new Set();
      let scrollTop = 0;
      let scrollLeft = 0;
      const win = this._getWindow();
      for (let element2 = from; element2 && element2.nodeType === Node.ELEMENT_NODE; element2 = dom.getParentElement(element2)) {
        let scrollTopLeft = scrollTopLeftCache.get(element2);
        if (scrollTopLeft === void 0) {
          const transform = win.getComputedStyle(element2).transform;
          if (transform && transform !== "none") {
            scrollTopLeft = {
              scrollTop: element2.scrollTop,
              scrollLeft: element2.scrollLeft
            };
          }
          scrollTopLeftCache.set(element2, scrollTopLeft || null);
        }
        if (scrollTopLeft) {
          newTransformElements.add(element2);
          if (!transformElements.has(element2)) {
            element2.addEventListener("scroll", this._addTransformOffsets);
          }
          scrollTop += scrollTopLeft.scrollTop;
          scrollLeft += scrollTopLeft.scrollLeft;
        }
      }
      for (const el2 of transformElements) {
        if (!newTransformElements.has(el2)) {
          el2.removeEventListener("scroll", this._addTransformOffsets);
        }
      }
      this._transformElements = newTransformElements;
      return () => {
        var _a2, _b2;
        (_a2 = this._firstDummy) === null || _a2 === void 0 ? void 0 : _a2.setTopLeft(scrollTop, scrollLeft);
        (_b2 = this._lastDummy) === null || _b2 === void 0 ? void 0 : _b2.setTopLeft(scrollTop, scrollLeft);
      };
    };
    const el = element.get();
    if (!el) {
      throw new Error("No element");
    }
    this._tabster = tabster;
    this._getWindow = tabster.getWindow;
    this._callForDefaultAction = callForDefaultAction;
    const instance = el.__tabsterDummy;
    (instance || this)._wrappers.push({
      manager,
      priority,
      tabbable: true
    });
    if (instance) {
      return instance;
    }
    el.__tabsterDummy = this;
    const forcedDummyPosition = sys === null || sys === void 0 ? void 0 : sys.dummyInputsPosition;
    const tagName = el.tagName;
    this._isOutside = !forcedDummyPosition ? (outsideByDefault || tagName === "UL" || tagName === "OL" || tagName === "TABLE") && !(tagName === "LI" || tagName === "TD" || tagName === "TH") : forcedDummyPosition === SysDummyInputsPositions.Outside;
    this._firstDummy = new DummyInput(this._getWindow, this._isOutside, {
      isFirst: true
    }, element);
    this._lastDummy = new DummyInput(this._getWindow, this._isOutside, {
      isFirst: false
    }, element);
    const dummyElement = this._firstDummy.input;
    dummyElement && tabster._dummyObserver.add(dummyElement, this._addDummyInputs);
    this._firstDummy.onFocusIn = this._onFocusIn;
    this._firstDummy.onFocusOut = this._onFocusOut;
    this._lastDummy.onFocusIn = this._onFocusIn;
    this._lastDummy.onFocusOut = this._onFocusOut;
    this._element = element;
    this._addDummyInputs();
  }
  dispose(manager, force) {
    var _a, _b, _c, _d;
    const wrappers = this._wrappers = this._wrappers.filter((w2) => w2.manager !== manager && !force);
    if (wrappers.length === 0) {
      delete ((_a = this._element) === null || _a === void 0 ? void 0 : _a.get()).__tabsterDummy;
      for (const el of this._transformElements) {
        el.removeEventListener("scroll", this._addTransformOffsets);
      }
      this._transformElements.clear();
      const win = this._getWindow();
      if (this._addTimer) {
        win.clearTimeout(this._addTimer);
        delete this._addTimer;
      }
      const dummyElement = (_b = this._firstDummy) === null || _b === void 0 ? void 0 : _b.input;
      dummyElement && this._tabster._dummyObserver.remove(dummyElement);
      (_c = this._firstDummy) === null || _c === void 0 ? void 0 : _c.dispose();
      (_d = this._lastDummy) === null || _d === void 0 ? void 0 : _d.dispose();
    }
  }
  _onFocus(isIn, dummyInput, isBackward, relatedTarget) {
    var _a;
    const wrapper = this._getCurrent();
    if (wrapper && (!dummyInput.useDefaultAction || this._callForDefaultAction)) {
      (_a = wrapper.manager.getHandler(isIn)) === null || _a === void 0 ? void 0 : _a(dummyInput, isBackward, relatedTarget);
    }
  }
  _getCurrent() {
    this._wrappers.sort((a, b2) => {
      if (a.tabbable !== b2.tabbable) {
        return a.tabbable ? -1 : 1;
      }
      return a.priority - b2.priority;
    });
    return this._wrappers[0];
  }
  _ensurePosition() {
    var _a, _b, _c;
    const element = (_a = this._element) === null || _a === void 0 ? void 0 : _a.get();
    const firstDummyInput = (_b = this._firstDummy) === null || _b === void 0 ? void 0 : _b.input;
    const lastDummyInput = (_c = this._lastDummy) === null || _c === void 0 ? void 0 : _c.input;
    if (!element || !firstDummyInput || !lastDummyInput) {
      return;
    }
    if (this._isOutside) {
      const elementParent = dom.getParentNode(element);
      if (elementParent) {
        const nextSibling = dom.getNextSibling(element);
        if (nextSibling !== lastDummyInput) {
          dom.insertBefore(elementParent, lastDummyInput, nextSibling);
        }
        if (dom.getPreviousElementSibling(element) !== firstDummyInput) {
          dom.insertBefore(elementParent, firstDummyInput, element);
        }
      }
    } else {
      if (dom.getLastElementChild(element) !== lastDummyInput) {
        dom.appendChild(element, lastDummyInput);
      }
      const firstElementChild = dom.getFirstElementChild(element);
      if (firstElementChild && firstElementChild !== firstDummyInput && firstElementChild.parentNode) {
        dom.insertBefore(firstElementChild.parentNode, firstDummyInput, firstElementChild);
      }
    }
  }
}
function getLastChild$2(container) {
  let lastChild = null;
  for (let i = dom.getLastElementChild(container); i; i = dom.getLastElementChild(i)) {
    lastChild = i;
  }
  return lastChild || void 0;
}
function getAdjacentElement(from, prev) {
  let cur = from;
  let adjacent = null;
  while (cur && !adjacent) {
    adjacent = prev ? dom.getPreviousElementSibling(cur) : dom.getNextElementSibling(cur);
    cur = dom.getParentElement(cur);
  }
  return adjacent || void 0;
}
function augmentAttribute(tabster, element, name, value) {
  const entry = tabster.storageEntry(element, true);
  let ret = false;
  if (!entry.aug) {
    if (value === void 0) {
      return ret;
    }
    entry.aug = {};
  }
  if (value === void 0) {
    if (name in entry.aug) {
      const origVal = entry.aug[name];
      delete entry.aug[name];
      if (origVal === null) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, origVal);
      }
      ret = true;
    }
  } else {
    let origValue;
    if (!(name in entry.aug)) {
      origValue = element.getAttribute(name);
    }
    if (origValue !== void 0 && origValue !== value) {
      entry.aug[name] = origValue;
      if (value === null) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value);
      }
      ret = true;
    }
  }
  if (value === void 0 && Object.keys(entry.aug).length === 0) {
    delete entry.aug;
    tabster.storageEntry(element, false);
  }
  return ret;
}
function isDisplayNone(element) {
  var _a, _b;
  const elementDocument = element.ownerDocument;
  const computedStyle = (_a = elementDocument.defaultView) === null || _a === void 0 ? void 0 : _a.getComputedStyle(element);
  if (element.offsetParent === null && elementDocument.body !== element && (computedStyle === null || computedStyle === void 0 ? void 0 : computedStyle.position) !== "fixed") {
    return true;
  }
  if ((computedStyle === null || computedStyle === void 0 ? void 0 : computedStyle.visibility) === "hidden") {
    return true;
  }
  if ((computedStyle === null || computedStyle === void 0 ? void 0 : computedStyle.position) === "fixed") {
    if (computedStyle.display === "none") {
      return true;
    }
    if (((_b = element.parentElement) === null || _b === void 0 ? void 0 : _b.offsetParent) === null && elementDocument.body !== element.parentElement) {
      return true;
    }
  }
  return false;
}
function isRadio(element) {
  return element.tagName === "INPUT" && !!element.name && element.type === "radio";
}
function getRadioButtonGroup(element) {
  if (!isRadio(element)) {
    return;
  }
  const name = element.name;
  let radioButtons = Array.from(dom.getElementsByName(element, name));
  let checked;
  radioButtons = radioButtons.filter((el) => {
    if (isRadio(el)) {
      if (el.checked) {
        checked = el;
      }
      return true;
    }
    return false;
  });
  return {
    name,
    buttons: new Set(radioButtons),
    checked
  };
}
function getDummyInputContainer(element) {
  var _a;
  return ((_a = element === null || element === void 0 ? void 0 : element.__tabsterDummyContainer) === null || _a === void 0 ? void 0 : _a.get()) || null;
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
function getTabsterAttribute(props, plain) {
  const attr = JSON.stringify(props);
  if (plain === true) {
    return attr;
  }
  return {
    [TABSTER_ATTRIBUTE_NAME]: attr
  };
}
function mergeTabsterProps(props, newProps) {
  for (const key of Object.keys(newProps)) {
    const value = newProps[key];
    if (value) {
      props[key] = value;
    } else {
      delete props[key];
    }
  }
}
function setTabsterAttribute(element, newProps, update) {
  let props;
  {
    const attr = element.getAttribute(TABSTER_ATTRIBUTE_NAME);
    if (attr) {
      try {
        props = JSON.parse(attr);
      } catch (e2) {
      }
    }
  }
  if (!props) {
    props = {};
  }
  mergeTabsterProps(props, newProps);
  if (Object.keys(props).length > 0) {
    element.setAttribute(TABSTER_ATTRIBUTE_NAME, getTabsterAttribute(props, true));
  } else {
    element.removeAttribute(TABSTER_ATTRIBUTE_NAME);
  }
}
class RootDummyManager extends DummyInputManager {
  constructor(tabster, element, setFocused, sys) {
    super(tabster, element, DummyInputManagerPriorities.Root, sys, void 0, true);
    this._onDummyInputFocus = (dummyInput) => {
      var _a;
      if (dummyInput.useDefaultAction) {
        this._setFocused(false);
      } else {
        this._tabster.keyboardNavigation.setNavigatingWithKeyboard(true);
        const element2 = this._element.get();
        if (element2) {
          this._setFocused(true);
          const toFocus = this._tabster.focusedElement.getFirstOrLastTabbable(dummyInput.isFirst, {
            container: element2,
            ignoreAccessibility: true
          });
          if (toFocus) {
            nativeFocus(toFocus);
            return;
          }
        }
        (_a = dummyInput.input) === null || _a === void 0 ? void 0 : _a.blur();
      }
    };
    this._setHandlers(this._onDummyInputFocus);
    this._tabster = tabster;
    this._setFocused = setFocused;
  }
}
class Root extends TabsterPart {
  constructor(tabster, element, onDispose, props, sys) {
    super(tabster, element, props);
    this._isFocused = false;
    this._setFocused = (hasFocused) => {
      var _a;
      if (this._setFocusedTimer) {
        this._tabster.getWindow().clearTimeout(this._setFocusedTimer);
        delete this._setFocusedTimer;
      }
      if (this._isFocused === hasFocused) {
        return;
      }
      const element2 = this._element.get();
      if (element2) {
        if (hasFocused) {
          this._isFocused = true;
          (_a = this._dummyManager) === null || _a === void 0 ? void 0 : _a.setTabbable(false);
          element2.dispatchEvent(new RootFocusEvent({
            element: element2
          }));
        } else {
          this._setFocusedTimer = this._tabster.getWindow().setTimeout(() => {
            var _a2;
            delete this._setFocusedTimer;
            this._isFocused = false;
            (_a2 = this._dummyManager) === null || _a2 === void 0 ? void 0 : _a2.setTabbable(true);
            element2.dispatchEvent(new RootBlurEvent({
              element: element2
            }));
          }, 0);
        }
      }
    };
    this._onFocusIn = (event) => {
      const getParent2 = this._tabster.getParent;
      const rootElement = this._element.get();
      let curElement = event.composedPath()[0];
      do {
        if (curElement === rootElement) {
          this._setFocused(true);
          return;
        }
        curElement = curElement && getParent2(curElement);
      } while (curElement);
    };
    this._onFocusOut = () => {
      this._setFocused(false);
    };
    this._onDispose = onDispose;
    const win = tabster.getWindow;
    this.uid = getElementUId(win, element);
    this._sys = sys;
    if (tabster.controlTab || tabster.rootDummyInputs) {
      this.addDummyInputs();
    }
    const w2 = win();
    const doc = w2.document;
    doc.addEventListener(KEYBORG_FOCUSIN, this._onFocusIn);
    doc.addEventListener(KEYBORG_FOCUSOUT, this._onFocusOut);
    this._add();
  }
  addDummyInputs() {
    if (!this._dummyManager) {
      this._dummyManager = new RootDummyManager(this._tabster, this._element, this._setFocused, this._sys);
    }
  }
  dispose() {
    var _a;
    this._onDispose(this);
    const win = this._tabster.getWindow();
    const doc = win.document;
    doc.removeEventListener(KEYBORG_FOCUSIN, this._onFocusIn);
    doc.removeEventListener(KEYBORG_FOCUSOUT, this._onFocusOut);
    if (this._setFocusedTimer) {
      win.clearTimeout(this._setFocusedTimer);
      delete this._setFocusedTimer;
    }
    (_a = this._dummyManager) === null || _a === void 0 ? void 0 : _a.dispose();
    this._remove();
  }
  moveOutWithDefaultAction(isBackward, relatedEvent) {
    const dummyManager = this._dummyManager;
    if (dummyManager) {
      dummyManager.moveOutWithDefaultAction(isBackward, relatedEvent);
    } else {
      const el = this.getElement();
      if (el) {
        RootDummyManager.moveWithPhantomDummy(this._tabster, el, true, isBackward, relatedEvent);
      }
    }
  }
  _add() {
  }
  _remove() {
  }
}
class RootAPI {
  constructor(tabster, autoRoot) {
    this._autoRootWaiting = false;
    this._roots = {};
    this._forceDummy = false;
    this.rootById = {};
    this._autoRootCreate = () => {
      var _a;
      const doc = this._win().document;
      const body = doc.body;
      if (body) {
        this._autoRootUnwait(doc);
        const props = this._autoRoot;
        if (props) {
          setTabsterAttribute(body, {
            root: props
          });
          updateTabsterByAttribute(this._tabster, body);
          return (_a = getTabsterOnElement(this._tabster, body)) === null || _a === void 0 ? void 0 : _a.root;
        }
      } else if (!this._autoRootWaiting) {
        this._autoRootWaiting = true;
        doc.addEventListener("readystatechange", this._autoRootCreate);
      }
      return void 0;
    };
    this._onRootDispose = (root) => {
      delete this._roots[root.id];
    };
    this._tabster = tabster;
    this._win = tabster.getWindow;
    this._autoRoot = autoRoot;
    tabster.queueInit(() => {
      if (this._autoRoot) {
        this._autoRootCreate();
      }
    });
  }
  _autoRootUnwait(doc) {
    doc.removeEventListener("readystatechange", this._autoRootCreate);
    this._autoRootWaiting = false;
  }
  dispose() {
    const win = this._win();
    this._autoRootUnwait(win.document);
    delete this._autoRoot;
    Object.keys(this._roots).forEach((rootId) => {
      if (this._roots[rootId]) {
        this._roots[rootId].dispose();
        delete this._roots[rootId];
      }
    });
    this.rootById = {};
  }
  createRoot(element, props, sys) {
    const newRoot = new Root(this._tabster, element, this._onRootDispose, props, sys);
    this._roots[newRoot.id] = newRoot;
    if (this._forceDummy) {
      newRoot.addDummyInputs();
    }
    return newRoot;
  }
  addDummyInputs() {
    this._forceDummy = true;
    const roots = this._roots;
    for (const id of Object.keys(roots)) {
      roots[id].addDummyInputs();
    }
  }
  static getRootByUId(getWindow2, id) {
    const tabster = getWindow2().__tabsterInstance;
    return tabster && tabster.root.rootById[id];
  }
  /**
   * Fetches the tabster context for an element walking up its ancestors
   *
   * @param tabster Tabster instance
   * @param element The element the tabster context should represent
   * @param options Additional options
   * @returns undefined if the element is not a child of a tabster root, otherwise all applicable tabster behaviours and configurations
   */
  static getTabsterContext(tabster, element, options) {
    if (options === void 0) {
      options = {};
    }
    var _a, _b, _c, _d;
    if (!element.ownerDocument) {
      return void 0;
    }
    const {
      checkRtl,
      referenceElement
    } = options;
    const getParent2 = tabster.getParent;
    tabster.drainInitQueue();
    let root;
    let modalizer;
    let groupper;
    let mover;
    let excludedFromMover = false;
    let groupperBeforeMover;
    let modalizerInGroupper;
    let dirRightToLeft;
    let uncontrolled;
    let curElement = referenceElement || element;
    const ignoreKeydown = {};
    while (curElement && (!root || checkRtl)) {
      const tabsterOnElement = getTabsterOnElement(tabster, curElement);
      if (checkRtl && dirRightToLeft === void 0) {
        const dir = curElement.dir;
        if (dir) {
          dirRightToLeft = dir.toLowerCase() === "rtl";
        }
      }
      if (!tabsterOnElement) {
        curElement = getParent2(curElement);
        continue;
      }
      const tagName = curElement.tagName;
      if ((tabsterOnElement.uncontrolled || tagName === "IFRAME" || tagName === "WEBVIEW") && tabster.focusable.isVisible(curElement)) {
        uncontrolled = curElement;
      }
      if (!mover && ((_a = tabsterOnElement.focusable) === null || _a === void 0 ? void 0 : _a.excludeFromMover) && !groupper) {
        excludedFromMover = true;
      }
      const curModalizer = tabsterOnElement.modalizer;
      const curGroupper = tabsterOnElement.groupper;
      const curMover = tabsterOnElement.mover;
      if (!modalizer && curModalizer) {
        modalizer = curModalizer;
      }
      if (!groupper && curGroupper && (!modalizer || curModalizer)) {
        if (modalizer) {
          if (!curGroupper.isActive() && curGroupper.getProps().tabbability && modalizer.userId !== ((_b = tabster.modalizer) === null || _b === void 0 ? void 0 : _b.activeId)) {
            modalizer = void 0;
            groupper = curGroupper;
          }
          modalizerInGroupper = curGroupper;
        } else {
          groupper = curGroupper;
        }
      }
      if (!mover && curMover && (!modalizer || curModalizer) && (!curGroupper || curElement !== element) && curElement.contains(element)) {
        mover = curMover;
        groupperBeforeMover = !!groupper && groupper !== curGroupper;
      }
      if (tabsterOnElement.root) {
        root = tabsterOnElement.root;
      }
      if ((_c = tabsterOnElement.focusable) === null || _c === void 0 ? void 0 : _c.ignoreKeydown) {
        Object.assign(ignoreKeydown, tabsterOnElement.focusable.ignoreKeydown);
      }
      curElement = getParent2(curElement);
    }
    if (!root) {
      const rootAPI = tabster.root;
      const autoRoot = rootAPI._autoRoot;
      if (autoRoot) {
        if ((_d = element.ownerDocument) === null || _d === void 0 ? void 0 : _d.body) {
          root = rootAPI._autoRootCreate();
        }
      }
    }
    if (groupper && !mover) {
      groupperBeforeMover = true;
    }
    const shouldIgnoreKeydown = (event) => !!ignoreKeydown[event.key];
    return root ? {
      root,
      modalizer,
      groupper,
      mover,
      groupperBeforeMover,
      modalizerInGroupper,
      rtl: checkRtl ? !!dirRightToLeft : void 0,
      uncontrolled,
      excludedFromMover,
      ignoreKeydown: shouldIgnoreKeydown
    } : void 0;
  }
  static getRoot(tabster, element) {
    var _a;
    const getParent2 = tabster.getParent;
    for (let el = element; el; el = getParent2(el)) {
      const root = (_a = getTabsterOnElement(tabster, el)) === null || _a === void 0 ? void 0 : _a.root;
      if (root) {
        return root;
      }
    }
    return void 0;
  }
  onRoot(root, removed) {
    if (removed) {
      delete this.rootById[root.uid];
    } else {
      this.rootById[root.uid] = root;
    }
  }
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
class Subscribable {
  constructor() {
    this._callbacks = [];
  }
  dispose() {
    this._callbacks = [];
    delete this._val;
  }
  subscribe(callback) {
    const callbacks = this._callbacks;
    const index = callbacks.indexOf(callback);
    if (index < 0) {
      callbacks.push(callback);
    }
  }
  subscribeFirst(callback) {
    const callbacks = this._callbacks;
    const index = callbacks.indexOf(callback);
    if (index >= 0) {
      callbacks.splice(index, 1);
    }
    callbacks.unshift(callback);
  }
  unsubscribe(callback) {
    const index = this._callbacks.indexOf(callback);
    if (index >= 0) {
      this._callbacks.splice(index, 1);
    }
  }
  setVal(val, detail) {
    if (this._val === val) {
      return;
    }
    this._val = val;
    this._callCallbacks(val, detail);
  }
  getVal() {
    return this._val;
  }
  trigger(val, detail) {
    this._callCallbacks(val, detail);
  }
  _callCallbacks(val, detail) {
    this._callbacks.forEach((callback) => callback(val, detail));
  }
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
class FocusableAPI {
  constructor(tabster) {
    this._tabster = tabster;
  }
  dispose() {
  }
  getProps(element) {
    const tabsterOnElement = getTabsterOnElement(this._tabster, element);
    return tabsterOnElement && tabsterOnElement.focusable || {};
  }
  isFocusable(el, includeProgrammaticallyFocusable, noVisibleCheck, noAccessibleCheck) {
    if (matchesSelector(el, FOCUSABLE_SELECTOR) && (includeProgrammaticallyFocusable || el.tabIndex !== -1)) {
      return (noVisibleCheck || this.isVisible(el)) && (noAccessibleCheck || this.isAccessible(el));
    }
    return false;
  }
  isVisible(el) {
    if (!el.ownerDocument || el.nodeType !== Node.ELEMENT_NODE) {
      return false;
    }
    if (isDisplayNone(el)) {
      return false;
    }
    const rect = el.ownerDocument.body.getBoundingClientRect();
    if (rect.width === 0 && rect.height === 0) {
      return false;
    }
    return true;
  }
  isAccessible(el) {
    var _a;
    for (let e2 = el; e2; e2 = dom.getParentElement(e2)) {
      const tabsterOnElement = getTabsterOnElement(this._tabster, e2);
      if (this._isHidden(e2)) {
        return false;
      }
      const ignoreDisabled = (_a = tabsterOnElement === null || tabsterOnElement === void 0 ? void 0 : tabsterOnElement.focusable) === null || _a === void 0 ? void 0 : _a.ignoreAriaDisabled;
      if (!ignoreDisabled && this._isDisabled(e2)) {
        return false;
      }
    }
    return true;
  }
  _isDisabled(el) {
    return el.hasAttribute("disabled");
  }
  _isHidden(el) {
    var _a;
    const attrVal = el.getAttribute("aria-hidden");
    if (attrVal && attrVal.toLowerCase() === "true") {
      if (!((_a = this._tabster.modalizer) === null || _a === void 0 ? void 0 : _a.isAugmented(el))) {
        return true;
      }
    }
    return false;
  }
  findFirst(options, out) {
    return this.findElement({
      ...options
    }, out);
  }
  findLast(options, out) {
    return this.findElement({
      isBackward: true,
      ...options
    }, out);
  }
  findNext(options, out) {
    return this.findElement({
      ...options
    }, out);
  }
  findPrev(options, out) {
    return this.findElement({
      ...options,
      isBackward: true
    }, out);
  }
  findDefault(options, out) {
    return this.findElement({
      ...options,
      acceptCondition: (el) => this.isFocusable(el, options.includeProgrammaticallyFocusable) && !!this.getProps(el).isDefault
    }, out) || null;
  }
  findAll(options) {
    return this._findElements(true, options) || [];
  }
  findElement(options, out) {
    const found = this._findElements(false, options, out);
    return found ? found[0] : found;
  }
  _findElements(isFindAll, options, out) {
    var _a, _b, _c;
    const {
      container,
      currentElement = null,
      includeProgrammaticallyFocusable,
      useActiveModalizer,
      ignoreAccessibility,
      modalizerId,
      isBackward,
      onElement
    } = options;
    if (!out) {
      out = {};
    }
    const elements = [];
    let {
      acceptCondition
    } = options;
    const hasCustomCondition = !!acceptCondition;
    if (!container) {
      return null;
    }
    if (!acceptCondition) {
      acceptCondition = (el) => this.isFocusable(el, includeProgrammaticallyFocusable, false, ignoreAccessibility);
    }
    const acceptElementState = {
      container,
      modalizerUserId: modalizerId === void 0 && useActiveModalizer ? (_a = this._tabster.modalizer) === null || _a === void 0 ? void 0 : _a.activeId : modalizerId || ((_c = (_b = RootAPI.getTabsterContext(this._tabster, container)) === null || _b === void 0 ? void 0 : _b.modalizer) === null || _c === void 0 ? void 0 : _c.userId),
      from: currentElement || container,
      isBackward,
      isFindAll,
      acceptCondition,
      hasCustomCondition,
      includeProgrammaticallyFocusable,
      ignoreAccessibility,
      cachedGrouppers: {},
      cachedRadioGroups: {}
    };
    const walker = createElementTreeWalker(container.ownerDocument, container, (node) => this._acceptElement(node, acceptElementState));
    if (!walker) {
      return null;
    }
    const prepareForNextElement = (shouldContinueIfNotFound) => {
      var _a2, _b2;
      const foundElement = (_a2 = acceptElementState.foundElement) !== null && _a2 !== void 0 ? _a2 : acceptElementState.foundBackward;
      if (foundElement) {
        elements.push(foundElement);
      }
      if (isFindAll) {
        if (foundElement) {
          acceptElementState.found = false;
          delete acceptElementState.foundElement;
          delete acceptElementState.foundBackward;
          delete acceptElementState.fromCtx;
          acceptElementState.from = foundElement;
          if (onElement && !onElement(foundElement)) {
            return false;
          }
        }
        return !!(foundElement || shouldContinueIfNotFound);
      } else {
        if (foundElement && out) {
          out.uncontrolled = (_b2 = RootAPI.getTabsterContext(this._tabster, foundElement)) === null || _b2 === void 0 ? void 0 : _b2.uncontrolled;
        }
        return !!(shouldContinueIfNotFound && !foundElement);
      }
    };
    if (!currentElement) {
      out.outOfDOMOrder = true;
    }
    if (currentElement && dom.nodeContains(container, currentElement)) {
      walker.currentNode = currentElement;
    } else if (isBackward) {
      const lastChild = getLastChild$2(container);
      if (!lastChild) {
        return null;
      }
      if (this._acceptElement(lastChild, acceptElementState) === NodeFilter.FILTER_ACCEPT && !prepareForNextElement(true)) {
        if (acceptElementState.skippedFocusable) {
          out.outOfDOMOrder = true;
        }
        return elements;
      }
      walker.currentNode = lastChild;
    }
    do {
      if (isBackward) {
        walker.previousNode();
      } else {
        walker.nextNode();
      }
    } while (prepareForNextElement());
    if (acceptElementState.skippedFocusable) {
      out.outOfDOMOrder = true;
    }
    return elements.length ? elements : null;
  }
  _acceptElement(element, state) {
    var _a, _b, _c;
    if (state.found) {
      return NodeFilter.FILTER_ACCEPT;
    }
    const foundBackward = state.foundBackward;
    if (foundBackward && (element === foundBackward || !dom.nodeContains(foundBackward, element))) {
      state.found = true;
      state.foundElement = foundBackward;
      return NodeFilter.FILTER_ACCEPT;
    }
    const container = state.container;
    if (element === container) {
      return NodeFilter.FILTER_SKIP;
    }
    if (!dom.nodeContains(container, element)) {
      return NodeFilter.FILTER_REJECT;
    }
    if (getDummyInputContainer(element)) {
      return NodeFilter.FILTER_REJECT;
    }
    if (dom.nodeContains(state.rejectElementsFrom, element)) {
      return NodeFilter.FILTER_REJECT;
    }
    const ctx = state.currentCtx = RootAPI.getTabsterContext(this._tabster, element);
    if (!ctx) {
      return NodeFilter.FILTER_SKIP;
    }
    if (shouldIgnoreFocus(element)) {
      if (this.isFocusable(element, void 0, true, true)) {
        state.skippedFocusable = true;
      }
      return NodeFilter.FILTER_SKIP;
    }
    if (!state.hasCustomCondition && (element.tagName === "IFRAME" || element.tagName === "WEBVIEW")) {
      if (this.isVisible(element) && ((_a = ctx.modalizer) === null || _a === void 0 ? void 0 : _a.userId) === ((_b = this._tabster.modalizer) === null || _b === void 0 ? void 0 : _b.activeId)) {
        state.found = true;
        state.rejectElementsFrom = state.foundElement = element;
        return NodeFilter.FILTER_ACCEPT;
      } else {
        return NodeFilter.FILTER_REJECT;
      }
    }
    if (!state.ignoreAccessibility && !this.isAccessible(element)) {
      if (this.isFocusable(element, false, true, true)) {
        state.skippedFocusable = true;
      }
      return NodeFilter.FILTER_REJECT;
    }
    let result;
    let fromCtx = state.fromCtx;
    if (!fromCtx) {
      fromCtx = state.fromCtx = RootAPI.getTabsterContext(this._tabster, state.from);
    }
    const fromMover = fromCtx === null || fromCtx === void 0 ? void 0 : fromCtx.mover;
    let groupper = ctx.groupper;
    let mover = ctx.mover;
    result = (_c = this._tabster.modalizer) === null || _c === void 0 ? void 0 : _c.acceptElement(element, state);
    if (result !== void 0) {
      state.skippedFocusable = true;
    }
    if (result === void 0 && (groupper || mover || fromMover)) {
      const groupperElement = groupper === null || groupper === void 0 ? void 0 : groupper.getElement();
      const fromMoverElement = fromMover === null || fromMover === void 0 ? void 0 : fromMover.getElement();
      let moverElement = mover === null || mover === void 0 ? void 0 : mover.getElement();
      if (moverElement && dom.nodeContains(fromMoverElement, moverElement) && dom.nodeContains(container, fromMoverElement) && (!groupperElement || !mover || dom.nodeContains(fromMoverElement, groupperElement))) {
        mover = fromMover;
        moverElement = fromMoverElement;
      }
      if (groupperElement) {
        if (groupperElement === container || !dom.nodeContains(container, groupperElement)) {
          groupper = void 0;
        } else if (!dom.nodeContains(groupperElement, element)) {
          return NodeFilter.FILTER_REJECT;
        }
      }
      if (moverElement) {
        if (!dom.nodeContains(container, moverElement)) {
          mover = void 0;
        } else if (!dom.nodeContains(moverElement, element)) {
          return NodeFilter.FILTER_REJECT;
        }
      }
      if (groupper && mover) {
        if (moverElement && groupperElement && !dom.nodeContains(groupperElement, moverElement)) {
          mover = void 0;
        } else {
          groupper = void 0;
        }
      }
      if (groupper) {
        result = groupper.acceptElement(element, state);
      }
      if (mover) {
        result = mover.acceptElement(element, state);
      }
    }
    if (result === void 0) {
      result = state.acceptCondition(element) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      if (result === NodeFilter.FILTER_SKIP && this.isFocusable(element, false, true, true)) {
        state.skippedFocusable = true;
      }
    }
    if (result === NodeFilter.FILTER_ACCEPT && !state.found) {
      if (!state.isFindAll && isRadio(element) && !element.checked) {
        const radioGroupName = element.name;
        let radioGroup = state.cachedRadioGroups[radioGroupName];
        if (!radioGroup) {
          radioGroup = getRadioButtonGroup(element);
          if (radioGroup) {
            state.cachedRadioGroups[radioGroupName] = radioGroup;
          }
        }
        if ((radioGroup === null || radioGroup === void 0 ? void 0 : radioGroup.checked) && radioGroup.checked !== element) {
          return NodeFilter.FILTER_SKIP;
        }
      }
      if (state.isBackward) {
        state.foundBackward = element;
        result = NodeFilter.FILTER_SKIP;
      } else {
        state.found = true;
        state.foundElement = element;
      }
    }
    return result;
  }
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
const Keys = {
  Tab: "Tab",
  Enter: "Enter",
  Escape: "Escape",
  PageUp: "PageUp",
  PageDown: "PageDown",
  End: "End",
  Home: "Home",
  ArrowLeft: "ArrowLeft",
  ArrowUp: "ArrowUp",
  ArrowRight: "ArrowRight",
  ArrowDown: "ArrowDown"
};
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
function getUncontrolledCompletelyContainer(tabster, element) {
  var _a;
  const getParent2 = tabster.getParent;
  let el = element;
  do {
    const uncontrolledOnElement = (_a = getTabsterOnElement(tabster, el)) === null || _a === void 0 ? void 0 : _a.uncontrolled;
    if (uncontrolledOnElement && tabster.uncontrolled.isUncontrolledCompletely(el, !!uncontrolledOnElement.completely)) {
      return el;
    }
    el = getParent2(el);
  } while (el);
  return void 0;
}
const AsyncFocusIntentPriorityBySource = {
  [AsyncFocusSources.Restorer]: 0,
  [AsyncFocusSources.Deloser]: 1,
  [AsyncFocusSources.EscapeGroupper]: 2
};
class FocusedElementState extends Subscribable {
  constructor(tabster, getWindow2) {
    super();
    this._init = () => {
      const win = this._win();
      const doc = win.document;
      doc.addEventListener(KEYBORG_FOCUSIN, this._onFocusIn, true);
      doc.addEventListener(KEYBORG_FOCUSOUT, this._onFocusOut, true);
      win.addEventListener("keydown", this._onKeyDown, true);
      const activeElement = dom.getActiveElement(doc);
      if (activeElement && activeElement !== doc.body) {
        this._setFocusedElement(activeElement);
      }
      this.subscribe(this._onChanged);
    };
    this._onFocusIn = (e2) => {
      const target = e2.composedPath()[0];
      if (target) {
        this._setFocusedElement(target, e2.detail.relatedTarget, e2.detail.isFocusedProgrammatically);
      }
    };
    this._onFocusOut = (e2) => {
      var _a;
      this._setFocusedElement(void 0, (_a = e2.detail) === null || _a === void 0 ? void 0 : _a.originalEvent.relatedTarget);
    };
    this._validateFocusedElement = (element) => {
    };
    this._onKeyDown = (event) => {
      if (event.key !== Keys.Tab || event.ctrlKey) {
        return;
      }
      const currentElement = this.getVal();
      if (!currentElement || !currentElement.ownerDocument || currentElement.contentEditable === "true") {
        return;
      }
      const tabster2 = this._tabster;
      const controlTab = tabster2.controlTab;
      const ctx = RootAPI.getTabsterContext(tabster2, currentElement);
      if (!ctx || ctx.ignoreKeydown(event)) {
        return;
      }
      const isBackward = event.shiftKey;
      const next = FocusedElementState.findNextTabbable(tabster2, ctx, void 0, currentElement, void 0, isBackward, true);
      const rootElement = ctx.root.getElement();
      if (!rootElement) {
        return;
      }
      const nextElement = next === null || next === void 0 ? void 0 : next.element;
      const uncontrolledCompletelyContainer = getUncontrolledCompletelyContainer(tabster2, currentElement);
      if (nextElement) {
        const nextUncontrolled = next.uncontrolled;
        if (ctx.uncontrolled || dom.nodeContains(nextUncontrolled, currentElement)) {
          if (!next.outOfDOMOrder && nextUncontrolled === ctx.uncontrolled || uncontrolledCompletelyContainer && !dom.nodeContains(uncontrolledCompletelyContainer, nextElement)) {
            return;
          }
          DummyInputManager.addPhantomDummyWithTarget(tabster2, currentElement, isBackward, nextElement);
          return;
        }
        if (nextUncontrolled && tabster2.focusable.isVisible(nextUncontrolled) || nextElement.tagName === "IFRAME" && tabster2.focusable.isVisible(nextElement)) {
          if (rootElement.dispatchEvent(new TabsterMoveFocusEvent({
            by: "root",
            owner: rootElement,
            next: nextElement,
            relatedEvent: event
          }))) {
            DummyInputManager.moveWithPhantomDummy(tabster2, nextUncontrolled !== null && nextUncontrolled !== void 0 ? nextUncontrolled : nextElement, false, isBackward, event);
          }
          return;
        }
        if (controlTab || (next === null || next === void 0 ? void 0 : next.outOfDOMOrder)) {
          if (rootElement.dispatchEvent(new TabsterMoveFocusEvent({
            by: "root",
            owner: rootElement,
            next: nextElement,
            relatedEvent: event
          }))) {
            event.preventDefault();
            event.stopImmediatePropagation();
            nativeFocus(nextElement);
          }
        }
      } else {
        if (!uncontrolledCompletelyContainer && rootElement.dispatchEvent(new TabsterMoveFocusEvent({
          by: "root",
          owner: rootElement,
          next: null,
          relatedEvent: event
        }))) {
          ctx.root.moveOutWithDefaultAction(isBackward, event);
        }
      }
    };
    this._onChanged = (element, detail) => {
      var _a, _b;
      if (element) {
        element.dispatchEvent(new TabsterFocusInEvent(detail));
      } else {
        const last = (_a = this._lastVal) === null || _a === void 0 ? void 0 : _a.get();
        if (last) {
          const d2 = {
            ...detail
          };
          const lastCtx = RootAPI.getTabsterContext(this._tabster, last);
          const modalizerId = (_b = lastCtx === null || lastCtx === void 0 ? void 0 : lastCtx.modalizer) === null || _b === void 0 ? void 0 : _b.userId;
          if (modalizerId) {
            d2.modalizerId = modalizerId;
          }
          last.dispatchEvent(new TabsterFocusOutEvent(d2));
        }
      }
    };
    this._tabster = tabster;
    this._win = getWindow2;
    tabster.queueInit(this._init);
  }
  dispose() {
    super.dispose();
    const win = this._win();
    const doc = win.document;
    doc.removeEventListener(KEYBORG_FOCUSIN, this._onFocusIn, true);
    doc.removeEventListener(KEYBORG_FOCUSOUT, this._onFocusOut, true);
    win.removeEventListener("keydown", this._onKeyDown, true);
    this.unsubscribe(this._onChanged);
    const asyncFocus = this._asyncFocus;
    if (asyncFocus) {
      win.clearTimeout(asyncFocus.timeout);
      delete this._asyncFocus;
    }
    delete FocusedElementState._lastResetElement;
    delete this._nextVal;
    delete this._lastVal;
  }
  static forgetMemorized(instance, parent) {
    var _a, _b;
    let wel = FocusedElementState._lastResetElement;
    let el = wel && wel.get();
    if (el && dom.nodeContains(parent, el)) {
      delete FocusedElementState._lastResetElement;
    }
    el = (_b = (_a = instance._nextVal) === null || _a === void 0 ? void 0 : _a.element) === null || _b === void 0 ? void 0 : _b.get();
    if (el && dom.nodeContains(parent, el)) {
      delete instance._nextVal;
    }
    wel = instance._lastVal;
    el = wel && wel.get();
    if (el && dom.nodeContains(parent, el)) {
      delete instance._lastVal;
    }
  }
  getFocusedElement() {
    return this.getVal();
  }
  getLastFocusedElement() {
    var _a;
    let el = (_a = this._lastVal) === null || _a === void 0 ? void 0 : _a.get();
    if (!el || el && !documentContains(el.ownerDocument, el)) {
      this._lastVal = el = void 0;
    }
    return el;
  }
  focus(element, noFocusedProgrammaticallyFlag, noAccessibleCheck, preventScroll) {
    if (!this._tabster.focusable.isFocusable(element, noFocusedProgrammaticallyFlag, false, noAccessibleCheck)) {
      return false;
    }
    element.focus({
      preventScroll
    });
    return true;
  }
  focusDefault(container) {
    const el = this._tabster.focusable.findDefault({
      container
    });
    if (el) {
      this._tabster.focusedElement.focus(el);
      return true;
    }
    return false;
  }
  getFirstOrLastTabbable(isFirst, props) {
    var _a;
    const {
      container,
      ignoreAccessibility
    } = props;
    let toFocus;
    if (container) {
      const ctx = RootAPI.getTabsterContext(this._tabster, container);
      if (ctx) {
        toFocus = (_a = FocusedElementState.findNextTabbable(this._tabster, ctx, container, void 0, void 0, !isFirst, ignoreAccessibility)) === null || _a === void 0 ? void 0 : _a.element;
      }
    }
    if (toFocus && !dom.nodeContains(container, toFocus)) {
      toFocus = void 0;
    }
    return toFocus || void 0;
  }
  _focusFirstOrLast(isFirst, props) {
    const toFocus = this.getFirstOrLastTabbable(isFirst, props);
    if (toFocus) {
      this.focus(toFocus, false, true);
      return true;
    }
    return false;
  }
  focusFirst(props) {
    return this._focusFirstOrLast(true, props);
  }
  focusLast(props) {
    return this._focusFirstOrLast(false, props);
  }
  resetFocus(container) {
    if (!this._tabster.focusable.isVisible(container)) {
      return false;
    }
    if (!this._tabster.focusable.isFocusable(container, true, true, true)) {
      const prevTabIndex = container.getAttribute("tabindex");
      const prevAriaHidden = container.getAttribute("aria-hidden");
      container.tabIndex = -1;
      container.setAttribute("aria-hidden", "true");
      FocusedElementState._lastResetElement = new WeakHTMLElement(this._win, container);
      this.focus(container, true, true);
      this._setOrRemoveAttribute(container, "tabindex", prevTabIndex);
      this._setOrRemoveAttribute(container, "aria-hidden", prevAriaHidden);
    } else {
      this.focus(container);
    }
    return true;
  }
  requestAsyncFocus(source, callback, delay) {
    const win = this._tabster.getWindow();
    const currentAsyncFocus = this._asyncFocus;
    if (currentAsyncFocus) {
      if (AsyncFocusIntentPriorityBySource[source] > AsyncFocusIntentPriorityBySource[currentAsyncFocus.source]) {
        return;
      }
      win.clearTimeout(currentAsyncFocus.timeout);
    }
    this._asyncFocus = {
      source,
      callback,
      timeout: win.setTimeout(() => {
        this._asyncFocus = void 0;
        callback();
      }, delay)
    };
  }
  cancelAsyncFocus(source) {
    const asyncFocus = this._asyncFocus;
    if ((asyncFocus === null || asyncFocus === void 0 ? void 0 : asyncFocus.source) === source) {
      this._tabster.getWindow().clearTimeout(asyncFocus.timeout);
      this._asyncFocus = void 0;
    }
  }
  _setOrRemoveAttribute(element, name, value) {
    if (value === null) {
      element.removeAttribute(name);
    } else {
      element.setAttribute(name, value);
    }
  }
  _setFocusedElement(element, relatedTarget, isFocusedProgrammatically) {
    var _a, _b;
    if (this._tabster._noop) {
      return;
    }
    const detail = {
      relatedTarget
    };
    if (element) {
      const lastResetElement = (_a = FocusedElementState._lastResetElement) === null || _a === void 0 ? void 0 : _a.get();
      FocusedElementState._lastResetElement = void 0;
      if (lastResetElement === element || shouldIgnoreFocus(element)) {
        return;
      }
      detail.isFocusedProgrammatically = isFocusedProgrammatically;
      const ctx = RootAPI.getTabsterContext(this._tabster, element);
      const modalizerId = (_b = ctx === null || ctx === void 0 ? void 0 : ctx.modalizer) === null || _b === void 0 ? void 0 : _b.userId;
      if (modalizerId) {
        detail.modalizerId = modalizerId;
      }
    }
    const nextVal = this._nextVal = {
      element: element ? new WeakHTMLElement(this._win, element) : void 0,
      detail
    };
    if (element && element !== this._val) {
      this._validateFocusedElement(element);
    }
    if (this._nextVal === nextVal) {
      this.setVal(element, detail);
    }
    this._nextVal = void 0;
  }
  setVal(val, detail) {
    super.setVal(val, detail);
    if (val) {
      this._lastVal = new WeakHTMLElement(this._win, val);
    }
  }
  static findNextTabbable(tabster, ctx, container, currentElement, referenceElement, isBackward, ignoreAccessibility) {
    const actualContainer = container || ctx.root.getElement();
    if (!actualContainer) {
      return null;
    }
    let next = null;
    const isTabbingTimer = FocusedElementState._isTabbingTimer;
    const win = tabster.getWindow();
    if (isTabbingTimer) {
      win.clearTimeout(isTabbingTimer);
    }
    FocusedElementState.isTabbing = true;
    FocusedElementState._isTabbingTimer = win.setTimeout(() => {
      delete FocusedElementState._isTabbingTimer;
      FocusedElementState.isTabbing = false;
    }, 0);
    const modalizer = ctx.modalizer;
    const groupper = ctx.groupper;
    const mover = ctx.mover;
    const callFindNext = (what) => {
      next = what.findNextTabbable(currentElement, referenceElement, isBackward, ignoreAccessibility);
      if (currentElement && !(next === null || next === void 0 ? void 0 : next.element)) {
        const parentElement = what !== modalizer && dom.getParentElement(what.getElement());
        if (parentElement) {
          const parentCtx = RootAPI.getTabsterContext(tabster, currentElement, {
            referenceElement: parentElement
          });
          if (parentCtx) {
            const currentScopeElement = what.getElement();
            const newCurrent = isBackward ? currentScopeElement : currentScopeElement && getLastChild$2(currentScopeElement) || currentScopeElement;
            if (newCurrent) {
              next = FocusedElementState.findNextTabbable(tabster, parentCtx, container, newCurrent, parentElement, isBackward, ignoreAccessibility);
              if (next) {
                next.outOfDOMOrder = true;
              }
            }
          }
        }
      }
    };
    if (groupper && mover) {
      callFindNext(ctx.groupperBeforeMover ? groupper : mover);
    } else if (groupper) {
      callFindNext(groupper);
    } else if (mover) {
      callFindNext(mover);
    } else if (modalizer) {
      callFindNext(modalizer);
    } else {
      const findProps = {
        container: actualContainer,
        currentElement,
        referenceElement,
        ignoreAccessibility,
        useActiveModalizer: true
      };
      const findPropsOut = {};
      const nextElement = tabster.focusable[isBackward ? "findPrev" : "findNext"](findProps, findPropsOut);
      next = {
        element: nextElement,
        outOfDOMOrder: findPropsOut.outOfDOMOrder,
        uncontrolled: findPropsOut.uncontrolled
      };
    }
    return next;
  }
}
FocusedElementState.isTabbing = false;
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
class GroupperDummyManager extends DummyInputManager {
  constructor(element, groupper, tabster, sys) {
    super(tabster, element, DummyInputManagerPriorities.Groupper, sys, true);
    this._setHandlers((dummyInput, isBackward, relatedTarget) => {
      var _a, _b;
      const container = element.get();
      const input = dummyInput.input;
      if (container && input) {
        const ctx = RootAPI.getTabsterContext(tabster, input);
        if (ctx) {
          let next;
          next = (_a = groupper.findNextTabbable(relatedTarget || void 0, void 0, isBackward, true)) === null || _a === void 0 ? void 0 : _a.element;
          if (!next) {
            next = (_b = FocusedElementState.findNextTabbable(tabster, ctx, void 0, dummyInput.isOutside ? input : getAdjacentElement(container, !isBackward), void 0, isBackward, true)) === null || _b === void 0 ? void 0 : _b.element;
          }
          if (next) {
            nativeFocus(next);
          }
        }
      }
    });
  }
}
class Groupper extends TabsterPart {
  constructor(tabster, element, onDispose, props, sys) {
    super(tabster, element, props);
    this._shouldTabInside = false;
    this.makeTabbable(false);
    this._onDispose = onDispose;
    if (!tabster.controlTab) {
      this.dummyManager = new GroupperDummyManager(this._element, this, tabster, sys);
    }
  }
  dispose() {
    var _a;
    this._onDispose(this);
    this._element.get();
    (_a = this.dummyManager) === null || _a === void 0 ? void 0 : _a.dispose();
    delete this.dummyManager;
    delete this._first;
  }
  findNextTabbable(currentElement, referenceElement, isBackward, ignoreAccessibility) {
    const groupperElement = this.getElement();
    if (!groupperElement) {
      return null;
    }
    const currentIsDummy = getDummyInputContainer(currentElement) === groupperElement;
    if (!this._shouldTabInside && currentElement && dom.nodeContains(groupperElement, currentElement) && !currentIsDummy) {
      return {
        element: void 0,
        outOfDOMOrder: true
      };
    }
    const groupperFirstFocusable = this.getFirst(true);
    if (!currentElement || !dom.nodeContains(groupperElement, currentElement) || currentIsDummy) {
      return {
        element: groupperFirstFocusable,
        outOfDOMOrder: true
      };
    }
    const tabster = this._tabster;
    let next = null;
    let outOfDOMOrder = false;
    let uncontrolled;
    if (this._shouldTabInside && groupperFirstFocusable) {
      const findProps = {
        container: groupperElement,
        currentElement,
        referenceElement,
        ignoreAccessibility,
        useActiveModalizer: true
      };
      const findPropsOut = {};
      next = tabster.focusable[isBackward ? "findPrev" : "findNext"](findProps, findPropsOut);
      outOfDOMOrder = !!findPropsOut.outOfDOMOrder;
      if (!next && this._props.tabbability === GroupperTabbabilities.LimitedTrapFocus) {
        next = tabster.focusable[isBackward ? "findLast" : "findFirst"]({
          container: groupperElement,
          ignoreAccessibility,
          useActiveModalizer: true
        }, findPropsOut);
        outOfDOMOrder = true;
      }
      uncontrolled = findPropsOut.uncontrolled;
    }
    return {
      element: next,
      uncontrolled,
      outOfDOMOrder
    };
  }
  makeTabbable(isTabbable) {
    this._shouldTabInside = isTabbable || !this._props.tabbability;
  }
  isActive(noIfFirstIsFocused) {
    var _a;
    const element = this.getElement() || null;
    let isParentActive = true;
    for (let e2 = dom.getParentElement(element); e2; e2 = dom.getParentElement(e2)) {
      const g2 = (_a = getTabsterOnElement(this._tabster, e2)) === null || _a === void 0 ? void 0 : _a.groupper;
      if (g2) {
        if (!g2._shouldTabInside) {
          isParentActive = false;
        }
      }
    }
    let ret = isParentActive ? this._props.tabbability ? this._shouldTabInside : false : void 0;
    if (ret && noIfFirstIsFocused) {
      const focused = this._tabster.focusedElement.getFocusedElement();
      if (focused) {
        ret = focused !== this.getFirst(true);
      }
    }
    return ret;
  }
  getFirst(orContainer) {
    var _a;
    const groupperElement = this.getElement();
    let first;
    if (groupperElement) {
      if (orContainer && this._tabster.focusable.isFocusable(groupperElement)) {
        return groupperElement;
      }
      first = (_a = this._first) === null || _a === void 0 ? void 0 : _a.get();
      if (!first) {
        first = this._tabster.focusable.findFirst({
          container: groupperElement,
          useActiveModalizer: true
        }) || void 0;
        if (first) {
          this.setFirst(first);
        }
      }
    }
    return first;
  }
  setFirst(element) {
    if (element) {
      this._first = new WeakHTMLElement(this._tabster.getWindow, element);
    } else {
      delete this._first;
    }
  }
  acceptElement(element, state) {
    const cachedGrouppers = state.cachedGrouppers;
    const parentElement = dom.getParentElement(this.getElement());
    const parentCtx = parentElement && RootAPI.getTabsterContext(this._tabster, parentElement);
    const parentCtxGroupper = parentCtx === null || parentCtx === void 0 ? void 0 : parentCtx.groupper;
    const parentGroupper = (parentCtx === null || parentCtx === void 0 ? void 0 : parentCtx.groupperBeforeMover) ? parentCtxGroupper : void 0;
    let parentGroupperElement;
    const getIsActive = (groupper) => {
      let cached = cachedGrouppers[groupper.id];
      let isActive2;
      if (cached) {
        isActive2 = cached.isActive;
      } else {
        isActive2 = this.isActive(true);
        cached = cachedGrouppers[groupper.id] = {
          isActive: isActive2
        };
      }
      return isActive2;
    };
    if (parentGroupper) {
      parentGroupperElement = parentGroupper.getElement();
      if (!getIsActive(parentGroupper) && parentGroupperElement && state.container !== parentGroupperElement && dom.nodeContains(state.container, parentGroupperElement)) {
        state.skippedFocusable = true;
        return NodeFilter.FILTER_REJECT;
      }
    }
    const isActive = getIsActive(this);
    const groupperElement = this.getElement();
    if (groupperElement) {
      if (isActive !== true) {
        if (groupperElement === element && parentCtxGroupper) {
          if (!parentGroupperElement) {
            parentGroupperElement = parentCtxGroupper.getElement();
          }
          if (parentGroupperElement && !getIsActive(parentCtxGroupper) && dom.nodeContains(state.container, parentGroupperElement) && parentGroupperElement !== state.container) {
            state.skippedFocusable = true;
            return NodeFilter.FILTER_REJECT;
          }
        }
        if (groupperElement !== element && dom.nodeContains(groupperElement, element)) {
          state.skippedFocusable = true;
          return NodeFilter.FILTER_REJECT;
        }
        const cached = cachedGrouppers[this.id];
        let first;
        if ("first" in cached) {
          first = cached.first;
        } else {
          first = cached.first = this.getFirst(true);
        }
        if (first && state.acceptCondition(first)) {
          state.rejectElementsFrom = groupperElement;
          state.skippedFocusable = true;
          if (first !== state.from) {
            state.found = true;
            state.foundElement = first;
            return NodeFilter.FILTER_ACCEPT;
          } else {
            return NodeFilter.FILTER_REJECT;
          }
        }
      }
    }
    return void 0;
  }
}
class GroupperAPI {
  constructor(tabster, getWindow2) {
    this._current = {};
    this._grouppers = {};
    this._init = () => {
      const win = this._win();
      this._tabster.focusedElement.subscribeFirst(this._onFocus);
      const doc = win.document;
      const activeElement = dom.getActiveElement(doc);
      if (activeElement) {
        this._onFocus(activeElement);
      }
      doc.addEventListener("mousedown", this._onMouseDown, true);
      win.addEventListener("keydown", this._onKeyDown, true);
      win.addEventListener(GroupperMoveFocusEventName, this._onMoveFocus);
    };
    this._onGroupperDispose = (groupper) => {
      delete this._grouppers[groupper.id];
    };
    this._onFocus = (element) => {
      if (element) {
        this._updateCurrent(element);
      }
    };
    this._onMouseDown = (e2) => {
      let target = e2.target;
      while (target && !this._tabster.focusable.isFocusable(target)) {
        target = this._tabster.getParent(target);
      }
      if (target) {
        this._updateCurrent(target);
      }
    };
    this._onKeyDown = (event) => {
      if (event.key !== Keys.Enter && event.key !== Keys.Escape) {
        return;
      }
      if (event.ctrlKey || event.altKey || event.shiftKey || event.metaKey) {
        return;
      }
      const element = this._tabster.focusedElement.getFocusedElement();
      if (element) {
        this.handleKeyPress(element, event);
      }
    };
    this._onMoveFocus = (e2) => {
      var _a;
      const element = e2.composedPath()[0];
      const action = (_a = e2.detail) === null || _a === void 0 ? void 0 : _a.action;
      if (element && action !== void 0 && !e2.defaultPrevented) {
        if (action === GroupperMoveFocusActions.Enter) {
          this._enterGroupper(element);
        } else {
          this._escapeGroupper(element);
        }
        e2.stopImmediatePropagation();
      }
    };
    this._tabster = tabster;
    this._win = getWindow2;
    tabster.queueInit(this._init);
  }
  dispose() {
    const win = this._win();
    this._tabster.focusedElement.cancelAsyncFocus(AsyncFocusSources.EscapeGroupper);
    this._current = {};
    if (this._updateTimer) {
      win.clearTimeout(this._updateTimer);
      delete this._updateTimer;
    }
    this._tabster.focusedElement.unsubscribe(this._onFocus);
    win.document.removeEventListener("mousedown", this._onMouseDown, true);
    win.removeEventListener("keydown", this._onKeyDown, true);
    win.removeEventListener(GroupperMoveFocusEventName, this._onMoveFocus);
    Object.keys(this._grouppers).forEach((groupperId) => {
      if (this._grouppers[groupperId]) {
        this._grouppers[groupperId].dispose();
        delete this._grouppers[groupperId];
      }
    });
  }
  createGroupper(element, props, sys) {
    const tabster = this._tabster;
    const newGroupper = new Groupper(tabster, element, this._onGroupperDispose, props, sys);
    this._grouppers[newGroupper.id] = newGroupper;
    const focusedElement = tabster.focusedElement.getFocusedElement();
    if (focusedElement && dom.nodeContains(element, focusedElement) && !this._updateTimer) {
      this._updateTimer = this._win().setTimeout(() => {
        delete this._updateTimer;
        if (focusedElement === tabster.focusedElement.getFocusedElement()) {
          this._updateCurrent(focusedElement);
        }
      }, 0);
    }
    return newGroupper;
  }
  forgetCurrentGrouppers() {
    this._current = {};
  }
  _updateCurrent(element) {
    var _a;
    if (this._updateTimer) {
      this._win().clearTimeout(this._updateTimer);
      delete this._updateTimer;
    }
    const tabster = this._tabster;
    const newIds = {};
    for (let el = tabster.getParent(element); el; el = tabster.getParent(el)) {
      const groupper = (_a = getTabsterOnElement(tabster, el)) === null || _a === void 0 ? void 0 : _a.groupper;
      if (groupper) {
        newIds[groupper.id] = true;
        this._current[groupper.id] = groupper;
        const isTabbable = groupper.isActive() || element !== el && (!groupper.getProps().delegated || groupper.getFirst(false) !== element);
        groupper.makeTabbable(isTabbable);
      }
    }
    for (const id of Object.keys(this._current)) {
      const groupper = this._current[id];
      if (!(groupper.id in newIds)) {
        groupper.makeTabbable(false);
        groupper.setFirst(void 0);
        delete this._current[id];
      }
    }
  }
  _enterGroupper(element, relatedEvent) {
    const tabster = this._tabster;
    const ctx = RootAPI.getTabsterContext(tabster, element);
    const groupper = (ctx === null || ctx === void 0 ? void 0 : ctx.groupper) || (ctx === null || ctx === void 0 ? void 0 : ctx.modalizerInGroupper);
    const groupperElement = groupper === null || groupper === void 0 ? void 0 : groupper.getElement();
    if (groupper && groupperElement && (element === groupperElement || groupper.getProps().delegated && element === groupper.getFirst(false))) {
      const next = tabster.focusable.findNext({
        container: groupperElement,
        currentElement: element,
        useActiveModalizer: true
      });
      if (next && (!relatedEvent || relatedEvent && groupperElement.dispatchEvent(new TabsterMoveFocusEvent({
        by: "groupper",
        owner: groupperElement,
        next,
        relatedEvent
      })))) {
        if (relatedEvent) {
          relatedEvent.preventDefault();
          relatedEvent.stopImmediatePropagation();
        }
        next.focus();
        return next;
      }
    }
    return null;
  }
  _escapeGroupper(element, relatedEvent, fromModalizer) {
    const tabster = this._tabster;
    const ctx = RootAPI.getTabsterContext(tabster, element);
    let groupper = (ctx === null || ctx === void 0 ? void 0 : ctx.groupper) || (ctx === null || ctx === void 0 ? void 0 : ctx.modalizerInGroupper);
    const groupperElement = groupper === null || groupper === void 0 ? void 0 : groupper.getElement();
    if (groupper && groupperElement && dom.nodeContains(groupperElement, element)) {
      let next;
      if (element !== groupperElement || fromModalizer) {
        next = groupper.getFirst(true);
      } else {
        const parentElement = dom.getParentElement(groupperElement);
        const parentCtx = parentElement ? RootAPI.getTabsterContext(tabster, parentElement) : void 0;
        groupper = parentCtx === null || parentCtx === void 0 ? void 0 : parentCtx.groupper;
        next = groupper === null || groupper === void 0 ? void 0 : groupper.getFirst(true);
      }
      if (next && (!relatedEvent || relatedEvent && groupperElement.dispatchEvent(new TabsterMoveFocusEvent({
        by: "groupper",
        owner: groupperElement,
        next,
        relatedEvent
      })))) {
        if (groupper) {
          groupper.makeTabbable(false);
        }
        next.focus();
        return next;
      }
    }
    return null;
  }
  moveFocus(element, action) {
    return action === GroupperMoveFocusActions.Enter ? this._enterGroupper(element) : this._escapeGroupper(element);
  }
  handleKeyPress(element, event, fromModalizer) {
    const tabster = this._tabster;
    const ctx = RootAPI.getTabsterContext(tabster, element);
    if (ctx && ((ctx === null || ctx === void 0 ? void 0 : ctx.groupper) || (ctx === null || ctx === void 0 ? void 0 : ctx.modalizerInGroupper))) {
      tabster.focusedElement.cancelAsyncFocus(AsyncFocusSources.EscapeGroupper);
      if (ctx.ignoreKeydown(event)) {
        return;
      }
      if (event.key === Keys.Enter) {
        this._enterGroupper(element, event);
      } else if (event.key === Keys.Escape) {
        const focusedElement = tabster.focusedElement.getFocusedElement();
        tabster.focusedElement.requestAsyncFocus(AsyncFocusSources.EscapeGroupper, () => {
          if (focusedElement !== tabster.focusedElement.getFocusedElement() && // A part of Modalizer that has called this handler to escape the active groupper
          // might have been removed from DOM, if the focus is on body, we still want to handle Esc.
          (fromModalizer && !focusedElement || !fromModalizer)) {
            return;
          }
          this._escapeGroupper(element, event, fromModalizer);
        }, 0);
      }
    }
  }
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
class KeyboardNavigationState extends Subscribable {
  constructor(getWindow2) {
    super();
    this._onChange = (isNavigatingWithKeyboard) => {
      this.setVal(isNavigatingWithKeyboard, void 0);
    };
    this._keyborg = createKeyborg(getWindow2());
    this._keyborg.subscribe(this._onChange);
  }
  dispose() {
    super.dispose();
    if (this._keyborg) {
      this._keyborg.unsubscribe(this._onChange);
      disposeKeyborg(this._keyborg);
      delete this._keyborg;
    }
  }
  setNavigatingWithKeyboard(isNavigatingWithKeyboard) {
    var _a;
    (_a = this._keyborg) === null || _a === void 0 ? void 0 : _a.setVal(isNavigatingWithKeyboard);
  }
  isNavigatingWithKeyboard() {
    var _a;
    return !!((_a = this._keyborg) === null || _a === void 0 ? void 0 : _a.isNavigatingWithKeyboard());
  }
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
let _wasFocusedCounter = 0;
const _ariaHidden = "aria-hidden";
class ModalizerDummyManager extends DummyInputManager {
  constructor(element, tabster, sys) {
    super(tabster, element, DummyInputManagerPriorities.Modalizer, sys);
    this._setHandlers((dummyInput, isBackward) => {
      var _a, _b;
      const el = element.get();
      const container = el && ((_a = RootAPI.getRoot(tabster, el)) === null || _a === void 0 ? void 0 : _a.getElement());
      const input = dummyInput.input;
      let toFocus;
      if (container && input) {
        const dummyContainer = getDummyInputContainer(input);
        const ctx = RootAPI.getTabsterContext(tabster, dummyContainer || input);
        if (ctx) {
          toFocus = (_b = FocusedElementState.findNextTabbable(tabster, ctx, container, input, void 0, isBackward, true)) === null || _b === void 0 ? void 0 : _b.element;
        }
        if (toFocus) {
          nativeFocus(toFocus);
        }
      }
    });
  }
}
class Modalizer extends TabsterPart {
  constructor(tabster, element, onDispose, props, sys, activeElements) {
    super(tabster, element, props);
    this._wasFocused = 0;
    this.userId = props.id;
    this._onDispose = onDispose;
    this._activeElements = activeElements;
    if (!tabster.controlTab) {
      this.dummyManager = new ModalizerDummyManager(this._element, tabster, sys);
    }
  }
  makeActive(isActive) {
    if (this._isActive !== isActive) {
      this._isActive = isActive;
      const element = this.getElement();
      if (element) {
        const activeElements = this._activeElements;
        const index = activeElements.map((e2) => e2.get()).indexOf(element);
        if (isActive) {
          if (index < 0) {
            activeElements.push(new WeakHTMLElement(this._tabster.getWindow, element));
          }
        } else {
          if (index >= 0) {
            activeElements.splice(index, 1);
          }
        }
      }
      this._dispatchEvent(isActive);
    }
  }
  focused(noIncrement) {
    if (!noIncrement) {
      this._wasFocused = ++_wasFocusedCounter;
    }
    return this._wasFocused;
  }
  setProps(props) {
    if (props.id) {
      this.userId = props.id;
    }
    this._props = {
      ...props
    };
  }
  dispose() {
    var _a;
    this.makeActive(false);
    this._onDispose(this);
    (_a = this.dummyManager) === null || _a === void 0 ? void 0 : _a.dispose();
    delete this.dummyManager;
    this._activeElements = [];
    this._remove();
  }
  isActive() {
    return !!this._isActive;
  }
  contains(element) {
    return dom.nodeContains(this.getElement(), element);
  }
  findNextTabbable(currentElement, referenceElement, isBackward, ignoreAccessibility) {
    var _a, _b;
    const modalizerElement = this.getElement();
    if (!modalizerElement) {
      return null;
    }
    const tabster = this._tabster;
    let next = null;
    let outOfDOMOrder = false;
    let uncontrolled;
    const container = currentElement && ((_a = RootAPI.getRoot(tabster, currentElement)) === null || _a === void 0 ? void 0 : _a.getElement());
    if (container) {
      const findProps = {
        container,
        currentElement,
        referenceElement,
        ignoreAccessibility,
        useActiveModalizer: true
      };
      const findPropsOut = {};
      next = tabster.focusable[isBackward ? "findPrev" : "findNext"](findProps, findPropsOut);
      if (!next && this._props.isTrapped && ((_b = tabster.modalizer) === null || _b === void 0 ? void 0 : _b.activeId)) {
        next = tabster.focusable[isBackward ? "findLast" : "findFirst"]({
          container,
          ignoreAccessibility,
          useActiveModalizer: true
        }, findPropsOut);
        if (next === null) {
          next = currentElement;
        }
        outOfDOMOrder = true;
      } else {
        outOfDOMOrder = !!findPropsOut.outOfDOMOrder;
      }
      uncontrolled = findPropsOut.uncontrolled;
    }
    return {
      element: next,
      uncontrolled,
      outOfDOMOrder
    };
  }
  _dispatchEvent(isActive, allElements) {
    const element = this.getElement();
    let defaultPrevented = false;
    if (element) {
      const elements = allElements ? this._activeElements.map((e2) => e2.get()) : [element];
      for (const el of elements) {
        if (el) {
          const eventDetail = {
            id: this.userId,
            element
          };
          const event = isActive ? new ModalizerActiveEvent(eventDetail) : new ModalizerInactiveEvent(eventDetail);
          el.dispatchEvent(event);
          if (event.defaultPrevented) {
            defaultPrevented = true;
          }
        }
      }
    }
    return defaultPrevented;
  }
  _remove() {
  }
}
class ModalizerAPI {
  constructor(tabster, alwaysAccessibleSelector, accessibleCheck) {
    this._onModalizerDispose = (modalizer) => {
      const id = modalizer.id;
      const userId = modalizer.userId;
      const part = this._parts[userId];
      delete this._modalizers[id];
      if (part) {
        delete part[id];
        if (Object.keys(part).length === 0) {
          delete this._parts[userId];
          const activationHistory = this._activationHistory;
          const cleanActivationHistory = [];
          let prevHistoryItem;
          for (let i = activationHistory.length; i--; ) {
            const modalizerUserIdFromHistory = activationHistory[i];
            if (modalizerUserIdFromHistory === userId) {
              continue;
            }
            if (modalizerUserIdFromHistory !== prevHistoryItem) {
              prevHistoryItem = modalizerUserIdFromHistory;
              if (modalizerUserIdFromHistory || cleanActivationHistory.length > 0) {
                cleanActivationHistory.unshift(modalizerUserIdFromHistory);
              }
            }
          }
          this._activationHistory = cleanActivationHistory;
          if (this.activeId === userId) {
            const prevActiveId = cleanActivationHistory[0];
            const prevActive = prevActiveId ? Object.values(this._parts[prevActiveId])[0] : void 0;
            this.setActive(prevActive);
          }
        }
      }
    };
    this._onKeyDown = (event) => {
      var _a;
      if (event.key !== Keys.Escape) {
        return;
      }
      const tabster2 = this._tabster;
      const element = tabster2.focusedElement.getFocusedElement();
      if (element) {
        const ctx = RootAPI.getTabsterContext(tabster2, element);
        const modalizer = ctx === null || ctx === void 0 ? void 0 : ctx.modalizer;
        if (ctx && !ctx.groupper && (modalizer === null || modalizer === void 0 ? void 0 : modalizer.isActive()) && !ctx.ignoreKeydown(event)) {
          const activeId = modalizer.userId;
          if (activeId) {
            const part = this._parts[activeId];
            if (part) {
              const focusedSince = Object.keys(part).map((id) => {
                var _a2;
                const m2 = part[id];
                const el = m2.getElement();
                let groupper;
                if (el) {
                  groupper = (_a2 = getTabsterOnElement(tabster2, el)) === null || _a2 === void 0 ? void 0 : _a2.groupper;
                }
                return m2 && el && groupper ? {
                  el,
                  focusedSince: m2.focused(true)
                } : {
                  focusedSince: 0
                };
              }).filter((f2) => f2.focusedSince > 0).sort((a, b2) => a.focusedSince > b2.focusedSince ? -1 : a.focusedSince < b2.focusedSince ? 1 : 0);
              if (focusedSince.length) {
                const groupperElement = focusedSince[0].el;
                if (groupperElement) {
                  (_a = tabster2.groupper) === null || _a === void 0 ? void 0 : _a.handleKeyPress(groupperElement, event, true);
                }
              }
            }
          }
        }
      }
    };
    this._onFocus = (focusedElement, detail) => {
      var _a;
      const tabster2 = this._tabster;
      const ctx = focusedElement && RootAPI.getTabsterContext(tabster2, focusedElement);
      if (!ctx || !focusedElement) {
        return;
      }
      const augmentedMap = this._augMap;
      for (let e2 = focusedElement; e2; e2 = dom.getParentElement(e2)) {
        if (augmentedMap.has(e2)) {
          augmentedMap.delete(e2);
          augmentAttribute(tabster2, e2, _ariaHidden);
        }
      }
      let modalizer = ctx.modalizer;
      const tabsterOnFocusedElement = getTabsterOnElement(tabster2, focusedElement);
      const modalizerOnFocusedElement = tabsterOnFocusedElement === null || tabsterOnFocusedElement === void 0 ? void 0 : tabsterOnFocusedElement.modalizer;
      if (modalizerOnFocusedElement) {
        modalizerOnFocusedElement.focused();
        if (modalizerOnFocusedElement.userId === this.activeId && tabsterOnFocusedElement.groupper) {
          const parentElement = tabster2.getParent(focusedElement);
          const parentModalizer = parentElement && ((_a = RootAPI.getTabsterContext(tabster2, parentElement)) === null || _a === void 0 ? void 0 : _a.modalizer);
          if (parentModalizer) {
            modalizer = parentModalizer;
          } else {
            this.setActive(void 0);
            return;
          }
        }
      }
      modalizer === null || modalizer === void 0 ? void 0 : modalizer.focused();
      if ((modalizer === null || modalizer === void 0 ? void 0 : modalizer.userId) === this.activeId) {
        this.currentIsOthersAccessible = modalizer === null || modalizer === void 0 ? void 0 : modalizer.getProps().isOthersAccessible;
        return;
      }
      if (detail.isFocusedProgrammatically || this.currentIsOthersAccessible || (modalizer === null || modalizer === void 0 ? void 0 : modalizer.getProps().isAlwaysAccessible)) {
        this.setActive(modalizer);
      } else {
        const win2 = this._win();
        win2.clearTimeout(this._restoreModalizerFocusTimer);
        this._restoreModalizerFocusTimer = win2.setTimeout(() => this._restoreModalizerFocus(focusedElement), 100);
      }
    };
    this._tabster = tabster;
    this._win = tabster.getWindow;
    this._modalizers = {};
    this._parts = {};
    this._augMap = /* @__PURE__ */ new WeakMap();
    this._aug = [];
    this._alwaysAccessibleSelector = alwaysAccessibleSelector;
    this._accessibleCheck = accessibleCheck;
    this._activationHistory = [];
    this.activeElements = [];
    if (!tabster.controlTab) {
      tabster.root.addDummyInputs();
    }
    const win = this._win();
    win.addEventListener("keydown", this._onKeyDown, true);
    tabster.queueInit(() => {
      this._tabster.focusedElement.subscribe(this._onFocus);
    });
  }
  dispose() {
    const win = this._win();
    win.removeEventListener("keydown", this._onKeyDown, true);
    Object.keys(this._modalizers).forEach((modalizerId) => {
      if (this._modalizers[modalizerId]) {
        this._modalizers[modalizerId].dispose();
        delete this._modalizers[modalizerId];
      }
    });
    win.clearTimeout(this._restoreModalizerFocusTimer);
    win.clearTimeout(this._hiddenUpdateTimer);
    this._parts = {};
    delete this.activeId;
    this.activeElements = [];
    this._augMap = /* @__PURE__ */ new WeakMap();
    this._aug = [];
    this._tabster.focusedElement.unsubscribe(this._onFocus);
  }
  createModalizer(element, props, sys) {
    var _a;
    const modalizer = new Modalizer(this._tabster, element, this._onModalizerDispose, props, sys, this.activeElements);
    const id = modalizer.id;
    const userId = props.id;
    this._modalizers[id] = modalizer;
    let part = this._parts[userId];
    if (!part) {
      part = this._parts[userId] = {};
    }
    part[id] = modalizer;
    const focusedElement = (_a = this._tabster.focusedElement.getFocusedElement()) !== null && _a !== void 0 ? _a : null;
    if (element !== focusedElement && dom.nodeContains(element, focusedElement)) {
      if (userId !== this.activeId) {
        this.setActive(modalizer);
      } else {
        modalizer.makeActive(true);
      }
    }
    return modalizer;
  }
  isAugmented(element) {
    return this._augMap.has(element);
  }
  hiddenUpdate() {
    if (this._hiddenUpdateTimer) {
      return;
    }
    this._hiddenUpdateTimer = this._win().setTimeout(() => {
      delete this._hiddenUpdateTimer;
      this._hiddenUpdate();
    }, 250);
  }
  setActive(modalizer) {
    const userId = modalizer === null || modalizer === void 0 ? void 0 : modalizer.userId;
    const activeId = this.activeId;
    if (activeId === userId) {
      return;
    }
    this.activeId = userId;
    if (activeId) {
      const part = this._parts[activeId];
      if (part) {
        for (const id of Object.keys(part)) {
          part[id].makeActive(false);
        }
      }
    }
    if (userId) {
      const part = this._parts[userId];
      if (part) {
        for (const id of Object.keys(part)) {
          part[id].makeActive(true);
        }
      }
    }
    this.currentIsOthersAccessible = modalizer === null || modalizer === void 0 ? void 0 : modalizer.getProps().isOthersAccessible;
    this.hiddenUpdate();
    const activationHistory = this._activationHistory;
    if (activationHistory[0] !== userId && (userId !== void 0 || activationHistory.length > 0)) {
      activationHistory.unshift(userId);
    }
  }
  focus(elementFromModalizer, noFocusFirst, noFocusDefault) {
    const tabster = this._tabster;
    const ctx = RootAPI.getTabsterContext(tabster, elementFromModalizer);
    const modalizer = ctx === null || ctx === void 0 ? void 0 : ctx.modalizer;
    if (modalizer) {
      this.setActive(modalizer);
      const props = modalizer.getProps();
      const modalizerRoot = modalizer.getElement();
      if (modalizerRoot) {
        if (noFocusFirst === void 0) {
          noFocusFirst = props.isNoFocusFirst;
        }
        if (!noFocusFirst && tabster.keyboardNavigation.isNavigatingWithKeyboard() && tabster.focusedElement.focusFirst({
          container: modalizerRoot
        })) {
          return true;
        }
        if (noFocusDefault === void 0) {
          noFocusDefault = props.isNoFocusDefault;
        }
        if (!noFocusDefault && tabster.focusedElement.focusDefault(modalizerRoot)) {
          return true;
        }
        tabster.focusedElement.resetFocus(modalizerRoot);
      }
    }
    return false;
  }
  activate(modalizerElementOrContainer) {
    var _a;
    const modalizerToActivate = modalizerElementOrContainer ? (_a = RootAPI.getTabsterContext(this._tabster, modalizerElementOrContainer)) === null || _a === void 0 ? void 0 : _a.modalizer : void 0;
    if (!modalizerElementOrContainer || modalizerToActivate) {
      this.setActive(modalizerToActivate);
      return true;
    }
    return false;
  }
  acceptElement(element, state) {
    var _a;
    const modalizerUserId = state.modalizerUserId;
    const currentModalizer = (_a = state.currentCtx) === null || _a === void 0 ? void 0 : _a.modalizer;
    if (modalizerUserId) {
      for (const e2 of this.activeElements) {
        const el = e2.get();
        if (el && (dom.nodeContains(element, el) || el === element)) {
          return NodeFilter.FILTER_SKIP;
        }
      }
    }
    const ret = modalizerUserId === (currentModalizer === null || currentModalizer === void 0 ? void 0 : currentModalizer.userId) || !modalizerUserId && (currentModalizer === null || currentModalizer === void 0 ? void 0 : currentModalizer.getProps().isAlwaysAccessible) ? void 0 : NodeFilter.FILTER_SKIP;
    if (ret !== void 0) {
      state.skippedFocusable = true;
    }
    return ret;
  }
  _hiddenUpdate() {
    var _a;
    const tabster = this._tabster;
    const body = tabster.getWindow().document.body;
    const activeId = this.activeId;
    const parts = this._parts;
    const visibleElements = [];
    const hiddenElements = [];
    const alwaysAccessibleSelector = this._alwaysAccessibleSelector;
    const alwaysAccessibleElements = alwaysAccessibleSelector ? Array.from(dom.querySelectorAll(body, alwaysAccessibleSelector)) : [];
    const activeModalizerElements = [];
    for (const userId of Object.keys(parts)) {
      const modalizerParts = parts[userId];
      for (const id of Object.keys(modalizerParts)) {
        const modalizer = modalizerParts[id];
        const el = modalizer.getElement();
        const props = modalizer.getProps();
        const isAlwaysAccessible = props.isAlwaysAccessible;
        if (el) {
          if (userId === activeId) {
            activeModalizerElements.push(el);
            if (!this.currentIsOthersAccessible) {
              visibleElements.push(el);
            }
          } else if (isAlwaysAccessible) {
            alwaysAccessibleElements.push(el);
          } else {
            hiddenElements.push(el);
          }
        }
      }
    }
    const augmentedMap = this._augMap;
    const allVisibleElements = visibleElements.length > 0 ? [...visibleElements, ...alwaysAccessibleElements] : void 0;
    const newAugmented = [];
    const newAugmentedMap = /* @__PURE__ */ new WeakMap();
    const toggle = (element, hide2) => {
      var _a2;
      const tagName = element.tagName;
      if (tagName === "SCRIPT" || tagName === "STYLE") {
        return;
      }
      let isAugmented = false;
      if (augmentedMap.has(element)) {
        if (hide2) {
          isAugmented = true;
        } else {
          augmentedMap.delete(element);
          augmentAttribute(tabster, element, _ariaHidden);
        }
      } else if (hide2 && !((_a2 = this._accessibleCheck) === null || _a2 === void 0 ? void 0 : _a2.call(this, element, activeModalizerElements)) && augmentAttribute(tabster, element, _ariaHidden, "true")) {
        augmentedMap.set(element, true);
        isAugmented = true;
      }
      if (isAugmented) {
        newAugmented.push(new WeakHTMLElement(tabster.getWindow, element));
        newAugmentedMap.set(element, true);
      }
    };
    const walk = (element) => {
      var _a2;
      for (let el = dom.getFirstElementChild(element); el; el = dom.getNextElementSibling(el)) {
        let skip = false;
        let containsModalizer = false;
        let containedByModalizer = false;
        if (allVisibleElements) {
          const elParent = tabster.getParent(el);
          for (const c2 of allVisibleElements) {
            if (el === c2) {
              skip = true;
              break;
            }
            if (dom.nodeContains(el, c2)) {
              containsModalizer = true;
              break;
            } else if (dom.nodeContains(c2, elParent)) {
              containedByModalizer = true;
            }
          }
          if (containsModalizer || ((_a2 = el.__tabsterElementFlags) === null || _a2 === void 0 ? void 0 : _a2.noDirectAriaHidden)) {
            walk(el);
          } else if (!skip && !containedByModalizer) {
            toggle(el, true);
          }
        } else {
          toggle(el, false);
        }
      }
    };
    if (!allVisibleElements) {
      alwaysAccessibleElements.forEach((e2) => toggle(e2, false));
    }
    hiddenElements.forEach((e2) => toggle(e2, true));
    if (body) {
      walk(body);
    }
    (_a = this._aug) === null || _a === void 0 ? void 0 : _a.map((e2) => e2.get()).forEach((e2) => {
      if (e2 && !newAugmentedMap.get(e2)) {
        toggle(e2, false);
      }
    });
    this._aug = newAugmented;
    this._augMap = newAugmentedMap;
  }
  /**
   * Called when an element is focused outside of an active modalizer.
   * Attempts to pull focus back into the active modalizer
   * @param outsideElement - An element being focused outside of the modalizer
   */
  _restoreModalizerFocus(outsideElement) {
    var _a;
    const ownerDocument = outsideElement === null || outsideElement === void 0 ? void 0 : outsideElement.ownerDocument;
    if (!outsideElement || !ownerDocument) {
      return;
    }
    const focusedElement = this._tabster.focusedElement.getFocusedElement();
    const focusedElementModalizer = focusedElement && ((_a = RootAPI.getTabsterContext(this._tabster, focusedElement)) === null || _a === void 0 ? void 0 : _a.modalizer);
    if (!focusedElement || focusedElement && (focusedElementModalizer === null || focusedElementModalizer === void 0 ? void 0 : focusedElementModalizer.userId) === this.activeId) {
      return;
    }
    const tabster = this._tabster;
    const ctx = RootAPI.getTabsterContext(tabster, outsideElement);
    const modalizer = ctx === null || ctx === void 0 ? void 0 : ctx.modalizer;
    const activeId = this.activeId;
    if (!modalizer && !activeId || modalizer && activeId === modalizer.userId) {
      return;
    }
    const container = ctx === null || ctx === void 0 ? void 0 : ctx.root.getElement();
    if (container) {
      let toFocus = tabster.focusable.findFirst({
        container,
        useActiveModalizer: true
      });
      if (toFocus) {
        if (outsideElement.compareDocumentPosition(toFocus) & document.DOCUMENT_POSITION_PRECEDING) {
          toFocus = tabster.focusable.findLast({
            container,
            useActiveModalizer: true
          });
          if (!toFocus) {
            throw new Error("Something went wrong.");
          }
        }
        tabster.focusedElement.focus(toFocus);
        return;
      }
    }
    outsideElement.blur();
  }
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
const _inputSelector = /* @__PURE__ */ ["input", "textarea", "*[contenteditable]"].join(", ");
class MoverDummyManager extends DummyInputManager {
  constructor(element, tabster, getMemorized, sys) {
    super(tabster, element, DummyInputManagerPriorities.Mover, sys);
    this._onFocusDummyInput = (dummyInput) => {
      var _a, _b;
      const container = this._element.get();
      const input = dummyInput.input;
      if (container && input) {
        const ctx = RootAPI.getTabsterContext(this._tabster, container);
        let toFocus;
        if (ctx) {
          toFocus = (_a = FocusedElementState.findNextTabbable(this._tabster, ctx, void 0, input, void 0, !dummyInput.isFirst, true)) === null || _a === void 0 ? void 0 : _a.element;
        }
        const memorized = (_b = this._getMemorized()) === null || _b === void 0 ? void 0 : _b.get();
        if (memorized && this._tabster.focusable.isFocusable(memorized)) {
          toFocus = memorized;
        }
        if (toFocus) {
          nativeFocus(toFocus);
        }
      }
    };
    this._tabster = tabster;
    this._getMemorized = getMemorized;
    this._setHandlers(this._onFocusDummyInput);
  }
}
const _moverUpdateAdd = 1;
const _moverUpdateAttr = 2;
const _moverUpdateRemove = 3;
class Mover extends TabsterPart {
  constructor(tabster, element, onDispose, props, sys) {
    var _a;
    super(tabster, element, props);
    this._visible = {};
    this._onIntersection = (entries) => {
      for (const entry of entries) {
        const el = entry.target;
        const id = getElementUId(this._win, el);
        let newVisibility;
        let fullyVisible = this._fullyVisible;
        if (entry.intersectionRatio >= 0.25) {
          newVisibility = entry.intersectionRatio >= 0.75 ? Visibilities.Visible : Visibilities.PartiallyVisible;
          if (newVisibility === Visibilities.Visible) {
            fullyVisible = id;
          }
        } else {
          newVisibility = Visibilities.Invisible;
        }
        if (this._visible[id] !== newVisibility) {
          if (newVisibility === void 0) {
            delete this._visible[id];
            if (fullyVisible === id) {
              delete this._fullyVisible;
            }
          } else {
            this._visible[id] = newVisibility;
            this._fullyVisible = fullyVisible;
          }
          const state = this.getState(el);
          if (state) {
            el.dispatchEvent(new MoverStateEvent(state));
          }
        }
      }
    };
    this._win = tabster.getWindow;
    this.visibilityTolerance = (_a = props.visibilityTolerance) !== null && _a !== void 0 ? _a : 0.8;
    if (this._props.trackState || this._props.visibilityAware) {
      this._intersectionObserver = new IntersectionObserver(this._onIntersection, {
        threshold: [0, 0.25, 0.5, 0.75, 1]
      });
      this._observeState();
    }
    this._onDispose = onDispose;
    const getMemorized = () => props.memorizeCurrent ? this._current : void 0;
    if (!tabster.controlTab) {
      this.dummyManager = new MoverDummyManager(this._element, tabster, getMemorized, sys);
    }
  }
  dispose() {
    var _a;
    this._onDispose(this);
    if (this._intersectionObserver) {
      this._intersectionObserver.disconnect();
      delete this._intersectionObserver;
    }
    delete this._current;
    delete this._fullyVisible;
    delete this._allElements;
    delete this._updateQueue;
    if (this._unobserve) {
      this._unobserve();
      delete this._unobserve;
    }
    const win = this._win();
    if (this._setCurrentTimer) {
      win.clearTimeout(this._setCurrentTimer);
      delete this._setCurrentTimer;
    }
    if (this._updateTimer) {
      win.clearTimeout(this._updateTimer);
      delete this._updateTimer;
    }
    (_a = this.dummyManager) === null || _a === void 0 ? void 0 : _a.dispose();
    delete this.dummyManager;
  }
  setCurrent(element) {
    if (element) {
      this._current = new WeakHTMLElement(this._win, element);
    } else {
      this._current = void 0;
    }
    if ((this._props.trackState || this._props.visibilityAware) && !this._setCurrentTimer) {
      this._setCurrentTimer = this._win().setTimeout(() => {
        var _a;
        delete this._setCurrentTimer;
        const changed = [];
        if (this._current !== this._prevCurrent) {
          changed.push(this._current);
          changed.push(this._prevCurrent);
          this._prevCurrent = this._current;
        }
        for (const weak of changed) {
          const el = weak === null || weak === void 0 ? void 0 : weak.get();
          if (el && ((_a = this._allElements) === null || _a === void 0 ? void 0 : _a.get(el)) === this) {
            const props = this._props;
            if (el && (props.visibilityAware !== void 0 || props.trackState)) {
              const state = this.getState(el);
              if (state) {
                el.dispatchEvent(new MoverStateEvent(state));
              }
            }
          }
        }
      });
    }
  }
  getCurrent() {
    var _a;
    return ((_a = this._current) === null || _a === void 0 ? void 0 : _a.get()) || null;
  }
  findNextTabbable(currentElement, referenceElement, isBackward, ignoreAccessibility) {
    const container = this.getElement();
    const currentIsDummy = container && getDummyInputContainer(currentElement) === container;
    if (!container) {
      return null;
    }
    let next = null;
    let outOfDOMOrder = false;
    let uncontrolled;
    if (this._props.tabbable || currentIsDummy || currentElement && !dom.nodeContains(container, currentElement)) {
      const findProps = {
        currentElement,
        referenceElement,
        container,
        ignoreAccessibility,
        useActiveModalizer: true
      };
      const findPropsOut = {};
      next = this._tabster.focusable[isBackward ? "findPrev" : "findNext"](findProps, findPropsOut);
      outOfDOMOrder = !!findPropsOut.outOfDOMOrder;
      uncontrolled = findPropsOut.uncontrolled;
    }
    return {
      element: next,
      uncontrolled,
      outOfDOMOrder
    };
  }
  acceptElement(element, state) {
    var _a, _b;
    if (!FocusedElementState.isTabbing) {
      return ((_a = state.currentCtx) === null || _a === void 0 ? void 0 : _a.excludedFromMover) ? NodeFilter.FILTER_REJECT : void 0;
    }
    const {
      memorizeCurrent,
      visibilityAware,
      hasDefault = true
    } = this._props;
    const moverElement = this.getElement();
    if (moverElement && (memorizeCurrent || visibilityAware || hasDefault) && (!dom.nodeContains(moverElement, state.from) || getDummyInputContainer(state.from) === moverElement)) {
      let found;
      if (memorizeCurrent) {
        const current = (_b = this._current) === null || _b === void 0 ? void 0 : _b.get();
        if (current && state.acceptCondition(current)) {
          found = current;
        }
      }
      if (!found && hasDefault) {
        found = this._tabster.focusable.findDefault({
          container: moverElement,
          useActiveModalizer: true
        });
      }
      if (!found && visibilityAware) {
        found = this._tabster.focusable.findElement({
          container: moverElement,
          useActiveModalizer: true,
          isBackward: state.isBackward,
          acceptCondition: (el) => {
            var _a2;
            const id = getElementUId(this._win, el);
            const visibility = this._visible[id];
            return moverElement !== el && !!((_a2 = this._allElements) === null || _a2 === void 0 ? void 0 : _a2.get(el)) && state.acceptCondition(el) && (visibility === Visibilities.Visible || visibility === Visibilities.PartiallyVisible && (visibilityAware === Visibilities.PartiallyVisible || !this._fullyVisible));
          }
        });
      }
      if (found) {
        state.found = true;
        state.foundElement = found;
        state.rejectElementsFrom = moverElement;
        state.skippedFocusable = true;
        return NodeFilter.FILTER_ACCEPT;
      }
    }
    return void 0;
  }
  _observeState() {
    const element = this.getElement();
    if (this._unobserve || !element || typeof MutationObserver === "undefined") {
      return;
    }
    const win = this._win();
    const allElements = this._allElements = /* @__PURE__ */ new WeakMap();
    const tabsterFocusable = this._tabster.focusable;
    let updateQueue = this._updateQueue = [];
    const observer = dom.createMutationObserver((mutations) => {
      for (const mutation of mutations) {
        const target = mutation.target;
        const removed = mutation.removedNodes;
        const added = mutation.addedNodes;
        if (mutation.type === "attributes") {
          if (mutation.attributeName === "tabindex") {
            updateQueue.push({
              element: target,
              type: _moverUpdateAttr
            });
          }
        } else {
          for (let i = 0; i < removed.length; i++) {
            updateQueue.push({
              element: removed[i],
              type: _moverUpdateRemove
            });
          }
          for (let i = 0; i < added.length; i++) {
            updateQueue.push({
              element: added[i],
              type: _moverUpdateAdd
            });
          }
        }
      }
      requestUpdate();
    });
    const setElement = (element2, remove) => {
      var _a, _b;
      const current = allElements.get(element2);
      if (current && remove) {
        (_a = this._intersectionObserver) === null || _a === void 0 ? void 0 : _a.unobserve(element2);
        allElements.delete(element2);
      }
      if (!current && !remove) {
        allElements.set(element2, this);
        (_b = this._intersectionObserver) === null || _b === void 0 ? void 0 : _b.observe(element2);
      }
    };
    const updateElement = (element2) => {
      const isFocusable = tabsterFocusable.isFocusable(element2);
      const current = allElements.get(element2);
      if (current) {
        if (!isFocusable) {
          setElement(element2, true);
        }
      } else {
        if (isFocusable) {
          setElement(element2);
        }
      }
    };
    const addNewElements = (element2) => {
      const {
        mover
      } = getMoverGroupper(element2);
      if (mover && mover !== this) {
        if (mover.getElement() === element2 && tabsterFocusable.isFocusable(element2)) {
          setElement(element2);
        } else {
          return;
        }
      }
      const walker = createElementTreeWalker(win.document, element2, (node) => {
        const {
          mover: mover2,
          groupper
        } = getMoverGroupper(node);
        if (mover2 && mover2 !== this) {
          return NodeFilter.FILTER_REJECT;
        }
        const groupperFirstFocusable = groupper === null || groupper === void 0 ? void 0 : groupper.getFirst(true);
        if (groupper && groupper.getElement() !== node && groupperFirstFocusable && groupperFirstFocusable !== node) {
          return NodeFilter.FILTER_REJECT;
        }
        if (tabsterFocusable.isFocusable(node)) {
          setElement(node);
        }
        return NodeFilter.FILTER_SKIP;
      });
      if (walker) {
        walker.currentNode = element2;
        while (walker.nextNode()) {
        }
      }
    };
    const removeWalk = (element2) => {
      const current = allElements.get(element2);
      if (current) {
        setElement(element2, true);
      }
      for (let el = dom.getFirstElementChild(element2); el; el = dom.getNextElementSibling(el)) {
        removeWalk(el);
      }
    };
    const requestUpdate = () => {
      if (!this._updateTimer && updateQueue.length) {
        this._updateTimer = win.setTimeout(() => {
          delete this._updateTimer;
          for (const {
            element: element2,
            type
          } of updateQueue) {
            switch (type) {
              case _moverUpdateAttr:
                updateElement(element2);
                break;
              case _moverUpdateAdd:
                addNewElements(element2);
                break;
              case _moverUpdateRemove:
                removeWalk(element2);
                break;
            }
          }
          updateQueue = this._updateQueue = [];
        }, 0);
      }
    };
    const getMoverGroupper = (element2) => {
      const ret = {};
      for (let el = element2; el; el = dom.getParentElement(el)) {
        const toe = getTabsterOnElement(this._tabster, el);
        if (toe) {
          if (toe.groupper && !ret.groupper) {
            ret.groupper = toe.groupper;
          }
          if (toe.mover) {
            ret.mover = toe.mover;
            break;
          }
        }
      }
      return ret;
    };
    updateQueue.push({
      element,
      type: _moverUpdateAdd
    });
    requestUpdate();
    observer.observe(element, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["tabindex"]
    });
    this._unobserve = () => {
      observer.disconnect();
    };
  }
  getState(element) {
    const id = getElementUId(this._win, element);
    if (id in this._visible) {
      const visibility = this._visible[id] || Visibilities.Invisible;
      const isCurrent = this._current ? this._current.get() === element : void 0;
      return {
        isCurrent,
        visibility
      };
    }
    return void 0;
  }
}
function getDistance(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
  const xDistance = ax2 < bx1 ? bx1 - ax2 : bx2 < ax1 ? ax1 - bx2 : 0;
  const yDistance = ay2 < by1 ? by1 - ay2 : by2 < ay1 ? ay1 - by2 : 0;
  return xDistance === 0 ? yDistance : yDistance === 0 ? xDistance : Math.sqrt(xDistance * xDistance + yDistance * yDistance);
}
class MoverAPI {
  constructor(tabster, getWindow2) {
    this._init = () => {
      const win = this._win();
      win.addEventListener("keydown", this._onKeyDown, true);
      win.addEventListener(MoverMoveFocusEventName, this._onMoveFocus);
      win.addEventListener(MoverMemorizedElementEventName, this._onMemorizedElement);
      this._tabster.focusedElement.subscribe(this._onFocus);
    };
    this._onMoverDispose = (mover) => {
      delete this._movers[mover.id];
    };
    this._onFocus = (element) => {
      var _a;
      let currentFocusableElement = element;
      let deepestFocusableElement = element;
      for (let el = dom.getParentElement(element); el; el = dom.getParentElement(el)) {
        const mover = (_a = getTabsterOnElement(this._tabster, el)) === null || _a === void 0 ? void 0 : _a.mover;
        if (mover) {
          mover.setCurrent(deepestFocusableElement);
          currentFocusableElement = void 0;
        }
        if (!currentFocusableElement && this._tabster.focusable.isFocusable(el)) {
          currentFocusableElement = deepestFocusableElement = el;
        }
      }
    };
    this._onKeyDown = async (event) => {
      var _a;
      if (this._ignoredInputTimer) {
        this._win().clearTimeout(this._ignoredInputTimer);
        delete this._ignoredInputTimer;
      }
      (_a = this._ignoredInputResolve) === null || _a === void 0 ? void 0 : _a.call(this, false);
      if (event.ctrlKey || event.altKey || event.shiftKey || event.metaKey) {
        return;
      }
      const key = event.key;
      let moverKey;
      if (key === Keys.ArrowDown) {
        moverKey = MoverKeys.ArrowDown;
      } else if (key === Keys.ArrowRight) {
        moverKey = MoverKeys.ArrowRight;
      } else if (key === Keys.ArrowUp) {
        moverKey = MoverKeys.ArrowUp;
      } else if (key === Keys.ArrowLeft) {
        moverKey = MoverKeys.ArrowLeft;
      } else if (key === Keys.PageDown) {
        moverKey = MoverKeys.PageDown;
      } else if (key === Keys.PageUp) {
        moverKey = MoverKeys.PageUp;
      } else if (key === Keys.Home) {
        moverKey = MoverKeys.Home;
      } else if (key === Keys.End) {
        moverKey = MoverKeys.End;
      }
      if (!moverKey) {
        return;
      }
      const focused = this._tabster.focusedElement.getFocusedElement();
      if (!focused || await this._isIgnoredInput(focused, key)) {
        return;
      }
      this._moveFocus(focused, moverKey, event);
    };
    this._onMoveFocus = (e2) => {
      var _a;
      const element = e2.composedPath()[0];
      const key = (_a = e2.detail) === null || _a === void 0 ? void 0 : _a.key;
      if (element && key !== void 0 && !e2.defaultPrevented) {
        this._moveFocus(element, key);
        e2.stopImmediatePropagation();
      }
    };
    this._onMemorizedElement = (e2) => {
      var _a;
      const target = e2.composedPath()[0];
      let memorizedElement = (_a = e2.detail) === null || _a === void 0 ? void 0 : _a.memorizedElement;
      if (target) {
        const ctx = RootAPI.getTabsterContext(this._tabster, target);
        const mover = ctx === null || ctx === void 0 ? void 0 : ctx.mover;
        if (mover) {
          if (memorizedElement && !dom.nodeContains(mover.getElement(), memorizedElement)) {
            memorizedElement = void 0;
          }
          mover.setCurrent(memorizedElement);
          e2.stopImmediatePropagation();
        }
      }
    };
    this._tabster = tabster;
    this._win = getWindow2;
    this._movers = {};
    tabster.queueInit(this._init);
  }
  dispose() {
    var _a;
    const win = this._win();
    this._tabster.focusedElement.unsubscribe(this._onFocus);
    (_a = this._ignoredInputResolve) === null || _a === void 0 ? void 0 : _a.call(this, false);
    if (this._ignoredInputTimer) {
      win.clearTimeout(this._ignoredInputTimer);
      delete this._ignoredInputTimer;
    }
    win.removeEventListener("keydown", this._onKeyDown, true);
    win.removeEventListener(MoverMoveFocusEventName, this._onMoveFocus);
    win.removeEventListener(MoverMemorizedElementEventName, this._onMemorizedElement);
    Object.keys(this._movers).forEach((moverId) => {
      if (this._movers[moverId]) {
        this._movers[moverId].dispose();
        delete this._movers[moverId];
      }
    });
  }
  createMover(element, props, sys) {
    const newMover = new Mover(this._tabster, element, this._onMoverDispose, props, sys);
    this._movers[newMover.id] = newMover;
    return newMover;
  }
  moveFocus(fromElement, key) {
    return this._moveFocus(fromElement, key);
  }
  _moveFocus(fromElement, key, relatedEvent) {
    var _a, _b;
    const tabster = this._tabster;
    const ctx = RootAPI.getTabsterContext(tabster, fromElement, {
      checkRtl: true
    });
    if (!ctx || !ctx.mover || ctx.excludedFromMover || relatedEvent && ctx.ignoreKeydown(relatedEvent)) {
      return null;
    }
    const mover = ctx.mover;
    const container = mover.getElement();
    if (ctx.groupperBeforeMover) {
      const groupper = ctx.groupper;
      if (groupper && !groupper.isActive(true)) {
        for (let el = dom.getParentElement(groupper.getElement()); el && el !== container; el = dom.getParentElement(el)) {
          if ((_b = (_a = getTabsterOnElement(tabster, el)) === null || _a === void 0 ? void 0 : _a.groupper) === null || _b === void 0 ? void 0 : _b.isActive(true)) {
            return null;
          }
        }
      } else {
        return null;
      }
    }
    if (!container) {
      return null;
    }
    const focusable = tabster.focusable;
    const moverProps = mover.getProps();
    const direction = moverProps.direction || MoverDirections.Both;
    const isBoth = direction === MoverDirections.Both;
    const isVertical = isBoth || direction === MoverDirections.Vertical;
    const isHorizontal = isBoth || direction === MoverDirections.Horizontal;
    const isGridLinear = direction === MoverDirections.GridLinear;
    const isGrid = isGridLinear || direction === MoverDirections.Grid;
    const isCyclic = moverProps.cyclic;
    let next;
    let scrollIntoViewArg;
    let focusedElementRect;
    let focusedElementX1 = 0;
    let focusedElementX2 = 0;
    if (isGrid) {
      focusedElementRect = fromElement.getBoundingClientRect();
      focusedElementX1 = Math.ceil(focusedElementRect.left);
      focusedElementX2 = Math.floor(focusedElementRect.right);
    }
    if (ctx.rtl) {
      if (key === MoverKeys.ArrowRight) {
        key = MoverKeys.ArrowLeft;
      } else if (key === MoverKeys.ArrowLeft) {
        key = MoverKeys.ArrowRight;
      }
    }
    if (key === MoverKeys.ArrowDown && isVertical || key === MoverKeys.ArrowRight && (isHorizontal || isGrid)) {
      next = focusable.findNext({
        currentElement: fromElement,
        container,
        useActiveModalizer: true
      });
      if (next && isGrid) {
        const nextElementX1 = Math.ceil(next.getBoundingClientRect().left);
        if (!isGridLinear && focusedElementX2 > nextElementX1) {
          next = void 0;
        }
      } else if (!next && isCyclic) {
        next = focusable.findFirst({
          container,
          useActiveModalizer: true
        });
      }
    } else if (key === MoverKeys.ArrowUp && isVertical || key === MoverKeys.ArrowLeft && (isHorizontal || isGrid)) {
      next = focusable.findPrev({
        currentElement: fromElement,
        container,
        useActiveModalizer: true
      });
      if (next && isGrid) {
        const nextElementX2 = Math.floor(next.getBoundingClientRect().right);
        if (!isGridLinear && nextElementX2 > focusedElementX1) {
          next = void 0;
        }
      } else if (!next && isCyclic) {
        next = focusable.findLast({
          container,
          useActiveModalizer: true
        });
      }
    } else if (key === MoverKeys.Home) {
      if (isGrid) {
        focusable.findElement({
          container,
          currentElement: fromElement,
          useActiveModalizer: true,
          isBackward: true,
          acceptCondition: (el) => {
            var _a2;
            if (!focusable.isFocusable(el)) {
              return false;
            }
            const nextElementX1 = Math.ceil((_a2 = el.getBoundingClientRect().left) !== null && _a2 !== void 0 ? _a2 : 0);
            if (el !== fromElement && focusedElementX1 <= nextElementX1) {
              return true;
            }
            next = el;
            return false;
          }
        });
      } else {
        next = focusable.findFirst({
          container,
          useActiveModalizer: true
        });
      }
    } else if (key === MoverKeys.End) {
      if (isGrid) {
        focusable.findElement({
          container,
          currentElement: fromElement,
          useActiveModalizer: true,
          acceptCondition: (el) => {
            var _a2;
            if (!focusable.isFocusable(el)) {
              return false;
            }
            const nextElementX1 = Math.ceil((_a2 = el.getBoundingClientRect().left) !== null && _a2 !== void 0 ? _a2 : 0);
            if (el !== fromElement && focusedElementX1 >= nextElementX1) {
              return true;
            }
            next = el;
            return false;
          }
        });
      } else {
        next = focusable.findLast({
          container,
          useActiveModalizer: true
        });
      }
    } else if (key === MoverKeys.PageUp) {
      focusable.findElement({
        currentElement: fromElement,
        container,
        useActiveModalizer: true,
        isBackward: true,
        acceptCondition: (el) => {
          if (!focusable.isFocusable(el)) {
            return false;
          }
          if (isElementVerticallyVisibleInContainer(this._win, el, mover.visibilityTolerance)) {
            next = el;
            return false;
          }
          return true;
        }
      });
      if (isGrid && next) {
        const firstColumnX1 = Math.ceil(next.getBoundingClientRect().left);
        focusable.findElement({
          currentElement: next,
          container,
          useActiveModalizer: true,
          acceptCondition: (el) => {
            if (!focusable.isFocusable(el)) {
              return false;
            }
            const nextElementX1 = Math.ceil(el.getBoundingClientRect().left);
            if (focusedElementX1 < nextElementX1 || firstColumnX1 >= nextElementX1) {
              return true;
            }
            next = el;
            return false;
          }
        });
      }
      scrollIntoViewArg = false;
    } else if (key === MoverKeys.PageDown) {
      focusable.findElement({
        currentElement: fromElement,
        container,
        useActiveModalizer: true,
        acceptCondition: (el) => {
          if (!focusable.isFocusable(el)) {
            return false;
          }
          if (isElementVerticallyVisibleInContainer(this._win, el, mover.visibilityTolerance)) {
            next = el;
            return false;
          }
          return true;
        }
      });
      if (isGrid && next) {
        const lastColumnX1 = Math.ceil(next.getBoundingClientRect().left);
        focusable.findElement({
          currentElement: next,
          container,
          useActiveModalizer: true,
          isBackward: true,
          acceptCondition: (el) => {
            if (!focusable.isFocusable(el)) {
              return false;
            }
            const nextElementX1 = Math.ceil(el.getBoundingClientRect().left);
            if (focusedElementX1 > nextElementX1 || lastColumnX1 <= nextElementX1) {
              return true;
            }
            next = el;
            return false;
          }
        });
      }
      scrollIntoViewArg = true;
    } else if (isGrid) {
      const isBackward = key === MoverKeys.ArrowUp;
      const ax1 = focusedElementX1;
      const ay1 = Math.ceil(focusedElementRect.top);
      const ax2 = focusedElementX2;
      const ay2 = Math.floor(focusedElementRect.bottom);
      let targetElement;
      let lastDistance;
      let lastIntersection = 0;
      focusable.findAll({
        container,
        currentElement: fromElement,
        isBackward,
        onElement: (el) => {
          const rect = el.getBoundingClientRect();
          const bx1 = Math.ceil(rect.left);
          const by1 = Math.ceil(rect.top);
          const bx2 = Math.floor(rect.right);
          const by2 = Math.floor(rect.bottom);
          if (isBackward && ay1 < by2 || !isBackward && ay2 > by1) {
            return true;
          }
          const xIntersectionWidth = Math.ceil(Math.min(ax2, bx2)) - Math.floor(Math.max(ax1, bx1));
          const minWidth = Math.ceil(Math.min(ax2 - ax1, bx2 - bx1));
          if (xIntersectionWidth > 0 && minWidth >= xIntersectionWidth) {
            const intersection = xIntersectionWidth / minWidth;
            if (intersection > lastIntersection) {
              targetElement = el;
              lastIntersection = intersection;
            }
          } else if (lastIntersection === 0) {
            const distance = getDistance(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2);
            if (lastDistance === void 0 || distance < lastDistance) {
              lastDistance = distance;
              targetElement = el;
            }
          } else if (lastIntersection > 0) {
            return false;
          }
          return true;
        }
      });
      next = targetElement;
    }
    if (next && (!relatedEvent || relatedEvent && container.dispatchEvent(new TabsterMoveFocusEvent({
      by: "mover",
      owner: container,
      next,
      relatedEvent
    })))) {
      if (scrollIntoViewArg !== void 0) {
        scrollIntoView(this._win, next, scrollIntoViewArg);
      }
      if (relatedEvent) {
        relatedEvent.preventDefault();
        relatedEvent.stopImmediatePropagation();
      }
      nativeFocus(next);
      return next;
    }
    return null;
  }
  async _isIgnoredInput(element, key) {
    if (element.getAttribute("aria-expanded") === "true" && element.hasAttribute("aria-activedescendant")) {
      return true;
    }
    if (matchesSelector(element, _inputSelector)) {
      let selectionStart = 0;
      let selectionEnd = 0;
      let textLength = 0;
      let asyncRet;
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        const type = element.type;
        const value = element.value;
        textLength = (value || "").length;
        if (type === "email" || type === "number") {
          if (textLength) {
            const selection = dom.getSelection(element);
            if (selection) {
              const initialLength = selection.toString().length;
              const isBackward = key === Keys.ArrowLeft || key === Keys.ArrowUp;
              selection.modify("extend", isBackward ? "backward" : "forward", "character");
              if (initialLength !== selection.toString().length) {
                selection.modify("extend", isBackward ? "forward" : "backward", "character");
                return true;
              } else {
                textLength = 0;
              }
            }
          }
        } else {
          const selStart = element.selectionStart;
          if (selStart === null) {
            return type === "hidden";
          }
          selectionStart = selStart || 0;
          selectionEnd = element.selectionEnd || 0;
        }
      } else if (element.contentEditable === "true") {
        asyncRet = new (getPromise(this._win))((resolve) => {
          this._ignoredInputResolve = (value) => {
            delete this._ignoredInputResolve;
            resolve(value);
          };
          const win = this._win();
          if (this._ignoredInputTimer) {
            win.clearTimeout(this._ignoredInputTimer);
          }
          const {
            anchorNode: prevAnchorNode,
            focusNode: prevFocusNode,
            anchorOffset: prevAnchorOffset,
            focusOffset: prevFocusOffset
          } = dom.getSelection(element) || {};
          this._ignoredInputTimer = win.setTimeout(() => {
            var _a, _b, _c;
            delete this._ignoredInputTimer;
            const {
              anchorNode,
              focusNode,
              anchorOffset,
              focusOffset
            } = dom.getSelection(element) || {};
            if (anchorNode !== prevAnchorNode || focusNode !== prevFocusNode || anchorOffset !== prevAnchorOffset || focusOffset !== prevFocusOffset) {
              (_a = this._ignoredInputResolve) === null || _a === void 0 ? void 0 : _a.call(this, false);
              return;
            }
            selectionStart = anchorOffset || 0;
            selectionEnd = focusOffset || 0;
            textLength = ((_b = element.textContent) === null || _b === void 0 ? void 0 : _b.length) || 0;
            if (anchorNode && focusNode) {
              if (dom.nodeContains(element, anchorNode) && dom.nodeContains(element, focusNode)) {
                if (anchorNode !== element) {
                  let anchorFound = false;
                  const addOffsets = (node) => {
                    if (node === anchorNode) {
                      anchorFound = true;
                    } else if (node === focusNode) {
                      return true;
                    }
                    const nodeText = node.textContent;
                    if (nodeText && !dom.getFirstChild(node)) {
                      const len = nodeText.length;
                      if (anchorFound) {
                        if (focusNode !== anchorNode) {
                          selectionEnd += len;
                        }
                      } else {
                        selectionStart += len;
                        selectionEnd += len;
                      }
                    }
                    let stop = false;
                    for (let e2 = dom.getFirstChild(node); e2 && !stop; e2 = e2.nextSibling) {
                      stop = addOffsets(e2);
                    }
                    return stop;
                  };
                  addOffsets(element);
                }
              }
            }
            (_c = this._ignoredInputResolve) === null || _c === void 0 ? void 0 : _c.call(this, true);
          }, 0);
        });
      }
      if (asyncRet && !await asyncRet) {
        return true;
      }
      if (selectionStart !== selectionEnd) {
        return true;
      }
      if (selectionStart > 0 && (key === Keys.ArrowLeft || key === Keys.ArrowUp || key === Keys.Home)) {
        return true;
      }
      if (selectionStart < textLength && (key === Keys.ArrowRight || key === Keys.ArrowDown || key === Keys.End)) {
        return true;
      }
    }
    return false;
  }
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
function observeMutations(doc, tabster, updateTabsterByAttribute2, syncState) {
  if (typeof MutationObserver === "undefined") {
    return () => {
    };
  }
  const getWindow2 = tabster.getWindow;
  let elementByUId;
  const onMutation = (mutations) => {
    var _a, _b, _c, _d, _e;
    const removedNodes = /* @__PURE__ */ new Set();
    for (const mutation of mutations) {
      const target = mutation.target;
      const removed = mutation.removedNodes;
      const added = mutation.addedNodes;
      if (mutation.type === "attributes") {
        if (mutation.attributeName === TABSTER_ATTRIBUTE_NAME) {
          if (!removedNodes.has(target)) {
            updateTabsterByAttribute2(tabster, target);
          }
        }
      } else {
        for (let i = 0; i < removed.length; i++) {
          const removedNode = removed[i];
          removedNodes.add(removedNode);
          updateTabsterElements(removedNode, true);
          (_b = (_a = tabster._dummyObserver).domChanged) === null || _b === void 0 ? void 0 : _b.call(_a, target);
        }
        for (let i = 0; i < added.length; i++) {
          updateTabsterElements(added[i]);
          (_d = (_c = tabster._dummyObserver).domChanged) === null || _d === void 0 ? void 0 : _d.call(_c, target);
        }
      }
    }
    removedNodes.clear();
    (_e = tabster.modalizer) === null || _e === void 0 ? void 0 : _e.hiddenUpdate();
  };
  function updateTabsterElements(node, removed) {
    if (!elementByUId) {
      elementByUId = getInstanceContext(getWindow2).elementByUId;
    }
    processNode(node, removed);
    const walker = createElementTreeWalker(doc, node, (element) => {
      return processNode(element, removed);
    });
    if (walker) {
      while (walker.nextNode()) {
      }
    }
  }
  function processNode(element, removed) {
    var _a;
    if (!element.getAttribute) {
      return NodeFilter.FILTER_SKIP;
    }
    const uid = element.__tabsterElementUID;
    if (uid && elementByUId) {
      if (removed) {
        delete elementByUId[uid];
      } else {
        (_a = elementByUId[uid]) !== null && _a !== void 0 ? _a : elementByUId[uid] = new WeakHTMLElement(getWindow2, element);
      }
    }
    if (getTabsterOnElement(tabster, element) || element.hasAttribute(TABSTER_ATTRIBUTE_NAME)) {
      updateTabsterByAttribute2(tabster, element, removed);
    }
    return NodeFilter.FILTER_SKIP;
  }
  const observer = dom.createMutationObserver(onMutation);
  if (syncState) {
    updateTabsterElements(getWindow2().document.body);
  }
  observer.observe(doc, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: [TABSTER_ATTRIBUTE_NAME]
  });
  return () => {
    observer.disconnect();
  };
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
class UncontrolledAPI {
  constructor(isUncontrolledCompletely) {
    this._isUncontrolledCompletely = isUncontrolledCompletely;
  }
  isUncontrolledCompletely(element, completely) {
    var _a;
    const isUncontrolledCompletely = (_a = this._isUncontrolledCompletely) === null || _a === void 0 ? void 0 : _a.call(this, element, completely);
    return isUncontrolledCompletely === void 0 ? completely : isUncontrolledCompletely;
  }
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
class Restorer extends TabsterPart {
  constructor(tabster, element, props) {
    var _a;
    super(tabster, element, props);
    this._hasFocus = false;
    this._onFocusOut = (e2) => {
      var _a2;
      const element2 = (_a2 = this._element) === null || _a2 === void 0 ? void 0 : _a2.get();
      if (element2 && e2.relatedTarget === null) {
        element2.dispatchEvent(new RestorerRestoreFocusEvent());
      }
      if (element2 && !dom.nodeContains(element2, e2.relatedTarget)) {
        this._hasFocus = false;
      }
    };
    this._onFocusIn = () => {
      this._hasFocus = true;
    };
    if (this._props.type === RestorerTypes.Source) {
      const element2 = (_a = this._element) === null || _a === void 0 ? void 0 : _a.get();
      element2 === null || element2 === void 0 ? void 0 : element2.addEventListener("focusout", this._onFocusOut);
      element2 === null || element2 === void 0 ? void 0 : element2.addEventListener("focusin", this._onFocusIn);
      this._hasFocus = dom.nodeContains(element2, element2 && dom.getActiveElement(element2.ownerDocument));
    }
  }
  dispose() {
    var _a;
    if (this._props.type === RestorerTypes.Source) {
      const element = (_a = this._element) === null || _a === void 0 ? void 0 : _a.get();
      element === null || element === void 0 ? void 0 : element.removeEventListener("focusout", this._onFocusOut);
      element === null || element === void 0 ? void 0 : element.removeEventListener("focusin", this._onFocusIn);
      if (this._hasFocus) {
        const doc = this._tabster.getWindow().document;
        doc.body.dispatchEvent(new RestorerRestoreFocusEvent());
      }
    }
  }
}
class History {
  constructor(getWindow2) {
    this._stack = [];
    this._getWindow = getWindow2;
  }
  /**
   * Push a weak element to the top of the history stack.
   * If the stack is full, the bottom weak element is removed.
   * If the element is already at the top of the stack, it is not duplicated.
   */
  push(element) {
    var _a;
    if (((_a = this._stack[this._stack.length - 1]) === null || _a === void 0 ? void 0 : _a.get()) === element) {
      return;
    }
    if (this._stack.length > History.DEPTH) {
      this._stack.shift();
    }
    this._stack.push(new WeakHTMLElement(this._getWindow, element));
  }
  /**
   * Pop the first element from the history that satisfies the callback.
   * The history is searched from the top to the bottom (from the most recent to the least recent).
   *
   * If a weak reference to the element is broken,
   * or the element is no longer in the DOM,
   * the element is removed from the top of the stack while popping.
   *
   * If no matching element is found, undefined is returned.
   * If the stack is empty, undefined is returned.
   */
  pop(filter) {
    if (filter === void 0) {
      filter = () => true;
    }
    var _a;
    const doc = this._getWindow().document;
    for (let index = this._stack.length - 1; index >= 0; index--) {
      const maybeElement = (_a = this._stack.pop()) === null || _a === void 0 ? void 0 : _a.get();
      if (maybeElement && dom.nodeContains(doc.body, dom.getParentElement(maybeElement)) && filter(maybeElement)) {
        return maybeElement;
      }
    }
    return void 0;
  }
}
History.DEPTH = 10;
class RestorerAPI {
  constructor(tabster) {
    this._onRestoreFocus = (e2) => {
      var _a, _b;
      this._focusedElementState.cancelAsyncFocus(AsyncFocusSources.Restorer);
      const source = e2.composedPath()[0];
      if (source) {
        const sourceId = (_b = (_a = getTabsterOnElement(this._tabster, source)) === null || _a === void 0 ? void 0 : _a.restorer) === null || _b === void 0 ? void 0 : _b.getProps().id;
        this._focusedElementState.requestAsyncFocus(AsyncFocusSources.Restorer, () => this._restoreFocus(source, sourceId), 0);
      }
    };
    this._onFocusIn = (element) => {
      var _a;
      if (!element) {
        return;
      }
      const tabsterAttribute = getTabsterOnElement(this._tabster, element);
      if (((_a = tabsterAttribute === null || tabsterAttribute === void 0 ? void 0 : tabsterAttribute.restorer) === null || _a === void 0 ? void 0 : _a.getProps().type) !== RestorerTypes.Target) {
        return;
      }
      this._history.push(element);
    };
    this._restoreFocus = (source, sourceId) => {
      var _a;
      const doc = this._getWindow().document;
      if (dom.getActiveElement(doc) !== doc.body) {
        return;
      }
      if (
        // clicking on any empty space focuses body - this is can be a false positive
        !this._keyboardNavState.isNavigatingWithKeyboard() && // Source no longer exists on DOM - always restore focus
        dom.nodeContains(doc.body, source)
      ) {
        return;
      }
      const getId = (element) => {
        var _a2, _b;
        const restorerProps = (_b = (_a2 = getTabsterOnElement(this._tabster, element)) === null || _a2 === void 0 ? void 0 : _a2.restorer) === null || _b === void 0 ? void 0 : _b.getProps();
        return restorerProps ? restorerProps.id : null;
      };
      (_a = this._history.pop((target) => sourceId === getId(target))) === null || _a === void 0 ? void 0 : _a.focus();
    };
    this._tabster = tabster;
    this._getWindow = tabster.getWindow;
    this._getWindow().addEventListener(RestorerRestoreFocusEventName, this._onRestoreFocus);
    this._history = new History(this._getWindow);
    this._keyboardNavState = tabster.keyboardNavigation;
    this._focusedElementState = tabster.focusedElement;
    this._focusedElementState.subscribe(this._onFocusIn);
  }
  dispose() {
    const win = this._getWindow();
    this._focusedElementState.unsubscribe(this._onFocusIn);
    this._focusedElementState.cancelAsyncFocus(AsyncFocusSources.Restorer);
    win.removeEventListener(RestorerRestoreFocusEventName, this._onRestoreFocus);
  }
  createRestorer(element, props) {
    const restorer = new Restorer(this._tabster, element, props);
    if (props.type === RestorerTypes.Target && dom.getActiveElement(element.ownerDocument) === element) {
      this._history.push(element);
    }
    return restorer;
  }
}
/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
class Tabster {
  constructor(tabster) {
    this.keyboardNavigation = tabster.keyboardNavigation;
    this.focusedElement = tabster.focusedElement;
    this.focusable = tabster.focusable;
    this.root = tabster.root;
    this.uncontrolled = tabster.uncontrolled;
    this.core = tabster;
  }
}
class TabsterCore {
  constructor(win, props) {
    var _a, _b;
    this._forgetMemorizedElements = [];
    this._wrappers = /* @__PURE__ */ new Set();
    this._initQueue = [];
    this._version = "8.5.6";
    this._noop = false;
    this.getWindow = () => {
      if (!this._win) {
        throw new Error("Using disposed Tabster.");
      }
      return this._win;
    };
    this._storage = createWeakMap(win);
    this._win = win;
    const getWindow2 = this.getWindow;
    if (props === null || props === void 0 ? void 0 : props.DOMAPI) {
      setDOMAPI({
        ...props.DOMAPI
      });
    }
    this.keyboardNavigation = new KeyboardNavigationState(getWindow2);
    this.focusedElement = new FocusedElementState(this, getWindow2);
    this.focusable = new FocusableAPI(this);
    this.root = new RootAPI(this, props === null || props === void 0 ? void 0 : props.autoRoot);
    this.uncontrolled = new UncontrolledAPI(
      // TODO: Remove checkUncontrolledTrappingFocus in the next major version.
      (props === null || props === void 0 ? void 0 : props.checkUncontrolledCompletely) || (props === null || props === void 0 ? void 0 : props.checkUncontrolledTrappingFocus)
    );
    this.controlTab = (_a = props === null || props === void 0 ? void 0 : props.controlTab) !== null && _a !== void 0 ? _a : true;
    this.rootDummyInputs = !!(props === null || props === void 0 ? void 0 : props.rootDummyInputs);
    this._dummyObserver = new DummyInputObserver(getWindow2);
    this.getParent = (_b = props === null || props === void 0 ? void 0 : props.getParent) !== null && _b !== void 0 ? _b : dom.getParentNode;
    this.internal = {
      stopObserver: () => {
        if (this._unobserve) {
          this._unobserve();
          delete this._unobserve;
        }
      },
      resumeObserver: (syncState) => {
        if (!this._unobserve) {
          const doc = getWindow2().document;
          this._unobserve = observeMutations(doc, this, updateTabsterByAttribute, syncState);
        }
      }
    };
    startFakeWeakRefsCleanup(getWindow2);
    this.queueInit(() => {
      this.internal.resumeObserver(true);
    });
  }
  /**
   * Merges external props with the current props. Not all
   * props can/should be mergeable, so let's add more as we move on.
   * @param props Tabster props
   */
  _mergeProps(props) {
    var _a;
    if (!props) {
      return;
    }
    this.getParent = (_a = props.getParent) !== null && _a !== void 0 ? _a : this.getParent;
  }
  createTabster(noRefCount, props) {
    const wrapper = new Tabster(this);
    if (!noRefCount) {
      this._wrappers.add(wrapper);
    }
    this._mergeProps(props);
    return wrapper;
  }
  disposeTabster(wrapper, allInstances) {
    if (allInstances) {
      this._wrappers.clear();
    } else {
      this._wrappers.delete(wrapper);
    }
    if (this._wrappers.size === 0) {
      this.dispose();
    }
  }
  dispose() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    this.internal.stopObserver();
    const win = this._win;
    win === null || win === void 0 ? void 0 : win.clearTimeout(this._initTimer);
    delete this._initTimer;
    this._initQueue = [];
    this._forgetMemorizedElements = [];
    if (win && this._forgetMemorizedTimer) {
      win.clearTimeout(this._forgetMemorizedTimer);
      delete this._forgetMemorizedTimer;
    }
    (_a = this.outline) === null || _a === void 0 ? void 0 : _a.dispose();
    (_b = this.crossOrigin) === null || _b === void 0 ? void 0 : _b.dispose();
    (_c = this.deloser) === null || _c === void 0 ? void 0 : _c.dispose();
    (_d = this.groupper) === null || _d === void 0 ? void 0 : _d.dispose();
    (_e = this.mover) === null || _e === void 0 ? void 0 : _e.dispose();
    (_f = this.modalizer) === null || _f === void 0 ? void 0 : _f.dispose();
    (_g = this.observedElement) === null || _g === void 0 ? void 0 : _g.dispose();
    (_h = this.restorer) === null || _h === void 0 ? void 0 : _h.dispose();
    this.keyboardNavigation.dispose();
    this.focusable.dispose();
    this.focusedElement.dispose();
    this.root.dispose();
    this._dummyObserver.dispose();
    stopFakeWeakRefsCleanupAndClearStorage(this.getWindow);
    clearElementCache(this.getWindow);
    this._storage = /* @__PURE__ */ new WeakMap();
    this._wrappers.clear();
    if (win) {
      disposeInstanceContext(win);
      delete win.__tabsterInstance;
      delete this._win;
    }
  }
  storageEntry(element, addremove) {
    const storage = this._storage;
    let entry = storage.get(element);
    if (entry) {
      if (addremove === false && Object.keys(entry).length === 0) {
        storage.delete(element);
      }
    } else if (addremove === true) {
      entry = {};
      storage.set(element, entry);
    }
    return entry;
  }
  forceCleanup() {
    if (!this._win) {
      return;
    }
    this._forgetMemorizedElements.push(this._win.document.body);
    if (this._forgetMemorizedTimer) {
      return;
    }
    this._forgetMemorizedTimer = this._win.setTimeout(() => {
      delete this._forgetMemorizedTimer;
      for (let el = this._forgetMemorizedElements.shift(); el; el = this._forgetMemorizedElements.shift()) {
        clearElementCache(this.getWindow, el);
        FocusedElementState.forgetMemorized(this.focusedElement, el);
      }
    }, 0);
    cleanupFakeWeakRefs(this.getWindow, true);
  }
  queueInit(callback) {
    var _a;
    if (!this._win) {
      return;
    }
    this._initQueue.push(callback);
    if (!this._initTimer) {
      this._initTimer = (_a = this._win) === null || _a === void 0 ? void 0 : _a.setTimeout(() => {
        delete this._initTimer;
        this.drainInitQueue();
      }, 0);
    }
  }
  drainInitQueue() {
    if (!this._win) {
      return;
    }
    const queue = this._initQueue;
    this._initQueue = [];
    queue.forEach((callback) => callback());
  }
}
function createTabster(win, props) {
  let tabster = getCurrentTabster(win);
  if (tabster) {
    return tabster.createTabster(false, props);
  }
  tabster = new TabsterCore(win, props);
  win.__tabsterInstance = tabster;
  return tabster.createTabster();
}
function getGroupper(tabster) {
  const tabsterCore = tabster.core;
  if (!tabsterCore.groupper) {
    tabsterCore.groupper = new GroupperAPI(tabsterCore, tabsterCore.getWindow);
  }
  return tabsterCore.groupper;
}
function getMover(tabster) {
  const tabsterCore = tabster.core;
  if (!tabsterCore.mover) {
    tabsterCore.mover = new MoverAPI(tabsterCore, tabsterCore.getWindow);
  }
  return tabsterCore.mover;
}
function getModalizer(tabster, alwaysAccessibleSelector, accessibleCheck) {
  const tabsterCore = tabster.core;
  if (!tabsterCore.modalizer) {
    tabsterCore.modalizer = new ModalizerAPI(tabsterCore, alwaysAccessibleSelector, accessibleCheck);
  }
  return tabsterCore.modalizer;
}
function getRestorer(tabster) {
  const tabsterCore = tabster.core;
  if (!tabsterCore.restorer) {
    tabsterCore.restorer = new RestorerAPI(tabsterCore);
  }
  return tabsterCore.restorer;
}
function disposeTabster(tabster, allInstances) {
  tabster.core.disposeTabster(tabster, allInstances);
}
function getCurrentTabster(win) {
  return win.__tabsterInstance;
}
const DEFAULT_FACTORY = (tabster) => {
  return tabster;
};
function createTabsterWithConfig(targetDocument) {
  const defaultView = (targetDocument === null || targetDocument === void 0 ? void 0 : targetDocument.defaultView) || void 0;
  const shadowDOMAPI = defaultView === null || defaultView === void 0 ? void 0 : defaultView.__tabsterShadowDOMAPI;
  if (defaultView) {
    return createTabster(defaultView, {
      autoRoot: {},
      controlTab: false,
      getParent,
      // The non-undefined return value of checkUncontrolledCompletely() dominates the value that the element might
      // have in its `uncontrolled: { completely: true }` part of the tabster attribute. We must make sure to return
      // undefined if we want the value from tabster attribute to be respected.
      checkUncontrolledCompletely: (element) => {
        var _element_firstElementChild;
        return ((_element_firstElementChild = element.firstElementChild) === null || _element_firstElementChild === void 0 ? void 0 : _element_firstElementChild.hasAttribute("data-is-focus-trap-zone-bumper")) === true || void 0;
      },
      DOMAPI: shadowDOMAPI
    });
  }
}
function useTabster(factory = DEFAULT_FACTORY) {
  const { targetDocument } = useFluent();
  const factoryResultRef = reactExports.useRef(null);
  useIsomorphicLayoutEffect(() => {
    const tabster = createTabsterWithConfig(targetDocument);
    if (tabster) {
      factoryResultRef.current = factory(tabster);
      return () => {
        disposeTabster(tabster);
        factoryResultRef.current = null;
      };
    }
  }, [
    targetDocument,
    factory
  ]);
  return factoryResultRef;
}
const useTabsterAttributes = (props) => {
  useTabster();
  const strAttr = getTabsterAttribute(props, true);
  return reactExports.useMemo(() => ({
    [TABSTER_ATTRIBUTE_NAME]: strAttr
  }), [
    strAttr
  ]);
};
const useArrowNavigationGroup = (options = {}) => {
  const {
    circular,
    axis,
    memorizeCurrent = true,
    tabbable,
    ignoreDefaultKeydown,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_hasDefault
  } = options;
  useTabster(getMover);
  return useTabsterAttributes({
    mover: {
      cyclic: !!circular,
      direction: axisToMoverDirection(axis !== null && axis !== void 0 ? axis : "vertical"),
      memorizeCurrent,
      tabbable,
      hasDefault: unstable_hasDefault
    },
    ...ignoreDefaultKeydown && {
      focusable: {
        ignoreKeydown: ignoreDefaultKeydown
      }
    }
  });
};
function axisToMoverDirection(axis) {
  switch (axis) {
    case "horizontal":
      return MoverDirections.Horizontal;
    case "grid":
      return MoverDirections.Grid;
    case "grid-linear":
      return MoverDirections.GridLinear;
    case "both":
      return MoverDirections.Both;
    case "vertical":
    default:
      return MoverDirections.Vertical;
  }
}
const useFocusableGroup = (options) => {
  useTabster(getGroupper);
  return useTabsterAttributes({
    groupper: {
      tabbability: getTabbability(options === null || options === void 0 ? void 0 : options.tabBehavior)
    },
    focusable: {
      ignoreKeydown: options === null || options === void 0 ? void 0 : options.ignoreDefaultKeydown
    }
  });
};
const getTabbability = (tabBehavior) => {
  switch (tabBehavior) {
    case "unlimited":
      return GroupperTabbabilities.Unlimited;
    case "limited":
      return GroupperTabbabilities.Limited;
    case "limited-trap-focus":
      return GroupperTabbabilities.LimitedTrapFocus;
    default:
      return void 0;
  }
};
const useFocusFinders = () => {
  const tabsterRef = useTabster();
  const { targetDocument } = useFluent();
  const findAllFocusable = reactExports.useCallback((container, acceptCondition) => {
    var _tabsterRef_current;
    return container && ((_tabsterRef_current = tabsterRef.current) === null || _tabsterRef_current === void 0 ? void 0 : _tabsterRef_current.focusable.findAll({
      container,
      acceptCondition
    })) || [];
  }, [
    tabsterRef
  ]);
  const findFirstFocusable = reactExports.useCallback((container) => {
    var _tabsterRef_current;
    return container && ((_tabsterRef_current = tabsterRef.current) === null || _tabsterRef_current === void 0 ? void 0 : _tabsterRef_current.focusable.findFirst({
      container
    }));
  }, [
    tabsterRef
  ]);
  const findLastFocusable = reactExports.useCallback((container) => {
    var _tabsterRef_current;
    return container && ((_tabsterRef_current = tabsterRef.current) === null || _tabsterRef_current === void 0 ? void 0 : _tabsterRef_current.focusable.findLast({
      container
    }));
  }, [
    tabsterRef
  ]);
  const findNextFocusable = reactExports.useCallback((currentElement, options = {}) => {
    if (!tabsterRef.current || !targetDocument || !currentElement) {
      return null;
    }
    const { container = targetDocument.body } = options;
    return tabsterRef.current.focusable.findNext({
      currentElement,
      container
    });
  }, [
    tabsterRef,
    targetDocument
  ]);
  const findPrevFocusable = reactExports.useCallback((currentElement, options = {}) => {
    if (!tabsterRef.current || !targetDocument || !currentElement) {
      return null;
    }
    const { container = targetDocument.body } = options;
    return tabsterRef.current.focusable.findPrev({
      currentElement,
      container
    });
  }, [
    tabsterRef,
    targetDocument
  ]);
  return {
    findAllFocusable,
    findFirstFocusable,
    findLastFocusable,
    findNextFocusable,
    findPrevFocusable
  };
};
const FOCUS_VISIBLE_ATTR = "data-fui-focus-visible";
const FOCUS_WITHIN_ATTR = "data-fui-focus-within";
function applyFocusVisiblePolyfill(scope, targetWindow) {
  if (alreadyInScope(scope)) {
    return () => void 0;
  }
  const state = {
    current: void 0
  };
  const keyborg = createKeyborg(targetWindow);
  function registerElementIfNavigating(el) {
    if (keyborg.isNavigatingWithKeyboard() && isHTMLElement$2(el)) {
      state.current = el;
      el.setAttribute(FOCUS_VISIBLE_ATTR, "");
    }
  }
  function disposeCurrentElement() {
    if (state.current) {
      state.current.removeAttribute(FOCUS_VISIBLE_ATTR);
      state.current = void 0;
    }
  }
  keyborg.subscribe((isNavigatingWithKeyboard) => {
    if (!isNavigatingWithKeyboard) {
      disposeCurrentElement();
    } else {
      registerElementIfNavigating(targetWindow.document.activeElement);
    }
  });
  const keyborgListener = (e2) => {
    disposeCurrentElement();
    const target = e2.composedPath()[0];
    registerElementIfNavigating(target);
  };
  const blurListener = (e2) => {
    if (!e2.relatedTarget || isHTMLElement$2(e2.relatedTarget) && !scope.contains(e2.relatedTarget)) {
      disposeCurrentElement();
    }
  };
  scope.addEventListener(KEYBORG_FOCUSIN, keyborgListener);
  scope.addEventListener("focusout", blurListener);
  scope.focusVisible = true;
  if (scope.contains(targetWindow.document.activeElement)) {
    registerElementIfNavigating(targetWindow.document.activeElement);
  }
  return () => {
    disposeCurrentElement();
    scope.removeEventListener(KEYBORG_FOCUSIN, keyborgListener);
    scope.removeEventListener("focusout", blurListener);
    scope.focusVisible = void 0;
    disposeKeyborg(keyborg);
  };
}
function alreadyInScope(el) {
  if (!el) {
    return false;
  }
  if (el.focusVisible) {
    return true;
  }
  return alreadyInScope(el === null || el === void 0 ? void 0 : el.parentElement);
}
function useFocusVisible(options = {}) {
  const contextValue = useFluent();
  const scopeRef = reactExports.useRef(null);
  var _options_targetDocument;
  const targetDocument = (_options_targetDocument = options.targetDocument) !== null && _options_targetDocument !== void 0 ? _options_targetDocument : contextValue.targetDocument;
  reactExports.useEffect(() => {
    if ((targetDocument === null || targetDocument === void 0 ? void 0 : targetDocument.defaultView) && scopeRef.current) {
      return applyFocusVisiblePolyfill(scopeRef.current, targetDocument.defaultView);
    }
  }, [
    scopeRef,
    targetDocument
  ]);
  return scopeRef;
}
function applyFocusWithinPolyfill(element, win) {
  const keyborg = createKeyborg(win);
  keyborg.subscribe((isNavigatingWithKeyboard) => {
    if (!isNavigatingWithKeyboard) {
      removeFocusWithinClass(element);
    }
  });
  const keyborgListener = (e2) => {
    if (keyborg.isNavigatingWithKeyboard() && isHTMLElement$1(e2.target)) {
      applyFocusWithinClass(element);
    }
  };
  const blurListener = (e2) => {
    if (!e2.relatedTarget || isHTMLElement$1(e2.relatedTarget) && !element.contains(e2.relatedTarget)) {
      removeFocusWithinClass(element);
    }
  };
  element.addEventListener(KEYBORG_FOCUSIN, keyborgListener);
  element.addEventListener("focusout", blurListener);
  return () => {
    element.removeEventListener(KEYBORG_FOCUSIN, keyborgListener);
    element.removeEventListener("focusout", blurListener);
    disposeKeyborg(keyborg);
  };
}
function applyFocusWithinClass(el) {
  el.setAttribute(FOCUS_WITHIN_ATTR, "");
}
function removeFocusWithinClass(el) {
  el.removeAttribute(FOCUS_WITHIN_ATTR);
}
function isHTMLElement$1(target) {
  if (!target) {
    return false;
  }
  return Boolean(target && typeof target === "object" && "classList" in target && "contains" in target);
}
function useFocusWithin() {
  const { targetDocument } = useFluent();
  const elementRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if ((targetDocument === null || targetDocument === void 0 ? void 0 : targetDocument.defaultView) && elementRef.current) {
      return applyFocusWithinPolyfill(elementRef.current, targetDocument.defaultView);
    }
  }, [
    elementRef,
    targetDocument
  ]);
  return elementRef;
}
const DangerousNeverHiddenAttribute = "data-tabster-never-hide";
const tabsterAccessibleCheck = (element) => {
  return element.hasAttribute(DangerousNeverHiddenAttribute);
};
function initTabsterModules(tabster) {
  getModalizer(tabster, void 0, tabsterAccessibleCheck);
  getRestorer(tabster);
}
const useModalAttributes = (options = {}) => {
  const { trapFocus, alwaysFocusable, legacyTrapFocus } = options;
  useTabster(initTabsterModules);
  const id = useId("modal-", options.id);
  const modalAttributes = useTabsterAttributes({
    restorer: {
      type: RestorerTypes.Source
    },
    ...trapFocus && {
      modalizer: {
        id,
        isOthersAccessible: !trapFocus,
        isAlwaysAccessible: alwaysFocusable,
        isTrapped: legacyTrapFocus && trapFocus
      }
    }
  });
  const triggerAttributes = useTabsterAttributes({
    restorer: {
      type: RestorerTypes.Target
    }
  });
  return {
    modalAttributes,
    triggerAttributes
  };
};
function useRestoreFocusSource() {
  useTabster(getRestorer);
  return getTabsterAttribute({
    restorer: {
      type: RestorerTypes.Source
    }
  });
}
const grey = {
  "14": "#242424",
  "16": "#292929",
  "20": "#333333",
  "26": "#424242",
  "30": "#4d4d4d",
  "34": "#575757",
  "38": "#616161",
  "44": "#707070",
  "70": "#b3b3b3",
  "74": "#bdbdbd",
  "78": "#c7c7c7",
  "82": "#d1d1d1",
  "84": "#d6d6d6",
  "86": "#dbdbdb",
  "88": "#e0e0e0",
  "90": "#e6e6e6",
  "92": "#ebebeb",
  "94": "#f0f0f0",
  "96": "#f5f5f5",
  "98": "#fafafa"
};
const whiteAlpha = {
  "10": "rgba(255, 255, 255, 0.1)",
  "20": "rgba(255, 255, 255, 0.2)",
  "40": "rgba(255, 255, 255, 0.4)",
  "50": "rgba(255, 255, 255, 0.5)",
  "70": "rgba(255, 255, 255, 0.7)",
  "80": "rgba(255, 255, 255, 0.8)"
};
const blackAlpha = {
  "5": "rgba(0, 0, 0, 0.05)",
  "10": "rgba(0, 0, 0, 0.1)",
  "20": "rgba(0, 0, 0, 0.2)",
  "30": "rgba(0, 0, 0, 0.3)",
  "40": "rgba(0, 0, 0, 0.4)",
  "50": "rgba(0, 0, 0, 0.5)"
};
const white = "#ffffff";
const black = "#000000";
const darkRed = {
  shade50: "#130204",
  shade40: "#230308",
  shade30: "#420610",
  shade20: "#590815",
  shade10: "#690a19",
  primary: "#750b1c",
  tint10: "#861b2c",
  tint20: "#962f3f",
  tint30: "#ac4f5e",
  tint40: "#d69ca5",
  tint50: "#e9c7cd",
  tint60: "#f9f0f2"
};
const cranberry = {
  shade50: "#200205",
  shade40: "#3b0509",
  shade30: "#6e0811",
  shade20: "#960b18",
  shade10: "#b10e1c",
  primary: "#c50f1f",
  tint10: "#cc2635",
  tint20: "#d33f4c",
  tint30: "#dc626d",
  tint40: "#eeacb2",
  tint50: "#f6d1d5",
  tint60: "#fdf3f4"
};
const red = {
  shade50: "#210809",
  shade40: "#3f1011",
  shade30: "#751d1f",
  shade20: "#9f282b",
  shade10: "#bc2f32",
  primary: "#d13438",
  tint10: "#d7494c",
  tint20: "#dc5e62",
  tint30: "#e37d80",
  tint40: "#f1bbbc",
  tint50: "#f8dadb",
  tint60: "#fdf6f6"
};
const darkOrange = {
  shade50: "#230900",
  shade40: "#411200",
  shade30: "#7a2101",
  shade20: "#a62d01",
  shade10: "#c43501",
  primary: "#da3b01",
  tint10: "#de501c",
  tint20: "#e36537",
  tint30: "#e9835e",
  tint40: "#f4bfab",
  tint50: "#f9dcd1",
  tint60: "#fdf6f3"
};
const pumpkin = {
  shade50: "#200d03",
  shade40: "#3d1805",
  shade30: "#712d09",
  shade20: "#9a3d0c",
  shade10: "#b6480e",
  primary: "#ca5010",
  tint10: "#d06228",
  tint20: "#d77440",
  tint30: "#df8e64",
  tint40: "#efc4ad",
  tint50: "#f7dfd2",
  tint60: "#fdf7f4"
};
const orange = {
  shade50: "#271002",
  shade40: "#4a1e04",
  shade30: "#8a3707",
  shade20: "#bc4b09",
  shade10: "#de590b",
  primary: "#f7630c",
  tint10: "#f87528",
  tint20: "#f98845",
  tint30: "#faa06b",
  tint40: "#fdcfb4",
  tint50: "#fee5d7",
  tint60: "#fff9f5"
};
const peach = {
  shade50: "#291600",
  shade40: "#4d2a00",
  shade30: "#8f4e00",
  shade20: "#c26a00",
  shade10: "#e67e00",
  primary: "#ff8c00",
  tint10: "#ff9a1f",
  tint20: "#ffa83d",
  tint30: "#ffba66",
  tint40: "#ffddb3",
  tint50: "#ffedd6",
  tint60: "#fffaf5"
};
const marigold = {
  shade50: "#251a00",
  shade40: "#463100",
  shade30: "#835b00",
  shade20: "#b27c00",
  shade10: "#d39300",
  primary: "#eaa300",
  tint10: "#edad1c",
  tint20: "#efb839",
  tint30: "#f2c661",
  tint40: "#f9e2ae",
  tint50: "#fcefd3",
  tint60: "#fefbf4"
};
const yellow = {
  shade50: "#282400",
  shade40: "#4c4400",
  shade30: "#817400",
  shade20: "#c0ad00",
  shade10: "#e4cc00",
  primary: "#fde300",
  tint10: "#fde61e",
  tint20: "#fdea3d",
  tint30: "#feee66",
  tint40: "#fef7b2",
  tint50: "#fffad6",
  tint60: "#fffef5"
};
const gold = {
  shade50: "#1f1900",
  shade40: "#3a2f00",
  shade30: "#6c5700",
  shade20: "#937700",
  shade10: "#ae8c00",
  primary: "#c19c00",
  tint10: "#c8a718",
  tint20: "#d0b232",
  tint30: "#dac157",
  tint40: "#ecdfa5",
  tint50: "#f5eece",
  tint60: "#fdfbf2"
};
const brass = {
  shade50: "#181202",
  shade40: "#2e2103",
  shade30: "#553e06",
  shade20: "#745408",
  shade10: "#89640a",
  primary: "#986f0b",
  tint10: "#a47d1e",
  tint20: "#b18c34",
  tint30: "#c1a256",
  tint40: "#e0cea2",
  tint50: "#efe4cb",
  tint60: "#fbf8f2"
};
const brown = {
  shade50: "#170e07",
  shade40: "#2b1a0e",
  shade30: "#50301a",
  shade20: "#6c4123",
  shade10: "#804d29",
  primary: "#8e562e",
  tint10: "#9c663f",
  tint20: "#a97652",
  tint30: "#bb8f6f",
  tint40: "#ddc3b0",
  tint50: "#edded3",
  tint60: "#faf7f4"
};
const forest = {
  shade50: "#0c1501",
  shade40: "#162702",
  shade30: "#294903",
  shade20: "#376304",
  shade10: "#427505",
  primary: "#498205",
  tint10: "#599116",
  tint20: "#6ba02b",
  tint30: "#85b44c",
  tint40: "#bdd99b",
  tint50: "#dbebc7",
  tint60: "#f6faf0"
};
const seafoam = {
  shade50: "#002111",
  shade40: "#003d20",
  shade30: "#00723b",
  shade20: "#009b51",
  shade10: "#00b85f",
  primary: "#00cc6a",
  tint10: "#19d279",
  tint20: "#34d889",
  tint30: "#5ae0a0",
  tint40: "#a8f0cd",
  tint50: "#cff7e4",
  tint60: "#f3fdf8"
};
const lightGreen = {
  shade50: "#031a02",
  shade40: "#063004",
  shade30: "#0b5a08",
  shade20: "#0e7a0b",
  shade10: "#11910d",
  primary: "#13a10e",
  tint10: "#27ac22",
  tint20: "#3db838",
  tint30: "#5ec75a",
  tint40: "#a7e3a5",
  tint50: "#cef0cd",
  tint60: "#f2fbf2"
};
const green = {
  shade50: "#031403",
  shade40: "#052505",
  shade30: "#094509",
  shade20: "#0c5e0c",
  shade10: "#0e700e",
  primary: "#107c10",
  tint10: "#218c21",
  tint20: "#359b35",
  tint30: "#54b054",
  tint40: "#9fd89f",
  tint50: "#c9eac9",
  tint60: "#f1faf1"
};
const darkGreen = {
  shade50: "#021102",
  shade40: "#032003",
  shade30: "#063b06",
  shade20: "#085108",
  shade10: "#0a5f0a",
  primary: "#0b6a0b",
  tint10: "#1a7c1a",
  tint20: "#2d8e2d",
  tint30: "#4da64d",
  tint40: "#9ad29a",
  tint50: "#c6e7c6",
  tint60: "#f0f9f0"
};
const lightTeal = {
  shade50: "#001d1f",
  shade40: "#00373a",
  shade30: "#00666d",
  shade20: "#008b94",
  shade10: "#00a5af",
  primary: "#00b7c3",
  tint10: "#18bfca",
  tint20: "#32c8d1",
  tint30: "#58d3db",
  tint40: "#a6e9ed",
  tint50: "#cef3f5",
  tint60: "#f2fcfd"
};
const teal = {
  shade50: "#001516",
  shade40: "#012728",
  shade30: "#02494c",
  shade20: "#026467",
  shade10: "#037679",
  primary: "#038387",
  tint10: "#159195",
  tint20: "#2aa0a4",
  tint30: "#4cb4b7",
  tint40: "#9bd9db",
  tint50: "#c7ebec",
  tint60: "#f0fafa"
};
const steel = {
  shade50: "#000f12",
  shade40: "#001b22",
  shade30: "#00333f",
  shade20: "#004555",
  shade10: "#005265",
  primary: "#005b70",
  tint10: "#0f6c81",
  tint20: "#237d92",
  tint30: "#4496a9",
  tint40: "#94c8d4",
  tint50: "#c3e1e8",
  tint60: "#eff7f9"
};
const blue = {
  shade50: "#001322",
  shade40: "#002440",
  shade30: "#004377",
  shade20: "#005ba1",
  shade10: "#006cbf",
  primary: "#0078d4",
  tint10: "#1a86d9",
  tint20: "#3595de",
  tint30: "#5caae5",
  tint40: "#a9d3f2",
  tint50: "#d0e7f8",
  tint60: "#f3f9fd"
};
const royalBlue = {
  shade50: "#000c16",
  shade40: "#00172a",
  shade30: "#002c4e",
  shade20: "#003b6a",
  shade10: "#00467e",
  primary: "#004e8c",
  tint10: "#125e9a",
  tint20: "#286fa8",
  tint30: "#4a89ba",
  tint40: "#9abfdc",
  tint50: "#c7dced",
  tint60: "#f0f6fa"
};
const cornflower = {
  shade50: "#0d1126",
  shade40: "#182047",
  shade30: "#2c3c85",
  shade20: "#3c51b4",
  shade10: "#4760d5",
  primary: "#4f6bed",
  tint10: "#637cef",
  tint20: "#778df1",
  tint30: "#93a4f4",
  tint40: "#c8d1fa",
  tint50: "#e1e6fc",
  tint60: "#f7f9fe"
};
const navy = {
  shade50: "#00061d",
  shade40: "#000c36",
  shade30: "#001665",
  shade20: "#001e89",
  shade10: "#0023a2",
  primary: "#0027b4",
  tint10: "#173bbd",
  tint20: "#3050c6",
  tint30: "#546fd2",
  tint40: "#a3b2e8",
  tint50: "#ccd5f3",
  tint60: "#f2f4fc"
};
const lavender = {
  shade50: "#120f25",
  shade40: "#221d46",
  shade30: "#3f3682",
  shade20: "#5649b0",
  shade10: "#6656d1",
  primary: "#7160e8",
  tint10: "#8172eb",
  tint20: "#9184ee",
  tint30: "#a79cf1",
  tint40: "#d2ccf8",
  tint50: "#e7e4fb",
  tint60: "#f9f8fe"
};
const purple = {
  shade50: "#0f0717",
  shade40: "#1c0e2b",
  shade30: "#341a51",
  shade20: "#46236e",
  shade10: "#532982",
  primary: "#5c2e91",
  tint10: "#6b3f9e",
  tint20: "#7c52ab",
  tint30: "#9470bd",
  tint40: "#c6b1de",
  tint50: "#e0d3ed",
  tint60: "#f7f4fb"
};
const grape = {
  shade50: "#160418",
  shade40: "#29072e",
  shade30: "#4c0d55",
  shade20: "#671174",
  shade10: "#7a1589",
  primary: "#881798",
  tint10: "#952aa4",
  tint20: "#a33fb1",
  tint30: "#b55fc1",
  tint40: "#d9a7e0",
  tint50: "#eaceef",
  tint60: "#faf2fb"
};
const berry = {
  shade50: "#1f091d",
  shade40: "#3a1136",
  shade30: "#6d2064",
  shade20: "#932b88",
  shade10: "#af33a1",
  primary: "#c239b3",
  tint10: "#c94cbc",
  tint20: "#d161c4",
  tint30: "#da7ed0",
  tint40: "#edbbe7",
  tint50: "#f5daf2",
  tint60: "#fdf5fc"
};
const lilac = {
  shade50: "#1c0b1f",
  shade40: "#35153a",
  shade30: "#63276d",
  shade20: "#863593",
  shade10: "#9f3faf",
  primary: "#b146c2",
  tint10: "#ba58c9",
  tint20: "#c36bd1",
  tint30: "#cf87da",
  tint40: "#e6bfed",
  tint50: "#f2dcf5",
  tint60: "#fcf6fd"
};
const pink = {
  shade50: "#24091b",
  shade40: "#441232",
  shade30: "#80215d",
  shade20: "#ad2d7e",
  shade10: "#cd3595",
  primary: "#e43ba6",
  tint10: "#e750b0",
  tint20: "#ea66ba",
  tint30: "#ef85c8",
  tint40: "#f7c0e3",
  tint50: "#fbddf0",
  tint60: "#fef6fb"
};
const magenta = {
  shade50: "#1f0013",
  shade40: "#390024",
  shade30: "#6b0043",
  shade20: "#91005a",
  shade10: "#ac006b",
  primary: "#bf0077",
  tint10: "#c71885",
  tint20: "#ce3293",
  tint30: "#d957a8",
  tint40: "#eca5d1",
  tint50: "#f5cee6",
  tint60: "#fcf2f9"
};
const plum = {
  shade50: "#13000c",
  shade40: "#240017",
  shade30: "#43002b",
  shade20: "#5a003b",
  shade10: "#6b0045",
  primary: "#77004d",
  tint10: "#87105d",
  tint20: "#98246f",
  tint30: "#ad4589",
  tint40: "#d696c0",
  tint50: "#e9c4dc",
  tint60: "#faf0f6"
};
const beige = {
  shade50: "#141313",
  shade40: "#252323",
  shade30: "#444241",
  shade20: "#5d5958",
  shade10: "#6e6968",
  primary: "#7a7574",
  tint10: "#8a8584",
  tint20: "#9a9594",
  tint30: "#afabaa",
  tint40: "#d7d4d4",
  tint50: "#eae8e8",
  tint60: "#faf9f9"
};
const mink = {
  shade50: "#0f0e0e",
  shade40: "#1c1b1a",
  shade30: "#343231",
  shade20: "#474443",
  shade10: "#54514f",
  primary: "#5d5a58",
  tint10: "#706d6b",
  tint20: "#84817e",
  tint30: "#9e9b99",
  tint40: "#cecccb",
  tint50: "#e5e4e3",
  tint60: "#f8f8f8"
};
const platinum = {
  shade50: "#111314",
  shade40: "#1f2426",
  shade30: "#3b4447",
  shade20: "#505c60",
  shade10: "#5f6d71",
  primary: "#69797e",
  tint10: "#79898d",
  tint20: "#89989d",
  tint30: "#a0adb2",
  tint40: "#cdd6d8",
  tint50: "#e4e9ea",
  tint60: "#f8f9fa"
};
const anchor = {
  shade50: "#090a0b",
  shade40: "#111315",
  shade30: "#202427",
  shade20: "#2b3135",
  shade10: "#333a3f",
  primary: "#394146",
  tint10: "#4d565c",
  tint20: "#626c72",
  tint30: "#808a90",
  tint40: "#bcc3c7",
  tint50: "#dbdfe1",
  tint60: "#f6f7f8"
};
const statusSharedColors = {
  red,
  green,
  darkOrange,
  yellow,
  berry,
  lightGreen,
  marigold
};
const personaSharedColors = {
  darkRed,
  cranberry,
  pumpkin,
  peach,
  gold,
  brass,
  brown,
  forest,
  seafoam,
  darkGreen,
  lightTeal,
  teal,
  steel,
  blue,
  royalBlue,
  cornflower,
  navy,
  lavender,
  purple,
  grape,
  lilac,
  pink,
  magenta,
  plum,
  beige,
  mink,
  platinum,
  anchor
};
const mappedStatusColors = {
  cranberry,
  green,
  orange
};
const statusSharedColorNames = [
  "red",
  "green",
  "darkOrange",
  "yellow",
  "berry",
  "lightGreen",
  "marigold"
];
const personaSharedColorNames = [
  "darkRed",
  "cranberry",
  "pumpkin",
  "peach",
  "gold",
  "brass",
  "brown",
  "forest",
  "seafoam",
  "darkGreen",
  "lightTeal",
  "teal",
  "steel",
  "blue",
  "royalBlue",
  "cornflower",
  "navy",
  "lavender",
  "purple",
  "grape",
  "lilac",
  "pink",
  "magenta",
  "plum",
  "beige",
  "mink",
  "platinum",
  "anchor"
];
const statusColorMapping = {
  success: "green",
  warning: "orange",
  danger: "cranberry"
};
const statusColorPaletteTokens = statusSharedColorNames.reduce((acc, sharedColor) => {
  const color = sharedColor.slice(0, 1).toUpperCase() + sharedColor.slice(1);
  const sharedColorTokens = {
    [`colorPalette${color}Background1`]: statusSharedColors[sharedColor].tint60,
    [`colorPalette${color}Background2`]: statusSharedColors[sharedColor].tint40,
    [`colorPalette${color}Background3`]: statusSharedColors[sharedColor].primary,
    [`colorPalette${color}Foreground1`]: statusSharedColors[sharedColor].shade10,
    [`colorPalette${color}Foreground2`]: statusSharedColors[sharedColor].shade30,
    [`colorPalette${color}Foreground3`]: statusSharedColors[sharedColor].primary,
    [`colorPalette${color}BorderActive`]: statusSharedColors[sharedColor].primary,
    [`colorPalette${color}Border1`]: statusSharedColors[sharedColor].tint40,
    [`colorPalette${color}Border2`]: statusSharedColors[sharedColor].primary
  };
  return Object.assign(acc, sharedColorTokens);
}, {});
statusColorPaletteTokens.colorPaletteYellowForeground1 = statusSharedColors.yellow.shade30;
statusColorPaletteTokens.colorPaletteRedForegroundInverted = statusSharedColors.red.tint20;
statusColorPaletteTokens.colorPaletteGreenForegroundInverted = statusSharedColors.green.tint20;
statusColorPaletteTokens.colorPaletteYellowForegroundInverted = statusSharedColors.yellow.tint40;
const personaColorPaletteTokens = personaSharedColorNames.reduce((acc, sharedColor) => {
  const color = sharedColor.slice(0, 1).toUpperCase() + sharedColor.slice(1);
  const sharedColorTokens = {
    [`colorPalette${color}Background2`]: personaSharedColors[sharedColor].tint40,
    [`colorPalette${color}Foreground2`]: personaSharedColors[sharedColor].shade30,
    [`colorPalette${color}BorderActive`]: personaSharedColors[sharedColor].primary
  };
  return Object.assign(acc, sharedColorTokens);
}, {});
const colorPaletteTokens = {
  ...statusColorPaletteTokens,
  ...personaColorPaletteTokens
};
const colorStatusTokens = Object.entries(statusColorMapping).reduce((acc, [statusColor, sharedColor]) => {
  const color = statusColor.slice(0, 1).toUpperCase() + statusColor.slice(1);
  const statusColorTokens = {
    [`colorStatus${color}Background1`]: mappedStatusColors[sharedColor].tint60,
    [`colorStatus${color}Background2`]: mappedStatusColors[sharedColor].tint40,
    [`colorStatus${color}Background3`]: mappedStatusColors[sharedColor].primary,
    [`colorStatus${color}Foreground1`]: mappedStatusColors[sharedColor].shade10,
    [`colorStatus${color}Foreground2`]: mappedStatusColors[sharedColor].shade30,
    [`colorStatus${color}Foreground3`]: mappedStatusColors[sharedColor].primary,
    [`colorStatus${color}ForegroundInverted`]: mappedStatusColors[sharedColor].tint30,
    [`colorStatus${color}BorderActive`]: mappedStatusColors[sharedColor].primary,
    [`colorStatus${color}Border1`]: mappedStatusColors[sharedColor].tint40,
    [`colorStatus${color}Border2`]: mappedStatusColors[sharedColor].primary
  };
  return Object.assign(acc, statusColorTokens);
}, {});
colorStatusTokens.colorStatusDangerBackground3Hover = mappedStatusColors[statusColorMapping.danger].shade10;
colorStatusTokens.colorStatusDangerBackground3Pressed = mappedStatusColors[statusColorMapping.danger].shade20;
colorStatusTokens.colorStatusWarningForeground1 = mappedStatusColors[statusColorMapping.warning].shade20;
colorStatusTokens.colorStatusWarningForeground3 = mappedStatusColors[statusColorMapping.warning].shade20;
colorStatusTokens.colorStatusWarningBorder2 = mappedStatusColors[statusColorMapping.warning].shade20;
const generateColorTokens = (brand) => ({
  colorNeutralForeground1: grey[14],
  colorNeutralForeground1Hover: grey[14],
  colorNeutralForeground1Pressed: grey[14],
  colorNeutralForeground1Selected: grey[14],
  colorNeutralForeground2: grey[26],
  colorNeutralForeground2Hover: grey[14],
  colorNeutralForeground2Pressed: grey[14],
  colorNeutralForeground2Selected: grey[14],
  colorNeutralForeground2BrandHover: brand[80],
  colorNeutralForeground2BrandPressed: brand[70],
  colorNeutralForeground2BrandSelected: brand[80],
  colorNeutralForeground3: grey[38],
  colorNeutralForeground3Hover: grey[26],
  colorNeutralForeground3Pressed: grey[26],
  colorNeutralForeground3Selected: grey[26],
  colorNeutralForeground3BrandHover: brand[80],
  colorNeutralForeground3BrandPressed: brand[70],
  colorNeutralForeground3BrandSelected: brand[80],
  colorNeutralForeground4: grey[44],
  colorNeutralForegroundDisabled: grey[74],
  colorNeutralForegroundInvertedDisabled: whiteAlpha[40],
  colorBrandForegroundLink: brand[70],
  colorBrandForegroundLinkHover: brand[60],
  colorBrandForegroundLinkPressed: brand[40],
  colorBrandForegroundLinkSelected: brand[70],
  colorNeutralForeground2Link: grey[26],
  colorNeutralForeground2LinkHover: grey[14],
  colorNeutralForeground2LinkPressed: grey[14],
  colorNeutralForeground2LinkSelected: grey[14],
  colorCompoundBrandForeground1: brand[80],
  colorCompoundBrandForeground1Hover: brand[70],
  colorCompoundBrandForeground1Pressed: brand[60],
  colorBrandForeground1: brand[80],
  colorBrandForeground2: brand[70],
  colorBrandForeground2Hover: brand[60],
  colorBrandForeground2Pressed: brand[30],
  colorNeutralForeground1Static: grey[14],
  colorNeutralForegroundStaticInverted: white,
  colorNeutralForegroundInverted: white,
  colorNeutralForegroundInvertedHover: white,
  colorNeutralForegroundInvertedPressed: white,
  colorNeutralForegroundInvertedSelected: white,
  colorNeutralForegroundInverted2: white,
  colorNeutralForegroundOnBrand: white,
  colorNeutralForegroundInvertedLink: white,
  colorNeutralForegroundInvertedLinkHover: white,
  colorNeutralForegroundInvertedLinkPressed: white,
  colorNeutralForegroundInvertedLinkSelected: white,
  colorBrandForegroundInverted: brand[100],
  colorBrandForegroundInvertedHover: brand[110],
  colorBrandForegroundInvertedPressed: brand[100],
  colorBrandForegroundOnLight: brand[80],
  colorBrandForegroundOnLightHover: brand[70],
  colorBrandForegroundOnLightPressed: brand[50],
  colorBrandForegroundOnLightSelected: brand[60],
  colorNeutralBackground1: white,
  colorNeutralBackground1Hover: grey[96],
  colorNeutralBackground1Pressed: grey[88],
  colorNeutralBackground1Selected: grey[92],
  colorNeutralBackground2: grey[98],
  colorNeutralBackground2Hover: grey[94],
  colorNeutralBackground2Pressed: grey[86],
  colorNeutralBackground2Selected: grey[90],
  colorNeutralBackground3: grey[96],
  colorNeutralBackground3Hover: grey[92],
  colorNeutralBackground3Pressed: grey[84],
  colorNeutralBackground3Selected: grey[88],
  colorNeutralBackground4: grey[94],
  colorNeutralBackground4Hover: grey[98],
  colorNeutralBackground4Pressed: grey[96],
  colorNeutralBackground4Selected: white,
  colorNeutralBackground5: grey[92],
  colorNeutralBackground5Hover: grey[96],
  colorNeutralBackground5Pressed: grey[94],
  colorNeutralBackground5Selected: grey[98],
  colorNeutralBackground6: grey[90],
  colorNeutralBackgroundInverted: grey[16],
  colorNeutralBackgroundStatic: grey[20],
  colorNeutralBackgroundAlpha: whiteAlpha[50],
  colorNeutralBackgroundAlpha2: whiteAlpha[80],
  colorSubtleBackground: "transparent",
  colorSubtleBackgroundHover: grey[96],
  colorSubtleBackgroundPressed: grey[88],
  colorSubtleBackgroundSelected: grey[92],
  colorSubtleBackgroundLightAlphaHover: whiteAlpha[70],
  colorSubtleBackgroundLightAlphaPressed: whiteAlpha[50],
  colorSubtleBackgroundLightAlphaSelected: "transparent",
  colorSubtleBackgroundInverted: "transparent",
  colorSubtleBackgroundInvertedHover: blackAlpha[10],
  colorSubtleBackgroundInvertedPressed: blackAlpha[30],
  colorSubtleBackgroundInvertedSelected: blackAlpha[20],
  colorTransparentBackground: "transparent",
  colorTransparentBackgroundHover: "transparent",
  colorTransparentBackgroundPressed: "transparent",
  colorTransparentBackgroundSelected: "transparent",
  colorNeutralBackgroundDisabled: grey[94],
  colorNeutralBackgroundInvertedDisabled: whiteAlpha[10],
  colorNeutralStencil1: grey[90],
  colorNeutralStencil2: grey[98],
  colorNeutralStencil1Alpha: blackAlpha[10],
  colorNeutralStencil2Alpha: blackAlpha[5],
  colorBackgroundOverlay: blackAlpha[40],
  colorScrollbarOverlay: blackAlpha[50],
  colorBrandBackground: brand[80],
  colorBrandBackgroundHover: brand[70],
  colorBrandBackgroundPressed: brand[40],
  colorBrandBackgroundSelected: brand[60],
  colorCompoundBrandBackground: brand[80],
  colorCompoundBrandBackgroundHover: brand[70],
  colorCompoundBrandBackgroundPressed: brand[60],
  colorBrandBackgroundStatic: brand[80],
  colorBrandBackground2: brand[160],
  colorBrandBackground2Hover: brand[150],
  colorBrandBackground2Pressed: brand[130],
  colorBrandBackground3Static: brand[60],
  colorBrandBackground4Static: brand[40],
  colorBrandBackgroundInverted: white,
  colorBrandBackgroundInvertedHover: brand[160],
  colorBrandBackgroundInvertedPressed: brand[140],
  colorBrandBackgroundInvertedSelected: brand[150],
  colorNeutralCardBackground: grey[98],
  colorNeutralCardBackgroundHover: white,
  colorNeutralCardBackgroundPressed: grey[96],
  colorNeutralCardBackgroundSelected: grey[92],
  colorNeutralCardBackgroundDisabled: grey[94],
  colorNeutralStrokeAccessible: grey[38],
  colorNeutralStrokeAccessibleHover: grey[34],
  colorNeutralStrokeAccessiblePressed: grey[30],
  colorNeutralStrokeAccessibleSelected: brand[80],
  colorNeutralStroke1: grey[82],
  colorNeutralStroke1Hover: grey[78],
  colorNeutralStroke1Pressed: grey[70],
  colorNeutralStroke1Selected: grey[74],
  colorNeutralStroke2: grey[88],
  colorNeutralStroke3: grey[94],
  colorNeutralStrokeSubtle: grey[88],
  colorNeutralStrokeOnBrand: white,
  colorNeutralStrokeOnBrand2: white,
  colorNeutralStrokeOnBrand2Hover: white,
  colorNeutralStrokeOnBrand2Pressed: white,
  colorNeutralStrokeOnBrand2Selected: white,
  colorBrandStroke1: brand[80],
  colorBrandStroke2: brand[140],
  colorBrandStroke2Hover: brand[120],
  colorBrandStroke2Pressed: brand[80],
  colorBrandStroke2Contrast: brand[140],
  colorCompoundBrandStroke: brand[80],
  colorCompoundBrandStrokeHover: brand[70],
  colorCompoundBrandStrokePressed: brand[60],
  colorNeutralStrokeDisabled: grey[88],
  colorNeutralStrokeInvertedDisabled: whiteAlpha[40],
  colorTransparentStroke: "transparent",
  colorTransparentStrokeInteractive: "transparent",
  colorTransparentStrokeDisabled: "transparent",
  colorNeutralStrokeAlpha: blackAlpha[5],
  colorNeutralStrokeAlpha2: whiteAlpha[20],
  colorStrokeFocus1: white,
  colorStrokeFocus2: black,
  colorNeutralShadowAmbient: "rgba(0,0,0,0.12)",
  colorNeutralShadowKey: "rgba(0,0,0,0.14)",
  colorNeutralShadowAmbientLighter: "rgba(0,0,0,0.06)",
  colorNeutralShadowKeyLighter: "rgba(0,0,0,0.07)",
  colorNeutralShadowAmbientDarker: "rgba(0,0,0,0.20)",
  colorNeutralShadowKeyDarker: "rgba(0,0,0,0.24)",
  colorBrandShadowAmbient: "rgba(0,0,0,0.30)",
  colorBrandShadowKey: "rgba(0,0,0,0.25)"
});
const borderRadius = {
  borderRadiusNone: "0",
  borderRadiusSmall: "2px",
  borderRadiusMedium: "4px",
  borderRadiusLarge: "6px",
  borderRadiusXLarge: "8px",
  borderRadiusCircular: "10000px"
};
const curves$1 = {
  curveAccelerateMax: "cubic-bezier(0.9,0.1,1,0.2)",
  curveAccelerateMid: "cubic-bezier(1,0,1,1)",
  curveAccelerateMin: "cubic-bezier(0.8,0,0.78,1)",
  curveDecelerateMax: "cubic-bezier(0.1,0.9,0.2,1)",
  curveDecelerateMid: "cubic-bezier(0,0,0,1)",
  curveDecelerateMin: "cubic-bezier(0.33,0,0.1,1)",
  curveEasyEaseMax: "cubic-bezier(0.8,0,0.2,1)",
  curveEasyEase: "cubic-bezier(0.33,0,0.67,1)",
  curveLinear: "cubic-bezier(0,0,1,1)"
};
const durations$1 = {
  durationUltraFast: "50ms",
  durationFaster: "100ms",
  durationFast: "150ms",
  durationNormal: "200ms",
  durationGentle: "250ms",
  durationSlow: "300ms",
  durationSlower: "400ms",
  durationUltraSlow: "500ms"
};
const fontSizes = {
  fontSizeBase100: "10px",
  fontSizeBase200: "12px",
  fontSizeBase300: "14px",
  fontSizeBase400: "16px",
  fontSizeBase500: "20px",
  fontSizeBase600: "24px",
  fontSizeHero700: "28px",
  fontSizeHero800: "32px",
  fontSizeHero900: "40px",
  fontSizeHero1000: "68px"
};
const lineHeights = {
  lineHeightBase100: "14px",
  lineHeightBase200: "16px",
  lineHeightBase300: "20px",
  lineHeightBase400: "22px",
  lineHeightBase500: "28px",
  lineHeightBase600: "32px",
  lineHeightHero700: "36px",
  lineHeightHero800: "40px",
  lineHeightHero900: "52px",
  lineHeightHero1000: "92px"
};
const fontWeights = {
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemibold: 600,
  fontWeightBold: 700
};
const fontFamilies = {
  fontFamilyBase: "'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif",
  fontFamilyMonospace: "Consolas, 'Courier New', Courier, monospace",
  fontFamilyNumeric: "Bahnschrift, 'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif"
};
const spacings = {
  none: "0",
  xxs: "2px",
  xs: "4px",
  sNudge: "6px",
  s: "8px",
  mNudge: "10px",
  m: "12px",
  l: "16px",
  xl: "20px",
  xxl: "24px",
  xxxl: "32px"
};
const horizontalSpacings = {
  spacingHorizontalNone: spacings.none,
  spacingHorizontalXXS: spacings.xxs,
  spacingHorizontalXS: spacings.xs,
  spacingHorizontalSNudge: spacings.sNudge,
  spacingHorizontalS: spacings.s,
  spacingHorizontalMNudge: spacings.mNudge,
  spacingHorizontalM: spacings.m,
  spacingHorizontalL: spacings.l,
  spacingHorizontalXL: spacings.xl,
  spacingHorizontalXXL: spacings.xxl,
  spacingHorizontalXXXL: spacings.xxxl
};
const verticalSpacings = {
  spacingVerticalNone: spacings.none,
  spacingVerticalXXS: spacings.xxs,
  spacingVerticalXS: spacings.xs,
  spacingVerticalSNudge: spacings.sNudge,
  spacingVerticalS: spacings.s,
  spacingVerticalMNudge: spacings.mNudge,
  spacingVerticalM: spacings.m,
  spacingVerticalL: spacings.l,
  spacingVerticalXL: spacings.xl,
  spacingVerticalXXL: spacings.xxl,
  spacingVerticalXXXL: spacings.xxxl
};
const strokeWidths = {
  strokeWidthThin: "1px",
  strokeWidthThick: "2px",
  strokeWidthThicker: "3px",
  strokeWidthThickest: "4px"
};
function createShadowTokens(ambientColor, keyColor, tokenSuffix = "") {
  return {
    [`shadow2${tokenSuffix}`]: `0 0 2px ${ambientColor}, 0 1px 2px ${keyColor}`,
    [`shadow4${tokenSuffix}`]: `0 0 2px ${ambientColor}, 0 2px 4px ${keyColor}`,
    [`shadow8${tokenSuffix}`]: `0 0 2px ${ambientColor}, 0 4px 8px ${keyColor}`,
    [`shadow16${tokenSuffix}`]: `0 0 2px ${ambientColor}, 0 8px 16px ${keyColor}`,
    [`shadow28${tokenSuffix}`]: `0 0 8px ${ambientColor}, 0 14px 28px ${keyColor}`,
    [`shadow64${tokenSuffix}`]: `0 0 8px ${ambientColor}, 0 32px 64px ${keyColor}`
  };
}
const createLightTheme = (brand) => {
  const colorTokens = generateColorTokens(brand);
  return {
    ...borderRadius,
    ...fontSizes,
    ...lineHeights,
    ...fontFamilies,
    ...fontWeights,
    ...strokeWidths,
    ...horizontalSpacings,
    ...verticalSpacings,
    ...durations$1,
    ...curves$1,
    ...colorTokens,
    ...colorPaletteTokens,
    ...colorStatusTokens,
    ...createShadowTokens(colorTokens.colorNeutralShadowAmbient, colorTokens.colorNeutralShadowKey),
    ...createShadowTokens(colorTokens.colorBrandShadowAmbient, colorTokens.colorBrandShadowKey, "Brand")
  };
};
const brandWeb = {
  30: `#0a2e4a`,
  40: `#0c3b5e`,
  50: `#0e4775`,
  60: `#0f548c`,
  70: `#115ea3`,
  80: `#0f6cbd`,
  100: `#479ef5`,
  110: `#62abf5`,
  120: `#77b7f7`,
  130: `#96c6fa`,
  140: `#b4d6fa`,
  150: `#cfe4fa`,
  160: `#ebf3fc`
};
const webLightTheme = createLightTheme(brandWeb);
const fluentProviderClassNames = {
  root: "fui-FluentProvider"
};
const useStyles$c = /* @__PURE__ */ __styles$1({
  root: {
    sj55zd: "f19n0e5",
    De3pzq: "fxugw4r",
    fsow6f: ["f1o700av", "fes3tcz"],
    Bahqtrf: "fk6fouc",
    Be2twd7: "fkhj508",
    Bhrd7zp: "figsok6",
    Bg96gwp: "f1i3iumi"
  }
}, {
  d: [".f19n0e5{color:var(--colorNeutralForeground1);}", ".fxugw4r{background-color:var(--colorNeutralBackground1);}", ".f1o700av{text-align:left;}", ".fes3tcz{text-align:right;}", ".fk6fouc{font-family:var(--fontFamilyBase);}", ".fkhj508{font-size:var(--fontSizeBase300);}", ".figsok6{font-weight:var(--fontWeightRegular);}", ".f1i3iumi{line-height:var(--lineHeightBase300);}"]
});
const useFluentProviderStyles_unstable = (state) => {
  "use no memo";
  const renderer = useRenderer();
  const styles = useStyles$c({
    dir: state.dir,
    renderer
  });
  state.root.className = mergeClasses(fluentProviderClassNames.root, state.themeClassName, styles.root, state.root.className);
  return state;
};
const useInsertionEffect$1 = reactExports.useInsertionEffect ? reactExports.useInsertionEffect : useIsomorphicLayoutEffect;
const createStyleTag = (target, elementAttributes) => {
  if (!(target === null || target === void 0 ? void 0 : target.head)) {
    return void 0;
  }
  const tag = target.createElement("style");
  Object.keys(elementAttributes).forEach((attrName) => {
    tag.setAttribute(attrName, elementAttributes[attrName]);
  });
  target.head.appendChild(tag);
  return tag;
};
const insertSheet = (tag, rule) => {
  const sheet = tag.sheet;
  if (sheet) {
    if (sheet.cssRules.length > 0) {
      sheet.deleteRule(0);
    }
    sheet.insertRule(rule, 0);
  }
};
const useFluentProviderThemeStyleTag = (options) => {
  "use no memo";
  const { targetDocument, theme, rendererAttributes } = options;
  const styleTag = reactExports.useRef(void 0);
  const styleTagId = useId(fluentProviderClassNames.root);
  const styleElementAttributes = rendererAttributes;
  const rule = reactExports.useMemo(() => createCSSRuleFromTheme(`.${styleTagId}`, theme), [
    theme,
    styleTagId
  ]);
  useHandleSSRStyleElements(targetDocument, styleTagId);
  useInsertionEffect$1(() => {
    const ssrStyleElement = targetDocument === null || targetDocument === void 0 ? void 0 : targetDocument.getElementById(styleTagId);
    if (ssrStyleElement) {
      styleTag.current = ssrStyleElement;
    } else {
      styleTag.current = createStyleTag(targetDocument, {
        ...styleElementAttributes,
        id: styleTagId
      });
      if (styleTag.current) {
        insertSheet(styleTag.current, rule);
      }
    }
    return () => {
      var _styleTag_current;
      (_styleTag_current = styleTag.current) === null || _styleTag_current === void 0 ? void 0 : _styleTag_current.remove();
    };
  }, [
    styleTagId,
    targetDocument,
    rule,
    styleElementAttributes
  ]);
  return {
    styleTagId,
    rule
  };
};
function useHandleSSRStyleElements(targetDocument, styleTagId) {
  reactExports.useState(() => {
    if (!targetDocument) {
      return;
    }
    const themeStyleElement = targetDocument.getElementById(styleTagId);
    if (themeStyleElement) {
      targetDocument.head.append(themeStyleElement);
    }
  });
}
const DEFAULT_STYLE_HOOKS = {};
const DEFAULT_RENDERER_ATTRIBUTES = {};
const useFluentProvider_unstable = (props, ref) => {
  "use no memo";
  const parentContext = useFluent();
  const parentTheme = useTheme();
  const parentOverrides = useOverrides();
  const parentCustomStyleHooks = reactExports.useContext(CustomStyleHooksContext) || DEFAULT_STYLE_HOOKS;
  const {
    applyStylesToPortals = true,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    customStyleHooks_unstable,
    dir = parentContext.dir,
    targetDocument = parentContext.targetDocument,
    theme,
    overrides_unstable: overrides = {}
  } = props;
  const mergedTheme = shallowMerge(parentTheme, theme);
  const mergedOverrides = shallowMerge(parentOverrides, overrides);
  const mergedCustomStyleHooks = shallowMerge(parentCustomStyleHooks, customStyleHooks_unstable);
  const renderer = useRenderer();
  var _renderer_styleElementAttributes;
  const { styleTagId, rule } = useFluentProviderThemeStyleTag({
    theme: mergedTheme,
    targetDocument,
    rendererAttributes: (_renderer_styleElementAttributes = renderer.styleElementAttributes) !== null && _renderer_styleElementAttributes !== void 0 ? _renderer_styleElementAttributes : DEFAULT_RENDERER_ATTRIBUTES
  });
  return {
    applyStylesToPortals,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    customStyleHooks_unstable: mergedCustomStyleHooks,
    dir,
    targetDocument,
    theme: mergedTheme,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    overrides_unstable: mergedOverrides,
    themeClassName: styleTagId,
    components: {
      root: "div"
    },
    root: always(getIntrinsicElementProps("div", {
      ...props,
      dir,
      // FIXME:
      // `ref` is wrongly assigned to be `HTMLElement` instead of `HTMLDivElement`
      // but since it would be a breaking change to fix it, we are casting ref to it's proper type
      ref: useMergedRefs(ref, useFocusVisible({
        targetDocument
      }))
    }), {
      elementType: "div"
    }),
    serverStyleProps: {
      cssRule: rule,
      attributes: {
        ...renderer.styleElementAttributes,
        id: styleTagId
      }
    }
  };
};
function shallowMerge(a, b2) {
  if (a && b2) {
    return {
      ...a,
      ...b2
    };
  }
  if (a) {
    return a;
  }
  return b2;
}
function useTheme() {
  return reactExports.useContext(ThemeContext);
}
function useFluentProviderContextValues_unstable(state) {
  const {
    applyStylesToPortals,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    customStyleHooks_unstable,
    dir,
    root,
    targetDocument,
    theme,
    themeClassName,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    overrides_unstable
  } = state;
  const provider = reactExports.useMemo(() => ({
    dir,
    targetDocument
  }), [
    dir,
    targetDocument
  ]);
  const [tooltip] = reactExports.useState(() => ({}));
  const iconDirection = reactExports.useMemo(() => ({
    textDirection: dir
  }), [
    dir
  ]);
  return {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    customStyleHooks_unstable,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    overrides_unstable,
    provider,
    textDirection: dir,
    iconDirection,
    tooltip,
    theme,
    themeClassName: applyStylesToPortals ? root.className : themeClassName
  };
}
const FluentProvider = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const state = useFluentProvider_unstable(props, ref);
  useFluentProviderStyles_unstable(state);
  const contextValues = useFluentProviderContextValues_unstable(state);
  return renderFluentProvider_unstable(state, contextValues);
});
FluentProvider.displayName = "FluentProvider";
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  function f2(a, b2) {
    var c2 = a.length;
    a.push(b2);
    a: for (; 0 < c2; ) {
      var d2 = c2 - 1 >>> 1, e2 = a[d2];
      if (0 < g2(e2, b2)) a[d2] = b2, a[c2] = e2, c2 = d2;
      else break a;
    }
  }
  function h2(a) {
    return 0 === a.length ? null : a[0];
  }
  function k2(a) {
    if (0 === a.length) return null;
    var b2 = a[0], c2 = a.pop();
    if (c2 !== b2) {
      a[0] = c2;
      a: for (var d2 = 0, e2 = a.length, w2 = e2 >>> 1; d2 < w2; ) {
        var m2 = 2 * (d2 + 1) - 1, C2 = a[m2], n2 = m2 + 1, x = a[n2];
        if (0 > g2(C2, c2)) n2 < e2 && 0 > g2(x, C2) ? (a[d2] = x, a[n2] = c2, d2 = n2) : (a[d2] = C2, a[m2] = c2, d2 = m2);
        else if (n2 < e2 && 0 > g2(x, c2)) a[d2] = x, a[n2] = c2, d2 = n2;
        else break a;
      }
    }
    return b2;
  }
  function g2(a, b2) {
    var c2 = a.sortIndex - b2.sortIndex;
    return 0 !== c2 ? c2 : a.id - b2.id;
  }
  if ("object" === typeof performance && "function" === typeof performance.now) {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  var r2 = [], t = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
  "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function G2(a) {
    for (var b2 = h2(t); null !== b2; ) {
      if (null === b2.callback) k2(t);
      else if (b2.startTime <= a) k2(t), b2.sortIndex = b2.expirationTime, f2(r2, b2);
      else break;
      b2 = h2(t);
    }
  }
  function H2(a) {
    B2 = false;
    G2(a);
    if (!A2) if (null !== h2(r2)) A2 = true, I2(J);
    else {
      var b2 = h2(t);
      null !== b2 && K(H2, b2.startTime - a);
    }
  }
  function J(a, b2) {
    A2 = false;
    B2 && (B2 = false, E2(L), L = -1);
    z2 = true;
    var c2 = y2;
    try {
      G2(b2);
      for (v2 = h2(r2); null !== v2 && (!(v2.expirationTime > b2) || a && !M()); ) {
        var d2 = v2.callback;
        if ("function" === typeof d2) {
          v2.callback = null;
          y2 = v2.priorityLevel;
          var e2 = d2(v2.expirationTime <= b2);
          b2 = exports.unstable_now();
          "function" === typeof e2 ? v2.callback = e2 : v2 === h2(r2) && k2(r2);
          G2(b2);
        } else k2(r2);
        v2 = h2(r2);
      }
      if (null !== v2) var w2 = true;
      else {
        var m2 = h2(t);
        null !== m2 && K(H2, m2.startTime - b2);
        w2 = false;
      }
      return w2;
    } finally {
      v2 = null, y2 = c2, z2 = false;
    }
  }
  var N = false, O = null, L = -1, P = 5, Q = -1;
  function M() {
    return exports.unstable_now() - Q < P ? false : true;
  }
  function R() {
    if (null !== O) {
      var a = exports.unstable_now();
      Q = a;
      var b2 = true;
      try {
        b2 = O(true, a);
      } finally {
        b2 ? S() : (N = false, O = null);
      }
    } else N = false;
  }
  var S;
  if ("function" === typeof F2) S = function() {
    F2(R);
  };
  else if ("undefined" !== typeof MessageChannel) {
    var T = new MessageChannel(), U = T.port2;
    T.port1.onmessage = R;
    S = function() {
      U.postMessage(null);
    };
  } else S = function() {
    D2(R, 0);
  };
  function I2(a) {
    O = a;
    N || (N = true, S());
  }
  function K(a, b2) {
    L = D2(function() {
      a(exports.unstable_now());
    }, b2);
  }
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a) {
    a.callback = null;
  };
  exports.unstable_continueExecution = function() {
    A2 || z2 || (A2 = true, I2(J));
  };
  exports.unstable_forceFrameRate = function(a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1e3 / a) : 5;
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return y2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return h2(r2);
  };
  exports.unstable_next = function(a) {
    switch (y2) {
      case 1:
      case 2:
      case 3:
        var b2 = 3;
        break;
      default:
        b2 = y2;
    }
    var c2 = y2;
    y2 = b2;
    try {
      return a();
    } finally {
      y2 = c2;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = function() {
  };
  exports.unstable_runWithPriority = function(a, b2) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a = 3;
    }
    var c2 = y2;
    y2 = a;
    try {
      return b2();
    } finally {
      y2 = c2;
    }
  };
  exports.unstable_scheduleCallback = function(a, b2, c2) {
    var d2 = exports.unstable_now();
    "object" === typeof c2 && null !== c2 ? (c2 = c2.delay, c2 = "number" === typeof c2 && 0 < c2 ? d2 + c2 : d2) : c2 = d2;
    switch (a) {
      case 1:
        var e2 = -1;
        break;
      case 2:
        e2 = 250;
        break;
      case 5:
        e2 = 1073741823;
        break;
      case 4:
        e2 = 1e4;
        break;
      default:
        e2 = 5e3;
    }
    e2 = c2 + e2;
    a = { id: u2++, callback: b2, priorityLevel: a, startTime: c2, expirationTime: e2, sortIndex: -1 };
    c2 > d2 ? (a.sortIndex = c2, f2(t, a), null === h2(r2) && a === h2(t) && (B2 ? (E2(L), L = -1) : B2 = true, K(H2, c2 - d2))) : (a.sortIndex = e2, f2(r2, a), A2 || z2 || (A2 = true, I2(J)));
    return a;
  };
  exports.unstable_shouldYield = M;
  exports.unstable_wrapCallback = function(a) {
    var b2 = y2;
    return function() {
      var c2 = y2;
      y2 = b2;
      try {
        return a.apply(this, arguments);
      } finally {
        y2 = c2;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
var schedulerExports = scheduler.exports;
const createProvider = (Original) => {
  const Provider2 = (props) => {
    const valueRef = reactExports.useRef(props.value);
    const versionRef = reactExports.useRef(0);
    const contextValue = reactExports.useRef(null);
    if (!contextValue.current) {
      contextValue.current = {
        value: valueRef,
        version: versionRef,
        listeners: []
      };
    }
    useIsomorphicLayoutEffect(() => {
      valueRef.current = props.value;
      versionRef.current += 1;
      schedulerExports.unstable_runWithPriority(schedulerExports.unstable_NormalPriority, () => {
        contextValue.current.listeners.forEach((listener) => {
          listener([
            versionRef.current,
            props.value
          ]);
        });
      });
    }, [
      props.value
    ]);
    return reactExports.createElement(Original, {
      value: contextValue.current
    }, props.children);
  };
  return Provider2;
};
const createContext = (defaultValue) => {
  const context = reactExports.createContext({
    value: {
      current: defaultValue
    },
    version: {
      current: -1
    },
    listeners: []
  });
  context.Provider = createProvider(context.Provider);
  delete context.Consumer;
  return context;
};
const useContextSelector = (context, selector) => {
  const contextValue = reactExports.useContext(context);
  const { value: { current: value }, version: { current: version }, listeners } = contextValue;
  const selected = selector(value);
  const [state, setState] = reactExports.useState([
    value,
    selected
  ]);
  const dispatch = (payload) => {
    setState((prevState) => {
      if (!payload) {
        return [
          value,
          selected
        ];
      }
      if (payload[0] <= version) {
        if (Object.is(prevState[1], selected)) {
          return prevState;
        }
        return [
          value,
          selected
        ];
      }
      try {
        if (Object.is(prevState[0], payload[1])) {
          return prevState;
        }
        const nextSelected = selector(payload[1]);
        if (Object.is(prevState[1], nextSelected)) {
          return prevState;
        }
        return [
          payload[1],
          nextSelected
        ];
      } catch (e2) {
      }
      return [
        prevState[0],
        prevState[1]
      ];
    });
  };
  if (!Object.is(state[1], selected)) {
    dispatch(void 0);
  }
  const stableDispatch = useEventCallback(dispatch);
  useIsomorphicLayoutEffect(() => {
    listeners.push(stableDispatch);
    return () => {
      const index = listeners.indexOf(stableDispatch);
      listeners.splice(index, 1);
    };
  }, [
    stableDispatch,
    listeners
  ]);
  return state[1];
};
function useHasParentContext(context) {
  const contextValue = reactExports.useContext(context);
  if (contextValue.version) {
    return contextValue.version.current !== -1;
  }
  return false;
}
const Enter = "Enter";
const Space = " ";
const Tab = "Tab";
const ArrowDown = "ArrowDown";
const ArrowLeft = "ArrowLeft";
const ArrowRight = "ArrowRight";
const Escape = "Escape";
function useARIAButtonProps(type, props) {
  const { disabled, disabledFocusable = false, ["aria-disabled"]: ariaDisabled, onClick, onKeyDown, onKeyUp, ...rest } = props !== null && props !== void 0 ? props : {};
  const normalizedARIADisabled = typeof ariaDisabled === "string" ? ariaDisabled === "true" : ariaDisabled;
  const isDisabled = disabled || disabledFocusable || normalizedARIADisabled;
  const handleClick = useEventCallback((ev) => {
    if (isDisabled) {
      ev.preventDefault();
      ev.stopPropagation();
    } else {
      onClick === null || onClick === void 0 ? void 0 : onClick(ev);
    }
  });
  const handleKeyDown = useEventCallback((ev) => {
    onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(ev);
    if (ev.isDefaultPrevented()) {
      return;
    }
    const key = ev.key;
    if (isDisabled && (key === Enter || key === Space)) {
      ev.preventDefault();
      ev.stopPropagation();
      return;
    }
    if (key === Space) {
      ev.preventDefault();
      return;
    } else if (key === Enter) {
      ev.preventDefault();
      ev.currentTarget.click();
    }
  });
  const handleKeyUp = useEventCallback((ev) => {
    onKeyUp === null || onKeyUp === void 0 ? void 0 : onKeyUp(ev);
    if (ev.isDefaultPrevented()) {
      return;
    }
    const key = ev.key;
    if (isDisabled && (key === Enter || key === Space)) {
      ev.preventDefault();
      ev.stopPropagation();
      return;
    }
    if (key === Space) {
      ev.preventDefault();
      ev.currentTarget.click();
    }
  });
  if (type === "button" || type === void 0) {
    return {
      ...rest,
      disabled: disabled && !disabledFocusable,
      "aria-disabled": disabledFocusable ? true : normalizedARIADisabled,
      // onclick should still use internal handler to ensure prevention if disabled
      // if disabledFocusable then there's no requirement for handlers as those events should not be propagated
      onClick: disabledFocusable ? void 0 : handleClick,
      onKeyUp: disabledFocusable ? void 0 : onKeyUp,
      onKeyDown: disabledFocusable ? void 0 : onKeyDown
    };
  } else {
    const isLink = !!rest.href;
    let roleOverride = isLink ? void 0 : "button";
    if (!roleOverride && isDisabled) {
      roleOverride = "link";
    }
    const resultProps = {
      role: roleOverride,
      tabIndex: disabledFocusable || !isLink && !disabled ? 0 : void 0,
      ...rest,
      // If it's not a <button> than listeners are required even with disabledFocusable
      // Since you cannot assure the default behavior of the element
      // E.g: <a> will redirect on click
      onClick: handleClick,
      onKeyUp: handleKeyUp,
      onKeyDown: handleKeyDown,
      "aria-disabled": isDisabled
    };
    if (type === "a" && isDisabled) {
      resultProps.href = void 0;
    }
    return resultProps;
  }
}
const useStyles$b = __styles({
  "root": {
    "mc9l5x": "f1w7gpdv",
    "Bg96gwp": "fez10in"
  },
  "rtl": {
    "Bz10aip": "f13rod7r"
  }
}, {
  "d": [".f1w7gpdv{display:inline;}", ".fez10in{line-height:0;}", ".f13rod7r{transform:scaleX(-1);}"]
});
const useIconState = (props, options) => {
  const { title, primaryFill = "currentColor", ...rest } = props;
  const state = {
    ...rest,
    title: void 0,
    fill: primaryFill
  };
  const styles = useStyles$b();
  const iconContext = useIconContext();
  state.className = mergeClasses(styles.root, (options === null || options === void 0 ? void 0 : options.flipInRtl) && (iconContext === null || iconContext === void 0 ? void 0 : iconContext.textDirection) === "rtl" && styles.rtl, state.className);
  if (title) {
    state["aria-label"] = title;
  }
  if (!state["aria-label"] && !state["aria-labelledby"]) {
    state["aria-hidden"] = true;
  } else {
    state["role"] = "img";
  }
  return state;
};
const useRootStyles$6 = __styles({
  "root": {
    "B8gzw0y": "f1dd5bof"
  }
}, {
  "m": [["@media (forced-colors: active){.f1dd5bof{forced-color-adjust:auto;}}", {
    "m": "(forced-colors: active)"
  }]]
});
const createFluentIcon = (displayName, width, pathsOrSvg, options) => {
  const viewBoxWidth = width === "1em" ? "20" : width;
  const Icon = reactExports.forwardRef((props, ref) => {
    const styles = useRootStyles$6();
    const iconState = useIconState(props, { flipInRtl: options === null || options === void 0 ? void 0 : options.flipInRtl });
    const state = {
      ...iconState,
      className: mergeClasses(iconState.className, styles.root),
      ref,
      width,
      height: width,
      viewBox: `0 0 ${viewBoxWidth} ${viewBoxWidth}`,
      xmlns: "http://www.w3.org/2000/svg"
    };
    if (typeof pathsOrSvg === "string") {
      return reactExports.createElement("svg", { ...state, dangerouslySetInnerHTML: { __html: pathsOrSvg } });
    } else {
      return reactExports.createElement("svg", state, ...pathsOrSvg.map((d2) => reactExports.createElement("path", { d: d2, fill: state.fill })));
    }
  });
  Icon.displayName = displayName;
  return Icon;
};
const ChevronLeftFilled = /* @__PURE__ */ createFluentIcon("ChevronLeftFilled", "1em", ["M12.27 15.8a.75.75 0 0 1-1.06-.03l-5-5.25a.75.75 0 0 1 0-1.04l5-5.25a.75.75 0 1 1 1.08 1.04L7.8 10l4.5 4.73c.29.3.28.78-.02 1.06Z"]);
const ChevronLeftRegular = /* @__PURE__ */ createFluentIcon("ChevronLeftRegular", "1em", ["M12.35 15.85a.5.5 0 0 1-.7 0L6.16 10.4a.55.55 0 0 1 0-.78l5.49-5.46a.5.5 0 1 1 .7.7L7.2 10l5.16 5.15c.2.2.2.5 0 .7Z"]);
const ChevronRightFilled = /* @__PURE__ */ createFluentIcon("ChevronRightFilled", "1em", ["M7.73 4.2a.75.75 0 0 1 1.06.03l5 5.25c.28.3.28.75 0 1.04l-5 5.25a.75.75 0 1 1-1.08-1.04L12.2 10l-4.5-4.73a.75.75 0 0 1 .02-1.06Z"]);
const ChevronRightRegular = /* @__PURE__ */ createFluentIcon("ChevronRightRegular", "1em", ["M7.65 4.15c.2-.2.5-.2.7 0l5.49 5.46c.21.22.21.57 0 .78l-5.49 5.46a.5.5 0 0 1-.7-.7L12.8 10 7.65 4.85a.5.5 0 0 1 0-.7Z"]);
const Search24Regular = /* @__PURE__ */ createFluentIcon("Search24Regular", "24", ["M16.1 17.16a8 8 0 1 1 1.06-1.06l4.62 4.62a.75.75 0 1 1-1.06 1.06l-4.62-4.62ZM17.5 11a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0Z"]);
const Settings24Regular = /* @__PURE__ */ createFluentIcon("Settings24Regular", "24", ["M12.01 2.25c.74 0 1.47.1 2.18.25.32.07.55.33.59.65l.17 1.53a1.38 1.38 0 0 0 1.92 1.11l1.4-.61c.3-.13.64-.06.85.17a9.8 9.8 0 0 1 2.2 3.8c.1.3 0 .63-.26.82l-1.25.92a1.38 1.38 0 0 0 0 2.22l1.25.92c.26.19.36.52.27.82a9.8 9.8 0 0 1-2.2 3.8.75.75 0 0 1-.85.17l-1.4-.62a1.38 1.38 0 0 0-1.93 1.12l-.17 1.52a.75.75 0 0 1-.58.65 9.52 9.52 0 0 1-4.4 0 .75.75 0 0 1-.57-.65l-.17-1.52a1.38 1.38 0 0 0-1.93-1.11l-1.4.62a.75.75 0 0 1-.85-.18 9.8 9.8 0 0 1-2.2-3.8c-.1-.3 0-.63.26-.82l1.25-.92a1.38 1.38 0 0 0 0-2.22l-1.24-.92a.75.75 0 0 1-.28-.82 9.8 9.8 0 0 1 2.2-3.8c.23-.23.57-.3.86-.17l1.4.62c.4.17.86.15 1.25-.08.38-.22.63-.6.68-1.04l.17-1.53a.75.75 0 0 1 .58-.65c.72-.16 1.45-.24 2.2-.25Zm0 1.5c-.45 0-.9.04-1.35.12l-.11.97a2.89 2.89 0 0 1-4.03 2.33l-.9-.4A8.3 8.3 0 0 0 4.29 9.1l.8.59a2.88 2.88 0 0 1 0 4.64l-.8.59a8.3 8.3 0 0 0 1.35 2.32l.9-.4a2.88 2.88 0 0 1 4.02 2.32l.1.99c.9.15 1.8.15 2.7 0l.1-.99a2.88 2.88 0 0 1 4.02-2.32l.9.4a8.3 8.3 0 0 0 1.35-2.32l-.8-.59a2.88 2.88 0 0 1 0-4.64l.8-.59a8.3 8.3 0 0 0-1.35-2.32l-.9.4a2.88 2.88 0 0 1-4.02-2.32l-.1-.98c-.45-.08-.9-.11-1.34-.12ZM12 8.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5Zm0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"]);
const Bot24Regular = /* @__PURE__ */ createFluentIcon("Bot24Regular", "24", ["M17.75 14C19 14 20 15 20 16.25v.9c0 1.1-.47 2.14-1.3 2.85-1.57 1.34-3.81 2-6.7 2s-5.13-.66-6.7-2A3.75 3.75 0 0 1 4 17.16v-.91C4 15 5.01 14 6.25 14h11.5Zm0 1.5H6.25a.75.75 0 0 0-.75.75v.9c0 .66.29 1.29.79 1.71C7.55 19.94 9.44 20.5 12 20.5s4.46-.56 5.72-1.64c.5-.43.78-1.05.78-1.7v-.91a.75.75 0 0 0-.75-.75ZM11.9 2h.1c.38 0 .7.28.74.65l.01.1v.75h3.5c1.24 0 2.25 1 2.25 2.25v4.5c0 1.25-1 2.25-2.25 2.25h-8.5c-1.24 0-2.25-1-2.25-2.25v-4.5c0-1.24 1-2.25 2.25-2.25h3.5v-.75c0-.38.28-.7.65-.74L12 2h-.1Zm4.35 3h-8.5a.75.75 0 0 0-.75.75v4.5c0 .42.34.75.75.75h8.5c.41 0 .75-.33.75-.75v-4.5a.75.75 0 0 0-.75-.75Zm-6.5 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm4.5 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"]);
const Server24Regular = /* @__PURE__ */ createFluentIcon("Server24Regular", "24", ["M9.25 6a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5ZM8.5 17.75c0-.41.34-.75.75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75ZM9.25 14a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5ZM6 5a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V5Zm3-1.5c-.83 0-1.5.67-1.5 1.5v14c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5V5c0-.83-.67-1.5-1.5-1.5H9Z"]);
const Wifi124Regular = /* @__PURE__ */ createFluentIcon("Wifi124Regular", "24", ["M17.74 10.75c.6.6 1.1 1.3 1.5 2.07a.75.75 0 1 1-1.34.68 6.56 6.56 0 0 0-11.71-.02.75.75 0 1 1-1.34-.67 8.06 8.06 0 0 1 12.9-2.06Zm-2.1 3.07c.45.45.82 1 1.08 1.58a.75.75 0 1 1-1.38.6A3.6 3.6 0 0 0 8.75 16a.75.75 0 1 1-1.37-.6 5.1 5.1 0 0 1 8.26-1.57Zm4.8-5.54c.52.5 1 1.09 1.42 1.7a.75.75 0 1 1-1.24.85 10.45 10.45 0 0 0-17.23 0 .75.75 0 0 1-1.23-.86 11.95 11.95 0 0 1 18.29-1.69Zm-7.38 8.16a1.5 1.5 0 1 1-2.12 2.12 1.5 1.5 0 0 1 2.12-2.12Z"]);
const Mic24Regular = /* @__PURE__ */ createFluentIcon("Mic24Regular", "24", ["M18.25 11c.38 0 .7.28.74.65l.01.1v.5a6.75 6.75 0 0 1-6.25 6.73v2.27a.75.75 0 0 1-1.5.1v-2.37A6.75 6.75 0 0 1 5 12.48v-.73a.75.75 0 0 1 1.5-.1v.6a5.25 5.25 0 0 0 5.03 5.25h.72a5.25 5.25 0 0 0 5.25-5.03v-.72c0-.41.34-.75.75-.75ZM12 2a4 4 0 0 1 4 4v6a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4Zm0 1.5A2.5 2.5 0 0 0 9.5 6v6a2.5 2.5 0 0 0 5 0V6A2.5 2.5 0 0 0 12 3.5Z"]);
const Copy24Regular = /* @__PURE__ */ createFluentIcon("Copy24Regular", "24", ["M5.5 4.63V17.25c0 1.8 1.46 3.25 3.25 3.25h8.62c-.31.88-1.15 1.5-2.13 1.5H8.75A4.75 4.75 0 0 1 4 17.25V6.75c0-.98.63-1.81 1.5-2.12ZM17.75 2C18.99 2 20 3 20 4.25v13c0 1.24-1 2.25-2.25 2.25h-9c-1.24 0-2.25-1-2.25-2.25v-13C6.5 3.01 7.5 2 8.75 2h9Zm0 1.5h-9a.75.75 0 0 0-.75.75v13c0 .41.34.75.75.75h9c.41 0 .75-.34.75-.75v-13a.75.75 0 0 0-.75-.75Z"]);
const Globe24Regular = /* @__PURE__ */ createFluentIcon("Globe24Regular", "24", ["M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm2.94 14.5H9.06c.65 2.41 1.79 4 2.94 4s2.29-1.59 2.94-4Zm-7.43 0H4.79a8.53 8.53 0 0 0 4.09 3.41c-.52-.82-.95-1.85-1.27-3.02l-.1-.39Zm11.7 0H16.5c-.32 1.33-.79 2.5-1.37 3.41a8.53 8.53 0 0 0 3.9-3.13l.2-.28ZM7.1 10H3.74v.02a8.52 8.52 0 0 0 .3 4.98h3.18a20.3 20.3 0 0 1-.13-5Zm8.3 0H8.6a18.97 18.97 0 0 0 .14 5h6.52a18.5 18.5 0 0 0 .14-5Zm4.87 0h-3.35a20.85 20.85 0 0 1-.13 5h3.18a8.48 8.48 0 0 0 .3-5ZM8.88 4.09h-.02a8.53 8.53 0 0 0-4.61 4.4l3.05.01c.31-1.75.86-3.28 1.58-4.41Zm3.12-.6-.12.01c-1.26.12-2.48 2.12-3.05 5h6.34c-.56-2.87-1.78-4.87-3.04-5H12Zm3.12.6.1.17A12.64 12.64 0 0 1 16.7 8.5h3.05a8.53 8.53 0 0 0-4.34-4.29l-.29-.12Z"]);
const Play24Regular = /* @__PURE__ */ createFluentIcon("Play24Regular", "24", ["M7.6 4.61a.75.75 0 0 0-1.1.66v13.46c0 .56.6.93 1.1.65l12.37-6.72a.75.75 0 0 0 0-1.32L7.61 4.61ZM5 5.27c0-1.7 1.83-2.79 3.33-1.97l12.36 6.72a2.25 2.25 0 0 1 0 3.96L8.33 20.7A2.25 2.25 0 0 1 5 18.73V5.27Z"]);
const CloudSync24Regular = /* @__PURE__ */ createFluentIcon("CloudSync24Regular", "24", ["M12 4.5a4.5 4.5 0 0 0-4.5 4.29.75.75 0 0 1-.74.71H6.5a3 3 0 1 0 0 6h3.58a6.55 6.55 0 0 0-.06 1.5H6.5a4.5 4.5 0 0 1-.42-8.98 6 6 0 0 1 11.84 0 4.5 4.5 0 0 1 4.05 4.97 6.53 6.53 0 0 0-1.8-1.85A3 3 0 0 0 17.5 9.5h-.26a.75.75 0 0 1-.74-.71A4.5 4.5 0 0 0 12 4.5ZM16.5 22a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Zm2-7a2.5 2.5 0 0 0-3.86-.17.5.5 0 0 1-.75-.66 3.5 3.5 0 0 1 5.11-.12v-.55a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h1ZM13 17.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-1a2.5 2.5 0 0 0 3.86.17.5.5 0 0 1 .75.66 3.5 3.5 0 0 1-5.11.12v.55a.5.5 0 0 1-1 0v-2Z"]);
const Navigation24Regular = /* @__PURE__ */ createFluentIcon("Navigation24Regular", "24", ["M2.75 18h18.5a.75.75 0 0 1 .1 1.5H2.75a.75.75 0 0 1-.1-1.5h18.6-18.5Zm0-6.5h18.5a.75.75 0 0 1 .1 1.5H2.75a.75.75 0 0 1-.1-1.5h18.6-18.5Zm0-6.5h18.5a.75.75 0 0 1 .1 1.5H2.75a.75.75 0 0 1-.1-1.49h18.6-18.5Z"]);
const ArrowRight24Regular = /* @__PURE__ */ createFluentIcon("ArrowRight24Regular", "24", ["M13.27 4.2a.75.75 0 0 0-1.04 1.1l6.25 5.95H3.75a.75.75 0 0 0 0 1.5h14.73l-6.25 5.95a.75.75 0 0 0 1.04 1.1l7.42-7.08a1 1 0 0 0 0-1.44L13.27 4.2Z"]);
const Send24Regular = /* @__PURE__ */ createFluentIcon("Send24Regular", "24", ["M5.7 12 2.3 3.27a.75.75 0 0 1 .94-.98l.1.04 18 9c.51.26.54.97.1 1.28l-.1.06-18 9a.75.75 0 0 1-1.07-.85l.03-.1L5.7 12 2.3 3.27 5.7 12ZM4.4 4.54l2.61 6.7 6.63.01c.38 0 .7.28.74.65v.1c0 .38-.27.7-.64.74l-.1.01H7l-2.6 6.7L19.31 12 4.4 4.54Z"], { flipInRtl: true });
const Shield24Regular = /* @__PURE__ */ createFluentIcon("Shield24Regular", "24", ["M3 5.75c0-.41.34-.75.75-.75 2.66 0 5.26-.94 7.8-2.85.27-.2.63-.2.9 0C14.99 4.05 17.59 5 20.25 5c.41 0 .75.34.75.75V11c0 5-2.96 8.68-8.73 10.95a.75.75 0 0 1-.54 0C5.96 19.68 3 16 3 11V5.75Zm1.5.73V11c0 4.26 2.45 7.38 7.5 9.44 5.05-2.06 7.5-5.18 7.5-9.44V6.48a14.36 14.36 0 0 1-7.5-2.8 14.36 14.36 0 0 1-7.5 2.8Z"]);
const Building24Regular = /* @__PURE__ */ createFluentIcon("Building24Regular", "24", ["M6.25 3.5a.75.75 0 0 0-.75.75V20.5h2v-2.75c0-.69.56-1.25 1.25-1.25h6.5c.69 0 1.25.56 1.25 1.25v2.75h2v-8.75a.75.75 0 0 0-.75-.75h-2a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 0-.75-.75h-8ZM9 18v2.5h2.25V18H9Zm3.75 0v2.5H15V18h-2.25Zm6.5 4H4.75a.75.75 0 0 1-.75-.75v-17C4 3.01 5 2 6.25 2h8c1.24 0 2.25 1 2.25 2.25V9.5h1.25c1.24 0 2.25 1 2.25 2.25v9.5c0 .41-.34.75-.75.75ZM7.5 6.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0-3.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM12 5.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3.5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM12 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"]);
const Phone24Regular = /* @__PURE__ */ createFluentIcon("Phone24Regular", "24", ["M15.75 2C16.99 2 18 3 18 4.25v15.5c0 1.24-1 2.25-2.25 2.25h-7.5C7.01 22 6 21 6 19.75V4.25C6 3.01 7 2 8.25 2h7.5Zm0 1.5h-7.5a.75.75 0 0 0-.75.75v15.5c0 .41.34.75.75.75h7.5c.41 0 .75-.34.75-.75V4.25a.75.75 0 0 0-.75-.75Zm-2.5 14a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1 0-1.5h2.5Z"]);
const Dismiss20Regular = /* @__PURE__ */ createFluentIcon("Dismiss20Regular", "20", ["m4.09 4.22.06-.07a.5.5 0 0 1 .63-.06l.07.06L10 9.29l5.15-5.14a.5.5 0 0 1 .63-.06l.07.06c.18.17.2.44.06.63l-.06.07L10.71 10l5.14 5.15c.18.17.2.44.06.63l-.06.07a.5.5 0 0 1-.63.06l-.07-.06L10 10.71l-5.15 5.14a.5.5 0 0 1-.63.06l-.07-.06a.5.5 0 0 1-.06-.63l.06-.07L9.29 10 4.15 4.85a.5.5 0 0 1-.06-.63l.06-.07-.06.07Z"]);
const Dismiss24Regular = /* @__PURE__ */ createFluentIcon("Dismiss24Regular", "24", ["m4.4 4.55.07-.08a.75.75 0 0 1 .98-.07l.08.07L12 10.94l6.47-6.47a.75.75 0 1 1 1.06 1.06L13.06 12l6.47 6.47c.27.27.3.68.07.98l-.07.08a.75.75 0 0 1-.98.07l-.08-.07L12 13.06l-6.47 6.47a.75.75 0 0 1-1.06-1.06L10.94 12 4.47 5.53a.75.75 0 0 1-.07-.98l.07-.08-.07.08Z"]);
const iconFilledClassName = "fui-Icon-filled";
const iconRegularClassName = "fui-Icon-regular";
const useBundledIconStyles = __styles({
  "root": {
    "mc9l5x": "fjseox"
  },
  "visible": {
    "mc9l5x": "f1w7gpdv"
  }
}, {
  "d": [".fjseox{display:none;}", ".f1w7gpdv{display:inline;}"]
});
const bundleIcon = (FilledIcon, RegularIcon) => {
  const Component = (props) => {
    const { className, filled, ...rest } = props;
    const styles = useBundledIconStyles();
    return reactExports.createElement(
      reactExports.Fragment,
      null,
      reactExports.createElement(FilledIcon, Object.assign({}, rest, { className: mergeClasses(styles.root, filled && styles.visible, iconFilledClassName, className) })),
      reactExports.createElement(RegularIcon, Object.assign({}, rest, { className: mergeClasses(styles.root, !filled && styles.visible, iconRegularClassName, className) }))
    );
  };
  Component.displayName = "CompoundIcon";
  return Component;
};
const durations = {
  durationUltraFast: 50,
  durationFaster: 100,
  durationFast: 150,
  durationNormal: 200,
  durationGentle: 250,
  durationSlow: 300,
  durationSlower: 400,
  durationUltraSlow: 500
};
const curves = {
  curveAccelerateMax: "cubic-bezier(0.9,0.1,1,0.2)",
  curveAccelerateMid: "cubic-bezier(1,0,1,1)",
  curveAccelerateMin: "cubic-bezier(0.8,0,0.78,1)",
  curveDecelerateMax: "cubic-bezier(0.1,0.9,0.2,1)",
  curveDecelerateMid: "cubic-bezier(0,0,0,1)",
  curveDecelerateMin: "cubic-bezier(0.33,0,0.1,1)",
  curveEasyEaseMax: "cubic-bezier(0.8,0,0.2,1)",
  curveEasyEase: "cubic-bezier(0.33,0,0.67,1)",
  curveLinear: "cubic-bezier(0,0,1,1)"
};
const motionTokens = {
  ...durations,
  ...curves
};
function isAnimationRunning(animation) {
  if (animation.playState === "running") {
    var _animation_effect;
    if (animation.overallProgress !== void 0) {
      var _animation_overallProgress;
      const overallProgress = (_animation_overallProgress = animation.overallProgress) !== null && _animation_overallProgress !== void 0 ? _animation_overallProgress : 0;
      return overallProgress > 0 && overallProgress < 1;
    }
    var _animation_currentTime;
    const currentTime = Number((_animation_currentTime = animation.currentTime) !== null && _animation_currentTime !== void 0 ? _animation_currentTime : 0);
    var _animation_effect_getTiming_duration;
    const totalTime = Number((_animation_effect_getTiming_duration = (_animation_effect = animation.effect) === null || _animation_effect === void 0 ? void 0 : _animation_effect.getTiming().duration) !== null && _animation_effect_getTiming_duration !== void 0 ? _animation_effect_getTiming_duration : 0);
    return currentTime > 0 && currentTime < totalTime;
  }
  return false;
}
const DEFAULT_ANIMATION_OPTIONS = {
  fill: "forwards"
};
const DEFAULT_REDUCED_MOTION_ATOM = {
  duration: 1
};
function useAnimateAtomsInSupportedEnvironment() {
  var _window_Animation;
  const SUPPORTS_PERSIST = typeof window !== "undefined" && typeof ((_window_Animation = window.Animation) === null || _window_Animation === void 0 ? void 0 : _window_Animation.prototype.persist) === "function";
  return reactExports.useCallback((element, value, options) => {
    const atoms = Array.isArray(value) ? value : [
      value
    ];
    const { isReducedMotion } = options;
    const animations = atoms.map((motion) => {
      const { keyframes: motionKeyframes, reducedMotion = DEFAULT_REDUCED_MOTION_ATOM, ...params } = motion;
      const { keyframes: reducedMotionKeyframes = motionKeyframes, ...reducedMotionParams } = reducedMotion;
      const animationKeyframes = isReducedMotion ? reducedMotionKeyframes : motionKeyframes;
      const animationParams = {
        ...DEFAULT_ANIMATION_OPTIONS,
        ...params,
        // Use reduced motion overrides (e.g. duration, easing) when reduced motion is enabled
        ...isReducedMotion && reducedMotionParams
      };
      try {
        const animation = element.animate(animationKeyframes, animationParams);
        if (SUPPORTS_PERSIST) {
          animation === null || animation === void 0 ? void 0 : animation.persist();
        } else {
          const resultKeyframe = animationKeyframes[animationKeyframes.length - 1];
          var _element_style;
          Object.assign((_element_style = element.style) !== null && _element_style !== void 0 ? _element_style : {}, resultKeyframe);
        }
        return animation;
      } catch (e2) {
        return null;
      }
    }).filter((animation) => !!animation);
    return {
      set playbackRate(rate) {
        animations.forEach((animation) => {
          animation.playbackRate = rate;
        });
      },
      setMotionEndCallbacks(onfinish, oncancel) {
        const promises = animations.map((animation) => {
          return new Promise((resolve, reject) => {
            animation.onfinish = () => resolve();
            animation.oncancel = () => reject();
          });
        });
        Promise.all(promises).then(() => {
          onfinish();
        }).catch(() => {
          oncancel();
        });
      },
      isRunning() {
        return animations.some((animation) => isAnimationRunning(animation));
      },
      cancel: () => {
        animations.forEach((animation) => {
          animation.cancel();
        });
      },
      pause: () => {
        animations.forEach((animation) => {
          animation.pause();
        });
      },
      play: () => {
        animations.forEach((animation) => {
          animation.play();
        });
      },
      finish: () => {
        animations.forEach((animation) => {
          animation.finish();
        });
      },
      reverse: () => {
        animations.forEach((animation) => {
          animation.reverse();
        });
      }
    };
  }, [
    SUPPORTS_PERSIST
  ]);
}
function useAnimateAtoms() {
  "use no memo";
  return useAnimateAtomsInSupportedEnvironment();
}
function useMotionImperativeRef(imperativeRef) {
  const animationRef = reactExports.useRef(void 0);
  reactExports.useImperativeHandle(imperativeRef, () => ({
    setPlayState: (state) => {
      if (state === "running") {
        var _animationRef_current;
        (_animationRef_current = animationRef.current) === null || _animationRef_current === void 0 ? void 0 : _animationRef_current.play();
      }
      if (state === "paused") {
        var _animationRef_current1;
        (_animationRef_current1 = animationRef.current) === null || _animationRef_current1 === void 0 ? void 0 : _animationRef_current1.pause();
      }
    },
    setPlaybackRate: (rate) => {
      if (animationRef.current) {
        animationRef.current.playbackRate = rate;
      }
    }
  }));
  return animationRef;
}
const REDUCED_MEDIA_QUERY = "screen and (prefers-reduced-motion: reduce)";
function useIsReducedMotion() {
  const { targetDocument } = useFluent();
  var _targetDocument_defaultView;
  const targetWindow = (_targetDocument_defaultView = targetDocument === null || targetDocument === void 0 ? void 0 : targetDocument.defaultView) !== null && _targetDocument_defaultView !== void 0 ? _targetDocument_defaultView : null;
  const queryValue = reactExports.useRef(false);
  const isEnabled = reactExports.useCallback(() => queryValue.current, []);
  useIsomorphicLayoutEffect(() => {
    if (targetWindow === null || typeof targetWindow.matchMedia !== "function") {
      return;
    }
    const queryMatch = targetWindow.matchMedia(REDUCED_MEDIA_QUERY);
    if (queryMatch.matches) {
      queryValue.current = true;
    }
    const matchListener = (e2) => {
      queryValue.current = e2.matches;
    };
    queryMatch.addEventListener("change", matchListener);
    return () => {
      queryMatch.removeEventListener("change", matchListener);
    };
  }, [
    targetWindow
  ]);
  return isEnabled;
}
const CHILD_ERROR_MESSAGE = [
  "@fluentui/react-motion: Invalid child element.",
  "\n",
  "Motion factories require a single child element to be passed. ",
  "That element element should support ref forwarding i.e. it should be either an intrinsic element (e.g. div) or a component that uses React.forwardRef()."
].join("");
function useChildElement(children, mounted = true) {
  const childRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
  }, [
    mounted
  ]);
  try {
    const child = reactExports.Children.only(children);
    if (reactExports.isValidElement(child)) {
      return [
        reactExports.cloneElement(child, {
          ref: useMergedRefs(childRef, getReactElementRef(child))
        }),
        childRef
      ];
    }
  } catch {
  }
  throw new Error(CHILD_ERROR_MESSAGE);
}
const MotionBehaviourContext = reactExports.createContext(void 0);
MotionBehaviourContext.Provider;
const useMotionBehaviourContext = () => {
  var _React_useContext;
  return (_React_useContext = reactExports.useContext(MotionBehaviourContext)) !== null && _React_useContext !== void 0 ? _React_useContext : "default";
};
const MOTION_DEFINITION = Symbol("MOTION_DEFINITION");
function createMotionComponent(value) {
  const Atom = (props) => {
    "use no memo";
    const { children, imperativeRef, onMotionFinish: onMotionFinishProp, onMotionStart: onMotionStartProp, onMotionCancel: onMotionCancelProp, ..._rest } = props;
    const params = _rest;
    const [child, childRef] = useChildElement(children);
    const handleRef = useMotionImperativeRef(imperativeRef);
    const skipMotions = useMotionBehaviourContext() === "skip";
    const optionsRef = reactExports.useRef({
      skipMotions,
      params
    });
    const animateAtoms = useAnimateAtoms();
    const isReducedMotion = useIsReducedMotion();
    const onMotionStart = useEventCallback(() => {
      onMotionStartProp === null || onMotionStartProp === void 0 ? void 0 : onMotionStartProp(null);
    });
    const onMotionFinish = useEventCallback(() => {
      onMotionFinishProp === null || onMotionFinishProp === void 0 ? void 0 : onMotionFinishProp(null);
    });
    const onMotionCancel = useEventCallback(() => {
      onMotionCancelProp === null || onMotionCancelProp === void 0 ? void 0 : onMotionCancelProp(null);
    });
    useIsomorphicLayoutEffect(() => {
      optionsRef.current = {
        skipMotions,
        params
      };
    });
    useIsomorphicLayoutEffect(() => {
      const element = childRef.current;
      if (element) {
        const atoms = typeof value === "function" ? value({
          element,
          ...optionsRef.current.params
        }) : value;
        onMotionStart();
        const handle = animateAtoms(element, atoms, {
          isReducedMotion: isReducedMotion()
        });
        handleRef.current = handle;
        handle.setMotionEndCallbacks(onMotionFinish, onMotionCancel);
        if (optionsRef.current.skipMotions) {
          handle.finish();
        }
        return () => {
          handle.cancel();
        };
      }
    }, [
      animateAtoms,
      childRef,
      handleRef,
      isReducedMotion,
      onMotionFinish,
      onMotionStart,
      onMotionCancel
    ]);
    return child;
  };
  return Object.assign(Atom, {
    // Heads up!
    // Always normalize it to a function to simplify types
    [MOTION_DEFINITION]: typeof value === "function" ? value : () => value
  });
}
const PresenceGroupChildContext = reactExports.createContext(void 0);
PresenceGroupChildContext.Provider;
function useMountedState(visible = false, unmountOnExit = false) {
  const mountedRef = reactExports.useRef(unmountOnExit ? visible : true);
  const forceUpdate = useForceUpdate();
  const setMounted = reactExports.useCallback((newValue) => {
    if (mountedRef.current !== newValue) {
      mountedRef.current = newValue;
      forceUpdate();
    }
  }, [
    forceUpdate
  ]);
  reactExports.useEffect(() => {
    if (visible) {
      mountedRef.current = visible;
    }
  });
  return [
    visible || mountedRef.current,
    setMounted
  ];
}
const PRESENCE_MOTION_DEFINITION = Symbol("PRESENCE_MOTION_DEFINITION");
const INTERRUPTABLE_MOTION_SYMBOL = Symbol.for("interruptablePresence");
function createPresenceComponent(value) {
  return Object.assign((props) => {
    "use no memo";
    const itemContext = reactExports.useContext(PresenceGroupChildContext);
    const merged = {
      ...itemContext,
      ...props
    };
    const skipMotions = useMotionBehaviourContext() === "skip";
    const { appear, children, imperativeRef, onExit, onMotionFinish, onMotionStart, onMotionCancel, visible, unmountOnExit, ..._rest } = merged;
    const params = _rest;
    const [mounted, setMounted] = useMountedState(visible, unmountOnExit);
    const [child, childRef] = useChildElement(children, mounted);
    const handleRef = useMotionImperativeRef(imperativeRef);
    const optionsRef = reactExports.useRef({
      appear,
      params,
      skipMotions
    });
    const animateAtoms = useAnimateAtoms();
    const isFirstMount = useFirstMount();
    const isReducedMotion = useIsReducedMotion();
    const handleMotionStart = useEventCallback((direction) => {
      onMotionStart === null || onMotionStart === void 0 ? void 0 : onMotionStart(null, {
        direction
      });
    });
    const handleMotionFinish = useEventCallback((direction) => {
      onMotionFinish === null || onMotionFinish === void 0 ? void 0 : onMotionFinish(null, {
        direction
      });
      if (direction === "exit" && unmountOnExit) {
        setMounted(false);
        onExit === null || onExit === void 0 ? void 0 : onExit();
      }
    });
    const handleMotionCancel = useEventCallback((direction) => {
      onMotionCancel === null || onMotionCancel === void 0 ? void 0 : onMotionCancel(null, {
        direction
      });
    });
    useIsomorphicLayoutEffect(() => {
      optionsRef.current = {
        appear,
        params,
        skipMotions
      };
    });
    useIsomorphicLayoutEffect(
      () => {
        const element = childRef.current;
        if (!element) {
          return;
        }
        let handle;
        function cleanup() {
          if (!handle) {
            return;
          }
          if (IS_EXPERIMENTAL_INTERRUPTIBLE_MOTION && handle.isRunning()) {
            return;
          }
          handle.cancel();
          handleRef.current = void 0;
        }
        const presenceMotion = typeof value === "function" ? value({
          element,
          ...optionsRef.current.params
        }) : value;
        const IS_EXPERIMENTAL_INTERRUPTIBLE_MOTION = presenceMotion[INTERRUPTABLE_MOTION_SYMBOL];
        if (IS_EXPERIMENTAL_INTERRUPTIBLE_MOTION) {
          handle = handleRef.current;
          if (handle && handle.isRunning()) {
            handle.reverse();
            return cleanup;
          }
        }
        const atoms = visible ? presenceMotion.enter : presenceMotion.exit;
        const direction = visible ? "enter" : "exit";
        const applyInitialStyles = !optionsRef.current.appear && isFirstMount;
        const skipAnimationByConfig = optionsRef.current.skipMotions;
        if (!applyInitialStyles) {
          handleMotionStart(direction);
        }
        handle = animateAtoms(element, atoms, {
          isReducedMotion: isReducedMotion()
        });
        if (applyInitialStyles) {
          handle.finish();
          return cleanup;
        }
        handleRef.current = handle;
        handle.setMotionEndCallbacks(() => handleMotionFinish(direction), () => handleMotionCancel(direction));
        if (skipAnimationByConfig) {
          handle.finish();
        }
        return cleanup;
      },
      // Excluding `isFirstMount` from deps to prevent re-triggering the animation on subsequent renders
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [
        animateAtoms,
        childRef,
        handleRef,
        isReducedMotion,
        handleMotionFinish,
        handleMotionStart,
        handleMotionCancel,
        visible
      ]
    );
    if (mounted) {
      return child;
    }
    return null;
  }, {
    // Heads up!
    // Always normalize it to a function to simplify types
    [PRESENCE_MOTION_DEFINITION]: typeof value === "function" ? value : () => value
  }, {
    // Wrap `enter` in its own motion component as a static method, e.g. <Fade.In>
    In: createMotionComponent(
      // If we have a motion function, wrap it to forward the runtime params and pick `enter`.
      // Otherwise, pass the `enter` motion object directly.
      typeof value === "function" ? (...args) => value(...args).enter : value.enter
    ),
    // Wrap `exit` in its own motion component as a static method, e.g. <Fade.Out>
    Out: createMotionComponent(
      // If we have a motion function, wrap it to forward the runtime params and pick `exit`.
      // Otherwise, pass the `exit` motion object directly.
      typeof value === "function" ? (...args) => value(...args).exit : value.exit
    )
  });
}
function createPresenceFnVariant(presenceFn, variantParams) {
  const variantFn = (runtimeParams) => presenceFn({
    ...variantParams,
    ...runtimeParams
  });
  return variantFn;
}
function createPresenceComponentVariant(component, variantParams) {
  const originalFn = component[PRESENCE_MOTION_DEFINITION];
  const variantFn = createPresenceFnVariant(originalFn, variantParams);
  return createPresenceComponent(variantFn);
}
function presenceMotionSlot(motion, options) {
  const { as, children, ...rest } = motion !== null && motion !== void 0 ? motion : {};
  if (motion === null) {
    const isUnmounted = !options.defaultProps.visible && options.defaultProps.unmountOnExit;
    const renderFn = (_, props) => isUnmounted ? null : /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, props.children);
    return {
      [SLOT_RENDER_FUNCTION_SYMBOL]: renderFn,
      [SLOT_ELEMENT_TYPE_SYMBOL]: options.elementType
    };
  }
  const propsWithMetadata = {
    ...options.defaultProps,
    ...rest,
    [SLOT_ELEMENT_TYPE_SYMBOL]: options.elementType
  };
  if (typeof children === "function") {
    propsWithMetadata[SLOT_RENDER_FUNCTION_SYMBOL] = children;
  }
  return propsWithMetadata;
}
const fadeAtom = ({ direction, duration, easing = motionTokens.curveLinear, delay = 0, fromOpacity = 0, toOpacity = 1 }) => {
  const keyframes = [
    {
      opacity: fromOpacity
    },
    {
      opacity: toOpacity
    }
  ];
  if (direction === "exit") {
    keyframes.reverse();
  }
  return {
    keyframes,
    duration,
    easing,
    delay,
    // Applying opacity backwards and forwards in time is important
    // to avoid a bug where a delayed animation is not hidden when it should be.
    fill: "both"
  };
};
const fadePresenceFn = ({ duration = motionTokens.durationNormal, easing = motionTokens.curveEasyEase, delay = 0, exitDuration = duration, exitEasing = easing, exitDelay = delay, fromOpacity = 0, toOpacity = 1 }) => {
  return {
    enter: fadeAtom({
      direction: "enter",
      duration,
      easing,
      delay,
      fromOpacity,
      toOpacity
    }),
    exit: fadeAtom({
      direction: "exit",
      duration: exitDuration,
      easing: exitEasing,
      delay: exitDelay,
      fromOpacity,
      toOpacity
    })
  };
};
const Fade = createPresenceComponent(fadePresenceFn);
createPresenceComponentVariant(Fade, {
  duration: motionTokens.durationFast
});
const FadeRelaxed = createPresenceComponentVariant(Fade, {
  duration: motionTokens.durationGentle
});
const scaleAtom = ({ direction, duration, easing = motionTokens.curveLinear, delay = 0, fromScale = 0.9, toScale = 1 }) => {
  const keyframes = [
    {
      scale: fromScale
    },
    {
      scale: toScale
    }
  ];
  if (direction === "exit") {
    keyframes.reverse();
  }
  return {
    keyframes,
    duration,
    easing,
    delay
  };
};
const scalePresenceFn = ({ duration = motionTokens.durationGentle, easing = motionTokens.curveDecelerateMax, delay = 0, exitDuration = motionTokens.durationNormal, exitEasing = motionTokens.curveAccelerateMax, exitDelay = delay, fromScale = 0.9, toScale = 1, animateOpacity = true }) => {
  const enterAtoms = [
    scaleAtom({
      direction: "enter",
      duration,
      easing,
      delay,
      fromScale,
      toScale
    })
  ];
  const exitAtoms = [
    scaleAtom({
      direction: "exit",
      duration: exitDuration,
      easing: exitEasing,
      delay: exitDelay,
      fromScale,
      toScale
    })
  ];
  if (animateOpacity) {
    enterAtoms.push(fadeAtom({
      direction: "enter",
      duration,
      easing,
      delay
    }));
    exitAtoms.push(fadeAtom({
      direction: "exit",
      duration: exitDuration,
      easing: exitEasing,
      delay: exitDelay
    }));
  }
  return {
    enter: enterAtoms,
    exit: exitAtoms
  };
};
const Scale = createPresenceComponent(scalePresenceFn);
createPresenceComponentVariant(Scale, {
  duration: motionTokens.durationNormal,
  exitDuration: motionTokens.durationFast
});
createPresenceComponentVariant(Scale, {
  duration: motionTokens.durationSlow,
  exitDuration: motionTokens.durationGentle
});
const useBadge_unstable = (props, ref) => {
  const { shape = "circular", size: size2 = "medium", iconPosition = "before", appearance = "filled", color = "brand" } = props;
  const state = {
    shape,
    size: size2,
    iconPosition,
    appearance,
    color,
    components: {
      root: "div",
      icon: "span"
    },
    root: always(getIntrinsicElementProps("div", {
      // FIXME:
      // `ref` is wrongly assigned to be `HTMLElement` instead of `HTMLDivElement`
      // but since it would be a breaking change to fix it, we are casting ref to it's proper type
      ref,
      ...props
    }), {
      elementType: "div"
    }),
    icon: optional(props.icon, {
      elementType: "span"
    })
  };
  return state;
};
const badgeClassNames = {
  root: "fui-Badge",
  icon: "fui-Badge__icon"
};
const useRootClassName$1 = /* @__PURE__ */ __resetStyles("r1iycov", "r115jdol", [".r1iycov{display:inline-flex;box-sizing:border-box;align-items:center;justify-content:center;position:relative;font-family:var(--fontFamilyBase);font-size:var(--fontSizeBase200);font-weight:var(--fontWeightSemibold);line-height:var(--lineHeightBase200);height:20px;min-width:20px;padding:0 calc(var(--spacingHorizontalXS) + var(--spacingHorizontalXXS));border-radius:var(--borderRadiusCircular);border-color:var(--colorTransparentStroke);}", '.r1iycov::after{content:"";position:absolute;top:0;left:0;bottom:0;right:0;border-style:solid;border-color:inherit;border-width:var(--strokeWidthThin);border-radius:inherit;}', ".r115jdol{display:inline-flex;box-sizing:border-box;align-items:center;justify-content:center;position:relative;font-family:var(--fontFamilyBase);font-size:var(--fontSizeBase200);font-weight:var(--fontWeightSemibold);line-height:var(--lineHeightBase200);height:20px;min-width:20px;padding:0 calc(var(--spacingHorizontalXS) + var(--spacingHorizontalXXS));border-radius:var(--borderRadiusCircular);border-color:var(--colorTransparentStroke);}", '.r115jdol::after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-style:solid;border-color:inherit;border-width:var(--strokeWidthThin);border-radius:inherit;}']);
const useRootStyles$5 = /* @__PURE__ */ __styles({
  fontSmallToTiny: {
    Bahqtrf: "fk6fouc",
    Be2twd7: "f13mqy1h",
    Bhrd7zp: "fl43uef",
    Bg96gwp: "fcpl73t"
  },
  tiny: {
    a9b677: "f16dn6v3",
    Bqenvij: "f3mu39s",
    Be2twd7: "f130uwy9",
    Bg96gwp: "fod1mrr",
    Bf4jedk: "f18p0k4z",
    Byoj8tv: 0,
    uwmqm3: 0,
    z189sj: 0,
    z8tnut: 0,
    B0ocmuz: "f19jm9xf"
  },
  "extra-small": {
    a9b677: "fpd43o0",
    Bqenvij: "f30q22z",
    Be2twd7: "f1tccstq",
    Bg96gwp: "f1y3arg5",
    Bf4jedk: "f18p0k4z",
    Byoj8tv: 0,
    uwmqm3: 0,
    z189sj: 0,
    z8tnut: 0,
    B0ocmuz: "f19jm9xf"
  },
  small: {
    Bf4jedk: "fq2vo04",
    Bqenvij: "fd461yt",
    Byoj8tv: 0,
    uwmqm3: 0,
    z189sj: 0,
    z8tnut: 0,
    B0ocmuz: "fupdldz"
  },
  medium: {},
  large: {
    Bf4jedk: "f17fgpbq",
    Bqenvij: "frvgh55",
    Byoj8tv: 0,
    uwmqm3: 0,
    z189sj: 0,
    z8tnut: 0,
    B0ocmuz: "f1996nqw"
  },
  "extra-large": {
    Bf4jedk: "fwbmr0d",
    Bqenvij: "f1d2rq10",
    Byoj8tv: 0,
    uwmqm3: 0,
    z189sj: 0,
    z8tnut: 0,
    B0ocmuz: "fty64o7"
  },
  square: {
    Beyfa6y: 0,
    Bbmb7ep: 0,
    Btl43ni: 0,
    B7oj6ja: 0,
    Dimara: "f1fabniw"
  },
  rounded: {
    Beyfa6y: 0,
    Bbmb7ep: 0,
    Btl43ni: 0,
    B7oj6ja: 0,
    Dimara: "ft85np5"
  },
  roundedSmallToTiny: {
    Beyfa6y: 0,
    Bbmb7ep: 0,
    Btl43ni: 0,
    B7oj6ja: 0,
    Dimara: "fq9zq91"
  },
  circular: {},
  borderGhost: {
    ap17g6: "f10ludwy"
  },
  filled: {},
  "filled-brand": {
    De3pzq: "ffp7eso",
    sj55zd: "f1phragk"
  },
  "filled-danger": {
    De3pzq: "fdl5y0r",
    sj55zd: "f1phragk"
  },
  "filled-important": {
    De3pzq: "f1c73kur",
    sj55zd: "fr0bkrk"
  },
  "filled-informative": {
    De3pzq: "f3vzo32",
    sj55zd: "f11d4kpn"
  },
  "filled-severe": {
    De3pzq: "f1s438gw",
    sj55zd: "f1phragk"
  },
  "filled-subtle": {
    De3pzq: "fxugw4r",
    sj55zd: "f19n0e5"
  },
  "filled-success": {
    De3pzq: "flxk52p",
    sj55zd: "f1phragk"
  },
  "filled-warning": {
    De3pzq: "ffq97bm",
    sj55zd: "ff5vbop"
  },
  ghost: {},
  "ghost-brand": {
    sj55zd: "f16muhyy"
  },
  "ghost-danger": {
    sj55zd: "f1whyuy6"
  },
  "ghost-important": {
    sj55zd: "f19n0e5"
  },
  "ghost-informative": {
    sj55zd: "f11d4kpn"
  },
  "ghost-severe": {
    sj55zd: "f1l8vj45"
  },
  "ghost-subtle": {
    sj55zd: "fonrgv7"
  },
  "ghost-success": {
    sj55zd: "f1m7fhi8"
  },
  "ghost-warning": {
    sj55zd: "fpti2h4"
  },
  outline: {
    g2u3we: "f23ftbb",
    h3c5rm: ["f1gkuv52", "f1p1bl80"],
    B9xav0g: "fioka3i",
    zhjwy3: ["f1p1bl80", "f1gkuv52"]
  },
  "outline-brand": {
    sj55zd: "f16muhyy"
  },
  "outline-danger": {
    sj55zd: "f1whyuy6",
    g2u3we: "fyqpifd",
    h3c5rm: ["f3ukxca", "f1k7dugc"],
    B9xav0g: "f1njxb2b",
    zhjwy3: ["f1k7dugc", "f3ukxca"]
  },
  "outline-important": {
    sj55zd: "f11d4kpn",
    g2u3we: "fq0vr37",
    h3c5rm: ["f1byw159", "f11cr0be"],
    B9xav0g: "f1c1zstj",
    zhjwy3: ["f11cr0be", "f1byw159"]
  },
  "outline-informative": {
    sj55zd: "f11d4kpn",
    g2u3we: "f68mrw8",
    h3c5rm: ["f7pw515", "fw35ms5"],
    B9xav0g: "frpde29",
    zhjwy3: ["fw35ms5", "f7pw515"]
  },
  "outline-severe": {
    sj55zd: "f1l8vj45"
  },
  "outline-subtle": {
    sj55zd: "fonrgv7"
  },
  "outline-success": {
    sj55zd: "f1m7fhi8",
    g2u3we: "f1mmhl11",
    h3c5rm: ["f1tjpp2f", "f1ocn5n7"],
    B9xav0g: "f1gjv25d",
    zhjwy3: ["f1ocn5n7", "f1tjpp2f"]
  },
  "outline-warning": {
    sj55zd: "fpti2h4"
  },
  tint: {},
  "tint-brand": {
    De3pzq: "f16xkysk",
    sj55zd: "faj9fo0",
    g2u3we: "f161y7kd",
    h3c5rm: ["f1c8dzaj", "f1sl6hi9"],
    B9xav0g: "f1619yhw",
    zhjwy3: ["f1sl6hi9", "f1c8dzaj"]
  },
  "tint-danger": {
    De3pzq: "ff0poqj",
    sj55zd: "f1hcrxcs",
    g2u3we: "f1oqjm8o",
    h3c5rm: ["fkgrb8g", "frb5wm0"],
    B9xav0g: "f1iai1ph",
    zhjwy3: ["frb5wm0", "fkgrb8g"]
  },
  "tint-important": {
    De3pzq: "f945g0u",
    sj55zd: "fr0bkrk",
    g2u3we: "fghlq4f",
    h3c5rm: ["f1gn591s", "fjscplz"],
    B9xav0g: "fb073pr",
    zhjwy3: ["fjscplz", "f1gn591s"]
  },
  "tint-informative": {
    De3pzq: "f1ctqxl6",
    sj55zd: "f11d4kpn",
    g2u3we: "f68mrw8",
    h3c5rm: ["f7pw515", "fw35ms5"],
    B9xav0g: "frpde29",
    zhjwy3: ["fw35ms5", "f7pw515"]
  },
  "tint-severe": {
    De3pzq: "f1xzsg4",
    sj55zd: "f1k5f75o",
    g2u3we: "fxy9dsj",
    h3c5rm: ["f54u6j2", "fcm23ze"],
    B9xav0g: "f4vf0uq",
    zhjwy3: ["fcm23ze", "f54u6j2"]
  },
  "tint-subtle": {
    De3pzq: "fxugw4r",
    sj55zd: "f11d4kpn",
    g2u3we: "f68mrw8",
    h3c5rm: ["f7pw515", "fw35ms5"],
    B9xav0g: "frpde29",
    zhjwy3: ["fw35ms5", "f7pw515"]
  },
  "tint-success": {
    De3pzq: "f2vsrz6",
    sj55zd: "ffmvakt",
    g2u3we: "fdmic9h",
    h3c5rm: ["f196y6m", "fetptd8"],
    B9xav0g: "f1pev5xq",
    zhjwy3: ["fetptd8", "f196y6m"]
  },
  "tint-warning": {
    De3pzq: "f10s6hli",
    sj55zd: "f42v8de",
    g2u3we: "fn9i3n",
    h3c5rm: ["f1aw8cx4", "f51if14"],
    B9xav0g: "fvq8iai",
    zhjwy3: ["f51if14", "f1aw8cx4"]
  }
}, {
  d: [".fk6fouc{font-family:var(--fontFamilyBase);}", ".f13mqy1h{font-size:var(--fontSizeBase100);}", ".fl43uef{font-weight:var(--fontWeightSemibold);}", ".fcpl73t{line-height:var(--lineHeightBase100);}", ".f16dn6v3{width:6px;}", ".f3mu39s{height:6px;}", ".f130uwy9{font-size:4px;}", ".fod1mrr{line-height:4px;}", ".f18p0k4z{min-width:unset;}", [".f19jm9xf{padding:unset;}", {
    p: -1
  }], ".fpd43o0{width:10px;}", ".f30q22z{height:10px;}", ".f1tccstq{font-size:6px;}", ".f1y3arg5{line-height:6px;}", [".f19jm9xf{padding:unset;}", {
    p: -1
  }], ".fq2vo04{min-width:16px;}", ".fd461yt{height:16px;}", [".fupdldz{padding:0 calc(var(--spacingHorizontalXXS) + var(--spacingHorizontalXXS));}", {
    p: -1
  }], ".f17fgpbq{min-width:24px;}", ".frvgh55{height:24px;}", [".f1996nqw{padding:0 calc(var(--spacingHorizontalXS) + var(--spacingHorizontalXXS));}", {
    p: -1
  }], ".fwbmr0d{min-width:32px;}", ".f1d2rq10{height:32px;}", [".fty64o7{padding:0 calc(var(--spacingHorizontalSNudge) + var(--spacingHorizontalXXS));}", {
    p: -1
  }], [".f1fabniw{border-radius:var(--borderRadiusNone);}", {
    p: -1
  }], [".ft85np5{border-radius:var(--borderRadiusMedium);}", {
    p: -1
  }], [".fq9zq91{border-radius:var(--borderRadiusSmall);}", {
    p: -1
  }], ".f10ludwy::after{display:none;}", ".ffp7eso{background-color:var(--colorBrandBackground);}", ".f1phragk{color:var(--colorNeutralForegroundOnBrand);}", ".fdl5y0r{background-color:var(--colorPaletteRedBackground3);}", ".f1c73kur{background-color:var(--colorNeutralForeground1);}", ".fr0bkrk{color:var(--colorNeutralBackground1);}", ".f3vzo32{background-color:var(--colorNeutralBackground5);}", ".f11d4kpn{color:var(--colorNeutralForeground3);}", ".f1s438gw{background-color:var(--colorPaletteDarkOrangeBackground3);}", ".fxugw4r{background-color:var(--colorNeutralBackground1);}", ".f19n0e5{color:var(--colorNeutralForeground1);}", ".flxk52p{background-color:var(--colorPaletteGreenBackground3);}", ".ffq97bm{background-color:var(--colorPaletteYellowBackground3);}", ".ff5vbop{color:var(--colorNeutralForeground1Static);}", ".f16muhyy{color:var(--colorBrandForeground1);}", ".f1whyuy6{color:var(--colorPaletteRedForeground3);}", ".f1l8vj45{color:var(--colorPaletteDarkOrangeForeground3);}", ".fonrgv7{color:var(--colorNeutralForegroundStaticInverted);}", ".f1m7fhi8{color:var(--colorPaletteGreenForeground3);}", ".fpti2h4{color:var(--colorPaletteYellowForeground2);}", ".f23ftbb{border-top-color:currentColor;}", ".f1gkuv52{border-right-color:currentColor;}", ".f1p1bl80{border-left-color:currentColor;}", ".fioka3i{border-bottom-color:currentColor;}", ".fyqpifd{border-top-color:var(--colorPaletteRedBorder2);}", ".f3ukxca{border-right-color:var(--colorPaletteRedBorder2);}", ".f1k7dugc{border-left-color:var(--colorPaletteRedBorder2);}", ".f1njxb2b{border-bottom-color:var(--colorPaletteRedBorder2);}", ".fq0vr37{border-top-color:var(--colorNeutralStrokeAccessible);}", ".f1byw159{border-right-color:var(--colorNeutralStrokeAccessible);}", ".f11cr0be{border-left-color:var(--colorNeutralStrokeAccessible);}", ".f1c1zstj{border-bottom-color:var(--colorNeutralStrokeAccessible);}", ".f68mrw8{border-top-color:var(--colorNeutralStroke2);}", ".f7pw515{border-right-color:var(--colorNeutralStroke2);}", ".fw35ms5{border-left-color:var(--colorNeutralStroke2);}", ".frpde29{border-bottom-color:var(--colorNeutralStroke2);}", ".f1mmhl11{border-top-color:var(--colorPaletteGreenBorder2);}", ".f1tjpp2f{border-right-color:var(--colorPaletteGreenBorder2);}", ".f1ocn5n7{border-left-color:var(--colorPaletteGreenBorder2);}", ".f1gjv25d{border-bottom-color:var(--colorPaletteGreenBorder2);}", ".f16xkysk{background-color:var(--colorBrandBackground2);}", ".faj9fo0{color:var(--colorBrandForeground2);}", ".f161y7kd{border-top-color:var(--colorBrandStroke2);}", ".f1c8dzaj{border-right-color:var(--colorBrandStroke2);}", ".f1sl6hi9{border-left-color:var(--colorBrandStroke2);}", ".f1619yhw{border-bottom-color:var(--colorBrandStroke2);}", ".ff0poqj{background-color:var(--colorPaletteRedBackground1);}", ".f1hcrxcs{color:var(--colorPaletteRedForeground1);}", ".f1oqjm8o{border-top-color:var(--colorPaletteRedBorder1);}", ".fkgrb8g{border-right-color:var(--colorPaletteRedBorder1);}", ".frb5wm0{border-left-color:var(--colorPaletteRedBorder1);}", ".f1iai1ph{border-bottom-color:var(--colorPaletteRedBorder1);}", ".f945g0u{background-color:var(--colorNeutralForeground3);}", ".fghlq4f{border-top-color:var(--colorTransparentStroke);}", ".f1gn591s{border-right-color:var(--colorTransparentStroke);}", ".fjscplz{border-left-color:var(--colorTransparentStroke);}", ".fb073pr{border-bottom-color:var(--colorTransparentStroke);}", ".f1ctqxl6{background-color:var(--colorNeutralBackground4);}", ".f1xzsg4{background-color:var(--colorPaletteDarkOrangeBackground1);}", ".f1k5f75o{color:var(--colorPaletteDarkOrangeForeground1);}", ".fxy9dsj{border-top-color:var(--colorPaletteDarkOrangeBorder1);}", ".f54u6j2{border-right-color:var(--colorPaletteDarkOrangeBorder1);}", ".fcm23ze{border-left-color:var(--colorPaletteDarkOrangeBorder1);}", ".f4vf0uq{border-bottom-color:var(--colorPaletteDarkOrangeBorder1);}", ".f2vsrz6{background-color:var(--colorPaletteGreenBackground1);}", ".ffmvakt{color:var(--colorPaletteGreenForeground1);}", ".fdmic9h{border-top-color:var(--colorPaletteGreenBorder1);}", ".f196y6m{border-right-color:var(--colorPaletteGreenBorder1);}", ".fetptd8{border-left-color:var(--colorPaletteGreenBorder1);}", ".f1pev5xq{border-bottom-color:var(--colorPaletteGreenBorder1);}", ".f10s6hli{background-color:var(--colorPaletteYellowBackground1);}", ".f42v8de{color:var(--colorPaletteYellowForeground1);}", ".fn9i3n{border-top-color:var(--colorPaletteYellowBorder1);}", ".f1aw8cx4{border-right-color:var(--colorPaletteYellowBorder1);}", ".f51if14{border-left-color:var(--colorPaletteYellowBorder1);}", ".fvq8iai{border-bottom-color:var(--colorPaletteYellowBorder1);}"]
});
const useIconRootClassName = /* @__PURE__ */ __resetStyles("rttl5z0", null, [".rttl5z0{display:flex;line-height:1;margin:0 calc(-1 * var(--spacingHorizontalXXS));font-size:12px;}"]);
const useIconStyles$1 = /* @__PURE__ */ __styles({
  beforeText: {
    t21cq0: ["f1t8l4o1", "f11juvx6"]
  },
  afterText: {
    Frg6f3: ["f11juvx6", "f1t8l4o1"]
  },
  beforeTextXL: {
    t21cq0: ["f1rs9grm", "f1kwmkpi"]
  },
  afterTextXL: {
    Frg6f3: ["f1kwmkpi", "f1rs9grm"]
  },
  tiny: {
    Be2twd7: "f1tccstq"
  },
  "extra-small": {
    Be2twd7: "fnmn6fi"
  },
  small: {
    Be2twd7: "f1ugzwwg"
  },
  medium: {},
  large: {
    Be2twd7: "f4ybsrx"
  },
  "extra-large": {
    Be2twd7: "fe5j1ua"
  }
}, {
  d: [".f1t8l4o1{margin-right:calc(var(--spacingHorizontalXXS) + var(--spacingHorizontalXXS));}", ".f11juvx6{margin-left:calc(var(--spacingHorizontalXXS) + var(--spacingHorizontalXXS));}", ".f1rs9grm{margin-right:calc(var(--spacingHorizontalXS) + var(--spacingHorizontalXXS));}", ".f1kwmkpi{margin-left:calc(var(--spacingHorizontalXS) + var(--spacingHorizontalXXS));}", ".f1tccstq{font-size:6px;}", ".fnmn6fi{font-size:10px;}", ".f1ugzwwg{font-size:12px;}", ".f4ybsrx{font-size:16px;}", ".fe5j1ua{font-size:20px;}"]
});
const useBadgeStyles_unstable = (state) => {
  "use no memo";
  const rootClassName = useRootClassName$1();
  const rootStyles = useRootStyles$5();
  const smallToTiny = state.size === "small" || state.size === "extra-small" || state.size === "tiny";
  state.root.className = mergeClasses(badgeClassNames.root, rootClassName, smallToTiny && rootStyles.fontSmallToTiny, rootStyles[state.size], rootStyles[state.shape], state.shape === "rounded" && smallToTiny && rootStyles.roundedSmallToTiny, state.appearance === "ghost" && rootStyles.borderGhost, rootStyles[state.appearance], rootStyles[`${state.appearance}-${state.color}`], state.root.className);
  const iconRootClassName = useIconRootClassName();
  const iconStyles = useIconStyles$1();
  if (state.icon) {
    let iconPositionClass;
    if (reactExports.Children.toArray(state.root.children).length > 0) {
      if (state.size === "extra-large") {
        iconPositionClass = state.iconPosition === "after" ? iconStyles.afterTextXL : iconStyles.beforeTextXL;
      } else {
        iconPositionClass = state.iconPosition === "after" ? iconStyles.afterText : iconStyles.beforeText;
      }
    }
    state.icon.className = mergeClasses(badgeClassNames.icon, iconRootClassName, iconPositionClass, iconStyles[state.size], state.icon.className);
  }
  return state;
};
const renderBadge_unstable = (state) => {
  return /* @__PURE__ */ jsxs(state.root, {
    children: [
      state.iconPosition === "before" && state.icon && /* @__PURE__ */ jsx(state.icon, {}),
      state.root.children,
      state.iconPosition === "after" && state.icon && /* @__PURE__ */ jsx(state.icon, {})
    ]
  });
};
const Badge = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const state = useBadge_unstable(props, ref);
  useBadgeStyles_unstable(state);
  useCustomStyleHook("useBadgeStyles_unstable")(state);
  return renderBadge_unstable(state);
});
Badge.displayName = "Badge";
function createVirtualElementFromClick(nativeEvent) {
  const left = nativeEvent.clientX;
  const top = nativeEvent.clientY;
  const right = left + 1;
  const bottom = top + 1;
  function getBoundingClientRect2() {
    return {
      left,
      top,
      right,
      bottom,
      x: left,
      y: top,
      height: 1,
      width: 1
    };
  }
  return {
    getBoundingClientRect: getBoundingClientRect2
  };
}
const DATA_POSITIONING_INTERSECTING = "data-popper-is-intersecting";
const DATA_POSITIONING_ESCAPED = "data-popper-escaped";
const DATA_POSITIONING_HIDDEN = "data-popper-reference-hidden";
const DATA_POSITIONING_PLACEMENT = "data-popper-placement";
const POSITIONING_END_EVENT = "fui-positioningend";
const DEFAULT_CONFIGURATION = ({ options }) => {
  return options;
};
const PositioningConfigurationContext = reactExports.createContext(void 0);
PositioningConfigurationContext.Provider;
const usePositioningConfiguration = () => {
  var _React_useContext;
  return (_React_useContext = reactExports.useContext(PositioningConfigurationContext)) !== null && _React_useContext !== void 0 ? _React_useContext : DEFAULT_CONFIGURATION;
};
const sides = ["top", "right", "bottom", "left"];
const min = Math.min;
const max = Math.max;
const round = Math.round;
const createCoords = (v2) => ({
  x: v2,
  y: v2
});
const oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
const oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
const yAxisSides = /* @__PURE__ */ new Set(["top", "bottom"]);
function getSideAxis(placement) {
  return yAxisSides.has(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
const lrPlacement = ["left", "right"];
const rlPlacement = ["right", "left"];
const tbPlacement = ["top", "bottom"];
const btPlacement = ["bottom", "top"];
function getSideList(side, isStart, rtl) {
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rlPlacement : lrPlacement;
      return isStart ? lrPlacement : rlPlacement;
    case "left":
    case "right":
      return isStart ? tbPlacement : btPlacement;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y: y2,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y2,
    left: x,
    right: x + width,
    bottom: y2 + height,
    x,
    y: y2
  };
}
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y: y2
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y: y2,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y2 = nextY != null ? nextY : y2;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y: y2
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y: y2,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow$1(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y: y2,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x,
    y: y2,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
const arrow$1 = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x,
      y: y2,
      placement,
      rects,
      platform: platform2,
      elements,
      middlewareData
    } = state;
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y: y2
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max2 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset2 = clamp(min$1, center, max2);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset2 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset2,
        centerOffset: center - offset2 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
const flip$2 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow$1(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          const ignoreCrossAxisOverflow = checkCrossAxis === "alignment" ? initialSideAxis !== getSideAxis(nextPlacement) : false;
          if (!ignoreCrossAxisOverflow || // We leave the current main axis only if every placement on that axis
          // overflows the main axis.
          overflowsData.every((d2) => getSideAxis(d2.placement) === initialSideAxis ? d2.overflows[0] > 0 : true)) {
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d2) => d2.overflows[0] <= 0).sort((a, b2) => a.overflows[1] - b2.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2;
              const placement2 = (_overflowsData$filter2 = overflowsData.filter((d2) => {
                if (hasFallbackAxisSideDirection) {
                  const currentSideAxis = getSideAxis(d2.placement);
                  return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  currentSideAxis === "y";
                }
                return true;
              }).map((d2) => [d2.placement, d2.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b2) => a[1] - b2[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some((side) => overflow[side] >= 0);
}
const hide$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "hide",
    options,
    async fn(state) {
      const {
        rects
      } = state;
      const {
        strategy = "referenceHidden",
        ...detectOverflowOptions
      } = evaluate(options, state);
      switch (strategy) {
        case "referenceHidden": {
          const overflow = await detectOverflow$1(state, {
            ...detectOverflowOptions,
            elementContext: "reference"
          });
          const offsets = getSideOffsets(overflow, rects.reference);
          return {
            data: {
              referenceHiddenOffsets: offsets,
              referenceHidden: isAnySideFullyClipped(offsets)
            }
          };
        }
        case "escaped": {
          const overflow = await detectOverflow$1(state, {
            ...detectOverflowOptions,
            altBoundary: true
          });
          const offsets = getSideOffsets(overflow, rects.floating);
          return {
            data: {
              escapedOffsets: offsets,
              escaped: isAnySideFullyClipped(offsets)
            }
          };
        }
        default: {
          return {};
        }
      }
    }
  };
};
const originSides = /* @__PURE__ */ new Set(["left", "top"]);
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = originSides.has(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
const offset$2 = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y: y2,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y2 + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
const shift$2 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x,
        y: y2,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y3
            } = _ref;
            return {
              x: x2,
              y: y3
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y: y2
      };
      const overflow = await detectOverflow$1(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y2,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
};
const limitShift$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x,
        y: y2,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset: offset2 = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state);
      const coords = {
        x,
        y: y2
      };
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset2, state);
      const computedOffset = typeof rawOffset === "number" ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === "y" ? "height" : "width";
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === "y" ? "width" : "height";
        const isOriginSide = originSides.has(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};
const size$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state) {
      var _state$middlewareData, _state$middlewareData2;
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = state;
      const {
        apply = () => {
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow$1(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
        availableWidth = maximumClippingWidth;
      }
      if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
        availableHeight = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform2.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};
function hasWindow() {
  return typeof window !== "undefined";
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
const invalidOverflowDisplayValues = /* @__PURE__ */ new Set(["inline", "contents"]);
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !invalidOverflowDisplayValues.has(display);
}
const tableElements = /* @__PURE__ */ new Set(["table", "td", "th"]);
function isTableElement(element) {
  return tableElements.has(getNodeName(element));
}
const topLayerSelectors = [":popover-open", ":modal"];
function isTopLayer(element) {
  return topLayerSelectors.some((selector) => {
    try {
      return element.matches(selector);
    } catch (_e) {
      return false;
    }
  });
}
const transformProperties = ["transform", "translate", "scale", "rotate", "perspective"];
const willChangeValues = ["transform", "translate", "scale", "rotate", "perspective", "filter"];
const containValues = ["paint", "layout", "strict", "content"];
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css = isElement(elementOrCss) ? getComputedStyle$1(elementOrCss) : elementOrCss;
  return transformProperties.some((value) => css[value] ? css[value] !== "none" : false) || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || willChangeValues.some((value) => (css.willChange || "").includes(value)) || containValues.some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode$1(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode$1(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports) return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
const lastTraversableNodeNames = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function isLastTraversableNode(node) {
  return lastTraversableNodeNames.has(getNodeName(node));
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode$1(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode$1(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, []));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}
function getCssDimensions(element) {
  const css = getComputedStyle$1(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y2 = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y2 || !Number.isFinite(y2)) {
    y2 = 1;
  }
  return {
    x,
    y: y2
  };
}
const noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y2 = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle$1(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y2 *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y2 += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y: y2
  });
}
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll) {
  const htmlRect = documentElement.getBoundingClientRect();
  const x = htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect);
  const y2 = htmlRect.top + scroll.scrollTop;
  return {
    x,
    y: y2
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y2 = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y: y2
  };
}
const SCROLLBAR_MAX = 25;
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y2 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y2 = visualViewport.offsetTop;
    }
  }
  const windowScrollbarX = getWindowScrollBarX(html);
  if (windowScrollbarX <= 0) {
    const doc = html.ownerDocument;
    const body = doc.body;
    const bodyStyles = getComputedStyle(body);
    const bodyMarginInline = doc.compatMode === "CSS1Compat" ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
    const clippingStableScrollbarWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
    if (clippingStableScrollbarWidth <= SCROLLBAR_MAX) {
      width -= clippingStableScrollbarWidth;
    }
  } else if (windowScrollbarX <= SCROLLBAR_MAX) {
    width += windowScrollbarX;
  }
  return {
    width,
    height,
    x,
    y: y2
  };
}
const absoluteOrFixed = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y2 = top * scale.y;
  return {
    width,
    height,
    x,
    y: y2
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode$1(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle$1(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, []).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode$1(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && absoluteOrFixed.has(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode$1(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  function setLeftRTLScrollbarOffset() {
    offsets.x = getWindowScrollBarX(documentElement);
  }
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      setLeftRTLScrollbarOffset();
    }
  }
  if (isFixed && !isOffsetParentAnElement && documentElement) {
    setLeftRTLScrollbarOffset();
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y2 = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x,
    y: y2,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle$1(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle$1(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode$1(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode$1(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
const getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element) {
  return getComputedStyle$1(element).direction === "rtl";
}
const platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
const detectOverflow = detectOverflow$1;
const offset$1 = offset$2;
const shift$1 = shift$2;
const flip$1 = flip$2;
const size = size$1;
const hide = hide$1;
const arrow = arrow$1;
const limitShift = limitShift$1;
const computePosition = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition$1(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};
function parseFloatingUIPlacement(placement) {
  const tokens = placement.split("-");
  return {
    side: tokens[0],
    alignment: tokens[1]
  };
}
const getParentNode = (node) => {
  if (node.nodeName === "HTML") {
    return node;
  }
  return node.parentNode || node.host;
};
const getStyleComputedProperty = (node) => {
  var _node_ownerDocument;
  if (node.nodeType !== 1) {
    return {};
  }
  const targetWindow = (_node_ownerDocument = node.ownerDocument) === null || _node_ownerDocument === void 0 ? void 0 : _node_ownerDocument.defaultView;
  if (targetWindow) {
    return targetWindow.getComputedStyle(node, null);
  }
  return {};
};
const getScrollParent = (node) => {
  const parentNode = node && getParentNode(node);
  if (!parentNode) return document.body;
  switch (parentNode.nodeName) {
    case "HTML":
    case "BODY":
      return parentNode.ownerDocument.body;
    case "#document":
      return parentNode.body;
  }
  const { overflow, overflowX, overflowY } = getStyleComputedProperty(parentNode);
  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return parentNode;
  }
  return getScrollParent(parentNode);
};
const hasScrollParent = (node) => {
  var _scrollParentElement_ownerDocument;
  const scrollParentElement = getScrollParent(node);
  return scrollParentElement ? scrollParentElement !== ((_scrollParentElement_ownerDocument = scrollParentElement.ownerDocument) === null || _scrollParentElement_ownerDocument === void 0 ? void 0 : _scrollParentElement_ownerDocument.body) : false;
};
function getBoundary(element, boundary) {
  if (boundary === "window") {
    return element === null || element === void 0 ? void 0 : element.ownerDocument.documentElement;
  }
  if (boundary === "clippingParents") {
    return "clippingAncestors";
  }
  if (boundary === "scrollParent") {
    let boundariesNode = getScrollParent(element);
    if (boundariesNode.nodeName === "BODY") {
      boundariesNode = element === null || element === void 0 ? void 0 : element.ownerDocument.documentElement;
    }
    return boundariesNode;
  }
  return boundary;
}
function toFloatingUIPadding(padding, isRtl) {
  if (typeof padding === "number") {
    return padding;
  }
  const { start, end, ...verticalPadding } = padding;
  const paddingObject = verticalPadding;
  const left = isRtl ? "end" : "start";
  const right = isRtl ? "start" : "end";
  if (padding[left]) {
    paddingObject.left = padding[left];
  }
  if (padding[right]) {
    paddingObject.right = padding[right];
  }
  return paddingObject;
}
const getPositionMap$1 = (rtl) => ({
  above: "top",
  below: "bottom",
  before: rtl ? "right" : "left",
  after: rtl ? "left" : "right"
});
const getAlignmentMap$1 = () => ({
  start: "start",
  end: "end",
  top: "start",
  bottom: "end",
  center: void 0
});
const shouldAlignToCenter = (p2, a) => {
  const positionedVertically = p2 === "above" || p2 === "below";
  const alignedVertically = a === "top" || a === "bottom";
  return positionedVertically && alignedVertically || !positionedVertically && !alignedVertically;
};
const toFloatingUIPlacement = (align, position, rtl) => {
  const alignment = shouldAlignToCenter(position, align) ? "center" : align;
  const computedPosition = position && getPositionMap$1(rtl)[position];
  const computedAlignment = alignment && getAlignmentMap$1()[alignment];
  if (computedPosition && computedAlignment) {
    return `${computedPosition}-${computedAlignment}`;
  }
  return computedPosition;
};
const getPositionMap = () => ({
  top: "above",
  bottom: "below",
  right: "after",
  left: "before"
});
const getAlignmentMap = (position) => {
  if (position === "above" || position === "below") {
    return {
      start: "start",
      end: "end"
    };
  }
  return {
    start: "top",
    end: "bottom"
  };
};
const fromFloatingUIPlacement = (placement) => {
  const { side, alignment: floatingUIAlignment } = parseFloatingUIPlacement(placement);
  const position = getPositionMap()[side];
  const alignment = floatingUIAlignment && getAlignmentMap(position)[floatingUIAlignment];
  return {
    position,
    alignment
  };
};
const shorthandLookup = {
  above: {
    position: "above",
    align: "center"
  },
  "above-start": {
    position: "above",
    align: "start"
  },
  "above-end": {
    position: "above",
    align: "end"
  },
  below: {
    position: "below",
    align: "center"
  },
  "below-start": {
    position: "below",
    align: "start"
  },
  "below-end": {
    position: "below",
    align: "end"
  },
  before: {
    position: "before",
    align: "center"
  },
  "before-top": {
    position: "before",
    align: "top"
  },
  "before-bottom": {
    position: "before",
    align: "bottom"
  },
  after: {
    position: "after",
    align: "center"
  },
  "after-top": {
    position: "after",
    align: "top"
  },
  "after-bottom": {
    position: "after",
    align: "bottom"
  }
};
function resolvePositioningShorthand(shorthand) {
  if (shorthand === void 0 || shorthand === null) {
    return {};
  }
  if (typeof shorthand === "string") {
    return shorthandLookup[shorthand];
  }
  return shorthand;
}
function useCallbackRef(initialValue, callback, skipInitialResolve) {
  const isFirst = reactExports.useRef(true);
  const [ref] = reactExports.useState(() => ({
    // value
    value: initialValue,
    // last callback
    callback,
    // "memoized" public interface
    facade: {
      get current() {
        return ref.value;
      },
      set current(value) {
        const last = ref.value;
        if (last !== value) {
          ref.value = value;
          ref.callback(value, last);
        }
      }
    }
  }));
  useIsomorphicLayoutEffect(() => {
    isFirst.current = false;
  }, []);
  ref.callback = callback;
  return ref.facade;
}
function debounce(fn) {
  let pending;
  return () => {
    if (!pending) {
      pending = new Promise((resolve) => {
        Promise.resolve().then(() => {
          pending = void 0;
          resolve(fn());
        });
      });
    }
    return pending;
  };
}
function writeArrowUpdates(options) {
  const { arrow: arrow2, middlewareData } = options;
  if (!middlewareData.arrow || !arrow2) {
    return;
  }
  const { x: arrowX, y: arrowY } = middlewareData.arrow;
  Object.assign(arrow2.style, {
    left: arrowX !== null && arrowX !== void 0 ? `${arrowX}px` : "",
    top: arrowY !== null && arrowY !== void 0 ? `${arrowY}px` : ""
  });
}
function writeContainerUpdates(options) {
  var _middlewareData_hide, _middlewareData_hide1, _container_ownerDocument_defaultView;
  const { container, placement, middlewareData, strategy, lowPPI, coordinates, useTransform = true } = options;
  if (!container) {
    return;
  }
  container.setAttribute(DATA_POSITIONING_PLACEMENT, placement);
  container.removeAttribute(DATA_POSITIONING_INTERSECTING);
  if (middlewareData.intersectionObserver.intersecting) {
    container.setAttribute(DATA_POSITIONING_INTERSECTING, "");
  }
  container.removeAttribute(DATA_POSITIONING_ESCAPED);
  if ((_middlewareData_hide = middlewareData.hide) === null || _middlewareData_hide === void 0 ? void 0 : _middlewareData_hide.escaped) {
    container.setAttribute(DATA_POSITIONING_ESCAPED, "");
  }
  container.removeAttribute(DATA_POSITIONING_HIDDEN);
  if ((_middlewareData_hide1 = middlewareData.hide) === null || _middlewareData_hide1 === void 0 ? void 0 : _middlewareData_hide1.referenceHidden) {
    container.setAttribute(DATA_POSITIONING_HIDDEN, "");
  }
  const devicePixelRatio = ((_container_ownerDocument_defaultView = container.ownerDocument.defaultView) === null || _container_ownerDocument_defaultView === void 0 ? void 0 : _container_ownerDocument_defaultView.devicePixelRatio) || 1;
  const x = Math.round(coordinates.x * devicePixelRatio) / devicePixelRatio;
  const y2 = Math.round(coordinates.y * devicePixelRatio) / devicePixelRatio;
  Object.assign(container.style, {
    position: strategy
  });
  if (useTransform) {
    Object.assign(container.style, {
      transform: lowPPI ? `translate(${x}px, ${y2}px)` : `translate3d(${x}px, ${y2}px, 0)`
    });
    return;
  }
  Object.assign(container.style, {
    left: `${x}px`,
    top: `${y2}px`
  });
}
const normalizeAutoSize = (autoSize) => {
  switch (autoSize) {
    case "always":
    case true:
      return {
        applyMaxWidth: true,
        applyMaxHeight: true
      };
    case "width-always":
    case "width":
      return {
        applyMaxWidth: true,
        applyMaxHeight: false
      };
    case "height-always":
    case "height":
      return {
        applyMaxWidth: false,
        applyMaxHeight: true
      };
    default:
      return false;
  }
};
function listScrollParents(node) {
  const scrollParents = [];
  let cur = node;
  while (cur) {
    const scrollParent = getScrollParent(cur);
    if (node.ownerDocument.body === scrollParent) {
      scrollParents.push(scrollParent);
      break;
    }
    if (scrollParent.nodeName === "BODY" && scrollParent !== node.ownerDocument.body) {
      break;
    }
    scrollParents.push(scrollParent);
    cur = scrollParent;
  }
  return scrollParents;
}
function createResizeObserver(targetWindow, callback) {
  return new targetWindow.ResizeObserver(callback);
}
function createPositionManager(options) {
  let isDestroyed = false;
  const { container, target, arrow: arrow2, strategy, middleware, placement, useTransform = true, disableUpdateOnResize = false } = options;
  const targetWindow = container.ownerDocument.defaultView;
  if (!target || !container || !targetWindow) {
    return {
      updatePosition: () => void 0,
      dispose: () => void 0
    };
  }
  const resizeObserver = disableUpdateOnResize ? null : createResizeObserver(targetWindow, (entries) => {
    const shouldUpdateOnResize = entries.every((entry) => {
      return entry.contentRect.width > 0 && entry.contentRect.height > 0;
    });
    if (shouldUpdateOnResize) {
      updatePosition();
    }
  });
  let isFirstUpdate = true;
  const scrollParents = /* @__PURE__ */ new Set();
  Object.assign(container.style, {
    position: "fixed",
    left: 0,
    top: 0,
    margin: 0
  });
  const forceUpdate = () => {
    if (isDestroyed) {
      return;
    }
    if (isFirstUpdate) {
      listScrollParents(container).forEach((scrollParent) => scrollParents.add(scrollParent));
      if (isHTMLElement$2(target)) {
        listScrollParents(target).forEach((scrollParent) => scrollParents.add(scrollParent));
      }
      scrollParents.forEach((scrollParent) => {
        scrollParent.addEventListener("scroll", updatePosition, {
          passive: true
        });
      });
      resizeObserver === null || resizeObserver === void 0 ? void 0 : resizeObserver.observe(container);
      if (isHTMLElement$2(target)) {
        resizeObserver === null || resizeObserver === void 0 ? void 0 : resizeObserver.observe(target);
      }
      isFirstUpdate = false;
    }
    Object.assign(container.style, {
      position: strategy
    });
    computePosition(target, container, {
      placement,
      middleware,
      strategy
    }).then(({ x, y: y2, middlewareData, placement: computedPlacement }) => {
      if (isDestroyed) {
        return;
      }
      writeArrowUpdates({
        arrow: arrow2,
        middlewareData
      });
      writeContainerUpdates({
        container,
        middlewareData,
        placement: computedPlacement,
        coordinates: {
          x,
          y: y2
        },
        lowPPI: ((targetWindow === null || targetWindow === void 0 ? void 0 : targetWindow.devicePixelRatio) || 1) <= 1,
        strategy,
        useTransform
      });
      container.dispatchEvent(new CustomEvent(POSITIONING_END_EVENT));
    }).catch((err) => {
    });
  };
  const updatePosition = debounce(() => forceUpdate());
  const dispose = () => {
    isDestroyed = true;
    if (targetWindow) {
      targetWindow.removeEventListener("scroll", updatePosition);
      targetWindow.removeEventListener("resize", updatePosition);
    }
    scrollParents.forEach((scrollParent) => {
      scrollParent.removeEventListener("scroll", updatePosition);
    });
    scrollParents.clear();
    resizeObserver === null || resizeObserver === void 0 ? void 0 : resizeObserver.disconnect();
  };
  if (targetWindow) {
    targetWindow.addEventListener("scroll", updatePosition, {
      passive: true
    });
    targetWindow.addEventListener("resize", updatePosition);
  }
  updatePosition();
  return {
    updatePosition,
    dispose
  };
}
function coverTarget() {
  return {
    name: "coverTarget",
    fn: (middlewareArguments) => {
      const { placement, rects, x, y: y2 } = middlewareArguments;
      const basePlacement = parseFloatingUIPlacement(placement).side;
      const newCoords = {
        x,
        y: y2
      };
      switch (basePlacement) {
        case "bottom":
          newCoords.y -= rects.reference.height;
          break;
        case "top":
          newCoords.y += rects.reference.height;
          break;
        case "left":
          newCoords.x += rects.reference.width;
          break;
        case "right":
          newCoords.x -= rects.reference.width;
          break;
      }
      return newCoords;
    }
  };
}
function flip(options) {
  const { hasScrollableElement, flipBoundary, container, fallbackPositions = [], isRtl } = options;
  const fallbackPlacements = fallbackPositions.reduce((acc, shorthand) => {
    const { position, align } = resolvePositioningShorthand(shorthand);
    const placement = toFloatingUIPlacement(align, position, isRtl);
    if (placement) {
      acc.push(placement);
    }
    return acc;
  }, []);
  return flip$1({
    ...hasScrollableElement && {
      boundary: "clippingAncestors"
    },
    ...flipBoundary && {
      altBoundary: true,
      boundary: getBoundary(container, flipBoundary)
    },
    fallbackStrategy: "bestFit",
    ...fallbackPlacements.length && {
      fallbackPlacements
    }
  });
}
function intersecting() {
  return {
    name: "intersectionObserver",
    fn: async (middlewareArguments) => {
      const floatingRect = middlewareArguments.rects.floating;
      const altOverflow = await detectOverflow(middlewareArguments, {
        altBoundary: true
      });
      const isIntersectingTop = altOverflow.top < floatingRect.height && altOverflow.top > 0;
      const isIntersectingBottom = altOverflow.bottom < floatingRect.height && altOverflow.bottom > 0;
      const isIntersecting = isIntersectingTop || isIntersectingBottom;
      return {
        data: {
          intersecting: isIntersecting
        }
      };
    }
  };
}
const resetMaxSize = (autoSize) => ({
  name: "resetMaxSize",
  fn({ middlewareData, elements }) {
    var _middlewareData_resetMaxSize;
    if ((_middlewareData_resetMaxSize = middlewareData.resetMaxSize) === null || _middlewareData_resetMaxSize === void 0 ? void 0 : _middlewareData_resetMaxSize.maxSizeAlreadyReset) {
      return {};
    }
    const { applyMaxWidth, applyMaxHeight } = autoSize;
    if (applyMaxWidth) {
      elements.floating.style.removeProperty("box-sizing");
      elements.floating.style.removeProperty("max-width");
      elements.floating.style.removeProperty("width");
    }
    if (applyMaxHeight) {
      elements.floating.style.removeProperty("box-sizing");
      elements.floating.style.removeProperty("max-height");
      elements.floating.style.removeProperty("height");
    }
    return {
      data: {
        maxSizeAlreadyReset: true
      },
      reset: {
        rects: true
      }
    };
  }
});
function maxSize(autoSize, options) {
  const { container, overflowBoundary, overflowBoundaryPadding, isRtl } = options;
  return size({
    ...overflowBoundaryPadding && {
      padding: toFloatingUIPadding(overflowBoundaryPadding, isRtl)
    },
    ...overflowBoundary && {
      altBoundary: true,
      boundary: getBoundary(container, overflowBoundary)
    },
    apply({ availableHeight, availableWidth, elements, rects }) {
      const applyMaxSizeStyles = (apply, dimension, availableSize) => {
        if (!apply) {
          return;
        }
        elements.floating.style.setProperty("box-sizing", "border-box");
        elements.floating.style.setProperty(`max-${dimension}`, `${availableSize}px`);
        if (rects.floating[dimension] > availableSize) {
          elements.floating.style.setProperty(dimension, `${availableSize}px`);
          const axis = dimension === "width" ? "x" : "y";
          if (!elements.floating.style.getPropertyValue(`overflow-${axis}`)) {
            elements.floating.style.setProperty(`overflow-${axis}`, "auto");
          }
        }
      };
      const { applyMaxWidth, applyMaxHeight } = autoSize;
      applyMaxSizeStyles(applyMaxWidth, "width", availableWidth);
      applyMaxSizeStyles(applyMaxHeight, "height", availableHeight);
    }
  });
}
function getFloatingUIOffset(rawOffset) {
  if (!rawOffset) {
    return rawOffset;
  }
  if (typeof rawOffset === "number" || typeof rawOffset === "object") {
    return rawOffset;
  }
  return ({ rects: { floating, reference }, placement }) => {
    const { position, alignment } = fromFloatingUIPlacement(placement);
    return rawOffset({
      positionedRect: floating,
      targetRect: reference,
      position,
      alignment
    });
  };
}
function offset(offsetValue) {
  const floatingUIOffset = getFloatingUIOffset(offsetValue);
  return offset$1(floatingUIOffset);
}
function shift(options) {
  const { hasScrollableElement, shiftToCoverTarget, disableTether, overflowBoundary, container, overflowBoundaryPadding, isRtl } = options;
  return shift$1({
    ...hasScrollableElement && {
      boundary: "clippingAncestors"
    },
    ...shiftToCoverTarget && {
      crossAxis: true,
      limiter: limitShift({
        crossAxis: true,
        mainAxis: false
      })
    },
    ...disableTether && {
      crossAxis: disableTether === "all",
      limiter: limitShift({
        crossAxis: disableTether !== "all",
        mainAxis: false
      })
    },
    ...overflowBoundaryPadding && {
      padding: toFloatingUIPadding(overflowBoundaryPadding, isRtl)
    },
    ...overflowBoundary && {
      altBoundary: true,
      boundary: getBoundary(container, overflowBoundary)
    }
  });
}
const matchTargetSizeCssVar = "--fui-match-target-size";
function matchTargetSize() {
  return {
    name: "matchTargetSize",
    fn: async (middlewareArguments) => {
      const { rects: { reference: referenceRect, floating: floatingRect }, elements: { floating: floatingElement }, middlewareData: { matchTargetSize: { matchTargetSizeAttempt = false } = {} } } = middlewareArguments;
      if (referenceRect.width === floatingRect.width || matchTargetSizeAttempt) {
        return {};
      }
      const { width } = referenceRect;
      floatingElement.style.setProperty(matchTargetSizeCssVar, `${width}px`);
      if (!floatingElement.style.width) {
        floatingElement.style.width = `var(${matchTargetSizeCssVar})`;
      }
      return {
        data: {
          matchTargetSizeAttempt: true
        },
        reset: {
          rects: true
        }
      };
    }
  };
}
function usePositioningConfigFn(configFn, options) {
  const {
    align,
    arrowPadding,
    autoSize,
    coverTarget: coverTarget2,
    disableUpdateOnResize,
    flipBoundary,
    offset: offset2,
    overflowBoundary,
    pinned,
    position,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_disableTether,
    strategy,
    overflowBoundaryPadding,
    fallbackPositions,
    useTransform,
    matchTargetSize: matchTargetSize2,
    shiftToCoverTarget
  } = options;
  return reactExports.useCallback((container, arrow2) => {
    return configFn({
      container,
      arrow: arrow2,
      options: {
        autoSize,
        disableUpdateOnResize,
        matchTargetSize: matchTargetSize2,
        offset: offset2,
        strategy,
        coverTarget: coverTarget2,
        flipBoundary,
        overflowBoundary,
        useTransform,
        overflowBoundaryPadding,
        pinned,
        arrowPadding,
        align,
        fallbackPositions,
        shiftToCoverTarget,
        position,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        unstable_disableTether
      }
    });
  }, [
    autoSize,
    disableUpdateOnResize,
    matchTargetSize2,
    offset2,
    strategy,
    coverTarget2,
    flipBoundary,
    overflowBoundary,
    useTransform,
    overflowBoundaryPadding,
    pinned,
    arrowPadding,
    align,
    fallbackPositions,
    shiftToCoverTarget,
    position,
    unstable_disableTether,
    configFn
  ]);
}
function usePositioningOptions(options) {
  const { dir, targetDocument } = useFluent();
  const isRtl = dir === "rtl";
  const configFn = usePositioningConfigFn(usePositioningConfiguration(), options);
  const {
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    positionFixed
  } = options;
  return reactExports.useCallback((container, arrow$12) => {
    const hasScrollableElement = hasScrollParent(container);
    const optionsAfterEnhancement = configFn(container, arrow$12);
    const {
      autoSize,
      disableUpdateOnResize,
      matchTargetSize: matchTargetSize$1,
      offset: offset$12,
      coverTarget: coverTarget$1,
      flipBoundary,
      overflowBoundary,
      useTransform,
      overflowBoundaryPadding,
      pinned,
      position,
      arrowPadding,
      strategy,
      align,
      fallbackPositions,
      shiftToCoverTarget,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      unstable_disableTether
    } = optionsAfterEnhancement;
    const normalizedAutoSize = normalizeAutoSize(autoSize);
    const middleware = [
      normalizedAutoSize && resetMaxSize(normalizedAutoSize),
      matchTargetSize$1 && matchTargetSize(),
      offset$12 && offset(offset$12),
      coverTarget$1 && coverTarget(),
      !pinned && flip({
        container,
        flipBoundary,
        hasScrollableElement,
        isRtl,
        fallbackPositions
      }),
      shift({
        container,
        hasScrollableElement,
        overflowBoundary,
        disableTether: unstable_disableTether,
        overflowBoundaryPadding,
        isRtl,
        shiftToCoverTarget
      }),
      normalizedAutoSize && maxSize(normalizedAutoSize, {
        container,
        overflowBoundary,
        overflowBoundaryPadding,
        isRtl
      }),
      intersecting(),
      arrow$12 && arrow({
        element: arrow$12,
        padding: arrowPadding
      }),
      hide({
        strategy: "referenceHidden"
      }),
      hide({
        strategy: "escaped"
      }),
      false
    ].filter(Boolean);
    const placement = toFloatingUIPlacement(align, position, isRtl);
    return {
      placement,
      middleware,
      strategy: (strategy !== null && strategy !== void 0 ? strategy : positionFixed) ? "fixed" : "absolute",
      disableUpdateOnResize,
      useTransform
    };
  }, [
    configFn,
    isRtl,
    targetDocument,
    positionFixed
  ]);
}
function usePositioning(options) {
  "use no memo";
  const managerRef = reactExports.useRef(null);
  const targetRef = reactExports.useRef(null);
  const overrideTargetRef = reactExports.useRef(null);
  const containerRef = reactExports.useRef(null);
  const arrowRef = reactExports.useRef(null);
  const { enabled = true } = options;
  const resolvePositioningOptions = usePositioningOptions(options);
  const updatePositionManager = reactExports.useCallback(() => {
    if (managerRef.current) {
      managerRef.current.dispose();
    }
    managerRef.current = null;
    var _overrideTargetRef_current;
    const target = (_overrideTargetRef_current = overrideTargetRef.current) !== null && _overrideTargetRef_current !== void 0 ? _overrideTargetRef_current : targetRef.current;
    if (enabled && canUseDOM() && target && containerRef.current) {
      managerRef.current = createPositionManager({
        container: containerRef.current,
        target,
        arrow: arrowRef.current,
        ...resolvePositioningOptions(containerRef.current, arrowRef.current)
      });
    }
  }, [
    enabled,
    resolvePositioningOptions
  ]);
  const setOverrideTarget = useEventCallback((target) => {
    overrideTargetRef.current = target;
    updatePositionManager();
  });
  reactExports.useImperativeHandle(options.positioningRef, () => ({
    updatePosition: () => {
      var _managerRef_current;
      return (_managerRef_current = managerRef.current) === null || _managerRef_current === void 0 ? void 0 : _managerRef_current.updatePosition();
    },
    setTarget: (target) => {
      if (options.target && false) ;
      setOverrideTarget(target);
    }
  }), [
    options.target,
    setOverrideTarget
  ]);
  useIsomorphicLayoutEffect(() => {
    var _options_target;
    setOverrideTarget((_options_target = options.target) !== null && _options_target !== void 0 ? _options_target : null);
  }, [
    options.target,
    setOverrideTarget
  ]);
  useIsomorphicLayoutEffect(() => {
    updatePositionManager();
  }, [
    updatePositionManager
  ]);
  const setTarget = useCallbackRef(null, (target) => {
    if (targetRef.current !== target) {
      targetRef.current = target;
      updatePositionManager();
    }
  });
  const onPositioningEnd = useEventCallback(() => {
    var _options_onPositioningEnd;
    return (_options_onPositioningEnd = options.onPositioningEnd) === null || _options_onPositioningEnd === void 0 ? void 0 : _options_onPositioningEnd.call(options);
  });
  const setContainer = useCallbackRef(null, (container) => {
    if (containerRef.current !== container) {
      var _containerRef_current;
      (_containerRef_current = containerRef.current) === null || _containerRef_current === void 0 ? void 0 : _containerRef_current.removeEventListener(POSITIONING_END_EVENT, onPositioningEnd);
      container === null || container === void 0 ? void 0 : container.addEventListener(POSITIONING_END_EVENT, onPositioningEnd);
      containerRef.current = container;
      updatePositionManager();
    }
  });
  const setArrow = useCallbackRef(null, (arrow2) => {
    if (arrowRef.current !== arrow2) {
      arrowRef.current = arrow2;
      updatePositionManager();
    }
  });
  return {
    targetRef: setTarget,
    containerRef: setContainer,
    arrowRef: setArrow
  };
}
const usePositioningMouseTarget = (initialState) => {
  const [virtualElement, setVirtualElement] = reactExports.useState(initialState);
  const setVirtualMouseTarget = (event) => {
    if (event === void 0 || event === null) {
      setVirtualElement(void 0);
      return;
    }
    let mouseevent;
    if (!(event instanceof MouseEvent)) {
      mouseevent = event.nativeEvent;
    } else {
      mouseevent = event;
    }
    const contextTarget = createVirtualElementFromClick(mouseevent);
    setVirtualElement(contextTarget);
  };
  return [
    virtualElement,
    setVirtualMouseTarget
  ];
};
function createSafeZoneAreaStateStore() {
  let isActive = false;
  const listeners = [];
  return {
    isActive() {
      return isActive;
    },
    toggleActive(newIsActive) {
      if (isActive === newIsActive) {
        return;
      }
      isActive = newIsActive;
      listeners.forEach((listener) => listener(isActive));
    },
    subscribe(listener) {
      listeners.push(listener);
      return () => {
        const index = listeners.indexOf(listener);
        if (index > -1) {
          listeners.splice(index, 1);
        }
      };
    }
  };
}
var shim$1 = { exports: {} };
var useSyncExternalStoreShim_production = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var React = reactExports;
function is(x, y2) {
  return x === y2 && (0 !== x || 1 / x === 1 / y2) || x !== x && y2 !== y2;
}
var objectIs = "function" === typeof Object.is ? Object.is : is, useState = React.useState, useEffect = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue;
function useSyncExternalStore$2(subscribe, getSnapshot) {
  var value = getSnapshot(), _useState = useState({ inst: { value, getSnapshot } }), inst = _useState[0].inst, forceUpdate = _useState[1];
  useLayoutEffect(
    function() {
      inst.value = value;
      inst.getSnapshot = getSnapshot;
      checkIfSnapshotChanged(inst) && forceUpdate({ inst });
    },
    [subscribe, value, getSnapshot]
  );
  useEffect(
    function() {
      checkIfSnapshotChanged(inst) && forceUpdate({ inst });
      return subscribe(function() {
        checkIfSnapshotChanged(inst) && forceUpdate({ inst });
      });
    },
    [subscribe]
  );
  useDebugValue(value);
  return value;
}
function checkIfSnapshotChanged(inst) {
  var latestGetSnapshot = inst.getSnapshot;
  inst = inst.value;
  try {
    var nextValue = latestGetSnapshot();
    return !objectIs(inst, nextValue);
  } catch (error) {
    return true;
  }
}
function useSyncExternalStore$1(subscribe, getSnapshot) {
  return getSnapshot();
}
var shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
useSyncExternalStoreShim_production.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
{
  shim$1.exports = useSyncExternalStoreShim_production;
}
var shimExports = shim$1.exports;
function getRectCorners(rect, offset2) {
  return {
    topLeft: [
      rect.left - offset2[0],
      rect.top - offset2[1]
    ],
    topRight: [
      rect.right - offset2[0],
      rect.top - offset2[1]
    ],
    bottomRight: [
      rect.right - offset2[0],
      rect.bottom - offset2[1]
    ],
    bottomLeft: [
      rect.left - offset2[0],
      rect.bottom - offset2[1]
    ]
  };
}
const OFFSET_DISTANCE = 20;
function measureDistance(a, b2) {
  return Math.sqrt((a[0] - b2[0]) ** 2 + (a[1] - b2[1]) ** 2);
}
function getUnitVector(a, b2) {
  const distance = measureDistance(a, b2);
  if (distance === 0) {
    return [
      0,
      0
    ];
  }
  return [
    (a[0] - b2[0]) / distance,
    (a[1] - b2[1]) / distance
  ];
}
function getMouseAnchor(topLeftCorner, bottomRightCorner, mouseCoordinates) {
  const containerCenter = [
    (topLeftCorner[0] + bottomRightCorner[0]) / 2,
    (topLeftCorner[1] + bottomRightCorner[1]) / 2
  ];
  const unitVector = getUnitVector([
    mouseCoordinates[0],
    mouseCoordinates[1]
  ], [
    containerCenter[0],
    containerCenter[1]
  ]);
  const distance = measureDistance([
    containerCenter[0],
    containerCenter[1]
  ], [
    mouseCoordinates[0],
    mouseCoordinates[1]
  ]);
  return [
    containerCenter[0] + unitVector[0] * (distance + OFFSET_DISTANCE),
    containerCenter[1] + unitVector[1] * (distance + OFFSET_DISTANCE)
  ];
}
function pointsToSvgPath(points) {
  return `M ${points} z`;
}
const useStyles$a = /* @__PURE__ */ __styles({
  wrapper: {
    mc9l5x: "fjseox",
    Bqenvij: "fniina8",
    a9b677: "f3tsq5r",
    Bkecrkj: "f1aehjj5"
  },
  wrapperActive: {
    mc9l5x: "ftgm304"
  },
  svg: {
    Bkfmm31: "f1au8mb3",
    Bkecrkj: "f1aehjj5",
    qhf8xq: "f19dog8a",
    Bhzewxz: "f15twtuk",
    oyh7mz: ["f1vgc2s3", "f1e31b4d"]
  },
  triangle: {
    Bkecrkj: "f1cguypg"
  },
  triangleDebug: {
    Bceei9c: "f7116n6",
    Bkfmm31: "f1xab38x"
  },
  rectDebug: {
    Bkfmm31: "fyegryc"
  }
}, {
  d: [".fjseox{display:none;}", ".fniina8{height:0;}", ".f3tsq5r{width:0;}", ".f1aehjj5{pointer-events:none;}", ".ftgm304{display:block;}", ".f1au8mb3{fill:transparent;}", ".f19dog8a{position:fixed;}", ".f15twtuk{top:0;}", ".f1vgc2s3{left:0;}", ".f1e31b4d{right:0;}", ".f1cguypg{pointer-events:auto;}", ".f7116n6{cursor:crosshair;}", ".f1xab38x{fill:color-mix(in srgb, var(--colorPaletteGreenBackground3) 20%, transparent);}", ".fyegryc{fill:color-mix(in srgb, var(--colorPaletteRedBackground3) 20%, transparent);}"]
});
function drawRectangle(rect) {
  if (rect.width <= 0 || rect.height <= 0) {
    return "";
  }
  let pathData = "";
  pathData += `M ${rect.x},${rect.y} `;
  pathData += `V ${rect.y + rect.height} `;
  pathData += `H ${rect.x + rect.width} `;
  pathData += `V ${rect.y} `;
  pathData += `H ${rect.x} `;
  pathData += `Z `;
  return pathData;
}
function computeOutsideClipPath(svgWidth, svgHeight, targetRect, containerRect) {
  let pathData = `M 0,0 H ${svgWidth} V ${svgHeight} H 0 Z `;
  pathData += drawRectangle(targetRect);
  pathData += drawRectangle(containerRect);
  return pathData;
}
const EMPTY_RECT = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: 0,
  height: 0,
  x: 0,
  y: 0,
  toJSON() {
    return "";
  }
};
function isSameRect(a, b2) {
  return a.top === b2.top && a.right === b2.right && a.bottom === b2.bottom && a.left === b2.left && a.width === b2.width && a.height === b2.height;
}
function isSameCoordinates(a, b2) {
  return a[0] === b2[0] && a[1] === b2[1];
}
const SafeZoneArea = /* @__PURE__ */ reactExports.memo((props) => {
  const { debug, onMouseEnter, onMouseMove, onMouseLeave, stateStore } = props;
  const clipPathId = useId();
  const styles = useStyles$a();
  const active = shimExports.useSyncExternalStore(stateStore.subscribe, stateStore.isActive);
  const svgRef = reactExports.useRef(null);
  const [state, setState] = reactExports.useState(() => ({
    containerRect: EMPTY_RECT,
    targetRect: EMPTY_RECT,
    mouseCoordinates: [
      0,
      0
    ]
  }));
  reactExports.useImperativeHandle(props.imperativeRef, () => ({
    updateSVG(newState) {
      setState((prevState) => {
        if (isSameRect(prevState.containerRect, newState.containerRect) && isSameRect(prevState.targetRect, newState.targetRect) && isSameCoordinates(prevState.mouseCoordinates, newState.mouseCoordinates)) {
          return prevState;
        }
        return newState;
      });
    }
  }), []);
  const { containerRect, targetRect, mouseCoordinates } = state;
  const topOffset = Math.min(targetRect.top, containerRect.top);
  const leftOffset = Math.min(targetRect.left, containerRect.left);
  const bottomOffset = Math.max(targetRect.bottom, containerRect.bottom);
  const rightOffset = Math.max(targetRect.right, containerRect.right);
  const containerCorners = getRectCorners(containerRect, [
    leftOffset,
    topOffset
  ]);
  const targetCorners = getRectCorners(targetRect, [
    leftOffset,
    topOffset
  ]);
  const relativeMouseCoordinates = [
    mouseCoordinates[0] - leftOffset,
    mouseCoordinates[1] - topOffset
  ];
  const mouseAnchor = getMouseAnchor(containerCorners.topLeft, containerCorners.bottomRight, relativeMouseCoordinates);
  const triangleA = [
    mouseAnchor,
    containerCorners.topLeft,
    containerCorners.topRight
  ];
  const triangleB = [
    mouseAnchor,
    containerCorners.topRight,
    containerCorners.bottomRight
  ];
  const triangleC = [
    mouseAnchor,
    containerCorners.bottomRight,
    containerCorners.bottomLeft
  ];
  const triangleD = [
    mouseAnchor,
    containerCorners.bottomLeft,
    containerCorners.topLeft
  ];
  const svgWidth = rightOffset - leftOffset;
  const svgHeight = bottomOffset - topOffset;
  const clipPath = computeOutsideClipPath(svgWidth, svgHeight, {
    x: targetCorners.topLeft[0],
    y: targetCorners.topLeft[1],
    width: targetRect.width,
    height: targetRect.height
  }, {
    x: containerCorners.topLeft[0],
    y: containerCorners.topLeft[1],
    width: containerRect.width,
    height: containerRect.height
  });
  return /* @__PURE__ */ reactExports.createElement("div", {
    className: mergeClasses(styles.wrapper, active && styles.wrapperActive),
    "data-safe-zone": ""
  }, active ? /* @__PURE__ */ reactExports.createElement("svg", {
    "aria-hidden": true,
    className: styles.svg,
    xmlns: "http://www.w3.org/2000/svg",
    ref: svgRef,
    style: {
      width: `${svgWidth}px`,
      height: `${svgHeight}px`,
      transform: `translate(${leftOffset}px, ${topOffset}px)`
    }
  }, /* @__PURE__ */ reactExports.createElement("g", {
    className: mergeClasses(styles.triangle, debug && styles.triangleDebug),
    clipPath: `url(#${clipPathId})`,
    onMouseEnter,
    onMouseMove,
    onMouseLeave
  }, /* @__PURE__ */ reactExports.createElement("path", {
    d: pointsToSvgPath(triangleA)
  }), /* @__PURE__ */ reactExports.createElement("path", {
    d: pointsToSvgPath(triangleB)
  }), /* @__PURE__ */ reactExports.createElement("path", {
    d: pointsToSvgPath(triangleC)
  }), /* @__PURE__ */ reactExports.createElement("path", {
    d: pointsToSvgPath(triangleD)
  })), /* @__PURE__ */ reactExports.createElement("clipPath", {
    id: clipPathId
  }, /* @__PURE__ */ reactExports.createElement("path", {
    d: clipPath
  })), debug && /* @__PURE__ */ reactExports.createElement("path", {
    className: styles.rectDebug,
    d: clipPath
  })) : null);
});
const MOUSE_MOVE_TARGET_POLLING_TIMEOUT = 2e3;
function useSafeZoneArea({ debug = false, disabled = false, onSafeZoneEnter, onSafeZoneMove, onSafeZoneLeave, onSafeZoneTimeout, timeout = 1500 } = {}) {
  const [stateStore] = reactExports.useState(createSafeZoneAreaStateStore);
  const safeZoneAreaRef = reactExports.useRef(null);
  const containerRef = reactExports.useRef(null);
  const targetRef = reactExports.useRef(null);
  const [setSafeZoneCloseTimeout, clearSafeZoneCloseTimeout] = useTimeout();
  const [requestUpdateFrame, clearUpdateFrame] = useAnimationFrame();
  const mouseCoordinatesRef = reactExports.useRef({
    x: 0,
    y: 0
  });
  const containerListenerRef = reactExports.useMemo(() => {
    if (disabled) {
      return () => {
      };
    }
    let containerEl = null;
    function onContainerMouseEnter() {
      clearSafeZoneCloseTimeout();
      stateStore.toggleActive(false);
    }
    return (el) => {
      if (el === null) {
        containerEl === null || containerEl === void 0 ? void 0 : containerEl.removeEventListener("mouseenter", onContainerMouseEnter);
      }
      containerEl = el;
      el === null || el === void 0 ? void 0 : el.addEventListener("mouseenter", onContainerMouseEnter);
    };
  }, [
    clearSafeZoneCloseTimeout,
    disabled,
    stateStore
  ]);
  const targetListenerRef = reactExports.useMemo(() => {
    if (disabled) {
      return () => {
      };
    }
    let targetEl = null;
    function onTargetMouseMove(e2) {
      mouseCoordinatesRef.current = {
        x: e2.clientX,
        y: e2.clientY
      };
      if (!stateStore.isActive()) {
        stateStore.toggleActive(true);
      }
      setSafeZoneCloseTimeout(() => {
        stateStore.toggleActive(false);
      }, MOUSE_MOVE_TARGET_POLLING_TIMEOUT);
    }
    return (el) => {
      if (el === null) {
        clearUpdateFrame();
        clearSafeZoneCloseTimeout();
        targetEl === null || targetEl === void 0 ? void 0 : targetEl.removeEventListener("mousemove", onTargetMouseMove);
      }
      targetEl = el;
      el === null || el === void 0 ? void 0 : el.addEventListener("mousemove", onTargetMouseMove);
    };
  }, [
    clearUpdateFrame,
    clearSafeZoneCloseTimeout,
    disabled,
    stateStore,
    setSafeZoneCloseTimeout
  ]);
  const onSvgMouseEnter = useEventCallback((e2) => {
    onSafeZoneEnter === null || onSafeZoneEnter === void 0 ? void 0 : onSafeZoneEnter(e2);
    setSafeZoneCloseTimeout(() => {
      stateStore.toggleActive(false);
      onSafeZoneTimeout === null || onSafeZoneTimeout === void 0 ? void 0 : onSafeZoneTimeout();
    }, timeout);
  });
  const onSvgMouseMove = useEventCallback((e2) => {
    setSafeZoneCloseTimeout(() => {
      stateStore.toggleActive(false);
      onSafeZoneTimeout === null || onSafeZoneTimeout === void 0 ? void 0 : onSafeZoneTimeout();
    }, timeout);
    onSafeZoneMove === null || onSafeZoneMove === void 0 ? void 0 : onSafeZoneMove(e2);
  });
  const onSvgMouseLeave = useEventCallback((e2) => {
    onSafeZoneLeave === null || onSafeZoneLeave === void 0 ? void 0 : onSafeZoneLeave(e2);
  });
  reactExports.useEffect(() => {
    return stateStore.subscribe((isActive) => {
      if (isActive) {
        let updateSVGs = function() {
          const containerEl = containerRef.current;
          const targetEl = targetRef.current;
          if (containerEl && targetEl) {
            var _safeZoneAreaRef_current;
            (_safeZoneAreaRef_current = safeZoneAreaRef.current) === null || _safeZoneAreaRef_current === void 0 ? void 0 : _safeZoneAreaRef_current.updateSVG({
              containerRect: containerEl.getBoundingClientRect(),
              mouseCoordinates: [
                mouseCoordinatesRef.current.x,
                mouseCoordinatesRef.current.y
              ],
              targetRect: targetEl.getBoundingClientRect()
            });
          }
          requestUpdateFrame(updateSVGs);
        };
        updateSVGs();
        return;
      }
      clearUpdateFrame();
    });
  }, [
    clearUpdateFrame,
    requestUpdateFrame,
    stateStore
  ]);
  return {
    containerRef: useMergedRefs(containerRef, containerListenerRef),
    targetRef: useMergedRefs(targetRef, targetListenerRef),
    elementToRender: reactExports.useMemo(() => disabled ? null : /* @__PURE__ */ reactExports.createElement(SafeZoneArea, {
      debug,
      onMouseEnter: onSvgMouseEnter,
      onMouseMove: onSvgMouseMove,
      onMouseLeave: onSvgMouseLeave,
      imperativeRef: safeZoneAreaRef,
      stateStore
    }), [
      disabled,
      debug,
      onSvgMouseEnter,
      onSvgMouseMove,
      onSvgMouseLeave,
      stateStore
    ])
  };
}
function toMountNodeProps(mountNode) {
  if (isHTMLElement$2(mountNode)) {
    return {
      element: mountNode
    };
  }
  if (typeof mountNode === "object") {
    if (mountNode === null) {
      return {
        element: null
      };
    }
    return mountNode;
  }
  return {};
}
const usePortalMountNodeStylesStyles = /* @__PURE__ */ __styles({
  root: {
    qhf8xq: "f1euv43f",
    Bhzewxz: "f15twtuk",
    oyh7mz: ["f1vgc2s3", "f1e31b4d"],
    j35jbq: ["f1e31b4d", "f1vgc2s3"],
    Bj3rh1h: "f494woh"
  }
}, {
  d: [".f1euv43f{position:absolute;}", ".f15twtuk{top:0;}", ".f1vgc2s3{left:0;}", ".f1e31b4d{right:0;}", ".f494woh{z-index:1000000;}"]
});
const useInsertionEffect = React$1["useInsertionEffect"];
const useLegacyElementFactory = (options) => {
  "use no memo";
  const { className, dir, focusVisibleRef, targetNode } = options;
  const targetElement = reactExports.useMemo(() => {
    if (targetNode === void 0 || options.disabled) {
      return null;
    }
    const element = targetNode.ownerDocument.createElement("div");
    targetNode.appendChild(element);
    return element;
  }, [
    targetNode,
    options.disabled
  ]);
  reactExports.useMemo(() => {
    if (!targetElement) {
      return;
    }
    targetElement.className = className;
    targetElement.setAttribute("dir", dir);
    targetElement.setAttribute("data-portal-node", "true");
    focusVisibleRef.current = targetElement;
  }, [
    className,
    dir,
    targetElement,
    focusVisibleRef
  ]);
  reactExports.useEffect(() => {
    return () => {
      targetElement === null || targetElement === void 0 ? void 0 : targetElement.remove();
    };
  }, [
    targetElement
  ]);
  return targetElement;
};
const initializeElementFactory = () => {
  let currentElement = void 0;
  function get(targetRoot, forceCreation) {
    if (currentElement) {
      return currentElement;
    }
    if (forceCreation) {
      currentElement = targetRoot.ownerDocument.createElement("div");
      targetRoot.appendChild(currentElement);
    }
    return currentElement;
  }
  function dispose() {
    if (currentElement) {
      currentElement.remove();
      currentElement = void 0;
    }
  }
  return {
    get,
    dispose
  };
};
const useModernElementFactory = (options) => {
  "use no memo";
  const { className, dir, focusVisibleRef, targetNode } = options;
  const [elementFactory] = reactExports.useState(initializeElementFactory);
  const elementProxy = reactExports.useMemo(() => {
    if (targetNode === void 0 || options.disabled) {
      return null;
    }
    return new Proxy({}, {
      get(_, property) {
        if (property === "nodeType") {
          return 1;
        }
        if (property === "remove") {
          const targetElement2 = elementFactory.get(targetNode, false);
          if (targetElement2) {
            const portalHasNoChildren = targetElement2.childNodes.length === 0;
            if (portalHasNoChildren) {
              elementFactory.dispose();
            }
          }
          return () => {
          };
        }
        const targetElement = elementFactory.get(targetNode, true);
        const targetProperty = targetElement ? targetElement[property] : void 0;
        if (typeof targetProperty === "function") {
          return targetProperty.bind(targetElement);
        }
        return targetProperty;
      },
      set(_, property, value) {
        const ignoredProperty = property === "_virtual" || property === "focusVisible";
        const targetElement = ignoredProperty ? elementFactory.get(targetNode, false) : elementFactory.get(targetNode, true);
        if (ignoredProperty && !targetElement) {
          return true;
        }
        if (targetElement) {
          Object.assign(targetElement, {
            [property]: value
          });
          return true;
        }
        return false;
      }
    });
  }, [
    elementFactory,
    targetNode,
    options.disabled
  ]);
  useInsertionEffect(() => {
    if (!elementProxy) {
      return;
    }
    const classesToApply = className.split(" ").filter(Boolean);
    elementProxy.classList.add(...classesToApply);
    elementProxy.setAttribute("dir", dir);
    elementProxy.setAttribute("data-portal-node", "true");
    focusVisibleRef.current = elementProxy;
    return () => {
      elementProxy.classList.remove(...classesToApply);
      elementProxy.removeAttribute("dir");
    };
  }, [
    className,
    dir,
    elementProxy,
    focusVisibleRef
  ]);
  reactExports.useEffect(() => {
    return () => {
      elementProxy === null || elementProxy === void 0 ? void 0 : elementProxy.remove();
    };
  }, [
    elementProxy
  ]);
  return elementProxy;
};
const useElementFactory = useInsertionEffect ? useModernElementFactory : useLegacyElementFactory;
const usePortalMountNode = (options) => {
  "use no memo";
  const { targetDocument, dir } = useFluent();
  const mountNode = usePortalMountNode$1();
  const focusVisibleRef = useFocusVisible();
  const classes = usePortalMountNodeStylesStyles();
  const themeClassName = useThemeClassName();
  const factoryOptions = {
    dir,
    disabled: options.disabled,
    focusVisibleRef,
    className: mergeClasses(themeClassName, classes.root, options.className),
    targetNode: mountNode !== null && mountNode !== void 0 ? mountNode : targetDocument === null || targetDocument === void 0 ? void 0 : targetDocument.body
  };
  return useElementFactory(factoryOptions);
};
const usePortal_unstable = (props) => {
  const { element, className } = toMountNodeProps(props.mountNode);
  const virtualParentRootRef = reactExports.useRef(null);
  const fallbackElement = usePortalMountNode({
    disabled: !!element,
    className
  });
  const mountNode = element !== null && element !== void 0 ? element : fallbackElement;
  const state = {
    children: props.children,
    mountNode,
    virtualParentRootRef
  };
  reactExports.useEffect(() => {
    if (!mountNode) {
      return;
    }
    const virtualParent = virtualParentRootRef.current;
    const isVirtualParentInsideChild = mountNode.contains(virtualParent);
    if (virtualParent && !isVirtualParentInsideChild) {
      setVirtualParent(mountNode, virtualParent);
      return () => {
        setVirtualParent(mountNode, void 0);
      };
    }
  }, [
    virtualParentRootRef,
    mountNode
  ]);
  return state;
};
const renderPortal_unstable = (state) => {
  return /* @__PURE__ */ reactExports.createElement("span", {
    hidden: true,
    ref: state.virtualParentRootRef
  }, state.mountNode && /* @__PURE__ */ reactDomExports.createPortal(/* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, state.children, /* @__PURE__ */ reactExports.createElement("span", {
    hidden: true
  })), state.mountNode));
};
const Portal = (props) => {
  const state = usePortal_unstable(props);
  return renderPortal_unstable(state);
};
Portal.displayName = "Portal";
const renderButton_unstable = (state) => {
  const { iconOnly, iconPosition } = state;
  return /* @__PURE__ */ jsxs(state.root, {
    children: [
      iconPosition !== "after" && state.icon && /* @__PURE__ */ jsx(state.icon, {}),
      !iconOnly && state.root.children,
      iconPosition === "after" && state.icon && /* @__PURE__ */ jsx(state.icon, {})
    ]
  });
};
const buttonContext = reactExports.createContext(void 0);
const buttonContextDefaultValue = {};
buttonContext.Provider;
const useButtonContext = () => {
  var _React_useContext;
  return (_React_useContext = reactExports.useContext(buttonContext)) !== null && _React_useContext !== void 0 ? _React_useContext : buttonContextDefaultValue;
};
const useButton_unstable = (props, ref) => {
  const { size: contextSize } = useButtonContext();
  const { appearance = "secondary", as = "button", disabled = false, disabledFocusable = false, icon, iconPosition = "before", shape = "rounded", size: size2 = contextSize !== null && contextSize !== void 0 ? contextSize : "medium" } = props;
  const iconShorthand = optional(icon, {
    elementType: "span"
  });
  return {
    // Props passed at the top-level
    appearance,
    disabled,
    disabledFocusable,
    iconPosition,
    shape,
    size: size2,
    iconOnly: Boolean((iconShorthand === null || iconShorthand === void 0 ? void 0 : iconShorthand.children) && !props.children),
    components: {
      root: "button",
      icon: "span"
    },
    root: always(getIntrinsicElementProps(as, useARIAButtonProps(props.as, props)), {
      elementType: "button",
      defaultProps: {
        ref,
        type: as === "button" ? "button" : void 0
      }
    }),
    icon: iconShorthand
  };
};
const buttonClassNames = {
  root: "fui-Button",
  icon: "fui-Button__icon"
};
const useRootBaseClassName$1 = /* @__PURE__ */ __resetStyles("r1alrhcs", null, {
  r: [".r1alrhcs{align-items:center;box-sizing:border-box;display:inline-flex;justify-content:center;text-decoration-line:none;vertical-align:middle;margin:0;overflow:hidden;background-color:var(--colorNeutralBackground1);color:var(--colorNeutralForeground1);border:var(--strokeWidthThin) solid var(--colorNeutralStroke1);font-family:var(--fontFamilyBase);outline-style:none;padding:5px var(--spacingHorizontalM);min-width:96px;border-radius:var(--borderRadiusMedium);font-size:var(--fontSizeBase300);font-weight:var(--fontWeightSemibold);line-height:var(--lineHeightBase300);transition-duration:var(--durationFaster);transition-property:background,border,color;transition-timing-function:var(--curveEasyEase);}", ".r1alrhcs:hover{background-color:var(--colorNeutralBackground1Hover);border-color:var(--colorNeutralStroke1Hover);color:var(--colorNeutralForeground1Hover);cursor:pointer;}", ".r1alrhcs:hover:active{background-color:var(--colorNeutralBackground1Pressed);border-color:var(--colorNeutralStroke1Pressed);color:var(--colorNeutralForeground1Pressed);outline-style:none;}", ".r1alrhcs[data-fui-focus-visible]{border-color:var(--colorStrokeFocus2);border-radius:var(--borderRadiusMedium);border-width:1px;outline:var(--strokeWidthThick) solid var(--colorTransparentStroke);box-shadow:0 0 0 var(--strokeWidthThin) var(--colorStrokeFocus2) inset;z-index:1;}"],
  s: ["@media screen and (prefers-reduced-motion: reduce){.r1alrhcs{transition-duration:0.01ms;}}", "@media (forced-colors: active){.r1alrhcs:focus{border-color:ButtonText;}.r1alrhcs:hover{background-color:HighlightText;border-color:Highlight;color:Highlight;forced-color-adjust:none;}.r1alrhcs:hover:active{background-color:HighlightText;border-color:Highlight;color:Highlight;forced-color-adjust:none;}}", "@supports (-moz-appearance:button){.r1alrhcs[data-fui-focus-visible]{box-shadow:0 0 0 calc(var(--strokeWidthThin) + 0.25px) var(--colorStrokeFocus2) inset;}}"]
});
const useIconBaseClassName = /* @__PURE__ */ __resetStyles("rywnvv2", null, [".rywnvv2{align-items:center;display:inline-flex;justify-content:center;font-size:20px;height:20px;width:20px;--fui-Button__icon--spacing:var(--spacingHorizontalSNudge);}"]);
const useRootStyles$4 = /* @__PURE__ */ __styles({
  outline: {
    De3pzq: "f1c21dwh",
    Jwef8y: "fjxutwb",
    iro3zm: "fwiml72"
  },
  primary: {
    De3pzq: "ffp7eso",
    g2u3we: "f1p3nwhy",
    h3c5rm: ["f11589ue", "f1pdflbu"],
    B9xav0g: "f1q5o8ev",
    zhjwy3: ["f1pdflbu", "f11589ue"],
    sj55zd: "f1phragk",
    Jwef8y: "f15wkkf3",
    Bgoe8wy: "f1s2uweq",
    Bwzppfd: ["fr80ssc", "fecsdlb"],
    oetu4i: "f1ukrpxl",
    gg5e9n: ["fecsdlb", "fr80ssc"],
    Bi91k9c: "f1rq72xc",
    iro3zm: "fnp9lpt",
    b661bw: "f1h0usnq",
    Bk6r4ia: ["fs4ktlq", "fx2bmrt"],
    B9zn80p: "f16h9ulv",
    Bpld233: ["fx2bmrt", "fs4ktlq"],
    B2d53fq: "f1d6v5y2",
    By8wz76: "f1nz3ub2",
    Bcq6wej: "fag2qd2",
    Jcjdmf: ["fmvhcg7", "f14bpyus"],
    sc4o1m: "f1o3dhpw",
    Bosien3: ["f14bpyus", "fmvhcg7"],
    B7iucu3: "fqc85l4",
    B8gzw0y: "f1h3a8gf",
    Bbkh6qg: "fkiggi6",
    F230oe: "f8gmj8i",
    Bdw8ktp: ["f1ap8nzx", "fjag8bx"],
    Bj1xduy: "f1igan7k",
    Bhh2cfd: ["fjag8bx", "f1ap8nzx"],
    Bahaeuw: "f1v3eptx",
    rxnm8d: "fpelvsg",
    Bso50sa: "f1r9enuy",
    B65bq0w: ["fdvt4n0", "f1grx941"],
    Buont6p: "f1l34yyb",
    B0o9ejx: ["f1grx941", "fdvt4n0"],
    Dcq74g: "fqfbdvs"
  },
  secondary: {},
  subtle: {
    De3pzq: "fhovq9v",
    g2u3we: "f1p3nwhy",
    h3c5rm: ["f11589ue", "f1pdflbu"],
    B9xav0g: "f1q5o8ev",
    zhjwy3: ["f1pdflbu", "f11589ue"],
    sj55zd: "fkfq4zb",
    Jwef8y: "f1t94bn6",
    Bgoe8wy: "f1s2uweq",
    Bwzppfd: ["fr80ssc", "fecsdlb"],
    oetu4i: "f1ukrpxl",
    gg5e9n: ["fecsdlb", "fr80ssc"],
    Bi91k9c: "fnwyq0v",
    Bk3fhr4: "ft1hn21",
    Bmfj8id: "fuxngvv",
    Bbdnnc7: "fy5bs14",
    iro3zm: "fsv2rcd",
    b661bw: "f1h0usnq",
    Bk6r4ia: ["fs4ktlq", "fx2bmrt"],
    B9zn80p: "f16h9ulv",
    Bpld233: ["fx2bmrt", "fs4ktlq"],
    B2d53fq: "f1omzyqd",
    em6i61: "f1dfjoow",
    vm6p8p: "f1j98vj9",
    x3br3k: "fj8yq94",
    Bahaeuw: "f1v3eptx",
    Buhizc3: "fivsta0",
    Dcq74g: "fqfbdvs",
    zyxd5v: "f1wfsnb3"
  },
  transparent: {
    De3pzq: "f1c21dwh",
    g2u3we: "f1p3nwhy",
    h3c5rm: ["f11589ue", "f1pdflbu"],
    B9xav0g: "f1q5o8ev",
    zhjwy3: ["f1pdflbu", "f11589ue"],
    sj55zd: "fkfq4zb",
    Jwef8y: "fjxutwb",
    Bgoe8wy: "f1s2uweq",
    Bwzppfd: ["fr80ssc", "fecsdlb"],
    oetu4i: "f1ukrpxl",
    gg5e9n: ["fecsdlb", "fr80ssc"],
    Bi91k9c: "f139oj5f",
    Bk3fhr4: "ft1hn21",
    Bmfj8id: "fuxngvv",
    iro3zm: "fwiml72",
    b661bw: "f1h0usnq",
    Bk6r4ia: ["fs4ktlq", "fx2bmrt"],
    B9zn80p: "f16h9ulv",
    Bpld233: ["fx2bmrt", "fs4ktlq"],
    B2d53fq: "f1fg1p5m",
    em6i61: "f1dfjoow",
    vm6p8p: "f1j98vj9",
    Bbkh6qg: "fxoo9op",
    Bahaeuw: "f1v3eptx",
    rxnm8d: "f11slz88",
    Dcq74g: "fqfbdvs"
  },
  circular: {
    Beyfa6y: 0,
    Bbmb7ep: 0,
    Btl43ni: 0,
    B7oj6ja: 0,
    Dimara: "f44lkw9"
  },
  rounded: {},
  square: {
    Beyfa6y: 0,
    Bbmb7ep: 0,
    Btl43ni: 0,
    B7oj6ja: 0,
    Dimara: "f1fabniw"
  },
  small: {
    Bf4jedk: "fh7ncta",
    Byoj8tv: 0,
    uwmqm3: 0,
    z189sj: 0,
    z8tnut: 0,
    B0ocmuz: "fneth5b",
    Beyfa6y: 0,
    Bbmb7ep: 0,
    Btl43ni: 0,
    B7oj6ja: 0,
    Dimara: "ft85np5",
    Be2twd7: "fy9rknc",
    Bhrd7zp: "figsok6",
    Bg96gwp: "fwrc4pm"
  },
  smallWithIcon: {
    Byoj8tv: "f1brlhvm",
    z8tnut: "f1sl3k7w"
  },
  medium: {},
  large: {
    Bf4jedk: "f14es27b",
    Byoj8tv: 0,
    uwmqm3: 0,
    z189sj: 0,
    z8tnut: 0,
    B0ocmuz: "f4db1ww",
    Beyfa6y: 0,
    Bbmb7ep: 0,
    Btl43ni: 0,
    B7oj6ja: 0,
    Dimara: "ft85np5",
    Be2twd7: "fod5ikn",
    Bhrd7zp: "fl43uef",
    Bg96gwp: "faaz57k"
  },
  largeWithIcon: {
    Byoj8tv: "fy7v416",
    z8tnut: "f1a1bwwz"
  }
}, {
  d: [".f1c21dwh{background-color:var(--colorTransparentBackground);}", ".ffp7eso{background-color:var(--colorBrandBackground);}", ".f1p3nwhy{border-top-color:transparent;}", ".f11589ue{border-right-color:transparent;}", ".f1pdflbu{border-left-color:transparent;}", ".f1q5o8ev{border-bottom-color:transparent;}", ".f1phragk{color:var(--colorNeutralForegroundOnBrand);}", ".fhovq9v{background-color:var(--colorSubtleBackground);}", ".fkfq4zb{color:var(--colorNeutralForeground2);}", [".f44lkw9{border-radius:var(--borderRadiusCircular);}", {
    p: -1
  }], [".f1fabniw{border-radius:var(--borderRadiusNone);}", {
    p: -1
  }], ".fh7ncta{min-width:64px;}", [".fneth5b{padding:3px var(--spacingHorizontalS);}", {
    p: -1
  }], [".ft85np5{border-radius:var(--borderRadiusMedium);}", {
    p: -1
  }], ".fy9rknc{font-size:var(--fontSizeBase200);}", ".figsok6{font-weight:var(--fontWeightRegular);}", ".fwrc4pm{line-height:var(--lineHeightBase200);}", ".f1brlhvm{padding-bottom:1px;}", ".f1sl3k7w{padding-top:1px;}", ".f14es27b{min-width:96px;}", [".f4db1ww{padding:8px var(--spacingHorizontalL);}", {
    p: -1
  }], [".ft85np5{border-radius:var(--borderRadiusMedium);}", {
    p: -1
  }], ".fod5ikn{font-size:var(--fontSizeBase400);}", ".fl43uef{font-weight:var(--fontWeightSemibold);}", ".faaz57k{line-height:var(--lineHeightBase400);}", ".fy7v416{padding-bottom:7px;}", ".f1a1bwwz{padding-top:7px;}"],
  h: [".fjxutwb:hover{background-color:var(--colorTransparentBackgroundHover);}", ".fwiml72:hover:active{background-color:var(--colorTransparentBackgroundPressed);}", ".f15wkkf3:hover{background-color:var(--colorBrandBackgroundHover);}", ".f1s2uweq:hover{border-top-color:transparent;}", ".fr80ssc:hover{border-right-color:transparent;}", ".fecsdlb:hover{border-left-color:transparent;}", ".f1ukrpxl:hover{border-bottom-color:transparent;}", ".f1rq72xc:hover{color:var(--colorNeutralForegroundOnBrand);}", ".fnp9lpt:hover:active{background-color:var(--colorBrandBackgroundPressed);}", ".f1h0usnq:hover:active{border-top-color:transparent;}", ".fs4ktlq:hover:active{border-right-color:transparent;}", ".fx2bmrt:hover:active{border-left-color:transparent;}", ".f16h9ulv:hover:active{border-bottom-color:transparent;}", ".f1d6v5y2:hover:active{color:var(--colorNeutralForegroundOnBrand);}", ".f1t94bn6:hover{background-color:var(--colorSubtleBackgroundHover);}", ".fnwyq0v:hover{color:var(--colorNeutralForeground2Hover);}", ".ft1hn21:hover .fui-Icon-filled{display:inline;}", ".fuxngvv:hover .fui-Icon-regular{display:none;}", ".fy5bs14:hover .fui-Button__icon{color:var(--colorNeutralForeground2BrandHover);}", ".fsv2rcd:hover:active{background-color:var(--colorSubtleBackgroundPressed);}", ".f1omzyqd:hover:active{color:var(--colorNeutralForeground2Pressed);}", ".f1dfjoow:hover:active .fui-Icon-filled{display:inline;}", ".f1j98vj9:hover:active .fui-Icon-regular{display:none;}", ".fj8yq94:hover:active .fui-Button__icon{color:var(--colorNeutralForeground2BrandPressed);}", ".f139oj5f:hover{color:var(--colorNeutralForeground2BrandHover);}", ".f1fg1p5m:hover:active{color:var(--colorNeutralForeground2BrandPressed);}"],
  m: [["@media (forced-colors: active){.f1nz3ub2{background-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fag2qd2{border-top-color:HighlightText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f14bpyus{border-left-color:HighlightText;}.fmvhcg7{border-right-color:HighlightText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1o3dhpw{border-bottom-color:HighlightText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fqc85l4{color:HighlightText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1h3a8gf{forced-color-adjust:none;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fkiggi6:hover{background-color:HighlightText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f8gmj8i:hover{border-top-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1ap8nzx:hover{border-right-color:Highlight;}.fjag8bx:hover{border-left-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1igan7k:hover{border-bottom-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1v3eptx:hover{color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fpelvsg:hover:active{background-color:HighlightText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1r9enuy:hover:active{border-top-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1grx941:hover:active{border-left-color:Highlight;}.fdvt4n0:hover:active{border-right-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1l34yyb:hover:active{border-bottom-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fqfbdvs:hover:active{color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fivsta0:hover .fui-Button__icon{color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1wfsnb3:hover:active .fui-Button__icon{color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fxoo9op:hover{background-color:var(--colorTransparentBackground);}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f11slz88:hover:active{background-color:var(--colorTransparentBackground);}}", {
    m: "(forced-colors: active)"
  }]]
});
const useRootDisabledStyles = /* @__PURE__ */ __styles({
  base: {
    De3pzq: "f1bg9a2p",
    g2u3we: "f1jj8ep1",
    h3c5rm: ["f15xbau", "fy0fskl"],
    B9xav0g: "f4ikngz",
    zhjwy3: ["fy0fskl", "f15xbau"],
    sj55zd: "f1s2aq7o",
    Bceei9c: "fdrzuqr",
    Bfinmwp: "f15x8b5r",
    Jwef8y: "f1falr9n",
    Bgoe8wy: "f12mpcsy",
    Bwzppfd: ["f1gwvigk", "f18rmfxp"],
    oetu4i: "f1jnshp0",
    gg5e9n: ["f18rmfxp", "f1gwvigk"],
    Bi91k9c: "fvgxktp",
    eoavqd: "fphbwmw",
    Bk3fhr4: "f19vpps7",
    Bmfj8id: "fv5swzo",
    Bbdnnc7: "f1al02dq",
    iro3zm: "f1t6o4dc",
    b661bw: "f10ztigi",
    Bk6r4ia: ["f1ft5sdu", "f1gzf82w"],
    B9zn80p: "f12zbtn2",
    Bpld233: ["f1gzf82w", "f1ft5sdu"],
    B2d53fq: "fcvwxyo",
    c3iz72: "f8w4c43",
    em6i61: "f1ol4fw6",
    vm6p8p: "f1q1lw4e",
    x3br3k: "f1dwjv2g"
  },
  highContrast: {
    By8wz76: "f14ptb23",
    Bcq6wej: "f9dbb4x",
    Jcjdmf: ["f3qs60o", "f5u9ap2"],
    sc4o1m: "fwd1oij",
    Bosien3: ["f5u9ap2", "f3qs60o"],
    B7iucu3: "f1cyfu5x",
    Grqk0h: "f127ot8j",
    h3ptyc: "f19etb0b",
    Buw724y: ["f4f984j", "fw441p0"],
    Buk7464: "f3d22hf",
    Hwei09: ["fw441p0", "f4f984j"],
    Bbkh6qg: "fj8k9ua",
    F230oe: "fifrq0d",
    Bdw8ktp: ["f196mwp7", "fnekfq"],
    Bj1xduy: "f1l6uprw",
    Bhh2cfd: ["fnekfq", "f196mwp7"],
    Bahaeuw: "fa9u7a5",
    Buhizc3: "f1m71e0y",
    rxnm8d: "f1xxg0vq",
    Bso50sa: "f16oldlo",
    B65bq0w: ["f17g64ui", "fqbrke7"],
    Buont6p: "fjvf891",
    B0o9ejx: ["fqbrke7", "f17g64ui"],
    Dcq74g: "f1efp33f",
    zyxd5v: "f1gue8i"
  },
  outline: {
    De3pzq: "f1c21dwh",
    Jwef8y: "f9ql6rf",
    iro3zm: "f3h1zc4"
  },
  primary: {
    g2u3we: "f1p3nwhy",
    h3c5rm: ["f11589ue", "f1pdflbu"],
    B9xav0g: "f1q5o8ev",
    zhjwy3: ["f1pdflbu", "f11589ue"],
    Bgoe8wy: "f1s2uweq",
    Bwzppfd: ["fr80ssc", "fecsdlb"],
    oetu4i: "f1ukrpxl",
    gg5e9n: ["fecsdlb", "fr80ssc"],
    b661bw: "f1h0usnq",
    Bk6r4ia: ["fs4ktlq", "fx2bmrt"],
    B9zn80p: "f16h9ulv",
    Bpld233: ["fx2bmrt", "fs4ktlq"]
  },
  secondary: {},
  subtle: {
    De3pzq: "f1c21dwh",
    g2u3we: "f1p3nwhy",
    h3c5rm: ["f11589ue", "f1pdflbu"],
    B9xav0g: "f1q5o8ev",
    zhjwy3: ["f1pdflbu", "f11589ue"],
    Jwef8y: "f9ql6rf",
    Bgoe8wy: "f1s2uweq",
    Bwzppfd: ["fr80ssc", "fecsdlb"],
    oetu4i: "f1ukrpxl",
    gg5e9n: ["fecsdlb", "fr80ssc"],
    iro3zm: "f3h1zc4",
    b661bw: "f1h0usnq",
    Bk6r4ia: ["fs4ktlq", "fx2bmrt"],
    B9zn80p: "f16h9ulv",
    Bpld233: ["fx2bmrt", "fs4ktlq"]
  },
  transparent: {
    De3pzq: "f1c21dwh",
    g2u3we: "f1p3nwhy",
    h3c5rm: ["f11589ue", "f1pdflbu"],
    B9xav0g: "f1q5o8ev",
    zhjwy3: ["f1pdflbu", "f11589ue"],
    Jwef8y: "f9ql6rf",
    Bgoe8wy: "f1s2uweq",
    Bwzppfd: ["fr80ssc", "fecsdlb"],
    oetu4i: "f1ukrpxl",
    gg5e9n: ["fecsdlb", "fr80ssc"],
    iro3zm: "f3h1zc4",
    b661bw: "f1h0usnq",
    Bk6r4ia: ["fs4ktlq", "fx2bmrt"],
    B9zn80p: "f16h9ulv",
    Bpld233: ["fx2bmrt", "fs4ktlq"]
  }
}, {
  d: [".f1bg9a2p{background-color:var(--colorNeutralBackgroundDisabled);}", ".f1jj8ep1{border-top-color:var(--colorNeutralStrokeDisabled);}", ".f15xbau{border-right-color:var(--colorNeutralStrokeDisabled);}", ".fy0fskl{border-left-color:var(--colorNeutralStrokeDisabled);}", ".f4ikngz{border-bottom-color:var(--colorNeutralStrokeDisabled);}", ".f1s2aq7o{color:var(--colorNeutralForegroundDisabled);}", ".fdrzuqr{cursor:not-allowed;}", ".f15x8b5r .fui-Button__icon{color:var(--colorNeutralForegroundDisabled);}", ".f1c21dwh{background-color:var(--colorTransparentBackground);}", ".f1p3nwhy{border-top-color:transparent;}", ".f11589ue{border-right-color:transparent;}", ".f1pdflbu{border-left-color:transparent;}", ".f1q5o8ev{border-bottom-color:transparent;}"],
  h: [".f1falr9n:hover{background-color:var(--colorNeutralBackgroundDisabled);}", ".f12mpcsy:hover{border-top-color:var(--colorNeutralStrokeDisabled);}", ".f1gwvigk:hover{border-right-color:var(--colorNeutralStrokeDisabled);}", ".f18rmfxp:hover{border-left-color:var(--colorNeutralStrokeDisabled);}", ".f1jnshp0:hover{border-bottom-color:var(--colorNeutralStrokeDisabled);}", ".fvgxktp:hover{color:var(--colorNeutralForegroundDisabled);}", ".fphbwmw:hover{cursor:not-allowed;}", ".f19vpps7:hover .fui-Icon-filled{display:none;}", ".fv5swzo:hover .fui-Icon-regular{display:inline;}", ".f1al02dq:hover .fui-Button__icon{color:var(--colorNeutralForegroundDisabled);}", ".f1t6o4dc:hover:active{background-color:var(--colorNeutralBackgroundDisabled);}", ".f10ztigi:hover:active{border-top-color:var(--colorNeutralStrokeDisabled);}", ".f1ft5sdu:hover:active{border-right-color:var(--colorNeutralStrokeDisabled);}", ".f1gzf82w:hover:active{border-left-color:var(--colorNeutralStrokeDisabled);}", ".f12zbtn2:hover:active{border-bottom-color:var(--colorNeutralStrokeDisabled);}", ".fcvwxyo:hover:active{color:var(--colorNeutralForegroundDisabled);}", ".f8w4c43:hover:active{cursor:not-allowed;}", ".f1ol4fw6:hover:active .fui-Icon-filled{display:none;}", ".f1q1lw4e:hover:active .fui-Icon-regular{display:inline;}", ".f1dwjv2g:hover:active .fui-Button__icon{color:var(--colorNeutralForegroundDisabled);}", ".f9ql6rf:hover{background-color:var(--colorTransparentBackground);}", ".f3h1zc4:hover:active{background-color:var(--colorTransparentBackground);}", ".f1s2uweq:hover{border-top-color:transparent;}", ".fr80ssc:hover{border-right-color:transparent;}", ".fecsdlb:hover{border-left-color:transparent;}", ".f1ukrpxl:hover{border-bottom-color:transparent;}", ".f1h0usnq:hover:active{border-top-color:transparent;}", ".fs4ktlq:hover:active{border-right-color:transparent;}", ".fx2bmrt:hover:active{border-left-color:transparent;}", ".f16h9ulv:hover:active{border-bottom-color:transparent;}"],
  m: [["@media (forced-colors: active){.f14ptb23{background-color:ButtonFace;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f9dbb4x{border-top-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f3qs60o{border-right-color:GrayText;}.f5u9ap2{border-left-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fwd1oij{border-bottom-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1cyfu5x{color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f127ot8j .fui-Button__icon{color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f19etb0b:focus{border-top-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f4f984j:focus{border-right-color:GrayText;}.fw441p0:focus{border-left-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f3d22hf:focus{border-bottom-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fj8k9ua:hover{background-color:ButtonFace;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fifrq0d:hover{border-top-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f196mwp7:hover{border-right-color:GrayText;}.fnekfq:hover{border-left-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1l6uprw:hover{border-bottom-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fa9u7a5:hover{color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1m71e0y:hover .fui-Button__icon{color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1xxg0vq:hover:active{background-color:ButtonFace;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f16oldlo:hover:active{border-top-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f17g64ui:hover:active{border-right-color:GrayText;}.fqbrke7:hover:active{border-left-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fjvf891:hover:active{border-bottom-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1efp33f:hover:active{color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1gue8i:hover:active .fui-Button__icon{color:GrayText;}}", {
    m: "(forced-colors: active)"
  }]]
});
const useRootFocusStyles = /* @__PURE__ */ __styles({
  circular: {
    Bw81rd7: 0,
    kdpuga: 0,
    dm238s: 0,
    B6xbmo0: 0,
    B3whbx2: "f1062rbf"
  },
  rounded: {},
  square: {
    Bw81rd7: 0,
    kdpuga: 0,
    dm238s: 0,
    B6xbmo0: 0,
    B3whbx2: "fj0ryk1"
  },
  primary: {
    B8q5s1w: "f17t0x8g",
    Bci5o5g: ["f194v5ow", "fk7jm04"],
    n8qw10: "f1qgg65p",
    Bdrgwmp: ["fk7jm04", "f194v5ow"],
    j6ew2k: ["fhgccpy", "fjo7pq6"],
    he4mth: "f32wu9k",
    Byr4aka: "fu5nqqq",
    lks7q5: ["f13prjl2", "f1nl83rv"],
    Bnan3qt: "f1czftr5",
    k1dn9: ["f1nl83rv", "f13prjl2"],
    Bqsb82s: ["fixhny3", "f18mfu3r"],
    jg1oma: "feygou5"
  },
  small: {
    Bw81rd7: 0,
    kdpuga: 0,
    dm238s: 0,
    B6xbmo0: 0,
    B3whbx2: "fazmxh"
  },
  medium: {},
  large: {
    Bw81rd7: 0,
    kdpuga: 0,
    dm238s: 0,
    B6xbmo0: 0,
    B3whbx2: "f1b6alqh"
  }
}, {
  d: [[".f1062rbf[data-fui-focus-visible]{border-radius:var(--borderRadiusCircular);}", {
    p: -1
  }], [".fj0ryk1[data-fui-focus-visible]{border-radius:var(--borderRadiusNone);}", {
    p: -1
  }], ".f17t0x8g[data-fui-focus-visible]{border-top-color:var(--colorStrokeFocus2);}", ".f194v5ow[data-fui-focus-visible]{border-right-color:var(--colorStrokeFocus2);}", ".fk7jm04[data-fui-focus-visible]{border-left-color:var(--colorStrokeFocus2);}", ".f1qgg65p[data-fui-focus-visible]{border-bottom-color:var(--colorStrokeFocus2);}", ".fhgccpy[data-fui-focus-visible]{box-shadow:var(--shadow2),0 0 0 var(--strokeWidthThin) var(--colorStrokeFocus2) inset,0 0 0 var(--strokeWidthThick) var(--colorNeutralForegroundOnBrand) inset;}", ".fjo7pq6[data-fui-focus-visible]{box-shadow:var(--shadow2),0 0 0 var(--strokeWidthThin) var(--colorStrokeFocus2) inset,0 0 0 var(--strokeWidthThick) var(--colorNeutralForegroundOnBrand) inset;}", ".f32wu9k[data-fui-focus-visible]:hover{box-shadow:var(--shadow2),0 0 0 var(--strokeWidthThin) var(--colorStrokeFocus2) inset;}", ".fu5nqqq[data-fui-focus-visible]:hover{border-top-color:var(--colorStrokeFocus2);}", ".f13prjl2[data-fui-focus-visible]:hover{border-right-color:var(--colorStrokeFocus2);}", ".f1nl83rv[data-fui-focus-visible]:hover{border-left-color:var(--colorStrokeFocus2);}", ".f1czftr5[data-fui-focus-visible]:hover{border-bottom-color:var(--colorStrokeFocus2);}", [".fazmxh[data-fui-focus-visible]{border-radius:var(--borderRadiusSmall);}", {
    p: -1
  }], [".f1b6alqh[data-fui-focus-visible]{border-radius:var(--borderRadiusLarge);}", {
    p: -1
  }]],
  t: ["@supports (-moz-appearance:button){.f18mfu3r[data-fui-focus-visible]{box-shadow:var(--shadow2),0 0 0 calc(var(--strokeWidthThin) + 0.25px) var(--colorStrokeFocus2) inset,0 0 0 var(--strokeWidthThick) var(--colorNeutralForegroundOnBrand) inset;}.fixhny3[data-fui-focus-visible]{box-shadow:var(--shadow2),0 0 0 calc(var(--strokeWidthThin) + 0.25px) var(--colorStrokeFocus2) inset,0 0 0 var(--strokeWidthThick) var(--colorNeutralForegroundOnBrand) inset;}}", "@supports (-moz-appearance:button){.feygou5[data-fui-focus-visible]:hover{box-shadow:var(--shadow2),0 0 0 calc(var(--strokeWidthThin) + 0.25px) var(--colorStrokeFocus2) inset;}}"]
});
const useRootIconOnlyStyles = /* @__PURE__ */ __styles({
  small: {
    Byoj8tv: 0,
    uwmqm3: 0,
    z189sj: 0,
    z8tnut: 0,
    B0ocmuz: "fu97m5z",
    Bf4jedk: "f17fgpbq",
    B2u0y6b: "f1jt17bm"
  },
  medium: {
    Byoj8tv: 0,
    uwmqm3: 0,
    z189sj: 0,
    z8tnut: 0,
    B0ocmuz: "f18ktai2",
    Bf4jedk: "fwbmr0d",
    B2u0y6b: "f44c6la"
  },
  large: {
    Byoj8tv: 0,
    uwmqm3: 0,
    z189sj: 0,
    z8tnut: 0,
    B0ocmuz: "f1hbd1aw",
    Bf4jedk: "f12clzc2",
    B2u0y6b: "fjy1crr"
  }
}, {
  d: [[".fu97m5z{padding:1px;}", {
    p: -1
  }], ".f17fgpbq{min-width:24px;}", ".f1jt17bm{max-width:24px;}", [".f18ktai2{padding:5px;}", {
    p: -1
  }], ".fwbmr0d{min-width:32px;}", ".f44c6la{max-width:32px;}", [".f1hbd1aw{padding:7px;}", {
    p: -1
  }], ".f12clzc2{min-width:40px;}", ".fjy1crr{max-width:40px;}"]
});
const useIconStyles = /* @__PURE__ */ __styles({
  small: {
    Be2twd7: "fe5j1ua",
    Bqenvij: "fjamq6b",
    a9b677: "f64fuq3",
    Bqrlyyl: "fbaiahx"
  },
  medium: {},
  large: {
    Be2twd7: "f1rt2boy",
    Bqenvij: "frvgh55",
    a9b677: "fq4mcun",
    Bqrlyyl: "f1exjqw5"
  },
  before: {
    t21cq0: ["f1nizpg2", "f1a695kz"]
  },
  after: {
    Frg6f3: ["f1a695kz", "f1nizpg2"]
  }
}, {
  d: [".fe5j1ua{font-size:20px;}", ".fjamq6b{height:20px;}", ".f64fuq3{width:20px;}", ".fbaiahx{--fui-Button__icon--spacing:var(--spacingHorizontalXS);}", ".f1rt2boy{font-size:24px;}", ".frvgh55{height:24px;}", ".fq4mcun{width:24px;}", ".f1exjqw5{--fui-Button__icon--spacing:var(--spacingHorizontalSNudge);}", ".f1nizpg2{margin-right:var(--fui-Button__icon--spacing);}", ".f1a695kz{margin-left:var(--fui-Button__icon--spacing);}"]
});
const useButtonStyles_unstable = (state) => {
  "use no memo";
  const rootBaseClassName = useRootBaseClassName$1();
  const iconBaseClassName = useIconBaseClassName();
  const rootStyles = useRootStyles$4();
  const rootDisabledStyles = useRootDisabledStyles();
  const rootFocusStyles = useRootFocusStyles();
  const rootIconOnlyStyles = useRootIconOnlyStyles();
  const iconStyles = useIconStyles();
  const {
    appearance,
    disabled,
    disabledFocusable,
    icon,
    iconOnly,
    iconPosition,
    shape,
    size: size2
  } = state;
  state.root.className = mergeClasses(
    buttonClassNames.root,
    rootBaseClassName,
    appearance && rootStyles[appearance],
    rootStyles[size2],
    icon && size2 === "small" && rootStyles.smallWithIcon,
    icon && size2 === "large" && rootStyles.largeWithIcon,
    rootStyles[shape],
    // Disabled styles
    (disabled || disabledFocusable) && rootDisabledStyles.base,
    (disabled || disabledFocusable) && rootDisabledStyles.highContrast,
    appearance && (disabled || disabledFocusable) && rootDisabledStyles[appearance],
    // Focus styles
    appearance === "primary" && rootFocusStyles.primary,
    rootFocusStyles[size2],
    rootFocusStyles[shape],
    // Icon-only styles
    iconOnly && rootIconOnlyStyles[size2],
    // User provided class name
    state.root.className
  );
  if (state.icon) {
    state.icon.className = mergeClasses(buttonClassNames.icon, iconBaseClassName, !!state.root.children && iconStyles[iconPosition], iconStyles[size2], state.icon.className);
  }
  return state;
};
const Button = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const state = useButton_unstable(props, ref);
  useButtonStyles_unstable(state);
  useCustomStyleHook("useButtonStyles_unstable")(state);
  return renderButton_unstable(state);
});
Button.displayName = "Button";
const FieldContext = reactExports.createContext(void 0);
FieldContext.Provider;
const useFieldContext_unstable = () => reactExports.useContext(FieldContext);
function useFieldControlProps_unstable(props, options) {
  return getFieldControlProps(useFieldContext_unstable(), props, options);
}
function getFieldControlProps(context, props, options) {
  if (!context) {
    return props;
  }
  props = {
    ...props
  };
  const { generatedControlId, hintId, labelFor, labelId, required, validationMessageId, validationState } = context;
  if (generatedControlId) {
    var _props;
    var _id;
    (_id = (_props = props).id) !== null && _id !== void 0 ? _id : _props.id = generatedControlId;
  }
  if (labelId && (!(options === null || options === void 0 ? void 0 : options.supportsLabelFor) || labelFor !== props.id)) {
    var _props1, _arialabelledby;
    var _;
    (_ = (_props1 = props)[_arialabelledby = "aria-labelledby"]) !== null && _ !== void 0 ? _ : _props1[_arialabelledby] = labelId;
  }
  if (validationMessageId || hintId) {
    props["aria-describedby"] = [
      validationMessageId,
      hintId,
      props === null || props === void 0 ? void 0 : props["aria-describedby"]
    ].filter(Boolean).join(" ");
  }
  if (validationState === "error") {
    var _props2, _ariainvalid;
    var _1;
    (_1 = (_props2 = props)[_ariainvalid = "aria-invalid"]) !== null && _1 !== void 0 ? _1 : _props2[_ariainvalid] = true;
  }
  if (required) {
    if (options === null || options === void 0 ? void 0 : options.supportsRequired) {
      var _props3;
      var _required;
      (_required = (_props3 = props).required) !== null && _required !== void 0 ? _required : _props3.required = true;
    } else {
      var _props4, _ariarequired;
      var _2;
      (_2 = (_props4 = props)[_ariarequired = "aria-required"]) !== null && _2 !== void 0 ? _2 : _props4[_ariarequired] = true;
    }
  }
  if (options === null || options === void 0 ? void 0 : options.supportsSize) {
    var _props5;
    var _size;
    (_size = (_props5 = props).size) !== null && _size !== void 0 ? _size : _props5.size = context.size;
  }
  return props;
}
const useLabel_unstable = (props, ref) => {
  const { disabled = false, required = false, weight = "regular", size: size2 = "medium" } = props;
  return {
    disabled,
    required: optional(required === true ? "*" : required || void 0, {
      defaultProps: {
        "aria-hidden": "true"
      },
      elementType: "span"
    }),
    weight,
    size: size2,
    components: {
      root: "label",
      required: "span"
    },
    root: always(getIntrinsicElementProps("label", {
      // FIXME:
      // `ref` is wrongly assigned to be `HTMLElement` instead of `HTMLLabelElement`
      // but since it would be a breaking change to fix it, we are casting ref to it's proper type
      ref,
      ...props
    }), {
      elementType: "label"
    })
  };
};
const renderLabel_unstable = (state) => {
  return /* @__PURE__ */ jsxs(state.root, {
    children: [
      state.root.children,
      state.required && /* @__PURE__ */ jsx(state.required, {})
    ]
  });
};
const labelClassNames = {
  root: "fui-Label",
  required: "fui-Label__required"
};
const useStyles$9 = /* @__PURE__ */ __styles({
  root: {
    Bahqtrf: "fk6fouc",
    sj55zd: "f19n0e5"
  },
  disabled: {
    sj55zd: "f1s2aq7o",
    B7iucu3: "f1cyfu5x"
  },
  required: {
    sj55zd: "f1whyuy6",
    uwmqm3: ["fruq291", "f7x41pl"]
  },
  small: {
    Be2twd7: "fy9rknc",
    Bg96gwp: "fwrc4pm"
  },
  medium: {
    Be2twd7: "fkhj508",
    Bg96gwp: "f1i3iumi"
  },
  large: {
    Be2twd7: "fod5ikn",
    Bg96gwp: "faaz57k",
    Bhrd7zp: "fl43uef"
  },
  semibold: {
    Bhrd7zp: "fl43uef"
  }
}, {
  d: [".fk6fouc{font-family:var(--fontFamilyBase);}", ".f19n0e5{color:var(--colorNeutralForeground1);}", ".f1s2aq7o{color:var(--colorNeutralForegroundDisabled);}", ".f1whyuy6{color:var(--colorPaletteRedForeground3);}", ".fruq291{padding-left:var(--spacingHorizontalXS);}", ".f7x41pl{padding-right:var(--spacingHorizontalXS);}", ".fy9rknc{font-size:var(--fontSizeBase200);}", ".fwrc4pm{line-height:var(--lineHeightBase200);}", ".fkhj508{font-size:var(--fontSizeBase300);}", ".f1i3iumi{line-height:var(--lineHeightBase300);}", ".fod5ikn{font-size:var(--fontSizeBase400);}", ".faaz57k{line-height:var(--lineHeightBase400);}", ".fl43uef{font-weight:var(--fontWeightSemibold);}"],
  m: [["@media (forced-colors: active){.f1cyfu5x{color:GrayText;}}", {
    m: "(forced-colors: active)"
  }]]
});
const useLabelStyles_unstable = (state) => {
  "use no memo";
  const styles = useStyles$9();
  state.root.className = mergeClasses(labelClassNames.root, styles.root, state.disabled && styles.disabled, styles[state.size], state.weight === "semibold" && styles.semibold, state.root.className);
  if (state.required) {
    state.required.className = mergeClasses(labelClassNames.required, styles.required, state.disabled && styles.disabled, state.required.className);
  }
  return state;
};
const Label = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const state = useLabel_unstable(props, ref);
  useLabelStyles_unstable(state);
  useCustomStyleHook("useLabelStyles_unstable")(state);
  return renderLabel_unstable(state);
});
Label.displayName = "Label";
const useInput_unstable = (props, ref) => {
  props = useFieldControlProps_unstable(props, {
    supportsLabelFor: true,
    supportsRequired: true,
    supportsSize: true
  });
  const overrides = useOverrides();
  var _overrides_inputDefaultAppearance;
  const { size: size2 = "medium", appearance = (_overrides_inputDefaultAppearance = overrides.inputDefaultAppearance) !== null && _overrides_inputDefaultAppearance !== void 0 ? _overrides_inputDefaultAppearance : "outline", onChange } = props;
  const [value, setValue] = useControllableState({
    state: props.value,
    defaultState: props.defaultValue,
    initialState: ""
  });
  const nativeProps = getPartitionedNativeProps({
    props,
    primarySlotTagName: "input",
    excludedPropNames: [
      "size",
      "onChange",
      "value",
      "defaultValue"
    ]
  });
  const state = {
    size: size2,
    appearance,
    components: {
      root: "span",
      input: "input",
      contentBefore: "span",
      contentAfter: "span"
    },
    input: always(props.input, {
      defaultProps: {
        type: "text",
        ref,
        ...nativeProps.primary
      },
      elementType: "input"
    }),
    contentAfter: optional(props.contentAfter, {
      elementType: "span"
    }),
    contentBefore: optional(props.contentBefore, {
      elementType: "span"
    }),
    root: always(props.root, {
      defaultProps: nativeProps.root,
      elementType: "span"
    })
  };
  state.input.value = value;
  state.input.onChange = useEventCallback((ev) => {
    const newValue = ev.target.value;
    onChange === null || onChange === void 0 ? void 0 : onChange(ev, {
      value: newValue
    });
    setValue(newValue);
  });
  return state;
};
const renderInput_unstable = (state) => {
  return /* @__PURE__ */ jsxs(state.root, {
    children: [
      state.contentBefore && /* @__PURE__ */ jsx(state.contentBefore, {}),
      /* @__PURE__ */ jsx(state.input, {}),
      state.contentAfter && /* @__PURE__ */ jsx(state.contentAfter, {})
    ]
  });
};
const inputClassNames = {
  root: "fui-Input",
  input: "fui-Input__input",
  contentBefore: "fui-Input__contentBefore",
  contentAfter: "fui-Input__contentAfter"
};
const useRootClassName = /* @__PURE__ */ __resetStyles("r1oeeo9n", "r9sxh5", {
  r: [".r1oeeo9n{display:inline-flex;align-items:center;flex-wrap:nowrap;gap:var(--spacingHorizontalXXS);border-radius:var(--borderRadiusMedium);position:relative;box-sizing:border-box;vertical-align:middle;min-height:32px;font-family:var(--fontFamilyBase);font-size:var(--fontSizeBase300);font-weight:var(--fontWeightRegular);line-height:var(--lineHeightBase300);background-color:var(--colorNeutralBackground1);border:1px solid var(--colorNeutralStroke1);border-bottom-color:var(--colorNeutralStrokeAccessible);}", '.r1oeeo9n::after{box-sizing:border-box;content:"";position:absolute;left:-1px;bottom:-1px;right:-1px;height:max(2px, var(--borderRadiusMedium));border-bottom-left-radius:var(--borderRadiusMedium);border-bottom-right-radius:var(--borderRadiusMedium);border-bottom:2px solid var(--colorCompoundBrandStroke);clip-path:inset(calc(100% - 2px) 0 0 0);transform:scaleX(0);transition-property:transform;transition-duration:var(--durationUltraFast);transition-delay:var(--curveAccelerateMid);}', ".r1oeeo9n:focus-within::after{transform:scaleX(1);transition-property:transform;transition-duration:var(--durationNormal);transition-delay:var(--curveDecelerateMid);}", ".r1oeeo9n:focus-within:active::after{border-bottom-color:var(--colorCompoundBrandStrokePressed);}", ".r1oeeo9n:focus-within{outline:2px solid transparent;}", ".r9sxh5{display:inline-flex;align-items:center;flex-wrap:nowrap;gap:var(--spacingHorizontalXXS);border-radius:var(--borderRadiusMedium);position:relative;box-sizing:border-box;vertical-align:middle;min-height:32px;font-family:var(--fontFamilyBase);font-size:var(--fontSizeBase300);font-weight:var(--fontWeightRegular);line-height:var(--lineHeightBase300);background-color:var(--colorNeutralBackground1);border:1px solid var(--colorNeutralStroke1);border-bottom-color:var(--colorNeutralStrokeAccessible);}", '.r9sxh5::after{box-sizing:border-box;content:"";position:absolute;right:-1px;bottom:-1px;left:-1px;height:max(2px, var(--borderRadiusMedium));border-bottom-right-radius:var(--borderRadiusMedium);border-bottom-left-radius:var(--borderRadiusMedium);border-bottom:2px solid var(--colorCompoundBrandStroke);clip-path:inset(calc(100% - 2px) 0 0 0);transform:scaleX(0);transition-property:transform;transition-duration:var(--durationUltraFast);transition-delay:var(--curveAccelerateMid);}', ".r9sxh5:focus-within::after{transform:scaleX(1);transition-property:transform;transition-duration:var(--durationNormal);transition-delay:var(--curveDecelerateMid);}", ".r9sxh5:focus-within:active::after{border-bottom-color:var(--colorCompoundBrandStrokePressed);}", ".r9sxh5:focus-within{outline:2px solid transparent;}"],
  s: ["@media screen and (prefers-reduced-motion: reduce){.r1oeeo9n::after{transition-duration:0.01ms;transition-delay:0.01ms;}}", "@media screen and (prefers-reduced-motion: reduce){.r1oeeo9n:focus-within::after{transition-duration:0.01ms;transition-delay:0.01ms;}}", "@media screen and (prefers-reduced-motion: reduce){.r9sxh5::after{transition-duration:0.01ms;transition-delay:0.01ms;}}", "@media screen and (prefers-reduced-motion: reduce){.r9sxh5:focus-within::after{transition-duration:0.01ms;transition-delay:0.01ms;}}"]
});
const useRootStyles$3 = /* @__PURE__ */ __styles({
  small: {
    sshi5w: "f1pha7fy",
    Bahqtrf: "fk6fouc",
    Be2twd7: "fy9rknc",
    Bhrd7zp: "figsok6",
    Bg96gwp: "fwrc4pm"
  },
  medium: {},
  large: {
    sshi5w: "f1w5jphr",
    Bahqtrf: "fk6fouc",
    Be2twd7: "fod5ikn",
    Bhrd7zp: "figsok6",
    Bg96gwp: "faaz57k",
    i8kkvl: 0,
    Belr9w4: 0,
    rmohyg: "f1eyhf9v"
  },
  outline: {},
  outlineInteractive: {
    Bgoe8wy: "fvcxoqz",
    Bwzppfd: ["f1ub3y4t", "f1m52nbi"],
    oetu4i: "f1l4zc64",
    gg5e9n: ["f1m52nbi", "f1ub3y4t"],
    Drbcw7: "f8vnjqi",
    udz0bu: ["fz1etlk", "f1hc16gm"],
    Be8ivqh: "f1klwx88",
    ofdepl: ["f1hc16gm", "fz1etlk"]
  },
  underline: {
    De3pzq: "f1c21dwh",
    Beyfa6y: 0,
    Bbmb7ep: 0,
    Btl43ni: 0,
    B7oj6ja: 0,
    Dimara: "fokr779",
    icvyot: "f1ern45e",
    vrafjx: ["f1n71otn", "f1deefiw"],
    wvpqe5: ["f1deefiw", "f1n71otn"],
    Eqx8gd: ["f1n6gb5g", "f15yvnhg"],
    B1piin3: ["f15yvnhg", "f1n6gb5g"]
  },
  underlineInteractive: {
    oetu4i: "f1l4zc64",
    Be8ivqh: "f1klwx88",
    d9w3h3: 0,
    B3778ie: 0,
    B4j8arr: 0,
    Bl18szs: 0,
    Blrzh8d: "f2ale1x"
  },
  filled: {
    g2u3we: "fghlq4f",
    h3c5rm: ["f1gn591s", "fjscplz"],
    B9xav0g: "fb073pr",
    zhjwy3: ["fjscplz", "f1gn591s"]
  },
  filledInteractive: {
    q7v0qe: "ftmjh5b",
    kmh5ft: ["f17blpuu", "fsrcdbj"],
    nagaa4: "f1tpwn32",
    B1yhkcb: ["fsrcdbj", "f17blpuu"]
  },
  invalid: {
    tvckwq: "fs4k3qj",
    gk2u95: ["fcee079", "fmyw78r"],
    hhx65j: "f1fgmyf4",
    Bxowmz0: ["fmyw78r", "fcee079"]
  },
  "filled-darker": {
    De3pzq: "f16xq7d1"
  },
  "filled-lighter": {
    De3pzq: "fxugw4r"
  },
  "filled-darker-shadow": {
    De3pzq: "f16xq7d1",
    E5pizo: "fyed02w"
  },
  "filled-lighter-shadow": {
    De3pzq: "fxugw4r",
    E5pizo: "fyed02w"
  },
  disabled: {
    Bceei9c: "fdrzuqr",
    De3pzq: "f1c21dwh",
    g2u3we: "f1jj8ep1",
    h3c5rm: ["f15xbau", "fy0fskl"],
    B9xav0g: "f4ikngz",
    zhjwy3: ["fy0fskl", "f15xbau"],
    Bcq6wej: "f9dbb4x",
    Jcjdmf: ["f3qs60o", "f5u9ap2"],
    sc4o1m: "fwd1oij",
    Bosien3: ["f5u9ap2", "f3qs60o"],
    Bsft5z2: "fhr9occ",
    Bduesf4: "f99w1ws"
  },
  smallWithContentBefore: {
    uwmqm3: ["fk8j09s", "fdw0yi8"]
  },
  smallWithContentAfter: {
    z189sj: ["fdw0yi8", "fk8j09s"]
  },
  mediumWithContentBefore: {
    uwmqm3: ["f1ng84yb", "f11gcy0p"]
  },
  mediumWithContentAfter: {
    z189sj: ["f11gcy0p", "f1ng84yb"]
  },
  largeWithContentBefore: {
    uwmqm3: ["f1uw59to", "fw5db7e"]
  },
  largeWithContentAfter: {
    z189sj: ["fw5db7e", "f1uw59to"]
  }
}, {
  d: [".f1pha7fy{min-height:24px;}", ".fk6fouc{font-family:var(--fontFamilyBase);}", ".fy9rknc{font-size:var(--fontSizeBase200);}", ".figsok6{font-weight:var(--fontWeightRegular);}", ".fwrc4pm{line-height:var(--lineHeightBase200);}", ".f1w5jphr{min-height:40px;}", ".fod5ikn{font-size:var(--fontSizeBase400);}", ".faaz57k{line-height:var(--lineHeightBase400);}", [".f1eyhf9v{gap:var(--spacingHorizontalSNudge);}", {
    p: -1
  }], ".f1c21dwh{background-color:var(--colorTransparentBackground);}", [".fokr779{border-radius:0;}", {
    p: -1
  }], ".f1ern45e{border-top-style:none;}", ".f1n71otn{border-right-style:none;}", ".f1deefiw{border-left-style:none;}", ".f1n6gb5g::after{left:0;}", ".f15yvnhg::after{right:0;}", [".f2ale1x::after{border-radius:0;}", {
    p: -1
  }], ".fghlq4f{border-top-color:var(--colorTransparentStroke);}", ".f1gn591s{border-right-color:var(--colorTransparentStroke);}", ".fjscplz{border-left-color:var(--colorTransparentStroke);}", ".fb073pr{border-bottom-color:var(--colorTransparentStroke);}", ".fs4k3qj:not(:focus-within),.fs4k3qj:hover:not(:focus-within){border-top-color:var(--colorPaletteRedBorder2);}", ".fcee079:not(:focus-within),.fcee079:hover:not(:focus-within){border-right-color:var(--colorPaletteRedBorder2);}", ".fmyw78r:not(:focus-within),.fmyw78r:hover:not(:focus-within){border-left-color:var(--colorPaletteRedBorder2);}", ".f1fgmyf4:not(:focus-within),.f1fgmyf4:hover:not(:focus-within){border-bottom-color:var(--colorPaletteRedBorder2);}", ".f16xq7d1{background-color:var(--colorNeutralBackground3);}", ".fxugw4r{background-color:var(--colorNeutralBackground1);}", ".fyed02w{box-shadow:var(--shadow2);}", ".fdrzuqr{cursor:not-allowed;}", ".f1jj8ep1{border-top-color:var(--colorNeutralStrokeDisabled);}", ".f15xbau{border-right-color:var(--colorNeutralStrokeDisabled);}", ".fy0fskl{border-left-color:var(--colorNeutralStrokeDisabled);}", ".f4ikngz{border-bottom-color:var(--colorNeutralStrokeDisabled);}", ".fhr9occ::after{content:unset;}", ".fk8j09s{padding-left:var(--spacingHorizontalSNudge);}", ".fdw0yi8{padding-right:var(--spacingHorizontalSNudge);}", ".f1ng84yb{padding-left:var(--spacingHorizontalMNudge);}", ".f11gcy0p{padding-right:var(--spacingHorizontalMNudge);}", ".f1uw59to{padding-left:var(--spacingHorizontalM);}", ".fw5db7e{padding-right:var(--spacingHorizontalM);}"],
  h: [".fvcxoqz:hover{border-top-color:var(--colorNeutralStroke1Hover);}", ".f1ub3y4t:hover{border-right-color:var(--colorNeutralStroke1Hover);}", ".f1m52nbi:hover{border-left-color:var(--colorNeutralStroke1Hover);}", ".f1l4zc64:hover{border-bottom-color:var(--colorNeutralStrokeAccessibleHover);}", ".ftmjh5b:hover,.ftmjh5b:focus-within{border-top-color:var(--colorTransparentStrokeInteractive);}", ".f17blpuu:hover,.f17blpuu:focus-within{border-right-color:var(--colorTransparentStrokeInteractive);}", ".fsrcdbj:hover,.fsrcdbj:focus-within{border-left-color:var(--colorTransparentStrokeInteractive);}", ".f1tpwn32:hover,.f1tpwn32:focus-within{border-bottom-color:var(--colorTransparentStrokeInteractive);}"],
  a: [".f8vnjqi:active,.f8vnjqi:focus-within{border-top-color:var(--colorNeutralStroke1Pressed);}", ".fz1etlk:active,.fz1etlk:focus-within{border-right-color:var(--colorNeutralStroke1Pressed);}", ".f1hc16gm:active,.f1hc16gm:focus-within{border-left-color:var(--colorNeutralStroke1Pressed);}", ".f1klwx88:active,.f1klwx88:focus-within{border-bottom-color:var(--colorNeutralStrokeAccessiblePressed);}"],
  m: [["@media (forced-colors: active){.f9dbb4x{border-top-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f3qs60o{border-right-color:GrayText;}.f5u9ap2{border-left-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fwd1oij{border-bottom-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }]],
  w: [".f99w1ws:focus-within{outline-style:none;}"]
});
const useInputClassName = /* @__PURE__ */ __resetStyles("r12stul0", null, [".r12stul0{align-self:stretch;box-sizing:border-box;flex-grow:1;min-width:0;border-style:none;padding:0 var(--spacingHorizontalM);color:var(--colorNeutralForeground1);background-color:transparent;outline-style:none;font-family:inherit;font-size:inherit;font-weight:inherit;line-height:inherit;}", ".r12stul0::-webkit-input-placeholder{color:var(--colorNeutralForeground4);opacity:1;}", ".r12stul0::-moz-placeholder{color:var(--colorNeutralForeground4);opacity:1;}", ".r12stul0::placeholder{color:var(--colorNeutralForeground4);opacity:1;}"]);
const useInputElementStyles = /* @__PURE__ */ __styles({
  small: {
    uwmqm3: ["f1f5gg8d", "f1vdfbxk"],
    z189sj: ["f1vdfbxk", "f1f5gg8d"]
  },
  medium: {},
  large: {
    uwmqm3: ["fnphzt9", "flt1dlf"],
    z189sj: ["flt1dlf", "fnphzt9"]
  },
  smallWithContentBefore: {
    uwmqm3: ["fgiv446", "ffczdla"]
  },
  smallWithContentAfter: {
    z189sj: ["ffczdla", "fgiv446"]
  },
  mediumWithContentBefore: {
    uwmqm3: ["fgiv446", "ffczdla"]
  },
  mediumWithContentAfter: {
    z189sj: ["ffczdla", "fgiv446"]
  },
  largeWithContentBefore: {
    uwmqm3: ["fk8j09s", "fdw0yi8"]
  },
  largeWithContentAfter: {
    z189sj: ["fdw0yi8", "fk8j09s"]
  },
  disabled: {
    sj55zd: "f1s2aq7o",
    De3pzq: "f1c21dwh",
    Bceei9c: "fdrzuqr",
    yvdlaj: "fahhnxm"
  }
}, {
  d: [".f1f5gg8d{padding-left:var(--spacingHorizontalS);}", ".f1vdfbxk{padding-right:var(--spacingHorizontalS);}", ".fnphzt9{padding-left:calc(var(--spacingHorizontalM) + var(--spacingHorizontalSNudge));}", ".flt1dlf{padding-right:calc(var(--spacingHorizontalM) + var(--spacingHorizontalSNudge));}", ".fgiv446{padding-left:var(--spacingHorizontalXXS);}", ".ffczdla{padding-right:var(--spacingHorizontalXXS);}", ".fk8j09s{padding-left:var(--spacingHorizontalSNudge);}", ".fdw0yi8{padding-right:var(--spacingHorizontalSNudge);}", ".f1s2aq7o{color:var(--colorNeutralForegroundDisabled);}", ".f1c21dwh{background-color:var(--colorTransparentBackground);}", ".fdrzuqr{cursor:not-allowed;}", ".fahhnxm::-webkit-input-placeholder{color:var(--colorNeutralForegroundDisabled);}", ".fahhnxm::-moz-placeholder{color:var(--colorNeutralForegroundDisabled);}"]
});
const useContentClassName = /* @__PURE__ */ __resetStyles("r1572tok", null, [".r1572tok{box-sizing:border-box;color:var(--colorNeutralForeground3);display:flex;}", ".r1572tok>svg{font-size:20px;}"]);
const useContentStyles = /* @__PURE__ */ __styles({
  disabled: {
    sj55zd: "f1s2aq7o"
  },
  small: {
    Duoase: "f3qv9w"
  },
  medium: {},
  large: {
    Duoase: "f16u2scb"
  }
}, {
  d: [".f1s2aq7o{color:var(--colorNeutralForegroundDisabled);}", ".f3qv9w>svg{font-size:16px;}", ".f16u2scb>svg{font-size:24px;}"]
});
const useInputStyles_unstable = (state) => {
  "use no memo";
  const {
    size: size2,
    appearance
  } = state;
  const disabled = state.input.disabled;
  const invalid = `${state.input["aria-invalid"]}` === "true";
  const filled = appearance.startsWith("filled");
  const rootStyles = useRootStyles$3();
  const inputStyles = useInputElementStyles();
  const contentStyles = useContentStyles();
  state.root.className = mergeClasses(inputClassNames.root, useRootClassName(), rootStyles[size2], state.contentBefore && rootStyles[`${size2}WithContentBefore`], state.contentAfter && rootStyles[`${size2}WithContentAfter`], rootStyles[appearance], !disabled && appearance === "outline" && rootStyles.outlineInteractive, !disabled && appearance === "underline" && rootStyles.underlineInteractive, !disabled && filled && rootStyles.filledInteractive, filled && rootStyles.filled, !disabled && invalid && rootStyles.invalid, disabled && rootStyles.disabled, state.root.className);
  state.input.className = mergeClasses(inputClassNames.input, useInputClassName(), inputStyles[size2], state.contentBefore && inputStyles[`${size2}WithContentBefore`], state.contentAfter && inputStyles[`${size2}WithContentAfter`], disabled && inputStyles.disabled, state.input.className);
  const contentClasses = [useContentClassName(), disabled && contentStyles.disabled, contentStyles[size2]];
  if (state.contentBefore) {
    state.contentBefore.className = mergeClasses(inputClassNames.contentBefore, ...contentClasses, state.contentBefore.className);
  }
  if (state.contentAfter) {
    state.contentAfter.className = mergeClasses(inputClassNames.contentAfter, ...contentClasses, state.contentAfter.className);
  }
  return state;
};
const Input = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const state = useInput_unstable(props, ref);
  useInputStyles_unstable(state);
  useCustomStyleHook("useInputStyles_unstable")(state);
  return renderInput_unstable(state);
});
Input.displayName = "Input";
const MenuContext = createContext(void 0);
const menuContextDefaultValue = {
  open: false,
  setOpen: () => false,
  checkedValues: {},
  onCheckedValueChange: () => null,
  isSubmenu: false,
  // eslint-disable-next-line @typescript-eslint/no-deprecated
  triggerRef: {
    current: null
  },
  // eslint-disable-next-line @typescript-eslint/no-deprecated
  menuPopoverRef: {
    current: null
  },
  mountNode: null,
  triggerId: "",
  openOnContext: false,
  openOnHover: false,
  hasIcons: false,
  hasCheckmarks: false,
  inline: false,
  persistOnItemClick: false
};
const MenuProvider = MenuContext.Provider;
const useMenuContext_unstable = (selector) => useContextSelector(MenuContext, (ctx = menuContextDefaultValue) => selector(ctx));
const MenuTriggerContext = reactExports.createContext(void 0);
const menuTriggerContextDefaultValue = false;
const MenuTriggerContextProvider = MenuTriggerContext.Provider;
const useMenuTriggerContext_unstable = () => {
  var _React_useContext;
  return (_React_useContext = reactExports.useContext(MenuTriggerContext)) !== null && _React_useContext !== void 0 ? _React_useContext : menuTriggerContextDefaultValue;
};
const MenuListContext = createContext(void 0);
const menuListContextDefaultValue = {
  checkedValues: {},
  setFocusByFirstCharacter: () => null,
  toggleCheckbox: () => null,
  selectRadio: () => null,
  hasIcons: false,
  hasCheckmarks: false
};
const MenuListProvider = MenuListContext.Provider;
const useMenuListContext_unstable = (selector) => useContextSelector(MenuListContext, (ctx = menuListContextDefaultValue) => selector(ctx));
const MENU_ENTER_EVENT = "fuimenuenter";
const useOnMenuMouseEnter = (options) => {
  const { refs, callback, element, disabled } = options;
  const listener = useEventCallback((ev) => {
    const popoverRef = refs[0];
    const someMenuPopover = ev.target;
    var _popoverRef_current;
    const isOutsidePopover = !elementContains((_popoverRef_current = popoverRef.current) !== null && _popoverRef_current !== void 0 ? _popoverRef_current : null, someMenuPopover);
    if (isOutsidePopover && !disabled) {
      callback(ev);
    }
  });
  reactExports.useEffect(() => {
    if (element == null) {
      return;
    }
    if (!disabled) {
      element.addEventListener(MENU_ENTER_EVENT, listener);
    }
    return () => {
      element.removeEventListener(MENU_ENTER_EVENT, listener);
    };
  }, [
    listener,
    element,
    disabled
  ]);
};
const dispatchMenuEnterEvent = (el, nativeEvent) => {
  el.dispatchEvent(new CustomEvent(MENU_ENTER_EVENT, {
    bubbles: true,
    detail: {
      nativeEvent
    }
  }));
};
function useIsSubmenu() {
  const menuContextValue = useMenuContext_unstable((context) => context.isSubmenu);
  const hasMenuListContext = useHasParentContext(MenuListContext);
  return menuContextValue || hasMenuListContext;
}
const useValidateNesting = (componentName) => {
  "use no memo";
  const { targetDocument } = useFluent();
  useMenuContext_unstable((context) => context.triggerRef);
  useMenuContext_unstable((context) => context.inline);
  const ref = reactExports.useRef(null);
  return ref;
};
const MENU_SAFEZONE_TIMEOUT_EVENT = "fuimenusafezonetimeout";
const useOnMenuSafeZoneTimeout = (listener) => {
  const elementRef = reactExports.useRef(null);
  return reactExports.useCallback((element) => {
    var _elementRef_current;
    (_elementRef_current = elementRef.current) === null || _elementRef_current === void 0 ? void 0 : _elementRef_current.removeEventListener(MENU_SAFEZONE_TIMEOUT_EVENT, listener);
    element === null || element === void 0 ? void 0 : element.addEventListener(MENU_SAFEZONE_TIMEOUT_EVENT, listener);
    elementRef.current = element;
  }, [
    listener
  ]);
};
const useStyles$8 = /* @__PURE__ */ __styles({
  root: {
    a9b677: "fjw5fx7",
    Bqenvij: "fd461yt",
    Bcdw1i0: "fd7fpy0",
    Bnnss6s: "fi64zpg"
  },
  rootChecked: {
    Bcdw1i0: "f1022m68",
    Bnnss6s: "fi64zpg"
  }
}, {
  d: [".fjw5fx7{width:16px;}", ".fd461yt{height:16px;}", ".fd7fpy0{visibility:hidden;}", ".fi64zpg{flex-shrink:0;}", ".f1022m68{visibility:visible;}"]
});
const useCheckmarkStyles_unstable = (state) => {
  "use no memo";
  const styles = useStyles$8();
  if (state.checkmark) {
    state.checkmark.className = mergeClasses(styles.root, state.checked && styles.rootChecked, state.checkmark.className);
  }
};
const menuItemClassNames = {
  root: "fui-MenuItem",
  icon: "fui-MenuItem__icon",
  checkmark: "fui-MenuItem__checkmark",
  submenuIndicator: "fui-MenuItem__submenuIndicator",
  content: "fui-MenuItem__content",
  secondaryContent: "fui-MenuItem__secondaryContent",
  subText: "fui-MenuItem__subText"
};
const useRootBaseStyles = /* @__PURE__ */ __resetStyles("rfoezjv", "r8lt3v0", {
  r: [".rfoezjv{border-radius:var(--borderRadiusMedium);position:relative;color:var(--colorNeutralForeground2);background-color:var(--colorNeutralBackground1);padding-right:var(--spacingVerticalSNudge);padding-left:var(--spacingVerticalSNudge);padding-top:var(--spacingVerticalSNudge);padding-bottom:var(--spacingVerticalSNudge);box-sizing:border-box;max-width:290px;min-height:32px;flex-shrink:0;display:flex;align-items:start;font-size:var(--fontSizeBase300);cursor:pointer;gap:4px;-webkit-user-select:none;-moz-user-select:none;user-select:none;}", ".rfoezjv:hover{background-color:var(--colorNeutralBackground1Hover);color:var(--colorNeutralForeground2Hover);}", ".rfoezjv:hover .fui-Icon-filled{display:inline;}", ".rfoezjv:hover .fui-Icon-regular{display:none;}", ".rfoezjv:hover .fui-MenuItem__icon{color:var(--colorNeutralForeground2BrandSelected);}", ".rfoezjv:hover .fui-MenuItem__subText{color:var(--colorNeutralForeground3Hover);}", ".rfoezjv:hover:active{background-color:var(--colorNeutralBackground1Pressed);color:var(--colorNeutralForeground2Pressed);}", ".rfoezjv:hover:active .fui-MenuItem__subText{color:var(--colorNeutralForeground3Pressed);}", ".rfoezjv:focus{outline-style:none;}", ".rfoezjv:focus-visible{outline-style:none;}", ".rfoezjv[data-fui-focus-visible]{border-top-color:transparent;border-right-color:transparent;border-bottom-color:transparent;border-left-color:transparent;}", '.rfoezjv[data-fui-focus-visible]::after{content:"";position:absolute;pointer-events:none;z-index:1;border:2px solid var(--colorStrokeFocus2);border-radius:var(--borderRadiusMedium);top:calc(2px * -1);right:calc(2px * -1);bottom:calc(2px * -1);left:calc(2px * -1);}', ".r8lt3v0{border-radius:var(--borderRadiusMedium);position:relative;color:var(--colorNeutralForeground2);background-color:var(--colorNeutralBackground1);padding-left:var(--spacingVerticalSNudge);padding-right:var(--spacingVerticalSNudge);padding-top:var(--spacingVerticalSNudge);padding-bottom:var(--spacingVerticalSNudge);box-sizing:border-box;max-width:290px;min-height:32px;flex-shrink:0;display:flex;align-items:start;font-size:var(--fontSizeBase300);cursor:pointer;gap:4px;-webkit-user-select:none;-moz-user-select:none;user-select:none;}", ".r8lt3v0:hover{background-color:var(--colorNeutralBackground1Hover);color:var(--colorNeutralForeground2Hover);}", ".r8lt3v0:hover .fui-Icon-filled{display:inline;}", ".r8lt3v0:hover .fui-Icon-regular{display:none;}", ".r8lt3v0:hover .fui-MenuItem__icon{color:var(--colorNeutralForeground2BrandSelected);}", ".r8lt3v0:hover .fui-MenuItem__subText{color:var(--colorNeutralForeground3Hover);}", ".r8lt3v0:hover:active{background-color:var(--colorNeutralBackground1Pressed);color:var(--colorNeutralForeground2Pressed);}", ".r8lt3v0:hover:active .fui-MenuItem__subText{color:var(--colorNeutralForeground3Pressed);}", ".r8lt3v0:focus{outline-style:none;}", ".r8lt3v0:focus-visible{outline-style:none;}", ".r8lt3v0[data-fui-focus-visible]{border-top-color:transparent;border-left-color:transparent;border-bottom-color:transparent;border-right-color:transparent;}", '.r8lt3v0[data-fui-focus-visible]::after{content:"";position:absolute;pointer-events:none;z-index:1;border:2px solid var(--colorStrokeFocus2);border-radius:var(--borderRadiusMedium);top:calc(2px * -1);left:calc(2px * -1);bottom:calc(2px * -1);right:calc(2px * -1);}'],
  s: ['@media (forced-colors: active){.rfoezjv:hover{background-color:Canvas;border-color:Highlight;color:Highlight;}.rfoezjv:focus{outline-style:none;}.rfoezjv:focus-visible{outline-style:none;}.rfoezjv[data-fui-focus-visible]{border-top-color:transparent;border-right-color:transparent;border-bottom-color:transparent;border-left-color:transparent;}@media (forced-colors: active){.rfoezjv[data-fui-focus-visible]::after{border-top-color:Highlight;border-right-color:Highlight;border-bottom-color:Highlight;border-left-color:Highlight;}}.rfoezjv[data-fui-focus-visible]::after{content:"";position:absolute;pointer-events:none;z-index:1;border:2px solid Highlight;border-radius:var(--borderRadiusMedium);top:calc(2px * -1);right:calc(2px * -1);bottom:calc(2px * -1);left:calc(2px * -1);}}', "@media (forced-colors: active){.rfoezjv[data-fui-focus-visible]::after{border-top-color:Highlight;border-right-color:Highlight;border-bottom-color:Highlight;border-left-color:Highlight;}}", '@media (forced-colors: active){.r8lt3v0:hover{background-color:Canvas;border-color:Highlight;color:Highlight;}.r8lt3v0:focus{outline-style:none;}.r8lt3v0:focus-visible{outline-style:none;}.r8lt3v0[data-fui-focus-visible]{border-top-color:transparent;border-left-color:transparent;border-bottom-color:transparent;border-right-color:transparent;}@media (forced-colors: active){.r8lt3v0[data-fui-focus-visible]::after{border-top-color:Highlight;border-left-color:Highlight;border-bottom-color:Highlight;border-right-color:Highlight;}}.r8lt3v0[data-fui-focus-visible]::after{content:"";position:absolute;pointer-events:none;z-index:1;border:2px solid Highlight;border-radius:var(--borderRadiusMedium);top:calc(2px * -1);left:calc(2px * -1);bottom:calc(2px * -1);right:calc(2px * -1);}}', "@media (forced-colors: active){.r8lt3v0[data-fui-focus-visible]::after{border-top-color:Highlight;border-left-color:Highlight;border-bottom-color:Highlight;border-right-color:Highlight;}}"]
});
const useContentBaseStyles = /* @__PURE__ */ __resetStyles("r1ls86vo", "rpbc5dr", [".r1ls86vo{padding-left:2px;padding-right:2px;background-color:transparent;flex-grow:1;}", ".rpbc5dr{padding-right:2px;padding-left:2px;background-color:transparent;flex-grow:1;}"]);
const useSecondaryContentBaseStyles = /* @__PURE__ */ __resetStyles("r12mwwux", "r1ewgu5j", [".r12mwwux{padding-left:2px;padding-right:2px;font-family:var(--fontFamilyBase);font-size:var(--fontSizeBase200);font-weight:var(--fontWeightRegular);line-height:var(--lineHeightBase300);color:var(--colorNeutralForeground3);}", ".r12mwwux:hover{color:var(--colorNeutralForeground3Hover);}", ".r12mwwux:focus{color:var(--colorNeutralForeground3Hover);}", ".r1ewgu5j{padding-right:2px;padding-left:2px;font-family:var(--fontFamilyBase);font-size:var(--fontSizeBase200);font-weight:var(--fontWeightRegular);line-height:var(--lineHeightBase300);color:var(--colorNeutralForeground3);}", ".r1ewgu5j:hover{color:var(--colorNeutralForeground3Hover);}", ".r1ewgu5j:focus{color:var(--colorNeutralForeground3Hover);}"]);
const useIconBaseStyles = /* @__PURE__ */ __resetStyles("ro9koqv", null, [".ro9koqv{width:20px;height:20px;font-size:20px;line-height:0;align-items:center;display:inline-flex;justify-content:center;flex-shrink:0;}"]);
const useSubmenuIndicatorBaseStyles = /* @__PURE__ */ __resetStyles("r9c34qo", null, [".r9c34qo{width:20px;height:20px;font-size:20px;line-height:0;align-items:center;display:inline-flex;justify-content:center;}"]);
const useSubtextBaseStyles = /* @__PURE__ */ __resetStyles("rk2ppru", null, [".rk2ppru{font-family:var(--fontFamilyBase);font-size:var(--fontSizeBase100);font-weight:var(--fontWeightRegular);line-height:var(--lineHeightBase100);color:var(--colorNeutralForeground3);}"]);
const useStyles$7 = /* @__PURE__ */ __styles({
  checkmark: {
    B6of3ja: "fmnzpld"
  },
  splitItemMain: {
    Bh6795r: "fqerorx"
  },
  splitItemTrigger: {
    Btl43ni: ["f1ozlkrg", "f10ostut"],
    Beyfa6y: ["f1deotkl", "f1krrbdw"],
    uwmqm3: ["f1cnd47f", "fhxju0i"],
    Ftih45: "f1wl9k8s",
    Ccq8qp: "f1yn80uh",
    Baz25je: "f68mna0",
    cmx5o7: "f1p5zmk"
  },
  disabled: {
    sj55zd: "f1s2aq7o",
    Bi91k9c: "fvgxktp",
    Jwef8y: "f1ijtazh",
    eoavqd: "fphbwmw",
    Bk3fhr4: "f19vpps7",
    Bmfj8id: "fv5swzo",
    Bg7n49j: "f1q1x1ba",
    c7f7en: "ff3wrqt",
    B2d53fq: "fcvwxyo",
    iro3zm: "f1to34ca",
    Bumww26: "fszh5vc",
    t0hwav: "ft33916",
    B7iucu3: "f1cyfu5x",
    Bahaeuw: "fa9u7a5",
    Bbkh6qg: "f1wzezsb",
    B3ejlan: "f1egomlm",
    B41git9: "f1wf2001",
    Boq1n10: "fied5gk",
    Dcq74g: "f1efp33f",
    rxnm8d: "f1m2zpi7",
    wxluhh: "fei14nx",
    idgcvv: "f12hmwa5",
    j9xr24: "f1hzwxd0"
  }
}, {
  d: [".fmnzpld{margin-top:2px;}", ".fqerorx{flex-grow:1;}", ".f1ozlkrg{border-top-left-radius:0;}", ".f10ostut{border-top-right-radius:0;}", ".f1deotkl{border-bottom-left-radius:0;}", ".f1krrbdw{border-bottom-right-radius:0;}", ".f1cnd47f{padding-left:0;}", ".fhxju0i{padding-right:0;}", '.f1wl9k8s::before{content:"";}', ".f1yn80uh::before{width:var(--strokeWidthThin);}", ".f68mna0::before{height:24px;}", ".f1p5zmk::before{background-color:var(--colorNeutralStroke1);}", ".f1s2aq7o{color:var(--colorNeutralForegroundDisabled);}"],
  h: [".fvgxktp:hover{color:var(--colorNeutralForegroundDisabled);}", ".f1ijtazh:hover{background-color:var(--colorNeutralBackground1);}", ".fphbwmw:hover{cursor:not-allowed;}", ".f19vpps7:hover .fui-Icon-filled{display:none;}", ".fv5swzo:hover .fui-Icon-regular{display:inline;}", ".f1q1x1ba:hover .fui-MenuItem__icon{color:var(--colorNeutralForegroundDisabled);}", ".ff3wrqt:hover .fui-MenuItem__subText{color:var(--colorNeutralForegroundDisabled);}", ".fcvwxyo:hover:active{color:var(--colorNeutralForegroundDisabled);}", ".f1to34ca:hover:active{background-color:var(--colorNeutralBackground1);}", ".fszh5vc:hover:active .fui-MenuItem__subText{color:var(--colorNeutralForegroundDisabled);}"],
  f: [".ft33916:focus{color:var(--colorNeutralForegroundDisabled);}"],
  m: [["@media (forced-colors: active){.f1cyfu5x{color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fa9u7a5:hover{color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1wzezsb:hover{background-color:Canvas;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1egomlm:hover .fui-MenuItem__icon{color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1wf2001:hover .fui-MenuItem__icon{background-color:Canvas;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fied5gk:hover .fui-MenuItem__subText{color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1efp33f:hover:active{color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1m2zpi7:hover:active{background-color:Canvas;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fei14nx:hover:active .fui-MenuItem__subText{color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f12hmwa5:focus{color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1hzwxd0:focus{background-color:Canvas;}}", {
    m: "(forced-colors: active)"
  }]]
});
const useSubTextStyles = /* @__PURE__ */ __styles({
  disabled: {
    sj55zd: "f1s2aq7o",
    B7iucu3: "f1cyfu5x"
  }
}, {
  d: [".f1s2aq7o{color:var(--colorNeutralForegroundDisabled);}"],
  m: [["@media (forced-colors: active){.f1cyfu5x{color:GrayText;}}", {
    m: "(forced-colors: active)"
  }]]
});
const useMultilineStyles = /* @__PURE__ */ __styles({
  content: {
    mc9l5x: "f22iagw",
    Beiy3e4: "f1vx9l62"
  },
  secondaryContent: {
    qb2dma: "f7nlbp4"
  },
  submenuIndicator: {
    qb2dma: "f7nlbp4"
  }
}, {
  d: [".f22iagw{display:flex;}", ".f1vx9l62{flex-direction:column;}", ".f7nlbp4{align-self:center;}"]
});
const useMenuItemStyles_unstable = (state) => {
  "use no memo";
  const styles = useStyles$7();
  const rootBaseStyles = useRootBaseStyles();
  const contentBaseStyles = useContentBaseStyles();
  const secondaryContentBaseStyles = useSecondaryContentBaseStyles();
  const iconBaseStyles = useIconBaseStyles();
  const submenuIndicatorBaseStyles = useSubmenuIndicatorBaseStyles();
  const multilineStyles = useMultilineStyles();
  const subtextBaseStyles = useSubtextBaseStyles();
  const subTextStyles = useSubTextStyles();
  const multiline = !!state.subText;
  state.root.className = mergeClasses(menuItemClassNames.root, rootBaseStyles, state.disabled && styles.disabled, state.root.className);
  if (state.content) {
    state.content.className = mergeClasses(menuItemClassNames.content, contentBaseStyles, state.content.className, multiline && multilineStyles.content);
  }
  if (state.checkmark) {
    state.checkmark.className = mergeClasses(menuItemClassNames.checkmark, styles.checkmark, state.checkmark.className);
  }
  if (state.secondaryContent) {
    state.secondaryContent.className = mergeClasses(menuItemClassNames.secondaryContent, secondaryContentBaseStyles, state.disabled && styles.disabled, state.secondaryContent.className, multiline && multilineStyles.secondaryContent);
  }
  if (state.icon) {
    state.icon.className = mergeClasses(menuItemClassNames.icon, iconBaseStyles, state.icon.className);
  }
  if (state.submenuIndicator) {
    state.submenuIndicator.className = mergeClasses(menuItemClassNames.submenuIndicator, submenuIndicatorBaseStyles, state.submenuIndicator.className, multiline && multilineStyles.submenuIndicator);
  }
  if (state.subText) {
    state.subText.className = mergeClasses(menuItemClassNames.subText, state.disabled && subTextStyles.disabled, state.subText.className, subtextBaseStyles);
  }
  useCheckmarkStyles_unstable(state);
  return state;
};
const submenuFallbackPositions = [
  "after",
  "after-bottom",
  "before-top",
  "before",
  "before-bottom",
  "above"
];
const useMenu_unstable = (props) => {
  const isSubmenu = useIsSubmenu();
  const { hoverDelay = 500, inline = false, hasCheckmarks = false, hasIcons = false, closeOnScroll = false, openOnContext = false, persistOnItemClick = false, openOnHover = isSubmenu, defaultCheckedValues, mountNode = null, safeZone } = props;
  const { targetDocument } = useFluent();
  const triggerId = useId("menu");
  const [contextTarget, setContextTarget] = usePositioningMouseTarget();
  const positioningOptions = {
    position: isSubmenu ? "after" : "below",
    align: isSubmenu ? "top" : "start",
    target: props.openOnContext ? contextTarget : void 0,
    fallbackPositions: isSubmenu ? submenuFallbackPositions : void 0,
    ...resolvePositioningShorthand(props.positioning)
  };
  const children = reactExports.Children.toArray(props.children);
  let menuTrigger = void 0;
  let menuPopover = void 0;
  if (children.length === 2) {
    menuTrigger = children[0];
    menuPopover = children[1];
  } else if (children.length === 1) {
    menuPopover = children[0];
  }
  const { targetRef, containerRef } = usePositioning(positioningOptions);
  const enableSafeZone = safeZone && openOnHover;
  const safeZoneDescriptorRef = reactExports.useRef({
    isInside: false,
    mouseCoordinates: {
      x: 0,
      y: 0
    }
  });
  const safeZoneHandle = useSafeZoneArea({
    disabled: !enableSafeZone,
    timeout: typeof safeZone === "object" ? safeZone.timeout : 300,
    onSafeZoneEnter: (e2) => {
      setOpen(e2, {
        open: true,
        keyboard: false,
        type: "menuSafeZoneMouseEnter",
        event: e2
      });
      safeZoneDescriptorRef.current.isInside = true;
    },
    onSafeZoneLeave: () => {
      safeZoneDescriptorRef.current.isInside = false;
    },
    onSafeZoneMove: (e2) => {
      safeZoneDescriptorRef.current.mouseCoordinates = {
        x: e2.clientX,
        y: e2.clientY
      };
    },
    onSafeZoneTimeout: () => {
      const event = new CustomEvent(MENU_SAFEZONE_TIMEOUT_EVENT);
      setOpen(event, {
        open: false,
        keyboard: false,
        type: "menuSafeZoneTimeout",
        event
      });
      if (safeZoneDescriptorRef.current.isInside && targetDocument) {
        const elementsInPoint = targetDocument.elementsFromPoint(safeZoneDescriptorRef.current.mouseCoordinates.x, safeZoneDescriptorRef.current.mouseCoordinates.y);
        const menuItemEl = elementsInPoint.find((el) => {
          return el.classList.contains(menuItemClassNames.root);
        });
        menuItemEl === null || menuItemEl === void 0 ? void 0 : menuItemEl.dispatchEvent(event);
      }
    }
  });
  const triggerRef = useMergedRefs(targetRef, safeZoneHandle.targetRef);
  const menuPopoverRef = useMergedRefs(containerRef, safeZoneHandle.containerRef);
  const [open, setOpen] = useMenuOpenState({
    hoverDelay,
    isSubmenu,
    setContextTarget,
    closeOnScroll,
    menuPopoverRef,
    triggerRef,
    open: props.open,
    defaultOpen: props.defaultOpen,
    onOpenChange: props.onOpenChange,
    openOnContext
  });
  const [checkedValues, onCheckedValueChange] = useMenuSelectableState({
    checkedValues: props.checkedValues,
    defaultCheckedValues,
    onCheckedValueChange: props.onCheckedValueChange
  });
  return {
    inline,
    hoverDelay,
    triggerId,
    isSubmenu,
    openOnHover,
    contextTarget,
    setContextTarget,
    hasCheckmarks,
    hasIcons,
    closeOnScroll,
    menuTrigger,
    menuPopover,
    mountNode,
    triggerRef,
    menuPopoverRef,
    components: {},
    openOnContext,
    open,
    setOpen,
    checkedValues,
    onCheckedValueChange,
    persistOnItemClick,
    safeZone: safeZoneHandle.elementToRender
  };
};
const useMenuSelectableState = (props) => {
  const [checkedValues, setCheckedValues] = useControllableState({
    state: props.checkedValues,
    defaultState: props.defaultCheckedValues,
    initialState: {}
  });
  const onCheckedValueChange = useEventCallback((e2, { name, checkedItems }) => {
    var _props_onCheckedValueChange;
    (_props_onCheckedValueChange = props.onCheckedValueChange) === null || _props_onCheckedValueChange === void 0 ? void 0 : _props_onCheckedValueChange.call(props, e2, {
      name,
      checkedItems
    });
    setCheckedValues((currentValue) => ({
      ...currentValue,
      [name]: checkedItems
    }));
  });
  return [
    checkedValues,
    onCheckedValueChange
  ];
};
const useMenuOpenState = (state) => {
  "use no memo";
  const { targetDocument } = useFluent();
  const parentSetOpen = useMenuContext_unstable((context) => context.setOpen);
  const onOpenChange = useEventCallback((e2, data) => {
    var _state_onOpenChange;
    return (_state_onOpenChange = state.onOpenChange) === null || _state_onOpenChange === void 0 ? void 0 : _state_onOpenChange.call(state, e2, data);
  });
  const enteringTriggerRef = reactExports.useRef(false);
  const [open, setOpenState] = useControllableState({
    state: state.open,
    defaultState: state.defaultOpen,
    initialState: false
  });
  const trySetOpen = useEventCallback((e2, data) => {
    const event = e2 instanceof CustomEvent && e2.type === MENU_ENTER_EVENT ? e2.detail.nativeEvent : e2;
    onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(event, {
      ...data
    });
    if (data.open && e2.type === "contextmenu") {
      state.setContextTarget(e2);
    }
    if (!data.open) {
      state.setContextTarget(void 0);
    }
    if (data.bubble) {
      parentSetOpen(e2, {
        ...data
      });
    }
    setOpenState(data.open);
  });
  const [setOpenTimeout, clearOpenTimeout] = useTimeout();
  const setOpen = useEventCallback((e2, data) => {
    clearOpenTimeout();
    if (!(e2 instanceof Event) && e2.persist) {
      e2.persist();
    }
    const shouldUseDelay = !data.ignoreHoverDelay && (e2.type === "mouseleave" || e2.type === "mouseover" || e2.type === "mousemove" || e2.type === MENU_ENTER_EVENT);
    if (shouldUseDelay) {
      var _state_triggerRef_current;
      if ((_state_triggerRef_current = state.triggerRef.current) === null || _state_triggerRef_current === void 0 ? void 0 : _state_triggerRef_current.contains(e2.target)) {
        enteringTriggerRef.current = e2.type === "mouseover" || e2.type === "mousemove";
      }
      setOpenTimeout(() => trySetOpen(e2, data), state.hoverDelay);
    } else {
      trySetOpen(e2, data);
    }
  });
  useOnClickOutside({
    contains: elementContains,
    disabled: !open,
    element: targetDocument,
    refs: [
      state.menuPopoverRef,
      !state.openOnContext && state.triggerRef
    ].filter(Boolean),
    callback: (event) => setOpen(event, {
      open: false,
      type: "clickOutside",
      event
    })
  });
  const closeOnScroll = state.openOnContext || state.closeOnScroll;
  useOnScrollOutside({
    contains: elementContains,
    element: targetDocument,
    callback: (event) => setOpen(event, {
      open: false,
      type: "scrollOutside",
      event
    }),
    refs: [
      state.menuPopoverRef,
      !state.openOnContext && state.triggerRef
    ].filter(Boolean),
    disabled: !open || !closeOnScroll
  });
  useOnMenuMouseEnter({
    element: targetDocument,
    callback: (event) => {
      if (!enteringTriggerRef.current) {
        setOpen(event, {
          open: false,
          type: "menuMouseEnter",
          event
        });
      }
    },
    disabled: !open,
    refs: [
      state.menuPopoverRef
    ]
  });
  const { findFirstFocusable } = useFocusFinders();
  const focusFirst = reactExports.useCallback(() => {
    const firstFocusable = findFirstFocusable(state.menuPopoverRef.current);
    firstFocusable === null || firstFocusable === void 0 ? void 0 : firstFocusable.focus();
  }, [
    findFirstFocusable,
    state.menuPopoverRef
  ]);
  const firstMount = useFirstMount();
  reactExports.useEffect(() => {
    if (open) {
      focusFirst();
    } else {
      if (!firstMount) {
        if ((targetDocument === null || targetDocument === void 0 ? void 0 : targetDocument.activeElement) === (targetDocument === null || targetDocument === void 0 ? void 0 : targetDocument.body)) {
          var _state_triggerRef_current;
          (_state_triggerRef_current = state.triggerRef.current) === null || _state_triggerRef_current === void 0 ? void 0 : _state_triggerRef_current.focus();
        }
      }
    }
  }, [
    state.triggerRef,
    state.isSubmenu,
    open,
    focusFirst,
    targetDocument,
    state.menuPopoverRef
  ]);
  return [
    open,
    setOpen
  ];
};
function useMenuContextValues_unstable(state) {
  const { checkedValues, hasCheckmarks, hasIcons, inline, isSubmenu, menuPopoverRef, mountNode, onCheckedValueChange, open, openOnContext, openOnHover, persistOnItemClick, safeZone, setOpen, triggerId, triggerRef } = state;
  const menu = {
    checkedValues,
    hasCheckmarks,
    hasIcons,
    inline,
    isSubmenu,
    menuPopoverRef,
    mountNode,
    onCheckedValueChange,
    open,
    openOnContext,
    openOnHover,
    persistOnItemClick,
    safeZone,
    setOpen,
    triggerId,
    triggerRef
  };
  return {
    menu
  };
}
const renderMenu_unstable = (state, contextValues) => {
  return /* @__PURE__ */ reactExports.createElement(MenuProvider, {
    value: contextValues.menu
  }, state.menuTrigger, state.open && state.menuPopover);
};
const Menu = (props) => {
  const state = useMenu_unstable(props);
  const contextValues = useMenuContextValues_unstable(state);
  return renderMenu_unstable(state, contextValues);
};
Menu.displayName = "Menu";
const useCharacterSearch = (state, ref) => {
  "use no memo";
  const setFocusByFirstCharacter = useMenuListContext_unstable((context) => context.setFocusByFirstCharacter);
  const { onKeyDown: originalOnKeyDown } = state.root;
  state.root.onKeyDown = (e2) => {
    var _e_key;
    originalOnKeyDown === null || originalOnKeyDown === void 0 ? void 0 : originalOnKeyDown(e2);
    if (((_e_key = e2.key) === null || _e_key === void 0 ? void 0 : _e_key.length) > 1) {
      return;
    }
    if (ref.current) {
      setFocusByFirstCharacter === null || setFocusByFirstCharacter === void 0 ? void 0 : setFocusByFirstCharacter(e2, ref.current);
    }
  };
  return state;
};
const MenuSplitGroupContext = reactExports.createContext(void 0);
const menuSplitGroupContextDefaultValue = {
  setMultiline: () => null
};
MenuSplitGroupContext.Provider;
const useMenuSplitGroupContext_unstable = () => {
  var _React_useContext;
  return (_React_useContext = reactExports.useContext(MenuSplitGroupContext)) !== null && _React_useContext !== void 0 ? _React_useContext : menuSplitGroupContextDefaultValue;
};
const useIsInMenuSplitGroup = () => {
  const context = useMenuSplitGroupContext_unstable();
  return context !== menuSplitGroupContextDefaultValue;
};
const ChevronRightIcon = bundleIcon(ChevronRightFilled, ChevronRightRegular);
const ChevronLeftIcon = bundleIcon(ChevronLeftFilled, ChevronLeftRegular);
const useMenuItem_unstable = (props, ref) => {
  const isSubmenuTrigger = useMenuTriggerContext_unstable();
  const persistOnClickContext = useMenuContext_unstable((context) => context.persistOnItemClick);
  const { as = "div", disabled = false, hasSubmenu = isSubmenuTrigger, persistOnClick = persistOnClickContext, content: _content, ...rest } = props;
  const { hasIcons, hasCheckmarks } = useIconAndCheckmarkAlignment({
    hasSubmenu
  });
  const setOpen = useMenuContext_unstable((context) => context.setOpen);
  useNotifySplitItemMultiline({
    multiline: !!props.subText,
    hasSubmenu
  });
  const { dir } = useFluent();
  const innerRef = reactExports.useRef(null);
  const dismissedWithKeyboardRef = reactExports.useRef(false);
  const validateNestingRef = useValidateNesting(getValidateNestingComponentName(props.role));
  const state = {
    hasSubmenu,
    disabled,
    persistOnClick,
    components: {
      root: "div",
      icon: "span",
      checkmark: "span",
      submenuIndicator: "span",
      content: "span",
      secondaryContent: "span",
      subText: "span"
    },
    root: always(getIntrinsicElementProps(as, useARIAButtonProps(as, {
      role: "menuitem",
      ...rest,
      disabled: false,
      disabledFocusable: disabled,
      ref: useMergedRefs(ref, innerRef, validateNestingRef),
      onKeyDown: useEventCallback((event) => {
        var _props_onKeyDown;
        (_props_onKeyDown = props.onKeyDown) === null || _props_onKeyDown === void 0 ? void 0 : _props_onKeyDown.call(props, event);
        if (!event.isDefaultPrevented() && (event.key === Space || event.key === Enter)) {
          dismissedWithKeyboardRef.current = true;
        }
      }),
      onMouseMove: useEventCallback((event) => {
        var _props_onMouseMove;
        if (event.currentTarget.ownerDocument.activeElement !== event.currentTarget) {
          var _innerRef_current;
          (_innerRef_current = innerRef.current) === null || _innerRef_current === void 0 ? void 0 : _innerRef_current.focus();
        }
        (_props_onMouseMove = props.onMouseMove) === null || _props_onMouseMove === void 0 ? void 0 : _props_onMouseMove.call(props, event);
      }),
      onClick: useEventCallback((event) => {
        var _props_onClick;
        if (!hasSubmenu && !persistOnClick) {
          setOpen(event, {
            open: false,
            keyboard: dismissedWithKeyboardRef.current,
            bubble: true,
            type: "menuItemClick",
            event
          });
          dismissedWithKeyboardRef.current = false;
        }
        (_props_onClick = props.onClick) === null || _props_onClick === void 0 ? void 0 : _props_onClick.call(props, event);
      })
    })), {
      elementType: "div"
    }),
    icon: optional(props.icon, {
      renderByDefault: hasIcons,
      elementType: "span"
    }),
    checkmark: optional(props.checkmark, {
      renderByDefault: hasCheckmarks,
      elementType: "span"
    }),
    submenuIndicator: optional(props.submenuIndicator, {
      renderByDefault: hasSubmenu,
      defaultProps: {
        children: dir === "ltr" ? /* @__PURE__ */ reactExports.createElement(ChevronRightIcon, null) : /* @__PURE__ */ reactExports.createElement(ChevronLeftIcon, null)
      },
      elementType: "span"
    }),
    content: optional(props.content, {
      renderByDefault: !!props.children,
      defaultProps: {
        children: props.children
      },
      elementType: "span"
    }),
    secondaryContent: optional(props.secondaryContent, {
      elementType: "span"
    }),
    subText: optional(props.subText, {
      elementType: "span"
    })
  };
  useCharacterSearch(state, innerRef);
  return state;
};
const useNotifySplitItemMultiline = (options) => {
  const { hasSubmenu, multiline } = options;
  const isSplitItemTrigger = useIsInMenuSplitGroup() && hasSubmenu;
  const { setMultiline } = useMenuSplitGroupContext_unstable();
  useIsomorphicLayoutEffect(() => {
    if (!isSplitItemTrigger) {
      setMultiline(multiline);
    }
  }, [
    setMultiline,
    multiline,
    isSplitItemTrigger
  ]);
};
const useIconAndCheckmarkAlignment = (options) => {
  const { hasSubmenu } = options;
  const hasIcons = useMenuListContext_unstable((context) => context.hasIcons);
  const hasCheckmarks = useMenuListContext_unstable((context) => context.hasCheckmarks);
  const isSplitItemTrigger = useIsInMenuSplitGroup() && hasSubmenu;
  return {
    hasIcons: hasIcons && !isSplitItemTrigger,
    hasCheckmarks: hasCheckmarks && !isSplitItemTrigger
  };
};
const getValidateNestingComponentName = (role) => {
  switch (role) {
    case "menuitemcheckbox":
      return "MenuItemCheckbox";
    case "menuitemradio":
      return "MenuItemRadio";
  }
  return "MenuItem";
};
const renderMenuItem_unstable = (state) => {
  return /* @__PURE__ */ jsxs(state.root, {
    children: [
      state.checkmark && /* @__PURE__ */ jsx(state.checkmark, {}),
      state.icon && /* @__PURE__ */ jsx(state.icon, {}),
      state.content && /* @__PURE__ */ jsxs(state.content, {
        children: [
          state.content.children,
          state.subText && /* @__PURE__ */ jsx(state.subText, {})
        ]
      }),
      state.secondaryContent && /* @__PURE__ */ jsx(state.secondaryContent, {}),
      state.submenuIndicator && /* @__PURE__ */ jsx(state.submenuIndicator, {})
    ]
  });
};
const MenuItem = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const state = useMenuItem_unstable(props, ref);
  useMenuItemStyles_unstable(state);
  useCustomStyleHook("useMenuItemStyles_unstable")(state);
  return renderMenuItem_unstable(state);
});
MenuItem.displayName = "MenuItem";
const useMenuList_unstable = (props, ref) => {
  const { findAllFocusable } = useFocusFinders();
  const { targetDocument } = useFluent();
  const menuContext = useMenuContextSelectors();
  const hasMenuContext = useHasParentContext(MenuContext);
  const focusAttributes = useArrowNavigationGroup({
    circular: true
  });
  if (usingPropsAndMenuContext(props, menuContext, hasMenuContext)) {
    console.warn("You are using both MenuList and Menu props, we recommend you to use Menu props when available");
  }
  const innerRef = reactExports.useRef(null);
  const validateNestingRef = useValidateNesting();
  reactExports.useEffect(() => {
    const element = innerRef.current;
    if (hasMenuContext && targetDocument && element) {
      const onTabsterMoveFocus = (e2) => {
        const nextElement = e2.detail.next;
        if (nextElement && element.contains(targetDocument.activeElement) && !element.contains(nextElement)) {
          e2.preventDefault();
        }
      };
      targetDocument.addEventListener(TabsterMoveFocusEventName, onTabsterMoveFocus);
      return () => {
        targetDocument.removeEventListener(TabsterMoveFocusEventName, onTabsterMoveFocus);
      };
    }
  }, [
    innerRef,
    targetDocument,
    hasMenuContext
  ]);
  const setFocusByFirstCharacter = reactExports.useCallback((e2, itemEl) => {
    const acceptedRoles = [
      "menuitem",
      "menuitemcheckbox",
      "menuitemradio"
    ];
    if (!innerRef.current) {
      return;
    }
    const menuItems = findAllFocusable(innerRef.current, (el) => el.hasAttribute("role") && acceptedRoles.indexOf(el.getAttribute("role")) !== -1);
    let startIndex = menuItems.indexOf(itemEl) + 1;
    if (startIndex === menuItems.length) {
      startIndex = 0;
    }
    const firstChars = menuItems.map((menuItem) => {
      var _menuItem_textContent;
      return (_menuItem_textContent = menuItem.textContent) === null || _menuItem_textContent === void 0 ? void 0 : _menuItem_textContent.charAt(0).toLowerCase();
    });
    const char = e2.key.toLowerCase();
    const getIndexFirstChars = (start, firstChar) => {
      for (let i = start; i < firstChars.length; i++) {
        if (char === firstChars[i]) {
          return i;
        }
      }
      return -1;
    };
    let index = getIndexFirstChars(startIndex);
    if (index === -1) {
      index = getIndexFirstChars(0);
    }
    if (index > -1) {
      menuItems[index].focus();
    }
  }, [
    findAllFocusable
  ]);
  var _props_checkedValues;
  const [checkedValues, setCheckedValues] = useControllableState({
    state: (_props_checkedValues = props.checkedValues) !== null && _props_checkedValues !== void 0 ? _props_checkedValues : hasMenuContext ? menuContext.checkedValues : void 0,
    defaultState: props.defaultCheckedValues,
    initialState: {}
  });
  var _props_onCheckedValueChange;
  const handleCheckedValueChange = (_props_onCheckedValueChange = props.onCheckedValueChange) !== null && _props_onCheckedValueChange !== void 0 ? _props_onCheckedValueChange : hasMenuContext ? menuContext.onCheckedValueChange : void 0;
  const toggleCheckbox = useEventCallback((e2, name, value, checked) => {
    const checkedItems = (checkedValues === null || checkedValues === void 0 ? void 0 : checkedValues[name]) || [];
    const newCheckedItems = [
      ...checkedItems
    ];
    if (checked) {
      newCheckedItems.splice(newCheckedItems.indexOf(value), 1);
    } else {
      newCheckedItems.push(value);
    }
    handleCheckedValueChange === null || handleCheckedValueChange === void 0 ? void 0 : handleCheckedValueChange(e2, {
      name,
      checkedItems: newCheckedItems
    });
    setCheckedValues((s) => ({
      ...s,
      [name]: newCheckedItems
    }));
  });
  const selectRadio = useEventCallback((e2, name, value) => {
    const newCheckedItems = [
      value
    ];
    setCheckedValues((s) => ({
      ...s,
      [name]: newCheckedItems
    }));
    handleCheckedValueChange === null || handleCheckedValueChange === void 0 ? void 0 : handleCheckedValueChange(e2, {
      name,
      checkedItems: newCheckedItems
    });
  });
  return {
    components: {
      root: "div"
    },
    root: always(getIntrinsicElementProps("div", {
      // FIXME:
      // `ref` is wrongly assigned to be `HTMLElement` instead of `HTMLDivElement`
      // but since it would be a breaking change to fix it, we are casting ref to it's proper type
      ref: useMergedRefs(ref, innerRef, validateNestingRef),
      role: "menu",
      "aria-labelledby": menuContext.triggerId,
      ...focusAttributes,
      ...props
    }), {
      elementType: "div"
    }),
    hasIcons: menuContext.hasIcons || false,
    hasCheckmarks: menuContext.hasCheckmarks || false,
    checkedValues,
    hasMenuContext,
    setFocusByFirstCharacter,
    selectRadio,
    toggleCheckbox
  };
};
const useMenuContextSelectors = () => {
  const checkedValues = useMenuContext_unstable((context) => context.checkedValues);
  const onCheckedValueChange = useMenuContext_unstable((context) => context.onCheckedValueChange);
  const triggerId = useMenuContext_unstable((context) => context.triggerId);
  const hasIcons = useMenuContext_unstable((context) => context.hasIcons);
  const hasCheckmarks = useMenuContext_unstable((context) => context.hasCheckmarks);
  return {
    checkedValues,
    onCheckedValueChange,
    triggerId,
    hasIcons,
    hasCheckmarks
  };
};
const usingPropsAndMenuContext = (props, contextValue, hasMenuContext) => {
  let isUsingPropsAndContext = false;
  for (const val in contextValue) {
    if (props[val]) {
      isUsingPropsAndContext = true;
    }
  }
  return hasMenuContext && isUsingPropsAndContext;
};
const renderMenuList_unstable = (state, contextValues) => {
  return /* @__PURE__ */ jsx(MenuListProvider, {
    value: contextValues.menuList,
    children: /* @__PURE__ */ jsx(state.root, {})
  });
};
function useMenuListContextValues_unstable(state) {
  const { checkedValues, hasCheckmarks, hasIcons, selectRadio, setFocusByFirstCharacter, toggleCheckbox } = state;
  const menuList = {
    checkedValues,
    hasCheckmarks,
    hasIcons,
    selectRadio,
    setFocusByFirstCharacter,
    toggleCheckbox
  };
  return {
    menuList
  };
}
const menuListClassNames = {
  root: "fui-MenuList"
};
const useStyles$6 = /* @__PURE__ */ __styles({
  root: {
    mc9l5x: "f22iagw",
    Beiy3e4: "f1vx9l62",
    i8kkvl: 0,
    Belr9w4: 0,
    rmohyg: "f1t6b6ee"
  },
  hasMenuContext: {
    Bqenvij: "f1l02sjl"
  }
}, {
  d: [".f22iagw{display:flex;}", ".f1vx9l62{flex-direction:column;}", [".f1t6b6ee{gap:2px;}", {
    p: -1
  }], ".f1l02sjl{height:100%;}"]
});
const useMenuListStyles_unstable = (state) => {
  "use no memo";
  const styles = useStyles$6();
  state.root.className = mergeClasses(menuListClassNames.root, styles.root, state.hasMenuContext && styles.hasMenuContext, state.root.className);
  return state;
};
const MenuList = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const state = useMenuList_unstable(props, ref);
  const contextValues = useMenuListContextValues_unstable(state);
  useMenuListStyles_unstable(state);
  useCustomStyleHook("useMenuListStyles_unstable")(state);
  return renderMenuList_unstable(state, contextValues);
});
MenuList.displayName = "MenuList";
const useMenuPopover_unstable = (props, ref) => {
  "use no memo";
  const safeZone = useMenuContext_unstable((context) => context.safeZone);
  const popoverRef = useMenuContext_unstable((context) => context.menuPopoverRef);
  const setOpen = useMenuContext_unstable((context) => context.setOpen);
  const open = useMenuContext_unstable((context) => context.open);
  const openOnHover = useMenuContext_unstable((context) => context.openOnHover);
  const triggerRef = useMenuContext_unstable((context) => context.triggerRef);
  const isSubmenu = useIsSubmenu();
  const canDispatchCustomEventRef = reactExports.useRef(true);
  const restoreFocusSourceAttributes = useRestoreFocusSource();
  const [setThrottleTimeout, clearThrottleTimeout] = useTimeout();
  const { dir } = useFluent();
  const CloseArrowKey = dir === "ltr" ? ArrowLeft : ArrowRight;
  const mouseOverListenerCallbackRef = reactExports.useCallback((node) => {
    if (node) {
      node.addEventListener("mouseover", (e2) => {
        if (canDispatchCustomEventRef.current) {
          canDispatchCustomEventRef.current = false;
          dispatchMenuEnterEvent(popoverRef.current, e2);
          setThrottleTimeout(() => {
            canDispatchCustomEventRef.current = true;
          }, 250);
        }
      });
    }
  }, [
    popoverRef,
    setThrottleTimeout
  ]);
  reactExports.useEffect(() => {
    return () => clearThrottleTimeout();
  }, [
    clearThrottleTimeout
  ]);
  var _useMenuContext_unstable;
  const inline = (_useMenuContext_unstable = useMenuContext_unstable((context) => context.inline)) !== null && _useMenuContext_unstable !== void 0 ? _useMenuContext_unstable : false;
  const mountNode = useMenuContext_unstable((context) => context.mountNode);
  const rootProps = always(getIntrinsicElementProps("div", {
    role: "presentation",
    ...restoreFocusSourceAttributes,
    ...props,
    // FIXME:
    // `ref` is wrongly assigned to be `HTMLElement` instead of `HTMLDivElement`
    // but since it would be a breaking change to fix it, we are casting ref to it's proper type
    ref: useMergedRefs(ref, popoverRef, mouseOverListenerCallbackRef)
  }), {
    elementType: "div"
  });
  const { onMouseEnter: onMouseEnterOriginal, onKeyDown: onKeyDownOriginal } = rootProps;
  rootProps.onMouseEnter = useEventCallback((event) => {
    if (openOnHover || isSubmenu) {
      setOpen(event, {
        open: true,
        keyboard: false,
        type: "menuPopoverMouseEnter",
        event
      });
    }
    onMouseEnterOriginal === null || onMouseEnterOriginal === void 0 ? void 0 : onMouseEnterOriginal(event);
  });
  rootProps.onKeyDown = useEventCallback((event) => {
    const key = event.key;
    if (key === Escape || isSubmenu && key === CloseArrowKey) {
      var _popoverRef_current;
      if (open && ((_popoverRef_current = popoverRef.current) === null || _popoverRef_current === void 0 ? void 0 : _popoverRef_current.contains(event.target)) && !event.isDefaultPrevented()) {
        setOpen(event, {
          open: false,
          keyboard: true,
          type: "menuPopoverKeyDown",
          event
        });
        event.preventDefault();
      }
    }
    if (key === Tab) {
      setOpen(event, {
        open: false,
        keyboard: true,
        type: "menuPopoverKeyDown",
        event
      });
      if (!isSubmenu) {
        var _triggerRef_current;
        (_triggerRef_current = triggerRef.current) === null || _triggerRef_current === void 0 ? void 0 : _triggerRef_current.focus();
      }
    }
    onKeyDownOriginal === null || onKeyDownOriginal === void 0 ? void 0 : onKeyDownOriginal(event);
  });
  return {
    inline,
    mountNode,
    safeZone,
    components: {
      root: "div"
    },
    root: rootProps
  };
};
const menuPopoverClassNames = {
  root: "fui-MenuPopover"
};
const useStyles$5 = /* @__PURE__ */ __styles({
  root: {
    Beyfa6y: 0,
    Bbmb7ep: 0,
    Btl43ni: 0,
    B7oj6ja: 0,
    Dimara: "ft85np5",
    De3pzq: "fxugw4r",
    sj55zd: "f19n0e5",
    B7ck84d: "f1ewtqcl",
    Bf4jedk: "fl8fusi",
    B2u0y6b: "f1kaai3v",
    B68tc82: "f1p9o1ba",
    a9b677: "f1ahpp82",
    E5pizo: "f1hg901r",
    Byoj8tv: 0,
    uwmqm3: 0,
    z189sj: 0,
    z8tnut: 0,
    B0ocmuz: "fd3pd8h",
    Bgfg5da: 0,
    B9xav0g: 0,
    oivjwe: 0,
    Bn0qgzm: 0,
    B4g9neb: 0,
    zhjwy3: 0,
    wvpqe5: 0,
    ibv6hh: 0,
    u1mtju: 0,
    h3c5rm: 0,
    vrafjx: 0,
    Bekrc4i: 0,
    i8vvqc: 0,
    g2u3we: 0,
    icvyot: 0,
    B4j52fo: 0,
    irswps: "f9ggezi",
    Bahqtrf: "fk6fouc",
    Be2twd7: "fkhj508",
    Bhrd7zp: "figsok6",
    Bg96gwp: "f1i3iumi",
    B93otf3: "f18k4bn6",
    vin17d: "fo1kyvf",
    Ezkn3b: "fetxo7e",
    nyiy2g: "f8x1vz1",
    swvrvq: "f8g0anz",
    Bkovbt3: "fezwn9i",
    hgjdhn: "fz5efge",
    fsy9dk: "f1ydixl4",
    B3ogreh: "f8dgqj5",
    jv49x5: "fnyfnr8",
    Bk7o48c: "fgw77r4",
    Bv12yb3: "f1noc5he",
    i09l9u: "f1k46bua",
    Bcrj8ia: "f1lhuzxm",
    Bmmhre5: "f1f9qikc"
  }
}, {
  d: [[".ft85np5{border-radius:var(--borderRadiusMedium);}", {
    p: -1
  }], ".fxugw4r{background-color:var(--colorNeutralBackground1);}", ".f19n0e5{color:var(--colorNeutralForeground1);}", ".f1ewtqcl{box-sizing:border-box;}", ".fl8fusi{min-width:138px;}", ".f1kaai3v{max-width:300px;}", ".f1p9o1ba{overflow-x:hidden;}", ".f1ahpp82{width:max-content;}", ".f1hg901r{box-shadow:var(--shadow16);}", [".fd3pd8h{padding:4px;}", {
    p: -1
  }], [".f9ggezi{border:1px solid var(--colorTransparentStroke);}", {
    p: -2
  }], ".fk6fouc{font-family:var(--fontFamilyBase);}", ".fkhj508{font-size:var(--fontSizeBase300);}", ".figsok6{font-weight:var(--fontWeightRegular);}", ".f1i3iumi{line-height:var(--lineHeightBase300);}", ".f18k4bn6{animation-composition:accumulate;}", ".fo1kyvf{animation-duration:var(--durationSlower);}", ".fetxo7e{animation-timing-function:var(--curveDecelerateMid);}", ".f8x1vz1{--fui-positioning-slide-distance-x:0px;}", ".f8g0anz{--fui-positioning-slide-distance-y:10px;}", ".fezwn9i[data-popper-placement^=right]{--fui-positioning-slide-distance-x:-10px;}", ".fz5efge[data-popper-placement^=right]{--fui-positioning-slide-distance-y:0px;}", ".f1ydixl4[data-popper-placement^=bottom]{--fui-positioning-slide-distance-x:0px;}", ".f8dgqj5[data-popper-placement^=bottom]{--fui-positioning-slide-distance-y:-10px;}", ".fnyfnr8[data-popper-placement^=left]{--fui-positioning-slide-distance-x:10px;}", ".fgw77r4[data-popper-placement^=left]{--fui-positioning-slide-distance-y:0px;}", ".f1noc5he{animation-name:f1m0q9mo,f79suad;}"],
  k: ["@keyframes f1m0q9mo{from{opacity:-1;}to{opacity:0;}}", "@keyframes f79suad{from{transform:translate(var(--fui-positioning-slide-distance-x), var(--fui-positioning-slide-distance-y));}}"],
  m: [["@media (prefers-reduced-motion){.f1k46bua[data-popper-placement]{animation-duration:1ms;}}", {
    m: "(prefers-reduced-motion)"
  }], ["@media (prefers-reduced-motion){.f1lhuzxm[data-popper-placement]{animation-name:f1m0q9mo;}}", {
    m: "(prefers-reduced-motion)"
  }]],
  t: ["@supports not (animation-composition: accumulate){.f1f9qikc[data-popper-placement]{animation-name:f1m0q9mo;}}"]
});
const useMenuPopoverStyles_unstable = (state) => {
  "use no memo";
  const styles = useStyles$5();
  state.root.className = mergeClasses(menuPopoverClassNames.root, styles.root, state.root.className);
  return state;
};
const renderMenuPopover_unstable = (state) => {
  if (state.inline) {
    return /* @__PURE__ */ jsxs(reactExports.Fragment, {
      children: [
        /* @__PURE__ */ jsx(state.root, {}),
        state.safeZone
      ]
    });
  }
  return /* @__PURE__ */ jsxs(Portal, {
    mountNode: state.mountNode,
    children: [
      /* @__PURE__ */ jsx(state.root, {}),
      state.safeZone
    ]
  });
};
const MenuPopover = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const state = useMenuPopover_unstable(props, ref);
  useMenuPopoverStyles_unstable(state);
  useCustomStyleHook("useMenuPopoverStyles_unstable")(state);
  return renderMenuPopover_unstable(state);
});
MenuPopover.displayName = "MenuPopover";
function noop() {
}
const useMenuTrigger_unstable = (props) => {
  const { children, disableButtonEnhancement = false } = props;
  const triggerRef = useMenuContext_unstable((context) => context.triggerRef);
  const menuPopoverRef = useMenuContext_unstable((context) => context.menuPopoverRef);
  const setOpen = useMenuContext_unstable((context) => context.setOpen);
  const open = useMenuContext_unstable((context) => context.open);
  const triggerId = useMenuContext_unstable((context) => context.triggerId);
  const openOnHover = useMenuContext_unstable((context) => context.openOnHover);
  const openOnContext = useMenuContext_unstable((context) => context.openOnContext);
  const isSubmenu = useIsSubmenu();
  const { findFirstFocusable } = useFocusFinders();
  const focusFirst = reactExports.useCallback(() => {
    const firstFocusable = findFirstFocusable(menuPopoverRef.current);
    firstFocusable === null || firstFocusable === void 0 ? void 0 : firstFocusable.focus();
  }, [
    findFirstFocusable,
    menuPopoverRef
  ]);
  const openedWithKeyboardRef = reactExports.useRef(false);
  const openedViaSafeZoneRef = reactExports.useRef(false);
  const hasMouseMovedRef = reactExports.useRef(false);
  const { dir } = useFluent();
  const OpenArrowKey = dir === "ltr" ? ArrowRight : ArrowLeft;
  const child = getTriggerChild(children);
  const safeZoneHandlerRef = useOnMenuSafeZoneTimeout(useEventCallback(() => {
    if (isSubmenu) {
      openedViaSafeZoneRef.current = true;
    }
  }));
  const onContextMenu = (event) => {
    if (isTargetDisabled(event) || event.isDefaultPrevented()) {
      return;
    }
    if (openOnContext) {
      event.preventDefault();
      setOpen(event, {
        open: true,
        keyboard: false,
        type: "menuTriggerContextMenu",
        event
      });
    }
  };
  const onClick = (event) => {
    if (isTargetDisabled(event)) {
      return;
    }
    if (!openOnContext) {
      setOpen(event, {
        open: !open,
        keyboard: openedWithKeyboardRef.current,
        type: "menuTriggerClick",
        event
      });
      openedWithKeyboardRef.current = false;
    }
  };
  const onKeyDown = (event) => {
    if (isTargetDisabled(event) || event.isDefaultPrevented()) {
      return;
    }
    const key = event.key;
    if (!openOnContext && (isSubmenu && key === OpenArrowKey || !isSubmenu && key === ArrowDown)) {
      setOpen(event, {
        open: true,
        keyboard: true,
        type: "menuTriggerKeyDown",
        event
      });
    }
    if (key === Escape && !isSubmenu) {
      setOpen(event, {
        open: false,
        keyboard: true,
        type: "menuTriggerKeyDown",
        event
      });
    }
    if (open && key === OpenArrowKey && isSubmenu) {
      focusFirst();
    }
  };
  const onMouseOver = (event) => {
    if (isTargetDisabled(event)) {
      return;
    }
    if (openOnHover) {
      if (hasMouseMovedRef.current) {
        setOpen(event, {
          open: true,
          keyboard: false,
          type: "menuTriggerMouseEnter",
          event
        });
      } else if (openedViaSafeZoneRef.current) {
        setOpen(event, {
          open: true,
          keyboard: false,
          ignoreHoverDelay: true,
          type: "menuTriggerMouseEnter",
          event
        });
        openedViaSafeZoneRef.current = false;
      }
    }
  };
  const onMouseMove = (event) => {
    if (isTargetDisabled(event)) {
      return;
    }
    if (openOnHover && !hasMouseMovedRef.current) {
      setOpen(event, {
        open: true,
        keyboard: false,
        type: "menuTriggerMouseMove",
        event
      });
      hasMouseMovedRef.current = true;
    }
  };
  const onMouseLeave = (event) => {
    if (isTargetDisabled(event)) {
      return;
    }
    if (openOnHover) {
      setOpen(event, {
        open: false,
        keyboard: false,
        type: "menuTriggerMouseLeave",
        event
      });
    }
  };
  var _child_props_onMouseEnter;
  const contextMenuProps = {
    id: triggerId,
    ...child === null || child === void 0 ? void 0 : child.props,
    ref: useMergedRefs(triggerRef, getReactElementRef(child), safeZoneHandlerRef),
    onMouseEnter: useEventCallback((_child_props_onMouseEnter = child === null || child === void 0 ? void 0 : child.props.onMouseEnter) !== null && _child_props_onMouseEnter !== void 0 ? _child_props_onMouseEnter : noop),
    onMouseLeave: useEventCallback(mergeCallbacks(child === null || child === void 0 ? void 0 : child.props.onMouseLeave, onMouseLeave)),
    onContextMenu: useEventCallback(mergeCallbacks(child === null || child === void 0 ? void 0 : child.props.onContextMenu, onContextMenu)),
    onMouseMove: useEventCallback(mergeCallbacks(child === null || child === void 0 ? void 0 : child.props.onMouseMove, onMouseMove)),
    onMouseOver: useEventCallback(mergeCallbacks(child === null || child === void 0 ? void 0 : child.props.onMouseOver, onMouseOver))
  };
  const triggerChildProps = {
    "aria-haspopup": "menu",
    "aria-expanded": !open && !isSubmenu ? void 0 : open,
    ...contextMenuProps,
    onClick: useEventCallback(mergeCallbacks(child === null || child === void 0 ? void 0 : child.props.onClick, onClick)),
    onKeyDown: useEventCallback(mergeCallbacks(child === null || child === void 0 ? void 0 : child.props.onKeyDown, onKeyDown))
  };
  const ariaButtonTriggerChildProps = useARIAButtonProps((child === null || child === void 0 ? void 0 : child.type) === "button" || (child === null || child === void 0 ? void 0 : child.type) === "a" ? child.type : "div", triggerChildProps);
  return {
    isSubmenu,
    children: applyTriggerPropsToChildren(children, openOnContext ? contextMenuProps : disableButtonEnhancement ? triggerChildProps : ariaButtonTriggerChildProps)
  };
};
const isTargetDisabled = (event) => {
  const isDisabled = (el) => el.hasAttribute("disabled") || el.hasAttribute("aria-disabled") && el.getAttribute("aria-disabled") === "true";
  if (isHTMLElement$2(event.target) && isDisabled(event.target)) {
    return true;
  }
  return isHTMLElement$2(event.currentTarget) && isDisabled(event.currentTarget);
};
const renderMenuTrigger_unstable = (state) => {
  return /* @__PURE__ */ reactExports.createElement(MenuTriggerContextProvider, {
    value: state.isSubmenu
  }, state.children);
};
const MenuTrigger = (props) => {
  const state = useMenuTrigger_unstable(props);
  return renderMenuTrigger_unstable(state);
};
MenuTrigger.displayName = "MenuTrigger";
MenuTrigger.isFluentTriggerComponent = true;
const SpinnerContext = reactExports.createContext(void 0);
const SpinnerContextDefaultValue = {};
SpinnerContext.Provider;
const useSpinnerContext = () => {
  var _React_useContext;
  return (_React_useContext = reactExports.useContext(SpinnerContext)) !== null && _React_useContext !== void 0 ? _React_useContext : SpinnerContextDefaultValue;
};
const useSpinner_unstable = (props, ref) => {
  const { size: contextSize } = useSpinnerContext();
  const { appearance = "primary", labelPosition = "after", size: size2 = contextSize !== null && contextSize !== void 0 ? contextSize : "medium", delay = 0 } = props;
  const baseId = useId("spinner");
  const { role = "progressbar", ...rest } = props;
  const nativeRoot = always(getIntrinsicElementProps("div", {
    // FIXME:
    // `ref` is wrongly assigned to be `HTMLElement` instead of `HTMLDivElement`
    // but since it would be a breaking change to fix it, we are casting ref to it's proper type
    ref,
    role,
    ...rest
  }, [
    "size"
  ]), {
    elementType: "div"
  });
  const [isShownAfterDelay, setIsShownAfterDelay] = reactExports.useState(false);
  const [setDelayTimeout, clearDelayTimeout] = useTimeout();
  reactExports.useEffect(() => {
    if (delay <= 0) {
      return;
    }
    setDelayTimeout(() => {
      setIsShownAfterDelay(true);
    }, delay);
    return () => {
      clearDelayTimeout();
    };
  }, [
    setDelayTimeout,
    clearDelayTimeout,
    delay
  ]);
  const labelShorthand = optional(props.label, {
    defaultProps: {
      id: baseId
    },
    renderByDefault: false,
    elementType: Label
  });
  const spinnerShortHand = optional(props.spinner, {
    renderByDefault: true,
    elementType: "span"
  });
  if (labelShorthand && nativeRoot && !nativeRoot["aria-labelledby"]) {
    nativeRoot["aria-labelledby"] = labelShorthand.id;
  }
  const state = {
    appearance,
    delay,
    labelPosition,
    size: size2,
    shouldRenderSpinner: !delay || isShownAfterDelay,
    components: {
      root: "div",
      spinner: "span",
      spinnerTail: "span",
      label: Label
    },
    root: nativeRoot,
    spinner: spinnerShortHand,
    spinnerTail: always(props.spinnerTail, {
      elementType: "span"
    }),
    label: labelShorthand
  };
  return state;
};
const renderSpinner_unstable = (state) => {
  const { labelPosition, shouldRenderSpinner } = state;
  return /* @__PURE__ */ jsxs(state.root, {
    children: [
      state.label && shouldRenderSpinner && (labelPosition === "above" || labelPosition === "before") && /* @__PURE__ */ jsx(state.label, {}),
      state.spinner && shouldRenderSpinner && /* @__PURE__ */ jsx(state.spinner, {
        children: state.spinnerTail && /* @__PURE__ */ jsx(state.spinnerTail, {})
      }),
      state.label && shouldRenderSpinner && (labelPosition === "below" || labelPosition === "after") && /* @__PURE__ */ jsx(state.label, {})
    ]
  });
};
const spinnerClassNames = {
  root: "fui-Spinner",
  spinner: "fui-Spinner__spinner",
  spinnerTail: "fui-Spinner__spinnerTail",
  label: "fui-Spinner__label"
};
const useRootBaseClassName = /* @__PURE__ */ __resetStyles("rpp59a7", null, [".rpp59a7{display:flex;align-items:center;justify-content:center;line-height:0;gap:8px;overflow:hidden;min-width:min-content;}"]);
const useRootStyles$2 = /* @__PURE__ */ __styles({
  vertical: {
    Beiy3e4: "f1vx9l62"
  }
}, {
  d: [".f1vx9l62{flex-direction:column;}"]
});
const useSpinnerBaseClassName = /* @__PURE__ */ __resetStyles("rvgcg50", "r15nd2jo", {
  r: [".rvgcg50{position:relative;flex-shrink:0;-webkit-mask-image:radial-gradient(closest-side, transparent calc(100% - var(--fui-Spinner--strokeWidth) - 1px), white calc(100% - var(--fui-Spinner--strokeWidth)) calc(100% - 1px), transparent 100%);mask-image:radial-gradient(closest-side, transparent calc(100% - var(--fui-Spinner--strokeWidth) - 1px), white calc(100% - var(--fui-Spinner--strokeWidth)) calc(100% - 1px), transparent 100%);background-color:var(--colorBrandStroke2Contrast);color:var(--colorBrandStroke1);animation-duration:1.5s;animation-iteration-count:infinite;animation-timing-function:linear;animation-name:rb7n1on;}", "@keyframes rb7n1on{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}", ".r15nd2jo{position:relative;flex-shrink:0;-webkit-mask-image:radial-gradient(closest-side, transparent calc(100% - var(--fui-Spinner--strokeWidth) - 1px), white calc(100% - var(--fui-Spinner--strokeWidth)) calc(100% - 1px), transparent 100%);mask-image:radial-gradient(closest-side, transparent calc(100% - var(--fui-Spinner--strokeWidth) - 1px), white calc(100% - var(--fui-Spinner--strokeWidth)) calc(100% - 1px), transparent 100%);background-color:var(--colorBrandStroke2Contrast);color:var(--colorBrandStroke1);animation-duration:1.5s;animation-iteration-count:infinite;animation-timing-function:linear;animation-name:r1gx3jof;}", "@keyframes r1gx3jof{0%{transform:rotate(0deg);}100%{transform:rotate(-360deg);}}"],
  s: ["@media screen and (forced-colors: active){.rvgcg50{background-color:HighlightText;color:Highlight;forced-color-adjust:none;}}", "@media screen and (prefers-reduced-motion: reduce){.rvgcg50{animation-duration:1.8s;}}", "@media screen and (forced-colors: active){.r15nd2jo{background-color:HighlightText;color:Highlight;forced-color-adjust:none;}}", "@media screen and (prefers-reduced-motion: reduce){.r15nd2jo{animation-duration:1.8s;}}"]
});
const useSpinnerTailBaseClassName = /* @__PURE__ */ __resetStyles("rxov3xa", "r1o544mv", {
  r: [".rxov3xa{position:absolute;display:block;width:100%;height:100%;-webkit-mask-image:conic-gradient(transparent 105deg, white 105deg);mask-image:conic-gradient(transparent 105deg, white 105deg);animation-duration:1.5s;animation-iteration-count:infinite;animation-timing-function:var(--curveEasyEase);animation-name:r15mim6k;}", '.rxov3xa::before,.rxov3xa::after{content:"";position:absolute;display:block;width:100%;height:100%;animation:inherit;background-image:conic-gradient(currentcolor 135deg, transparent 135deg);}', "@keyframes r15mim6k{0%{transform:rotate(-135deg);}50%{transform:rotate(0deg);}100%{transform:rotate(225deg);}}", ".rxov3xa::before{animation-name:r18vhmn8;}", "@keyframes r18vhmn8{0%{transform:rotate(0deg);}50%{transform:rotate(105deg);}100%{transform:rotate(0deg);}}", ".rxov3xa::after{animation-name:rkgrvoi;}", "@keyframes rkgrvoi{0%{transform:rotate(0deg);}50%{transform:rotate(225deg);}100%{transform:rotate(0deg);}}", ".r1o544mv{position:absolute;display:block;width:100%;height:100%;-webkit-mask-image:conic-gradient(transparent 105deg, white 105deg);mask-image:conic-gradient(transparent 105deg, white 105deg);animation-duration:1.5s;animation-iteration-count:infinite;animation-timing-function:var(--curveEasyEase);animation-name:r109gmi5;}", '.r1o544mv::before,.r1o544mv::after{content:"";position:absolute;display:block;width:100%;height:100%;animation:inherit;background-image:conic-gradient(currentcolor 135deg, transparent 135deg);}', "@keyframes r109gmi5{0%{transform:rotate(135deg);}50%{transform:rotate(0deg);}100%{transform:rotate(-225deg);}}", ".r1o544mv::before{animation-name:r17whflh;}", "@keyframes r17whflh{0%{transform:rotate(0deg);}50%{transform:rotate(-105deg);}100%{transform:rotate(0deg);}}", ".r1o544mv::after{animation-name:re4odhl;}", "@keyframes re4odhl{0%{transform:rotate(0deg);}50%{transform:rotate(-225deg);}100%{transform:rotate(0deg);}}"],
  s: ["@media screen and (prefers-reduced-motion: reduce){.rxov3xa{animation-iteration-count:0;background-image:conic-gradient(transparent 120deg, currentcolor 360deg);}.rxov3xa::before,.rxov3xa::after{content:none;}}", "@media screen and (prefers-reduced-motion: reduce){.r1o544mv{animation-iteration-count:0;background-image:conic-gradient(transparent 120deg, currentcolor 360deg);}.r1o544mv::before,.r1o544mv::after{content:none;}}"]
});
const useSpinnerStyles = /* @__PURE__ */ __styles({
  inverted: {
    De3pzq: "fr407j0",
    sj55zd: "f1f7voed"
  },
  rtlTail: {
    btxmck: "f179dep3",
    gb5jj2: "fbz9ihp",
    Bdya8wy: "f1pme1qz"
  },
  "extra-tiny": {
    Bqenvij: "fd461yt",
    a9b677: "fjw5fx7",
    qmp6fs: "f1v3ph3m"
  },
  tiny: {
    Bqenvij: "fjamq6b",
    a9b677: "f64fuq3",
    qmp6fs: "f1v3ph3m"
  },
  "extra-small": {
    Bqenvij: "frvgh55",
    a9b677: "fq4mcun",
    qmp6fs: "f1v3ph3m"
  },
  small: {
    Bqenvij: "fxldao9",
    a9b677: "f1w9dchk",
    qmp6fs: "f1v3ph3m"
  },
  medium: {
    Bqenvij: "f1d2rq10",
    a9b677: "f1szoe96",
    qmp6fs: "fb52u90"
  },
  large: {
    Bqenvij: "f8ljn23",
    a9b677: "fpdz1er",
    qmp6fs: "fb52u90"
  },
  "extra-large": {
    Bqenvij: "fbhnoac",
    a9b677: "feqmc2u",
    qmp6fs: "fb52u90"
  },
  huge: {
    Bqenvij: "f1ft4266",
    a9b677: "fksc0bp",
    qmp6fs: "fa3u9ii"
  }
}, {
  d: [".fr407j0{background-color:var(--colorNeutralStrokeAlpha2);}", ".f1f7voed{color:var(--colorNeutralStrokeOnBrand2);}", ".f179dep3{-webkit-mask-image:conic-gradient(white 255deg, transparent 255deg);mask-image:conic-gradient(white 255deg, transparent 255deg);}", ".fbz9ihp::before,.fbz9ihp::after{background-image:conic-gradient(transparent 225deg, currentcolor 225deg);}", ".fd461yt{height:16px;}", ".fjw5fx7{width:16px;}", ".f1v3ph3m{--fui-Spinner--strokeWidth:var(--strokeWidthThick);}", ".fjamq6b{height:20px;}", ".f64fuq3{width:20px;}", ".frvgh55{height:24px;}", ".fq4mcun{width:24px;}", ".fxldao9{height:28px;}", ".f1w9dchk{width:28px;}", ".f1d2rq10{height:32px;}", ".f1szoe96{width:32px;}", ".fb52u90{--fui-Spinner--strokeWidth:var(--strokeWidthThicker);}", ".f8ljn23{height:36px;}", ".fpdz1er{width:36px;}", ".fbhnoac{height:40px;}", ".feqmc2u{width:40px;}", ".f1ft4266{height:44px;}", ".fksc0bp{width:44px;}", ".fa3u9ii{--fui-Spinner--strokeWidth:var(--strokeWidthThickest);}"],
  m: [["@media screen and (prefers-reduced-motion: reduce){.f1pme1qz{background-image:conic-gradient(currentcolor 0deg, transparent 240deg);}}", {
    m: "screen and (prefers-reduced-motion: reduce)"
  }]]
});
const useLabelStyles = /* @__PURE__ */ __styles({
  inverted: {
    sj55zd: "fonrgv7"
  },
  "extra-tiny": {
    Bahqtrf: "fk6fouc",
    Be2twd7: "fkhj508",
    Bhrd7zp: "figsok6",
    Bg96gwp: "f1i3iumi"
  },
  tiny: {
    Bahqtrf: "fk6fouc",
    Be2twd7: "fkhj508",
    Bhrd7zp: "figsok6",
    Bg96gwp: "f1i3iumi"
  },
  "extra-small": {
    Bahqtrf: "fk6fouc",
    Be2twd7: "fkhj508",
    Bhrd7zp: "figsok6",
    Bg96gwp: "f1i3iumi"
  },
  small: {
    Bahqtrf: "fk6fouc",
    Be2twd7: "fkhj508",
    Bhrd7zp: "figsok6",
    Bg96gwp: "f1i3iumi"
  },
  medium: {
    Bahqtrf: "fk6fouc",
    Be2twd7: "fod5ikn",
    Bhrd7zp: "fl43uef",
    Bg96gwp: "faaz57k"
  },
  large: {
    Bahqtrf: "fk6fouc",
    Be2twd7: "fod5ikn",
    Bhrd7zp: "fl43uef",
    Bg96gwp: "faaz57k"
  },
  "extra-large": {
    Bahqtrf: "fk6fouc",
    Be2twd7: "fod5ikn",
    Bhrd7zp: "fl43uef",
    Bg96gwp: "faaz57k"
  },
  huge: {
    Bahqtrf: "fk6fouc",
    Be2twd7: "f1pp30po",
    Bhrd7zp: "fl43uef",
    Bg96gwp: "f106mvju"
  }
}, {
  d: [".fonrgv7{color:var(--colorNeutralForegroundStaticInverted);}", ".fk6fouc{font-family:var(--fontFamilyBase);}", ".fkhj508{font-size:var(--fontSizeBase300);}", ".figsok6{font-weight:var(--fontWeightRegular);}", ".f1i3iumi{line-height:var(--lineHeightBase300);}", ".fod5ikn{font-size:var(--fontSizeBase400);}", ".fl43uef{font-weight:var(--fontWeightSemibold);}", ".faaz57k{line-height:var(--lineHeightBase400);}", ".f1pp30po{font-size:var(--fontSizeBase500);}", ".f106mvju{line-height:var(--lineHeightBase500);}"]
});
const useSpinnerStyles_unstable = (state) => {
  "use no memo";
  const {
    labelPosition,
    size: size2,
    appearance
  } = state;
  const {
    dir
  } = useFluent();
  const rootBaseClassName = useRootBaseClassName();
  const rootStyles = useRootStyles$2();
  const spinnerBaseClassName = useSpinnerBaseClassName();
  const spinnerStyles = useSpinnerStyles();
  const spinnerTailBaseClassName = useSpinnerTailBaseClassName();
  const labelStyles = useLabelStyles();
  state.root.className = mergeClasses(spinnerClassNames.root, rootBaseClassName, (labelPosition === "above" || labelPosition === "below") && rootStyles.vertical, state.root.className);
  if (state.spinner) {
    state.spinner.className = mergeClasses(spinnerClassNames.spinner, spinnerBaseClassName, spinnerStyles[size2], appearance === "inverted" && spinnerStyles.inverted, state.spinner.className);
  }
  if (state.spinnerTail) {
    state.spinnerTail.className = mergeClasses(spinnerClassNames.spinnerTail, spinnerTailBaseClassName, dir === "rtl" && spinnerStyles.rtlTail, state.spinnerTail.className);
  }
  if (state.label) {
    state.label.className = mergeClasses(spinnerClassNames.label, labelStyles[size2], appearance === "inverted" && labelStyles.inverted, state.label.className);
  }
  return state;
};
const Spinner = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const state = useSpinner_unstable(props, ref);
  useSpinnerStyles_unstable(state);
  useCustomStyleHook("useSpinnerStyles_unstable")(state);
  return renderSpinner_unstable(state);
});
Spinner.displayName = "Spinner";
const renderTextarea_unstable = (state) => {
  return /* @__PURE__ */ jsx(state.root, {
    children: /* @__PURE__ */ jsx(state.textarea, {})
  });
};
const useTextarea_unstable = (props, ref) => {
  props = useFieldControlProps_unstable(props, {
    supportsLabelFor: true,
    supportsRequired: true,
    supportsSize: true
  });
  const overrides = useOverrides();
  var _overrides_inputDefaultAppearance;
  const { size: size2 = "medium", appearance = (_overrides_inputDefaultAppearance = overrides.inputDefaultAppearance) !== null && _overrides_inputDefaultAppearance !== void 0 ? _overrides_inputDefaultAppearance : "outline", resize = "none", onChange } = props;
  const [value, setValue] = useControllableState({
    state: props.value,
    defaultState: props.defaultValue,
    initialState: void 0
  });
  const nativeProps = getPartitionedNativeProps({
    props,
    primarySlotTagName: "textarea",
    excludedPropNames: [
      "onChange",
      "value",
      "defaultValue"
    ]
  });
  const state = {
    size: size2,
    appearance,
    resize,
    components: {
      root: "span",
      textarea: "textarea"
    },
    textarea: always(props.textarea, {
      defaultProps: {
        ref,
        ...nativeProps.primary
      },
      elementType: "textarea"
    }),
    root: always(props.root, {
      defaultProps: nativeProps.root,
      elementType: "span"
    })
  };
  state.textarea.value = value;
  state.textarea.onChange = useEventCallback((ev) => {
    const newValue = ev.target.value;
    onChange === null || onChange === void 0 ? void 0 : onChange(ev, {
      value: newValue
    });
    setValue(newValue);
  });
  return state;
};
const textareaClassNames = {
  root: "fui-Textarea",
  textarea: "fui-Textarea__textarea"
};
const useRootStyles$1 = /* @__PURE__ */ __styles({
  base: {
    mc9l5x: "ftuwxu6",
    B7ck84d: "f1ewtqcl",
    qhf8xq: "f10pi13n",
    Byoj8tv: 0,
    uwmqm3: 0,
    z189sj: 0,
    z8tnut: 0,
    B0ocmuz: "f1yiegib",
    jrapky: 0,
    Frg6f3: 0,
    t21cq0: 0,
    B6of3ja: 0,
    B74szlk: "f1s184ao",
    Beyfa6y: 0,
    Bbmb7ep: 0,
    Btl43ni: 0,
    B7oj6ja: 0,
    Dimara: "ft85np5",
    ha4doy: "f12kltsn"
  },
  disabled: {
    De3pzq: "f1c21dwh",
    Bgfg5da: 0,
    B9xav0g: 0,
    oivjwe: 0,
    Bn0qgzm: 0,
    B4g9neb: 0,
    zhjwy3: 0,
    wvpqe5: 0,
    ibv6hh: 0,
    u1mtju: 0,
    h3c5rm: 0,
    vrafjx: 0,
    Bekrc4i: 0,
    i8vvqc: 0,
    g2u3we: 0,
    icvyot: 0,
    B4j52fo: 0,
    irswps: "ff3nzm7",
    Bcq6wej: "f9dbb4x",
    Jcjdmf: ["f3qs60o", "f5u9ap2"],
    sc4o1m: "fwd1oij",
    Bosien3: ["f5u9ap2", "f3qs60o"]
  },
  interactive: {
    li1rpt: "f1gw3sf2",
    Bsft5z2: "f13zj6fq",
    E3zdtr: "f1mdlcz9",
    Eqx8gd: ["f1a7op3", "f1cjjd47"],
    By385i5: "f1gboi2j",
    B1piin3: ["f1cjjd47", "f1a7op3"],
    Dlnsje: "ffyw7fx",
    d9w3h3: ["f1kp91vd", "f1ibwz09"],
    B3778ie: ["f1ibwz09", "f1kp91vd"],
    B1q35kw: 0,
    Bw17bha: 0,
    Bcgy8vk: 0,
    Bjuhk93: "f1mnjydx",
    Gjdm7m: "fj2g8qd",
    b1kco5: "f1yk9hq",
    Ba2ppi3: "fhwpy7i",
    F2fol1: "f14ee0xe",
    lck23g: "f1xhbsuh",
    wi16st: "fsrmcvb",
    ywj3b2: "f1t3k7v9",
    umuwi5: "fjw5xc1",
    Blcqepd: "f1xdyd5c",
    nplu4u: "fatpbeo",
    Bioka5o: "fb7uyps",
    Bnupc0a: "fx04xgm",
    bing71: "f1c7in40",
    Bercvud: "f1ibeo51",
    Bbr2w1p: "f1vnc8sk",
    Bduesf4: "f3e99gv",
    Bpq79vn: "fhljsf7"
  },
  filled: {
    Bgfg5da: 0,
    B9xav0g: 0,
    oivjwe: 0,
    Bn0qgzm: 0,
    B4g9neb: 0,
    zhjwy3: 0,
    wvpqe5: 0,
    ibv6hh: 0,
    u1mtju: 0,
    h3c5rm: 0,
    vrafjx: 0,
    Bekrc4i: 0,
    i8vvqc: 0,
    g2u3we: 0,
    icvyot: 0,
    B4j52fo: 0,
    irswps: "f88035w",
    q7v0qe: "ftmjh5b",
    kmh5ft: ["f17blpuu", "fsrcdbj"],
    nagaa4: "f1tpwn32",
    B1yhkcb: ["fsrcdbj", "f17blpuu"]
  },
  "filled-darker": {
    De3pzq: "f16xq7d1"
  },
  "filled-lighter": {
    De3pzq: "fxugw4r"
  },
  "filled-darker-shadow": {
    De3pzq: "f16xq7d1",
    Bgfg5da: 0,
    B9xav0g: 0,
    oivjwe: 0,
    Bn0qgzm: 0,
    B4g9neb: 0,
    zhjwy3: 0,
    wvpqe5: 0,
    ibv6hh: 0,
    u1mtju: 0,
    h3c5rm: 0,
    vrafjx: 0,
    Bekrc4i: 0,
    i8vvqc: 0,
    g2u3we: 0,
    icvyot: 0,
    B4j52fo: 0,
    irswps: "f1gmd7mu",
    E5pizo: "fyed02w"
  },
  "filled-lighter-shadow": {
    De3pzq: "fxugw4r",
    Bgfg5da: 0,
    B9xav0g: 0,
    oivjwe: 0,
    Bn0qgzm: 0,
    B4g9neb: 0,
    zhjwy3: 0,
    wvpqe5: 0,
    ibv6hh: 0,
    u1mtju: 0,
    h3c5rm: 0,
    vrafjx: 0,
    Bekrc4i: 0,
    i8vvqc: 0,
    g2u3we: 0,
    icvyot: 0,
    B4j52fo: 0,
    irswps: "f1gmd7mu",
    E5pizo: "fyed02w"
  },
  outline: {
    De3pzq: "fxugw4r",
    Bgfg5da: 0,
    B9xav0g: "f1c1zstj",
    oivjwe: 0,
    Bn0qgzm: 0,
    B4g9neb: 0,
    zhjwy3: 0,
    wvpqe5: 0,
    ibv6hh: 0,
    u1mtju: 0,
    h3c5rm: 0,
    vrafjx: 0,
    Bekrc4i: 0,
    i8vvqc: 0,
    g2u3we: 0,
    icvyot: 0,
    B4j52fo: 0,
    irswps: "fhz96rm"
  },
  outlineInteractive: {
    kzujx5: 0,
    oetu4i: "f1l4zc64",
    gvrnp0: 0,
    xv9156: 0,
    jek2p4: 0,
    gg5e9n: 0,
    Beu9t3s: 0,
    dt87k2: 0,
    Bt1vbvt: 0,
    Bwzppfd: 0,
    Bop6t4b: 0,
    B2zwrfe: 0,
    Bwp2tzp: 0,
    Bgoe8wy: 0,
    Bf40cpq: 0,
    ckks6v: 0,
    Baalond: "f9mts5e",
    v2iqwr: 0,
    wmxk5l: "f1z0osm6",
    Bj33j0h: 0,
    Bs0cc2w: 0,
    qwjtx1: 0,
    B50zh58: 0,
    f7epvg: 0,
    e1hlit: 0,
    B7mkhst: 0,
    ak43y8: 0,
    Bbcopvn: 0,
    Bvecx4l: 0,
    lwioe0: 0,
    B6oc9vd: 0,
    e2sjt0: 0,
    uqwnxt: 0,
    asj8p9: "f1acnei2",
    Br8fjdy: 0,
    zoxjo1: "f1so894s",
    Bt3ojkv: 0,
    B7pmvfx: 0,
    Bfht2n1: 0,
    an54nd: 0,
    t1ykpo: 0,
    Belqbek: 0,
    bbt1vd: 0,
    Brahy3i: 0,
    r7b1zc: 0,
    rexu52: 0,
    ovtnii: 0,
    Bvq3b66: 0,
    Bawrxx6: 0,
    Bbs6y8j: 0,
    B2qpgjt: "f19ezbcq"
  },
  invalid: {
    tvckwq: "fs4k3qj",
    gk2u95: ["fcee079", "fmyw78r"],
    hhx65j: "f1fgmyf4",
    Bxowmz0: ["fmyw78r", "fcee079"]
  }
}, {
  d: [".ftuwxu6{display:inline-flex;}", ".f1ewtqcl{box-sizing:border-box;}", ".f10pi13n{position:relative;}", [".f1yiegib{padding:0 0 var(--strokeWidthThick) 0;}", {
    p: -1
  }], [".f1s184ao{margin:0;}", {
    p: -1
  }], [".ft85np5{border-radius:var(--borderRadiusMedium);}", {
    p: -1
  }], ".f12kltsn{vertical-align:top;}", ".f1c21dwh{background-color:var(--colorTransparentBackground);}", [".ff3nzm7{border:var(--strokeWidthThin) solid var(--colorNeutralStrokeDisabled);}", {
    p: -2
  }], ".f1gw3sf2::after{box-sizing:border-box;}", '.f13zj6fq::after{content:"";}', ".f1mdlcz9::after{position:absolute;}", ".f1a7op3::after{left:-1px;}", ".f1cjjd47::after{right:-1px;}", ".f1gboi2j::after{bottom:-1px;}", ".ffyw7fx::after{height:max(var(--strokeWidthThick), var(--borderRadiusMedium));}", ".f1kp91vd::after{border-bottom-left-radius:var(--borderRadiusMedium);}", ".f1ibwz09::after{border-bottom-right-radius:var(--borderRadiusMedium);}", [".f1mnjydx::after{border-bottom:var(--strokeWidthThick) solid var(--colorCompoundBrandStroke);}", {
    p: -1
  }], ".fj2g8qd::after{clip-path:inset(calc(100% - var(--strokeWidthThick)) 0 0 0);}", ".f1yk9hq::after{transform:scaleX(0);}", ".fhwpy7i::after{transition-property:transform;}", ".f14ee0xe::after{transition-duration:var(--durationUltraFast);}", ".f1xhbsuh::after{transition-delay:var(--curveAccelerateMid);}", [".f88035w{border:var(--strokeWidthThin) solid var(--colorTransparentStroke);}", {
    p: -2
  }], ".f16xq7d1{background-color:var(--colorNeutralBackground3);}", ".fxugw4r{background-color:var(--colorNeutralBackground1);}", [".f1gmd7mu{border:var(--strokeWidthThin) solid var(--colorTransparentStrokeInteractive);}", {
    p: -2
  }], ".fyed02w{box-shadow:var(--shadow2);}", [".f1gmd7mu{border:var(--strokeWidthThin) solid var(--colorTransparentStrokeInteractive);}", {
    p: -2
  }], [".fhz96rm{border:var(--strokeWidthThin) solid var(--colorNeutralStroke1);}", {
    p: -2
  }], ".f1c1zstj{border-bottom-color:var(--colorNeutralStrokeAccessible);}", ".fs4k3qj:not(:focus-within),.fs4k3qj:hover:not(:focus-within){border-top-color:var(--colorPaletteRedBorder2);}", ".fcee079:not(:focus-within),.fcee079:hover:not(:focus-within){border-right-color:var(--colorPaletteRedBorder2);}", ".fmyw78r:not(:focus-within),.fmyw78r:hover:not(:focus-within){border-left-color:var(--colorPaletteRedBorder2);}", ".f1fgmyf4:not(:focus-within),.f1fgmyf4:hover:not(:focus-within){border-bottom-color:var(--colorPaletteRedBorder2);}"],
  m: [["@media (forced-colors: active){.f9dbb4x{border-top-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f3qs60o{border-right-color:GrayText;}.f5u9ap2{border-left-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fwd1oij{border-bottom-color:GrayText;}}", {
    m: "(forced-colors: active)"
  }], ["@media screen and (prefers-reduced-motion: reduce){.fsrmcvb::after{transition-duration:0.01ms;}}", {
    m: "screen and (prefers-reduced-motion: reduce)"
  }], ["@media screen and (prefers-reduced-motion: reduce){.f1t3k7v9::after{transition-delay:0.01ms;}}", {
    m: "screen and (prefers-reduced-motion: reduce)"
  }], ["@media screen and (prefers-reduced-motion: reduce){.fx04xgm:focus-within::after{transition-duration:0.01ms;}}", {
    m: "screen and (prefers-reduced-motion: reduce)"
  }], ["@media screen and (prefers-reduced-motion: reduce){.f1c7in40:focus-within::after{transition-delay:0.01ms;}}", {
    m: "screen and (prefers-reduced-motion: reduce)"
  }]],
  w: [".fjw5xc1:focus-within::after{transform:scaleX(1);}", ".f1xdyd5c:focus-within::after{transition-property:transform;}", ".fatpbeo:focus-within::after{transition-duration:var(--durationNormal);}", ".fb7uyps:focus-within::after{transition-delay:var(--curveDecelerateMid);}", ".f1ibeo51:focus-within:active::after{border-bottom-color:var(--colorCompoundBrandStrokePressed);}", ".f1vnc8sk:focus-within{outline-width:var(--strokeWidthThick);}", ".f3e99gv:focus-within{outline-style:solid;}", ".fhljsf7:focus-within{outline-color:transparent;}", [".f19ezbcq:focus-within{border:var(--strokeWidthThin) solid var(--colorNeutralStroke1Pressed);}", {
    p: -2
  }], ".f1so894s:focus-within{border-bottom-color:var(--colorCompoundBrandStroke);}"],
  h: [".ftmjh5b:hover,.ftmjh5b:focus-within{border-top-color:var(--colorTransparentStrokeInteractive);}", ".f17blpuu:hover,.f17blpuu:focus-within{border-right-color:var(--colorTransparentStrokeInteractive);}", ".fsrcdbj:hover,.fsrcdbj:focus-within{border-left-color:var(--colorTransparentStrokeInteractive);}", ".f1tpwn32:hover,.f1tpwn32:focus-within{border-bottom-color:var(--colorTransparentStrokeInteractive);}", [".f9mts5e:hover{border:var(--strokeWidthThin) solid var(--colorNeutralStroke1Hover);}", {
    p: -2
  }], ".f1l4zc64:hover{border-bottom-color:var(--colorNeutralStrokeAccessibleHover);}"],
  a: [[".f1acnei2:active{border:var(--strokeWidthThin) solid var(--colorNeutralStroke1Pressed);}", {
    p: -2
  }], ".f1z0osm6:active{border-bottom-color:var(--colorNeutralStrokeAccessiblePressed);}"]
});
const useTextareaStyles = /* @__PURE__ */ __styles({
  base: {
    icvyot: "f1ern45e",
    vrafjx: ["f1n71otn", "f1deefiw"],
    oivjwe: "f1h8hb77",
    wvpqe5: ["f1deefiw", "f1n71otn"],
    jrapky: 0,
    Frg6f3: 0,
    t21cq0: 0,
    B6of3ja: 0,
    B74szlk: "f1s184ao",
    De3pzq: "f3rmtva",
    B7ck84d: "f1ewtqcl",
    sj55zd: "f19n0e5",
    Bh6795r: "fqerorx",
    Bahqtrf: "fk6fouc",
    Bqenvij: "f1l02sjl",
    yvdlaj: "fwyc1cq",
    B3o7kgh: "f13ta7ih",
    oeaueh: "f1s6fcnf"
  },
  disabled: {
    sj55zd: "f1s2aq7o",
    Bceei9c: "fdrzuqr",
    yvdlaj: "fahhnxm"
  },
  small: {
    sshi5w: "f1w5jphr",
    Byoj8tv: 0,
    uwmqm3: 0,
    z189sj: 0,
    z8tnut: 0,
    B0ocmuz: "f1pnffij",
    Bxyxcbc: "f192z54u",
    Bahqtrf: "fk6fouc",
    Be2twd7: "fy9rknc",
    Bhrd7zp: "figsok6",
    Bg96gwp: "fwrc4pm"
  },
  medium: {
    sshi5w: "fvmd9f",
    Byoj8tv: 0,
    uwmqm3: 0,
    z189sj: 0,
    z8tnut: 0,
    B0ocmuz: "f1ww82xo",
    Bxyxcbc: "f1if7ixc",
    Bahqtrf: "fk6fouc",
    Be2twd7: "fkhj508",
    Bhrd7zp: "figsok6",
    Bg96gwp: "f1i3iumi"
  },
  large: {
    sshi5w: "f1kfson",
    Byoj8tv: 0,
    uwmqm3: 0,
    z189sj: 0,
    z8tnut: 0,
    B0ocmuz: "f15hvtkj",
    Bxyxcbc: "f3kip1f",
    Bahqtrf: "fk6fouc",
    Be2twd7: "fod5ikn",
    Bhrd7zp: "figsok6",
    Bg96gwp: "faaz57k"
  }
}, {
  d: [".f1ern45e{border-top-style:none;}", ".f1n71otn{border-right-style:none;}", ".f1deefiw{border-left-style:none;}", ".f1h8hb77{border-bottom-style:none;}", [".f1s184ao{margin:0;}", {
    p: -1
  }], ".f3rmtva{background-color:transparent;}", ".f1ewtqcl{box-sizing:border-box;}", ".f19n0e5{color:var(--colorNeutralForeground1);}", ".fqerorx{flex-grow:1;}", ".fk6fouc{font-family:var(--fontFamilyBase);}", ".f1l02sjl{height:100%;}", ".fwyc1cq::-webkit-input-placeholder{color:var(--colorNeutralForeground4);}", ".fwyc1cq::-moz-placeholder{color:var(--colorNeutralForeground4);}", ".f13ta7ih::-webkit-input-placeholder{opacity:1;}", ".f13ta7ih::-moz-placeholder{opacity:1;}", ".f1s6fcnf{outline-style:none;}", ".f1s2aq7o{color:var(--colorNeutralForegroundDisabled);}", ".fdrzuqr{cursor:not-allowed;}", ".fahhnxm::-webkit-input-placeholder{color:var(--colorNeutralForegroundDisabled);}", ".fahhnxm::-moz-placeholder{color:var(--colorNeutralForegroundDisabled);}", ".f1w5jphr{min-height:40px;}", [".f1pnffij{padding:var(--spacingVerticalXS) calc(var(--spacingHorizontalSNudge) + var(--spacingHorizontalXXS));}", {
    p: -1
  }], ".f192z54u{max-height:200px;}", ".fy9rknc{font-size:var(--fontSizeBase200);}", ".figsok6{font-weight:var(--fontWeightRegular);}", ".fwrc4pm{line-height:var(--lineHeightBase200);}", ".fvmd9f{min-height:52px;}", [".f1ww82xo{padding:var(--spacingVerticalSNudge) calc(var(--spacingHorizontalMNudge) + var(--spacingHorizontalXXS));}", {
    p: -1
  }], ".f1if7ixc{max-height:260px;}", ".fkhj508{font-size:var(--fontSizeBase300);}", ".f1i3iumi{line-height:var(--lineHeightBase300);}", ".f1kfson{min-height:64px;}", [".f15hvtkj{padding:var(--spacingVerticalS) calc(var(--spacingHorizontalM) + var(--spacingHorizontalXXS));}", {
    p: -1
  }], ".f3kip1f{max-height:320px;}", ".fod5ikn{font-size:var(--fontSizeBase400);}", ".faaz57k{line-height:var(--lineHeightBase400);}"]
});
const useTextareaResizeStyles = /* @__PURE__ */ __styles({
  none: {
    B3rzk8w: "f1o1s39h"
  },
  both: {
    B3rzk8w: "f1pxm0xe"
  },
  horizontal: {
    B3rzk8w: "fq6nmtn"
  },
  vertical: {
    B3rzk8w: "f1f5ktr4"
  }
}, {
  d: [".f1o1s39h{resize:none;}", ".f1pxm0xe{resize:both;}", ".fq6nmtn{resize:horizontal;}", ".f1f5ktr4{resize:vertical;}"]
});
const useTextareaStyles_unstable = (state) => {
  "use no memo";
  const {
    size: size2,
    appearance,
    resize
  } = state;
  const disabled = state.textarea.disabled;
  const invalid = `${state.textarea["aria-invalid"]}` === "true";
  const filled = appearance.startsWith("filled");
  const rootStyles = useRootStyles$1();
  state.root.className = mergeClasses(textareaClassNames.root, rootStyles.base, disabled && rootStyles.disabled, !disabled && filled && rootStyles.filled, !disabled && rootStyles[appearance], !disabled && rootStyles.interactive, !disabled && appearance === "outline" && rootStyles.outlineInteractive, !disabled && invalid && rootStyles.invalid, state.root.className);
  const textareaStyles = useTextareaStyles();
  const textareaResizeStyles = useTextareaResizeStyles();
  state.textarea.className = mergeClasses(textareaClassNames.textarea, textareaStyles.base, textareaStyles[size2], textareaResizeStyles[resize], disabled && textareaStyles.disabled, state.textarea.className);
  return state;
};
const Textarea = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const state = useTextarea_unstable(props, ref);
  useTextareaStyles_unstable(state);
  useCustomStyleHook("useTextareaStyles_unstable")(state);
  return renderTextarea_unstable(state);
});
Textarea.displayName = "Textarea";
const useHTMLNoScrollStyles = /* @__PURE__ */ __resetStyles("r6pzz3z", null, [".r6pzz3z{overflow-y:hidden;overflow-y:clip;scrollbar-gutter:stable;}"]);
const useBodyNoScrollStyles = /* @__PURE__ */ __resetStyles("r144vlu9", null, [".r144vlu9{overflow-y:hidden;}"]);
function useDisableBodyScroll() {
  const htmlNoScrollStyles = useHTMLNoScrollStyles();
  const bodyNoScrollStyles = useBodyNoScrollStyles();
  const { targetDocument } = useFluent();
  const disableBodyScroll = reactExports.useCallback(() => {
    var _targetDocument_defaultView;
    if (!targetDocument) {
      return;
    }
    var _targetDocument_defaultView_innerHeight;
    const isHorizontalScrollbarVisible = (
      // When the window is a fractional height, `innerHeight` always rounds down but `clientHeight` rounds either up or down depending on the value.
      // To properly compare the body clientHeight to the window innerHeight, manually round down the fractional value to match innerHeight's calculation.
      Math.floor(targetDocument.body.getBoundingClientRect().height) > ((_targetDocument_defaultView_innerHeight = (_targetDocument_defaultView = targetDocument.defaultView) === null || _targetDocument_defaultView === void 0 ? void 0 : _targetDocument_defaultView.innerHeight) !== null && _targetDocument_defaultView_innerHeight !== void 0 ? _targetDocument_defaultView_innerHeight : 0)
    );
    if (!isHorizontalScrollbarVisible) {
      return;
    }
    targetDocument.documentElement.classList.add(htmlNoScrollStyles);
    targetDocument.body.classList.add(bodyNoScrollStyles);
    return;
  }, [
    targetDocument,
    htmlNoScrollStyles,
    bodyNoScrollStyles
  ]);
  const enableBodyScroll = reactExports.useCallback(() => {
    if (!targetDocument) {
      return;
    }
    targetDocument.documentElement.classList.remove(htmlNoScrollStyles);
    targetDocument.body.classList.remove(bodyNoScrollStyles);
  }, [
    targetDocument,
    htmlNoScrollStyles,
    bodyNoScrollStyles
  ]);
  return {
    disableBodyScroll,
    enableBodyScroll
  };
}
function useFocusFirstElement(open, modalType) {
  const { findFirstFocusable } = useFocusFinders();
  const { targetDocument } = useFluent();
  const dialogRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!open) {
      return;
    }
    const element = dialogRef.current && findFirstFocusable(dialogRef.current);
    if (element) {
      element.focus();
    } else {
      var _dialogRef_current;
      (_dialogRef_current = dialogRef.current) === null || _dialogRef_current === void 0 ? void 0 : _dialogRef_current.focus();
    }
  }, [
    findFirstFocusable,
    open,
    modalType,
    targetDocument
  ]);
  return dialogRef;
}
const defaultContextValue$1 = {
  open: false,
  inertTrapFocus: false,
  modalType: "modal",
  isNestedDialog: false,
  unmountOnClose: true,
  dialogRef: {
    current: null
  },
  requestOpenChange() {
  }
};
const DialogContext = createContext(void 0);
const DialogProvider = DialogContext.Provider;
const useDialogContext_unstable = (selector) => useContextSelector(DialogContext, (ctx = defaultContextValue$1) => selector(ctx));
const defaultContextValue = false;
const DialogSurfaceContext = reactExports.createContext(void 0);
const DialogSurfaceProvider = DialogSurfaceContext.Provider;
const useDialogSurfaceContext_unstable = () => {
  var _React_useContext;
  return (_React_useContext = reactExports.useContext(DialogSurfaceContext)) !== null && _React_useContext !== void 0 ? _React_useContext : defaultContextValue;
};
const DialogSurfaceMotion = createPresenceComponentVariant(Scale, {
  fromScale: 0.85,
  easing: motionTokens.curveDecelerateMid,
  duration: motionTokens.durationGentle,
  exitEasing: motionTokens.curveAccelerateMin,
  exitDuration: motionTokens.durationGentle
});
const useDialog_unstable = (props) => {
  const { children, modalType = "modal", onOpenChange, inertTrapFocus = false, unmountOnClose = true } = props;
  const dialogTitleId = useId("dialog-title-");
  const [trigger, content] = childrenToTriggerAndContent(children);
  const [open, setOpen] = useControllableState({
    state: props.open,
    defaultState: props.defaultOpen,
    initialState: false
  });
  const requestOpenChange = useEventCallback((data) => {
    onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(data.event, data);
    if (!data.event.isDefaultPrevented()) {
      setOpen(data.open);
    }
  });
  const dialogRef = useFocusFirstElement(open, modalType);
  const { modalAttributes, triggerAttributes } = useModalAttributes({
    trapFocus: modalType !== "non-modal",
    legacyTrapFocus: !inertTrapFocus
  });
  const isNestedDialog = useHasParentContext(DialogContext);
  return {
    components: {
      surfaceMotion: DialogSurfaceMotion
    },
    inertTrapFocus,
    open,
    modalType,
    content,
    trigger,
    requestOpenChange,
    dialogTitleId,
    isNestedDialog,
    unmountOnClose,
    dialogRef,
    modalAttributes,
    triggerAttributes,
    surfaceMotion: presenceMotionSlot(props.surfaceMotion, {
      elementType: DialogSurfaceMotion,
      defaultProps: {
        visible: open,
        appear: unmountOnClose,
        unmountOnExit: unmountOnClose
      }
    })
  };
};
function childrenToTriggerAndContent(children) {
  const childrenArray = reactExports.Children.toArray(children);
  switch (childrenArray.length) {
    case 2:
      return childrenArray;
    case 1:
      return [
        void 0,
        childrenArray[0]
      ];
    default:
      return [
        void 0,
        void 0
      ];
  }
}
const MotionRefForwarderContext = /* @__PURE__ */ reactExports.createContext(void 0);
function useMotionForwardedRef() {
  return reactExports.useContext(MotionRefForwarderContext);
}
const MotionRefForwarder = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  return /* @__PURE__ */ reactExports.createElement(MotionRefForwarderContext.Provider, {
    value: ref
  }, props.children);
});
const renderDialog_unstable = (state, contextValues) => {
  return /* @__PURE__ */ jsx(DialogProvider, {
    value: contextValues.dialog,
    children: /* @__PURE__ */ jsxs(DialogSurfaceProvider, {
      value: contextValues.dialogSurface,
      children: [
        state.trigger,
        state.content && /* @__PURE__ */ jsx(state.surfaceMotion, {
          children: /* @__PURE__ */ jsx(MotionRefForwarder, {
            children: state.content
          })
        })
      ]
    })
  });
};
function useDialogContextValues_unstable(state) {
  const { modalType, open, dialogRef, dialogTitleId, isNestedDialog, inertTrapFocus, requestOpenChange, modalAttributes, triggerAttributes, unmountOnClose } = state;
  const dialog = {
    open,
    modalType,
    dialogRef,
    dialogTitleId,
    isNestedDialog,
    inertTrapFocus,
    modalAttributes,
    triggerAttributes,
    unmountOnClose,
    requestOpenChange
  };
  const dialogSurface = false;
  return {
    dialog,
    dialogSurface
  };
}
const Dialog = /* @__PURE__ */ reactExports.memo((props) => {
  const state = useDialog_unstable(props);
  const contextValues = useDialogContextValues_unstable(state);
  return renderDialog_unstable(state, contextValues);
});
Dialog.displayName = "Dialog";
const useDialogTrigger_unstable = (props) => {
  const isInsideSurfaceDialog = useDialogSurfaceContext_unstable();
  const { children, disableButtonEnhancement = false, action = isInsideSurfaceDialog ? "close" : "open" } = props;
  const child = getTriggerChild(children);
  const requestOpenChange = useDialogContext_unstable((ctx) => ctx.requestOpenChange);
  const { triggerAttributes } = useModalAttributes();
  const handleClick = useEventCallback((event) => {
    var _child_props_onClick, _child_props;
    child === null || child === void 0 ? void 0 : (_child_props_onClick = (_child_props = child.props).onClick) === null || _child_props_onClick === void 0 ? void 0 : _child_props_onClick.call(_child_props, event);
    if (!event.isDefaultPrevented()) {
      requestOpenChange({
        event,
        type: "triggerClick",
        open: action === "open"
      });
    }
  });
  const triggerChildProps = {
    ...child === null || child === void 0 ? void 0 : child.props,
    ref: getReactElementRef(child),
    onClick: handleClick,
    ...triggerAttributes
  };
  const ariaButtonTriggerChildProps = useARIAButtonProps((child === null || child === void 0 ? void 0 : child.type) === "button" || (child === null || child === void 0 ? void 0 : child.type) === "a" ? child.type : "div", {
    ...triggerChildProps,
    type: "button"
  });
  return {
    children: applyTriggerPropsToChildren(children, disableButtonEnhancement ? triggerChildProps : ariaButtonTriggerChildProps)
  };
};
const renderDialogTrigger_unstable = (state) => state.children;
const DialogTrigger = (props) => {
  const state = useDialogTrigger_unstable(props);
  return renderDialogTrigger_unstable(state);
};
DialogTrigger.displayName = "DialogTrigger";
DialogTrigger.isFluentTriggerComponent = true;
const useDialogActions_unstable = (props, ref) => {
  const { position = "end", fluid = false } = props;
  return {
    components: {
      root: "div"
    },
    root: always(getIntrinsicElementProps("div", {
      // FIXME:
      // `ref` is wrongly assigned to be `HTMLElement` instead of `HTMLDivElement`
      // but since it would be a breaking change to fix it, we are casting ref to it's proper type
      ref,
      ...props
    }), {
      elementType: "div"
    }),
    position,
    fluid
  };
};
const renderDialogActions_unstable = (state) => {
  return /* @__PURE__ */ jsx(state.root, {});
};
const dialogActionsClassNames = {
  root: "fui-DialogActions"
};
const useResetStyles$1 = /* @__PURE__ */ __resetStyles("rhfpeu0", null, {
  r: [".rhfpeu0{gap:8px;height:fit-content;box-sizing:border-box;display:flex;grid-row-start:3;grid-row-end:3;}"],
  s: ["@media screen and (max-width: 480px){.rhfpeu0{flex-direction:column;justify-self:stretch;}}"]
});
const useStyles$4 = /* @__PURE__ */ __styles({
  gridPositionEnd: {
    Bdqf98w: "f1a7i8kp",
    Br312pm: "fd46tj4",
    Bw0ie65: "fsyjsko",
    Btsd7tp: "f1n00o3b",
    ufxxby: "f1mvsp37",
    Bq5p579: "flbz1vp"
  },
  gridPositionStart: {
    Bdqf98w: "fsxvdwy",
    Br312pm: "fwpfdsa",
    Bw0ie65: "f1e2fz10",
    Ew0qkd: "f119phc2",
    ufxxby: "f1j719yo",
    Bq5p579: "flbz1vp"
  },
  fluidStart: {
    Bw0ie65: "fsyjsko"
  },
  fluidEnd: {
    Br312pm: "fwpfdsa"
  }
}, {
  d: [".f1a7i8kp{justify-self:end;}", ".fd46tj4{grid-column-start:2;}", ".fsyjsko{grid-column-end:4;}", ".fsxvdwy{justify-self:start;}", ".fwpfdsa{grid-column-start:1;}", ".f1e2fz10{grid-column-end:2;}"],
  m: [["@media screen and (max-width: 480px){.f1n00o3b{grid-column-start:1;}}", {
    m: "screen and (max-width: 480px)"
  }], ["@media screen and (max-width: 480px){.f1mvsp37{grid-row-start:4;}}", {
    m: "screen and (max-width: 480px)"
  }], ["@media screen and (max-width: 480px){.flbz1vp{grid-row-end:auto;}}", {
    m: "screen and (max-width: 480px)"
  }], ["@media screen and (max-width: 480px){.f119phc2{grid-column-end:4;}}", {
    m: "screen and (max-width: 480px)"
  }], ["@media screen and (max-width: 480px){.f1j719yo{grid-row-start:3;}}", {
    m: "screen and (max-width: 480px)"
  }]]
});
const useDialogActionsStyles_unstable = (state) => {
  "use no memo";
  const resetStyles = useResetStyles$1();
  const styles = useStyles$4();
  state.root.className = mergeClasses(dialogActionsClassNames.root, resetStyles, state.position === "start" && styles.gridPositionStart, state.position === "end" && styles.gridPositionEnd, state.fluid && state.position === "start" && styles.fluidStart, state.fluid && state.position === "end" && styles.fluidEnd, state.root.className);
  return state;
};
const DialogActions = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const state = useDialogActions_unstable(props, ref);
  useDialogActionsStyles_unstable(state);
  useCustomStyleHook("useDialogActionsStyles_unstable")(state);
  return renderDialogActions_unstable(state);
});
DialogActions.displayName = "DialogActions";
const useDialogBody_unstable = (props, ref) => {
  var _props_as;
  return {
    components: {
      root: "div"
    },
    root: always(getIntrinsicElementProps((_props_as = props.as) !== null && _props_as !== void 0 ? _props_as : "div", {
      // FIXME:
      // `ref` is wrongly assigned to be `HTMLElement` instead of `HTMLDivElement`
      // but since it would be a breaking change to fix it, we are casting ref to it's proper type
      ref,
      ...props
    }), {
      elementType: "div"
    })
  };
};
const renderDialogBody_unstable = (state) => {
  return /* @__PURE__ */ jsx(state.root, {});
};
const dialogBodyClassNames = {
  root: "fui-DialogBody"
};
const useResetStyles = /* @__PURE__ */ __resetStyles("rhwx3p8", null, {
  r: [".rhwx3p8{overflow:unset;gap:8px;display:grid;max-height:calc(100vh - 2 * 24px);max-height:calc(100dvh - 2 * 24px);box-sizing:border-box;grid-template-rows:auto 1fr;grid-template-columns:1fr 1fr auto;}"],
  s: ["@media screen and (max-width: 480px){.rhwx3p8{max-width:100vw;grid-template-rows:auto 1fr auto;}}", "@media screen and (max-height: 359px){.rhwx3p8{max-height:unset;}}"]
});
const useDialogBodyStyles_unstable = (state) => {
  "use no memo";
  const resetStyles = useResetStyles();
  state.root.className = mergeClasses(dialogBodyClassNames.root, resetStyles, state.root.className);
  return state;
};
const DialogBody = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const state = useDialogBody_unstable(props, ref);
  useDialogBodyStyles_unstable(state);
  useCustomStyleHook("useDialogBodyStyles_unstable")(state);
  return renderDialogBody_unstable(state);
});
DialogBody.displayName = "DialogBody";
const dialogTitleClassNames = {
  root: "fui-DialogTitle",
  action: "fui-DialogTitle__action"
};
const useRootResetStyles = /* @__PURE__ */ __resetStyles("rxjm636", null, [".rxjm636{font-family:var(--fontFamilyBase);font-size:var(--fontSizeBase500);font-weight:var(--fontWeightSemibold);line-height:var(--lineHeightBase500);margin:0;grid-row-start:1;grid-row-end:1;grid-column-start:1;grid-column-end:3;}"]);
const useStyles$3 = /* @__PURE__ */ __styles({
  rootWithoutAction: {
    Bw0ie65: "fsyjsko"
  }
}, {
  d: [".fsyjsko{grid-column-end:4;}"]
});
const useActionResetStyles = /* @__PURE__ */ __resetStyles("r13kcrze", null, [".r13kcrze{grid-row-start:1;grid-row-end:1;grid-column-start:3;justify-self:end;align-self:start;}"]);
const useDialogTitleInternalStyles = /* @__PURE__ */ __resetStyles("r2avt6e", "roj2bbc", {
  r: [".r2avt6e{overflow:visible;padding:0;border-style:none;position:relative;box-sizing:content-box;background-color:inherit;color:inherit;font-family:inherit;font-size:inherit;cursor:pointer;line-height:0;-webkit-appearance:button;text-align:unset;}", ".r2avt6e:focus{outline-style:none;}", ".r2avt6e:focus-visible{outline-style:none;}", ".r2avt6e[data-fui-focus-visible]{border-top-color:transparent;border-right-color:transparent;border-bottom-color:transparent;border-left-color:transparent;}", '.r2avt6e[data-fui-focus-visible]::after{content:"";position:absolute;pointer-events:none;z-index:1;border:2px solid var(--colorStrokeFocus2);border-radius:var(--borderRadiusMedium);top:calc(2px * -1);right:calc(2px * -1);bottom:calc(2px * -1);left:calc(2px * -1);}', ".roj2bbc{overflow:visible;padding:0;border-style:none;position:relative;box-sizing:content-box;background-color:inherit;color:inherit;font-family:inherit;font-size:inherit;cursor:pointer;line-height:0;-webkit-appearance:button;text-align:unset;}", ".roj2bbc:focus{outline-style:none;}", ".roj2bbc:focus-visible{outline-style:none;}", ".roj2bbc[data-fui-focus-visible]{border-top-color:transparent;border-left-color:transparent;border-bottom-color:transparent;border-right-color:transparent;}", '.roj2bbc[data-fui-focus-visible]::after{content:"";position:absolute;pointer-events:none;z-index:1;border:2px solid var(--colorStrokeFocus2);border-radius:var(--borderRadiusMedium);top:calc(2px * -1);left:calc(2px * -1);bottom:calc(2px * -1);right:calc(2px * -1);}'],
  s: ["@media (forced-colors: active){.r2avt6e[data-fui-focus-visible]::after{border-top-color:Highlight;border-right-color:Highlight;border-bottom-color:Highlight;border-left-color:Highlight;}}", "@media (forced-colors: active){.roj2bbc[data-fui-focus-visible]::after{border-top-color:Highlight;border-left-color:Highlight;border-bottom-color:Highlight;border-right-color:Highlight;}}"]
});
const useDialogTitleStyles_unstable = (state) => {
  "use no memo";
  const rootResetStyles = useRootResetStyles();
  const actionResetStyles = useActionResetStyles();
  const styles = useStyles$3();
  state.root.className = mergeClasses(dialogTitleClassNames.root, rootResetStyles, !state.action && styles.rootWithoutAction, state.root.className);
  if (state.action) {
    state.action.className = mergeClasses(dialogTitleClassNames.action, actionResetStyles, state.action.className);
  }
  return state;
};
const useDialogTitle_unstable = (props, ref) => {
  const { action } = props;
  const modalType = useDialogContext_unstable((ctx) => ctx.modalType);
  const internalStyles = useDialogTitleInternalStyles();
  return {
    components: {
      root: "h2",
      action: "div"
    },
    root: always(getIntrinsicElementProps("h2", {
      ref,
      id: useDialogContext_unstable((ctx) => ctx.dialogTitleId),
      ...props
    }), {
      elementType: "h2"
    }),
    action: optional(action, {
      renderByDefault: modalType === "non-modal",
      defaultProps: {
        children: /* @__PURE__ */ reactExports.createElement(DialogTrigger, {
          disableButtonEnhancement: true,
          action: "close"
        }, /* @__PURE__ */ reactExports.createElement("button", {
          type: "button",
          className: internalStyles,
          // TODO: find a better way to add internal labels
          "aria-label": "close"
        }, /* @__PURE__ */ reactExports.createElement(Dismiss20Regular, null)))
      },
      elementType: "div"
    })
  };
};
const renderDialogTitle_unstable = (state) => {
  return /* @__PURE__ */ jsxs(reactExports.Fragment, {
    children: [
      /* @__PURE__ */ jsx(state.root, {
        children: state.root.children
      }),
      state.action && /* @__PURE__ */ jsx(state.action, {})
    ]
  });
};
const DialogTitle = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const state = useDialogTitle_unstable(props, ref);
  useDialogTitleStyles_unstable(state);
  useCustomStyleHook("useDialogTitleStyles_unstable")(state);
  return renderDialogTitle_unstable(state);
});
DialogTitle.displayName = "DialogTitle";
const DialogBackdropMotion = FadeRelaxed;
const useDialogSurface_unstable = (props, ref) => {
  const contextRef = useMotionForwardedRef();
  const modalType = useDialogContext_unstable((ctx) => ctx.modalType);
  const isNestedDialog = useDialogContext_unstable((ctx) => ctx.isNestedDialog);
  const modalAttributes = useDialogContext_unstable((ctx) => ctx.modalAttributes);
  const dialogRef = useDialogContext_unstable((ctx) => ctx.dialogRef);
  const requestOpenChange = useDialogContext_unstable((ctx) => ctx.requestOpenChange);
  const dialogTitleID = useDialogContext_unstable((ctx) => ctx.dialogTitleId);
  const open = useDialogContext_unstable((ctx) => ctx.open);
  const unmountOnClose = useDialogContext_unstable((ctx) => ctx.unmountOnClose);
  const handledBackdropClick = useEventCallback((event) => {
    if (isResolvedShorthand(props.backdrop)) {
      var _props_backdrop_onClick, _props_backdrop;
      (_props_backdrop_onClick = (_props_backdrop = props.backdrop).onClick) === null || _props_backdrop_onClick === void 0 ? void 0 : _props_backdrop_onClick.call(_props_backdrop, event);
    }
    if (modalType === "modal" && !event.isDefaultPrevented()) {
      requestOpenChange({
        event,
        open: false,
        type: "backdropClick"
      });
    }
  });
  const handleKeyDown = useEventCallback((event) => {
    var _props_onKeyDown;
    (_props_onKeyDown = props.onKeyDown) === null || _props_onKeyDown === void 0 ? void 0 : _props_onKeyDown.call(props, event);
    if (event.key === Escape && !event.isDefaultPrevented()) {
      requestOpenChange({
        event,
        open: false,
        type: "escapeKeyDown"
      });
      event.preventDefault();
    }
  });
  const backdrop = optional(props.backdrop, {
    renderByDefault: modalType !== "non-modal",
    defaultProps: {
      "aria-hidden": "true"
    },
    elementType: "div"
  });
  if (backdrop) {
    backdrop.onClick = handledBackdropClick;
  }
  const { disableBodyScroll, enableBodyScroll } = useDisableBodyScroll();
  useIsomorphicLayoutEffect(() => {
    if (!open) {
      enableBodyScroll();
      return;
    }
    if (isNestedDialog || modalType === "non-modal") {
      return;
    }
    disableBodyScroll();
    return () => enableBodyScroll();
  }, [
    open,
    modalType,
    isNestedDialog,
    disableBodyScroll,
    enableBodyScroll
  ]);
  return {
    components: {
      backdrop: "div",
      root: "div",
      backdropMotion: DialogBackdropMotion
    },
    open,
    backdrop,
    isNestedDialog,
    unmountOnClose,
    mountNode: props.mountNode,
    root: always(getIntrinsicElementProps("div", {
      tabIndex: -1,
      role: modalType === "alert" ? "alertdialog" : "dialog",
      "aria-modal": modalType !== "non-modal",
      "aria-labelledby": props["aria-label"] ? void 0 : dialogTitleID,
      "aria-hidden": !unmountOnClose && !open ? true : void 0,
      ...props,
      ...modalAttributes,
      onKeyDown: handleKeyDown,
      // FIXME:
      // `DialogSurfaceElement` is wrongly assigned to be `HTMLElement` instead of `HTMLDivElement`
      // but since it would be a breaking change to fix it, we are casting ref to it's proper type
      ref: useMergedRefs(ref, contextRef, dialogRef)
    }), {
      elementType: "div"
    }),
    backdropMotion: presenceMotionSlot(props.backdropMotion, {
      elementType: DialogBackdropMotion,
      defaultProps: {
        appear: unmountOnClose,
        visible: open
      }
    }),
    // Deprecated properties
    transitionStatus: void 0
  };
};
const renderDialogSurface_unstable = (state, contextValues) => {
  return /* @__PURE__ */ jsxs(Portal, {
    mountNode: state.mountNode,
    children: [
      state.backdrop && // TODO: state.backdropMotion is non nullable, but assertSlots asserts it as nullable
      // FIXME: this should be resolved by properly splitting props and state slots declaration
      state.backdropMotion && /* @__PURE__ */ jsx(state.backdropMotion, {
        children: /* @__PURE__ */ jsx(state.backdrop, {})
      }),
      /* @__PURE__ */ jsx(DialogSurfaceProvider, {
        value: contextValues.dialogSurface,
        children: /* @__PURE__ */ jsx(state.root, {})
      })
    ]
  });
};
const dialogSurfaceClassNames = {
  root: "fui-DialogSurface",
  backdrop: "fui-DialogSurface__backdrop"
};
const useRootBaseStyle = /* @__PURE__ */ __resetStyles("r1u3t6p6", "r5coedp", {
  r: [".r1u3t6p6{inset:0;padding:24px;margin:auto;border-style:none;overflow:unset;border:1px solid var(--colorTransparentStroke);border-radius:var(--borderRadiusXLarge);display:block;-webkit-user-select:unset;-moz-user-select:unset;user-select:unset;visibility:unset;position:fixed;height:fit-content;max-width:600px;max-height:100vh;max-height:100dvh;box-sizing:border-box;background-color:var(--colorNeutralBackground1);color:var(--colorNeutralForeground1);box-shadow:var(--shadow64);}", ".r1u3t6p6:focus{outline-style:none;}", ".r1u3t6p6:focus-visible{outline-style:none;}", ".r1u3t6p6[data-fui-focus-visible]{border-top-color:transparent;border-right-color:transparent;border-bottom-color:transparent;border-left-color:transparent;}", '.r1u3t6p6[data-fui-focus-visible]::after{content:"";position:absolute;pointer-events:none;z-index:1;border:2px solid var(--colorStrokeFocus2);border-radius:var(--borderRadiusMedium);top:calc(2px * -1);right:calc(2px * -1);bottom:calc(2px * -1);left:calc(2px * -1);}', ".r5coedp{inset:0;padding:24px;margin:auto;border-style:none;overflow:unset;border:1px solid var(--colorTransparentStroke);border-radius:var(--borderRadiusXLarge);display:block;-webkit-user-select:unset;-moz-user-select:unset;user-select:unset;visibility:unset;position:fixed;height:fit-content;max-width:600px;max-height:100vh;max-height:100dvh;box-sizing:border-box;background-color:var(--colorNeutralBackground1);color:var(--colorNeutralForeground1);box-shadow:var(--shadow64);}", ".r5coedp:focus{outline-style:none;}", ".r5coedp:focus-visible{outline-style:none;}", ".r5coedp[data-fui-focus-visible]{border-top-color:transparent;border-left-color:transparent;border-bottom-color:transparent;border-right-color:transparent;}", '.r5coedp[data-fui-focus-visible]::after{content:"";position:absolute;pointer-events:none;z-index:1;border:2px solid var(--colorStrokeFocus2);border-radius:var(--borderRadiusMedium);top:calc(2px * -1);left:calc(2px * -1);bottom:calc(2px * -1);right:calc(2px * -1);}'],
  s: ["@media (forced-colors: active){.r1u3t6p6[data-fui-focus-visible]::after{border-top-color:Highlight;border-right-color:Highlight;border-bottom-color:Highlight;border-left-color:Highlight;}}", "@media screen and (max-width: 480px){.r1u3t6p6{max-width:100vw;}}", "@media screen and (max-height: 359px){.r1u3t6p6{overflow-y:auto;padding-right:calc(24px - 4px);border-right-width:4px;border-top-width:4px;border-bottom-width:4px;}}", "@media (forced-colors: active){.r5coedp[data-fui-focus-visible]::after{border-top-color:Highlight;border-left-color:Highlight;border-bottom-color:Highlight;border-right-color:Highlight;}}", "@media screen and (max-width: 480px){.r5coedp{max-width:100vw;}}", "@media screen and (max-height: 359px){.r5coedp{overflow-y:auto;padding-left:calc(24px - 4px);border-left-width:4px;border-top-width:4px;border-bottom-width:4px;}}"]
});
const useBackdropBaseStyle = /* @__PURE__ */ __resetStyles("r1e18s3l", null, [".r1e18s3l{inset:0px;background-color:var(--colorBackgroundOverlay);position:fixed;}"]);
const useStyles$2 = /* @__PURE__ */ __styles({
  nestedDialogBackdrop: {
    De3pzq: "f1c21dwh"
  },
  dialogHidden: {
    Bkecrkj: "f1aehjj5"
  }
}, {
  d: [".f1c21dwh{background-color:var(--colorTransparentBackground);}", ".f1aehjj5{pointer-events:none;}"]
});
const useDialogSurfaceStyles_unstable = (state) => {
  "use no memo";
  const {
    isNestedDialog,
    root,
    backdrop,
    open,
    unmountOnClose
  } = state;
  const rootBaseStyle = useRootBaseStyle();
  const backdropBaseStyle = useBackdropBaseStyle();
  const styles = useStyles$2();
  const mountedAndClosed = !unmountOnClose && !open;
  root.className = mergeClasses(dialogSurfaceClassNames.root, rootBaseStyle, mountedAndClosed && styles.dialogHidden, root.className);
  if (backdrop) {
    backdrop.className = mergeClasses(dialogSurfaceClassNames.backdrop, backdropBaseStyle, isNestedDialog && styles.nestedDialogBackdrop, mountedAndClosed && styles.dialogHidden, backdrop.className);
  }
  return state;
};
function useDialogSurfaceContextValues_unstable(state) {
  const dialogSurface = true;
  return {
    dialogSurface
  };
}
const DialogSurface = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const state = useDialogSurface_unstable(props, ref);
  const contextValues = useDialogSurfaceContextValues_unstable();
  useDialogSurfaceStyles_unstable(state);
  useCustomStyleHook("useDialogSurfaceStyles_unstable")(state);
  return renderDialogSurface_unstable(state, contextValues);
});
DialogSurface.displayName = "DialogSurface";
const clampMax = (max2) => {
  const internalMax = max2 <= 0 ? 1 : max2;
  return internalMax;
};
const clampValue = (value, max2) => {
  if (value === void 0) {
    return value;
  }
  const internalValue = value < 0 ? 0 : value > max2 ? max2 : value;
  return internalValue;
};
const useProgressBar_unstable = (props, ref) => {
  const field = useFieldContext_unstable();
  const fieldState = field === null || field === void 0 ? void 0 : field.validationState;
  const { color = fieldState === "error" || fieldState === "warning" || fieldState === "success" ? fieldState : "brand", shape = "rounded", thickness = "medium" } = props;
  var _props_max;
  const max2 = clampMax((_props_max = props.max) !== null && _props_max !== void 0 ? _props_max : 1);
  const value = clampValue(props.value, max2);
  const root = always(getIntrinsicElementProps("div", {
    // FIXME:
    // `ref` is wrongly assigned to be `HTMLElement` instead of `HTMLDivElement`
    // but since it would be a breaking change to fix it, we are casting ref to it's proper type
    ref,
    role: "progressbar",
    "aria-valuemin": value !== void 0 ? 0 : void 0,
    "aria-valuemax": value !== void 0 ? max2 : void 0,
    "aria-valuenow": value,
    "aria-labelledby": field === null || field === void 0 ? void 0 : field.labelId,
    ...props
  }), {
    elementType: "div"
  });
  if (field && (field.validationMessageId || field.hintId)) {
    root["aria-describedby"] = [
      field === null || field === void 0 ? void 0 : field.validationMessageId,
      field === null || field === void 0 ? void 0 : field.hintId,
      root["aria-describedby"]
    ].filter(Boolean).join(" ");
  }
  const bar = always(props.bar, {
    elementType: "div"
  });
  const state = {
    color,
    max: max2,
    shape,
    thickness,
    value,
    components: {
      root: "div",
      bar: "div"
    },
    root,
    bar
  };
  return state;
};
const renderProgressBar_unstable = (state) => {
  return /* @__PURE__ */ jsx(state.root, {
    children: state.bar && /* @__PURE__ */ jsx(state.bar, {})
  });
};
const progressBarClassNames = {
  root: "fui-ProgressBar",
  bar: "fui-ProgressBar__bar"
};
const ZERO_THRESHOLD = 0.01;
const useRootStyles = /* @__PURE__ */ __styles({
  root: {
    mc9l5x: "ftgm304",
    De3pzq: "f18f03hv",
    a9b677: "fly5x3f",
    B68tc82: 0,
    Bmxbyg5: 0,
    Bpg54ce: "f1a3p1vp",
    Bomf52o: "f1skxd4g"
  },
  rounded: {
    Beyfa6y: 0,
    Bbmb7ep: 0,
    Btl43ni: 0,
    B7oj6ja: 0,
    Dimara: "ft85np5"
  },
  square: {
    Beyfa6y: 0,
    Bbmb7ep: 0,
    Btl43ni: 0,
    B7oj6ja: 0,
    Dimara: "f1fabniw"
  },
  medium: {
    Bqenvij: "f4t8t6x"
  },
  large: {
    Bqenvij: "f6ywr7j"
  }
}, {
  d: [".ftgm304{display:block;}", ".f18f03hv{background-color:var(--colorNeutralBackground6);}", ".fly5x3f{width:100%;}", [".f1a3p1vp{overflow:hidden;}", {
    p: -1
  }], [".ft85np5{border-radius:var(--borderRadiusMedium);}", {
    p: -1
  }], [".f1fabniw{border-radius:var(--borderRadiusNone);}", {
    p: -1
  }], ".f4t8t6x{height:2px;}", ".f6ywr7j{height:4px;}"],
  m: [["@media screen and (forced-colors: active){.f1skxd4g{background-color:CanvasText;}}", {
    m: "screen and (forced-colors: active)"
  }]]
});
const useBarStyles = /* @__PURE__ */ __styles({
  base: {
    Bomf52o: "f1tnpuu0",
    Beyfa6y: 0,
    Bbmb7ep: 0,
    Btl43ni: 0,
    B7oj6ja: 0,
    Dimara: "f12b9xdw",
    Bqenvij: "f1l02sjl"
  },
  nonZeroDeterminate: {
    Bmy1vo4: "fjt6zfz",
    B3o57yi: "f1wofebd",
    Bkqvd7p: "fv71qf3"
  },
  indeterminate: {
    B2u0y6b: "fa0wk36",
    qhf8xq: "f10pi13n",
    Bcmaq0h: ["fpo0yib", "f1u5hf6c"],
    Bv12yb3: ["fwd2bol", "f14gig94"],
    vin17d: "f1a27w2r",
    Ezkn3b: "f452v7t",
    w3vfg9: "f1cpbl36",
    jpy9cc: "f3z2g5w",
    Bqo2lbl: "fz5izi4",
    B6plc1d: "fv40pdu",
    I82g5a: "f1uj6jbf"
  },
  brand: {
    De3pzq: "ftywsgz"
  },
  error: {
    De3pzq: "fdl5y0r"
  },
  warning: {
    De3pzq: "f1s438gw"
  },
  success: {
    De3pzq: "flxk52p"
  }
}, {
  m: [["@media screen and (forced-colors: active){.f1tnpuu0{background-color:Highlight;}}", {
    m: "screen and (forced-colors: active)"
  }], ["@media screen and (prefers-reduced-motion: reduce){.f3z2g5w{max-width:100%;}}", {
    m: "screen and (prefers-reduced-motion: reduce)"
  }], ["@media screen and (prefers-reduced-motion: reduce){.fz5izi4{animation-iteration-count:infinite;}}", {
    m: "screen and (prefers-reduced-motion: reduce)"
  }], ["@media screen and (prefers-reduced-motion: reduce){.fv40pdu{animation-duration:3s;}}", {
    m: "screen and (prefers-reduced-motion: reduce)"
  }], ["@media screen and (prefers-reduced-motion: reduce){.f1uj6jbf{animation-name:ftc26vs;}}", {
    m: "screen and (prefers-reduced-motion: reduce)"
  }]],
  d: [[".f12b9xdw{border-radius:inherit;}", {
    p: -1
  }], ".f1l02sjl{height:100%;}", ".fjt6zfz{transition-property:width;}", ".f1wofebd{transition-duration:0.3s;}", ".fv71qf3{transition-timing-function:ease;}", ".fa0wk36{max-width:33%;}", ".f10pi13n{position:relative;}", ".fpo0yib{background-image:linear-gradient(\n      to right,\n      var(--colorNeutralBackground6) 0%,\n      var(--colorTransparentBackground) 50%,\n      var(--colorNeutralBackground6) 100%\n    );}", ".f1u5hf6c{background-image:linear-gradient(\n      to left,\n      var(--colorNeutralBackground6) 0%,\n      var(--colorTransparentBackground) 50%,\n      var(--colorNeutralBackground6) 100%\n    );}", ".fwd2bol{animation-name:f1keuaan;}", ".f14gig94{animation-name:f10x8f8u;}", ".f1a27w2r{animation-duration:3s;}", ".f452v7t{animation-timing-function:linear;}", ".f1cpbl36{animation-iteration-count:infinite;}", ".ftywsgz{background-color:var(--colorCompoundBrandBackground);}", ".fdl5y0r{background-color:var(--colorPaletteRedBackground3);}", ".f1s438gw{background-color:var(--colorPaletteDarkOrangeBackground3);}", ".flxk52p{background-color:var(--colorPaletteGreenBackground3);}"],
  k: ["@keyframes f1keuaan{0%{left:-33%;}100%{left:100%;}}", "@keyframes f10x8f8u{0%{right:-33%;}100%{right:100%;}}", "@keyframes ftc26vs{0%{opacity:.2;}50%{opacity:1;}100%{opacity:.2;}}"]
});
const useProgressBarStyles_unstable = (state) => {
  "use no memo";
  const {
    color,
    max: max2,
    shape,
    thickness,
    value
  } = state;
  const rootStyles = useRootStyles();
  const barStyles = useBarStyles();
  state.root.className = mergeClasses(progressBarClassNames.root, rootStyles.root, rootStyles[shape], rootStyles[thickness], state.root.className);
  if (state.bar) {
    state.bar.className = mergeClasses(progressBarClassNames.bar, barStyles.base, barStyles.brand, value === void 0 && barStyles.indeterminate, value !== void 0 && value > ZERO_THRESHOLD && barStyles.nonZeroDeterminate, color && value !== void 0 && barStyles[color], state.bar.className);
  }
  if (state.bar && value !== void 0) {
    state.bar.style = {
      width: Math.min(100, Math.max(0, value / max2 * 100)) + "%",
      ...state.bar.style
    };
  }
  return state;
};
const ProgressBar = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const state = useProgressBar_unstable(props, ref);
  useProgressBarStyles_unstable(state);
  useCustomStyleHook("useProgressBarStyles_unstable")(state);
  return renderProgressBar_unstable(state);
});
ProgressBar.displayName = "ProgressBar";
const useCardSelectable = (props, { referenceLabel, referenceId }, cardRef) => {
  const { checkbox = {}, onSelectionChange, floatingAction, onClick, onKeyDown, disabled } = props;
  const { findAllFocusable } = useFocusFinders();
  const checkboxRef = reactExports.useRef(null);
  const [selected, setSelected] = useControllableState({
    state: props.selected,
    defaultState: props.defaultSelected,
    initialState: false
  });
  const selectable = [
    props.selected,
    props.defaultSelected,
    onSelectionChange
  ].some((prop) => typeof prop !== "undefined");
  const [selectFocused, setSelectFocused] = reactExports.useState(false);
  const shouldRestrictTriggerAction = reactExports.useCallback((event) => {
    if (!cardRef.current) {
      return false;
    }
    const focusableElements = findAllFocusable(cardRef.current);
    const target = event.target;
    const isElementInFocusableGroup = focusableElements.some((element) => element.contains(target));
    const isCheckboxSlot = (checkboxRef === null || checkboxRef === void 0 ? void 0 : checkboxRef.current) === target;
    return isElementInFocusableGroup && !isCheckboxSlot;
  }, [
    cardRef,
    findAllFocusable
  ]);
  const onChangeHandler = reactExports.useCallback((event) => {
    if (disabled || shouldRestrictTriggerAction(event)) {
      return;
    }
    const newCheckedValue = !selected;
    setSelected(newCheckedValue);
    if (onSelectionChange) {
      onSelectionChange(event, {
        selected: newCheckedValue
      });
    }
  }, [
    disabled,
    onSelectionChange,
    selected,
    setSelected,
    shouldRestrictTriggerAction
  ]);
  const onKeyDownHandler = reactExports.useCallback((event) => {
    if ([
      Enter
    ].includes(event.key)) {
      event.preventDefault();
      onChangeHandler(event);
    }
  }, [
    onChangeHandler
  ]);
  const checkboxSlot = reactExports.useMemo(() => {
    if (!selectable || floatingAction) {
      return;
    }
    const selectableCheckboxProps = {};
    if (referenceId) {
      selectableCheckboxProps["aria-labelledby"] = referenceId;
    } else if (referenceLabel) {
      selectableCheckboxProps["aria-label"] = referenceLabel;
    }
    return optional(checkbox, {
      defaultProps: {
        ref: checkboxRef,
        type: "checkbox",
        checked: selected,
        disabled,
        onChange: (event) => onChangeHandler(event),
        onFocus: () => setSelectFocused(true),
        onBlur: () => setSelectFocused(false),
        ...selectableCheckboxProps
      },
      elementType: "input"
    });
  }, [
    checkbox,
    disabled,
    floatingAction,
    selected,
    selectable,
    onChangeHandler,
    referenceId,
    referenceLabel
  ]);
  const floatingActionSlot = reactExports.useMemo(() => {
    if (!floatingAction) {
      return;
    }
    return optional(floatingAction, {
      defaultProps: {
        ref: checkboxRef
      },
      elementType: "div"
    });
  }, [
    floatingAction
  ]);
  const selectableCardProps = reactExports.useMemo(() => {
    if (!selectable) {
      return null;
    }
    return {
      onClick: mergeCallbacks(onClick, onChangeHandler),
      onKeyDown: mergeCallbacks(onKeyDown, onKeyDownHandler)
    };
  }, [
    selectable,
    onChangeHandler,
    onClick,
    onKeyDown,
    onKeyDownHandler
  ]);
  return {
    selected,
    selectable,
    selectFocused,
    selectableCardProps,
    checkboxSlot,
    floatingActionSlot
  };
};
const cardContext = reactExports.createContext(void 0);
const cardContextDefaultValue = {
  selectableA11yProps: {
    referenceId: void 0,
    setReferenceId() {
    },
    referenceLabel: void 0,
    setReferenceLabel() {
    }
  }
};
const CardProvider = cardContext.Provider;
const useCardContext_unstable = () => {
  var _React_useContext;
  return (_React_useContext = reactExports.useContext(cardContext)) !== null && _React_useContext !== void 0 ? _React_useContext : cardContextDefaultValue;
};
const focusMap = {
  off: void 0,
  "no-tab": "limited-trap-focus",
  "tab-exit": "limited",
  "tab-only": "unlimited"
};
const useCardInteractive = ({ focusMode: initialFocusMode, disabled = false, ...props }) => {
  const interactive = [
    "onClick",
    "onDoubleClick",
    "onMouseUp",
    "onMouseDown",
    "onPointerUp",
    "onPointerDown",
    "onTouchStart",
    "onTouchEnd",
    "onDragStart",
    "onDragEnd"
  ].some((prop) => props[prop]);
  const focusMode = initialFocusMode !== null && initialFocusMode !== void 0 ? initialFocusMode : interactive ? "no-tab" : "off";
  const groupperAttrs = useFocusableGroup({
    tabBehavior: focusMap[focusMode]
  });
  if (disabled) {
    return {
      interactive: false,
      focusAttributes: null
    };
  }
  if (focusMode === "off") {
    return {
      interactive,
      focusAttributes: null
    };
  }
  return {
    interactive,
    focusAttributes: {
      ...groupperAttrs,
      tabIndex: 0
    }
  };
};
const useCard_unstable = (props, ref) => {
  const { appearance = "filled", orientation = "vertical", size: size2 = "medium", disabled = false, ...restProps } = props;
  const [referenceId, setReferenceId] = reactExports.useState(cardContextDefaultValue.selectableA11yProps.referenceId);
  const [referenceLabel, setReferenceLabel] = reactExports.useState(cardContextDefaultValue.selectableA11yProps.referenceId);
  const cardBaseRef = useFocusWithin();
  const { selectable, selected, selectableCardProps, selectFocused, checkboxSlot, floatingActionSlot } = useCardSelectable(props, {
    referenceId,
    referenceLabel
  }, cardBaseRef);
  const cardRef = useMergedRefs(cardBaseRef, ref);
  const { interactive, focusAttributes } = useCardInteractive(props);
  let cardRootProps = {
    ...!selectable ? focusAttributes : null,
    ...restProps,
    ...selectableCardProps
  };
  if (disabled) {
    cardRootProps = {
      ...restProps,
      "aria-disabled": true,
      onClick: void 0
    };
  }
  return {
    appearance,
    orientation,
    size: size2,
    interactive,
    selectable,
    selectFocused,
    selected,
    disabled,
    selectableA11yProps: {
      setReferenceId,
      referenceId,
      referenceLabel,
      setReferenceLabel
    },
    components: {
      root: "div",
      floatingAction: "div",
      checkbox: "input"
    },
    root: always(getIntrinsicElementProps("div", {
      ref: cardRef,
      role: "group",
      ...cardRootProps
    }), {
      elementType: "div"
    }),
    floatingAction: floatingActionSlot,
    checkbox: checkboxSlot
  };
};
const renderCard_unstable = (state, cardContextValue) => {
  return /* @__PURE__ */ jsx(state.root, {
    children: /* @__PURE__ */ jsxs(CardProvider, {
      value: cardContextValue,
      children: [
        state.checkbox ? /* @__PURE__ */ jsx(state.checkbox, {}) : null,
        state.floatingAction ? /* @__PURE__ */ jsx(state.floatingAction, {}) : null,
        state.root.children
      ]
    })
  });
};
const cardPreviewClassNames = {
  root: "fui-CardPreview",
  logo: "fui-CardPreview__logo"
};
const useStyles$1 = /* @__PURE__ */ __styles({
  root: {
    qhf8xq: "f10pi13n",
    Byfpedg: "fgourly",
    Btj6oj6: "f1vui7lx",
    B1m4t4s: "fda5zwx"
  },
  logo: {
    qhf8xq: "f1euv43f",
    B5kzvoi: "f1gcvs1y",
    oyh7mz: ["f1t6tvco", "ffrfxm3"],
    a9b677: "f1szoe96",
    Bqenvij: "f1d2rq10"
  }
}, {
  d: [".f10pi13n{position:relative;}", ".fgourly>:not(.fui-CardPreview__logo){display:block;}", ".f1vui7lx>:not(.fui-CardPreview__logo){height:100%;}", ".fda5zwx>:not(.fui-CardPreview__logo){width:100%;}", ".f1euv43f{position:absolute;}", ".f1gcvs1y{bottom:12px;}", ".f1t6tvco{left:12px;}", ".ffrfxm3{right:12px;}", ".f1szoe96{width:32px;}", ".f1d2rq10{height:32px;}"]
});
const useCardPreviewStyles_unstable = (state) => {
  "use no memo";
  const styles = useStyles$1();
  state.root.className = mergeClasses(cardPreviewClassNames.root, styles.root, state.root.className);
  if (state.logo) {
    state.logo.className = mergeClasses(cardPreviewClassNames.logo, styles.logo, state.logo.className);
  }
  return state;
};
const cardHeaderClassNames = {
  root: "fui-CardHeader",
  image: "fui-CardHeader__image",
  header: "fui-CardHeader__header",
  description: "fui-CardHeader__description",
  action: "fui-CardHeader__action"
};
const useStyles = /* @__PURE__ */ __styles({
  root: {
    Bkc6ea2: "fkufhic",
    Bt984gj: "f122n59"
  },
  image: {
    mc9l5x: "ftuwxu6",
    t21cq0: ["fql5097", "f6yss9k"]
  },
  header: {
    mc9l5x: "f22iagw"
  },
  description: {
    mc9l5x: "f22iagw"
  },
  action: {
    Frg6f3: ["f6yss9k", "fql5097"],
    rjrqlh: "fs9eatd",
    Boue1pl: ["fxoo9ru", "f1g0ekvh"],
    Bhz1vi0: "f1m6zfxz",
    etxrgc: ["f1g0ekvh", "fxoo9ru"],
    Bdua9ef: "f1sret3r",
    cbfxhg: "fs4gbcv"
  }
}, {
  d: [".fkufhic{--fui-CardHeader--gap:12px;}", ".f122n59{align-items:center;}", ".ftuwxu6{display:inline-flex;}", ".fql5097{margin-right:var(--fui-CardHeader--gap);}", ".f6yss9k{margin-left:var(--fui-CardHeader--gap);}", ".f22iagw{display:flex;}"],
  m: [["@media (forced-colors: active){.fs9eatd .fui-Button,.fs9eatd .fui-Link{border-top-color:currentColor;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1g0ekvh .fui-Button,.f1g0ekvh .fui-Link{border-left-color:currentColor;}.fxoo9ru .fui-Button,.fxoo9ru .fui-Link{border-right-color:currentColor;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1m6zfxz .fui-Button,.f1m6zfxz .fui-Link{border-bottom-color:currentColor;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1sret3r .fui-Button,.f1sret3r .fui-Link{color:currentColor;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fs4gbcv .fui-Button,.fs4gbcv .fui-Link{outline-color:currentColor;}}", {
    m: "(forced-colors: active)"
  }]]
});
const useStylesGrid = /* @__PURE__ */ __styles({
  root: {
    mc9l5x: "f13qh94s",
    t4k1zu: "f8a668j"
  },
  image: {
    Br312pm: "fwpfdsa",
    Ijaq50: "fldnz9j"
  },
  header: {
    Br312pm: "fd46tj4",
    Ijaq50: "f16hsg94"
  },
  description: {
    Br312pm: "fd46tj4",
    Ijaq50: "faunodf"
  },
  action: {
    Br312pm: "fis13di",
    Ijaq50: "fldnz9j"
  }
}, {
  d: [".f13qh94s{display:grid;}", ".f8a668j{grid-auto-columns:min-content 1fr min-content;}", ".fwpfdsa{grid-column-start:1;}", ".fldnz9j{grid-row-start:span 2;}", ".fd46tj4{grid-column-start:2;}", ".f16hsg94{grid-row-start:1;}", ".faunodf{grid-row-start:2;}", ".fis13di{grid-column-start:3;}"]
});
const useStylesFlex = /* @__PURE__ */ __styles({
  root: {
    mc9l5x: "f22iagw"
  },
  header: {
    Bh6795r: "fqerorx"
  },
  image: {},
  description: {},
  action: {}
}, {
  d: [".f22iagw{display:flex;}", ".fqerorx{flex-grow:1;}"]
});
const useCardHeaderStyles_unstable = (state) => {
  "use no memo";
  const styles = useStyles();
  const stylesGrid = useStylesGrid();
  const stylesFlex = useStylesFlex();
  const boxModelStyles = state.description ? stylesGrid : stylesFlex;
  const getSlotStyles = (slotName) => {
    var _state_slotName;
    return mergeClasses(cardHeaderClassNames[slotName], styles[slotName], boxModelStyles[slotName], (_state_slotName = state[slotName]) === null || _state_slotName === void 0 ? void 0 : _state_slotName.className);
  };
  state.root.className = getSlotStyles("root");
  if (state.image) {
    state.image.className = getSlotStyles("image");
  }
  if (state.header) {
    state.header.className = getSlotStyles("header");
  }
  if (state.description) {
    state.description.className = getSlotStyles("description");
  }
  if (state.action) {
    state.action.className = getSlotStyles("action");
  }
  return state;
};
const cardClassNames = {
  root: "fui-Card",
  floatingAction: "fui-Card__floatingAction",
  checkbox: "fui-Card__checkbox"
};
const useCardResetStyles = /* @__PURE__ */ __resetStyles("rfxo2k2", "rgle7w9", [".rfxo2k2{overflow:hidden;border-radius:var(--fui-Card--border-radius);padding:var(--fui-Card--size);gap:var(--fui-Card--size);display:flex;position:relative;box-sizing:border-box;color:var(--colorNeutralForeground1);}", '.rfxo2k2::after{position:absolute;top:0;left:0;right:0;bottom:0;content:"";pointer-events:none;border-top-style:solid;border-right-style:solid;border-bottom-style:solid;border-left-style:solid;border-top-width:var(--strokeWidthThin);border-right-width:var(--strokeWidthThin);border-bottom-width:var(--strokeWidthThin);border-left-width:var(--strokeWidthThin);border-radius:var(--fui-Card--border-radius);}', ".rfxo2k2>.fui-CardHeader,.rfxo2k2>.fui-CardFooter{flex-shrink:0;}", ".rgle7w9{overflow:hidden;border-radius:var(--fui-Card--border-radius);padding:var(--fui-Card--size);gap:var(--fui-Card--size);display:flex;position:relative;box-sizing:border-box;color:var(--colorNeutralForeground1);}", '.rgle7w9::after{position:absolute;top:0;right:0;left:0;bottom:0;content:"";pointer-events:none;border-top-style:solid;border-left-style:solid;border-bottom-style:solid;border-right-style:solid;border-top-width:var(--strokeWidthThin);border-left-width:var(--strokeWidthThin);border-bottom-width:var(--strokeWidthThin);border-right-width:var(--strokeWidthThin);border-radius:var(--fui-Card--border-radius);}', ".rgle7w9>.fui-CardHeader,.rgle7w9>.fui-CardFooter{flex-shrink:0;}"]);
const useCardStyles = /* @__PURE__ */ __styles({
  focused: {
    Brovlpu: "ftqa4ok",
    B486eqv: "f2hkw1w",
    B8q5s1w: "f8hki3x",
    Bci5o5g: ["f1d2448m", "ffh67wi"],
    n8qw10: "f1bjia2o",
    Bdrgwmp: ["ffh67wi", "f1d2448m"],
    Bqhya38: "f1j6vpng",
    Bwxa6fj: ["f1pniga2", "f1ffjurs"],
    Bdhvstf: "f987i1v",
    B7zbvrb: ["f1ffjurs", "f1pniga2"],
    Bm4h7ae: "f15bsgw9",
    B7ys5i9: "f14e48fq",
    Busjfv9: "f18yb2kv",
    Bhk32uz: "fd6o370",
    f6g5ot: 0,
    Boxcth7: 0,
    Bhdgwq3: 0,
    hgwjuy: 0,
    Bshpdp8: 0,
    Bsom6fd: 0,
    Blkhhs4: 0,
    Bonggc9: 0,
    Ddfuxk: 0,
    i03rao: 0,
    kclons: 0,
    clg4pj: 0,
    Bpqj9nj: 0,
    B6dhp37: 0,
    Bf4ptjt: 0,
    Bqtpl0w: 0,
    i4rwgc: "fpqizxz",
    Dah5zi: 0,
    B1tsrr9: 0,
    qqdqy8: 0,
    Bkh64rk: 0,
    e3fwne: "fnd8nzh",
    J0r882: "f15fr7a0",
    Bule8hv: ["fwsq40z", "fy0y4wt"],
    Bjwuhne: "f34ld9f",
    Ghsupd: ["fy0y4wt", "fwsq40z"]
  },
  selectableFocused: {
    Brovlpu: "ftqa4ok",
    B486eqv: "f2hkw1w",
    Bssx7fj: "f1b1k54r",
    uh7if5: ["f4ne723", "fqqcjud"],
    clntm0: "fh7aioi",
    Dlk2r6: ["fqqcjud", "f4ne723"],
    h6p2u: "f1ufm4qn",
    I6qiy5: ["f1qnwcb4", "fgrk5zm"],
    yzno9d: "fi52z01",
    By0wis0: ["fgrk5zm", "f1qnwcb4"],
    B2j2mmj: "ffht0p2",
    wigs8: "f1p0ul1q",
    pbfy6t: "f1c901ms",
    B0v4ure: "f1alokd7",
    Byrf0fs: 0,
    Bsiemmq: 0,
    Bwckmig: 0,
    skfxo0: 0,
    Iidy0u: 0,
    B98u21t: 0,
    Bvwlmkc: 0,
    jo1ztg: 0,
    Ba1iezr: 0,
    Blmvk6g: 0,
    B24cy0v: 0,
    Bil7v7r: 0,
    Br3gin4: 0,
    nr063g: 0,
    ghq09: 0,
    Bbgo44z: 0,
    Bseh09z: "f1i978nd",
    az1dzo: 0,
    Ba3ybja: 0,
    B6352mv: 0,
    vppk2z: 0,
    Biaj6j7: "f1nh8hsq",
    B2pnrqr: "f1amxum7",
    B29w5g4: ["f1cec8w7", "f554mv0"],
    Bhhzhcn: "f1sj6kbr",
    Bec0n69: ["f554mv0", "f1cec8w7"]
  },
  orientationHorizontal: {
    Beiy3e4: "f1063pyq",
    Bt984gj: "f122n59",
    Binpb3b: "ftrw7vg",
    qrt8p2: "f18opajm",
    k6ws3r: ["f13002it", "fqo182t"],
    Btcwela: ["f18yna97", "f1kd6wh7"],
    Fer9m8: "f4i4759"
  },
  orientationVertical: {
    Beiy3e4: "f1vx9l62",
    B5nvv7i: ["f14k419y", "f1fgo9fz"],
    Baxg94k: ["f1fgo9fz", "f14k419y"],
    tn21ii: "fvqmfsm",
    B0ud6bj: "f3am6yf",
    Bgdo4j: "f1r5wgso"
  },
  sizeSmall: {
    B7balbw: "f1pi9uxy",
    B1h88n7: "f1h1zgly"
  },
  sizeMedium: {
    B7balbw: "frsmuga",
    B1h88n7: "fuldkky"
  },
  sizeLarge: {
    B7balbw: "f1qua4xo",
    B1h88n7: "fimkt6v"
  },
  interactive: {
    rhjd8f: "f1epqm3e"
  },
  filled: {
    De3pzq: "fxugw4r",
    E5pizo: "f1whvlc6",
    B0n5ga8: "f16gxe2i",
    s924m2: ["fpgykix", "fzybk4o"],
    B1q35kw: "f1osi826",
    Gp14am: ["fzybk4o", "fpgykix"]
  },
  filledInteractive: {
    Bceei9c: "f1k6fduh",
    De3pzq: "fxugw4r",
    E5pizo: "f1whvlc6",
    B0n5ga8: "f16gxe2i",
    s924m2: ["fpgykix", "fzybk4o"],
    B1q35kw: "f1osi826",
    Gp14am: ["fzybk4o", "fpgykix"],
    Bi91k9c: "feu1g3u",
    Jwef8y: "f1knas48",
    Bvxd0ez: "f1m145df",
    ecr2s2: "fb40n2d"
  },
  filledInteractiveSelected: {
    De3pzq: "f1nfm20t",
    B0n5ga8: "f16eln5f",
    s924m2: ["fa2okxs", "fg4zq3l"],
    B1q35kw: "ff6932p",
    Gp14am: ["fg4zq3l", "fa2okxs"],
    Bi91k9c: "fx9teim",
    Jwef8y: "f1kz6goq"
  },
  filledAlternative: {
    De3pzq: "f1dmdbja",
    E5pizo: "f1whvlc6",
    B0n5ga8: "f16gxe2i",
    s924m2: ["fpgykix", "fzybk4o"],
    B1q35kw: "f1osi826",
    Gp14am: ["fzybk4o", "fpgykix"]
  },
  filledAlternativeInteractive: {
    Bceei9c: "f1k6fduh",
    De3pzq: "f1dmdbja",
    E5pizo: "f1whvlc6",
    B0n5ga8: "f16gxe2i",
    s924m2: ["fpgykix", "fzybk4o"],
    B1q35kw: "f1osi826",
    Gp14am: ["fzybk4o", "fpgykix"],
    Bi91k9c: "fnwyq0v",
    Jwef8y: "f1uvynv3",
    Bvxd0ez: "f1m145df",
    ecr2s2: "f1yhgkbh"
  },
  filledAlternativeInteractiveSelected: {
    De3pzq: "fjxa0vh",
    B0n5ga8: "f16eln5f",
    s924m2: ["fa2okxs", "fg4zq3l"],
    B1q35kw: "ff6932p",
    Gp14am: ["fg4zq3l", "fa2okxs"],
    Bi91k9c: "f1luvkty",
    Jwef8y: "fehi0vp"
  },
  outline: {
    De3pzq: "f1c21dwh",
    E5pizo: "f1couhl3",
    B0n5ga8: "ft83z1f",
    s924m2: ["f1g4150c", "f192dr6e"],
    B1q35kw: "f1qnawh6",
    Gp14am: ["f192dr6e", "f1g4150c"]
  },
  outlineInteractive: {
    Bceei9c: "f1k6fduh",
    De3pzq: "f1c21dwh",
    E5pizo: "f1couhl3",
    B0n5ga8: "ft83z1f",
    s924m2: ["f1g4150c", "f192dr6e"],
    B1q35kw: "f1qnawh6",
    Gp14am: ["f192dr6e", "f1g4150c"],
    Bi91k9c: "feu1g3u",
    Jwef8y: "fjxutwb",
    Be0v6ae: "f1llr77y",
    B5kxglz: ["fzk0khw", "fjj8tog"],
    B3pwyw6: "fb1u8ub",
    Bymgtzf: ["fjj8tog", "fzk0khw"],
    ecr2s2: "fophhak",
    dmfk: "f1uohb70",
    B4ofi8: ["f1jm7v1n", "f1bus3rq"],
    jgq6uv: "f1fbu7rr",
    Baxewws: ["f1bus3rq", "f1jm7v1n"]
  },
  outlineInteractiveSelected: {
    De3pzq: "f1q9pm1r",
    B0n5ga8: "f16eln5f",
    s924m2: ["fa2okxs", "fg4zq3l"],
    B1q35kw: "ff6932p",
    Gp14am: ["fg4zq3l", "fa2okxs"],
    Bi91k9c: "fx9teim",
    Jwef8y: "fg59vm4"
  },
  outlineDisabled: {
    De3pzq: "f1c21dwh",
    E5pizo: "f1couhl3",
    g2u3we: "f1jj8ep1",
    h3c5rm: ["f15xbau", "fy0fskl"],
    B9xav0g: "f4ikngz",
    zhjwy3: ["fy0fskl", "f15xbau"],
    ezxybo: "f1ls5moo",
    wc7uws: "f1qiza15",
    B0n5ga8: "f13dj02",
    s924m2: ["f9wngki", "f17v59j0"],
    B1q35kw: "f1vxzwsp",
    Gp14am: ["f17v59j0", "f9wngki"]
  },
  subtle: {
    De3pzq: "fhovq9v",
    E5pizo: "f1couhl3",
    B0n5ga8: "f16gxe2i",
    s924m2: ["fpgykix", "fzybk4o"],
    B1q35kw: "f1osi826",
    Gp14am: ["fzybk4o", "fpgykix"]
  },
  subtleInteractive: {
    Bceei9c: "f1k6fduh",
    De3pzq: "fhovq9v",
    E5pizo: "f1couhl3",
    B0n5ga8: "f16gxe2i",
    s924m2: ["fpgykix", "fzybk4o"],
    B1q35kw: "f1osi826",
    Gp14am: ["fzybk4o", "fpgykix"],
    Bi91k9c: "feu1g3u",
    Jwef8y: "f1t94bn6",
    ecr2s2: "f1wfn5kd"
  },
  subtleInteractiveSelected: {
    De3pzq: "fq5gl1p",
    B0n5ga8: "f16eln5f",
    s924m2: ["fa2okxs", "fg4zq3l"],
    B1q35kw: "ff6932p",
    Gp14am: ["fg4zq3l", "fa2okxs"],
    Bi91k9c: "fx9teim",
    Jwef8y: "f1uqaxdt"
  },
  highContrastSelected: {
    B8gzw0y: "f1h3a8gf",
    By8wz76: "f1nz3ub2",
    B7iucu3: "fqc85l4",
    Boo9lyk: "f1ucc5z8",
    sga51p: "fyj59f4",
    qj1yg9: ["f19v95gn", "f1n69f6i"],
    B8acmzm: "f16q7dot",
    Gezqo6: ["f1n69f6i", "f19v95gn"]
  },
  highContrastInteractive: {
    waf3gn: "f1quqgnd",
    B96h8j5: "f193utb4",
    Bpd3jnq: "f1io67iv",
    uhbujs: "f3n01jk",
    sga51p: "fyj59f4",
    qj1yg9: ["f19v95gn", "f1n69f6i"],
    B8acmzm: "f16q7dot",
    Gezqo6: ["f1n69f6i", "f19v95gn"]
  },
  select: {
    qhf8xq: "f1euv43f",
    Bhzewxz: "fqclxi7",
    j35jbq: ["fiv86kb", "f36uhnt"],
    Bj3rh1h: "fom9my7"
  },
  hiddenCheckbox: {
    B68tc82: 0,
    Bmxbyg5: 0,
    Bpg54ce: "f1a3p1vp",
    a9b677: "frkrog8",
    Bqenvij: "f1mpe4l3",
    qhf8xq: "f1euv43f",
    Bh84pgu: "fmf1zke",
    Bgl5zvf: "f1wch0ki",
    Huce71: "fz5stix"
  },
  disabled: {
    Bceei9c: "fdrzuqr",
    famaaq: "f1xqy1su",
    sj55zd: "f1s2aq7o",
    De3pzq: "f1bg9a2p",
    E5pizo: "fyed02w",
    g2u3we: "f1jj8ep1",
    h3c5rm: ["f15xbau", "fy0fskl"],
    B9xav0g: "f4ikngz",
    zhjwy3: ["fy0fskl", "f15xbau"],
    Ftih45: "f1wl9k8s",
    Brfgrao: "f1j7ml58",
    lawp4y: 0,
    Fbdkly: 0,
    mdwyqc: 0,
    Bciustq: 0,
    gc50h5: "f13vvzas",
    Ehzi8l: "f198lalb",
    B0n5ga8: "f13dj02",
    s924m2: ["f9wngki", "f17v59j0"],
    B1q35kw: "f1vxzwsp",
    Gp14am: ["f17v59j0", "f9wngki"],
    Bikrtoi: "f11og98d",
    G8qf51: "f1rg3h4v",
    Brxh4y7: "fbm2y3b",
    ezxybo: "f4yodeu",
    wc7uws: "fcwfbwp",
    gp3uxg: "f1repx37",
    Fohawp: ["f1ybi8ct", "f1h4eg6q"],
    Bxulg6k: "f18mejnb",
    vcjq4m: ["f1h4eg6q", "f1ybi8ct"],
    Bsqkqe9: "f1nift3m",
    fskg1g: "f1wu3i8x",
    iwiei9: 0,
    Effecx: 0,
    Bkt1b9m: 0,
    jfmxvr: 0,
    orauir: "f6v4vfa",
    B2yd9ot: "folrdqs",
    Fn9tzk: "f168z5yf",
    Bv0wker: ["fpor7gj", "fzextn6"],
    Bp2dl5b: "f1yaw79v",
    pzn0iz: ["fzextn6", "fpor7gj"]
  }
}, {
  f: [".ftqa4ok:focus{outline-style:none;}"],
  i: [".f2hkw1w:focus-visible{outline-style:none;}"],
  d: [".f8hki3x[data-fui-focus-visible]{border-top-color:transparent;}", ".f1d2448m[data-fui-focus-visible]{border-right-color:transparent;}", ".ffh67wi[data-fui-focus-visible]{border-left-color:transparent;}", ".f1bjia2o[data-fui-focus-visible]{border-bottom-color:transparent;}", '.f15bsgw9[data-fui-focus-visible]::after{content:"";}', ".f14e48fq[data-fui-focus-visible]::after{position:absolute;}", ".f18yb2kv[data-fui-focus-visible]::after{pointer-events:none;}", ".fd6o370[data-fui-focus-visible]::after{z-index:1;}", [".fpqizxz[data-fui-focus-visible]::after{border:var(--strokeWidthThick) solid var(--colorStrokeFocus2);}", {
    p: -2
  }], [".fnd8nzh[data-fui-focus-visible]::after{border-radius:var(--fui-Card--border-radius);}", {
    p: -1
  }], ".f15fr7a0[data-fui-focus-visible]::after{top:calc(0px - var(--strokeWidthThick) - -2px);}", ".fwsq40z[data-fui-focus-visible]::after{right:calc(0px - var(--strokeWidthThick) - -2px);}", ".fy0y4wt[data-fui-focus-visible]::after{left:calc(0px - var(--strokeWidthThick) - -2px);}", ".f34ld9f[data-fui-focus-visible]::after{bottom:calc(0px - var(--strokeWidthThick) - -2px);}", ".f1b1k54r[data-fui-focus-within]:focus-within{border-top-color:transparent;}", ".f4ne723[data-fui-focus-within]:focus-within{border-right-color:transparent;}", ".fqqcjud[data-fui-focus-within]:focus-within{border-left-color:transparent;}", ".fh7aioi[data-fui-focus-within]:focus-within{border-bottom-color:transparent;}", '.ffht0p2[data-fui-focus-within]:focus-within::after{content:"";}', ".f1p0ul1q[data-fui-focus-within]:focus-within::after{position:absolute;}", ".f1c901ms[data-fui-focus-within]:focus-within::after{pointer-events:none;}", ".f1alokd7[data-fui-focus-within]:focus-within::after{z-index:1;}", [".f1i978nd[data-fui-focus-within]:focus-within::after{border:var(--strokeWidthThick) solid var(--colorStrokeFocus2);}", {
    p: -2
  }], [".f1nh8hsq[data-fui-focus-within]:focus-within::after{border-radius:var(--fui-Card--border-radius);}", {
    p: -1
  }], ".f1amxum7[data-fui-focus-within]:focus-within::after{top:calc(0px - var(--strokeWidthThick) - -2px);}", ".f1cec8w7[data-fui-focus-within]:focus-within::after{right:calc(0px - var(--strokeWidthThick) - -2px);}", ".f554mv0[data-fui-focus-within]:focus-within::after{left:calc(0px - var(--strokeWidthThick) - -2px);}", ".f1sj6kbr[data-fui-focus-within]:focus-within::after{bottom:calc(0px - var(--strokeWidthThick) - -2px);}", ".f1063pyq{flex-direction:row;}", ".f122n59{align-items:center;}", ".ftrw7vg>.fui-CardPreview{margin-top:calc(var(--fui-Card--size) * -1);}", ".f18opajm>.fui-CardPreview{margin-bottom:calc(var(--fui-Card--size) * -1);}", '.f13002it>:not([aria-hidden="true"]).fui-CardPreview:first-of-type{margin-left:calc(var(--fui-Card--size) * -1);}', '.fqo182t>:not([aria-hidden="true"]).fui-CardPreview:first-of-type{margin-right:calc(var(--fui-Card--size) * -1);}', '.f18yna97>:not([aria-hidden="true"]).fui-CardPreview:last-of-type{margin-right:calc(var(--fui-Card--size) * -1);}', '.f1kd6wh7>:not([aria-hidden="true"]).fui-CardPreview:last-of-type{margin-left:calc(var(--fui-Card--size) * -1);}', ".f4i4759>.fui-CardHeader:last-of-type,.f4i4759>.fui-CardFooter:last-of-type{flex-grow:1;}", ".f1vx9l62{flex-direction:column;}", ".f14k419y>.fui-CardPreview{margin-left:calc(var(--fui-Card--size) * -1);}", ".f1fgo9fz>.fui-CardPreview{margin-right:calc(var(--fui-Card--size) * -1);}", '.fvqmfsm>:not([aria-hidden="true"]).fui-CardPreview:first-of-type{margin-top:calc(var(--fui-Card--size) * -1);}', ".f3am6yf>.fui-Card__floatingAction+.fui-CardPreview{margin-top:calc(var(--fui-Card--size) * -1);}", '.f1r5wgso>:not([aria-hidden="true"]).fui-CardPreview:last-of-type{margin-bottom:calc(var(--fui-Card--size) * -1);}', ".f1pi9uxy{--fui-Card--size:8px;}", ".f1h1zgly{--fui-Card--border-radius:var(--borderRadiusSmall);}", ".frsmuga{--fui-Card--size:12px;}", ".fuldkky{--fui-Card--border-radius:var(--borderRadiusMedium);}", ".f1qua4xo{--fui-Card--size:16px;}", ".fimkt6v{--fui-Card--border-radius:var(--borderRadiusLarge);}", ".f1epqm3e .fui-Text{color:currentColor;}", ".fxugw4r{background-color:var(--colorNeutralBackground1);}", ".f1whvlc6{box-shadow:var(--shadow4);}", ".f16gxe2i::after{border-top-color:var(--colorTransparentStroke);}", ".fpgykix::after{border-right-color:var(--colorTransparentStroke);}", ".fzybk4o::after{border-left-color:var(--colorTransparentStroke);}", ".f1osi826::after{border-bottom-color:var(--colorTransparentStroke);}", ".f1k6fduh{cursor:pointer;}", ".f1nfm20t{background-color:var(--colorNeutralBackground1Selected);}", ".f16eln5f::after{border-top-color:var(--colorNeutralStroke1Selected);}", ".fa2okxs::after{border-right-color:var(--colorNeutralStroke1Selected);}", ".fg4zq3l::after{border-left-color:var(--colorNeutralStroke1Selected);}", ".ff6932p::after{border-bottom-color:var(--colorNeutralStroke1Selected);}", ".f1dmdbja{background-color:var(--colorNeutralBackground2);}", ".fjxa0vh{background-color:var(--colorNeutralBackground2Selected);}", ".f1c21dwh{background-color:var(--colorTransparentBackground);}", ".f1couhl3{box-shadow:none;}", ".ft83z1f::after{border-top-color:var(--colorNeutralStroke1);}", ".f1g4150c::after{border-right-color:var(--colorNeutralStroke1);}", ".f192dr6e::after{border-left-color:var(--colorNeutralStroke1);}", ".f1qnawh6::after{border-bottom-color:var(--colorNeutralStroke1);}", ".f1q9pm1r{background-color:var(--colorTransparentBackgroundSelected);}", ".f1jj8ep1{border-top-color:var(--colorNeutralStrokeDisabled);}", ".f15xbau{border-right-color:var(--colorNeutralStrokeDisabled);}", ".fy0fskl{border-left-color:var(--colorNeutralStrokeDisabled);}", ".f4ikngz{border-bottom-color:var(--colorNeutralStrokeDisabled);}", ".f13dj02::after{border-top-color:var(--colorNeutralStrokeDisabled);}", ".f9wngki::after{border-right-color:var(--colorNeutralStrokeDisabled);}", ".f17v59j0::after{border-left-color:var(--colorNeutralStrokeDisabled);}", ".f1vxzwsp::after{border-bottom-color:var(--colorNeutralStrokeDisabled);}", ".fhovq9v{background-color:var(--colorSubtleBackground);}", ".fq5gl1p{background-color:var(--colorSubtleBackgroundSelected);}", ".f1euv43f{position:absolute;}", ".fqclxi7{top:4px;}", ".fiv86kb{right:4px;}", ".f36uhnt{left:4px;}", ".fom9my7{z-index:var(--zIndexContent, 1);}", [".f1a3p1vp{overflow:hidden;}", {
    p: -1
  }], ".frkrog8{width:1px;}", ".f1mpe4l3{height:1px;}", ".fmf1zke{clip:rect(0 0 0 0);}", ".f1wch0ki{clip-path:inset(50%);}", ".fz5stix{white-space:nowrap;}", ".fdrzuqr{cursor:not-allowed;}", ".f1xqy1su{-webkit-user-select:none;-moz-user-select:none;user-select:none;}", ".f1s2aq7o{color:var(--colorNeutralForegroundDisabled);}", ".f1bg9a2p{background-color:var(--colorNeutralBackgroundDisabled);}", ".fyed02w{box-shadow:var(--shadow2);}", '.f1wl9k8s::before{content:"";}', ".f1j7ml58::before{position:absolute;}", [".f13vvzas::before{inset:0;}", {
    p: -1
  }], ".f198lalb::before{z-index:calc(var(--zIndexContent, 1) + 1);}"],
  m: [["@media (forced-colors: active){.f1j6vpng[data-fui-focus-visible]::after{border-top-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1ffjurs[data-fui-focus-visible]::after{border-left-color:Highlight;}.f1pniga2[data-fui-focus-visible]::after{border-right-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f987i1v[data-fui-focus-visible]::after{border-bottom-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1ufm4qn[data-fui-focus-within]:focus-within::after{border-top-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1qnwcb4[data-fui-focus-within]:focus-within::after{border-right-color:Highlight;}.fgrk5zm[data-fui-focus-within]:focus-within::after{border-left-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fi52z01[data-fui-focus-within]:focus-within::after{border-bottom-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1h3a8gf{forced-color-adjust:none;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1nz3ub2{background-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fqc85l4{color:HighlightText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1ucc5z8 .fui-CardPreview,.f1ucc5z8 .fui-CardFooter{forced-color-adjust:auto;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.fyj59f4::after{border-top-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f19v95gn::after{border-right-color:Highlight;}.f1n69f6i::after{border-left-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f16q7dot::after{border-bottom-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1quqgnd:hover,.f1quqgnd :active{forced-color-adjust:none;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f193utb4:hover,.f193utb4 :active{background-color:Highlight;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f1io67iv:hover,.f1io67iv :active{color:HighlightText;}}", {
    m: "(forced-colors: active)"
  }], ["@media (forced-colors: active){.f3n01jk:hover .fui-CardPreview,.f3n01jk :active .fui-CardPreview,.f3n01jk:hover .fui-CardFooter,.f3n01jk :active .fui-CardFooter{forced-color-adjust:auto;}}", {
    m: "(forced-colors: active)"
  }]],
  h: [".feu1g3u:hover{color:var(--colorNeutralForeground1Hover);}", ".f1knas48:hover{background-color:var(--colorNeutralBackground1Hover);}", ".f1m145df:hover{box-shadow:var(--shadow8);}", ".fx9teim:hover{color:var(--colorNeutralForeground1Selected);}", ".f1kz6goq:hover{background-color:var(--colorNeutralBackground1Selected);}", ".fnwyq0v:hover{color:var(--colorNeutralForeground2Hover);}", ".f1uvynv3:hover{background-color:var(--colorNeutralBackground2Hover);}", ".f1luvkty:hover{color:var(--colorNeutralForeground2Selected);}", ".fehi0vp:hover{background-color:var(--colorNeutralBackground2Selected);}", ".fjxutwb:hover{background-color:var(--colorTransparentBackgroundHover);}", ".f1llr77y:hover::after{border-top-color:var(--colorNeutralStroke1Hover);}", ".fzk0khw:hover::after{border-right-color:var(--colorNeutralStroke1Hover);}", ".fjj8tog:hover::after{border-left-color:var(--colorNeutralStroke1Hover);}", ".fb1u8ub:hover::after{border-bottom-color:var(--colorNeutralStroke1Hover);}", ".fg59vm4:hover{background-color:var(--colorTransparentBackgroundSelected);}", ".f1ls5moo:hover,.f1ls5moo:active{background-color:var(--colorTransparentBackground);}", ".f1qiza15:hover,.f1qiza15:active{box-shadow:none;}", ".f1t94bn6:hover{background-color:var(--colorSubtleBackgroundHover);}", ".f1uqaxdt:hover{background-color:var(--colorSubtleBackgroundSelected);}", ".f11og98d:hover,.f11og98d:active{cursor:not-allowed;}", ".f1rg3h4v:hover,.f1rg3h4v:active{-webkit-user-select:none;-moz-user-select:none;user-select:none;}", ".fbm2y3b:hover,.fbm2y3b:active{color:var(--colorNeutralForegroundDisabled);}", ".f4yodeu:hover,.f4yodeu:active{background-color:var(--colorNeutralBackgroundDisabled);}", ".fcwfbwp:hover,.fcwfbwp:active{box-shadow:var(--shadow2);}", ".f1repx37:hover,.f1repx37:active{border-top-color:var(--colorNeutralStrokeDisabled);}", ".f1ybi8ct:hover,.f1ybi8ct:active{border-right-color:var(--colorNeutralStrokeDisabled);}", ".f1h4eg6q:hover,.f1h4eg6q:active{border-left-color:var(--colorNeutralStrokeDisabled);}", ".f18mejnb:hover,.f18mejnb:active{border-bottom-color:var(--colorNeutralStrokeDisabled);}", '.f1nift3m:hover::before,.f1nift3m:active::before{content:"";}', ".f1wu3i8x:hover::before,.f1wu3i8x:active::before{position:absolute;}", [".f6v4vfa:hover::before,.f6v4vfa:active::before{inset:0;}", {
    p: -1
  }], ".folrdqs:hover::before,.folrdqs:active::before{z-index:calc(var(--zIndexContent, 1) + 1);}", ".f168z5yf:hover::after,.f168z5yf:active::after{border-top-color:var(--colorNeutralStrokeDisabled);}", ".fpor7gj:hover::after,.fpor7gj:active::after{border-right-color:var(--colorNeutralStrokeDisabled);}", ".fzextn6:hover::after,.fzextn6:active::after{border-left-color:var(--colorNeutralStrokeDisabled);}", ".f1yaw79v:hover::after,.f1yaw79v:active::after{border-bottom-color:var(--colorNeutralStrokeDisabled);}"],
  a: [".fb40n2d:active{background-color:var(--colorNeutralBackground1Pressed);}", ".f1yhgkbh:active{background-color:var(--colorNeutralBackground2Pressed);}", ".fophhak:active{background-color:var(--colorTransparentBackgroundPressed);}", ".f1uohb70:active::after{border-top-color:var(--colorNeutralStroke1Pressed);}", ".f1jm7v1n:active::after{border-right-color:var(--colorNeutralStroke1Pressed);}", ".f1bus3rq:active::after{border-left-color:var(--colorNeutralStroke1Pressed);}", ".f1fbu7rr:active::after{border-bottom-color:var(--colorNeutralStroke1Pressed);}", ".f1wfn5kd:active{background-color:var(--colorSubtleBackgroundPressed);}"]
});
const useCardStyles_unstable = (state) => {
  "use no memo";
  const resetStyles = useCardResetStyles();
  const styles = useCardStyles();
  const orientationMap = {
    horizontal: styles.orientationHorizontal,
    vertical: styles.orientationVertical
  };
  const sizeMap = {
    small: styles.sizeSmall,
    medium: styles.sizeMedium,
    large: styles.sizeLarge
  };
  const appearanceMap = {
    filled: styles.filled,
    "filled-alternative": styles.filledAlternative,
    outline: styles.outline,
    subtle: styles.subtle
  };
  const selectedMap = {
    filled: styles.filledInteractiveSelected,
    "filled-alternative": styles.filledAlternativeInteractiveSelected,
    outline: styles.outlineInteractiveSelected,
    subtle: styles.subtleInteractiveSelected
  };
  const interactiveMap = {
    filled: styles.filledInteractive,
    "filled-alternative": styles.filledAlternativeInteractive,
    outline: styles.outlineInteractive,
    subtle: styles.subtleInteractive
  };
  const isSelectableOrInteractive = !state.disabled && (state.interactive || state.selectable);
  const focusedClassName = reactExports.useMemo(() => {
    if (state.disabled) {
      return "";
    }
    if (state.selectable) {
      if (state.selectFocused) {
        return styles.selectableFocused;
      }
      return "";
    }
    return styles.focused;
  }, [state.disabled, state.selectFocused, state.selectable, styles.focused, styles.selectableFocused]);
  state.root.className = mergeClasses(cardClassNames.root, resetStyles, orientationMap[state.orientation], sizeMap[state.size], appearanceMap[state.appearance], isSelectableOrInteractive && styles.interactive, isSelectableOrInteractive && interactiveMap[state.appearance], state.selected && selectedMap[state.appearance], focusedClassName, isSelectableOrInteractive && styles.highContrastInteractive, state.selected && styles.highContrastSelected, state.disabled && styles.disabled, state.disabled && state.appearance === "outline" && styles.outlineDisabled, state.root.className);
  if (state.floatingAction) {
    state.floatingAction.className = mergeClasses(cardClassNames.floatingAction, styles.select, state.floatingAction.className);
  }
  if (state.checkbox) {
    state.checkbox.className = mergeClasses(cardClassNames.checkbox, styles.hiddenCheckbox, state.checkbox.className);
  }
  return state;
};
function useCardContextValue({ selectableA11yProps }) {
  return {
    selectableA11yProps
  };
}
const Card = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const state = useCard_unstable(props, ref);
  const cardContextValue = useCardContextValue(state);
  useCardStyles_unstable(state);
  useCustomStyleHook("useCardStyles_unstable")(state);
  return renderCard_unstable(state, cardContextValue);
});
Card.displayName = "Card";
function getChildWithId(header) {
  function isReactElementWithIdProp(element) {
    return reactExports.isValidElement(element) && Boolean(element.props.id);
  }
  return reactExports.Children.toArray(header).find(isReactElementWithIdProp);
}
function getReferenceId(headerId, childWithId, generatedId) {
  if (headerId) {
    return headerId;
  }
  if (childWithId === null || childWithId === void 0 ? void 0 : childWithId.props.id) {
    return childWithId.props.id;
  }
  return generatedId;
}
const useCardHeader_unstable = (props, ref) => {
  const { image, header, description, action } = props;
  const { selectableA11yProps: { referenceId, setReferenceId } } = useCardContext_unstable();
  const headerRef = reactExports.useRef(null);
  const hasChildId = reactExports.useRef(false);
  const generatedId = useId(cardHeaderClassNames.header, referenceId);
  const headerSlot = optional(header, {
    renderByDefault: true,
    defaultProps: {
      ref: headerRef,
      id: !hasChildId.current ? referenceId : void 0
    },
    elementType: "div"
  });
  reactExports.useEffect(() => {
    var _headerRef_current;
    const headerId = !hasChildId.current ? (_headerRef_current = headerRef.current) === null || _headerRef_current === void 0 ? void 0 : _headerRef_current.id : void 0;
    const childWithId = getChildWithId(headerSlot === null || headerSlot === void 0 ? void 0 : headerSlot.children);
    hasChildId.current = Boolean(childWithId);
    setReferenceId(getReferenceId(headerId, childWithId, generatedId));
  }, [
    generatedId,
    header,
    headerSlot,
    setReferenceId
  ]);
  return {
    components: {
      root: "div",
      image: "div",
      header: "div",
      description: "div",
      action: "div"
    },
    root: always(getIntrinsicElementProps("div", {
      // FIXME:
      // `ref` is wrongly assigned to be `HTMLElement` instead of `HTMLDivElement`
      // but since it would be a breaking change to fix it, we are casting ref to it's proper type
      ref,
      ...props
    }), {
      elementType: "div"
    }),
    image: optional(image, {
      elementType: "div"
    }),
    header: headerSlot,
    description: optional(description, {
      elementType: "div"
    }),
    action: optional(action, {
      elementType: "div"
    })
  };
};
const renderCardHeader_unstable = (state) => {
  return /* @__PURE__ */ jsxs(state.root, {
    children: [
      state.image && /* @__PURE__ */ jsx(state.image, {}),
      state.header && /* @__PURE__ */ jsx(state.header, {}),
      state.description && /* @__PURE__ */ jsx(state.description, {}),
      state.action && /* @__PURE__ */ jsx(state.action, {})
    ]
  });
};
const CardHeader = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const state = useCardHeader_unstable(props, ref);
  useCardHeaderStyles_unstable(state);
  useCustomStyleHook("useCardHeaderStyles_unstable")(state);
  return renderCardHeader_unstable(state);
});
CardHeader.displayName = "CardHeader";
const useCardPreview_unstable = (props, ref) => {
  const { logo } = props;
  const { selectableA11yProps: { referenceLabel, referenceId, setReferenceLabel, setReferenceId } } = useCardContext_unstable();
  const previewRef = useMergedRefs(ref, reactExports.useRef(null));
  reactExports.useEffect(() => {
    if (referenceLabel && referenceId) {
      return;
    }
    if (previewRef.current && previewRef.current.parentNode) {
      const img = previewRef.current.parentNode.querySelector(`.${cardPreviewClassNames.root} > img`);
      if (img) {
        const ariaLabel = img.getAttribute("aria-label");
        const ariaDescribedby = img.getAttribute("aria-describedby");
        if (ariaDescribedby) {
          setReferenceId(ariaDescribedby);
        } else if (img.alt) {
          setReferenceLabel(img.alt);
        } else if (ariaLabel) {
          setReferenceLabel(ariaLabel);
        }
      }
    }
  }, [
    setReferenceLabel,
    referenceLabel,
    previewRef,
    referenceId,
    setReferenceId
  ]);
  return {
    components: {
      root: "div",
      logo: "div"
    },
    root: always(getIntrinsicElementProps("div", {
      ref: previewRef,
      ...props
    }), {
      elementType: "div"
    }),
    logo: optional(logo, {
      elementType: "div"
    })
  };
};
const renderCardPreview_unstable = (state) => {
  return /* @__PURE__ */ jsxs(state.root, {
    children: [
      state.root.children,
      state.logo && /* @__PURE__ */ jsx(state.logo, {})
    ]
  });
};
const CardPreview = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const state = useCardPreview_unstable(props, ref);
  useCardPreviewStyles_unstable(state);
  useCustomStyleHook("useCardPreviewStyles_unstable")(state);
  return renderCardPreview_unstable(state);
});
CardPreview.displayName = "CardPreview";
export {
  ArrowRight24Regular as A,
  Button as B,
  Card as C,
  Dialog as D,
  Building24Regular as E,
  FluentProvider as F,
  Globe24Regular as G,
  Settings24Regular as H,
  Input as I,
  Menu as M,
  Navigation24Regular as N,
  ProgressBar as P,
  Search24Regular as S,
  Textarea as T,
  Wifi124Regular as W,
  __vitePreload as _,
  MenuTrigger as a,
  Badge as b,
  MenuPopover as c,
  MenuList as d,
  MenuItem as e,
  DialogTrigger as f,
  Bot24Regular as g,
  DialogSurface as h,
  DialogTitle as i,
  jsxRuntimeExports as j,
  Dismiss24Regular as k,
  DialogBody as l,
  DialogActions as m,
  Mic24Regular as n,
  Send24Regular as o,
  CardHeader as p,
  CardPreview as q,
  Spinner as r,
  schedulerExports as s,
  Phone24Regular as t,
  Server24Regular as u,
  Play24Regular as v,
  Shield24Regular as w,
  CloudSync24Regular as x,
  webLightTheme as y,
  Copy24Regular as z
};
