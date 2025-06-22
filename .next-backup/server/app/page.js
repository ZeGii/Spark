(() => {
var exports = {};
exports.id = "app/page";
exports.ids = ["app/page"];
exports.modules = {

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fpage&page=%2Fpage&appPaths=%2Fpage&pagePath=private-next-app-dir%2Fpage.tsx&appDir=%2Fhome%2Fubuntu%2Fspark-platform%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fubuntu%2Fspark-platform&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fpage&page=%2Fpage&appPaths=%2Fpage&pagePath=private-next-app-dir%2Fpage.tsx&appDir=%2Fhome%2Fubuntu%2Fspark-platform%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fubuntu%2Fspark-platform&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-page/module.compiled */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/module.compiled.js?d969");
/* harmony import */ var next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ "(rsc)/./node_modules/next/dist/server/future/route-kind.js");
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/client/components/error-boundary */ "(rsc)/./node_modules/next/dist/client/components/error-boundary.js");
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/server/app-render/entry-base */ "(rsc)/./node_modules/next/dist/server/app-render/entry-base.js");
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
"TURBOPACK { transition: next-ssr }";


// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./app/page.tsx */ "(rsc)/./app/page.tsx")), "/home/ubuntu/spark-platform/app/page.tsx"],
          
        }]
      },
        {
        'layout': [() => Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./app/layout.tsx */ "(rsc)/./app/layout.tsx")), "/home/ubuntu/spark-platform/app/layout.tsx"],
'not-found': [() => Promise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! next/dist/client/components/not-found-error */ "(rsc)/./node_modules/next/dist/client/components/not-found-error.js", 23)), "next/dist/client/components/not-found-error"],
        
      }
      ]
      }.children;
const pages = ["/home/ubuntu/spark-platform/app/page.tsx"];


const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/page",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fspark-platform%2Fapp%2Fglobals.css%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fspark-platform%2Fcomponents%2Fnavigation.tsx%22%2C%22ids%22%3A%5B%22default%22%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fspark-platform%2Fcomponents%2Ftheme-provider.tsx%22%2C%22ids%22%3A%5B%22ThemeProvider%22%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fspark-platform%2Fcomponents%2Fui%2Ftoaster.tsx%22%2C%22ids%22%3A%5B%22Toaster%22%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fspark-platform%2Fcontexts%2Fauth-context.tsx%22%2C%22ids%22%3A%5B%22AuthProvider%22%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fspark-platform%2Fnode_modules%2Fnext%2Ffont%2Fgoogle%2Ftarget.css%3F%7B%5C%22path%5C%22%3A%5C%22app%2Flayout.tsx%5C%22%2C%5C%22import%5C%22%3A%5C%22Inter%5C%22%2C%5C%22arguments%5C%22%3A%5B%7B%5C%22subsets%5C%22%3A%5B%5C%22latin%5C%22%5D%7D%5D%2C%5C%22variableName%5C%22%3A%5C%22inter%5C%22%7D%22%2C%22ids%22%3A%5B%5D%7D&server=true!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fspark-platform%2Fapp%2Fglobals.css%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fspark-platform%2Fcomponents%2Fnavigation.tsx%22%2C%22ids%22%3A%5B%22default%22%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fspark-platform%2Fcomponents%2Ftheme-provider.tsx%22%2C%22ids%22%3A%5B%22ThemeProvider%22%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fspark-platform%2Fcomponents%2Fui%2Ftoaster.tsx%22%2C%22ids%22%3A%5B%22Toaster%22%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fspark-platform%2Fcontexts%2Fauth-context.tsx%22%2C%22ids%22%3A%5B%22AuthProvider%22%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fspark-platform%2Fnode_modules%2Fnext%2Ffont%2Fgoogle%2Ftarget.css%3F%7B%5C%22path%5C%22%3A%5C%22app%2Flayout.tsx%5C%22%2C%5C%22import%5C%22%3A%5C%22Inter%5C%22%2C%5C%22arguments%5C%22%3A%5B%7B%5C%22subsets%5C%22%3A%5B%5C%22latin%5C%22%5D%7D%5D%2C%5C%22variableName%5C%22%3A%5C%22inter%5C%22%7D%22%2C%22ids%22%3A%5B%5D%7D&server=true! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./components/navigation.tsx */ "(ssr)/./components/navigation.tsx"));
;
Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./components/theme-provider.tsx */ "(ssr)/./components/theme-provider.tsx"));
;
Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./components/ui/toaster.tsx */ "(ssr)/./components/ui/toaster.tsx"));
;
Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./contexts/auth-context.tsx */ "(ssr)/./contexts/auth-context.tsx"));


/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fspark-platform%2Fapp%2Fpage.tsx%22%2C%22ids%22%3A%5B%5D%7D&server=true!":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fspark-platform%2Fapp%2Fpage.tsx%22%2C%22ids%22%3A%5B%5D%7D&server=true! ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./app/page.tsx */ "(ssr)/./app/page.tsx"));


/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fspark-platform%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fapp-router.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fspark-platform%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fclient-page.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fspark-platform%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Ferror-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fspark-platform%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Flayout-router.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fspark-platform%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fnot-found-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fspark-platform%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Frender-from-template-context.js%22%2C%22ids%22%3A%5B%5D%7D&server=true!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fspark-platform%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fapp-router.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fspark-platform%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fclient-page.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fspark-platform%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Ferror-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fspark-platform%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Flayout-router.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fspark-platform%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Fnot-found-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fspark-platform%2Fnode_modules%2Fnext%2Fdist%2Fclient%2Fcomponents%2Frender-from-template-context.js%22%2C%22ids%22%3A%5B%5D%7D&server=true! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/app-router.js */ "(ssr)/./node_modules/next/dist/client/components/app-router.js", 23));
;
Promise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/client-page.js */ "(ssr)/./node_modules/next/dist/client/components/client-page.js", 23));
;
Promise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/error-boundary.js */ "(ssr)/./node_modules/next/dist/client/components/error-boundary.js", 23));
;
Promise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/layout-router.js */ "(ssr)/./node_modules/next/dist/client/components/layout-router.js", 23));
;
Promise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/not-found-boundary.js */ "(ssr)/./node_modules/next/dist/client/components/not-found-boundary.js", 23));
;
Promise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/render-from-template-context.js */ "(ssr)/./node_modules/next/dist/client/components/render-from-template-context.js", 23));


/***/ }),

/***/ "(ssr)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "(ssr)/./node_modules/next/dist/api/link.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! framer-motion */ "(ssr)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-intersection-observer */ "(ssr)/./node_modules/react-intersection-observer/index.mjs");
/* harmony import */ var _barrel_optimize_names_ArrowRight_BarChart3_CheckCircle_Eye_Globe_Rocket_Sparkles_Star_Target_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRight,BarChart3,CheckCircle,Eye,Globe,Rocket,Sparkles,Star,Target,TrendingUp,Users,Zap!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/sparkles.js");
/* harmony import */ var _barrel_optimize_names_ArrowRight_BarChart3_CheckCircle_Eye_Globe_Rocket_Sparkles_Star_Target_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRight,BarChart3,CheckCircle,Eye,Globe,Rocket,Sparkles,Star,Target,TrendingUp,Users,Zap!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/arrow-right.js");
/* harmony import */ var _barrel_optimize_names_ArrowRight_BarChart3_CheckCircle_Eye_Globe_Rocket_Sparkles_Star_Target_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRight,BarChart3,CheckCircle,Eye,Globe,Rocket,Sparkles,Star,Target,TrendingUp,Users,Zap!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/target.js");
/* harmony import */ var _barrel_optimize_names_ArrowRight_BarChart3_CheckCircle_Eye_Globe_Rocket_Sparkles_Star_Target_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRight,BarChart3,CheckCircle,Eye,Globe,Rocket,Sparkles,Star,Target,TrendingUp,Users,Zap!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/chart-column.js");
/* harmony import */ var _barrel_optimize_names_ArrowRight_BarChart3_CheckCircle_Eye_Globe_Rocket_Sparkles_Star_Target_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRight,BarChart3,CheckCircle,Eye,Globe,Rocket,Sparkles,Star,Target,TrendingUp,Users,Zap!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/trending-up.js");
/* harmony import */ var _barrel_optimize_names_ArrowRight_BarChart3_CheckCircle_Eye_Globe_Rocket_Sparkles_Star_Target_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRight,BarChart3,CheckCircle,Eye,Globe,Rocket,Sparkles,Star,Target,TrendingUp,Users,Zap!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/users.js");
/* harmony import */ var _barrel_optimize_names_ArrowRight_BarChart3_CheckCircle_Eye_Globe_Rocket_Sparkles_Star_Target_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRight,BarChart3,CheckCircle,Eye,Globe,Rocket,Sparkles,Star,Target,TrendingUp,Users,Zap!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/zap.js");
/* harmony import */ var _barrel_optimize_names_ArrowRight_BarChart3_CheckCircle_Eye_Globe_Rocket_Sparkles_Star_Target_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRight,BarChart3,CheckCircle,Eye,Globe,Rocket,Sparkles,Star,Target,TrendingUp,Users,Zap!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/circle-check-big.js");
/* harmony import */ var _barrel_optimize_names_ArrowRight_BarChart3_CheckCircle_Eye_Globe_Rocket_Sparkles_Star_Target_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRight,BarChart3,CheckCircle,Eye,Globe,Rocket,Sparkles,Star,Target,TrendingUp,Users,Zap!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/star.js");
/* harmony import */ var _barrel_optimize_names_ArrowRight_BarChart3_CheckCircle_Eye_Globe_Rocket_Sparkles_Star_Target_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRight,BarChart3,CheckCircle,Eye,Globe,Rocket,Sparkles,Star,Target,TrendingUp,Users,Zap!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/globe.js");
/* harmony import */ var _barrel_optimize_names_ArrowRight_BarChart3_CheckCircle_Eye_Globe_Rocket_Sparkles_Star_Target_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRight,BarChart3,CheckCircle,Eye,Globe,Rocket,Sparkles,Star,Target,TrendingUp,Users,Zap!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/eye.js");
/* harmony import */ var _barrel_optimize_names_ArrowRight_BarChart3_CheckCircle_Eye_Globe_Rocket_Sparkles_Star_Target_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRight,BarChart3,CheckCircle,Eye,Globe,Rocket,Sparkles,Star,Target,TrendingUp,Users,Zap!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/rocket.js");
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/button */ "(ssr)/./components/ui/button.tsx");
/* harmony import */ var _components_ui_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/badge */ "(ssr)/./components/ui/badge.tsx");
/* harmony import */ var _contexts_auth_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/contexts/auth-context */ "(ssr)/./contexts/auth-context.tsx");
/* harmony import */ var _components_auth_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/auth-modal */ "(ssr)/./components/auth-modal.tsx");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/footer */ "(ssr)/./components/footer.tsx");
/* __next_internal_client_entry_do_not_use__ default auto */ 










