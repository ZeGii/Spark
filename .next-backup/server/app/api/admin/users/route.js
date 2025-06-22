"use strict";
(() => {
var exports = {};
exports.id = "app/api/admin/users/route";
exports.ids = ["app/api/admin/users/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fusers%2Froute&page=%2Fapi%2Fadmin%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fusers%2Froute.ts&appDir=%2Fhome%2Fubuntu%2Fspark-platform%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fubuntu%2Fspark-platform&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fusers%2Froute&page=%2Fapi%2Fadmin%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fusers%2Froute.ts&appDir=%2Fhome%2Fubuntu%2Fspark-platform%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fubuntu%2Fspark-platform&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   patchFetch: () => (/* binding */ patchFetch),
/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   serverHooks: () => (/* binding */ serverHooks),
/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ "(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js");
/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ "(rsc)/./node_modules/next/dist/server/future/route-kind.js");
/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ "(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js");
/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_ubuntu_spark_platform_app_api_admin_users_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/admin/users/route.ts */ "(rsc)/./app/api/admin/users/route.ts");




// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,
        page: "/api/admin/users/route",
        pathname: "/api/admin/users",
        filename: "route",
        bundlePath: "app/api/admin/users/route"
    },
    resolvedPagePath: "/home/ubuntu/spark-platform/app/api/admin/users/route.ts",
    nextConfigOutput,
    userland: _home_ubuntu_spark_platform_app_api_admin_users_route_ts__WEBPACK_IMPORTED_MODULE_3__
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;
const originalPathname = "/api/admin/users/route";
function patchFetch() {
    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({
        serverHooks,
        staticGenerationAsyncStorage
    });
}


//# sourceMappingURL=app-route.js.map

/***/ }),

/***/ "(rsc)/./app/api/admin/users/route.ts":
/*!**************************************!*\
  !*** ./app/api/admin/users/route.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GET: () => (/* binding */ GET),
/* harmony export */   dynamic: () => (/* binding */ dynamic)
/* harmony export */ });
/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ "(rsc)/./node_modules/next/dist/api/server.js");
/* harmony import */ var _lib_auth_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/auth-utils */ "(rsc)/./lib/auth-utils.ts");
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/db */ "(rsc)/./lib/db.ts");



