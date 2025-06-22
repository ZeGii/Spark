(() => {
var exports = {};
exports.id = "app/admin/users/page";
exports.ids = ["app/admin/users/page"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fadmin%2Fusers%2Fpage&page=%2Fadmin%2Fusers%2Fpage&appPaths=%2Fadmin%2Fusers%2Fpage&pagePath=private-next-app-dir%2Fadmin%2Fusers%2Fpage.tsx&appDir=%2Fhome%2Fubuntu%2Fspark-platform%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fubuntu%2Fspark-platform&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fadmin%2Fusers%2Fpage&page=%2Fadmin%2Fusers%2Fpage&appPaths=%2Fadmin%2Fusers%2Fpage&pagePath=private-next-app-dir%2Fadmin%2Fusers%2Fpage.tsx&appDir=%2Fhome%2Fubuntu%2Fspark-platform%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fubuntu%2Fspark-platform&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
        children: [
        'admin',
        {
        children: [
        'users',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./app/admin/users/page.tsx */ "(rsc)/./app/admin/users/page.tsx")), "/home/ubuntu/spark-platform/app/admin/users/page.tsx"],
          
        }]
      },
        {
        
        
      }
      ]
      },
        {
        'layout': [() => Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./app/admin/layout.tsx */ "(rsc)/./app/admin/layout.tsx")), "/home/ubuntu/spark-platform/app/admin/layout.tsx"],
        
      }
      ]
      },
        {
        'layout': [() => Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./app/layout.tsx */ "(rsc)/./app/layout.tsx")), "/home/ubuntu/spark-platform/app/layout.tsx"],
'not-found': [() => Promise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! next/dist/client/components/not-found-error */ "(rsc)/./node_modules/next/dist/client/components/not-found-error.js", 23)), "next/dist/client/components/not-found-error"],
        
      }
      ]
      }.children;
const pages = ["/home/ubuntu/spark-platform/app/admin/users/page.tsx"];


const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/admin/users/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/admin/users/page",
        pathname: "/admin/users",
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

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fspark-platform%2Fapp%2Fadmin%2Fusers%2Fpage.tsx%22%2C%22ids%22%3A%5B%5D%7D&server=true!":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fspark-platform%2Fapp%2Fadmin%2Fusers%2Fpage.tsx%22%2C%22ids%22%3A%5B%5D%7D&server=true! ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./app/admin/users/page.tsx */ "(ssr)/./app/admin/users/page.tsx"));


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

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fspark-platform%2Fcomponents%2Fadmin-layout.tsx%22%2C%22ids%22%3A%5B%22default%22%5D%7D&server=true!":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22%2Fhome%2Fubuntu%2Fspark-platform%2Fcomponents%2Fadmin-layout.tsx%22%2C%22ids%22%3A%5B%22default%22%5D%7D&server=true! ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./components/admin-layout.tsx */ "(ssr)/./components/admin-layout.tsx"));


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

/***/ "(ssr)/./app/admin/users/page.tsx":
/*!**********************************!*\
  !*** ./app/admin/users/page.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AdminUsers)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ "(ssr)/./node_modules/next/dist/api/navigation.js");
/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/card */ "(ssr)/./components/ui/card.tsx");
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/button */ "(ssr)/./components/ui/button.tsx");
/* harmony import */ var _components_ui_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/badge */ "(ssr)/./components/ui/badge.tsx");
/* harmony import */ var _components_ui_avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/avatar */ "(ssr)/./components/ui/avatar.tsx");
/* harmony import */ var _components_admin_admin_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/admin/admin-table */ "(ssr)/./components/admin/admin-table.tsx");
/* harmony import */ var _components_admin_stats_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/admin/stats-card */ "(ssr)/./components/admin/stats-card.tsx");
/* harmony import */ var _components_admin_user_actions_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/admin/user-actions-dropdown */ "(ssr)/./components/admin/user-actions-dropdown.tsx");
/* harmony import */ var _components_admin_user_profile_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/admin/user-profile-modal */ "(ssr)/./components/admin/user-profile-modal.tsx");
/* harmony import */ var _components_admin_user_bulk_actions_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/admin/user-bulk-actions-toolbar */ "(ssr)/./components/admin/user-bulk-actions-toolbar.tsx");
/* harmony import */ var _components_admin_date_filter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/admin/date-filter */ "(ssr)/./components/admin/date-filter.tsx");
/* harmony import */ var _components_admin_filter_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/admin/filter-bar */ "(ssr)/./components/admin/filter-bar.tsx");
/* harmony import */ var _components_admin_user_filters__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/components/admin/user-filters */ "(ssr)/./components/admin/user-filters.tsx");
/* harmony import */ var _components_admin_filter_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/components/admin/filter-utils */ "(ssr)/./components/admin/filter-utils.ts");
/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! sonner */ "(ssr)/./node_modules/sonner/dist/index.mjs");
/* harmony import */ var _barrel_optimize_names_AlertTriangle_Calendar_CheckCircle_Loader2_Mail_Shield_UserCheck_Users_lucide_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! __barrel_optimize__?names=AlertTriangle,Calendar,CheckCircle,Loader2,Mail,Shield,UserCheck,Users!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/mail.js");
/* harmony import */ var _barrel_optimize_names_AlertTriangle_Calendar_CheckCircle_Loader2_Mail_Shield_UserCheck_Users_lucide_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! __barrel_optimize__?names=AlertTriangle,Calendar,CheckCircle,Loader2,Mail,Shield,UserCheck,Users!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/users.js");
/* harmony import */ var _barrel_optimize_names_AlertTriangle_Calendar_CheckCircle_Loader2_Mail_Shield_UserCheck_Users_lucide_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! __barrel_optimize__?names=AlertTriangle,Calendar,CheckCircle,Loader2,Mail,Shield,UserCheck,Users!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/loader-circle.js");
/* harmony import */ var _barrel_optimize_names_AlertTriangle_Calendar_CheckCircle_Loader2_Mail_Shield_UserCheck_Users_lucide_react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! __barrel_optimize__?names=AlertTriangle,Calendar,CheckCircle,Loader2,Mail,Shield,UserCheck,Users!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/user-check.js");
/* harmony import */ var _barrel_optimize_names_AlertTriangle_Calendar_CheckCircle_Loader2_Mail_Shield_UserCheck_Users_lucide_react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! __barrel_optimize__?names=AlertTriangle,Calendar,CheckCircle,Loader2,Mail,Shield,UserCheck,Users!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/triangle-alert.js");
/* harmony import */ var _barrel_optimize_names_AlertTriangle_Calendar_CheckCircle_Loader2_Mail_Shield_UserCheck_Users_lucide_react__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! __barrel_optimize__?names=AlertTriangle,Calendar,CheckCircle,Loader2,Mail,Shield,UserCheck,Users!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/shield.js");
/* harmony import */ var _barrel_optimize_names_AlertTriangle_Calendar_CheckCircle_Loader2_Mail_Shield_UserCheck_Users_lucide_react__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! __barrel_optimize__?names=AlertTriangle,Calendar,CheckCircle,Loader2,Mail,Shield,UserCheck,Users!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/calendar.js");
/* harmony import */ var _barrel_optimize_names_AlertTriangle_Calendar_CheckCircle_Loader2_Mail_Shield_UserCheck_Users_lucide_react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! __barrel_optimize__?names=AlertTriangle,Calendar,CheckCircle,Loader2,Mail,Shield,UserCheck,Users!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/circle-check-big.js");
/* __next_internal_client_entry_do_not_use__ default auto */ 

