/*
BUTTON STYLES DOCUMENTATION FOR FUTURE REFERENCE:

Green Button 1 (for /trending pages):
className="bg-[#00FF88] hover:bg-[#00E87A] text-black text-lg px-8 py-4 w-full sm:w-auto rounded-xl font-semibold"

Green Button 2 (for /opportunities pages):
className="bg-white/10 border-2 border-[#00FF88] text-[#00FF88] hover:bg-[#00FF88] hover:text-black text-lg px-8 py-4 w-full sm:w-auto rounded-xl font-semibold transition-all duration-300"

Wireframed Button Style (non-actionable titles):
className="border-2 border-[COLOR] bg-transparent text-[COLOR] px-6 py-3 text-sm font-bold rounded-full pointer-events-none"
Colors used: #6ae585 or #f5d565
*/ const HomePage = ()=>{
    const { user } = (0,_contexts_auth_context__WEBPACK_IMPORTED_MODULE_5__.useAuth)();
    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isAuthModalOpen, setIsAuthModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [animatedNumbers, setAnimatedNumbers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        topics: 0,
        votes: 0,
        research: 0
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setMounted(true);
    }, []);
    // Animation hook for stats
    const [statsRef, statsInView] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_8__.useInView)({
        triggerOnce: true,
        threshold: 0.1
    });
    // Animate numbers when stats come into view
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (statsInView && mounted) {
            const animateNumber = (start, end, key)=>{
                const duration = 2000;
                const startTime = Date.now();
                const updateNumber = ()=>{
                    const elapsed = Date.now() - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                    const current = Math.floor(start + (end - start) * easeOutQuart);
                    setAnimatedNumbers((prev)=>({
                            ...prev,
                            [key]: current
                        }));
                    if (progress < 1) {
                        requestAnimationFrame(updateNumber);
                    }
                };
                requestAnimationFrame(updateNumber);
            };
            animateNumber(0, 247, "topics");
            animateNumber(0, 12500, "votes");
            animateNumber(0, 89, "research");
        }
    }, [
        statsInView,
        mounted
    ]);
    // Market opportunities data - exact from analysis
    const marketOpportunities = [
        {
            id: "1",
            title: "Organic Certification Fast-Track for Egyptian Producers",
            description: "Quality issues in cold chain management",
            marketSize: "USD 2.1B",
            growth: "8.5% CAGR",
            rating: 1,
            status: 5
        },
        {
            id: "2",
            title: "European Markets Expansion Opportunity",
            description: "Cross-border e-commerce growth potential",
            marketSize: "USD 76.1B",
            growth: "3.9% CAGR",
            rating: 1,
            status: 5
        },
        {
            id: "3",
            title: "Sustainable Packaging Solutions",
            description: "Eco-friendly packaging alternatives",
            marketSize: "USD 4.7B",
            growth: "12.3% CAGR",
            rating: 0,
            status: 5
        }
    ];
    // Trending topics data - exact from analysis
    const trendingTopics = [
        {
            title: "AI-Powered Personal Finance Apps",
            description: "Market analysis for AI-driven budgeting and investment platforms",
            tags: [
                "FinTech",
                "United States"
            ],
            metric: "+156"
        },
        {
            title: "Sustainable Fashion E-commerce",
            description: "Consumer behavior and market size for eco-friendly clothing platforms",
            tags: [
                "Fashion",
                "Europe"
            ],
            metric: "+142"
        },
        {
            title: "Remote Work Productivity Tools",
            description: "Analysis of collaboration software market post-pandemic",
            tags: [
                "SaaS",
                "Global"
            ],
            metric: "+128"
        }
    ];
    if (!mounted) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "min-h-screen bg-[#10141a] text-white relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
                className: "relative overflow-hidden bg-[#10141a] mb-20",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10",
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "grid lg:grid-cols-2 gap-16 items-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                initial: {
                                    opacity: 0,
                                    x: -50
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    duration: 0.8
                                },
                                className: "space-y-8 relative",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                                initial: {
                                                    opacity: 0,
                                                    scale: 0.8
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    scale: 1
                                                },
                                                transition: {
                                                    duration: 0.6,
                                                    delay: 0.2
                                                },
                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_4__.Badge, {
                                                    className: "border-2 border-[#6ae585] bg-transparent text-[#6ae585] px-6 py-3 text-sm font-bold rounded-full pointer-events-none",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRight_BarChart3_CheckCircle_Eye_Globe_Rocket_Sparkles_Star_Target_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                                            className: "w-4 h-4 mr-2"
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 21
                                                        }, undefined),
                                                        "Build What Matters"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 19
                                                }, undefined)
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                lineNumber: 172,
                                                columnNumber: 17
                                            }, undefined),
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.h1, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 30
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                transition: {
                                                    duration: 0.8,
                                                    delay: 0.3
                                                },
                                                className: "text-4xl md:text-5xl lg:text-6xl font-bold leading-tight",
                                                children: [
                                                    "Discover Market",
                                                    " ",
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                        className: "text-[#00FF88]",
                                                        children: "Intelligence"
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 19
                                                    }, undefined),
                                                    " ",
                                                    "Opportunities"
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                lineNumber: 183,
                                                columnNumber: 17
                                            }, undefined),
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.p, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 20
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                transition: {
                                                    duration: 0.8,
                                                    delay: 0.4
                                                },
                                                className: "text-lg md:text-xl text-[#CCCCCC] leading-relaxed max-w-2xl",
                                                children: "Join thousands of entrepreneurs and investors who leverage crowdsourced insights to make data-driven decisions. Get professional research at the speed of your idea."
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                lineNumber: 194,
                                                columnNumber: 17
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                        lineNumber: 171,
                                        columnNumber: 15
                                    }, undefined),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            duration: 0.8,
                                            delay: 0.5
                                        },
                                        className: "flex flex-col sm:flex-row gap-4",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                href: "/trending",
                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                                    size: "lg",
                                                    className: "bg-[#00FF88] hover:bg-[#00E87A] text-black text-lg px-8 py-4 w-full sm:w-auto rounded-xl font-semibold",
                                                    children: [
                                                        "Explore Trending Topics",
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRight_BarChart3_CheckCircle_Eye_Globe_Rocket_Sparkles_Star_Target_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                                            className: "w-4 h-4 ml-2"
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                            lineNumber: 216,
                                                            columnNumber: 21
                                                        }, undefined)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                    lineNumber: 211,
                                                    columnNumber: 19
                                                }, undefined)
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                lineNumber: 210,
                                                columnNumber: 17
                                            }, undefined),
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                href: "/opportunities",
                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                                    size: "lg",
                                                    className: "bg-white/10 border-2 border-[#00FF88] text-[#00FF88] hover:bg-[#00FF88] hover:text-black text-lg px-8 py-4 w-full sm:w-auto rounded-xl font-semibold transition-all duration-300",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRight_BarChart3_CheckCircle_Eye_Globe_Rocket_Sparkles_Star_Target_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                                            className: "w-4 h-4 mr-2"
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                            lineNumber: 224,
                                                            columnNumber: 21
                                                        }, undefined),
                                                        "Discover Opportunities"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                    lineNumber: 220,
                                                    columnNumber: 19
                                                }, undefined)
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                lineNumber: 219,
                                                columnNumber: 17
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                        lineNumber: 204,
                                        columnNumber: 15
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, undefined),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                initial: {
                                    opacity: 0,
                                    x: 50
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    duration: 0.8,
                                    delay: 0.2
                                },
                                className: "relative",
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 30
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.8,
                                        delay: 0.4
                                    },
                                    className: "relative bg-gradient-to-br from-[#1A1A1A] via-[#1A1A1A] to-[#252529] border border-white/20 rounded-2xl p-8 shadow-2xl backdrop-blur-sm hover:shadow-[0_20px_50px_rgba(0,255,136,0.15)] hover:border-[#00FF88]/30 transition-all duration-500 hover:scale-[1.02]",
                                    whileHover: {
                                        y: -5
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "flex items-center justify-between mb-6",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                    className: "flex items-center space-x-3",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                            className: "w-12 h-12 bg-[#00FF88]/20 rounded-xl flex items-center justify-center border border-[#00FF88]/30",
                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRight_BarChart3_CheckCircle_Eye_Globe_Rocket_Sparkles_Star_Target_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                                                className: "w-6 h-6 text-[#00FF88]"
                                                            }, void 0, false, {
                                                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                lineNumber: 248,
                                                                columnNumber: 23
                                                            }, undefined)
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                            lineNumber: 247,
                                                            columnNumber: 21
                                                        }, undefined),
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                                                                className: "font-bold text-lg text-white",
                                                                children: "Market Intelligence"
                                                            }, void 0, false, {
                                                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                lineNumber: 251,
                                                                columnNumber: 23
                                                            }, undefined)
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                            lineNumber: 250,
                                                            columnNumber: 21
                                                        }, undefined)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                    lineNumber: 246,
                                                    columnNumber: 19
                                                }, undefined),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_4__.Badge, {
                                                    className: "bg-[#00FF88]/20 text-[#00FF88] border border-[#00FF88]/30 rounded-full",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                                            className: "w-2 h-2 bg-[#00FF88] rounded-full mr-2",
                                                            animate: {
                                                                opacity: [
                                                                    1,
                                                                    0.5,
                                                                    1
                                                                ]
                                                            },
                                                            transition: {
                                                                duration: 1.5,
                                                                repeat: Infinity
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                            lineNumber: 255,
                                                            columnNumber: 21
                                                        }, undefined),
                                                        "Live"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 19
                                                }, undefined)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                            lineNumber: 245,
                                            columnNumber: 17
                                        }, undefined),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                                    initial: {
                                                        opacity: 0,
                                                        x: 20
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        x: 0
                                                    },
                                                    transition: {
                                                        duration: 0.6,
                                                        delay: 0.5
                                                    },
                                                    className: "flex justify-between items-center p-4 bg-gradient-to-r from-[#00FF88]/10 to-[#00FF88]/5 border border-[#00FF88]/30 rounded-xl hover:bg-[#00FF88]/15 hover:border-[#00FF88]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#00FF88]/10",
                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                        className: "text-sm font-medium text-white",
                                                        children: "247+ Active Topics"
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                        lineNumber: 271,
                                                        columnNumber: 21
                                                    }, undefined)
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 19
                                                }, undefined),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                                    initial: {
                                                        opacity: 0,
                                                        x: 20
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        x: 0
                                                    },
                                                    transition: {
                                                        duration: 0.6,
                                                        delay: 0.6
                                                    },
                                                    className: "flex justify-between items-center p-4 bg-gradient-to-r from-[#00FF88]/10 to-[#00FF88]/5 border border-[#00FF88]/30 rounded-xl hover:bg-[#00FF88]/15 hover:border-[#00FF88]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#00FF88]/10",
                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                        className: "text-sm font-medium text-white",
                                                        children: "12.5K+ Votes Cast"
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                        lineNumber: 280,
                                                        columnNumber: 21
                                                    }, undefined)
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                    lineNumber: 274,
                                                    columnNumber: 19
                                                }, undefined),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                                    initial: {
                                                        opacity: 0,
                                                        x: 20
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        x: 0
                                                    },
                                                    transition: {
                                                        duration: 0.6,
                                                        delay: 0.7
                                                    },
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                            className: "flex items-center justify-between",
                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                                className: "text-sm text-white",
                                                                children: "Research Quality: 94%"
                                                            }, void 0, false, {
                                                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                lineNumber: 290,
                                                                columnNumber: 23
                                                            }, undefined)
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                            lineNumber: 289,
                                                            columnNumber: 21
                                                        }, undefined),
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                            className: "w-full bg-[#334155]/50 rounded-full h-2 overflow-hidden",
                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                                                initial: {
                                                                    width: 0
                                                                },
                                                                animate: {
                                                                    width: "94%"
                                                                },
                                                                transition: {
                                                                    duration: 1.5,
                                                                    delay: 1,
                                                                    ease: "easeOut"
                                                                },
                                                                className: "h-full bg-gradient-to-r from-[#00FF88] to-[#FCD34D] rounded-full"
                                                            }, void 0, false, {
                                                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                lineNumber: 293,
                                                                columnNumber: 23
                                                            }, undefined)
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                            lineNumber: 292,
                                                            columnNumber: 21
                                                        }, undefined)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                    lineNumber: 283,
                                                    columnNumber: 19
                                                }, undefined)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                            lineNumber: 264,
                                            columnNumber: 17
                                        }, undefined)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                    lineNumber: 238,
                                    columnNumber: 15
                                }, undefined)
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                lineNumber: 232,
                                columnNumber: 13
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                        lineNumber: 163,
                        columnNumber: 11
                    }, undefined)
                }, void 0, false, {
                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                    lineNumber: 162,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
                className: "py-4 relative bg-[#141921] mb-20",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10",
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                        ref: statsRef,
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8
                        },
                        className: "text-center space-y-4",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.h2, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            duration: 0.8
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        className: "text-2xl md:text-3xl font-bold text-white",
                                        children: "Trusted by entrepreneurs worldwide"
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                        lineNumber: 319,
                                        columnNumber: 15
                                    }, undefined),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.p, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            duration: 0.8,
                                            delay: 0.2
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        className: "text-base text-[#CCCCCC] max-w-2xl mx-auto",
                                        children: "Our platform delivers actionable insights that drive real business decisions"
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                        lineNumber: 328,
                                        columnNumber: 15
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                lineNumber: 318,
                                columnNumber: 13
                            }, undefined),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-3",
                                children: [
                                    {
                                        value: animatedNumbers.topics,
                                        label: "Active Research Topics",
                                        icon: _barrel_optimize_names_ArrowRight_BarChart3_CheckCircle_Eye_Globe_Rocket_Sparkles_Star_Target_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_14__["default"],
                                        color: "#6ae585"
                                    },
                                    {
                                        value: animatedNumbers.votes.toLocaleString(),
                                        label: "Community Votes",
                                        icon: _barrel_optimize_names_ArrowRight_BarChart3_CheckCircle_Eye_Globe_Rocket_Sparkles_Star_Target_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_15__["default"],
                                        color: "#FCD34D"
                                    },
                                    {
                                        value: animatedNumbers.research,
                                        label: "Research Reports",
                                        icon: _barrel_optimize_names_ArrowRight_BarChart3_CheckCircle_Eye_Globe_Rocket_Sparkles_Star_Target_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_13__["default"],
                                        color: "#40E0D0"
                                    }
                                ].map((stat, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                        initial: {
                                            opacity: 0,
                                            y: 30,
                                            scale: 0.9
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            y: 0,
                                            scale: 1
                                        },
                                        transition: {
                                            duration: 0.6,
                                            delay: 0.1 * index
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        className: "relative",
                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "p-2 text-center",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                                    className: "w-6 h-6 mx-auto mb-1 rounded-xl flex items-center justify-center transition-transform duration-300",
                                                    style: {
                                                        backgroundColor: `${stat.color}20`,
                                                        border: `1px solid ${stat.color}30`,
                                                        boxShadow: `0 0 15px ${stat.color}20`
                                                    },
                                                    whileHover: {
                                                        boxShadow: `0 0 25px ${stat.color}40`,
                                                        scale: 1.1
                                                    },
                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(stat.icon, {
                                                        className: "w-3 h-3",
                                                        style: {
                                                            color: stat.color
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                        lineNumber: 366,
                                                        columnNumber: 23
                                                    }, undefined)
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                    lineNumber: 354,
                                                    columnNumber: 21
                                                }, undefined),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                                    className: "text-xl font-bold mb-1 transition-transform duration-300",
                                                    style: {
                                                        color: stat.color
                                                    },
                                                    children: [
                                                        stat.value,
                                                        "+"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                    lineNumber: 369,
                                                    columnNumber: 21
                                                }, undefined),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                    className: "text-xs text-white font-medium transition-colors duration-300",
                                                    children: stat.label
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                    lineNumber: 376,
                                                    columnNumber: 21
                                                }, undefined)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                            lineNumber: 353,
                                            columnNumber: 19
                                        }, undefined)
                                    }, stat.label, false, {
                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                        lineNumber: 345,
                                        columnNumber: 17
                                    }, undefined))
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                lineNumber: 339,
                                columnNumber: 13
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                        lineNumber: 311,
                        columnNumber: 11
                    }, undefined)
                }, void 0, false, {
                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                    lineNumber: 310,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                lineNumber: 309,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
                className: "py-20 relative bg-[#10141a] mb-20",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "grid lg:grid-cols-2 gap-16 items-start",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                    initial: {
                                        opacity: 0,
                                        x: -50
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    transition: {
                                        duration: 0.8
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    className: "bg-gradient-to-br from-[#1a1a1a] via-[#1a1a1a] to-[#252529] border border-white/20 rounded-2xl p-8 shadow-2xl backdrop-blur-sm hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)] hover:border-[#10B981]/30 transition-all duration-500",
                                    whileHover: {
                                        scale: 1.02
                                    },
                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                                                        className: "text-2xl font-bold text-white",
                                                        children: "Market Opportunities"
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                        lineNumber: 400,
                                                        columnNumber: 19
                                                    }, undefined),
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_4__.Badge, {
                                                        className: "bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30 rounded-full text-xs",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                                                className: "w-2 h-2 bg-[#10B981] rounded-full mr-2",
                                                                animate: {
                                                                    opacity: [
                                                                        1,
                                                                        0.5,
                                                                        1
                                                                    ]
                                                                },
                                                                transition: {
                                                                    duration: 1.5,
                                                                    repeat: Infinity
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                lineNumber: 402,
                                                                columnNumber: 21
                                                            }, undefined),
                                                            "Live Data"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                        lineNumber: 401,
                                                        columnNumber: 19
                                                    }, undefined)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                lineNumber: 399,
                                                columnNumber: 17
                                            }, undefined),
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                                        initial: {
                                                            opacity: 0,
                                                            y: 20
                                                        },
                                                        whileInView: {
                                                            opacity: 1,
                                                            y: 0
                                                        },
                                                        transition: {
                                                            duration: 0.6,
                                                            delay: 0.1
                                                        },
                                                        viewport: {
                                                            once: true
                                                        },
                                                        className: "flex items-center justify-between p-4 bg-gradient-to-r from-[#0F172A]/60 to-[#1A1A1A]/40 rounded-xl border border-white/20 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:scale-[1.02] group",
                                                        whileHover: {
                                                            x: 5
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                                className: "flex items-center space-x-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                                                        className: "w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20",
                                                                        whileHover: {
                                                                            rotate: 360
                                                                        },
                                                                        transition: {
                                                                            duration: 0.5
                                                                        },
                                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                                            className: "w-4 h-4 bg-white rounded-full"
                                                                        }, void 0, false, {
                                                                            fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                            lineNumber: 426,
                                                                            columnNumber: 25
                                                                        }, undefined)
                                                                    }, void 0, false, {
                                                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                        lineNumber: 421,
                                                                        columnNumber: 23
                                                                    }, undefined),
                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                                        className: "text-white font-medium group-hover:text-blue-300 transition-colors duration-300",
                                                                        children: "HealthTech Wearables"
                                                                    }, void 0, false, {
                                                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                        lineNumber: 428,
                                                                        columnNumber: 23
                                                                    }, undefined)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                lineNumber: 420,
                                                                columnNumber: 21
                                                            }, undefined),
                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                                className: "text-white font-bold text-lg group-hover:text-blue-300 transition-colors duration-300",
                                                                children: "$27.2B"
                                                            }, void 0, false, {
                                                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                lineNumber: 430,
                                                                columnNumber: 21
                                                            }, undefined)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                        lineNumber: 412,
                                                        columnNumber: 19
                                                    }, undefined),
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                                        initial: {
                                                            opacity: 0,
                                                            y: 20
                                                        },
                                                        whileInView: {
                                                            opacity: 1,
                                                            y: 0
                                                        },
                                                        transition: {
                                                            duration: 0.6,
                                                            delay: 0.2
                                                        },
                                                        viewport: {
                                                            once: true
                                                        },
                                                        className: "flex items-center justify-between p-4 bg-gradient-to-r from-[#0F172A]/60 to-[#1A1A1A]/40 rounded-xl border border-white/20 hover:border-[#10B981]/40 hover:shadow-lg hover:shadow-[#10B981]/10 transition-all duration-300 hover:scale-[1.02] group",
                                                        whileHover: {
                                                            x: 5
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                                className: "flex items-center space-x-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                                                        className: "w-8 h-8 bg-[#10B981] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#10B981]/20",
                                                                        whileHover: {
                                                                            rotate: 360
                                                                        },
                                                                        transition: {
                                                                            duration: 0.5
                                                                        },
                                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                                            className: "w-3 h-3 bg-white rounded-sm"
                                                                        }, void 0, false, {
                                                                            fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                            lineNumber: 447,
                                                                            columnNumber: 25
                                                                        }, undefined)
                                                                    }, void 0, false, {
                                                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                        lineNumber: 442,
                                                                        columnNumber: 23
                                                                    }, undefined),
                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                                        className: "text-white font-medium group-hover:text-[#10B981] transition-colors duration-300",
                                                                        children: "EdTech Platforms"
                                                                    }, void 0, false, {
                                                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                        lineNumber: 449,
                                                                        columnNumber: 23
                                                                    }, undefined)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                lineNumber: 441,
                                                                columnNumber: 21
                                                            }, undefined),
                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                                className: "text-white font-bold text-lg group-hover:text-[#10B981] transition-colors duration-300",
                                                                children: "$89.5B"
                                                            }, void 0, false, {
                                                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                lineNumber: 451,
                                                                columnNumber: 21
                                                            }, undefined)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                        lineNumber: 433,
                                                        columnNumber: 19
                                                    }, undefined),
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                                        initial: {
                                                            opacity: 0,
                                                            y: 20
                                                        },
                                                        whileInView: {
                                                            opacity: 1,
                                                            y: 0
                                                        },
                                                        transition: {
                                                            duration: 0.6,
                                                            delay: 0.3
                                                        },
                                                        viewport: {
                                                            once: true
                                                        },
                                                        className: "flex items-center justify-between p-4 bg-gradient-to-r from-[#0F172A]/60 to-[#1A1A1A]/40 rounded-xl border border-white/20 hover:border-[#FCD34D]/40 hover:shadow-lg hover:shadow-[#FCD34D]/10 transition-all duration-300 hover:scale-[1.02] group",
                                                        whileHover: {
                                                            x: 5
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                                className: "flex items-center space-x-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                                                        className: "w-8 h-8 bg-[#FCD34D] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#FCD34D]/20",
                                                                        whileHover: {
                                                                            rotate: 360
                                                                        },
                                                                        transition: {
                                                                            duration: 0.5
                                                                        },
                                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRight_BarChart3_CheckCircle_Eye_Globe_Rocket_Sparkles_Star_Target_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_16__["default"], {
                                                                            className: "w-4 h-4 text-black"
                                                                        }, void 0, false, {
                                                                            fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                            lineNumber: 468,
                                                                            columnNumber: 25
                                                                        }, undefined)
                                                                    }, void 0, false, {
                                                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                        lineNumber: 463,
                                                                        columnNumber: 23
                                                                    }, undefined),
                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                                        className: "text-white font-medium group-hover:text-[#FCD34D] transition-colors duration-300",
                                                                        children: "Clean Energy"
                                                                    }, void 0, false, {
                                                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                        lineNumber: 470,
                                                                        columnNumber: 23
                                                                    }, undefined)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                lineNumber: 462,
                                                                columnNumber: 21
                                                            }, undefined),
                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                                className: "text-white font-bold text-lg group-hover:text-[#FCD34D] transition-colors duration-300",
                                                                children: "$156.8B"
                                                            }, void 0, false, {
                                                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                lineNumber: 472,
                                                                columnNumber: 21
                                                            }, undefined)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                        lineNumber: 454,
                                                        columnNumber: 19
                                                    }, undefined)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                lineNumber: 411,
                                                columnNumber: 17
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                        lineNumber: 398,
                                        columnNumber: 15
                                    }, undefined)
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                    lineNumber: 390,
                                    columnNumber: 13
                                }, undefined),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                    initial: {
                                        opacity: 0,
                                        x: 50
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    transition: {
                                        duration: 0.8,
                                        delay: 0.2
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    className: "space-y-8",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_4__.Badge, {
                                                    className: "border-2 border-[#f5d565] bg-transparent text-[#f5d565] px-6 py-3 text-sm font-bold rounded-full pointer-events-none",
                                                    children: "Decision-Ready"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                    lineNumber: 488,
                                                    columnNumber: 17
                                                }, undefined),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.h2, {
                                                    initial: {
                                                        opacity: 0,
                                                        y: 20
                                                    },
                                                    whileInView: {
                                                        opacity: 1,
                                                        y: 0
                                                    },
                                                    transition: {
                                                        duration: 0.8,
                                                        delay: 0.2
                                                    },
                                                    viewport: {
                                                        once: true
                                                    },
                                                    className: "text-3xl md:text-4xl lg:text-5xl font-bold text-white",
                                                    children: [
                                                        "Top Market",
                                                        " ",
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                            className: "text-[#FCD34D]",
                                                            children: "Opportunities"
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                            lineNumber: 500,
                                                            columnNumber: 19
                                                        }, undefined)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                    lineNumber: 492,
                                                    columnNumber: 17
                                                }, undefined),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.p, {
                                                    initial: {
                                                        opacity: 0,
                                                        y: 20
                                                    },
                                                    whileInView: {
                                                        opacity: 1,
                                                        y: 0
                                                    },
                                                    transition: {
                                                        duration: 0.8,
                                                        delay: 0.4
                                                    },
                                                    viewport: {
                                                        once: true
                                                    },
                                                    className: "text-lg text-[#CCCCCC] leading-relaxed",
                                                    children: "Discover the most promising business opportunities with the highest growth potential, market demand, and community interest. Make data-driven decisions with confidence."
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                    lineNumber: 503,
                                                    columnNumber: 17
                                                }, undefined)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                            lineNumber: 487,
                                            columnNumber: 15
                                        }, undefined),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "space-y-4",
                                            children: [
                                                {
                                                    text: "Validated by community voting",
                                                    icon: _barrel_optimize_names_ArrowRight_BarChart3_CheckCircle_Eye_Globe_Rocket_Sparkles_Star_Target_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_17__["default"]
                                                },
                                                {
                                                    text: "Real market data and growth metrics",
                                                    icon: _barrel_optimize_names_ArrowRight_BarChart3_CheckCircle_Eye_Globe_Rocket_Sparkles_Star_Target_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_14__["default"]
                                                },
                                                {
                                                    text: "Actionable business insights",
                                                    icon: _barrel_optimize_names_ArrowRight_BarChart3_CheckCircle_Eye_Globe_Rocket_Sparkles_Star_Target_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_12__["default"]
                                                }
                                            ].map((feature, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                                    initial: {
                                                        opacity: 0,
                                                        x: -20
                                                    },
                                                    whileInView: {
                                                        opacity: 1,
                                                        x: 0
                                                    },
                                                    transition: {
                                                        duration: 0.6,
                                                        delay: index * 0.1
                                                    },
                                                    viewport: {
                                                        once: true
                                                    },
                                                    className: "flex items-center space-x-3",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(feature.icon, {
                                                            className: "w-6 h-6 text-[#10B981] flex-shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                            lineNumber: 529,
                                                            columnNumber: 21
                                                        }, undefined),
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                            className: "text-[#CCCCCC]",
                                                            children: feature.text
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                            lineNumber: 530,
                                                            columnNumber: 21
                                                        }, undefined)
                                                    ]
                                                }, feature.text, true, {
                                                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                    lineNumber: 521,
                                                    columnNumber: 19
                                                }, undefined))
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                            lineNumber: 515,
                                            columnNumber: 15
                                        }, undefined)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                    lineNumber: 479,
                                    columnNumber: 13
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                            lineNumber: 388,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.8
                            },
                            viewport: {
                                once: true
                            },
                            className: "mt-16",
                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                children: [
                                    {
                                        title: "Egyptian fruit and vegetable exporters face 25-30% quality loss due to improper cold chain management",
                                        rating: 1,
                                        market: "USD 2.1B",
                                        growth: "8.5% CAGR"
                                    },
                                    {
                                        title: "Organic fruits and vegetables market faces supply constraints with only 15% of total sales being organic",
                                        rating: 1,
                                        market: "USD 76.1B",
                                        growth: "3.9% CAGR"
                                    },
                                    {
                                        title: "European markets experience severe fresh produce shortages during winter months creating opportunities",
                                        rating: 0,
                                        market: "USD 4.7B",
                                        growth: "12.3% CAGR"
                                    }
                                ].map((opportunity, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                        initial: {
                                            opacity: 0,
                                            y: 30
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            duration: 0.6,
                                            delay: index * 0.1
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        className: "bg-gradient-to-br from-white via-white to-gray-50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-gray-100 group",
                                        whileHover: {
                                            boxShadow: "0 25px 60px rgba(0,0,0,0.15)",
                                            y: -8
                                        },
                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                    className: "flex items-start justify-between",
                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                        className: "flex items-start space-x-3 flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                                                className: "w-10 h-10 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300",
                                                                whileHover: {
                                                                    rotate: 360
                                                                },
                                                                transition: {
                                                                    duration: 0.5
                                                                },
                                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRight_BarChart3_CheckCircle_Eye_Globe_Rocket_Sparkles_Star_Target_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                                                    className: "w-5 h-5 text-white"
                                                                }, void 0, false, {
                                                                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                    lineNumber: 588,
                                                                    columnNumber: 27
                                                                }, undefined)
                                                            }, void 0, false, {
                                                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                lineNumber: 583,
                                                                columnNumber: 25
                                                            }, undefined),
                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                                className: "flex-1",
                                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                                                    className: "text-gray-900 text-sm leading-relaxed font-medium group-hover:text-gray-700 transition-colors duration-300",
                                                                    children: opportunity.title
                                                                }, void 0, false, {
                                                                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                    lineNumber: 591,
                                                                    columnNumber: 27
                                                                }, undefined)
                                                            }, void 0, false, {
                                                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                lineNumber: 590,
                                                                columnNumber: 25
                                                            }, undefined)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                        lineNumber: 582,
                                                        columnNumber: 23
                                                    }, undefined)
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                    lineNumber: 581,
                                                    columnNumber: 21
                                                }, undefined),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                    className: "flex items-center justify-between pt-3 border-t border-gray-100",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                            className: "space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                                    className: "text-xs text-gray-500",
                                                                    children: "Market Size"
                                                                }, void 0, false, {
                                                                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                    lineNumber: 600,
                                                                    columnNumber: 25
                                                                }, undefined),
                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                                    className: "text-sm font-bold text-[#10B981]",
                                                                    children: opportunity.market
                                                                }, void 0, false, {
                                                                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                    lineNumber: 601,
                                                                    columnNumber: 25
                                                                }, undefined)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                            lineNumber: 599,
                                                            columnNumber: 23
                                                        }, undefined),
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                            className: "space-y-1 text-right",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                                    className: "text-xs text-gray-500",
                                                                    children: "Growth Rate"
                                                                }, void 0, false, {
                                                                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                    lineNumber: 604,
                                                                    columnNumber: 25
                                                                }, undefined),
                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                                    className: "text-sm font-bold text-blue-600",
                                                                    children: opportunity.growth
                                                                }, void 0, false, {
                                                                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                    lineNumber: 605,
                                                                    columnNumber: 25
                                                                }, undefined)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                            lineNumber: 603,
                                                            columnNumber: 23
                                                        }, undefined)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                    lineNumber: 598,
                                                    columnNumber: 21
                                                }, undefined),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                    className: "flex items-center justify-between pt-2",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                            className: "flex items-center space-x-1",
                                                            children: [
                                                                ...Array(5)
                                                            ].map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRight_BarChart3_CheckCircle_Eye_Globe_Rocket_Sparkles_Star_Target_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_18__["default"], {
                                                                    className: `w-4 h-4 transition-colors duration-300 ${i < opportunity.rating ? "text-[#FCD34D] fill-current" : "text-gray-300"}`
                                                                }, i, false, {
                                                                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                    lineNumber: 612,
                                                                    columnNumber: 27
                                                                }, undefined))
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                            lineNumber: 610,
                                                            columnNumber: 23
                                                        }, undefined),
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_4__.Badge, {
                                                            className: "bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20 text-xs",
                                                            children: "Active"
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                            lineNumber: 618,
                                                            columnNumber: 23
                                                        }, undefined)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                    lineNumber: 609,
                                                    columnNumber: 21
                                                }, undefined)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                            lineNumber: 580,
                                            columnNumber: 19
                                        }, undefined)
                                    }, index, false, {
                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                        lineNumber: 568,
                                        columnNumber: 17
                                    }, undefined))
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                lineNumber: 547,
                                columnNumber: 13
                            }, undefined)
                        }, void 0, false, {
                            fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                            lineNumber: 540,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.8
                            },
                            viewport: {
                                once: true
                            },
                            className: "text-center mt-16",
                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                href: "/opportunities",
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                    size: "lg",
                                    className: "bg-white/10 border-2 border-[#00FF88] text-[#00FF88] hover:bg-[#00FF88] hover:text-black text-lg px-8 py-4 rounded-xl font-semibold transition-all duration-300",
                                    children: [
                                        "Discover Opportunities",
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRight_BarChart3_CheckCircle_Eye_Globe_Rocket_Sparkles_Star_Target_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                            className: "w-5 h-5 ml-2"
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                            lineNumber: 642,
                                            columnNumber: 17
                                        }, undefined)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                    lineNumber: 637,
                                    columnNumber: 15
                                }, undefined)
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                lineNumber: 636,
                                columnNumber: 13
                            }, undefined)
                        }, void 0, false, {
                            fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                            lineNumber: 629,
                            columnNumber: 11
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                    lineNumber: 387,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                lineNumber: 386,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
                className: "py-20 relative bg-[#10141a] mb-20",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10",
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "grid lg:grid-cols-2 gap-16 items-start",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                initial: {
                                    opacity: 0,
                                    x: -50
                                },
                                whileInView: {
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    duration: 0.8
                                },
                                viewport: {
                                    once: true
                                },
                                className: "space-y-8",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_4__.Badge, {
                                                className: "border-2 border-[#6ae585] bg-transparent text-[#6ae585] px-6 py-3 text-sm font-bold rounded-full pointer-events-none",
                                                children: "Real World Demand"
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                lineNumber: 663,
                                                columnNumber: 17
                                            }, undefined),
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.h2, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 20
                                                },
                                                whileInView: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                transition: {
                                                    duration: 0.8,
                                                    delay: 0.2
                                                },
                                                viewport: {
                                                    once: true
                                                },
                                                className: "text-3xl md:text-4xl lg:text-5xl font-bold text-white",
                                                children: [
                                                    "Trending Research",
                                                    " ",
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                        className: "text-[#10B981]",
                                                        children: "Topics"
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                        lineNumber: 675,
                                                        columnNumber: 19
                                                    }, undefined)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                lineNumber: 667,
                                                columnNumber: 17
                                            }, undefined),
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.p, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 20
                                                },
                                                whileInView: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                transition: {
                                                    duration: 0.8,
                                                    delay: 0.4
                                                },
                                                viewport: {
                                                    once: true
                                                },
                                                className: "text-lg text-[#CCCCCC] leading-relaxed",
                                                children: "Real-time trending insights from our community of entrepreneurs and investors. See what markets and opportunities are generating the most interest right now."
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                lineNumber: 678,
                                                columnNumber: 17
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                        lineNumber: 662,
                                        columnNumber: 15
                                    }, undefined),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: "space-y-4",
                                        children: [
                                            {
                                                text: "Community-driven research priorities",
                                                icon: _barrel_optimize_names_ArrowRight_BarChart3_CheckCircle_Eye_Globe_Rocket_Sparkles_Star_Target_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_15__["default"]
                                            },
                                            {
                                                text: "Real-time market sentiment",
                                                icon: _barrel_optimize_names_ArrowRight_BarChart3_CheckCircle_Eye_Globe_Rocket_Sparkles_Star_Target_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_14__["default"]
                                            },
                                            {
                                                text: "Global market perspectives",
                                                icon: _barrel_optimize_names_ArrowRight_BarChart3_CheckCircle_Eye_Globe_Rocket_Sparkles_Star_Target_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_19__["default"]
                                            }
                                        ].map((feature, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                                initial: {
                                                    opacity: 0,
                                                    x: -20
                                                },
                                                whileInView: {
                                                    opacity: 1,
                                                    x: 0
                                                },
                                                transition: {
                                                    duration: 0.6,
                                                    delay: index * 0.1
                                                },
                                                viewport: {
                                                    once: true
                                                },
                                                className: "flex items-center space-x-3",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(feature.icon, {
                                                        className: "w-6 h-6 text-[#10B981] flex-shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                        lineNumber: 704,
                                                        columnNumber: 21
                                                    }, undefined),
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                        className: "text-[#CCCCCC]",
                                                        children: feature.text
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                        lineNumber: 705,
                                                        columnNumber: 21
                                                    }, undefined)
                                                ]
                                            }, feature.text, true, {
                                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                lineNumber: 696,
                                                columnNumber: 19
                                            }, undefined))
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                        lineNumber: 690,
                                        columnNumber: 15
                                    }, undefined),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            duration: 0.8,
                                            delay: 0.6
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        className: "pt-4",
                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                            href: "/trending",
                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                                size: "lg",
                                                className: "bg-[#00FF88] hover:bg-[#00E87A] text-black text-lg px-8 py-4 rounded-xl font-semibold",
                                                children: [
                                                    "View All Topics",
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRight_BarChart3_CheckCircle_Eye_Globe_Rocket_Sparkles_Star_Target_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                                        className: "w-5 h-5 ml-2"
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                        lineNumber: 724,
                                                        columnNumber: 21
                                                    }, undefined)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                lineNumber: 719,
                                                columnNumber: 19
                                            }, undefined)
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                            lineNumber: 718,
                                            columnNumber: 17
                                        }, undefined)
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                        lineNumber: 711,
                                        columnNumber: 15
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                lineNumber: 654,
                                columnNumber: 13
                            }, undefined),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                initial: {
                                    opacity: 0,
                                    x: 50
                                },
                                whileInView: {
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    duration: 0.8,
                                    delay: 0.2
                                },
                                viewport: {
                                    once: true
                                },
                                className: "relative",
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 30
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.8,
                                        delay: 0.4
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    className: "bg-gradient-to-br from-[#1a1a1a] via-[#1a1a1a] to-[#252529] border border-white/20 rounded-2xl p-8 shadow-2xl backdrop-blur-sm hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)] hover:border-[#10B981]/30 transition-all duration-500",
                                    whileHover: {
                                        scale: 1.02
                                    },
                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                                                        className: "text-2xl font-bold text-white",
                                                        children: "Trending Now"
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                        lineNumber: 748,
                                                        columnNumber: 21
                                                    }, undefined),
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_4__.Badge, {
                                                        className: "bg-[#F97316] text-white px-4 py-2 text-xs font-bold rounded-full",
                                                        children: "Hot"
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                        lineNumber: 749,
                                                        columnNumber: 21
                                                    }, undefined)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                lineNumber: 747,
                                                columnNumber: 19
                                            }, undefined),
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                                        initial: {
                                                            opacity: 0,
                                                            y: 20
                                                        },
                                                        whileInView: {
                                                            opacity: 1,
                                                            y: 0
                                                        },
                                                        transition: {
                                                            duration: 0.6,
                                                            delay: 0.1
                                                        },
                                                        viewport: {
                                                            once: true
                                                        },
                                                        className: "p-4 bg-gradient-to-r from-[#0F172A]/60 to-[#1A1A1A]/40 rounded-xl border border-white/20 hover:border-[#10B981]/40 hover:shadow-lg hover:shadow-[#10B981]/10 transition-all duration-300 hover:scale-[1.02] group",
                                                        whileHover: {
                                                            y: -2
                                                        },
                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                            className: "space-y-3",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                                    className: "flex items-start justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                                                                            className: "text-white font-semibold text-sm leading-relaxed group-hover:text-[#10B981] transition-colors duration-300",
                                                                            children: "AI-Powered Personal Finance Apps"
                                                                        }, void 0, false, {
                                                                            fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                            lineNumber: 766,
                                                                            columnNumber: 27
                                                                        }, undefined),
                                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                                                            className: "ml-3 text-lg font-bold text-[#10B981] group-hover:scale-110 transition-transform duration-300",
                                                                            whileHover: {
                                                                                scale: 1.2
                                                                            },
                                                                            children: "+156"
                                                                        }, void 0, false, {
                                                                            fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                            lineNumber: 769,
                                                                            columnNumber: 27
                                                                        }, undefined)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                    lineNumber: 765,
                                                                    columnNumber: 25
                                                                }, undefined),
                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                                    className: "flex items-center space-x-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_4__.Badge, {
                                                                            className: "bg-[#FCD34D] text-black text-xs px-2 py-1 rounded-md font-medium",
                                                                            children: "FinTech"
                                                                        }, void 0, false, {
                                                                            fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                            lineNumber: 778,
                                                                            columnNumber: 27
                                                                        }, undefined),
                                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_4__.Badge, {
                                                                            className: "bg-[#3B82F6] text-white text-xs px-2 py-1 rounded-md font-medium",
                                                                            children: "United States"
                                                                        }, void 0, false, {
                                                                            fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                            lineNumber: 781,
                                                                            columnNumber: 27
                                                                        }, undefined)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                    lineNumber: 777,
                                                                    columnNumber: 25
                                                                }, undefined),
                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                                                    className: "text-xs text-[#CCCCCC] leading-relaxed group-hover:text-white transition-colors duration-300",
                                                                    children: "Market analysis for AI-driven budgeting and investment platforms"
                                                                }, void 0, false, {
                                                                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                    lineNumber: 786,
                                                                    columnNumber: 25
                                                                }, undefined)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                            lineNumber: 764,
                                                            columnNumber: 23
                                                        }, undefined)
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                        lineNumber: 756,
                                                        columnNumber: 21
                                                    }, undefined),
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                                        initial: {
                                                            opacity: 0,
                                                            y: 20
                                                        },
                                                        whileInView: {
                                                            opacity: 1,
                                                            y: 0
                                                        },
                                                        transition: {
                                                            duration: 0.6,
                                                            delay: 0.2
                                                        },
                                                        viewport: {
                                                            once: true
                                                        },
                                                        className: "p-4 bg-gradient-to-r from-[#0F172A]/60 to-[#1A1A1A]/40 rounded-xl border border-white/20 hover:border-[#10B981]/40 hover:shadow-lg hover:shadow-[#10B981]/10 transition-all duration-300 hover:scale-[1.02] group",
                                                        whileHover: {
                                                            y: -2
                                                        },
                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                            className: "space-y-3",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                                    className: "flex items-start justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                                                                            className: "text-white font-semibold text-sm leading-relaxed group-hover:text-[#10B981] transition-colors duration-300",
                                                                            children: "Sustainable Fashion E-commerce"
                                                                        }, void 0, false, {
                                                                            fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                            lineNumber: 803,
                                                                            columnNumber: 27
                                                                        }, undefined),
                                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                                                            className: "ml-3 text-lg font-bold text-[#10B981] group-hover:scale-110 transition-transform duration-300",
                                                                            whileHover: {
                                                                                scale: 1.2
                                                                            },
                                                                            children: "+142"
                                                                        }, void 0, false, {
                                                                            fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                            lineNumber: 806,
                                                                            columnNumber: 27
                                                                        }, undefined)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                    lineNumber: 802,
                                                                    columnNumber: 25
                                                                }, undefined),
                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                                    className: "flex items-center space-x-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_4__.Badge, {
                                                                            className: "bg-[#FCD34D] text-black text-xs px-2 py-1 rounded-md font-medium",
                                                                            children: "Fashion"
                                                                        }, void 0, false, {
                                                                            fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                            lineNumber: 815,
                                                                            columnNumber: 27
                                                                        }, undefined),
                                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_4__.Badge, {
                                                                            className: "bg-[#3B82F6] text-white text-xs px-2 py-1 rounded-md font-medium",
                                                                            children: "Europe"
                                                                        }, void 0, false, {
                                                                            fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                            lineNumber: 818,
                                                                            columnNumber: 27
                                                                        }, undefined)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                    lineNumber: 814,
                                                                    columnNumber: 25
                                                                }, undefined),
                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                                                    className: "text-xs text-[#CCCCCC] leading-relaxed group-hover:text-white transition-colors duration-300",
                                                                    children: "Consumer behavior and market size for eco-friendly clothing platforms"
                                                                }, void 0, false, {
                                                                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                    lineNumber: 823,
                                                                    columnNumber: 25
                                                                }, undefined)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                            lineNumber: 801,
                                                            columnNumber: 23
                                                        }, undefined)
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                        lineNumber: 793,
                                                        columnNumber: 21
                                                    }, undefined),
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                                        initial: {
                                                            opacity: 0,
                                                            y: 20
                                                        },
                                                        whileInView: {
                                                            opacity: 1,
                                                            y: 0
                                                        },
                                                        transition: {
                                                            duration: 0.6,
                                                            delay: 0.3
                                                        },
                                                        viewport: {
                                                            once: true
                                                        },
                                                        className: "p-4 bg-gradient-to-r from-[#0F172A]/60 to-[#1A1A1A]/40 rounded-xl border border-white/20 hover:border-[#10B981]/40 hover:shadow-lg hover:shadow-[#10B981]/10 transition-all duration-300 hover:scale-[1.02] group",
                                                        whileHover: {
                                                            y: -2
                                                        },
                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                            className: "space-y-3",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                                    className: "flex items-start justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                                                                            className: "text-white font-semibold text-sm leading-relaxed group-hover:text-[#10B981] transition-colors duration-300",
                                                                            children: "Remote Work Productivity Tools"
                                                                        }, void 0, false, {
                                                                            fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                            lineNumber: 840,
                                                                            columnNumber: 27
                                                                        }, undefined),
                                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                                                            className: "ml-3 text-lg font-bold text-[#10B981] group-hover:scale-110 transition-transform duration-300",
                                                                            whileHover: {
                                                                                scale: 1.2
                                                                            },
                                                                            children: "+128"
                                                                        }, void 0, false, {
                                                                            fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                            lineNumber: 843,
                                                                            columnNumber: 27
                                                                        }, undefined)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                    lineNumber: 839,
                                                                    columnNumber: 25
                                                                }, undefined),
                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                                    className: "flex items-center space-x-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_4__.Badge, {
                                                                            className: "bg-[#FCD34D] text-black text-xs px-2 py-1 rounded-md font-medium",
                                                                            children: "SaaS"
                                                                        }, void 0, false, {
                                                                            fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                            lineNumber: 852,
                                                                            columnNumber: 27
                                                                        }, undefined),
                                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_4__.Badge, {
                                                                            className: "bg-[#3B82F6] text-white text-xs px-2 py-1 rounded-md font-medium",
                                                                            children: "Global"
                                                                        }, void 0, false, {
                                                                            fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                            lineNumber: 855,
                                                                            columnNumber: 27
                                                                        }, undefined)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                    lineNumber: 851,
                                                                    columnNumber: 25
                                                                }, undefined),
                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                                                    className: "text-xs text-[#CCCCCC] leading-relaxed group-hover:text-white transition-colors duration-300",
                                                                    children: "Analysis of collaboration software market post-pandemic"
                                                                }, void 0, false, {
                                                                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                    lineNumber: 860,
                                                                    columnNumber: 25
                                                                }, undefined)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                            lineNumber: 838,
                                                            columnNumber: 23
                                                        }, undefined)
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                        lineNumber: 830,
                                                        columnNumber: 21
                                                    }, undefined)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                lineNumber: 754,
                                                columnNumber: 19
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                        lineNumber: 746,
                                        columnNumber: 17
                                    }, undefined)
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                    lineNumber: 738,
                                    columnNumber: 15
                                }, undefined)
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                lineNumber: 731,
                                columnNumber: 13
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                        lineNumber: 652,
                        columnNumber: 11
                    }, undefined)
                }, void 0, false, {
                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                    lineNumber: 651,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                lineNumber: 650,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
                className: "py-20 relative bg-[#10141a] mb-20",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10",
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "grid lg:grid-cols-2 gap-16 items-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                initial: {
                                    opacity: 0,
                                    x: -50
                                },
                                whileInView: {
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    duration: 0.8
                                },
                                viewport: {
                                    once: true
                                },
                                className: "space-y-8",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_4__.Badge, {
                                                className: "border-2 border-[#f5d565] bg-transparent text-[#f5d565] px-6 py-3 text-sm font-bold rounded-full pointer-events-none",
                                                children: "Competitive Advantage"
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                lineNumber: 887,
                                                columnNumber: 17
                                            }, undefined),
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.h2, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 20
                                                },
                                                whileInView: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                transition: {
                                                    duration: 0.8,
                                                    delay: 0.2
                                                },
                                                viewport: {
                                                    once: true
                                                },
                                                className: "text-3xl md:text-4xl lg:text-5xl font-bold text-white",
                                                children: [
                                                    "Build Smarter with",
                                                    " ",
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                        className: "text-[#FCD34D]",
                                                        children: "Spark"
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                        lineNumber: 899,
                                                        columnNumber: 19
                                                    }, undefined)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                lineNumber: 891,
                                                columnNumber: 17
                                            }, undefined),
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.p, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 20
                                                },
                                                whileInView: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                transition: {
                                                    duration: 0.8,
                                                    delay: 0.4
                                                },
                                                viewport: {
                                                    once: true
                                                },
                                                className: "text-lg text-[#CCCCCC] leading-relaxed",
                                                children: "Get the competitive edge with professional-grade market research at startup-friendly prices. Make data-driven decisions that accelerate your growth."
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                lineNumber: 902,
                                                columnNumber: 17
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                        lineNumber: 886,
                                        columnNumber: 15
                                    }, undefined),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                        children: [
                                            {
                                                value: "95% Accuracy",
                                                subtitle: "Validated Insights",
                                                icon: _barrel_optimize_names_ArrowRight_BarChart3_CheckCircle_Eye_Globe_Rocket_Sparkles_Star_Target_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_17__["default"],
                                                color: "#10B981"
                                            },
                                            {
                                                value: "90% Cost Savings",
                                                subtitle: "Vs. traditional firms",
                                                icon: _barrel_optimize_names_ArrowRight_BarChart3_CheckCircle_Eye_Globe_Rocket_Sparkles_Star_Target_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_14__["default"],
                                                color: "#10B981"
                                            },
                                            {
                                                value: "10x Faster",
                                                subtitle: "Than traditional research",
                                                icon: _barrel_optimize_names_ArrowRight_BarChart3_CheckCircle_Eye_Globe_Rocket_Sparkles_Star_Target_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_16__["default"],
                                                color: "#FCD34D"
                                            },
                                            {
                                                value: "Global Reach",
                                                subtitle: "50+ countries covered",
                                                icon: _barrel_optimize_names_ArrowRight_BarChart3_CheckCircle_Eye_Globe_Rocket_Sparkles_Star_Target_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_19__["default"],
                                                color: "#3B82F6"
                                            }
                                        ].map((metric, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 30
                                                },
                                                whileInView: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                transition: {
                                                    duration: 0.6,
                                                    delay: index * 0.1
                                                },
                                                viewport: {
                                                    once: true
                                                },
                                                className: "flex items-center space-x-3 py-2 group cursor-pointer",
                                                whileHover: {
                                                    x: 5
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                                        className: "w-8 h-8 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300",
                                                        style: {
                                                            backgroundColor: `${metric.color}20`,
                                                            border: `1px solid ${metric.color}30`,
                                                            boxShadow: `0 0 10px ${metric.color}20`
                                                        },
                                                        whileHover: {
                                                            boxShadow: `0 0 20px ${metric.color}40`,
                                                            scale: 1.1
                                                        },
                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(metric.icon, {
                                                            className: "w-4 h-4",
                                                            style: {
                                                                color: metric.color
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                            lineNumber: 962,
                                                            columnNumber: 23
                                                        }, undefined)
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                        lineNumber: 950,
                                                        columnNumber: 21
                                                    }, undefined),
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                                className: "text-base font-bold text-white group-hover:scale-105 transition-transform duration-300",
                                                                children: metric.value
                                                            }, void 0, false, {
                                                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                lineNumber: 965,
                                                                columnNumber: 23
                                                            }, undefined),
                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                                className: "text-xs text-[#CCCCCC] group-hover:text-white transition-colors duration-300",
                                                                children: metric.subtitle
                                                            }, void 0, false, {
                                                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                lineNumber: 968,
                                                                columnNumber: 23
                                                            }, undefined)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                        lineNumber: 964,
                                                        columnNumber: 21
                                                    }, undefined)
                                                ]
                                            }, metric.value, true, {
                                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                lineNumber: 941,
                                                columnNumber: 19
                                            }, undefined))
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                        lineNumber: 914,
                                        columnNumber: 15
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                lineNumber: 878,
                                columnNumber: 13
                            }, undefined),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                initial: {
                                    opacity: 0,
                                    x: 50
                                },
                                whileInView: {
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    duration: 0.8,
                                    delay: 0.2
                                },
                                viewport: {
                                    once: true
                                },
                                className: "relative",
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 30
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.8,
                                        delay: 0.4
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    className: "bg-gradient-to-br from-[#1a1a1a] via-[#1a1a1a] to-[#252529] border border-white/20 rounded-2xl p-8 shadow-2xl backdrop-blur-sm hover:shadow-[0_20px_50px_rgba(252,211,77,0.15)] hover:border-[#FCD34D]/30 transition-all duration-500",
                                    whileHover: {
                                        scale: 1.02
                                    },
                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                                                        className: "text-2xl font-bold text-white",
                                                        children: "Success Metrics"
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                        lineNumber: 995,
                                                        columnNumber: 21
                                                    }, undefined),
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_4__.Badge, {
                                                        className: "bg-[#10B981] text-white px-4 py-2 text-xs font-bold rounded-full",
                                                        children: "Proven Results"
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                        lineNumber: 996,
                                                        columnNumber: 21
                                                    }, undefined)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                lineNumber: 994,
                                                columnNumber: 19
                                            }, undefined),
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                className: "space-y-6",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                                        initial: {
                                                            opacity: 0,
                                                            y: 20
                                                        },
                                                        whileInView: {
                                                            opacity: 1,
                                                            y: 0
                                                        },
                                                        transition: {
                                                            duration: 0.6,
                                                            delay: 0.1
                                                        },
                                                        viewport: {
                                                            once: true
                                                        },
                                                        className: "space-y-3",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                                className: "flex items-center justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                                        className: "text-white font-semibold",
                                                                        children: "Research Accuracy"
                                                                    }, void 0, false, {
                                                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                        lineNumber: 1011,
                                                                        columnNumber: 25
                                                                    }, undefined),
                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                                        className: "text-[#10B981] font-bold text-lg",
                                                                        children: "95%"
                                                                    }, void 0, false, {
                                                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                        lineNumber: 1012,
                                                                        columnNumber: 25
                                                                    }, undefined)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                lineNumber: 1010,
                                                                columnNumber: 23
                                                            }, undefined),
                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                                className: "w-full bg-[#334155]/50 rounded-full h-3 overflow-hidden",
                                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                                                    initial: {
                                                                        width: 0
                                                                    },
                                                                    whileInView: {
                                                                        width: "95%"
                                                                    },
                                                                    transition: {
                                                                        duration: 1.5,
                                                                        delay: 0.5,
                                                                        ease: "easeOut"
                                                                    },
                                                                    viewport: {
                                                                        once: true
                                                                    },
                                                                    className: "h-full bg-gradient-to-r from-[#FCD34D] to-[#10B981] rounded-full shadow-lg"
                                                                }, void 0, false, {
                                                                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                    lineNumber: 1015,
                                                                    columnNumber: 25
                                                                }, undefined)
                                                            }, void 0, false, {
                                                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                lineNumber: 1014,
                                                                columnNumber: 23
                                                            }, undefined)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                        lineNumber: 1003,
                                                        columnNumber: 21
                                                    }, undefined),
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                                        initial: {
                                                            opacity: 0,
                                                            y: 20
                                                        },
                                                        whileInView: {
                                                            opacity: 1,
                                                            y: 0
                                                        },
                                                        transition: {
                                                            duration: 0.6,
                                                            delay: 0.2
                                                        },
                                                        viewport: {
                                                            once: true
                                                        },
                                                        className: "space-y-3",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                                className: "flex items-center justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                                        className: "text-white font-semibold",
                                                                        children: "Time Savings"
                                                                    }, void 0, false, {
                                                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                        lineNumber: 1034,
                                                                        columnNumber: 25
                                                                    }, undefined),
                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                                        className: "text-[#10B981] font-bold text-lg",
                                                                        children: "10x"
                                                                    }, void 0, false, {
                                                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                        lineNumber: 1035,
                                                                        columnNumber: 25
                                                                    }, undefined)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                lineNumber: 1033,
                                                                columnNumber: 23
                                                            }, undefined),
                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                                className: "w-full bg-[#334155]/50 rounded-full h-3 overflow-hidden",
                                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                                                    initial: {
                                                                        width: 0
                                                                    },
                                                                    whileInView: {
                                                                        width: "100%"
                                                                    },
                                                                    transition: {
                                                                        duration: 1.5,
                                                                        delay: 0.7,
                                                                        ease: "easeOut"
                                                                    },
                                                                    viewport: {
                                                                        once: true
                                                                    },
                                                                    className: "h-full bg-gradient-to-r from-[#FCD34D] to-[#10B981] rounded-full shadow-lg"
                                                                }, void 0, false, {
                                                                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                    lineNumber: 1038,
                                                                    columnNumber: 25
                                                                }, undefined)
                                                            }, void 0, false, {
                                                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                lineNumber: 1037,
                                                                columnNumber: 23
                                                            }, undefined)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                        lineNumber: 1026,
                                                        columnNumber: 21
                                                    }, undefined),
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                                        initial: {
                                                            opacity: 0,
                                                            y: 20
                                                        },
                                                        whileInView: {
                                                            opacity: 1,
                                                            y: 0
                                                        },
                                                        transition: {
                                                            duration: 0.6,
                                                            delay: 0.3
                                                        },
                                                        viewport: {
                                                            once: true
                                                        },
                                                        className: "space-y-3",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                                className: "flex items-center justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                                        className: "text-white font-semibold",
                                                                        children: "Cost Reduction"
                                                                    }, void 0, false, {
                                                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                        lineNumber: 1057,
                                                                        columnNumber: 25
                                                                    }, undefined),
                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                                        className: "text-[#10B981] font-bold text-lg",
                                                                        children: "90%"
                                                                    }, void 0, false, {
                                                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                        lineNumber: 1058,
                                                                        columnNumber: 25
                                                                    }, undefined)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                lineNumber: 1056,
                                                                columnNumber: 23
                                                            }, undefined),
                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                                className: "w-full bg-[#334155]/50 rounded-full h-3 overflow-hidden",
                                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                                                    initial: {
                                                                        width: 0
                                                                    },
                                                                    whileInView: {
                                                                        width: "90%"
                                                                    },
                                                                    transition: {
                                                                        duration: 1.5,
                                                                        delay: 0.9,
                                                                        ease: "easeOut"
                                                                    },
                                                                    viewport: {
                                                                        once: true
                                                                    },
                                                                    className: "h-full bg-gradient-to-r from-[#FCD34D] to-[#10B981] rounded-full shadow-lg"
                                                                }, void 0, false, {
                                                                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                    lineNumber: 1061,
                                                                    columnNumber: 25
                                                                }, undefined)
                                                            }, void 0, false, {
                                                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                                lineNumber: 1060,
                                                                columnNumber: 23
                                                            }, undefined)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                        lineNumber: 1049,
                                                        columnNumber: 21
                                                    }, undefined)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                lineNumber: 1001,
                                                columnNumber: 19
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                        lineNumber: 993,
                                        columnNumber: 17
                                    }, undefined)
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                    lineNumber: 985,
                                    columnNumber: 15
                                }, undefined)
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                lineNumber: 978,
                                columnNumber: 13
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                        lineNumber: 876,
                        columnNumber: 11
                    }, undefined)
                }, void 0, false, {
                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                    lineNumber: 875,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                lineNumber: 874,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
                className: "py-20 relative bg-[#10141a] mb-20",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10",
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "text-center space-y-16",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                initial: {
                                    opacity: 0,
                                    y: 30
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.8
                                },
                                viewport: {
                                    once: true
                                },
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                        initial: {
                                            opacity: 0,
                                            scale: 0.8
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        transition: {
                                            duration: 0.6,
                                            delay: 0.2
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_4__.Badge, {
                                            className: "border-2 border-[#f5d565] bg-transparent text-[#f5d565] px-6 py-3 text-sm font-bold rounded-full pointer-events-none",
                                            children: "Get Started Today"
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                            lineNumber: 1096,
                                            columnNumber: 17
                                        }, undefined)
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                        lineNumber: 1090,
                                        columnNumber: 15
                                    }, undefined),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.h2, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            duration: 0.8,
                                            delay: 0.3
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        className: "text-3xl md:text-4xl lg:text-5xl font-bold text-white",
                                        children: [
                                            "Your Next Great Decision",
                                            " ",
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                className: "text-[#6ae585]",
                                                children: "Starts Here"
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                lineNumber: 1109,
                                                columnNumber: 17
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                        lineNumber: 1101,
                                        columnNumber: 15
                                    }, undefined),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.p, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            duration: 0.8,
                                            delay: 0.4
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        className: "text-lg text-[#CCCCCC] leading-relaxed max-w-3xl mx-auto",
                                        children: "Join thousands of entrepreneurs who are already making smarter decisions with Spark. Get access to market intelligence that drives real results."
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                        lineNumber: 1112,
                                        columnNumber: 15
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                lineNumber: 1083,
                                columnNumber: 13
                            }, undefined),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                initial: {
                                    opacity: 0,
                                    y: 30
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.8,
                                    delay: 0.2
                                },
                                viewport: {
                                    once: true
                                },
                                className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                                children: [
                                    {
                                        title: "Discover",
                                        description: "Find trending opportunities",
                                        icon: _barrel_optimize_names_ArrowRight_BarChart3_CheckCircle_Eye_Globe_Rocket_Sparkles_Star_Target_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_20__["default"],
                                        color: "#10B981"
                                    },
                                    {
                                        title: "Validate",
                                        description: "Get community insights",
                                        icon: _barrel_optimize_names_ArrowRight_BarChart3_CheckCircle_Eye_Globe_Rocket_Sparkles_Star_Target_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_17__["default"],
                                        color: "#FCD34D"
                                    },
                                    {
                                        title: "Build",
                                        description: "Launch with confidence",
                                        icon: _barrel_optimize_names_ArrowRight_BarChart3_CheckCircle_Eye_Globe_Rocket_Sparkles_Star_Target_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_21__["default"],
                                        color: "#3B82F6"
                                    }
                                ].map((feature, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                        initial: {
                                            opacity: 0,
                                            y: 30
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            duration: 0.6,
                                            delay: index * 0.1
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        className: "text-center py-8 group",
                                        whileHover: {
                                            y: -5
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                                className: "w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300",
                                                style: {
                                                    backgroundColor: `${feature.color}20`,
                                                    border: `2px solid ${feature.color}30`,
                                                    boxShadow: `0 0 20px ${feature.color}20`
                                                },
                                                whileHover: {
                                                    boxShadow: `0 0 30px ${feature.color}40`,
                                                    scale: 1.1
                                                },
                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(feature.icon, {
                                                    className: "w-8 h-8",
                                                    style: {
                                                        color: feature.color
                                                    }
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                    lineNumber: 1172,
                                                    columnNumber: 21
                                                }, undefined)
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                lineNumber: 1160,
                                                columnNumber: 19
                                            }, undefined),
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                                                className: "text-xl font-bold text-white mb-3 group-hover:scale-105 transition-transform duration-300",
                                                children: feature.title
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                lineNumber: 1175,
                                                columnNumber: 19
                                            }, undefined),
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                                className: "text-[#CCCCCC] group-hover:text-white transition-colors duration-300",
                                                children: feature.description
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                lineNumber: 1179,
                                                columnNumber: 19
                                            }, undefined)
                                        ]
                                    }, feature.title, true, {
                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                        lineNumber: 1151,
                                        columnNumber: 17
                                    }, undefined))
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                lineNumber: 1124,
                                columnNumber: 13
                            }, undefined),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.8,
                                    delay: 0.6
                                },
                                viewport: {
                                    once: true
                                },
                                className: "flex flex-col sm:flex-row gap-4 justify-center items-center",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                        href: "/trending",
                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                            size: "lg",
                                            className: "bg-[#00FF88] hover:bg-[#00E87A] text-black text-lg px-8 py-4 rounded-xl font-semibold",
                                            children: [
                                                "Start Exploring",
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRight_BarChart3_CheckCircle_Eye_Globe_Rocket_Sparkles_Star_Target_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                                    className: "w-5 h-5 ml-2"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                    lineNumber: 1200,
                                                    columnNumber: 19
                                                }, undefined)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                            lineNumber: 1195,
                                            columnNumber: 17
                                        }, undefined)
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                        lineNumber: 1194,
                                        columnNumber: 15
                                    }, undefined),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                        href: "/opportunities",
                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                            size: "lg",
                                            className: "bg-white/10 border-2 border-[#00FF88] text-[#00FF88] hover:bg-[#00FF88] hover:text-black text-lg px-8 py-4 rounded-xl font-semibold transition-all duration-300",
                                            children: [
                                                "View Opportunities",
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRight_BarChart3_CheckCircle_Eye_Globe_Rocket_Sparkles_Star_Target_TrendingUp_Users_Zap_lucide_react__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                                    className: "w-5 h-5 ml-2"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                                    lineNumber: 1210,
                                                    columnNumber: 19
                                                }, undefined)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                            lineNumber: 1205,
                                            columnNumber: 17
                                        }, undefined)
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                        lineNumber: 1204,
                                        columnNumber: 15
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                                lineNumber: 1187,
                                columnNumber: 13
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                        lineNumber: 1081,
                        columnNumber: 11
                    }, undefined)
                }, void 0, false, {
                    fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                    lineNumber: 1080,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                lineNumber: 1079,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth_modal__WEBPACK_IMPORTED_MODULE_6__["default"], {
                isOpen: isAuthModalOpen,
                onClose: ()=>setIsAuthModalOpen(false)
            }, void 0, false, {
                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                lineNumber: 1219,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
                fileName: "/home/ubuntu/spark-platform/app/page.tsx",
                lineNumber: 1225,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "/home/ubuntu/spark-platform/app/page.tsx",
        lineNumber: 159,
        columnNumber: 5
    }, undefined);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);