const dynamic = "force-dynamic";
async function GET(request) {
    try {
        const authResult = await (0,_lib_auth_utils__WEBPACK_IMPORTED_MODULE_1__.verifyAdminAuth)(request);
        if (!authResult.success) {
            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({
                error: authResult.error
            }, {
                status: 401
            });
        }
        // Extract parameters from query
        const { searchParams } = new URL(request.url);
        const startDate = searchParams.get("startDate");
        const endDate = searchParams.get("endDate");
        const page = parseInt(searchParams.get("page") || "1");
        const limit = parseInt(searchParams.get("limit") || "50");
        const search = searchParams.get("search");
        const sortBy = searchParams.get("sortBy") || "createdAt";
        const sortOrder = searchParams.get("sortOrder") || "desc";
        // New filter parameters
        const status = searchParams.get("status");
        const role = searchParams.get("role");
        const profileType = searchParams.get("profileType");
        const subscriptionPlan = searchParams.get("subscriptionPlan");
        const industry = searchParams.get("industry");
        const country = searchParams.get("country");
        const dateRangeStart = searchParams.get("dateRangeStart");
        const dateRangeEnd = searchParams.get("dateRangeEnd");
        // Validate pagination parameters
        const validPage = Math.max(1, page);
        const validLimit = Math.min(Math.max(1, limit), 100) // Max 100 records per page
        ;
        const skip = (validPage - 1) * validLimit;
        // Build date filter conditions (legacy support)
        const dateFilter = {};
        if (startDate && endDate) {
            const start = new Date(startDate);
            const end = new Date(endDate);
            // Validate dates
            if (!isNaN(start.getTime()) && !isNaN(end.getTime())) {
                dateFilter.createdAt = {
                    gte: start,
                    lte: end
                };
            }
        }
        // Build new date range filter (from filter system)
        if (dateRangeStart && dateRangeEnd) {
            const start = new Date(dateRangeStart);
            const end = new Date(dateRangeEnd);
            if (!isNaN(start.getTime()) && !isNaN(end.getTime())) {
                dateFilter.createdAt = {
                    gte: start,
                    lte: end
                };
            }
        }
        // Build search filter
        const searchFilter = {};
        if (search && search.trim()) {
            searchFilter.OR = [
                {
                    name: {
                        contains: search,
                        mode: "insensitive"
                    }
                },
                {
                    email: {
                        contains: search,
                        mode: "insensitive"
                    }
                },
                {
                    username: {
                        contains: search,
                        mode: "insensitive"
                    }
                },
                {
                    industry: {
                        contains: search,
                        mode: "insensitive"
                    }
                },
                {
                    country: {
                        contains: search,
                        mode: "insensitive"
                    }
                }
            ];
        }
        // Build status filter
        const statusFilter = {};
        if (status && status !== "all") {
            statusFilter.status = status;
        }
        // Build role filter
        const roleFilter = {};
        if (role && role !== "all") {
            roleFilter.role = role;
        }
        // Build profile type filter
        const profileTypeFilter = {};
        if (profileType && profileType !== "all") {
            profileTypeFilter.profileType = profileType;
        }
        // Build industry filter (support multiple values)
        const industryFilter = {};
        if (industry && industry !== "all") {
            const industries = industry.split(",").filter((i)=>i.trim());
            if (industries.length > 0) {
                industryFilter.industry = {
                    in: industries
                };
            }
        }
        // Build country filter (support multiple values)
        const countryFilter = {};
        if (country && country !== "all") {
            const countries = country.split(",").filter((c)=>c.trim());
            if (countries.length > 0) {
                countryFilter.country = {
                    in: countries
                };
            }
        }
        // Build subscription plan filter
        const subscriptionFilter = {};
        if (subscriptionPlan && subscriptionPlan !== "all") {
            subscriptionFilter.subscriptions = {
                some: {
                    plan: subscriptionPlan,
                    status: "active"
                }
            };
        }
        // Combine filters
        const whereClause = {
            ...dateFilter,
            ...searchFilter,
            ...statusFilter,
            ...roleFilter,
            ...profileTypeFilter,
            ...industryFilter,
            ...countryFilter,
            ...subscriptionFilter
        };
        // Build sort order
        const orderBy = {};
        const validSortFields = [
            "createdAt",
            "updatedAt",
            "name",
            "email",
            "status",
            "role"
        ];
        const sortField = validSortFields.includes(sortBy) ? sortBy : "createdAt";
        const sortDirection = sortOrder === "asc" ? "asc" : "desc";
        orderBy[sortField] = sortDirection;
        // Execute query for users and count
        const [users, totalCount] = await Promise.all([
            _lib_db__WEBPACK_IMPORTED_MODULE_2__.prisma.user.findMany({
                where: whereClause,
                select: {
                    id: true,
                    email: true,
                    username: true,
                    name: true,
                    profileType: true,
                    industry: true,
                    country: true,
                    role: true,
                    status: true,
                    createdAt: true,
                    updatedAt: true,
                    topics: {
                        select: {
                            id: true
                        },
                        ...startDate && endDate ? {
                            where: {
                                createdAt: {
                                    gte: new Date(startDate),
                                    lte: new Date(endDate)
                                }
                            }
                        } : {}
                    },
                    votes: {
                        select: {
                            id: true
                        },
                        ...startDate && endDate ? {
                            where: {
                                votedAt: {
                                    gte: new Date(startDate),
                                    lte: new Date(endDate)
                                }
                            }
                        } : {}
                    },
                    subscriptions: {
                        select: {
                            plan: true
                        },
                        where: {
                            status: "active"
                        },
                        take: 1
                    }
                },
                orderBy,
                skip,
                take: validLimit
            }),
            _lib_db__WEBPACK_IMPORTED_MODULE_2__.prisma.user.count({
                where: whereClause
            })
        ]);
        // Format users for response
        const formattedUsers = users.map((user)=>({
                id: user.id,
                email: user.email,
                username: user.username,
                name: user.name,
                profileType: user.profileType,
                industry: user.industry,
                country: user.country,
                role: user.role,
                status: user.status,
                createdAt: user.createdAt.toISOString(),
                lastActive: user.updatedAt.toISOString(),
                topicsCount: user.topics.length,
                votesCount: user.votes.length,
                subscriptionPlan: user.subscriptions[0]?.plan || "FREE"
            }));
        // Calculate pagination metadata
        const totalPages = Math.ceil(totalCount / validLimit);
        const hasNextPage = validPage < totalPages;
        const hasPreviousPage = validPage > 1;
        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({
            users: formattedUsers,
            pagination: {
                currentPage: validPage,
                totalPages,
                totalRecords: totalCount,
                recordsPerPage: validLimit,
                hasNextPage,
                hasPreviousPage,
                // Legacy support
                page: validPage,
                pageSize: validLimit,
                total: totalCount
            }
        });
    } catch (error) {
        console.error("Users API error:", error);
        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({
            error: "Failed to fetch users"
        }, {
            status: 500
        });
    }
}


