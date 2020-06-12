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

/***/ "./assets/css/login.css":
/*!******************************!*\
  !*** ./assets/css/login.css ***!
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
/* harmony import */ var _css_login_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/login.css */ "./assets/css/login.css");
/* harmony import */ var _css_login_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_login_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../js/main.js */ "./assets/js/main.js");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_main_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _js_painel_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../js/painel.js */ "./assets/js/painel.js");
/* harmony import */ var _js_painel_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_painel_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _vendor_font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../vendor/font-awesome/css/font-awesome.min.css */ "./assets/vendor/font-awesome/css/font-awesome.min.css");
/* harmony import */ var _vendor_font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_vendor_font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_10__);
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
  "use strict";

  $('[name="recover"]').click(function (e) {
    e.preventDefault();
    var pwd = $('#password').val();
    var cpwd = $('#cpassword').val();

    if (pwd != cpwd) {
      $('#msg').text('As senhas estão diferentes.');
    } else {
      $('[name="form-recover"]').submit();
    }
  }); //navbar

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2J1dHRvbnMuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvZm9ybXMuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvbG9naW4uY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvcGFpbmVsLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWluZWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3ZlbmRvci9mb250LWF3ZXNvbWUvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCIkIiwiY2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJwd2QiLCJ2YWwiLCJjcHdkIiwidGV4dCIsInN1Ym1pdCIsImhpZGUiLCJtb3VzZW92ZXIiLCJzaG93IiwibW91c2VvdXQiLCJ3aW5kb3ciLCJvbnNjcm9sbCIsInNjcm9sbEZ1bmN0aW9uIiwiZG9jdW1lbnQiLCJib2R5Iiwic2Nyb2xsVG9wIiwiZG9jdW1lbnRFbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsInBhZGRpbmciLCJ3aWR0aCIsImpRdWVyeSIsImRhdGEiLCJhbW91bnQiLCJjYW1vdW50IiwiYXR0ciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUlBOztBQUNBO0NBR0E7O0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBRUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG1EQUFaLEU7Ozs7Ozs7Ozs7O0FDM0JBLCtDQUFFLFVBQVNDLENBQVQsRUFBWTtBQUNaOztBQUVBQSxHQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQkMsS0FBdEIsQ0FBNEIsVUFBU0MsQ0FBVCxFQUFXO0FBQ3JDQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxRQUFJQyxHQUFHLEdBQUdKLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZUssR0FBZixFQUFWO0FBQ0EsUUFBSUMsSUFBSSxHQUFHTixDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCSyxHQUFoQixFQUFYOztBQUNBLFFBQUdELEdBQUcsSUFBSUUsSUFBVixFQUFlO0FBQ1hOLE9BQUMsQ0FBQyxNQUFELENBQUQsQ0FBVU8sSUFBVixDQUFlLDZCQUFmO0FBQ0gsS0FGRCxNQUVLO0FBQ0RQLE9BQUMsQ0FBQyx1QkFBRCxDQUFELENBQTJCUSxNQUEzQjtBQUNIO0FBQ0YsR0FURCxFQUhZLENBY1o7O0FBQ0FSLEdBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVMsSUFBUjtBQUNBVCxHQUFDLENBQUMsVUFBRCxDQUFELENBQWNVLFNBQWQsQ0FBd0IsWUFBVTtBQUNoQ1YsS0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRVyxJQUFSO0FBQ0QsR0FGRDtBQUlBWCxHQUFDLENBQUMsVUFBRCxDQUFELENBQWNZLFFBQWQsQ0FBdUIsWUFBVTtBQUMvQlosS0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRUyxJQUFSO0FBQ0QsR0FGRCxFQXBCWSxDQXdCWjs7QUFDQUksUUFBTSxDQUFDQyxRQUFQLEdBQWtCLFlBQVc7QUFBQ0Msa0JBQWM7QUFBRyxHQUEvQzs7QUFFQSxXQUFTQSxjQUFULEdBQTBCO0FBQ3hCLFFBQUlDLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxTQUFkLEdBQTBCLEdBQTFCLElBQWlDRixRQUFRLENBQUNHLGVBQVQsQ0FBeUJELFNBQXpCLEdBQXFDLEdBQTFFLEVBQStFO0FBQzdFRixjQUFRLENBQUNJLGNBQVQsQ0FBd0IsUUFBeEIsRUFBa0NDLEtBQWxDLENBQXdDQyxPQUF4QyxHQUFrRCxVQUFsRDtBQUNBTixjQUFRLENBQUNJLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0NDLEtBQWhDLENBQXNDRSxLQUF0QyxHQUE4QyxPQUE5QztBQUNELEtBSEQsTUFHTztBQUNMUCxjQUFRLENBQUNJLGNBQVQsQ0FBd0IsUUFBeEIsRUFBa0NDLEtBQWxDLENBQXdDQyxPQUF4QyxHQUFrRCxXQUFsRDtBQUNBTixjQUFRLENBQUNJLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0NDLEtBQWhDLENBQXNDRSxLQUF0QyxHQUE4QyxPQUE5QztBQUNEO0FBQ0Y7O0FBQUEsR0FuQ1csQ0FxQ1o7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVELENBNUNBLENBNENFQyxNQTVDRixDQUFELEM7Ozs7Ozs7Ozs7OztBQ0FBLCtDQUFFLFVBQVN4QixDQUFULEVBQVc7QUFDVEEsR0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0JDLEtBQS9CLENBQXFDLFlBQVU7QUFDM0NELEtBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCSyxHQUFyQixDQUF5QkwsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFReUIsSUFBUixDQUFhLElBQWIsQ0FBekI7QUFFQSxRQUFJQyxNQUFNLEdBQUcxQixDQUFDLENBQUMsSUFBRCxDQUFELENBQVF5QixJQUFSLENBQWEsS0FBYixDQUFiOztBQUVBLFFBQUdDLE1BQU0sSUFBSSxDQUFiLEVBQWU7QUFDWDFCLE9BQUMsQ0FBQyxTQUFELENBQUQsQ0FBYVcsSUFBYjtBQUNILEtBRkQsTUFFSztBQUNEWCxPQUFDLENBQUMsU0FBRCxDQUFELENBQWFTLElBQWI7QUFDSDtBQUNKLEdBVkQ7QUFZQVQsR0FBQyxDQUFDLDRCQUFELENBQUQsQ0FBZ0NDLEtBQWhDLENBQXNDLFlBQVU7QUFDNUNELEtBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCSyxHQUFyQixDQUF5QkwsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFReUIsSUFBUixDQUFhLElBQWIsQ0FBekI7QUFDQXpCLEtBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JPLElBQWxCLENBQXVCLDJDQUEwQ1AsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFReUIsSUFBUixDQUFhLEtBQWIsQ0FBMUMsR0FBK0QscURBQXRGO0FBR0gsR0FMRDtBQU9BekIsR0FBQyxDQUFDLCtCQUFELENBQUQsQ0FBbUNDLEtBQW5DLENBQXlDLFlBQVU7QUFDL0NELEtBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJLLEdBQWpCLENBQXFCTCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVF5QixJQUFSLENBQWEsSUFBYixDQUFyQjtBQUNBLFFBQUlFLE9BQU8sR0FBRzNCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXlCLElBQVIsQ0FBYSxLQUFiLENBQWQ7O0FBRUEsUUFBR0UsT0FBTyxJQUFJLENBQWQsRUFBZ0I7QUFDWjNCLE9BQUMsQ0FBQyxTQUFELENBQUQsQ0FBYVcsSUFBYjtBQUNILEtBRkQsTUFFSztBQUNEWCxPQUFDLENBQUMsU0FBRCxDQUFELENBQWFTLElBQWI7QUFDSDtBQUNKLEdBVEQ7QUFXQVQsR0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0JDLEtBQS9CLENBQXFDLFlBQVU7QUFDM0NELEtBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJLLEdBQWpCLENBQXFCTCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVF5QixJQUFSLENBQWEsSUFBYixDQUFyQjtBQUNBekIsS0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJLLEdBQXJCLENBQXlCTCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVF5QixJQUFSLENBQWEsUUFBYixDQUF6QjtBQUNILEdBSEQ7QUFLQXpCLEdBQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDQyxLQUFsQyxDQUF3QyxZQUFVO0FBQzlDRCxLQUFDLENBQUMsZUFBRCxDQUFELENBQW1CTyxJQUFuQixDQUF3QlAsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFReUIsSUFBUixDQUFhLE1BQWIsQ0FBeEI7QUFDQXpCLEtBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CTyxJQUFwQixDQUF5QlAsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFReUIsSUFBUixDQUFhLEtBQWIsQ0FBekI7QUFDQXpCLEtBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJPLElBQW5CLENBQXdCUCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVF5QixJQUFSLENBQWEsTUFBYixDQUF4QjtBQUNILEdBSkQ7QUFNQXpCLEdBQUMsQ0FBQyw2QkFBRCxDQUFELENBQWlDQyxLQUFqQyxDQUF1QyxZQUFVO0FBQzdDRCxLQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QjRCLElBQXpCLENBQThCLFFBQTlCLEVBQXVDNUIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFReUIsSUFBUixDQUFhLEtBQWIsQ0FBdkM7QUFDQXpCLEtBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCSyxHQUFyQixDQUF5QkwsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFReUIsSUFBUixDQUFhLFFBQWIsQ0FBekI7QUFDQXpCLEtBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJLLEdBQW5CLENBQXVCTCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVF5QixJQUFSLENBQWEsTUFBYixDQUF2QjtBQUNILEdBSkQ7QUFNQXpCLEdBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCQyxLQUEvQixDQUFxQyxZQUFVO0FBQzNDRCxLQUFDLENBQUMsYUFBRCxDQUFELENBQWlCSyxHQUFqQixDQUFxQkwsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFReUIsSUFBUixDQUFhLElBQWIsQ0FBckI7QUFDQXpCLEtBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJPLElBQW5CLENBQXdCUCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVF5QixJQUFSLENBQWEsSUFBYixDQUF4QjtBQUNILEdBSEQ7QUFLQXpCLEdBQUMsQ0FBQyw2QkFBRCxDQUFELENBQWlDQyxLQUFqQyxDQUF1QyxZQUFVO0FBQzdDRCxLQUFDLENBQUMsYUFBRCxDQUFELENBQWlCSyxHQUFqQixDQUFxQkwsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFReUIsSUFBUixDQUFhLElBQWIsQ0FBckI7QUFDQXpCLEtBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJPLElBQW5CLENBQXdCUCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVF5QixJQUFSLENBQWEsTUFBYixDQUF4QjtBQUNILEdBSEQ7QUFLQXpCLEdBQUMsQ0FBQyw0QkFBRCxDQUFELENBQWdDQyxLQUFoQyxDQUFzQyxZQUFVO0FBQzVDRCxLQUFDLENBQUMsYUFBRCxDQUFELENBQWlCSyxHQUFqQixDQUFxQkwsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFReUIsSUFBUixDQUFhLElBQWIsQ0FBckI7QUFDSCxHQUZEO0FBSUF6QixHQUFDLENBQUMsMkJBQUQsQ0FBRCxDQUErQkMsS0FBL0IsQ0FBcUMsWUFBVTtBQUMzQ0QsS0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQkssR0FBakIsQ0FBcUJMLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXlCLElBQVIsQ0FBYSxJQUFiLENBQXJCO0FBQ0gsR0FGRDtBQUlBekIsR0FBQyxDQUFDLDZCQUFELENBQUQsQ0FBaUNDLEtBQWpDLENBQXVDLFlBQVU7QUFDN0NELEtBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJLLEdBQWpCLENBQXFCTCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVF5QixJQUFSLENBQWEsSUFBYixDQUFyQjtBQUNBekIsS0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQk8sSUFBbkIsQ0FBd0JQLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXlCLElBQVIsQ0FBYSxNQUFiLENBQXhCO0FBQ0gsR0FIRDtBQUtBekIsR0FBQyxDQUFDLCtCQUFELENBQUQsQ0FBbUNDLEtBQW5DLENBQXlDLFlBQVU7QUFDL0NELEtBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJLLEdBQWpCLENBQXFCTCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVF5QixJQUFSLENBQWEsSUFBYixDQUFyQjtBQUNBekIsS0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQkssR0FBbEIsQ0FBc0JMLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXlCLElBQVIsQ0FBYSxLQUFiLENBQXRCO0FBQ0F6QixLQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QjRCLElBQXpCLENBQThCLFFBQTlCLEVBQXVDNUIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFReUIsSUFBUixDQUFhLEtBQWIsQ0FBdkM7QUFDSCxHQUpEO0FBTUF6QixHQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QkMsS0FBN0IsQ0FBbUMsWUFBVTtBQUN6Q0QsS0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQkssR0FBakIsQ0FBcUJMLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXlCLElBQVIsQ0FBYSxJQUFiLENBQXJCO0FBQ0gsR0FGRDtBQUlBekIsR0FBQyxDQUFDLCtCQUFELENBQUQsQ0FBbUNDLEtBQW5DLENBQXlDLFlBQVU7QUFDL0NELEtBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJLLEdBQWpCLENBQXFCTCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVF5QixJQUFSLENBQWEsSUFBYixDQUFyQjtBQUNILEdBRkQ7QUFJQXpCLEdBQUMsQ0FBQyxpQ0FBRCxDQUFELENBQXFDQyxLQUFyQyxDQUEyQyxZQUFVO0FBQ2pERCxLQUFDLENBQUMsYUFBRCxDQUFELENBQWlCSyxHQUFqQixDQUFxQkwsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFReUIsSUFBUixDQUFhLElBQWIsQ0FBckI7QUFDSCxHQUZEO0FBSUF6QixHQUFDLENBQUMsaUNBQUQsQ0FBRCxDQUFxQ0MsS0FBckMsQ0FBMkMsWUFBVTtBQUNqREQsS0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQkssR0FBakIsQ0FBcUJMLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXlCLElBQVIsQ0FBYSxJQUFiLENBQXJCO0FBQ0gsR0FGRDtBQUlBekIsR0FBQyxDQUFDLDZCQUFELENBQUQsQ0FBaUNDLEtBQWpDLENBQXVDLFlBQVU7QUFDN0NELEtBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJLLEdBQWpCLENBQXFCTCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVF5QixJQUFSLENBQWEsSUFBYixDQUFyQjtBQUNILEdBRkQ7QUFJQXpCLEdBQUMsQ0FBQywrQkFBRCxDQUFELENBQW1DQyxLQUFuQyxDQUF5QyxZQUFVO0FBQy9DRCxLQUFDLENBQUMsYUFBRCxDQUFELENBQWlCSyxHQUFqQixDQUFxQkwsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFReUIsSUFBUixDQUFhLElBQWIsQ0FBckI7QUFDSCxHQUZEO0FBSUF6QixHQUFDLENBQUMsK0JBQUQsQ0FBRCxDQUFtQ0MsS0FBbkMsQ0FBeUMsWUFBVTtBQUMvQ0QsS0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQkssR0FBakIsQ0FBcUJMLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXlCLElBQVIsQ0FBYSxJQUFiLENBQXJCO0FBQ0gsR0FGRDtBQUlBekIsR0FBQyxDQUFDLCtCQUFELENBQUQsQ0FBbUNDLEtBQW5DLENBQXlDLFlBQVU7QUFDL0NELEtBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJLLEdBQWpCLENBQXFCTCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVF5QixJQUFSLENBQWEsSUFBYixDQUFyQjtBQUNILEdBRkQ7QUFJQXpCLEdBQUMsQ0FBQyxpQ0FBRCxDQUFELENBQXFDQyxLQUFyQyxDQUEyQyxZQUFVO0FBQ2pERCxLQUFDLENBQUMsYUFBRCxDQUFELENBQWlCSyxHQUFqQixDQUFxQkwsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFReUIsSUFBUixDQUFhLElBQWIsQ0FBckI7QUFDSCxHQUZEO0FBSUF6QixHQUFDLENBQUMsaUNBQUQsQ0FBRCxDQUFxQ0MsS0FBckMsQ0FBMkMsWUFBVTtBQUNqREQsS0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQkssR0FBakIsQ0FBcUJMLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXlCLElBQVIsQ0FBYSxJQUFiLENBQXJCO0FBQ0gsR0FGRDtBQUlBekIsR0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQkMsS0FBbkIsQ0FBeUIsVUFBU0MsQ0FBVCxFQUFXO0FBQ2hDQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxRQUFJQyxHQUFHLEdBQUdKLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVUssR0FBVixFQUFWO0FBQ0EsUUFBSUMsSUFBSSxHQUFHTixDQUFDLENBQUMsT0FBRCxDQUFELENBQVdLLEdBQVgsRUFBWDs7QUFDQSxRQUFHRCxHQUFHLElBQUlFLElBQVYsRUFBZTtBQUNYTixPQUFDLENBQUMsTUFBRCxDQUFELENBQVVPLElBQVYsQ0FBZSw2QkFBZjtBQUNILEtBRkQsTUFFSztBQUNEUCxPQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQlEsTUFBckI7QUFDSDtBQUNKLEdBVEQ7QUFhSCxDQWxJQSxDQWtJRWdCLE1BbElGLENBQUQsQzs7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi4vY3NzL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4uL2Nzcy9wYWluZWwuY3NzJztcbmltcG9ydCAnLi4vY3NzL2J1dHRvbnMuY3NzJztcbmltcG9ydCAnLi4vY3NzL2Zvcm1zLmNzcyc7XG5pbXBvcnQgJy4uL2Nzcy9sb2dpbi5jc3MnO1xuXG5cbi8vIEpTXG5pbXBvcnQgJy4uL2pzL21haW4uanMnO1xuaW1wb3J0ICcuLi9qcy9wYWluZWwuanMnO1xuXG4vL1ZlbmRvcnNcbmltcG9ydCAnLi4vdmVuZG9yL2ZvbnQtYXdlc29tZS9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnO1xuXG4vLyBOZWVkIGpRdWVyeSBvciBCb290c3RyYXA/IEluc3RhbGwgaXQgd2l0aCBcInlhcm4gYWRkIGpxdWVyeVwiLCB0aGVuIHVuY29tbWVudCB0byBpbXBvcnQgaXQuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0ICdib290c3RyYXAnO1xuXG5jb25zb2xlLmxvZygnSGVsbG8gV2VicGFjayBFbmNvcmUhIEVkaXQgbWUgaW4gYXNzZXRzL2pzL2FwcC5qcycpOyIsIiEoZnVuY3Rpb24oJCkge1xyXG4gIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAkKCdbbmFtZT1cInJlY292ZXJcIl0nKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhciBwd2QgPSAkKCcjcGFzc3dvcmQnKS52YWwoKTtcclxuICAgIHZhciBjcHdkID0gJCgnI2NwYXNzd29yZCcpLnZhbCgpO1xyXG4gICAgaWYocHdkICE9IGNwd2Qpe1xyXG4gICAgICAgICQoJyNtc2cnKS50ZXh0KCdBcyBzZW5oYXMgZXN0w6NvIGRpZmVyZW50ZXMuJylcclxuICAgIH1lbHNle1xyXG4gICAgICAgICQoJ1tuYW1lPVwiZm9ybS1yZWNvdmVyXCJdJykuc3VibWl0KCk7XHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgLy9uYXZiYXJcclxuICAkKCdocicpLmhpZGUoKTtcclxuICAkKCcudGNlbnRlcicpLm1vdXNlb3ZlcihmdW5jdGlvbigpe1xyXG4gICAgJCgnaHInKS5zaG93KCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJy50Y2VudGVyJykubW91c2VvdXQoZnVuY3Rpb24oKXtcclxuICAgICQoJ2hyJykuaGlkZSgpO1xyXG4gIH0pO1xyXG5cclxuICAvL25hdmJhclxyXG4gIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uKCkge3Njcm9sbEZ1bmN0aW9uKCl9O1xyXG5cclxuICBmdW5jdGlvbiBzY3JvbGxGdW5jdGlvbigpIHtcclxuICAgIGlmIChkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA+IDMwMCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID4gMzAwKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2YmFyXCIpLnN0eWxlLnBhZGRpbmcgPSBcIjVweCAxMHB4XCI7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9nb1wiKS5zdHlsZS53aWR0aCA9IFwiMTAwcHhcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2YmFyXCIpLnN0eWxlLnBhZGRpbmcgPSBcIjIwcHggMTBweFwiO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ29cIikuc3R5bGUud2lkdGggPSBcIjE1MHB4XCI7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gdmFyIGZvcm0gPSAkKCdbbmFtZT1mb3JtZmVlZF0nKTtcclxuXHJcbiAgLy8gZm9ybS5hamF4U3VibWl0KHtcclxuICAvLyAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnZmVlZF9pbmMnLCB7IGlkIDogJCh0aGlzKS52YWwoKSB9KSxcclxuICAvLyAgIHR5cGU6ICdwb3N0J1xyXG4gIC8vIH0pO1xyXG5cclxufSkoalF1ZXJ5KTsiLCIhKGZ1bmN0aW9uKCQpe1xuICAgICQoJ1tkYXRhLXRhcmdldD1cIiNzaG93aXRlbVwiXScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJ1tuYW1lPVwiYWlvbklkXCJdJykudmFsKCQodGhpcykuZGF0YSgnaWQnKSk7XG5cbiAgICAgICAgdmFyIGFtb3VudCA9ICQodGhpcykuZGF0YSgnc2V0Jyk7XG4gICAgICAgIFxuICAgICAgICBpZihhbW91bnQgPT0gMSl7XG4gICAgICAgICAgICAkKCcjYW1vdW50Jykuc2hvdygpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICQoJyNhbW91bnQnKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgJCgnW2RhdGEtdGFyZ2V0PVwiI3ZpcE1lbWJlclwiXScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJ1tuYW1lPVwiYWlvbklkXCJdJykudmFsKCQodGhpcykuZGF0YSgnaWQnKSk7XG4gICAgICAgICQoJ1tuYW1lPVwibXNnXCJdJykudGV4dCgnVm9jZSBlc3TDoSBwcmVzdGVzIGEgYWRxdWlyaXIgbyBwYWNvdGUgJysoJCh0aGlzKS5kYXRhKCdzZXQnKSkrJy4gVm9jw6ogdGVtIGNlcnRlemEgcXVlIGRlc2VqYSByZWFsaXphciBlc3NhIGNvbXByYT8nKTtcblxuICAgICAgICBcbiAgICB9KVxuXG4gICAgJCgnW2RhdGEtdGFyZ2V0PVwiI2VkaXRTaG9wSXRlbVwiXScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJ1tuYW1lPVwiaWRcIl0nKS52YWwoJCh0aGlzKS5kYXRhKCdpZCcpKTtcbiAgICAgICAgdmFyIGNhbW91bnQgPSAkKHRoaXMpLmRhdGEoJ3NldCcpO1xuICAgICAgICBcbiAgICAgICAgaWYoY2Ftb3VudCA9PSAxKXtcbiAgICAgICAgICAgICQoJyNhbW91bnQnKS5zaG93KCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgJCgnI2Ftb3VudCcpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAkKCdbZGF0YS10YXJnZXQ9XCIjZWRpdEZlZWRcIl0nKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAkKCdbbmFtZT1cImlkXCJdJykudmFsKCQodGhpcykuZGF0YSgnaWQnKSk7XG4gICAgICAgICQoJ1tuYW1lPVwiZGlyZWN0XCJdJykudmFsKCQodGhpcykuZGF0YSgnZGlyZWN0JykpO1xuICAgIH0pXG5cbiAgICAkKCdbZGF0YS10YXJnZXQ9XCIjbWVzc2FnZVZpZXdcIl0nKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAkKCdbbmFtZT1cImRhdGVcIl0nKS50ZXh0KCQodGhpcykuZGF0YSgndGltZScpKTtcbiAgICAgICAgJCgnW25hbWU9XCJ0aXRsZVwiXScpLnRleHQoJCh0aGlzKS5kYXRhKCdzZXQnKSk7XG4gICAgICAgICQoJ1tuYW1lPVwidGV4dFwiXScpLnRleHQoJCh0aGlzKS5kYXRhKCd0ZXh0JykpO1xuICAgIH0pXG5cbiAgICAkKCdbZGF0YS10YXJnZXQ9XCIjZmVlZFJlcG9ydFwiXScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJ1tuYW1lPVwiZm9ybXJlcG9ydFwiXScpLmF0dHIoJ2FjdGlvbicsJCh0aGlzKS5kYXRhKCd1cmwnKSk7XG4gICAgICAgICQoJ1tuYW1lPVwiZGlyZWN0XCJdJykudmFsKCQodGhpcykuZGF0YSgnZGlyZWN0JykpO1xuICAgICAgICAkKCdbbmFtZT1cInBvc3RcIl0nKS52YWwoJCh0aGlzKS5kYXRhKCdwb3N0JykpO1xuICAgIH0pXG5cbiAgICAkKCdbZGF0YS10YXJnZXQ9XCIjZWRpdEl0ZW1cIl0nKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAkKCdbbmFtZT1cImlkXCJdJykudmFsKCQodGhpcykuZGF0YSgnaWQnKSk7XG4gICAgICAgICQoJ1tuYW1lPVwiYWlvblwiXScpLnRleHQoJCh0aGlzKS5kYXRhKCdpZCcpKTtcbiAgICB9KVxuXG4gICAgJCgnW2RhdGEtdGFyZ2V0PVwiI2RlbGV0ZUl0ZW1cIl0nKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAkKCdbbmFtZT1cImlkXCJdJykudmFsKCQodGhpcykuZGF0YSgnaWQnKSk7XG4gICAgICAgICQoJ1tuYW1lPVwiYWlvblwiXScpLnRleHQoJCh0aGlzKS5kYXRhKCduYW1lJykpO1xuICAgIH0pXG5cbiAgICAkKCdbZGF0YS10YXJnZXQ9XCIjcHJvbW9JdGVtXCJdJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnW25hbWU9XCJpZFwiXScpLnZhbCgkKHRoaXMpLmRhdGEoJ2lkJykpO1xuICAgIH0pXG5cbiAgICAkKCdbZGF0YS10YXJnZXQ9XCIjZWRpdFR5cGVcIl0nKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAkKCdbbmFtZT1cImlkXCJdJykudmFsKCQodGhpcykuZGF0YSgnaWQnKSk7XG4gICAgfSlcblxuICAgICQoJ1tkYXRhLXRhcmdldD1cIiNkZWxldGVUeXBlXCJdJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnW25hbWU9XCJpZFwiXScpLnZhbCgkKHRoaXMpLmRhdGEoJ2lkJykpO1xuICAgICAgICAkKCdbbmFtZT1cImFpb25cIl0nKS50ZXh0KCQodGhpcykuZGF0YSgnbmFtZScpKTtcbiAgICB9KVxuXG4gICAgJCgnW2RhdGEtdGFyZ2V0PVwiI25vdGlmeVJlcG9ydFwiXScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJ1tuYW1lPVwiaWRcIl0nKS52YWwoJCh0aGlzKS5kYXRhKCdpZCcpKTtcbiAgICAgICAgJCgnW25hbWU9XCJwaWRcIl0nKS52YWwoJCh0aGlzKS5kYXRhKCdwaWQnKSk7XG4gICAgICAgICQoJ1tuYW1lPVwiZm9ybW5vdGlmeVwiXScpLmF0dHIoJ2FjdGlvbicsJCh0aGlzKS5kYXRhKCd1cmwnKSk7XG4gICAgfSlcblxuICAgICQoJ1tkYXRhLXRhcmdldD1cIiN1bkxvY2tcIl0nKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAkKCdbbmFtZT1cImlkXCJdJykudmFsKCQodGhpcykuZGF0YSgnaWQnKSk7XG4gICAgfSlcblxuICAgICQoJ1tkYXRhLXRhcmdldD1cIiNjYXJvdXNlbEVkaXRcIl0nKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAkKCdbbmFtZT1cImlkXCJdJykudmFsKCQodGhpcykuZGF0YSgnaWQnKSk7XG4gICAgfSlcblxuICAgICQoJ1tkYXRhLXRhcmdldD1cIiNjYXJvdXNlbEFjdGl2ZVwiXScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJ1tuYW1lPVwiaWRcIl0nKS52YWwoJCh0aGlzKS5kYXRhKCdpZCcpKTtcbiAgICB9KVxuXG4gICAgJCgnW2RhdGEtdGFyZ2V0PVwiI2Nhcm91c2VsRGVsZXRlXCJdJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnW25hbWU9XCJpZFwiXScpLnZhbCgkKHRoaXMpLmRhdGEoJ2lkJykpO1xuICAgIH0pXG5cbiAgICAkKCdbZGF0YS10YXJnZXQ9XCIjbm90aWNlRWRpdFwiXScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJ1tuYW1lPVwiaWRcIl0nKS52YWwoJCh0aGlzKS5kYXRhKCdpZCcpKTtcbiAgICB9KVxuXG4gICAgJCgnW2RhdGEtdGFyZ2V0PVwiI25vdGljZUFjdGl2ZVwiXScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJ1tuYW1lPVwiaWRcIl0nKS52YWwoJCh0aGlzKS5kYXRhKCdpZCcpKTtcbiAgICB9KVxuXG4gICAgJCgnW2RhdGEtdGFyZ2V0PVwiI25vdGljZURlbGV0ZVwiXScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJ1tuYW1lPVwiaWRcIl0nKS52YWwoJCh0aGlzKS5kYXRhKCdpZCcpKTtcbiAgICB9KVxuXG4gICAgJCgnW2RhdGEtdGFyZ2V0PVwiI3Jlc291cmNlRWRpdFwiXScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJ1tuYW1lPVwiaWRcIl0nKS52YWwoJCh0aGlzKS5kYXRhKCdpZCcpKTtcbiAgICB9KVxuXG4gICAgJCgnW2RhdGEtdGFyZ2V0PVwiI3Jlc291cmNlQWN0aXZlXCJdJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnW25hbWU9XCJpZFwiXScpLnZhbCgkKHRoaXMpLmRhdGEoJ2lkJykpO1xuICAgIH0pXG5cbiAgICAkKCdbZGF0YS10YXJnZXQ9XCIjcmVzb3VyY2VEZWxldGVcIl0nKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAkKCdbbmFtZT1cImlkXCJdJykudmFsKCQodGhpcykuZGF0YSgnaWQnKSk7XG4gICAgfSlcblxuICAgICQoJyNzZW5oYS1zdWJtaXQnKS5jbGljayhmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgcHdkID0gJCgnI3B3ZCcpLnZhbCgpO1xuICAgICAgICB2YXIgY3B3ZCA9ICQoJyNjcHdkJykudmFsKCk7XG4gICAgICAgIGlmKHB3ZCAhPSBjcHdkKXtcbiAgICAgICAgICAgICQoJyNtc2cnKS50ZXh0KCdBcyBzZW5oYXMgZXN0w6NvIGRpZmVyZW50ZXMuJylcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAkKCcjZm9ybS1yZWRlZmluaXInKS5zdWJtaXQoKTtcbiAgICAgICAgfVxuICAgIH0pXG5cblxuXG59KShqUXVlcnkpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=