/***/ }),

/***/ "(ssr)/./components/auth-modal.tsx":
/*!***********************************!*\
  !*** ./components/auth-modal.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! framer-motion */ "(ssr)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! framer-motion */ "(ssr)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs");
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ "(ssr)/./components/ui/button.tsx");
/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/input */ "(ssr)/./components/ui/input.tsx");
/* harmony import */ var _components_ui_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/label */ "(ssr)/./components/ui/label.tsx");
/* harmony import */ var _components_ui_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/select */ "(ssr)/./components/ui/select.tsx");
/* harmony import */ var _components_ui_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/dialog */ "(ssr)/./components/ui/dialog.tsx");
/* harmony import */ var _components_ui_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/ui/tabs */ "(ssr)/./components/ui/tabs.tsx");
/* harmony import */ var _barrel_optimize_names_ArrowRight_Building_Loader2_Lock_Mail_User_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRight,Building,Loader2,Lock,Mail,User!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/building.js");
/* harmony import */ var _barrel_optimize_names_ArrowRight_Building_Loader2_Lock_Mail_User_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRight,Building,Loader2,Lock,Mail,User!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/mail.js");
/* harmony import */ var _barrel_optimize_names_ArrowRight_Building_Loader2_Lock_Mail_User_lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRight,Building,Loader2,Lock,Mail,User!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/lock.js");
/* harmony import */ var _barrel_optimize_names_ArrowRight_Building_Loader2_Lock_Mail_User_lucide_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRight,Building,Loader2,Lock,Mail,User!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/loader-circle.js");
/* harmony import */ var _barrel_optimize_names_ArrowRight_Building_Loader2_Lock_Mail_User_lucide_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRight,Building,Loader2,Lock,Mail,User!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/arrow-right.js");
/* harmony import */ var _barrel_optimize_names_ArrowRight_Building_Loader2_Lock_Mail_User_lucide_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRight,Building,Loader2,Lock,Mail,User!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/user.js");
/* harmony import */ var _contexts_auth_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/contexts/auth-context */ "(ssr)/./contexts/auth-context.tsx");
/* __next_internal_client_entry_do_not_use__ default auto */ 










