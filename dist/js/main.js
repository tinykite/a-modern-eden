(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:d})},b.r=function(a){'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(a,'__esModule',{value:!0})},b.t=function(a,c){if(1&c&&(a=b(a)),8&c)return a;if(4&c&&'object'==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(b.r(d),Object.defineProperty(d,'default',{enumerable:!0,value:a}),2&c&&'string'!=typeof a)for(var e in a)b.d(d,e,function(b){return a[b]}.bind(null,e));return d},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s='./src/js/index.js')})({"./src/js/index.js":/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************//*! no static exports found */function(module,exports,__webpack_require__){'use strict';eval('\n\nvar _smoothScroll = __webpack_require__(/*! ./smoothScroll */ "./src/js/smoothScroll.js");\n\nvar _smoothScroll2 = _interopRequireDefault(_smoothScroll);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nvar jumpLinks = document.querySelectorAll(\'.js-smooth-jump-link\');\n\n[].concat(_toConsumableArray(jumpLinks)).forEach(function (el) {\n  el.addEventListener(\'click\', function (e) {\n    var pageFragmentToScrollTo = e.target.getAttribute(\'href\');\n    var elementToScrollTo = document.querySelector(pageFragmentToScrollTo);\n\n    (0, _smoothScroll2.default)(elementToScrollTo, 700, \'easeOutQuint\');\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/N2JhNSJdLCJuYW1lcyI6WyJqdW1wTGlua3MiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInBhZ2VGcmFnbWVudFRvU2Nyb2xsVG8iLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJlbGVtZW50VG9TY3JvbGxUbyIsInF1ZXJ5U2VsZWN0b3IiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsU0FBU0MsZ0JBQVQsQ0FBMEIsc0JBQTFCLENBQWxCOztBQUVBLDZCQUFJRixTQUFKLEdBQWVHLE9BQWYsQ0FBdUIsVUFBQ0MsRUFBRCxFQUFRO0FBQzdCQSxLQUFHQyxnQkFBSCxDQUFvQixPQUFwQixFQUE2QixVQUFDQyxDQUFELEVBQU87QUFDbEMsUUFBTUMseUJBQXlCRCxFQUFFRSxNQUFGLENBQVNDLFlBQVQsQ0FBc0IsTUFBdEIsQ0FBL0I7QUFDQSxRQUFNQyxvQkFBb0JULFNBQVNVLGFBQVQsQ0FBdUJKLHNCQUF2QixDQUExQjs7QUFFQSxnQ0FDRUcsaUJBREYsRUFFRSxHQUZGLEVBR0UsY0FIRjtBQUtELEdBVEQ7QUFVRCxDQVhEIiwiZmlsZSI6Ii4vc3JjL2pzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNtb290aFNjcm9sbCBmcm9tICcuL3Ntb290aFNjcm9sbCc7XG5cbmNvbnN0IGp1bXBMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1zbW9vdGgtanVtcC1saW5rJyk7XG5cblsuLi5qdW1wTGlua3NdLmZvckVhY2goKGVsKSA9PiB7XG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCBwYWdlRnJhZ21lbnRUb1Njcm9sbFRvID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgY29uc3QgZWxlbWVudFRvU2Nyb2xsVG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhZ2VGcmFnbWVudFRvU2Nyb2xsVG8pO1xuXG4gICAgc21vb3RoU2Nyb2xsKFxuICAgICAgZWxlbWVudFRvU2Nyb2xsVG8sXG4gICAgICA3MDAsXG4gICAgICAnZWFzZU91dFF1aW50JyxcbiAgICApO1xuICB9KTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/index.js\n')},"./src/js/smoothScroll.js":/*!********************************!*\
  !*** ./src/js/smoothScroll.js ***!
  \********************************//*! no static exports found */function(module,exports,__webpack_require__){'use strict';eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n// This function is mostly copy/pasted from:\n// https://pawelgrzybek.com/page-scroll-in-vanilla-javascript/\n/* eslint-disable */\nfunction smoothScroll(destination) {\n  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;\n  var easing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \'linear\';\n  var callback = arguments[3];\n\n\n  var easings = {\n    linear: function linear(t) {\n      return t;\n    },\n    easeOutQuint: function easeOutQuint(t) {\n      return 1 + --t * t * t * t * t;\n    }\n  };\n\n  var start = window.pageYOffset;\n  var startTime = \'now\' in window.performance ? performance.now() : new Date().getTime();\n\n  var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);\n  var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName(\'body\')[0].clientHeight;\n  var destinationOffset = typeof destination === \'number\' ? destination : destination.offsetTop;\n  var destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);\n\n  if (\'requestAnimationFrame\' in window === false) {\n    window.scroll(0, destinationOffsetToScroll);\n    if (callback) {\n      callback();\n    }\n    return;\n  }\n\n  function scroll() {\n    var now = \'now\' in window.performance ? performance.now() : new Date().getTime();\n    var time = Math.min(1, (now - startTime) / duration);\n    var timeFunction = easings[easing](time);\n    window.scroll(0, Math.ceil(timeFunction * (destinationOffsetToScroll - start) + start));\n\n    if (window.pageYOffset === destinationOffsetToScroll) {\n      if (callback) {\n        callback();\n      }\n      return;\n    }\n\n    requestAnimationFrame(scroll);\n  }\n\n  scroll();\n}\n\nexports.default = smoothScroll;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvc21vb3RoU2Nyb2xsLmpzPzU5Y2MiXSwibmFtZXMiOlsic21vb3RoU2Nyb2xsIiwiZGVzdGluYXRpb24iLCJkdXJhdGlvbiIsImVhc2luZyIsImNhbGxiYWNrIiwiZWFzaW5ncyIsImxpbmVhciIsInQiLCJlYXNlT3V0UXVpbnQiLCJzdGFydCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0Iiwic3RhcnRUaW1lIiwicGVyZm9ybWFuY2UiLCJub3ciLCJEYXRlIiwiZ2V0VGltZSIsImRvY3VtZW50SGVpZ2h0IiwiTWF0aCIsIm1heCIsImRvY3VtZW50IiwiYm9keSIsInNjcm9sbEhlaWdodCIsIm9mZnNldEhlaWdodCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsIndpbmRvd0hlaWdodCIsImlubmVySGVpZ2h0IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJkZXN0aW5hdGlvbk9mZnNldCIsIm9mZnNldFRvcCIsImRlc3RpbmF0aW9uT2Zmc2V0VG9TY3JvbGwiLCJyb3VuZCIsInNjcm9sbCIsInRpbWUiLCJtaW4iLCJ0aW1lRnVuY3Rpb24iLCJjZWlsIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLFNBQVNBLFlBQVQsQ0FBc0JDLFdBQXRCLEVBQWdGO0FBQUEsTUFBN0NDLFFBQTZDLHVFQUFsQyxHQUFrQztBQUFBLE1BQTdCQyxNQUE2Qix1RUFBcEIsUUFBb0I7QUFBQSxNQUFWQyxRQUFVOzs7QUFFOUUsTUFBTUMsVUFBVTtBQUNkQyxVQURjLGtCQUNQQyxDQURPLEVBQ0o7QUFDUixhQUFPQSxDQUFQO0FBQ0QsS0FIYTtBQUlkQyxnQkFKYyx3QkFJREQsQ0FKQyxFQUlFO0FBQ2QsYUFBTyxJQUFLLEVBQUVBLENBQUgsR0FBUUEsQ0FBUixHQUFZQSxDQUFaLEdBQWdCQSxDQUFoQixHQUFvQkEsQ0FBL0I7QUFDRDtBQU5hLEdBQWhCOztBQVNBLE1BQU1FLFFBQVFDLE9BQU9DLFdBQXJCO0FBQ0EsTUFBTUMsWUFBWSxTQUFTRixPQUFPRyxXQUFoQixHQUE4QkEsWUFBWUMsR0FBWixFQUE5QixHQUFrRCxJQUFJQyxJQUFKLEdBQVdDLE9BQVgsRUFBcEU7O0FBRUEsTUFBTUMsaUJBQWlCQyxLQUFLQyxHQUFMLENBQVNDLFNBQVNDLElBQVQsQ0FBY0MsWUFBdkIsRUFBcUNGLFNBQVNDLElBQVQsQ0FBY0UsWUFBbkQsRUFBaUVILFNBQVNJLGVBQVQsQ0FBeUJDLFlBQTFGLEVBQXdHTCxTQUFTSSxlQUFULENBQXlCRixZQUFqSSxFQUErSUYsU0FBU0ksZUFBVCxDQUF5QkQsWUFBeEssQ0FBdkI7QUFDQSxNQUFNRyxlQUFlaEIsT0FBT2lCLFdBQVAsSUFBc0JQLFNBQVNJLGVBQVQsQ0FBeUJDLFlBQS9DLElBQStETCxTQUFTUSxvQkFBVCxDQUE4QixNQUE5QixFQUFzQyxDQUF0QyxFQUF5Q0gsWUFBN0g7QUFDQSxNQUFNSSxvQkFBb0IsT0FBTzVCLFdBQVAsS0FBdUIsUUFBdkIsR0FBa0NBLFdBQWxDLEdBQWdEQSxZQUFZNkIsU0FBdEY7QUFDQSxNQUFNQyw0QkFBNEJiLEtBQUtjLEtBQUwsQ0FBV2YsaUJBQWlCWSxpQkFBakIsR0FBcUNILFlBQXJDLEdBQW9EVCxpQkFBaUJTLFlBQXJFLEdBQW9GRyxpQkFBL0YsQ0FBbEM7O0FBRUEsTUFBSSwyQkFBMkJuQixNQUEzQixLQUFzQyxLQUExQyxFQUFpRDtBQUMvQ0EsV0FBT3VCLE1BQVAsQ0FBYyxDQUFkLEVBQWlCRix5QkFBakI7QUFDQSxRQUFJM0IsUUFBSixFQUFjO0FBQ1pBO0FBQ0Q7QUFDRDtBQUNEOztBQUVELFdBQVM2QixNQUFULEdBQWtCO0FBQ2hCLFFBQU1uQixNQUFNLFNBQVNKLE9BQU9HLFdBQWhCLEdBQThCQSxZQUFZQyxHQUFaLEVBQTlCLEdBQWtELElBQUlDLElBQUosR0FBV0MsT0FBWCxFQUE5RDtBQUNBLFFBQU1rQixPQUFPaEIsS0FBS2lCLEdBQUwsQ0FBUyxDQUFULEVBQWEsQ0FBQ3JCLE1BQU1GLFNBQVAsSUFBb0JWLFFBQWpDLENBQWI7QUFDQSxRQUFNa0MsZUFBZS9CLFFBQVFGLE1BQVIsRUFBZ0IrQixJQUFoQixDQUFyQjtBQUNBeEIsV0FBT3VCLE1BQVAsQ0FBYyxDQUFkLEVBQWlCZixLQUFLbUIsSUFBTCxDQUFXRCxnQkFBZ0JMLDRCQUE0QnRCLEtBQTVDLENBQUQsR0FBdURBLEtBQWpFLENBQWpCOztBQUVBLFFBQUlDLE9BQU9DLFdBQVAsS0FBdUJvQix5QkFBM0IsRUFBc0Q7QUFDcEQsVUFBSTNCLFFBQUosRUFBYztBQUNaQTtBQUNEO0FBQ0Q7QUFDRDs7QUFFRGtDLDBCQUFzQkwsTUFBdEI7QUFDRDs7QUFFREE7QUFDRDs7a0JBRWNqQyxZIiwiZmlsZSI6Ii4vc3JjL2pzL3Ntb290aFNjcm9sbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZnVuY3Rpb24gaXMgbW9zdGx5IGNvcHkvcGFzdGVkIGZyb206XG4vLyBodHRwczovL3Bhd2VsZ3J6eWJlay5jb20vcGFnZS1zY3JvbGwtaW4tdmFuaWxsYS1qYXZhc2NyaXB0L1xuLyogZXNsaW50LWRpc2FibGUgKi9cbmZ1bmN0aW9uIHNtb290aFNjcm9sbChkZXN0aW5hdGlvbiwgZHVyYXRpb24gPSAyMDAsIGVhc2luZyA9ICdsaW5lYXInLCBjYWxsYmFjaykge1xuXG4gIGNvbnN0IGVhc2luZ3MgPSB7XG4gICAgbGluZWFyKHQpIHtcbiAgICAgIHJldHVybiB0O1xuICAgIH0sXG4gICAgZWFzZU91dFF1aW50KHQpIHtcbiAgICAgIHJldHVybiAxICsgKC0tdCkgKiB0ICogdCAqIHQgKiB0O1xuICAgIH0sXG4gIH07XG5cbiAgY29uc3Qgc3RhcnQgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gIGNvbnN0IHN0YXJ0VGltZSA9ICdub3cnIGluIHdpbmRvdy5wZXJmb3JtYW5jZSA/IHBlcmZvcm1hbmNlLm5vdygpIDogbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgY29uc3QgZG9jdW1lbnRIZWlnaHQgPSBNYXRoLm1heChkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCwgZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQpO1xuICBjb25zdCB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLmNsaWVudEhlaWdodDtcbiAgY29uc3QgZGVzdGluYXRpb25PZmZzZXQgPSB0eXBlb2YgZGVzdGluYXRpb24gPT09ICdudW1iZXInID8gZGVzdGluYXRpb24gOiBkZXN0aW5hdGlvbi5vZmZzZXRUb3A7XG4gIGNvbnN0IGRlc3RpbmF0aW9uT2Zmc2V0VG9TY3JvbGwgPSBNYXRoLnJvdW5kKGRvY3VtZW50SGVpZ2h0IC0gZGVzdGluYXRpb25PZmZzZXQgPCB3aW5kb3dIZWlnaHQgPyBkb2N1bWVudEhlaWdodCAtIHdpbmRvd0hlaWdodCA6IGRlc3RpbmF0aW9uT2Zmc2V0KTtcblxuICBpZiAoJ3JlcXVlc3RBbmltYXRpb25GcmFtZScgaW4gd2luZG93ID09PSBmYWxzZSkge1xuICAgIHdpbmRvdy5zY3JvbGwoMCwgZGVzdGluYXRpb25PZmZzZXRUb1Njcm9sbCk7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBmdW5jdGlvbiBzY3JvbGwoKSB7XG4gICAgY29uc3Qgbm93ID0gJ25vdycgaW4gd2luZG93LnBlcmZvcm1hbmNlID8gcGVyZm9ybWFuY2Uubm93KCkgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBjb25zdCB0aW1lID0gTWF0aC5taW4oMSwgKChub3cgLSBzdGFydFRpbWUpIC8gZHVyYXRpb24pKTtcbiAgICBjb25zdCB0aW1lRnVuY3Rpb24gPSBlYXNpbmdzW2Vhc2luZ10odGltZSk7XG4gICAgd2luZG93LnNjcm9sbCgwLCBNYXRoLmNlaWwoKHRpbWVGdW5jdGlvbiAqIChkZXN0aW5hdGlvbk9mZnNldFRvU2Nyb2xsIC0gc3RhcnQpKSArIHN0YXJ0KSk7XG5cbiAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID09PSBkZXN0aW5hdGlvbk9mZnNldFRvU2Nyb2xsKSB7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc2Nyb2xsKTtcbiAgfVxuXG4gIHNjcm9sbCgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzbW9vdGhTY3JvbGw7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/smoothScroll.js\n')}});