// Mock data fallback
const mockUsers = [
    {
        id: "1",
        name: "Dr. Sarah Chen",
        email: "sarah.chen@email.com",
        role: "user",
        status: "active",
        createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
        lastActive: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        topicsCount: 5,
        votesCount: 23,
        subscriptionPlan: "PRO"
    },
    {
        id: "2",
        name: "Prof. Michael Rodriguez",
        email: "michael.r@university.edu",
        role: "user",
        status: "active",
        createdAt: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000).toISOString(),
        lastActive: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
        topicsCount: 8,
        votesCount: 45,
        subscriptionPlan: "FREE"
    },
    {
        id: "3",
        name: "Dr. Lisa Wang",
        email: "lisa.wang@tech.com",
        role: "admin",
        status: "active",
        createdAt: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString(),
        lastActive: new Date(Date.now() - 0.5 * 24 * 60 * 60 * 1000).toISOString(),
        topicsCount: 12,
        votesCount: 67,
        subscriptionPlan: "PRO"
    }
];
const mockStats = {
    totalUsers: 1247,
    activeUsers: 1156,
    suspendedUsers: 8,
    bannedUsers: 3,
    newUsersThisMonth: 89,
    premiumUsers: 234,
    userGrowth: 18.5,
    activeGrowth: 12.3
};
function AdminUsers() {
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [stats, setStats] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [statsLoading, setStatsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [currentUser, setCurrentUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [modalOpen, setModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [selectedUserId, setSelectedUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [dateRange, setDateRange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    // Bulk selection state
    const [selectedUsers, setSelectedUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    // Pagination state
    const [pagination, setPagination] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        page: 1,
        pageSize: 50,
        total: 0,
        totalPages: 0
    });
    // Filter state - replaces individual search and date states
    const [filterState, setFilterState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    // Sort state
    const [sortBy, setSortBy] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("createdAt");
    const [sortOrder, setSortOrder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("desc");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetchUsers();
        fetchUserStats(dateRange);
        fetchCurrentUser();
    }, [
        pagination.page,
        pagination.pageSize,
        sortBy,
        sortOrder,
        dateRange
    ]);
    // Separate effect for filter changes to avoid dependency issues
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Only fetch if there are actual filter changes
        const hasFilters = Object.values(filterState).some((value)=>{
            if (value === null || value === "" || value === undefined) return false;
            if (Array.isArray(value)) return value.length > 0;
            if (typeof value === "object" && value !== null) return true;
            return true;
        });
        if (hasFilters || Object.keys(filterState).length > 0) {
            fetchUsers();
            // Reset to first page when filters change
            setPagination((prev)=>({
                    ...prev,
                    page: 1
                }));
        }
    }, [
        filterState
    ]);
    const fetchCurrentUser = async ()=>{
        try {
            const response = await fetch("/api/auth/me");
            if (response.ok) {
                const userData = await response.json();
                setCurrentUser({
                    email: userData.email
                });
            }
        } catch (error) {
            console.error("Error fetching current user:", error);
        }
    };
    const fetchUsers = async ()=>{
        try {
            setLoading(true);
            // Build query parameters from filter state
            const filterParams = (0,_components_admin_filter_utils__WEBPACK_IMPORTED_MODULE_15__.filtersToSearchParams)(filterState);
            // Add pagination and sorting parameters
            filterParams.append("page", pagination.page.toString());
            filterParams.append("limit", pagination.pageSize.toString());
            filterParams.append("sortBy", sortBy);
            filterParams.append("sortOrder", sortOrder);
            // Legacy support: Add date parameters if dateRange is active (for stats)
            if (dateRange) {
                filterParams.append("startDate", dateRange.startDate.toISOString());
                filterParams.append("endDate", dateRange.endDate.toISOString());
            }
            const url = `/api/admin/users?${filterParams.toString()}`;
            const response = await fetch(url);
            if (!response.ok) throw new Error("Failed to fetch users");
            const userData = await response.json();
            // Map API response to User interface format
            const formattedUsers = (userData.users || []).map((user)=>({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    status: user.status?.toLowerCase() || "active",
                    createdAt: user.createdAt,
                    lastActive: user.lastActive || user.updatedAt,
                    topicsCount: user.topicsCount,
                    votesCount: user.votesCount,
                    subscriptionPlan: user.subscriptionPlan
                }));
            setUsers(formattedUsers);
            // Update pagination state with response data (but preserve current page if it's valid)
            if (userData.pagination) {
                setPagination((prev)=>{
                    const newState = {
                        page: prev.page,
                        pageSize: userData.pagination.pageSize,
                        total: userData.pagination.total,
                        totalPages: userData.pagination.totalPages
                    };
                    // Only update page if current page is invalid (beyond total pages)
                    if (prev.page > userData.pagination.totalPages && userData.pagination.totalPages > 0) {
                        newState.page = 1 // Reset to first page if current page is invalid
                        ;
                    }
                    console.log("Users Page: Updating pagination from API", {
                        previous: prev,
                        apiResponse: userData.pagination,
                        newState
                    });
                    return newState;
                });
            }
        } catch (error) {
            console.error("Error fetching users:", error);
            setUsers(mockUsers);
            sonner__WEBPACK_IMPORTED_MODULE_16__.toast.error("Failed to load users, showing sample data");
        } finally{
            setLoading(false);
        }
    };
    const fetchUserStats = async (dateFilter)=>{
        try {
            setStatsLoading(true);
            let url = "/api/admin/users/stats";
            // Add date parameters if filter is active
            if (dateFilter) {
                const params = new URLSearchParams({
                    startDate: dateFilter.startDate.toISOString(),
                    endDate: dateFilter.endDate.toISOString()
                });
                url += `?${params.toString()}`;
            }
            const response = await fetch(url);
            if (!response.ok) throw new Error("Failed to fetch user stats");
            const statsData = await response.json();
            setStats(statsData);
        } catch (error) {
            console.error("Error fetching user stats:", error);
            setStats(mockStats);
        } finally{
            setStatsLoading(false);
        }
    };
    const handleRowClick = (user)=>{
        setSelectedUserId(user.id);
        setModalOpen(true);
    };
    const handleDateRangeChange = (newDateRange)=>{
        setDateRange(newDateRange);
        // Reset to first page when date range changes
        setPagination((prev)=>({
                ...prev,
                page: 1
            }));
    };
    // Enhanced pagination handlers with debugging - Stabilized with useCallback
    const handlePageChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((page)=>{
        console.log("Users Page: handlePageChange called", {
            page,
            loading,
            currentPage: pagination.page
        });
        if (loading) {
            console.log("Users Page: Page change blocked - loading in progress");
            return;
        }
        console.log("Users Page: Setting new page state:", page);
        setPagination((prev)=>{
            const newPagination = {
                ...prev,
                page
            };
            console.log("Users Page: New pagination state:", newPagination);
            return newPagination;
        });
    }, [
        loading,
        pagination.page
    ]);
    const handlePageSizeChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((pageSize)=>{
        console.log("Users Page: handlePageSizeChange called", {
            pageSize,
            loading,
            currentPageSize: pagination.pageSize
        });
        if (loading) {
            console.log("Users Page: PageSize change blocked - loading in progress");
            return;
        }
        console.log("Users Page: Setting new pageSize state:", pageSize);
        setPagination((prev)=>{
            const newPagination = {
                ...prev,
                page: 1,
                pageSize
            };
            console.log("Users Page: New pagination state:", newPagination);
            return newPagination;
        });
    }, [
        loading,
        pagination.pageSize
    ]);
    // Filter handlers - Stabilized with useCallback to prevent infinite re-renders
    const handleFilterChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((key, value)=>{
        setFilterState((prev)=>({
                ...prev,
                [key]: value
            }));
        setPagination((prev)=>({
                ...prev,
                page: 1
            })) // Reset to first page when filtering
        ;
    }, []);
    const handleClearFilters = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setFilterState({});
        setPagination((prev)=>({
                ...prev,
                page: 1
            })) // Reset to first page when clearing filters
        ;
    }, []);
    // Sort handler - Stabilized with useCallback
    const handleSortChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((sortBy, sortOrder)=>{
        setSortBy(sortBy);
        setSortOrder(sortOrder);
        setPagination((prev)=>({
                ...prev,
                page: 1
            })) // Reset to first page when sorting
        ;
    }, []);
    // Bulk action handlers
    const handleBulkDelete = async (userIds)=>{
        const response = await fetch("/api/admin/users/bulk-delete", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userIds
            })
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || "Failed to delete users");
        }
        await fetchUsers();
        await fetchUserStats(dateRange);
    };
    const handleBulkSuspend = async (userIds)=>{
        const response = await fetch("/api/admin/users/bulk-suspend", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userIds
            })
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || "Failed to suspend users");
        }
        await fetchUsers();
        await fetchUserStats(dateRange);
    };
    const handleBulkActivate = async (userIds)=>{
        const response = await fetch("/api/admin/users/bulk-activate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userIds
            })
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || "Failed to activate users");
        }
        await fetchUsers();
        await fetchUserStats(dateRange);
    };
    const handleSelectionChange = (selectedIds)=>{
        setSelectedUsers(selectedIds);
    };
    const handleClearSelection = ()=>{
        setSelectedUsers([]);
    };
    const handleActionComplete = ()=>{
        fetchUsers();
        fetchUserStats(dateRange);
    };
    const columns = [
        {
            key: "name",
            label: "User",
            render: (_, user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_6__.Avatar, {
                            className: "w-8 h-8",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_6__.AvatarImage, {
                                    src: ""
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                    lineNumber: 418,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_6__.AvatarFallback, {
                                    className: "bg-gradient-to-br from-[#00FF88] to-[#10B981] text-black text-xs font-medium",
                                    children: user?.name?.charAt(0)?.toUpperCase() || "U"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                    lineNumber: 419,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                            lineNumber: 417,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                    className: "font-medium text-white",
                                    children: user?.name || "Unknown User"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                    lineNumber: 424,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                    className: "text-xs text-[#CCCCCC]",
                                    children: user?.email || "No email"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                    lineNumber: 425,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                            lineNumber: 423,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                    lineNumber: 416,
                    columnNumber: 9
                }, this)
        },
        {
            key: "role",
            label: "Role",
            render: (role)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_5__.Badge, {
                    variant: role === "admin" ? "default" : "secondary",
                    className: "capitalize",
                    children: role || "user"
                }, void 0, false, {
                    fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                    lineNumber: 434,
                    columnNumber: 9
                }, this)
        },
        {
            key: "status",
            label: "Status",
            render: (status)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_5__.Badge, {
                    variant: status === "active" ? "default" : status === "suspended" ? "secondary" : "destructive",
                    className: "capitalize",
                    children: status || "unknown"
                }, void 0, false, {
                    fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                    lineNumber: 443,
                    columnNumber: 9
                }, this)
        },
        {
            key: "subscriptionPlan",
            label: "Plan",
            render: (subscription)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_5__.Badge, {
                    variant: subscription === "PRO" ? "default" : "outline",
                    className: "capitalize",
                    children: subscription || "FREE"
                }, void 0, false, {
                    fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                    lineNumber: 458,
                    columnNumber: 9
                }, this)
        },
        {
            key: "topicsCount",
            label: "Topics",
            render: (count)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    className: "text-sm font-medium text-white",
                    children: count || 0
                }, void 0, false, {
                    fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                    lineNumber: 470,
                    columnNumber: 9
                }, this)
        },
        {
            key: "votesCount",
            label: "Votes",
            render: (count)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    className: "text-sm font-medium text-white",
                    children: count || 0
                }, void 0, false, {
                    fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                    lineNumber: 477,
                    columnNumber: 9
                }, this)
        },
        {
            key: "createdAt",
            label: "Joined",
            render: (date)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    className: "text-sm text-[#CCCCCC]",
                    children: date ? new Date(date).toLocaleDateString() : "Unknown"
                }, void 0, false, {
                    fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                    lineNumber: 484,
                    columnNumber: 9
                }, this)
        },
        {
            key: "lastActive",
            label: "Last Active",
            render: (date)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    className: "text-sm text-[#CCCCCC]",
                    children: date ? new Date(date).toLocaleDateString() : "Unknown"
                }, void 0, false, {
                    fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                    lineNumber: 493,
                    columnNumber: 9
                }, this)
        },
        {
            key: "actions",
            label: "Actions",
            sortable: false,
            render: (_, user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    onClick: (e)=>e.stopPropagation(),
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_admin_user_actions_dropdown__WEBPACK_IMPORTED_MODULE_9__.UserActionsDropdown, {
                        user: user,
                        currentUserEmail: currentUser?.email || "",
                        onActionComplete: handleActionComplete
                    }, void 0, false, {
                        fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                        lineNumber: 504,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                    lineNumber: 503,
                    columnNumber: 9
                }, this)
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                                className: "text-3xl font-bold text-white",
                                children: "User Management"
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                lineNumber: 521,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                className: "text-[#CCCCCC] mt-1",
                                children: "Manage users, permissions, and account status"
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                lineNumber: 522,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                        lineNumber: 520,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                variant: "outline",
                                size: "sm",
                                className: "border-white/20 text-white hover:bg-gradient-to-r hover:from-[#f5d565]/20 hover:to-[#FCD34D]/20 hover:border-[#f5d565]/50",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertTriangle_Calendar_CheckCircle_Loader2_Mail_Shield_UserCheck_Users_lucide_react__WEBPACK_IMPORTED_MODULE_17__["default"], {
                                        className: "w-4 h-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                        lineNumber: 527,
                                        columnNumber: 13
                                    }, this),
                                    "Send Notification"
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                lineNumber: 526,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {
                                size: "sm",
                                className: "bg-gradient-to-r from-[#00FF88] to-[#10B981] text-black hover:from-[#00E87A] hover:to-[#059669]",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertTriangle_Calendar_CheckCircle_Loader2_Mail_Shield_UserCheck_Users_lucide_react__WEBPACK_IMPORTED_MODULE_18__["default"], {
                                        className: "w-4 h-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                        lineNumber: 531,
                                        columnNumber: 13
                                    }, this),
                                    "Export Users"
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                lineNumber: 530,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                        lineNumber: 525,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                lineNumber: 519,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.Card, {
                className: "bg-gradient-to-br from-[#1A1A1A] to-[#252529] border border-white/20",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardContent, {
                    className: "p-6",
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_admin_date_filter__WEBPACK_IMPORTED_MODULE_12__.DateFilter, {
                        onDateRangeChange: handleDateRangeChange
                    }, void 0, false, {
                        fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                        lineNumber: 540,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                    lineNumber: 539,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                lineNumber: 538,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                children: statsLoading ? // Loading state for stats
                Array.from({
                    length: 4
                }).map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.Card, {
                        className: "bg-gradient-to-br from-[#1A1A1A] to-[#252529] border border-white/20",
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardContent, {
                            className: "p-6",
                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "flex items-center justify-center py-8",
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertTriangle_Calendar_CheckCircle_Loader2_Mail_Shield_UserCheck_Users_lucide_react__WEBPACK_IMPORTED_MODULE_19__["default"], {
                                    className: "w-8 h-8 animate-spin text-[#00FF88]"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                    lineNumber: 552,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                lineNumber: 551,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                            lineNumber: 550,
                            columnNumber: 15
                        }, this)
                    }, index, false, {
                        fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                        lineNumber: 549,
                        columnNumber: 13
                    }, this)) : stats ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_admin_stats_card__WEBPACK_IMPORTED_MODULE_8__.StatsCard, {
                            title: dateRange ? "Filtered Users" : "Total Users",
                            value: stats.totalUsers?.toLocaleString() || "0",
                            change: {
                                value: stats.userGrowth || 0,
                                type: (stats.userGrowth || 0) > 0 ? "increase" : (stats.userGrowth || 0) < 0 ? "decrease" : "neutral",
                                period: dateRange ? "vs previous period" : "last month"
                            },
                            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertTriangle_Calendar_CheckCircle_Loader2_Mail_Shield_UserCheck_Users_lucide_react__WEBPACK_IMPORTED_MODULE_18__["default"], {
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                lineNumber: 567,
                                columnNumber: 21
                            }, void 0),
                            color: "blue"
                        }, void 0, false, {
                            fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                            lineNumber: 559,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_admin_stats_card__WEBPACK_IMPORTED_MODULE_8__.StatsCard, {
                            title: "Active Users",
                            value: stats.activeUsers?.toLocaleString() || "0",
                            change: {
                                value: stats.activeGrowth || 0,
                                type: (stats.activeGrowth || 0) > 0 ? "increase" : (stats.activeGrowth || 0) < 0 ? "decrease" : "neutral",
                                period: dateRange ? "activity rate" : "last month"
                            },
                            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertTriangle_Calendar_CheckCircle_Loader2_Mail_Shield_UserCheck_Users_lucide_react__WEBPACK_IMPORTED_MODULE_20__["default"], {
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                lineNumber: 579,
                                columnNumber: 21
                            }, void 0),
                            color: "green"
                        }, void 0, false, {
                            fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                            lineNumber: 571,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_admin_stats_card__WEBPACK_IMPORTED_MODULE_8__.StatsCard, {
                            title: "Suspended",
                            value: stats.suspendedUsers?.toString() || "0",
                            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertTriangle_Calendar_CheckCircle_Loader2_Mail_Shield_UserCheck_Users_lucide_react__WEBPACK_IMPORTED_MODULE_21__["default"], {
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                lineNumber: 586,
                                columnNumber: 21
                            }, void 0),
                            color: "amber",
                            urgent: (stats.suspendedUsers || 0) > 10,
                            description: (stats.suspendedUsers || 0) > 10 ? "High volume" : "Normal"
                        }, void 0, false, {
                            fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                            lineNumber: 583,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_admin_stats_card__WEBPACK_IMPORTED_MODULE_8__.StatsCard, {
                            title: "Premium Users",
                            value: stats.premiumUsers?.toString() || "0",
                            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertTriangle_Calendar_CheckCircle_Loader2_Mail_Shield_UserCheck_Users_lucide_react__WEBPACK_IMPORTED_MODULE_22__["default"], {
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                lineNumber: 595,
                                columnNumber: 21
                            }, void 0),
                            color: "purple",
                            description: `${Math.round((stats.premiumUsers || 0) / (stats.totalUsers || 1) * 100)}% of total`
                        }, void 0, false, {
                            fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                            lineNumber: 592,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true) : // No stats available
                Array.from({
                    length: 4
                }).map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.Card, {
                        className: "bg-gradient-to-br from-[#1A1A1A] to-[#252529] border border-white/20",
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardContent, {
                            className: "p-6",
                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "text-center text-[#CCCCCC]",
                                children: "No data available"
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                lineNumber: 605,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                            lineNumber: 604,
                            columnNumber: 15
                        }, this)
                    }, index, false, {
                        fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                        lineNumber: 603,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                lineNumber: 545,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.Card, {
                        className: "bg-gradient-to-br from-[#1A1A1A] to-[#252529] border border-white/20",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardHeader, {
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardTitle, {
                                    className: "flex items-center gap-2 text-white",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertTriangle_Calendar_CheckCircle_Loader2_Mail_Shield_UserCheck_Users_lucide_react__WEBPACK_IMPORTED_MODULE_23__["default"], {
                                            className: "h-5 w-5 text-[#00FF88]"
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                            lineNumber: 617,
                                            columnNumber: 15
                                        }, this),
                                        dateRange ? `New Users in Period` : "New Users This Month"
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                    lineNumber: 616,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                lineNumber: 615,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardContent, {
                                children: statsLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    className: "flex items-center justify-center py-4",
                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertTriangle_Calendar_CheckCircle_Loader2_Mail_Shield_UserCheck_Users_lucide_react__WEBPACK_IMPORTED_MODULE_19__["default"], {
                                        className: "w-6 h-6 animate-spin text-[#00FF88]"
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                        lineNumber: 624,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                    lineNumber: 623,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "text-3xl font-bold text-white mb-2",
                                            children: stats?.newUsersThisMonth || 0
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                            lineNumber: 628,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                            className: "text-sm text-[#CCCCCC]",
                                            children: dateRange ? `Registered during ${dateRange.label.toLowerCase()}` : `${stats?.userGrowth && stats.userGrowth > 0 ? "+" : ""}${stats?.userGrowth || 0}% from last month`
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                            lineNumber: 631,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                lineNumber: 621,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                        lineNumber: 614,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.Card, {
                        className: "bg-gradient-to-br from-[#1A1A1A] to-[#252529] border border-white/20",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardHeader, {
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardTitle, {
                                    className: "flex items-center gap-2 text-white",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertTriangle_Calendar_CheckCircle_Loader2_Mail_Shield_UserCheck_Users_lucide_react__WEBPACK_IMPORTED_MODULE_24__["default"], {
                                            className: "h-5 w-5 text-[#10B981]"
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                            lineNumber: 645,
                                            columnNumber: 15
                                        }, this),
                                        dateRange ? "Filtered Status" : "Account Status"
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                    lineNumber: 644,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                lineNumber: 643,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardContent, {
                                children: statsLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    className: "flex items-center justify-center py-4",
                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertTriangle_Calendar_CheckCircle_Loader2_Mail_Shield_UserCheck_Users_lucide_react__WEBPACK_IMPORTED_MODULE_19__["default"], {
                                        className: "w-6 h-6 animate-spin text-[#00FF88]"
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                        lineNumber: 652,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                    lineNumber: 651,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "flex justify-between items-center",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                    className: "text-sm text-[#CCCCCC]",
                                                    children: "Active"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                                    lineNumber: 657,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                    className: "font-medium text-[#10B981]",
                                                    children: stats?.activeUsers || 0
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                                    lineNumber: 658,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                            lineNumber: 656,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "flex justify-between items-center",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                    className: "text-sm text-[#CCCCCC]",
                                                    children: "Suspended"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                                    lineNumber: 661,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                    className: "font-medium text-[#f5d565]",
                                                    children: stats?.suspendedUsers || 0
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                                    lineNumber: 662,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                            lineNumber: 660,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "flex justify-between items-center",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                    className: "text-sm text-[#CCCCCC]",
                                                    children: "Banned"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                                    lineNumber: 665,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                    className: "font-medium text-red-400",
                                                    children: stats?.bannedUsers || 0
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                                    lineNumber: 666,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                            lineNumber: 664,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                    lineNumber: 655,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                lineNumber: 649,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                        lineNumber: 642,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.Card, {
                        className: "bg-gradient-to-br from-[#1A1A1A] to-[#252529] border border-white/20",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardHeader, {
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardTitle, {
                                    className: "flex items-center gap-2 text-white",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertTriangle_Calendar_CheckCircle_Loader2_Mail_Shield_UserCheck_Users_lucide_react__WEBPACK_IMPORTED_MODULE_22__["default"], {
                                            className: "h-5 w-5 text-[#f5d565]"
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                            lineNumber: 676,
                                            columnNumber: 15
                                        }, this),
                                        dateRange ? "Filtered Subscriptions" : "Subscription Breakdown"
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                    lineNumber: 675,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                lineNumber: 674,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardContent, {
                                children: statsLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    className: "flex items-center justify-center py-4",
                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertTriangle_Calendar_CheckCircle_Loader2_Mail_Shield_UserCheck_Users_lucide_react__WEBPACK_IMPORTED_MODULE_19__["default"], {
                                        className: "w-6 h-6 animate-spin text-[#00FF88]"
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                        lineNumber: 683,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                    lineNumber: 682,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "flex justify-between items-center",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                    className: "text-sm text-[#CCCCCC]",
                                                    children: "Free Users"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                                    lineNumber: 688,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                    className: "font-medium text-white",
                                                    children: (stats?.totalUsers || 0) - (stats?.premiumUsers || 0)
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                                    lineNumber: 689,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                            lineNumber: 687,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "flex justify-between items-center",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                    className: "text-sm text-[#CCCCCC]",
                                                    children: "Premium Users"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                                    lineNumber: 692,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                    className: "font-medium text-[#f5d565]",
                                                    children: stats?.premiumUsers || 0
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                                    lineNumber: 693,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                            lineNumber: 691,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "w-full bg-gradient-to-r from-[#10141a] to-[#141921] rounded-full h-2 mt-3 border border-white/10",
                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                className: "bg-gradient-to-r from-[#f5d565] to-[#FCD34D] h-2 rounded-full transition-all duration-300",
                                                style: {
                                                    width: `${stats ? (stats.premiumUsers || 0) / (stats.totalUsers || 1) * 100 : 0}%`
                                                }
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                                lineNumber: 696,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                            lineNumber: 695,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                    lineNumber: 686,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                lineNumber: 680,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                        lineNumber: 673,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                lineNumber: 613,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.Card, {
                className: "bg-gradient-to-br from-[#1A1A1A] to-[#252529] border border-white/20",
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardHeader, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "flex items-center justify-between",
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardTitle, {
                                            className: "text-white flex items-center gap-2",
                                            children: [
                                                dateRange ? `Filtered Users (${dateRange.label})` : "All Users",
                                                (0,_components_admin_filter_utils__WEBPACK_IMPORTED_MODULE_15__.hasActiveFilters)(filterState) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_5__.Badge, {
                                                    variant: "secondary",
                                                    children: "Filtered"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                                    lineNumber: 717,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                            lineNumber: 714,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardDescription, {
                                            className: "text-[#CCCCCC]",
                                            children: loading ? "Loading users..." : `${pagination.total || 0} total users${(0,_components_admin_filter_utils__WEBPACK_IMPORTED_MODULE_15__.hasActiveFilters)(filterState) ? " (filtered)" : ""}`
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                            lineNumber: 722,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                    lineNumber: 713,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                lineNumber: 712,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "mt-4 pt-4 border-t border-white/20",
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_admin_filter_bar__WEBPACK_IMPORTED_MODULE_13__.FilterBar, {
                                    filters: _components_admin_user_filters__WEBPACK_IMPORTED_MODULE_14__.USER_FILTER_CONFIGS,
                                    filterState: filterState,
                                    onFilterChange: handleFilterChange,
                                    onClearFilters: handleClearFilters,
                                    loading: loading,
                                    className: "mb-0"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                    lineNumber: 736,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                lineNumber: 735,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                        lineNumber: 711,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardContent, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_admin_user_bulk_actions_toolbar__WEBPACK_IMPORTED_MODULE_11__.UserBulkActionsToolbar, {
                                selectedCount: selectedUsers.length,
                                selectedIds: selectedUsers,
                                onClearSelection: handleClearSelection,
                                onBulkDelete: handleBulkDelete,
                                onBulkSuspend: handleBulkSuspend,
                                onBulkActivate: handleBulkActivate,
                                totalCount: users.length
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                lineNumber: 747,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_admin_admin_table__WEBPACK_IMPORTED_MODULE_7__.AdminTable, {
                                data: users,
                                columns: columns,
                                pagination: pagination,
                                onPageChange: handlePageChange,
                                onPageSizeChange: handlePageSizeChange,
                                onSortChange: handleSortChange,
                                loading: loading,
                                exportable: true,
                                emptyMessage: (0,_components_admin_filter_utils__WEBPACK_IMPORTED_MODULE_15__.hasActiveFilters)(filterState) ? "No users match your filters" : "No users found",
                                onRowClick: handleRowClick,
                                bulkSelectable: true,
                                selectedItems: selectedUsers,
                                onSelectionChange: handleSelectionChange,
                                getItemId: (user)=>user.id
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                                lineNumber: 757,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                        lineNumber: 746,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                lineNumber: 710,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_admin_user_profile_modal__WEBPACK_IMPORTED_MODULE_10__.UserProfileModal, {
                isOpen: modalOpen,
                onClose: ()=>{
                    setModalOpen(false);
                    setSelectedUserId(null);
                },
                userId: selectedUserId,
                currentUserEmail: currentUser?.email || "",
                onActionComplete: handleActionComplete
            }, void 0, false, {
                fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
                lineNumber: 777,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/ubuntu/spark-platform/app/admin/users/page.tsx",
        lineNumber: 517,
        columnNumber: 5
    }, this);
}


/***/ }),

/***/ "(ssr)/./components/admin-layout.tsx":
/*!*************************************!*\
  !*** ./components/admin-layout.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AdminLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_auth_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/contexts/auth-context */ "(ssr)/./contexts/auth-context.tsx");
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ "(ssr)/./node_modules/next/dist/api/navigation.js");
/* harmony import */ var _components_admin_sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/admin-sidebar */ "(ssr)/./components/admin-sidebar.tsx");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/utils */ "(ssr)/./lib/utils.ts");
/* __next_internal_client_entry_do_not_use__ default auto */ 






function AdminLayout({ children }) {
    const { user, loading } = (0,_contexts_auth_context__WEBPACK_IMPORTED_MODULE_2__.useAuth)();
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const [sidebarCollapsed, setSidebarCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!loading) {
            if (!user) {
                router.push("/");
                return;
            }
            if (user?.role !== "admin") {
                router.push("/dashboard");
                return;
            }
        }
    }, [
        user,
        loading,
        router
    ]);
    // Temporarily bypass loading state to test pages
    if (loading) {
        console.log("AdminLayout: Auth loading state detected, bypassing for testing");
    // return (
    //   <div className="min-h-screen bg-[#10141a] flex items-center justify-center">
    //     <div className="text-center">
    //       <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#00FF88] mx-auto mb-4"></div>
    //       <p className="text-white">Loading admin interface...</p>
    //     </div>
    //   </div>
    // )
    }
    // Temporarily bypass user auth check for testing
    if (!user || user?.role !== "admin") {
        console.log("AdminLayout: No user or not admin, bypassing for testing");
    // return null
    }
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "min-h-screen bg-[#10141a]",
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_admin_sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], {
                collapsed: sidebarCollapsed,
                onToggleCollapse: ()=>setSidebarCollapsed(!sidebarCollapsed)
            }, void 0, false, {
                fileName: "/home/ubuntu/spark-platform/components/admin-layout.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)("transition-all duration-300", sidebarCollapsed ? "ml-16" : "ml-64"),
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
                        className: "bg-gradient-to-r from-[#1A1A1A] to-[#252529] border-b border-white/20 px-6 py-4",
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                                            className: "text-2xl font-bold text-white",
                                            children: "Admin Panel"
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/spark-platform/components/admin-layout.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                            className: "text-sm text-[#CCCCCC]",
                                            children: "Manage your platform operations"
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/spark-platform/components/admin-layout.tsx",
                                            lineNumber: 70,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin-layout.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    className: "flex items-center space-x-4",
                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: "text-right",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                                className: "text-sm font-medium text-white",
                                                children: "System Status"
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/spark-platform/components/admin-layout.tsx",
                                                lineNumber: 76,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                className: "flex items-center space-x-2",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                        className: "w-2 h-2 bg-[#00FF88] rounded-full"
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/spark-platform/components/admin-layout.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                        className: "text-xs text-[#CCCCCC]",
                                                        children: "All systems operational"
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/spark-platform/components/admin-layout.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/ubuntu/spark-platform/components/admin-layout.tsx",
                                                lineNumber: 77,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/ubuntu/spark-platform/components/admin-layout.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin-layout.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/spark-platform/components/admin-layout.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/ubuntu/spark-platform/components/admin-layout.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
                        className: "p-6 bg-[#141921]",
                        children: children
                    }, void 0, false, {
                        fileName: "/home/ubuntu/spark-platform/components/admin-layout.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/ubuntu/spark-platform/components/admin-layout.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/ubuntu/spark-platform/components/admin-layout.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}


/***/ }),

/***/ "(ssr)/./components/admin-sidebar.tsx":
/*!**************************************!*\
  !*** ./components/admin-sidebar.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "(ssr)/./node_modules/next/dist/api/link.js");
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ "(ssr)/./node_modules/next/dist/api/navigation.js");
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/button */ "(ssr)/./components/ui/button.tsx");
/* harmony import */ var _components_ui_avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/avatar */ "(ssr)/./components/ui/avatar.tsx");
/* harmony import */ var _barrel_optimize_names_Bell_ChevronLeft_ChevronRight_FlaskConical_LayoutDashboard_Lightbulb_LogOut_Settings_Users_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Bell,ChevronLeft,ChevronRight,FlaskConical,LayoutDashboard,Lightbulb,LogOut,Settings,Users!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/layout-dashboard.js");
/* harmony import */ var _barrel_optimize_names_Bell_ChevronLeft_ChevronRight_FlaskConical_LayoutDashboard_Lightbulb_LogOut_Settings_Users_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Bell,ChevronLeft,ChevronRight,FlaskConical,LayoutDashboard,Lightbulb,LogOut,Settings,Users!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/users.js");
/* harmony import */ var _barrel_optimize_names_Bell_ChevronLeft_ChevronRight_FlaskConical_LayoutDashboard_Lightbulb_LogOut_Settings_Users_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Bell,ChevronLeft,ChevronRight,FlaskConical,LayoutDashboard,Lightbulb,LogOut,Settings,Users!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/lightbulb.js");
/* harmony import */ var _barrel_optimize_names_Bell_ChevronLeft_ChevronRight_FlaskConical_LayoutDashboard_Lightbulb_LogOut_Settings_Users_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=Bell,ChevronLeft,ChevronRight,FlaskConical,LayoutDashboard,Lightbulb,LogOut,Settings,Users!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/flask-conical.js");
/* harmony import */ var _barrel_optimize_names_Bell_ChevronLeft_ChevronRight_FlaskConical_LayoutDashboard_Lightbulb_LogOut_Settings_Users_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=Bell,ChevronLeft,ChevronRight,FlaskConical,LayoutDashboard,Lightbulb,LogOut,Settings,Users!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/settings.js");
/* harmony import */ var _barrel_optimize_names_Bell_ChevronLeft_ChevronRight_FlaskConical_LayoutDashboard_Lightbulb_LogOut_Settings_Users_lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! __barrel_optimize__?names=Bell,ChevronLeft,ChevronRight,FlaskConical,LayoutDashboard,Lightbulb,LogOut,Settings,Users!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/bell.js");
/* harmony import */ var _barrel_optimize_names_Bell_ChevronLeft_ChevronRight_FlaskConical_LayoutDashboard_Lightbulb_LogOut_Settings_Users_lucide_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! __barrel_optimize__?names=Bell,ChevronLeft,ChevronRight,FlaskConical,LayoutDashboard,Lightbulb,LogOut,Settings,Users!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/log-out.js");
/* harmony import */ var _barrel_optimize_names_Bell_ChevronLeft_ChevronRight_FlaskConical_LayoutDashboard_Lightbulb_LogOut_Settings_Users_lucide_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! __barrel_optimize__?names=Bell,ChevronLeft,ChevronRight,FlaskConical,LayoutDashboard,Lightbulb,LogOut,Settings,Users!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/chevron-right.js");
/* harmony import */ var _barrel_optimize_names_Bell_ChevronLeft_ChevronRight_FlaskConical_LayoutDashboard_Lightbulb_LogOut_Settings_Users_lucide_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! __barrel_optimize__?names=Bell,ChevronLeft,ChevronRight,FlaskConical,LayoutDashboard,Lightbulb,LogOut,Settings,Users!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/chevron-left.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ "(ssr)/./node_modules/next/dist/api/image.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/lib/utils */ "(ssr)/./lib/utils.ts");
/* harmony import */ var _contexts_auth_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/contexts/auth-context */ "(ssr)/./contexts/auth-context.tsx");
/* __next_internal_client_entry_do_not_use__ default auto */ 








const AdminSidebar = ({ collapsed, onToggleCollapse })=>{
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();
    const { user, logout } = (0,_contexts_auth_context__WEBPACK_IMPORTED_MODULE_7__.useAuth)();
    const navItems = [
        {
            href: "/admin",
            label: "Dashboard",
            icon: _barrel_optimize_names_Bell_ChevronLeft_ChevronRight_FlaskConical_LayoutDashboard_Lightbulb_LogOut_Settings_Users_lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"]
        },
        {
            href: "/admin/users",
            label: "Users",
            icon: _barrel_optimize_names_Bell_ChevronLeft_ChevronRight_FlaskConical_LayoutDashboard_Lightbulb_LogOut_Settings_Users_lucide_react__WEBPACK_IMPORTED_MODULE_9__["default"]
        },
        {
            href: "/admin/topics",
            label: "Topics",
            icon: _barrel_optimize_names_Bell_ChevronLeft_ChevronRight_FlaskConical_LayoutDashboard_Lightbulb_LogOut_Settings_Users_lucide_react__WEBPACK_IMPORTED_MODULE_10__["default"]
        },
        {
            href: "/admin/research",
            label: "Research",
            icon: _barrel_optimize_names_Bell_ChevronLeft_ChevronRight_FlaskConical_LayoutDashboard_Lightbulb_LogOut_Settings_Users_lucide_react__WEBPACK_IMPORTED_MODULE_11__["default"]
        },
        {
            href: "/admin/settings",
            label: "Settings",
            icon: _barrel_optimize_names_Bell_ChevronLeft_ChevronRight_FlaskConical_LayoutDashboard_Lightbulb_LogOut_Settings_Users_lucide_react__WEBPACK_IMPORTED_MODULE_12__["default"]
        }
    ];
    const handleLogout = async ()=>{
        await logout();
        window.location.href = "/";
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__.cn)("fixed left-0 top-0 h-full bg-gradient-to-b from-[#1A1A1A] to-[#10141a] text-white transition-all duration-300 z-50 flex flex-col border-r border-white/20", collapsed ? "w-16" : "w-64"),
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "p-4 border-b border-white/20",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "flex items-center justify-center",
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                        href: "/admin",
                        className: "flex items-center justify-center",
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "w-10 h-10 rounded-xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200",
                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                src: "/images/Spark icon logo.png",
                                alt: "Spark Admin",
                                width: 40,
                                height: 40,
                                className: "w-10 h-10 object-contain"
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/components/admin-sidebar.tsx",
                                lineNumber: 61,
                                columnNumber: 15
                            }, undefined)
                        }, void 0, false, {
                            fileName: "/home/ubuntu/spark-platform/components/admin-sidebar.tsx",
                            lineNumber: 60,
                            columnNumber: 13
                        }, undefined)
                    }, void 0, false, {
                        fileName: "/home/ubuntu/spark-platform/components/admin-sidebar.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, undefined)
                }, void 0, false, {
                    fileName: "/home/ubuntu/spark-platform/components/admin-sidebar.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "/home/ubuntu/spark-platform/components/admin-sidebar.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
                className: "flex-1 p-4 space-y-2",
                children: navItems.map((item)=>{
                    const isActive = pathname === item.href || item.href !== "/admin" && pathname.startsWith(item.href);
                    const Icon = item.icon;
                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                        href: item.href,
                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__.cn)("flex items-center space-x-3 px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200 group", isActive ? "bg-gradient-to-r from-[#00FF88] to-[#10B981] text-black shadow-lg hover:shadow-[0_20px_50px_rgba(0,255,136,0.15)]" : "text-[#CCCCCC] hover:text-white hover:bg-gradient-to-r hover:from-[#00FF88]/20 hover:to-[#10B981]/20 hover:border-[#00FF88]/30"),
                        title: collapsed ? item.label : undefined,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {
                                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__.cn)("flex-shrink-0", collapsed ? "w-5 h-5" : "w-5 h-5")
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/components/admin-sidebar.tsx",
                                lineNumber: 90,
                                columnNumber: 15
                            }, undefined),
                            !collapsed && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                className: "truncate",
                                children: item.label
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/components/admin-sidebar.tsx",
                                lineNumber: 91,
                                columnNumber: 30
                            }, undefined),
                            collapsed && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "absolute left-16 bg-gradient-to-r from-[#1A1A1A] to-[#252529] text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 border border-white/20",
                                children: item.label
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/components/admin-sidebar.tsx",
                                lineNumber: 93,
                                columnNumber: 17
                            }, undefined)
                        ]
                    }, item.href, true, {
                        fileName: "/home/ubuntu/spark-platform/components/admin-sidebar.tsx",
                        lineNumber: 79,
                        columnNumber: 13
                    }, undefined);
                })
            }, void 0, false, {
                fileName: "/home/ubuntu/spark-platform/components/admin-sidebar.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "p-4 border-t border-white/20",
                children: !collapsed ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {
                            variant: "ghost",
                            size: "sm",
                            className: "w-full justify-start text-[#CCCCCC] hover:text-white hover:bg-gradient-to-r hover:from-[#f5d565]/20 hover:to-[#FCD34D]/20",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bell_ChevronLeft_ChevronRight_FlaskConical_LayoutDashboard_Lightbulb_LogOut_Settings_Users_lucide_react__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                    className: "w-4 h-4 mr-3"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin-sidebar.tsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, undefined),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                    children: "Notifications"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin-sidebar.tsx",
                                    lineNumber: 109,
                                    columnNumber: 15
                                }, undefined),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                    className: "ml-auto w-2 h-2 bg-[#f5d565] rounded-full"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin-sidebar.tsx",
                                    lineNumber: 110,
                                    columnNumber: 15
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/spark-platform/components/admin-sidebar.tsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, undefined),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "flex items-center space-x-3 p-3 bg-gradient-to-r from-[#1A1A1A] to-[#252529] rounded-lg border border-white/10",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_4__.Avatar, {
                                    className: "w-8 h-8",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_4__.AvatarImage, {
                                            src: ""
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/spark-platform/components/admin-sidebar.tsx",
                                            lineNumber: 116,
                                            columnNumber: 17
                                        }, undefined),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_4__.AvatarFallback, {
                                            className: "bg-gradient-to-br from-[#00FF88] to-[#10B981] text-black text-xs font-medium",
                                            children: user?.name?.charAt(0)?.toUpperCase() || "A"
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/spark-platform/components/admin-sidebar.tsx",
                                            lineNumber: 117,
                                            columnNumber: 17
                                        }, undefined)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin-sidebar.tsx",
                                    lineNumber: 115,
                                    columnNumber: 15
                                }, undefined),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                            className: "text-sm font-medium text-white truncate",
                                            children: user?.name
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/spark-platform/components/admin-sidebar.tsx",
                                            lineNumber: 122,
                                            columnNumber: 17
                                        }, undefined),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                            className: "text-xs text-[#f5d565]",
                                            children: "Administrator"
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/spark-platform/components/admin-sidebar.tsx",
                                            lineNumber: 123,
                                            columnNumber: 17
                                        }, undefined)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin-sidebar.tsx",
                                    lineNumber: 121,
                                    columnNumber: 15
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/spark-platform/components/admin-sidebar.tsx",
                            lineNumber: 114,
                            columnNumber: 13
                        }, undefined),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {
                            variant: "ghost",
                            size: "sm",
                            onClick: handleLogout,
                            className: "w-full justify-start text-[#CCCCCC] hover:text-white hover:bg-gradient-to-r hover:from-red-500/20 hover:to-red-600/20",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bell_ChevronLeft_ChevronRight_FlaskConical_LayoutDashboard_Lightbulb_LogOut_Settings_Users_lucide_react__WEBPACK_IMPORTED_MODULE_14__["default"], {
                                    className: "w-4 h-4 mr-3"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin-sidebar.tsx",
                                    lineNumber: 134,
                                    columnNumber: 15
                                }, undefined),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                    children: "Logout"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin-sidebar.tsx",
                                    lineNumber: 135,
                                    columnNumber: 15
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/spark-platform/components/admin-sidebar.tsx",
                            lineNumber: 128,
                            columnNumber: 13
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "/home/ubuntu/spark-platform/components/admin-sidebar.tsx",
                    lineNumber: 105,
                    columnNumber: 11
                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {
                            variant: "ghost",
                            size: "sm",
                            className: "w-full p-2 text-[#CCCCCC] hover:text-white hover:bg-gradient-to-r hover:from-[#f5d565]/20 hover:to-[#FCD34D]/20",
                            title: "Notifications",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bell_ChevronLeft_ChevronRight_FlaskConical_LayoutDashboard_Lightbulb_LogOut_Settings_Users_lucide_react__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin-sidebar.tsx",
                                    lineNumber: 141,
                                    columnNumber: 15
                                }, undefined),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                    className: "absolute top-1 right-1 w-2 h-2 bg-[#f5d565] rounded-full"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin-sidebar.tsx",
                                    lineNumber: 142,
                                    columnNumber: 15
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/spark-platform/components/admin-sidebar.tsx",
                            lineNumber: 140,
                            columnNumber: 13
                        }, undefined),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "flex justify-center",
                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_4__.Avatar, {
                                className: "w-8 h-8",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_4__.AvatarImage, {
                                        src: ""
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/spark-platform/components/admin-sidebar.tsx",
                                        lineNumber: 147,
                                        columnNumber: 17
                                    }, undefined),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_4__.AvatarFallback, {
                                        className: "bg-gradient-to-br from-[#00FF88] to-[#10B981] text-black text-xs font-medium",
                                        children: user?.name?.charAt(0)?.toUpperCase() || "A"
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/spark-platform/components/admin-sidebar.tsx",
                                        lineNumber: 148,
                                        columnNumber: 17
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/spark-platform/components/admin-sidebar.tsx",
                                lineNumber: 146,
                                columnNumber: 15
                            }, undefined)
                        }, void 0, false, {
                            fileName: "/home/ubuntu/spark-platform/components/admin-sidebar.tsx",
                            lineNumber: 145,
                            columnNumber: 13
                        }, undefined),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {
                            variant: "ghost",
                            size: "sm",
                            onClick: handleLogout,
                            className: "w-full p-2 text-[#CCCCCC] hover:text-white hover:bg-gradient-to-r hover:from-red-500/20 hover:to-red-600/20",
                            title: "Logout",
                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bell_ChevronLeft_ChevronRight_FlaskConical_LayoutDashboard_Lightbulb_LogOut_Settings_Users_lucide_react__WEBPACK_IMPORTED_MODULE_14__["default"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/components/admin-sidebar.tsx",
                                lineNumber: 161,
                                columnNumber: 15
                            }, undefined)
                        }, void 0, false, {
                            fileName: "/home/ubuntu/spark-platform/components/admin-sidebar.tsx",
                            lineNumber: 154,
                            columnNumber: 13
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "/home/ubuntu/spark-platform/components/admin-sidebar.tsx",
                    lineNumber: 139,
                    columnNumber: 11
                }, undefined)
            }, void 0, false, {
                fileName: "/home/ubuntu/spark-platform/components/admin-sidebar.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {
                variant: "ghost",
                size: "sm",
                onClick: onToggleCollapse,
                className: "absolute -right-3 top-6 w-6 h-6 bg-gradient-to-r from-[#1A1A1A] to-[#252529] border border-white/20 rounded-full text-[#CCCCCC] hover:text-white hover:bg-gradient-to-r hover:from-[#00FF88]/20 hover:to-[#10B981]/20 p-0 shadow-lg",
                children: collapsed ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bell_ChevronLeft_ChevronRight_FlaskConical_LayoutDashboard_Lightbulb_LogOut_Settings_Users_lucide_react__WEBPACK_IMPORTED_MODULE_15__["default"], {
                    className: "w-3 h-3"
                }, void 0, false, {
                    fileName: "/home/ubuntu/spark-platform/components/admin-sidebar.tsx",
                    lineNumber: 174,
                    columnNumber: 22
                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bell_ChevronLeft_ChevronRight_FlaskConical_LayoutDashboard_Lightbulb_LogOut_Settings_Users_lucide_react__WEBPACK_IMPORTED_MODULE_16__["default"], {
                    className: "w-3 h-3"
                }, void 0, false, {
                    fileName: "/home/ubuntu/spark-platform/components/admin-sidebar.tsx",
                    lineNumber: 174,
                    columnNumber: 61
                }, undefined)
            }, void 0, false, {
                fileName: "/home/ubuntu/spark-platform/components/admin-sidebar.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "/home/ubuntu/spark-platform/components/admin-sidebar.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, undefined);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminSidebar);