const AuthModal = ({ isOpen, onClose })=>{
    const { login, signup } = (0,_contexts_auth_context__WEBPACK_IMPORTED_MODULE_8__.useAuth)();
    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("login");
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [isSuspended, setIsSuspended] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [loginForm, setLoginForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        email: "",
        password: ""
    });
    const [signupForm, setSignupForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
        name: "",
        profileType: "",
        industry: "",
        country: ""
    });
    const profileTypes = [
        {
            value: "ENTREPRENEUR",
            label: "Entrepreneur"
        },
        {
            value: "INVESTOR",
            label: "Investor"
        },
        {
            value: "PRODUCT_MANAGER",
            label: "Product Manager"
        },
        {
            value: "BUSINESS_ANALYST",
            label: "Business Analyst"
        }
    ];
    const industries = [
        "Technology",
        "Healthcare",
        "Finance",
        "E-commerce",
        "Education",
        "Manufacturing",
        "Real Estate",
        "Food & Beverage",
        "Transportation",
        "Energy",
        "Media & Entertainment",
        "Other"
    ];
    const countries = [
        "United States",
        "Canada",
        "United Kingdom",
        "Germany",
        "France",
        "Australia",
        "Japan",
        "Singapore",
        "India",
        "China",
        "Brazil",
        "Global",
        "Other"
    ];
    const handleLogin = async (e)=>{
        e.preventDefault();
        setLoading(true);
        setError("");
        setIsSuspended(false);
        try {
            await login(loginForm.email, loginForm.password);
            onClose();
            setLoginForm({
                email: "",
                password: ""
            });
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : "Login failed";
            setError(errorMessage);
            // Check if the error is related to suspension
            setIsSuspended(errorMessage.toLowerCase().includes("suspended"));
        } finally{
            setLoading(false);
        }
    };
    const handleSignup = async (e)=>{
        e.preventDefault();
        setLoading(true);
        setError("");
        if (signupForm.password !== signupForm.confirmPassword) {
            setError("Passwords do not match");
            setLoading(false);
            return;
        }
        if (signupForm.password.length < 6) {
            setError("Password must be at least 6 characters");
            setLoading(false);
            return;
        }
        try {
            const { confirmPassword, ...signupData } = signupForm;
            await signup(signupData);
            onClose();
            setSignupForm({
                email: "",
                username: "",
                password: "",
                confirmPassword: "",
                name: "",
                profileType: "",
                industry: "",
                country: ""
            });
        } catch (err) {
            setError(err instanceof Error ? err.message : "Signup failed");
        } finally{
            setLoading(false);
        }
    };
    const handleClose = ()=>{
        onClose();
        setError("");
        setIsSuspended(false);
        setActiveTab("login");
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_6__.Dialog, {
        open: isOpen,
        onOpenChange: handleClose,
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_6__.DialogContent, {
            className: "sm:max-w-lg max-h-[90vh] bg-white border border-gray-100 shadow-xl rounded-xl flex flex-col",
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_6__.DialogHeader, {
                    className: "text-center pb-6 flex-shrink-0",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "flex items-center justify-center mb-4",
                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-sm",
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRight_Building_Loader2_Lock_Mail_User_lucide_react__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                    className: "w-6 h-6 text-primary-foreground"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                    lineNumber: 155,
                                    columnNumber: 15
                                }, undefined)
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, undefined)
                        }, void 0, false, {
                            fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_6__.DialogTitle, {
                            className: "text-2xl font-bold text-gradient-primary",
                            children: "Welcome to Spark"
                        }, void 0, false, {
                            fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                            className: "text-gray-600 mt-2",
                            children: "Join the community democratizing market research"
                        }, void 0, false, {
                            fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, undefined),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "flex-1 overflow-y-auto custom-scrollbar-left",
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_7__.Tabs, {
                        value: activeTab,
                        onValueChange: setActiveTab,
                        className: "w-full",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_7__.TabsList, {
                                className: "grid w-full grid-cols-2 sticky top-0 z-10 bg-white",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_7__.TabsTrigger, {
                                        value: "login",
                                        children: "Login"
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                        lineNumber: 169,
                                        columnNumber: 15
                                    }, undefined),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_7__.TabsTrigger, {
                                        value: "signup",
                                        children: "Sign Up"
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                        lineNumber: 170,
                                        columnNumber: 15
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, undefined),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "px-1",
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_10__.AnimatePresence, {
                                    mode: "wait",
                                    children: error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_11__.motion.div, {
                                        initial: {
                                            opacity: 0,
                                            y: -10
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        exit: {
                                            opacity: 0,
                                            y: -10
                                        },
                                        className: `px-4 py-3 rounded-md text-sm mt-4 ${isSuspended ? "bg-orange-50 border border-orange-200 text-orange-800" : "bg-destructive/10 border border-destructive/20 text-destructive"}`,
                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "flex items-start space-x-2",
                                            children: [
                                                isSuspended && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
                                                    className: "w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0",
                                                    fill: "currentColor",
                                                    viewBox: "0 0 20 20",
                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                                                        fillRule: "evenodd",
                                                        d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                                                        clipRule: "evenodd"
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                        lineNumber: 193,
                                                        columnNumber: 27
                                                    }, undefined)
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                    lineNumber: 188,
                                                    columnNumber: 25
                                                }, undefined),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                    children: [
                                                        isSuspended && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                                            className: "font-semibold text-orange-800 mb-1",
                                                            children: "Account Suspended"
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                            lineNumber: 198,
                                                            columnNumber: 27
                                                        }, undefined),
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                                            children: error
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 25
                                                        }, undefined)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 23
                                                }, undefined)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                            lineNumber: 186,
                                            columnNumber: 21
                                        }, undefined)
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                        lineNumber: 176,
                                        columnNumber: 19
                                    }, undefined)
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                    lineNumber: 174,
                                    columnNumber: 15
                                }, undefined)
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                lineNumber: 173,
                                columnNumber: 13
                            }, undefined),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_7__.TabsContent, {
                                value: "login",
                                className: "mt-6 px-1 pb-4",
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
                                    onSubmit: handleLogin,
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {
                                                    htmlFor: "login-email",
                                                    className: "text-gray-900",
                                                    children: "Email"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                    lineNumber: 211,
                                                    columnNumber: 17
                                                }, undefined),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRight_Building_Loader2_Lock_Mail_User_lucide_react__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                                            className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                            lineNumber: 213,
                                                            columnNumber: 19
                                                        }, undefined),
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {
                                                            id: "login-email",
                                                            type: "email",
                                                            placeholder: "Enter your email",
                                                            className: "pl-10",
                                                            value: loginForm.email,
                                                            onChange: (e)=>setLoginForm((prev)=>({
                                                                        ...prev,
                                                                        email: e.target.value
                                                                    })),
                                                            required: true
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                            lineNumber: 214,
                                                            columnNumber: 19
                                                        }, undefined)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 17
                                                }, undefined)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                            lineNumber: 210,
                                            columnNumber: 15
                                        }, undefined),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {
                                                    htmlFor: "login-password",
                                                    className: "text-gray-900",
                                                    children: "Password"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 17
                                                }, undefined),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRight_Building_Loader2_Lock_Mail_User_lucide_react__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                                            className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                            lineNumber: 229,
                                                            columnNumber: 19
                                                        }, undefined),
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {
                                                            id: "login-password",
                                                            type: "password",
                                                            placeholder: "Enter your password",
                                                            className: "pl-10",
                                                            value: loginForm.password,
                                                            onChange: (e)=>setLoginForm((prev)=>({
                                                                        ...prev,
                                                                        password: e.target.value
                                                                    })),
                                                            required: true
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                            lineNumber: 230,
                                                            columnNumber: 19
                                                        }, undefined)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 17
                                                }, undefined)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                            lineNumber: 226,
                                            columnNumber: 15
                                        }, undefined),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                            type: "submit",
                                            variant: "form-primary",
                                            size: "form",
                                            className: "w-full",
                                            disabled: loading,
                                            children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRight_Building_Loader2_Lock_Mail_User_lucide_react__WEBPACK_IMPORTED_MODULE_14__["default"], {
                                                        className: "mr-2 h-4 w-4 animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                        lineNumber: 245,
                                                        columnNumber: 21
                                                    }, undefined),
                                                    "Signing in..."
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: [
                                                    "Sign In",
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRight_Building_Loader2_Lock_Mail_User_lucide_react__WEBPACK_IMPORTED_MODULE_15__["default"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                        lineNumber: 251,
                                                        columnNumber: 21
                                                    }, undefined)
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                            lineNumber: 242,
                                            columnNumber: 15
                                        }, undefined)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                    lineNumber: 209,
                                    columnNumber: 13
                                }, undefined)
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                lineNumber: 208,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_7__.TabsContent, {
                                value: "signup",
                                className: "mt-6 px-1 pb-4",
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
                                    onSubmit: handleSignup,
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "grid grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {
                                                            htmlFor: "signup-name",
                                                            className: "text-gray-900",
                                                            children: "Full Name"
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                            lineNumber: 262,
                                                            columnNumber: 19
                                                        }, undefined),
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRight_Building_Loader2_Lock_Mail_User_lucide_react__WEBPACK_IMPORTED_MODULE_16__["default"], {
                                                                    className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                                                                }, void 0, false, {
                                                                    fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                                    lineNumber: 264,
                                                                    columnNumber: 21
                                                                }, undefined),
                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {
                                                                    id: "signup-name",
                                                                    placeholder: "John Doe",
                                                                    className: "pl-10",
                                                                    value: signupForm.name,
                                                                    onChange: (e)=>setSignupForm((prev)=>({
                                                                                ...prev,
                                                                                name: e.target.value
                                                                            })),
                                                                    required: true
                                                                }, void 0, false, {
                                                                    fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                                    lineNumber: 265,
                                                                    columnNumber: 21
                                                                }, undefined)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                            lineNumber: 263,
                                                            columnNumber: 19
                                                        }, undefined)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                    lineNumber: 261,
                                                    columnNumber: 17
                                                }, undefined),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {
                                                            htmlFor: "signup-username",
                                                            className: "text-gray-900",
                                                            children: "Username"
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                            lineNumber: 277,
                                                            columnNumber: 19
                                                        }, undefined),
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {
                                                            id: "signup-username",
                                                            placeholder: "johndoe",
                                                            value: signupForm.username,
                                                            onChange: (e)=>setSignupForm((prev)=>({
                                                                        ...prev,
                                                                        username: e.target.value
                                                                    })),
                                                            required: true
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                            lineNumber: 278,
                                                            columnNumber: 19
                                                        }, undefined)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                    lineNumber: 276,
                                                    columnNumber: 17
                                                }, undefined)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                            lineNumber: 260,
                                            columnNumber: 15
                                        }, undefined),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {
                                                    htmlFor: "signup-email",
                                                    className: "text-gray-900",
                                                    children: "Email"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 17
                                                }, undefined),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRight_Building_Loader2_Lock_Mail_User_lucide_react__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                                            className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                            lineNumber: 291,
                                                            columnNumber: 19
                                                        }, undefined),
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {
                                                            id: "signup-email",
                                                            type: "email",
                                                            placeholder: "john@example.com",
                                                            className: "pl-10",
                                                            value: signupForm.email,
                                                            onChange: (e)=>setSignupForm((prev)=>({
                                                                        ...prev,
                                                                        email: e.target.value
                                                                    })),
                                                            required: true
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                            lineNumber: 292,
                                                            columnNumber: 19
                                                        }, undefined)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                    lineNumber: 290,
                                                    columnNumber: 17
                                                }, undefined)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                            lineNumber: 288,
                                            columnNumber: 15
                                        }, undefined),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "grid grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {
                                                            htmlFor: "signup-password",
                                                            className: "text-gray-900",
                                                            children: "Password"
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                            lineNumber: 306,
                                                            columnNumber: 19
                                                        }, undefined),
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRight_Building_Loader2_Lock_Mail_User_lucide_react__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                                                    className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                                                                }, void 0, false, {
                                                                    fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                                    lineNumber: 308,
                                                                    columnNumber: 21
                                                                }, undefined),
                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {
                                                                    id: "signup-password",
                                                                    type: "password",
                                                                    placeholder: "Password",
                                                                    className: "pl-10",
                                                                    value: signupForm.password,
                                                                    onChange: (e)=>setSignupForm((prev)=>({
                                                                                ...prev,
                                                                                password: e.target.value
                                                                            })),
                                                                    required: true
                                                                }, void 0, false, {
                                                                    fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                                    lineNumber: 309,
                                                                    columnNumber: 21
                                                                }, undefined)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                            lineNumber: 307,
                                                            columnNumber: 19
                                                        }, undefined)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                    lineNumber: 305,
                                                    columnNumber: 17
                                                }, undefined),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {
                                                            htmlFor: "signup-confirm",
                                                            className: "text-gray-900",
                                                            children: "Confirm Password"
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                            lineNumber: 322,
                                                            columnNumber: 19
                                                        }, undefined),
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRight_Building_Loader2_Lock_Mail_User_lucide_react__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                                                    className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                                                                }, void 0, false, {
                                                                    fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                                    lineNumber: 324,
                                                                    columnNumber: 21
                                                                }, undefined),
                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {
                                                                    id: "signup-confirm",
                                                                    type: "password",
                                                                    placeholder: "Confirm",
                                                                    className: "pl-10",
                                                                    value: signupForm.confirmPassword,
                                                                    onChange: (e)=>setSignupForm((prev)=>({
                                                                                ...prev,
                                                                                confirmPassword: e.target.value
                                                                            })),
                                                                    required: true
                                                                }, void 0, false, {
                                                                    fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                                    lineNumber: 325,
                                                                    columnNumber: 21
                                                                }, undefined)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                            lineNumber: 323,
                                                            columnNumber: 19
                                                        }, undefined)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                    lineNumber: 321,
                                                    columnNumber: 17
                                                }, undefined)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                            lineNumber: 304,
                                            columnNumber: 15
                                        }, undefined),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {
                                                    htmlFor: "signup-profile-type",
                                                    className: "text-gray-900",
                                                    children: "Profile Type"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                    lineNumber: 339,
                                                    columnNumber: 17
                                                }, undefined),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.Select, {
                                                    value: signupForm.profileType,
                                                    onValueChange: (value)=>setSignupForm((prev)=>({
                                                                ...prev,
                                                                profileType: value
                                                            })),
                                                    required: true,
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectTrigger, {
                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectValue, {
                                                                placeholder: "Select your role"
                                                            }, void 0, false, {
                                                                fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                                lineNumber: 346,
                                                                columnNumber: 21
                                                            }, undefined)
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                            lineNumber: 345,
                                                            columnNumber: 19
                                                        }, undefined),
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectContent, {
                                                            children: profileTypes.map((type)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectItem, {
                                                                    value: type.value,
                                                                    children: type.label
                                                                }, type.value, false, {
                                                                    fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                                    lineNumber: 350,
                                                                    columnNumber: 23
                                                                }, undefined))
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                            lineNumber: 348,
                                                            columnNumber: 19
                                                        }, undefined)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                    lineNumber: 340,
                                                    columnNumber: 17
                                                }, undefined)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                            lineNumber: 338,
                                            columnNumber: 15
                                        }, undefined),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "grid grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {
                                                            htmlFor: "signup-industry",
                                                            className: "text-gray-900",
                                                            children: "Industry"
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                            lineNumber: 360,
                                                            columnNumber: 19
                                                        }, undefined),
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.Select, {
                                                            value: signupForm.industry,
                                                            onValueChange: (value)=>setSignupForm((prev)=>({
                                                                        ...prev,
                                                                        industry: value
                                                                    })),
                                                            required: true,
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectTrigger, {
                                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectValue, {
                                                                        placeholder: "Select industry"
                                                                    }, void 0, false, {
                                                                        fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                                        lineNumber: 367,
                                                                        columnNumber: 23
                                                                    }, undefined)
                                                                }, void 0, false, {
                                                                    fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                                    lineNumber: 366,
                                                                    columnNumber: 21
                                                                }, undefined),
                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectContent, {
                                                                    children: industries.map((industry)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectItem, {
                                                                            value: industry,
                                                                            children: industry
                                                                        }, industry, false, {
                                                                            fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                                            lineNumber: 371,
                                                                            columnNumber: 25
                                                                        }, undefined))
                                                                }, void 0, false, {
                                                                    fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                                    lineNumber: 369,
                                                                    columnNumber: 21
                                                                }, undefined)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                            lineNumber: 361,
                                                            columnNumber: 19
                                                        }, undefined)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                    lineNumber: 359,
                                                    columnNumber: 17
                                                }, undefined),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {
                                                            htmlFor: "signup-country",
                                                            className: "text-gray-900",
                                                            children: "Country"
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                            lineNumber: 380,
                                                            columnNumber: 19
                                                        }, undefined),
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.Select, {
                                                            value: signupForm.country,
                                                            onValueChange: (value)=>setSignupForm((prev)=>({
                                                                        ...prev,
                                                                        country: value
                                                                    })),
                                                            required: true,
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectTrigger, {
                                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectValue, {
                                                                        placeholder: "Select country"
                                                                    }, void 0, false, {
                                                                        fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                                        lineNumber: 387,
                                                                        columnNumber: 23
                                                                    }, undefined)
                                                                }, void 0, false, {
                                                                    fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                                    lineNumber: 386,
                                                                    columnNumber: 21
                                                                }, undefined),
                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectContent, {
                                                                    children: countries.map((country)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectItem, {
                                                                            value: country,
                                                                            children: country
                                                                        }, country, false, {
                                                                            fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                                            lineNumber: 391,
                                                                            columnNumber: 25
                                                                        }, undefined))
                                                                }, void 0, false, {
                                                                    fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                                    lineNumber: 389,
                                                                    columnNumber: 21
                                                                }, undefined)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                            lineNumber: 381,
                                                            columnNumber: 19
                                                        }, undefined)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                    lineNumber: 379,
                                                    columnNumber: 17
                                                }, undefined)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                            lineNumber: 358,
                                            columnNumber: 15
                                        }, undefined),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                            type: "submit",
                                            variant: "form-primary",
                                            size: "form",
                                            className: "w-full",
                                            disabled: loading,
                                            children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRight_Building_Loader2_Lock_Mail_User_lucide_react__WEBPACK_IMPORTED_MODULE_14__["default"], {
                                                        className: "mr-2 h-4 w-4 animate-spin"
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                        lineNumber: 403,
                                                        columnNumber: 21
                                                    }, undefined),
                                                    "Creating account..."
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: [
                                                    "Create Account",
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRight_Building_Loader2_Lock_Mail_User_lucide_react__WEBPACK_IMPORTED_MODULE_15__["default"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                                        lineNumber: 409,
                                                        columnNumber: 21
                                                    }, undefined)
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                            lineNumber: 400,
                                            columnNumber: 15
                                        }, undefined)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                    lineNumber: 259,
                                    columnNumber: 13
                                }, undefined)
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                                lineNumber: 258,
                                columnNumber: 11
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                        lineNumber: 167,
                        columnNumber: 11
                    }, undefined)
                }, void 0, false, {
                    fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
                    lineNumber: 166,
                    columnNumber: 9
                }, undefined)
            ]
        }, void 0, true, {
            fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
            lineNumber: 151,
            columnNumber: 7
        }, undefined)
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/auth-modal.tsx",
        lineNumber: 150,
        columnNumber: 5
    }, undefined);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthModal);


