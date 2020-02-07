function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/chatbox/chatbox.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chatbox/chatbox.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChatboxChatboxComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Contacts -->\n<div class=\"container-fluid\">\n    <div id=\"test\">\n        <div id=\"content\">\n            <ul class=\"list-group list-group-flush\">\n                <div *ngFor=\"let p of personalCards\">\n                    <li *ngIf=\"username !== p.user.username\" class=\"list-group-item\" (click)=\"openChat(p)\"\n                        [ngClass]=\"{'bold': notifyMessageArrived(p)}\">\n                        <img [src]=\"p.base64StringImage\" class=\"md-avatar rounded-circle\" alt=\"avatar image\">\n                        {{p.user.username}}\n                        <span *ngIf=\" notifyMessageArrived(p)\" class=\"badge badge-danger ml-2\">+1</span>\n                    </li>\n                </div>\n            </ul>\n        </div>\n        <button class=\"btn light-blue darken-3 float btn-block\">Chat</button>\n    </div>\n</div>\n\n<!-- Box -->\n<div id=\"chat-content\" *ngIf=\"!closeChat\">\n\n    <div id=\"chat-inbox\" *ngIf=\"showChat\">\n\n        <div class=\"mesgs\">\n            <div class=\"msg_history\" #scrollMe>\n                <div class=\"incoming_msg\" *ngFor=\"let c of currentChat\">\n\n                    <div class=\"received_msg\" *ngIf=\"isReceived(c)\">\n                        <div class=\"received_withd_msg\">\n                            <p>{{c.content}}</p>\n                            <span class=\"time_date\"> </span>\n                        </div>\n                    </div>\n\n                    <div class=\"outgoing_msg\" *ngIf=\"isSent(c)\">\n                        <div class=\"sent_msg\">\n                            <p>{{c.content}}</p>\n                            <span class=\"time_date\"></span>\n                        </div>\n                    </div>\n\n                </div>\n\n            </div>\n            <div class=\"type_msg\">\n                <div class=\"input_msg_write\">\n                    <form>\n                        <div class=\"form-group\">\n                            <textarea class=\"form-control\" (keydown.enter)=\"sendMessage($event)\" name=\"message\"\n                                [(ngModel)]=\"message\" id=\"exampleFormControlTextarea3\" rows=\"2\"\n                                placeholder=\"Scrivi qualcosa\"></textarea>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div id=\"chat-bx\">\n        <div class=\"btn\">\n            <div class=\"row justify-content-between\">\n                <div class=\"col-lg-11 text-center\" (click)=\"handleChatBox()\">{{activeUser}}</div>\n                <div class=\"col-lg-1\"><i class=\"fa fa-times\" (click)=\"closeChatBox()\"></i></div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chat/chat.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/chat/chat.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsChatChatComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n\n    <div class=\"messaging\">\n        <div class=\"inbox_msg\">\n            <div class=\"inbox_people\">\n                <div class=\"headind_srch\">\n                    <div class=\"recent_heading\">\n                        <h4>Amici</h4>\n                    </div>\n\n                </div>\n                <div class=\"inbox_chat\">\n                    <div *ngFor=\"let p of personalCards; let i = index\">\n                        <div class=\"chat_list\" *ngIf=\"username !== p.user.username\"\n                            [ngClass]=\"{'active_chat': isActive(i)}\">\n                            <div class=\"chat_people\" (click)=\"getMessage(p, i)\">\n                                <div class=\"chat_img\"> <img class=\"md-avatar rounded-circle\" [src]=\"p.base64StringImage\"\n                                        alt=\"sunil\" height=\"30px\" width=\"30px\"> </div>\n                                <div class=\"chat_ib\">\n                                    <h5 [ngClass]=\"{'chat_ib_active': toBeRead(i)}\">\n                                        {{p.user.username}} <span class=\"chat_date\"></span>\n                                    </h5>\n                                    <p *ngIf=\"lastMessage[p.user.username]\" [ngClass]=\"{'chat_ib_active': toBeRead(i)}\">\n                                        {{lastMessage[p.user.username]}}</p>\n                                    <p *ngIf=\"!lastMessage[p.user.username]\">Conversazione con {{p.user.username}}</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"mesgs\" *ngIf=\"showInboxMessage\">\n                <div class=\"msg_history\" #scrollMe>\n                    <div *ngFor=\" let c of chatMessage\">\n                        <div class=\"incoming_msg\">\n                            <div *ngIf=\"isReceived(c)\">\n                                <div class=\"incoming_msg_img\"> <img class=\"md-avatar rounded-circle\"\n                                        [src]=\"currentUser.base64StringImage\" alt=\"sunil\" height=\"30px\" width=\"30px\">\n                                </div>\n                                <div class=\"received_msg\">\n                                    <div class=\"received_withd_msg\">\n                                        <p>{{c.content}}</p>\n                                        <span class=\"time_date\"> 11:01 AM | June 9</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"outgoing_msg\" *ngIf=\"isSent(c)\">\n                            <div class=\"sent_msg\">\n                                <p>{{c.content}}</p>\n                                <span class=\"time_date\"></span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"type_msg\">\n                    <div class=\"input_msg_write\">\n                        <form (ngSubmit)=\"sendMessage()\">\n                            <input type=\"text\" class=\"write_msg\" placeholder=\"Scrivi un messaggio\"\n                                [(ngModel)]=\"sendingMessage\" name=\"sendingMessage\" />\n                            <button class=\"msg_send_btn\" type=\"submit\"><i class=\"fa fa-paper-plane-o\"\n                                    aria-hidden=\"true\"></i></button>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/complete-register/complete-register.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/complete-register/complete-register.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCompleteRegisterCompleteRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row justify-content-around container-fluid no-gutters\">\n    <div class=\"col-lg-7 align-self-center\">\n        <div class=\"card\">\n\n            <div class=\"background\">\n            </div>\n\n            <div class=\"alert alert-success text-center\" role=\"alert\">\n                <h4 class=\"alert-heading\">Grazie {{personalCard.user.name}}!</h4>\n                <p>Ti sei appena iscritto a DoneIt! Hai guadagnato <b>180 CFU</b>.</p>\n                <hr>\n                <p class=\"mb-0\">Se ti va, puoi aggiungere qualcosa su di te.</p>\n            </div>\n\n\n\n            <form class=\"p-5\" action=\"#!\">\n\n\n\n\n                <div class=\"card-body\">\n                    <div class=\"row justify-content-around\">\n                        <div class=\"col-xl-4\">\n\n                            <input type=\"text\" id=\"defaultContactFormName\" class=\"form-control mb-4\"\n                                placeholder=\"Università\" name=\"university\" [(ngModel)]=\"personalCard.university\">\n\n\n                            <input type=\"email\" id=\"defaultContactFormEmail\" class=\"form-control mb-4\"\n                                placeholder=\"Facoltà\" name=\"faculty\" [(ngModel)]=\"personalCard.faculty\">\n                            <input type=\"number\" class=\"form-control mb-4\" placeholder=\"Telefono\" name=\"telephone\"\n                                [(ngModel)]=\"personalCard.telephone\">\n\n\n                            <div class=\"form-group\">\n                                <textarea class=\"form-control rounded-0\" id=\"exampleFormControlTextarea2\" rows=\"6\"\n                                    placeholder=\"Qualcosa su di te\" name=\"statusDescription\"\n                                    [(ngModel)]=\"personalCard.statusDescription\"></textarea>\n                            </div>\n\n                        </div>\n                        <div class=\"col-xl-4 align-self-center\">\n\n\n                            <div class=\"row justify-content-center\">\n                                <img *ngIf=\"url\" id=\"profile_image\" [src]=\"url\" class=\"rounded-circle\" height=\"250px\"\n                                    width=\"250px\">\n                            </div>\n                            <form>\n\n\n                                <div class=\"custom-file\">\n                                    <input type=\"file\" accept=\"image/*\" class=\"custom-file-input\" id=\"customFile\"\n                                        (change)=\"addFile($event)\">\n                                    <label class=\"custom-file-label\" for=\"customFile\">Foto</label>\n\n                                </div>\n                            </form>\n                        </div>\n\n\n                    </div>\n\n                </div>\n                <div class=\"row justify-content-center\">\n                    <button class=\"btn light-blue darken-3\" (click)=\"completeRegister()\" type=\"button\">Conferma</button>\n\n                </div>\n\n\n            </form>\n\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/error/error.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/error/error.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsErrorErrorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>error works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/event/event.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/event/event.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsEventEventComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <form (ngSubmit)='handleEventCreation()'>\n        <fieldset class=\"form-group\">\n            <label>Titolo: </label>\n            <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]='eventPost.title'>\n        </fieldset>\n\n        <fieldset class=\"form-group\">\n            <label>Descrizione: </label>\n            <input type=\"text\" class=\"form-control\" name=\"description\" [(ngModel)]='eventPost.description'>\n        </fieldset>\n\n        \n        <fieldset class = \"form-group\">\n            <label>Data: </label>\n            <input type = \"date\" name = \"Data evento\" [(ngModel)] = \"eventPost.date\">\n        </fieldset>\n        \n        <fieldset class = \"form-group\">\n            <label>Luogo: </label>\n            <input type = \"text\" name = \"place\" [(ngModel)] = \"eventPost.place\" ngx-google-places-autocomplete [options]=\"{\n                types: [],\n                componentRestrictions: { country: 'IT' }\n                }\" #placesRef=\"ngx-places\"  (onAddressChange)=\"handleAddressChange($event)\"/>\n            \n        </fieldset>\n\n        <div style=\"text-align: right;\">\n            <button *ngIf=\"!todoId\" type=\"submit\" class=\"btn btn-success\">Crea</button>\n        </div>\n    </form>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Footer -->\n<footer class=\"page-footer font-small blue fixed-bottom\">\n\n    <!-- Copyright -->\n    <div class=\"footer-copyright text-center py-3\">© 2020 Copyright:\n      <a href=\"https://mdbootstrap.com/education/bootstrap/\"> MDBootstrap.com</a>\n    </div>\n    <!-- Copyright -->\n  \n  </footer>\n  <!-- Footer -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/carousel/carousel.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/carousel/carousel.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeCarouselCarouselComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Card group -->\n<div class=\"carousel-item active\">\n    <!-- Card deck -->\n    <div class=\"card-deck\" style=\"height: 250px; width: 250px\">\n\n        <!-- Card -->\n        <div class=\"card mb-4\">\n\n            <!--Card image-->\n            <div class=\"view overlay\">\n                <img class=\"card-img-top\" src=\"https://mdbootstrap.com/img/Photos/Others/images/16.jpg\"\n                    alt=\"Card image cap\">\n                <a href=\"#!\">\n                    <div class=\"mask rgba-white-slight\"></div>\n                </a>\n            </div>\n\n\n\n\n        </div>\n        <!-- Card -->\n\n        <!-- Card -->\n        <div class=\"card mb-4\">\n\n            <!--Card image-->\n            <div class=\"view overlay\">\n                <img class=\"card-img-top\" src=\"https://mdbootstrap.com/img/Photos/Others/images/14.jpg\"\n                    alt=\"Card image cap\">\n                <a href=\"#!\">\n                    <div class=\"mask rgba-white-slight\"></div>\n                </a>\n            </div>\n\n            <!--Card content-->\n\n\n        </div>\n        <!-- Card -->\n\n        <!-- Card -->\n        <div class=\"card mb-4\">\n\n            <!--Card image-->\n            <div class=\"view overlay\">\n                <img class=\"card-img-top\" src=\"https://mdbootstrap.com/img/Photos/Others/images/15.jpg\"\n                    alt=\"Card image cap\">\n                <a href=\"#!\">\n                    <div class=\"mask rgba-white-slight\"></div>\n                </a>\n            </div>\n\n\n\n        </div>\n        <!-- Card -->\n\n        <div class=\"card mb-4\">\n\n            <!--Card image-->\n            <div class=\"view overlay\">\n                <img class=\"card-img-top\" src=\"https://mdbootstrap.com/img/Photos/Others/images/15.jpg\"\n                    alt=\"Card image cap\">\n                <a href=\"#!\">\n                    <div class=\"mask rgba-white-slight\"></div>\n                </a>\n            </div>\n\n\n\n        </div>\n\n    </div>\n    <!-- Card deck -->\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/create-form/create-form.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/create-form/create-form.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeCreateFormCreateFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n    <div style=\"background-color: white;\">\n        <div class=\"card-body text-center\">\n            <select class=\"form-control\" (change)=\"showForm($event.target.value)\">\n                <option value=\"todo\">Todo</option>\n                <option value=\"event\">Evento</option>\n                <option>Storia</option>\n            </select>\n              <div *ngIf =\"todoResponseMessage == 6\" class=\"alert alert-success\" role=\"alert\">\n                Todo creato correttamente\n              </div>\n\n              <div *ngIf =\"todoResponseMessage == 15\" class=\"alert alert-danger\" role=\"alert\">\n                Non hai i cfu necessari per creare il todo\n              </div>\n\n              <div *ngIf =\"eventResponseMessage == 17\" class=\"alert alert-success\" role=\"alert\">\n                Evento creato correttamente\n              </div>\n              \n            <app-todo *ngIf=\"activatedForm == 'todo'\"></app-todo>\n            <app-event *ngIf=\"activatedForm == 'event'\"></app-event>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/generic-board/generic-board.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/generic-board/generic-board.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeGenericBoardGenericBoardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\" style=\"padding: 0px; background-color: #fafafa;\">\n    <nav class=\"navbar navbar-expand-lg navbar-dark primary-color light-blue darken-3\">\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\n            aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n            <ul class=\"navbar-nav\">\n                <li [ngClass]=\"{'nav-item': true, 'active': activatedBoard === 0}\">\n                    <a class=\"nav-link\" (click)= \"showBoard(0)\">Todo</a>\n                </li>\n                <li class = \"nav-item\" [ngClass]=\"{'nav-item': true, 'active': activatedBoard === 1}\">\n                    <a class=\"nav-link\" (click) = \"showBoard(1)\">Eventi</a>\n                </li>\n              \n\n            </ul>\n            <ul class=\"navbar-nav ml-auto\">\n                <li class=\"nav-item\">\n                    <a data-toggle=\"modal\" data-target=\"#basicExampleModal\"> <i class=\"fa fa-plus-circle\"\n                            style=\"color: whitesmoke; font-size: 1.5rem;\"></i></a>\n                </li>\n            </ul>\n        </div>\n    </nav>\n    <div style=\"padding: 25px\">\n        <app-todo-board *ngIf= \"activatedBoard === 0\"></app-todo-board>\n        <app-event-board *ngIf= \"activatedBoard === 1\"></app-event-board>\n    </div>\n</div>\n\n\n\n<!-- Modal -->\n<div (click) = \"closeModal()\" class=\"modal fade\" id=\"basicExampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Cosa vuoi creare?</h5>\n                <button (click) = \"closeModal()\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <app-create-form></app-create-form>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- (clickOutside)=\"onClickedOutsideModal($event)\" -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n    <div class=\"row justify-content-center\">\n\n\n        <div class=\"alert alert-warning\" *ngIf=\"isRegisterCompleted()\" role=\"alert\">\n            Non hai completato la registrazione. Per completarla, <a routerLink=\"/complete-register\"\n                class=\"text-primary\">clicca qui</a>\n        </div>\n\n        <div class=\"col-lg-9\">\n            <app-generic-board></app-generic-board>\n        </div>\n\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/logout/logout.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/logout/logout.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeLogoutLogoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/story-viewer/story-viewer.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/story-viewer/story-viewer.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeStoryViewerStoryViewerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\">\n    <div class=\"card-header\">\n        Le storie del giorno\n    </div>\n\n    <div class=\"card-body\">\n        <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n            <div class=\"carousel-inner\">\n                <app-carousel></app-carousel>\n            </div>\n            <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n                <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                <span class=\"sr-only\">Previous</span>\n            </a>\n            <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n                <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                <span class=\"sr-only\">Next</span>\n            </a>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/todo-board/todo-board.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/todo-board/todo-board.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeTodoBoardTodoBoardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n\n        <div class=\"col-sm-12 no-gutters\" style=\"background-color: white;\">\n            <div *ngFor=\"let t of todoList\">\n                <div *ngIf=\"personal\">\n                    <app-my-todo-card [todo]='t'></app-my-todo-card>\n                </div>\n                <div *ngIf=\"!personal\">\n                    <app-todo-card (messageEvent)=\"openModal($event)\" [todo]=\"t\"></app-todo-card>\n                </div>\n\n                <div style=\"height: 20px; background-color: #fafafa;\"></div>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n<div *ngIf=\"currentTodo\" (click)=\"closeModal()\" id=\"myModal\" class=\"modal\">\n    <div class=\"modal-content\">\n      <span (click)=\"closeModal()\" class=\"close\">×</span>\n      <span id=\"modal-title\">Utenti proposti</span>\n      <div class=\"modal-list\">\n        <div class=\"row\" *ngFor=\"let proposal of currentTodo.proposals\">\n          <div class = \"modal-user\" >{{proposal.user.username}}</div>\n        </div>\n        </div>\n      </div>\n</div>\n  \n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/user-info/user-info.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/user-info/user-info.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeUserInfoUserInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\" id=\"test\">\n    <div id=\"content\">\n\n        <div>\n            <div class=\"list-group-flush\">\n                <div class=\"list-group-item\" routerLink=\"/home\" routerLinkActive=\"active-item\"\n                    (mouseover)=\"selectActive(0)\" (mouseout)=\"selectActive(-1)\">\n                    <span [ngClass]=\"{'default-fa': iconNumber != 0, 'active-fa': iconNumber === 0}\">\n                        <i class=\"fa fa-clipboard\" routerLinkActive=\"active-fa\"></i>\n                    </span>\n                    Bacheca\n                </div>\n\n                <div class=\"list-group-item\" routerLink={{getMyProfileLink()}} routerLinkActive=\"active-item\"\n                    (mouseover)=\"selectActive(1)\" (mouseout)=\"selectActive(-1)\">\n\n                    <span [ngClass]=\"{'default-fa': iconNumber != 1, 'active-fa': iconNumber === 1}\">\n                        <i class=\"fa fa-user-circle\" routerLinkActive=\"active-fa\"></i>\n                    </span>\n                    Il mio profilo\n\n                </div>\n                <div class=\"list-group-item\" routerLink=\"/my-todo-board\" routerLinkActive=\"active-item\"\n                    (mouseover)=\"selectActive(2)\" (mouseout)=\"selectActive(-1)\">\n\n                    <span [ngClass]=\"{'default-fa': iconNumber != 2, 'active-fa': iconNumber === 2}\">\n                        <i class=\"fa fa-id-badge\" routerLinkActive=\"active-fa\"></i>\n                    </span>\n\n                    I miei Todo\n\n                </div>\n\n                <div class=\"list-group-item\" routerLink=\"/my-events-board\" routerLinkActive=\"active-item\"\n                    (mouseover)=\"selectActive(5)\" (mouseout)=\"selectActive(-1)\">\n\n                    <span [ngClass]=\"{'default-fa': iconNumber != 5, 'active-fa': iconNumber === 5}\">\n                        <i class=\"fa fa-calendar\" routerLinkActive=\"active-fa\"></i>\n                    </span>\n\n                    I miei Eventi\n\n                </div>\n\n\n                <div class=\"list-group-item\" routerLink=\"/chat\" routerLinkActive=\"active-item\"\n                    (mouseover)=\"selectActive(3)\" (mouseout)=\"selectActive(-1)\">\n\n                    <span [ngClass]=\"{'default-fa': iconNumber != 3, 'active-fa': iconNumber === 3}\">\n                        <i class=\"fa fa-comment\" routerLinkActive=\"active-fa\"></i>\n                    </span>\n\n                    Chat\n                </div>\n\n                <div routerLink=\"/logout\" class=\"list-group-item\" (mouseover)=\"selectActive(4)\"\n                    (mouseout)=\"selectActive(-1)\">\n\n                    <span [ngClass]=\"{'default-fa': iconNumber != 4, 'active-fa': iconNumber === 4}\">\n                        <i class=\"fa fa-sign-out\" routerLinkActive=\"active-fa\"></i>\n                    </span>\n                    Logout\n                </div>\n\n            </div>\n        </div>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/list-todo/list-todo.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/list-todo/list-todo.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsListTodoListTodoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\" *ngIf=\"todo\">\n    <table class=\"table\">\n        <thead>\n            <tr>\n                <th>Description</th>\n                <th>Target Date</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let t of todo\">\n                <td>{{t.title}}</td>\n                <td>{{t.description}}</td>\n                <td><button (click)=\"updateTodo(t.id)\" class=\"btn  btn-success\">Update</button></td>\n                <td><button (click)=\"deleteTodo(t.id)\" class=\"btn  btn-warning\">Delete</button></td>\n            </tr>\n        </tbody>\n    </table>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"mb-1 navbar navbar-expand-lg navbar-dark light-blue darken-3 lighten-1 sticky-top\">\n    <a class=\"navbar-brand\" href=\"#\">Done It</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent-555\"\n        aria-controls=\"navbarSupportedContent-555\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent-555\">\n\n        <form (ngSubmit)=\"handleLogin()\" #loginForm=\"ngForm\" class=\"form-inline ml-auto\">\n            <div class=\"md-form my-0\">\n                <input class=\"form-control mr-sm-2\" [(ngModel)]=\"user.username\" name=\"username\" type=\"text\"\n                    placeholder=\"Username\">\n                <input class=\"form-control mr-sm-2\" [(ngModel)]=\"user.password\" name=\"password\" type=\"password\"\n                    placeholder=\"Password\">\n                <button type=\"submit\" class=\"btn btn-outline-white btn-sm my-0\">Login</button>\n            </div>\n        </form>\n    </div>\n</nav>\n\n<div id=\"test\" class=\"container-fluid h-100 row justify-content-center no-gutters\"> \n\n    <!-- <div class=\"col-xl-4 align-self-center\">\n                <img id=\"doneit-image\"\n                    src=\"https://km0digital.it/wp-content/uploads/2019/05/Comunicazione-SociaL-Media-1024x952.jpg\"\n                    class=\"img-fluid\" alt=\"Responsive image\">\n            </div> -->\n\n          \n    <app-register></app-register>\n\n\n\n</div>\n\n<div class=\"background\">\n</div> \n\n\n<!--\n<input ngx-google-places-autocomplete [options]=\"{\n    types: [],\n    componentRestrictions: { country: 'IT' }\n    }\" #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddressChange($event)\"/>\n\n-->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/my-event/my-event.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/my-event/my-event.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMyEventMyEventComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n    <div class=\"row justify-content-center no-gutters\" style=\"margin: 0px;\">\n        <div class=\"col-lg-9 no-gutters\" style=\"background-color: #fafafa;\">\n            <nav class=\"navbar navbar-expand-lg navbar-dark primary-color light-blue darken-3\">\n                <a class=\"navbar-brand\" href=\"#\">Eventi di @{{username}}</a>\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\n                    aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                    <span class=\"navbar-toggler-icon\"></span>\n                </button>\n                <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n                    <ul class=\"navbar-nav ml-auto\">\n                        <li [ngClass]=\"{'nav-item': true, 'active': activatedBoard === 'active'}\">\n                            <a class=\"nav-link\" (click)=\"getMyEventList('active')\">In corso</a>\n                        </li>\n                        <li [ngClass]=\"{'nav-item': true, 'active': activatedBoard === 'joined'}\">\n                            <a class=\"nav-link\" (click)=\"getJoinedEvents()\">Seguiti</a>\n                        </li>\n                        <li [ngClass]=\"{'nav-item': true, 'active': activatedBoard === 'ended'}\">\n                            <a class=\"nav-link\" (click)=\"getMyEventList('ended')\">Terminati</a>\n                        </li>\n                    </ul>\n                </div>\n            </nav>\n            <div style=\"margin: 25px\" *ngIf=\"activatedBoard === 'active'\">\n                <div *ngFor=\"let e of myEventsList\">\n                    <app-event-card (messageEvent)=\"openMap($event)\"\n                        (messageEventPartecipant)=\"openPartecipantModal($event)\" [eventPost]=e [personal]=true>\n                    </app-event-card>\n                </div>\n            </div>\n            <div style=\"margin: 25px\" *ngIf=\"activatedBoard === 'joined'\">\n                <div *ngFor=\"let e of myJoinedEventList\">\n                    <app-event-card (messageEvent)=\"openMap($event)\"\n                        (messageEventPartecipant)=\"openPartecipantModal($event)\" [eventPost]=e [personal]=true>\n                    </app-event-card>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div *ngIf=\"currentTodo\" (click)=\"closeModal()\" id=\"myModal\" class=\"modal\">\n    <div class=\"modal-content\">\n        <span (click)=\"closeModal()\" class=\"close\">×</span>\n        <span id=\"modal-title\">Utenti proposti</span>\n        <div class=\"modal-list\">\n            <div class=\"row\" *ngFor=\"let proposal of currentTodo.proposals\">\n                <div class=\"col-4 modal-user\">{{proposal.user.username}}</div>\n                <div class=\"col-4\" *ngIf=\"proposal.state == 'in progress'\"><button (click)=\"acceptProposal(proposal)\"\n                        class=\"btn btn-success\">accetta</button></div>\n                <div class=\"col-4\" *ngIf=\"proposal.state == 'in progress'\"><button (click)=\"refuseProposal(proposal)\"\n                        class=\"btn btn-danger\">rifiuta</button></div>\n                <div class=\"col-8\" *ngIf=\"proposal.state == 'refused'\"><b>Hai rifiutato questo contatto </b> <a\n                        (click)=\"undoRefuse(proposal)\">Annulla</a></div>\n                <div class=\"col-8\" *ngIf=\"proposal.state == 'accepted'\"><b>Questa persona sta portando a termine il tuo\n                        todo</b>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div (click)=\"closeMap()\" *ngIf=\"isMapOpen\" id=\"myModal\" class=\"modal\">\n    <div class=\"modal-content\">\n        <span (click)=\"closeMap()\" class=\"close\">×</span>\n        <span id=\"modal-title\">Mappa</span>\n        <iframe height=\"450\" frameborder=\"0\" style=\"border:0\" [src]='sanitizeUrl()' allowfullscreen>\n        </iframe>\n    </div>\n</div>\n\n<div (click)=\"closePartecipantsModal()\" *ngIf=\"isPartecipantsModalOpen\" class=\"modal\">\n    <div class=\"modal-content\">\n        <span class=\"close\" (click)=\"closePartecipantsModal()\" *>×</span>\n        <span id=\"modal-title\">Partecipanti</span>\n\n        <ul class=\"list-group list-group-flush\" *ngFor=\"let p of partecipants\">\n            <li class=\"list-group-item\">{{p.user.username}}</li>\n        </ul>\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/my-todo-board/my-todo-board.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/my-todo-board/my-todo-board.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMyTodoBoardMyTodoBoardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n  <div class=\"row justify-content-center no-gutters\" style=\"margin: 0px;\">\n    <div class=\"col-lg-9 no-gutters\" style=\"background-color: #fafafa;\">\n      <nav class=\"navbar navbar-expand-lg navbar-dark primary-color light-blue darken-3\">\n        <a class=\"navbar-brand\" href=\"#\">Todo di {{username}}</a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\n          aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n          <ul class=\"navbar-nav ml-auto\">\n            <li [ngClass]=\"{'nav-item': true, 'active': activatedBoard === 'published'}\">\n              <a class=\"nav-link\" (click)=\"getMyTodoList('published')\">In corso</a>\n            </li>\n            <li [ngClass]=\"{'nav-item': true, 'active': activatedBoard === 'accepted'}\">\n              <a class=\"nav-link\" (click)=\"getMyTodoList('accepted')\">Accettati</a>\n            </li>\n            <li [ngClass]=\"{'nav-item': true, 'active': activatedBoard === 'completed'}\">\n              <a class=\"nav-link\" (click)=\"getMyTodoList('completed')\">Conclusi</a>\n            </li>\n            <li [ngClass]=\"{'nav-item': true, 'active': activatedBoard === 'pending'}\">\n              <a class=\"nav-link\" (click)=\"getJoinedTodoList()\">In attesa</a>\n            </li>\n          </ul>\n        </div>\n      </nav>\n\n      <div style=\"margin: 25px\" *ngIf=\"!activatedBoard === 'pending'\">\n        <div *ngFor=\"let t of todoList\">\n          <app-my-todo-card (messageEvent)=\"receiveMessage($event)\" [todo]=\"t\"></app-my-todo-card>\n        </div>\n\n      </div>\n\n\n      <div style=\"margin: 25px\" *ngIf=\"activatedBoard === 'pending'\">\n        <div *ngFor=\"let t of todoList\">\n          <app-todo-card (messageEvent)=\"openModal($event)\" [todo]=\"t\"></app-todo-card>\n        </div>\n      </div>\n\n\n    </div>\n\n\n  </div>\n\n</div>\n\n\n<div *ngIf=\"currentTodo\" (click)=\"closeModal()\" id=\"myModal\" class=\"modal\">\n  <div class=\"modal-content\">\n    <span (click)=\"closeModal()\" class=\"close\">×</span>\n    <span id=\"modal-title\">Utenti proposti</span>\n    <div class=\"modal-list\">\n      <div class=\"row\" *ngFor=\"let proposal of currentTodo.proposals\">\n        <div class=\"col-4 modal-user\">{{proposal.user.username}}</div>\n\n        <div class=\"col-4\" *ngIf=\"proposal.state == 'in progress'\"><button (click)=\"acceptProposal(proposal)\"\n            class=\"btn btn-success\">accetta</button></div>\n        <div class=\"col-4\" *ngIf=\"proposal.state == 'in progress'\"><button (click)=\"refuseProposal(proposal)\"\n            class=\"btn btn-danger\">rifiuta</button></div>\n\n        <div class=\"col-8\" *ngIf=\"proposal.state == 'refused'\"><b>Hai rifiutato questo contatto </b> <a\n            (click)=\"undoRefuse(proposal)\">Annulla</a></div>\n        <div class=\"col-8\" *ngIf=\"proposal.state == 'accepted'\"><b>Questa persona sta portando a termine il tuo\n            todo</b>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n</div>\n\n\n<div *ngIf=\"currentTodoPending\" (click)=\"closeModal()\" id=\"myModal\" class=\"modal\">\n  <div class=\"modal-content\">\n    <span (click)=\"closeModal()\" class=\"close\">×</span>\n    <span id=\"modal-title\">Utenti proposti</span>\n    <div class=\"modal-list\">\n      <div class=\"row\" *ngFor=\"let proposal of currentTodoPending.proposals\">\n        <div class=\"modal-user\">{{proposal.user.username}}</div>\n      </div>\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/my-todo-card/my-todo-card.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/my-todo-card/my-todo-card.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMyTodoCardMyTodoCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"text-center\">\n        <div class=\"card-header\" style=\"background-color: #fafafa;\">\n            <ul class=\"nav nav-tabs card-header-tabs\">\n                <li class=\"nav-item\">\n                    <a [ngClass]=\"{'nav-link': true, 'active': showCorrectBody === 1}\" (click)=\"changeBody(3)\"\n                        (click)=\"changeBody(1)\">Todo</a>\n                </li>\n\n                <!-- <li class=\"nav-item\">\n                    <a [ngClass]=\"{'nav-link': true, 'active': showCorrectBody === 3}\"\n                        (click)=\"changeBody(3)\">Feedback</a>\n                </li> -->\n            </ul>\n        </div>\n        <div class=\"card-body\" style=\"background-color: #ffffff;\">\n\n\n            <div *ngIf=\"showCorrectBody === 1\">\n                <div class=\"row align-items-center \">\n                    <div class=\"col-xl-3\">\n                        <a class=\"nav-link p-0\" href=\"#\">\n                            <img src=\" https://ptetutorials.com/images/user-profile.png\" class=\"rounded-circle\"\n                                height=\"50px\" width=\"50px\">\n                        </a>\n                    </div>\n                    <div class=\"col-xl-6\">\n                        <h5 style=\"color: #01579b;\">{{todo.user.username}}</h5>\n                    </div>\n                    <div class=\"col-xl-3\">\n                        <h5 id=\"time\">2 minuti fa</h5>\n                    </div>\n                </div>\n\n                <div class=\"row align-items-center\" id=\"todo-title\">\n                    <div class=\"col-sm-12\">\n                        <h5>{{todo.title}}</h5>\n                    </div>\n                </div>\n\n                <div class=\"row align-items-center\">\n                    <div class=\"col-sm-12\">\n                        <div class=\"form-group\">\n                            <textarea readonly class=\"form-control\" id=\"exampleFormControlTextarea3\" rows=\"3\"\n                                style=\"padding: 10px; border-radius: 10px;\">{{todo.description}}</textarea>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"row align-items-center \">\n                    <div *ngIf=\"!acceptedUser\" id=\"info-todo\" class=\"col-xl-4\"><a (click)=\"sendMessage()\"><b>{{getProponentsNumber()}}</b> persone si sono proposte</a></div>\n                    <div *ngIf=\"acceptedUser\" id=\"info-todo\" class=\"col-xl-4\">{{acceptedUser.username}} sta portando a termine questo todo  <a  (click) = \"undoAcceptProposal(todo)\"><b>Annulla</b></a></div>\n                    <div class=\"col-xl-4\">\n                    </div>\n                    <div id=\"icon-div1\" class=\"col-xl-2\">\n                        <span id=\"follow-todo\" style=\"font-size: 2rem;\">\n                            <span style=\"color: #f39200\">\n                                <a><i class=\"fa fa-edit\"></i></a>\n                            </span>\n                        </span>\n                    </div>\n                    <div id=\"icon-div2\" class=\"col-xl-2\">\n                        <span style=\"font-size: 2rem;\">\n                            <span style=\"color: #d34545\">\n                                <a><i class=\"fa fa-times\"></i></a>\n                            </span>\n                        </span>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav *ngIf=\"isUserLoggedIn()\" class=\"mb-1 navbar navbar-expand-lg sticky-top navbar-dark light-blue darken-3\">\n  <a class=\"navbar-brand\" href=\"#\">Done It</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent-555\"\n    aria-controls=\"navbarSupportedContent-555\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent-555\">\n    <ul class=\"navbar-nav mr-auto\">\n    </ul>\n    <ul class=\"navbar-nav ml-auto mr-auto\">\n      <form class=\"form-inline\" id=\"searchbar-form\">\n        <div id=\"searchbar\" class=\"md-form my-0\">\n          <!-- <input id=\"search-input\" class=\"form-control\" type=\"text\" placeholder=\"Cerca\" aria-label=\"Search\"> -->\n          <app-search></app-search>\n        </div>\n      </form>\n    </ul>\n\n    <ul class=\"navbar-nav ml-auto\">\n      <ul class=\"navbar-nav mr-auto nav-flex-icons\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link waves-effect waves-light\">{{personalCard.wallet.cfu}}&nbsp;<i class=\"fa fa-credit-card\"></i></a>\n        </li>\n      </ul>\n      <ul class=\"navbar-nav mr-auto nav-flex-icons\">\n        <li class=\"nav-item \">\n          <a class=\"nav-link waves-effect waves-light\">{{personalCard.user.name}}</a>\n        </li>\n        <li class=\"nav-item avatar\">\n          <a class=\"nav-link p-0\" href=\"#\">\n            <img *ngIf=\"imagePath\" [src]=\"imagePath\" class=\"md-avatar rounded-circle\" alt=\"avatar image\">\n          </a>\n        </li>\n      </ul>\n    </ul>\n  </div>\n</nav>\n\n<div *ngIf=\"userAuth.isUserLoggedIn() && hideMenu()\">\n  <app-user-info></app-user-info>\n\n  <!-- <button *ngIf=\"showChatButton()\" id=\"floating-btn\" type=\"button\" class=\"btn btn-primary btn-circle btn-xl\">\n    <i class=\"fa fa-comment\"></i>\n  </button> -->\n\n  <div *ngIf=\"showChatButton()\">\n    <app-chatbox></app-chatbox>\n  </div>\n\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile-board/profile-board.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile-board/profile-board.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProfileBoardProfileBoardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\" style=\"padding: 0px; background-color: #fafafa;\">\n    <nav class=\"navbar navbar-expand-lg navbar-dark primary-color light-blue darken-3\">\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\n            aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n            <ul class=\"navbar-nav\">\n                <li [ngClass]=\"{'nav-item': true, 'active': activatedBoard === 0}\">\n                    <a class=\"nav-link\" (click)= \"showTodoBoard()\">Todo</a>\n                </li>\n\n                <li class = \"nav-item\" [ngClass]=\"{'nav-item': true, 'active': activatedBoard === 2}\">\n                    <a class=\"nav-link\" (click) = \"showEventBoard()\">Eventi</a>\n                </li>\n              \n             </ul>\n        </div>\n    </nav>\n    <div style=\"padding: 25px\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 no-gutters\" style=\"background-color: white;\">\n                    <div *ngFor=\"let t of todoList\">\n                        <app-todo-card (messageEvent)=\"openModal($event)\" [todo]=\"t\"></app-todo-card>\n                        <div style=\"height: 20px; background-color: #fafafa;\"></div>\n                    </div>\n\n                    <div *ngFor=\"let e of eventList\">\n                        <app-event-card (messageEvent)=\"openMap($event)\" [eventPost]=\"e\"></app-event-card>\n                        <div style=\"height: 20px; background-color: #fafafa;\"></div>\n                    </div>\n                </div>\n        \n            </div>\n        </div>\n    </div>\n</div>\n\n<div (click)=\"closeMap()\" *ngIf=\"isMapOpen\" id=\"myModal\" class=\"modal\">\n    <div class=\"modal-content\">\n      <span (click)=\"closeMap()\" class=\"close\">×</span>\n      <span id=\"modal-title\">Mappa</span>\n      <iframe height=\"450\" frameborder=\"0\" style=\"border:0\"\n        [src]='sanitizeUrl()' allowfullscreen>\n      </iframe>\n    </div>\n</div>\n\n<div *ngIf=\"currentTodo\" (click)=\"closeModal()\" id=\"myModal\" class=\"modal\">\n    <div class=\"modal-content\">\n      <span (click)=\"closeModal()\" class=\"close\">×</span>\n      <span id=\"modal-title\">Utenti proposti</span>\n      <div class=\"modal-list\">\n        <div class=\"row\" *ngFor=\"let proposal of currentTodo.proposals\">\n          <div class = \"modal-user\" >{{proposal.user.username}}</div>\n        </div>\n        </div>\n      </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n\n    <div id=\"user-card\" class=\"row justify-content-center\">\n        <div class=\"col-xl-9\">\n            <div class=\"card mb-3\">\n                <div class=\"row no-gutters\">\n                    <div class=\"col-lg-4 text-center align-self-center\">\n                        <img *ngIf=\"personalCard.imageUrl\" [src]=\"personalCard.imageUrl\" class=\"rounded-circle\"\n                            height=\"200px\" width=\"200px\">\n                    </div>\n                    <div class=\"col-lg-6 no-gutters align-self-center\">\n                        <div class=\"card-body text-left\">\n                            <h2 class=\"card-title text-center\">@{{personalCard.user.username}}\n                            </h2>\n                            <h6 class=\"card-title text-center\">{{personalCard.university}}\n                            </h6>\n                            <h6 class=\"card-title text-center\">{{personalCard.faculty}}\n                            </h6>\n\n\n                            <div class=\"row justify-content-center\">\n                                <div class=\"col-lg-3\" data-toggle=\"modal\" data-target=\"#basicExampleModal\"\n                                    (click)=\"changePanel(0)\">\n                                    <h4 *ngIf=\"followers\" class=\"text-center\">{{followers.length}} F</h4>\n                                    <h4 *ngIf=\"!followers\" class=\"text-center\">0 F</h4>\n                                </div>\n                                <div class=\"col-lg-3\" data-toggle=\"modal\" data-target=\"#basicExampleModal\"\n                                    (click)=\"changePanel(1)\">\n                                    <h4 *ngIf=\"following\" class=\"text-center\">{{following.length}} S</h4>\n                                    <h4 *ngIf=\"!following\" class=\"text-center\">0 S</h4>\n                                </div>\n                                <div class=\"col-lg-3\">\n                                    <h4 class=\"text-center\">0 T</h4>\n                                </div>\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    \n    <app-profile-board [username] = personalCard.user.username></app-profile-board>\n   \n</div>\n\n\n<div class=\"modal fade\" style=\"margin-top: 100px;\" id=\"basicExampleModal\" tabindex=\"-1\" role=\"dialog\"\n    aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n\n            <div class=\"modal-body\" style=\"padding: 0px;\">\n                <div class=\"text-center\">\n                    <div class=\"card-header\">\n                        <ul class=\"nav nav-tabs card-header-tabs\">\n                            <li class=\"nav-item\">\n                                <a (click)=\"changePanel(0)\"\n                                    [ngClass]=\"{'nav-link': true, 'active': showCorrectPanel === 0}\">Followers</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a (click)=\"changePanel(1)\"\n                                    [ngClass]=\"{'nav-link': true, 'active': showCorrectPanel === 1}\">Seguiti</a>\n                            </li>\n\n                        </ul>\n                    </div>\n                    <div *ngIf=\"showCorrectPanel === 0\" class=\"card-body\">\n                        <hr>\n                        <div *ngFor=\"let u of followers\">\n                            <app-list-item-user [user]=\"u\"></app-list-item-user>\n                            <hr>\n                        </div>\n                    </div>\n                    <div *ngIf=\"showCorrectPanel === 1\" class=\"card-body\">\n                        <hr>\n                        <div *ngFor=\"let u of following\">\n                            <app-list-item-user [user]=\"u\"></app-list-item-user>\n                            <hr>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"alert alert-warning text-center\" *ngIf='errorRegister' [innerHTML]=\"errorRegister\"></div>\n\n\n<div class=\"alert alert-success text-center\" *ngIf='messageCode === 4'>Registrazione avvenuta con successo</div>\n\n\n\n<div class=\"card\">\n    <div class=\"card-body\">\n        <div class=\"card-text\">\n            <div class=\"container\">\n\n                <form (ngSubmit)=\"handleRegister()\" #loginForm=\"ngForm\" class=\"text-center\">\n                    <p class=\"h6\">Non hai un account? Registrati</p>\n\n                    <div class=\"form-row mb-4\">\n                        <div class=\"col\">\n                            <!-- First name -->\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Nome\" [(ngModel)]=\"user.name\"\n                                name=\"name\">\n                        </div>\n                        <div class=\"col\">\n                            <!-- Last name -->\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Cognome\" [(ngModel)]=user.surname\n                                name=\"surname\">\n                        </div>\n                    </div>\n\n                    <input type=\"text\" class=\"form-control mb-4\" name=\"username\" [(ngModel)]=\"user.username\"\n                        placeholder=\"Username\">\n\n                    <small class=\"form-text text-muted mb-4\">\n                        Solo caratteri alfanumerici e/o underscore.\n                    </small>\n\n\n                    <!-- E-mail -->\n                    <input type=\"email\" class=\"form-control mb-4\" placeholder=\"E-mail\" [(ngModel)]=user.email\n                        name=\"email\">\n\n                    <!-- Password -->\n                    <input type=\"password\" name=\"password\" [(ngModel)]=\"user.password\" id=\"defaultRegisterFormPassword\"\n                        class=\"form-control\" placeholder=\"Password\"\n                        aria-describedby=\"defaultRegisterFormPasswordHelpBlock\">\n                    <small class=\"form-text text-muted mb-4\">\n                        Almeno 8 caratteri, di cui almeno una maiuscola, una minuscola, un numero e un carattere\n                        speciale.\n                    </small>\n\n                    <input type=\"password\" name=\"password\" [(ngModel)]=\"confirmPassword\" class=\"form-control\"\n                        placeholder=\"Password\" aria-describedby=\"defaultRegisterFormPasswordHelpBlock\"\n                        name=\"confirmPassword\">\n                    <small id=\"defaultRegisterFormPasswordHelpBlock2\" class=\"form-text text-muted mb-4\">\n                        Conferma Password\n                    </small>\n\n                    <!-- Sign up button -->\n                    <button type=\"submit\" class=\"btn btn-success my-4 btn-block\">Registrati</button>\n                </form>\n                <!-- Default form register -->\n            </div>\n\n        </div>\n    </div>\n</div>\n\n\n\n\n<!-- <form (ngSubmit)=\"handleRegister()\" #loginForm=\"ngForm\">\n                <div class=\"alert alert-warning\" *ngIf='errorRegister'>{{errorRegister}}</div>\n                <fieldset class=\"form-group\">\n                    <label>Username: </label>\n                    <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"user.username\">\n                </fieldset>\n\n                <fieldset class=\"form-group\">\n                    <label>Password: </label>\n                    <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"user.password\">\n                </fieldset>\n                <button type=\"submit\" class=\"btn btn-success\">Registrati</button>\n            </form> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/todo-card/todo-card.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/todo-card/todo-card.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTodoCardTodoCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"text-center\">\n        <div class=\"card-header\" style=\"background-color: #fafafa;\">\n            <ul class=\"nav nav-tabs card-header-tabs\">\n                <li class=\"nav-item\">\n                    <a [ngClass]=\"{'nav-link': true, 'active': showCorrectBody === 1}\" (click)=\"changeBody(3)\"\n                        (click)=\"changeBody(1)\">Todo</a>\n                </li>\n                <li class=\"nav-item nav-link\">\n                    <a class=\"text-primary\" *ngIf=\"!alreadyProposed && !isMyTodo()\"\n                        (click)=\" handleTodoProposal()\">Proponiti</a>\n                    <a class=\"text-warning\" *ngIf=\"alreadyProposed && !isMyTodo()\">Già proposto</a>\n                    <b class=\"text-primary\" *ngIf=\"isMyTodo()\">Creato da te</b>\n                </li>\n                <li class=\"nav-item nav-link\">\n                    <a class=\"text-success\">Feedback</a>\n                </li>\n                <!-- <li class=\"nav-item\">\n                    <a [ngClass]=\"{'nav-link': true, 'active': showCorrectBody === 3}\"\n                        (click)=\"changeBody(3)\">Feedback</a>\n                </li> -->\n            </ul>\n        </div>\n        <div class=\"card-body\">\n\n\n            <div *ngIf=\"showCorrectBody === 1\">\n                <div class=\"row align-items-center \">\n                    <div class=\"col-xl-3\">\n                        <a class=\"nav-link p-0\" routerLink=\"/show-profile/{{todo.user.username}}\">\n                            <img src=\" https://ptetutorials.com/images/user-profile.png\" class=\"rounded-circle\"\n                                height=\"50px\" width=\"50px\">\n                        </a>\n                    </div>\n                    <div class=\"col-xl-6\">\n                        <h5 style=\"color: #01579b;\">{{todo.user.username}}</h5>\n                    </div>\n                    <div class=\"col-xl-3\">\n                        <h5 id=\"time\">2 minuti fa</h5>\n                    </div>\n                </div>\n\n                <div class=\"row align-items-center\" id=\"todo-title\">\n                    <div class=\"col-sm-12\">\n                        <h5>{{todo.title}}</h5>\n                    </div>\n                </div>\n\n                <div class=\"row align-items-center\">\n                    <div class=\"col-sm-12\">\n                        <div class=\"form-group\">\n                            <textarea readonly class=\"form-control\" id=\"exampleFormControlTextarea3\" rows=\"3\"\n                                style=\"padding: 10px; border-radius: 10px;\">{{todo.description}}</textarea>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"row align-items-center \">\n                    <div id=\"info-todo\" (click) = \"sendMessage()\" class=\"col-xl-4\"><a><b>{{proponentsNumber}}</b> persone seguono questo todo</a>\n                    </div>\n                    <div class=\"col-xl-4\">\n                        <!-- <p><a href=\"#\" class=\"text-primary\">Proponiti</a></p> -->\n                        <!-- <div class=\"\" *ngIf=\"!alreadyProposed()\" (click)=\"handleTodoProposal()\">Do It\n                        </div> -->\n                        <!-- <p *ngIf=\"alreadyProposed()\">Ti sei già proposto</p> -->\n                    </div>\n                    <div id=\"icon-div1\" class=\"col-xl-2\">\n                        <span id=\"follow-todo\" style=\"font-size: 2rem;\">\n                            <span style=\"color: #dcebf8\">\n                                <a><i class=\"fa fa-heart\"></i></a>\n                            </span>\n                        </span>\n                    </div>\n                    <div id=\"icon-div2\" class=\"col-xl-2\">\n                        <span style=\"font-size: 2rem;\">\n                            <span style=\"color: #4a8bc9\">\n                                <a><i class=\"fa fa-envelope\"></i></a>\n                            </span>\n                        </span>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/todo/todo.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/todo/todo.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTodoTodoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"!todoId\" class=\"container\">\n    <form (ngSubmit)='handleTodoCreation()'>\n        <fieldset class=\"form-group\">\n            <label>Titolo: </label>\n            <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]='todo.title'>\n        </fieldset>\n\n        <fieldset class=\"form-group\">\n            <label>Descrizione: </label>\n            <input type=\"text\" class=\"form-control\" name=\"description\" [(ngModel)]='todo.description'>\n        </fieldset>\n\n        \n        <fieldset class = \"form-group\">\n            <label>Data di scadenza: </label>\n            <input type = \"date\" name = \"Scadenza\" [(ngModel)] = \"todo.expirationDate\">\n        </fieldset>\n        \n        <fieldset class = \"form-group\">\n            <select class=\"browser-default custom-select custom-select-lg mb-3\" [(ngModel)]=\"todo.category\" name=\"selectedValue\">\n                <option *ngFor=\"let category of categories\" [ngValue]=\"category\">{{category.name}} ({{category.cfuPrice}} cfu)</option>\n            </select>\n        </fieldset>\n\n        <div style=\"text-align: right;\">\n            <button *ngIf=\"!todoId\" type=\"submit\" class=\"btn btn-success\">Crea</button>\n        </div>\n    </form>\n</div>\n\n\n<h1 *ngIf=\"todoId\">Aggiorna Todo</h1>\n\n<div class=\"container\">\n    <form *ngIf=\"todoId\" (ngSubmit)='handleTodoUpdate()'>\n        <fieldset class=\"form-group\">\n            <label>Titolo: </label>\n            <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]='todo.title'>\n        </fieldset>\n\n        <fieldset class=\"form-group\">\n            <label>Descrizione: </label>\n            <input type=\"text\" class=\"form-control\" name=\"description\" [(ngModel)]='todo.description'>\n        </fieldset>\n\n        <button *ngIf=\"todoId\" type=\"submit\" class=\"btn btn-success\">Aggiorna</button>\n    </form>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-profile/user-profile.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-profile/user-profile.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsUserProfileUserProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\" *ngIf=\"show\">\n\n    <div id=\"user-card\" class=\"row justify-content-center\">\n        <div class=\"col-xl-9\">\n            <div class=\"card mb-3\">\n                <div class=\"row no-gutters\">\n                    <div class=\"col-lg-4 text-center align-self-center\">\n                        <img *ngIf=\"personalCard.imageUrl\" [src]=\"personalCard.imageUrl\" class=\"rounded-circle\"\n                            height=\"200px\" width=\"200px\">\n                    </div>\n                    <div class=\"col-lg-6 no-gutters align-self-center\">\n                        <div class=\"card-body text-left\">\n                            <h2 class=\"card-title text-center\">@{{personalCard.user.username}}\n\n                                <button class=\"btn  btn-success btn-sm\" (click)=\"followUser(personalCard.user.username)\"\n                                    *ngIf=\"!alreadyFollow && !isMyProfile()\">segui</button>\n                                <button class=\"btn  btn-warning btn-sm\" *ngIf=\"alreadyFollow && !isMyProfile()\">segui già</button>\n                                <button *ngIf = \"!isMyProfile()\" class=\"btn  btn-info btn-sm\">chat</button>\n                            </h2>\n                            <h6 class=\"card-title text-center\">{{personalCard.university}}\n                            </h6>\n                            <h6 class=\"card-title text-center\">{{personalCard.faculty}}\n                            </h6>\n\n                            <div class=\"row justify-content-center\">\n                                <div class=\"col-lg-3\" data-toggle=\"modal\" data-target=\"#basicExampleModal\"\n                                    (click)=\"changePanel(0)\">\n                                    <h4 *ngIf=\"followers\" class=\"text-center\">{{followers.length}} F</h4>\n                                    <h4 *ngIf=\"!followers\" class=\"text-center\">0 F</h4>\n                                </div>\n                                <div class=\"col-lg-3\" data-toggle=\"modal\" data-target=\"#basicExampleModal\"\n                                    (click)=\"changePanel(1)\">\n                                    <h4 *ngIf=\"following\" class=\"text-center\">{{following.length}} S</h4>\n                                    <h4 *ngIf=\"!following\" class=\"text-center\">0 S</h4>\n                                </div>\n                                <div class=\"col-lg-3\">\n                                    <h4 class=\"text-center\">0 T</h4>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row justify-content-center\">\n        <div class=\"col-xl-9\">\n            <app-profile-board [username]=personalCard.user.username></app-profile-board>\n        </div>\n    </div>\n\n    <!--\n    <div class=\"row justify-content-around no-gutters\">\n\n\n        <div id=\"user-board\" class=\"col-xl-9 no-gutters\" style=\"background-color: #fafafa;\">\n\n            <nav class=\"navbar navbar-expand-lg navbar-dark primary-color light-blue darken-3\">\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\n                    aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                    <span class=\"navbar-toggler-icon\"></span>\n                </button>\n                <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n                    <ul class=\"navbar-nav\">\n                        <li class=\"nav-item active\">\n                            <a class=\"nav-link\" href=\"#\">Todo <span class=\"sr-only\">(current)</span></a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#\">Post</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#\">Feedback</a>\n                        </li>\n\n\n                    </ul>\n                    <ul class=\"navbar-nav ml-auto\">\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#\">About me</a>\n                        </li>\n                    </ul>\n\n                </div>\n            </nav>\n            <div style=\"padding: 25px\">\n                <app-todo-board></app-todo-board>\n            </div>\n        </div>\n\n    \n\n\n    </div>\n    -->\n</div>\n\n\n\n<!-- Modal -->\n<div class=\"modal fade\" style=\"margin-top: 100px;\" id=\"basicExampleModal\" tabindex=\"-1\" role=\"dialog\"\n    aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n\n            <div class=\"modal-body\" style=\"padding: 0px;\">\n                <div class=\"text-center\">\n                    <div class=\"card-header\">\n                        <ul class=\"nav nav-tabs card-header-tabs\">\n                            <li class=\"nav-item\">\n                                <a (click)=\"changePanel(0)\"\n                                    [ngClass]=\"{'nav-link': true, 'active': showCorrectPanel === 0}\">Followers</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a (click)=\"changePanel(1)\"\n                                    [ngClass]=\"{'nav-link': true, 'active': showCorrectPanel === 1}\">Seguiti</a>\n                            </li>\n\n                        </ul>\n                    </div>\n                    <div *ngIf=\"showCorrectPanel === 0\" class=\"card-body\">\n                        <hr>\n                        <div *ngFor=\"let u of followers\">\n                            <app-list-item-user [user]=\"u\"></app-list-item-user>\n                            <hr>\n                        </div>\n                    </div>\n                    <div *ngIf=\"showCorrectPanel === 1\" class=\"card-body\">\n                        <hr>\n                        <div *ngFor=\"let u of following\">\n                            <app-list-item-user [user]=\"u\"></app-list-item-user>\n                            <hr>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/event-board/event-board.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/event-board/event-board.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEventBoardEventBoardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-12 no-gutters\" style=\"background-color: white;\">\n            <div *ngFor=\"let e of eventList\">\n                <app-event-card (messageEvent)=\"openMap($event)\"\n                    (messageEventPartecipant)=\"openPartecipantModal($event)\" [eventPost]=\"e\"></app-event-card>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n\n\n\n<div (click)=\"closeMap()\" *ngIf=\"isMapOpen\" id=\"myModal\" class=\"modal\">\n    <div class=\"modal-content\">\n        <span (click)=\"closeMap()\" class=\"close\">×</span>\n        <span id=\"modal-title\">Mappa</span>\n        <iframe height=\"450\" frameborder=\"0\" style=\"border:0\" [src]='sanitizeUrl()' allowfullscreen>\n        </iframe>\n    </div>\n</div>\n\n<div (click)=\"closePartecipantsModal()\" *ngIf=\"isPartecipantsModalOpen\" class=\"modal\">\n    <div class=\"modal-content\">\n        <span class=\"close\" (click)=\"closePartecipantsModal()\" *>×</span>\n        <span id=\"modal-title\">Partecipanti</span>\n\n        <ul class=\"list-group list-group-flush\" *ngFor=\"let p of partecipants\">\n            <li class=\"list-group-item\">{{p.user.username}}</li>\n        </ul>\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/event-card/event-card.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/event-card/event-card.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEventCardEventCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"text-center\">\n        <div class=\"card-header\" style=\"background-color: #fafafa;\">\n            <ul class=\"nav nav-tabs card-header-tabs\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link active\">Evento</a>\n                </li>\n                <li class=\"nav-item nav-link\" *ngIf=\"!personal && !alreadyPartecipated && !isCreatedByUser()\">\n                    <a class=\"text-primary\" (click)=\"joinEvent()\">Partecipa</a>\n                </li>\n                <li class=\"nav-item nav-link\" *ngIf=\"!personal && alreadyPartecipated && !isCreatedByUser()\">\n                    <a class=\"text-warning\">Partecipi già</a>\n                </li>\n                <li class=\"nav-item nav-link\" *ngIf=\"!personal && isCreatedByUser()\">\n                    <a class=\"text-danger\">Creato da Te</a>\n                </li>\n\n                <li class=\"nav-item nav-link\" *ngIf=\"!personal\">\n                    <a class=\"text-success\">Feedback</a>\n                </li>\n            </ul>\n        </div>\n        <div class=\"card-body\">\n            <div>\n                <div class=\"row align-items-center \">\n                    <div class=\"col-lg-3\">\n                        <a class=\"nav-link p-0\" routerLink=\"/show-profile/{{eventPost.user.username}}\">\n                            <img src=\" https://ptetutorials.com/images/user-profile.png\" class=\"rounded-circle\"\n                                height=\"50px\" width=\"50px\">\n                        </a>\n                    </div>\n                    <div class=\"col-lg-6\">\n                        <h5 style=\"color: #01579b;\">{{eventPost.user.username}}</h5>\n                    </div>\n                    <div class=\"col-lg-3\">\n                        <h5 id=\"time\">{{eventPost.date | date: 'dd/MM/yyyy'}}</h5>\n                    </div>\n                </div>\n\n                <div class=\"row align-items-center\" id=\"todo-title\">\n                    <div class=\"col-sm-12\">\n                        <h5>{{eventPost.title}}</h5>\n                    </div>\n                </div>\n\n                <div class=\"row align-items-center\">\n                    <div class=\"col-sm-12\">\n                        <div class=\"form-group\">\n                            <textarea readonly class=\"form-control\" id=\"exampleFormControlTextarea3\" rows=\"3\"\n                                style=\"padding: 10px; border-radius: 10px;\">{{eventPost.description}}</textarea>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"row justify-content-between align-items-center\">\n                    <a id=\"info-todo\" (click)=\"openPartecipantsModal()\"\n                        class=\"col-lg-7\"><b>{{eventPost.eventPartecipations.length}}</b> persone\n                        partecipano a questo evento </a>\n\n\n                    <div id=\"icon-div2\" class=\"col-lg-3\">\n                        <span style=\"font-size: 2rem;\" *ngIf=\"personal\">\n                            <span style=\"color: #d34545\">\n                                <a><i class=\"fa fa-times\"></i></a>\n                            </span>\n                        </span>\n                        <span id=\"follow-todo\" style=\"font-size: 2rem;\" *ngIf=\"personal\">\n                            <span style=\"color: #f39200\">\n                                <a><i class=\"fa fa-edit\"></i></a>\n                            </span>\n                        </span>\n                        <span style=\"font-size: 2rem;\">\n                            <span style=\"color: #4a8bc9\">\n                                <a (click)=\"openMap()\" title=\"{{eventPost.place}}\"><i class=\"fa fa-map-marker\"\n                                        aria-hidden=\"true\"></i></a>\n                            </span>\n                        </span>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/list-item-user/list-item-user.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list-item-user/list-item-user.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppListItemUserListItemUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row no-gutters justify-content-center\">\n    <div class=\"col-lg-3\">\n        <a *ngIf=\"imagePath\"> <img [src]=\"imagePath\" class=\"md-avatar rounded-circle\" alt=\"avatar image\"></a>\n    </div>\n    <div class=\"col-lg-6 align-self-center\">\n        <a>{{user.username}}</a>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSearchSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-form-field style=\"height: 35px; width: 275px; color: aliceblue;\">\n    <form (submit)=confirmSearch(searchString)>\n        <input matInput [(ngModel)]=\"searchString\" name=\"searchString\" [matAutocomplete]=\"auto\" (input)=\"search()\"\n            (change)=\"reset()\">\n    </form>\n</mat-form-field>\n<i class=\"fa fa-search text-white ml-3\" aria-hidden=\"true\"></i>\n<mat-autocomplete #auto=\"matAutocomplete\">\n    <mat-option *ngFor=\"let option of options\" [value]=\" option\" (click)=confirmSearch(option)>{{option}}\n    </mat-option>\n</mat-autocomplete>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_error_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/error/error.component */
    "./src/app/components/error/error.component.ts");
    /* harmony import */


    var _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/register/register.component */
    "./src/app/components/register/register.component.ts");
    /* harmony import */


    var _services_route_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/route-guard.service */
    "./src/app/services/route-guard.service.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_todo_todo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/todo/todo.component */
    "./src/app/components/todo/todo.component.ts");
    /* harmony import */


    var _components_home_logout_logout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/home/logout/logout.component */
    "./src/app/components/home/logout/logout.component.ts");
    /* harmony import */


    var _components_list_todo_list_todo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/list-todo/list-todo.component */
    "./src/app/components/list-todo/list-todo.component.ts");
    /* harmony import */


    var _components_todo_card_todo_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/todo-card/todo-card.component */
    "./src/app/components/todo-card/todo-card.component.ts");
    /* harmony import */


    var _components_complete_register_complete_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/complete-register/complete-register.component */
    "./src/app/components/complete-register/complete-register.component.ts");
    /* harmony import */


    var _components_my_todo_board_my_todo_board_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/my-todo-board/my-todo-board.component */
    "./src/app/components/my-todo-board/my-todo-board.component.ts");
    /* harmony import */


    var _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/user-profile/user-profile.component */
    "./src/app/components/user-profile/user-profile.component.ts");
    /* harmony import */


    var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/chat/chat.component */
    "./src/app/components/chat/chat.component.ts");
    /* harmony import */


    var _components_my_event_my_event_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/my-event/my-event.component */
    "./src/app/components/my-event/my-event.component.ts");

    var routes = [{
      path: '',
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'login',
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'register',
      component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
    }, {
      path: 'home',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
      canActivate: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_6__["RouteGuardService"]]
    }, {
      path: 'update-todo/:id',
      component: _components_todo_todo_component__WEBPACK_IMPORTED_MODULE_8__["TodoComponent"],
      canActivate: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_6__["RouteGuardService"]]
    }, {
      path: 'create-todo',
      component: _components_todo_todo_component__WEBPACK_IMPORTED_MODULE_8__["TodoComponent"],
      canActivate: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_6__["RouteGuardService"]]
    }, {
      path: 'list-todos',
      component: _components_list_todo_list_todo_component__WEBPACK_IMPORTED_MODULE_10__["ListTodoComponent"],
      canActivate: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_6__["RouteGuardService"]]
    }, {
      path: 'todo-card',
      component: _components_todo_card_todo_card_component__WEBPACK_IMPORTED_MODULE_11__["TodoCardComponent"]
    }, {
      path: 'logout',
      component: _components_home_logout_logout_component__WEBPACK_IMPORTED_MODULE_9__["LogoutComponent"],
      canActivate: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_6__["RouteGuardService"]]
    }, // da cancellare: { path: 'show-my-profile', component: ProfileComponent, canActivate: [RouteGuardService] },
    {
      path: 'show-profile/:username',
      component: _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_14__["UserProfileComponent"],
      canActivate: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_6__["RouteGuardService"]]
    }, {
      path: 'complete-register',
      component: _components_complete_register_complete_register_component__WEBPACK_IMPORTED_MODULE_12__["CompleteRegisterComponent"],
      canActivate: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_6__["RouteGuardService"]]
    }, {
      path: "my-todo-board",
      component: _components_my_todo_board_my_todo_board_component__WEBPACK_IMPORTED_MODULE_13__["MyTodoBoardComponent"],
      canActivate: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_6__["RouteGuardService"]]
    }, {
      path: "my-events-board",
      component: _components_my_event_my_event_component__WEBPACK_IMPORTED_MODULE_16__["MyEventComponent"],
      canActivate: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_6__["RouteGuardService"]]
    }, {
      path: "chat",
      component: _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_15__["ChatComponent"],
      canActivate: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_6__["RouteGuardService"]]
    }, // {path: 'register', component: RegisterComponent, canActivate: [RouteGuardService]},
    {
      path: '**',
      component: _components_error_error_component__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'doneit';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/esm2015/slider.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/esm2015/autocomplete.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_error_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/error/error.component */
    "./src/app/components/error/error.component.ts");
    /* harmony import */


    var _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/register/register.component */
    "./src/app/components/register/register.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_home_todo_board_todo_board_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/home/todo-board/todo-board.component */
    "./src/app/components/home/todo-board/todo-board.component.ts");
    /* harmony import */


    var _components_home_logout_logout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/home/logout/logout.component */
    "./src/app/components/home/logout/logout.component.ts");
    /* harmony import */


    var _services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./services/http-interceptor.service */
    "./src/app/services/http-interceptor.service.ts");
    /* harmony import */


    var _components_todo_todo_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/todo/todo.component */
    "./src/app/components/todo/todo.component.ts");
    /* harmony import */


    var _components_list_todo_list_todo_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/list-todo/list-todo.component */
    "./src/app/components/list-todo/list-todo.component.ts");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _components_todo_card_todo_card_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/todo-card/todo-card.component */
    "./src/app/components/todo-card/todo-card.component.ts");
    /* harmony import */


    var _components_home_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/home/user-info/user-info.component */
    "./src/app/components/home/user-info/user-info.component.ts");
    /* harmony import */


    var _components_home_create_form_create_form_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/home/create-form/create-form.component */
    "./src/app/components/home/create-form/create-form.component.ts");
    /* harmony import */


    var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/chat/chat.component */
    "./src/app/components/chat/chat.component.ts");
    /* harmony import */


    var _components_home_generic_board_generic_board_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/home/generic-board/generic-board.component */
    "./src/app/components/home/generic-board/generic-board.component.ts");
    /* harmony import */


    var _components_home_story_viewer_story_viewer_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/home/story-viewer/story-viewer.component */
    "./src/app/components/home/story-viewer/story-viewer.component.ts");
    /* harmony import */


    var _components_home_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/home/carousel/carousel.component */
    "./src/app/components/home/carousel/carousel.component.ts");
    /* harmony import */


    var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/profile/profile.component */
    "./src/app/components/profile/profile.component.ts");
    /* harmony import */


    var _components_complete_register_complete_register_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/complete-register/complete-register.component */
    "./src/app/components/complete-register/complete-register.component.ts");
    /* harmony import */


    var ngx_image_compress__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ngx-image-compress */
    "./node_modules/ngx-image-compress/fesm2015/ngx-image-compress.js");
    /* harmony import */


    var _components_my_todo_board_my_todo_board_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./components/my-todo-board/my-todo-board.component */
    "./src/app/components/my-todo-board/my-todo-board.component.ts");
    /* harmony import */


    var _components_my_todo_card_my_todo_card_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./components/my-todo-card/my-todo-card.component */
    "./src/app/components/my-todo-card/my-todo-card.component.ts");
    /* harmony import */


    var _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./components/user-profile/user-profile.component */
    "./src/app/components/user-profile/user-profile.component.ts");
    /* harmony import */


    var _list_item_user_list_item_user_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./list-item-user/list-item-user.component */
    "./src/app/list-item-user/list-item-user.component.ts");
    /* harmony import */


    var _components_event_event_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./components/event/event.component */
    "./src/app/components/event/event.component.ts");
    /* harmony import */


    var _event_board_event_board_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./event-board/event-board.component */
    "./src/app/event-board/event-board.component.ts");
    /* harmony import */


    var _event_card_event_card_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./event-card/event-card.component */
    "./src/app/event-card/event-card.component.ts");
    /* harmony import */


    var _search_search_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./search/search.component */
    "./src/app/search/search.component.ts");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _chatbox_chatbox_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./chatbox/chatbox.component */
    "./src/app/chatbox/chatbox.component.ts");
    /* harmony import */


    var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ngx-google-places-autocomplete */
    "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
    /* harmony import */


    var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_41___default =
    /*#__PURE__*/
    __webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_41__);
    /* harmony import */


    var _components_profile_board_profile_board_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./components/profile-board/profile-board.component */
    "./src/app/components/profile-board/profile-board.component.ts");
    /* harmony import */


    var _components_my_event_my_event_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./components/my-event/my-event.component */
    "./src/app/components/my-event/my-event.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _components_error_error_component__WEBPACK_IMPORTED_MODULE_9__["ErrorComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"], _components_home_todo_board_todo_board_component__WEBPACK_IMPORTED_MODULE_13__["TodoBoardComponent"], _components_home_logout_logout_component__WEBPACK_IMPORTED_MODULE_14__["LogoutComponent"], _components_todo_todo_component__WEBPACK_IMPORTED_MODULE_16__["TodoComponent"], _components_list_todo_list_todo_component__WEBPACK_IMPORTED_MODULE_17__["ListTodoComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_18__["NavbarComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"], _components_todo_card_todo_card_component__WEBPACK_IMPORTED_MODULE_21__["TodoCardComponent"], _components_home_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_22__["UserInfoComponent"], _components_home_create_form_create_form_component__WEBPACK_IMPORTED_MODULE_23__["CreateFormComponent"], _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_24__["ChatComponent"], _components_home_generic_board_generic_board_component__WEBPACK_IMPORTED_MODULE_25__["GenericBoardComponent"], _components_home_story_viewer_story_viewer_component__WEBPACK_IMPORTED_MODULE_26__["StoryViewerComponent"], _components_home_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_27__["CarouselComponent"], _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_28__["ProfileComponent"], _components_complete_register_complete_register_component__WEBPACK_IMPORTED_MODULE_29__["CompleteRegisterComponent"], _components_my_todo_board_my_todo_board_component__WEBPACK_IMPORTED_MODULE_31__["MyTodoBoardComponent"], _components_my_todo_card_my_todo_card_component__WEBPACK_IMPORTED_MODULE_32__["MyTodoCardComponent"], _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_33__["UserProfileComponent"], _list_item_user_list_item_user_component__WEBPACK_IMPORTED_MODULE_34__["ListItemUserComponent"], _components_event_event_component__WEBPACK_IMPORTED_MODULE_35__["EventComponent"], _event_board_event_board_component__WEBPACK_IMPORTED_MODULE_36__["EventBoardComponent"], _event_card_event_card_component__WEBPACK_IMPORTED_MODULE_37__["EventCardComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_38__["SearchComponent"], _chatbox_chatbox_component__WEBPACK_IMPORTED_MODULE_40__["ChatboxComponent"], _components_profile_board_profile_board_component__WEBPACK_IMPORTED_MODULE_42__["ProfileBoardComponent"], _components_my_event_my_event_component__WEBPACK_IMPORTED_MODULE_43__["MyEventComponent"]],
      imports: [ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_41__["GooglePlaceModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_39__["MatInputModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"]],
      exports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_39__["MatInputModule"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
        useClass: _services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_15__["HttpInterceptorService"],
        multi: true
      }, [ngx_image_compress__WEBPACK_IMPORTED_MODULE_30__["NgxImageCompressService"]]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/chatbox/chatbox.component.css":
  /*!***********************************************!*\
    !*** ./src/app/chatbox/chatbox.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppChatboxChatboxComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n.list-group-flush{\n    margin-top: 20px;\n  }\n  \n  .fa{\n      margin-right: 12px;\n  }\n  \n  .img-thumbnail{\n      margin-top: 10px;\n  }\n  \n  #content{\n      height:  calc(100% - 40px);\n      position: absolute;\n      bottom: 50px;\n      width: 100%;\n      overflow-y: scroll;\n  }\n  \n  #test{\n    background-color: #fafafa;\n    border-radius: 0;\n      position: fixed;\n      bottom: 0;\n      right: 0;\n      top: 58px;\n      width: 12vw;\n      max-height: 100%;\n      overflow: auto;\n      z-index: 1;\n      padding: 0px;\n      z-index: 1;\n  }\n  \n  .bold{\n    font-weight: bold;\n  }\n  \n  #content::-webkit-scrollbar {\n      display: none;\n    }\n  \n  #content {\n      -ms-overflow-style: none;\n    }\n  \n  @media screen and (max-width: 992px) {\n      .container-fluid {\n        display: none;\n      }\n      #chat-content{\n        display: none;\n      }\n    }\n  \n  .list-group-item{\n      background-color: #fafafa;\n      font-size: small;\n      margin-top: 10px;\n    }\n  \n  .list-group-item:hover{\n      color: white !important;\n      background-color: #009df8 !important;\n      cursor: pointer;\n    }\n  \n  #username{\n      text-align: center;\n      margin-top: 50px;\n  \n    }\n  \n  h4{\n    margin-top: 30px;\n  }\n  \n  .active-item{\n    color: white !important;\n    background-color: #0277bd !important; \n  }\n  \n  .default-fa{\n    color: gray;\n  }\n  \n  .active-fa{\n    color: white\n  }\n  \n  .float{\n      height: 40px;\n      position: absolute;\n      bottom: 0;\n      right: 0;\n      text-transform: none;\n      \n  }\n  \n  .md-avatar {\n    vertical-align: middle;\n    width: 20px;\n    height: 20px;\n    margin-right: 5px;\n}\n  \n  #chat-bx{\n \n}\n  \n  #chat-bx div{\n  margin: 0px;\n  text-transform: none;\n  width: 350px;\n  height: 40px;\n  padding-right: 0px;\n  padding-left: 0px;\n  background-color: #009df8;\n}\n  \n  #chat-content{\n  width: 350px;\n  margin-right: 20px;\n  position: fixed;\n  right: 13vw;\n  bottom: 0;\n  z-index: 1;\n}\n  \n  #chat-inbox{\n  height: 400px;\n  background-color: #fafafa;\n}\n  \n  @media screen and (min-width: 992px) {\n  .container-fluid{\n      margin-left: 13vw; \n      width: 87vw !important;\n  }\n  \n}\n  \n  .container-fluid{\n    margin-top: 50px\n}\n  \n  .incoming_msg_img {\n  display: inline-block;\n  width: 6%;\n}\n  \n  .received_msg {\n  display: inline-block;\n  padding: 0 0 0 10px;\n  vertical-align: top;\n  width: 92%;\n }\n  \n  .received_withd_msg p {\n  background: #ebebeb none repeat scroll 0 0;\n  border-radius: 3px;\n  color: #646464;\n  font-size: 14px;\n  margin: 0;\n  padding: 5px 10px 5px 12px;\n  width: 100%;\n}\n  \n  .time_date {\n  color: #747474;\n  display: block;\n  font-size: 12px;\n  margin: 8px 0 0;\n}\n  \n  .received_withd_msg { width: 57%;}\n  \n  .mesgs {\n\n  height: calc(100% - 50px);\n\n  padding: 30px 15px 0 25px;\n  width: 100%;\n}\n  \n  .sent_msg p {\n  background: #0277bd none repeat scroll 0 0;\n  border-radius: 3px;\n  font-size: 14px;\n  margin: 0; color:#fff;\n  padding: 5px 10px 5px 12px;\n  width:100%;\n}\n  \n  .outgoing_msg{ overflow:hidden; margin:26px 0 26px;}\n  \n  .sent_msg {\n  float: right;\n  width: 46%;\n}\n  \n  .input_msg_write input {\n  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\n  border: medium none;\n  color: #4c4c4c;\n  font-size: 15px;\n  height: 50px;\n  width: 100%;\n\n}\n  \n  textarea{\n  margin-top: 10px;\n  padding: 10px;\n  background-color: white;\n}\n  \n  textarea:hover{\n\n  background-color: white;\n}\n  \n  .msg_send_btn {\n  background: #0277bd  none repeat scroll 0 0;\n  border: medium none;\n  border-radius: 50%;\n  color: #fff;\n  cursor: pointer;\n  font-size: 17px;\n  height: 33px;\n  position: absolute;\n  right: 0;\n  top: 11px;\n  width: 33px;\n}\n  \n  .messaging { padding: 0 0 50px 0;}\n  \n  .msg_history {\n  height: 280px;\n  overflow-y: auto;\n}\n  \n  .incoming_msg_img {\n  display: inline-block;\n  width: 6%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdGJveC9jaGF0Ym94LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZ0JBQWdCO0VBQ2xCOztFQUVBO01BQ0ksa0JBQWtCO0VBQ3RCOztFQUVBO01BQ0ksZ0JBQWdCO0VBQ3BCOztFQUVBO01BQ0ksMEJBQTBCO01BQzFCLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osV0FBVztNQUNYLGtCQUFrQjtFQUN0Qjs7RUFHQTtJQUNFLHlCQUF5QjtJQUN6QixnQkFBZ0I7TUFDZCxlQUFlO01BQ2YsU0FBUztNQUNULFFBQVE7TUFDUixTQUFTO01BQ1QsV0FBVztNQUNYLGdCQUFnQjtNQUNoQixjQUFjO01BQ2QsVUFBVTtNQUNWLFlBQVk7TUFDWixVQUFVO0VBQ2Q7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7TUFDSSxhQUFhO0lBQ2Y7O0VBRUE7TUFDRSx3QkFBd0I7SUFDMUI7O0VBRUE7TUFDRTtRQUNFLGFBQWE7TUFDZjtNQUNBO1FBQ0UsYUFBYTtNQUNmO0lBQ0Y7O0VBSUE7TUFDRSx5QkFBeUI7TUFDekIsZ0JBQWdCO01BQ2hCLGdCQUFnQjtJQUNsQjs7RUFFQTtNQUNFLHVCQUF1QjtNQUN2QixvQ0FBb0M7TUFDcEMsZUFBZTtJQUNqQjs7RUFJQTtNQUNFLGtCQUFrQjtNQUNsQixnQkFBZ0I7O0lBRWxCOztFQUVGO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUtBO0lBQ0UsdUJBQXVCO0lBQ3ZCLG9DQUFvQztFQUN0Qzs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFO0VBQ0Y7O0VBRUE7TUFDSSxZQUFZO01BQ1osa0JBQWtCO01BQ2xCLFNBQVM7TUFDVCxRQUFRO01BQ1Isb0JBQW9COztFQUV4Qjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7RUFHQTs7QUFFQTs7RUFFQTtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7RUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxTQUFTO0VBQ1QsVUFBVTtBQUNaOztFQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7RUFRQTtFQUNFO01BQ0ksaUJBQWlCO01BQ2pCLHNCQUFzQjtFQUMxQjs7QUFFRjs7RUFFQTtJQUNJO0FBQ0o7O0VBWUE7RUFDRSxxQkFBcUI7RUFDckIsU0FBUztBQUNYOztFQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsVUFBVTtDQUNYOztFQUNBO0VBQ0MsMENBQTBDO0VBQzFDLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtFQUNmLFNBQVM7RUFDVCwwQkFBMEI7RUFDMUIsV0FBVztBQUNiOztFQUNBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7RUFDQSxzQkFBc0IsVUFBVSxDQUFDOztFQUVqQzs7RUFFRSx5QkFBeUI7O0VBRXpCLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0VBRUM7RUFDQywwQ0FBMEM7RUFDMUMsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixTQUFTLEVBQUUsVUFBVTtFQUNyQiwwQkFBMEI7RUFDMUIsVUFBVTtBQUNaOztFQUNBLGVBQWUsZUFBZSxFQUFFLGtCQUFrQixDQUFDOztFQUNuRDtFQUNFLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0VBQ0E7RUFDRSxtREFBbUQ7RUFDbkQsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7O0FBRWI7O0VBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7RUFDQTs7RUFFRSx1QkFBdUI7QUFDekI7O0VBRUE7RUFDRSwyQ0FBMkM7RUFDM0MsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsV0FBVztBQUNiOztFQUNBLGFBQWEsbUJBQW1CLENBQUM7O0VBQ2pDO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7RUFFQTtFQUNFLHFCQUFxQjtFQUNyQixTQUFTO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9jaGF0Ym94L2NoYXRib3guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmxpc3QtZ3JvdXAtZmx1c2h7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuICBcbiAgLmZhe1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICB9XG4gIFxuICAuaW1nLXRodW1ibmFpbHtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgXG4gICNjb250ZW50e1xuICAgICAgaGVpZ2h0OiAgY2FsYygxMDAlIC0gNDBweCk7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDUwcHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgfVxuICBcbiAgXG4gICN0ZXN0e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgdG9wOiA1OHB4O1xuICAgICAgd2lkdGg6IDEydnc7XG4gICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgei1pbmRleDogMTtcbiAgfVxuXG4gIC5ib2xke1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIFxuICAjY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAjY29udGVudCB7XG4gICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gICAgfVxuICBcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgICAgLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgICAjY2hhdC1jb250ZW50e1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgXG4gIFxuICBcbiAgICAubGlzdC1ncm91cC1pdGVte1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbiAgXG4gICAgLmxpc3QtZ3JvdXAtaXRlbTpob3ZlcntcbiAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWRmOCAhaW1wb3J0YW50O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgXG4gIFxuICBcbiAgICAjdXNlcm5hbWV7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICBcbiAgICB9XG4gIFxuICBoNHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG4gIFxuICBcbiAgXG4gIFxuICAuYWN0aXZlLWl0ZW17XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyNzdiZCAhaW1wb3J0YW50OyBcbiAgfVxuICBcbiAgLmRlZmF1bHQtZmF7XG4gICAgY29sb3I6IGdyYXk7XG4gIH1cbiAgXG4gIC5hY3RpdmUtZmF7XG4gICAgY29sb3I6IHdoaXRlXG4gIH1cblxuICAuZmxvYXR7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgXG4gIH1cblxuICAubWQtYXZhdGFyIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuXG4jY2hhdC1ieHtcbiBcbn1cblxuI2NoYXQtYnggZGl2e1xuICBtYXJnaW46IDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIHdpZHRoOiAzNTBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5ZGY4O1xufVxuXG4jY2hhdC1jb250ZW50e1xuICB3aWR0aDogMzUwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMTN2dztcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4jY2hhdC1pbmJveHtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbn1cblxuXG5cblxuXG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmNvbnRhaW5lci1mbHVpZHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxM3Z3OyBcbiAgICAgIHdpZHRoOiA4N3Z3ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG59XG5cbi5jb250YWluZXItZmx1aWR7XG4gICAgbWFyZ2luLXRvcDogNTBweFxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cbi5pbmNvbWluZ19tc2dfaW1nIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNiU7XG59XG4ucmVjZWl2ZWRfbXNnIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwIDAgMCAxMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB3aWR0aDogOTIlO1xuIH1cbiAucmVjZWl2ZWRfd2l0aGRfbXNnIHAge1xuICBiYWNrZ3JvdW5kOiAjZWJlYmViIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgY29sb3I6ICM2NDY0NjQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTJweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4udGltZV9kYXRlIHtcbiAgY29sb3I6ICM3NDc0NzQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogOHB4IDAgMDtcbn1cbi5yZWNlaXZlZF93aXRoZF9tc2cgeyB3aWR0aDogNTclO31cblxuLm1lc2dzIHtcblxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDUwcHgpO1xuXG4gIHBhZGRpbmc6IDMwcHggMTVweCAwIDI1cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4gLnNlbnRfbXNnIHAge1xuICBiYWNrZ3JvdW5kOiAjMDI3N2JkIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDA7IGNvbG9yOiNmZmY7XG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMnB4O1xuICB3aWR0aDoxMDAlO1xufVxuLm91dGdvaW5nX21zZ3sgb3ZlcmZsb3c6aGlkZGVuOyBtYXJnaW46MjZweCAwIDI2cHg7fVxuLnNlbnRfbXNnIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogNDYlO1xufVxuLmlucHV0X21zZ193cml0ZSBpbnB1dCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCkgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcbiAgY29sb3I6ICM0YzRjNGM7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTAwJTtcblxufVxuXG50ZXh0YXJlYXtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG50ZXh0YXJlYTpob3ZlcntcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLm1zZ19zZW5kX2J0biB7XG4gIGJhY2tncm91bmQ6ICMwMjc3YmQgIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGJvcmRlcjogbWVkaXVtIG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBoZWlnaHQ6IDMzcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMTFweDtcbiAgd2lkdGg6IDMzcHg7XG59XG4ubWVzc2FnaW5nIHsgcGFkZGluZzogMCAwIDUwcHggMDt9XG4ubXNnX2hpc3Rvcnkge1xuICBoZWlnaHQ6IDI4MHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uaW5jb21pbmdfbXNnX2ltZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDYlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/chatbox/chatbox.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/chatbox/chatbox.component.ts ***!
    \**********************************************/

  /*! exports provided: ChatboxComponent */

  /***/
  function srcAppChatboxChatboxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatboxComponent", function () {
      return ChatboxComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_user_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/user/user.model */
    "./src/app/models/user/user.model.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _services_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/chat.service */
    "./src/app/services/chat.service.ts");
    /* harmony import */


    var _models_chat_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../models/chat-message */
    "./src/app/models/chat-message.ts");

    var ChatboxComponent =
    /*#__PURE__*/
    function () {
      function ChatboxComponent(userService, chatService) {
        _classCallCheck(this, ChatboxComponent);

        this.userService = userService;
        this.chatService = chatService;
        this.showChat = false;
        this.closeChat = true;
        this.chatInfo = new Map();
        this.chatContent = new Map();
        this.currentChat = [];
        this.activeUser = '';
        this.message = '';
        this.firstIterationIgnore = false;
      }

      _createClass(ChatboxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.username = sessionStorage.getItem("username");
          console.warn("OK");
          this.userService.getAllUsers().subscribe(function (result) {
            _this2.personalCards = result;
          });
          this.scrollToBottom();
          this.chatService.socketChatMessageSubject.subscribe(function (result) {
            var socketChatMessage = result;

            if (socketChatMessage.content && _this2.firstIterationIgnore) {
              _this2.addReceivedMessage(socketChatMessage);

              _this2.notifyUserMessageReceived(socketChatMessage);
            }

            _this2.firstIterationIgnore = true;
          }, function (error) {});
        }
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          this.scrollToBottom();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          console.warn("Destroy");
        }
      }, {
        key: "isSent",
        value: function isSent(chatMessage) {
          var u1 = sessionStorage.getItem('username');
          var u2 = chatMessage.from.username;
          return u1 === u2;
        } //oppure se è un messaggio ricevuto

      }, {
        key: "isReceived",
        value: function isReceived(chatMessage) {
          var u1 = sessionStorage.getItem('username');
          var u2 = chatMessage.to.username;
          return u1 === u2;
        }
      }, {
        key: "addReceivedMessage",
        value: function addReceivedMessage(socketChatMessage) {
          if (!this.chatContent[socketChatMessage.userFrom]) {
            this.chatContent[socketChatMessage.userFrom] = [];
          }

          var userFrom = new _models_user_user_model__WEBPACK_IMPORTED_MODULE_2__["User"](socketChatMessage.userFrom, "");
          var userTo = new _models_user_user_model__WEBPACK_IMPORTED_MODULE_2__["User"](socketChatMessage.userTo, "");
          var chatMessage = new _models_chat_message__WEBPACK_IMPORTED_MODULE_5__["ChatMessage"](userFrom, userTo, socketChatMessage.content);
          this.chatContent[socketChatMessage.userFrom].push(chatMessage);
          this.currentChat = this.chatContent[socketChatMessage.userFrom];
        }
      }, {
        key: "addSentMessage",
        value: function addSentMessage(message) {
          if (!this.chatContent[this.activeUser]) {
            this.chatContent[this.activeUser] = [];
          }

          var userFrom = new _models_user_user_model__WEBPACK_IMPORTED_MODULE_2__["User"](sessionStorage.getItem("username"), "");
          var userTo = new _models_user_user_model__WEBPACK_IMPORTED_MODULE_2__["User"](this.activeUser, "");
          var chatMessage = new _models_chat_message__WEBPACK_IMPORTED_MODULE_5__["ChatMessage"](userFrom, userTo, message);
          this.chatContent[this.activeUser].push(chatMessage);
          this.currentChat = this.chatContent[this.activeUser];
        }
      }, {
        key: "notifyUserMessageReceived",
        value: function notifyUserMessageReceived(socketChatMessage) {
          if (this.activeUser !== socketChatMessage.userFrom) {
            this.chatInfo[socketChatMessage.userFrom] = true;
          }
        }
      }, {
        key: "handleChatBox",
        value: function handleChatBox() {
          if (this.showChat) {
            this.showChat = false;
          } else {
            this.showChat = true;
          }
        }
      }, {
        key: "closeChatBox",
        value: function closeChatBox() {
          this.closeChat = true;
          this.activeUser = '';
        }
      }, {
        key: "openChat",
        value: function openChat(p) {
          this.closeChat = false;
          this.showChat = true;
          this.activeUser = p.user.username;
          console.log("Ora tolgo: " + this.activeUser);
          this.chatInfo[this.activeUser] = null;
          this.currentChat = this.chatContent[this.activeUser];
        }
      }, {
        key: "notifyMessageArrived",
        value: function notifyMessageArrived(p) {
          return this.chatInfo[p.user.username];
        }
      }, {
        key: "scrollToBottom",
        value: function scrollToBottom() {
          try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
          } catch (err) {}
        }
      }, {
        key: "sendMessage",
        value: function sendMessage(event) {
          event.preventDefault();
          this.addSentMessage(this.message);
          this.chatService.sendChatMessage(this.activeUser, this.message);
          this.message = '';
        }
      }]);

      return ChatboxComponent;
    }();

    ChatboxComponent.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _services_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollMe', {
      static: false
    })], ChatboxComponent.prototype, "myScrollContainer", void 0);
    ChatboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chatbox',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chatbox.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/chatbox/chatbox.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chatbox.component.css */
      "./src/app/chatbox/chatbox.component.css")).default]
    })], ChatboxComponent);
    /***/
  },

  /***/
  "./src/app/components/chat/chat.component.css":
  /*!****************************************************!*\
    !*** ./src/app/components/chat/chat.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsChatChatComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@media screen and (min-width: 992px) {\n    .container-fluid{\n        margin-left: 13vw; \n        width: 87vw !important;\n    }\n    \n  }\n\n  .container-fluid{\n      margin-top: 50px\n  }\n\n  .container{max-width:1170px; margin:auto;}\n\n  img{ max-width:100%;}\n\n  .inbox_people {\n    background: #fffefe none repeat scroll 0 0;\n    float: left;\n    overflow: hidden;\n    width: 40%; border-right:1px solid #c4c4c4;\n  }\n\n  .inbox_msg {\n    border: 1px solid #c4c4c4;\n    clear: both;\n    overflow: hidden;\n  }\n\n  .top_spac{ margin: 20px 0 0;}\n\n  .recent_heading {float: left; width:40%;}\n\n  .srch_bar {\n    display: inline-block;\n    text-align: right;\n    width: 60%; \n  }\n\n  .headind_srch{ padding:10px 29px 10px 20px; overflow:hidden; border-bottom:1px solid #c4c4c4;}\n\n  .recent_heading h4 {\n    color: #05728f;\n    font-size: 21px;\n    margin: auto;\n  }\n\n  .srch_bar input{ border:1px solid #cdcdcd; border-width:0 0 1px 0; width:80%; padding:2px 0 4px 6px; background:none;}\n\n  .srch_bar .input-group-addon button {\n    background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\n    border: medium none;\n    padding: 0;\n    color: #707070;\n    font-size: 18px;\n  }\n\n  .srch_bar .input-group-addon { margin: 0 0 0 -27px;}\n\n  .chat_ib h5{ font-size:15px; color:#464646; margin:0 0 8px 0;}\n\n  .chat_ib h5 span{ font-size:13px; float:right;}\n\n  .chat_ib p{ font-size:14px; color:#989898; margin:auto}\n\n  .chat_img {\n    float: left;\n\n  }\n\n  .chat_ib_active{\n    font-weight: bold;\n    color: black;\n  }\n\n  .chat_ib {\n    float: left;\n    padding: 0 0 0 15px;\n    width: 88%;\n  }\n\n  .chat_people{ overflow:hidden; clear:both;}\n\n  .chat_list {\n    border-bottom: 1px solid #c4c4c4;\n    margin: 0;\n    padding: 18px 16px 10px;\n  }\n\n  .inbox_chat { max-height: 600px; overflow-y: scroll;}\n\n  .active_chat{ background:#ebebeb;}\n\n  .incoming_msg_img {\n    display: inline-block;\n  }\n\n  .received_msg {\n    display: inline-block;\n    padding: 0 0 0 10px;\n    vertical-align: top;\n    width: 92%;\n   }\n\n  .received_withd_msg p {\n    background: #ebebeb none repeat scroll 0 0;\n    border-radius: 3px;\n    color: #646464;\n    font-size: 14px;\n    margin: 0;\n    padding: 5px 10px 5px 12px;\n    width: 100%;\n  }\n\n  .time_date {\n    color: #747474;\n    display: block;\n    font-size: 12px;\n    margin: 8px 0 0;\n  }\n\n  .received_withd_msg { width: 57%;}\n\n  .mesgs {\n    float: left;\n    padding: 30px 15px 0 25px;\n    width: 60%;\n  }\n\n  .sent_msg p {\n    background: #0277bd none repeat scroll 0 0;\n    border-radius: 3px;\n    font-size: 14px;\n    margin: 0; color:#fff;\n    padding: 5px 10px 5px 12px;\n    width:100%;\n  }\n\n  .outgoing_msg{ overflow:hidden; margin:26px 0 26px;}\n\n  .sent_msg {\n    float: right;\n    width: 46%;\n  }\n\n  .input_msg_write input {\n    background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\n    border: medium none;\n    color: #4c4c4c;\n    font-size: 15px;\n    min-height: 48px;\n    width: 100%;\n  }\n\n  .type_msg {border-top: 1px solid #c4c4c4;position: relative;}\n\n  .msg_send_btn {\n    background: #0277bd  none repeat scroll 0 0;\n    border: medium none;\n    border-radius: 50%;\n    color: #fff;\n    cursor: pointer;\n    font-size: 17px;\n    height: 33px;\n    position: absolute;\n    right: 0;\n    top: 11px;\n    width: 33px;\n  }\n\n  .messaging { padding: 0 0 50px 0;}\n\n  .msg_history {\n    height: 516px;\n    overflow-y: auto;\n  }\n\n  .chat_list:hover{\n    background:#ebebeb;\n    cursor: pointer;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0L2NoYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLHNCQUFzQjtJQUMxQjs7RUFFRjs7RUFFQTtNQUNJO0VBQ0o7O0VBR0EsV0FBVyxnQkFBZ0IsRUFBRSxXQUFXLENBQUM7O0VBQ3pDLEtBQUssY0FBYyxDQUFDOztFQUNwQjtJQUNFLDBDQUEwQztJQUMxQyxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFVBQVUsRUFBRSw4QkFBOEI7RUFDNUM7O0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjs7RUFDQSxXQUFXLGdCQUFnQixDQUFDOztFQUc1QixpQkFBaUIsV0FBVyxFQUFFLFNBQVMsQ0FBQzs7RUFFeEM7SUFDRSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLFVBQVU7RUFDWjs7RUFFQSxlQUFlLDJCQUEyQixFQUFFLGVBQWUsRUFBRSwrQkFBK0IsQ0FBQzs7RUFFN0Y7SUFDRSxjQUFjO0lBQ2QsZUFBZTtJQUNmLFlBQVk7RUFDZDs7RUFDQSxpQkFBaUIsd0JBQXdCLEVBQUUsc0JBQXNCLEVBQUUsU0FBUyxFQUFFLHFCQUFxQixFQUFFLGVBQWUsQ0FBQzs7RUFDckg7SUFDRSxtREFBbUQ7SUFDbkQsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixjQUFjO0lBQ2QsZUFBZTtFQUNqQjs7RUFDQSwrQkFBK0IsbUJBQW1CLENBQUM7O0VBRW5ELGFBQWEsY0FBYyxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQzs7RUFDN0Qsa0JBQWtCLGNBQWMsRUFBRSxXQUFXLENBQUM7O0VBQzlDLFlBQVksY0FBYyxFQUFFLGFBQWEsRUFBRSxXQUFXOztFQUN0RDtJQUNFLFdBQVc7O0VBRWI7O0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsWUFBWTtFQUNkOztFQUNBO0lBQ0UsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixVQUFVO0VBQ1o7O0VBRUEsY0FBYyxlQUFlLEVBQUUsVUFBVSxDQUFDOztFQUMxQztJQUNFLGdDQUFnQztJQUNoQyxTQUFTO0lBQ1QsdUJBQXVCO0VBQ3pCOztFQUNBLGNBQWMsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUM7O0VBRXBELGNBQWMsa0JBQWtCLENBQUM7O0VBRWpDO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsVUFBVTtHQUNYOztFQUNBO0lBQ0MsMENBQTBDO0lBQzFDLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZUFBZTtJQUNmLFNBQVM7SUFDVCwwQkFBMEI7SUFDMUIsV0FBVztFQUNiOztFQUNBO0lBQ0UsY0FBYztJQUNkLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZUFBZTtFQUNqQjs7RUFDQSxzQkFBc0IsVUFBVSxDQUFDOztFQUNqQztJQUNFLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsVUFBVTtFQUNaOztFQUVDO0lBQ0MsMENBQTBDO0lBQzFDLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsU0FBUyxFQUFFLFVBQVU7SUFDckIsMEJBQTBCO0lBQzFCLFVBQVU7RUFDWjs7RUFDQSxlQUFlLGVBQWUsRUFBRSxrQkFBa0IsQ0FBQzs7RUFDbkQ7SUFDRSxZQUFZO0lBQ1osVUFBVTtFQUNaOztFQUNBO0lBQ0UsbURBQW1EO0lBQ25ELG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7O0VBRUEsV0FBVyw2QkFBNkIsQ0FBQyxrQkFBa0IsQ0FBQzs7RUFDNUQ7SUFDRSwyQ0FBMkM7SUFDM0MsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZUFBZTtJQUNmLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztFQUNiOztFQUNBLGFBQWEsbUJBQW1CLENBQUM7O0VBQ2pDO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGF0L2NoYXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgLmNvbnRhaW5lci1mbHVpZHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEzdnc7IFxuICAgICAgICB3aWR0aDogODd2dyAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBcbiAgfVxuXG4gIC5jb250YWluZXItZmx1aWR7XG4gICAgICBtYXJnaW4tdG9wOiA1MHB4XG4gIH1cblxuXG4gIC5jb250YWluZXJ7bWF4LXdpZHRoOjExNzBweDsgbWFyZ2luOmF1dG87fVxuICBpbWd7IG1heC13aWR0aDoxMDAlO31cbiAgLmluYm94X3Blb3BsZSB7XG4gICAgYmFja2dyb3VuZDogI2ZmZmVmZSBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGg6IDQwJTsgYm9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjYzRjNGM0O1xuICB9XG4gIC5pbmJveF9tc2cge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjNGM0YzQ7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICAudG9wX3NwYWN7IG1hcmdpbjogMjBweCAwIDA7fVxuICBcbiAgXG4gIC5yZWNlbnRfaGVhZGluZyB7ZmxvYXQ6IGxlZnQ7IHdpZHRoOjQwJTt9XG5cbiAgLnNyY2hfYmFyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgd2lkdGg6IDYwJTsgXG4gIH1cblxuICAuaGVhZGluZF9zcmNoeyBwYWRkaW5nOjEwcHggMjlweCAxMHB4IDIwcHg7IG92ZXJmbG93OmhpZGRlbjsgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2M0YzRjNDt9XG4gIFxuICAucmVjZW50X2hlYWRpbmcgaDQge1xuICAgIGNvbG9yOiAjMDU3MjhmO1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbiAgLnNyY2hfYmFyIGlucHV0eyBib3JkZXI6MXB4IHNvbGlkICNjZGNkY2Q7IGJvcmRlci13aWR0aDowIDAgMXB4IDA7IHdpZHRoOjgwJTsgcGFkZGluZzoycHggMCA0cHggNnB4OyBiYWNrZ3JvdW5kOm5vbmU7fVxuICAuc3JjaF9iYXIgLmlucHV0LWdyb3VwLWFkZG9uIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICAgIGJvcmRlcjogbWVkaXVtIG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBjb2xvcjogIzcwNzA3MDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgLnNyY2hfYmFyIC5pbnB1dC1ncm91cC1hZGRvbiB7IG1hcmdpbjogMCAwIDAgLTI3cHg7fVxuICBcbiAgLmNoYXRfaWIgaDV7IGZvbnQtc2l6ZToxNXB4OyBjb2xvcjojNDY0NjQ2OyBtYXJnaW46MCAwIDhweCAwO31cbiAgLmNoYXRfaWIgaDUgc3BhbnsgZm9udC1zaXplOjEzcHg7IGZsb2F0OnJpZ2h0O31cbiAgLmNoYXRfaWIgcHsgZm9udC1zaXplOjE0cHg7IGNvbG9yOiM5ODk4OTg7IG1hcmdpbjphdXRvfVxuICAuY2hhdF9pbWcge1xuICAgIGZsb2F0OiBsZWZ0O1xuXG4gIH1cbiAgLmNoYXRfaWJfYWN0aXZle1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICAuY2hhdF9pYiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZzogMCAwIDAgMTVweDtcbiAgICB3aWR0aDogODglO1xuICB9XG4gIFxuICAuY2hhdF9wZW9wbGV7IG92ZXJmbG93OmhpZGRlbjsgY2xlYXI6Ym90aDt9XG4gIC5jaGF0X2xpc3Qge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzRjNGM0O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAxOHB4IDE2cHggMTBweDtcbiAgfVxuICAuaW5ib3hfY2hhdCB7IG1heC1oZWlnaHQ6IDYwMHB4OyBvdmVyZmxvdy15OiBzY3JvbGw7fVxuICBcbiAgLmFjdGl2ZV9jaGF0eyBiYWNrZ3JvdW5kOiNlYmViZWI7fVxuICBcbiAgLmluY29taW5nX21zZ19pbWcge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAucmVjZWl2ZWRfbXNnIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMCAwIDAgMTBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIHdpZHRoOiA5MiU7XG4gICB9XG4gICAucmVjZWl2ZWRfd2l0aGRfbXNnIHAge1xuICAgIGJhY2tncm91bmQ6ICNlYmViZWIgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgY29sb3I6ICM2NDY0NjQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTJweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAudGltZV9kYXRlIHtcbiAgICBjb2xvcjogIzc0NzQ3NDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luOiA4cHggMCAwO1xuICB9XG4gIC5yZWNlaXZlZF93aXRoZF9tc2cgeyB3aWR0aDogNTclO31cbiAgLm1lc2dzIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiAzMHB4IDE1cHggMCAyNXB4O1xuICAgIHdpZHRoOiA2MCU7XG4gIH1cbiAgXG4gICAuc2VudF9tc2cgcCB7XG4gICAgYmFja2dyb3VuZDogIzAyNzdiZCBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luOiAwOyBjb2xvcjojZmZmO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMnB4O1xuICAgIHdpZHRoOjEwMCU7XG4gIH1cbiAgLm91dGdvaW5nX21zZ3sgb3ZlcmZsb3c6aGlkZGVuOyBtYXJnaW46MjZweCAwIDI2cHg7fVxuICAuc2VudF9tc2cge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB3aWR0aDogNDYlO1xuICB9XG4gIC5pbnB1dF9tc2dfd3JpdGUgaW5wdXQge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCkgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgICBib3JkZXI6IG1lZGl1bSBub25lO1xuICAgIGNvbG9yOiAjNGM0YzRjO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtaW4taGVpZ2h0OiA0OHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAudHlwZV9tc2cge2JvcmRlci10b3A6IDFweCBzb2xpZCAjYzRjNGM0O3Bvc2l0aW9uOiByZWxhdGl2ZTt9XG4gIC5tc2dfc2VuZF9idG4ge1xuICAgIGJhY2tncm91bmQ6ICMwMjc3YmQgIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gICAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBoZWlnaHQ6IDMzcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMTFweDtcbiAgICB3aWR0aDogMzNweDtcbiAgfVxuICAubWVzc2FnaW5nIHsgcGFkZGluZzogMCAwIDUwcHggMDt9XG4gIC5tc2dfaGlzdG9yeSB7XG4gICAgaGVpZ2h0OiA1MTZweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICB9XG5cbiAgLmNoYXRfbGlzdDpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiNlYmViZWI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/components/chat/chat.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/chat/chat.component.ts ***!
    \***************************************************/

  /*! exports provided: ChatComponent */

  /***/
  function srcAppComponentsChatChatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatComponent", function () {
      return ChatComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_models_user_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/user/user.model */
    "./src/app/models/user/user.model.ts");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var src_app_models_personal_card_personal_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/models/personal-card/personal-card */
    "./src/app/models/personal-card/personal-card.ts");
    /* harmony import */


    var src_app_models_chat_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/models/chat-message */
    "./src/app/models/chat-message.ts");
    /* harmony import */


    var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/chat.service */
    "./src/app/services/chat.service.ts");

    var ChatComponent =
    /*#__PURE__*/
    function () {
      function ChatComponent(userService, chatService) {
        _classCallCheck(this, ChatComponent);

        this.userService = userService;
        this.chatService = chatService;
        this.currentUser = new src_app_models_personal_card_personal_card__WEBPACK_IMPORTED_MODULE_4__["PersonalCard"]();
        this.contactsNumber = 0;
        this.index = -1;
        this.showInboxMessage = false;
        this.sendingMessage = '';
        this.map = new Map();
        this.chatInfo = new Map();
        this.lastMessage = new Map();
        this.firstIterationIgnore = false;
      }

      _createClass(ChatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.username = sessionStorage.getItem("username");
          this.chatService.socketChatMessageSubject.subscribe(function (result) {
            var socketChatMessage = result;

            if (socketChatMessage.content && _this3.firstIterationIgnore) {
              _this3.addReceivedMessage(socketChatMessage);
            }

            _this3.firstIterationIgnore = true;
          }, function (error) {});
          this.scrollToBottom();
          this.userService.getAllUsers().subscribe(function (result) {
            _this3.personalCards = result;
            _this3.contactsNumber = _this3.personalCards.length;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          this.scrollToBottom();
        } //on click, vengono caricati i messaggi relativi alla coppia di utenti

      }, {
        key: "getMessage",
        value: function getMessage(personalCard, index) {
          if (this.currentUser.user.username === personalCard.user.username) {
            return;
          }

          this.index = index;
          this.loadChatContent(personalCard.user.username);
          this.showInboxMessage = true;
          this.currentUser = personalCard;
          this.chatInfo[personalCard.user.username] = false;
        }
      }, {
        key: "isActive",
        value: function isActive(i) {
          return this.index === i;
        }
      }, {
        key: "toBeRead",
        value: function toBeRead(i) {
          var username = this.personalCards[i].user.username;
          return this.chatInfo[username];
        } //carica la lista di messaggi corretta

      }, {
        key: "loadChatContent",
        value: function loadChatContent(username) {
          if (this.map[username] === undefined) {
            this.map[username] = [];
          }

          this.chatMessage = this.map[username];
        } //determina se è inviato da me

      }, {
        key: "isSent",
        value: function isSent(chatMessage) {
          var u1 = sessionStorage.getItem('username');
          var u2 = chatMessage.from.username;
          return u1 === u2;
        } //oppure se è un messaggio ricevuto

      }, {
        key: "isReceived",
        value: function isReceived(chatMessage) {
          var u1 = sessionStorage.getItem('username');
          var u2 = chatMessage.to.username;
          return u1 === u2;
        }
      }, {
        key: "sendMessage",
        value: function sendMessage() {
          var userTo = this.currentUser.user.username;
          this.chatService.sendChatMessage(userTo, this.sendingMessage);
          this.addSentMessage(userTo);
          this.sendingMessage = '';
        }
      }, {
        key: "scrollToBottom",
        value: function scrollToBottom() {
          try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
          } catch (err) {}
        }
      }, {
        key: "addReceivedMessage",
        value: function addReceivedMessage(socketChatMessage) {
          if (this.map[socketChatMessage.userFrom] === undefined) {
            this.map[socketChatMessage.userFrom] = [];
          }

          var from = new src_app_models_user_user_model__WEBPACK_IMPORTED_MODULE_2__["User"](socketChatMessage.userFrom, "");
          var to = new src_app_models_user_user_model__WEBPACK_IMPORTED_MODULE_2__["User"](sessionStorage.getItem("username"), "");
          this.lastMessage[socketChatMessage.userFrom] = socketChatMessage.content;
          var chatMessage = new src_app_models_chat_message__WEBPACK_IMPORTED_MODULE_5__["ChatMessage"](from, to, socketChatMessage.content);
          this.map[socketChatMessage.userFrom].push(chatMessage);
          this.notifyUser(socketChatMessage.userFrom);
        }
      }, {
        key: "notifyUser",
        value: function notifyUser(userFrom) {
          var i = 0;
          var personalCard;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.personalCards[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var p = _step.value;

              if (p.user.username === userFrom) {
                if (i === 0) {
                  break;
                }

                this.personalCards.splice(i, 1);
                this.personalCards.unshift(p);
                break;
              }

              i += 1;
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          if (this.index !== i) {
            this.chatInfo[userFrom] = true;
          }

          this.handleIndex(this.index, i);
        }
      }, {
        key: "handleIndex",
        value: function handleIndex(selectedChat, oldPositionChat) {
          if (this.index === -1) {} else if (selectedChat === oldPositionChat && selectedChat !== 0) {
            this.index = 0;
          } else if (selectedChat < oldPositionChat) {
            this.index++;
          }
        }
      }, {
        key: "addSentMessage",
        value: function addSentMessage(userTo) {
          if (this.map[userTo] === undefined) {
            this.map[userTo] = [];
          }

          var from = new src_app_models_user_user_model__WEBPACK_IMPORTED_MODULE_2__["User"](sessionStorage.getItem("username"), "");
          var to = new src_app_models_user_user_model__WEBPACK_IMPORTED_MODULE_2__["User"](userTo, "");
          var chatMessage = new src_app_models_chat_message__WEBPACK_IMPORTED_MODULE_5__["ChatMessage"](from, to, this.sendingMessage);
          this.map[userTo].push(chatMessage);
        }
      }]);

      return ChatComponent;
    }();

    ChatComponent.ctorParameters = function () {
      return [{
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_6__["ChatService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollMe', {
      static: false
    })], ChatComponent.prototype, "myScrollContainer", void 0);
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chat.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chat/chat.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chat.component.css */
      "./src/app/components/chat/chat.component.css")).default]
    })], ChatComponent);
    /***/
  },

  /***/
  "./src/app/components/complete-register/complete-register.component.css":
  /*!******************************************************************************!*\
    !*** ./src/app/components/complete-register/complete-register.component.css ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCompleteRegisterCompleteRegisterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container-fluid{\n    margin-top: 25px;\n    \n}\n\nform{\n    padding-top: 0px !important;\n}\n\ninput{\n\n    padding: 10px;\n}\n\n#profile_image{\n    margin-bottom: 25px;\n}\n\ntextarea{\n    padding: 10px;\n}\n\n.background{\n    position: fixed;\n    top: 65%;\n    left: 0;\n    background-color: #0277bd;\n    width: 100%;\n    z-index: -1;\n    height: 100%;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wbGV0ZS1yZWdpc3Rlci9jb21wbGV0ZS1yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFHQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixRQUFRO0lBQ1IsT0FBTztJQUNQLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7O0FBRWhCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21wbGV0ZS1yZWdpc3Rlci9jb21wbGV0ZS1yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZHtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIFxufVxuXG5mb3Jte1xuICAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuXG5pbnB1dHtcblxuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbiNwcm9maWxlX2ltYWdle1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbnRleHRhcmVhe1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5iYWNrZ3JvdW5ke1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDY1JTtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjc3YmQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogLTE7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/complete-register/complete-register.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/complete-register/complete-register.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: CompleteRegisterComponent */

  /***/
  function srcAppComponentsCompleteRegisterCompleteRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompleteRegisterComponent", function () {
      return CompleteRegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_models_personal_card_personal_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/personal-card/personal-card */
    "./src/app/models/personal-card/personal-card.ts");
    /* harmony import */


    var ngx_image_compress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-image-compress */
    "./node_modules/ngx-image-compress/fesm2015/ngx-image-compress.js");
    /* harmony import */


    var src_app_services_register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/register.service */
    "./src/app/services/register.service.ts");
    /* harmony import */


    var src_app_models_response_message_message_code__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/models/response-message/message-code */
    "./src/app/models/response-message/message-code.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");

    var CompleteRegisterComponent =
    /*#__PURE__*/
    function () {
      function CompleteRegisterComponent(imageCompress, registerService, router, userService) {
        _classCallCheck(this, CompleteRegisterComponent);

        this.imageCompress = imageCompress;
        this.registerService = registerService;
        this.router = router;
        this.userService = userService;
        this.personalCard = new src_app_models_personal_card_personal_card__WEBPACK_IMPORTED_MODULE_2__["PersonalCard"]();
      }

      _createClass(CompleteRegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.userService.personalCardSubject.subscribe(function (personalCard) {
            _this4.personalCard = personalCard;

            _this4.showUserImage(personalCard);
          });
          this.userService.getMyPersonalCard().subscribe(function (result) {
            console.log(result);
          }, function (error) {});
        }
      }, {
        key: "showUserImage",
        value: function showUserImage(personalCard) {
          if (personalCard.imageUrl) {
            this.url = personalCard.imageUrl;
          }
        }
      }, {
        key: "compressFile",
        value: function compressFile(image) {
          var _this5 = this;

          this.imgResultBeforeCompress = image;
          console.warn('Size in bytes was:', this.imageCompress.byteCount(image));
          this.imageCompress.compressFile(image, ngx_image_compress__WEBPACK_IMPORTED_MODULE_3__["DOC_ORIENTATION"], 25, 25).then(function (result) {
            _this5.imgResultAfterCompress = result;
            _this5.url = _this5.imgResultAfterCompress;
            console.warn('Size in bytes is now:', _this5.imageCompress.byteCount(result));
          });
        }
      }, {
        key: "addFile",
        value: function addFile(event) {
          var _this6 = this;

          if (event.target.files && event.target.files[0]) {
            var file = event.target.files[0];
            var reader = new FileReader();

            reader.onload = function (event) {
              _this6.url = event.target.result;

              _this6.compressFile(_this6.url);

              _this6.getBase64ImageFromUrl(_this6.url).then(function (result) {
                return _this6.handleResult(result);
              }).catch(function (err) {
                return console.error(err);
              });
            };

            reader.readAsDataURL(event.target.files[0]);
          }
        }
      }, {
        key: "getBase64ImageFromUrl",
        value: function getBase64ImageFromUrl(imageUrl) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this7 = this;

            var res, blob;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return fetch(imageUrl);

                  case 2:
                    res = _context.sent;
                    _context.next = 5;
                    return res.blob();

                  case 5:
                    blob = _context.sent;
                    return _context.abrupt("return", new Promise(function (resolve, reject) {
                      var reader = new FileReader();
                      reader.addEventListener("load", function () {
                        resolve(reader.result);
                      }, false);

                      reader.onerror = function () {
                        return reject(_this7);
                      };

                      reader.readAsDataURL(blob);
                    }));

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
      }, {
        key: "handleReaderLoaded",
        value: function handleReaderLoaded(e) {
          this.personalCard.base64StringImage = 'data:image/png;base64,' + btoa(e.target.result);
        }
      }, {
        key: "handleResult",
        value: function handleResult(result) {
          this.personalCard.base64StringImage = String(result);
          console.log(this.personalCard);
        }
      }, {
        key: "completeRegister",
        value: function completeRegister() {
          var _this8 = this;

          this.registerService.completeUserRegister(this.personalCard).subscribe(function (result) {
            _this8.handleResponse(result);
          }, function (error) {
            console.log("NO OK");
          });
        }
      }, {
        key: "handleResponse",
        value: function handleResponse(result) {
          this.responseMessage = result;

          if (this.responseMessage.messageCode === src_app_models_response_message_message_code__WEBPACK_IMPORTED_MODULE_5__["MessageCode"].SUCCESSFUL_REGISTER) {
            sessionStorage.removeItem("firstLogin");
            this.router.navigate(['home']);
          } else if (this.responseMessage.messageCode === src_app_models_response_message_message_code__WEBPACK_IMPORTED_MODULE_5__["MessageCode"].INCOMPLETE_REGISTER) {
            this.router.navigate(['home']);
          } else {
            console.log("qualcosa è andato storto");
          }
        }
      }]);

      return CompleteRegisterComponent;
    }();

    CompleteRegisterComponent.ctorParameters = function () {
      return [{
        type: ngx_image_compress__WEBPACK_IMPORTED_MODULE_3__["NgxImageCompressService"]
      }, {
        type: src_app_services_register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
      }];
    };

    CompleteRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-complete-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./complete-register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/complete-register/complete-register.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./complete-register.component.css */
      "./src/app/components/complete-register/complete-register.component.css")).default]
    })], CompleteRegisterComponent);
    /***/
  },

  /***/
  "./src/app/components/error/error.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/error/error.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsErrorErrorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/error/error.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/error/error.component.ts ***!
    \*****************************************************/

  /*! exports provided: ErrorComponent */

  /***/
  function srcAppComponentsErrorErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () {
      return ErrorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ErrorComponent =
    /*#__PURE__*/
    function () {
      function ErrorComponent() {
        _classCallCheck(this, ErrorComponent);
      }

      _createClass(ErrorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ErrorComponent;
    }();

    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-error',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./error.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/error/error.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./error.component.css */
      "./src/app/components/error/error.component.css")).default]
    })], ErrorComponent);
    /***/
  },

  /***/
  "./src/app/components/event/event.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/event/event.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsEventEventComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "::ng-deep .pac-container {   \n    z-index: 9999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ldmVudC9ldmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXZlbnQvZXZlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAucGFjLWNvbnRhaW5lciB7ICAgXG4gICAgei1pbmRleDogOTk5OTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/event/event.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/event/event.component.ts ***!
    \*****************************************************/

  /*! exports provided: EventComponent, Event */

  /***/
  function srcAppComponentsEventEventComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventComponent", function () {
      return EventComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Event", function () {
      return Event;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/event.service */
    "./src/app/services/event.service.ts");
    /* harmony import */


    var src_app_models_response_message_message_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/models/response-message/message-code */
    "./src/app/models/response-message/message-code.ts");

    var EventComponent =
    /*#__PURE__*/
    function () {
      function EventComponent(eventService) {
        _classCallCheck(this, EventComponent);

        this.eventService = eventService;
        this.eventPost = new Event();
      }

      _createClass(EventComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.eventService.eventResponseMessage.subscribe(function (e) {
            _this9.eventResponseMessage = e;
          });
        }
      }, {
        key: "handleEventCreation",
        value: function handleEventCreation() {
          var _this10 = this;

          this.eventService.createEvent(this.eventPost).subscribe(function (response) {
            console.log(response);

            _this10.eventService.setEventCreationResponse(src_app_models_response_message_message_code__WEBPACK_IMPORTED_MODULE_3__["MessageCode"].EVENT_CREATED);

            _this10.cleanFields();
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "handleAddressChange",
        value: function handleAddressChange($event) {
          this.eventPost.place = $event.formatted_address;
          this.eventPost.placeId = $event.place_id;
        }
      }, {
        key: "cleanFields",
        value: function cleanFields() {
          this.eventPost.title = "";
          this.eventPost.description = "";
          this.eventPost.date = null;
          this.eventPost.place = "";
        }
      }]);

      return EventComponent;
    }();

    EventComponent.ctorParameters = function () {
      return [{
        type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"]
      }];
    };

    EventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-event',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./event.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/event/event.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./event.component.css */
      "./src/app/components/event/event.component.css")).default]
    })], EventComponent);

    var Event = function Event() {
      _classCallCheck(this, Event);
    };
    /***/

  },

  /***/
  "./src/app/components/footer/footer.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/footer/footer.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/components/footer/footer.component.css")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/components/home/carousel/carousel.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/components/home/carousel/carousel.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeCarouselCarouselComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/home/carousel/carousel.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/components/home/carousel/carousel.component.ts ***!
    \****************************************************************/

  /*! exports provided: CarouselComponent */

  /***/
  function srcAppComponentsHomeCarouselCarouselComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarouselComponent", function () {
      return CarouselComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CarouselComponent =
    /*#__PURE__*/
    function () {
      function CarouselComponent() {
        _classCallCheck(this, CarouselComponent);
      }

      _createClass(CarouselComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CarouselComponent;
    }();

    CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-carousel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./carousel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/carousel/carousel.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./carousel.component.css */
      "./src/app/components/home/carousel/carousel.component.css")).default]
    })], CarouselComponent);
    /***/
  },

  /***/
  "./src/app/components/home/create-form/create-form.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/components/home/create-form/create-form.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeCreateFormCreateFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container{\n    margin-top: 50px;\n}\n\n.card-header{\n    background-color: #0277bd;\n    color: white;\n    font-weight: 300;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2NyZWF0ZS1mb3JtL2NyZWF0ZS1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9jcmVhdGUtZm9ybS9jcmVhdGUtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4uY2FyZC1oZWFkZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyNzdiZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/home/create-form/create-form.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/home/create-form/create-form.component.ts ***!
    \**********************************************************************/

  /*! exports provided: CreateFormComponent */

  /***/
  function srcAppComponentsHomeCreateFormCreateFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateFormComponent", function () {
      return CreateFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/todo.service */
    "./src/app/services/todo.service.ts");
    /* harmony import */


    var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/event.service */
    "./src/app/services/event.service.ts");

    var CreateFormComponent =
    /*#__PURE__*/
    function () {
      function CreateFormComponent(todoService, eventService) {
        _classCallCheck(this, CreateFormComponent);

        this.todoService = todoService;
        this.eventService = eventService;
        this.activatedForm = "todo";
      }

      _createClass(CreateFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.todoService.todoResponseMessage.subscribe(function (m) {
            _this11.todoResponseMessage = m;
          });
          this.eventService.eventResponseMessage.subscribe(function (e) {
            _this11.eventResponseMessage = e;
          });
        }
      }, {
        key: "selectForm",
        value: function selectForm(formNumber) {
          this.showCorrectForm = formNumber;
        }
      }, {
        key: "showForm",
        value: function showForm(form) {
          this.activatedForm = form;
          console.log(form);
        }
      }]);

      return CreateFormComponent;
    }();

    CreateFormComponent.ctorParameters = function () {
      return [{
        type: src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]
      }, {
        type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"]
      }];
    };

    CreateFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/create-form/create-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create-form.component.css */
      "./src/app/components/home/create-form/create-form.component.css")).default]
    })], CreateFormComponent);
    /***/
  },

  /***/
  "./src/app/components/home/generic-board/generic-board.component.css":
  /*!***************************************************************************!*\
    !*** ./src/app/components/home/generic-board/generic-board.component.css ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeGenericBoardGenericBoardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container-fluid{\n    margin-top: 20px;\n}\n\nnav{\n    background-color: white;\n    border: solid 2px #1565c0;\n    border-radius: 5px;\n}\n\na{\n    color: white !important;\n    font-size: large;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2dlbmVyaWMtYm9hcmQvZ2VuZXJpYy1ib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2dlbmVyaWMtYm9hcmQvZ2VuZXJpYy1ib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5uYXZ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBzb2xpZCAycHggIzE1NjVjMDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmF7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/home/generic-board/generic-board.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/components/home/generic-board/generic-board.component.ts ***!
    \**************************************************************************/

  /*! exports provided: GenericBoardComponent */

  /***/
  function srcAppComponentsHomeGenericBoardGenericBoardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GenericBoardComponent", function () {
      return GenericBoardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/todo.service */
    "./src/app/services/todo.service.ts");
    /* harmony import */


    var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/event.service */
    "./src/app/services/event.service.ts");
    /* harmony import */


    var src_app_models_response_message_message_code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/models/response-message/message-code */
    "./src/app/models/response-message/message-code.ts");
    /* harmony import */


    var src_app_services_refresh_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/refresh.service */
    "./src/app/services/refresh.service.ts");

    var GenericBoardComponent =
    /*#__PURE__*/
    function () {
      function GenericBoardComponent(todoService, eventService, refreshService) {
        _classCallCheck(this, GenericBoardComponent);

        this.todoService = todoService;
        this.eventService = eventService;
        this.refreshService = refreshService;
        this.activatedBoard = 0;
      }

      _createClass(GenericBoardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.todoService.todoResponseMessage.subscribe(function (m) {
            _this12.todoResponseMessage = m;

            if (m == src_app_models_response_message_message_code__WEBPACK_IMPORTED_MODULE_4__["MessageCode"].TODO_CREATED) {
              _this12.showBoard(0);

              _this12.refreshService.refreshTodoBoard();
            }
          });
          this.eventService.eventResponseMessage.subscribe(function (m) {
            _this12.eventResponseMessage = m;

            if (m == src_app_models_response_message_message_code__WEBPACK_IMPORTED_MODULE_4__["MessageCode"].EVENT_CREATED) {
              _this12.showBoard(1);

              _this12.refreshService.refreshEventBoard();
            }
          });
        }
      }, {
        key: "showBoard",
        value: function showBoard(board) {
          this.activatedBoard = board;
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.todoService.setTodoCreationResponse(-1);
          this.eventService.setEventCreationResponse(-1);
        }
      }]);

      return GenericBoardComponent;
    }();

    GenericBoardComponent.ctorParameters = function () {
      return [{
        type: src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]
      }, {
        type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"]
      }, {
        type: src_app_services_refresh_service__WEBPACK_IMPORTED_MODULE_5__["RefreshService"]
      }];
    };

    GenericBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-generic-board',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./generic-board.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/generic-board/generic-board.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./generic-board.component.css */
      "./src/app/components/home/generic-board/generic-board.component.css")).default]
    })], GenericBoardComponent);
    /***/
  },

  /***/
  "./src/app/components/home/home.component.css":
  /*!****************************************************!*\
    !*** ./src/app/components/home/home.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n@media screen and (min-width: 992px) {\n    .container-fluid{\n        width: 74vw;\n    }\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAuY29udGFpbmVyLWZsdWlke1xuICAgICAgICB3aWR0aDogNzR2dztcbiAgICB9XG4gIH1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var src_app_models_user_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/models/user/user.model */
    "./src/app/models/user/user.model.ts");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(userService) {
        _classCallCheck(this, HomeComponent);

        this.userService = userService;
        this.user = new src_app_models_user_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]('', '');
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userService.getMyPersonalCard().subscribe();
        }
      }, {
        key: "isRegisterCompleted",
        value: function isRegisterCompleted() {
          return sessionStorage.getItem("firstLogin");
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/components/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/components/home/logout/logout.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/components/home/logout/logout.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeLogoutLogoutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/home/logout/logout.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/components/home/logout/logout.component.ts ***!
    \************************************************************/

  /*! exports provided: LogoutComponent */

  /***/
  function srcAppComponentsHomeLogoutLogoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoutComponent", function () {
      return LogoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LogoutComponent =
    /*#__PURE__*/
    function () {
      function LogoutComponent(router) {
        _classCallCheck(this, LogoutComponent);

        this.router = router;
      }

      _createClass(LogoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.handleLogout();
        }
      }, {
        key: "handleLogout",
        value: function handleLogout() {
          sessionStorage.clear();
          this.router.navigate(['login']);
        }
      }]);

      return LogoutComponent;
    }();

    LogoutComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-logout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./logout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/logout/logout.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./logout.component.css */
      "./src/app/components/home/logout/logout.component.css")).default]
    })], LogoutComponent);
    /***/
  },

  /***/
  "./src/app/components/home/story-viewer/story-viewer.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/components/home/story-viewer/story-viewer.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeStoryViewerStoryViewerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-header{\n    background-color: #0277bd;\n    color: white;\n    font-weight: 300;\n}\n\n.card{\n    margin-top: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL3N0b3J5LXZpZXdlci9zdG9yeS12aWV3ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL3N0b3J5LXZpZXdlci9zdG9yeS12aWV3ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWhlYWRlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI3N2JkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uY2FyZHtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/home/story-viewer/story-viewer.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/components/home/story-viewer/story-viewer.component.ts ***!
    \************************************************************************/

  /*! exports provided: StoryViewerComponent */

  /***/
  function srcAppComponentsHomeStoryViewerStoryViewerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoryViewerComponent", function () {
      return StoryViewerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var StoryViewerComponent =
    /*#__PURE__*/
    function () {
      function StoryViewerComponent() {
        _classCallCheck(this, StoryViewerComponent);
      }

      _createClass(StoryViewerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StoryViewerComponent;
    }();

    StoryViewerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-story-viewer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./story-viewer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/story-viewer/story-viewer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./story-viewer.component.css */
      "./src/app/components/home/story-viewer/story-viewer.component.css")).default]
    })], StoryViewerComponent);
    /***/
  },

  /***/
  "./src/app/components/home/todo-board/todo-board.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/components/home/todo-board/todo-board.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeTodoBoardTodoBoardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".col-sm-12{\n    padding: 0 !important;\n}\n\n.modal {\n    display: block; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n  }\n\n/* Modal Content */\n\n.modal-content{\n        background-color: #fefefe;\n        margin: auto;\n        padding: 20px;\n        border: 1px solid #888;\n        width: 50%;  \n        max-height: 80vh;\n      }\n\n#modal-title{\n        align-content: left;\n        border-bottom: 1px solid #888;\n        padding:10px;\n        margin-bottom: 10px;\n        font-weight: bold;\n        font-size: x-large;\n      }\n\n.modal-list{\n        overflow-y: scroll;\n      }\n\n.row{\n        margin:20px;\n      }\n\n.modal-user{\n        font-size: large;\n      }\n\n/* The Close Button */\n\n.close {\n    color: #aaaaaa;\n    text-align: right;\n    font-size: 28px;\n    font-weight: bold;\n  }\n\n.close:hover,\n  .close:focus {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL3RvZG8tYm9hcmQvdG9kby1ib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksY0FBYyxFQUFFLHNCQUFzQjtJQUN0QyxlQUFlLEVBQUUsa0JBQWtCO0lBQ25DLFVBQVUsRUFBRSxlQUFlO0lBQzNCLGtCQUFrQixFQUFFLHdCQUF3QjtJQUM1QyxPQUFPO0lBQ1AsTUFBTTtJQUNOLFdBQVcsRUFBRSxlQUFlO0lBQzVCLFlBQVksRUFBRSxnQkFBZ0I7SUFDOUIsY0FBYyxFQUFFLDRCQUE0QjtJQUM1Qyw0QkFBNEIsRUFBRSxtQkFBbUI7SUFDakQsaUNBQWlDLEVBQUUscUJBQXFCO0VBQzFEOztBQUVFLGtCQUFrQjs7QUFDbEI7UUFDSSx5QkFBeUI7UUFDekIsWUFBWTtRQUNaLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsVUFBVTtRQUNWLGdCQUFnQjtNQUNsQjs7QUFFQTtRQUNFLG1CQUFtQjtRQUNuQiw2QkFBNkI7UUFDN0IsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixpQkFBaUI7UUFDakIsa0JBQWtCO01BQ3BCOztBQUVBO1FBQ0Usa0JBQWtCO01BQ3BCOztBQUdBO1FBQ0UsV0FBVztNQUNiOztBQUVBO1FBQ0UsZ0JBQWdCO01BQ2xCOztBQUdKLHFCQUFxQjs7QUFDckI7SUFDRSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7O0FBRUE7O0lBRUUsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixlQUFlO0VBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL3RvZG8tYm9hcmQvdG9kby1ib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbC1zbS0xMntcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5tb2RhbCB7XG4gICAgZGlzcGxheTogYmxvY2s7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDsgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXG4gIH1cblxuICAgIC8qIE1vZGFsIENvbnRlbnQgKi9cbiAgICAubW9kYWwtY29udGVudHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xuICAgICAgICB3aWR0aDogNTAlOyAgXG4gICAgICAgIG1heC1oZWlnaHQ6IDgwdmg7XG4gICAgICB9XG4gICAgICBcbiAgICAgICNtb2RhbC10aXRsZXtcbiAgICAgICAgYWxpZ24tY29udGVudDogbGVmdDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4ODg7XG4gICAgICAgIHBhZGRpbmc6MTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgICAgIH1cbiAgICBcbiAgICAgIC5tb2RhbC1saXN0e1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICB9XG4gICAgIFxuICAgIFxuICAgICAgLnJvd3tcbiAgICAgICAgbWFyZ2luOjIwcHg7XG4gICAgICB9XG4gICAgXG4gICAgICAubW9kYWwtdXNlcntcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICAgIH1cblxuICAgICAgXG4gIC8qIFRoZSBDbG9zZSBCdXR0b24gKi9cbiAgLmNsb3NlIHtcbiAgICBjb2xvcjogI2FhYWFhYTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgXG4gIC5jbG9zZTpob3ZlcixcbiAgLmNsb3NlOmZvY3VzIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/components/home/todo-board/todo-board.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/home/todo-board/todo-board.component.ts ***!
    \********************************************************************/

  /*! exports provided: TodoBoardComponent */

  /***/
  function srcAppComponentsHomeTodoBoardTodoBoardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoBoardComponent", function () {
      return TodoBoardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/todo.service */
    "./src/app/services/todo.service.ts");
    /* harmony import */


    var src_app_services_refresh_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/refresh.service */
    "./src/app/services/refresh.service.ts");

    var TodoBoardComponent =
    /*#__PURE__*/
    function () {
      function TodoBoardComponent(todoService, refreshService) {
        _classCallCheck(this, TodoBoardComponent);

        this.todoService = todoService;
        this.refreshService = refreshService;
      }

      _createClass(TodoBoardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.showAllTodo();
          this.refreshService.todoRefreshMessage.subscribe(function (m) {
            _this13.showAllTodo();
          });
        }
      }, {
        key: "showAllTodo",
        value: function showAllTodo() {
          var _this14 = this;

          this.todoService.getAllTodo().subscribe(function (response) {
            _this14.todoList = response;
            console.log(response);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "openModal",
        value: function openModal($event) {
          if ($event) {
            this.currentTodo = $event;
          } else {
            this.showAllTodo();
          }
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.currentTodo = null;
        }
      }]);

      return TodoBoardComponent;
    }();

    TodoBoardComponent.ctorParameters = function () {
      return [{
        type: src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]
      }, {
        type: src_app_services_refresh_service__WEBPACK_IMPORTED_MODULE_3__["RefreshService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TodoBoardComponent.prototype, "personal", void 0);
    TodoBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-todo-board',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./todo-board.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/todo-board/todo-board.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./todo-board.component.css */
      "./src/app/components/home/todo-board/todo-board.component.css")).default]
    })], TodoBoardComponent);
    /***/
  },

  /***/
  "./src/app/components/home/user-info/user-info.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/components/home/user-info/user-info.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeUserInfoUserInfoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n.list-group-flush{\n  margin-top: 20px;\n}\n\n.fa{\n    margin-right: 12px;\n}\n\n.img-thumbnail{\n    margin-top: 10px;\n}\n\n#test{\n  background-color: #fafafa;\n  border-radius: 0;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    top: 40px;\n    width: 13vw;\n    max-height: 100%;\n    overflow: auto;\n    z-index: 1;\n    padding: 0px;\n    z-index: 0;\n}\n\n#test::-webkit-scrollbar {\n    display: none;\n  }\n\n/* Hide scrollbar for IE and Edge */\n\n#test {\n    -ms-overflow-style: none;\n  }\n\n@media screen and (max-width: 992px) {\n    .container {\n      display: none;\n    }\n  }\n\n.list-group-item{\n    background-color: #fafafa;\n    margin-left: 15px;\n    margin-right: 15px;\n    padding: 15px;\n    border: none !important;\n  }\n\n.list-group-item:hover{\n    color: white !important;\n    background-color: #009df8 !important;\n    cursor: pointer;\n  }\n\n#username{\n    text-align: center;\n    margin-top: 50px;\n\n  }\n\nh4{\n  margin-top: 30px;\n}\n\n.active-item{\n  color: white !important;\n  background-color: #0277bd !important; \n}\n\n.default-fa{\n  color: gray;\n}\n\n.active-fa{\n  color: white\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL3VzZXItaW5mby91c2VyLWluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBSUE7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0lBQ2QsZUFBZTtJQUNmLFNBQVM7SUFDVCxPQUFPO0lBQ1AsU0FBUztJQUNULFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFVBQVU7SUFDVixZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtFQUNmOztBQUVBLG1DQUFtQzs7QUFDbkM7SUFDRSx3QkFBd0I7RUFDMUI7O0FBRUE7SUFDRTtNQUNFLGFBQWE7SUFDZjtFQUNGOztBQUlBO0lBQ0UseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtFQUN6Qjs7QUFFQTtJQUNFLHVCQUF1QjtJQUN2QixvQ0FBb0M7SUFDcEMsZUFBZTtFQUNqQjs7QUFJQTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7O0VBRWxCOztBQUVGO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUtBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvdXNlci1pbmZvL3VzZXItaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubGlzdC1ncm91cC1mbHVzaHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmZhe1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcbn1cblxuLmltZy10aHVtYm5haWx7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuXG5cbiN0ZXN0e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDQwcHg7XG4gICAgd2lkdGg6IDEzdnc7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICB6LWluZGV4OiAxO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICB6LWluZGV4OiAwO1xufVxuXG4jdGVzdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG4gIC8qIEhpZGUgc2Nyb2xsYmFyIGZvciBJRSBhbmQgRWRnZSAqL1xuICAjdGVzdCB7XG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cblxuXG4gIC5saXN0LWdyb3VwLWl0ZW17XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5saXN0LWdyb3VwLWl0ZW06aG92ZXJ7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWRmOCAhaW1wb3J0YW50O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG5cblxuICAjdXNlcm5hbWV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG5cbiAgfVxuXG5oNHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuXG5cblxuLmFjdGl2ZS1pdGVte1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyNzdiZCAhaW1wb3J0YW50OyBcbn1cblxuLmRlZmF1bHQtZmF7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4uYWN0aXZlLWZhe1xuICBjb2xvcjogd2hpdGVcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/home/user-info/user-info.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/home/user-info/user-info.component.ts ***!
    \******************************************************************/

  /*! exports provided: UserInfoComponent */

  /***/
  function srcAppComponentsHomeUserInfoUserInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function () {
      return UserInfoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UserInfoComponent =
    /*#__PURE__*/
    function () {
      function UserInfoComponent() {
        _classCallCheck(this, UserInfoComponent);

        this.iconNumber = -1;
      }

      _createClass(UserInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selectActive",
        value: function selectActive(number) {
          this.iconNumber = number;
        }
      }, {
        key: "getMyProfileLink",
        value: function getMyProfileLink() {
          return "/show-profile/" + sessionStorage.getItem("username");
        }
      }]);

      return UserInfoComponent;
    }();

    UserInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/user-info/user-info.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-info.component.css */
      "./src/app/components/home/user-info/user-info.component.css")).default]
    })], UserInfoComponent);
    /***/
  },

  /***/
  "./src/app/components/list-todo/list-todo.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/components/list-todo/list-todo.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsListTodoListTodoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdC10b2RvL2xpc3QtdG9kby5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/list-todo/list-todo.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/list-todo/list-todo.component.ts ***!
    \*************************************************************/

  /*! exports provided: ListTodoComponent */

  /***/
  function srcAppComponentsListTodoListTodoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListTodoComponent", function () {
      return ListTodoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/todo.service */
    "./src/app/services/todo.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ListTodoComponent =
    /*#__PURE__*/
    function () {
      function ListTodoComponent(todoService, router) {
        _classCallCheck(this, ListTodoComponent);

        this.todoService = todoService;
        this.router = router;
      }

      _createClass(ListTodoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.showMyTodo();
        }
      }, {
        key: "showMyTodo",
        value: function showMyTodo() {
          var _this15 = this;

          this.todoService.getMyTodoList("published").subscribe(function (response) {
            _this15.todo = response;
            console.log(response);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "deleteTodo",
        value: function deleteTodo(todoId) {
          var _this16 = this;

          this.todoService.deleteTodo(todoId).subscribe(function (response) {
            console.log(response);

            _this16.showMyTodo();
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "updateTodo",
        value: function updateTodo(todoId) {
          this.router.navigate(['update-todo/', todoId]);
        }
      }]);

      return ListTodoComponent;
    }();

    ListTodoComponent.ctorParameters = function () {
      return [{
        type: src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ListTodoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list-todo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list-todo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/list-todo/list-todo.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list-todo.component.css */
      "./src/app/components/list-todo/list-todo.component.css")).default]
    })], ListTodoComponent);
    /***/
  },

  /***/
  "./src/app/components/login/login.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/login/login.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h1{\n    text-align: center;\n    padding: 12px;\n}\n\n#doneit-image{\n    padding-right: 15px;\n}\n\n@media screen and (max-width: 1200px) { \n    #doneit-image{\n        display: none;\n    }\n }\n\n.background{\n    position: fixed;\n    top: 60%;\n    left: 0;\n    background-color: #0277bd;\n    width: 100%;\n    z-index: -1;\n    height: 100%;\n\n}\n\n#test{\n    margin-top: 48px;\n}\n\n/* // Medium devices (tablets, 768px and up)\n@media (min-width: 768px) { }\n\n// Large devices (desktops, 992px and up)\n@media (min-width: 992px) { ... }\n\n// Extra large devices (large desktops, 1200px and up)\n@media (min-width: 1200px) { ... } */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7Q0FDSDs7QUFHQTtJQUNHLGVBQWU7SUFDZixRQUFRO0lBQ1IsT0FBTztJQUNQLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUdBOzs7Ozs7O29DQU9vQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMnB4O1xufVxuXG4jZG9uZWl0LWltYWdle1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkgeyBcbiAgICAjZG9uZWl0LWltYWdle1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiB9XG5cblxuIC5iYWNrZ3JvdW5ke1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDYwJTtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjc3YmQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogLTE7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG59XG5cbiN0ZXN0e1xuICAgIG1hcmdpbi10b3A6IDQ4cHg7XG59XG5cblxuLyogLy8gTWVkaXVtIGRldmljZXMgKHRhYmxldHMsIDc2OHB4IGFuZCB1cClcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgeyB9XG5cbi8vIExhcmdlIGRldmljZXMgKGRlc2t0b3BzLCA5OTJweCBhbmQgdXApXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHsgLi4uIH1cblxuLy8gRXh0cmEgbGFyZ2UgZGV2aWNlcyAobGFyZ2UgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7IC4uLiB9ICovIl19 */";
    /***/
  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_models_user_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/user/user.model */
    "./src/app/models/user/user.model.ts");
    /* harmony import */


    var src_app_services_login_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/login-authentication.service */
    "./src/app/services/login-authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_models_response_message_message_code__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/models/response-message/message-code */
    "./src/app/models/response-message/message-code.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(loginAuth, router) {
        _classCallCheck(this, LoginComponent);

        this.loginAuth = loginAuth;
        this.router = router;
        this.user = new src_app_models_user_user_model__WEBPACK_IMPORTED_MODULE_2__["User"]('seppu_97', 'Password1234!');
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.loginAuth.isUserLoggedIn()) {
            this.router.navigate(['home']);
          }
        }
      }, {
        key: "handleLogin",
        value: function handleLogin() {
          var _this17 = this;

          console.log(this.user);
          this.loginAuth.executeLoginAuthentication(this.user).subscribe(function (data) {
            _this17.handleResponse(data);
          }, function (error) {
            _this17.errorLogin = 'Impossibile effettuare il login. Ci scusiamo per il disagio.';
          });
        }
      }, {
        key: "createUserSession",
        value: function createUserSession(firstLogin) {
          sessionStorage.setItem("username", this.user.getUsername());
          sessionStorage.setItem("token", "Bearer ".concat(this.responseMessage.token));

          if (firstLogin) {
            sessionStorage.setItem("firstLogin", "true");
          }
        }
      }, {
        key: "handleResponse",
        value: function handleResponse(data) {
          this.responseMessage = data;
          this.errorCode = this.responseMessage.messageCode;

          switch (this.errorCode) {
            case src_app_models_response_message_message_code__WEBPACK_IMPORTED_MODULE_5__["MessageCode"].INVALID_CREDENTIAL:
              console.log("nome utente o password errati");
              this.errorLogin = this.responseMessage.message;
              break;

            case src_app_models_response_message_message_code__WEBPACK_IMPORTED_MODULE_5__["MessageCode"].SUCCESSFUL_LOGIN:
              console.log("Login effettuato con successo");
              console.log(this.responseMessage);
              this.createUserSession(false);
              this.router.navigate(['home']);
              break;

            case src_app_models_response_message_message_code__WEBPACK_IMPORTED_MODULE_5__["MessageCode"].FIRST_LOGIN:
              console.log("Primo Login");
              console.log(this.responseMessage);
              this.createUserSession(true);
              this.router.navigate(['complete-register']);
              break;
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: src_app_services_login_authentication_service__WEBPACK_IMPORTED_MODULE_3__["LoginAuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/components/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/components/my-event/my-event.component.css":
  /*!************************************************************!*\
    !*** ./src/app/components/my-event/my-event.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMyEventMyEventComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " /* The Modal (background) */\n .modal {\n    display: block; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n  }\n @media screen and (min-width: 992px) {\n    .container-fluid{\n        margin-left: 13vw; \n        width: 74vw !important;\n    }\n    \n  }\n /* Modal Content */\n .modal-content{\n    background-color: #fefefe;\n    margin: auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 50%;  \n    max-height: 80vh;\n  }\n #modal-title{\n    align-content: left;\n    border-bottom: 1px solid #888;\n    padding:10px;\n    margin-bottom: 10px;\n    font-weight: bold;\n    font-size: x-large;\n  }\n .modal-list{\n    overflow-y: scroll;\n  }\n .row{\n    margin:20px;\n  }\n .modal-user{\n    font-size: large;\n  }\n /* The Close Button */\n .close {\n    color: #aaaaaa;\n    text-align: right;\n    font-size: 28px;\n    font-weight: bold;\n  }\n .close:hover,\n  .close:focus {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n  }\n @media screen and (min-width: 992px){\n    .container-fluid{\n      margin-left: 13vw;\n      margin-right: 0px !important;\n      padding: 0px !important;\n      width: 87vw;\n    }\n  }\n @media screen and (max-width: 992px){\n    .container-fluid{\n      margin: 0px;\n    }\n  }\n .container-fluid{\n    margin-top: 25px;\n  }\n  \n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9teS1ldmVudC9teS1ldmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFDLDJCQUEyQjtDQUMzQjtJQUNHLGNBQWMsRUFBRSxzQkFBc0I7SUFDdEMsZUFBZSxFQUFFLGtCQUFrQjtJQUNuQyxVQUFVLEVBQUUsZUFBZTtJQUMzQixrQkFBa0IsRUFBRSx3QkFBd0I7SUFDNUMsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXLEVBQUUsZUFBZTtJQUM1QixZQUFZLEVBQUUsZ0JBQWdCO0lBQzlCLGNBQWMsRUFBRSw0QkFBNEI7SUFDNUMsNEJBQTRCLEVBQUUsbUJBQW1CO0lBQ2pELGlDQUFpQyxFQUFFLHFCQUFxQjtFQUMxRDtDQUVBO0lBQ0U7UUFDSSxpQkFBaUI7UUFDakIsc0JBQXNCO0lBQzFCOztFQUVGO0NBRUEsa0JBQWtCO0NBQ2xCO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixnQkFBZ0I7RUFDbEI7Q0FFQTtJQUNFLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCO0NBRUE7SUFDRSxrQkFBa0I7RUFDcEI7Q0FHQTtJQUNFLFdBQVc7RUFDYjtDQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0NBR0EscUJBQXFCO0NBQ3JCO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0VBQ25CO0NBRUE7O0lBRUUsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixlQUFlO0VBQ2pCO0NBR0E7SUFDRTtNQUNFLGlCQUFpQjtNQUNqQiw0QkFBNEI7TUFDNUIsdUJBQXVCO01BQ3ZCLFdBQVc7SUFDYjtFQUNGO0NBRUE7SUFDRTtNQUNFLFdBQVc7SUFDYjtFQUNGO0NBRUE7SUFDRSxnQkFBZ0I7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL215LWV2ZW50L215LWV2ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xuIC5tb2RhbCB7XG4gICAgZGlzcGxheTogYmxvY2s7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDsgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICAgIC5jb250YWluZXItZmx1aWR7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxM3Z3OyBcbiAgICAgICAgd2lkdGg6IDc0dncgIWltcG9ydGFudDtcbiAgICB9XG4gICAgXG4gIH1cbiAgXG4gIC8qIE1vZGFsIENvbnRlbnQgKi9cbiAgLm1vZGFsLWNvbnRlbnR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xuICAgIHdpZHRoOiA1MCU7ICBcbiAgICBtYXgtaGVpZ2h0OiA4MHZoO1xuICB9XG4gIFxuICAjbW9kYWwtdGl0bGV7XG4gICAgYWxpZ24tY29udGVudDogbGVmdDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzg4ODtcbiAgICBwYWRkaW5nOjEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIH1cblxuICAubW9kYWwtbGlzdHtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIH1cbiBcblxuICAucm93e1xuICAgIG1hcmdpbjoyMHB4O1xuICB9XG5cbiAgLm1vZGFsLXVzZXJ7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgfVxuXG5cbiAgLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xuICAuY2xvc2Uge1xuICAgIGNvbG9yOiAjYWFhYWFhO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBcbiAgLmNsb3NlOmhvdmVyLFxuICAuY2xvc2U6Zm9jdXMge1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiBcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCl7XG4gICAgLmNvbnRhaW5lci1mbHVpZHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxM3Z3O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgICAgd2lkdGg6IDg3dnc7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpe1xuICAgIC5jb250YWluZXItZmx1aWR7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICB9XG4gIH1cblxuICAuY29udGFpbmVyLWZsdWlke1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gIH1cbiAgXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/my-event/my-event.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/my-event/my-event.component.ts ***!
    \***********************************************************/

  /*! exports provided: MyEventComponent */

  /***/
  function srcAppComponentsMyEventMyEventComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyEventComponent", function () {
      return MyEventComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/event.service */
    "./src/app/services/event.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var MyEventComponent =
    /*#__PURE__*/
    function () {
      function MyEventComponent(eventService, sanitizer) {
        _classCallCheck(this, MyEventComponent);

        this.eventService = eventService;
        this.sanitizer = sanitizer;
        this.activatedBoard = 'active';
        this.username = '';
        this.isMapOpen = false;
        this.isPartecipantsModalOpen = false;
        this.partecipants = [];
      }

      _createClass(MyEventComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;

          this.username = sessionStorage.getItem("username");
          this.eventService.getMyEventList().subscribe(function (result) {
            _this18.myEventsList = result;
          }, function (error) {});
        }
      }, {
        key: "getJoinedEvents",
        value: function getJoinedEvents() {
          var _this19 = this;

          this.activatedBoard = 'joined';
          this.eventService.getMyJoinedEvents().subscribe(function (result) {
            _this19.myJoinedEventList = result;
            console.log(_this19.myJoinedEventList);
          });
        }
      }, {
        key: "openMap",
        value: function openMap($event) {
          this.placeId = $event;
          this.isMapOpen = true;
        }
      }, {
        key: "closeMap",
        value: function closeMap() {
          this.isMapOpen = false;
          this.placeId = null;
        }
      }, {
        key: "sanitizeUrl",
        value: function sanitizeUrl() {
          return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.google.com/maps/embed/v1/place?key=AIzaSyB1A4WVaFhrtCkvVdpx_cobXShk_RGtW-8&q=place_id:" + this.placeId);
        }
      }, {
        key: "getMyEventList",
        value: function getMyEventList(status) {
          this.activatedBoard = status;
          this.eventService.getMyEventList();
        }
      }, {
        key: "openPartecipantModal",
        value: function openPartecipantModal(event) {
          this.isPartecipantsModalOpen = true;
          this.partecipants = event;
        }
      }, {
        key: "closePartecipantsModal",
        value: function closePartecipantsModal() {
          this.isPartecipantsModalOpen = false;
          this.partecipants = [];
        }
      }]);

      return MyEventComponent;
    }();

    MyEventComponent.ctorParameters = function () {
      return [{
        type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
      }];
    };

    MyEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-event',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./my-event.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/my-event/my-event.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./my-event.component.css */
      "./src/app/components/my-event/my-event.component.css")).default]
    })], MyEventComponent);
    /***/
  },

  /***/
  "./src/app/components/my-todo-board/my-todo-board.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/components/my-todo-board/my-todo-board.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMyTodoBoardMyTodoBoardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " /* The Modal (background) */\n .modal {\n    display: block; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n  }\n @media screen and (min-width: 992px) {\n    .container-fluid{\n        margin-left: 13vw; \n        width: 74vw !important;\n    }\n    \n  }\n /* Modal Content */\n .modal-content{\n    background-color: #fefefe;\n    margin: auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 50%;  \n    max-height: 80vh;\n  }\n #modal-title{\n    align-content: left;\n    border-bottom: 1px solid #888;\n    padding:10px;\n    margin-bottom: 10px;\n    font-weight: bold;\n    font-size: x-large;\n  }\n .modal-list{\n    overflow-y: scroll;\n  }\n .row{\n    margin:20px;\n  }\n .modal-user{\n    font-size: large;\n  }\n /* The Close Button */\n .close {\n    color: #aaaaaa;\n    text-align: right;\n    font-size: 28px;\n    font-weight: bold;\n  }\n .close:hover,\n  .close:focus {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n  }\n @media screen and (min-width: 992px){\n    .container-fluid{\n      margin-left: 13vw;\n      margin-right: 0px !important;\n      padding: 0px !important;\n      width: 87vw;\n    }\n  }\n @media screen and (max-width: 992px){\n    .container-fluid{\n      margin: 0px;\n    }\n  }\n .container-fluid{\n    margin-top: 25px;\n  }\n  \n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9teS10b2RvLWJvYXJkL215LXRvZG8tYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQywyQkFBMkI7Q0FDM0I7SUFDRyxjQUFjLEVBQUUsc0JBQXNCO0lBQ3RDLGVBQWUsRUFBRSxrQkFBa0I7SUFDbkMsVUFBVSxFQUFFLGVBQWU7SUFDM0Isa0JBQWtCLEVBQUUsd0JBQXdCO0lBQzVDLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVyxFQUFFLGVBQWU7SUFDNUIsWUFBWSxFQUFFLGdCQUFnQjtJQUM5QixjQUFjLEVBQUUsNEJBQTRCO0lBQzVDLDRCQUE0QixFQUFFLG1CQUFtQjtJQUNqRCxpQ0FBaUMsRUFBRSxxQkFBcUI7RUFDMUQ7Q0FFQTtJQUNFO1FBQ0ksaUJBQWlCO1FBQ2pCLHNCQUFzQjtJQUMxQjs7RUFFRjtDQUVBLGtCQUFrQjtDQUNsQjtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsZ0JBQWdCO0VBQ2xCO0NBRUE7SUFDRSxtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjtDQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0NBR0E7SUFDRSxXQUFXO0VBQ2I7Q0FFQTtJQUNFLGdCQUFnQjtFQUNsQjtDQUdBLHFCQUFxQjtDQUNyQjtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjtDQUVBOztJQUVFLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsZUFBZTtFQUNqQjtDQUdBO0lBQ0U7TUFDRSxpQkFBaUI7TUFDakIsNEJBQTRCO01BQzVCLHVCQUF1QjtNQUN2QixXQUFXO0lBQ2I7RUFDRjtDQUVBO0lBQ0U7TUFDRSxXQUFXO0lBQ2I7RUFDRjtDQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9teS10b2RvLWJvYXJkL215LXRvZG8tYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAvKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXG4gLm1vZGFsIHtcbiAgICBkaXNwbGF5OiBibG9jazsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXG4gICAgcGFkZGluZy10b3A6IDEwMHB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgLmNvbnRhaW5lci1mbHVpZHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEzdnc7IFxuICAgICAgICB3aWR0aDogNzR2dyAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBcbiAgfVxuICBcbiAgLyogTW9kYWwgQ29udGVudCAqL1xuICAubW9kYWwtY29udGVudHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gICAgd2lkdGg6IDUwJTsgIFxuICAgIG1heC1oZWlnaHQ6IDgwdmg7XG4gIH1cbiAgXG4gICNtb2RhbC10aXRsZXtcbiAgICBhbGlnbi1jb250ZW50OiBsZWZ0O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjODg4O1xuICAgIHBhZGRpbmc6MTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgfVxuXG4gIC5tb2RhbC1saXN0e1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgfVxuIFxuXG4gIC5yb3d7XG4gICAgbWFyZ2luOjIwcHg7XG4gIH1cblxuICAubW9kYWwtdXNlcntcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICB9XG5cblxuICAvKiBUaGUgQ2xvc2UgQnV0dG9uICovXG4gIC5jbG9zZSB7XG4gICAgY29sb3I6ICNhYWFhYWE7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIFxuICAuY2xvc2U6aG92ZXIsXG4gIC5jbG9zZTpmb2N1cyB7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuIFxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KXtcbiAgICAuY29udGFpbmVyLWZsdWlke1xuICAgICAgbWFyZ2luLWxlZnQ6IDEzdnc7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICB3aWR0aDogODd2dztcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCl7XG4gICAgLmNvbnRhaW5lci1mbHVpZHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5jb250YWluZXItZmx1aWR7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgfVxuICBcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/my-todo-board/my-todo-board.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/my-todo-board/my-todo-board.component.ts ***!
    \*********************************************************************/

  /*! exports provided: MyTodoBoardComponent */

  /***/
  function srcAppComponentsMyTodoBoardMyTodoBoardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyTodoBoardComponent", function () {
      return MyTodoBoardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/todo.service */
    "./src/app/services/todo.service.ts");

    var MyTodoBoardComponent =
    /*#__PURE__*/
    function () {
      function MyTodoBoardComponent(todoService) {
        _classCallCheck(this, MyTodoBoardComponent);

        this.todoService = todoService;
        this.username = '';
      }

      _createClass(MyTodoBoardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getMyTodoList('published');
          this.activatedBoard = "published";
          this.username = sessionStorage.getItem("username");
        }
      }, {
        key: "getMyTodoList",
        value: function getMyTodoList(state) {
          var _this20 = this;

          this.todoService.getMyTodoList(state).subscribe(function (response) {
            console.log(response);
            _this20.todoList = response;
            _this20.activatedBoard = state;
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getJoinedTodoList",
        value: function getJoinedTodoList() {
          var _this21 = this;

          console.log("chiamata");
          this.activatedBoard = 'pending';
          this.todoService.getJoinedTodo().subscribe(function (result) {
            _this21.todoList = result;
            console.log(result);
          }, function (error) {});
        }
      }, {
        key: "receiveMessage",
        value: function receiveMessage($event) {
          if ($event) {
            this.currentTodo = $event;
          } else {
            this.getMyTodoList('accepted');
          }
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.currentTodo = null;
          this.currentTodoPending = null;
        }
      }, {
        key: "acceptProposal",
        value: function acceptProposal(proposal) {
          var _this22 = this;

          console.log("proposal id: " + proposal.id);
          this.todoService.acceptProposal(this.currentTodo, proposal.id).subscribe(function (response) {
            console.log(response);

            _this22.closeModal();

            _this22.getMyTodoList('accepted');
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "refuseProposal",
        value: function refuseProposal(proposal) {
          var _this23 = this;

          console.log("rifiuto la proposta:" + proposal.id);
          this.todoService.refuseProposal(proposal.id).subscribe(function (response) {
            console.log(response);

            _this23.updateProposal(proposal, "refused");
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "undoRefuse",
        value: function undoRefuse(proposal) {
          var _this24 = this;

          this.todoService.undoRefuseProposal(proposal.id).subscribe(function (response) {
            console.log(response);

            _this24.updateProposal(proposal, "in progress");
          }, function (error) {
            console.log(error);
          });
          console.log("annullo la proposta:" + proposal.id);
        }
      }, {
        key: "updateProposal",
        value: function updateProposal(proposal, newState) {
          var i = this.currentTodo.proposals.indexOf(proposal);
          this.currentTodo.proposals[i].state = newState;
        }
      }, {
        key: "openModal",
        value: function openModal($event) {
          if ($event) {
            this.currentTodoPending = $event;
          } else {
            this.showAllTodo();
          }
        }
      }, {
        key: "showAllTodo",
        value: function showAllTodo() {
          var _this25 = this;

          this.todoService.getAllTodo().subscribe(function (response) {
            _this25.todoList = response;
            console.log(response);
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return MyTodoBoardComponent;
    }();

    MyTodoBoardComponent.ctorParameters = function () {
      return [{
        type: src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]
      }];
    };

    MyTodoBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-todo-board',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./my-todo-board.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/my-todo-board/my-todo-board.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./my-todo-board.component.css */
      "./src/app/components/my-todo-board/my-todo-board.component.css")).default]
    })], MyTodoBoardComponent);
    /***/
  },

  /***/
  "./src/app/components/my-todo-card/my-todo-card.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/components/my-todo-card/my-todo-card.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMyTodoCardMyTodoCardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#todo-title{\n    margin: 30px;\n}\n\n#follow-todo{\n    margin: 12px;\n}\n\n#todo-user{\n    color: black;\n    font-weight: bold;\n}\n\n#time{\n    font-size: 1rem;\n    color: #7c7c7c;\n}\n\n#info-todo{\n    font-size: 1rem;\n    color: #7c7c7c;\n}\n\n.container{\n    padding: 0px !important;\n    margin-bottom: 10px;\n}\n\n@media screen and (min-width: 1200px) { \n    #icon-div1{\n        text-align: right !important;\n        padding: 2px !important;\n    \n    }\n    #icon-div2{\n        text-align: left !important;\n        padding: 2px !important;\n    }\n }\n\n#description-text{\n     margin: 12px !important;\n }\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9teS10b2RvLWNhcmQvbXktdG9kby1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUdBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFJQTtJQUNJO1FBQ0ksNEJBQTRCO1FBQzVCLHVCQUF1Qjs7SUFFM0I7SUFDQTtRQUNJLDJCQUEyQjtRQUMzQix1QkFBdUI7SUFDM0I7Q0FDSDs7QUFFQTtLQUNJLHVCQUF1QjtDQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbXktdG9kby1jYXJkL215LXRvZG8tY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RvZG8tdGl0bGV7XG4gICAgbWFyZ2luOiAzMHB4O1xufVxuXG4jZm9sbG93LXRvZG97XG4gICAgbWFyZ2luOiAxMnB4O1xufVxuXG4jdG9kby11c2Vye1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI3RpbWV7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiAjN2M3YzdjO1xufVxuXG4jaW5mby10b2Rve1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogIzdjN2M3Yztcbn1cblxuXG4uY29udGFpbmVye1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHsgXG4gICAgI2ljb24tZGl2MXtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZzogMnB4ICFpbXBvcnRhbnQ7XG4gICAgXG4gICAgfVxuICAgICNpY29uLWRpdjJ7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZzogMnB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuIH1cblxuICNkZXNjcmlwdGlvbi10ZXh0e1xuICAgICBtYXJnaW46IDEycHggIWltcG9ydGFudDtcbiB9XG5cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/my-todo-card/my-todo-card.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/my-todo-card/my-todo-card.component.ts ***!
    \*******************************************************************/

  /*! exports provided: MyTodoCardComponent */

  /***/
  function srcAppComponentsMyTodoCardMyTodoCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyTodoCardComponent", function () {
      return MyTodoCardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/todo.service */
    "./src/app/services/todo.service.ts");

    var MyTodoCardComponent =
    /*#__PURE__*/
    function () {
      function MyTodoCardComponent(todoService) {
        _classCallCheck(this, MyTodoCardComponent);

        this.todoService = todoService;
        this.showCorrectBody = 1;
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        console.log(this.todo);
      }

      _createClass(MyTodoCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAcceptedUser();
        }
      }, {
        key: "changeBody",
        value: function changeBody(numBody) {
          this.showCorrectBody = numBody;
        }
      }, {
        key: "getProponentsNumber",
        value: function getProponentsNumber() {
          return this.todo.proposals.length;
        }
      }, {
        key: "sendMessage",
        value: function sendMessage() {
          this.messageEvent.emit(this.todo);
        }
      }, {
        key: "getAcceptedUser",
        value: function getAcceptedUser() {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = this.todo.proposals[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var proposal = _step2.value;
              console.log(proposal);

              if (proposal.state == "accepted") {
                this.acceptedUser = proposal.user;
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      }, {
        key: "undoAcceptProposal",
        value: function undoAcceptProposal(todo) {
          var _this26 = this;

          this.todoService.undoAcceptProposal(todo.id).subscribe(function (response) {
            console.log(response);

            _this26.messageEvent.emit(null);
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return MyTodoCardComponent;
    }();

    MyTodoCardComponent.ctorParameters = function () {
      return [{
        type: src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MyTodoCardComponent.prototype, "todo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MyTodoCardComponent.prototype, "messageEvent", void 0);
    MyTodoCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-todo-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./my-todo-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/my-todo-card/my-todo-card.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./my-todo-card.component.css */
      "./src/app/components/my-todo-card/my-todo-card.component.css")).default]
    })], MyTodoCardComponent);
    /***/
  },

  /***/
  "./src/app/components/navbar/navbar.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsNavbarNavbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".hm-gradient {\n    background-image: -webkit-gradient(linear, left bottom, left top, from(#f3e7e9), color-stop(99%, #e3eeff), to(#e3eeff));\n    background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);\n}\n.darken-grey-text {\n    color: #2E2E2E;\n}\n.navbar .dropdown-menu a:hover {\n    background-color: #01579b !important;\n}\n.darken-grey-text {\n    color: #2E2E2E;\n}\n.dropdown-item{\n    margin-left: 3%;\n    width: 95%;\n    margin-right: 3%;\n    border-radius: 5%;\n}\n#searchbar{\n    width: 100% !important;\n}\n#search-input{\n    width: 400px !important;\n}\n#searchbar-form{\n    margin-right: 0px !important;\n}\n#sidebar-btn{\n    margin-right: 10px;\n}\n.md-avatar {\n    vertical-align: middle;\n    width: 35px;\n    height: 35px;\n    margin-right: 12px;\n}\nnav{\n    z-index: 1;\n}\n#floating-btn{\n    position: fixed;\n    bottom: 0;\n    right: 0;\n    z-index: 2;\n    margin: 5px;\n}\n#bar-btn{\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 1;\n}\n.xyz { \n    background-size: auto; \n    text-align: center; \n    padding-top: 100px; \n}\n.btn-circle.btn-sm { \n    width: 30px; \n    height: 30px; \n    padding: 6px 0px; \n    border-radius: 15px; \n    font-size: 8px; \n    text-align: center; \n}\n.btn-circle.btn-md { \n    width: 50px; \n    height: 50px; \n    padding: 7px 10px; \n    border-radius: 25px; \n    font-size: 10px; \n    text-align: center; \n}\n.btn-circle.btn-xl { \n    width: 50px; \n    height: 50px; \n    padding: 10px 16px; \n    border-radius: 35px; \n    font-size: 12px; \n    text-align: center; \n} \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1SEFBZ0Y7SUFBaEYsZ0ZBQWdGO0FBQ3BGO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFVBQVU7QUFDZDtBQUVBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUVBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsVUFBVTtBQUNkO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhtLWdyYWRpZW50IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjZjNlN2U5IDAlLCAjZTNlZWZmIDk5JSwgI2UzZWVmZiAxMDAlKTtcbn1cbi5kYXJrZW4tZ3JleS10ZXh0IHtcbiAgICBjb2xvcjogIzJFMkUyRTtcbn1cblxuLm5hdmJhciAuZHJvcGRvd24tbWVudSBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE1NzliICFpbXBvcnRhbnQ7XG59XG4uZGFya2VuLWdyZXktdGV4dCB7XG4gICAgY29sb3I6ICMyRTJFMkU7XG59XG4uZHJvcGRvd24taXRlbXtcbiAgICBtYXJnaW4tbGVmdDogMyU7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xufVxuXG4jc2VhcmNoYmFye1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbiNzZWFyY2gtaW5wdXR7XG4gICAgd2lkdGg6IDQwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbiNzZWFyY2hiYXItZm9ybXtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4jc2lkZWJhci1idG57XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ubWQtYXZhdGFyIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG5cbm5hdntcbiAgICB6LWluZGV4OiAxO1xufVxuXG4jZmxvYXRpbmctYnRue1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgei1pbmRleDogMjtcbiAgICBtYXJnaW46IDVweDtcbn1cblxuI2Jhci1idG57XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi54eXogeyBcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87IFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgcGFkZGluZy10b3A6IDEwMHB4OyBcbn0gXG4uYnRuLWNpcmNsZS5idG4tc20geyBcbiAgICB3aWR0aDogMzBweDsgXG4gICAgaGVpZ2h0OiAzMHB4OyBcbiAgICBwYWRkaW5nOiA2cHggMHB4OyBcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4OyBcbiAgICBmb250LXNpemU6IDhweDsgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbn0gXG4uYnRuLWNpcmNsZS5idG4tbWQgeyBcbiAgICB3aWR0aDogNTBweDsgXG4gICAgaGVpZ2h0OiA1MHB4OyBcbiAgICBwYWRkaW5nOiA3cHggMTBweDsgXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDsgXG4gICAgZm9udC1zaXplOiAxMHB4OyBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxufSBcbi5idG4tY2lyY2xlLmJ0bi14bCB7IFxuICAgIHdpZHRoOiA1MHB4OyBcbiAgICBoZWlnaHQ6IDUwcHg7IFxuICAgIHBhZGRpbmc6IDEwcHggMTZweDsgXG4gICAgYm9yZGVyLXJhZGl1czogMzVweDsgXG4gICAgZm9udC1zaXplOiAxMnB4OyBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxufSAiXX0= */";
    /***/
  },

  /***/
  "./src/app/components/navbar/navbar.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.ts ***!
    \*******************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_login_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/login-authentication.service */
    "./src/app/services/login-authentication.service.ts");
    /* harmony import */


    var src_app_models_personal_card_personal_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/models/personal-card/personal-card */
    "./src/app/models/personal-card/personal-card.ts");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent(userAuth, userService, router) {
        _classCallCheck(this, NavbarComponent);

        this.userAuth = userAuth;
        this.userService = userService;
        this.router = router;
        this.personalCard = new src_app_models_personal_card_personal_card__WEBPACK_IMPORTED_MODULE_4__["PersonalCard"]();
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this27 = this;

          this.userService.personalCardSubject.subscribe(function (personalCard) {
            _this27.updateUserInfoNav(personalCard);

            _this27.showChatButton();
          });

          if (this.isUserLoggedIn()) {
            this.userService.getMyPersonalCard().subscribe();
          }
        }
      }, {
        key: "isUserLoggedIn",
        value: function isUserLoggedIn() {
          this.username = sessionStorage.getItem("username");
          return this.userAuth.isUserLoggedIn();
        }
      }, {
        key: "updateUserInfoNav",
        value: function updateUserInfoNav(personalCard) {
          this.personalCard = personalCard;

          if (this.personalCard.imageUrl) {
            this.imagePath = this.personalCard.imageUrl;
          }
        }
      }, {
        key: "showChatButton",
        value: function showChatButton() {
          return this.router.routerState.snapshot.url !== '/chat';
        }
      }, {
        key: "hideMenu",
        value: function hideMenu() {
          return this.router.routerState.snapshot.url != '/complete-register';
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ctorParameters = function () {
      return [{
        type: src_app_services_login_authentication_service__WEBPACK_IMPORTED_MODULE_3__["LoginAuthenticationService"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.css */
      "./src/app/components/navbar/navbar.component.css")).default]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/components/profile-board/profile-board.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/components/profile-board/profile-board.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProfileBoardProfileBoardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".col-sm-12{\n    padding: 0 !important;\n}\n\n.modal {\n    display: block; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n  }\n\n.modal-content{\n    background-color: #fefefe;\n    margin: auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 50%;  \n    max-height: 80vh;\n  }\n\n#modal-title{\n    align-content: left;\n    border-bottom: 1px solid #888;\n    padding:10px;\n    margin-bottom: 10px;\n    font-weight: bold;\n    font-size: x-large;\n  }\n\n.modal-list{\n    overflow-y: scroll;\n  }\n\n.row{\n    margin:20px;\n  }\n\n.modal-user{\n    font-size: large;\n  }\n\n/* The Close Button */\n\n.close {\n    color: #aaaaaa;\n    text-align: right;\n    font-size: 28px;\n    font-weight: bold;\n  }\n\n.close:hover,\n  .close:focus {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlLWJvYXJkL3Byb2ZpbGUtYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGNBQWMsRUFBRSxzQkFBc0I7SUFDdEMsZUFBZSxFQUFFLGtCQUFrQjtJQUNuQyxVQUFVLEVBQUUsZUFBZTtJQUMzQixrQkFBa0IsRUFBRSx3QkFBd0I7SUFDNUMsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXLEVBQUUsZUFBZTtJQUM1QixZQUFZLEVBQUUsZ0JBQWdCO0lBQzlCLGNBQWMsRUFBRSw0QkFBNEI7SUFDNUMsNEJBQTRCLEVBQUUsbUJBQW1CO0lBQ2pELGlDQUFpQyxFQUFFLHFCQUFxQjtFQUMxRDs7QUFFRjtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7O0FBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0FBR0E7SUFDRSxXQUFXO0VBQ2I7O0FBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0FBRUMscUJBQXFCOztBQUNyQjtJQUNDLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjs7QUFFQTs7SUFFRSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2ZpbGUtYm9hcmQvcHJvZmlsZS1ib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbC1zbS0xMntcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5tb2RhbCB7XG4gICAgZGlzcGxheTogYmxvY2s7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDsgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXG4gIH1cblxuLm1vZGFsLWNvbnRlbnR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xuICAgIHdpZHRoOiA1MCU7ICBcbiAgICBtYXgtaGVpZ2h0OiA4MHZoO1xuICB9XG4gIFxuICAjbW9kYWwtdGl0bGV7XG4gICAgYWxpZ24tY29udGVudDogbGVmdDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzg4ODtcbiAgICBwYWRkaW5nOjEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIH1cblxuICAubW9kYWwtbGlzdHtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIH1cbiBcblxuICAucm93e1xuICAgIG1hcmdpbjoyMHB4O1xuICB9XG5cbiAgLm1vZGFsLXVzZXJ7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgfVxuXG4gICAvKiBUaGUgQ2xvc2UgQnV0dG9uICovXG4gICAuY2xvc2Uge1xuICAgIGNvbG9yOiAjYWFhYWFhO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBcbiAgLmNsb3NlOmhvdmVyLFxuICAuY2xvc2U6Zm9jdXMge1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/profile-board/profile-board.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/profile-board/profile-board.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ProfileBoardComponent */

  /***/
  function srcAppComponentsProfileBoardProfileBoardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileBoardComponent", function () {
      return ProfileBoardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/todo.service */
    "./src/app/services/todo.service.ts");
    /* harmony import */


    var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/event.service */
    "./src/app/services/event.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var ProfileBoardComponent =
    /*#__PURE__*/
    function () {
      function ProfileBoardComponent(todoService, eventService, sanitizer) {
        _classCallCheck(this, ProfileBoardComponent);

        this.todoService = todoService;
        this.eventService = eventService;
        this.sanitizer = sanitizer;
        this.activatedBoard = 0;
        this.isMapOpen = false;
      }

      _createClass(ProfileBoardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.showTodoBoard();
        }
      }, {
        key: "showTodoBoard",
        value: function showTodoBoard() {
          var _this28 = this;

          this.activatedBoard = 0;
          this.eventList = null;
          this.todoService.getProfileTodoList(this.username).subscribe(function (response) {
            console.log(response);
            _this28.todoList = response;
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "showEventBoard",
        value: function showEventBoard() {
          var _this29 = this;

          this.activatedBoard = 2;
          this.todoList = null;
          this.eventService.getEventListByUsername(this.username).subscribe(function (response) {
            _this29.eventList = response;
          }, function (error) {});
        }
      }, {
        key: "openMap",
        value: function openMap($event) {
          this.placeId = $event;
          this.isMapOpen = true;
        }
      }, {
        key: "closeMap",
        value: function closeMap() {
          this.isMapOpen = false;
          this.placeId = null;
        }
      }, {
        key: "sanitizeUrl",
        value: function sanitizeUrl() {
          return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.google.com/maps/embed/v1/place?key=AIzaSyB1A4WVaFhrtCkvVdpx_cobXShk_RGtW-8&q=place_id:" + this.placeId);
        }
      }, {
        key: "openModal",
        value: function openModal($event) {
          if ($event) {
            this.currentTodo = $event;
          } else {
            this.showTodoBoard();
          }
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.currentTodo = null;
        }
      }]);

      return ProfileBoardComponent;
    }();

    ProfileBoardComponent.ctorParameters = function () {
      return [{
        type: src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]
      }, {
        type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProfileBoardComponent.prototype, "username", void 0);
    ProfileBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile-board',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile-board.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile-board/profile-board.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile-board.component.css */
      "./src/app/components/profile-board/profile-board.component.css")).default]
    })], ProfileBoardComponent);
    /***/
  },

  /***/
  "./src/app/components/profile/profile.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/components/profile/profile.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProfileProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@media screen and (min-width: 992px) {\n    .container-fluid{\n        margin-left: 13vw; \n        width: 74vw !important;\n    }\n    \n  }\n\n\n.img{\n    height: 250px !important;\n    width: 250px !important;\n    border-radius: 10px;\n}\n\n\n#user-card{\n    margin-top: 50px;\n}\n\n\n#user-board{\n    margin-top: 25px;\n}\n\n\n#username{\n    padding-top: 15px;\n}\n\n\n.container-fluid{\n    padding: 0px !important;\n}\n\n\n.card-text{\n    padding: 25px;\n}\n\n\n.fa-user-plus{\n    margin-left: 10px;\n    color: #f44c36 !important;\n    font-size: 2rem !important;\n}\n\n\n.fa{\n    font-size: 1.5rem;\n    margin-right: 10px;\n    color: gray;\n}\n\n\n.list-group-item{\n    border-bottom: none !important;\n}\n\n\n.list-group{\n    margin-top: 30px;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n\n#user-card{\n    margin-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLHNCQUFzQjtJQUMxQjs7RUFFRjs7O0FBR0Y7SUFDSSx3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7OztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLDBCQUEwQjtBQUM5Qjs7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7OztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgLmNvbnRhaW5lci1mbHVpZHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEzdnc7IFxuICAgICAgICB3aWR0aDogNzR2dyAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBcbiAgfVxuXG5cbi5pbWd7XG4gICAgaGVpZ2h0OiAyNTBweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbiN1c2VyLWNhcmR7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuI3VzZXItYm9hcmR7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuI3VzZXJuYW1le1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuXG4uY29udGFpbmVyLWZsdWlke1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uY2FyZC10ZXh0e1xuICAgIHBhZGRpbmc6IDI1cHg7XG59XG5cbi5mYS11c2VyLXBsdXN7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgY29sb3I6ICNmNDRjMzYgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDJyZW0gIWltcG9ydGFudDtcbn1cblxuLmZhe1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBjb2xvcjogZ3JheTtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbXtcbiAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5saXN0LWdyb3Vwe1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4jdXNlci1jYXJke1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/profile/profile.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/profile/profile.component.ts ***!
    \*********************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppComponentsProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_models_personal_card_personal_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/personal-card/personal-card */
    "./src/app/models/personal-card/personal-card.ts");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var ProfileComponent =
    /*#__PURE__*/
    function () {
      function ProfileComponent(userService, _sanitizer) {
        _classCallCheck(this, ProfileComponent);

        this.userService = userService;
        this._sanitizer = _sanitizer;
        this.personalCard = new src_app_models_personal_card_personal_card__WEBPACK_IMPORTED_MODULE_2__["PersonalCard"]();
        this.showCorrectPanel = 0;
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this30 = this;

          this.userService.getMyPersonalCard().subscribe(function (result) {
            _this30.personalCard = result;
          });
          this.userService.getUserFollowers(sessionStorage.getItem("username")).subscribe(function (result) {});
          this.userService.getUserFollowers(sessionStorage.getItem("username")).subscribe(function (result) {
            _this30.followers = result;
          });
          this.userService.getUserFollowing(sessionStorage.getItem("username")).subscribe(function (result) {
            _this30.following = result;
          }, function (error) {});
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ctorParameters = function () {
      return [{
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
      }];
    };

    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.css */
      "./src/app/components/profile/profile.component.css")).default]
    })], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/components/register/register.component.css":
  /*!************************************************************!*\
    !*** ./src/app/components/register/register.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsRegisterRegisterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#register-card{\n    margin-top: 10px !important;\n}\n\n.card-title{\n    text-align: center;\n}\n\nform{\n    padding: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNyZWdpc3Rlci1jYXJke1xuICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmNhcmQtdGl0bGV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5mb3Jte1xuICAgIHBhZGRpbmc6IDEycHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/register/register.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/register/register.component.ts ***!
    \***********************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppComponentsRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_models_user_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/user/user.model */
    "./src/app/models/user/user.model.ts");
    /* harmony import */


    var src_app_services_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/register.service */
    "./src/app/services/register.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_login_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/login-authentication.service */
    "./src/app/services/login-authentication.service.ts");
    /* harmony import */


    var src_app_models_response_message_message_code__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/models/response-message/message-code */
    "./src/app/models/response-message/message-code.ts");

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent(loginAuth, registerService, router) {
        _classCallCheck(this, RegisterComponent);

        this.loginAuth = loginAuth;
        this.registerService = registerService;
        this.router = router;
        this.user = new src_app_models_user_user_model__WEBPACK_IMPORTED_MODULE_2__["User"]('', '');
        this.confirmPassword = '';
        this.errorRegister = '';
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.loginAuth.isUserLoggedIn()) {
            this.router.navigate(['home']);
          }
        }
      }, {
        key: "handleRegister",
        value: function handleRegister() {
          var _this31 = this;

          if (this.errorRegister != '') {
            this.errorRegister = '';
          }

          if (this.validate()) {
            this.registerService.executeUserRegistration(this.user).subscribe(function (data) {
              _this31.handleResponse(data);
            }, function (error) {
              _this31.responseMessage = error.error;
              console.log(_this31.responseMessage);
              _this31.errorRegister = _this31.responseMessage.message;
            });
          } else {}
        }
      }, {
        key: "handleResponse",
        value: function handleResponse(data) {
          this.responseMessage = data;
          this.messageCode = this.responseMessage.messageCode;

          switch (this.messageCode) {
            case src_app_models_response_message_message_code__WEBPACK_IMPORTED_MODULE_6__["MessageCode"].SUCCESSFUL_REGISTER:
              this.clear();
              break;
          }
        }
      }, {
        key: "validate",
        value: function validate() {
          if (this.messageCode === src_app_models_response_message_message_code__WEBPACK_IMPORTED_MODULE_6__["MessageCode"].SUCCESSFUL_REGISTER) {
            this.messageCode = 0;
          }

          return this.validateField(this.user.getName(), "Nome non valido", /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g) && this.validateField(this.user.getSurname(), "Cognome non valido", /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g) && this.validateField(this.user.getUsername(), "Username non valido", /^[a-z0-9_-]{3,}$/igm) && this.validateField(this.user.getEmail(), "Email non valida", /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) && this.validateField(this.user.getPassword(), "Password non valida", /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/g) && this.arePasswordsMatching();
        }
      }, {
        key: "validateField",
        value: function validateField(field, message, regex) {
          if (!field.match(regex)) {
            this.errorRegister += message + "<br>";
            return false;
          }

          return true;
        }
      }, {
        key: "arePasswordsMatching",
        value: function arePasswordsMatching() {
          if (!(this.user.getPassword() === this.confirmPassword)) {
            console.log(this.user.getPassword());
            console.log(this.confirmPassword);
            this.errorRegister += "Le password non corrispondono" + "<br>";
            return false;
          }

          return true;
        }
      }, {
        key: "clear",
        value: function clear() {
          this.user = new src_app_models_user_user_model__WEBPACK_IMPORTED_MODULE_2__["User"]("", "");
          this.confirmPassword = "";
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: src_app_services_login_authentication_service__WEBPACK_IMPORTED_MODULE_5__["LoginAuthenticationService"]
      }, {
        type: src_app_services_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.css */
      "./src/app/components/register/register.component.css")).default]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/components/todo-card/todo-card.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/components/todo-card/todo-card.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTodoCardTodoCardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#todo-title{\n    margin: 30px;\n}\n\n#follow-todo{\n    margin: 12px;\n}\n\n#todo-user{\n    color: black;\n    font-weight: bold;\n}\n\n#time{\n    font-size: 1rem;\n    color: #7c7c7c;\n}\n\n#info-todo{\n    font-size: 1rem;\n    color: #7c7c7c;\n}\n\n.container{\n    padding: 0px !important;\n    margin-bottom: 10px;\n}\n\n@media screen and (min-width: 1200px) { \n    #icon-div1{\n        text-align: right !important;\n        padding: 2px !important;\n    \n    }\n    #icon-div2{\n        text-align: left !important;\n        padding: 2px !important;\n    }\n }\n\n#description-text{\n     margin: 12px !important;\n }\n\n.card-body{\n    background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b2RvLWNhcmQvdG9kby1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUdBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFJQTtJQUNJO1FBQ0ksNEJBQTRCO1FBQzVCLHVCQUF1Qjs7SUFFM0I7SUFDQTtRQUNJLDJCQUEyQjtRQUMzQix1QkFBdUI7SUFDM0I7Q0FDSDs7QUFFQTtLQUNJLHVCQUF1QjtDQUMzQjs7QUFFRDtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9kby1jYXJkL3RvZG8tY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RvZG8tdGl0bGV7XG4gICAgbWFyZ2luOiAzMHB4O1xufVxuXG4jZm9sbG93LXRvZG97XG4gICAgbWFyZ2luOiAxMnB4O1xufVxuXG4jdG9kby11c2Vye1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI3RpbWV7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiAjN2M3YzdjO1xufVxuXG4jaW5mby10b2Rve1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogIzdjN2M3Yztcbn1cblxuXG4uY29udGFpbmVye1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHsgXG4gICAgI2ljb24tZGl2MXtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZzogMnB4ICFpbXBvcnRhbnQ7XG4gICAgXG4gICAgfVxuICAgICNpY29uLWRpdjJ7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZzogMnB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuIH1cblxuICNkZXNjcmlwdGlvbi10ZXh0e1xuICAgICBtYXJnaW46IDEycHggIWltcG9ydGFudDtcbiB9XG5cbi5jYXJkLWJvZHl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/todo-card/todo-card.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/todo-card/todo-card.component.ts ***!
    \*************************************************************/

  /*! exports provided: TodoCardComponent */

  /***/
  function srcAppComponentsTodoCardTodoCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoCardComponent", function () {
      return TodoCardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/todo.service */
    "./src/app/services/todo.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var TodoCardComponent =
    /*#__PURE__*/
    function () {
      function TodoCardComponent(todoService, router) {
        _classCallCheck(this, TodoCardComponent);

        this.todoService = todoService;
        this.router = router;
        this.showCorrectBody = 1;
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(TodoCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.alreadyProposed = this.checkAlreadyProposed();
          this.proponentsNumber = this.getProponentsNumber();
        }
      }, {
        key: "handleTodoProposal",
        value: function handleTodoProposal() {
          var _this32 = this;

          this.todoService.sendProposal(this.todo).subscribe(function (response) {
            _this32.refreshTodo();
          }, function (error) {});
        }
      }, {
        key: "changeBody",
        value: function changeBody(numBody) {
          this.showCorrectBody = numBody;
        }
      }, {
        key: "checkAlreadyProposed",
        value: function checkAlreadyProposed() {
          if (this.todo.proposals.length != 0) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = this.todo.proposals[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var proposal = _step3.value;

                if (proposal.user.username == sessionStorage.getItem("username")) {
                  return true;
                }
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                  _iterator3.return();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }

            return false;
          } else {
            return false;
          }
        }
      }, {
        key: "getProponentsNumber",
        value: function getProponentsNumber() {
          return this.todo.proposals.length;
        }
      }, {
        key: "refreshTodo",
        value: function refreshTodo() {
          var _this33 = this;

          this.alreadyProposed = true;
          this.todoService.getGenericTodo(this.todo.id).subscribe(function (response) {
            _this33.todo = response;
            _this33.proponentsNumber = _this33.getProponentsNumber();
          });
        }
      }, {
        key: "isMyTodo",
        value: function isMyTodo() {
          if (sessionStorage.getItem("username") == this.todo.user.username) {
            return true;
          }

          return false;
        }
      }, {
        key: "sendMessage",
        value: function sendMessage() {
          this.messageEvent.emit(this.todo);
        }
      }]);

      return TodoCardComponent;
    }();

    TodoCardComponent.ctorParameters = function () {
      return [{
        type: src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TodoCardComponent.prototype, "todo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], TodoCardComponent.prototype, "messageEvent", void 0);
    TodoCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-todo-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./todo-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/todo-card/todo-card.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./todo-card.component.css */
      "./src/app/components/todo-card/todo-card.component.css")).default]
    })], TodoCardComponent);
    /***/
  },

  /***/
  "./src/app/components/todo/todo.component.css":
  /*!****************************************************!*\
    !*** ./src/app/components/todo/todo.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTodoTodoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h4{\n    margin-bottom: 30px;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b2RvL3RvZG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RvZG8vdG9kby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDR7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/todo/todo.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/todo/todo.component.ts ***!
    \***************************************************/

  /*! exports provided: TodoComponent, Todo */

  /***/
  function srcAppComponentsTodoTodoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoComponent", function () {
      return TodoComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Todo", function () {
      return Todo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/todo.service */
    "./src/app/services/todo.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/category.service */
    "./src/app/services/category.service.ts");
    /* harmony import */


    var src_app_models_response_message_message_code__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/models/response-message/message-code */
    "./src/app/models/response-message/message-code.ts");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");

    var TodoComponent =
    /*#__PURE__*/
    function () {
      function TodoComponent(todoService, categoryService, userService, activatedRoute, router) {
        _classCallCheck(this, TodoComponent);

        this.todoService = todoService;
        this.categoryService = categoryService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.todo = new Todo();
      }

      _createClass(TodoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this34 = this;

          this.todoService.todoResponseMessage.subscribe(function (m) {
            _this34.todoResponseMessage = m;
          });
          this.todoId = this.activatedRoute.snapshot.params['id'];

          if (this.todoId) {
            // se todoId è undefined vuol dire che si vuole creare un TODO
            this.retrieveTodo(this.todoId);
          }

          this.getCategories();
        }
      }, {
        key: "handleTodoCreation",
        value: function handleTodoCreation() {
          var _this35 = this;

          this.todoService.createTodo(this.todo).subscribe(function (response) {
            console.log(response);

            var ps = _this35.userService.getPersonalCard();

            ps.wallet.cfu = ps.wallet.cfu - _this35.todo.category.cfuPrice;

            _this35.userService.updatePersonalCard(ps);

            _this35.todoService.setTodoCreationResponse(src_app_models_response_message_message_code__WEBPACK_IMPORTED_MODULE_5__["MessageCode"].TODO_CREATED);

            _this35.cleanFields();
          }, function (error) {
            console.log(error);

            if (error.error.messageCode === src_app_models_response_message_message_code__WEBPACK_IMPORTED_MODULE_5__["MessageCode"].CFU_INSUFFICIENT) {
              _this35.todoService.setTodoCreationResponse(src_app_models_response_message_message_code__WEBPACK_IMPORTED_MODULE_5__["MessageCode"].CFU_INSUFFICIENT);
            }
          });
        }
      }, {
        key: "handleTodoUpdate",
        value: function handleTodoUpdate() {
          var _this36 = this;

          this.todoService.updateTodo(this.todo).subscribe(function (response) {
            _this36.router.navigate(['home']);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "retrieveTodo",
        value: function retrieveTodo(todoId) {
          var _this37 = this;

          this.todoService.getTodo(todoId).subscribe(function (response) {
            _this37.todo = response;
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getCategories",
        value: function getCategories() {
          var _this38 = this;

          this.categoryService.getAllCategories().subscribe(function (response) {
            _this38.categories = response;
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "cleanFields",
        value: function cleanFields() {
          this.todo.title = "";
          this.todo.description = "";
          this.todo.expirationDate = null;
          this.todo.category = null;
        }
      }]);

      return TodoComponent;
    }();

    TodoComponent.ctorParameters = function () {
      return [{
        type: src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]
      }, {
        type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    TodoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-todo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./todo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/todo/todo.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./todo.component.css */
      "./src/app/components/todo/todo.component.css")).default]
    })], TodoComponent);

    var Todo = function Todo() {
      _classCallCheck(this, Todo);
    };
    /***/

  },

  /***/
  "./src/app/components/user-profile/user-profile.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/components/user-profile/user-profile.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsUserProfileUserProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@media screen and (min-width: 992px) {\n    .container-fluid{\n        margin-left: 13vw; \n        width: 74vw !important;\n    }\n    \n  }\n\n\n.img{\n    height: 250px !important;\n    width: 250px !important;\n    border-radius: 10px;\n}\n\n\n#user-card{\n    margin-top: 50px;\n}\n\n\n#user-board{\n    margin-top: 25px;\n}\n\n\n#username{\n    padding-top: 15px;\n}\n\n\n.container-fluid{\n    padding: 0px !important;\n}\n\n\n.card-text{\n    padding: 25px;\n}\n\n\n.fa-user-plus{\n    margin-left: 10px;\n    color: #f44c36 !important;\n    font-size: 2rem !important;\n}\n\n\n.fa{\n    font-size: 1.5rem;\n    margin-right: 10px;\n    color: gray;\n}\n\n\n.list-group-item{\n    border-bottom: none !important;\n}\n\n\n.list-group{\n    margin-top: 30px;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n\n#user-card{\n    margin-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLGlCQUFpQjtRQUNqQixzQkFBc0I7SUFDMUI7O0VBRUY7OztBQUdGO0lBQ0ksd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7OztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7OztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QiwwQkFBMEI7QUFDOUI7OztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7OztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAuY29udGFpbmVyLWZsdWlke1xuICAgICAgICBtYXJnaW4tbGVmdDogMTN2dzsgXG4gICAgICAgIHdpZHRoOiA3NHZ3ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIFxuICB9XG5cblxuLmltZ3tcbiAgICBoZWlnaHQ6IDI1MHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuI3VzZXItY2FyZHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4jdXNlci1ib2FyZHtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4jdXNlcm5hbWV7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG59XG5cbi5jb250YWluZXItZmx1aWR7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLXRleHR7XG4gICAgcGFkZGluZzogMjVweDtcbn1cblxuLmZhLXVzZXItcGx1c3tcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBjb2xvcjogI2Y0NGMzNiAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMnJlbSAhaW1wb3J0YW50O1xufVxuXG4uZmF7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGNvbG9yOiBncmF5O1xufVxuXG4ubGlzdC1ncm91cC1pdGVte1xuICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmxpc3QtZ3JvdXB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbiN1c2VyLWNhcmR7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/user-profile/user-profile.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/user-profile/user-profile.component.ts ***!
    \*******************************************************************/

  /*! exports provided: UserProfileComponent */

  /***/
  function srcAppComponentsUserProfileUserProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function () {
      return UserProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var src_app_models_personal_card_personal_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/models/personal-card/personal-card */
    "./src/app/models/personal-card/personal-card.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var UserProfileComponent =
    /*#__PURE__*/
    function () {
      function UserProfileComponent(userService, route) {
        _classCallCheck(this, UserProfileComponent);

        this.userService = userService;
        this.route = route;
        this.personalCard = new src_app_models_personal_card_personal_card__WEBPACK_IMPORTED_MODULE_3__["PersonalCard"]();
        this.show = false;
        this.showCorrectPanel = 0;
      }

      _createClass(UserProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.subscribeRouter();
          this.username = this.route.snapshot.params['username'];
          this.getPersonalCard();
          this.getUserFollowers();
          this.getUserFollowing();
        }
      }, {
        key: "followUser",
        value: function followUser(username) {
          var _this39 = this;

          this.userService.followUser(username).subscribe(function (result) {
            _this39.userService.getUserFollowers(_this39.username).subscribe(function (result) {
              _this39.followers = result;

              _this39.checkIfAlreadyFollow(result);
            });
          }, function (error) {});
        }
      }, {
        key: "changePanel",
        value: function changePanel(number) {
          this.showCorrectPanel = number;
        }
      }, {
        key: "getPersonalCard",
        value: function getPersonalCard() {
          var _this40 = this;

          this.userService.getUserPersonalCard(this.username).subscribe(function (result) {
            if (result) {
              _this40.show = true;
              _this40.personalCard = result;
            } else {}
          }, function (error) {});
        }
      }, {
        key: "getUserFollowers",
        value: function getUserFollowers() {
          var _this41 = this;

          this.userService.getUserFollowers(this.username).subscribe(function (result) {
            _this41.followers = result;

            if (_this41.followers.length) {
              _this41.checkIfAlreadyFollow(_this41.followers);
            }
          });
        }
      }, {
        key: "getUserFollowing",
        value: function getUserFollowing() {
          var _this42 = this;

          this.userService.getUserFollowing(this.username).subscribe(function (result) {
            _this42.following = result;
          }, function (error) {});
        }
      }, {
        key: "subscribeRouter",
        value: function subscribeRouter() {
          var _this43 = this;

          this.route.params.subscribe(function (params) {
            _this43.username = params['username'];
            _this43.alreadyFollow = false;

            _this43.getPersonalCard();

            _this43.getUserFollowers();

            _this43.getUserFollowing();
          });
        }
      }, {
        key: "checkIfAlreadyFollow",
        value: function checkIfAlreadyFollow(followers) {
          var i = 0;
          console.log("chiamata");

          while (i < followers.length) {
            if (followers[i].username === sessionStorage.getItem('username')) {
              this.alreadyFollow = true;
            }

            i++;
          }
        }
      }, {
        key: "isMyProfile",
        value: function isMyProfile() {
          return this.username === sessionStorage.getItem("username");
        }
      }]);

      return UserProfileComponent;
    }();

    UserProfileComponent.ctorParameters = function () {
      return [{
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-profile/user-profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-profile.component.css */
      "./src/app/components/user-profile/user-profile.component.css")).default]
    })], UserProfileComponent);
    /***/
  },

  /***/
  "./src/app/constants/constant.ts":
  /*!***************************************!*\
    !*** ./src/app/constants/constant.ts ***!
    \***************************************/

  /*! exports provided: API_URL */

  /***/
  function srcAppConstantsConstantTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "API_URL", function () {
      return API_URL;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var API_URL = 'https://sini-doneit-backend.herokuapp.com';
    /***/
  },

  /***/
  "./src/app/event-board/event-board.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/event-board/event-board.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEventBoardEventBoardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".col-sm-12{\n    padding: 0 !important;\n}\n\n.modal {\n    display: block; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n  }\n\n.modal-content{\n    background-color: #fefefe;\n    margin: auto;\n    padding: 20px;\n    border: 1px solid #888;\n    width: 50%;  \n    max-height: 80vh;\n  }\n\n#modal-title{\n    align-content: left;\n    border-bottom: 1px solid #888;\n    padding:10px;\n    margin-bottom: 10px;\n    font-weight: bold;\n    font-size: x-large;\n  }\n\n/* The Close Button */\n\n.close {\n    color: #aaaaaa;\n    text-align: right;\n    font-size: 28px;\n    font-weight: bold;\n  }\n\n.close:hover,\n  .close:focus {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnQtYm9hcmQvZXZlbnQtYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGNBQWMsRUFBRSxzQkFBc0I7SUFDdEMsZUFBZSxFQUFFLGtCQUFrQjtJQUNuQyxVQUFVLEVBQUUsZUFBZTtJQUMzQixrQkFBa0IsRUFBRSx3QkFBd0I7SUFDNUMsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXLEVBQUUsZUFBZTtJQUM1QixZQUFZLEVBQUUsZ0JBQWdCO0lBQzlCLGNBQWMsRUFBRSw0QkFBNEI7SUFDNUMsNEJBQTRCLEVBQUUsbUJBQW1CO0lBQ2pELGlDQUFpQyxFQUFFLHFCQUFxQjtFQUMxRDs7QUFFRjtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7O0FBRUMscUJBQXFCOztBQUNyQjtJQUNDLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjs7QUFFQTs7SUFFRSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC9ldmVudC1ib2FyZC9ldmVudC1ib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbC1zbS0xMntcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5tb2RhbCB7XG4gICAgZGlzcGxheTogYmxvY2s7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDsgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXG4gIH1cblxuLm1vZGFsLWNvbnRlbnR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xuICAgIHdpZHRoOiA1MCU7ICBcbiAgICBtYXgtaGVpZ2h0OiA4MHZoO1xuICB9XG4gIFxuICAjbW9kYWwtdGl0bGV7XG4gICAgYWxpZ24tY29udGVudDogbGVmdDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzg4ODtcbiAgICBwYWRkaW5nOjEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIH1cblxuICAgLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xuICAgLmNsb3NlIHtcbiAgICBjb2xvcjogI2FhYWFhYTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgXG4gIC5jbG9zZTpob3ZlcixcbiAgLmNsb3NlOmZvY3VzIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/event-board/event-board.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/event-board/event-board.component.ts ***!
    \******************************************************/

  /*! exports provided: EventBoardComponent */

  /***/
  function srcAppEventBoardEventBoardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventBoardComponent", function () {
      return EventBoardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/event.service */
    "./src/app/services/event.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _services_refresh_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/refresh.service */
    "./src/app/services/refresh.service.ts");

    var EventBoardComponent =
    /*#__PURE__*/
    function () {
      function EventBoardComponent(eventService, sanitizer, refreshService) {
        _classCallCheck(this, EventBoardComponent);

        this.eventService = eventService;
        this.sanitizer = sanitizer;
        this.refreshService = refreshService;
        this.isMapOpen = false;
        this.isPartecipantsModalOpen = false;
        this.partecipants = [];
      }

      _createClass(EventBoardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this44 = this;

          this.getActiveEvents();
          this.refreshService.eventRefreshMessage.subscribe(function (m) {
            _this44.getActiveEvents();
          });
        }
      }, {
        key: "getActiveEvents",
        value: function getActiveEvents() {
          var _this45 = this;

          this.eventService.getActiveEvents().subscribe(function (response) {
            console.log(response);
            _this45.eventList = response;
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "openMap",
        value: function openMap($event) {
          this.placeId = $event;
          this.isMapOpen = true;
        }
      }, {
        key: "closeMap",
        value: function closeMap() {
          this.isMapOpen = false;
          this.placeId = null;
        }
      }, {
        key: "openPartecipantModal",
        value: function openPartecipantModal(event) {
          this.isPartecipantsModalOpen = true;
          this.partecipants = event;
        }
      }, {
        key: "closePartecipantsModal",
        value: function closePartecipantsModal() {
          this.isPartecipantsModalOpen = false;
          this.partecipants = [];
        }
      }, {
        key: "sanitizeUrl",
        value: function sanitizeUrl() {
          return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.google.com/maps/embed/v1/place?key=AIzaSyB1A4WVaFhrtCkvVdpx_cobXShk_RGtW-8&q=place_id:" + this.placeId);
        }
      }]);

      return EventBoardComponent;
    }();

    EventBoardComponent.ctorParameters = function () {
      return [{
        type: _services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
      }, {
        type: _services_refresh_service__WEBPACK_IMPORTED_MODULE_4__["RefreshService"]
      }];
    };

    EventBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-event-board',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./event-board.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/event-board/event-board.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./event-board.component.css */
      "./src/app/event-board/event-board.component.css")).default]
    })], EventBoardComponent);
    /***/
  },

  /***/
  "./src/app/event-card/event-card.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/event-card/event-card.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEventCardEventCardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#todo-title{\n    margin: 30px;\n}\n\n#follow-todo{\n    margin: 12px;\n}\n\n#todo-user{\n    color: black;\n    font-weight: bold;\n}\n\n#time{\n    font-size: 1rem;\n    color: #7c7c7c;\n}\n\n#info-todo{\n    font-size: 1rem;\n    color: #7c7c7c;\n}\n\n.container{\n    padding: 0px !important;\n    margin-bottom: 10px;\n}\n\n@media screen and (min-width: 1200px) { \n #icon-div2{\n        text-align: left !important;\n        padding: 2px !important;\n        margin-top:10px !important;\n    }\n }\n\n#description-text{\n     margin: 12px !important;\n }\n\n.card-body{\n    background-color: white;\n }\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnQtY2FyZC9ldmVudC1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUdBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFHQTtDQUNDO1FBQ08sMkJBQTJCO1FBQzNCLHVCQUF1QjtRQUN2QiwwQkFBMEI7SUFDOUI7Q0FDSDs7QUFFQTtLQUNJLHVCQUF1QjtDQUMzQjs7QUFFQTtJQUNHLHVCQUF1QjtDQUMxQiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50LWNhcmQvZXZlbnQtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RvZG8tdGl0bGV7XG4gICAgbWFyZ2luOiAzMHB4O1xufVxuXG4jZm9sbG93LXRvZG97XG4gICAgbWFyZ2luOiAxMnB4O1xufVxuXG4jdG9kby11c2Vye1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI3RpbWV7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiAjN2M3YzdjO1xufVxuXG4jaW5mby10b2Rve1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogIzdjN2M3Yztcbn1cblxuXG4uY29udGFpbmVye1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7IFxuICNpY29uLWRpdjJ7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZzogMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi10b3A6MTBweCAhaW1wb3J0YW50O1xuICAgIH1cbiB9XG5cbiAjZGVzY3JpcHRpb24tdGV4dHtcbiAgICAgbWFyZ2luOiAxMnB4ICFpbXBvcnRhbnQ7XG4gfVxuXG4gLmNhcmQtYm9keXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiB9XG5cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/event-card/event-card.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/event-card/event-card.component.ts ***!
    \****************************************************/

  /*! exports provided: EventCardComponent */

  /***/
  function srcAppEventCardEventCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventCardComponent", function () {
      return EventCardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/event.service */
    "./src/app/services/event.service.ts");

    var EventCardComponent =
    /*#__PURE__*/
    function () {
      function EventCardComponent(eventService) {
        _classCallCheck(this, EventCardComponent);

        this.eventService = eventService;
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.messageEventPartecipant = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.alreadyPartecipated = false;
      }

      _createClass(EventCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isUserPartecipating();
        }
      }, {
        key: "joinEvent",
        value: function joinEvent() {
          var _this46 = this;

          this.eventService.joinEvent(this.eventPost).subscribe(function (result) {
            _this46.eventService.getEvent(_this46.eventPost.id).subscribe(function (result) {
              _this46.eventPost = result;

              _this46.isUserPartecipating();
            });
          });
        }
      }, {
        key: "openMap",
        value: function openMap() {
          this.messageEvent.emit(this.eventPost.placeId);
        }
      }, {
        key: "isUserPartecipating",
        value: function isUserPartecipating() {
          if (this.eventPost.eventPartecipations.length) {
            var i = 0;

            while (i < this.eventPost.eventPartecipations.length) {
              if (this.eventPost.eventPartecipations[i].user.username === sessionStorage.getItem('username')) {
                this.alreadyPartecipated = true;
              }

              i++;
            }
          }
        }
      }, {
        key: "isCreatedByUser",
        value: function isCreatedByUser() {
          return this.eventPost.user.username === sessionStorage.getItem("username");
        }
      }, {
        key: "openPartecipantsModal",
        value: function openPartecipantsModal() {
          if (this.eventPost.eventPartecipations.length > 0) this.messageEventPartecipant.emit(this.eventPost.eventPartecipations);
        }
      }]);

      return EventCardComponent;
    }();

    EventCardComponent.ctorParameters = function () {
      return [{
        type: _services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EventCardComponent.prototype, "eventPost", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EventCardComponent.prototype, "personal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], EventCardComponent.prototype, "messageEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], EventCardComponent.prototype, "messageEventPartecipant", void 0);
    EventCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-event-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./event-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/event-card/event-card.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./event-card.component.css */
      "./src/app/event-card/event-card.component.css")).default]
    })], EventCardComponent);
    /***/
  },

  /***/
  "./src/app/list-item-user/list-item-user.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/list-item-user/list-item-user.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppListItemUserListItemUserComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".md-avatar {\n    vertical-align: middle;\n    width: 50px;\n    height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC1pdGVtLXVzZXIvbGlzdC1pdGVtLXVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtaXRlbS11c2VyL2xpc3QtaXRlbS11c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWQtYXZhdGFyIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/list-item-user/list-item-user.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/list-item-user/list-item-user.component.ts ***!
    \************************************************************/

  /*! exports provided: ListItemUserComponent */

  /***/
  function srcAppListItemUserListItemUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListItemUserComponent", function () {
      return ListItemUserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");

    var ListItemUserComponent =
    /*#__PURE__*/
    function () {
      function ListItemUserComponent(userService) {
        _classCallCheck(this, ListItemUserComponent);

        this.userService = userService;
      }

      _createClass(ListItemUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this47 = this;

          this.userService.getUserProfileImage(this.user.username).subscribe(function (result) {
            _this47.imagePath = result;
          });
        }
      }]);

      return ListItemUserComponent;
    }();

    ListItemUserComponent.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ListItemUserComponent.prototype, "user", void 0);
    ListItemUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list-item-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list-item-user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/list-item-user/list-item-user.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list-item-user.component.css */
      "./src/app/list-item-user/list-item-user.component.css")).default]
    })], ListItemUserComponent);
    /***/
  },

  /***/
  "./src/app/models/chat-message.ts":
  /*!****************************************!*\
    !*** ./src/app/models/chat-message.ts ***!
    \****************************************/

  /*! exports provided: ChatMessage, SocketChatMessage */

  /***/
  function srcAppModelsChatMessageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatMessage", function () {
      return ChatMessage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocketChatMessage", function () {
      return SocketChatMessage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ChatMessage =
    /*#__PURE__*/
    function () {
      function ChatMessage(userFrom, userTo, content) {
        _classCallCheck(this, ChatMessage);

        this.from = userFrom;
        this.to = userTo;
        this.content = content;
      }

      _createClass(ChatMessage, [{
        key: "getContent",
        value: function getContent() {
          return this.content;
        }
      }, {
        key: "getUserFrom",
        value: function getUserFrom() {
          return this.from;
        }
      }, {
        key: "getUserTo",
        value: function getUserTo() {
          return this.to;
        }
      }]);

      return ChatMessage;
    }();

    var SocketChatMessage = function SocketChatMessage() {
      _classCallCheck(this, SocketChatMessage);
    };
    /***/

  },

  /***/
  "./src/app/models/personal-card/personal-card.ts":
  /*!*******************************************************!*\
    !*** ./src/app/models/personal-card/personal-card.ts ***!
    \*******************************************************/

  /*! exports provided: PersonalCard */

  /***/
  function srcAppModelsPersonalCardPersonalCardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonalCard", function () {
      return PersonalCard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _user_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../user/user.model */
    "./src/app/models/user/user.model.ts");
    /* harmony import */


    var _wallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../wallet */
    "./src/app/models/wallet.ts");

    var PersonalCard = function PersonalCard() {
      _classCallCheck(this, PersonalCard);

      this.user = new _user_user_model__WEBPACK_IMPORTED_MODULE_1__["User"]("", "");
      this.wallet = new _wallet__WEBPACK_IMPORTED_MODULE_2__["Wallet"]();
    };
    /***/

  },

  /***/
  "./src/app/models/response-message/message-code.ts":
  /*!*********************************************************!*\
    !*** ./src/app/models/response-message/message-code.ts ***!
    \*********************************************************/

  /*! exports provided: MessageCode */

  /***/
  function srcAppModelsResponseMessageMessageCodeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageCode", function () {
      return MessageCode;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var MessageCode = function MessageCode() {
      _classCallCheck(this, MessageCode);
    };

    MessageCode.INVALID_CREDENTIAL = 1;
    MessageCode.INVALID_DATA = 2;
    MessageCode.SUCCESSFUL_LOGIN = 3;
    MessageCode.SUCCESSFUL_REGISTER = 4;
    MessageCode.USER_ALREADY_CREATED = 11;
    MessageCode.FIRST_LOGIN = 13;
    MessageCode.PROPOSAL_CREATED = 14;
    MessageCode.CFU_INSUFFICIENT = 15;
    MessageCode.INCOMPLETE_REGISTER = 16;
    MessageCode.TODO_CREATED = 6;
    MessageCode.EVENT_CREATED = 17;
    /***/
  },

  /***/
  "./src/app/models/user/user.model.ts":
  /*!*******************************************!*\
    !*** ./src/app/models/user/user.model.ts ***!
    \*******************************************/

  /*! exports provided: User */

  /***/
  function srcAppModelsUserUserModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var User =
    /*#__PURE__*/
    function () {
      function User(username, password) {
        _classCallCheck(this, User);

        this.username = username;
        this.password = password;
        this.name = '';
        this.surname = '';
        this.email = '';
      }

      _createClass(User, [{
        key: "getUsername",
        value: function getUsername() {
          return this.username;
        }
      }, {
        key: "getPassword",
        value: function getPassword() {
          return this.password;
        }
      }, {
        key: "setPassword",
        value: function setPassword(password) {
          this.password = password;
        }
      }, {
        key: "setUsername",
        value: function setUsername(username) {
          this.username = username;
        }
      }, {
        key: "getName",
        value: function getName() {
          return this.name;
        }
      }, {
        key: "getSurname",
        value: function getSurname() {
          return this.surname;
        }
      }, {
        key: "getEmail",
        value: function getEmail() {
          return this.email;
        }
      }]);

      return User;
    }();
    /***/

  },

  /***/
  "./src/app/models/wallet.ts":
  /*!**********************************!*\
    !*** ./src/app/models/wallet.ts ***!
    \**********************************/

  /*! exports provided: Wallet */

  /***/
  function srcAppModelsWalletTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Wallet", function () {
      return Wallet;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Wallet = function Wallet() {
      _classCallCheck(this, Wallet);
    };
    /***/

  },

  /***/
  "./src/app/search/search.component.css":
  /*!*********************************************!*\
    !*** ./src/app/search/search.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSearchSearchComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@media screen and (min-width: 992px) {\n    .container-fluid{\n        margin-left: 13vw; \n        width: 87vw !important;\n    }\n    \n  }\n\n::ng-deep  .mat-form-field-infix {\n    padding: 0em 0;\n    border: 0px;\n  }\n\n.mat-form-field-appearance-legacy .mat-form-field-wrapper{\n    padding: 0px !important;\n  }\n\ninput{\n      height: 250px;\n  }\n\n::ng-deep .mat-focused .mat-form-field-label {\n    /*change color of label*/\n    color: white !important;\n   }\n\n::ng-deep.mat-form-field-underline {\n    /*change color of underline*/\n    background-color: white !important;\n  }\n\n::ng-deep.mat-form-field-ripple {\n   /*change color of underline when focused*/\n   background-color: white !important;;\n  }\n\n::ng-deep.cdk-overlay-pane{\n      margin-top: 5px !important;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSSxpQkFBaUI7UUFDakIsc0JBQXNCO0lBQzFCOztFQUVGOztBQUVGO0lBQ0ksY0FBYztJQUNkLFdBQVc7RUFDYjs7QUFFQTtJQUNFLHVCQUF1QjtFQUN6Qjs7QUFHQTtNQUNJLGFBQWE7RUFDakI7O0FBRUE7SUFDRSx3QkFBd0I7SUFDeEIsdUJBQXVCO0dBQ3hCOztBQUVBO0lBQ0MsNEJBQTRCO0lBQzVCLGtDQUFrQztFQUNwQzs7QUFFQTtHQUNDLHlDQUF5QztHQUN6QyxrQ0FBa0M7RUFDbkM7O0FBRUE7TUFDSSwwQkFBMEI7RUFDOUIiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICAgIC5jb250YWluZXItZmx1aWR7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxM3Z3OyBcbiAgICAgICAgd2lkdGg6IDg3dncgIWltcG9ydGFudDtcbiAgICB9XG4gICAgXG4gIH1cblxuOjpuZy1kZWVwICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgIHBhZGRpbmc6IDBlbSAwO1xuICAgIGJvcmRlcjogMHB4O1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC13cmFwcGVye1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICB9XG4gIFxuXG4gIGlucHV0e1xuICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgfVxuXG4gIDo6bmctZGVlcCAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAvKmNoYW5nZSBjb2xvciBvZiBsYWJlbCovXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICB9XG4gIFxuICAgOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICB9IFxuICBcbiAgOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUgd2hlbiBmb2N1c2VkKi9cbiAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7O1xuICB9XG5cbiAgOjpuZy1kZWVwLmNkay1vdmVybGF5LXBhbmV7XG4gICAgICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcbiAgfVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/search/search.component.ts":
  /*!********************************************!*\
    !*** ./src/app/search/search.component.ts ***!
    \********************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcAppSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var SearchComponent =
    /*#__PURE__*/
    function () {
      function SearchComponent(userService, router) {
        _classCallCheck(this, SearchComponent);

        this.userService = userService;
        this.router = router;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.searchString = '';
      }

      _createClass(SearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "search",
        value: function search() {
          var _this48 = this;

          if (this.searchString.length > 2) {
            //chiamata al server con i nomi
            this.userService.getUsernameStartedWithString(this.searchString).subscribe(function (result) {
              _this48.options = result;
            }, function (error) {});
          } else {
            this.options = [];
          }
        }
      }, {
        key: "reset",
        value: function reset() {
          if (this.searchString.length < 3) {
            this.options = [];
          }
        }
      }, {
        key: "confirmSearch",
        value: function confirmSearch(option) {
          console.log(option);
          this.router.navigateByUrl('/show-profile/' + option);
        }
      }]);

      return SearchComponent;
    }();

    SearchComponent.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-search',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./search.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./search.component.css */
      "./src/app/search/search.component.css")).default]
    })], SearchComponent);
    /***/
  },

  /***/
  "./src/app/services/category.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/category.service.ts ***!
    \**********************************************/

  /*! exports provided: CategoryService */

  /***/
  function srcAppServicesCategoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryService", function () {
      return CategoryService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _constants_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../constants/constant */
    "./src/app/constants/constant.ts");

    var CategoryService =
    /*#__PURE__*/
    function () {
      function CategoryService(httpClient) {
        _classCallCheck(this, CategoryService);

        this.httpClient = httpClient;
      }

      _createClass(CategoryService, [{
        key: "getAllCategories",
        value: function getAllCategories() {
          return this.httpClient.get("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/all-categories"));
        }
      }]);

      return CategoryService;
    }();

    CategoryService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CategoryService);
    /***/
  },

  /***/
  "./src/app/services/chat.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/chat.service.ts ***!
    \******************************************/

  /*! exports provided: ChatService */

  /***/
  function srcAppServicesChatServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatService", function () {
      return ChatService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var stompjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! stompjs */
    "./node_modules/stompjs/index.js");
    /* harmony import */


    var stompjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(stompjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var sockjs_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! sockjs-client */
    "./node_modules/sockjs-client/lib/entry.js");
    /* harmony import */


    var sockjs_client__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _constants_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../constants/constant */
    "./src/app/constants/constant.ts");
    /* harmony import */


    var _models_chat_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../models/chat-message */
    "./src/app/models/chat-message.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ChatService =
    /*#__PURE__*/
    function () {
      function ChatService(httpClient) {
        var _this49 = this;

        _classCallCheck(this, ChatService);

        this.httpClient = httpClient;
        this.stompClient = null;
        this.connected = false;
        this.socketChatMessage = new _models_chat_message__WEBPACK_IMPORTED_MODULE_6__["SocketChatMessage"]();
        this.socketChatMessageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](this.socketChatMessage);
        this.statusSubject = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](this.status);
        this.statusSubject.subscribe(function (result) {
          if (result === 'disconnected') {
            console.log("Tentativo di riconnessione in corso!");
            setTimeout(function () {
              _this49.connect();
            }, 5000);
          } else if (result === 'connected') {
            console.log("non devo fa niente");
          }
        });
        this.connect();
      }

      _createClass(ChatService, [{
        key: "connect",
        value: function connect() {
          var socket = new sockjs_client__WEBPACK_IMPORTED_MODULE_2__("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_5__["API_URL"], "/gs-guide-websocket"));
          this.stompClient = stompjs__WEBPACK_IMPORTED_MODULE_1__["over"](socket);

          var _this = this;

          _this.stompClient.connect({
            "Auth": sessionStorage.getItem("token")
          }, function (frame) {
            status = 'connected';

            _this.statusSubject.next(status);

            _this.stompClient.subscribe("/user/queue/reply", function (frame) {
              console.log(frame);
              var chatMessage = JSON.parse(frame.body);

              _this.updateSocketChatMessage(chatMessage);
            });
          }, function () {
            status = 'disconnected';

            _this.statusSubject.next(status);
          });
        }
      }, {
        key: "reconnect",
        value: function reconnect() {
          var socket = new sockjs_client__WEBPACK_IMPORTED_MODULE_2__("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_5__["API_URL"], "/gs-guide-websocket"));
          this.stompClient = stompjs__WEBPACK_IMPORTED_MODULE_1__["over"](socket);

          var _this = this;

          _this.stompClient.connect({
            "Auth": sessionStorage.getItem("token")
          }, function (frame) {
            clearInterval(_this.interval);

            _this.stompClient.subscribe("/user/queue/reply", function (frame) {
              console.log(frame);
              var chatMessage = JSON.parse(frame.body);

              _this.updateSocketChatMessage(chatMessage);
            });
          });
        }
      }, {
        key: "disconnect",
        value: function disconnect() {
          if (this.stompClient != null) {
            this.stompClient.disconnect();
          }
        }
      }, {
        key: "test",
        value: function test() {
          console.log("CIAO");
        }
      }, {
        key: "sendChatMessage",
        value: function sendChatMessage(dest, message) {
          this.stompClient.send("/app/send", {}, JSON.stringify({
            'userTo': dest,
            'content': message
          }));
        }
      }, {
        key: "updateSocketChatMessage",
        value: function updateSocketChatMessage(chatMessage) {
          this.socketChatMessageSubject.next(chatMessage);
        }
      }]);

      return ChatService;
    }();

    ChatService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
      providedIn: 'root'
    })], ChatService);
    /***/
  },

  /***/
  "./src/app/services/event.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/event.service.ts ***!
    \*******************************************/

  /*! exports provided: EventService */

  /***/
  function srcAppServicesEventServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventService", function () {
      return EventService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _constants_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../constants/constant */
    "./src/app/constants/constant.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var EventService =
    /*#__PURE__*/
    function () {
      function EventService(httpCLient) {
        _classCallCheck(this, EventService);

        this.httpCLient = httpCLient;
        this.eventCreationResponse = -1;
        this.eventResponseMessage = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.eventCreationResponse);
      }

      _createClass(EventService, [{
        key: "setEventCreationResponse",
        value: function setEventCreationResponse(messageCode) {
          this.eventResponseMessage.next(messageCode);
        }
      }, {
        key: "createEvent",
        value: function createEvent(event) {
          return this.httpCLient.post("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/create-event"), event);
        }
      }, {
        key: "getActiveEvents",
        value: function getActiveEvents() {
          return this.httpCLient.get("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/active-event-list"));
        }
      }, {
        key: "joinEvent",
        value: function joinEvent(event) {
          return this.httpCLient.post("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/event/join-event"), event);
        }
      }, {
        key: "getMyEventList",
        value: function getMyEventList() {
          return this.httpCLient.get("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/event/my-events"));
        }
      }, {
        key: "getEventListByUsername",
        value: function getEventListByUsername(username) {
          return this.httpCLient.get("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/event-list/users/") + username);
        }
      }, {
        key: "handleAddressChange",
        value: function handleAddressChange($event) {
          console.log($event);
        }
      }, {
        key: "getEvent",
        value: function getEvent(id) {
          return this.httpCLient.get("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/event/get-event/").concat(id));
        }
      }, {
        key: "getMyJoinedEvents",
        value: function getMyJoinedEvents() {
          return this.httpCLient.get("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/event/get-my-joined-events"));
        }
      }]);

      return EventService;
    }();

    EventService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    EventService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], EventService);
    /***/
  },

  /***/
  "./src/app/services/http-interceptor.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/services/http-interceptor.service.ts ***!
    \******************************************************/

  /*! exports provided: HttpInterceptorService */

  /***/
  function srcAppServicesHttpInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpInterceptorService", function () {
      return HttpInterceptorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HttpInterceptorService =
    /*#__PURE__*/
    function () {
      function HttpInterceptorService() {
        _classCallCheck(this, HttpInterceptorService);
      }

      _createClass(HttpInterceptorService, [{
        key: "intercept",
        value: function intercept(request, next) {
          var token = sessionStorage.getItem("token");
          var username = sessionStorage.getItem("username");

          if (token && username) {
            request = request.clone({
              setHeaders: {
                Authorization: token
              }
            });
          }

          return next.handle(request);
        }
      }]);

      return HttpInterceptorService;
    }();

    HttpInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], HttpInterceptorService);
    /***/
  },

  /***/
  "./src/app/services/login-authentication.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/services/login-authentication.service.ts ***!
    \**********************************************************/

  /*! exports provided: LoginAuthenticationService */

  /***/
  function srcAppServicesLoginAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginAuthenticationService", function () {
      return LoginAuthenticationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _constants_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../constants/constant */
    "./src/app/constants/constant.ts");

    var LoginAuthenticationService =
    /*#__PURE__*/
    function () {
      function LoginAuthenticationService(httpClient) {
        _classCallCheck(this, LoginAuthenticationService);

        this.httpClient = httpClient;
      }

      _createClass(LoginAuthenticationService, [{
        key: "executeLoginAuthentication",
        value: function executeLoginAuthentication(user) {
          return this.httpClient.post("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/authenticate-user"), user);
        }
      }, {
        key: "isUserLoggedIn",
        value: function isUserLoggedIn() {
          return sessionStorage.getItem("username");
        }
      }, {
        key: "isFirstLogin",
        value: function isFirstLogin() {
          return sessionStorage.getItem("firstLogin");
        }
      }]);

      return LoginAuthenticationService;
    }();

    LoginAuthenticationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    LoginAuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoginAuthenticationService);
    /***/
  },

  /***/
  "./src/app/services/refresh.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/refresh.service.ts ***!
    \*********************************************/

  /*! exports provided: RefreshService */

  /***/
  function srcAppServicesRefreshServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RefreshService", function () {
      return RefreshService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var RefreshService =
    /*#__PURE__*/
    function () {
      function RefreshService() {
        _classCallCheck(this, RefreshService);

        this.todoRefresh = false;
        this.eventRefresh = false;
        this.todoRefreshMessage = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.todoRefresh);
        this.eventRefreshMessage = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.eventRefresh);
      }

      _createClass(RefreshService, [{
        key: "refreshTodoBoard",
        value: function refreshTodoBoard() {
          this.todoRefreshMessage.next(true);
        }
      }, {
        key: "refreshEventBoard",
        value: function refreshEventBoard() {
          this.eventRefreshMessage.next(true);
        }
      }]);

      return RefreshService;
    }();

    RefreshService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], RefreshService);
    /***/
  },

  /***/
  "./src/app/services/register.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/register.service.ts ***!
    \**********************************************/

  /*! exports provided: RegisterService */

  /***/
  function srcAppServicesRegisterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterService", function () {
      return RegisterService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _constants_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../constants/constant */
    "./src/app/constants/constant.ts");

    var RegisterService =
    /*#__PURE__*/
    function () {
      function RegisterService(httpClient) {
        _classCallCheck(this, RegisterService);

        this.httpClient = httpClient;
      }

      _createClass(RegisterService, [{
        key: "executeUserRegistration",
        value: function executeUserRegistration(user) {
          return this.httpClient.post("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/register-user"), user);
        }
      }, {
        key: "completeUserRegister",
        value: function completeUserRegister(personalCard) {
          return this.httpClient.post("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/complete-register"), personalCard);
        }
      }]);

      return RegisterService;
    }();

    RegisterService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    RegisterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], RegisterService);
    /***/
  },

  /***/
  "./src/app/services/route-guard.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/route-guard.service.ts ***!
    \*************************************************/

  /*! exports provided: RouteGuardService */

  /***/
  function srcAppServicesRouteGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RouteGuardService", function () {
      return RouteGuardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login-authentication.service */
    "./src/app/services/login-authentication.service.ts");

    var RouteGuardService =
    /*#__PURE__*/
    function () {
      function RouteGuardService(loginAuth, router) {
        _classCallCheck(this, RouteGuardService);

        this.loginAuth = loginAuth;
        this.router = router;
      }

      _createClass(RouteGuardService, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          if (this.loginAuth.isUserLoggedIn()) {
            return true;
          }

          this.router.navigate(['login']);
          return false;
        }
      }]);

      return RouteGuardService;
    }();

    RouteGuardService.ctorParameters = function () {
      return [{
        type: _login_authentication_service__WEBPACK_IMPORTED_MODULE_3__["LoginAuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    RouteGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], RouteGuardService);
    /***/
  },

  /***/
  "./src/app/services/todo.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/todo.service.ts ***!
    \******************************************/

  /*! exports provided: TodoService */

  /***/
  function srcAppServicesTodoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoService", function () {
      return TodoService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _constants_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../constants/constant */
    "./src/app/constants/constant.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var TodoService =
    /*#__PURE__*/
    function () {
      function TodoService(httpClient) {
        _classCallCheck(this, TodoService);

        this.httpClient = httpClient;
        this.todoCreationResponse = -1;
        this.todoResponseMessage = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.todoCreationResponse);
      }

      _createClass(TodoService, [{
        key: "setTodoCreationResponse",
        value: function setTodoCreationResponse(messageCode) {
          this.todoResponseMessage.next(messageCode);
        }
      }, {
        key: "createTodo",
        value: function createTodo(todo) {
          return this.httpClient.post("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/create-todo"), todo);
        }
      }, {
        key: "getMyTodoList",
        value: function getMyTodoList(state) {
          return this.httpClient.get("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/my-todo-list/") + state);
        }
      }, {
        key: "getTodoListByUserAndState",
        value: function getTodoListByUserAndState(username, state) {
          return this.httpClient.get("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/todo-list/users/") + username + "/state/" + state);
        }
      }, {
        key: "getProfileTodoList",
        value: function getProfileTodoList(username) {
          return this.httpClient.get("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/profile-todo-list/users/") + username);
        }
      }, {
        key: "deleteTodo",
        value: function deleteTodo(todoId) {
          return this.httpClient.delete("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/delete-todo/").concat(todoId));
        }
      }, {
        key: "getTodo",
        value: function getTodo(todoId) {
          return this.httpClient.get("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/get-todo/").concat(todoId));
        }
      }, {
        key: "getGenericTodo",
        value: function getGenericTodo(todoId) {
          return this.httpClient.get("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/get-generic-todo/").concat(todoId));
        }
      }, {
        key: "updateTodo",
        value: function updateTodo(todo) {
          return this.httpClient.put("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/update-todo"), todo);
        }
      }, {
        key: "getAllTodo",
        value: function getAllTodo() {
          return this.httpClient.get("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/active-todo-list"));
        }
      }, {
        key: "sendProposal",
        value: function sendProposal(todo) {
          return this.httpClient.post("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/create-proposal"), todo);
        }
      }, {
        key: "acceptProposal",
        value: function acceptProposal(todo, proposalId) {
          return this.httpClient.post("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/accept-proposal/") + proposalId, todo);
        }
      }, {
        key: "refuseProposal",
        value: function refuseProposal(proposalId) {
          return this.httpClient.put("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/refuse-proposal/") + proposalId, null);
        }
      }, {
        key: "undoRefuseProposal",
        value: function undoRefuseProposal(proposalId) {
          return this.httpClient.put("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/undo-refuse-proposal/") + proposalId, null);
        }
      }, {
        key: "undoAcceptProposal",
        value: function undoAcceptProposal(todoId) {
          return this.httpClient.put("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/undo-accept-proposal/todo/") + todoId, null);
        }
      }, {
        key: "getJoinedTodo",
        value: function getJoinedTodo() {
          return this.httpClient.get("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/todo/get-joined-todo"));
        }
      }]);

      return TodoService;
    }();

    TodoService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    TodoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], TodoService);
    /***/
  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _constants_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../constants/constant */
    "./src/app/constants/constant.ts");
    /* harmony import */


    var _models_personal_card_personal_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/personal-card/personal-card */
    "./src/app/models/personal-card/personal-card.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(httpClient, _sanitizer) {
        _classCallCheck(this, UserService);

        this.httpClient = httpClient;
        this._sanitizer = _sanitizer;
        this.personalCard = new _models_personal_card_personal_card__WEBPACK_IMPORTED_MODULE_4__["PersonalCard"]();
        this.personalCardSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](this.personalCard);
      }

      _createClass(UserService, [{
        key: "getMyPersonalCard",
        value: function getMyPersonalCard() {
          var _this50 = this;

          return this.httpClient.get("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/my-personal-card")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) {
            data.imageUrl = _this50._sanitizer.bypassSecurityTrustResourceUrl(data.base64StringImage);

            _this50.updatePersonalCard(data);

            return data;
          }));
        }
      }, {
        key: "updatePersonalCard",
        value: function updatePersonalCard(result) {
          this.personalCardSubject.next(result);
        }
      }, {
        key: "getPersonalCard",
        value: function getPersonalCard() {
          return this.personalCardSubject.getValue();
        }
      }, {
        key: "getUserPersonalCard",
        value: function getUserPersonalCard(username) {
          var _this51 = this;

          return this.httpClient.get("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/user-personal-card/").concat(username)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) {
            data.imageUrl = _this51._sanitizer.bypassSecurityTrustResourceUrl(data.base64StringImage);
            return data;
          }));
        }
      }, {
        key: "followUser",
        value: function followUser(username) {
          return this.httpClient.post("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/user/follow-user"), username);
        }
      }, {
        key: "getUserFollowers",
        value: function getUserFollowers(username) {
          return this.httpClient.get("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/user/").concat(username, "/get-followers"));
        }
      }, {
        key: "getUserFollowing",
        value: function getUserFollowing(username) {
          return this.httpClient.get("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/user/").concat(username, "/get-following"));
        }
      }, {
        key: "getUserProfileImage",
        value: function getUserProfileImage(username) {
          return this.httpClient.get("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/user/").concat(username, "/get-image-profile"), {
            responseType: 'text'
          });
        }
      }, {
        key: "getUsernameStartedWithString",
        value: function getUsernameStartedWithString(partialUsername) {
          return this.httpClient.get("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/user/get-user-started-with/").concat(partialUsername));
        }
      }, {
        key: "getAllUsers",
        value: function getAllUsers() {
          return this.httpClient.get("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/user/get-all-users"));
        }
      }, {
        key: "getUsersImages",
        value: function getUsersImages(users) {
          return this.httpClient.post("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/user/get-users-images"), users);
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/francesco/Scrivania/DoneIT/doneit_frontend/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map