(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/buttons.css":
/*!********************************!*\
  !*** ./assets/css/buttons.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/css/forms.css":
/*!******************************!*\
  !*** ./assets/css/forms.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/css/painel.css":
/*!*******************************!*\
  !*** ./assets/css/painel.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/css/style.css":
/*!******************************!*\
  !*** ./assets/css/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./assets/css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_painel_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/painel.css */ "./assets/css/painel.css");
/* harmony import */ var _css_painel_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_painel_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_buttons_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/buttons.css */ "./assets/css/buttons.css");
/* harmony import */ var _css_buttons_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_buttons_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_forms_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/forms.css */ "./assets/css/forms.css");
/* harmony import */ var _css_forms_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_forms_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../js/main.js */ "./assets/js/main.js");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_main_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_painel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../js/painel.js */ "./assets/js/painel.js");
/* harmony import */ var _js_painel_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_painel_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _vendor_font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../vendor/font-awesome/css/font-awesome.min.css */ "./assets/vendor/font-awesome/css/font-awesome.min.css");
/* harmony import */ var _vendor_font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_vendor_font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_9__);
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)



 // JS


 //Vendors

 // Need jQuery or Bootstrap? Install it with "yarn add jquery", then uncomment to import it.




console.log('Hello Webpack Encore! Edit me in assets/js/app.js');
jquery__WEBPACK_IMPORTED_MODULE_7___default()(function () {});