/***/ }),

/***/ "(ssr)/./components/footer.tsx":
/*!*******************************!*\
  !*** ./components/footer.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "(ssr)/./node_modules/next/dist/api/link.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "(ssr)/./node_modules/next/dist/api/image.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "(ssr)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs");
/* harmony import */ var _barrel_optimize_names_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Sparkles!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/sparkles.js");
/* harmony import */ var _components_ui_separator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/separator */ "(ssr)/./components/ui/separator.tsx");
/* __next_internal_client_entry_do_not_use__ default auto */ 





const Footer = ()=>{
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
        className: "bg-card border-t border-border",
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "container-max section-padding py-16",
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "grid grid-cols-1 md:grid-cols-4 gap-12",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "md:col-span-2",
                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.6
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: "flex items-center mb-6",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Sparkles_lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                                className: "w-8 h-8 text-primary mr-3"
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/spark-platform/components/footer.tsx",
                                                lineNumber: 24,
                                                columnNumber: 17
                                            }, undefined),
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                className: "text-2xl font-bold text-gradient-primary",
                                                children: "Spark"
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/spark-platform/components/footer.tsx",
                                                lineNumber: 25,
                                                columnNumber: 17
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/ubuntu/spark-platform/components/footer.tsx",
                                        lineNumber: 23,
                                        columnNumber: 15
                                    }, undefined),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                        className: "text-card-foreground/70 mb-6 max-w-md leading-relaxed",
                                        children: "Democratizing market research through community-driven insights. Join thousands of entrepreneurs making data-driven decisions."
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/spark-platform/components/footer.tsx",
                                        lineNumber: 27,
                                        columnNumber: 15
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/spark-platform/components/footer.tsx",
                                lineNumber: 18,
                                columnNumber: 13
                            }, undefined)
                        }, void 0, false, {
                            fileName: "/home/ubuntu/spark-platform/components/footer.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: 0.1
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                                        className: "font-bold text-lg mb-6 text-card-foreground",
                                        children: "Platform"
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/spark-platform/components/footer.tsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, undefined),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                    href: "/opportunities",
                                                    className: "text-card-foreground/70 hover:text-primary transition-colors duration-200",
                                                    children: "Opportunities"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/components/footer.tsx",
                                                    lineNumber: 44,
                                                    columnNumber: 19
                                                }, undefined)
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/spark-platform/components/footer.tsx",
                                                lineNumber: 43,
                                                columnNumber: 17
                                            }, undefined),
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                    href: "/trending",
                                                    className: "text-card-foreground/70 hover:text-primary transition-colors duration-200",
                                                    children: "Trending Topics"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/components/footer.tsx",
                                                    lineNumber: 52,
                                                    columnNumber: 19
                                                }, undefined)
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/spark-platform/components/footer.tsx",
                                                lineNumber: 51,
                                                columnNumber: 17
                                            }, undefined),
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                    href: "/research",
                                                    className: "text-card-foreground/70 hover:text-primary transition-colors duration-200",
                                                    children: "Research Reports"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/components/footer.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 19
                                                }, undefined)
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/spark-platform/components/footer.tsx",
                                                lineNumber: 59,
                                                columnNumber: 17
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/ubuntu/spark-platform/components/footer.tsx",
                                        lineNumber: 42,
                                        columnNumber: 15
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/spark-platform/components/footer.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, undefined)
                        }, void 0, false, {
                            fileName: "/home/ubuntu/spark-platform/components/footer.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: 0.2
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                                        className: "font-bold text-lg mb-6 text-card-foreground",
                                        children: "Company"
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/spark-platform/components/footer.tsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, undefined),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                    href: "https://ideanest.net/",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "text-card-foreground/70 hover:text-primary transition-colors duration-200",
                                                    children: "About Us"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/components/footer.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 19
                                                }, undefined)
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/spark-platform/components/footer.tsx",
                                                lineNumber: 80,
                                                columnNumber: 17
                                            }, undefined),
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                    href: "/privacy",
                                                    className: "text-card-foreground/70 hover:text-primary transition-colors duration-200",
                                                    children: "Privacy Policy"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/components/footer.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 19
                                                }, undefined)
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/spark-platform/components/footer.tsx",
                                                lineNumber: 90,
                                                columnNumber: 17
                                            }, undefined),
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                    href: "/terms",
                                                    className: "text-card-foreground/70 hover:text-primary transition-colors duration-200",
                                                    children: "Terms of Service"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/components/footer.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 19
                                                }, undefined)
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/spark-platform/components/footer.tsx",
                                                lineNumber: 98,
                                                columnNumber: 17
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/ubuntu/spark-platform/components/footer.tsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/spark-platform/components/footer.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, undefined)
                        }, void 0, false, {
                            fileName: "/home/ubuntu/spark-platform/components/footer.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "/home/ubuntu/spark-platform/components/footer.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, undefined),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_separator__WEBPACK_IMPORTED_MODULE_3__.Separator, {
                    className: "my-12"
                }, void 0, false, {
                    fileName: "/home/ubuntu/spark-platform/components/footer.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, undefined),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.6,
                        delay: 0.3
                    },
                    className: "flex flex-col md:flex-row justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "text-card-foreground/60 text-sm mb-4 md:mb-0",
                            children: "\xa9 2025 Spark. All rights reserved."
                        }, void 0, false, {
                            fileName: "/home/ubuntu/spark-platform/components/footer.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "flex items-center space-x-2",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                    className: "text-card-foreground/60 text-sm",
                                    children: "Powered by"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/components/footer.tsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, undefined),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                    href: "https://ideanest.net/",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "flex items-center hover:opacity-80 transition-opacity duration-200",
                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                        src: "/images/IDEANEST-Logo-WhiteS.png",
                                        alt: "IDEANEST",
                                        width: 100,
                                        height: 24,
                                        className: "h-6 w-auto"
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/spark-platform/components/footer.tsx",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, undefined)
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/components/footer.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/spark-platform/components/footer.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "/home/ubuntu/spark-platform/components/footer.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, undefined)
            ]
        }, void 0, true, {
            fileName: "/home/ubuntu/spark-platform/components/footer.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, undefined)
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/footer.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, undefined);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ "(ssr)/./components/navigation.tsx":
/*!***********************************!*\
  !*** ./components/navigation.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "(ssr)/./node_modules/next/dist/api/link.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "(ssr)/./node_modules/next/dist/api/image.js");
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ "(ssr)/./node_modules/next/dist/api/navigation.js");
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/button */ "(ssr)/./components/ui/button.tsx");
/* harmony import */ var _components_ui_badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/badge */ "(ssr)/./components/ui/badge.tsx");
/* harmony import */ var _barrel_optimize_names_Bell_Menu_Shield_X_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=Bell,Menu,Shield,X!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/shield.js");
/* harmony import */ var _barrel_optimize_names_Bell_Menu_Shield_X_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=Bell,Menu,Shield,X!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/bell.js");
/* harmony import */ var _barrel_optimize_names_Bell_Menu_Shield_X_lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! __barrel_optimize__?names=Bell,Menu,Shield,X!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/x.js");
/* harmony import */ var _barrel_optimize_names_Bell_Menu_Shield_X_lucide_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! __barrel_optimize__?names=Bell,Menu,Shield,X!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/menu.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/lib/utils */ "(ssr)/./lib/utils.ts");
/* harmony import */ var _contexts_auth_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/contexts/auth-context */ "(ssr)/./contexts/auth-context.tsx");
/* harmony import */ var _components_auth_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/auth-modal */ "(ssr)/./components/auth-modal.tsx");
/* harmony import */ var _components_profile_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/profile-dropdown */ "(ssr)/./components/profile-dropdown.tsx");
/* __next_internal_client_entry_do_not_use__ default auto */ 