/***/ }),

/***/ "(ssr)/./components/admin/admin-table.tsx":
/*!******************************************!*\
  !*** ./components/admin/admin-table.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminTable: () => (/* binding */ AdminTable)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/table */ "(ssr)/./components/ui/table.tsx");
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/button */ "(ssr)/./components/ui/button.tsx");
/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/input */ "(ssr)/./components/ui/input.tsx");
/* harmony import */ var _components_ui_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/checkbox */ "(ssr)/./components/ui/checkbox.tsx");
/* harmony import */ var _barrel_optimize_names_ArrowDown_ArrowUp_ArrowUpDown_Download_Search_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowDown,ArrowUp,ArrowUpDown,Download,Search!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/arrow-up-down.js");
/* harmony import */ var _barrel_optimize_names_ArrowDown_ArrowUp_ArrowUpDown_Download_Search_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowDown,ArrowUp,ArrowUpDown,Download,Search!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/arrow-up.js");
/* harmony import */ var _barrel_optimize_names_ArrowDown_ArrowUp_ArrowUpDown_Download_Search_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowDown,ArrowUp,ArrowUpDown,Download,Search!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/arrow-down.js");
/* harmony import */ var _barrel_optimize_names_ArrowDown_ArrowUp_ArrowUpDown_Download_Search_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowDown,ArrowUp,ArrowUpDown,Download,Search!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/download.js");
/* harmony import */ var _barrel_optimize_names_ArrowDown_ArrowUp_ArrowUpDown_Download_Search_lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowDown,ArrowUp,ArrowUpDown,Download,Search!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/search.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/lib/utils */ "(ssr)/./lib/utils.ts");
/* harmony import */ var _table_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./table-pagination */ "(ssr)/./components/admin/table-pagination.tsx");
/* harmony import */ var _filter_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filter-bar */ "(ssr)/./components/admin/filter-bar.tsx");
/* __next_internal_client_entry_do_not_use__ AdminTable auto */ 









function AdminTable({ data = [], columns = [], pagination, onPageChange, onPageSizeChange, onSearchChange, onSortChange, loading = false, emptyMessage = "No data available", onRowClick, // Bulk selection props
bulkSelectable = false, selectedItems = [], onSelectionChange, getItemId = (item)=>item.id || String(item.id || ""), searchPlaceholder = "Search...", exportable = false, className, // Filter props
filterConfigs = [], filterState = {}, onFilterChange, onClearFilters, showFilters = false }) {
    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [sortConfig, setSortConfig] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    // Debounce search (only if no filter system is used)
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!showFilters && onSearchChange) {
            const timer = setTimeout(()=>{
                onSearchChange(searchTerm);
            }, 300);
            return ()=>clearTimeout(timer);
        }
    }, [
        searchTerm,
        onSearchChange,
        showFilters
    ]);
    // Ensure data is always an array
    const safeData = Array.isArray(data) ? data : [];
    // Bulk selection logic
    const handleSelectItem = (itemId, checked)=>{
        if (!onSelectionChange) return;
        const newSelection = checked ? [
            ...selectedItems,
            itemId
        ] : selectedItems.filter((id)=>id !== itemId);
        onSelectionChange(newSelection);
    };
    // Selection state calculations
    const currentPageIds = safeData.map((item)=>getItemId(item));
    const isAllCurrentPageSelected = currentPageIds.length > 0 && currentPageIds.every((id)=>selectedItems.includes(id));
    const handleSelectAllToggle = (checked)=>{
        if (!onSelectionChange) return;
        if (checked) {
            const newSelection = Array.from(new Set([
                ...selectedItems,
                ...currentPageIds
            ]));
            onSelectionChange(newSelection);
        } else {
            const newSelection = selectedItems.filter((id)=>!currentPageIds.includes(id));
            onSelectionChange(newSelection);
        }
    };
    const handleSort = (key)=>{
        const newSortConfig = sortConfig?.key === key ? sortConfig.direction === "asc" ? {
            key,
            direction: "desc"
        } : null : {
            key,
            direction: "asc"
        };
        setSortConfig(newSortConfig);
        if (onSortChange) {
            if (newSortConfig) {
                onSortChange(newSortConfig.key, newSortConfig.direction);
            } else {
                onSortChange("", "asc");
            }
        }
    };
    const handleExport = ()=>{
        if (!safeData.length) return;
        const csvContent = [
            columns.map((col)=>col.label).join(","),
            ...safeData.map((row)=>columns.map((col)=>{
                    const value = typeof col.key === "string" ? row?.[col.key] || "" : "";
                    return `"${String(value).replace(/"/g, '""')}"`;
                }).join(","))
        ].join("\n");
        const blob = new Blob([
            csvContent
        ], {
            type: "text/csv"
        });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "data-export.csv";
        a.click();
        window.URL.revokeObjectURL(url);
    };
    const getSortIcon = (columnKey)=>{
        if (sortConfig?.key !== columnKey) {
            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowDown_ArrowUp_ArrowUpDown_Download_Search_lucide_react__WEBPACK_IMPORTED_MODULE_9__["default"], {
                className: "w-4 h-4 text-[#CCCCCC]"
            }, void 0, false, {
                fileName: "/home/ubuntu/spark-platform/components/admin/admin-table.tsx",
                lineNumber: 183,
                columnNumber: 14
            }, this);
        }
        return sortConfig.direction === "asc" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowDown_ArrowUp_ArrowUpDown_Download_Search_lucide_react__WEBPACK_IMPORTED_MODULE_10__["default"], {
            className: "w-4 h-4 text-white"
        }, void 0, false, {
            fileName: "/home/ubuntu/spark-platform/components/admin/admin-table.tsx",
            lineNumber: 186,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowDown_ArrowUp_ArrowUpDown_Download_Search_lucide_react__WEBPACK_IMPORTED_MODULE_11__["default"], {
            className: "w-4 h-4 text-white"
        }, void 0, false, {
            fileName: "/home/ubuntu/spark-platform/components/admin/admin-table.tsx",
            lineNumber: 187,
            columnNumber: 9
        }, this);
    };
    if (loading && safeData.length === 0) {
        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__.cn)("space-y-4", className),
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "h-10 w-64 bg-card rounded animate-pulse"
                        }, void 0, false, {
                            fileName: "/home/ubuntu/spark-platform/components/admin/admin-table.tsx",
                            lineNumber: 194,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "h-10 w-32 bg-card rounded animate-pulse"
                        }, void 0, false, {
                            fileName: "/home/ubuntu/spark-platform/components/admin/admin-table.tsx",
                            lineNumber: 195,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/ubuntu/spark-platform/components/admin/admin-table.tsx",
                    lineNumber: 193,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "border rounded-lg bg-card",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "h-12 bg-muted border-b"
                        }, void 0, false, {
                            fileName: "/home/ubuntu/spark-platform/components/admin/admin-table.tsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, this),
                        Array.from({
                            length: 5
                        }).map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "h-16 border-b last:border-b-0 bg-card"
                            }, i, false, {
                                fileName: "/home/ubuntu/spark-platform/components/admin/admin-table.tsx",
                                lineNumber: 200,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "/home/ubuntu/spark-platform/components/admin/admin-table.tsx",
                    lineNumber: 197,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/ubuntu/spark-platform/components/admin/admin-table.tsx",
            lineNumber: 192,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__.cn)("space-y-4", className),
        children: [
            showFilters && filterConfigs.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "flex items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "flex-1",
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_filter_bar__WEBPACK_IMPORTED_MODULE_8__.FilterBar, {
                            filters: filterConfigs,
                            filterState: filterState,
                            onFilterChange: onFilterChange || (()=>{}),
                            onClearFilters: onClearFilters || (()=>{}),
                            loading: loading
                        }, void 0, false, {
                            fileName: "/home/ubuntu/spark-platform/components/admin/admin-table.tsx",
                            lineNumber: 213,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/ubuntu/spark-platform/components/admin/admin-table.tsx",
                        lineNumber: 212,
                        columnNumber: 11
                    }, this),
                    exportable && safeData.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {
                        variant: "outline",
                        onClick: handleExport,
                        size: "sm",
                        disabled: loading,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowDown_ArrowUp_ArrowUpDown_Download_Search_lucide_react__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                className: "w-4 h-4 mr-2"
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/components/admin/admin-table.tsx",
                                lineNumber: 224,
                                columnNumber: 15
                            }, this),
                            "Export"
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/spark-platform/components/admin/admin-table.tsx",
                        lineNumber: 223,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/ubuntu/spark-platform/components/admin/admin-table.tsx",
                lineNumber: 211,
                columnNumber: 9
            }, this) : /* Legacy Search and Export Controls */ /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "flex items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "flex items-center gap-4 flex-1",
                        children: onSearchChange && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "relative max-w-sm",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowDown_ArrowUp_ArrowUpDown_Download_Search_lucide_react__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                    className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-[#CCCCCC] w-4 h-4"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin/admin-table.tsx",
                                    lineNumber: 235,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_4__.Input, {
                                    placeholder: searchPlaceholder,
                                    value: searchTerm,
                                    onChange: (e)=>setSearchTerm(e.target.value),
                                    className: "pl-10",
                                    disabled: loading
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin/admin-table.tsx",
                                    lineNumber: 236,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/spark-platform/components/admin/admin-table.tsx",
                            lineNumber: 234,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/ubuntu/spark-platform/components/admin/admin-table.tsx",
                        lineNumber: 232,
                        columnNumber: 11
                    }, this),
                    exportable && safeData.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {
                        variant: "outline",
                        onClick: handleExport,
                        size: "sm",
                        disabled: loading,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowDown_ArrowUp_ArrowUpDown_Download_Search_lucide_react__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                className: "w-4 h-4 mr-2"
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/components/admin/admin-table.tsx",
                                lineNumber: 249,
                                columnNumber: 15
                            }, this),
                            "Export"
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/spark-platform/components/admin/admin-table.tsx",
                        lineNumber: 248,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/ubuntu/spark-platform/components/admin/admin-table.tsx",
                lineNumber: 231,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "border rounded-lg bg-card relative",
                children: [
                    loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-10 rounded-lg",
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "flex items-center gap-2 text-foreground",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    className: "animate-spin rounded-full h-4 w-4 border-b-2 border-primary"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin/admin-table.tsx",
                                    lineNumber: 261,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                    className: "text-sm",
                                    children: "Loading..."
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin/admin-table.tsx",
                                    lineNumber: 262,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/spark-platform/components/admin/admin-table.tsx",
                            lineNumber: 260,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/ubuntu/spark-platform/components/admin/admin-table.tsx",
                        lineNumber: 259,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_2__.Table, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_2__.TableHeader, {
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_2__.TableRow, {
                                    className: "bg-muted",
                                    children: [
                                        bulkSelectable && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_2__.TableHead, {
                                            className: "w-12 text-center",
                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_checkbox__WEBPACK_IMPORTED_MODULE_5__.Checkbox, {
                                                checked: isAllCurrentPageSelected,
                                                onCheckedChange: handleSelectAllToggle,
                                                className: "border-white data-[state=checked]:bg-white data-[state=checked]:text-black",
                                                disabled: loading
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/spark-platform/components/admin/admin-table.tsx",
                                                lineNumber: 272,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/spark-platform/components/admin/admin-table.tsx",
                                            lineNumber: 271,
                                            columnNumber: 17
                                        }, this),
                                        columns.map((column)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_2__.TableHead, {
                                                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__.cn)("font-medium text-white", column.width === "fit" && "w-fit", column.width && column.width !== "fit" && `w-${column.width}`, column.sortable !== false && "cursor-pointer hover:bg-muted/80"),
                                                onClick: ()=>column.sortable !== false && handleSort(String(column.key)),
                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                    className: "flex items-center space-x-2",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                            children: column.label
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/spark-platform/components/admin/admin-table.tsx",
                                                            lineNumber: 292,
                                                            columnNumber: 21
                                                        }, this),
                                                        column.sortable !== false && getSortIcon(String(column.key))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/ubuntu/spark-platform/components/admin/admin-table.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 19
                                                }, this)
                                            }, String(column.key), false, {
                                                fileName: "/home/ubuntu/spark-platform/components/admin/admin-table.tsx",
                                                lineNumber: 281,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin/admin-table.tsx",
                                    lineNumber: 269,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/components/admin/admin-table.tsx",
                                lineNumber: 268,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_2__.TableBody, {
                                children: safeData.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_2__.TableRow, {
                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_2__.TableCell, {
                                        colSpan: columns.length + (bulkSelectable ? 1 : 0),
                                        className: "text-center py-8 text-[#CCCCCC]",
                                        children: emptyMessage
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/spark-platform/components/admin/admin-table.tsx",
                                        lineNumber: 302,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin/admin-table.tsx",
                                    lineNumber: 301,
                                    columnNumber: 15
                                }, this) : safeData.map((row, index)=>{
                                    const itemId = getItemId(row);
                                    const isSelected = selectedItems.includes(itemId);
                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_2__.TableRow, {
                                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__.cn)("hover:bg-muted/50 transition-colors", onRowClick && "cursor-pointer hover:bg-white/10", isSelected && "bg-blue-50/50 border-l-4 border-l-blue-500"),
                                        onClick: (e)=>{
                                            // Don't trigger row click if clicking checkbox
                                            if (e.target.closest("[data-checkbox]")) {
                                                return;
                                            }
                                            onRowClick?.(row);
                                        },
                                        children: [
                                            bulkSelectable && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_2__.TableCell, {
                                                className: "py-3 text-center",
                                                "data-checkbox": true,
                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_checkbox__WEBPACK_IMPORTED_MODULE_5__.Checkbox, {
                                                    checked: isSelected,
                                                    onCheckedChange: (checked)=>handleSelectItem(itemId, checked),
                                                    onClick: (e)=>e.stopPropagation(),
                                                    disabled: loading
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/components/admin/admin-table.tsx",
                                                    lineNumber: 332,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/spark-platform/components/admin/admin-table.tsx",
                                                lineNumber: 331,
                                                columnNumber: 23
                                            }, this),
                                            columns.map((column)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_table__WEBPACK_IMPORTED_MODULE_2__.TableCell, {
                                                    className: "py-3",
                                                    children: column.render ? column.render(row?.[String(column.key)], row) : String(row?.[String(column.key)] || "")
                                                }, String(column.key), false, {
                                                    fileName: "/home/ubuntu/spark-platform/components/admin/admin-table.tsx",
                                                    lineNumber: 341,
                                                    columnNumber: 23
                                                }, this))
                                        ]
                                    }, index, true, {
                                        fileName: "/home/ubuntu/spark-platform/components/admin/admin-table.tsx",
                                        lineNumber: 315,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/components/admin/admin-table.tsx",
                                lineNumber: 299,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/spark-platform/components/admin/admin-table.tsx",
                        lineNumber: 267,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/ubuntu/spark-platform/components/admin/admin-table.tsx",
                lineNumber: 257,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_table_pagination__WEBPACK_IMPORTED_MODULE_7__.TablePagination, {
                pagination: pagination,
                onPageChange: onPageChange,
                onPageSizeChange: onPageSizeChange,
                loading: loading
            }, void 0, false, {
                fileName: "/home/ubuntu/spark-platform/components/admin/admin-table.tsx",
                lineNumber: 357,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/ubuntu/spark-platform/components/admin/admin-table.tsx",
        lineNumber: 208,
        columnNumber: 5
    }, this);
}


/***/ }),

