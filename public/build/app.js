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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2J1dHRvbnMuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvZm9ybXMuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvcGFpbmVsLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWluZWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3ZlbmRvci9mb250LWF3ZXNvbWUvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCIkIiwiaGlkZSIsIm1vdXNlb3ZlciIsInNob3ciLCJtb3VzZW91dCIsIndpbmRvdyIsIm9uc2Nyb2xsIiwic2Nyb2xsRnVuY3Rpb24iLCJkb2N1bWVudCIsImJvZHkiLCJzY3JvbGxUb3AiLCJkb2N1bWVudEVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwicGFkZGluZyIsIndpZHRoIiwialF1ZXJ5IiwiY2xpY2siLCJ2YWwiLCJkYXRhIiwiYW1vdW50IiwidGV4dCIsImNhbW91bnQiLCJhdHRyIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHdkIiwiY3B3ZCIsInN1Ym1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtDQUlBOztBQUNBO0NBR0E7O0NBR0E7O0FBQ0E7QUFD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Q0RyQixPQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQjRCLE1BQXJCO0FBQ0g7QUFDSixHQVREO0FBYUgsQ0FsSUEsQ0FrSUVaLE1BbElGLENBQUQsQzs7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi4vY3NzL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4uL2Nzcy9wYWluZWwuY3NzJztcbmltcG9ydCAnLi4vY3NzL2J1dHRvbnMuY3NzJztcbmltcG9ydCAnLi4vY3NzL2Zvcm1zLmNzcyc7XG5cblxuLy8gSlNcbmltcG9ydCAnLi4vanMvbWFpbi5qcyc7XG5pbXBvcnQgJy4uL2pzL3BhaW5lbC5qcyc7XG5cbi8vVmVuZG9yc1xuaW1wb3J0ICcuLi92ZW5kb3IvZm9udC1hd2Vzb21lL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcyc7XG5cbi8vIE5lZWQgalF1ZXJ5IG9yIEJvb3RzdHJhcD8gSW5zdGFsbCBpdCB3aXRoIFwieWFybiBhZGQganF1ZXJ5XCIsIHRoZW4gdW5jb21tZW50IHRvIGltcG9ydCBpdC5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcCc7XG5cbmNvbnNvbGUubG9nKCdIZWxsbyBXZWJwYWNrIEVuY29yZSEgRWRpdCBtZSBpbiBhc3NldHMvanMvYXBwLmpzJyk7IiwiIShmdW5jdGlvbigkKSB7XHJcbiAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gIC8vbmF2YmFyXHJcbiAgJCgnaHInKS5oaWRlKCk7XHJcbiAgJCgnLnRjZW50ZXInKS5tb3VzZW92ZXIoZnVuY3Rpb24oKXtcclxuICAgICQoJ2hyJykuc2hvdygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcudGNlbnRlcicpLm1vdXNlb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAkKCdocicpLmhpZGUoKTtcclxuICB9KTtcclxuXHJcbiAgLy9uYXZiYXJcclxuICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbigpIHtzY3JvbGxGdW5jdGlvbigpfTtcclxuXHJcbiAgZnVuY3Rpb24gc2Nyb2xsRnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPiAzMDAgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA+IDMwMCkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhclwiKS5zdHlsZS5wYWRkaW5nID0gXCI1cHggMTBweFwiO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ29cIikuc3R5bGUud2lkdGggPSBcIjEwMHB4XCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhclwiKS5zdHlsZS5wYWRkaW5nID0gXCIyMHB4IDEwcHhcIjtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dvXCIpLnN0eWxlLndpZHRoID0gXCIxNTBweFwiO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIHZhciBmb3JtID0gJCgnW25hbWU9Zm9ybWZlZWRdJyk7XHJcblxyXG4gIC8vIGZvcm0uYWpheFN1Ym1pdCh7XHJcbiAgLy8gICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2ZlZWRfaW5jJywgeyBpZCA6ICQodGhpcykudmFsKCkgfSksXHJcbiAgLy8gICB0eXBlOiAncG9zdCdcclxuICAvLyB9KTtcclxuXHJcbn0pKGpRdWVyeSk7IiwiIShmdW5jdGlvbigkKXtcbiAgICAkKCdbZGF0YS10YXJnZXQ9XCIjc2hvd2l0ZW1cIl0nKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAkKCdbbmFtZT1cImFpb25JZFwiXScpLnZhbCgkKHRoaXMpLmRhdGEoJ2lkJykpO1xuXG4gICAgICAgIHZhciBhbW91bnQgPSAkKHRoaXMpLmRhdGEoJ3NldCcpO1xuICAgICAgICBcbiAgICAgICAgaWYoYW1vdW50ID09IDEpe1xuICAgICAgICAgICAgJCgnI2Ftb3VudCcpLnNob3coKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAkKCcjYW1vdW50JykuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgICQoJ1tkYXRhLXRhcmdldD1cIiN2aXBNZW1iZXJcIl0nKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAkKCdbbmFtZT1cImFpb25JZFwiXScpLnZhbCgkKHRoaXMpLmRhdGEoJ2lkJykpO1xuICAgICAgICAkKCdbbmFtZT1cIm1zZ1wiXScpLnRleHQoJ1ZvY2UgZXN0w6EgcHJlc3RlcyBhIGFkcXVpcmlyIG8gcGFjb3RlICcrKCQodGhpcykuZGF0YSgnc2V0JykpKycuIFZvY8OqIHRlbSBjZXJ0ZXphIHF1ZSBkZXNlamEgcmVhbGl6YXIgZXNzYSBjb21wcmE/Jyk7XG5cbiAgICAgICAgXG4gICAgfSlcblxuICAgICQoJ1tkYXRhLXRhcmdldD1cIiNlZGl0U2hvcEl0ZW1cIl0nKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAkKCdbbmFtZT1cImlkXCJdJykudmFsKCQodGhpcykuZGF0YSgnaWQnKSk7XG4gICAgICAgIHZhciBjYW1vdW50ID0gJCh0aGlzKS5kYXRhKCdzZXQnKTtcbiAgICAgICAgXG4gICAgICAgIGlmKGNhbW91bnQgPT0gMSl7XG4gICAgICAgICAgICAkKCcjYW1vdW50Jykuc2hvdygpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICQoJyNhbW91bnQnKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgJCgnW2RhdGEtdGFyZ2V0PVwiI2VkaXRGZWVkXCJdJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnW25hbWU9XCJpZFwiXScpLnZhbCgkKHRoaXMpLmRhdGEoJ2lkJykpO1xuICAgICAgICAkKCdbbmFtZT1cImRpcmVjdFwiXScpLnZhbCgkKHRoaXMpLmRhdGEoJ2RpcmVjdCcpKTtcbiAgICB9KVxuXG4gICAgJCgnW2RhdGEtdGFyZ2V0PVwiI21lc3NhZ2VWaWV3XCJdJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnW25hbWU9XCJkYXRlXCJdJykudGV4dCgkKHRoaXMpLmRhdGEoJ3RpbWUnKSk7XG4gICAgICAgICQoJ1tuYW1lPVwidGl0bGVcIl0nKS50ZXh0KCQodGhpcykuZGF0YSgnc2V0JykpO1xuICAgICAgICAkKCdbbmFtZT1cInRleHRcIl0nKS50ZXh0KCQodGhpcykuZGF0YSgndGV4dCcpKTtcbiAgICB9KVxuXG4gICAgJCgnW2RhdGEtdGFyZ2V0PVwiI2ZlZWRSZXBvcnRcIl0nKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAkKCdbbmFtZT1cImZvcm1yZXBvcnRcIl0nKS5hdHRyKCdhY3Rpb24nLCQodGhpcykuZGF0YSgndXJsJykpO1xuICAgICAgICAkKCdbbmFtZT1cImRpcmVjdFwiXScpLnZhbCgkKHRoaXMpLmRhdGEoJ2RpcmVjdCcpKTtcbiAgICAgICAgJCgnW25hbWU9XCJwb3N0XCJdJykudmFsKCQodGhpcykuZGF0YSgncG9zdCcpKTtcbiAgICB9KVxuXG4gICAgJCgnW2RhdGEtdGFyZ2V0PVwiI2VkaXRJdGVtXCJdJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnW25hbWU9XCJpZFwiXScpLnZhbCgkKHRoaXMpLmRhdGEoJ2lkJykpO1xuICAgICAgICAkKCdbbmFtZT1cImFpb25cIl0nKS50ZXh0KCQodGhpcykuZGF0YSgnaWQnKSk7XG4gICAgfSlcblxuICAgICQoJ1tkYXRhLXRhcmdldD1cIiNkZWxldGVJdGVtXCJdJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnW25hbWU9XCJpZFwiXScpLnZhbCgkKHRoaXMpLmRhdGEoJ2lkJykpO1xuICAgICAgICAkKCdbbmFtZT1cImFpb25cIl0nKS50ZXh0KCQodGhpcykuZGF0YSgnbmFtZScpKTtcbiAgICB9KVxuXG4gICAgJCgnW2RhdGEtdGFyZ2V0PVwiI3Byb21vSXRlbVwiXScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJ1tuYW1lPVwiaWRcIl0nKS52YWwoJCh0aGlzKS5kYXRhKCdpZCcpKTtcbiAgICB9KVxuXG4gICAgJCgnW2RhdGEtdGFyZ2V0PVwiI2VkaXRUeXBlXCJdJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnW25hbWU9XCJpZFwiXScpLnZhbCgkKHRoaXMpLmRhdGEoJ2lkJykpO1xuICAgIH0pXG5cbiAgICAkKCdbZGF0YS10YXJnZXQ9XCIjZGVsZXRlVHlwZVwiXScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJ1tuYW1lPVwiaWRcIl0nKS52YWwoJCh0aGlzKS5kYXRhKCdpZCcpKTtcbiAgICAgICAgJCgnW25hbWU9XCJhaW9uXCJdJykudGV4dCgkKHRoaXMpLmRhdGEoJ25hbWUnKSk7XG4gICAgfSlcblxuICAgICQoJ1tkYXRhLXRhcmdldD1cIiNub3RpZnlSZXBvcnRcIl0nKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAkKCdbbmFtZT1cImlkXCJdJykudmFsKCQodGhpcykuZGF0YSgnaWQnKSk7XG4gICAgICAgICQoJ1tuYW1lPVwicGlkXCJdJykudmFsKCQodGhpcykuZGF0YSgncGlkJykpO1xuICAgICAgICAkKCdbbmFtZT1cImZvcm1ub3RpZnlcIl0nKS5hdHRyKCdhY3Rpb24nLCQodGhpcykuZGF0YSgndXJsJykpO1xuICAgIH0pXG5cbiAgICAkKCdbZGF0YS10YXJnZXQ9XCIjdW5Mb2NrXCJdJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnW25hbWU9XCJpZFwiXScpLnZhbCgkKHRoaXMpLmRhdGEoJ2lkJykpO1xuICAgIH0pXG5cbiAgICAkKCdbZGF0YS10YXJnZXQ9XCIjY2Fyb3VzZWxFZGl0XCJdJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnW25hbWU9XCJpZFwiXScpLnZhbCgkKHRoaXMpLmRhdGEoJ2lkJykpO1xuICAgIH0pXG5cbiAgICAkKCdbZGF0YS10YXJnZXQ9XCIjY2Fyb3VzZWxBY3RpdmVcIl0nKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAkKCdbbmFtZT1cImlkXCJdJykudmFsKCQodGhpcykuZGF0YSgnaWQnKSk7XG4gICAgfSlcblxuICAgICQoJ1tkYXRhLXRhcmdldD1cIiNjYXJvdXNlbERlbGV0ZVwiXScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJ1tuYW1lPVwiaWRcIl0nKS52YWwoJCh0aGlzKS5kYXRhKCdpZCcpKTtcbiAgICB9KVxuXG4gICAgJCgnW2RhdGEtdGFyZ2V0PVwiI25vdGljZUVkaXRcIl0nKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAkKCdbbmFtZT1cImlkXCJdJykudmFsKCQodGhpcykuZGF0YSgnaWQnKSk7XG4gICAgfSlcblxuICAgICQoJ1tkYXRhLXRhcmdldD1cIiNub3RpY2VBY3RpdmVcIl0nKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAkKCdbbmFtZT1cImlkXCJdJykudmFsKCQodGhpcykuZGF0YSgnaWQnKSk7XG4gICAgfSlcblxuICAgICQoJ1tkYXRhLXRhcmdldD1cIiNub3RpY2VEZWxldGVcIl0nKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAkKCdbbmFtZT1cImlkXCJdJykudmFsKCQodGhpcykuZGF0YSgnaWQnKSk7XG4gICAgfSlcblxuICAgICQoJ1tkYXRhLXRhcmdldD1cIiNyZXNvdXJjZUVkaXRcIl0nKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAkKCdbbmFtZT1cImlkXCJdJykudmFsKCQodGhpcykuZGF0YSgnaWQnKSk7XG4gICAgfSlcblxuICAgICQoJ1tkYXRhLXRhcmdldD1cIiNyZXNvdXJjZUFjdGl2ZVwiXScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJ1tuYW1lPVwiaWRcIl0nKS52YWwoJCh0aGlzKS5kYXRhKCdpZCcpKTtcbiAgICB9KVxuXG4gICAgJCgnW2RhdGEtdGFyZ2V0PVwiI3Jlc291cmNlRGVsZXRlXCJdJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnW25hbWU9XCJpZFwiXScpLnZhbCgkKHRoaXMpLmRhdGEoJ2lkJykpO1xuICAgIH0pXG5cbiAgICAkKCcjc2VuaGEtc3VibWl0JykuY2xpY2soZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIHB3ZCA9ICQoJyNwd2QnKS52YWwoKTtcbiAgICAgICAgdmFyIGNwd2QgPSAkKCcjY3B3ZCcpLnZhbCgpO1xuICAgICAgICBpZihwd2QgIT0gY3B3ZCl7XG4gICAgICAgICAgICAkKCcjbXNnJykudGV4dCgnQXMgc2VuaGFzIGVzdMOjbyBkaWZlcmVudGVzLicpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgJCgnI2Zvcm0tcmVkZWZpbmlyJykuc3VibWl0KCk7XG4gICAgICAgIH1cbiAgICB9KVxuXG5cblxufSkoalF1ZXJ5KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9