const Navigation = ()=>{
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isAuthModalOpen, setIsAuthModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname)();
    const { user, loading } = (0,_contexts_auth_context__WEBPACK_IMPORTED_MODULE_8__.useAuth)();
    // Check if we're in admin area
    const isAdminArea = pathname.startsWith("/admin");
    const navItems = [
        {
            href: "/trending",
            label: "Trending Topics"
        },
        {
            href: "/opportunities",
            label: "Opportunities"
        },
        {
            href: "/research",
            label: "Research"
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
        className: "fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-lg",
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "flex items-center justify-between h-20",
                        children: [
                            !isAdminArea && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                href: "/",
                                className: "flex items-center space-x-3 group",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: "w-10 h-10 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200",
                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                            src: "/images/Spark icon logo.png",
                                            alt: "Spark Icon",
                                            width: 40,
                                            height: 40,
                                            className: "w-10 h-10 object-contain"
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/spark-platform/components/navigation.tsx",
                                            lineNumber: 44,
                                            columnNumber: 17
                                        }, undefined)
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/spark-platform/components/navigation.tsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, undefined),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: "flex items-center",
                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                            src: "/images/Spark logo text.png",
                                            alt: "Spark",
                                            width: 80,
                                            height: 32,
                                            className: "h-8 w-auto object-contain"
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/spark-platform/components/navigation.tsx",
                                            lineNumber: 53,
                                            columnNumber: 17
                                        }, undefined)
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/spark-platform/components/navigation.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/spark-platform/components/navigation.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, undefined),
                            isAdminArea && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/components/navigation.tsx",
                                lineNumber: 65,
                                columnNumber: 27
                            }, undefined),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "hidden md:flex items-center space-x-2",
                                children: navItems.map((item)=>{
                                    const isActive = pathname === item.href;
                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                        href: item.href,
                                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_7__.cn)("px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105", isActive ? "bg-primary text-primary-foreground shadow-md" : "text-foreground/70 hover:text-foreground hover:bg-card hover:shadow-md"),
                                        children: item.label
                                    }, item.href, false, {
                                        fileName: "/home/ubuntu/spark-platform/components/navigation.tsx",
                                        lineNumber: 72,
                                        columnNumber: 17
                                    }, undefined);
                                })
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/components/navigation.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "hidden md:flex items-center space-x-4",
                                children: [
                                    user?.role === "admin" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                        href: "/admin",
                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                            variant: "ghost",
                                            size: "sm",
                                            className: "relative hover:bg-orange-100 hover:text-orange-700 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-200 hover:border-orange-300 transition-all duration-200 hover:scale-105 hover:shadow-md",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bell_Menu_Shield_X_lucide_react__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                                    className: "w-5 h-5 text-orange-600"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/components/navigation.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 19
                                                }, undefined),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                    className: "ml-2 text-sm font-medium text-orange-700",
                                                    children: "Admin"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/components/navigation.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 19
                                                }, undefined)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/spark-platform/components/navigation.tsx",
                                            lineNumber: 92,
                                            columnNumber: 17
                                        }, undefined)
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/spark-platform/components/navigation.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, undefined),
                                    user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                        variant: "ghost",
                                        size: "sm",
                                        className: "relative hover:bg-card hover:shadow-md",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bell_Menu_Shield_X_lucide_react__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/spark-platform/components/navigation.tsx",
                                                lineNumber: 104,
                                                columnNumber: 17
                                            }, undefined),
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_6__.Badge, {
                                                className: "absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center text-xs bg-secondary text-secondary-foreground",
                                                children: "3"
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/spark-platform/components/navigation.tsx",
                                                lineNumber: 105,
                                                columnNumber: 17
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/ubuntu/spark-platform/components/navigation.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, undefined),
                                    !loading && (user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_profile_dropdown__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
                                        fileName: "/home/ubuntu/spark-platform/components/navigation.tsx",
                                        lineNumber: 113,
                                        columnNumber: 17
                                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                        size: "sm",
                                        variant: "gradient",
                                        className: "px-6",
                                        onClick: ()=>setIsAuthModalOpen(true),
                                        children: "Login / Sign Up"
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/spark-platform/components/navigation.tsx",
                                        lineNumber: 115,
                                        columnNumber: 17
                                    }, undefined))
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/spark-platform/components/navigation.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, undefined),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "md:hidden",
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                    variant: "ghost",
                                    size: "sm",
                                    className: "hover:bg-card hover:shadow-md",
                                    onClick: ()=>setIsOpen(!isOpen),
                                    children: isOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bell_Menu_Shield_X_lucide_react__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/spark-platform/components/navigation.tsx",
                                        lineNumber: 135,
                                        columnNumber: 25
                                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bell_Menu_Shield_X_lucide_react__WEBPACK_IMPORTED_MODULE_14__["default"], {
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/spark-platform/components/navigation.tsx",
                                        lineNumber: 135,
                                        columnNumber: 53
                                    }, undefined)
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/components/navigation.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, undefined)
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/components/navigation.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/spark-platform/components/navigation.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, undefined),
                    isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "md:hidden",
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "px-4 pt-4 pb-6 space-y-3 border-t border-border/50 bg-background/95 backdrop-blur-xl",
                            children: [
                                navItems.map((item)=>{
                                    const isActive = pathname === item.href;
                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                        href: item.href,
                                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_7__.cn)("block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200", isActive ? "bg-primary text-primary-foreground shadow-md" : "text-foreground/70 hover:text-foreground hover:bg-card hover:shadow-md"),
                                        onClick: ()=>setIsOpen(false),
                                        children: item.label
                                    }, item.href, false, {
                                        fileName: "/home/ubuntu/spark-platform/components/navigation.tsx",
                                        lineNumber: 147,
                                        columnNumber: 19
                                    }, undefined);
                                }),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    className: "pt-4 space-y-3 border-t border-border/50",
                                    children: [
                                        user?.role === "admin" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                            href: "/admin",
                                            onClick: ()=>setIsOpen(false),
                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                                variant: "ghost",
                                                size: "sm",
                                                className: "w-full justify-start hover:bg-orange-100 hover:text-orange-700 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-200",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bell_Menu_Shield_X_lucide_react__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                                        className: "w-5 h-5 mr-3 text-orange-600"
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/spark-platform/components/navigation.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 23
                                                    }, undefined),
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                        className: "text-orange-700 font-medium",
                                                        children: "Admin Dashboard"
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/spark-platform/components/navigation.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 23
                                                    }, undefined)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/ubuntu/spark-platform/components/navigation.tsx",
                                                lineNumber: 165,
                                                columnNumber: 21
                                            }, undefined)
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/spark-platform/components/navigation.tsx",
                                            lineNumber: 164,
                                            columnNumber: 19
                                        }, undefined),
                                        user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                            variant: "ghost",
                                            size: "sm",
                                            className: "w-full justify-start hover:bg-card hover:shadow-md",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bell_Menu_Shield_X_lucide_react__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                                    className: "w-5 h-5 mr-3"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/components/navigation.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 21
                                                }, undefined),
                                                "Notifications",
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_6__.Badge, {
                                                    className: "ml-auto bg-secondary text-secondary-foreground",
                                                    children: "3"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/components/navigation.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 21
                                                }, undefined)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/spark-platform/components/navigation.tsx",
                                            lineNumber: 176,
                                            columnNumber: 19
                                        }, undefined),
                                        !loading && (user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                            href: "/profile",
                                            onClick: ()=>setIsOpen(false),
                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                                variant: "ghost",
                                                size: "sm",
                                                className: "w-full justify-start hover:bg-card hover:shadow-md",
                                                children: "Profile Settings"
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/spark-platform/components/navigation.tsx",
                                                lineNumber: 186,
                                                columnNumber: 23
                                            }, undefined)
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/spark-platform/components/navigation.tsx",
                                            lineNumber: 185,
                                            columnNumber: 21
                                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__.Button, {
                                            size: "sm",
                                            variant: "gradient",
                                            className: "w-full",
                                            onClick: ()=>{
                                                setIsAuthModalOpen(true);
                                                setIsOpen(false);
                                            },
                                            children: "Login / Sign Up"
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/spark-platform/components/navigation.tsx",
                                            lineNumber: 191,
                                            columnNumber: 21
                                        }, undefined))
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/ubuntu/spark-platform/components/navigation.tsx",
                                    lineNumber: 162,
                                    columnNumber: 15
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/spark-platform/components/navigation.tsx",
                            lineNumber: 143,
                            columnNumber: 13
                        }, undefined)
                    }, void 0, false, {
                        fileName: "/home/ubuntu/spark-platform/components/navigation.tsx",
                        lineNumber: 142,
                        columnNumber: 11
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "/home/ubuntu/spark-platform/components/navigation.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth_modal__WEBPACK_IMPORTED_MODULE_9__["default"], {
                isOpen: isAuthModalOpen,
                onClose: ()=>setIsAuthModalOpen(false)
            }, void 0, false, {
                fileName: "/home/ubuntu/spark-platform/components/navigation.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "/home/ubuntu/spark-platform/components/navigation.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, undefined);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigation);


/***/ }),

/***/ "(ssr)/./components/profile-dropdown.tsx":
/*!*****************************************!*\
  !*** ./components/profile-dropdown.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "(ssr)/./node_modules/next/dist/api/link.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ "(ssr)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! framer-motion */ "(ssr)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs");
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/button */ "(ssr)/./components/ui/button.tsx");
/* harmony import */ var _components_ui_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/badge */ "(ssr)/./components/ui/badge.tsx");
/* harmony import */ var _barrel_optimize_names_Bell_ChevronDown_Crown_LayoutDashboard_LogOut_Settings_User_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Bell,ChevronDown,Crown,LayoutDashboard,LogOut,Settings,User!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/user.js");
/* harmony import */ var _barrel_optimize_names_Bell_ChevronDown_Crown_LayoutDashboard_LogOut_Settings_User_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Bell,ChevronDown,Crown,LayoutDashboard,LogOut,Settings,User!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/chevron-down.js");
/* harmony import */ var _barrel_optimize_names_Bell_ChevronDown_Crown_LayoutDashboard_LogOut_Settings_User_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Bell,ChevronDown,Crown,LayoutDashboard,LogOut,Settings,User!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/crown.js");
/* harmony import */ var _barrel_optimize_names_Bell_ChevronDown_Crown_LayoutDashboard_LogOut_Settings_User_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=Bell,ChevronDown,Crown,LayoutDashboard,LogOut,Settings,User!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/layout-dashboard.js");
/* harmony import */ var _barrel_optimize_names_Bell_ChevronDown_Crown_LayoutDashboard_LogOut_Settings_User_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=Bell,ChevronDown,Crown,LayoutDashboard,LogOut,Settings,User!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/settings.js");
/* harmony import */ var _barrel_optimize_names_Bell_ChevronDown_Crown_LayoutDashboard_LogOut_Settings_User_lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! __barrel_optimize__?names=Bell,ChevronDown,Crown,LayoutDashboard,LogOut,Settings,User!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/bell.js");
/* harmony import */ var _barrel_optimize_names_Bell_ChevronDown_Crown_LayoutDashboard_LogOut_Settings_User_lucide_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! __barrel_optimize__?names=Bell,ChevronDown,Crown,LayoutDashboard,LogOut,Settings,User!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/log-out.js");
/* harmony import */ var _contexts_auth_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/contexts/auth-context */ "(ssr)/./contexts/auth-context.tsx");
/* __next_internal_client_entry_do_not_use__ default auto */ 







