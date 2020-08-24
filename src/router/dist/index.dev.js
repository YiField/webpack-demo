"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var view = function view() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../components/views'));
  });
};

var css = function css() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../components/views/css'));
  });
};

var home = function home() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../components/home.vue'));
  });
};

var eReader = function eReader() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../components/eReader'));
  });
};

var better = function better() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../components/better'));
  });
};

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/',
  name: 'home',
  component: home
}, {
  path: '/views',
  name: 'views',
  component: view,
  children: [{
    path: 'css',
    name: 'css',
    component: css
  }]
}, {
  path: '/eReader',
  name: 'eReader',
  component: eReader
}, {
  path: '/better',
  name: 'better',
  component: better
}];

var _default = new _vueRouter["default"]({
  routes: routes
});

exports["default"] = _default;