function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/admin-dashboard.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/admin-dashboard.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminDashboardAdminDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <app-sidebar class=\"col-12 col-md-3 col-lg-2\"></app-sidebar>\n    <div class=\"col-12 col-md-9 col-lg-10\">\n      <div class=\"row my-3\" *ngIf=\"summary\">\n        <div class=\"col-12 col-sm-6 col-lg-3 mb-2\">\n          <div class=\"card bg-warning\">\n            <div class=\"card-body\">\n              <div class=\"d-flex justify-content-between align-items-center\">\n                <h3>Sales</h3>\n                <fa name=\"money fa-2x text-white\"></fa>\n              </div>\n            </div>\n            <div class=\"card-footer\">\n              <div class=\"d-flex justify-content-between align-items-center\">\n                <a routerLink=\"/admin/orders\" class=\"btn p-0 m-0\">\n                  <fa name=\"info-circle\"></fa>\n                </a>\n                <h5>\n                  <span>NGN</span>\n                  {{summary.totalPayments | number}}\n                </h5>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-12 col-sm-6 col-lg-3 mb-2\">\n          <div class=\"card bg-warning\">\n            <div class=\"card-body\">\n              <div class=\"d-flex justify-content-between align-items-center\">\n                <h3>Books</h3>\n                <fa name=\"book fa-2x text-white\"></fa>\n              </div>\n            </div>\n            <div class=\"card-footer\">\n              <div class=\"d-flex justify-content-between align-items-center\">\n                <a routerLink=\"/admin/books\" class=\"btn p-0 m-0\">\n                  <fa name=\"info-circle\"></fa>\n                </a>\n                <h5>\n                  {{summary.totalBooks | number}}\n                </h5>\n              </div>\n\n            </div>\n          </div>\n        </div>\n        <div class=\"col-12 col-sm-6 col-lg-3 mb-2\">\n          <div class=\"card bg-warning\">\n            <div class=\"card-body\">\n              <div class=\"d-flex justify-content-between align-items-center\">\n                <h3>Students</h3>\n                <fa name=\"users fa-2x text-white\"></fa>\n              </div>\n            </div>\n            <div class=\"card-footer text-right\">\n              <div class=\"d-flex justify-content-between align-items-center\">\n                <a routerLink=\"/admin/students\" class=\"btn p-0 m-0\">\n                  <fa name=\"info-circle\"></fa>\n                </a>\n                <h5>\n                  {{summary.totalStudents | number}}\n                </h5>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-12 col-sm-6 col-lg-3 mb-2\">\n          <div class=\"card bg-warning\">\n            <div class=\"card-body\">\n              <div class=\"d-flex justify-content-between align-items-center\">\n                <h3>Lecturers</h3>\n                <fa name=\"users fa-2x text-white\"></fa>\n              </div>\n            </div>\n            <div class=\"card-footer text-right\">\n              <div class=\"d-flex justify-content-between align-items-center\">\n                <a routerLink=\"/admin/lecturers\" class=\"btn p-0 m-0\">\n                  <fa name=\"info-circle\"></fa>\n                </a>\n                <h5>\n                  {{summary.totalLecturers | number}}\n                </h5>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row mb-3\" *ngIf=\"notifications\">\n        <div class=\"col-12\">\n          <div class=\"card bg-light\">\n            <div class=\"card-header\">\n              <h5 class=\"\">\n                Notifications\n                <fa name=\"bell text-warning\"></fa>\n                <span class=\"badge badge-danger notify-badge\">\n                  {{notifications.length}}\n                </span>\n              </h5>\n            </div>\n            <div class=\"card-body\">\n              <div [class]=\"'alert alert-' + notification.type\" *ngFor=\"let notification of notifications;\">\n                <a class=\"close\" (click)=\"deleteNotification(notification.id)\" data-dismiss=\"alert\">\n                  <fa name=\"trash text-danger\"></fa>\n                </a>\n                {{notification.content}}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n      <div class=\"row mb-3\" *ngIf=\"notifications\">\n        <div class=\"col-12\">\n          <div class=\"card bg-light\">\n            <div class=\"card-header\">\n              <h5 class=\"\">\n                Unactivated Lecturer Accounts\n                <fa name=\"user text-warning\"></fa>\n              </h5>\n            </div>\n            <div class=\"card-body scroll-x\">\n              <table class=\"table table-hover text-muted\">\n                <thead>\n                  <tr>\n                    <th>#</th>\n                    <th>Name</th>\n                    <th>Email Address</th>\n                    <th>Department</th>\n                    <th>Action</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let account of unActivatedAccounts; index as i;\">\n                    <td>{{i + 1}}.</td>\n                    <td>\n                      {{account.lastname}}\n                      {{account.firstname}}\n                      {{account.othernames}}\n                    </td>\n                    <td>\n                      {{account.emailAddress}}\n                    </td>\n                    <td>\n                      {{account.Department.name}}\n                    </td>\n                    <td>\n                      <button class=\"btn btn-success btn-sm\" (click)=\"onActivate(account)\">\n                        activate\n                      </button>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/books/books.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/books/books.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminBooksBooksComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <app-sidebar class=\"col-12 col-md-3 col-lg-2\"></app-sidebar>\n    <div class=\"col-12 col-md-9 col-lg-10\">\n      <div class=\"row my-3\">\n        <div class=\"col-12 col-sm-6 mb-2\">\n          <button class=\"btn btn-warning\" data-toggle=\"collapse\" data-target=\"#author-manager\">\n            <fa name=\"cog\"></fa>\n            Manage Authors\n          </button>\n        </div>\n        <div class=\"col-12 col-sm-6 mb-2 text-md-right\">\n          <button class=\"btn btn-warning\" data-toggle=\"modal\" data-target=\"#new-book-modal\">\n            <fa name=\"plus\"></fa>\n            New Book\n          </button>\n        </div>\n        <div class=\"col-12\">\n          <div id=\"author-manager\" class=\"collapse mt-2\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <h5 class=\"card-title\">\n                  Authors Manager\n                </h5>\n              </div>\n              <div class=\"card-body\">\n                <select name=\"\" id=\"\" #authorListManager class=\"form-control custom-select\">\n                  <option value=\"\">Book Authors</option>\n                  <option [value]=\"author.id\" *ngFor=\"let author of authorList\">\n                    {{author.name}}\n                  </option>\n                </select>\n              </div>\n              <div class=\"card-footer text-center\">\n                <button class=\"btn btn-outline-success mr-2 mb-2\" data-toggle=\"modal\" data-target=\"#new-author\">\n                  <fa name=\"plus\"></fa>\n                  add\n                </button>\n                <button class=\"btn btn-outline-info mr-2 mb-2\" data-toggle=\"modal\" data-target=\"#edit-author\"\n                  (click)=\"initAuthorEdit({id: authorListManager.selectedOptions[0].value, name: authorListManager.selectedOptions[0].text})\">\n                  <fa name=\"edit\"></fa>\n                  edit\n                </button>\n                <button class=\"btn btn-outline-danger mr-2 mb-2\" data-toggle=\"modal\" data-target=\"#delete-author\"\n                  (click)=\"initAuthorDelete(authorListManager.selectedOptions[0].value)\">\n                  <fa name=\"trash\"></fa>\n                  delete\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row mb-3\">\n        <div class=\"col-12\">\n          <div class=\"card\">\n            <div class=\"card-body scroll-x\">\n              <table class=\"table table-hover table-striped text-muted\">\n                <thead>\n                  <tr>\n                    <th>\n                      SN\n                    </th>\n                    <th>\n                      Title\n                    </th>\n                    <th>\n                      Price (NGN)\n                    </th>\n                    <th>\n                      Author(s)\n                    </th>\n                    <th>\n                      In Stock\n                    </th>\n                    <th>\n                      <fa name=\"cog\"></fa>\n                      Action\n                    </th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let book of books;index as i;\">\n                    <td>{{i+1}}.</td>\n                    <td>{{book.title}}</td>\n                    <td>{{book.price | number}}</td>\n                    <td>\n                      <select class=\"form-control\">\n                        <option value=\"\" *ngFor=\"let author of book.authors\">{{author.name}}</option>\n                      </select>\n                    </td>\n                    <td>\n                      <button *ngIf=\"book.inStock\" class=\"btn btn-sm btn-success\">\n                        <fa name=\"check\"></fa>\n                      </button>\n                      <button *ngIf=\"!book.inStock\" class=\"btn btn-sm btn-danger\">\n                        <fa name=\"times\"></fa>\n                      </button>\n                    </td>\n                    <td>\n                      <div class=\"dropdown\">\n                        <a href=\"\" data-toggle=\"dropdown\" class=\"btn btn-sm btn-outline-secondary\">\n                          more\n                          <fa name=\"chevron-down\"></fa>\n                        </a>\n                        <div class=\"dropdown-menu dropdown-menu-right\">\n                          <button class=\"dropdown-item\" (click)=\"open(book)\">\n                            <fa name=\"edit mr-2\"></fa>\n                            Edit\n                          </button>\n                          <button class=\"dropdown-item\" (click)=\"onDeleteBook(book.id)\">\n                            <fa name=\"trash mr-2\"></fa>\n                            Delete\n                          </button>\n                        </div>\n                      </div>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"modal fade\" id=\"new-book-modal\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title text-muted\">\n          <fa name=\"plus-circle text-danger\"></fa>\n          New Book\n        </h5>\n        <a href=\"#\" class=\"close\" data-dismiss=\"modal\" #newBookModal>\n          &times;\n        </a>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"text-center\">\n          <div class=\"col-12 col-sm-9 col-md-8 col-lg-6 mx-auto\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <h5 class=\"text-muted\">Book Cover Page</h5>\n              </div>\n              <div class=\"card-body\">\n\n                <img *ngIf=\"selectedFile && selectedFile.src\" [src]=\"selectedFile.src\" alt=\"\" srcset=\"\"\n                  class=\"img-fluid img-thumbnail\">\n              </div>\n              <div class=\"card-footer\">\n                <input type=\"file\" #fileInput class=\"d-none\" (change)=\"onFileChanged(fileInput)\">\n                <button class=\"btn btn-outline-warning mr-2\" (click)=\"fileInput.click()\">\n                  Select Cover Page\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"mt-3\">\n\n          <form #newBookForm=\"ngForm\" action=\"\" (ngSubmit)=\"onSubmitNewBook()\">\n            <input type=\"hidden\" name=\"coverPage\" [(ngModel)]=\"newBook.coverPage\" required>\n            <div class=\"form-group\">\n              <input type=\"text\" placeholder=\"Title\" name=\"title\" #title=\"ngModel\" [(ngModel)]=\"newBook.title\"\n                class=\"form-control custom form-input\" required minlength=\"5\" maxlength=\"100\" />\n            </div>\n            <div class=\"form-group\">\n              <textarea type=\"text\" placeholder=\"Description...\" name=\"description\" #description=\"ngModel\"\n                [(ngModel)]=\"newBook.description\" class=\"form-control custom form-input\" required minlength=\"10\"\n                maxlength=\"300\" rows=\"2\"></textarea>\n            </div>\n            <div class=\"form-group\">\n              <input type=\"number\" placeholder=\"Price\" name=\"price\" [(ngModel)]=\"newBook.price\"\n                class=\"form-control custom form-input\" required pattern=\"^[0-9]{3,}$\" />\n            </div>\n            <div class=\"form-group input-group\">\n              <select name=\"authors\" class=\"form-control form-input custom custom-select\" #authorSelect\n                [(ngModel)]=\"newBook.authors\" required>\n                <option value=\"\">Select book author</option>\n                <option [value]=\"author.id\" *ngFor=\"let author of authorList\">{{author.name}}</option>\n              </select>\n\n              <div class=\"input-group-append\">\n                <button type=\"button\" class=\"btn btn-outline-success custom\"\n                  (click)=\"addAuthor({id: authorSelect.selectedOptions[0].value, name: authorSelect.selectedOptions[0].text})\">\n                  <fa name=\"plus mr-1\"></fa>\n                  add\n                </button>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"card\">\n                <div class=\"card-header p-1\">\n                  <h5 class=\"text-muted text-center\">\n                    Book Author(s)\n                  </h5>\n                </div>\n                <div class=\"card-body\">\n                  <div class=\"alert bg-light\" *ngFor=\"let author of selectedAuthors; index as i\">\n                    <a class=\"close\" (click)=\"deleteAuthor(i)\">\n                      <fa name=\"times\"></fa>\n                    </a>\n                    <p>{{author.name}}</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <select name=\"lecturerId\" class=\"form-control form-input custom custom-select\"\n                [(ngModel)]=\"newBook.lecturerId\" required>\n                <option value=\"\">Select supplier</option>\n                <option [value]=\"lecturer.id\" *ngFor=\"let lecturer of lecturerList\">\n                  {{lecturer.firstname}} {{lecturer.lastname}}\n                </option>\n              </select>\n            </div>\n\n            <div class=\"form-group\">\n              <button type=\"submit\" class=\"btn btn-success custom btn-block\" [disabled]=\"newBookForm.invalid\">\n                Save Book\n              </button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<div class=\"modal fade\" id=\"new-author\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title text-muted\">\n          <fa name=\"plus-circle text-danger\"></fa>\n          New Author\n        </h5>\n      </div>\n      <div class=\"modal-body\">\n        <form action=\"\" #newAuthorForm=\"ngForm\" (ngSubmit)=\"onSubmitNewAuthor(newAuthorForm.value)\">\n          <div *ngIf=\"isSendingRequest\" class=\"text-center\">\n            <label>\n              Saving...\n            </label>\n          </div>\n          <div *ngIf=\"errorMsgOnSaveAuthor\" class=\"text-center alert alert-danger\">\n            <label>\n              {{errorMsgOnSaveAuthor}}\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control form-input custom text-capitalize\" name=\"name\"\n              placeholder=\"Author Name\" [(ngModel)]=\"newAuthor.name\" required pattern=\"^[a-zA-Z]{3,}.*$\"\n              autocomplete=\"off\" />\n          </div>\n          <div class=\"d-flex justify-content-between\">\n            <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"newAuthorForm.invalid\">\n              save author\n              <fa name=\"archive\"></fa>\n            </button>\n            <button class=\"btn btn-danger\" data-dismiss=\"modal\">\n              cancel\n              <fa name=\"times-circle\"></fa>\n            </button>\n          </div>\n        </form>\n\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"modal fade\" id=\"edit-author\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title text-muted\">\n          <fa name=\"edit-circle text-info\"></fa>\n          Edit Author\n        </h5>\n      </div>\n      <div class=\"modal-body\">\n        <form action=\"\" #editAuthorForm=\"ngForm\" (ngSubmit)=\"onUpdateAuthor(editAuthorForm.value)\">\n          <div *ngIf=\"isSendingRequest\" class=\"text-center\">\n            <label>\n              Saving...\n            </label>\n          </div>\n          <div *ngIf=\"errorMsgOnSaveAuthor\" class=\"text-center alert alert-danger\">\n            <label>\n              {{errorMsgOnSaveAuthor}}\n            </label>\n          </div>\n\n          <div class=\"form-group\">\n            <input type=\"hidden\" name=\"id\" [(ngModel)]=\"editAuthor.id\" required />\n            <input type=\"text\" class=\"form-control form-input custom text-capitalize\" name=\"name\"\n              placeholder=\"Author Name\" [(ngModel)]=\"editAuthor.name\" required pattern=\"^[a-zA-Z]{3,}.*$\"\n              autocomplete=\"off\" />\n          </div>\n          <div class=\"d-flex justify-content-between\">\n            <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"editAuthorForm.invalid\">\n              update author\n              <fa name=\"archive\"></fa>\n            </button>\n            <button class=\"btn btn-danger\" data-dismiss=\"modal\">\n              cancel\n              <fa name=\"times-circle\"></fa>\n            </button>\n          </div>\n        </form>\n\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<div class=\"modal fade\" id=\"delete-author\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title text-muted\">\n          <fa name=\"trash text-danger\"></fa>\n          Delete Author\n        </h5>\n      </div>\n\n      <div class=\"modal-body\">\n        <div class=\"alert alert-info text-center\" *ngIf=\"actionStatus\">\n          {{actionStatus}}\n        </div>\n        <div class=\"alert alert-info\" *ngIf=\"isSendingRequest\">\n          Deleting ...\n        </div>\n        <p class=\"text-center\" *ngIf=\"actionStatus==''\">Are you sure you want to delete author?</p>\n      </div>\n      <div class=\"modal-footer\">\n        <div class=\"w-100 d-flex justify-content-between\">\n          <button class=\"btn btn-outline-danger\" type=\"button\" (click)=\"onDeleteAuthor()\">\n            delete\n            <fa name=\"trash\"></fa>\n          </button>\n          <button class=\"btn btn-danger\" type=\"button\" data-dismiss=\"modal\">\n            cancel\n            <fa name=\"times-circle\"></fa>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #EditBook>\n  <app-edit-book-modal></app-edit-book-modal>\n</ng-template>\n<ng-template #DeleteWarning>\n  <app-warning-dialog></app-warning-dialog>\n</ng-template>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/change-order-status-modal/change-order-status-modal.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/change-order-status-modal/change-order-status-modal.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminChangeOrderStatusModalChangeOrderStatusModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Change Order Status</h4>\n  <label class=\"close\" aria-label=\"close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <fa name=\"times fa-1x\"></fa>\n  </label>\n</div>\n<div class=\"modal-body\">\n  <form #changeStatusForm=\"ngForm\" (ngSubmit)=\"onSubmit(order)\">\n    <div class=\"form-group\">\n      <select name=\"status\" [(ngModel)]=\"order.status\" class=\"form-control custom custom-select\">\n        <option value=\"pending\">pending</option>\n        <option value=\"delivered\">delivered</option>\n      </select>\n    </div>\n    <div class=\"form-group\">\n      <button type=\"submit\" class=\"btn btn-success btn-block custom\">\n        Change Status\n      </button>\n    </div>\n  </form>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"activeModal.close('Close click')\">Cancel</button>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/edit-book-modal/edit-book-modal.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/edit-book-modal/edit-book-modal.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminEditBookModalEditBookModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">{{title}}</h4>\n  <label class=\"close\" aria-label=\"close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <fa name=\"times fa-1x\"></fa>\n  </label>\n</div>\n<div class=\"modal-body\">\n  <p class=\"text-center\">\n    <img src=\"{{editBook.coverPage}}\" alt=\"Cover Page\" class=\"img-fluid mx-auto\" height=\"250\"/>\n  </p>\n  <form action=\"\" #editBookForm=\"ngForm\" (ngSubmit)=\"onUpdateBook(editBookForm.value)\">\n    <input type=\"hidden\" name=\"id\" value=\"editBook.id\" [(ngModel)]=\"editBook.id\" />\n    <div class=\"form-group\">\n      <input type=\"text\" name=\"title\" class=\"form-control form-input\" placeholder=\"Title\" [(ngModel)]=\"editBook.title\"\n        [value]=\"editBook.title\" required />\n    </div>\n    <div class=\"form-group\">\n      <textarea name=\"description\" class=\"form-control form-input\" placeholder=\"description\"\n        [(ngModel)]=\"editBook.description\" required>{{editBook.description}}</textarea>\n    </div>\n    <div class=\"form-group\">\n      <input type=\"text\" name=\"price\" class=\"form-control form-input\" placeholder=\"Title\" [(ngModel)]=\"editBook.price\"\n        [value]=\"editBook.price\" required maxlength=\"10\" min=\"3\" />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"inStock\">In Stock</label>\n      <select name=\"inStock\" class=\"form-control form-input\" [(ngModel)]=\"editBook.inStock\">\n        <option [ngValue]=\"false\">\n          no\n        </option>\n        <option [ngValue]=\"true\">\n          yes\n        </option>\n      </select>\n    </div>\n    <div class=\"form-group\">\n      <select id=\"\" class=\"form-control\" aria-readonly=\"true\" readonly>\n        <option *ngFor=\"let author of editBook.authors\">\n          {{author.name}}\n        </option>\n      </select>\n    </div>\n    <div class=\"form-group\">\n      <button type=\"submit\" class=\"btn btn-block btn-outline-success\">\n        Update\n      </button>\n    </div>\n  </form>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"activeModal.close('Close click')\">Cancel</button>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/lecturers/lecturers.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/lecturers/lecturers.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminLecturersLecturersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <app-sidebar class=\"col-12 col-md-3 col-lg-2\"></app-sidebar>\n    <div class=\"col-12 col-md-9 col-lg-10\">\n      <div class=\"mt-3\">\n        <ul class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\">\n            <a routerLink=\"/admin/dashboard\">dashboard</a>\n          </li>\n          <li class=\"breadcrumb-item\">\n            lecturers\n          </li>\n        </ul>\n      </div>\n      <div class=\"card my-3\">\n        <div class=\"card-header bg-white\">\n          <form action=\"\" #searchLecturer=\"ngForm\" (ngSubmit)=\"onSearch(searchLecturer.value)\">\n            <input type=\"text\" name=\"searchquery\" class=\"form-control\" placeholder=\"search for lecturer by (name)\"\n              [(ngModel)]=\"searchquery\" autocomplete=\"off\" />\n          </form>\n        </div>\n        <div class=\"card-body scrollable p-0\">\n          <table class=\"table table-hover table-striped\">\n            <caption class=\"text-uppercase\">Lecturers Account</caption>\n            <thead>\n              <tr>\n                <th>#</th>\n                <th>Last Name</th>\n                <th>First Name</th>\n                <th>Other Names</th>\n                <th>\n                  <fa name=\"user\"></fa> Profile\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let lecturer of lecturers; index as i;\">\n                <td>{{i+1}}.</td>\n                <td>\n                  {{lecturer.lastname}}\n                </td>\n                <td>\n                  {{lecturer.firstname}}\n                </td>\n                <td>\n                  {{lecturer.othernames}}\n                </td>\n                <td>\n                  <button class=\"btn btn-sm btn-success\" (click)=\"onViewProfile(lecturer)\">\n                    Profile\n                    <fa name=\"user\"></fa>\n                  </button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/orders/orders.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/orders/orders.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminOrdersOrdersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <app-sidebar class=\"col-12 col-md-3 col-lg-2\"></app-sidebar>\n    <div class=\"col-12 col-md-9 col-lg-10\">\n      <div class=\"mt-3\">\n        <ul class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\">\n            <a routerLink=\"/admin/dashboard\">dashboard</a>\n          </li>\n          <li class=\"breadcrumb-item\">\n            orders\n          </li>\n        </ul>\n      </div>\n      <div class=\"card my-3\">\n        <div class=\"card-header bg-white\">\n          <form action=\"\">\n            <input type=\"text\" name=\"searchquery\" class=\"form-control\" placeholder=\"search for order by order no\"\n              autocomplete=\"off\" />\n          </form>\n        </div>\n        <div class=\"card-body scroll-x\">\n          <table class=\"table table-hover table-striped\">\n            <caption class=\"text-uppercase\">Book Orders</caption>\n            <thead>\n              <tr>\n                <th>#</th>\n                <th>Order No</th>\n                <th>Student</th>\n                <th>Payment Ref</th>\n                <th>Amount Paid</th>\n                <th>Status</th>\n                <th>Order Date</th>\n                <th>\n                  <fa name=\"cog\"></fa> Action\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let order of orders; index as i;\">\n                <td>{{i+1}}.</td>\n                <td>{{order.id}}</td>\n                <td>{{order.Student.matricNo}}</td>\n                <td>{{order.paymentRef}}</td>\n                <td>{{order.totalAmount}}</td>\n                <td>{{order.status}}</td>\n                <td>{{order.createdAt | date}}</td>\n                <td>\n                  <button class=\"btn btn-info btn-sm\" data-toggle=\"dropdown\">\n                    more\n                  </button>\n                  <div class=\"dropdown-menu dropdown-menu-right\">\n                    <a href=\"\" class=\"dropdown-item\">\n                      <fa name=\"info-circle\"></fa>\n                      Items ordered\n                    </a>\n                    <a href=\"javascript: void(0)\" class=\"dropdown-item\" (click)=\"onChangeStatus(order)\">\n                      <fa name=\"undo\"></fa>\n                      Change Status\n                    </a>\n                  </div>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/sidebar/sidebar/sidebar.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/sidebar/sidebar/sidebar.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminSidebarSidebarSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ul class=\"nav nav-pills flex-column menu-widget-side\">\n  <li class=\"nav-item\">\n    <a routerLink=\"/admin/dashboard\" class=\"nav-link\">\n      <fa name=\"th mr-2\"></fa>\n      Dashboard\n    </a>\n  </li>\n  <li class=\"nav-item\">\n    <a routerLink=\"/admin/books\" class=\"nav-link\">\n      <fa name=\"book mr-2\"></fa>\n      Books\n    </a>\n  </li>\n  <li class=\"nav-item\">\n    <a routerLink=\"/admin/students\" class=\"nav-link\">\n      <fa name=\"users mr-2\"></fa>\n      Students\n    </a>\n  </li>\n  <li class=\"nav-item\">\n    <a routerLink=\"/admin/lecturers\" class=\"nav-link\">\n      <fa name=\"users mr-2\"></fa>\n      Lecturers\n    </a>\n  </li>\n  <li class=\"nav-item\">\n    <a routerLink=\"/admin/orders\" class=\"nav-link\">\n      <fa name=\"list-alt mr-2\"></fa>\n      Orders\n    </a>\n  </li>\n</ul>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/students/students.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/students/students.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminStudentsStudentsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <app-sidebar class=\"col-12 col-md-3 col-lg-2\"></app-sidebar>\n    <div class=\"col-12 col-md-9 col-lg-10\">\n      <div class=\"mt-3\">\n        <ul class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\">\n            <a routerLink=\"/admin/dashboard\">dashboard</a>\n          </li>\n          <li class=\"breadcrumb-item\">\n            students\n          </li>\n        </ul>\n      </div>\n      <div class=\"card my-3\">\n        <div class=\"card-header bg-white\">\n          <form #searchStudent=\"ngForm\" action=\"\" (ngSubmit)=\"onSearch(searchStudent.value)\">\n            <input type=\"text\" name=\"searchquery\" class=\"form-control\" [(ngModel)]=\"searchquery\"\n              placeholder=\"search for student by (name or matric no)\" autocomplete=\"off\" />\n          </form>\n        </div>\n        <div class=\"card-body scroll-x\">\n          <table class=\"table table-hover table-striped\">\n            <caption class=\"text-uppercase\">Students Account</caption>\n            <thead>\n              <tr>\n                <th>#</th>\n                <th>Last Name</th>\n                <th>First Name</th>\n                <th>Other Names</th>\n                <th>Matric No.</th>\n                <th>\n                  <fa name=\"user\"></fa> Profile\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let student of students; index as i;\">\n                <td>{{i+1}}</td>\n                <td class=\"text-capitalize\">{{student.lastname}}</td>\n                <td class=\"text-capitalize\">{{student.firstname}}</td>\n                <td class=\"text-capitalize\">{{student.othernames}}</td>\n                <td class=\"text-uppercase\">{{student.matricNo}}</td>\n                <td>\n                  <button class=\"btn btn-sm btn-success\" (click)=\"onViewProfile(student)\">\n                    Profile\n                    <fa name=\"user\"></fa>\n                  </button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/transactions/transactions.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/transactions/transactions.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminTransactionsTransactionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <app-sidebar class=\"col-12 col-md-3 col-lg-2\"></app-sidebar>\n    <div class=\"col-12 col-md-9 col-lg-10\">\n      <div class=\"mt-3\">\n        <ul class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\">\n            <a routerLink=\"/admin/dashboard\">dashboard</a>\n          </li>\n          <li class=\"breadcrumb-item\">\n            transactions\n          </li>\n        </ul>\n      </div>\n      <div class=\"card my-3\">\n        <div class=\"card-header bg-white\">\n          <form action=\"\">\n            <input type=\"text\" name=\"searchquery\" class=\"form-control\"\n              placeholder=\"search for student by (name or matric no)\" autocomplete=\"off\" />\n          </form>\n        </div>\n        <div class=\"card-body scrollable\">\n          <table class=\"table table-hover table-striped\">\n            <caption class=\"text-uppercase\">Transactions</caption>\n            <thead>\n              <tr>\n                <th>#</th>\n                <th>Last Name</th>\n                <th>First Name</th>\n                <th>Other Names</th>\n                <th>Matric No.</th>\n                <th>\n                  <fa name=\"user\"></fa> Profile\n                </th>\n              </tr>\n            </thead>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
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


    __webpack_exports__["default"] = "<!-- Top NavBar -->\n<nav class=\"navbar navbar-expand-md navbar-light bg-light text-dark navbar-custom\">\n  <a routerLink=\"/\" class=\"navbar-brand\">\n    <img src=\"assets/logo.png\" alt=\"logo\" class=\"logo\">\n    Bookshop\n  </a>\n\n  <button class=\"navbar-toggler navbar-toggler-custom  bg-dark\" data-toggle=\"collapse\" data-target=\"#menuPane\">\n    <span class=\"line-1\"></span>\n    <span class=\"line-2\"></span>\n    <span class=\"line-3\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"menuPane\">\n\n    <ul class=\"navbar-nav ml-md-auto menu-bar\">\n      <li class=\"nav-item\">\n        <a routerLink=\"/\" class=\"nav-link font-weight-bold\">\n          <fa name=\"home text-warning\"></fa>\n          Home\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a routerLink=\"/books/\" class=\"nav-link font-weight-bold\">\n          <fa name=\"book text-warning\"></fa>\n          Books\n        </a>\n      </li>\n      <li class=\"nav-item dropdown\" *ngIf=\"userStatus\">\n        <a href=\"#\" class=\"nav-link font-weight-bold\" data-toggle=\"dropdown\">\n          <fa name=\"user-circle text-warning\"></fa>\n          Account\n        </a>\n\n        <div class=\"dropdown-menu dropdown-menu-right\" *ngIf=\"userType == 'Student'\">\n          <a routerLink=\"/student/profile\" class=\"dropdown-item\">\n            <fa name=\"user text-warning\" class=\"mr-2\"></fa>\n            Profile\n          </a>\n          <a routerLink=\"/orders/\" class=\"dropdown-item\">\n            <fa name=\"list-alt text-warning\" class=\"mr-2\"></fa>\n            Orders\n          </a>\n          <a class=\"dropdown-item\" (click)=\"logOut()\">\n            <fa name=\"sign-out text-warning\" class=\"mr-2\"></fa>\n            Logout\n          </a>\n        </div>\n\n        <div class=\"dropdown-menu dropdown-menu-right\" *ngIf=\"userType == 'Lecturer'\">\n          <a routerLink=\"/lecturer/profile\" class=\"dropdown-item\">\n            <fa name=\"user text-warning\" class=\"mr-2\"></fa>\n            Profile\n          </a>\n          <a routerLink=\"/lecturer/books\" class=\"dropdown-item\">\n            <fa name=\"book text-warning\" class=\"mr-2\"></fa>\n            Books\n          </a>\n          <a class=\"dropdown-item\" (click)=\"logOut()\">\n            <fa name=\"sign-out text-warning\" class=\"mr-2\"></fa>\n            Logout\n          </a>\n        </div>\n\n        <div class=\"dropdown-menu dropdown-menu-right\" *ngIf=\"userType == 'Admin'\">\n          <a routerLink=\"/admin/dashboard\" class=\"dropdown-item\">\n            <fa name=\"th text-warning\" class=\"mr-2\"></fa>\n            dashboard\n          </a>\n          <a class=\"dropdown-item\" (click)=\"logOut()\">\n            <fa name=\"sign-out text-warning\" class=\"mr-2\"></fa>\n            Logout\n          </a>\n        </div>\n      </li>\n\n      <li class=\"nav-item\">\n        <a routerLink=\"/login\" class=\"nav-link font-weight-bold\" data-toggle=\"dropdown\" *ngIf=\"!userStatus\">\n          <fa name=\"user text-warning\"></fa>\n          Login\n        </a>\n      </li>\n    </ul>\n\n  </div>\n\n  <a routerLink=\"/cart\" class=\"ml-2 ml-sm-4\" [hidden]=\"userType == 'Admin' || userType == 'Lecturer'\">\n    <fa name=\"shopping-cart text-warning\"></fa>\n    <span class=\"badge badge-danger ml-2\">\n      <small>{{totalCartItems}}</small>\n    </span>\n  </a>\n\n</nav>\n<!-- End of Top NavBar-->\n\n<div class=\"wrapper\">\n  <router-outlet></router-outlet>\n</div>\n\n<!-- Footer -->\n<footer class=\"main-footer p-3 bg-black text-light\">\n  <div class=\"col-12 text-center\">\n    <p class=\"my-2\">\n      Imo State Polytechnic Online BookShop. All &copy; rights reserved, since 2020\n    </p>\n  </div>\n</footer>\n<!-- Footer -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/base-modal/base-modal.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/base-modal/base-modal.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBaseModalBaseModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/book-detail/book-detail.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/book-detail/book-detail.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBookDetailBookDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"my-2\">\n  <nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb bg-white\">\n      <li class=\"breadcrumb-item\">\n        <a routerLink=\"\" class=\"text-secondary\">\n          <fa name=\"home\"></fa> Home\n        </a>\n      </li>\n      <li class=\"breadcrumb-item\">\n        <a routerLink=\"/books/\" class=\"text-secondary\">\n          <fa name=\"book\"></fa> books\n        </a>\n      </li>\n      <li class=\"breadcrumb-item active\">\n        <a routerLink=\"/book/details\" class=\"text-warning\">\n          <fa name=\"info-circle\"></fa>\n          bookdetail\n        </a>\n      </li>\n    </ol>\n  </nav>\n</div>\n\n<div class=\"container my-3\" *ngIf=\"book\">\n  <div class=\"card border-0 shadow\">\n    <div class=\"card-header bg-white\">\n      <h3 class=\"card-title text-capitalize\">\n        {{book.title}}\n      </h3>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row flex-wrap-reverse\">\n        <div class=\"col-11 col-sm-6 mx-auto\">\n          <div class=\"mb-3\">\n            <h5 class=\"text-uppercase border-bottom p-2\">\n              <fa name=\"newspaper-o text-warning\"></fa>\n              Description\n            </h5>\n            <div class=\"paper p-3\">\n              {{book.description}}\n            </div>\n          </div>\n\n          <div class=\"mb-3\">\n            <h5 class=\"text-uppercase border-bottom p-2\">\n              <fa name=\"users text-warning\"></fa>\n              Book Author(s)\n            </h5>\n            <div class=\"paper p-3\">\n              <p class=\"badge badge-warning mr-2\" *ngFor=\"let author of book.authors\">\n                {{author.name}}\n              </p>\n            </div>\n          </div>\n\n          <div class=\"border-top mt-4 p-3\">\n            <button class=\"btn custom full btn-block\" (click)=\"onAddToCart()\">\n              Add to cart\n              <fa name=\"cart-plus\"></fa>\n            </button>\n          </div>\n        </div>\n        <div class=\"col-11 col-sm-6 text-center mx-auto\">\n          <p class=\"font-weight-bold\">\n            PRICE\n            <fa name=\"tag text-warning fa-spin mr-2\"></fa>\n            &#8358;\n            {{book.price}}\n          </p>\n          <img [src]=\"book.coverPage\" alt=\"book cover page\" class=\"img-fluid custom\" />\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/book-item/book-item.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/book-item/book-item.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBookItemBookItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<a [routerLink]=\"'/book/detail/'+book.id\">\n\n  <div class=\"card border-0\">\n    <img [src]=\"book.coverPage\" alt=\"book\" class=\"card-img-top img-fluid\" />\n    <div class=\"card-footer text-center bg-white\">\n      <p class=\"textbox\" [title]=\"book.title\" data-tooltip=\"ON\">\n        {{book.title}}\n      </p>\n      <span class=\"font-weight-bold\">&#8358; {{book.price}}</span>\n    </div>\n  </div>\n</a>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/book-list/book-list.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/book-list/book-list.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBookListBookListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <app-book-item class=\"col-5 col-sm-4 col-md-3 col-lg-2 mx-auto mb-2 p-1 book-pane\" *ngFor=\"let book of books\"\n    [book]=\"book\"></app-book-item>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/book-search-bar/book-search-bar.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/book-search-bar/book-search-bar.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBookSearchBarBookSearchBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form #searchBar=\"ngForm\" action=\"\" class=\"mb-3\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group input-group\" [ngStyle]=\"{position: 'relative'}\">\n    <input type=\"search\" name=\"searchquery\" id=\"searchquery\" class=\"form-control\"\n      placeholder=\"Search for a book by (title)\" [(ngModel)]=\"model.searchquery\" #searchquery=\"ngModel\"\n      autocomplete=\"off\" />\n\n    <span class=\"input-group-append\">\n      <button type=\"submit\" class=\"input-group-text\">\n        Search\n        <fa name=\"search ml-2\"></fa>\n      </button>\n    </span>\n  </div>\n\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/books/books.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/books/books.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBooksBooksComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"my-2\">\n  <nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb bg-white\">\n      <li class=\"breadcrumb-item\">\n        <a routerLink=\"\" class=\"text-secondary\">\n          <fa name=\"home\"></fa> Home\n        </a>\n      </li>\n      <li class=\"breadcrumb-item active\">\n        <a routerLink=\"/books/\" class=\"text-warning\">\n          <fa name=\"book\"></fa>\n          books\n        </a>\n      </li>\n    </ol>\n  </nav>\n</div>\n\n<div class=\"container-fluid my-3 wrapper\">\n  <div class=\"col-11 col-md-10 col-lg-9 mx-auto my-5\">\n    <form #searchBar=\"ngForm\" action=\"\" class=\"mb-3\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group input-group\" [ngStyle]=\"{position: 'relative'}\">\n        <input type=\"search\" name=\"searchquery\" id=\"searchquery\" class=\"form-control\"\n          placeholder=\"Search for a book by (title)\" [(ngModel)]=\"model.searchquery\" #searchquery=\"ngModel\"\n          autocomplete=\"off\" />\n\n        <span class=\"input-group-append\">\n          <button type=\"submit\" class=\"input-group-text\">\n            Search\n            <fa name=\"search ml-2\"></fa>\n          </button>\n        </span>\n      </div>\n\n    </form>\n  </div>\n  <app-book-list [books]=\"books\"></app-book-list>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cart-item/cart-item.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart-item/cart-item.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCartItemCartItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>cart-item works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCartCartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"my-2\">\n  <nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb bg-white\">\n      <li class=\"breadcrumb-item\">\n        <a routerLink=\"\" class=\"text-secondary\">\n          <fa name=\"home\"></fa> Home\n        </a>\n      </li>\n      <li class=\"breadcrumb-item active\">\n        <a routerLink=\"/cart/\" class=\"text-warning\">\n          <fa name=\"shopping-cart\"></fa>\n          cart\n        </a>\n      </li>\n    </ol>\n  </nav>\n</div>\n\n<div class=\"container my-3\">\n  <div class=\"card shadow border-0\">\n    <div class=\"card-header\">\n      <div class=\"d-flex align-items-center\">\n        <fa name=\"shopping-cart fa-3x mr-3 text-warning\"></fa>\n        <h4>Shopping Cart ({{totalItems}})</h4>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"card\">\n        <div class=\"card-body scroll-x\">\n          <table class=\"table table-striped table-hover\">\n            <thead>\n              <tr>\n                <th>Cover Page</th>\n                <th>Title</th>\n                <th>Quantity</th>\n                <th>Unit Price</th>\n                <th>Subtotal</th>\n                <th>\n                  Action\n                  <fa name=\"cog\"></fa>\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let item of cart\">\n                <td>\n                  <img [src]=\"item.Book.coverPage\" alt=\"book cover page\" class=\"img-thumbnail img-thumb\">\n                </td>\n                <td>\n                  {{item.Book.title}}\n                </td>\n                <td>\n                  {{item.quantity}}\n                </td>\n                <td>\n                  {{item.Book.price}}\n                </td>\n                <td>\n                  {{item.quantity * item.Book.price}}\n                </td>\n                <td>\n                  <button class=\"btn btn-sm btn-outline-danger\" (click)=\"onDelete(item.id)\">\n                    <fa name=\"trash\"></fa>\n                    remove\n                  </button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n\n          <div class=\"shadow col-10 col-md-5 p-2  mx-auto ml-lg-auto\">\n            <span class=\"font-weight-bold\">Total</span>: {{totalPrice}}\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"card-footer d-flex justify-content-between flex-wrap\">\n      <a routerLink=\"/books\" class=\"btn btn-outline-warning mb-2\">\n        Continue Shopping\n        <fa name=\"shopping-cart\"></fa>\n      </a>\n      <a routerLink=\"/checkout/\" class=\"btn btn-warning mb-2\" [hidden]=\"!cart || cart.length ==0\">\n        Checkout\n        <fa name=\"exchange\"></fa>\n      </a>\n    </div>\n  </div>\n</div>\n\n<ng-template>\n  <app-warning-dialog></app-warning-dialog>\n</ng-template>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCheckoutCheckoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"my-2\">\n  <nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb bg-white\">\n      <li class=\"breadcrumb-item\">\n        <a routerLink=\"\" class=\"text-secondary\">\n          <fa name=\"home\"></fa> Home\n        </a>\n      </li>\n      <li class=\"breadcrumb-item active\">\n        <a routerLink=\"/cart/\" class=\"text-secondary\">\n          <fa name=\"shopping-cart\"></fa>\n          cart\n        </a>\n      </li>\n      <li class=\"breadcrumb-item active\">\n        <a class=\"text-warning\">\n          <fa name=\"exchange\"></fa>\n          checkout\n        </a>\n      </li>\n    </ol>\n  </nav>\n</div>\n\n<div class=\"col-12 col-sm-10 col-md-8 mx-auto mb-2\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <div class=\"d-flex align-items-center\">\n        <fa name=\"exchange fa-2x text-warning mr-2\"></fa>\n        <h3>Checkout</h3>\n      </div>\n\n    </div>\n    <div class=\"card-body\">\n      <div class=\"alert alert-info\">\n        <div class=\"d-flex align-items-center\">\n          <fa name=\"info-circle fa-2x mr-2\"></fa>\n          <p class=\"text-center\">\n            You are about to complete your transaction please make sure you have confirmed your order summary before\n            proceeding to\n            make payment.\n          </p>\n        </div>\n      </div>\n\n      <h4 class=\"text-muted border-bottom\">Order Summary</h4>\n      <div class=\"card\">\n        <div class=\"card-body scroll-xs-x\">\n          <table class=\"table table-striped table-hover\">\n            <thead>\n              <tr>\n                <th>Title</th>\n                <th>Quantity</th>\n                <th>SubTotal (NGN)</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let item of cart\">\n                <td>{{item.Book.title}}</td>\n                <td>{{item.quantity}}</td>\n                <td>{{item.Book.price * item.quantity}}</td>\n              </tr>\n              <tr>\n                <td></td>\n                <td>Total Amount (NGN)</td>\n                <td>{{totalPrice}}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <div class=\"card-footer\">\n          <div class=\"col-12 col-sm-8 mx-auto\">\n            <angular4-paystack [email]=\"currentUser.emailAddress\" [amount]=\"totalPrice*100\" [ref]=\"reference\"\n              [channels]=\"['card','bank']\" [class]=\"'btn btn-block btn-success'\" (close)=\"paymentCancel()\"\n              (callback)=\"paymentDone($event)\">\n              Make Payment\n              <fa name=\"money\"></fa>\n            </angular4-paystack>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomepageHomepageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n  <!-- Header -->\n  <header class=\"row main-header\">\n    <div class=\"col-10 col-md-8 mx-auto hero-textbox py-5\">\n\n      <h3 class=\"display-4 text-light text-center\">\n        Welcome to Imo State Polytechnic Online Bookshop\n      </h3>\n\n      <div class=\"text-center py-5\">\n        <a routerLink=\"/signup\" *ngIf=\"!userStatus\" class=\"btn custom full mx-2 mb-2\">Get Started</a>\n        <a routerLink=\"/books\" class=\"btn custom ghost mx-2 mb-2\">Book Collections</a>\n      </div>\n    </div>\n  </header>\n\n\n  <!-- Services -->\n  <div class=\"py-3\">\n    <div class=\"title text-center  mb-3\">\n      <div class=\"d-flex justify-content-center\">\n        <div class=\"d-flex align-items-center\">\n          <span class=\"triangle-left\"></span>\n          <span class=\"circle\"></span>\n          <span class=\"circle\"></span>\n        </div>\n        <h5 class=\"mx-2 mx-sm-3 mx-md-4\">Our Services</h5>\n        <div class=\"d-flex align-items-center\">\n          <span class=\"circle\"></span>\n          <span class=\"circle\"></span>\n          <span class=\"triangle-right\"></span>\n        </div>\n      </div>\n      <p>We offer the following services to our customers.</p>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-10 col-md-4 mx-auto text-center mb-2\">\n        <div class=\"text-center\">\n          <fa name=\"credit-card fa-3x text-warning\"></fa>\n          <h5>Web Payment/POS</h5>\n        </div>\n        Our customers can make complete all purchases online through this site and this includes paying for their\n        products purchased from the comfort of ther home\n      </div>\n\n      <div class=\"col-10 col-md-4 mx-auto text-center mb-2\">\n        <div class=\"text-center\">\n          <fa name=\"truck fa-3x text-warning\"></fa>\n          <h5>Door Step Delivery</h5>\n        </div>\n        In order to ensure that our customers are satisfied, we offer free door step delivery for purchases at NGN\n        10,000\n        and above.\n      </div>\n\n      <div class=\"col-10 col-md-4 mx-auto text-center mb-2\">\n        <div class=\"text-center\">\n          <fa name=\"clock-o fa-3x text-warning\"></fa>\n          <h5>24/7</h5>\n        </div>\n        We are always at our customer's service. we operate round the clock to ensure a fulltime service is offered to\n        our customers.\n      </div>\n    </div>\n  </div>\n\n\n  <!-- Book Collections -->\n  <div class=\"py-3\">\n\n    <div class=\"title text-center d-flex justify-content-center mb-3\">\n      <div class=\"d-flex align-items-center\">\n        <span class=\"triangle-left\"></span>\n        <span class=\"circle\"></span>\n        <span class=\"circle\"></span>\n      </div>\n      <h5 class=\"mx-2 mx-sm-3 mx-md-4\">Our Latest Book Collections</h5>\n      <div class=\"d-flex align-items-center\">\n        <span class=\"circle\"></span>\n        <span class=\"circle\"></span>\n        <span class=\"triangle-right\"></span>\n      </div>\n    </div>\n\n    <div>\n      <!-- Book Lists-->\n      <app-book-list [books]=\"books\"></app-book-list>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/lecturer/lecturer-books/lecturer-books.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lecturer/lecturer-books/lecturer-books.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLecturerLecturerBooksLecturerBooksComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"my-2\">\n  <nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb bg-white\">\n      <li class=\"breadcrumb-item\">\n        <a routerLink=\"/\" class=\"text-secondary\">\n          <fa name=\"home\"></fa> Home\n        </a>\n      </li>\n      <li class=\"breadcrumb-item active\">\n        <a class=\"text-warning\">\n          <fa name=\"book\"></fa>\n          books\n        </a>\n      </li>\n    </ol>\n  </nav>\n</div>\n\n<div class=\"container my-3\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <form action=\"\">\n        <div class=\"form-group input-group\">\n          <input type=\"search\" class=\"form-control\" name=\"searchquery\">\n          <span class=\"input-group-append\">\n            <button class=\"input-group-text\">\n              Search\n              <fa name=\"search ml-1\"></fa>\n            </button>\n          </span>\n        </div>\n      </form>\n    </div>\n    <div class=\"card-body scrollable\">\n      <table class=\"table table-hover\">\n        <thead>\n          <tr>\n            <th>#</th>\n            <th>Cover Page</th>\n            <th>Title</th>\n            <th>\n              Price (NGN)\n            </th>\n            <th>\n              Action\n              <fa name=\"cog ml-2 text-warning\"></fa>\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let book of books;index as i\">\n            <td>{{i+1}}</td>\n            <td>\n              <img [src]=\"book.coverPage\" alt=\"book cover page\" class=\"img-fluid img-thumb\">\n            </td>\n            <td>{{book.title}}</td>\n            <td>{{book.price}}</td>\n            <td>\n              <a [routerLink]=\"'/lecturer/transactions/'+ book.id\" class=\"btn btn-warning btn-sm\">\n                transactions\n              </a>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/lecturer/lecturer-profile/lecturer-profile.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lecturer/lecturer-profile/lecturer-profile.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLecturerLecturerProfileLecturerProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"my-2\">\n  <nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb bg-white\">\n      <li class=\"breadcrumb-item\">\n        <a routerLink=\"\" class=\"text-secondary\">\n          <fa name=\"home\"></fa> Home\n        </a>\n      </li>\n      <li class=\"breadcrumb-item active\">\n        <a class=\"text-warning\">\n          <fa name=\"user\"></fa>\n          profile\n        </a>\n      </li>\n    </ol>\n  </nav>\n</div>\n\n\n<div class=\"container mb-2\">\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-12 col-md-5 mb-2\">\n          <div class=\"card shadow\">\n            <div class=\"card-body\">\n              <img src=\"assets/avatar.png\" alt=\"avatar\" class=\"img-fluid\">\n              <form #userForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control custom\" placeholder=\"First Name\" name=\"firstname\"\n                    [(ngModel)]=\"userProfile.firstname\" required />\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control custom\" placeholder=\"Last Name\" name=\"lastname\"\n                    [(ngModel)]=\"userProfile.lastname\" required />\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control custom\" placeholder=\"Other Names\" name=\"othernames\"\n                    [(ngModel)]=\"userProfile.othernames\" required />\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control custom\" placeholder=\"Email Address\" name=\"emailAddress\"\n                    [value]=\"userProfile.emailAddress\" readonly />\n                </div>\n                <div class=\"form-group\">\n                  <select class=\"form-control custom custom-select\" name=\"deptId\" [(ngModel)]=\"userProfile.deptId\"\n                    required>\n                    <option [value]=\"department.id\" *ngFor=\"let department of departments\">{{department.name}}</option>\n                  </select>\n                </div>\n                <div class=\"form-group\">\n                  <button type=\"submit\" class=\"btn btn-warning custom btn-block\"\n                    [disabled]=\"userForm.invalid\">Update</button>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-12 col-md-7 mb-2\">\n          <div class=\"card shadow\">\n            <div class=\"card-body\">\n              <div class=\"card\">\n                <div class=\"card-header\">\n                  <h5 class=\"card-title\">\n                    Change Password\n                  </h5>\n                </div>\n                <div class=\"card-body\">\n                  <form #userPwdForm=\"ngForm\" (ngSubmit)=\"onChangePassword()\">\n                    <div class=\"form-group\">\n                      <label for=\"new_password\">New Password</label>\n                      <input type=\"password\" name=\"password\" class=\"form-control custom form-input\" id=\"new_password\"\n                        [(ngModel)]=\"userPassword.password\" required />\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"confirm_password\">Confirm New Password</label>\n                      <input type=\"password\" name=\"confirmpwd\" class=\"form-control custom form-input\"\n                        id=\"confirm_password\" [(ngModel)]=\"userPassword.confirmpwd\" required />\n                    </div>\n                    <div class=\"form-group text-center\">\n                      <button type=\"submit\" class=\"btn btn-warning custom\"\n                        [disabled]=\"userPassword.confirmpwd !== userPassword.password\">\n                        <fa name=\"key\"></fa>\n                        Change\n                      </button>\n                    </div>\n                  </form>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/lecturer/lecturer-transaction/lecturer-transaction.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lecturer/lecturer-transaction/lecturer-transaction.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLecturerLecturerTransactionLecturerTransactionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"my-2\">\n  <nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb bg-white\">\n      <li class=\"breadcrumb-item\">\n        <a routerLink=\"/\" class=\"text-secondary\">\n          <fa name=\"home\"></fa> Home\n        </a>\n      </li>\n      <li class=\"breadcrumb-item active\">\n        <a routerLink=\"/lecturer/books\" class=\"text-secondary\">\n          <fa name=\"book\"></fa>\n          books\n        </a>\n      </li>\n      <li class=\"breadcrumb-item active\">\n        <a class=\"text-warning\">\n          <fa name=\"list-alt\"></fa>\n          transactions\n        </a>\n      </li>\n    </ol>\n  </nav>\n</div>\n\n<div class=\"container my-3\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <form action=\"\">\n        <div class=\"form-group input-group\">\n          <input type=\"search\" class=\"form-control\" name=\"searchquery\">\n          <span class=\"input-group-append\">\n            <button class=\"input-group-text\">\n              Search\n              <fa name=\"search ml-1\"></fa>\n            </button>\n          </span>\n        </div>\n      </form>\n    </div>\n    <div class=\"card-body scrollable scroll-x\">\n      <table class=\"table table-hover text-muted\">\n        <thead>\n          <tr>\n            <th>#</th>\n            <th>Student Name</th>\n            <th>Matric No</th>\n            <th>\n              Payment Reference\n            </th>\n            <th>\n              Payment Date\n            </th>\n            <th>\n              Order Status\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let transaction of transactions; index as i;\">\n            <td>\n              {{i+1}}.\n            </td>\n            <td class=\"text-capitalize\">\n              {{transaction.Order.Student.firstname}}\n              {{transaction.Order.Student.lastname}}\n            </td>\n            <td class=\"text-uppercase\">\n              {{transaction.Order.Student.matricNo}}\n            </td>\n            <td>\n              {{transaction.Order.paymentRef}}\n            </td>\n            <td>\n              {{transaction.Order.createdAt | date}}\n            </td>\n            <td>\n              {{transaction.Order.status}}\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container my-5\">\n  <div class=\"col-12 col-md-8 col-lg-5 mx-auto\">\n\n    <form #loginForm=\"ngForm\" (ngSubmit)=\"login(loginForm.value)\">\n      <fieldset>\n        <legend>Login console</legend>\n        <div *ngIf=\"isContactingServer\" class=\"text-center\">\n          <fa name=\"spinner fa-spin fa-2x\"></fa>\n        </div>\n\n        <div class=\"my-3\">\n          <div class=\"form-group\">\n            <label for=\"user-type\">Login As:</label>\n            <select name=\"userType\" id=\"user-type\" class=\"form-control custom custom-select\"\n              [(ngModel)]=\"model.userType\">\n              <option value=\"admin\">Admin</option>\n              <option value=\"student\" selected>Student</option>\n              <option value=\"lecturer\">Lecturer</option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <span class=\"form-control custom\">\n              <fa name=\"envelope fa-1x\"></fa>\n              <input type=\"text\" class=\"border-0\" placeholder=\"Email Address\" name=\"emailAddress\"\n                #emailAddress=\"ngModel\" [(ngModel)]=\"model.emailAddress\" autocomplete=\"off\" required>\n            </span>\n          </div>\n\n          <div class=\"form-group\">\n            <span class=\"form-control custom\">\n              <fa name=\"lock fa-1x\"></fa>\n              <input type=\"password\" class=\"border-0\" placeholder=\"Password\" name=\"password\" #password=\"ngModel\"\n                [(ngModel)]=\"model.password\" required>\n            </span>\n          </div>\n        </div>\n      </fieldset>\n\n      <div class=\"form-group text-center mt-3\">\n        <button type=\"submit\" class=\"btn btn-block custom ghost\">\n          Account Login\n        </button>\n\n        <p class=\"mt-3\">\n          Don't have an account?\n          <a routerLink=\"/signup/\" class=\"btn custom full\">Sign Up</a>\n        </p>\n\n        <p class=\"mt-4\">\n          <a href=\"\" class=\"text-secondary\">\n            Forgotten account password?\n          </a>\n        </p>\n      </div>\n\n    </form>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/order-items/order-items.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-items/order-items.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOrderItemsOrderItemsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"my-2\">\n  <nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb bg-white\">\n      <li class=\"breadcrumb-item\">\n        <a routerLink=\"\" class=\"text-secondary\">\n          <fa name=\"home\"></fa> Home\n        </a>\n      </li>\n      <li class=\"breadcrumb-item active\">\n        <a routerLink=\"/orders/\" class=\"text-secondary\">\n          <fa name=\"list-alt\"></fa>\n          my orders\n        </a>\n      </li>\n      <li class=\"breadcrumb-item active\">\n        <a routerLink=\"\" class=\"text-warning\">\n          <fa name=\"list\"></fa>\n          order items\n        </a>\n      </li>\n    </ol>\n  </nav>\n</div>\n\n<div class=\"container my-3\">\n  <h3>Order Items</h3>\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-10 col-sm-6 col-md-4 col-lg-3 mx-auto mb-2\" *ngFor=\"let item of orderItems\">\n          <div class=\"card\">\n            <img [src]=\"item.Book.coverPage\" alt=\"book coverpage\" class=\"card-img-top\" [ngStyle]=\"{'height': '250px'}\">\n            <div class=\"card-footer\">\n              <p class=\"border-bottom\">Price: {{item.Book.price}}</p>\n              <p class=\"border-bottom\">Qty: {{item.quantity}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOrdersOrdersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"my-2\">\n  <nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb bg-white\">\n      <li class=\"breadcrumb-item\">\n        <a routerLink=\"\" class=\"text-secondary\">\n          <fa name=\"home\"></fa> Home\n        </a>\n      </li>\n      <li class=\"breadcrumb-item active\">\n        <a routerLink=\"/cart/\" class=\"text-warning\">\n          <fa name=\"shopping-cart\"></fa>\n          my orders\n        </a>\n      </li>\n    </ol>\n  </nav>\n</div>\n\n<div class=\"container my-3\">\n  <div class=\"card shadow border-0\">\n    <div class=\"card-header\">\n      <div class=\"d-flex align-items-center\">\n        <fa name=\"list-alt fa-3x mr-3 text-warning\"></fa>\n        <h4>My Orders</h4>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"card\">\n        <div class=\"card-body scroll-x\">\n          <table class=\"table table-striped table-hover\">\n            <thead>\n              <tr>\n                <th>Sn</th>\n                <th>Payment Ref</th>\n                <th>Amount Paid</th>\n                <th>Status</th>\n                <th>\n                  Action\n                  <fa name=\"cog\"></fa>\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let item of orders; index as i;\">\n                <td>\n                  {{i+1}}.\n                </td>\n                <td>\n                  {{item.paymentRef}}\n                </td>\n                <td>\n                  {{item.totalAmount}}\n                </td>\n                <td>\n                  {{item.status}}\n                </td>\n                <td>\n                  <a [routerLink]=\"'/order/items/'+item.id\" class=\"btn btn-sm btn-outline-info\">\n                    <fa name=\"eye\"></fa>\n                    view items\n                  </a>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n\n        </div>\n      </div>\n    </div>\n    <div class=\"card-footer d-flex justify-content-between\">\n      <a routerLink=\"/books\" class=\"btn btn-outline-warning\">\n        Continue Shopping\n        <fa name=\"shopping-cart\"></fa>\n      </a>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile-card/profile-card.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile-card/profile-card.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileCardProfileCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">{{title}}</h4>\n  <label class=\"close\" aria-label=\"close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <fa name=\"times fa-1x\"></fa>\n  </label>\n</div>\n\n<div class=\"modal-body\">\n  <div class=\"card\">\n    <div class=\"card-header bg-warning\">\n\n    </div>\n    <div class=\"card-body text-center\">\n      <p class=\"text-center\">\n        <img [src]=\"'assets/avatar.png'\" alt=\"profile pics\" class=\"img-fluid avatar img-circle\"\n          [ngStyle]=\"{'height': '250px', 'width': '250px'}\">\n      </p>\n      <h4 class=\"my-2 text-capitalize\">{{profile.lastname}} {{profile.firstname}} {{profile.othernames}}</h4>\n      <p class=\"mb-2\" *ngIf=\"profile.matricNo\">\n        <span class=\"badge badge-dark\">\n          {{profile.matricNo}}\n        </span>\n      </p>\n      <p class=\"mb-2\">\n        <span class=\"badge badge-dark\">\n          {{profile.Department.name}}\n        </span>\n      </p>\n      <p class=\"mb-2\">\n        <span class=\"badge badge-dark\">\n          {{profile.emailAddress}}\n        </span>\n      </p>\n    </div>\n  </div>\n\n</div>\n\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-outline-info\" (click)=\"activeModal.close('cancel')\">Close</button>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignupSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container my-5\">\n\n  <div class=\"card col-12 col-md-10 mx-auto shadow\">\n    <div class=\"card-body\">\n\n      <form action=\"\" [formGroup]=\"userProfileForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"alert alert-danger text-center\" *ngIf=\"serverFeedback\">\n          {{serverFeedback.message}}\n        </div>\n        <div class=\"title text-center d-flex justify-content-center mb-3\">\n          <div class=\"d-sm-flex align-items-center d-none\">\n            <span class=\"triangle-left\"></span>\n            <span class=\"circle\"></span>\n            <span class=\"circle\"></span>\n          </div>\n          <h5 class=\"mx-2 mx-sm-3 mx-md-4\">Account Signup</h5>\n          <div class=\"d-none align-items-center d-sm-flex\">\n            <span class=\"circle\"></span>\n            <span class=\"circle\"></span>\n            <span class=\"triangle-right\"></span>\n          </div>\n        </div>\n\n        <div class=\"row my-md-3\">\n          <div class=\"col-12 col-sm-6 col-lg-4 mx-auto\">\n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control custom form-input text-capitalize\" placeholder=\"Firstname\"\n                formControlName=\"firstname\">\n            </div>\n          </div>\n\n          <div class=\"col-12 col-sm-6 col-lg-4 mx-auto\">\n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control custom form-input text-capitalize\" placeholder=\"Othernames\"\n                formControlName=\"othernames\">\n            </div>\n          </div>\n\n          <div class=\"col-12 col-sm-6 col-lg-4 mx-auto\">\n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control custom form-input text-capitalize\" placeholder=\"Lastname\"\n                formControlName=\"lastname\">\n            </div>\n          </div>\n\n        </div>\n\n        <div class=\"row my-md-3\">\n          <div class=\"col-12 col-sm-6 mx-auto\">\n            <div class=\"form-group\">\n              <select class=\"form-control custom custom-select form-input\" formControlName=\"deptId\"\n                placeholder=\"Select\">\n                <option value=\"\">Select Department</option>\n                <option [value]=\"dept.id\" *ngFor=\"let dept of departments\">{{dept.name}}</option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"col-12 col-sm-6 mx-auto\">\n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control custom form-input\" placeholder=\"Email Address\"\n                formControlName=\"emailAddress\">\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row my-md-3\">\n          <div class=\"col-12 col-sm-6 mx-auto\">\n            <div class=\"form-group\">\n              <input type=\"password\" class=\"form-control custom form-input\" placeholder=\"Password\"\n                formControlName=\"password\">\n            </div>\n          </div>\n\n          <div class=\"col-12 col-sm-6 mx-auto\">\n            <div class=\"form-group\">\n              <input type=\"password\" class=\"form-control custom form-input\" placeholder=\"Confirm Password\"\n                formControlName=\"confirmPassword\" [ngClass]=\"{'error': !pwdMatched}\" (keyup)=\"isMatch()\">\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row my-md-3\">\n          <div class=\"col-12 col-sm-6 mx-auto\">\n            <div class=\"form-check\">\n              <label for=\"is-student\" class=\"form-check-label\">\n                <input type=\"checkbox\" class=\"form-check-input\" id=\"is-student\" checked\n                  (change)=\"enableMatricNoField()\" />\n                Are you a student?\n              </label>\n            </div>\n          </div>\n\n\n          <div class=\"col-12 col-sm-6 mx-auto\">\n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control custom form-input text-uppercase\"\n                placeholder=\"Matric No (Format: 2020/ND/CST/77000)\" [hidden]=\"!isStudent\" [required]=\"isStudent\"\n                formControlName=\"matricNo\">\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-group text-center\">\n          <button type=\"submit\" class=\"btn custom full\" [disabled]=\"userProfileForm.invalid || !pwdMatched\">Create\n            Account</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/student-profile/student-profile.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student-profile/student-profile.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStudentProfileStudentProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"my-2\">\n  <nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb bg-white\">\n      <li class=\"breadcrumb-item\">\n        <a routerLink=\"\" class=\"text-secondary\">\n          <fa name=\"home\"></fa> Home\n        </a>\n      </li>\n      <li class=\"breadcrumb-item active\">\n        <a class=\"text-warning\">\n          <fa name=\"user\"></fa>\n          profile\n        </a>\n      </li>\n    </ol>\n  </nav>\n</div>\n\n\n<div class=\"container mb-2\">\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-12 col-md-5 mb-2\">\n          <div class=\"card shadow\">\n            <div class=\"card-body\">\n              <img src=\"assets/avatar.png\" alt=\"avatar\" class=\"img-fluid\">\n              <form #userForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control custom\" placeholder=\"First Name\" name=\"firstname\"\n                    [(ngModel)]=\"userProfile.firstname\" required />\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control custom\" placeholder=\"Last Name\" name=\"lastname\"\n                    [(ngModel)]=\"userProfile.lastname\" required />\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control custom\" placeholder=\"Other Names\" name=\"othernames\"\n                    [(ngModel)]=\"userProfile.othernames\" required />\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control custom\" placeholder=\"Matric No\" name=\"matricNo\"\n                    [value]=\"userProfile.matricNo\" readonly />\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control custom\" placeholder=\"Email Address\" name=\"emailAddress\"\n                    [value]=\"userProfile.emailAddress\" readonly />\n                </div>\n                <div class=\"form-group\">\n                  <select class=\"form-control custom custom-select\" name=\"deptId\" [(ngModel)]=\"userProfile.deptId\"\n                    required>\n                    <option [value]=\"department.id\" *ngFor=\"let department of departments\">{{department.name}}</option>\n                  </select>\n                </div>\n                <div class=\"form-group\">\n                  <button type=\"submit\" class=\"btn btn-warning custom btn-block\"\n                    [disabled]=\"userForm.invalid\">Update</button>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-12 col-md-7 mb-2\">\n          <div class=\"card shadow\">\n            <div class=\"card-body\">\n              <div class=\"card\">\n                <div class=\"card-header\">\n                  <h5 class=\"card-title\">\n                    Change Password\n                  </h5>\n                </div>\n                <div class=\"card-body\">\n                  <form #userPwdForm=\"ngForm\" (ngSubmit)=\"onChangePassword()\">\n                    <div class=\"form-group\">\n                      <label for=\"new_password\">New Password</label>\n                      <input type=\"password\" name=\"password\" class=\"form-control custom form-input\" id=\"new_password\"\n                        [(ngModel)]=\"userPassword.password\" required />\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"confirm_password\">Confirm New Password</label>\n                      <input type=\"password\" name=\"confirmpwd\" class=\"form-control custom form-input\"\n                        id=\"confirm_password\" [(ngModel)]=\"userPassword.confirmpwd\" required />\n                    </div>\n                    <div class=\"form-group text-center\">\n                      <button type=\"submit\" class=\"btn btn-warning custom\"\n                        [disabled]=\"userPassword.confirmpwd !== userPassword.password\">\n                        <fa name=\"key\"></fa>\n                        Change\n                      </button>\n                    </div>\n                  </form>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/warning-dialog/warning-dialog.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/warning-dialog/warning-dialog.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWarningDialogWarningDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">{{title}}</h4>\n  <label class=\"close\" aria-label=\"close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <fa name=\"times fa-1x\"></fa>\n  </label>\n</div>\n\n<div class=\"modal-body\">\n  <p class=\"text-center\">{{message}}</p>\n</div>\n\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-outline-success mr-2\" (click)=\"activeModal.close('continue')\">Continue</button>\n  <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"activeModal.close('cancel')\">Cancel</button>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

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


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
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
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
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
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

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
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
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

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/admin/admin-dashboard/admin-dashboard.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/admin-dashboard.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminDashboardAdminDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".notify-badge {\r\n  position: absolute;\r\n  top: 0px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7QUFDViIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9hZG1pbi1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3RpZnktYmFkZ2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDBweDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/admin-dashboard.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/admin-dashboard.component.ts ***!
    \********************************************************************/

  /*! exports provided: AdminDashboardComponent */

  /***/
  function srcAppAdminAdminDashboardAdminDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function () {
      return AdminDashboardComponent;
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


    var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/admin.service */
    "./src/app/services/admin.service.ts");
    /* harmony import */


    var src_app_services_lecturer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/lecturer.service */
    "./src/app/services/lecturer.service.ts");
    /* harmony import */


    var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/notification.service */
    "./src/app/services/notification.service.ts");

    var AdminDashboardComponent = /*#__PURE__*/function () {
      function AdminDashboardComponent(adminService, lecturerService, notifyService) {
        _classCallCheck(this, AdminDashboardComponent);

        this.adminService = adminService;
        this.lecturerService = lecturerService;
        this.notifyService = notifyService;
        this.notifications = [];
        this.unActivatedAccounts = [];
      }

      _createClass(AdminDashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.adminService.getDashboardSummary().subscribe(function (res) {
            if (res.success) {
              _this.summary = res.data;
            }
          });
          this.adminService.getNotifications().subscribe(function (res) {
            if (res.success) {
              _this.notifications = res.data;
            }
          });
          this.lecturerService.getLecturers("0").subscribe(function (res) {
            _this.unActivatedAccounts = res;
            console.log(res);
          });
        }
      }, {
        key: "deleteNotification",
        value: function deleteNotification(id) {
          var _this2 = this;

          this.adminService.deleteNotification(id).subscribe(function (res) {
            _this2.notifications.splice(_this2.notifications.findIndex(function (a) {
              return a.id == id;
            }), 1);
          }, function (reason) {
            console.log(reason);
          });
        }
      }, {
        key: "onActivate",
        value: function onActivate(account) {
          var _this3 = this;

          account.activated = true;
          console.log(account);
          this.lecturerService.updateLecturer(account).subscribe(function (res) {
            if (res.success) {
              _this3.unActivatedAccounts.splice(_this3.unActivatedAccounts.findIndex(function (a) {
                return a.id == account.id;
              }), 1);

              _this3.notifyService.showSuccess("Account activated successfully.", "Success");
            }
          }, function (reason) {
            _this3.notifyService.showError("We were unable to process your request.", "Operation failed");
          });
        }
      }]);

      return AdminDashboardComponent;
    }();

    AdminDashboardComponent.ctorParameters = function () {
      return [{
        type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]
      }, {
        type: src_app_services_lecturer_service__WEBPACK_IMPORTED_MODULE_3__["LecturerService"]
      }, {
        type: src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]
      }];
    };

    AdminDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-admin-dashboard",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/admin-dashboard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-dashboard.component.css */
      "./src/app/admin/admin-dashboard/admin-dashboard.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"], src_app_services_lecturer_service__WEBPACK_IMPORTED_MODULE_3__["LecturerService"], src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]])], AdminDashboardComponent);
    /***/
  },

  /***/
  "./src/app/admin/books/books.component.css":
  /*!*************************************************!*\
    !*** ./src/app/admin/books/books.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminBooksBooksComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Jvb2tzL2Jvb2tzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/books/books.component.ts":
  /*!************************************************!*\
    !*** ./src/app/admin/books/books.component.ts ***!
    \************************************************/

  /*! exports provided: BooksComponent */

  /***/
  function srcAppAdminBooksBooksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BooksComponent", function () {
      return BooksComponent;
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


    var _models_ImageSnippet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/ImageSnippet */
    "./src/app/models/ImageSnippet.ts");
    /* harmony import */


    var _models_Book_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../models/Book.model */
    "./src/app/models/Book.model.ts");
    /* harmony import */


    var _services_author_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/author.service */
    "./src/app/services/author.service.ts");
    /* harmony import */


    var src_app_services_lecturer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/lecturer.service */
    "./src/app/services/lecturer.service.ts");
    /* harmony import */


    var src_app_services_book_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/book.service */
    "./src/app/services/book.service.ts");
    /* harmony import */


    var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/notification.service */
    "./src/app/services/notification.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _edit_book_modal_edit_book_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../edit-book-modal/edit-book-modal.component */
    "./src/app/admin/edit-book-modal/edit-book-modal.component.ts");
    /* harmony import */


    var src_app_warning_dialog_warning_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/warning-dialog/warning-dialog.component */
    "./src/app/warning-dialog/warning-dialog.component.ts");

    var BooksComponent = /*#__PURE__*/function () {
      function BooksComponent(authorService, lecturerService, bookService, notifyService, modalService) {
        _classCallCheck(this, BooksComponent);

        this.authorService = authorService;
        this.lecturerService = lecturerService;
        this.bookService = bookService;
        this.notifyService = notifyService;
        this.modalService = modalService;
        this.authorList = [];
        this.selectedAuthors = [];
        this.newAuthor = {};
        this.isSendingRequest = false;
        this.selectedAuthorId = 0;
        this.lecturerList = [];
        this.newBook = new _models_Book_model__WEBPACK_IMPORTED_MODULE_3__["Book"](null, null, "", "", true, null, "", []);
        this.newAuthor = {
          name: ""
        };
        this.editAuthor = {
          name: "",
          id: 0
        };
        this.selectedFile = {
          pending: false,
          src: "",
          status: ""
        };
      }

      _createClass(BooksComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          //get book authors
          this.authorService.getAuthors().subscribe(function (authors) {
            _this4.authorList = authors;
          }); // get leturers

          this.lecturerService.getLecturers().subscribe(function (lecturers) {
            _this4.lecturerList = lecturers;
          }, function (reason) {
            console.log(reason);

            _this4.notifyService.showError("We were unable to contact server.", "Operation failed");
          });
          this.loadBooks();
        }
      }, {
        key: "loadBooks",
        value: function loadBooks() {
          var _this5 = this;

          // get books
          this.bookService.getBooks().subscribe(function (books) {
            console.log(books);
            _this5.books = books;
          }, function (reason) {
            console.log(reason);

            _this5.notifyService.showError("We were unable to contact server.", "Operation failed");
          });
        }
      }, {
        key: "addAuthor",
        value: function addAuthor(author) {
          console.log(author);

          if (author.id) {
            var found = this.selectedAuthors.find(function (a) {
              return a.id === author.id;
            });

            if (found === undefined) {
              this.selectedAuthors.push(author);
            }
          }
        }
      }, {
        key: "deleteAuthor",
        value: function deleteAuthor(index) {
          delete this.selectedAuthors[index];
          this.selectedAuthors = this.selectedAuthors.filter(function (e) {
            return e !== undefined;
          });
        }
      }, {
        key: "onFileChanged",
        value: function onFileChanged(imageInput) {
          var _this6 = this;

          var file = imageInput.files[0];
          var reader = new FileReader();
          reader.addEventListener("load", function (event) {
            _this6.selectedFile = new _models_ImageSnippet__WEBPACK_IMPORTED_MODULE_2__["ImageSnippet"](event.target["result"], file);
            _this6.newBook.coverPage = _this6.selectedFile.src;
          });
          reader.readAsDataURL(file);
        }
      }, {
        key: "onSubmitNewAuthor",
        value: function onSubmitNewAuthor(newAuthor) {
          var _this7 = this;

          if (this.isSendingRequest) return;
          this.isSendingRequest = true;
          this.authorService.saveAuthor(newAuthor).subscribe(function (result) {
            _this7.isSendingRequest = false;

            if (result.success) {
              _this7.newAuthor = {
                name: ""
              };

              _this7.authorList.push(result.author);
            } else {
              _this7.errorMsgOnSaveAuthor = result.message;
            }
          });
        }
      }, {
        key: "initAuthorEdit",
        value: function initAuthorEdit(author) {
          this.editAuthor = author;
        }
      }, {
        key: "onUpdateAuthor",
        value: function onUpdateAuthor(author) {
          var _this8 = this;

          if (this.isSendingRequest) return;
          this.isSendingRequest = true;
          this.authorService.updateAuthor(author).subscribe(function (result) {
            _this8.isSendingRequest = false;

            if (result.success) {
              console.log(result);

              var i = _this8.authorList.findIndex(function (a) {
                return author.id == a.id;
              });

              _this8.authorList[i] = result.author;
            } else {
              _this8.errorMsgOnSaveAuthor = result.message;
            }
          });
        }
      }, {
        key: "initAuthorDelete",
        value: function initAuthorDelete(id) {
          this.selectedAuthorId = Number(id);
          this.actionStatus = "";
        }
      }, {
        key: "onDeleteAuthor",
        value: function onDeleteAuthor() {
          var _this9 = this;

          if (this.isSendingRequest) return;
          if (this.selectedAuthorId == 0) return;
          this.isSendingRequest = true;
          this.authorService.deleteAuthor(this.selectedAuthorId).subscribe(function (result) {
            _this9.authorList = _this9.authorList.filter(function (a) {
              return a.id !== _this9.selectedAuthorId;
            });
            _this9.isSendingRequest = false;
            _this9.actionStatus = result.message;
            _this9.selectedAuthorId = 0;
            console.log(result);
          });
        }
      }, {
        key: "onSubmitNewBook",
        value: function onSubmitNewBook() {
          var _this10 = this;

          if (this.selectedAuthors.length > 0) {
            this.newBook.authors = [];
            this.newBook.authors = this.selectedAuthors.map(function (a) {
              return a.id;
            });
          }

          this.bookService.saveBook(this.newBook).subscribe(function (response) {
            _this10.modalClose.nativeElement.click();

            _this10.notifyService.showSuccess("Book has been saved successfully", "Success");

            _this10.loadBooks();
          }, function (reason) {
            console.log(reason);

            _this10.notifyService.showError("We were unable to contact the server.", "Operation Failed");
          });
        }
      }, {
        key: "open",
        value: function open(book) {
          var modalRef = this.modalService.open(_edit_book_modal_edit_book_modal_component__WEBPACK_IMPORTED_MODULE_9__["EditBookModalComponent"]);
          modalRef.componentInstance.editBook = book;
          modalRef.componentInstance.title = "Edit Book";
          modalRef.result.then(function (action) {
            console.log(action);
          })["catch"](function () {});
        }
      }, {
        key: "onDeleteBook",
        value: function onDeleteBook(bookId) {
          var _this11 = this;

          var modalRef = this.modalService.open(src_app_warning_dialog_warning_dialog_component__WEBPACK_IMPORTED_MODULE_10__["WarningDialogComponent"]);
          modalRef.componentInstance.title = "Delete Warning";
          modalRef.componentInstance.message = "Are you sure you want to delete this book?";
          modalRef.result.then(function (action) {
            console.log(action);

            if (action == "continue") {
              _this11.bookService.deleteBook(bookId).subscribe(function (response) {
                if (response.success) {
                  _this11.notifyService.showSuccess("book has been deleted successfully", "Success");

                  var index = _this11.books.findIndex(function (b) {
                    return b.id == bookId;
                  });

                  if (index) {
                    _this11.books.splice(index, 1);
                  }
                } else {
                  _this11.notifyService.showError("Server was unable to process request", "Operation failed");
                }
              }, function (reason) {
                console.log(reason);

                _this11.notifyService.showError("We encountered an errror while contacting server", "Operation failed");
              });
            }
          })["catch"](function (reason) {
            console.log(reason);
          });
        }
      }]);

      return BooksComponent;
    }();

    BooksComponent.ctorParameters = function () {
      return [{
        type: _services_author_service__WEBPACK_IMPORTED_MODULE_4__["AuthorService"]
      }, {
        type: src_app_services_lecturer_service__WEBPACK_IMPORTED_MODULE_5__["LecturerService"]
      }, {
        type: src_app_services_book_service__WEBPACK_IMPORTED_MODULE_6__["BookService"]
      }, {
        type: src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("newBookModal", {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], BooksComponent.prototype, "modalClose", void 0);
    BooksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-books",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./books.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/books/books.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./books.component.css */
      "./src/app/admin/books/books.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_author_service__WEBPACK_IMPORTED_MODULE_4__["AuthorService"], src_app_services_lecturer_service__WEBPACK_IMPORTED_MODULE_5__["LecturerService"], src_app_services_book_service__WEBPACK_IMPORTED_MODULE_6__["BookService"], src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]])], BooksComponent);
    /***/
  },

  /***/
  "./src/app/admin/change-order-status-modal/change-order-status-modal.component.css":
  /*!*****************************************************************************************!*\
    !*** ./src/app/admin/change-order-status-modal/change-order-status-modal.component.css ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminChangeOrderStatusModalChangeOrderStatusModalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NoYW5nZS1vcmRlci1zdGF0dXMtbW9kYWwvY2hhbmdlLW9yZGVyLXN0YXR1cy1tb2RhbC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/change-order-status-modal/change-order-status-modal.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/admin/change-order-status-modal/change-order-status-modal.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: ChangeOrderStatusModalComponent */

  /***/
  function srcAppAdminChangeOrderStatusModalChangeOrderStatusModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangeOrderStatusModalComponent", function () {
      return ChangeOrderStatusModalComponent;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/notification.service */
    "./src/app/services/notification.service.ts");
    /* harmony import */


    var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/order.service */
    "./src/app/services/order.service.ts");

    var ChangeOrderStatusModalComponent = /*#__PURE__*/function () {
      function ChangeOrderStatusModalComponent(activeModal, orderService, notifyService) {
        _classCallCheck(this, ChangeOrderStatusModalComponent);

        this.activeModal = activeModal;
        this.orderService = orderService;
        this.notifyService = notifyService;
      }

      _createClass(ChangeOrderStatusModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit(order) {
          var _this12 = this;

          console.log(order);
          this.orderService.updateOrder(order).subscribe(function (res) {
            if (res.success) {
              _this12.notifyService.showSuccess("Status changed succcessfully", "Success");

              _this12.activeModal.close();
            } else {
              _this12.notifyService.showError(res.message, "Operation failed");
            }
          }, function (reason) {
            _this12.notifyService.showError("We encountered a problem while performing this operation.", "Operation failed");
          });
        }
      }]);

      return ChangeOrderStatusModalComponent;
    }();

    ChangeOrderStatusModalComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
      }, {
        type: src_app_services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]
      }, {
        type: src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]
      }];
    };

    ChangeOrderStatusModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-change-order-status-modal",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./change-order-status-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/change-order-status-modal/change-order-status-modal.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./change-order-status-modal.component.css */
      "./src/app/admin/change-order-status-modal/change-order-status-modal.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"], src_app_services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"], src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]])], ChangeOrderStatusModalComponent);
    /***/
  },

  /***/
  "./src/app/admin/edit-book-modal/edit-book-modal.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/admin/edit-book-modal/edit-book-modal.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminEditBookModalEditBookModalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2VkaXQtYm9vay1tb2RhbC9lZGl0LWJvb2stbW9kYWwuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/edit-book-modal/edit-book-modal.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/admin/edit-book-modal/edit-book-modal.component.ts ***!
    \********************************************************************/

  /*! exports provided: EditBookModalComponent */

  /***/
  function srcAppAdminEditBookModalEditBookModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditBookModalComponent", function () {
      return EditBookModalComponent;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var src_app_services_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/book.service */
    "./src/app/services/book.service.ts");
    /* harmony import */


    var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/notification.service */
    "./src/app/services/notification.service.ts");

    var EditBookModalComponent = /*#__PURE__*/function () {
      function EditBookModalComponent(activeModal, bookService, notifyService) {
        _classCallCheck(this, EditBookModalComponent);

        this.activeModal = activeModal;
        this.bookService = bookService;
        this.notifyService = notifyService;
      }

      _createClass(EditBookModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onUpdateBook",
        value: function onUpdateBook(book) {
          var _this13 = this;

          this.bookService.updateBook(book).subscribe(function (response) {
            _this13.activeModal.close();

            if (response.success) {
              _this13.notifyService.showSuccess("Book has been updated successfully", "Success");
            } else {
              _this13.notifyService.showError("Server was unable to process request try again", "Operation failed");
            }
          }, function (reason) {
            console.log(reason);

            _this13.notifyService.showError("Server was unable to process request try again", "Operation failed");
          });
        }
      }]);

      return EditBookModalComponent;
    }();

    EditBookModalComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
      }, {
        type: src_app_services_book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"]
      }, {
        type: src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]
      }];
    };

    EditBookModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-edit-book-modal",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-book-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/edit-book-modal/edit-book-modal.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-book-modal.component.css */
      "./src/app/admin/edit-book-modal/edit-book-modal.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"], src_app_services_book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"], src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]])], EditBookModalComponent);
    /***/
  },

  /***/
  "./src/app/admin/lecturers/lecturers.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/admin/lecturers/lecturers.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminLecturersLecturersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2xlY3R1cmVycy9sZWN0dXJlcnMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/lecturers/lecturers.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/admin/lecturers/lecturers.component.ts ***!
    \********************************************************/

  /*! exports provided: LecturersComponent */

  /***/
  function srcAppAdminLecturersLecturersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LecturersComponent", function () {
      return LecturersComponent;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var src_app_profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/profile-card/profile-card.component */
    "./src/app/profile-card/profile-card.component.ts");
    /* harmony import */


    var src_app_services_lecturer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/lecturer.service */
    "./src/app/services/lecturer.service.ts");
    /* harmony import */


    var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/notification.service */
    "./src/app/services/notification.service.ts");

    var LecturersComponent = /*#__PURE__*/function () {
      function LecturersComponent(lecturerService, modalService, notifyService) {
        _classCallCheck(this, LecturersComponent);

        this.lecturerService = lecturerService;
        this.modalService = modalService;
        this.notifyService = notifyService;
      }

      _createClass(LecturersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.lecturerService.getLecturers().subscribe(function (lecturers) {
            _this14.lecturers = lecturers;
          }, function (reason) {
            console.log(reason);
          });
        }
      }, {
        key: "onViewProfile",
        value: function onViewProfile(profile) {
          console.log(profile);
          var modalRef = this.modalService.open(src_app_profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_3__["ProfileCardComponent"]);
          modalRef.componentInstance.title = "Lecturer Profile";
          modalRef.componentInstance.profile = profile;
        }
      }, {
        key: "onSearch",
        value: function onSearch(search) {
          var _this15 = this;

          console.log(search);
          this.lecturerService.getLecturers(search["searchquery"]).subscribe(function (lecturers) {
            _this15.lecturers = lecturers;
          }, function (reason) {
            console.log(reason);

            _this15.notifyService.showError("Server was unable to load data", "Operation failed");
          });
        }
      }]);

      return LecturersComponent;
    }();

    LecturersComponent.ctorParameters = function () {
      return [{
        type: src_app_services_lecturer_service__WEBPACK_IMPORTED_MODULE_4__["LecturerService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
      }, {
        type: src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]
      }];
    };

    LecturersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-lecturers",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./lecturers.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/lecturers/lecturers.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./lecturers.component.css */
      "./src/app/admin/lecturers/lecturers.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_lecturer_service__WEBPACK_IMPORTED_MODULE_4__["LecturerService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]])], LecturersComponent);
    /***/
  },

  /***/
  "./src/app/admin/orders/orders.component.css":
  /*!***************************************************!*\
    !*** ./src/app/admin/orders/orders.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminOrdersOrdersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL29yZGVycy9vcmRlcnMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/orders/orders.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/admin/orders/orders.component.ts ***!
    \**************************************************/

  /*! exports provided: OrdersComponent */

  /***/
  function srcAppAdminOrdersOrdersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersComponent", function () {
      return OrdersComponent;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/order.service */
    "./src/app/services/order.service.ts");
    /* harmony import */


    var _change_order_status_modal_change_order_status_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../change-order-status-modal/change-order-status-modal.component */
    "./src/app/admin/change-order-status-modal/change-order-status-modal.component.ts");

    var OrdersComponent = /*#__PURE__*/function () {
      function OrdersComponent(orderService, modalService) {
        _classCallCheck(this, OrdersComponent);

        this.orderService = orderService;
        this.modalService = modalService;
      }

      _createClass(OrdersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          this.orderService.getAllOrders().subscribe(function (res) {
            if (res.success) {
              _this16.orders = res["orders"];
            }
          }, function (reason) {
            console.log(reason);
          });
        }
      }, {
        key: "onChangeStatus",
        value: function onChangeStatus(order) {
          var modalInstance = this.modalService.open(_change_order_status_modal_change_order_status_modal_component__WEBPACK_IMPORTED_MODULE_4__["ChangeOrderStatusModalComponent"], {
            size: "sm"
          });
          modalInstance.componentInstance.order = order;
          modalInstance.result.then(function () {})["catch"](function () {});
        }
      }]);

      return OrdersComponent;
    }();

    OrdersComponent.ctorParameters = function () {
      return [{
        type: src_app_services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
      }];
    };

    OrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-orders",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./orders.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/orders/orders.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./orders.component.css */
      "./src/app/admin/orders/orders.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])], OrdersComponent);
    /***/
  },

  /***/
  "./src/app/admin/sidebar/sidebar/sidebar.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/admin/sidebar/sidebar/sidebar.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminSidebarSidebarSidebarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".menu-widget-side {\r\n  padding: 0px;\r\n}\r\n\r\n.menu-widget-side li a fa {\r\n  color: #fabc10;\r\n}\r\n\r\n.menu-widget-side li a {\r\n  text-decoration: none;\r\n  color: #070202;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.menu-widget-side li a:hover {\r\n  border-bottom: 2px solid#fabc10;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vc2lkZWJhci9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLCtCQUErQjtBQUNqQyIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3NpZGViYXIvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudS13aWRnZXQtc2lkZSB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4ubWVudS13aWRnZXQtc2lkZSBsaSBhIGZhIHtcclxuICBjb2xvcjogI2ZhYmMxMDtcclxufVxyXG5cclxuLm1lbnUtd2lkZ2V0LXNpZGUgbGkgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjMDcwMjAyO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4ubWVudS13aWRnZXQtc2lkZSBsaSBhOmhvdmVyIHtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQjZmFiYzEwO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin/sidebar/sidebar/sidebar.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/admin/sidebar/sidebar/sidebar.component.ts ***!
    \************************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppAdminSidebarSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SidebarComponent = /*#__PURE__*/function () {
      function SidebarComponent() {
        _classCallCheck(this, SidebarComponent);
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SidebarComponent;
    }();

    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sidebar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/sidebar/sidebar/sidebar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sidebar.component.css */
      "./src/app/admin/sidebar/sidebar/sidebar.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SidebarComponent);
    /***/
  },

  /***/
  "./src/app/admin/students/students.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/admin/students/students.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminStudentsStudentsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3N0dWRlbnRzL3N0dWRlbnRzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/students/students.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/admin/students/students.component.ts ***!
    \******************************************************/

  /*! exports provided: StudentsComponent */

  /***/
  function srcAppAdminStudentsStudentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentsComponent", function () {
      return StudentsComponent;
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


    var src_app_services_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/student.service */
    "./src/app/services/student.service.ts");
    /* harmony import */


    var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/notification.service */
    "./src/app/services/notification.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var src_app_profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/profile-card/profile-card.component */
    "./src/app/profile-card/profile-card.component.ts");

    var StudentsComponent = /*#__PURE__*/function () {
      function StudentsComponent(studentService, notifyService, modalService) {
        _classCallCheck(this, StudentsComponent);

        this.studentService = studentService;
        this.notifyService = notifyService;
        this.modalService = modalService;
      }

      _createClass(StudentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          this.studentService.getStudents().subscribe(function (students) {
            _this17.students = students;
          }, function (reason) {
            console.log(reason);

            _this17.notifyService.showError("Server was unable to load data", "Operation failed");
          });
        }
      }, {
        key: "onViewProfile",
        value: function onViewProfile(profile) {
          var modalRef = this.modalService.open(src_app_profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_5__["ProfileCardComponent"]);
          modalRef.componentInstance.title = "Student Profile";
          modalRef.componentInstance.profile = profile;
        }
      }, {
        key: "onSearch",
        value: function onSearch(search) {
          var _this18 = this;

          this.studentService.getStudents(search["searchquery"]).subscribe(function (students) {
            _this18.students = students;
          }, function (reason) {
            console.log(reason);

            _this18.notifyService.showError("Server was unable to load data", "Operation failed");
          });
        }
      }]);

      return StudentsComponent;
    }();

    StudentsComponent.ctorParameters = function () {
      return [{
        type: src_app_services_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"]
      }, {
        type: src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
      }];
    };

    StudentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-students",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./students.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/students/students.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./students.component.css */
      "./src/app/admin/students/students.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"], src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])], StudentsComponent);
    /***/
  },

  /***/
  "./src/app/admin/transactions/transactions.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/admin/transactions/transactions.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminTransactionsTransactionsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbnMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/transactions/transactions.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/admin/transactions/transactions.component.ts ***!
    \**************************************************************/

  /*! exports provided: TransactionsComponent */

  /***/
  function srcAppAdminTransactionsTransactionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransactionsComponent", function () {
      return TransactionsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TransactionsComponent = /*#__PURE__*/function () {
      function TransactionsComponent() {
        _classCallCheck(this, TransactionsComponent);
      }

      _createClass(TransactionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TransactionsComponent;
    }();

    TransactionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-transactions',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./transactions.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/transactions/transactions.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./transactions.component.css */
      "./src/app/admin/transactions/transactions.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TransactionsComponent);
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


    var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./homepage/homepage.component */
    "./src/app/homepage/homepage.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/signup/signup.component.ts");
    /* harmony import */


    var _books_books_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./books/books.component */
    "./src/app/books/books.component.ts");
    /* harmony import */


    var _book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./book-detail/book-detail.component */
    "./src/app/book-detail/book-detail.component.ts");
    /* harmony import */


    var _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./cart/cart.component */
    "./src/app/cart/cart.component.ts");
    /* harmony import */


    var _orders_orders_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./orders/orders.component */
    "./src/app/orders/orders.component.ts");
    /* harmony import */


    var _student_profile_student_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./student-profile/student-profile.component */
    "./src/app/student-profile/student-profile.component.ts");
    /* harmony import */


    var _admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./admin/admin-dashboard/admin-dashboard.component */
    "./src/app/admin/admin-dashboard/admin-dashboard.component.ts");
    /* harmony import */


    var _admin_books_books_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./admin/books/books.component */
    "./src/app/admin/books/books.component.ts");
    /* harmony import */


    var _admin_orders_orders_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./admin/orders/orders.component */
    "./src/app/admin/orders/orders.component.ts");
    /* harmony import */


    var _admin_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./admin/transactions/transactions.component */
    "./src/app/admin/transactions/transactions.component.ts");
    /* harmony import */


    var _admin_students_students_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./admin/students/students.component */
    "./src/app/admin/students/students.component.ts");
    /* harmony import */


    var _admin_lecturers_lecturers_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./admin/lecturers/lecturers.component */
    "./src/app/admin/lecturers/lecturers.component.ts");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./auth.guard */
    "./src/app/auth.guard.ts");
    /* harmony import */


    var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./checkout/checkout.component */
    "./src/app/checkout/checkout.component.ts");
    /* harmony import */


    var _order_items_order_items_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./order-items/order-items.component */
    "./src/app/order-items/order-items.component.ts");
    /* harmony import */


    var _lecturer_lecturer_profile_lecturer_profile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./lecturer/lecturer-profile/lecturer-profile.component */
    "./src/app/lecturer/lecturer-profile/lecturer-profile.component.ts");
    /* harmony import */


    var _lecturer_lecturer_transaction_lecturer_transaction_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./lecturer/lecturer-transaction/lecturer-transaction.component */
    "./src/app/lecturer/lecturer-transaction/lecturer-transaction.component.ts");
    /* harmony import */


    var _lecturer_lecturer_books_lecturer_books_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./lecturer/lecturer-books/lecturer-books.component */
    "./src/app/lecturer/lecturer-books/lecturer-books.component.ts");

    var routes = [{
      path: "",
      component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"]
    }, {
      path: "login",
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: "signup",
      component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"]
    }, {
      path: "books",
      component: _books_books_component__WEBPACK_IMPORTED_MODULE_6__["BooksComponent"]
    }, {
      path: "book/detail/:id",
      component: _book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_7__["BookDetailComponent"]
    }, {
      path: "cart",
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]],
      component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__["CartComponent"]
    }, {
      path: "checkout",
      component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_18__["CheckoutComponent"]
    }, {
      path: "orders",
      component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_9__["OrdersComponent"]
    }, {
      path: "order/items/:id",
      component: _order_items_order_items_component__WEBPACK_IMPORTED_MODULE_19__["OrderItemsComponent"]
    }, {
      path: "student/profile",
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]],
      component: _student_profile_student_profile_component__WEBPACK_IMPORTED_MODULE_10__["StudentProfileComponent"]
    }, {
      path: "admin/dashboard",
      component: _admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["AdminDashboardComponent"]
    }, {
      path: "admin/books",
      component: _admin_books_books_component__WEBPACK_IMPORTED_MODULE_12__["BooksComponent"]
    }, {
      path: "admin/orders",
      component: _admin_orders_orders_component__WEBPACK_IMPORTED_MODULE_13__["OrdersComponent"]
    }, {
      path: "admin/transactions",
      component: _admin_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_14__["TransactionsComponent"]
    }, {
      path: "admin/students",
      component: _admin_students_students_component__WEBPACK_IMPORTED_MODULE_15__["StudentsComponent"]
    }, {
      path: "admin/lecturers",
      component: _admin_lecturers_lecturers_component__WEBPACK_IMPORTED_MODULE_16__["LecturersComponent"]
    }, {
      path: "lecturer/profile",
      component: _lecturer_lecturer_profile_lecturer_profile_component__WEBPACK_IMPORTED_MODULE_20__["LecturerProfileComponent"]
    }, {
      path: "lecturer/books",
      component: _lecturer_lecturer_books_lecturer_books_component__WEBPACK_IMPORTED_MODULE_22__["LecturerBooksComponent"]
    }, {
      path: "lecturer/transactions/:bid",
      component: _lecturer_lecturer_transaction_lecturer_transaction_component__WEBPACK_IMPORTED_MODULE_21__["LecturerTransactionComponent"]
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


    __webpack_exports__["default"] = ".logo {\r\n  height: 25px;\r\n  width: 50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nbyB7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG59Il19 */";
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
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/cart.service */
    "./src/app/services/cart.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(authService, cartService) {
        _classCallCheck(this, AppComponent);

        this.authService = authService;
        this.cartService = cartService;
        this.title = "Online Bookshop";
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this19 = this;

          this.authService.userStatusChanges.subscribe(function (x) {
            return _this19.userStatus = x;
          });
          this.cartService.totalItemsChanges.subscribe(function (x) {
            return _this19.totalCartItems = x;
          });
          this.cartService.refreshTotalItems();
        }
      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          //Called after every check of the component's or directive's content.
          //Add 'implements AfterContentChecked' to the class.
          this.authService.getStatusOnRefresh();
          this.userType = this.authService.getUserType();
        }
      }, {
        key: "logOut",
        value: function logOut() {
          this.authService.logout();
          this.cartService.refreshTotalItems();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-root",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: tokenGetter, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "tokenGetter", function () {
      return tokenGetter;
    });
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");
    /* harmony import */


    var angular4_paystack__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! angular4-paystack */
    "./node_modules/angular4-paystack/fesm2015/angular4-paystack.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var angular_font_awesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! angular-font-awesome */
    "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
    /* harmony import */


    var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./homepage/homepage.component */
    "./src/app/homepage/homepage.component.ts");
    /* harmony import */


    var _book_item_book_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./book-item/book-item.component */
    "./src/app/book-item/book-item.component.ts");
    /* harmony import */


    var _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./book-list/book-list.component */
    "./src/app/book-list/book-list.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/signup/signup.component.ts");
    /* harmony import */


    var _books_books_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./books/books.component */
    "./src/app/books/books.component.ts");
    /* harmony import */


    var _book_search_bar_book_search_bar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./book-search-bar/book-search-bar.component */
    "./src/app/book-search-bar/book-search-bar.component.ts");
    /* harmony import */


    var _book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./book-detail/book-detail.component */
    "./src/app/book-detail/book-detail.component.ts");
    /* harmony import */


    var _cart_cart_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./cart/cart.component */
    "./src/app/cart/cart.component.ts");
    /* harmony import */


    var _cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./cart-item/cart-item.component */
    "./src/app/cart-item/cart-item.component.ts");
    /* harmony import */


    var _admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./admin/admin-dashboard/admin-dashboard.component */
    "./src/app/admin/admin-dashboard/admin-dashboard.component.ts");
    /* harmony import */


    var _admin_books_books_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./admin/books/books.component */
    "./src/app/admin/books/books.component.ts");
    /* harmony import */


    var _admin_sidebar_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./admin/sidebar/sidebar/sidebar.component */
    "./src/app/admin/sidebar/sidebar/sidebar.component.ts");
    /* harmony import */


    var _base_modal_base_modal_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./base-modal/base-modal.component */
    "./src/app/base-modal/base-modal.component.ts");
    /* harmony import */


    var _admin_edit_book_modal_edit_book_modal_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./admin/edit-book-modal/edit-book-modal.component */
    "./src/app/admin/edit-book-modal/edit-book-modal.component.ts");
    /* harmony import */


    var _warning_dialog_warning_dialog_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./warning-dialog/warning-dialog.component */
    "./src/app/warning-dialog/warning-dialog.component.ts");
    /* harmony import */


    var _admin_orders_orders_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./admin/orders/orders.component */
    "./src/app/admin/orders/orders.component.ts");
    /* harmony import */


    var _admin_students_students_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./admin/students/students.component */
    "./src/app/admin/students/students.component.ts");
    /* harmony import */


    var _admin_lecturers_lecturers_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./admin/lecturers/lecturers.component */
    "./src/app/admin/lecturers/lecturers.component.ts");
    /* harmony import */


    var _admin_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./admin/transactions/transactions.component */
    "./src/app/admin/transactions/transactions.component.ts");
    /* harmony import */


    var _profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./profile-card/profile-card.component */
    "./src/app/profile-card/profile-card.component.ts");
    /* harmony import */


    var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./checkout/checkout.component */
    "./src/app/checkout/checkout.component.ts");
    /* harmony import */


    var _orders_orders_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./orders/orders.component */
    "./src/app/orders/orders.component.ts");
    /* harmony import */


    var _order_items_order_items_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./order-items/order-items.component */
    "./src/app/order-items/order-items.component.ts");
    /* harmony import */


    var _student_profile_student_profile_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./student-profile/student-profile.component */
    "./src/app/student-profile/student-profile.component.ts");
    /* harmony import */


    var _lecturer_lecturer_profile_lecturer_profile_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./lecturer/lecturer-profile/lecturer-profile.component */
    "./src/app/lecturer/lecturer-profile/lecturer-profile.component.ts");
    /* harmony import */


    var _lecturer_lecturer_transaction_lecturer_transaction_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./lecturer/lecturer-transaction/lecturer-transaction.component */
    "./src/app/lecturer/lecturer-transaction/lecturer-transaction.component.ts");
    /* harmony import */


    var _admin_change_order_status_modal_change_order_status_modal_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./admin/change-order-status-modal/change-order-status-modal.component */
    "./src/app/admin/change-order-status-modal/change-order-status-modal.component.ts");
    /* harmony import */


    var _lecturer_lecturer_books_lecturer_books_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./lecturer/lecturer-books/lecturer-books.component */
    "./src/app/lecturer/lecturer-books/lecturer-books.component.ts"); // this function retrieves the token


    function tokenGetter() {
      return localStorage.getItem("access_token");
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"], _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_13__["HomepageComponent"], _book_item_book_item_component__WEBPACK_IMPORTED_MODULE_14__["BookItemComponent"], _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_15__["BookListComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_17__["SignupComponent"], _books_books_component__WEBPACK_IMPORTED_MODULE_18__["BooksComponent"], _book_search_bar_book_search_bar_component__WEBPACK_IMPORTED_MODULE_19__["BookSearchBarComponent"], _book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_20__["BookDetailComponent"], _cart_cart_component__WEBPACK_IMPORTED_MODULE_21__["CartComponent"], _cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_22__["CartItemComponent"], _admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_23__["AdminDashboardComponent"], _admin_books_books_component__WEBPACK_IMPORTED_MODULE_24__["BooksComponent"], _admin_sidebar_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_25__["SidebarComponent"], _base_modal_base_modal_component__WEBPACK_IMPORTED_MODULE_26__["BaseModalComponent"], _admin_edit_book_modal_edit_book_modal_component__WEBPACK_IMPORTED_MODULE_27__["EditBookModalComponent"], _warning_dialog_warning_dialog_component__WEBPACK_IMPORTED_MODULE_28__["WarningDialogComponent"], _admin_orders_orders_component__WEBPACK_IMPORTED_MODULE_29__["OrdersComponent"], _admin_students_students_component__WEBPACK_IMPORTED_MODULE_30__["StudentsComponent"], _admin_lecturers_lecturers_component__WEBPACK_IMPORTED_MODULE_31__["LecturersComponent"], _admin_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_32__["TransactionsComponent"], _profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_33__["ProfileCardComponent"], _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_34__["CheckoutComponent"], _orders_orders_component__WEBPACK_IMPORTED_MODULE_35__["OrdersComponent"], _order_items_order_items_component__WEBPACK_IMPORTED_MODULE_36__["OrderItemsComponent"], _student_profile_student_profile_component__WEBPACK_IMPORTED_MODULE_37__["StudentProfileComponent"], _lecturer_lecturer_profile_lecturer_profile_component__WEBPACK_IMPORTED_MODULE_38__["LecturerProfileComponent"], _lecturer_lecturer_transaction_lecturer_transaction_component__WEBPACK_IMPORTED_MODULE_39__["LecturerTransactionComponent"], _admin_change_order_status_modal_change_order_status_modal_component__WEBPACK_IMPORTED_MODULE_40__["ChangeOrderStatusModalComponent"], _lecturer_lecturer_books_lecturer_books_component__WEBPACK_IMPORTED_MODULE_41__["LecturerBooksComponent"]],
      entryComponents: [_base_modal_base_modal_component__WEBPACK_IMPORTED_MODULE_26__["BaseModalComponent"], _admin_edit_book_modal_edit_book_modal_component__WEBPACK_IMPORTED_MODULE_27__["EditBookModalComponent"], _warning_dialog_warning_dialog_component__WEBPACK_IMPORTED_MODULE_28__["WarningDialogComponent"], _profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_33__["ProfileCardComponent"], _admin_change_order_status_modal_change_order_status_modal_component__WEBPACK_IMPORTED_MODULE_40__["ChangeOrderStatusModalComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], angular_font_awesome__WEBPACK_IMPORTED_MODULE_12__["AngularFontAwesomeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot({
        progressBar: true,
        timeOut: 5000,
        maxOpened: 1
      }), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_8__["JwtModule"].forRoot({
        config: {
          tokenGetter: tokenGetter,
          allowedDomains: ["localhost:4100"],
          disallowedRoutes: ["localhost:4100/api/auth/"]
        }
      }), angular4_paystack__WEBPACK_IMPORTED_MODULE_9__["Angular4PaystackModule"].forRoot("pk_test_c3cd2b6a8c267691e93f3b29ab8c015061618895")],
      providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbActiveModal"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth.guard.ts":
  /*!*******************************!*\
    !*** ./src/app/auth.guard.ts ***!
    \*******************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
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

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(router) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (localStorage.getItem("access_token")) {
            return true;
          } else {
            this.router.navigate(["/login"]);
            return false;
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AuthGuard);
    /***/
  },

  /***/
  "./src/app/base-modal/base-modal.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/base-modal/base-modal.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBaseModalBaseModalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhc2UtbW9kYWwvYmFzZS1tb2RhbC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/base-modal/base-modal.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/base-modal/base-modal.component.ts ***!
    \****************************************************/

  /*! exports provided: BaseModalComponent */

  /***/
  function srcAppBaseModalBaseModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseModalComponent", function () {
      return BaseModalComponent;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    var BaseModalComponent = /*#__PURE__*/function () {
      function BaseModalComponent(activeModal) {
        _classCallCheck(this, BaseModalComponent);

        this.activeModal = activeModal;
      }

      _createClass(BaseModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BaseModalComponent;
    }();

    BaseModalComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], BaseModalComponent.prototype, "title", void 0);
    BaseModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-base-modal",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./base-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/base-modal/base-modal.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./base-modal.component.css */
      "./src/app/base-modal/base-modal.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])], BaseModalComponent);
    /***/
  },

  /***/
  "./src/app/book-detail/book-detail.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/book-detail/book-detail.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBookDetailBookDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2stZGV0YWlsL2Jvb2stZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/book-detail/book-detail.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/book-detail/book-detail.component.ts ***!
    \******************************************************/

  /*! exports provided: BookDetailComponent */

  /***/
  function srcAppBookDetailBookDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookDetailComponent", function () {
      return BookDetailComponent;
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


    var _services_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/book.service */
    "./src/app/services/book.service.ts");
    /* harmony import */


    var _services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/notification.service */
    "./src/app/services/notification.service.ts");
    /* harmony import */


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var BookDetailComponent = /*#__PURE__*/function () {
      function BookDetailComponent(activatedRoute, bookService, notifyService, cartService, jwtService, authService) {
        _classCallCheck(this, BookDetailComponent);

        this.activatedRoute = activatedRoute;
        this.bookService = bookService;
        this.notifyService = notifyService;
        this.cartService = cartService;
        this.jwtService = jwtService;
        this.authService = authService;
        console.log();
      }

      _createClass(BookDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this20 = this;

          this.bookId = this.activatedRoute.snapshot.params.id;
          this.bookService.getBook(this.bookId).subscribe(function (book) {
            _this20.book = book;
            console.log(book);
          }, function (reason) {
            console.log(reason);

            _this20.notifyService.showError("We we unable to contact server", "Operation failed");
          });
          this.authService.userStatusChanges.subscribe(function (x) {
            return _this20.userStatus = x;
          });
        }
      }, {
        key: "onAddToCart",
        value: function onAddToCart() {
          var _this21 = this;

          var formData = {
            bookId: this.bookId,
            quantity: 1,
            studentId: null
          };
          var decoded = this.jwtService.decodeToken(this.userStatus);

          if (!decoded) {
            return this.notifyService.showError("You must login before you can start adding items to cart", "Operation failed");
          }

          if (Math.floor(Date.now() / 1000) > decoded["exp"]) {
            return this.notifyService.showError("Your token has expired login again", "Operation failed");
          }

          if (decoded["type"] !== "Student") {
            this.notifyService.showWarning("Only students can add items to cart.", "Warning");
            return;
          }

          formData.studentId = decoded["user"];
          this.cartService.saveToCart(formData).subscribe(function (res) {
            if (res.success) {
              _this21.notifyService.showSuccess("book has been added to cart", "Success");

              _this21.cartService.refreshTotalItems();
            } else {
              _this21.notifyService.showWarning(res.message, "Warning");
            }

            console.log(res);
          }, function (reason) {
            console.log(reason);
            return _this21.notifyService.showError("We were unable to add your item to cart, try again", "Operation failed");
          });
        }
      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          //Called after every check of the component's or directive's content.
          //Add 'implements AfterContentChecked' to the class.
          this.authService.getStatusOnRefresh();
        }
      }]);

      return BookDetailComponent;
    }();

    BookDetailComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"]
      }, {
        type: _services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]
      }, {
        type: _services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]
      }, {
        type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__["JwtHelperService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
      }];
    };

    BookDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-book-detail",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./book-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/book-detail/book-detail.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./book-detail.component.css */
      "./src/app/book-detail/book-detail.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"], _services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"], _services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__["JwtHelperService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])], BookDetailComponent);
    /***/
  },

  /***/
  "./src/app/book-item/book-item.component.css":
  /*!***************************************************!*\
    !*** ./src/app/book-item/book-item.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBookItemBookItemComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2staXRlbS9ib29rLWl0ZW0uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/book-item/book-item.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/book-item/book-item.component.ts ***!
    \**************************************************/

  /*! exports provided: BookItemComponent */

  /***/
  function srcAppBookItemBookItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookItemComponent", function () {
      return BookItemComponent;
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


    var _models_Book_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/Book.model */
    "./src/app/models/Book.model.ts");

    var BookItemComponent = /*#__PURE__*/function () {
      function BookItemComponent() {
        _classCallCheck(this, BookItemComponent);
      }

      _createClass(BookItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BookItemComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_Book_model__WEBPACK_IMPORTED_MODULE_2__["Book"])], BookItemComponent.prototype, "book", void 0);
    BookItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-book-item",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./book-item.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/book-item/book-item.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./book-item.component.css */
      "./src/app/book-item/book-item.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], BookItemComponent);
    /***/
  },

  /***/
  "./src/app/book-list/book-list.component.css":
  /*!***************************************************!*\
    !*** ./src/app/book-list/book-list.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBookListBookListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2stbGlzdC9ib29rLWxpc3QuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/book-list/book-list.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/book-list/book-list.component.ts ***!
    \**************************************************/

  /*! exports provided: BookListComponent */

  /***/
  function srcAppBookListBookListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookListComponent", function () {
      return BookListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BookListComponent = /*#__PURE__*/function () {
      function BookListComponent() {
        _classCallCheck(this, BookListComponent);
      }

      _createClass(BookListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BookListComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], BookListComponent.prototype, "books", void 0);
    BookListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-book-list",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./book-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/book-list/book-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./book-list.component.css */
      "./src/app/book-list/book-list.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], BookListComponent);
    /***/
  },

  /***/
  "./src/app/book-search-bar/book-search-bar.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/book-search-bar/book-search-bar.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBookSearchBarBookSearchBarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2stc2VhcmNoLWJhci9ib29rLXNlYXJjaC1iYXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/book-search-bar/book-search-bar.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/book-search-bar/book-search-bar.component.ts ***!
    \**************************************************************/

  /*! exports provided: BookSearchBarComponent */

  /***/
  function srcAppBookSearchBarBookSearchBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookSearchBarComponent", function () {
      return BookSearchBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BookSearchBarComponent = /*#__PURE__*/function () {
      function BookSearchBarComponent() {
        _classCallCheck(this, BookSearchBarComponent);

        this.model = {
          searchquery: ""
        };
        this.searchquery = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(BookSearchBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.searchquery.emit(this.model.searchquery);
          console.log(this.model);
        }
      }]);

      return BookSearchBarComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], BookSearchBarComponent.prototype, "searchquery", void 0);
    BookSearchBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-book-search-bar",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./book-search-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/book-search-bar/book-search-bar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./book-search-bar.component.css */
      "./src/app/book-search-bar/book-search-bar.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], BookSearchBarComponent);
    /***/
  },

  /***/
  "./src/app/books/books.component.css":
  /*!*******************************************!*\
    !*** ./src/app/books/books.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppBooksBooksComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tzL2Jvb2tzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/books/books.component.ts":
  /*!******************************************!*\
    !*** ./src/app/books/books.component.ts ***!
    \******************************************/

  /*! exports provided: BooksComponent */

  /***/
  function srcAppBooksBooksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BooksComponent", function () {
      return BooksComponent;
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


    var _services_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/book.service */
    "./src/app/services/book.service.ts");
    /* harmony import */


    var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/notification.service */
    "./src/app/services/notification.service.ts");

    var BooksComponent = /*#__PURE__*/function () {
      function BooksComponent(bookService, notifyService) {
        _classCallCheck(this, BooksComponent);

        this.bookService = bookService;
        this.notifyService = notifyService;
        this.model = {
          searchquery: ""
        };
      }

      _createClass(BooksComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadBooks();
        }
      }, {
        key: "loadBooks",
        value: function loadBooks() {
          var _this22 = this;

          var searchquery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
          this.bookService.getBooks("", null, searchquery).subscribe(function (books) {
            _this22.books = books;
          }, function (reason) {
            console.log(reason);

            _this22.notifyService.showError("We were unable to contact server.", "Operation Failed");
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.loadBooks(this.model.searchquery);
        }
      }]);

      return BooksComponent;
    }();

    BooksComponent.ctorParameters = function () {
      return [{
        type: _services_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"]
      }, {
        type: _services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]
      }];
    };

    BooksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-books",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./books.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/books/books.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./books.component.css */
      "./src/app/books/books.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"], _services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]])], BooksComponent);
    /***/
  },

  /***/
  "./src/app/cart-item/cart-item.component.css":
  /*!***************************************************!*\
    !*** ./src/app/cart-item/cart-item.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCartItemCartItemComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQtaXRlbS9jYXJ0LWl0ZW0uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/cart-item/cart-item.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/cart-item/cart-item.component.ts ***!
    \**************************************************/

  /*! exports provided: CartItemComponent */

  /***/
  function srcAppCartItemCartItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartItemComponent", function () {
      return CartItemComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CartItemComponent = /*#__PURE__*/function () {
      function CartItemComponent() {
        _classCallCheck(this, CartItemComponent);
      }

      _createClass(CartItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CartItemComponent;
    }();

    CartItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cart-item',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cart-item.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cart-item/cart-item.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cart-item.component.css */
      "./src/app/cart-item/cart-item.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CartItemComponent);
    /***/
  },

  /***/
  "./src/app/cart/cart.component.css":
  /*!*****************************************!*\
    !*** ./src/app/cart/cart.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppCartCartComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/cart/cart.component.ts":
  /*!****************************************!*\
    !*** ./src/app/cart/cart.component.ts ***!
    \****************************************/

  /*! exports provided: CartComponent */

  /***/
  function srcAppCartCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
      return CartComponent;
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


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _warning_dialog_warning_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../warning-dialog/warning-dialog.component */
    "./src/app/warning-dialog/warning-dialog.component.ts");
    /* harmony import */


    var _services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/notification.service */
    "./src/app/services/notification.service.ts");

    var CartComponent = /*#__PURE__*/function () {
      function CartComponent(cartService, jwtService, authService, modalService, notifyService) {
        _classCallCheck(this, CartComponent);

        this.cartService = cartService;
        this.jwtService = jwtService;
        this.authService = authService;
        this.modalService = modalService;
        this.notifyService = notifyService;
      }

      _createClass(CartComponent, [{
        key: "calculateTotalPrice",
        value: function calculateTotalPrice() {
          this.totalPrice = this.cart.reduce(function (acc, cart) {
            return acc + Number(cart["Book"]["price"]);
          }, 0);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this23 = this;

          var id;
          this.authService.getStatusOnRefresh();
          var decoded = this.jwtService.decodeToken(this.authService.userStatus);

          if (decoded) {
            id = decoded["user"];
            this.cartService.getCartItems(id).subscribe(function (cart) {
              _this23.cart = cart;
              _this23.totalItems = cart.length;

              _this23.calculateTotalPrice();
            });
          }
        }
      }, {
        key: "onDelete",
        value: function onDelete(id) {
          var _this24 = this;

          console.log(id);
          var modalRef = this.modalService.open(_warning_dialog_warning_dialog_component__WEBPACK_IMPORTED_MODULE_6__["WarningDialogComponent"]);
          modalRef.componentInstance.title = "Warning";
          modalRef.componentInstance.message = "Are you sure you want to remove this item from Cart?";
          modalRef.result.then(function (action) {
            if (action === "continue") {
              _this24.cartService.deleteCartItem(id).subscribe(function (res) {
                if (res.success) {
                  _this24.notifyService.showSuccess("book has been removed from cart", "Success");

                  var index = _this24.cart.findIndex(function (item) {
                    return item.id == id;
                  });

                  if (index !== -1) _this24.cart.splice(index, 1);

                  _this24.cartService.refreshTotalItems();

                  _this24.calculateTotalPrice();

                  _this24.totalItems = _this24.cart.length;
                } else {
                  _this24.notifyService.showError(res.message, "Operation Failed");
                }
              }, function (reason) {
                _this24.notifyService.showError("We were unable to remove item from cart", "Operation Failed");
              });
            }
          })["catch"](function (reason) {});
        }
      }]);

      return CartComponent;
    }();

    CartComponent.ctorParameters = function () {
      return [{
        type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
      }, {
        type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
      }, {
        type: _services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]
      }];
    };

    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-cart",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cart.component.css */
      "./src/app/cart/cart.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"], _services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]])], CartComponent);
    /***/
  },

  /***/
  "./src/app/checkout/checkout.component.css":
  /*!*************************************************!*\
    !*** ./src/app/checkout/checkout.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCheckoutCheckoutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0L2NoZWNrb3V0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/checkout/checkout.component.ts":
  /*!************************************************!*\
    !*** ./src/app/checkout/checkout.component.ts ***!
    \************************************************/

  /*! exports provided: CheckoutComponent */

  /***/
  function srcAppCheckoutCheckoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function () {
      return CheckoutComponent;
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


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");
    /* harmony import */


    var _services_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/order.service */
    "./src/app/services/order.service.ts");
    /* harmony import */


    var _services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/notification.service */
    "./src/app/services/notification.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var CheckoutComponent = /*#__PURE__*/function () {
      function CheckoutComponent(cartService, authService, jwtService, orderService, notifyService, router) {
        _classCallCheck(this, CheckoutComponent);

        this.cartService = cartService;
        this.authService = authService;
        this.jwtService = jwtService;
        this.orderService = orderService;
        this.notifyService = notifyService;
        this.router = router;
        this.currentUser = {};
      }

      _createClass(CheckoutComponent, [{
        key: "calculateTotalPrice",
        value: function calculateTotalPrice() {
          this.totalPrice = this.cart.reduce(function (acc, cart) {
            return acc + Number(cart["Book"]["price"]);
          }, 0);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this25 = this;

          var id;
          this.authService.getStatusOnRefresh();
          var decoded = this.jwtService.decodeToken(this.authService.userStatus);

          if (decoded) {
            id = decoded["user"];
            this.cartService.getCartItems(id).subscribe(function (cart) {
              _this25.cart = cart;

              _this25.calculateTotalPrice();
            });
          }

          this.authService.getCurrentUser().subscribe(function (res) {
            console.log(res);

            if (res.success) {
              _this25.currentUser = res.user;
            }
          }, function (reason) {
            console.log(reason);
          });
          this.reference = "ref-".concat(Math.ceil(Math.random() * 10e13));
        }
      }, {
        key: "paymentCancel",
        value: function paymentCancel() {
          console.log("canceled");
        }
      }, {
        key: "paymentDone",
        value: function paymentDone(paymentInfo) {
          var _this26 = this;

          var orderData = {
            studentId: this.currentUser.id,
            paymentRef: paymentInfo["reference"]
          };
          this.orderService.saveOrder(orderData).subscribe(function (res) {
            console.log(res);

            if (res.success) {
              _this26.notifyService.showSuccess("Your order was successful, please always check your order page to see the status.", "Success");

              _this26.router.navigate(["/books/"]);

              _this26.cartService.refreshTotalItems();
            } else {
              _this26.notifyService.showError("We encountered a problem while creating your request.", "Operation Failed");
            }
          }, function (reason) {
            console.log(reason);

            _this26.notifyService.showError("We were unable to process your request.", "Operation Failed");
          });
        }
      }]);

      return CheckoutComponent;
    }();

    CheckoutComponent.ctorParameters = function () {
      return [{
        type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]
      }, {
        type: _services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]
      }, {
        type: _services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }];
    };

    CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-checkout",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./checkout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./checkout.component.css */
      "./src/app/checkout/checkout.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"], _services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"], _services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])], CheckoutComponent);
    /***/
  },

  /***/
  "./src/app/homepage/homepage.component.css":
  /*!*************************************************!*\
    !*** ./src/app/homepage/homepage.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomepageHomepageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/homepage/homepage.component.ts":
  /*!************************************************!*\
    !*** ./src/app/homepage/homepage.component.ts ***!
    \************************************************/

  /*! exports provided: HomepageComponent */

  /***/
  function srcAppHomepageHomepageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomepageComponent", function () {
      return HomepageComponent;
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


    var _services_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/book.service */
    "./src/app/services/book.service.ts");
    /* harmony import */


    var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/notification.service */
    "./src/app/services/notification.service.ts");

    var HomepageComponent = /*#__PURE__*/function () {
      function HomepageComponent(bookService, notifyService) {
        _classCallCheck(this, HomepageComponent);

        this.bookService = bookService;
        this.notifyService = notifyService;
      }

      _createClass(HomepageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this27 = this;

          this.bookService.getBooks("", 4).subscribe(function (books) {
            _this27.books = books;
          }, function (reason) {
            console.log(reason);

            _this27.notifyService.showError("We were unable to contact server.", "Operation Failed");
          });
        }
      }]);

      return HomepageComponent;
    }();

    HomepageComponent.ctorParameters = function () {
      return [{
        type: _services_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"]
      }, {
        type: _services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]
      }];
    };

    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-homepage",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./homepage.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./homepage.component.css */
      "./src/app/homepage/homepage.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"], _services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]])], HomepageComponent);
    /***/
  },

  /***/
  "./src/app/lecturer/lecturer-books/lecturer-books.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/lecturer/lecturer-books/lecturer-books.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLecturerLecturerBooksLecturerBooksComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlY3R1cmVyL2xlY3R1cmVyLWJvb2tzL2xlY3R1cmVyLWJvb2tzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/lecturer/lecturer-books/lecturer-books.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/lecturer/lecturer-books/lecturer-books.component.ts ***!
    \*********************************************************************/

  /*! exports provided: LecturerBooksComponent */

  /***/
  function srcAppLecturerLecturerBooksLecturerBooksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LecturerBooksComponent", function () {
      return LecturerBooksComponent;
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


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_book_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/book.service */
    "./src/app/services/book.service.ts");

    var LecturerBooksComponent = /*#__PURE__*/function () {
      function LecturerBooksComponent(bookService, authService, jwtService) {
        _classCallCheck(this, LecturerBooksComponent);

        this.bookService = bookService;
        this.authService = authService;
        this.jwtService = jwtService;
        this.books = [];
      }

      _createClass(LecturerBooksComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this28 = this;

          this.authService.userStatusChanges.subscribe(function (x) {
            return _this28.userStatus = x;
          });
          var decoded = this.jwtService.decodeToken(this.userStatus);
          this.lecturerId = decoded["user"];
          this.bookService.getBooks(this.lecturerId).subscribe(function (books) {
            _this28.books = books;
          }, function (reason) {
            console.log(reason);
          });
        }
      }]);

      return LecturerBooksComponent;
    }();

    LecturerBooksComponent.ctorParameters = function () {
      return [{
        type: src_app_services_book_service__WEBPACK_IMPORTED_MODULE_4__["BookService"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]
      }];
    };

    LecturerBooksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-lecturer-books",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./lecturer-books.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/lecturer/lecturer-books/lecturer-books.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./lecturer-books.component.css */
      "./src/app/lecturer/lecturer-books/lecturer-books.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_book_service__WEBPACK_IMPORTED_MODULE_4__["BookService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]])], LecturerBooksComponent);
    /***/
  },

  /***/
  "./src/app/lecturer/lecturer-profile/lecturer-profile.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/lecturer/lecturer-profile/lecturer-profile.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLecturerLecturerProfileLecturerProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlY3R1cmVyL2xlY3R1cmVyLXByb2ZpbGUvbGVjdHVyZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/lecturer/lecturer-profile/lecturer-profile.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/lecturer/lecturer-profile/lecturer-profile.component.ts ***!
    \*************************************************************************/

  /*! exports provided: LecturerProfileComponent */

  /***/
  function srcAppLecturerLecturerProfileLecturerProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LecturerProfileComponent", function () {
      return LecturerProfileComponent;
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


    var src_app_models_Lecturer_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/Lecturer.model */
    "./src/app/models/Lecturer.model.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_department_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/department.service */
    "./src/app/services/department.service.ts");
    /* harmony import */


    var src_app_services_lecturer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/lecturer.service */
    "./src/app/services/lecturer.service.ts");
    /* harmony import */


    var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/notification.service */
    "./src/app/services/notification.service.ts");

    var LecturerProfileComponent = /*#__PURE__*/function () {
      function LecturerProfileComponent(lecturerService, departmentService, authService, notifyService) {
        _classCallCheck(this, LecturerProfileComponent);

        this.lecturerService = lecturerService;
        this.departmentService = departmentService;
        this.authService = authService;
        this.notifyService = notifyService;
        this.userProfile = new src_app_models_Lecturer_model__WEBPACK_IMPORTED_MODULE_2__["Lecturer"](null, "", "", "", null, "", "");
        this.userPassword = {
          password: "",
          confirmpwd: ""
        };
      }

      _createClass(LecturerProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this29 = this;

          this.authService.getCurrentUser().subscribe(function (res) {
            console.log(res);

            if (res.success) {
              _this29.userProfile = res["user"];
            }
          }, function (reason) {
            console.log(reason);
          });
          this.departmentService.getDepartments().subscribe(function (departments) {
            _this29.departments = departments;
          }, function (reason) {
            console.log(reason);
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this30 = this;

          this.lecturerService.updateLecturer(this.userProfile).subscribe(function (res) {
            if (res.success) {
              _this30.notifyService.showSuccess("Updated successfully", "Success");
            }
          }, function (reason) {
            _this30.notifyService.showSuccess("We encountered an error while updating your details", "Operation Failed");
          });
        }
      }, {
        key: "onChangePassword",
        value: function onChangePassword() {
          var _this31 = this;

          this.lecturerService.changePassword({
            password: this.userPassword.password,
            id: this.userProfile.id
          }).subscribe(function (res) {
            if (res.success) {
              _this31.notifyService.showSuccess("Password changed", "Success");

              _this31.authService.logout();
            }
          }, function (reason) {
            _this31.notifyService.showError("We encountered an error while updating your password", "Operation Failed");
          });
        }
      }]);

      return LecturerProfileComponent;
    }();

    LecturerProfileComponent.ctorParameters = function () {
      return [{
        type: src_app_services_lecturer_service__WEBPACK_IMPORTED_MODULE_5__["LecturerService"]
      }, {
        type: src_app_services_department_service__WEBPACK_IMPORTED_MODULE_4__["DepartmentService"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]
      }];
    };

    LecturerProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-lecturer-profile",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./lecturer-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/lecturer/lecturer-profile/lecturer-profile.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./lecturer-profile.component.css */
      "./src/app/lecturer/lecturer-profile/lecturer-profile.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_lecturer_service__WEBPACK_IMPORTED_MODULE_5__["LecturerService"], src_app_services_department_service__WEBPACK_IMPORTED_MODULE_4__["DepartmentService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]])], LecturerProfileComponent);
    /***/
  },

  /***/
  "./src/app/lecturer/lecturer-transaction/lecturer-transaction.component.css":
  /*!**********************************************************************************!*\
    !*** ./src/app/lecturer/lecturer-transaction/lecturer-transaction.component.css ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLecturerLecturerTransactionLecturerTransactionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlY3R1cmVyL2xlY3R1cmVyLXRyYW5zYWN0aW9uL2xlY3R1cmVyLXRyYW5zYWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/lecturer/lecturer-transaction/lecturer-transaction.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/lecturer/lecturer-transaction/lecturer-transaction.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: LecturerTransactionComponent */

  /***/
  function srcAppLecturerLecturerTransactionLecturerTransactionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LecturerTransactionComponent", function () {
      return LecturerTransactionComponent;
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


    var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/order.service */
    "./src/app/services/order.service.ts");

    var LecturerTransactionComponent = /*#__PURE__*/function () {
      function LecturerTransactionComponent(orderService, activatedRoute) {
        _classCallCheck(this, LecturerTransactionComponent);

        this.orderService = orderService;
        this.activatedRoute = activatedRoute;
      }

      _createClass(LecturerTransactionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this32 = this;

          var bookid = this.activatedRoute.snapshot.params.bid;
          this.orderService.getOrderItems("", bookid).subscribe(function (res) {
            if (res.success) {
              _this32.transactions = res["orderItems"].sort(function (a, b) {
                return new Date(b.Order.createdAt).getTime() - new Date(a.Order.createdAt).getTime();
              });
              console.log(_this32.transactions);
            }
          });
        }
      }]);

      return LecturerTransactionComponent;
    }();

    LecturerTransactionComponent.ctorParameters = function () {
      return [{
        type: src_app_services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    LecturerTransactionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-lecturer-transaction",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./lecturer-transaction.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/lecturer/lecturer-transaction/lecturer-transaction.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./lecturer-transaction.component.css */
      "./src/app/lecturer/lecturer-transaction/lecturer-transaction.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], LecturerTransactionComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/cart.service */
    "./src/app/services/cart.service.ts");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(authService, cartService) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this.cartService = cartService;
        this.model = {
          emailAddress: "",
          password: "",
          userType: "student"
        };
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login() {
          var _this33 = this;

          this.isContactingServer = true;
          var redirectUrl;

          switch (this.model.userType) {
            case "admin":
              redirectUrl = "/admin/dashboard/";
              break;

            case "lecturer":
              redirectUrl = "/lecturer/books";
              break;

            default:
              redirectUrl = "/books";
          }

          this.authService.login(redirectUrl, this.model, function () {
            _this33.cartService.refreshTotalItems();

            _this33.isContactingServer = false;
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-login",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]])], LoginComponent);
    /***/
  },

  /***/
  "./src/app/models/Book.model.ts":
  /*!**************************************!*\
    !*** ./src/app/models/Book.model.ts ***!
    \**************************************/

  /*! exports provided: Book */

  /***/
  function srcAppModelsBookModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Book", function () {
      return Book;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Book = function Book(id, lecturerId, title, description, inStock, price, coverPage, authors) {
      _classCallCheck(this, Book);

      this.id = id;
      this.lecturerId = lecturerId;
      this.title = title;
      this.description = description;
      this.inStock = inStock;
      this.price = price;
      this.coverPage = coverPage;
      this.authors = authors;
    };
    /***/

  },

  /***/
  "./src/app/models/ImageSnippet.ts":
  /*!****************************************!*\
    !*** ./src/app/models/ImageSnippet.ts ***!
    \****************************************/

  /*! exports provided: ImageSnippet */

  /***/
  function srcAppModelsImageSnippetTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageSnippet", function () {
      return ImageSnippet;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ImageSnippet = function ImageSnippet(src, file) {
      _classCallCheck(this, ImageSnippet);

      this.src = src;
      this.file = file;
      this.pending = false;
      this.status = "init";
    };
    /***/

  },

  /***/
  "./src/app/models/Lecturer.model.ts":
  /*!******************************************!*\
    !*** ./src/app/models/Lecturer.model.ts ***!
    \******************************************/

  /*! exports provided: Lecturer */

  /***/
  function srcAppModelsLecturerModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Lecturer", function () {
      return Lecturer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Lecturer = function Lecturer(id, firstname, lastname, othernames, deptId, emailAddress, password, avatar, activated) {
      _classCallCheck(this, Lecturer);

      this.id = id;
      this.firstname = firstname;
      this.lastname = lastname;
      this.othernames = othernames;
      this.deptId = deptId;
      this.emailAddress = emailAddress;
      this.password = password;
      this.avatar = avatar;
      this.activated = activated;
    };
    /***/

  },

  /***/
  "./src/app/models/Student.model.ts":
  /*!*****************************************!*\
    !*** ./src/app/models/Student.model.ts ***!
    \*****************************************/

  /*! exports provided: Student */

  /***/
  function srcAppModelsStudentModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Student", function () {
      return Student;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Student = function Student(id, firstname, lastname, othernames, deptId, matricNo, emailAddress, password, avatar) {
      _classCallCheck(this, Student);

      this.id = id;
      this.firstname = firstname;
      this.lastname = lastname;
      this.othernames = othernames;
      this.deptId = deptId;
      this.matricNo = matricNo;
      this.emailAddress = emailAddress;
      this.password = password;
      this.avatar = avatar;
    };
    /***/

  },

  /***/
  "./src/app/order-items/order-items.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/order-items/order-items.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOrderItemsOrderItemsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyLWl0ZW1zL29yZGVyLWl0ZW1zLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/order-items/order-items.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/order-items/order-items.component.ts ***!
    \******************************************************/

  /*! exports provided: OrderItemsComponent */

  /***/
  function srcAppOrderItemsOrderItemsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderItemsComponent", function () {
      return OrderItemsComponent;
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


    var _services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/order.service */
    "./src/app/services/order.service.ts");
    /* harmony import */


    var _services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/notification.service */
    "./src/app/services/notification.service.ts");

    var OrderItemsComponent = /*#__PURE__*/function () {
      function OrderItemsComponent(activatedRoute, orderService, notifyService) {
        _classCallCheck(this, OrderItemsComponent);

        this.activatedRoute = activatedRoute;
        this.orderService = orderService;
        this.notifyService = notifyService;
      }

      _createClass(OrderItemsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this34 = this;

          this.orderId = this.activatedRoute.snapshot.params.id;
          this.orderService.getOrderItems(this.orderId, null).subscribe(function (res) {
            console.log(res);
            _this34.orderItems = res["orderItems"];
          }, function (reason) {
            console.log(reason);

            _this34.notifyService.showError("We were unable to retreieve order items", "Operation failed");
          });
        }
      }]);

      return OrderItemsComponent;
    }();

    OrderItemsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]
      }, {
        type: _services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]
      }];
    };

    OrderItemsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-order-items",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./order-items.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/order-items/order-items.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./order-items.component.css */
      "./src/app/order-items/order-items.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"], _services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]])], OrderItemsComponent);
    /***/
  },

  /***/
  "./src/app/orders/orders.component.css":
  /*!*********************************************!*\
    !*** ./src/app/orders/orders.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppOrdersOrdersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9vcmRlcnMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/orders/orders.component.ts":
  /*!********************************************!*\
    !*** ./src/app/orders/orders.component.ts ***!
    \********************************************/

  /*! exports provided: OrdersComponent */

  /***/
  function srcAppOrdersOrdersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersComponent", function () {
      return OrdersComponent;
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


    var _services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/order.service */
    "./src/app/services/order.service.ts");
    /* harmony import */


    var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/notification.service */
    "./src/app/services/notification.service.ts");

    var OrdersComponent = /*#__PURE__*/function () {
      function OrdersComponent(orderService, notifyService) {
        _classCallCheck(this, OrdersComponent);

        this.orderService = orderService;
        this.notifyService = notifyService;
      }

      _createClass(OrdersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this35 = this;

          console.log("here");
          this.orderService.getOrders().subscribe(function (res) {
            console.log(res);
            _this35.orders = res["orders"];
          }, function (reason) {
            console.log(reason);

            _this35.notifyService.showError("We were unable to load your orders try again", "Operation failed");
          });
        }
      }]);

      return OrdersComponent;
    }();

    OrdersComponent.ctorParameters = function () {
      return [{
        type: _services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"]
      }, {
        type: _services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]
      }];
    };

    OrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-orders",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./orders.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./orders.component.css */
      "./src/app/orders/orders.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"], _services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]])], OrdersComponent);
    /***/
  },

  /***/
  "./src/app/profile-card/profile-card.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/profile-card/profile-card.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileCardProfileCardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUtY2FyZC9wcm9maWxlLWNhcmQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/profile-card/profile-card.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/profile-card/profile-card.component.ts ***!
    \********************************************************/

  /*! exports provided: ProfileCardComponent */

  /***/
  function srcAppProfileCardProfileCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileCardComponent", function () {
      return ProfileCardComponent;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    var ProfileCardComponent = /*#__PURE__*/function () {
      function ProfileCardComponent(activeModal) {
        _classCallCheck(this, ProfileCardComponent);

        this.activeModal = activeModal;
      }

      _createClass(ProfileCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProfileCardComponent;
    }();

    ProfileCardComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
      }];
    };

    ProfileCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-profile-card",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile-card/profile-card.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile-card.component.css */
      "./src/app/profile-card/profile-card.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])], ProfileCardComponent);
    /***/
  },

  /***/
  "./src/app/services/admin.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/admin.service.ts ***!
    \*******************************************/

  /*! exports provided: AdminService */

  /***/
  function srcAppServicesAdminServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminService", function () {
      return AdminService;
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


    var _core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./core.service */
    "./src/app/services/core.service.ts");

    var AdminService = /*#__PURE__*/function () {
      function AdminService(coreService) {
        _classCallCheck(this, AdminService);

        this.coreService = coreService;
        this.apiUrl = "api/admins/";
      }

      _createClass(AdminService, [{
        key: "getDashboardSummary",
        value: function getDashboardSummary() {
          return this.coreService.getData("".concat(this.apiUrl, "dashboard/summary"));
        }
      }, {
        key: "getNotifications",
        value: function getNotifications() {
          return this.coreService.getData("".concat(this.apiUrl, "notifications"));
        }
      }, {
        key: "deleteNotification",
        value: function deleteNotification(id) {
          return this.coreService.deleteData(id, "".concat(this.apiUrl, "notification"));
        }
      }]);

      return AdminService;
    }();

    AdminService.ctorParameters = function () {
      return [{
        type: _core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"]
      }];
    };

    AdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"]])], AdminService);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
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


    var _core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./core.service */
    "./src/app/services/core.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./notification.service */
    "./src/app/services/notification.service.ts");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(coreService, router, notifyService, jwtService) {
        _classCallCheck(this, AuthService);

        this.coreService = coreService;
        this.router = router;
        this.notifyService = notifyService;
        this.jwtService = jwtService;
        this.userStatusChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]("");
        this.apiUrl = "api/auth/login/";
      }

      _createClass(AuthService, [{
        key: "setUserStatus",
        value: function setUserStatus(userStatus) {
          this.userStatus = userStatus;
          this.userStatusChanges.next(userStatus);
        }
      }, {
        key: "login",
        value: function login(redirectUrl, formData, onComplete) {
          var _this36 = this;

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Content-Type", "application/json"); // send a post request

          this.coreService.postData(formData, this.apiUrl, headers).subscribe(function (res) {
            if (res.success) {
              localStorage.setItem("access_token", res["token"]);

              _this36.setUserStatus(res["token"]);

              _this36.router.navigate([redirectUrl]);
            } else {
              _this36.notifyService.showWarning(res.message, "Operation failed");
            }
          }, function (reason) {
            _this36.notifyService.showError("Wrong email and password combination", "Operation failed");

            onComplete();
          }, function () {
            onComplete();
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          // just remove the access token and redirect
          console.log("user logged out successfully");
          localStorage.removeItem("access_token");
          this.setUserStatus(null);
          this.router.navigate(["/login"]);
        }
      }, {
        key: "getUserType",
        value: function getUserType() {
          var decoded = this.jwtService.decodeToken(this.userStatus);

          if (decoded) {
            return decoded["type"];
          }

          return null;
        }
      }, {
        key: "getStatusOnRefresh",
        value: function getStatusOnRefresh() {
          if (localStorage.getItem("access_token")) {
            var token = localStorage.getItem("access_token");
            var decoded = this.jwtService.decodeToken(token);

            if (Math.floor(Date.now() / 1000) > decoded["exp"]) {
              this.logout();
            }

            this.setUserStatus(localStorage.getItem("access_token"));
          }
        }
      }, {
        key: "getCurrentUser",
        value: function getCurrentUser() {
          return this.coreService.getData("api/currentuser");
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _core_service__WEBPACK_IMPORTED_MODULE_3__["CoreService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"]
      }, {
        type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__["JwtHelperService"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_service__WEBPACK_IMPORTED_MODULE_3__["CoreService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__["JwtHelperService"]])], AuthService);
    /***/
  },

  /***/
  "./src/app/services/author.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/author.service.ts ***!
    \********************************************/

  /*! exports provided: AuthorService */

  /***/
  function srcAppServicesAuthorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthorService", function () {
      return AuthorService;
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


    var _core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./core.service */
    "./src/app/services/core.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AuthorService = /*#__PURE__*/function () {
      function AuthorService(coreService) {
        _classCallCheck(this, AuthorService);

        this.coreService = coreService;
        this.apiUrl = "api/authors";
      }

      _createClass(AuthorService, [{
        key: "getAuthors",
        value: function getAuthors() {
          return this.coreService.getData(this.apiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (e) {
            return e.authors;
          }));
        }
      }, {
        key: "saveAuthor",
        value: function saveAuthor(newAuthor) {
          return this.coreService.postData(newAuthor, this.apiUrl);
        }
      }, {
        key: "updateAuthor",
        value: function updateAuthor(author) {
          return this.coreService.putData(author, this.apiUrl);
        }
      }, {
        key: "deleteAuthor",
        value: function deleteAuthor(id) {
          return this.coreService.deleteData(id, this.apiUrl);
        }
      }]);

      return AuthorService;
    }();

    AuthorService.ctorParameters = function () {
      return [{
        type: _core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"]
      }];
    };

    AuthorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"]])], AuthorService);
    /***/
  },

  /***/
  "./src/app/services/book.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/book.service.ts ***!
    \******************************************/

  /*! exports provided: BookService */

  /***/
  function srcAppServicesBookServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookService", function () {
      return BookService;
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


    var _core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./core.service */
    "./src/app/services/core.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var BookService = /*#__PURE__*/function () {
      function BookService(coreService) {
        _classCallCheck(this, BookService);

        this.coreService = coreService;
        this.apiUrl = "api/books/";
      }

      _createClass(BookService, [{
        key: "saveBook",
        value: function saveBook(newBook) {
          return this.coreService.postData(newBook, this.apiUrl);
        }
      }, {
        key: "getBooks",
        value: function getBooks() {
          var lecturerId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
          var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var searchquery = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
          return this.coreService.getData("".concat(this.apiUrl, "?lid=").concat(lecturerId, "&limit=").concat(limit, "&searchquery=").concat(searchquery)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (d) {
            return d.books;
          }));
        }
      }, {
        key: "getBook",
        value: function getBook(bookId) {
          return this.coreService.getData("".concat(this.apiUrl).concat(bookId, "/")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (d) {
            return d.book;
          }));
        }
      }, {
        key: "updateBook",
        value: function updateBook(book) {
          return this.coreService.putData(book, this.apiUrl);
        }
      }, {
        key: "deleteBook",
        value: function deleteBook(id) {
          return this.coreService.deleteData(id, this.apiUrl);
        }
      }]);

      return BookService;
    }();

    BookService.ctorParameters = function () {
      return [{
        type: _core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"]
      }];
    };

    BookService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"]])], BookService);
    /***/
  },

  /***/
  "./src/app/services/cart.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/cart.service.ts ***!
    \******************************************/

  /*! exports provided: CartService */

  /***/
  function srcAppServicesCartServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartService", function () {
      return CartService;
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


    var _core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./core.service */
    "./src/app/services/core.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");

    var CartService = /*#__PURE__*/function () {
      function CartService(coreService, authService, jwtService) {
        _classCallCheck(this, CartService);

        this.coreService = coreService;
        this.authService = authService;
        this.jwtService = jwtService;
        this.apiUrl = "api/cart/";
        this.totalItemsChanges = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
      }

      _createClass(CartService, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this37 = this;

          this.authService.userStatusChanges.subscribe(function (x) {
            return _this37.userStatus = x;
          });
        }
      }, {
        key: "saveToCart",
        value: function saveToCart(cartItem) {
          return this.coreService.postData(cartItem, this.apiUrl);
        }
      }, {
        key: "getCartItems",
        value: function getCartItems(studentId) {
          return this.coreService.getData("".concat(this.apiUrl, "?sid=").concat(studentId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (d) {
            return d["cart"];
          }));
        }
      }, {
        key: "deleteCartItem",
        value: function deleteCartItem(id) {
          return this.coreService.deleteData(id, this.apiUrl);
        }
      }, {
        key: "setTotalItems",
        value: function setTotalItems(totalItems) {
          this.totalItems = totalItems;
          this.totalItemsChanges.next(totalItems);
        }
      }, {
        key: "refreshTotalItems",
        value: function refreshTotalItems() {
          var _this38 = this;

          var decoded = this.jwtService.decodeToken(this.userStatus);
          var id;

          if (decoded) {
            if (decoded["type"] !== "Student") return;
            id = decoded["user"];
          } else {
            return;
          }

          this.coreService.getData("".concat(this.apiUrl, "total/?sid=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(5000)).subscribe(function (res) {
            _this38.setTotalItems(res["totalItems"]);
          });
        }
      }]);

      return CartService;
    }();

    CartService.ctorParameters = function () {
      return [{
        type: _core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__["JwtHelperService"]
      }];
    };

    CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"], _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__["JwtHelperService"]])], CartService);
    /***/
  },

  /***/
  "./src/app/services/core.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/core.service.ts ***!
    \******************************************/

  /*! exports provided: CoreService */

  /***/
  function srcAppServicesCoreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreService", function () {
      return CoreService;
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


    var _angular_common_http___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http/ */
    "./node_modules/@angular/common/fesm2015/http.js");

    var CoreService = /*#__PURE__*/function () {
      function CoreService(http) {
        _classCallCheck(this, CoreService);

        this.http = http;
        this.host = "http://localhost:4100/";
      }

      _createClass(CoreService, [{
        key: "getData",
        value: function getData(apiURL) {
          return this.http.get("".concat(this.host).concat(apiURL));
        }
      }, {
        key: "postData",
        value: function postData(data, apiURL, headers) {
          return this.http.post("".concat(this.host).concat(apiURL), data, {
            headers: headers
          });
        }
      }, {
        key: "putData",
        value: function putData(data, apiURL) {
          return this.http.put("".concat(this.host).concat(apiURL), data);
        }
      }, {
        key: "deleteData",
        value: function deleteData(id, apiURL) {
          var httpOptions = {
            headers: new _angular_common_http___WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              "Content-Type": "application/json"
            }),
            body: {
              id: id
            }
          };
          return this.http["delete"]("".concat(this.host).concat(apiURL), httpOptions);
        }
      }]);

      return CoreService;
    }();

    CoreService.ctorParameters = function () {
      return [{
        type: _angular_common_http___WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http___WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], CoreService);
    /***/
  },

  /***/
  "./src/app/services/department.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/department.service.ts ***!
    \************************************************/

  /*! exports provided: DepartmentService */

  /***/
  function srcAppServicesDepartmentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DepartmentService", function () {
      return DepartmentService;
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


    var _services_core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/core.service */
    "./src/app/services/core.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var DepartmentService = /*#__PURE__*/function () {
      function DepartmentService(coreService) {
        _classCallCheck(this, DepartmentService);

        this.coreService = coreService;
        this.apiUrl = "api/departments";
      }

      _createClass(DepartmentService, [{
        key: "getDepartments",
        value: function getDepartments() {
          return this.coreService.getData(this.apiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (e) {
            return e.departments;
          }));
        }
      }]);

      return DepartmentService;
    }();

    DepartmentService.ctorParameters = function () {
      return [{
        type: _services_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"]
      }];
    };

    DepartmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"]])], DepartmentService);
    /***/
  },

  /***/
  "./src/app/services/lecturer.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/lecturer.service.ts ***!
    \**********************************************/

  /*! exports provided: LecturerService */

  /***/
  function srcAppServicesLecturerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LecturerService", function () {
      return LecturerService;
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


    var _core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./core.service */
    "./src/app/services/core.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var LecturerService = /*#__PURE__*/function () {
      function LecturerService(coreService) {
        _classCallCheck(this, LecturerService);

        this.coreService = coreService;
        this.apiUrl = "api/lecturers";
      }

      _createClass(LecturerService, [{
        key: "registerLecturer",
        value: function registerLecturer(lecturer) {
          return this.coreService.postData(lecturer, this.apiUrl);
        }
      }, {
        key: "getLecturers",
        value: function getLecturers() {
          var searchquery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
          return this.coreService.getData(this.apiUrl + "?searchquery=" + searchquery).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (e) {
            return e.lecturers;
          }));
        }
      }, {
        key: "updateLecturer",
        value: function updateLecturer(lecturer) {
          return this.coreService.putData(lecturer, this.apiUrl);
        }
      }, {
        key: "changePassword",
        value: function changePassword(updatePassword) {
          return this.coreService.postData(updatePassword, this.apiUrl + "/changepassword/");
        }
      }]);

      return LecturerService;
    }();

    LecturerService.ctorParameters = function () {
      return [{
        type: _core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"]
      }];
    };

    LecturerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"]])], LecturerService);
    /***/
  },

  /***/
  "./src/app/services/notification.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/notification.service.ts ***!
    \**************************************************/

  /*! exports provided: NotificationService */

  /***/
  function srcAppServicesNotificationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationService", function () {
      return NotificationService;
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


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var NotificationService = /*#__PURE__*/function () {
      function NotificationService(toastr) {
        _classCallCheck(this, NotificationService);

        this.toastr = toastr;
      }

      _createClass(NotificationService, [{
        key: "showSuccess",
        value: function showSuccess(message, title) {
          this.toastr.success(message, title);
        }
      }, {
        key: "showError",
        value: function showError(message, title) {
          this.toastr.error(message, title);
        }
      }, {
        key: "showInfo",
        value: function showInfo(message, title) {
          this.toastr.info(message, title);
        }
      }, {
        key: "showWarning",
        value: function showWarning(message, title) {
          this.toastr.warning(message, title);
        }
      }]);

      return NotificationService;
    }();

    NotificationService.ctorParameters = function () {
      return [{
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
      }];
    };

    NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])], NotificationService);
    /***/
  },

  /***/
  "./src/app/services/order.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/order.service.ts ***!
    \*******************************************/

  /*! exports provided: OrderService */

  /***/
  function srcAppServicesOrderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderService", function () {
      return OrderService;
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


    var _core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./core.service */
    "./src/app/services/core.service.ts");

    var OrderService = /*#__PURE__*/function () {
      function OrderService(coreService) {
        _classCallCheck(this, OrderService);

        this.coreService = coreService;
        this.apiUrl = "api/orders";
      }

      _createClass(OrderService, [{
        key: "saveOrder",
        value: function saveOrder(order) {
          return this.coreService.postData(order, this.apiUrl);
        }
      }, {
        key: "getOrders",
        value: function getOrders() {
          return this.coreService.getData(this.apiUrl);
        }
      }, {
        key: "getAllOrders",
        value: function getAllOrders() {
          return this.coreService.getData(this.apiUrl + "/all");
        }
      }, {
        key: "getOrderItems",
        value: function getOrderItems(orderId, bookId) {
          return this.coreService.getData("".concat(this.apiUrl, "/items/?oid=").concat(orderId, "&bid=").concat(bookId));
        }
      }, {
        key: "updateOrder",
        value: function updateOrder(order) {
          return this.coreService.putData(order, this.apiUrl);
        }
      }]);

      return OrderService;
    }();

    OrderService.ctorParameters = function () {
      return [{
        type: _core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"]
      }];
    };

    OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"]])], OrderService);
    /***/
  },

  /***/
  "./src/app/services/student.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/student.service.ts ***!
    \*********************************************/

  /*! exports provided: StudentService */

  /***/
  function srcAppServicesStudentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentService", function () {
      return StudentService;
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


    var _core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./core.service */
    "./src/app/services/core.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var StudentService = /*#__PURE__*/function () {
      function StudentService(coreService) {
        _classCallCheck(this, StudentService);

        this.coreService = coreService;
        this.apiUrl = "api/students";
      }

      _createClass(StudentService, [{
        key: "registerStudent",
        value: function registerStudent(student) {
          return this.coreService.postData(student, this.apiUrl);
        }
      }, {
        key: "getStudents",
        value: function getStudents(search) {
          search = search || "";
          return this.coreService.getData(this.apiUrl + "?searchquery=" + search).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (d) {
            return d.students;
          }));
        }
      }, {
        key: "updateStudent",
        value: function updateStudent(student) {
          return this.coreService.putData(student, this.apiUrl);
        }
      }, {
        key: "changePassword",
        value: function changePassword(passwordUpdate) {
          return this.coreService.postData(passwordUpdate, this.apiUrl + "/changepassword/");
        }
      }]);

      return StudentService;
    }();

    StudentService.ctorParameters = function () {
      return [{
        type: _core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"]
      }];
    };

    StudentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"]])], StudentService);
    /***/
  },

  /***/
  "./src/app/signup/signup.component.css":
  /*!*********************************************!*\
    !*** ./src/app/signup/signup.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignupSignupComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/signup/signup.component.ts":
  /*!********************************************!*\
    !*** ./src/app/signup/signup.component.ts ***!
    \********************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
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


    var _services_department_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/department.service */
    "./src/app/services/department.service.ts");
    /* harmony import */


    var _services_student_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/student.service */
    "./src/app/services/student.service.ts");
    /* harmony import */


    var _services_lecturer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/lecturer.service */
    "./src/app/services/lecturer.service.ts");
    /* harmony import */


    var _models_Student_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../models/Student.model */
    "./src/app/models/Student.model.ts");
    /* harmony import */


    var _models_Lecturer_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../models/Lecturer.model */
    "./src/app/models/Lecturer.model.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent(fb, router, departmentService, studentService, lecturerService) {
        _classCallCheck(this, SignupComponent);

        this.fb = fb;
        this.router = router;
        this.departmentService = departmentService;
        this.studentService = studentService;
        this.lecturerService = lecturerService;
        this.pwdMatched = true;
        this.isStudent = true;
        this.userProfileForm = this.fb.group({
          firstname: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          lastname: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          othernames: [""],
          deptId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          matricNo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]{4}\/(hnd|nd)\/[a-z]{2,}\/[0-9]{4,}$/i)],
          emailAddress: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          confirmPassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this39 = this;

          // get departments
          this.departmentService.getDepartments().subscribe(function (result) {
            _this39.departments = result;
          });
        }
      }, {
        key: "enableMatricNoField",
        value: function enableMatricNoField() {
          this.isStudent = this.isStudent ? false : true;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this40 = this;

          if (this.isStudent) {
            var student = new _models_Student_model__WEBPACK_IMPORTED_MODULE_6__["Student"](0, this.userProfileForm.get("firstname").value, this.userProfileForm.get("lastname").value, this.userProfileForm.get("othernames").value, this.userProfileForm.get("deptId").value, this.userProfileForm.get("matricNo").value, this.userProfileForm.get("emailAddress").value, this.userProfileForm.get("password").value);
            this.studentService.registerStudent(student).subscribe(function (result) {
              _this40.serverFeedback = result;

              if (result.success) {
                _this40.router.navigate(["/login"], {
                  queryParams: {
                    login: 0
                  }
                });
              }
            });
          } else {
            var lecturer = new _models_Lecturer_model__WEBPACK_IMPORTED_MODULE_7__["Lecturer"](0, this.userProfileForm.get("firstname").value, this.userProfileForm.get("lastname").value, this.userProfileForm.get("othernames").value, this.userProfileForm.get("deptId").value, this.userProfileForm.get("emailAddress").value, this.userProfileForm.get("password").value);
            this.lecturerService.registerLecturer(lecturer).subscribe(function (result) {
              _this40.serverFeedback = result;

              if (result.success) {
                _this40.router.navigate(["/login"], {
                  queryParams: {
                    login: 0
                  }
                });
              }
            });
          }
        }
      }, {
        key: "isMatch",
        value: function isMatch() {
          var pwd = this.userProfileForm.get("password").value;
          var cpwd = this.userProfileForm.get("confirmPassword").value;

          if (pwd !== cpwd) {
            this.pwdMatched = false;
          } else {
            this.pwdMatched = true;
          }
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
      }, {
        type: _services_department_service__WEBPACK_IMPORTED_MODULE_3__["DepartmentService"]
      }, {
        type: _services_student_service__WEBPACK_IMPORTED_MODULE_4__["StudentService"]
      }, {
        type: _services_lecturer_service__WEBPACK_IMPORTED_MODULE_5__["LecturerService"]
      }];
    };

    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-signup",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.component.css */
      "./src/app/signup/signup.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _services_department_service__WEBPACK_IMPORTED_MODULE_3__["DepartmentService"], _services_student_service__WEBPACK_IMPORTED_MODULE_4__["StudentService"], _services_lecturer_service__WEBPACK_IMPORTED_MODULE_5__["LecturerService"]])], SignupComponent);
    /***/
  },

  /***/
  "./src/app/student-profile/student-profile.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/student-profile/student-profile.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStudentProfileStudentProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQtcHJvZmlsZS9zdHVkZW50LXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/student-profile/student-profile.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/student-profile/student-profile.component.ts ***!
    \**************************************************************/

  /*! exports provided: StudentProfileComponent */

  /***/
  function srcAppStudentProfileStudentProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentProfileComponent", function () {
      return StudentProfileComponent;
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


    var _models_Student_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/Student.model */
    "./src/app/models/Student.model.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_department_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/department.service */
    "./src/app/services/department.service.ts");
    /* harmony import */


    var _services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/notification.service */
    "./src/app/services/notification.service.ts");
    /* harmony import */


    var _services_student_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/student.service */
    "./src/app/services/student.service.ts");

    var StudentProfileComponent = /*#__PURE__*/function () {
      function StudentProfileComponent(authService, departmentService, studentService, notifyService) {
        _classCallCheck(this, StudentProfileComponent);

        this.authService = authService;
        this.departmentService = departmentService;
        this.studentService = studentService;
        this.notifyService = notifyService;
        this.userProfile = new _models_Student_model__WEBPACK_IMPORTED_MODULE_2__["Student"](null, "", "", "", null, "", "", "", "");
        this.userPassword = {
          password: "",
          confirmpwd: ""
        };
      }

      _createClass(StudentProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this41 = this;

          this.authService.getCurrentUser().subscribe(function (res) {
            if (res.success) {
              _this41.userProfile = res.user;
            }
          }, function (reason) {
            console.log(reason);
          });
          this.departmentService.getDepartments().subscribe(function (departments) {
            _this41.departments = departments;
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this42 = this;

          console.log(this.userProfile);
          this.studentService.updateStudent(this.userProfile).subscribe(function (res) {
            if (res.success) {
              _this42.notifyService.showSuccess("Profile has been updated", "Success");
            }
          }, function (reason) {
            _this42.notifyService.showError("We encountered an error while updating your profile", "Operation failed");
          });
        }
      }, {
        key: "onChangePassword",
        value: function onChangePassword() {
          var _this43 = this;

          this.studentService.changePassword({
            password: this.userPassword.password,
            id: this.userProfile.id
          }).subscribe(function (res) {
            if (res.success) {
              _this43.notifyService.showSuccess("Password changed", "Success");

              _this43.authService.logout();
            }
          }, function (reason) {
            _this43.notifyService.showError("We encountered an error while updating your profile", "Operation failed");
          });
        }
      }]);

      return StudentProfileComponent;
    }();

    StudentProfileComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _services_department_service__WEBPACK_IMPORTED_MODULE_4__["DepartmentService"]
      }, {
        type: _services_student_service__WEBPACK_IMPORTED_MODULE_6__["StudentService"]
      }, {
        type: _services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]
      }];
    };

    StudentProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-student-profile",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./student-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/student-profile/student-profile.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./student-profile.component.css */
      "./src/app/student-profile/student-profile.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_department_service__WEBPACK_IMPORTED_MODULE_4__["DepartmentService"], _services_student_service__WEBPACK_IMPORTED_MODULE_6__["StudentService"], _services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]])], StudentProfileComponent);
    /***/
  },

  /***/
  "./src/app/warning-dialog/warning-dialog.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/warning-dialog/warning-dialog.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWarningDialogWarningDialogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dhcm5pbmctZGlhbG9nL3dhcm5pbmctZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/warning-dialog/warning-dialog.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/warning-dialog/warning-dialog.component.ts ***!
    \************************************************************/

  /*! exports provided: WarningDialogComponent */

  /***/
  function srcAppWarningDialogWarningDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WarningDialogComponent", function () {
      return WarningDialogComponent;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    var WarningDialogComponent = /*#__PURE__*/function () {
      function WarningDialogComponent(activeModal) {
        _classCallCheck(this, WarningDialogComponent);

        this.activeModal = activeModal;
      }

      _createClass(WarningDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WarningDialogComponent;
    }();

    WarningDialogComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
      }];
    };

    WarningDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-warning-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./warning-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/warning-dialog/warning-dialog.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./warning-dialog.component.css */
      "./src/app/warning-dialog/warning-dialog.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])], WarningDialogComponent);
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
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
    /*! C:\Users\Jude-JohnB\Documents\MyOffice\My Portfolio\online-bookshop\client\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map