const ProfileDropdown = ()=>{
    const { user, logout } = (0,_contexts_auth_context__WEBPACK_IMPORTED_MODULE_5__.useAuth)();
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    if (!user) return null;
    const handleLogout = async ()=>{
        await logout();
        setIsOpen(false);
    };
    const profileTypes = {
        "ENTREPRENEUR": "Entrepreneur",
        "INVESTOR": "Investor",
        "PRODUCT_MANAGER": "Product Manager",
        "BUSINESS_ANALYST": "Business Analyst"
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {
                variant: "ghost",
                size: "sm",
                onClick: ()=>setIsOpen(!isOpen),
                className: "flex items-center space-x-2 hover:bg-transparent",
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "w-8 h-8 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center",
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bell_ChevronDown_Crown_LayoutDashboard_LogOut_Settings_User_lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
                            className: "w-4 h-4 text-white"
                        }, void 0, false, {
                            fileName: "/home/ubuntu/spark-platform/components/profile-dropdown.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, undefined)
                    }, void 0, false, {
                        fileName: "/home/ubuntu/spark-platform/components/profile-dropdown.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bell_ChevronDown_Crown_LayoutDashboard_LogOut_Settings_User_lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
                        className: `w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`
                    }, void 0, false, {
                        fileName: "/home/ubuntu/spark-platform/components/profile-dropdown.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "/home/ubuntu/spark-platform/components/profile-dropdown.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.AnimatePresence, {
                children: isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "fixed inset-0 z-40",
                            onClick: ()=>setIsOpen(false)
                        }, void 0, false, {
                            fileName: "/home/ubuntu/spark-platform/components/profile-dropdown.tsx",
                            lineNumber: 56,
                            columnNumber: 13
                        }, undefined),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
                            initial: {
                                opacity: 0,
                                y: 10,
                                scale: 0.95
                            },
                            animate: {
                                opacity: 1,
                                y: 0,
                                scale: 1
                            },
                            exit: {
                                opacity: 0,
                                y: 10,
                                scale: 0.95
                            },
                            transition: {
                                duration: 0.2
                            },
                            className: "absolute right-0 top-full mt-2 w-72 bg-background border border-border rounded-lg shadow-lg z-50",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    className: "p-4 border-b border-border",
                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: "flex items-center space-x-3",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                className: "w-12 h-12 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center",
                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bell_ChevronDown_Crown_LayoutDashboard_LogOut_Settings_User_lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                                    className: "w-6 h-6 text-white"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/components/profile-dropdown.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 21
                                                }, undefined)
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/spark-platform/components/profile-dropdown.tsx",
                                                lineNumber: 72,
                                                columnNumber: 19
                                            }, undefined),
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                                        className: "font-semibold truncate",
                                                        children: user.name
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/spark-platform/components/profile-dropdown.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 21
                                                    }, undefined),
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                                        className: "text-sm text-muted-foreground truncate",
                                                        children: [
                                                            "@",
                                                            user.username
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/ubuntu/spark-platform/components/profile-dropdown.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 21
                                                    }, undefined),
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                        className: "flex items-center space-x-2 mt-1",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_4__.Badge, {
                                                                variant: user.subscription === "PRO" ? "default" : "secondary",
                                                                className: "text-xs",
                                                                children: user.subscription === "PRO" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bell_ChevronDown_Crown_LayoutDashboard_LogOut_Settings_User_lucide_react__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                                                            className: "w-3 h-3 mr-1"
                                                                        }, void 0, false, {
                                                                            fileName: "/home/ubuntu/spark-platform/components/profile-dropdown.tsx",
                                                                            lineNumber: 82,
                                                                            columnNumber: 29
                                                                        }, undefined),
                                                                        "Pro"
                                                                    ]
                                                                }, void 0, true) : "Free"
                                                            }, void 0, false, {
                                                                fileName: "/home/ubuntu/spark-platform/components/profile-dropdown.tsx",
                                                                lineNumber: 79,
                                                                columnNumber: 23
                                                            }, undefined),
                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_4__.Badge, {
                                                                variant: "outline",
                                                                className: "text-xs",
                                                                children: profileTypes[user.profileType]
                                                            }, void 0, false, {
                                                                fileName: "/home/ubuntu/spark-platform/components/profile-dropdown.tsx",
                                                                lineNumber: 89,
                                                                columnNumber: 23
                                                            }, undefined)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/ubuntu/spark-platform/components/profile-dropdown.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 21
                                                    }, undefined)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/ubuntu/spark-platform/components/profile-dropdown.tsx",
                                                lineNumber: 75,
                                                columnNumber: 19
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/ubuntu/spark-platform/components/profile-dropdown.tsx",
                                        lineNumber: 71,
                                        columnNumber: 17
                                    }, undefined)
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/components/profile-dropdown.tsx",
                                    lineNumber: 70,
                                    columnNumber: 15
                                }, undefined),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    className: "p-2",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                            href: "/dashboard",
                                            onClick: ()=>setIsOpen(false),
                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                className: "flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-accent transition-colors cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bell_ChevronDown_Crown_LayoutDashboard_LogOut_Settings_User_lucide_react__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                                        className: "w-4 h-4 text-muted-foreground"
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/spark-platform/components/profile-dropdown.tsx",
                                                        lineNumber: 101,
                                                        columnNumber: 21
                                                    }, undefined),
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                        className: "text-sm",
                                                        children: "My Dashboard"
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/spark-platform/components/profile-dropdown.tsx",
                                                        lineNumber: 102,
                                                        columnNumber: 21
                                                    }, undefined)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/ubuntu/spark-platform/components/profile-dropdown.tsx",
                                                lineNumber: 100,
                                                columnNumber: 19
                                            }, undefined)
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/spark-platform/components/profile-dropdown.tsx",
                                            lineNumber: 99,
                                            columnNumber: 17
                                        }, undefined),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                            href: "/profile",
                                            onClick: ()=>setIsOpen(false),
                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                className: "flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-accent transition-colors cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bell_ChevronDown_Crown_LayoutDashboard_LogOut_Settings_User_lucide_react__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                                        className: "w-4 h-4 text-muted-foreground"
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/spark-platform/components/profile-dropdown.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 21
                                                    }, undefined),
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                        className: "text-sm",
                                                        children: "Profile Settings"
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/spark-platform/components/profile-dropdown.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 21
                                                    }, undefined)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/ubuntu/spark-platform/components/profile-dropdown.tsx",
                                                lineNumber: 107,
                                                columnNumber: 19
                                            }, undefined)
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/spark-platform/components/profile-dropdown.tsx",
                                            lineNumber: 106,
                                            columnNumber: 17
                                        }, undefined),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-accent transition-colors cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bell_ChevronDown_Crown_LayoutDashboard_LogOut_Settings_User_lucide_react__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                                    className: "w-4 h-4 text-muted-foreground"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/components/profile-dropdown.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 19
                                                }, undefined),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                    className: "text-sm",
                                                    children: "Notifications"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/components/profile-dropdown.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 19
                                                }, undefined),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_4__.Badge, {
                                                    className: "ml-auto text-xs",
                                                    children: "3"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/components/profile-dropdown.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 19
                                                }, undefined)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/spark-platform/components/profile-dropdown.tsx",
                                            lineNumber: 113,
                                            columnNumber: 17
                                        }, undefined),
                                        user.subscription === "FREE" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-accent transition-colors cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bell_ChevronDown_Crown_LayoutDashboard_LogOut_Settings_User_lucide_react__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                                    className: "w-4 h-4 text-muted-foreground"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/components/profile-dropdown.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 21
                                                }, undefined),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                    className: "text-sm",
                                                    children: "Upgrade to Pro"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/components/profile-dropdown.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 21
                                                }, undefined)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/spark-platform/components/profile-dropdown.tsx",
                                            lineNumber: 120,
                                            columnNumber: 19
                                        }, undefined)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/ubuntu/spark-platform/components/profile-dropdown.tsx",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, undefined),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    className: "p-2 border-t border-border",
                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                                        onClick: handleLogout,
                                        className: "flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-accent transition-colors cursor-pointer w-full text-left",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bell_ChevronDown_Crown_LayoutDashboard_LogOut_Settings_User_lucide_react__WEBPACK_IMPORTED_MODULE_14__["default"], {
                                                className: "w-4 h-4 text-muted-foreground"
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/spark-platform/components/profile-dropdown.tsx",
                                                lineNumber: 133,
                                                columnNumber: 19
                                            }, undefined),
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                className: "text-sm",
                                                children: "Sign Out"
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/spark-platform/components/profile-dropdown.tsx",
                                                lineNumber: 134,
                                                columnNumber: 19
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/ubuntu/spark-platform/components/profile-dropdown.tsx",
                                        lineNumber: 129,
                                        columnNumber: 17
                                    }, undefined)
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/components/profile-dropdown.tsx",
                                    lineNumber: 128,
                                    columnNumber: 15
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/spark-platform/components/profile-dropdown.tsx",
                            lineNumber: 62,
                            columnNumber: 13
                        }, undefined)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "/home/ubuntu/spark-platform/components/profile-dropdown.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "/home/ubuntu/spark-platform/components/profile-dropdown.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, undefined);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileDropdown);


/***/ }),

/***/ "(ssr)/./components/theme-provider.tsx":
/*!***************************************!*\
  !*** ./components/theme-provider.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeProvider: () => (/* binding */ ThemeProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-themes */ "(ssr)/./node_modules/next-themes/dist/index.mjs");
/* __next_internal_client_entry_do_not_use__ ThemeProvider auto */ 


function ThemeProvider({ children, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_themes__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
        ...props,
        children: children
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/theme-provider.tsx",
        lineNumber: 8,
        columnNumber: 10
    }, this);
}


/***/ }),

/***/ "(ssr)/./components/ui/badge.tsx":
/*!*********************************!*\
  !*** ./components/ui/badge.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Badge: () => (/* binding */ Badge),
/* harmony export */   badgeVariants: () => (/* binding */ badgeVariants)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! class-variance-authority */ "(ssr)/./node_modules/class-variance-authority/dist/index.mjs");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/utils */ "(ssr)/./lib/utils.ts");




const badgeVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__.cva)("inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:scale-105", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-md hover:shadow-lg",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md hover:shadow-lg",
            outline: "text-foreground border-current hover:bg-accent hover:text-accent-foreground shadow-sm hover:shadow-md"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/badge.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}



/***/ }),

/***/ "(ssr)/./components/ui/button.tsx":
/*!**********************************!*\
  !*** ./components/ui/button.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* binding */ Button),
/* harmony export */   buttonVariants: () => (/* binding */ buttonVariants)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/react-slot */ "(ssr)/./node_modules/@radix-ui/react-slot/dist/index.mjs");
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! class-variance-authority */ "(ssr)/./node_modules/class-variance-authority/dist/index.mjs");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/utils */ "(ssr)/./lib/utils.ts");





const buttonVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__.cva)("inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md hover:scale-[1.02]",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm hover:shadow-md hover:scale-[1.02]",
            outline: "border-2 border-border bg-background hover:bg-accent hover:border-border/80 text-foreground shadow-sm hover:shadow-md",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-sm hover:shadow-md hover:scale-[1.02]",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
            gradient: "gradient-bg text-primary-foreground shadow-sm hover:shadow-md hover:scale-[1.02]",
            "gradient-secondary": "gradient-bg-secondary text-secondary-foreground shadow-sm hover:shadow-md hover:scale-[1.02]",
            "form-primary": "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md px-6 py-3 font-medium gap-2",
            "form-secondary": "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-sm hover:shadow-md px-6 py-3 font-medium gap-2"
        },
        size: {
            default: "h-11 px-6 py-2",
            sm: "h-9 rounded-md px-4",
            lg: "h-12 rounded-lg px-8 text-base",
            icon: "h-11 w-11",
            form: "h-12 px-6 py-3"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__.Slot : "button";
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Comp, {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 7
    }, undefined);
});
Button.displayName = "Button";



/***/ }),

/***/ "(ssr)/./components/ui/dialog.tsx":
/*!**********************************!*\
  !*** ./components/ui/dialog.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dialog: () => (/* binding */ Dialog),
/* harmony export */   DialogClose: () => (/* binding */ DialogClose),
/* harmony export */   DialogContent: () => (/* binding */ DialogContent),
/* harmony export */   DialogDescription: () => (/* binding */ DialogDescription),
/* harmony export */   DialogFooter: () => (/* binding */ DialogFooter),
/* harmony export */   DialogHeader: () => (/* binding */ DialogHeader),
/* harmony export */   DialogOverlay: () => (/* binding */ DialogOverlay),
/* harmony export */   DialogPortal: () => (/* binding */ DialogPortal),
/* harmony export */   DialogTitle: () => (/* binding */ DialogTitle),
/* harmony export */   DialogTrigger: () => (/* binding */ DialogTrigger)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-dialog */ "(ssr)/./node_modules/@radix-ui/react-dialog/dist/index.mjs");
/* harmony import */ var _barrel_optimize_names_X_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=X!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/x.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/utils */ "(ssr)/./lib/utils.ts");
/* __next_internal_client_entry_do_not_use__ Dialog,DialogPortal,DialogOverlay,DialogClose,DialogTrigger,DialogContent,DialogHeader,DialogFooter,DialogTitle,DialogDescription auto */ 




const Dialog = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Root;
const DialogTrigger = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Trigger;
const DialogPortal = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Portal;
const DialogClose = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Close;
const DialogOverlay = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Overlay, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/dialog.tsx",
        lineNumber: 21,
        columnNumber: 3
    }, undefined));
DialogOverlay.displayName = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Overlay.displayName;
const DialogContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DialogPortal, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DialogOverlay, {}, void 0, false, {
                fileName: "/home/ubuntu/spark-platform/components/ui/dialog.tsx",
                lineNumber: 37,
                columnNumber: 5
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Content, {
                ref: ref,
                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Close, {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_X_lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/components/ui/dialog.tsx",
                                lineNumber: 48,
                                columnNumber: 9
                            }, undefined),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/components/ui/dialog.tsx",
                                lineNumber: 49,
                                columnNumber: 9
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/spark-platform/components/ui/dialog.tsx",
                        lineNumber: 47,
                        columnNumber: 7
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "/home/ubuntu/spark-platform/components/ui/dialog.tsx",
                lineNumber: 38,
                columnNumber: 5
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "/home/ubuntu/spark-platform/components/ui/dialog.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, undefined));
DialogContent.displayName = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Content.displayName;
const DialogHeader = ({ className, ...props })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex flex-col space-y-1.5 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/dialog.tsx",
        lineNumber: 60,
        columnNumber: 3
    }, undefined);
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/dialog.tsx",
        lineNumber: 74,
        columnNumber: 3
    }, undefined);
DialogFooter.displayName = "DialogFooter";
const DialogTitle = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Title, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("text-lg font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/dialog.tsx",
        lineNumber: 88,
        columnNumber: 3
    }, undefined));
DialogTitle.displayName = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Title.displayName;
const DialogDescription = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Description, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/dialog.tsx",
        lineNumber: 103,
        columnNumber: 3
    }, undefined));
DialogDescription.displayName = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Description.displayName;



/***/ }),

/***/ "(ssr)/./components/ui/input.tsx":
/*!*********************************!*\
  !*** ./components/ui/input.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Input: () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/utils */ "(ssr)/./lib/utils.ts");



const Input = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: type,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex h-11 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/input.tsx",
        lineNumber: 12,
        columnNumber: 7
    }, undefined);
});
Input.displayName = "Input";



/***/ }),

/***/ "(ssr)/./components/ui/label.tsx":
/*!*********************************!*\
  !*** ./components/ui/label.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Label: () => (/* binding */ Label)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/react-label */ "(ssr)/./node_modules/@radix-ui/react-label/dist/index.mjs");
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! class-variance-authority */ "(ssr)/./node_modules/class-variance-authority/dist/index.mjs");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/utils */ "(ssr)/./lib/utils.ts");
/* __next_internal_client_entry_do_not_use__ Label auto */ 




const labelVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__.cva)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_4__.Root, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(labelVariants(), className),
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/label.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, undefined));
Label.displayName = _radix_ui_react_label__WEBPACK_IMPORTED_MODULE_4__.Root.displayName;



/***/ }),

/***/ "(ssr)/./components/ui/select.tsx":
/*!**********************************!*\
  !*** ./components/ui/select.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Select: () => (/* binding */ Select),
/* harmony export */   SelectContent: () => (/* binding */ SelectContent),
/* harmony export */   SelectGroup: () => (/* binding */ SelectGroup),
/* harmony export */   SelectItem: () => (/* binding */ SelectItem),
/* harmony export */   SelectLabel: () => (/* binding */ SelectLabel),
/* harmony export */   SelectScrollDownButton: () => (/* binding */ SelectScrollDownButton),
/* harmony export */   SelectScrollUpButton: () => (/* binding */ SelectScrollUpButton),
/* harmony export */   SelectSeparator: () => (/* binding */ SelectSeparator),
/* harmony export */   SelectTrigger: () => (/* binding */ SelectTrigger),
/* harmony export */   SelectValue: () => (/* binding */ SelectValue)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-select */ "(ssr)/./node_modules/@radix-ui/react-select/dist/index.mjs");
/* harmony import */ var _barrel_optimize_names_Check_ChevronDown_ChevronUp_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Check,ChevronDown,ChevronUp!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/chevron-down.js");
/* harmony import */ var _barrel_optimize_names_Check_ChevronDown_ChevronUp_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Check,ChevronDown,ChevronUp!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/chevron-up.js");
/* harmony import */ var _barrel_optimize_names_Check_ChevronDown_ChevronUp_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Check,ChevronDown,ChevronUp!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/check.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/utils */ "(ssr)/./lib/utils.ts");
/* __next_internal_client_entry_do_not_use__ Select,SelectGroup,SelectValue,SelectTrigger,SelectContent,SelectLabel,SelectItem,SelectSeparator,SelectScrollUpButton,SelectScrollDownButton auto */ 




const Select = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_3__.Root;
const SelectGroup = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_3__.Group;
const SelectValue = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_3__.Value;
const SelectTrigger = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_3__.Trigger, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex h-11 w-full items-center justify-between rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                asChild: true,
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Check_ChevronDown_ChevronUp_lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
                    className: "h-4 w-4 opacity-50"
                }, void 0, false, {
                    fileName: "/home/ubuntu/spark-platform/components/ui/select.tsx",
                    lineNumber: 30,
                    columnNumber: 7
                }, undefined)
            }, void 0, false, {
                fileName: "/home/ubuntu/spark-platform/components/ui/select.tsx",
                lineNumber: 29,
                columnNumber: 5
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "/home/ubuntu/spark-platform/components/ui/select.tsx",
        lineNumber: 20,
        columnNumber: 3
    }, undefined));
SelectTrigger.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_3__.Trigger.displayName;
const SelectScrollUpButton = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_3__.ScrollUpButton, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Check_ChevronDown_ChevronUp_lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "/home/ubuntu/spark-platform/components/ui/select.tsx",
            lineNumber: 48,
            columnNumber: 5
        }, undefined)
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/select.tsx",
        lineNumber: 40,
        columnNumber: 3
    }, undefined));
SelectScrollUpButton.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_3__.ScrollUpButton.displayName;
const SelectScrollDownButton = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_3__.ScrollDownButton, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Check_ChevronDown_ChevronUp_lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "/home/ubuntu/spark-platform/components/ui/select.tsx",
            lineNumber: 65,
            columnNumber: 5
        }, undefined)
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/select.tsx",
        lineNumber: 57,
        columnNumber: 3
    }, undefined));
SelectScrollDownButton.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_3__.ScrollDownButton.displayName;
const SelectContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, children, position = "popper", ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_3__.Portal, {
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_3__.Content, {
            ref: ref,
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "/home/ubuntu/spark-platform/components/ui/select.tsx",
                    lineNumber: 87,
                    columnNumber: 7
                }, undefined),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_3__.Viewport, {
                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                    children: children
                }, void 0, false, {
                    fileName: "/home/ubuntu/spark-platform/components/ui/select.tsx",
                    lineNumber: 88,
                    columnNumber: 7
                }, undefined),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SelectScrollDownButton, {}, void 0, false, {
                    fileName: "/home/ubuntu/spark-platform/components/ui/select.tsx",
                    lineNumber: 97,
                    columnNumber: 7
                }, undefined)
            ]
        }, void 0, true, {
            fileName: "/home/ubuntu/spark-platform/components/ui/select.tsx",
            lineNumber: 76,
            columnNumber: 5
        }, undefined)
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/select.tsx",
        lineNumber: 75,
        columnNumber: 3
    }, undefined));