/***/ "(ssr)/./components/admin/date-filter.tsx":
/*!******************************************!*\
  !*** ./components/admin/date-filter.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateFilter: () => (/* binding */ DateFilter)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ "(ssr)/./components/ui/button.tsx");
/* harmony import */ var _components_ui_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/calendar */ "(ssr)/./components/ui/calendar.tsx");
/* harmony import */ var _components_ui_popover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/popover */ "(ssr)/./components/ui/popover.tsx");
/* harmony import */ var _components_ui_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/badge */ "(ssr)/./components/ui/badge.tsx");
/* harmony import */ var _components_ui_separator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/separator */ "(ssr)/./components/ui/separator.tsx");
/* harmony import */ var _barrel_optimize_names_CalendarIcon_Filter_RotateCcw_X_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=CalendarIcon,Filter,RotateCcw,X!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/filter.js");
/* harmony import */ var _barrel_optimize_names_CalendarIcon_Filter_RotateCcw_X_lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! __barrel_optimize__?names=CalendarIcon,Filter,RotateCcw,X!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/calendar.js");
/* harmony import */ var _barrel_optimize_names_CalendarIcon_Filter_RotateCcw_X_lucide_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! __barrel_optimize__?names=CalendarIcon,Filter,RotateCcw,X!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/rotate-ccw.js");
/* harmony import */ var _barrel_optimize_names_CalendarIcon_Filter_RotateCcw_X_lucide_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! __barrel_optimize__?names=CalendarIcon,Filter,RotateCcw,X!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/x.js");
/* harmony import */ var _barrel_optimize_names_endOfDay_format_startOfDay_subDays_date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=endOfDay,format,startOfDay,subDays!=!date-fns */ "(ssr)/./node_modules/date-fns/startOfDay.mjs");
/* harmony import */ var _barrel_optimize_names_endOfDay_format_startOfDay_subDays_date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=endOfDay,format,startOfDay,subDays!=!date-fns */ "(ssr)/./node_modules/date-fns/endOfDay.mjs");
/* harmony import */ var _barrel_optimize_names_endOfDay_format_startOfDay_subDays_date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=endOfDay,format,startOfDay,subDays!=!date-fns */ "(ssr)/./node_modules/date-fns/subDays.mjs");
/* harmony import */ var _barrel_optimize_names_endOfDay_format_startOfDay_subDays_date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=endOfDay,format,startOfDay,subDays!=!date-fns */ "(ssr)/./node_modules/date-fns/format.mjs");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/lib/utils */ "(ssr)/./lib/utils.ts");
/* __next_internal_client_entry_do_not_use__ DateFilter auto */ 









const QUICK_FILTERS = [
    {
        label: "Today",
        getValue: ()=>({
                startDate: (0,_barrel_optimize_names_endOfDay_format_startOfDay_subDays_date_fns__WEBPACK_IMPORTED_MODULE_8__.startOfDay)(new Date()),
                endDate: (0,_barrel_optimize_names_endOfDay_format_startOfDay_subDays_date_fns__WEBPACK_IMPORTED_MODULE_9__.endOfDay)(new Date()),
                label: "Today"
            })
    },
    {
        label: "7 Days",
        getValue: ()=>({
                startDate: (0,_barrel_optimize_names_endOfDay_format_startOfDay_subDays_date_fns__WEBPACK_IMPORTED_MODULE_8__.startOfDay)((0,_barrel_optimize_names_endOfDay_format_startOfDay_subDays_date_fns__WEBPACK_IMPORTED_MODULE_10__.subDays)(new Date(), 6)),
                endDate: (0,_barrel_optimize_names_endOfDay_format_startOfDay_subDays_date_fns__WEBPACK_IMPORTED_MODULE_9__.endOfDay)(new Date()),
                label: "Last 7 Days"
            })
    },
    {
        label: "30 Days",
        getValue: ()=>({
                startDate: (0,_barrel_optimize_names_endOfDay_format_startOfDay_subDays_date_fns__WEBPACK_IMPORTED_MODULE_8__.startOfDay)((0,_barrel_optimize_names_endOfDay_format_startOfDay_subDays_date_fns__WEBPACK_IMPORTED_MODULE_10__.subDays)(new Date(), 29)),
                endDate: (0,_barrel_optimize_names_endOfDay_format_startOfDay_subDays_date_fns__WEBPACK_IMPORTED_MODULE_9__.endOfDay)(new Date()),
                label: "Last 30 Days"
            })
    },
    {
        label: "90 Days",
        getValue: ()=>({
                startDate: (0,_barrel_optimize_names_endOfDay_format_startOfDay_subDays_date_fns__WEBPACK_IMPORTED_MODULE_8__.startOfDay)((0,_barrel_optimize_names_endOfDay_format_startOfDay_subDays_date_fns__WEBPACK_IMPORTED_MODULE_10__.subDays)(new Date(), 89)),
                endDate: (0,_barrel_optimize_names_endOfDay_format_startOfDay_subDays_date_fns__WEBPACK_IMPORTED_MODULE_9__.endOfDay)(new Date()),
                label: "Last 90 Days"
            })
    }
];
function DateFilter({ onDateRangeChange, className }) {
    const [selectedRange, setSelectedRange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [customStartDate, setCustomStartDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [customEndDate, setCustomEndDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [isCustomOpen, setIsCustomOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [activeFilter, setActiveFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const handleQuickFilter = (filter)=>{
        const range = filter.getValue();
        setSelectedRange(range);
        setActiveFilter(filter.label);
        setCustomStartDate(undefined);
        setCustomEndDate(undefined);
        onDateRangeChange(range);
    };
    const handleCustomRange = ()=>{
        if (customStartDate && customEndDate) {
            if (customStartDate > customEndDate) {
                // Swap dates if start is after end
                const temp = customStartDate;
                setCustomStartDate(customEndDate);
                setCustomEndDate(temp);
            }
            const range = {
                startDate: (0,_barrel_optimize_names_endOfDay_format_startOfDay_subDays_date_fns__WEBPACK_IMPORTED_MODULE_8__.startOfDay)(customStartDate),
                endDate: (0,_barrel_optimize_names_endOfDay_format_startOfDay_subDays_date_fns__WEBPACK_IMPORTED_MODULE_9__.endOfDay)(customEndDate || customStartDate),
                label: `${(0,_barrel_optimize_names_endOfDay_format_startOfDay_subDays_date_fns__WEBPACK_IMPORTED_MODULE_11__.format)(customStartDate, "MMM d")} - ${(0,_barrel_optimize_names_endOfDay_format_startOfDay_subDays_date_fns__WEBPACK_IMPORTED_MODULE_11__.format)(customEndDate || customStartDate, "MMM d, yyyy")}`
            };
            setSelectedRange(range);
            setActiveFilter("custom");
            setIsCustomOpen(false);
            onDateRangeChange(range);
        }
    };
    const handleClearFilter = ()=>{
        setSelectedRange(null);
        setActiveFilter(null);
        setCustomStartDate(undefined);
        setCustomEndDate(undefined);
        onDateRangeChange(null);
    };
    const isCustomRangeValid = customStartDate && customEndDate;
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_7__.cn)("flex items-center gap-3 flex-wrap", className),
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "flex items-center gap-2 text-[#CCCCCC]",
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CalendarIcon_Filter_RotateCcw_X_lucide_react__WEBPACK_IMPORTED_MODULE_12__["default"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "/home/ubuntu/spark-platform/components/admin/date-filter.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                        className: "text-sm font-medium",
                        children: "Filter by Date:"
                    }, void 0, false, {
                        fileName: "/home/ubuntu/spark-platform/components/admin/date-filter.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/ubuntu/spark-platform/components/admin/date-filter.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "flex items-center gap-2",
                children: QUICK_FILTERS.map((filter)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                        variant: activeFilter === filter.label ? "default" : "outline",
                        size: "sm",
                        onClick: ()=>handleQuickFilter(filter),
                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_7__.cn)("text-xs", activeFilter === filter.label ? "bg-[#00FF88] text-black hover:bg-[#00E87A]" : "border-white/20 text-white hover:bg-white/10"),
                        children: filter.label
                    }, filter.label, false, {
                        fileName: "/home/ubuntu/spark-platform/components/admin/date-filter.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "/home/ubuntu/spark-platform/components/admin/date-filter.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_popover__WEBPACK_IMPORTED_MODULE_4__.Popover, {
                open: isCustomOpen,
                onOpenChange: setIsCustomOpen,
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_popover__WEBPACK_IMPORTED_MODULE_4__.PopoverTrigger, {
                        asChild: true,
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                            variant: activeFilter === "custom" ? "default" : "outline",
                            size: "sm",
                            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_7__.cn)("text-xs", activeFilter === "custom" ? "bg-[#00FF88] text-black hover:bg-[#00E87A]" : "border-white/20 text-white hover:bg-white/10"),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CalendarIcon_Filter_RotateCcw_X_lucide_react__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                    className: "w-3 h-3 mr-1"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin/date-filter.tsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this),
                                "Custom Range"
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/spark-platform/components/admin/date-filter.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/ubuntu/spark-platform/components/admin/date-filter.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_popover__WEBPACK_IMPORTED_MODULE_4__.PopoverContent, {
                        className: "w-auto p-0 bg-[#1A1A1A] border border-white/20",
                        align: "start",
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "p-4 space-y-4",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    className: "text-sm font-medium text-white mb-3",
                                    children: "Select Date Range"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin/date-filter.tsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                                                    className: "text-xs text-[#CCCCCC] mb-2 block",
                                                    children: "Start Date"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/components/admin/date-filter.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_popover__WEBPACK_IMPORTED_MODULE_4__.Popover, {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_popover__WEBPACK_IMPORTED_MODULE_4__.PopoverTrigger, {
                                                            asChild: true,
                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                                                variant: "outline",
                                                                size: "sm",
                                                                className: "w-full justify-start text-left border-white/20 text-white hover:bg-white/10",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CalendarIcon_Filter_RotateCcw_X_lucide_react__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                                                        className: "mr-2 h-3 w-3"
                                                                    }, void 0, false, {
                                                                        fileName: "/home/ubuntu/spark-platform/components/admin/date-filter.tsx",
                                                                        lineNumber: 171,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    customStartDate ? (0,_barrel_optimize_names_endOfDay_format_startOfDay_subDays_date_fns__WEBPACK_IMPORTED_MODULE_11__.format)(customStartDate, "MMM d, yyyy") : "Pick start"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "/home/ubuntu/spark-platform/components/admin/date-filter.tsx",
                                                                lineNumber: 166,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/spark-platform/components/admin/date-filter.tsx",
                                                            lineNumber: 165,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_popover__WEBPACK_IMPORTED_MODULE_4__.PopoverContent, {
                                                            className: "w-auto p-0 bg-[#1A1A1A] border border-white/20",
                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_calendar__WEBPACK_IMPORTED_MODULE_3__.Calendar, {
                                                                mode: "single",
                                                                selected: customStartDate,
                                                                onSelect: setCustomStartDate,
                                                                disabled: (date)=>date > new Date() || (customEndDate ? date > customEndDate : false),
                                                                initialFocus: true,
                                                                className: "text-white"
                                                            }, void 0, false, {
                                                                fileName: "/home/ubuntu/spark-platform/components/admin/date-filter.tsx",
                                                                lineNumber: 176,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/spark-platform/components/admin/date-filter.tsx",
                                                            lineNumber: 175,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/ubuntu/spark-platform/components/admin/date-filter.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/spark-platform/components/admin/date-filter.tsx",
                                            lineNumber: 162,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                                                    className: "text-xs text-[#CCCCCC] mb-2 block",
                                                    children: "End Date"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/components/admin/date-filter.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_popover__WEBPACK_IMPORTED_MODULE_4__.Popover, {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_popover__WEBPACK_IMPORTED_MODULE_4__.PopoverTrigger, {
                                                            asChild: true,
                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                                                variant: "outline",
                                                                size: "sm",
                                                                className: "w-full justify-start text-left border-white/20 text-white hover:bg-white/10",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CalendarIcon_Filter_RotateCcw_X_lucide_react__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                                                        className: "mr-2 h-3 w-3"
                                                                    }, void 0, false, {
                                                                        fileName: "/home/ubuntu/spark-platform/components/admin/date-filter.tsx",
                                                                        lineNumber: 198,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    customEndDate ? (0,_barrel_optimize_names_endOfDay_format_startOfDay_subDays_date_fns__WEBPACK_IMPORTED_MODULE_11__.format)(customEndDate, "MMM d, yyyy") : "Pick end"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "/home/ubuntu/spark-platform/components/admin/date-filter.tsx",
                                                                lineNumber: 193,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/spark-platform/components/admin/date-filter.tsx",
                                                            lineNumber: 192,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_popover__WEBPACK_IMPORTED_MODULE_4__.PopoverContent, {
                                                            className: "w-auto p-0 bg-[#1A1A1A] border border-white/20",
                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_calendar__WEBPACK_IMPORTED_MODULE_3__.Calendar, {
                                                                mode: "single",
                                                                selected: customEndDate,
                                                                onSelect: setCustomEndDate,
                                                                disabled: (date)=>date > new Date() || (customStartDate ? date < customStartDate : false),
                                                                initialFocus: true,
                                                                className: "text-white"
                                                            }, void 0, false, {
                                                                fileName: "/home/ubuntu/spark-platform/components/admin/date-filter.tsx",
                                                                lineNumber: 203,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/spark-platform/components/admin/date-filter.tsx",
                                                            lineNumber: 202,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/ubuntu/spark-platform/components/admin/date-filter.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/spark-platform/components/admin/date-filter.tsx",
                                            lineNumber: 189,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin/date-filter.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_separator__WEBPACK_IMPORTED_MODULE_6__.Separator, {
                                    className: "bg-white/10"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin/date-filter.tsx",
                                    lineNumber: 216,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    className: "flex items-center justify-between gap-2",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                            variant: "outline",
                                            size: "sm",
                                            onClick: ()=>{
                                                setCustomStartDate(undefined);
                                                setCustomEndDate(undefined);
                                            },
                                            className: "border-white/20 text-white hover:bg-white/10",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CalendarIcon_Filter_RotateCcw_X_lucide_react__WEBPACK_IMPORTED_MODULE_14__["default"], {
                                                    className: "w-3 h-3 mr-1"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/components/admin/date-filter.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 17
                                                }, this),
                                                "Reset"
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/spark-platform/components/admin/date-filter.tsx",
                                            lineNumber: 219,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                            size: "sm",
                                            onClick: handleCustomRange,
                                            disabled: !isCustomRangeValid,
                                            className: "bg-[#00FF88] text-black hover:bg-[#00E87A] disabled:opacity-50",
                                            children: "Apply Range"
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/spark-platform/components/admin/date-filter.tsx",
                                            lineNumber: 232,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin/date-filter.tsx",
                                    lineNumber: 218,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/spark-platform/components/admin/date-filter.tsx",
                            lineNumber: 157,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/ubuntu/spark-platform/components/admin/date-filter.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/ubuntu/spark-platform/components/admin/date-filter.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            selectedRange && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_separator__WEBPACK_IMPORTED_MODULE_6__.Separator, {
                        orientation: "vertical",
                        className: "h-6 bg-white/20"
                    }, void 0, false, {
                        fileName: "/home/ubuntu/spark-platform/components/admin/date-filter.tsx",
                        lineNumber: 248,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_5__.Badge, {
                                variant: "secondary",
                                className: "bg-[#00FF88]/20 text-[#00FF88] border-[#00FF88]/30",
                                children: selectedRange.label
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/components/admin/date-filter.tsx",
                                lineNumber: 250,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                variant: "ghost",
                                size: "sm",
                                onClick: handleClearFilter,
                                className: "h-6 w-6 p-0 text-[#CCCCCC] hover:text-white hover:bg-white/10",
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CalendarIcon_Filter_RotateCcw_X_lucide_react__WEBPACK_IMPORTED_MODULE_15__["default"], {
                                    className: "w-3 h-3"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin/date-filter.tsx",
                                    lineNumber: 262,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/components/admin/date-filter.tsx",
                                lineNumber: 256,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/spark-platform/components/admin/date-filter.tsx",
                        lineNumber: 249,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "/home/ubuntu/spark-platform/components/admin/date-filter.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}


/***/ }),

/***/ "(ssr)/./components/admin/filter-bar.tsx":
/*!*****************************************!*\
  !*** ./components/admin/filter-bar.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterBar: () => (/* binding */ FilterBar)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ "(ssr)/./components/ui/button.tsx");
/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/input */ "(ssr)/./components/ui/input.tsx");
/* harmony import */ var _components_ui_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/badge */ "(ssr)/./components/ui/badge.tsx");
/* harmony import */ var _components_ui_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/select */ "(ssr)/./components/ui/select.tsx");
/* harmony import */ var _components_ui_popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/popover */ "(ssr)/./components/ui/popover.tsx");
/* harmony import */ var _components_ui_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/ui/calendar */ "(ssr)/./components/ui/calendar.tsx");
/* harmony import */ var _components_ui_separator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/ui/separator */ "(ssr)/./components/ui/separator.tsx");
/* harmony import */ var _barrel_optimize_names_Calendar_ChevronDown_Search_X_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Calendar,ChevronDown,Search,X!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/search.js");
/* harmony import */ var _barrel_optimize_names_Calendar_ChevronDown_Search_X_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=Calendar,ChevronDown,Search,X!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/chevron-down.js");
/* harmony import */ var _barrel_optimize_names_Calendar_ChevronDown_Search_X_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=Calendar,ChevronDown,Search,X!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/calendar.js");
/* harmony import */ var _barrel_optimize_names_Calendar_ChevronDown_Search_X_lucide_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! __barrel_optimize__?names=Calendar,ChevronDown,Search,X!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/x.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/lib/utils */ "(ssr)/./lib/utils.ts");
/* harmony import */ var _barrel_optimize_names_format_date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! __barrel_optimize__?names=format!=!date-fns */ "(ssr)/./node_modules/date-fns/format.mjs");
/* __next_internal_client_entry_do_not_use__ FilterBar auto */ 











function FilterBar({ filters, filterState, onFilterChange, onClearFilters, onApplyFilters, loading = false, showApplyButton = false, className }) {
    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [isExpanded, setIsExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // Debounced search effect - Fixed to prevent infinite loops
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const timer = setTimeout(()=>{
            const searchFilter = filters.find((f)=>f.type === "search");
            if (searchFilter) {
                onFilterChange(searchFilter.key, searchTerm);
            }
        }, 300);
        return ()=>clearTimeout(timer);
    }, [
        searchTerm
    ]) // Removed onFilterChange and filters from dependencies to prevent infinite loops
    ;
    // Initialize search term from filter state - Fixed to run only once
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const searchFilter = filters.find((f)=>f.type === "search");
        if (searchFilter && filterState[searchFilter.key] && !searchTerm) {
            setSearchTerm(filterState[searchFilter.key]);
        }
    }, []) // Run only once on mount
    ;
    const getActiveFilterCount = ()=>{
        return Object.values(filterState).filter((value)=>{
            if (value === null || value === "") return false;
            if (Array.isArray(value)) return value.length > 0;
            if (typeof value === "object" && value !== null) return true;
            return true;
        }).length;
    };
    const renderFilter = (filter)=>{
        const value = filterState[filter.key];
        switch(filter.type){
            case "search":
                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "relative flex-1 min-w-[200px] max-w-[300px]",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Calendar_ChevronDown_Search_X_lucide_react__WEBPACK_IMPORTED_MODULE_10__["default"], {
                            className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4"
                        }, void 0, false, {
                            fileName: "/home/ubuntu/spark-platform/components/admin/filter-bar.tsx",
                            lineNumber: 104,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {
                            placeholder: filter.placeholder || `Search ${filter.label.toLowerCase()}...`,
                            value: searchTerm,
                            onChange: (e)=>setSearchTerm(e.target.value),
                            className: "pl-10",
                            disabled: loading
                        }, void 0, false, {
                            fileName: "/home/ubuntu/spark-platform/components/admin/filter-bar.tsx",
                            lineNumber: 105,
                            columnNumber: 13
                        }, this)
                    ]
                }, filter.key, true, {
                    fileName: "/home/ubuntu/spark-platform/components/admin/filter-bar.tsx",
                    lineNumber: 103,
                    columnNumber: 11
                }, this);
            case "select":
                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "min-w-[140px]",
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.Select, {
                        value: value || "all",
                        onValueChange: (newValue)=>onFilterChange(filter.key, newValue === "all" ? null : newValue),
                        disabled: loading,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectTrigger, {
                                className: "w-full",
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectValue, {
                                    placeholder: filter.label
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin/filter-bar.tsx",
                                    lineNumber: 124,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/components/admin/filter-bar.tsx",
                                lineNumber: 123,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectContent, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectItem, {
                                        value: "all",
                                        children: [
                                            "All ",
                                            filter.label
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/ubuntu/spark-platform/components/admin/filter-bar.tsx",
                                        lineNumber: 127,
                                        columnNumber: 17
                                    }, this),
                                    filter.options?.map((option)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectItem, {
                                            value: option.value,
                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                className: "flex items-center justify-between w-full",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                        children: option.label
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/spark-platform/components/admin/filter-bar.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 23
                                                    }, this),
                                                    filter.showCount && option.count !== undefined && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_4__.Badge, {
                                                        variant: "secondary",
                                                        className: "ml-2 text-xs",
                                                        children: option.count
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/spark-platform/components/admin/filter-bar.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/ubuntu/spark-platform/components/admin/filter-bar.tsx",
                                                lineNumber: 130,
                                                columnNumber: 21
                                            }, this)
                                        }, option.value, false, {
                                            fileName: "/home/ubuntu/spark-platform/components/admin/filter-bar.tsx",
                                            lineNumber: 129,
                                            columnNumber: 19
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/spark-platform/components/admin/filter-bar.tsx",
                                lineNumber: 126,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/spark-platform/components/admin/filter-bar.tsx",
                        lineNumber: 118,
                        columnNumber: 13
                    }, this)
                }, filter.key, false, {
                    fileName: "/home/ubuntu/spark-platform/components/admin/filter-bar.tsx",
                    lineNumber: 117,
                    columnNumber: 11
                }, this);
            case "multiselect":
                const selectedValues = value || [];
                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "min-w-[160px]",
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_popover__WEBPACK_IMPORTED_MODULE_6__.Popover, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_popover__WEBPACK_IMPORTED_MODULE_6__.PopoverTrigger, {
                                asChild: true,
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    variant: "outline",
                                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_9__.cn)("w-full justify-between", selectedValues.length > 0 && "border-primary"),
                                    disabled: loading,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                            className: "truncate",
                                            children: selectedValues.length === 0 ? filter.label : selectedValues.length === 1 ? filter.options?.find((opt)=>opt.value === selectedValues[0])?.label : `${selectedValues.length} selected`
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/spark-platform/components/admin/filter-bar.tsx",
                                            lineNumber: 159,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Calendar_ChevronDown_Search_X_lucide_react__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                            className: "ml-2 h-4 w-4 shrink-0 opacity-50"
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/spark-platform/components/admin/filter-bar.tsx",
                                            lineNumber: 167,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin/filter-bar.tsx",
                                    lineNumber: 151,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/components/admin/filter-bar.tsx",
                                lineNumber: 150,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_popover__WEBPACK_IMPORTED_MODULE_6__.PopoverContent, {
                                className: "w-48 p-2",
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                            variant: "ghost",
                                            size: "sm",
                                            className: "w-full justify-start text-xs",
                                            onClick: ()=>onFilterChange(filter.key, []),
                                            children: "Clear All"
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/spark-platform/components/admin/filter-bar.tsx",
                                            lineNumber: 172,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_separator__WEBPACK_IMPORTED_MODULE_8__.Separator, {}, void 0, false, {
                                            fileName: "/home/ubuntu/spark-platform/components/admin/filter-bar.tsx",
                                            lineNumber: 180,
                                            columnNumber: 19
                                        }, this),
                                        filter.options?.map((option)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                                variant: selectedValues.includes(option.value) ? "default" : "ghost",
                                                size: "sm",
                                                className: "w-full justify-start text-xs",
                                                onClick: ()=>{
                                                    const newValues = selectedValues.includes(option.value) ? selectedValues.filter((v)=>v !== option.value) : [
                                                        ...selectedValues,
                                                        option.value
                                                    ];
                                                    onFilterChange(filter.key, newValues);
                                                },
                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                    className: "flex items-center justify-between w-full",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                            children: option.label
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/spark-platform/components/admin/filter-bar.tsx",
                                                            lineNumber: 195,
                                                            columnNumber: 25
                                                        }, this),
                                                        filter.showCount && option.count !== undefined && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_4__.Badge, {
                                                            variant: "secondary",
                                                            className: "ml-2 text-xs",
                                                            children: option.count
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/spark-platform/components/admin/filter-bar.tsx",
                                                            lineNumber: 197,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/ubuntu/spark-platform/components/admin/filter-bar.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 23
                                                }, this)
                                            }, option.value, false, {
                                                fileName: "/home/ubuntu/spark-platform/components/admin/filter-bar.tsx",
                                                lineNumber: 182,
                                                columnNumber: 21
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin/filter-bar.tsx",
                                    lineNumber: 171,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/components/admin/filter-bar.tsx",
                                lineNumber: 170,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/spark-platform/components/admin/filter-bar.tsx",
                        lineNumber: 149,
                        columnNumber: 13
                    }, this)
                }, filter.key, false, {
                    fileName: "/home/ubuntu/spark-platform/components/admin/filter-bar.tsx",
                    lineNumber: 148,
                    columnNumber: 11
                }, this);
            case "daterange":
                const dateValue = value;
                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "min-w-[200px]",
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_popover__WEBPACK_IMPORTED_MODULE_6__.Popover, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_popover__WEBPACK_IMPORTED_MODULE_6__.PopoverTrigger, {
                                asChild: true,
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    variant: "outline",
                                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_9__.cn)("w-full justify-start text-left font-normal", !dateValue && "text-muted-foreground", dateValue && "border-primary"),
                                    disabled: loading,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Calendar_ChevronDown_Search_X_lucide_react__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                            className: "mr-2 h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/spark-platform/components/admin/filter-bar.tsx",
                                            lineNumber: 225,
                                            columnNumber: 19
                                        }, this),
                                        dateValue ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                (0,_barrel_optimize_names_format_date_fns__WEBPACK_IMPORTED_MODULE_13__.format)(dateValue.start, "LLL dd"),
                                                " - ",
                                                (0,_barrel_optimize_names_format_date_fns__WEBPACK_IMPORTED_MODULE_13__.format)(dateValue.end, "LLL dd")
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                            children: filter.label
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/spark-platform/components/admin/filter-bar.tsx",
                                            lineNumber: 231,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin/filter-bar.tsx",
                                    lineNumber: 216,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/components/admin/filter-bar.tsx",
                                lineNumber: 215,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_popover__WEBPACK_IMPORTED_MODULE_6__.PopoverContent, {
                                className: "w-auto p-0",
                                align: "start",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_calendar__WEBPACK_IMPORTED_MODULE_7__.Calendar, {
                                        initialFocus: true,
                                        mode: "range",
                                        selected: dateValue ? {
                                            from: dateValue.start,
                                            to: dateValue.end
                                        } : undefined,
                                        onSelect: (range)=>{
                                            if (range?.from && range?.to) {
                                                onFilterChange(filter.key, {
                                                    start: range.from,
                                                    end: range.to
                                                });
                                            } else {
                                                onFilterChange(filter.key, null);
                                            }
                                        },
                                        numberOfMonths: 2
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/spark-platform/components/admin/filter-bar.tsx",
                                        lineNumber: 236,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: "p-3 border-t",
                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                            variant: "ghost",
                                            size: "sm",
                                            className: "w-full",
                                            onClick: ()=>onFilterChange(filter.key, null),
                                            children: "Clear Date Range"
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/spark-platform/components/admin/filter-bar.tsx",
                                            lineNumber: 250,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/spark-platform/components/admin/filter-bar.tsx",
                                        lineNumber: 249,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/spark-platform/components/admin/filter-bar.tsx",
                                lineNumber: 235,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/spark-platform/components/admin/filter-bar.tsx",
                        lineNumber: 214,
                        columnNumber: 13
                    }, this)
                }, filter.key, false, {
                    fileName: "/home/ubuntu/spark-platform/components/admin/filter-bar.tsx",
                    lineNumber: 213,
                    columnNumber: 11
                }, this);
            default:
                return null;
        }
    };
    const activeFilters = getActiveFilterCount();
    const searchFilter = filters.find((f)=>f.type === "search");
    const otherFilters = filters.filter((f)=>f.type !== "search");
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_9__.cn)("space-y-4", className),
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    searchFilter && renderFilter(searchFilter),
                    otherFilters.map(renderFilter),
                    activeFilters > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                        variant: "ghost",
                        size: "sm",
                        onClick: onClearFilters,
                        className: "text-muted-foreground hover:text-foreground flex items-center gap-1 ml-2",
                        disabled: loading,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Calendar_ChevronDown_Search_X_lucide_react__WEBPACK_IMPORTED_MODULE_14__["default"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/components/admin/filter-bar.tsx",
                                lineNumber: 292,
                                columnNumber: 13
                            }, this),
                            "Clear All"
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/spark-platform/components/admin/filter-bar.tsx",
                        lineNumber: 285,
                        columnNumber: 11
                    }, this),
                    showApplyButton && onApplyFilters && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                        onClick: onApplyFilters,
                        size: "sm",
                        disabled: loading,
                        className: "ml-auto",
                        children: "Apply Filters"
                    }, void 0, false, {
                        fileName: "/home/ubuntu/spark-platform/components/admin/filter-bar.tsx",
                        lineNumber: 299,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/ubuntu/spark-platform/components/admin/filter-bar.tsx",
                lineNumber: 276,
                columnNumber: 7
            }, this),
            activeFilters > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "flex flex-wrap items-center gap-2",
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                        className: "text-sm text-muted-foreground",
                        children: "Active filters:"
                    }, void 0, false, {
                        fileName: "/home/ubuntu/spark-platform/components/admin/filter-bar.tsx",
                        lineNumber: 313,
                        columnNumber: 11
                    }, this),
                    Object.entries(filterState).map(([key, value])=>{
                        if (!value) return null;
                        const filter = filters.find((f)=>f.key === key);
                        if (!filter) return null;
                        if (Array.isArray(value) && value.length === 0) return null;
                        if (typeof value === "string" && value === "") return null;
                        let displayValue = "";
                        if (typeof value === "string") {
                            const option = filter.options?.find((opt)=>opt.value === value);
                            displayValue = option?.label || value;
                        } else if (Array.isArray(value)) {
                            displayValue = `${value.length} selected`;
                        } else if (typeof value === "object" && value !== null) {
                            const dateValue = value;
                            displayValue = `${(0,_barrel_optimize_names_format_date_fns__WEBPACK_IMPORTED_MODULE_13__.format)(dateValue.start, "MMM dd")} - ${(0,_barrel_optimize_names_format_date_fns__WEBPACK_IMPORTED_MODULE_13__.format)(dateValue.end, "MMM dd")}`;
                        }
                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_4__.Badge, {
                            variant: "secondary",
                            className: "flex items-center gap-1",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                    className: "text-xs",
                                    children: [
                                        filter.label,
                                        ": ",
                                        displayValue
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin/filter-bar.tsx",
                                    lineNumber: 340,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    variant: "ghost",
                                    size: "sm",
                                    className: "h-auto p-0 w-4 h-4 hover:bg-transparent",
                                    onClick: ()=>onFilterChange(key, filter.type === "multiselect" ? [] : null),
                                    disabled: loading,
                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Calendar_ChevronDown_Search_X_lucide_react__WEBPACK_IMPORTED_MODULE_14__["default"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/spark-platform/components/admin/filter-bar.tsx",
                                        lineNumber: 348,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin/filter-bar.tsx",
                                    lineNumber: 341,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, key, true, {
                            fileName: "/home/ubuntu/spark-platform/components/admin/filter-bar.tsx",
                            lineNumber: 335,
                            columnNumber: 15
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "/home/ubuntu/spark-platform/components/admin/filter-bar.tsx",
                lineNumber: 312,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/ubuntu/spark-platform/components/admin/filter-bar.tsx",
        lineNumber: 274,
        columnNumber: 5
    }, this);
}


/***/ }),

/***/ "(ssr)/./components/admin/filter-utils.ts":
/*!******************************************!*\
  !*** ./components/admin/filter-utils.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filtersToSearchParams: () => (/* binding */ filtersToSearchParams),