/***/ }),

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {!function ($) {
  "use strict"; //navbar

  $('hr').hide();
  $('.tcenter').mouseover(function () {
    $('hr').show();
  });
  $('.tcenter').mouseout(function () {
    $('hr').hide();
  }); //navbar

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      document.getElementById("navbar").style.padding = "5px 10px";
      document.getElementById("logo").style.width = "100px";
    } else {
      document.getElementById("navbar").style.padding = "20px 10px";
      document.getElementById("logo").style.width = "150px";
    }
  }

  ; // var form = $('[name=formfeed]');
  // form.ajaxSubmit({
  //   url: Routing.generate('feed_inc', { id : $(this).val() }),
  //   type: 'post'
  // });
}(jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/painel.js":
/*!*****************************!*\
  !*** ./assets/js/painel.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {!function ($) {
  $('[data-target="#showitem"]').click(function () {
    $('[name="aionId"]').val($(this).data('id'));
    var amount = $(this).data('set');

    if (amount == 1) {
      $('#amount').show();
    } else {
      $('#amount').hide();
    }
  });
  $('[data-target="#vipMember"]').click(function () {
    $('[name="aionId"]').val($(this).data('id'));
    $('[name="msg"]').text('Voce está prestes a adquirir o pacote ' + $(this).data('set') + '. Você tem certeza que deseja realizar essa compra?');
  });
  $('[data-target="#editShopItem"]').click(function () {
    $('[name="id"]').val($(this).data('id'));
    var camount = $(this).data('set');

    if (camount == 1) {
      $('#amount').show();
    } else {
      $('#amount').hide();
    }
  });
  $('[data-target="#editFeed"]').click(function () {
    $('[name="id"]').val($(this).data('id'));
    $('[name="direct"]').val($(this).data('direct'));
  });
  $('[data-target="#messageView"]').click(function () {
    $('[name="date"]').text($(this).data('time'));
    $('[name="title"]').text($(this).data('set'));
    $('[name="text"]').text($(this).data('text'));
  });
  $('[data-target="#feedReport"]').click(function () {
    $('[name="formreport"]').attr('action', $(this).data('url'));
    $('[name="direct"]').val($(this).data('direct'));
    $('[name="post"]').val($(this).data('post'));
  });
  $('[data-target="#editItem"]').click(function () {
    $('[name="id"]').val($(this).data('id'));
    $('[name="aion"]').text($(this).data('id'));
  });
  $('[data-target="#deleteItem"]').click(function () {
    $('[name="id"]').val($(this).data('id'));
    $('[name="aion"]').text($(this).data('name'));
  });
  $('[data-target="#promoItem"]').click(function () {
    $('[name="id"]').val($(this).data('id'));
  });
  $('[data-target="#editType"]').click(function () {
    $('[name="id"]').val($(this).data('id'));
  });
  $('[data-target="#deleteType"]').click(function () {
    $('[name="id"]').val($(this).data('id'));
    $('[name="aion"]').text($(this).data('name'));
  });
  $('[data-target="#notifyReport"]').click(function () {
    $('[name="id"]').val($(this).data('id'));
    $('[name="pid"]').val($(this).data('pid'));
    $('[name="formnotify"]').attr('action', $(this).data('url'));
  });
  $('[data-target="#unLock"]').click(function () {
    $('[name="id"]').val($(this).data('id'));
  });
  $('[data-target="#carouselEdit"]').click(function () {
    $('[name="id"]').val($(this).data('id'));
  });
  $('[data-target="#carouselActive"]').click(function () {
    $('[name="id"]').val($(this).data('id'));
  });
  $('[data-target="#carouselDelete"]').click(function () {
    $('[name="id"]').val($(this).data('id'));
  });
  $('[data-target="#noticeEdit"]').click(function () {
    $('[name="id"]').val($(this).data('id'));
  });
  $('[data-target="#noticeActive"]').click(function () {
    $('[name="id"]').val($(this).data('id'));
  });
  $('[data-target="#noticeDelete"]').click(function () {
    $('[name="id"]').val($(this).data('id'));
  });
  $('[data-target="#resourceEdit"]').click(function () {
    $('[name="id"]').val($(this).data('id'));
  });
  $('[data-target="#resourceActive"]').click(function () {
    $('[name="id"]').val($(this).data('id'));
  });
  $('[data-target="#resourceDelete"]').click(function () {
    $('[name="id"]').val($(this).data('id'));
  });
  $('#senha-submit').click(function (e) {
    e.preventDefault();
    var pwd = $('#pwd').val();
    var cpwd = $('#cpwd').val();

    if (pwd != cpwd) {
      $('#msg').text('As senhas estão diferentes.');
    } else {
      $('#form-redefinir').submit();
    }
  });
}(jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/vendor/font-awesome/css/font-awesome.min.css":
/*!*************************************************************!*\
  !*** ./assets/vendor/font-awesome/css/font-awesome.min.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2J1dHRvbnMuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvZm9ybXMuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvcGFpbmVsLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWluZWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3ZlbmRvci9mb250LWF3ZXNvbWUvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCIkIiwiaGlkZSIsIm1vdXNlb3ZlciIsInNob3ciLCJtb3VzZW91dCIsIndpbmRvdyIsIm9uc2Nyb2xsIiwic2Nyb2xsRnVuY3Rpb24iLCJkb2N1bWVudCIsImJvZHkiLCJzY3JvbGxUb3AiLCJkb2N1bWVudEVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwicGFkZGluZyIsIndpZHRoIiwialF1ZXJ5IiwiY2xpY2siLCJ2YWwiLCJkYXRhIiwiYW1vdW50IiwidGV4dCIsImNhbW91bnQiLCJhdHRyIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHdkIiwiY3B3ZCIsInN1Ym1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtDQUlBOztBQUNBO0NBR0E7O0NBR0E7O0FBQ0E7QUFD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VXFCLElBQVYsQ0FBZSw2QkFBZjtBQUNILEtBRkQsTUFFSztBQUNEckIsT0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUI0QixNQUFyQjtBQUNIO0FBQ0osR0FURDtBQWFILENBbElBLENBa0lFWixNQWxJRixDQUFELEM7Ozs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4uL2Nzcy9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuLi9jc3MvcGFpbmVsLmNzcyc7XG5pbXBvcnQgJy4uL2Nzcy9idXR0b25zLmNzcyc7XG5pbXBvcnQgJy4uL2Nzcy9mb3Jtcy5jc3MnO1xuXG5cbi8vIEpTXG5pbXBvcnQgJy4uL2pzL21haW4uanMnO1xuaW1wb3J0ICcuLi9qcy9wYWluZWwuanMnO1xuXG4vL1ZlbmRvcnNcbmltcG9ydCAnLi4vdmVuZG9yL2ZvbnQtYXdlc29tZS9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnO1xuXG4vLyBOZWVkIGpRdWVyeSBvciBCb290c3RyYXA/IEluc3RhbGwgaXQgd2l0aCBcInlhcm4gYWRkIGpxdWVyeVwiLCB0aGVuIHVuY29tbWVudCB0byBpbXBvcnQgaXQuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0ICdib290c3RyYXAnO1xuXG5jb25zb2xlLmxvZygnSGVsbG8gV2VicGFjayBFbmNvcmUhIEVkaXQgbWUgaW4gYXNzZXRzL2pzL2FwcC5qcycpO1xuXG4kKGZ1bmN0aW9uKCl7XG5cbn0pOyIsIiEoZnVuY3Rpb24oJCkge1xyXG4gIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAvL25hdmJhclxyXG4gICQoJ2hyJykuaGlkZSgpO1xyXG4gICQoJy50Y2VudGVyJykubW91c2VvdmVyKGZ1bmN0aW9uKCl7XHJcbiAgICAkKCdocicpLnNob3coKTtcclxuICB9KTtcclxuXHJcbiAgJCgnLnRjZW50ZXInKS5tb3VzZW91dChmdW5jdGlvbigpe1xyXG4gICAgJCgnaHInKS5oaWRlKCk7XHJcbiAgfSk7XHJcblxyXG4gIC8vbmF2YmFyXHJcbiAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24oKSB7c2Nyb2xsRnVuY3Rpb24oKX07XHJcblxyXG4gIGZ1bmN0aW9uIHNjcm9sbEZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID4gMzAwIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPiAzMDApIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXJcIikuc3R5bGUucGFkZGluZyA9IFwiNXB4IDEwcHhcIjtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dvXCIpLnN0eWxlLndpZHRoID0gXCIxMDBweFwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXJcIikuc3R5bGUucGFkZGluZyA9IFwiMjBweCAxMHB4XCI7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9nb1wiKS5zdHlsZS53aWR0aCA9IFwiMTUwcHhcIjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyB2YXIgZm9ybSA9ICQoJ1tuYW1lPWZvcm1mZWVkXScpO1xyXG5cclxuICAvLyBmb3JtLmFqYXhTdWJtaXQoe1xyXG4gIC8vICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdmZWVkX2luYycsIHsgaWQgOiAkKHRoaXMpLnZhbCgpIH0pLFxyXG4gIC8vICAgdHlwZTogJ3Bvc3QnXHJcbiAgLy8gfSk7XHJcblxyXG59KShqUXVlcnkpOyIsIiEoZnVuY3Rpb24oJCl7XG4gICAgJCgnW2RhdGEtdGFyZ2V0PVwiI3Nob3dpdGVtXCJdJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnW25hbWU9XCJhaW9uSWRcIl0nKS52YWwoJCh0aGlzKS5kYXRhKCdpZCcpKTtcblxuICAgICAgICB2YXIgYW1vdW50ID0gJCh0aGlzKS5kYXRhKCdzZXQnKTtcbiAgICAgICAgXG4gICAgICAgIGlmKGFtb3VudCA9PSAxKXtcbiAgICAgICAgICAgICQoJyNhbW91bnQnKS5zaG93KCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgJCgnI2Ftb3VudCcpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAkKCdbZGF0YS10YXJnZXQ9XCIjdmlwTWVtYmVyXCJdJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnW25hbWU9XCJhaW9uSWRcIl0nKS52YWwoJCh0aGlzKS5kYXRhKCdpZCcpKTtcbiAgICAgICAgJCgnW25hbWU9XCJtc2dcIl0nKS50ZXh0KCdWb2NlIGVzdMOhIHByZXN0ZXMgYSBhZHF1aXJpciBvIHBhY290ZSAnKygkKHRoaXMpLmRhdGEoJ3NldCcpKSsnLiBWb2PDqiB0ZW0gY2VydGV6YSBxdWUgZGVzZWphIHJlYWxpemFyIGVzc2EgY29tcHJhPycpO1xuXG4gICAgICAgIFxuICAgIH0pXG5cbiAgICAkKCdbZGF0YS10YXJnZXQ9XCIjZWRpdFNob3BJdGVtXCJdJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnW25hbWU9XCJpZFwiXScpLnZhbCgkKHRoaXMpLmRhdGEoJ2lkJykpO1xuICAgICAgICB2YXIgY2Ftb3VudCA9ICQodGhpcykuZGF0YSgnc2V0Jyk7XG4gICAgICAgIFxuICAgICAgICBpZihjYW1vdW50ID09IDEpe1xuICAgICAgICAgICAgJCgnI2Ftb3VudCcpLnNob3coKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAkKCcjYW1vdW50JykuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgICQoJ1tkYXRhLXRhcmdldD1cIiNlZGl0RmVlZFwiXScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJ1tuYW1lPVwiaWRcIl0nKS52YWwoJCh0aGlzKS5kYXRhKCdpZCcpKTtcbiAgICAgICAgJCgnW25hbWU9XCJkaXJlY3RcIl0nKS52YWwoJCh0aGlzKS5kYXRhKCdkaXJlY3QnKSk7XG4gICAgfSlcblxuICAgICQoJ1tkYXRhLXRhcmdldD1cIiNtZXNzYWdlVmlld1wiXScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJ1tuYW1lPVwiZGF0ZVwiXScpLnRleHQoJCh0aGlzKS5kYXRhKCd0aW1lJykpO1xuICAgICAgICAkKCdbbmFtZT1cInRpdGxlXCJdJykudGV4dCgkKHRoaXMpLmRhdGEoJ3NldCcpKTtcbiAgICAgICAgJCgnW25hbWU9XCJ0ZXh0XCJdJykudGV4dCgkKHRoaXMpLmRhdGEoJ3RleHQnKSk7XG4gICAgfSlcblxuICAgICQoJ1tkYXRhLXRhcmdldD1cIiNmZWVkUmVwb3J0XCJdJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnW25hbWU9XCJmb3JtcmVwb3J0XCJdJykuYXR0cignYWN0aW9uJywkKHRoaXMpLmRhdGEoJ3VybCcpKTtcbiAgICAgICAgJCgnW25hbWU9XCJkaXJlY3RcIl0nKS52YWwoJCh0aGlzKS5kYXRhKCdkaXJlY3QnKSk7XG4gICAgICAgICQoJ1tuYW1lPVwicG9zdFwiXScpLnZhbCgkKHRoaXMpLmRhdGEoJ3Bvc3QnKSk7XG4gICAgfSlcblxuICAgICQoJ1tkYXRhLXRhcmdldD1cIiNlZGl0SXRlbVwiXScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJ1tuYW1lPVwiaWRcIl0nKS52YWwoJCh0aGlzKS5kYXRhKCdpZCcpKTtcbiAgICAgICAgJCgnW25hbWU9XCJhaW9uXCJdJykudGV4dCgkKHRoaXMpLmRhdGEoJ2lkJykpO1xuICAgIH0pXG5cbiAgICAkKCdbZGF0YS10YXJnZXQ9XCIjZGVsZXRlSXRlbVwiXScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJ1tuYW1lPVwiaWRcIl0nKS52YWwoJCh0aGlzKS5kYXRhKCdpZCcpKTtcbiAgICAgICAgJCgnW25hbWU9XCJhaW9uXCJdJykudGV4dCgkKHRoaXMpLmRhdGEoJ25hbWUnKSk7XG4gICAgfSlcblxuICAgICQoJ1tkYXRhLXRhcmdldD1cIiNwcm9tb0l0ZW1cIl0nKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAkKCdbbmFtZT1cImlkXCJdJykudmFsKCQodGhpcykuZGF0YSgnaWQnKSk7XG4gICAgfSlcblxuICAgICQoJ1tkYXRhLXRhcmdldD1cIiNlZGl0VHlwZVwiXScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJ1tuYW1lPVwiaWRcIl0nKS52YWwoJCh0aGlzKS5kYXRhKCdpZCcpKTtcbiAgICB9KVxuXG4gICAgJCgnW2RhdGEtdGFyZ2V0PVwiI2RlbGV0ZVR5cGVcIl0nKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAkKCdbbmFtZT1cImlkXCJdJykudmFsKCQodGhpcykuZGF0YSgnaWQnKSk7XG4gICAgICAgICQoJ1tuYW1lPVwiYWlvblwiXScpLnRleHQoJCh0aGlzKS5kYXRhKCduYW1lJykpO1xuICAgIH0pXG5cbiAgICAkKCdbZGF0YS10YXJnZXQ9XCIjbm90aWZ5UmVwb3J0XCJdJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnW25hbWU9XCJpZFwiXScpLnZhbCgkKHRoaXMpLmRhdGEoJ2lkJykpO1xuICAgICAgICAkKCdbbmFtZT1cInBpZFwiXScpLnZhbCgkKHRoaXMpLmRhdGEoJ3BpZCcpKTtcbiAgICAgICAgJCgnW25hbWU9XCJmb3Jtbm90aWZ5XCJdJykuYXR0cignYWN0aW9uJywkKHRoaXMpLmRhdGEoJ3VybCcpKTtcbiAgICB9KVxuXG4gICAgJCgnW2RhdGEtdGFyZ2V0PVwiI3VuTG9ja1wiXScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJ1tuYW1lPVwiaWRcIl0nKS52YWwoJCh0aGlzKS5kYXRhKCdpZCcpKTtcbiAgICB9KVxuXG4gICAgJCgnW2RhdGEtdGFyZ2V0PVwiI2Nhcm91c2VsRWRpdFwiXScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJ1tuYW1lPVwiaWRcIl0nKS52YWwoJCh0aGlzKS5kYXRhKCdpZCcpKTtcbiAgICB9KVxuXG4gICAgJCgnW2RhdGEtdGFyZ2V0PVwiI2Nhcm91c2VsQWN0aXZlXCJdJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnW25hbWU9XCJpZFwiXScpLnZhbCgkKHRoaXMpLmRhdGEoJ2lkJykpO1xuICAgIH0pXG5cbiAgICAkKCdbZGF0YS10YXJnZXQ9XCIjY2Fyb3VzZWxEZWxldGVcIl0nKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAkKCdbbmFtZT1cImlkXCJdJykudmFsKCQodGhpcykuZGF0YSgnaWQnKSk7XG4gICAgfSlcblxuICAgICQoJ1tkYXRhLXRhcmdldD1cIiNub3RpY2VFZGl0XCJdJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnW25hbWU9XCJpZFwiXScpLnZhbCgkKHRoaXMpLmRhdGEoJ2lkJykpO1xuICAgIH0pXG5cbiAgICAkKCdbZGF0YS10YXJnZXQ9XCIjbm90aWNlQWN0aXZlXCJdJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnW25hbWU9XCJpZFwiXScpLnZhbCgkKHRoaXMpLmRhdGEoJ2lkJykpO1xuICAgIH0pXG5cbiAgICAkKCdbZGF0YS10YXJnZXQ9XCIjbm90aWNlRGVsZXRlXCJdJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnW25hbWU9XCJpZFwiXScpLnZhbCgkKHRoaXMpLmRhdGEoJ2lkJykpO1xuICAgIH0pXG5cbiAgICAkKCdbZGF0YS10YXJnZXQ9XCIjcmVzb3VyY2VFZGl0XCJdJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnW25hbWU9XCJpZFwiXScpLnZhbCgkKHRoaXMpLmRhdGEoJ2lkJykpO1xuICAgIH0pXG5cbiAgICAkKCdbZGF0YS10YXJnZXQ9XCIjcmVzb3VyY2VBY3RpdmVcIl0nKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAkKCdbbmFtZT1cImlkXCJdJykudmFsKCQodGhpcykuZGF0YSgnaWQnKSk7XG4gICAgfSlcblxuICAgICQoJ1tkYXRhLXRhcmdldD1cIiNyZXNvdXJjZURlbGV0ZVwiXScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJ1tuYW1lPVwiaWRcIl0nKS52YWwoJCh0aGlzKS5kYXRhKCdpZCcpKTtcbiAgICB9KVxuXG4gICAgJCgnI3NlbmhhLXN1Ym1pdCcpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciBwd2QgPSAkKCcjcHdkJykudmFsKCk7XG4gICAgICAgIHZhciBjcHdkID0gJCgnI2Nwd2QnKS52YWwoKTtcbiAgICAgICAgaWYocHdkICE9IGNwd2Qpe1xuICAgICAgICAgICAgJCgnI21zZycpLnRleHQoJ0FzIHNlbmhhcyBlc3TDo28gZGlmZXJlbnRlcy4nKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICQoJyNmb3JtLXJlZGVmaW5pcicpLnN1Ym1pdCgpO1xuICAgICAgICB9XG4gICAgfSlcblxuXG5cbn0pKGpRdWVyeSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==