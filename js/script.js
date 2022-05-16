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
  let personData = '{"about":["INFORMATION TECHNOLOGY European","INTERNSHIP 2021 Apr - CodeTime"],"portfolio": ["https://sil-2017.github.io/shop-site/","https://github.com/sil-2017/css.sass","https://sil-2017.github.io/Vue.js-VueX/","https://github.com/sil-2017/vue"],"contact":["khachatryansilvard2@gmail.com","https://www.linkedin.com/in/silvard-khachatryan-0a25871b5/","https://t.me/sil2017"]}';
  let trigger = document.querySelectorAll('li[data-json]'),
      modal = document.querySelectorAll('[data-modal]'),
      app = document.querySelector('.popup_content'),
      person = JSON.parse(personData),
      el = document.createElement("div");
  [...trigger].forEach(function (item) {
    item.addEventListener('click', e => {
      e.preventDefault();

      if (item.getAttribute('data-json') === 'about') {
        el.innerHTML = `<div class="popup_info">
              <div class="popupin">
                <p>Education</p>
                <p>${person.about[0]}</p>
                <p>Interships</p>
                <p>${person.about[1]}</p>
              </div> </div>`;
        app.appendChild(el);
      } else if (item.getAttribute('data-json') === 'portfolio') {
        el.innerHTML = `<div class="popup_info">
                <div class="popupin">
                     <p><img class="ml" src="https://cdn.cdnlogo.com/logos/g/69/github-icon.svg"> Links in GitHub </p>
                     <p>${person.portfolio[0]}</p>
                     <p>${person.portfolio[1]}</p>
                     <p>${person.portfolio[2]}</p>
                     <p>${person.portfolio[3]}</p>
                 </div>
                 </div>`;
        app.appendChild(el);
      } else if (item.getAttribute('data-json') === 'contact') {
        person.contact.forEach(item => {
          console.log(item);
        });
        el.innerHTML = `<div class="popup_info">
                <div class="popupin">
                    <p>Gmail</p>
                    <p><img class="ml" src="https://cdn.cdnlogo.com/logos/g/68/gmail.svg"> ${person.contact[0]}</p>
                    <p>Linkedin </p>
                    <p><img class="icns" src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/linkedin-512.png"><a href="${person.contact[1]}" target="_blank">My Linkedin</a></p>
                    <p>Telegram </p>
                    <p><img class="icns" src="https://cdn.cdnlogo.com/logos/t/39/telegram.svg"><a href="${person.contact[2]}" target="_blank">My Telegram</a></p>
                </div>
               </div>`;
        app.appendChild(el);
      }
    });
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

  bindModal('.popup_btn', '.popup', '.popup .popup_close');
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
  let close = document.querySelector(".closebtn"); // let nav = document.querySelector('.sidenav');

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