/* harmony export */   getFilterSummary: () => (/* binding */ getFilterSummary),
/* harmony export */   hasActiveFilters: () => (/* binding */ hasActiveFilters),
/* harmony export */   mergeFilters: () => (/* binding */ mergeFilters),
/* harmony export */   resetFilters: () => (/* binding */ resetFilters),
/* harmony export */   searchParamsToFilters: () => (/* binding */ searchParamsToFilters)
/* harmony export */ });
// Convert filter state to URL search parameters
const filtersToSearchParams = (filters)=>{
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value])=>{
        if (value === null || value === undefined || value === "") return;
        if (Array.isArray(value)) {
            if (value.length > 0) {
                params.append(key, value.join(","));
            }
        } else if (typeof value === "object" && value !== null) {
            // Handle date range
            const dateRange = value;
            params.append(`${key}Start`, dateRange.start.toISOString());
            params.append(`${key}End`, dateRange.end.toISOString());
        } else {
            params.append(key, String(value));
        }
    });
    return params;
};
// Convert URL search parameters back to filter state
const searchParamsToFilters = (searchParams)=>{
    const filters = {};
    searchParams.forEach((value, key)=>{
        if (key.endsWith("Start")) {
            const baseKey = key.replace("Start", "");
            const endValue = searchParams.get(`${baseKey}End`);
            if (endValue) {
                filters[baseKey] = {
                    start: new Date(value),
                    end: new Date(endValue)
                };
            }
        } else if (key.endsWith("End")) {
            // Skip, handled by Start case
            return;
        } else if (value.includes(",")) {
            filters[key] = value.split(",");
        } else {
            filters[key] = value;
        }
    });
    return filters;
};
// Check if filters have any active values
const hasActiveFilters = (filters)=>{
    return Object.values(filters).some((value)=>{
        if (value === null || value === undefined || value === "") return false;
        if (Array.isArray(value)) return value.length > 0;
        if (typeof value === "object" && value !== null) return true;
        return true;
    });
};
// Get filter summary for display
const getFilterSummary = (filters)=>{
    const activeFilters = Object.entries(filters).filter(([_, value])=>{
        if (value === null || value === undefined || value === "") return false;
        if (Array.isArray(value)) return value.length > 0;
        if (typeof value === "object" && value !== null) return true;
        return true;
    });
    if (activeFilters.length === 0) return "No filters applied";
    if (activeFilters.length === 1) return "1 filter applied";
    return `${activeFilters.length} filters applied`;
};
// Reset filter state
const resetFilters = ()=>({});
// Merge filter states (for combining default filters with user filters)
const mergeFilters = (defaultFilters, userFilters)=>{
    return {
        ...defaultFilters,
        ...userFilters
    };
};


/***/ }),

/***/ "(ssr)/./components/admin/stats-card.tsx":
/*!*****************************************!*\
  !*** ./components/admin/stats-card.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatsCard: () => (/* binding */ StatsCard)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/card */ "(ssr)/./components/ui/card.tsx");
/* harmony import */ var _barrel_optimize_names_AlertTriangle_Minus_TrendingDown_TrendingUp_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=AlertTriangle,Minus,TrendingDown,TrendingUp!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/triangle-alert.js");
/* harmony import */ var _barrel_optimize_names_AlertTriangle_Minus_TrendingDown_TrendingUp_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=AlertTriangle,Minus,TrendingDown,TrendingUp!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/trending-up.js");
/* harmony import */ var _barrel_optimize_names_AlertTriangle_Minus_TrendingDown_TrendingUp_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=AlertTriangle,Minus,TrendingDown,TrendingUp!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/trending-down.js");
/* harmony import */ var _barrel_optimize_names_AlertTriangle_Minus_TrendingDown_TrendingUp_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=AlertTriangle,Minus,TrendingDown,TrendingUp!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/minus.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/utils */ "(ssr)/./lib/utils.ts");
/* __next_internal_client_entry_do_not_use__ StatsCard auto */ 



const colorClasses = {
    blue: "text-[#00FF88] bg-[#00FF88]/20 border-[#00FF88]/30",
    green: "text-[#10B981] bg-[#10B981]/20 border-[#10B981]/30",
    amber: "text-[#f5d565] bg-[#f5d565]/20 border-[#f5d565]/30",
    red: "text-red-400 bg-red-500/20 border-red-500/30",
    purple: "text-[#FCD34D] bg-[#FCD34D]/20 border-[#FCD34D]/30",
    slate: "text-[#CCCCCC] bg-white/10 border-white/20"
};
function StatsCard({ title, value, change, icon, color = "slate", urgent = false, description }) {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.Card, {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("relative transition-all duration-200 hover:shadow-lg bg-gradient-to-br from-[#1A1A1A] to-[#252529] border border-white/20 hover:border-white/30 min-h-[80px]", urgent && "ring-2 ring-[#f5d565]/50 bg-gradient-to-br from-[#f5d565]/10 to-[#FCD34D]/5"),
        children: [
            urgent && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "absolute -top-1 -right-1",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "w-2 h-2 bg-[#f5d565] rounded-full animate-pulse"
                }, void 0, false, {
                    fileName: "/home/ubuntu/spark-platform/components/admin/stats-card.tsx",
                    lineNumber: 48,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "/home/ubuntu/spark-platform/components/admin/stats-card.tsx",
                lineNumber: 47,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "p-2 h-full",
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "flex items-start justify-between mb-1",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "flex items-center gap-1.5 flex-1 min-w-0",
                                children: [
                                    icon && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("w-6 h-6 rounded flex items-center justify-center flex-shrink-0", colorClasses[color]),
                                        children: icon
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/spark-platform/components/admin/stats-card.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: "text-xs font-semibold text-white leading-tight truncate",
                                        children: title
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/spark-platform/components/admin/stats-card.tsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/spark-platform/components/admin/stats-card.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            urgent && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "flex-shrink-0 ml-1",
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertTriangle_Minus_TrendingDown_TrendingUp_lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                    className: "w-4 h-4 text-[#f5d565]"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin/stats-card.tsx",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/components/admin/stats-card.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/spark-platform/components/admin/stats-card.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "mb-1",
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "text-xl font-bold text-white leading-tight truncate",
                            children: value
                        }, void 0, false, {
                            fileName: "/home/ubuntu/spark-platform/components/admin/stats-card.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/ubuntu/spark-platform/components/admin/stats-card.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "flex items-center justify-between",
                        children: [
                            change && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "flex items-center",
                                children: [
                                    change.type === "increase" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: "flex items-center text-[#10B981]",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertTriangle_Minus_TrendingDown_TrendingUp_lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                                className: "w-3 h-3 mr-1"
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/spark-platform/components/admin/stats-card.tsx",
                                                lineNumber: 95,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                className: "text-xs font-medium",
                                                children: [
                                                    "+",
                                                    change.value,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/ubuntu/spark-platform/components/admin/stats-card.tsx",
                                                lineNumber: 96,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/ubuntu/spark-platform/components/admin/stats-card.tsx",
                                        lineNumber: 94,
                                        columnNumber: 17
                                    }, this),
                                    change.type === "decrease" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: "flex items-center text-red-400",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertTriangle_Minus_TrendingDown_TrendingUp_lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                                className: "w-3 h-3 mr-1"
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/spark-platform/components/admin/stats-card.tsx",
                                                lineNumber: 101,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                className: "text-xs font-medium",
                                                children: [
                                                    change.value,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/ubuntu/spark-platform/components/admin/stats-card.tsx",
                                                lineNumber: 102,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/ubuntu/spark-platform/components/admin/stats-card.tsx",
                                        lineNumber: 100,
                                        columnNumber: 17
                                    }, this),
                                    change.type === "neutral" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: "flex items-center text-[#CCCCCC]",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertTriangle_Minus_TrendingDown_TrendingUp_lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                                className: "w-3 h-3 mr-1"
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/spark-platform/components/admin/stats-card.tsx",
                                                lineNumber: 107,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                className: "text-xs font-medium",
                                                children: "0%"
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/spark-platform/components/admin/stats-card.tsx",
                                                lineNumber: 108,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/ubuntu/spark-platform/components/admin/stats-card.tsx",
                                        lineNumber: 106,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/spark-platform/components/admin/stats-card.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this),
                            description && !change && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "flex items-center flex-1 min-w-0",
                                children: [
                                    urgent && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertTriangle_Minus_TrendingDown_TrendingUp_lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                        className: "w-3 h-3 text-[#f5d565] mr-1 flex-shrink-0"
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/spark-platform/components/admin/stats-card.tsx",
                                        lineNumber: 117,
                                        columnNumber: 26
                                    }, this),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("text-xs leading-tight truncate", urgent ? "text-[#f5d565] font-medium" : "text-[#CCCCCC]"),
                                        children: description
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/spark-platform/components/admin/stats-card.tsx",
                                        lineNumber: 118,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/spark-platform/components/admin/stats-card.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/spark-platform/components/admin/stats-card.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/ubuntu/spark-platform/components/admin/stats-card.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/ubuntu/spark-platform/components/admin/stats-card.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}


/***/ }),

/***/ "(ssr)/./components/admin/table-pagination.tsx":
/*!***********************************************!*\
  !*** ./components/admin/table-pagination.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TablePagination: () => (/* binding */ TablePagination)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ "(ssr)/./components/ui/button.tsx");
/* harmony import */ var _components_ui_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/select */ "(ssr)/./components/ui/select.tsx");
/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/input */ "(ssr)/./components/ui/input.tsx");
/* harmony import */ var _barrel_optimize_names_ChevronLeft_ChevronRight_ChevronsLeft_ChevronsRight_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronLeft,ChevronRight,ChevronsLeft,ChevronsRight!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/chevrons-left.js");
/* harmony import */ var _barrel_optimize_names_ChevronLeft_ChevronRight_ChevronsLeft_ChevronsRight_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronLeft,ChevronRight,ChevronsLeft,ChevronsRight!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/chevron-left.js");
/* harmony import */ var _barrel_optimize_names_ChevronLeft_ChevronRight_ChevronsLeft_ChevronsRight_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronLeft,ChevronRight,ChevronsLeft,ChevronsRight!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/chevron-right.js");
/* harmony import */ var _barrel_optimize_names_ChevronLeft_ChevronRight_ChevronsLeft_ChevronsRight_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronLeft,ChevronRight,ChevronsLeft,ChevronsRight!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/chevrons-right.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/utils */ "(ssr)/./lib/utils.ts");
/* __next_internal_client_entry_do_not_use__ TablePagination auto */ 