SelectContent.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_3__.Content.displayName;
const SelectLabel = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_3__.Label, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/select.tsx",
        lineNumber: 107,
        columnNumber: 3
    }, undefined));
SelectLabel.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_3__.Label.displayName;
const SelectItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_3__.Item, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props,
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_3__.ItemIndicator, {
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Check_ChevronDown_ChevronUp_lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "/home/ubuntu/spark-platform/components/ui/select.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, undefined)
                }, void 0, false, {
                    fileName: "/home/ubuntu/spark-platform/components/ui/select.tsx",
                    lineNumber: 128,
                    columnNumber: 7
                }, undefined)
            }, void 0, false, {
                fileName: "/home/ubuntu/spark-platform/components/ui/select.tsx",
                lineNumber: 127,
                columnNumber: 5
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_3__.ItemText, {
                children: children
            }, void 0, false, {
                fileName: "/home/ubuntu/spark-platform/components/ui/select.tsx",
                lineNumber: 133,
                columnNumber: 5
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "/home/ubuntu/spark-platform/components/ui/select.tsx",
        lineNumber: 119,
        columnNumber: 3
    }, undefined));
SelectItem.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_3__.Item.displayName;
const SelectSeparator = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_3__.Separator, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/select.tsx",
        lineNumber: 142,
        columnNumber: 3
    }, undefined));
SelectSeparator.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_3__.Separator.displayName;



/***/ }),

/***/ "(ssr)/./components/ui/separator.tsx":
/*!*************************************!*\
  !*** ./components/ui/separator.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Separator: () => (/* binding */ Separator)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_separator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-separator */ "(ssr)/./node_modules/@radix-ui/react-separator/dist/index.mjs");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/utils */ "(ssr)/./lib/utils.ts");
/* __next_internal_client_entry_do_not_use__ Separator auto */ 



const Separator = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_separator__WEBPACK_IMPORTED_MODULE_3__.Root, {
        ref: ref,
        decorative: decorative,
        orientation: orientation,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/separator.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, undefined));
Separator.displayName = _radix_ui_react_separator__WEBPACK_IMPORTED_MODULE_3__.Root.displayName;



/***/ }),

/***/ "(ssr)/./components/ui/tabs.tsx":
/*!********************************!*\
  !*** ./components/ui/tabs.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tabs: () => (/* binding */ Tabs),
/* harmony export */   TabsContent: () => (/* binding */ TabsContent),
/* harmony export */   TabsList: () => (/* binding */ TabsList),
/* harmony export */   TabsTrigger: () => (/* binding */ TabsTrigger)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-tabs */ "(ssr)/./node_modules/@radix-ui/react-tabs/dist/index.mjs");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/utils */ "(ssr)/./lib/utils.ts");
/* __next_internal_client_entry_do_not_use__ Tabs,TabsList,TabsTrigger,TabsContent auto */ 



const Tabs = _radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_3__.Root;
const TabsList = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_3__.List, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/tabs.tsx",
        lineNumber: 15,
        columnNumber: 3
    }, undefined));
TabsList.displayName = _radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_3__.List.displayName;
const TabsTrigger = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_3__.Trigger, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/tabs.tsx",
        lineNumber: 30,
        columnNumber: 3
    }, undefined));
TabsTrigger.displayName = _radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_3__.Trigger.displayName;
const TabsContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_3__.Content, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/tabs.tsx",
        lineNumber: 45,
        columnNumber: 3
    }, undefined));
TabsContent.displayName = _radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_3__.Content.displayName;



/***/ }),

/***/ "(ssr)/./components/ui/toast.tsx":
/*!*********************************!*\
  !*** ./components/ui/toast.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Toast: () => (/* binding */ Toast),
/* harmony export */   ToastAction: () => (/* binding */ ToastAction),
/* harmony export */   ToastClose: () => (/* binding */ ToastClose),
/* harmony export */   ToastDescription: () => (/* binding */ ToastDescription),
/* harmony export */   ToastProvider: () => (/* binding */ ToastProvider),
/* harmony export */   ToastTitle: () => (/* binding */ ToastTitle),
/* harmony export */   ToastViewport: () => (/* binding */ ToastViewport)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/react-toast */ "(ssr)/./node_modules/@radix-ui/react-toast/dist/index.mjs");
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! class-variance-authority */ "(ssr)/./node_modules/class-variance-authority/dist/index.mjs");
/* harmony import */ var _barrel_optimize_names_X_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=X!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/x.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/utils */ "(ssr)/./lib/utils.ts");
/* __next_internal_client_entry_do_not_use__ ToastProvider,ToastViewport,Toast,ToastTitle,ToastDescription,ToastClose,ToastAction auto */ 





const ToastProvider = _radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_4__.Provider;
const ToastViewport = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_4__.Viewport, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", className),
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/toast.tsx",
        lineNumber: 16,
        columnNumber: 3
    }, undefined));
ToastViewport.displayName = _radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_4__.Viewport.displayName;
const toastVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__.cva)("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
const Toast = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, variant, ...props }, ref)=>{
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_4__.Root, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(toastVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/toast.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, undefined);
});
Toast.displayName = _radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_4__.Root.displayName;
const ToastAction = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_4__.Action, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/toast.tsx",
        lineNumber: 62,
        columnNumber: 3
    }, undefined));
ToastAction.displayName = _radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_4__.Action.displayName;
const ToastClose = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_4__.Close, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", className),
        "toast-close": "",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_X_lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "/home/ubuntu/spark-platform/components/ui/toast.tsx",
            lineNumber: 86,
            columnNumber: 5
        }, undefined)
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/toast.tsx",
        lineNumber: 77,
        columnNumber: 3
    }, undefined));
ToastClose.displayName = _radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_4__.Close.displayName;
const ToastTitle = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_4__.Title, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("text-sm font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/toast.tsx",
        lineNumber: 95,
        columnNumber: 3
    }, undefined));
ToastTitle.displayName = _radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_4__.Title.displayName;
const ToastDescription = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_4__.Description, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("text-sm opacity-90", className),
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/toast.tsx",
        lineNumber: 107,
        columnNumber: 3
    }, undefined));
ToastDescription.displayName = _radix_ui_react_toast__WEBPACK_IMPORTED_MODULE_4__.Description.displayName;



/***/ }),

/***/ "(ssr)/./components/ui/toaster.tsx":
/*!***********************************!*\
  !*** ./components/ui/toaster.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Toaster: () => (/* binding */ Toaster)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_use_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/use-toast */ "(ssr)/./hooks/use-toast.ts");
/* harmony import */ var _components_ui_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/toast */ "(ssr)/./components/ui/toast.tsx");
/* __next_internal_client_entry_do_not_use__ Toaster auto */ 


function Toaster() {
    const { toasts } = (0,_hooks_use_toast__WEBPACK_IMPORTED_MODULE_1__.useToast)();
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_toast__WEBPACK_IMPORTED_MODULE_2__.ToastProvider, {
        children: [
            toasts.map(function({ id, title, description, action, ...props }) {
                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_toast__WEBPACK_IMPORTED_MODULE_2__.Toast, {
                    ...props,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "grid gap-1",
                            children: [
                                title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_toast__WEBPACK_IMPORTED_MODULE_2__.ToastTitle, {
                                    children: title
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/components/ui/toaster.tsx",
                                    lineNumber: 22,
                                    columnNumber: 25
                                }, this),
                                description && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_toast__WEBPACK_IMPORTED_MODULE_2__.ToastDescription, {
                                    children: description
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/components/ui/toaster.tsx",
                                    lineNumber: 24,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/spark-platform/components/ui/toaster.tsx",
                            lineNumber: 21,
                            columnNumber: 13
                        }, this),
                        action,
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_toast__WEBPACK_IMPORTED_MODULE_2__.ToastClose, {}, void 0, false, {
                            fileName: "/home/ubuntu/spark-platform/components/ui/toaster.tsx",
                            lineNumber: 28,
                            columnNumber: 13
                        }, this)
                    ]
                }, id, true, {
                    fileName: "/home/ubuntu/spark-platform/components/ui/toaster.tsx",
                    lineNumber: 20,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_toast__WEBPACK_IMPORTED_MODULE_2__.ToastViewport, {}, void 0, false, {
                fileName: "/home/ubuntu/spark-platform/components/ui/toaster.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/ubuntu/spark-platform/components/ui/toaster.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}


/***/ }),

/***/ "(ssr)/./contexts/auth-context.tsx":
/*!***********************************!*\
  !*** ./contexts/auth-context.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),
/* harmony export */   useAuth: () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ AuthProvider,useAuth auto */ 

const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);
function AuthProvider({ children }) {
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const checkAuth = async ()=>{
        try {
            const response = await fetch("/api/auth/me");
            if (response.ok) {
                const data = await response.json();
                setUser(data.user);
            } else {
                setUser(null);
            }
        } catch (error) {
            console.error("Auth check failed:", error);
            setUser(null);
        } finally{
            setLoading(false);
        }
    };
    const login = async (email, password)=>{
        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            if (!response.ok) {
                let errorMessage = "Login failed";
                try {
                    const errorData = await response.json();
                    errorMessage = errorData.error || errorMessage;
                } catch (parseError) {
                    console.error("Failed to parse error response:", parseError);
                    // If we can't parse the error response, it might be HTML (like the original issue)
                    if (response.status === 500) {
                        errorMessage = "Server error. Please try again later.";
                    } else if (response.status === 401) {
                        errorMessage = "Invalid email or password";
                    } else if (response.status === 400) {
                        errorMessage = "Please provide valid email and password";
                    }
                }
                throw new Error(errorMessage);
            }
            const data = await response.json();
            setUser(data.user);
            console.log("Login successful:", data.user.email);
            // Role-based redirect after login
            if (data.user?.role === "admin") {
                window.location.href = "/admin";
            } else {
                window.location.href = "/dashboard";
            }
        } catch (error) {
            console.error("Login error:", error);
            throw error;
        }
    };
    const signup = async (userData)=>{
        try {
            const response = await fetch("/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            });
            if (!response.ok) {
                let errorMessage = "Signup failed";
                try {
                    const errorData = await response.json();
                    errorMessage = errorData.error || errorMessage;
                } catch (parseError) {
                    console.error("Failed to parse error response:", parseError);
                    if (response.status === 500) {
                        errorMessage = "Server error. Please try again later.";
                    } else if (response.status === 400) {
                        errorMessage = "Please provide valid information";
                    } else if (response.status === 409) {
                        errorMessage = "Email or username already exists";
                    }
                }
                throw new Error(errorMessage);
            }
            const data = await response.json();
            setUser(data.user);
            console.log("Signup successful:", data.user.email);
        } catch (error) {
            console.error("Signup error:", error);
            throw error;
        }
    };
    const logout = async ()=>{
        try {
            await fetch("/api/auth/logout", {
                method: "POST"
            });
        } catch (error) {
            console.error("Logout error:", error);
        } finally{
            setUser(null);
        }
    };
    const refreshUser = async ()=>{
        await checkAuth();
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        checkAuth();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {
        value: {
            user,
            loading,
            login,
            signup,
            logout,
            refreshUser
        },
        children: children
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/contexts/auth-context.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
}
function useAuth() {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}


/***/ }),

/***/ "(ssr)/./hooks/use-toast.ts":
/*!****************************!*\
  !*** ./hooks/use-toast.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reducer: () => (/* binding */ reducer),
/* harmony export */   toast: () => (/* binding */ toast),
/* harmony export */   useToast: () => (/* binding */ useToast)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* __next_internal_client_entry_do_not_use__ reducer,useToast,toast auto */ // Inspired by react-hot-toast library

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;
const actionTypes = {
    ADD_TOAST: "ADD_TOAST",
    UPDATE_TOAST: "UPDATE_TOAST",
    DISMISS_TOAST: "DISMISS_TOAST",
    REMOVE_TOAST: "REMOVE_TOAST"
};
let count = 0;
function genId() {
    count = (count + 1) % Number.MAX_SAFE_INTEGER;
    return count.toString();
}
const toastTimeouts = new Map();
const addToRemoveQueue = (toastId)=>{
    if (toastTimeouts.has(toastId)) {
        return;
    }
    const timeout = setTimeout(()=>{
        toastTimeouts.delete(toastId);
        dispatch({
            type: "REMOVE_TOAST",
            toastId: toastId
        });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action)=>{
    switch(action.type){
        case "ADD_TOAST":
            return {
                ...state,
                toasts: [
                    action.toast,
                    ...state.toasts
                ].slice(0, TOAST_LIMIT)
            };
        case "UPDATE_TOAST":
            return {
                ...state,
                toasts: state.toasts.map((t)=>t.id === action.toast.id ? {
                        ...t,
                        ...action.toast
                    } : t)
            };
        case "DISMISS_TOAST":
            {
                const { toastId } = action;
                // ! Side effects ! - This could be extracted into a dismissToast() action,
                // but I'll keep it here for simplicity
                if (toastId) {
                    addToRemoveQueue(toastId);
                } else {
                    state.toasts.forEach((toast)=>{
                        addToRemoveQueue(toast.id);
                    });
                }
                return {
                    ...state,
                    toasts: state.toasts.map((t)=>t.id === toastId || toastId === undefined ? {
                            ...t,
                            open: false
                        } : t)
                };
            }
        case "REMOVE_TOAST":
            if (action.toastId === undefined) {
                return {
                    ...state,
                    toasts: []
                };
            }
            return {
                ...state,
                toasts: state.toasts.filter((t)=>t.id !== action.toastId)
            };
    }
};
const listeners = [];
let memoryState = {
    toasts: []
};
function dispatch(action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener)=>{
        listener(memoryState);
    });
}
function toast({ ...props }) {
    const id = genId();
    const update = (props)=>dispatch({
            type: "UPDATE_TOAST",
            toast: {
                ...props,
                id
            }
        });
    const dismiss = ()=>dispatch({
            type: "DISMISS_TOAST",
            toastId: id
        });
    dispatch({
        type: "ADD_TOAST",
        toast: {
            ...props,
            id,
            open: true,
            onOpenChange: (open)=>{
                if (!open) dismiss();
            }
        }
    });
    return {
        id: id,
        dismiss,
        update
    };
}
function useToast() {
    const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0__.useState(memoryState);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        listeners.push(setState);
        return ()=>{
            const index = listeners.indexOf(setState);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        };
    }, [
        state
    ]);
    return {
        ...state,
        toast,
        dismiss: (toastId)=>dispatch({
                type: "DISMISS_TOAST",
                toastId
            })
    };
}



/***/ }),

/***/ "(ssr)/./lib/utils.ts":
/*!**********************!*\
  !*** ./lib/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cn: () => (/* binding */ cn),
/* harmony export */   formatDuration: () => (/* binding */ formatDuration)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "(ssr)/./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwind-merge */ "(ssr)/./node_modules/tailwind-merge/dist/bundle-mjs.mjs");


function cn(...inputs) {
    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__.twMerge)((0,clsx__WEBPACK_IMPORTED_MODULE_0__.clsx)(inputs));
}
function formatDuration(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(seconds % 3600 / 60);
    const remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
}


/***/ }),

/***/ "(rsc)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("6a5054f2e961");
if (false) {}


/***/ }),

/***/ "(rsc)/./app/layout.tsx":
/*!************************!*\
  !*** ./app/layout.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(rsc)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/font/google/target.css?{"path":"app/layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"} */ "(rsc)/./node_modules/next/font/google/target.css?{\"path\":\"app/layout.tsx\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"inter\"}");
/* harmony import */ var next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals.css */ "(rsc)/./app/globals.css");
/* harmony import */ var _components_theme_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/theme-provider */ "(rsc)/./components/theme-provider.tsx");
/* harmony import */ var _components_ui_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/toaster */ "(rsc)/./components/ui/toaster.tsx");
/* harmony import */ var _contexts_auth_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/contexts/auth-context */ "(rsc)/./contexts/auth-context.tsx");
/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/navigation */ "(rsc)/./components/navigation.tsx");







const metadata = {
    title: "Spark - Crowdsourced Market Research Platform",
    description: "Democratizing market research through crowdsourced insights and collaborative intelligence.",
    icons: {
        icon: "/images/Spark favicon.png",
        shortcut: "/images/Spark favicon.png"
    }
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("html", {
        lang: "en",
        suppressHydrationWarning: true,
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("body", {
            className: (next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_6___default().className),
            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_theme_provider__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
                attribute: "class",
                defaultTheme: "dark",
                enableSystem: false,
                disableTransitionOnChange: true,
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_auth_context__WEBPACK_IMPORTED_MODULE_4__.AuthProvider, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "min-h-screen bg-background",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navigation__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/app/layout.tsx",
                                    lineNumber: 37,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
                                    className: "pt-20",
                                    children: children
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/app/layout.tsx",
                                    lineNumber: 38,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/spark-platform/app/layout.tsx",
                            lineNumber: 36,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_toaster__WEBPACK_IMPORTED_MODULE_3__.Toaster, {}, void 0, false, {
                            fileName: "/home/ubuntu/spark-platform/app/layout.tsx",
                            lineNumber: 42,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/ubuntu/spark-platform/app/layout.tsx",
                    lineNumber: 35,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "/home/ubuntu/spark-platform/app/layout.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "/home/ubuntu/spark-platform/app/layout.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/app/layout.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}


/***/ }),

/***/ "(rsc)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/ubuntu/spark-platform/app/page.tsx#default`));


/***/ }),

/***/ "(rsc)/./components/navigation.tsx":
/*!***********************************!*\
  !*** ./components/navigation.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/ubuntu/spark-platform/components/navigation.tsx#default`));


/***/ }),

/***/ "(rsc)/./components/theme-provider.tsx":
/*!***************************************!*\
  !*** ./components/theme-provider.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeProvider: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");


const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/ubuntu/spark-platform/components/theme-provider.tsx#ThemeProvider`);


/***/ }),

/***/ "(rsc)/./components/ui/toaster.tsx":
/*!***********************************!*\
  !*** ./components/ui/toaster.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Toaster: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");


const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/ubuntu/spark-platform/components/ui/toaster.tsx#Toaster`);


/***/ }),

/***/ "(rsc)/./contexts/auth-context.tsx":
/*!***********************************!*\
  !*** ./contexts/auth-context.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthProvider: () => (/* binding */ e0),
/* harmony export */   useAuth: () => (/* binding */ e1)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");


const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/ubuntu/spark-platform/contexts/auth-context.tsx#AuthProvider`);

const e1 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/ubuntu/spark-platform/contexts/auth-context.tsx#useAuth`);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/framer-motion","vendor-chunks/@radix-ui","vendor-chunks/@floating-ui","vendor-chunks/tailwind-merge","vendor-chunks/lucide-react","vendor-chunks/tslib","vendor-chunks/react-remove-scroll","vendor-chunks/aria-hidden","vendor-chunks/next-themes","vendor-chunks/react-remove-scroll-bar","vendor-chunks/use-callback-ref","vendor-chunks/use-sidecar","vendor-chunks/class-variance-authority","vendor-chunks/react-style-singleton","vendor-chunks/clsx","vendor-chunks/get-nonce","vendor-chunks/react-intersection-observer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fpage&page=%2Fpage&appPaths=%2Fpage&pagePath=private-next-app-dir%2Fpage.tsx&appDir=%2Fhome%2Fubuntu%2Fspark-platform%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fubuntu%2Fspark-platform&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();