/***/ }),

/***/ "(rsc)/./lib/auth-utils.ts":
/*!***************************!*\
  !*** ./lib/auth-utils.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAuthResponse: () => (/* binding */ createAuthResponse),
/* harmony export */   getUserFromRequest: () => (/* binding */ getUserFromRequest),
/* harmony export */   isAdmin: () => (/* binding */ isAdmin),
/* harmony export */   requireAdmin: () => (/* binding */ requireAdmin),
/* harmony export */   requireAuth: () => (/* binding */ requireAuth),
/* harmony export */   verifyAdminAuth: () => (/* binding */ verifyAdminAuth),
/* harmony export */   verifyAuth: () => (/* binding */ verifyAuth),
/* harmony export */   verifyToken: () => (/* binding */ verifyToken)
/* harmony export */ });
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db */ "(rsc)/./lib/db.ts");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "(rsc)/./node_modules/jsonwebtoken/index.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";
async function verifyToken(token) {
    try {
        const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().verify(token, JWT_SECRET);
        const user = await _db__WEBPACK_IMPORTED_MODULE_0__.prisma.user.findUnique({
            where: {
                id: decoded.userId
            },
            select: {
                id: true,
                email: true,
                name: true,
                role: true,
                username: true
            }
        });
        return user;
    } catch (error) {
        return null;
    }
}
async function getUserFromRequest(request) {
    const token = request.cookies.get("auth-token")?.value;
    if (!token) return null;
    return await verifyToken(token);
}
function isAdmin(user) {
    return user?.role === "admin";
}
function requireAuth(user) {
    if (!user) {
        throw new Error("Authentication required");
    }
    return user;
}
function requireAdmin(user) {
    const authUser = requireAuth(user);
    if (!isAdmin(authUser)) {
        throw new Error("Admin access required");
    }
    return authUser;
}
async function createAuthResponse(user) {
    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign({
        userId: user.id,
        email: user.email,
        role: user.role
    }, JWT_SECRET, {
        expiresIn: "7d"
    });
    return {
        user: {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
            username: user.username
        },
        token
    };
}
async function verifyAuth(request) {
    return await getUserFromRequest(request);
}
async function verifyAdminAuth(request) {
    try {
        const user = await getUserFromRequest(request);
        if (!user) {
            return {
                success: false,
                error: "Authentication required",
                status: 401
            };
        }
        if (!isAdmin(user)) {
            return {
                success: false,
                error: "Admin access required",
                status: 403
            };
        }
        return {
            success: true,
            user
        };
    } catch (error) {
        return {
            success: false,
            error: "Authentication failed",
            status: 401
        };
    }
}


/***/ }),

/***/ "(rsc)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   db: () => (/* binding */ db),
/* harmony export */   prisma: () => (/* binding */ prisma)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
const db = prisma;
if (true) globalForPrisma.prisma = prisma;


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/jws","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/safe-buffer","vendor-chunks/ms","vendor-chunks/lodash.once","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isplainobject","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isinteger","vendor-chunks/lodash.isboolean","vendor-chunks/lodash.includes","vendor-chunks/jwa","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fusers%2Froute&page=%2Fapi%2Fadmin%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fusers%2Froute.ts&appDir=%2Fhome%2Fubuntu%2Fspark-platform%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fubuntu%2Fspark-platform&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();