function TablePagination({ pagination, onPageChange, onPageSizeChange, loading = false, className }) {
    const [jumpToPage, setJumpToPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { page, pageSize, total, totalPages } = pagination;
    const startIndex = (page - 1) * pageSize + 1;
    const endIndex = Math.min(page * pageSize, total);
    // Debug logging for pagination state
    console.log("TablePagination: Current state", {
        page,
        pageSize,
        total,
        totalPages,
        loading,
        startIndex,
        endIndex
    });
    const handlePageChange = (newPage)=>{
        console.log("TablePagination: handlePageChange called", {
            newPage,
            currentPage: page,
            totalPages,
            loading,
            isValid: newPage >= 1 && newPage <= totalPages && newPage !== page && !loading
        });
        if (newPage >= 1 && newPage <= totalPages && newPage !== page && !loading) {
            console.log("TablePagination: Calling onPageChange with page:", newPage);
            onPageChange(newPage);
        } else {
            console.log("TablePagination: Page change blocked - invalid conditions");
        }
    };
    const handlePageSizeChange = (newPageSize)=>{
        console.log("TablePagination: handlePageSizeChange called", {
            newPageSize,
            currentPageSize: pageSize,
            loading
        });
        if (newPageSize !== pageSize && !loading) {
            console.log("TablePagination: Calling onPageSizeChange with pageSize:", newPageSize);
            onPageSizeChange(newPageSize);
        } else {
            console.log("TablePagination: PageSize change blocked - invalid conditions");
        }
    };
    const handleJumpToPage = (e)=>{
        e.preventDefault();
        const pageNumber = parseInt(jumpToPage);
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            handlePageChange(pageNumber);
            setJumpToPage("");
        }
    };
    const getVisiblePages = ()=>{
        const maxVisible = 5;
        const half = Math.floor(maxVisible / 2);
        let start = Math.max(1, page - half);
        let end = Math.min(totalPages, start + maxVisible - 1);
        if (end - start < maxVisible - 1) {
            start = Math.max(1, end - maxVisible + 1);
        }
        return Array.from({
            length: end - start + 1
        }, (_, i)=>start + i);
    };
    // Always show pagination controls if there's data, regardless of page count
    if (total === 0) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)("flex items-center justify-between gap-4 flex-wrap bg-gradient-to-br from-[#1A1A1A] to-[#252529] border border-white/20 rounded-lg p-4 mt-4 sticky bottom-0 z-10", className),
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "text-sm text-[#CCCCCC]",
                children: total > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        "Showing ",
                        startIndex.toLocaleString(),
                        " to ",
                        endIndex.toLocaleString(),
                        " of",
                        " ",
                        total.toLocaleString(),
                        " results"
                    ]
                }, void 0, true) : "No results found"
            }, void 0, false, {
                fileName: "/home/ubuntu/spark-platform/components/admin/table-pagination.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                className: "text-sm text-[#CCCCCC] whitespace-nowrap",
                                children: "Show:"
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/components/admin/table-pagination.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_3__.Select, {
                                value: pageSize.toString(),
                                onValueChange: (value)=>handlePageSizeChange(parseInt(value)),
                                disabled: loading,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_3__.SelectTrigger, {
                                        className: "w-20",
                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_3__.SelectValue, {}, void 0, false, {
                                            fileName: "/home/ubuntu/spark-platform/components/admin/table-pagination.tsx",
                                            lineNumber: 137,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/spark-platform/components/admin/table-pagination.tsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_3__.SelectContent, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_3__.SelectItem, {
                                                value: "20",
                                                children: "20"
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/spark-platform/components/admin/table-pagination.tsx",
                                                lineNumber: 140,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_3__.SelectItem, {
                                                value: "50",
                                                children: "50"
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/spark-platform/components/admin/table-pagination.tsx",
                                                lineNumber: 141,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_3__.SelectItem, {
                                                value: "100",
                                                children: "100"
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/spark-platform/components/admin/table-pagination.tsx",
                                                lineNumber: 142,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/ubuntu/spark-platform/components/admin/table-pagination.tsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/spark-platform/components/admin/table-pagination.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/spark-platform/components/admin/table-pagination.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    totalPages > 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
                        onSubmit: handleJumpToPage,
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                className: "text-sm text-[#CCCCCC] whitespace-nowrap",
                                children: "Page:"
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/components/admin/table-pagination.tsx",
                                lineNumber: 150,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_4__.Input, {
                                type: "number",
                                min: "1",
                                max: totalPages,
                                value: jumpToPage,
                                onChange: (e)=>setJumpToPage(e.target.value),
                                placeholder: page.toString(),
                                className: "w-16 text-center",
                                disabled: loading
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/components/admin/table-pagination.tsx",
                                lineNumber: 151,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/spark-platform/components/admin/table-pagination.tsx",
                        lineNumber: 149,
                        columnNumber: 11
                    }, this),
                    totalPages > 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                variant: "outline",
                                size: "sm",
                                onClick: ()=>handlePageChange(1),
                                disabled: page === 1 || loading,
                                className: "hidden sm:flex",
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronLeft_ChevronRight_ChevronsLeft_ChevronsRight_lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin/table-pagination.tsx",
                                    lineNumber: 175,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/components/admin/table-pagination.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                variant: "outline",
                                size: "sm",
                                onClick: ()=>handlePageChange(Math.max(1, page - 1)),
                                disabled: page === 1 || loading,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronLeft_ChevronRight_ChevronsLeft_ChevronsRight_lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/spark-platform/components/admin/table-pagination.tsx",
                                        lineNumber: 185,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                        className: "hidden sm:inline ml-1",
                                        children: "Previous"
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/spark-platform/components/admin/table-pagination.tsx",
                                        lineNumber: 186,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/spark-platform/components/admin/table-pagination.tsx",
                                lineNumber: 179,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "hidden md:flex items-center gap-1",
                                children: getVisiblePages().map((pageNum)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                        variant: page === pageNum ? "default" : "outline",
                                        size: "sm",
                                        onClick: ()=>handlePageChange(pageNum),
                                        disabled: loading,
                                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)("w-10 h-8 p-0 transition-all duration-200", page === pageNum ? "bg-[#00FF88] text-black font-semibold shadow-lg shadow-[#00FF88]/25 border-[#00FF88]" : "hover:bg-white/10 hover:border-white/30"),
                                        children: pageNum
                                    }, pageNum, false, {
                                        fileName: "/home/ubuntu/spark-platform/components/admin/table-pagination.tsx",
                                        lineNumber: 192,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/components/admin/table-pagination.tsx",
                                lineNumber: 190,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "md:hidden flex items-center",
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                    className: "text-sm text-[#CCCCCC] px-2",
                                    children: [
                                        page,
                                        " / ",
                                        totalPages
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin/table-pagination.tsx",
                                    lineNumber: 212,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/components/admin/table-pagination.tsx",
                                lineNumber: 211,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                variant: "outline",
                                size: "sm",
                                onClick: ()=>handlePageChange(Math.min(totalPages, page + 1)),
                                disabled: page === totalPages || loading,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                        className: "hidden sm:inline mr-1",
                                        children: "Next"
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/spark-platform/components/admin/table-pagination.tsx",
                                        lineNumber: 224,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronLeft_ChevronRight_ChevronsLeft_ChevronsRight_lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/spark-platform/components/admin/table-pagination.tsx",
                                        lineNumber: 225,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/spark-platform/components/admin/table-pagination.tsx",
                                lineNumber: 218,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                variant: "outline",
                                size: "sm",
                                onClick: ()=>handlePageChange(totalPages),
                                disabled: page === totalPages || loading,
                                className: "hidden sm:flex",
                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronLeft_ChevronRight_ChevronsLeft_ChevronsRight_lucide_react__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin/table-pagination.tsx",
                                    lineNumber: 236,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/components/admin/table-pagination.tsx",
                                lineNumber: 229,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/spark-platform/components/admin/table-pagination.tsx",
                        lineNumber: 166,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/ubuntu/spark-platform/components/admin/table-pagination.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/ubuntu/spark-platform/components/admin/table-pagination.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}


/***/ }),

/***/ "(ssr)/./components/admin/user-actions-dropdown.tsx":
/*!****************************************************!*\
  !*** ./components/admin/user-actions-dropdown.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserActionsDropdown: () => (/* binding */ UserActionsDropdown)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ "(ssr)/./components/ui/button.tsx");
/* harmony import */ var _components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/dropdown-menu */ "(ssr)/./components/ui/dropdown-menu.tsx");
/* harmony import */ var _barrel_optimize_names_MoreVertical_Shield_UserCheck_UserX_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=MoreVertical,Shield,UserCheck,UserX!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js");
/* harmony import */ var _barrel_optimize_names_MoreVertical_Shield_UserCheck_UserX_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=MoreVertical,Shield,UserCheck,UserX!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/user-x.js");
/* harmony import */ var _barrel_optimize_names_MoreVertical_Shield_UserCheck_UserX_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=MoreVertical,Shield,UserCheck,UserX!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/user-check.js");
/* harmony import */ var _barrel_optimize_names_MoreVertical_Shield_UserCheck_UserX_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=MoreVertical,Shield,UserCheck,UserX!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/shield.js");
/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sonner */ "(ssr)/./node_modules/sonner/dist/index.mjs");
/* __next_internal_client_entry_do_not_use__ UserActionsDropdown auto */ 





function UserActionsDropdown({ user, currentUserEmail, onActionComplete }) {
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const isSuperAdmin = currentUserEmail === "admin@spark.com";
    const canPromote = isSuperAdmin && user.role !== "admin";
    const handleUserAction = async (action)=>{
        setIsLoading(true);
        try {
            const response = await fetch(`/api/admin/users/${user.id}/${action}`, {
                method: "POST"
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || `Failed to ${action} user`);
            }
            const result = await response.json();
            sonner__WEBPACK_IMPORTED_MODULE_4__.toast.success(result.message || `User ${action}ed successfully`);
            onActionComplete();
        } catch (error) {
            console.error(`Error ${action}ing user:`, error);
            sonner__WEBPACK_IMPORTED_MODULE_4__.toast.error(error instanceof Error ? error.message : `Failed to ${action} user`);
        } finally{
            setIsLoading(false);
        }
    };
    const handleSuspend = ()=>{
        if (user.status === "suspended") {
            sonner__WEBPACK_IMPORTED_MODULE_4__.toast.info("User is already suspended");
            return;
        }
        handleUserAction("suspend");
    };
    const handleActivate = ()=>{
        if (user.status === "active") {
            sonner__WEBPACK_IMPORTED_MODULE_4__.toast.info("User is already active");
            return;
        }
        handleUserAction("activate");
    };
    const handlePromote = ()=>{
        if (user.role === "admin") {
            sonner__WEBPACK_IMPORTED_MODULE_4__.toast.info("User is already an admin");
            return;
        }
        handleUserAction("promote");
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.DropdownMenu, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.DropdownMenuTrigger, {
                asChild: true,
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    variant: "ghost",
                    size: "sm",
                    className: "h-8 w-8 p-0 text-[#CCCCCC] hover:text-white hover:bg-white/10",
                    disabled: isLoading,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MoreVertical_Shield_UserCheck_UserX_lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "/home/ubuntu/spark-platform/components/admin/user-actions-dropdown.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                            className: "sr-only",
                            children: "Open user actions menu"
                        }, void 0, false, {
                            fileName: "/home/ubuntu/spark-platform/components/admin/user-actions-dropdown.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/ubuntu/spark-platform/components/admin/user-actions-dropdown.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/ubuntu/spark-platform/components/admin/user-actions-dropdown.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.DropdownMenuContent, {
                align: "end",
                className: "w-48 bg-[#1A1A1A] border-white/20",
                children: [
                    user.status === "active" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.DropdownMenuItem, {
                        onClick: handleSuspend,
                        className: "text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/10 cursor-pointer",
                        disabled: isLoading,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MoreVertical_Shield_UserCheck_UserX_lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                className: "w-4 h-4 mr-2"
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/components/admin/user-actions-dropdown.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this),
                            "Suspend User"
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/spark-platform/components/admin/user-actions-dropdown.tsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this) : user.status === "suspended" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.DropdownMenuItem, {
                        onClick: handleActivate,
                        className: "text-green-400 hover:text-green-300 hover:bg-green-400/10 cursor-pointer",
                        disabled: isLoading,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MoreVertical_Shield_UserCheck_UserX_lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                className: "w-4 h-4 mr-2"
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/components/admin/user-actions-dropdown.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this),
                            "Activate User"
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/spark-platform/components/admin/user-actions-dropdown.tsx",
                        lineNumber: 120,
                        columnNumber: 11
                    }, this) : null,
                    canPromote && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.DropdownMenuSeparator, {
                                className: "bg-white/20"
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/components/admin/user-actions-dropdown.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.DropdownMenuItem, {
                                onClick: handlePromote,
                                className: "text-blue-400 hover:text-blue-300 hover:bg-blue-400/10 cursor-pointer",
                                disabled: isLoading,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MoreVertical_Shield_UserCheck_UserX_lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                        className: "w-4 h-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/spark-platform/components/admin/user-actions-dropdown.tsx",
                                        lineNumber: 138,
                                        columnNumber: 15
                                    }, this),
                                    "Promote to Admin"
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/spark-platform/components/admin/user-actions-dropdown.tsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "/home/ubuntu/spark-platform/components/admin/user-actions-dropdown.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/ubuntu/spark-platform/components/admin/user-actions-dropdown.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}


/***/ }),

/***/ "(ssr)/./components/admin/user-bulk-actions-toolbar.tsx":
/*!********************************************************!*\
  !*** ./components/admin/user-bulk-actions-toolbar.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserBulkActionsToolbar: () => (/* binding */ UserBulkActionsToolbar)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ "(ssr)/./components/ui/button.tsx");
/* harmony import */ var _components_ui_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/badge */ "(ssr)/./components/ui/badge.tsx");
/* harmony import */ var _components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/alert-dialog */ "(ssr)/./components/ui/alert-dialog.tsx");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ "(ssr)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ "(ssr)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs");
/* harmony import */ var _barrel_optimize_names_AlertTriangle_Ban_Loader2_Trash2_UserCheck_X_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=AlertTriangle,Ban,Loader2,Trash2,UserCheck,X!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/user-check.js");
/* harmony import */ var _barrel_optimize_names_AlertTriangle_Ban_Loader2_Trash2_UserCheck_X_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=AlertTriangle,Ban,Loader2,Trash2,UserCheck,X!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/ban.js");
/* harmony import */ var _barrel_optimize_names_AlertTriangle_Ban_Loader2_Trash2_UserCheck_X_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=AlertTriangle,Ban,Loader2,Trash2,UserCheck,X!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/trash-2.js");
/* harmony import */ var _barrel_optimize_names_AlertTriangle_Ban_Loader2_Trash2_UserCheck_X_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=AlertTriangle,Ban,Loader2,Trash2,UserCheck,X!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/x.js");
/* harmony import */ var _barrel_optimize_names_AlertTriangle_Ban_Loader2_Trash2_UserCheck_X_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=AlertTriangle,Ban,Loader2,Trash2,UserCheck,X!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/triangle-alert.js");
/* harmony import */ var _barrel_optimize_names_AlertTriangle_Ban_Loader2_Trash2_UserCheck_X_lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! __barrel_optimize__?names=AlertTriangle,Ban,Loader2,Trash2,UserCheck,X!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/loader-circle.js");
/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sonner */ "(ssr)/./node_modules/sonner/dist/index.mjs");
/* __next_internal_client_entry_do_not_use__ UserBulkActionsToolbar auto */ 







function UserBulkActionsToolbar({ selectedCount, selectedIds, onClearSelection, onBulkDelete, onBulkSuspend, onBulkActivate, totalCount }) {
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [showDialog, setShowDialog] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const handleBulkAction = async (action)=>{
        if (selectedIds.length === 0) return;
        setIsLoading(true);
        try {
            switch(action){
                case "delete":
                    await onBulkDelete(selectedIds);
                    sonner__WEBPACK_IMPORTED_MODULE_5__.toast.success(`Successfully deleted ${selectedIds.length} users`);
                    break;
                case "suspend":
                    await onBulkSuspend(selectedIds);
                    sonner__WEBPACK_IMPORTED_MODULE_5__.toast.success(`Successfully suspended ${selectedIds.length} users`);
                    break;
                case "activate":
                    await onBulkActivate(selectedIds);
                    sonner__WEBPACK_IMPORTED_MODULE_5__.toast.success(`Successfully activated ${selectedIds.length} users`);
                    break;
            }
            onClearSelection();
            setShowDialog(null);
        } catch (error) {
            console.error(`Bulk ${action} error:`, error);
            sonner__WEBPACK_IMPORTED_MODULE_5__.toast.error(`Failed to ${action} users: ${error.message || "Unknown error"}`);
        } finally{
            setIsLoading(false);
        }
    };
    const handleDialogClose = ()=>{
        setShowDialog(null);
    };
    if (selectedCount === 0) return null;
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.AnimatePresence, {
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
                    initial: {
                        opacity: 0,
                        y: -20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -20
                    },
                    className: "bg-gradient-to-br from-[#1A1A1A] to-[#252529] border border-white/20 rounded-lg shadow-lg p-4 mb-4",
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_3__.Badge, {
                                                variant: "secondary",
                                                className: "bg-[#00FF88]/20 text-[#00FF88] border-[#00FF88]/30",
                                                children: [
                                                    selectedCount,
                                                    " selected"
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                                                lineNumber: 101,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                className: "text-sm text-[#CCCCCC]",
                                                children: [
                                                    "of ",
                                                    totalCount,
                                                    " users"
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                                                lineNumber: 104,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                                variant: "outline",
                                                size: "sm",
                                                onClick: ()=>setShowDialog("activate"),
                                                disabled: isLoading,
                                                className: "text-[#10B981] border-[#10B981]/20 hover:bg-[#10B981]/10 hover:border-[#10B981]/50",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertTriangle_Ban_Loader2_Trash2_UserCheck_X_lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                                        className: "w-4 h-4 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Activate (",
                                                    selectedCount,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                                                lineNumber: 110,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                                variant: "outline",
                                                size: "sm",
                                                onClick: ()=>setShowDialog("suspend"),
                                                disabled: isLoading,
                                                className: "text-[#f5d565] border-[#f5d565]/20 hover:bg-[#f5d565]/10 hover:border-[#f5d565]/50",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertTriangle_Ban_Loader2_Trash2_UserCheck_X_lucide_react__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                                        className: "w-4 h-4 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Suspend (",
                                                    selectedCount,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                                                lineNumber: 121,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                                variant: "outline",
                                                size: "sm",
                                                onClick: ()=>setShowDialog("delete"),
                                                disabled: isLoading,
                                                className: "text-red-400 border-red-400/20 hover:bg-red-400/10 hover:border-red-400/50",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertTriangle_Ban_Loader2_Trash2_UserCheck_X_lucide_react__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                                        className: "w-4 h-4 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Delete (",
                                                    selectedCount,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                                                lineNumber: 132,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                                        lineNumber: 109,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                variant: "ghost",
                                size: "sm",
                                onClick: onClearSelection,
                                disabled: isLoading,
                                className: "text-[#CCCCCC] hover:text-white hover:bg-white/10",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertTriangle_Ban_Loader2_Trash2_UserCheck_X_lucide_react__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                        className: "w-4 h-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, this),
                                    "Clear Selection"
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                        lineNumber: 98,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.AlertDialog, {
                open: showDialog === "delete",
                onOpenChange: handleDialogClose,
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.AlertDialogContent, {
                    className: "bg-[#1A1A1A] border border-white/20",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.AlertDialogHeader, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.AlertDialogTitle, {
                                    className: "flex items-center gap-2 text-white",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertTriangle_Ban_Loader2_Trash2_UserCheck_X_lucide_react__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                            className: "w-5 h-5 text-red-400"
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                                            lineNumber: 164,
                                            columnNumber: 15
                                        }, this),
                                        "Confirm Bulk Delete"
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.AlertDialogDescription, {
                                    className: "text-[#CCCCCC]",
                                    children: [
                                        "Are you sure you want to delete ",
                                        selectedCount,
                                        " selected users? This action cannot be undone and will permanently remove all associated data including topics, votes, and notifications."
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                                    lineNumber: 167,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.AlertDialogFooter, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.AlertDialogCancel, {
                                    onClick: handleDialogClose,
                                    className: "border-white/20 text-white hover:bg-white/10",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.AlertDialogAction, {
                                    onClick: ()=>handleBulkAction("delete"),
                                    disabled: isLoading,
                                    className: "bg-red-600 hover:bg-red-700 text-white",
                                    children: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertTriangle_Ban_Loader2_Trash2_UserCheck_X_lucide_react__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                                className: "w-4 h-4 animate-spin"
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                                                lineNumber: 185,
                                                columnNumber: 19
                                            }, this),
                                            "Deleting..."
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                                        lineNumber: 184,
                                        columnNumber: 17
                                    }, this) : "Delete Users"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                                    lineNumber: 178,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                            lineNumber: 171,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                    lineNumber: 161,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.AlertDialog, {
                open: showDialog === "suspend",
                onOpenChange: handleDialogClose,
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.AlertDialogContent, {
                    className: "bg-[#1A1A1A] border border-white/20",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.AlertDialogHeader, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.AlertDialogTitle, {
                                    className: "flex items-center gap-2 text-white",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertTriangle_Ban_Loader2_Trash2_UserCheck_X_lucide_react__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                            className: "w-5 h-5 text-[#f5d565]"
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                                            lineNumber: 201,
                                            columnNumber: 15
                                        }, this),
                                        "Confirm Bulk Suspend"
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                                    lineNumber: 200,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.AlertDialogDescription, {
                                    className: "text-[#CCCCCC]",
                                    children: [
                                        "Are you sure you want to suspend ",
                                        selectedCount,
                                        " selected users? This will prevent them from logging in and accessing the platform until they are reactivated."
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                                    lineNumber: 204,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                            lineNumber: 199,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.AlertDialogFooter, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.AlertDialogCancel, {
                                    onClick: handleDialogClose,
                                    className: "border-white/20 text-white hover:bg-white/10",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                                    lineNumber: 209,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.AlertDialogAction, {
                                    onClick: ()=>handleBulkAction("suspend"),
                                    disabled: isLoading,
                                    className: "bg-[#f5d565] hover:bg-[#FCD34D] text-black",
                                    children: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertTriangle_Ban_Loader2_Trash2_UserCheck_X_lucide_react__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                                className: "w-4 h-4 animate-spin"
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                                                lineNumber: 222,
                                                columnNumber: 19
                                            }, this),
                                            "Suspending..."
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                                        lineNumber: 221,
                                        columnNumber: 17
                                    }, this) : "Suspend Users"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                                    lineNumber: 215,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                            lineNumber: 208,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                    lineNumber: 198,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.AlertDialog, {
                open: showDialog === "activate",
                onOpenChange: handleDialogClose,
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.AlertDialogContent, {
                    className: "bg-[#1A1A1A] border border-white/20",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.AlertDialogHeader, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.AlertDialogTitle, {
                                    className: "flex items-center gap-2 text-white",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertTriangle_Ban_Loader2_Trash2_UserCheck_X_lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                            className: "w-5 h-5 text-[#10B981]"
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                                            lineNumber: 238,
                                            columnNumber: 15
                                        }, this),
                                        "Confirm Bulk Activation"
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                                    lineNumber: 237,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.AlertDialogDescription, {
                                    className: "text-[#CCCCCC]",
                                    children: [
                                        "Are you sure you want to activate ",
                                        selectedCount,
                                        " selected users? This will allow them to log in and access the platform again."
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                                    lineNumber: 241,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                            lineNumber: 236,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.AlertDialogFooter, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.AlertDialogCancel, {
                                    onClick: handleDialogClose,
                                    className: "border-white/20 text-white hover:bg-white/10",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                                    lineNumber: 246,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.AlertDialogAction, {
                                    onClick: ()=>handleBulkAction("activate"),
                                    disabled: isLoading,
                                    className: "bg-[#10B981] hover:bg-[#059669] text-white",
                                    children: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertTriangle_Ban_Loader2_Trash2_UserCheck_X_lucide_react__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                                className: "w-4 h-4 animate-spin"
                                            }, void 0, false, {
                                                fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                                                lineNumber: 259,
                                                columnNumber: 19
                                            }, this),
                                            "Activating..."
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                                        lineNumber: 258,
                                        columnNumber: 17
                                    }, this) : "Activate Users"
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                                    lineNumber: 252,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                            lineNumber: 245,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                    lineNumber: 235,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "/home/ubuntu/spark-platform/components/admin/user-bulk-actions-toolbar.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}


/***/ }),

/***/ "(ssr)/./components/admin/user-filters.tsx":
/*!*******************************************!*\
  !*** ./components/admin/user-filters.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   USER_FILTER_CONFIGS: () => (/* binding */ USER_FILTER_CONFIGS),
/* harmony export */   getUserFilterOptions: () => (/* binding */ getUserFilterOptions)
/* harmony export */ });
/* __next_internal_client_entry_do_not_use__ USER_FILTER_CONFIGS,getUserFilterOptions auto */ const USER_FILTER_CONFIGS = [
    {
        key: "search",
        label: "Search",
        type: "search",
        placeholder: "Search users by name, email, or industry..."
    },
    {
        key: "status",
        label: "Status",
        type: "select",
        options: [
            {
                value: "ACTIVE",
                label: "Active"
            },
            {
                value: "SUSPENDED",
                label: "Suspended"
            }
        ]
    },
    {
        key: "role",
        label: "Role",
        type: "select",
        options: [
            {
                value: "user",
                label: "User"
            },
            {
                value: "admin",
                label: "Admin"
            }
        ]
    },
    {
        key: "profileType",
        label: "Profile Type",
        type: "select",
        options: [
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
        ]
    },
    {
        key: "subscriptionPlan",
        label: "Subscription",
        type: "select",
        options: [
            {
                value: "FREE",
                label: "Free"
            },
            {
                value: "PRO",
                label: "Pro"
            }
        ]
    },
    {
        key: "industry",
        label: "Industry",
        type: "multiselect",
        options: [
            {
                value: "Technology",
                label: "Technology"
            },
            {
                value: "Healthcare",
                label: "Healthcare"
            },
            {
                value: "Finance",
                label: "Finance"
            },
            {
                value: "Education",
                label: "Education"
            },
            {
                value: "Manufacturing",
                label: "Manufacturing"
            },
            {
                value: "Retail",
                label: "Retail"
            },
            {
                value: "Energy",
                label: "Energy"
            },
            {
                value: "Transportation",
                label: "Transportation"
            },
            {
                value: "Real Estate",
                label: "Real Estate"
            },
            {
                value: "Media",
                label: "Media"
            },
            {
                value: "Entertainment",
                label: "Entertainment"
            },
            {
                value: "Food & Beverage",
                label: "Food & Beverage"
            },
            {
                value: "Agriculture",
                label: "Agriculture"
            },
            {
                value: "Construction",
                label: "Construction"
            },
            {
                value: "Government",
                label: "Government"
            },
            {
                value: "Non-Profit",
                label: "Non-Profit"
            },
            {
                value: "Other",
                label: "Other"
            }
        ]
    },
    {
        key: "country",
        label: "Country",
        type: "multiselect",
        options: [
            {
                value: "United States",
                label: "United States"
            },
            {
                value: "Canada",
                label: "Canada"
            },
            {
                value: "United Kingdom",
                label: "United Kingdom"
            },
            {
                value: "Germany",
                label: "Germany"
            },
            {
                value: "France",
                label: "France"
            },
            {
                value: "Australia",
                label: "Australia"
            },
            {
                value: "Japan",
                label: "Japan"
            },
            {
                value: "South Korea",
                label: "South Korea"
            },
            {
                value: "Singapore",
                label: "Singapore"
            },
            {
                value: "India",
                label: "India"
            },
            {
                value: "China",
                label: "China"
            },
            {
                value: "Brazil",
                label: "Brazil"
            },
            {
                value: "Mexico",
                label: "Mexico"
            },
            {
                value: "Netherlands",
                label: "Netherlands"
            },
            {
                value: "Sweden",
                label: "Sweden"
            },
            {
                value: "Switzerland",
                label: "Switzerland"
            },
            {
                value: "Israel",
                label: "Israel"
            },
            {
                value: "South Africa",
                label: "South Africa"
            },
            {
                value: "Global",
                label: "Global"
            },
            {
                value: "Other",
                label: "Other"
            }
        ]
    },
    {
        key: "dateRange",
        label: "Registration Date",
        type: "daterange"
    }
];
// Helper function to get filter options with counts (for API integration)
const getUserFilterOptions = async (filterKey)=>{
    try {
        const response = await fetch(`/api/admin/users/filter-options?type=${filterKey}`);
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.error(`Error fetching ${filterKey} options:`, error);
    }
    // Return default options without counts
    const config = USER_FILTER_CONFIGS.find((f)=>f.key === filterKey);
    return config?.options?.map((opt)=>({
            ...opt,
            count: 0
        })) || [];
};


/***/ }),

/***/ "(ssr)/./components/admin/user-profile-modal.tsx":
/*!*************************************************!*\
  !*** ./components/admin/user-profile-modal.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserProfileModal: () => (/* binding */ UserProfileModal)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! framer-motion */ "(ssr)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs");
