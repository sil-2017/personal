/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/data.js":
/*!********************************!*\
  !*** ./src/js/modules/data.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const data = () => {
  let trigger = document.querySelectorAll('[data-json]'),
      modal = document.querySelectorAll('[data-modal]'),
      app = document.querySelector('.popup_content');
  fetch("data.json").then(response => response.json()).then(json => {
    let el = document.createElement("div");
    setTimeout(function () {
      // for (let i = 0; i <= json.length-1; i++) {
      //     console.log("Элемент [ "+ i +" ] = " + json[i].name);
      // }
      trigger[0].addEventListener('click', e => {
        e.preventDefault();
        el.innerHTML = `<div class="popup_info">
             Education<p>${json[0].name[0]}</p>
             Interships<p>${json[0].name[1]}</p></div>`;
        app.appendChild(el);
      });
      trigger[1].addEventListener('click', e => {
        e.preventDefault();
        el.innerHTML = `<div class="popup_info">${json[1].name}</div>`;
        app.appendChild(el);
      });
      trigger[2].addEventListener('click', e => {
        e.preventDefault();
        el.innerHTML = `<div class="popup_info">${json[2].name}</div>`;
        app.appendChild(el);
      });
      trigger[3].addEventListener('click', e => {
        e.preventDefault();
        el.innerHTML = `<div class="popup_info">${json[0].name}</div>`;
        app.appendChild(el);
      });
      trigger[4].addEventListener('click', e => {
        e.preventDefault();
        el.innerHTML = `<div class="popup_info">${json[1].name}</div>`;
        app.appendChild(el);
      });
      trigger[5].addEventListener('click', e => {
        e.preventDefault();
        el.innerHTML = `<div class="popup_info">${json[2].name}</div>`;
        app.appendChild(el);
      });
    });
  }).catch(function (err) {
    console.log(err);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ }),

/***/ "./src/js/modules/lang.js":
/*!********************************!*\
  !*** ./src/js/modules/lang.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const lang = () => {
  const langObj = {
    li: {
      en: 'About',
      ar: 'Իմ մասին'
    },
    li2: {
      en: 'Portfolio',
      ar: 'Պորտֆոլիո'
    },
    li3: {
      en: 'Contact',
      ar: 'Կոնտակտ'
    },
    li4: {
      en: 'About',
      ar: 'Իմ մասին'
    },
    li5: {
      en: 'Portfolio',
      ar: 'Պորտֆոլիո'
    },
    li6: {
      en: 'Contact',
      ar: 'Կոնտակտ'
    },
    btn: {
      en: 'Read More',
      ar: 'կարդալ ավելին'
    },
    desc: {
      en: 'Silvard Khachatryan',
      ar: 'Սիլվարդ Խաչատրյան'
    },
    pr: {
      en: 'Front-End Developer',
      ar: 'Front-End ծրագրավորող'
    },
    ftr: {
      ar: 'Այստեղ կլինի ընթացիկ ծրագրերի մասին կարճ ինֆո',
      en: 'Here is a brief information about current programs'
    }
  };
  let btn = document.querySelectorAll('select'),
      el = document.querySelectorAll('.font');

  function setLang() {
    let sel = document.querySelector('select');

    for (let key in langObj) {
      let elem = document.querySelector('.lng-' + key);

      if (elem) {
        elem.innerHTML = langObj[key][this.value];

        if (this.value === "en") {
          sel.style.backgroundImage = "url(./img/flag-en.png)";
          el.forEach(f => f.style.fontFamily = "'Dancing Script', cursive");
        } else if (this.value === "ar") {
          sel.style.backgroundImage = "url(./img/flag-arm.png)";
          el.forEach(f => f.style.fontFamily = '');
        }
      }
    }
  }

  [...btn].forEach(b => b.addEventListener('change', setLang));
};

/* harmony default export */ __webpack_exports__["default"] = (lang);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    let closeClickOverlay = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    const trigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelector(closeSelector),
          windows = document.querySelectorAll('[data-modal]'),
          scroll = calcScroll();
    trigger.forEach(item => {
      item.addEventListener('click', e => {
        e.preventDefault();
        windows.forEach(item => {
          item.style.display = 'none';
        });
        modal.style.display = 'block';
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scroll}px`;
      });
    });
    close.addEventListener('click', () => {
      windows.forEach(item => {
        item.style.display = 'none';
      });
      modal.style.display = 'none';
      document.body.style.overflow = "";
      document.body.style.marginRight = `0px`;
    });
    modal.addEventListener('click', e => {
      if (e.target === modal && closeClickOverlay) {
        windows.forEach(item => {
          item.style.display = 'none';
        });
        modal.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;
      }
    });
  }

  function calcScroll() {
    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }

  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
};

/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./src/js/modules/nav.js":
/*!*******************************!*\
  !*** ./src/js/modules/nav.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const nav = () => {
  let btn = document.querySelector('.mobile-btn');
  let anim = document.getElementById("mySidenav");
  let close = document.querySelector(".closebtn");
  btn.addEventListener('click', e => {
    if (e.target) {
      anim.style.width = "250px";
    }
  });
  close.addEventListener('click', e => {
    if (e.target) {
      anim.style.width = "0";
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (nav);

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal.js */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_nav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/nav.js */ "./src/js/modules/nav.js");
/* harmony import */ var _modules_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/lang.js */ "./src/js/modules/lang.js");
/* harmony import */ var _modules_data_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/data.js */ "./src/js/modules/data.js");




window.addEventListener('DOMContentLoaded', () => {
  "use strict";

  (0,_modules_data_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_lang_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_modules_nav_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./src/js/script.js");
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/js/modules/data.js");
/******/ 	__webpack_require__("./src/js/modules/lang.js");
/******/ 	__webpack_require__("./src/js/modules/modal.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/modules/nav.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=script.js.map