/* harmony import */ var _components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/dialog */ "(ssr)/./components/ui/dialog.tsx");
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/button */ "(ssr)/./components/ui/button.tsx");
/* harmony import */ var _components_ui_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/badge */ "(ssr)/./components/ui/badge.tsx");
/* harmony import */ var _components_ui_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/avatar */ "(ssr)/./components/ui/avatar.tsx");
/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sonner */ "(ssr)/./node_modules/sonner/dist/index.mjs");
/* harmony import */ var _barrel_optimize_names_Activity_Briefcase_Calendar_Crown_FileText_Loader2_Mail_MapPin_Shield_TrendingUp_User_UserCheck_UserX_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Activity,Briefcase,Calendar,Crown,FileText,Loader2,Mail,MapPin,Shield,TrendingUp,User,UserCheck,UserX!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/loader-circle.js");
/* harmony import */ var _barrel_optimize_names_Activity_Briefcase_Calendar_Crown_FileText_Loader2_Mail_MapPin_Shield_TrendingUp_User_UserCheck_UserX_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Activity,Briefcase,Calendar,Crown,FileText,Loader2,Mail,MapPin,Shield,TrendingUp,User,UserCheck,UserX!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/user.js");
/* harmony import */ var _barrel_optimize_names_Activity_Briefcase_Calendar_Crown_FileText_Loader2_Mail_MapPin_Shield_TrendingUp_User_UserCheck_UserX_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Activity,Briefcase,Calendar,Crown,FileText,Loader2,Mail,MapPin,Shield,TrendingUp,User,UserCheck,UserX!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/shield.js");
/* harmony import */ var _barrel_optimize_names_Activity_Briefcase_Calendar_Crown_FileText_Loader2_Mail_MapPin_Shield_TrendingUp_User_UserCheck_UserX_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=Activity,Briefcase,Calendar,Crown,FileText,Loader2,Mail,MapPin,Shield,TrendingUp,User,UserCheck,UserX!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/mail.js");
/* harmony import */ var _barrel_optimize_names_Activity_Briefcase_Calendar_Crown_FileText_Loader2_Mail_MapPin_Shield_TrendingUp_User_UserCheck_UserX_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=Activity,Briefcase,Calendar,Crown,FileText,Loader2,Mail,MapPin,Shield,TrendingUp,User,UserCheck,UserX!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/calendar.js");
/* harmony import */ var _barrel_optimize_names_Activity_Briefcase_Calendar_Crown_FileText_Loader2_Mail_MapPin_Shield_TrendingUp_User_UserCheck_UserX_lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! __barrel_optimize__?names=Activity,Briefcase,Calendar,Crown,FileText,Loader2,Mail,MapPin,Shield,TrendingUp,User,UserCheck,UserX!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/crown.js");
/* harmony import */ var _barrel_optimize_names_Activity_Briefcase_Calendar_Crown_FileText_Loader2_Mail_MapPin_Shield_TrendingUp_User_UserCheck_UserX_lucide_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! __barrel_optimize__?names=Activity,Briefcase,Calendar,Crown,FileText,Loader2,Mail,MapPin,Shield,TrendingUp,User,UserCheck,UserX!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/briefcase.js");
/* harmony import */ var _barrel_optimize_names_Activity_Briefcase_Calendar_Crown_FileText_Loader2_Mail_MapPin_Shield_TrendingUp_User_UserCheck_UserX_lucide_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! __barrel_optimize__?names=Activity,Briefcase,Calendar,Crown,FileText,Loader2,Mail,MapPin,Shield,TrendingUp,User,UserCheck,UserX!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/map-pin.js");
/* harmony import */ var _barrel_optimize_names_Activity_Briefcase_Calendar_Crown_FileText_Loader2_Mail_MapPin_Shield_TrendingUp_User_UserCheck_UserX_lucide_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! __barrel_optimize__?names=Activity,Briefcase,Calendar,Crown,FileText,Loader2,Mail,MapPin,Shield,TrendingUp,User,UserCheck,UserX!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/activity.js");
/* harmony import */ var _barrel_optimize_names_Activity_Briefcase_Calendar_Crown_FileText_Loader2_Mail_MapPin_Shield_TrendingUp_User_UserCheck_UserX_lucide_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! __barrel_optimize__?names=Activity,Briefcase,Calendar,Crown,FileText,Loader2,Mail,MapPin,Shield,TrendingUp,User,UserCheck,UserX!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/trending-up.js");
/* harmony import */ var _barrel_optimize_names_Activity_Briefcase_Calendar_Crown_FileText_Loader2_Mail_MapPin_Shield_TrendingUp_User_UserCheck_UserX_lucide_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! __barrel_optimize__?names=Activity,Briefcase,Calendar,Crown,FileText,Loader2,Mail,MapPin,Shield,TrendingUp,User,UserCheck,UserX!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/file-text.js");
/* harmony import */ var _barrel_optimize_names_Activity_Briefcase_Calendar_Crown_FileText_Loader2_Mail_MapPin_Shield_TrendingUp_User_UserCheck_UserX_lucide_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! __barrel_optimize__?names=Activity,Briefcase,Calendar,Crown,FileText,Loader2,Mail,MapPin,Shield,TrendingUp,User,UserCheck,UserX!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/user-x.js");
/* harmony import */ var _barrel_optimize_names_Activity_Briefcase_Calendar_Crown_FileText_Loader2_Mail_MapPin_Shield_TrendingUp_User_UserCheck_UserX_lucide_react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! __barrel_optimize__?names=Activity,Briefcase,Calendar,Crown,FileText,Loader2,Mail,MapPin,Shield,TrendingUp,User,UserCheck,UserX!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/user-check.js");
/* __next_internal_client_entry_do_not_use__ UserProfileModal auto */ 








function UserProfileModal({ isOpen, onClose, userId, currentUserEmail, onActionComplete }) {
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [actionLoading, setActionLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const isSuperAdmin = currentUserEmail === "admin@spark.com";
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isOpen && userId) {
            fetchUserProfile();
        }
    }, [
        isOpen,
        userId
    ]);
    const fetchUserProfile = async ()=>{
        if (!userId) return;
        setLoading(true);
        try {
            const response = await fetch(`/api/admin/users/${userId}`);
            if (!response.ok) {
                if (response.status === 404) {
                    sonner__WEBPACK_IMPORTED_MODULE_6__.toast.error("User not found");
                    onClose();
                    return;
                }
                throw new Error("Failed to fetch user profile");
            }
            const userData = await response.json();
            setUser(userData.user);
        } catch (error) {
            console.error("Error fetching user profile:", error);
            sonner__WEBPACK_IMPORTED_MODULE_6__.toast.error("Failed to load user profile");
            onClose();
        } finally{
            setLoading(false);
        }
    };
    const handleUserAction = async (action)=>{
        if (!user) return;
        setActionLoading(true);
        try {
            const response = await fetch(`/api/admin/users/${user.id}/${action}`, {
                method: "POST"
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || `Failed to ${action} user`);
            }
            const result = await response.json();
            sonner__WEBPACK_IMPORTED_MODULE_6__.toast.success(result.message || `User ${action}ed successfully`);
            // Refresh user data and parent list
            await fetchUserProfile();
            onActionComplete();
        } catch (error) {
            console.error(`Error ${action}ing user:`, error);
            sonner__WEBPACK_IMPORTED_MODULE_6__.toast.error(error instanceof Error ? error.message : `Failed to ${action} user`);
        } finally{
            setActionLoading(false);
        }
    };
    const handleSuspend = ()=>{
        if (!user) return;
        if (user.status === "suspended") {
            sonner__WEBPACK_IMPORTED_MODULE_6__.toast.info("User is already suspended");
            return;
        }
        handleUserAction("suspend");
    };
    const handleActivate = ()=>{
        if (!user) return;
        if (user.status === "active") {
            sonner__WEBPACK_IMPORTED_MODULE_6__.toast.info("User is already active");
            return;
        }
        handleUserAction("activate");
    };
    const handlePromote = ()=>{
        if (!user) return;
        if (user.role === "admin") {
            sonner__WEBPACK_IMPORTED_MODULE_6__.toast.info("User is already an admin");
            return;
        }
        handleUserAction("promote");
    };
    const formatDate = (dateString)=>{
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    };
    const handleClose = ()=>{
        onClose();
        setUser(null);
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
        open: isOpen,
        onOpenChange: handleClose,
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogContent, {
            className: "sm:max-w-4xl bg-gradient-to-br from-[#1A1A1A] to-[#252529] border border-white/20 text-white max-h-[90vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogHeader, {
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogTitle, {
                        className: "text-2xl font-bold text-white",
                        children: "User Profile"
                    }, void 0, false, {
                        fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                        lineNumber: 172,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                    lineNumber: 171,
                    columnNumber: 9
                }, this),
                loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "flex items-center justify-center py-12",
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Activity_Briefcase_Calendar_Crown_FileText_Loader2_Mail_MapPin_Shield_TrendingUp_User_UserCheck_UserX_lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                className: "w-8 h-8 animate-spin text-[#00FF88] mx-auto mb-4"
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                lineNumber: 180,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "text-[#CCCCCC]",
                                children: "Loading user profile..."
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                lineNumber: 181,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                        lineNumber: 179,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                    lineNumber: 178,
                    columnNumber: 11
                }, this) : !user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "flex items-center justify-center py-12",
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Activity_Briefcase_Calendar_Crown_FileText_Loader2_Mail_MapPin_Shield_TrendingUp_User_UserCheck_UserX_lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                className: "w-16 h-16 text-[#CCCCCC] mx-auto mb-4"
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                lineNumber: 187,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                                className: "text-xl font-semibold mb-2 text-white",
                                children: "User Not Found"
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                lineNumber: 188,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                className: "text-[#CCCCCC] mb-4",
                                children: "The requested user profile could not be found."
                            }, void 0, false, {
                                fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                lineNumber: 189,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                        lineNumber: 186,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                    lineNumber: 185,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "space-y-6",
                    children: [
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
                                duration: 0.6
                            },
                            className: "bg-gradient-to-r from-[#252529] to-[#2A2A30] rounded-xl p-6 border border-white/10",
                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: "flex items-center space-x-4",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_5__.Avatar, {
                                                className: "w-16 h-16",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_5__.AvatarImage, {
                                                        src: ""
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                        lineNumber: 206,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_5__.AvatarFallback, {
                                                        className: "bg-gradient-to-br from-[#00FF88] to-[#10B981] text-black text-lg font-medium",
                                                        children: user.name?.charAt(0)?.toUpperCase() || "U"
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                lineNumber: 205,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                        className: "flex items-center space-x-3 mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                                                                className: "text-2xl font-bold text-white",
                                                                children: user.name
                                                            }, void 0, false, {
                                                                fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                                lineNumber: 213,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_4__.Badge, {
                                                                variant: user.role === "admin" ? "default" : "secondary",
                                                                className: "capitalize",
                                                                children: [
                                                                    user.role === "admin" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Activity_Briefcase_Calendar_Crown_FileText_Loader2_Mail_MapPin_Shield_TrendingUp_User_UserCheck_UserX_lucide_react__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                                                        className: "w-3 h-3 mr-1"
                                                                    }, void 0, false, {
                                                                        fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                                        lineNumber: 215,
                                                                        columnNumber: 51
                                                                    }, this),
                                                                    user.role
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                                lineNumber: 214,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_4__.Badge, {
                                                                variant: user.status === "active" ? "default" : "secondary",
                                                                className: `capitalize ${user.status === "suspended" ? "bg-orange-500/20 text-orange-400 border-orange-500/30" : ""}`,
                                                                children: user.status
                                                            }, void 0, false, {
                                                                fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                                lineNumber: 218,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                                        className: "text-[#CCCCCC] mb-2",
                                                        children: [
                                                            "@",
                                                            user.username
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                        lineNumber: 225,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                        className: "flex items-center space-x-4 text-sm text-[#CCCCCC]",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                                className: "flex items-center space-x-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Activity_Briefcase_Calendar_Crown_FileText_Loader2_Mail_MapPin_Shield_TrendingUp_User_UserCheck_UserX_lucide_react__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                                                        className: "w-4 h-4"
                                                                    }, void 0, false, {
                                                                        fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                                        lineNumber: 228,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                                        children: user.email
                                                                    }, void 0, false, {
                                                                        fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                                        lineNumber: 229,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                                lineNumber: 227,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                                className: "flex items-center space-x-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Activity_Briefcase_Calendar_Crown_FileText_Loader2_Mail_MapPin_Shield_TrendingUp_User_UserCheck_UserX_lucide_react__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                                                        className: "w-4 h-4"
                                                                    }, void 0, false, {
                                                                        fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                                        lineNumber: 232,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                                        children: [
                                                                            "Joined ",
                                                                            formatDate(user.createdAt)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                                        lineNumber: 233,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                                lineNumber: 231,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                        lineNumber: 226,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                lineNumber: 211,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                        lineNumber: 204,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: "flex items-center space-x-3",
                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_4__.Badge, {
                                            variant: user.subscriptionPlan === "PRO" ? "default" : "outline",
                                            className: "capitalize",
                                            children: [
                                                user.subscriptionPlan === "PRO" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Activity_Briefcase_Calendar_Crown_FileText_Loader2_Mail_MapPin_Shield_TrendingUp_User_UserCheck_UserX_lucide_react__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                                    className: "w-3 h-3 mr-1"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                    lineNumber: 243,
                                                    columnNumber: 57
                                                }, this),
                                                user.subscriptionPlan,
                                                " Plan"
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                            lineNumber: 239,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                        lineNumber: 238,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                lineNumber: 203,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                            lineNumber: 197,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                            children: [
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
                                        duration: 0.6,
                                        delay: 0.1
                                    },
                                    className: "lg:col-span-2",
                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: "bg-gradient-to-br from-[#252529] to-[#2A2A30] rounded-xl p-6 border border-white/10",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                                                className: "flex items-center gap-2 text-lg font-semibold text-white mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Activity_Briefcase_Calendar_Crown_FileText_Loader2_Mail_MapPin_Shield_TrendingUp_User_UserCheck_UserX_lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                                        className: "h-5 w-5 text-[#00FF88]"
                                                    }, void 0, false, {
                                                        fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                        lineNumber: 261,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Personal Information"
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                lineNumber: 260,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                                                                className: "text-sm font-medium text-[#CCCCCC]",
                                                                children: "Profile Type"
                                                            }, void 0, false, {
                                                                fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                                lineNumber: 266,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                                className: "flex items-center space-x-2 mt-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Activity_Briefcase_Calendar_Crown_FileText_Loader2_Mail_MapPin_Shield_TrendingUp_User_UserCheck_UserX_lucide_react__WEBPACK_IMPORTED_MODULE_14__["default"], {
                                                                        className: "w-4 h-4 text-[#CCCCCC]"
                                                                    }, void 0, false, {
                                                                        fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                                        lineNumber: 268,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                                        className: "text-white",
                                                                        children: user.profileType
                                                                    }, void 0, false, {
                                                                        fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                                        lineNumber: 269,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                                lineNumber: 267,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                        lineNumber: 265,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                                                                className: "text-sm font-medium text-[#CCCCCC]",
                                                                children: "Industry"
                                                            }, void 0, false, {
                                                                fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                                lineNumber: 273,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                                className: "flex items-center space-x-2 mt-1",
                                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                                    className: "text-white",
                                                                    children: user.industry
                                                                }, void 0, false, {
                                                                    fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                                    lineNumber: 275,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                                lineNumber: 274,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                        lineNumber: 272,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                                                                className: "text-sm font-medium text-[#CCCCCC]",
                                                                children: "Country"
                                                            }, void 0, false, {
                                                                fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                                lineNumber: 279,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                                className: "flex items-center space-x-2 mt-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Activity_Briefcase_Calendar_Crown_FileText_Loader2_Mail_MapPin_Shield_TrendingUp_User_UserCheck_UserX_lucide_react__WEBPACK_IMPORTED_MODULE_15__["default"], {
                                                                        className: "w-4 h-4 text-[#CCCCCC]"
                                                                    }, void 0, false, {
                                                                        fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                                        lineNumber: 281,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                                        className: "text-white",
                                                                        children: user.country
                                                                    }, void 0, false, {
                                                                        fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                                        lineNumber: 282,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                                lineNumber: 280,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                        lineNumber: 278,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                                                                className: "text-sm font-medium text-[#CCCCCC]",
                                                                children: "Last Active"
                                                            }, void 0, false, {
                                                                fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                                lineNumber: 286,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                                className: "flex items-center space-x-2 mt-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Activity_Briefcase_Calendar_Crown_FileText_Loader2_Mail_MapPin_Shield_TrendingUp_User_UserCheck_UserX_lucide_react__WEBPACK_IMPORTED_MODULE_16__["default"], {
                                                                        className: "w-4 h-4 text-[#CCCCCC]"
                                                                    }, void 0, false, {
                                                                        fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                                        lineNumber: 288,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                                        className: "text-white",
                                                                        children: formatDate(user.updatedAt)
                                                                    }, void 0, false, {
                                                                        fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                                        lineNumber: 289,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                                lineNumber: 287,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                        lineNumber: 285,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                lineNumber: 264,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                        lineNumber: 259,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                    lineNumber: 253,
                                    columnNumber: 15
                                }, this),
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
                                        duration: 0.6,
                                        delay: 0.2
                                    },
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "bg-gradient-to-br from-[#252529] to-[#2A2A30] rounded-xl p-6 border border-white/10",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                                                    className: "text-lg flex items-center space-x-2 text-white mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Activity_Briefcase_Calendar_Crown_FileText_Loader2_Mail_MapPin_Shield_TrendingUp_User_UserCheck_UserX_lucide_react__WEBPACK_IMPORTED_MODULE_17__["default"], {
                                                            className: "w-5 h-5 text-blue-400"
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                            lineNumber: 305,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                            children: "Topics Voted"
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                            lineNumber: 306,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                    lineNumber: 304,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                    className: "text-3xl font-bold text-blue-400 mb-2",
                                                    children: user.votesCount
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                    lineNumber: 308,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                                    className: "text-sm text-[#CCCCCC]",
                                                    children: "Community contributions"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                    lineNumber: 309,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                            lineNumber: 303,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "bg-gradient-to-br from-[#252529] to-[#2A2A30] rounded-xl p-6 border border-white/10",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                                                    className: "text-lg flex items-center space-x-2 text-white mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Activity_Briefcase_Calendar_Crown_FileText_Loader2_Mail_MapPin_Shield_TrendingUp_User_UserCheck_UserX_lucide_react__WEBPACK_IMPORTED_MODULE_18__["default"], {
                                                            className: "w-5 h-5 text-green-400"
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                            lineNumber: 314,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                            children: "Topics Proposed"
                                                        }, void 0, false, {
                                                            fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                            lineNumber: 315,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                    lineNumber: 313,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                    className: "text-3xl font-bold text-green-400 mb-2",
                                                    children: user.topicsCount
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                    lineNumber: 317,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                                    className: "text-sm text-[#CCCCCC]",
                                                    children: "Research ideas shared"
                                                }, void 0, false, {
                                                    fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                                    lineNumber: 318,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                            lineNumber: 312,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                    lineNumber: 297,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                            lineNumber: 251,
                            columnNumber: 13
                        }, this),
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
                                duration: 0.6,
                                delay: 0.3
                            },
                            className: "flex items-center justify-center space-x-4 pt-4 border-t border-white/10",
                            children: [
                                user.status === "active" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                    onClick: handleSuspend,
                                    disabled: actionLoading,
                                    variant: "outline",
                                    className: "border-orange-500/50 text-orange-400 hover:bg-orange-500/10 hover:border-orange-500",
                                    children: [
                                        actionLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Activity_Briefcase_Calendar_Crown_FileText_Loader2_Mail_MapPin_Shield_TrendingUp_User_UserCheck_UserX_lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                            className: "w-4 h-4 mr-2 animate-spin"
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                            lineNumber: 338,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Activity_Briefcase_Calendar_Crown_FileText_Loader2_Mail_MapPin_Shield_TrendingUp_User_UserCheck_UserX_lucide_react__WEBPACK_IMPORTED_MODULE_19__["default"], {
                                            className: "w-4 h-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                            lineNumber: 340,
                                            columnNumber: 21
                                        }, this),
                                        "Suspend User"
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                    lineNumber: 331,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                    onClick: handleActivate,
                                    disabled: actionLoading,
                                    variant: "outline",
                                    className: "border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-500",
                                    children: [
                                        actionLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Activity_Briefcase_Calendar_Crown_FileText_Loader2_Mail_MapPin_Shield_TrendingUp_User_UserCheck_UserX_lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                            className: "w-4 h-4 mr-2 animate-spin"
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                            lineNumber: 352,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Activity_Briefcase_Calendar_Crown_FileText_Loader2_Mail_MapPin_Shield_TrendingUp_User_UserCheck_UserX_lucide_react__WEBPACK_IMPORTED_MODULE_20__["default"], {
                                            className: "w-4 h-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                            lineNumber: 354,
                                            columnNumber: 21
                                        }, this),
                                        "Activate User"
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                    lineNumber: 345,
                                    columnNumber: 17
                                }, this),
                                isSuperAdmin && user.role !== "admin" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                    onClick: handlePromote,
                                    disabled: actionLoading,
                                    variant: "outline",
                                    className: "border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-500",
                                    children: [
                                        actionLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Activity_Briefcase_Calendar_Crown_FileText_Loader2_Mail_MapPin_Shield_TrendingUp_User_UserCheck_UserX_lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                            className: "w-4 h-4 mr-2 animate-spin"
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                            lineNumber: 368,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Activity_Briefcase_Calendar_Crown_FileText_Loader2_Mail_MapPin_Shield_TrendingUp_User_UserCheck_UserX_lucide_react__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                            className: "w-4 h-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                            lineNumber: 370,
                                            columnNumber: 21
                                        }, this),
                                        "Promote to Admin"
                                    ]
                                }, void 0, true, {
                                    fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                                    lineNumber: 361,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                            lineNumber: 324,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
                    lineNumber: 195,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
            lineNumber: 170,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/admin/user-profile-modal.tsx",
        lineNumber: 169,
        columnNumber: 5
    }, this);
}


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

/***/ "(ssr)/./components/ui/alert-dialog.tsx":
/*!****************************************!*\
  !*** ./components/ui/alert-dialog.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertDialog: () => (/* binding */ AlertDialog),
/* harmony export */   AlertDialogAction: () => (/* binding */ AlertDialogAction),
/* harmony export */   AlertDialogCancel: () => (/* binding */ AlertDialogCancel),
/* harmony export */   AlertDialogContent: () => (/* binding */ AlertDialogContent),
/* harmony export */   AlertDialogDescription: () => (/* binding */ AlertDialogDescription),
/* harmony export */   AlertDialogFooter: () => (/* binding */ AlertDialogFooter),
/* harmony export */   AlertDialogHeader: () => (/* binding */ AlertDialogHeader),
/* harmony export */   AlertDialogOverlay: () => (/* binding */ AlertDialogOverlay),
/* harmony export */   AlertDialogPortal: () => (/* binding */ AlertDialogPortal),
/* harmony export */   AlertDialogTitle: () => (/* binding */ AlertDialogTitle),
/* harmony export */   AlertDialogTrigger: () => (/* binding */ AlertDialogTrigger)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/react-alert-dialog */ "(ssr)/./node_modules/@radix-ui/react-alert-dialog/dist/index.mjs");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/utils */ "(ssr)/./lib/utils.ts");
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/button */ "(ssr)/./components/ui/button.tsx");
/* __next_internal_client_entry_do_not_use__ AlertDialog,AlertDialogPortal,AlertDialogOverlay,AlertDialogTrigger,AlertDialogContent,AlertDialogHeader,AlertDialogFooter,AlertDialogTitle,AlertDialogDescription,AlertDialogAction,AlertDialogCancel auto */ 




const AlertDialog = _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.Root;
const AlertDialogTrigger = _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.Trigger;
const AlertDialogPortal = _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.Portal;
const AlertDialogOverlay = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.Overlay, {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props,
        ref: ref
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/alert-dialog.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, undefined));
AlertDialogOverlay.displayName = _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.Overlay.displayName;
const AlertDialogContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AlertDialogPortal, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AlertDialogOverlay, {}, void 0, false, {
                fileName: "/home/ubuntu/spark-platform/components/ui/alert-dialog.tsx",
                lineNumber: 35,
                columnNumber: 5
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.Content, {
                ref: ref,
                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className),
                ...props
            }, void 0, false, {
                fileName: "/home/ubuntu/spark-platform/components/ui/alert-dialog.tsx",
                lineNumber: 36,
                columnNumber: 5
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "/home/ubuntu/spark-platform/components/ui/alert-dialog.tsx",
        lineNumber: 34,
        columnNumber: 3
    }, undefined));
AlertDialogContent.displayName = _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.Content.displayName;
const AlertDialogHeader = ({ className, ...props })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex flex-col space-y-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/alert-dialog.tsx",
        lineNumber: 52,
        columnNumber: 3
    }, undefined);
AlertDialogHeader.displayName = "AlertDialogHeader";
const AlertDialogFooter = ({ className, ...props })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/alert-dialog.tsx",
        lineNumber: 66,
        columnNumber: 3
    }, undefined);
AlertDialogFooter.displayName = "AlertDialogFooter";
const AlertDialogTitle = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.Title, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("text-lg font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/alert-dialog.tsx",
        lineNumber: 80,
        columnNumber: 3
    }, undefined));
AlertDialogTitle.displayName = _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.Title.displayName;
const AlertDialogDescription = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.Description, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/alert-dialog.tsx",
        lineNumber: 92,
        columnNumber: 3
    }, undefined));
AlertDialogDescription.displayName = _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.Description.displayName;
const AlertDialogAction = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.Action, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)((0,_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.buttonVariants)(), className),
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/alert-dialog.tsx",
        lineNumber: 105,
        columnNumber: 3
    }, undefined));
AlertDialogAction.displayName = _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.Action.displayName;
const AlertDialogCancel = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.Cancel, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)((0,_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.buttonVariants)({
            variant: "outline"
        }), "mt-2 sm:mt-0", className),
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/alert-dialog.tsx",
        lineNumber: 117,
        columnNumber: 3
    }, undefined));
AlertDialogCancel.displayName = _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.Cancel.displayName;



/***/ }),

/***/ "(ssr)/./components/ui/avatar.tsx":
/*!**********************************!*\
  !*** ./components/ui/avatar.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Avatar: () => (/* binding */ Avatar),
/* harmony export */   AvatarFallback: () => (/* binding */ AvatarFallback),
/* harmony export */   AvatarImage: () => (/* binding */ AvatarImage)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-avatar */ "(ssr)/./node_modules/@radix-ui/react-avatar/dist/index.mjs");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/utils */ "(ssr)/./lib/utils.ts");
/* __next_internal_client_entry_do_not_use__ Avatar,AvatarImage,AvatarFallback auto */ 



const Avatar = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_3__.Root, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/avatar.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, undefined));
Avatar.displayName = _radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_3__.Root.displayName;
const AvatarImage = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_3__.Image, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("aspect-square h-full w-full", className),
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/avatar.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, undefined));
AvatarImage.displayName = _radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_3__.Image.displayName;
const AvatarFallback = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_3__.Fallback, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/avatar.tsx",
        lineNumber: 39,
        columnNumber: 3
    }, undefined));
AvatarFallback.displayName = _radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_3__.Fallback.displayName;



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

/***/ "(ssr)/./components/ui/calendar.tsx":
/*!************************************!*\
  !*** ./components/ui/calendar.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Calendar: () => (/* binding */ Calendar)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _barrel_optimize_names_ChevronLeft_ChevronRight_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronLeft,ChevronRight!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/chevron-left.js");
/* harmony import */ var _barrel_optimize_names_ChevronLeft_ChevronRight_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronLeft,ChevronRight!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/chevron-right.js");
/* harmony import */ var react_day_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-day-picker */ "(ssr)/./node_modules/react-day-picker/dist/index.esm.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/utils */ "(ssr)/./lib/utils.ts");
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/button */ "(ssr)/./components/ui/button.tsx");
/* __next_internal_client_entry_do_not_use__ Calendar auto */ 





function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_day_picker__WEBPACK_IMPORTED_MODULE_2__.DayPicker, {
        showOutsideDays: showOutsideDays,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("p-3", className),
        classNames: {
            months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
            month: "space-y-4",
            caption: "flex justify-center pt-1 relative items-center",
            caption_label: "text-sm font-medium",
            nav: "space-x-1 flex items-center",
            nav_button: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)((0,_components_ui_button__WEBPACK_IMPORTED_MODULE_4__.buttonVariants)({
                variant: "outline"
            }), "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"),
            nav_button_previous: "absolute left-1",
            nav_button_next: "absolute right-1",
            table: "w-full border-collapse space-y-1",
            head_row: "flex",
            head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
            row: "flex w-full mt-2",
            cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
            day: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)((0,_components_ui_button__WEBPACK_IMPORTED_MODULE_4__.buttonVariants)({
                variant: "ghost"
            }), "h-9 w-9 p-0 font-normal aria-selected:opacity-100"),
            day_range_end: "day-range-end",
            day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
            day_today: "bg-accent text-accent-foreground",
            day_outside: "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
            day_disabled: "text-muted-foreground opacity-50",
            day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
            day_hidden: "invisible",
            ...classNames
        },
        components: {
            IconLeft: ({ ...props })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronLeft_ChevronRight_lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "/home/ubuntu/spark-platform/components/ui/calendar.tsx",
                    lineNumber: 57,
                    columnNumber: 37
                }, void 0),
            IconRight: ({ ...props })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronLeft_ChevronRight_lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "/home/ubuntu/spark-platform/components/ui/calendar.tsx",
                    lineNumber: 58,
                    columnNumber: 38
                }, void 0)
        },
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/calendar.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
Calendar.displayName = "Calendar";



/***/ }),

/***/ "(ssr)/./components/ui/card.tsx":
/*!********************************!*\
  !*** ./components/ui/card.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Card: () => (/* binding */ Card),
/* harmony export */   CardContent: () => (/* binding */ CardContent),
/* harmony export */   CardDescription: () => (/* binding */ CardDescription),
/* harmony export */   CardFooter: () => (/* binding */ CardFooter),
/* harmony export */   CardHeader: () => (/* binding */ CardHeader),
/* harmony export */   CardTitle: () => (/* binding */ CardTitle)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/utils */ "(ssr)/./lib/utils.ts");



const Card = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-2px] border-border hover:border-border/80", className),
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/card.tsx",
        lineNumber: 10,
        columnNumber: 3
    }, undefined));
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex flex-col space-y-2 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/card.tsx",
        lineNumber: 25,
        columnNumber: 3
    }, undefined));
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("text-xl font-bold leading-tight tracking-tight text-card-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/card.tsx",
        lineNumber: 37,
        columnNumber: 3
    }, undefined));
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("text-sm text-muted-foreground leading-relaxed", className),
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/card.tsx",
        lineNumber: 52,
        columnNumber: 3
    }, undefined));
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/card.tsx",
        lineNumber: 64,
        columnNumber: 3
    }, undefined));
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/card.tsx",
        lineNumber: 72,
        columnNumber: 3
    }, undefined));
CardFooter.displayName = "CardFooter";



/***/ }),

/***/ "(ssr)/./components/ui/checkbox.tsx":
/*!************************************!*\
  !*** ./components/ui/checkbox.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Checkbox: () => (/* binding */ Checkbox)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-checkbox */ "(ssr)/./node_modules/@radix-ui/react-checkbox/dist/index.mjs");
/* harmony import */ var _barrel_optimize_names_Check_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Check!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/check.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/utils */ "(ssr)/./lib/utils.ts");
/* __next_internal_client_entry_do_not_use__ Checkbox auto */ 




const Checkbox = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_3__.Root, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className),
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_3__.Indicator, {
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex items-center justify-center text-current"),
            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Check_lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "/home/ubuntu/spark-platform/components/ui/checkbox.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, undefined)
        }, void 0, false, {
            fileName: "/home/ubuntu/spark-platform/components/ui/checkbox.tsx",
            lineNumber: 21,
            columnNumber: 5
        }, undefined)
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/checkbox.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, undefined));
Checkbox.displayName = _radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_3__.Root.displayName;



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

/***/ "(ssr)/./components/ui/dropdown-menu.tsx":
/*!*****************************************!*\
  !*** ./components/ui/dropdown-menu.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DropdownMenu: () => (/* binding */ DropdownMenu),
/* harmony export */   DropdownMenuCheckboxItem: () => (/* binding */ DropdownMenuCheckboxItem),
/* harmony export */   DropdownMenuContent: () => (/* binding */ DropdownMenuContent),
/* harmony export */   DropdownMenuGroup: () => (/* binding */ DropdownMenuGroup),
/* harmony export */   DropdownMenuItem: () => (/* binding */ DropdownMenuItem),
/* harmony export */   DropdownMenuLabel: () => (/* binding */ DropdownMenuLabel),
/* harmony export */   DropdownMenuPortal: () => (/* binding */ DropdownMenuPortal),
/* harmony export */   DropdownMenuRadioGroup: () => (/* binding */ DropdownMenuRadioGroup),
/* harmony export */   DropdownMenuRadioItem: () => (/* binding */ DropdownMenuRadioItem),
/* harmony export */   DropdownMenuSeparator: () => (/* binding */ DropdownMenuSeparator),
/* harmony export */   DropdownMenuShortcut: () => (/* binding */ DropdownMenuShortcut),
/* harmony export */   DropdownMenuSub: () => (/* binding */ DropdownMenuSub),
/* harmony export */   DropdownMenuSubContent: () => (/* binding */ DropdownMenuSubContent),
/* harmony export */   DropdownMenuSubTrigger: () => (/* binding */ DropdownMenuSubTrigger),
/* harmony export */   DropdownMenuTrigger: () => (/* binding */ DropdownMenuTrigger)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-dropdown-menu */ "(ssr)/./node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs");
/* harmony import */ var _barrel_optimize_names_Check_ChevronRight_Circle_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Check,ChevronRight,Circle!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/chevron-right.js");
/* harmony import */ var _barrel_optimize_names_Check_ChevronRight_Circle_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Check,ChevronRight,Circle!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/check.js");
/* harmony import */ var _barrel_optimize_names_Check_ChevronRight_Circle_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Check,ChevronRight,Circle!=!lucide-react */ "(ssr)/./node_modules/lucide-react/dist/esm/icons/circle.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/utils */ "(ssr)/./lib/utils.ts");
/* __next_internal_client_entry_do_not_use__ DropdownMenu,DropdownMenuTrigger,DropdownMenuContent,DropdownMenuItem,DropdownMenuCheckboxItem,DropdownMenuRadioItem,DropdownMenuLabel,DropdownMenuSeparator,DropdownMenuShortcut,DropdownMenuGroup,DropdownMenuPortal,DropdownMenuSub,DropdownMenuSubContent,DropdownMenuSubTrigger,DropdownMenuRadioGroup auto */ 




const DropdownMenu = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.Root;
const DropdownMenuTrigger = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.Trigger;
const DropdownMenuGroup = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.Group;
const DropdownMenuPortal = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.Portal;
const DropdownMenuSub = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.Sub;
const DropdownMenuRadioGroup = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.RadioGroup;
const DropdownMenuSubTrigger = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, inset, children, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.SubTrigger, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent", inset && "pl-8", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Check_ChevronRight_Circle_lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
                className: "ml-auto h-4 w-4"
            }, void 0, false, {
                fileName: "/home/ubuntu/spark-platform/components/ui/dropdown-menu.tsx",
                lineNumber: 38,
                columnNumber: 5
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "/home/ubuntu/spark-platform/components/ui/dropdown-menu.tsx",
        lineNumber: 28,
        columnNumber: 3
    }, undefined));
DropdownMenuSubTrigger.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.SubTrigger.displayName;
const DropdownMenuSubContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.SubContent, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/dropdown-menu.tsx",
        lineNumber: 48,
        columnNumber: 3
    }, undefined));
DropdownMenuSubContent.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.SubContent.displayName;
const DropdownMenuContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.Portal, {
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.Content, {
            ref: ref,
            sideOffset: sideOffset,
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
            ...props
        }, void 0, false, {
            fileName: "/home/ubuntu/spark-platform/components/ui/dropdown-menu.tsx",
            lineNumber: 65,
            columnNumber: 5
        }, undefined)
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/dropdown-menu.tsx",
        lineNumber: 64,
        columnNumber: 3
    }, undefined));
DropdownMenuContent.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.Content.displayName;
const DropdownMenuItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, inset, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.Item, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", inset && "pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/dropdown-menu.tsx",
        lineNumber: 84,
        columnNumber: 3
    }, undefined));
DropdownMenuItem.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.Item.displayName;
const DropdownMenuCheckboxItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, children, checked, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.CheckboxItem, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.ItemIndicator, {
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Check_ChevronRight_Circle_lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "/home/ubuntu/spark-platform/components/ui/dropdown-menu.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, undefined)
                }, void 0, false, {
                    fileName: "/home/ubuntu/spark-platform/components/ui/dropdown-menu.tsx",
                    lineNumber: 110,
                    columnNumber: 7
                }, undefined)
            }, void 0, false, {
                fileName: "/home/ubuntu/spark-platform/components/ui/dropdown-menu.tsx",
                lineNumber: 109,
                columnNumber: 5
            }, undefined),
            children
        ]
    }, void 0, true, {
        fileName: "/home/ubuntu/spark-platform/components/ui/dropdown-menu.tsx",
        lineNumber: 100,
        columnNumber: 3
    }, undefined));
DropdownMenuCheckboxItem.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.CheckboxItem.displayName;
const DropdownMenuRadioItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.RadioItem, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props,
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.ItemIndicator, {
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Check_ChevronRight_Circle_lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        className: "h-2 w-2 fill-current"
                    }, void 0, false, {
                        fileName: "/home/ubuntu/spark-platform/components/ui/dropdown-menu.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, undefined)
                }, void 0, false, {
                    fileName: "/home/ubuntu/spark-platform/components/ui/dropdown-menu.tsx",
                    lineNumber: 133,
                    columnNumber: 7
                }, undefined)
            }, void 0, false, {
                fileName: "/home/ubuntu/spark-platform/components/ui/dropdown-menu.tsx",
                lineNumber: 132,
                columnNumber: 5
            }, undefined),
            children
        ]
    }, void 0, true, {
        fileName: "/home/ubuntu/spark-platform/components/ui/dropdown-menu.tsx",
        lineNumber: 124,
        columnNumber: 3
    }, undefined));
DropdownMenuRadioItem.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.RadioItem.displayName;
const DropdownMenuLabel = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, inset, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.Label, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/dropdown-menu.tsx",
        lineNumber: 148,
        columnNumber: 3
    }, undefined));
DropdownMenuLabel.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.Label.displayName;
const DropdownMenuSeparator = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.Separator, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/dropdown-menu.tsx",
        lineNumber: 164,
        columnNumber: 3
    }, undefined));
DropdownMenuSeparator.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__.Separator.displayName;
const DropdownMenuShortcut = ({ className, ...props })=>{
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("ml-auto text-xs tracking-widest opacity-60", className),
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/dropdown-menu.tsx",
        lineNumber: 177,
        columnNumber: 5
    }, undefined);
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";



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

/***/ "(ssr)/./components/ui/popover.tsx":
/*!***********************************!*\
  !*** ./components/ui/popover.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Popover: () => (/* binding */ Popover),
/* harmony export */   PopoverContent: () => (/* binding */ PopoverContent),
/* harmony export */   PopoverTrigger: () => (/* binding */ PopoverTrigger)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-popover */ "(ssr)/./node_modules/@radix-ui/react-popover/dist/index.mjs");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/utils */ "(ssr)/./lib/utils.ts");
/* __next_internal_client_entry_do_not_use__ Popover,PopoverTrigger,PopoverContent auto */ 



const Popover = _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_3__.Root;
const PopoverTrigger = _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_3__.Trigger;
const PopoverContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_3__.Portal, {
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_3__.Content, {
            ref: ref,
            align: align,
            sideOffset: sideOffset,
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
            ...props
        }, void 0, false, {
            fileName: "/home/ubuntu/spark-platform/components/ui/popover.tsx",
            lineNumber: 17,
            columnNumber: 5
        }, undefined)
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/popover.tsx",
        lineNumber: 16,
        columnNumber: 3
    }, undefined));
PopoverContent.displayName = _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_3__.Content.displayName;



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

/***/ "(ssr)/./components/ui/table.tsx":
/*!*********************************!*\
  !*** ./components/ui/table.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Table: () => (/* binding */ Table),
/* harmony export */   TableBody: () => (/* binding */ TableBody),
/* harmony export */   TableCaption: () => (/* binding */ TableCaption),
/* harmony export */   TableCell: () => (/* binding */ TableCell),
/* harmony export */   TableFooter: () => (/* binding */ TableFooter),
/* harmony export */   TableHead: () => (/* binding */ TableHead),
/* harmony export */   TableHeader: () => (/* binding */ TableHeader),
/* harmony export */   TableRow: () => (/* binding */ TableRow)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/utils */ "(ssr)/./lib/utils.ts");



const Table = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "relative w-full overflow-auto",
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
            ref: ref,
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("w-full caption-bottom text-sm", className),
            ...props
        }, void 0, false, {
            fileName: "/home/ubuntu/spark-platform/components/ui/table.tsx",
            lineNumber: 10,
            columnNumber: 5
        }, undefined)
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/table.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, undefined));
Table.displayName = "Table";
const TableHeader = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("[&_tr]:border-b", className),
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/table.tsx",
        lineNumber: 23,
        columnNumber: 3
    }, undefined));
TableHeader.displayName = "TableHeader";
const TableBody = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("[&_tr:last-child]:border-0", className),
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/table.tsx",
        lineNumber: 31,
        columnNumber: 3
    }, undefined));
TableBody.displayName = "TableBody";
const TableFooter = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tfoot", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/table.tsx",
        lineNumber: 43,
        columnNumber: 3
    }, undefined));
TableFooter.displayName = "TableFooter";
const TableRow = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/table.tsx",
        lineNumber: 58,
        columnNumber: 3
    }, undefined));
TableRow.displayName = "TableRow";
const TableHead = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", className),
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/table.tsx",
        lineNumber: 73,
        columnNumber: 3
    }, undefined));
TableHead.displayName = "TableHead";
const TableCell = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/table.tsx",
        lineNumber: 88,
        columnNumber: 3
    }, undefined));
TableCell.displayName = "TableCell";
const TableCaption = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("caption", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("mt-4 text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/components/ui/table.tsx",
        lineNumber: 100,
        columnNumber: 3
    }, undefined));
TableCaption.displayName = "TableCaption";



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

/***/ "(rsc)/./app/admin/layout.tsx":
/*!******************************!*\
  !*** ./app/admin/layout.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AdminLayoutWrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(rsc)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_admin_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/admin-layout */ "(rsc)/./components/admin-layout.tsx");


function AdminLayoutWrapper({ children }) {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_admin_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
        children: children
    }, void 0, false, {
        fileName: "/home/ubuntu/spark-platform/app/admin/layout.tsx",
        lineNumber: 9,
        columnNumber: 10
    }, this);
}


/***/ }),

/***/ "(rsc)/./app/admin/users/page.tsx":
/*!**********************************!*\
  !*** ./app/admin/users/page.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/ubuntu/spark-platform/app/admin/users/page.tsx#default`));


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

/***/ "(rsc)/./components/admin-layout.tsx":
/*!*************************************!*\
  !*** ./components/admin-layout.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/ubuntu/spark-platform/components/admin-layout.tsx#default`));


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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/framer-motion","vendor-chunks/@radix-ui","vendor-chunks/@floating-ui","vendor-chunks/tailwind-merge","vendor-chunks/lucide-react","vendor-chunks/tslib","vendor-chunks/react-remove-scroll","vendor-chunks/aria-hidden","vendor-chunks/next-themes","vendor-chunks/react-remove-scroll-bar","vendor-chunks/use-callback-ref","vendor-chunks/use-sidecar","vendor-chunks/class-variance-authority","vendor-chunks/react-style-singleton","vendor-chunks/clsx","vendor-chunks/get-nonce","vendor-chunks/sonner","vendor-chunks/date-fns","vendor-chunks/react-day-picker"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fadmin%2Fusers%2Fpage&page=%2Fadmin%2Fusers%2Fpage&appPaths=%2Fadmin%2Fusers%2Fpage&pagePath=private-next-app-dir%2Fadmin%2Fusers%2Fpage.tsx&appDir=%2Fhome%2Fubuntu%2Fspark-platform%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fubuntu%2Fspark-platform&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();