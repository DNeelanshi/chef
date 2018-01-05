webpackJsonp([30],{

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AccountsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountsPage = (function () {
    function AccountsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AccountsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountsPage');
    };
    AccountsPage.prototype.home = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return AccountsPage;
}());
AccountsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-accounts',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/accounts/accounts.html"*/'<!--\n  Generated template for the AccountsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Accounts</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="preview">\n  <ion-list>\n  <ion-item>\n    <ion-label stacked>TOTAL ACCOUMULATED BILLING </ion-label>\n    <ion-input type="text"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked>BALANCE FOR SELECTED YEARS</ion-label>\n    <ion-input type="text"></ion-input>\n  </ion-item>\n\n<ion-item>\n    <ion-label stacked>BALANCE PER SELECTED MONTH</ion-label>\n    <ion-input type="text"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked>OUTSTANDING BALANCE</ion-label>\n    <ion-input type="text"></ion-input>\n  </ion-item>\n</ion-list>\n\n <div  style="text-align: center;">\n   <button ion-button full color="theme-header" style="display: block; margin: 0 auto;"(click)="home()">Continue</button>\n   </div>\n   \n\n</ion-content>'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/accounts/accounts.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], AccountsPage);

//# sourceMappingURL=accounts.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the OrderviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderviewPage = (function () {
    function OrderviewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OrderviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderviewPage');
    };
    return OrderviewPage;
}());
OrderviewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-orderview',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/orderview/orderview.html"*/'<!--\n  Generated template for the OrderviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Order View\n    <p class="aaa">Online chef list</p></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n      \n  <ion-card>\n\n  <ion-item style="align-items: baseline;">\n    <ion-avatar item-start>\n      <img src="assets/image/order-img.png">\n    </ion-avatar>\n    <h2 class="user">User name</h2>\n    <p class="paragraph">username@yahoo.com</p>\n    <h2  class="user">Address:</h2> \n    <p class="paragraph">71 Pilgrim Avenue </p>\n      <p class="paragraph"> MD 20815</p>\n  </ion-item>\n\n\n<div class="contact" style="border-top: 1px solid #cecbcb;">\n<ion-grid>\n  <ion-row>\n    <ion-col col-4>\n      <div class="mob1">\n        <h2>12-10-2017</h2>\n         <p>20:15pm</p>\n          </div>\n     \n    </ion-col>\n\n<ion-col col-4>\n      <div class="decline">\n       <button ion-button color="secondary">Accept</button>\n      </div>\n    </ion-col>\n\n\n    <ion-col col-4>\n      <div class="decline">\n       <button ion-button color="btncolor">Decline</button>\n      </div>\n    </ion-col>\n\n  </ion-row>\n</ion-grid>\n</div>\n</ion-card>\n\n<div class="content-sec">\n  <div class="heading">\n   <h3>Order Items:</h3>\n  </div>\n   <ion-list>\n     <ion-item>\n       <ion-thumbnail item-start>\n         <img src="assets/image/southfod.png">\n       </ion-thumbnail>\n       <h2>Croquettes</h2>\n       <p>Qty: 2 x $30</p>\n\n       <ion-note item-end="" class="note note-ios">$60.00</ion-note>\n        \n     </ion-item>\n    \n      <ion-item>\n       <ion-thumbnail item-start>\n         <img src="assets/image/southfod.png">\n       </ion-thumbnail>\n       <h2>Croquettes</h2>\n       <p>Qty: 2 x $30</p>\n       <ion-note item-end="" class="note note-ios">$60.00</ion-note>\n     </ion-item>\n    \n\n<ion-item>\n       <ion-thumbnail item-start>\n         <img src="assets/image/southfod.png">\n       </ion-thumbnail>\n       <h2>Croquettes</h2>\n       <p>Qty: 2 x $30</p>\n       <ion-note item-end="" class="note note-ios">$60.00</ion-note>\n     </ion-item>\n\n\n\n </ion-list>\n</div>\n<div class="total">\n <h2 class="left">Subtotal</h2>\n <h2 class="right">$108.00</h2>\n</div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/orderview/orderview.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], OrderviewPage);

//# sourceMappingURL=orderview.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddproductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__subcriptionbill_subcriptionbill__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_tags_input__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_geocoder__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_appsetting__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_device__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__profile_profile__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { Component } from '@angular/core';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';

//import { ModalController } from 'ionic-angular';













/**
 * Generated class for the AddproductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddproductPage = AddproductPage_1 = (function () {
    function AddproductPage(navCtrl, toastCtrl, navParams, geolocation, nativeGeocoder, appsetting, http, formBuilder, taginput, actionSheetCtrl, camera, device, alertCtrl, loadingCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.appsetting = appsetting;
        this.http = http;
        this.formBuilder = formBuilder;
        this.taginput = taginput;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.device = device;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.data = [];
        this.arr = [];
        this.tag = [];
        this.tagss = [];
        this.getcommision();
    }
    AddproductPage.prototype.getcommision = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["e" /* RequestOptions */]({ headers: headers });
        //    var userid=JSON.parse(localStorage.getItem('UserInfo'))._id; 
        this.http.get(this.appsetting.myGlobalVar + 'get_comission').map(function (res) { return res.json(); }).subscribe(function (data1) {
            console.log(data1.data.commision_per_product);
            _this.commision = data1.data.commision_per_product;
        });
    };
    AddproductPage.prototype.commisioncal = function () {
        var x = (this.commision / 100) * this.data.productprice;
        console.log(x);
        this.data.rafahoprice = x;
        this.data.chefrecieved = this.data.productprice - this.data.rafahoprice;
    };
    AddproductPage.prototype.onChange = function (val) {
        console.log(this.tag.toString());
        this.tags = this.tag.toString();
        console.log(this.tags);
    };
    AddproductPage.prototype.onChanges = function (vali) {
        console.log(this.tagss.toString());
        this.taggs = this.tagss.toString();
        console.log(this.taggs);
    };
    AddproductPage.prototype.AddProduct = function (product) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
        console.log(this.commision);
        var postdata = {
            product_name: product.value.productname,
            product_price: product.value.productprice,
            discount: product.value.discount,
            product_ingredients: this.tagss.toString(),
            product_description: product.value.productdesc,
            diet_restriction: product.value.diet,
            minimum_order: product.value.minorder,
            cooking_time_at_chef_place: product.value.cookingatchef,
            cooking_time_at_user_home: product.value.cookingatclient,
            tags: this.tag.toString(),
            status: 0,
            product_image0: this.srcImage,
            product_image1: this.srcImage1,
            product_image2: this.srcImage2,
            id: userid,
            device_token: this.device.uuid
        };
        console.log(postdata);
        if (postdata.product_ingredients) {
            if (postdata.tags) {
                if (postdata.product_image0) {
                    var Serialized = this.serializeObj(postdata);
                    var Loading = this.loadingCtrl.create({
                        spinner: 'bubbles',
                        cssClass: 'loader'
                    });
                    Loading.present().then(function () {
                        _this.http.post(_this.appsetting.myGlobalVar + 'add_products', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                            Loading.dismiss();
                            if (response.status == true) {
                                console.log(response);
                                console.log(response.data._id);
                                localStorage.setItem('UserInfo', JSON.stringify(response.data));
                                _this.presentConfirm('Products added successfully.<br>You want to add another?');
                            }
                            else {
                                _this.AlertMsg1(response.message);
                            }
                        }, function (err) {
                            console.log(err);
                        });
                    });
                }
                else {
                    var toast = this.toastCtrl.create({
                        message: 'Atleast one image have to be selected',
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
            }
            else {
                var toast = this.toastCtrl.create({
                    message: 'Tags need to be filled',
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            }
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Product Ingredients need to be filled',
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        }
    };
    AddproductPage.prototype.backtopro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__profile_profile__["a" /* ProfilePage */]);
    };
    AddproductPage.prototype.backtolist = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__profile_profile__["a" /* ProfilePage */]);
    };
    AddproductPage.prototype.presentConfirm = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'CANCEL',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__profile_profile__["a" /* ProfilePage */]);
                    }
                },
                {
                    text: 'ADD',
                    handler: function () {
                        console.log(_this.data);
                        _this.navCtrl.push(AddproductPage_1);
                        //            this.data={
                        //                       'productname':' ',
                        //                      'addingredients':' ',
                        //                     
                        //                    };
                        //         this.srcImage=''
                        //             this.srcImage1=''
                        //             this.srcImage2=''
                        console.log('Neelanshi');
                        console.log(_this.data);
                    }
                }
            ]
        });
        alert.present();
    };
    AddproductPage.prototype.CameraAction = function () {
        var _this = this;
        console.log('opening');
        var headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
        var actionsheet = this.actionSheetCtrl.create({
            title: "Choose Album",
            buttons: [{
                    text: 'Camera',
                    handler: function () {
                        // this.loading.present();
                        var options = {
                            quality: 8,
                            targetWidth: 767,
                            targetHeight: 600,
                            sourceType: 1,
                            correctOrientation: true,
                            allowEdit: true,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE
                        };
                        _this.camera.getPicture(options).then(function (imageUri) {
                            //            this.srcImage = 'data:image/jpeg;base64,' + imageUri;
                            //this.srcImage =imageUri;
                            _this.arr.push({ 'image': imageUri });
                            //                  alert(JSON.stringify(this.arr));
                            _this.srcImage = 'data:image/jpeg;base64,' + _this.arr[0].image;
                            _this.srcImage1 = 'data:image/jpeg;base64,' + _this.arr[1].image;
                            _this.srcImage2 = 'data:image/jpeg;base64,' + _this.arr[2].image;
                            _this.arr = '';
                            _this.arr = [];
                            //            alert('camera working');
                            //            
                        }, function (err) {
                            //            alert(JSON.stringify(err));
                            // this.loading.dismiss();
                            console.log(err);
                        });
                    }
                },
                {
                    text: 'Gallery',
                    handler: function () {
                        console.log("Gallery Clicked");
                        //	alert("get Picture")
                        // this.loading.present();
                        var options = {
                            quality: 10,
                            sourceType: 0,
                            targetWidth: 767,
                            targetHeight: 600,
                            correctOrientation: true,
                            allowEdit: true,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            //            this.srcImage = 'data:image/jpeg;base64,' + imageData;
                            //            this.srcImage=imageData;
                            _this.arr.push({ 'image': imageData });
                            //                  alert(JSON.stringify(this.arr));
                            _this.srcImage = 'data:image/jpeg;base64,' + _this.arr[0].image;
                            _this.srcImage1 = 'data:image/jpeg;base64,' + _this.arr[1].image;
                            _this.srcImage2 = 'data:image/jpeg;base64,' + _this.arr[2].image;
                            _this.arr = '';
                            _this.arr = [];
                            //            alert('gallery working');
                        }, function (err) {
                            // this.loading.dismiss();
                            //alert('error');
                            //            alert(JSON.stringify(err));
                            // Handle error
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        actionsheet.dismiss();
                    }
                }]
        });
        actionsheet.present();
    };
    AddproductPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    AddproductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddproductPage');
    };
    AddproductPage.prototype.AlertMsg1 = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'OK',
                    role: 'submit',
                    handler: function () {
                        console.log('ok clicked');
                        // this.navCtrl.push(ProcessingformPage);
                    }
                }
            ]
        });
        alert.present();
    };
    AddproductPage.prototype.isReadonly = function () {
        return this.isReadonly; //return true/false 
    };
    AddproductPage.prototype.subcriptionbill = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__subcriptionbill_subcriptionbill__["a" /* SubcriptionbillPage */]);
    };
    return AddproductPage;
}());
AddproductPage = AddproductPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-addproduct',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/addproduct/addproduct.html"*/'<!--\n  Generated template for the AddproductPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="theme-header">\n     \n      <button ion-button start style="height: 28px;    color: #fff;    padding: 0 0 0 3px;    font-size: 12px;\n    float: left;    width: 7%; margin: 0;" start ion-button clear (click)="backtopro()"><ion-icon ios="ios-arrow-back" md="md-arrow-back" style="font-size: 2.2em;"></ion-icon></button>\n     \n    <ion-title>Add Product</ion-title>\n\n  </ion-toolbar>\n  \n</ion-header>\n\n<ion-content>\n    <div class="content-text">\n  <h1>Add Product</h1>\n  </div>\n  <div class="content-sec">\n  <div class="sign">\n   <form class="form-sec" #productForm="ngForm" novalidate >\n    <ion-list>\n         <ion-grid>\n          <ion-row>\n            <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>PRODUCT NAME 1 </ion-label>\n          <ion-input type="text" [(ngModel)]="data.productname" required name=\'productname\' #productname="ngModel" required></ion-input>\n        </ion-item>\n                <div class="alert alert-danger" color="danger">\n                  <div *ngIf="productname.errors && (productname.dirty || productname.touched)&& data.productname !=\'\'">\n                    <div [hidden]="!productname.errors.required">\n                      Product name is required\n                    </div>\n                  </div>\n                </div>\n      </ion-col>\n\n           <ion-col col-6 class="left">\n        <ion-item>\n          <ion-label stacked>PRODUCT PRICE </ion-label>\n          <ion-input type="tel" [(ngModel)]="data.productprice" required name=\'productprice\' #productprice="ngModel"  pattern="[0-9]+(\.[0-9][0-9]?)?"  required (input)="commisioncal()"></ion-input>\n        </ion-item>\n                <div class="alert alert-danger" color="danger">\n                  <div *ngIf="productprice.errors && (productprice.dirty || productprice.touched) && data.productprice !=\'\'">\n                    <div [hidden]="!productprice.errors.required">\n                      Product price required\n                    </div>\n                    <div [hidden]="!productprice.errors.pattern">\n                      Only Number allowed with 2 decimal digits maximum\n                    </div>\n                        \n                  </div>\n                </div>\n      </ion-col>\n\n      <ion-col col-6 class="right">\n        <ion-item>\n          <ion-label stacked>RAFAHO PRICE</ion-label>\n             <ion-input type="text" [(ngModel)]="data.rafahoprice" required name=\'rafahoprice\' #rafahoprice="ngModel" [readonly]="isReadonly()" required ></ion-input>\n        </ion-item>\n      </ion-col>\n      \n\n<ion-col col-12 class="left">\n        <ion-item>\n          <ion-label stacked>CHEF RECEIVED</ion-label>\n             <ion-input type="text" [(ngModel)]="data.chefrecieved" required name=\'chefrecieved\' #chefrecieved="ngModel" [readonly]="isReadonly()" required ></ion-input>\n        </ion-item>\n      </ion-col>\n\n\n\n\n\n\n  <ion-col col-12 class="select left" >\n        \n        <ion-item>\n <ion-label stacked class="why">DISCOUNT PRECENTAGE</ion-label>\n     <ion-select class="active"  [(ngModel)]="data.discount" name=\'discount\' #discount="ngModel" required>\n    <ion-option value="10">10%</ion-option>\n    <ion-option value="20">20%</ion-option>\n      <ion-option value="30">30%</ion-option>\n        <ion-option value="40">40%</ion-option>\n          <ion-option value="50">50%</ion-option>\n\n  </ion-select>\n        </ion-item>\n      </ion-col>\n\n\n<div>\n  <h1 class="main">Main Dish and Accompainment</h1>\n</div>\n\n\n      <ion-col col-12 class="left right">\n<!--        <ion-item>\n          <ion-label stacked>PRODUCT INGREDIENTS</ion-label>\n          <ion-input type="text" [(ngModel)]="data.productingredients" required name=\'productingredients\' #productingredients="ngModel" required></ion-input>\n        </ion-item>\n          <div class="alert alert-danger" color="danger">\n                  <div *ngIf="productingredients.errors && (productingredients.dirty || productingredients.touched) && data.productingredients !=\'\'">\n                    <div [hidden]="!productingredients.errors.required">\n                      Product ingredients are required\n                    </div>\n                  </div>\n                </div>-->\n          <ion-label stacked style="margin-top: 17px;" >PRODUCT INGREDIENTS</ion-label>\n<div>\n      <ion-tags-input style="position:initial;" placeholder="+Ingredients" [(ngModel)]="tagss" [ngModelOptions]="{standalone: true}" (onChange)="onChanges($event)" required></ion-tags-input>\n<div class="alert alert-danger" color="danger">\n                  <div *ngIf="tagss.errors && (tagss.dirty || tagss.touched)" >\n                    <div [hidden]="!tagss.errors.required">\n                      Product Ingredients are required\n                    </div>\n                  </div>\n                </div>\n</div>\n      </ion-col>\n\n\n       <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>PRODUCT DESCRIPTION</ion-label>\n          <ion-input type="text" [(ngModel)]="data.productdesc" required name=\'productdesc\' #productdesc="ngModel" maxlength="3000"  required></ion-input>\n        </ion-item>\n           <div class="alert alert-danger" color="danger">\n                  <div *ngIf="productdesc.errors && (productdesc.dirty || productdesc.touched)&& data.productdesc !=\'\'" >\n                    <div [hidden]="!productdesc.errors.required">\n                      Product description is required\n                    </div>\n                  </div>\n                </div>\n      </ion-col>\n   <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>DIET RESTRICTION</ion-label>\n          <ion-input type="text" [(ngModel)]="data.diet" required name=\'diet\' #diet="ngModel" maxlength="3000"  required></ion-input>\n        </ion-item>\n           <div class="alert alert-danger" color="danger">\n                  <div *ngIf="diet.errors && (diet.dirty || diet.touched)&& data.diet !=\'\'" >\n                    <div [hidden]="!diet.errors.required">\n                    Diet Restriction is required\n                    </div>\n                  </div>\n                </div>\n      </ion-col>\n\n\n  <div class="maxium">\n<p style="text-align:right">Maximum 3000 letter.</p>\n  </div>\n               <ion-col col-12 class="left right">\n         \n        \n        <ion-label stacked style="margin-top: 17px;" >TAGS</ion-label>\n<div>\n      <ion-tags-input style="position:initial;" [(ngModel)]="tag" [ngModelOptions]="{standalone: true}" (onChange)="onChange($event)" required></ion-tags-input>\n</div>\n<!--            <div class="tag-container">\n    <span class="tag" *ngFor="let tag of tags">\n      {{ tag }}\n      <ion-icon name="close" (click)="deleteTag(tag)"></ion-icon>\n    </span>\n  </div>-->\n\n  \n          \n          <!--<tags-input formControlName="animals"></tags-input>-->\n          <!--<input name="hashtags" type="tags" pattern="^#" placeholder="#hashtags">-->\n          <!--<ion-textarea  type="text" name="tags-input" placeholder="e.g Paneer"> <span><ion-icon name="close">Paneer</ion-icon></span></ion-textarea>-->\n<!--          <ion-textarea placeholder="e.g Paneer" [(ngModel)]="data.tags | TagModel" required name=\'tags\' #tags="ngModel">Paneer</ion-textarea>-->\n         \n\n          \n          \n      </ion-col>\n\n<ion-grid>\n  <ion-row>\n\n<ion-col col-12 class="left">\n        <ion-item>\n          <ion-label stacked>MINIMUM ORDER</ion-label>\n             <ion-input type="tel" [(ngModel)]="data.minorder" required name=\'minorder\' #minorder="ngModel" pattern="^(0|[1-9][0-9]*)$" maxlength="4" required></ion-input>\n        </ion-item>\n     <div class="alert alert-danger" color="danger">\n                  <div *ngIf="minorder.errors && (minorder.dirty || minorder.touched) && data.minorder !=\'\'">\n                    <div [hidden]="!minorder.errors.required">\n                      Minimum order required\n                    </div>\n                    <div [hidden]="!minorder.errors.pattern">\n                      Only number allowed\n                    </div>\n                  </div>\n                </div>\n      </ion-col>\n\n      \n\n\n\n\n     \n\n   <ion-col col-12 class="left">\n        <ion-item>\n          <ion-label stacked>COOKING TIME AT CHEF PLACE</ion-label>\n           <ion-datetime displayFormat="HH:mm:ss" pickerFormat="HH mm ss"  [(ngModel)]="data.cookingatchef" name="cookingatchef" #cookingatchef="ngModel"  required></ion-datetime>\n          <!--<ion-input type="tel" [(ngModel)]="data.cookingatclient" required name=\'cookingatclient\' #cookingatclient="ngModel" pattern="^(0|[1-9][0-9]*)$" required></ion-input>-->\n        </ion-item>\n     <div class="alert alert-danger" color="danger">\n                  <div *ngIf="cookingatchef.errors && (cookingatchef.dirty || cookingatchef.touched)">\n                    <div [hidden]="!cookingatchef.errors.required">\n                      Cooking time at chef place required\n                    </div>\n                  </div>\n                </div>\n      </ion-col>\n      </ion-row>\n      </ion-grid>\n\n\n\n\n\n          </ion-row>\n    </ion-grid>\n    </ion-list>\n \n\n<!--   <div class="latter">\n<p>AFTER SELECT PREPARATION</p>\n  </div>-->\n\n    \n<ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>COOKING TIME AT CLIENT PLACE</ion-label>\n           <ion-datetime displayFormat="HH:mm:ss" pickerFormat="HH mm ss"  [(ngModel)]="data.cookingatclient" name="cookingatclient" #cookingatclient="ngModel"  required></ion-datetime>\n          <!--<ion-input type="tel" [(ngModel)]="data.cookingatclient" required name=\'cookingatclient\' #cookingatclient="ngModel" pattern="^(0|[1-9][0-9]*)$" required></ion-input>-->\n        </ion-item>\n     <div class="alert alert-danger" color="danger">\n                  <div *ngIf="cookingatclient.errors && (cookingatclient.dirty || cookingatclient.touched)">\n                    <div [hidden]="!cookingatclient.errors.required">\n                      Cooking time at client place required\n                    </div>\n                  </div>\n                </div>\n      </ion-col>\n\n<!--      <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked style="margin-top: 17px;">TAGS</ion-label>\n          <ion-textarea placeholder="e.g Paneer" [(ngModel)]="data.tags" required name=\'tags\' #tags="ngModel">Paneer</ion-textarea>\n          <span><ion-icon name="close">Paneer</ion-icon></span>\n\n          \n          \n        </ion-item>\n      </ion-col>-->\n\n\n<!--       <ion-col col-12 class="select">\n         <ion-label stacked class="why">STATUS</ion-label>\n        <ion-item>\n\n     <ion-select class="active" >\n    <ion-option value="Active">Active</ion-option>\n    <ion-option value="Deactive">Deactive</ion-option>\n\n  </ion-select>\n        </ion-item>\n      </ion-col>-->\n\n\n\n<div class="add">\n  <h2 >ADD PRODUCT IMAGE <span style="font-size: 9px;">Maximum 3 Photos</span></h2>\n<ion-grid style="padding:0;">\n  <ion-row>\n    <ion-col col-3 style="padding-left:0px;">\n      <div class="image">\n      <img *ngIf="srcImage" class="pick0" [src]="srcImage" >\n <img *ngIf="!srcImage" class="pick0" src="assets/image/profile_img.png">\n      </div>\n      </ion-col>\n\n\n      <ion-col col-3 style="padding-left:0px;">\n      <div class="image">\n   <img *ngIf="srcImage1" class="pick0" [src]="srcImage1" >\n <img *ngIf="!srcImage1" class="pick0" src="assets/image/profile_img.png">\n      </div>\n      </ion-col>\n\n\n      <ion-col col-3 style="padding-left:0px;">\n      <div class="image">\n      <img *ngIf="srcImage2" class="pick0" [src]="srcImage2" >\n <img *ngIf="!srcImage2" class="pick0" src="assets/image/profile_img.png">\n      </div>\n      </ion-col>\n\n\n<ion-col col-3 style="padding-left:0px;" *ngIf="arr.length<3">\n  <div class="input-sec" (click)="CameraAction()">\n      <div class="upld">\n      \n       <ion-icon ios="ios-add" md="md-add"></ion-icon>\n      </div>\n      </div>\n      </ion-col>\n\n   \n  </ion-row>\n    \n</ion-grid>\n</div>\n  \n\n\n \n <div class="plusbtn">\n <button ion-fab mini   (click)="AddProduct(productForm)" [disabled]="!productForm.valid"><ion-icon name="add"></ion-icon></button>\n\n</div>\n  </form>\n  </div>\n  </div>\n</ion-content>\n\n\n\n<!--<ion-footer>\n  <ion-toolbar >\n      <button ion-button full (click)="subcriptionbill()" color="theme-header">Done</button>\n  </ion-toolbar>\n</ion-footer>-->\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/addproduct/addproduct.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* ToastController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_geocoder__["a" /* NativeGeocoder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_geocoder__["a" /* NativeGeocoder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__providers_appsetting__["a" /* Appsetting */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_appsetting__["a" /* Appsetting */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_12__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__angular_forms__["a" /* FormBuilder */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_tags_input__["a" /* IonTagsInputModule */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_tags_input__["a" /* IonTagsInputModule */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* ActionSheetController */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_10__ionic_native_device__["a" /* Device */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__ionic_native_device__["a" /* Device */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* LoadingController */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* ModalController */]) === "function" && _q || Object])
], AddproductPage);

var AddproductPage_1, _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
//# sourceMappingURL=addproduct.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubcriptionbillPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_payment__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SubcriptionbillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SubcriptionbillPage = (function () {
    function SubcriptionbillPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    // ionViewDidLoad() {
    //   console.log('ionViewDidLoad SubcriptionbillPage');
    // }
    // dismiss() {
    //   this.viewCtrl.dismiss();
    // }
    SubcriptionbillPage.prototype.Payment = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__payment_payment__["a" /* PaymentPage */]);
    };
    return SubcriptionbillPage;
}());
SubcriptionbillPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-subcriptionbill',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/subcriptionbill/subcriptionbill.html"*/'<!--\n  Generated template for the SubcriptionbillPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    \n    <ion-title>Subcription Bill</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n  <div class="container">\n  <h2>CHEF SUBCRIPTION AMOUNT<span> $10.00</span></h2>\n  </div>\n  \n  <div class="content-sec">\n  <ul>\n    <li >product 1 <span>$5.00</span></li>\n     <li >product 1 <span>$5.00</span></li>\n      <li >product 1 <span>$5.00</span></li>\n       <li >product 1 <span>$5.00</span></li>\n   </ul>\n  </div>\n\n<div class="total">\n <h2 class="left">Subtotal</h2>\n <h2 class="right">$30.00</h2>\n</div>\n  \n  \n\n</ion-content>\n\n\n<ion-footer>\n  <ion-toolbar >\n      <button ion-button full (click)="Payment()" color="theme-header">Payment</button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/subcriptionbill/subcriptionbill.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
], SubcriptionbillPage);

//# sourceMappingURL=subcriptionbill.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RafahofeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RafahofeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RafahofeedbackPage = (function () {
    function RafahofeedbackPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RafahofeedbackPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RafahofeedbackPage');
    };
    return RafahofeedbackPage;
}());
RafahofeedbackPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-rafahofeedback',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/rafahofeedback/rafahofeedback.html"*/'<!--\n  Generated template for the RafahofeedbackPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Rafaho Feedback</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n <div class="top-sec">\n  <ion-list>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/image/user1.png">\n      </ion-avatar>\n      <h3>Username</h3>\n      <p>Posted 19 june 2017</p>\n      <h6>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</h6>\n    </ion-item>\n     <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/image/user1.png">\n      </ion-avatar>\n      <h3>Username</h3>\n      <p>Posted 19 june 2017</p>\n      <h6>Contrary to popular belief, Lorem Ipsum is not simply random text.</h6>\n    </ion-item>\n     <ion-item>\n      <ion-avatar item-start >\n        <img src="assets/image/user1.png">\n      </ion-avatar>\n      <h3>Username</h3>\n      <p>Posted 19 june 2017</p>\n      <h6>Contrary to popular belief, Lorem Ipsum is not simply random text.</h6>\n    </ion-item>\n\n\n<ion-item>\n      <ion-avatar item-start >\n        <img src="assets/image/user1.png">\n      </ion-avatar>\n      <h3>Username</h3>\n      <p>Posted 19 june 2017</p>\n      <h6>Contrary to popular belief, Lorem Ipsum is not simply random text.</h6>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-avatar item-start >\n        <img src="assets/image/user1.png">\n      </ion-avatar>\n      <h3>Username</h3>\n      <p>Posted 19 june 2017</p>\n      <h6>Contrary to popular belief, Lorem Ipsum is not simply random text.</h6>\n    </ion-item>\n\n\n  </ion-list>\n </div>\n \n \n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n   <div class="bottom-sec">\n  <div class="text">\n    <ion-textarea class="enter" placeholder="Enter your feedback...."></ion-textarea>\n  </div>\n  <div class="send">\n   <button ion-button>Send</button>\n  </div>\n </div>\n  </ion-toolbar>\n</ion-footer>\n\n\n<!--<ion-content padding>\n\n</ion-content>-->\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/rafahofeedback/rafahofeedback.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], RafahofeedbackPage);

//# sourceMappingURL=rafahofeedback.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_geocoder__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mapmodal_mapmodal__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













/**
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditprofilePage = (function () {
    function EditprofilePage(navCtrl, navParams, http, appsetting, camera, actionSheetCtrl, loadingCtrl, toastCtrl, nativeGeocoder, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.nativeGeocoder = nativeGeocoder;
        this.modalCtrl = modalCtrl;
        this.data = '';
        this.getdata();
        this.date = new Date();
    }
    EditprofilePage.prototype.getdata = function () {
        var _this = this;
        //    var th=this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
        var postdata = {
            id: userid
        };
        console.log(postdata);
        var serialized = this.serializeObj(postdata);
        // this.loading.dismiss();
        this.http.post(this.appsetting.myGlobalVar + 'userinfo', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data1) {
            console.log(data1);
            console.log(data1.data.latitude);
            console.log(data1.data.longitude);
            _this.lat = data1.data.latitude;
            _this.long = data1.data.longitude;
            //      this.geolo(data1.data.latitude,data1.data.longitude);
            _this.nativeGeocoder.reverseGeocode(parseFloat(data1.data.latitude), parseFloat(data1.data.longitude))
                .then(function (result) {
                console.log(JSON.stringify(result));
                if (result.subThoroughfare) {
                    _this.data.geolocation = result.subThoroughfare + ',' + result.thoroughfare + ',' + result.subLocality + ',' + result.locality + ',' + result.postalCode + ',' + result.countryName;
                }
                else if (result.thoroughfare) {
                    _this.data.geolocation = result.thoroughfare + ',' + result.subLocality + ',' + result.locality + ',' + result.postalCode + ',' + result.countryName;
                }
                else {
                    _this.data.geolocation = result.subLocality + ',' + result.locality + ',' + result.postalCode + ',' + result.countryName;
                }
            })
                .catch(function (error) { return console.log(error); });
            if (data1.data.phone) {
                console.log(data1.data.phone.length);
                //  var i;
                //  for(i=0;i<data1.data.phone.length;i++){
                //   if(i==2 && i==6 && i==11 ){
                //     data1.data.phone=data1.data.phone+'-';}
                //   }
                var str = data1.data.phone;
                var res = str.substring(0, 3);
                var res1 = str.substring(3, 6);
                var res2 = str.substring(6, 10);
                // var res2 = str.substring(12,9);
                data1.data.phone = res + '-' + res1 + '-' + res2;
                if (data1.data) {
                    _this.proffile = data1.data;
                    _this.srcImage = _this.proffile.user_image;
                    _this.data = _this.proffile;
                }
            }
        });
    };
    //geolo(lat,long){
    //    this.nativeGeocoder.reverseGeocode(lat, long)
    //  .then((result: NativeGeocoderReverseResult) => {console.log(JSON.stringify(result))
    //  console.log('neel')
    //    this.data.geolocation= result.subLocality+','+result.locality+','+result.postalCode+','+result.countryName;})
    //  .catch((error: any) => console.log(error));
    //}
    EditprofilePage.prototype.edituserprofile = function (edit) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
        console.log(userid);
        if (edit.value.firstname == null) {
            edit.value.firstname = "";
        }
        if (edit.value.lastname == null) {
            edit.value.lastname = "";
        }
        if (edit.value.phone == null) {
            edit.value.phone = "";
        }
        // if (edit.value.alternatephone == null) {
        //   edit.value.alternatephone = "";
        // }
        //    if (edit.value.result == null) {
        //      edit.value.result = "";
        //    }
        if (edit.value.phone) {
            edit.value.phone = edit.value.phone.replace(/-/g, "");
            this.data = {
                first_name: edit.value.firstname,
                last_name: edit.value.lastname,
                phone: edit.value.phone,
                address: edit.value.geolocation,
                dob: edit.value.dob,
                gender: edit.value.gender,
                lat: this.lat,
                long: this.long,
                id: userid
            };
            console.log(this.data);
            var serialized = this.serializeObj(this.data);
            this.http.post(this.appsetting.myGlobalVar + 'user_data_update', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                if (data.status == true) {
                    // this.loading.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: "Profile is updated",
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]);
                }
            });
        }
    };
    EditprofilePage.prototype.CameraAction = function () {
        var _this = this;
        console.log('opening');
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
        var actionsheet = this.actionSheetCtrl.create({
            title: "Choose Album",
            buttons: [{
                    text: 'Camera',
                    handler: function () {
                        // this.loading.present();
                        var options = {
                            quality: 8,
                            sourceType: 1,
                            correctOrientation: true,
                            allowEdit: true,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE
                        };
                        _this.camera.getPicture(options).then(function (imageUri) {
                            _this.srcImage = 'data:image/jpeg;base64,' + imageUri;
                            //this.imgTosend = imageUri;
                            // this.loading.dismiss();
                            //            alert('camera working');
                            var postdata = {
                                user_id: userid,
                                profile_picture: imageUri
                            };
                            //            alert(JSON.stringify(postdata));
                            console.log(postdata);
                            var serialized = _this.serializeObj(postdata);
                            //             var Loading = this.loadingCtrl.create({
                            //   spinner: 'bubbles',
                            //   cssClass: 'loader'
                            // });
                            // Loading.present().then(() => {
                            _this.http.post(_this.appsetting.myGlobalVar + 'user_profile_pic', postdata).map(function (res) { return res.json(); }).subscribe(function (data) {
                                // Loading.dismiss();
                                // alert(JSON.stringify(data));
                                console.log(data);
                                //              alert("saving image")
                            }, function (err) {
                                //              alert(JSON.stringify(err))
                            });
                        }, function (err) {
                            //            alert(JSON.stringify(err));
                            // this.loading.dismiss();
                            console.log(err);
                        });
                    }
                },
                {
                    text: 'Gallery',
                    handler: function () {
                        console.log("Gallery Clicked");
                        //	alert("get Picture")
                        // this.loading.present();
                        var options = {
                            quality: 10,
                            sourceType: 0,
                            correctOrientation: true,
                            allowEdit: true,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            _this.srcImage = 'data:image/jpeg;base64,' + imageData;
                            // /	this.imgTosend = imageData;
                            // this.loading.dismiss();
                            var postdata = {
                                user_id: userid,
                                profile_picture: imageData
                            };
                            //            alert(postdata)
                            var serialized = _this.serializeObj(postdata);
                            _this.http.post(_this.appsetting.myGlobalVar + 'user_profile_pic', postdata).map(function (res) { return res.json(); }).subscribe(function (data) {
                                //this.Loading.dismiss();
                                console.log(data);
                                //              alert("saving image")
                            }, function (err) {
                                //              alert(' api error');
                                console.log(JSON.stringify(err));
                                //              alert(JSON.stringify(err))
                            });
                            //            alert('gallery working');
                        }, function (err) {
                            // this.loading.dismiss();
                            //            alert('error');
                            //            alert(JSON.stringify(err));
                            // Handle error
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        actionsheet.dismiss();
                    }
                }]
        });
        actionsheet.present();
    };
    // saveimage(img) {
    //   alert('image saving');
    //   let headers = new Headers();
    //   headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    //   let options = new RequestOptions({ headers: headers });
    //   var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
    //   var postdata = {
    //     id: userid,
    //     image: img
    //   };
    //   alert(postdata)
    //   var serialized = this.serializeObj(postdata);
    //   this.http.post(this.appsetting.myGlobalVar + 'edit_user_info', serialized, options).map(res => res.json()).subscribe(data => {
    //     //this.Loading.dismiss();
    //     console.log(data)
    //     alert("saving image")
    //   })
    // }
    EditprofilePage.prototype.openmapmodal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__mapmodal_mapmodal__["a" /* MapmodalPage */]);
        modal.onDidDismiss(function (data) {
            //      alert(data.address);
            _this.data.geolocation = data.address;
            console.log(_this.data.geolocation);
            console.log(data.lati);
            console.log(data.longi);
            _this.lat = data.lati;
            _this.long = data.longi;
        });
        modal.present();
    };
    EditprofilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditprofilePage');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    EditprofilePage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    EditprofilePage.prototype.profile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]);
    };
    EditprofilePage.prototype.phonevalidation = function (phn) {
        if (phn.length == 3) {
            this.data.phone = this.data.phone + '-';
        }
        else if (phn.length == 7) {
            this.data.phone = this.data.phone + '-';
        }
    };
    EditprofilePage.prototype.isReadonly = function () {
        return this.isReadonly; //return true/false 
    };
    EditprofilePage.prototype.ngOnInit = function () {
        this.date = __WEBPACK_IMPORTED_MODULE_9_moment__(new Date()).format('YYYY-MM-DD');
        console.log(this.date);
    };
    return EditprofilePage;
}());
EditprofilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-editprofile',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/editprofile/editprofile.html"*/'<!--\n  Generated template for the EditprofilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Edit Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n <div class="main_box">\n <div class="left_box">\n <img *ngIf="srcImage" class="pick0" [src]="srcImage">\n <img *ngIf="!srcImage" class="pick0" src="assets/image/profile_img.png">\n      <div class="input-sec"  (click)="CameraAction()">\n      <div class="upld">\n      <ion-icon name="ios-camera-outline"></ion-icon>\n      <button class="camera camerabg" ion-button icon-only>\n			\n		</button>\n      </div>\n      </div>\n <div class="content01">\n<h5>{{proffile?.firstname}}</h5>\n<p>{{proffile?.email}}</p>\n </div>\n   </div>\n</div>\n\n\n<form class="form-sec" #editInfo="ngForm" novalidate (submit)="edituserprofile(editInfo)">\n    <ion-list>\n      <ion-item>\n        <ion-label stacked>FIRST NAME</ion-label>\n        <ion-input type="text" [(ngModel)]="data.firstname" name=\'firstname\' #firstname="ngModel" required></ion-input>\n        <div class="alert alert-danger" color="danger">\n                  <div *ngIf="firstname.errors && (firstname.dirty || firstname.touched)">\n                    <div [hidden]="!firstname.errors.required">\n                      First name is required\n                    </div>\n                  </div>\n                </div>\n      </ion-item>\n\n\n\n      <ion-item>\n        <ion-label stacked>LAST NAME</ion-label>\n        <ion-input type="text"  [(ngModel)]="data.lastname" name=\'lastname\' #lastname="ngModel" required></ion-input>\n         <div class="alert alert-danger" color="danger">\n                  <div *ngIf="lastname.errors && (lastname.dirty || lastname.touched)">\n                    <div [hidden]="!lastname.errors.required">\n                      Last name is required\n                    </div>\n                  </div>\n                </div>\n      </ion-item>\n\n     \n      <ion-item>\n        <ion-label stacked>PHONE NUMBER (xxx-xxx-xxxx)</ion-label>\n        <ion-input type="tel"  [(ngModel)]="data.phone" name=\'phone\' #phone="ngModel" pattern="^[0-9]+(-[0-9]+)+$" maxlength="12" required  (input)="phonevalidation(data.phone)"></ion-input>\n      <div class="alert alert-danger" color="danger">\n                  <div *ngIf="phone.errors && (phone.dirty || phone.touched)">\n                    <div [hidden]="!phone.errors.required">\n                      Phone number required\n                    </div>\n                    <div [hidden]="!phone.errors.pattern">\n                      Only number allowed with pattern (xxx-xxx-xxx-xxx-xxx)\n                    </div>\n                  </div>\n                </div>\n      </ion-item>\n        <ion-col col-12>\n            \n         <ion-item>\n              <ion-label stacked>BIRTHDAY</ion-label>\n	   <ion-datetime displayFormat="DD MMM YYYY" pickerFormat="DD MMM YYYY" [(ngModel)]="data.dob" name="dob" #dob="ngModel" max="{{date}}" required></ion-datetime>\n	  </ion-item>\n	</ion-col>\n	<ion-col col-12>\n	<ion-item>\n               <ion-label stacked>GENDER</ion-label>\n	<ion-select [(ngModel)]="data.gender" name="gender" #gender="ngModel" required>\n		   <ion-option value="female">Female</ion-option>\n	 <ion-option value="male">Male</ion-option>\n							  </ion-select>\n						  </ion-item>\n	</ion-col>\n\n\n      <!--<ion-item>\n        <ion-label stacked>ALTERNATIVE PHONE NUMBER</ion-label>\n        <ion-input type="text"  maxlength="15"></ion-input>\n      </ion-item>-->\n<div class="content-lable">\n    <div style="position: relative; overflow: hidden;">\n    <ion-icon ios="ios-locate-outline" md="md-locate" (click)="openmapmodal()" style="position: absolute;\n    top: 4px;\n    right: -24px;\n    width: 50px;\n    height: 50px;\n    /* display: block; */\n    color: #000;\n    z-index: 999; \n    font-size:26px;\n    "></ion-icon>\n\n\n        <ion-label stacked>EDIT GEOLOCATION </ion-label>\n        <ion-input  type="text" class="maptext" [(ngModel)]="data.geolocation" [readonly]="isReadonly()"  name=\'geolocation\' #geolocation="ngModel" style="margin:0;" ></ion-input>\n \n</div>\n\n</div>\n\n    </ion-list>\n <div class="frgtpwd">\n   <button ion-button type="submit" [disabled]="!editInfo.valid">Save</button>\n  </div>\n   </form>\n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/editprofile/editprofile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_geocoder__["a" /* NativeGeocoder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
], EditprofilePage);

//# sourceMappingURL=editprofile.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddspecialitiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the AddspecialitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddspecialitiesPage = (function () {
    function AddspecialitiesPage(navCtrl, navParams, appsetting, http, alertCtrl, toastCtrl, actionSheetCtrl, camera, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appsetting = appsetting;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.data = {};
        this.arr = [];
        this.array = [];
        //    alert('ioioio');
        console.log(this.arr.length);
    }
    AddspecialitiesPage.prototype.Addspeciality = function (speciality) {
        var _this = this;
        console.log(speciality.value);
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
        var postdata = {
            id: userid,
            specialties_product: speciality.value.specialtiesproduct,
            add_ingredients: speciality.value.addingredients,
            speciality_cuisine: speciality.value.specialtiescuisine,
            specialities_product_image1: this.srcImage,
            specialities_product_image2: this.srcImage1,
            specialities_product_image3: this.srcImage2
        };
        console.log(postdata);
        this.array.push(this.data);
        console.log(this.array.length);
        if (postdata.specialities_product_image1) {
            var serialized = this.serializeObj(postdata);
            var Loading = this.loadingCtrl.create({
                spinner: 'bubbles',
                cssClass: 'loader'
            });
            Loading.present().then(function () {
                _this.http.post(_this.appsetting.myGlobalVar + 'add_specialties', serialized, options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (response) {
                    console.log(response);
                    Loading.dismiss();
                    if (response.status == true) {
                        _this.presentConfirm('Specialities added successfully.<br>You want to add another?');
                        //this.navCtrl.push(TabsPage)
                    }
                }, function (err) {
                    console.log(err);
                });
            });
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Atleast one image have to be selected',
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        }
    };
    AddspecialitiesPage.prototype.presentConfirm = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'CANCEL',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__["a" /* ProfilePage */]);
                    }
                },
                {
                    text: 'ADD',
                    handler: function () {
                        console.log(_this.data);
                        _this.data = {
                            'specialtiesproduct': ' ',
                            'addingredients': ' ',
                            'specialtiescuisine': ' '
                        };
                        _this.srcImage = '';
                        _this.srcImage1 = '';
                        _this.srcImage2 = '';
                        console.log('Neelanshi');
                        console.log(_this.data);
                    }
                }
            ]
        });
        alert.present();
    };
    AddspecialitiesPage.prototype.CameraAction = function () {
        var _this = this;
        console.log('opening');
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
        var actionsheet = this.actionSheetCtrl.create({
            title: "Choose Album",
            buttons: [{
                    text: 'Camera',
                    handler: function () {
                        // this.loading.present();
                        var options = {
                            quality: 8,
                            sourceType: 1,
                            targetWidth: 767,
                            targetHeight: 600,
                            correctOrientation: true,
                            allowEdit: true,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE
                        };
                        _this.camera.getPicture(options).then(function (imageUri) {
                            //            this.srcImage = 'data:image/jpeg;base64,' + imageUri;
                            //this.srcImage =imageUri;
                            _this.arr.push({ 'image': imageUri });
                            //                  alert(JSON.stringify(this.arr));
                            _this.srcImage = 'data:image/jpeg;base64,' + _this.arr[0].image;
                            _this.srcImage1 = 'data:image/jpeg;base64,' + _this.arr[1].image;
                            _this.srcImage2 = 'data:image/jpeg;base64,' + _this.arr[2].image;
                            _this.arr = '';
                            _this.arr = [];
                            //            alert('camera working');
                            //            
                        }, function (err) {
                            //            alert(JSON.stringify(err));
                            // this.loading.dismiss();
                            console.log(err);
                        });
                    }
                },
                {
                    text: 'Gallery',
                    handler: function () {
                        console.log("Gallery Clicked");
                        //	alert("get Picture")
                        // this.loading.present();
                        var options = {
                            quality: 10,
                            sourceType: 0,
                            targetWidth: 767,
                            targetHeight: 600,
                            correctOrientation: true,
                            allowEdit: true,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            //            this.srcImage = 'data:image/jpeg;base64,' + imageData;
                            //            this.srcImage=imageData;
                            _this.arr.push({ 'image': imageData });
                            //                  alert(JSON.stringify(this.arr));
                            _this.srcImage = 'data:image/jpeg;base64,' + _this.arr[0].image;
                            _this.srcImage1 = 'data:image/jpeg;base64,' + _this.arr[1].image;
                            _this.srcImage2 = 'data:image/jpeg;base64,' + _this.arr[2].image;
                            _this.arr = '';
                            _this.arr = [];
                            //            alert('gallery working');
                        }, function (err) {
                            // this.loading.dismiss();
                            //alert('error');
                            //            alert(JSON.stringify(err));
                            // Handle error
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        actionsheet.dismiss();
                    }
                }]
        });
        actionsheet.present();
    };
    AddspecialitiesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddspecialitiesPage');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    AddspecialitiesPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    AddspecialitiesPage.prototype.home = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return AddspecialitiesPage;
}());
AddspecialitiesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-addspecialities',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/addspecialities/addspecialities.html"*/'<!--\n  Generated template for the AddspecialitiesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Add Specialities</ion-title>\n\n  </ion-navbar>\n  \n</ion-header>\n\n<ion-content>\n    <div class="content-text">\n  <h1 style="font-size:14px">Add Specialities</h1>\n  </div>\n  <div class="content-sec">\n  <div class="sign">\n   <form class="form-sec" #specialityform="ngForm" novalidate>\n    <ion-list>\n         <ion-grid>\n          <ion-row>\n               <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>ADD SPECIALITY CUISINE </ion-label>\n          <ion-input type="text" [(ngModel)]="data.specialtiescuisine" name=\'specialtiescuisine\' #specialtiescuisine="ngModel" required></ion-input>\n        </ion-item>\n            <div class="alert alert-danger" color="danger">\n            <div *ngIf="specialtiescuisine.errors && (specialtiescuisine.dirty || specialtiescuisine.touched)">\n              <div [hidden]="!specialtiescuisine.errors.required">\n                Speciality Cuisine is required\n              </div>\n            </div>\n          </div>\n      </ion-col>\n            <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>SPECIALITIES PRODUCT </ion-label>\n          <ion-input type="text" [(ngModel)]="data.specialtiesproduct" name=\'specialtiesproduct\' #specialtiesproduct="ngModel" required></ion-input>\n        </ion-item>\n            <div class="alert alert-danger" color="danger">\n            <div *ngIf="specialtiesproduct.errors && (specialtiesproduct.dirty || specialtiesproduct.touched)">\n              <div [hidden]="!specialtiesproduct.errors.required">\n                Speciality Product is required\n              </div>\n            </div>\n          </div>\n      </ion-col>\n      <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>PRODUCT INGREDIENTS</ion-label>\n          <ion-input type="text"  [(ngModel)]="data.addingredients" name="addingredients" #addingredients="ngModel" required></ion-input>\n        </ion-item>\n             <div class="alert alert-danger" color="danger">\n            <div *ngIf="addingredients.errors && (addingredients.dirty || addingredients.touched)">\n              <div [hidden]="!addingredients.errors.required">\n                Product Ingridients are required\n              </div>\n            </div>\n          </div>\n      </ion-col>\n     </ion-row>\n      </ion-grid>\n    </ion-list>\n  \n\n<br>\n\n<div class="add">\n  <h2 >ADD PRODUCT IMAGE</h2>\n<ion-grid style="padding:0;">\n  <ion-row>\n    <ion-col col-3 style="padding-left:0px;">\n      <div class="image" >\n\n           <img *ngIf="srcImage" class="pick0" [src]="srcImage" >\n <img *ngIf="!srcImage" class="pick0" src="assets/image/profile_img.png">\n <!--<img *ngIf="!srcImage" class="pick0" src="assets/image/profile_img.png">-->\n     \n      </div>\n      </ion-col>\n\n\n      <ion-col col-3 style="padding-left:0px;">\n      <div class="image">\n      <img *ngIf="srcImage1" class="pick0" [src]="srcImage1">\n <img *ngIf="!srcImage1" class="pick0" src="assets/image/profile_img.png">\n      </div>\n      </ion-col><!--\n\n\n-->      <ion-col col-3 style="padding-left:0px;">\n      <div class="image">\n   <img *ngIf="srcImage2" class="pick0" [src]="srcImage2">\n <img *ngIf="!srcImage2" class="pick0" src="assets/image/profile_img.png">\n      </div>\n      </ion-col>\n\n\n<ion-col col-3 style="padding-left:0px;" *ngIf="arr.length<3" >\n  <div class="input-sec"  (click)="CameraAction()">\n      <div class="upld">\n       \n       <ion-icon ios="ios-add" md="md-add"></ion-icon>\n      </div>\n      </div>\n      </ion-col>\n\n   \n  </ion-row>\n</ion-grid>\n</div>\n  \n </form>\n  </div>\n\n \n <div class="plusbtn">\n<button ion-fab mini (click)="Addspeciality(specialityform)" [disabled]="!specialityform.valid" ><ion-icon name="add"></ion-icon></button>\n\n</div>\n  \n\n\n</div>\n</ion-content>\n\n\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/addspecialities/addspecialities.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], AddspecialitiesPage);

//# sourceMappingURL=addspecialities.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TermPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TermPage = (function () {
    function TermPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TermPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermPage');
    };
    return TermPage;
}());
TermPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-term',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/term/term.html"*/'<!--\n  Generated template for the TermPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Terms and Conditions</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="preview">\n\n   <div class="top">\n  <h2>Terms and Conditions</h2>\n  <p>Contrary to popular belief, \n    Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,\n     making it over 2000 years old. Richard McClintock, \n     a Latin professor at Hampden-Sydney College in Virginia, \n     looked up one of the more obscure Latin words, consectetur, \n     from a Lorem Ipsum passage, \n     and going through the cites of the word in classical literature,\n      discovered the undoubtable source.\n       Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.\n        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",\n     comes from a line in section 1.10.32.<br><br>Contrary to popular belief, \n    Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,\n     making it over 2000 years old. Richard McClintock, \n     a Latin professor at Hampden-Sydney College in Virginia, \n     looked up one of the more </p>\n     \n </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/term/term.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], TermPage);

//# sourceMappingURL=term.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrequentquestionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FrequentquestionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FrequentquestionsPage = (function () {
    function FrequentquestionsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FrequentquestionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FrequentquestionsPage');
    };
    return FrequentquestionsPage;
}());
FrequentquestionsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-frequentquestions',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/frequentquestions/frequentquestions.html"*/'<!--\n  Generated template for the FrequentquestionsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Frequent Questions</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="preview">\n\n   <div class="top">\n  <h2>What is Lorem Ipsum?</h2>\n  <p>Contrary to popular belief, \n    Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,\n     making it over 2000 years old.</p>\n </div>\n  <div class="top">\n  <h2>Where does it come from?</h2>\n  <p>Contrary to popular belief, \n    Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,\n     making it over 2000 years old.</p>\n\n\n    <ol>\n    <li >Contray to popular belief</li>\n    <li >Lorem Ipsum is not</li>\n    <li >Simply random text</li>\n    <li >It has roots in a priece </li>\n    </ol>\n </div>\n\n <div class="top">\n  <h2>What is Lorem Ipsum?</h2>\n  <p>Contrary to popular belief, \n    Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,\n     making it over 2000 years old.</p>\n </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/frequentquestions/frequentquestions.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], FrequentquestionsPage);

//# sourceMappingURL=frequentquestions.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HelpPage = (function () {
    function HelpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HelpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HelpPage');
    };
    return HelpPage;
}());
HelpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-help',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/help/help.html"*/'<!--\n  Generated template for the HelpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Help</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="preview">\n\n   <div class="top">\n  <h2>Where can I get some?</h2>\n  <p>Contrary to popular belief, \n    Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,\n     making it over 2000 years old. Richard McClintock, \n     a Latin professor at Hampden-Sydney College in Virginia, \n     looked up one of the more obscure Latin words, consectetur, \n     from a Lorem Ipsum passage, \n     and going through the cites of the word in classical literature,\n      discovered the undoubtable source.\n       Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.\n        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",\n     comes from a line in section 1.10.32.</p>\n     \n </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/help/help.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], HelpPage);

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeolocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the GeolocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GeolocationPage = (function () {
    function GeolocationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GeolocationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GeolocationPage');
    };
    return GeolocationPage;
}());
GeolocationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-geolocation',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/geolocation/geolocation.html"*/'<!--\n  Generated template for the GeolocationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar  color="theme-header">\n    <ion-title>Geo Location </ion-title>\n     <ion-buttons end icononly>\n   <button ion-button >\n  Cancel \n </button>\n </ion-buttons>\n    \n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15258308.700625544!2d82.75252935!3d20.98570035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1509949263950" width="325" height="514" allowfullscreen></iframe>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n  <div class="text">\n    <div class=textsss>\n    <ion-input class="enter entrssss" placeholder="Enter your text"  > \n      </ion-input>\n      <div class="locationicon">\n           <ion-icon name="ios-pin-outline"></ion-icon>\n      </div>\n    </div>\n <button ion-button color="btncolor">Done</button>\n  </div>\n  \n \n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/geolocation/geolocation.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], GeolocationPage);

//# sourceMappingURL=geolocation.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangepasswordPage = (function () {
    function ChangepasswordPage(navCtrl, navParams, toastCtrl, loadingCtrl, http, alertCtrl, appsetting) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.appsetting = appsetting;
        this.data = '';
    }
    ChangepasswordPage.prototype.changepassword = function (changepass) {
        var _this = this;
        console.log('forgot');
        console.log(changepass.value);
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* RequestOptions */]({ headers: headers });
        if (changepass.value.newpassword == changepass.value.cnewpassword) {
            var email = JSON.parse(localStorage.getItem('UserInfo')).email;
            if (changepass.value.oldpassword.indexOf(' ') >= 0 || changepass.value.newpassword.indexOf(' ') >= 0) {
                var toast = this.toastCtrl.create({
                    message: 'Space not allowed in password',
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            }
            else {
                var postdata = {
                    email: email,
                    password: changepass.value.oldpassword,
                    newpassword: changepass.value.newpassword
                };
                console.log(postdata);
                //alert(JSON.stringify(postdata));
                var Serialized = this.serializeObj(postdata);
                var Loading = this.loadingCtrl.create({
                    spinner: 'bubbles',
                    cssClass: 'loader'
                });
                Loading.present().then(function () {
                    _this.http.post(_this.appsetting.myGlobalVar + 'changepwd', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                        console.log(response);
                        Loading.dismiss();
                        if (response.status == true) {
                            // var clear =localStorage.getItem('UserInfo');
                            localStorage.removeItem('UserInfo');
                            _this.ToastMsg('Password updated successfully');
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signin_signin__["a" /* SigninPage */]);
                        }
                        else {
                            _this.ToastMsg(response.message);
                        }
                    });
                });
            }
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Change Password',
                subTitle: 'Password did not match',
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 1500);
        }
    };
    ChangepasswordPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    ChangepasswordPage.prototype.ToastMsg = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 5000,
            position: 'middle'
        });
        toast.present();
    };
    ChangepasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangepasswordPage');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    return ChangepasswordPage;
}());
ChangepasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-changepassword',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/changepassword/changepassword.html"*/'<!--\n  Generated template for the ChangepasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Change Password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content>\n  <div class="main">\n  <div class="image">\n   <img src="assets/image/logo.png">\n  </div>\n </div>\n <div class="content-sec">\n  <div class="sign">\n   <form class="form-sec" #changepasswordForm="ngForm" (submit)="changepassword(changepasswordForm)">\n    <ion-list>\n\n      <ion-item>\n        <ion-label stacked>Enter your old password</ion-label>\n        <ion-input type="password" [(ngModel)]="data.oldpassword" name="oldpassword" #oldpassword="ngModel" pattern="(?!^[0-9]*$)(?!^[a-zA-Z@/*/#]*$)(?!^[a-zA-Z0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9@/*/#]{6,30})"  required></ion-input>\n      </ion-item>\n      <div *ngIf="oldpassword.errors && (oldpassword.dirty || oldpassword.touched)">\n              <div [hidden]="!oldpassword.errors.required">\n                Password is required\n              </div>\n							<div [hidden]="!oldpassword.errors.minlength">\n								Password must be at least 6 digits\n							</div>\n                                              <div [hidden]="!oldpassword.errors.pattern">\n                                       Password is weak(It should be combination of a-z,A-Z,0-9,@*#)\n                                           </div>\n                  \n            </div>\n       <ion-item>\n        <ion-label stacked>Enter your new password</ion-label>\n        <ion-input type="password" [(ngModel)]="data.newpassword" name="newpassword" #newpassword="ngModel"  pattern="(?!^[0-9]*$)(?!^[a-zA-Z@/*/#]*$)(?!^[a-zA-Z0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9@/*/#]{6,30})" required></ion-input>\n      </ion-item>\n      <div *ngIf="newpassword.errors && (newpassword.dirty || newpassword.touched)">\n              <div [hidden]="!newpassword.errors.required">\n                Password is required\n              </div>\n							<div [hidden]="!newpassword.errors.minlength">\n								Password must be at least 6 digits\n							</div>\n                                              <div [hidden]="!newpassword.errors.pattern">\n                                       Password is weak(It should be combination of a-z,A-Z,0-9,@*#)\n                                           </div>\n                  \n            </div>\n       <ion-item>\n        <ion-label stacked>Confirm your new password</ion-label>\n        <ion-input type="password" [(ngModel)]="data.cnewpassword" name="cnewpassword" #cnewpassword="ngModel"  validateEqual="changepasswordForm.value.newpassword" pattern="(?!^[0-9]*$)(?!^[a-zA-Z@/*/#]*$)(?!^[a-zA-Z0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9@/*/#]{6,30})" required></ion-input>\n      </ion-item>\n      <ion-label class="alert alert-danger" color="danger">\n          <div *ngIf="cnewpassword.errors && (cnewpassword.dirty || cnewpassword.touched)">\n              <div [hidden]="!cnewpassword.errors.required">\n                Password is required\n              </div>\n							<div [hidden]="!cnewpassword.errors.minlength">\n								Password must be at least 6 digits\n							</div>\n                                              <div [hidden]="!cnewpassword.errors.pattern">\n                                       Password is weak(It should be combination of a-z,A-Z,0-9,@*#)\n                                           </div>\n                  \n            </div>\n              \n               <!--<div *ngIf="registrationForm.value.password != registrationForm.value.cpassword">\n          Password mismatch\n        </div>-->\n            \n       \n         <!--<span class="spn" ng-show="data.password != data.cpassword">Your passwords must match.</span>-->\n      </ion-label>\n    </ion-list>\n    <div class="frgtpwd">\n      <button ion-button type="submit" [disabled]="!changepasswordForm.valid">Save</button>\n     </div>\n   </form>\n  </div>\n \n\n </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/changepassword/changepassword.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */]])
], ChangepasswordPage);

//# sourceMappingURL=changepassword.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__processingform_processingform__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__signin_signin__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mapmodal_mapmodal__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











// import { FormControl, FormGroup, Validators,ValidatorFn,AbstractControl } from '@angular/forms';
// import { DatePipe } from "@angular/common/src/pipes";

// import { ModalController } from 'ionic-angular';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//  declare var google;
var RegisterPage = (function () {
    // user: FormGroup;
    function RegisterPage(navCtrl, toastCtrl, navParams, geolocation, nativeGeocoder, appsetting, http, device, alertCtrl, loadingCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.appsetting = appsetting;
        this.http = http;
        this.device = device;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.data = [];
        console.log('Device UUID is: updated' + this.device.uuid);
        // this.data.result='hggjgj';
        this.date = new Date();
        console.log(this.date);
    }
    RegisterPage.prototype.ngOnInit = function () {
        this.date = __WEBPACK_IMPORTED_MODULE_11_moment__(new Date()).format('YYYY-MM-DD');
        console.log(this.date);
        this.GetLocation();
    };
    RegisterPage.prototype.Registration = function (register) {
        var _this = this;
        console.log('registration');
        console.log(register.value);
        //     alert(JSON.stringify(register.value));
        console.log(this.lat, this.long);
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["e" /* RequestOptions */]({ headers: headers });
        if (register.value.password.indexOf(' ') >= 0) {
            var toast = this.toastCtrl.create({
                message: 'Space not allowed in password',
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        }
        else if (register.value.password == register.value.cpassword) {
            if (register.value.phone) {
                register.value.phone = register.value.phone.replace(/-/g, "");
                var postdata = {
                    first_name: register.value.firstname,
                    last_name: register.value.lastname,
                    birth_day: register.value.dob,
                    gender: register.value.gender,
                    phone: register.value.phone,
                    emailid: register.value.email,
                    password: register.value.password,
                    lat: this.lat,
                    long: this.long,
                    address: register.value.result,
                    role: 'chef',
                    device_token: this.device.uuid
                };
                console.log(postdata);
                var Serialized = this.serializeObj(postdata);
                var Loading = this.loadingCtrl.create({
                    spinner: 'bubbles',
                    cssClass: 'loader',
                });
                Loading.present().then(function () {
                    _this.http.post(_this.appsetting.myGlobalVar + 'chefregistration', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                        console.log(response);
                        Loading.dismiss();
                        if (response.status == true) {
                            _this.AlertMsg('CONGRATULATIONS<br>You have been selected to provide your services in RAFAHO.<br>Press continue to complete the registration');
                            if (localStorage.getItem('UserInfo')) {
                                localStorage.removeItem('UserInfo');
                            }
                            //   geolocation:null
                            // };
                            console.log(response.data._id);
                            localStorage.setItem('UserInfo', JSON.stringify(response.data));
                            //        this.navCtrl.push(SigninPage);
                        }
                        else {
                            _this.AlertMsg1(response.message);
                        }
                    });
                });
            }
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Registration',
                subTitle: 'Password did not match',
            });
            alert_1.present();
            setTimeout(function () { return alert_1.dismiss(); }, 1500);
        }
    };
    /*************function for get user corrent location (latitude and longitude) and get address from lat long ************/
    RegisterPage.prototype.GetLocation = function () {
        var _this = this;
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            cssClass: 'loader',
            content: 'Make sure your Location is on....'
        });
        Loading.present().then(function () {
            _this.geolocation.getCurrentPosition().then(function (resp) {
                // resp.coords.latitude
                // resp.coords.longitude
                console.log('latitude:' + resp.coords.latitude + 'longitude:' + resp.coords.longitude);
                // this.lat = resp.coords.latitude;
                // this.long = resp.coords.longitude;
                Loading.dismiss();
                _this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude)
                    .then(function (result) {
                    // alert(JSON.stringify(result));
                    if (result.subThoroughfare) {
                        _this.data.result = result.subThoroughfare + ',' + result.thoroughfare + ',' + result.subLocality + ',' + result.locality + ',' + result.postalCode + ',' + result.countryName;
                    }
                    else if (result.thoroughfare) {
                        _this.data.result = result.thoroughfare + ',' + result.subLocality + ',' + result.locality + ',' + result.postalCode + ',' + result.countryName;
                    }
                    else {
                        _this.data.result = result.subLocality + ',' + result.locality + ',' + result.postalCode + ',' + result.countryName;
                    }
                    //  alert(this.data.result +'Neelanshi');
                    Loading.dismiss();
                }).catch(function (error) { return console.log(error); });
            }).catch(function (error) {
                console.log('Error getting location', error);
                _this.ToastMsg('Please enable your location');
            });
        });
    };
    RegisterPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
        console.log('Neelanshi bhatnagar');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    RegisterPage.prototype.isReadonly = function () {
        return this.isReadonly; //return true/false 
    };
    RegisterPage.prototype.backtosignin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__signin_signin__["a" /* SigninPage */]);
    };
    RegisterPage.prototype.openmapmodal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__mapmodal_mapmodal__["a" /* MapmodalPage */]);
        modal.onDidDismiss(function (data) {
            _this.data.result = data.address;
            console.log(_this.data.result);
            console.log(data.lati);
            console.log(data.longi);
            _this.lat = data.lati;
            _this.long = data.longi;
        });
        modal.present();
    };
    RegisterPage.prototype.ToastMsg = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'middle'
        });
        toast.present();
    };
    RegisterPage.prototype.AlertMsg = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'CANCEL',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        // this.navCtrl.push(RegisterPage)
                    }
                },
                {
                    text: 'Continue',
                    role: 'submit',
                    handler: function () {
                        console.log('Continue clicked');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__signin_signin__["a" /* SigninPage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    RegisterPage.prototype.AlertMsg1 = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'OK',
                    role: 'submit',
                    handler: function () {
                        console.log('ok clicked');
                        // this.navCtrl.push(ProcessingformPage);
                    }
                }
            ]
        });
        alert.present();
    };
    RegisterPage.prototype.process = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__processingform_processingform__["a" /* ProcessingformPage */]);
    };
    RegisterPage.prototype.phonevalidation = function (phn) {
        console.log(phn.length);
        if (phn.length == 3) {
            this.data.phone = this.data.phone + '-';
        }
        else if (phn.length == 7) {
            this.data.phone = this.data.phone + '-';
        }
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-register',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n<ion-toolbar color="theme-header">\n        <button style="height:28px;" start ion-button clear (click)="backtosignin()"><ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon></button>\n    <ion-title>Register</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class="background banner">\n    <img src="assets/image/background banner.png">\n  </div>\n\n  <div class="content-sec">\n    <div class="sign">\n      <form class="form-sec" #registrationForm="ngForm" novalidate (submit)="Registration(registrationForm)">\n        <ion-list>\n          <ion-grid>\n            <ion-row>\n              <ion-col col-6 class="left" style="position:initial;">\n                <ion-item>\n                  <ion-label stacked>FIRST NAME</ion-label>\n                  <ion-input type="text" [(ngModel)]="data.firstname" required name=\'firstname\' #firstname="ngModel"></ion-input>\n                </ion-item>\n                <div class="alert alert-danger" color="danger">\n                  <div *ngIf="firstname.errors && (firstname.dirty || firstname.touched)">\n                    <div [hidden]="!firstname.errors.required">\n                      First name is required\n                    </div>\n                  </div>\n                </div>\n              </ion-col>\n              <ion-col col-6 class="right" style="position:initial;">\n                <ion-item>\n                  <ion-label stacked>LAST NAME</ion-label>\n                  <ion-input type="text" [(ngModel)]="data.lastname" name="lastname" #lastname="ngModel" required></ion-input>\n                </ion-item>\n                <div class="alert alert-danger" color="danger">\n                  <div *ngIf="lastname.errors && (lastname.dirty || lastname.touched)">\n                    <div [hidden]="!lastname.errors.required">\n                      Last name is required\n                    </div>\n                  </div>\n                </div>\n              </ion-col>\n              <ion-col col-6 class="left" style="position:initial;">\n                <ion-item>\n                  <ion-label stacked>BIRTHDAY</ion-label>\n                  <ion-datetime displayFormat="DD MMM YYYY" pickerFormat="DD MMM YYYY"  [(ngModel)]="data.dob" name="dob" #dob="ngModel" max="{{date}}"  required></ion-datetime>\n                  <!-- <ion-input type="date" [(ngModel)]="data.dob" name="dob" #dob="ngModel" required></ion-input> -->\n                </ion-item>\n                <div class="alert alert-danger" color="danger">\n                  <div *ngIf="dob.errors && (dob.dirty || dob.touched)">\n                    <div [hidden]="!dob.errors.required">\n                      What\'s your date of birth?\n                    </div>\n                  </div>\n                </div>\n              </ion-col>\n              <ion-col col-6 class="right gender" style="position:initial;">\n                <ion-label>GENDER</ion-label>\n                <ion-item>\n                  <ion-select [(ngModel)]="data.gender" name="gender" #gender="ngModel" required>\n                    <ion-option value="female">Female</ion-option>\n                    <ion-option value="male">Male</ion-option>\n                  </ion-select>\n                </ion-item>\n                <div class="alert alert-danger" color="danger">\n                  <div *ngIf="gender.errors && (gender.dirty || gender.touched)">\n                    <div [hidden]="!gender.errors.required">\n                      You are?\n                    </div>\n                  </div>\n                </div>\n              </ion-col>\n              <ion-col col-12 class="left right" style="position:initial;">\n                <ion-item>\n                  <ion-label stacked>ADDRESS</ion-label>\n                  <ion-input type="text" [(ngModel)]="data.address" name="address" #address="ngModel" required></ion-input>\n                </ion-item>\n                <div class="alert alert-danger" color="danger">\n                  <div *ngIf="address.errors && (address.dirty || address.touched)">\n                    <div [hidden]="!address.errors.required">\n                      Address is required\n                    </div>\n                  </div>\n                </div>\n              </ion-col>\n              <ion-col col-12 class="left right" style="position:initial;">\n                <ion-item>\n                  <ion-label stacked>PHONE NUMBER (xxx-xxx-xxxx)</ion-label>\n                  <ion-input (input)="phonevalidation(data.phone)" type="tel" [(ngModel)]="data.phone" name="phone" #phone="ngModel" pattern="^[0-9]+(-[0-9]+)+$" maxlength="12" required></ion-input>\n                </ion-item>\n                <div class="alert alert-danger" color="danger">\n                  <div *ngIf="phone.errors && (phone.dirty || phone.touched) && data.phone">\n                    <div [hidden]="!phone.errors.required">\n                      Phone number required\n                    </div>\n                    <div [hidden]="!phone.errors.pattern">\n                      Only number allowed\n                    </div>\n                  </div>\n                </div>\n              </ion-col>\n              <ion-col col-12 class="left right" style="position:initial;">\n                <ion-item>\n                  <ion-label stacked>EMAIL</ion-label>\n                  <!--"^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9.]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"-->\n                      <ion-input type="text" autocapitalize="none" [(ngModel)]="data.email" name="email" #email=\'ngModel\' pattern="^[a-z0-9]+(\.[_a-z0-9]+)+([@{1}])+(\.[a-z0-9-]+)+([.{1}])(\.[a-z]{1,15})$" required></ion-input>\n                </ion-item>\n                <div class="alert alert-danger" color="danger">\n                  <div *ngIf="email.errors && (email.dirty || email.touched)">\n                    <div [hidden]="!email.errors.required">\n                      Email is required\n                    </div>\n                    <div [hidden]="!email.errors.pattern">\n                      Invalid email\n                    </div>\n                  </div>\n                </div>\n              </ion-col>\n              <ion-col col-12 class="left right" style="position:initial;">\n                <ion-item>\n                  <ion-label stacked>PASSWORD</ion-label>\n                  <ion-input type="password" [(ngModel)]="data.password" name="password" #password="ngModel"   pattern="(?!^[0-9]*$)(?!^[a-zA-Z@/*/#]*$)(?!^[a-zA-Z0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9@/*/#]{6,30})" required></ion-input>\n                </ion-item>\n                <div class="alert alert-danger" color="danger">\n                  <div *ngIf="password.errors && (password.dirty || password.touched)">\n                    <div [hidden]="!password.errors.required">\n                      Password is required\n                    </div>\n                    <div [hidden]="!password.errors.minlength">\n                      Password must be at least 6 digits\n                    </div>\n                      <div [hidden]="!password.errors.pattern">\n                      Password is weak(It should be combination of a-z,A-Z,0-9,@*#)\n                    </div>\n                  </div>\n                </div>\n              </ion-col>\n              <ion-col col-12 class="left right" style="position:initial;">\n                <ion-item>\n                  <ion-label stacked>CONFIRM PASSWORD</ion-label>\n                  <ion-input type="password" [(ngModel)]="data.cpassword" name="cpassword" #cpassword="ngModel" validateEqual="registrationForm.value.password" required></ion-input>\n                </ion-item>\n                <ion-label class="alert alert-danger" color="danger">\n                    <div *ngIf="cpassword.errors && (cpassword.dirty || cpassword.touched)">\n                        <div [hidden]="!cpassword.errors.required">\n                          Confirm password is required\n                        </div></div>\n                        \n                         <!--<div *ngIf="registrationForm.value.password != registrationForm.value.cpassword">\n                    Password mismatch\n                  </div>-->\n                      \n                 \n                   <!--<span class="spn" ng-show="data.password != data.cpassword">Your passwords must match.</span>-->\n                </ion-label>\n                <!-- <small [hidden]="cpassword.valid || (cpassword.pristine && !f.submitted)">\n                  Password mismatch\n              </small> -->\n              </ion-col>\n              <ion-col col-12 class="left right" style="position:initial;">\n                  <div style="position: relative; overflow: hidden;">\n\n                    <div style="\n    width: 50px;\n    height: 35px;\n    float: right;\n    position: absolute;\n    right: 0;\n    text-align: center;\n    display:block;\n    cursor:pointer;\n" (click)="openmapmodal()">    \n                  <ion-icon ios="ios-locate-outline" md="md-locate"  style="position: absolute;\n    top: 0;\n    right: 0;\n    width: 50px;\n    height: 28px;\n    display: block;\n    color: #000;\n    z-index: 999;\n    bottom: 0;\n    font-size: 26px;\n    margin: auto;\n                  "></ion-icon>\n                    </div>\n                <ion-item>\n                  <ion-label stacked>GEOLOCATION </ion-label>\n                  \n                  <ion-input   type="text" [(ngModel)]= "data.result" [readonly]="isReadonly()" name="result" #result="ngModel" required></ion-input>\n                  \n                </ion-item>\n              </div>\n              </ion-col>\n            </ion-row> \n          </ion-grid>\n        </ion-list>\n        <div class="frgtpwd">\n          <button ion-button type="submit" [disabled]="!registrationForm.valid">Register</button>\n        </div>\n      </form>\n    </div>\n\n\n  </div>\n</ion-content>'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/register/register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
        __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__["a" /* Device */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddreferencePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__extrastaff_extrastaff__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AddreferencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddreferencePage = (function () {
    function AddreferencePage(navCtrl, toastCtrl, navParams, appsetting, http, 
        // private device: Device,
        alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.appsetting = appsetting;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.data = {};
        this.data.why = 'select';
    }
    AddreferencePage.prototype.extrastaff = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__extrastaff_extrastaff__["a" /* ExtrastaffPage */]);
    };
    AddreferencePage.prototype.getdata = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
        var postdata = {
            id: userid
        };
        console.log(postdata);
        var serialized = this.serializeObj(postdata);
        // this.loading.dismiss();
        this.http.post(this.appsetting.myGlobalVar + 'userinfo', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data1) {
            console.log(data1);
            if (data1.data.reference_phone_number) {
                console.log(data1.data.reference_phone_number.length);
                var str = data1.data.reference_phone_number;
                //  var str1 = data1.data.responsible_contact_number;
                var res = str.substring(0, 3);
                var res1 = str.substring(3, 6);
                var res2 = str.substring(6, 10);
                // var res3 = str.substring(9,12);
                data1.data.reference_phone_number = res + '-' + res1 + '-' + res2;
                //  data1.data.responsible_contact_number=res1+'-'+res11+'-'+res21+'-'+res31;
            }
            if (data1.data.reference_phone_number1) {
                console.log(data1.data.reference_phone_number1.length);
                var str = data1.data.reference_phone_number1;
                //  var str1 = data1.data.responsible_contact_number;
                var res = str.substring(0, 3);
                var res1 = str.substring(3, 6);
                var res2 = str.substring(6, 9);
                //  var res3 = str.substring(9,12);
                data1.data.reference_phone_number1 = res + '-' + res1 + '-' + res2;
                //  data1.data.responsible_contact_number=res1+'-'+res11+'-'+res21+'-'+res31;
            }
            if (data1.data.reference_name1 == 'undefined' && data1.data.reference_phone_number1 == 'undefined' && data1.data.relationship_with_reference1 == 'undefined') {
                data1.data.refrenshename1 = '';
                data1.data.refrenshenumber1 = '';
                data1.data.refrensherelation1 = '';
            }
            if (data1.data) {
                _this.data.refrenshenumber = data1.data.reference_phone_number;
                _this.data.refrenshename = data1.data.reference_name;
                _this.data.refrensherelation = data1.data.relationship_with_reference;
                _this.data.refrenshename1 = data1.data.reference_name1;
                _this.data.refrenshenumber1 = data1.data.reference_phone_number1;
                _this.data.refrensherelation1 = data1.data.relationship_with_reference1;
                _this.data.about = data1.data.where_do_you_here_about;
                _this.data.why = data1.data.whay_to_want_use_rafaho;
            }
        });
    };
    AddreferencePage.prototype.Processing = function (processing) {
        var _this = this;
        console.log(processing.value);
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* RequestOptions */]({ headers: headers });
        console.log(processing.value);
        if (processing.value.refrenshenumber || processing.value.refrenshenumber1) {
            if (processing.value.refrenshenumber1 != null) {
                processing.value.refrenshenumber1 = processing.value.refrenshenumber1.replace(/-/g, "");
            }
            processing.value.refrenshenumber = processing.value.refrenshenumber.replace(/-/g, "");
            console.log('working');
            var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
            var refrenshe = {
                id: userid,
                reference_name: processing.value.refrenshename,
                reference_phone_number: processing.value.refrenshenumber,
                relationship_with_reference: processing.value.refrensherelation,
                reference_name1: processing.value.refrenshename1,
                reference_phone_number1: processing.value.refrenshenumber1,
                relationship_with_reference1: processing.value.refrensherelation1,
                where_from_here: processing.value.about,
                why: processing.value.why
            };
            console.log(refrenshe);
            var Serialized = this.serializeObj(refrenshe);
            var Loading = this.loadingCtrl.create({
                spinner: 'bubbles',
                cssClass: 'loader'
            });
            Loading.present().then(function () {
                _this.http.post(_this.appsetting.myGlobalVar + 'refrence_info_update', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                    console.log(response);
                    //  console.log(response);
                    Loading.dismiss();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__extrastaff_extrastaff__["a" /* ExtrastaffPage */]);
                });
            });
        }
    };
    AddreferencePage.prototype.phonevalidation = function (phone) {
        console.log(phone);
        if (phone.length == 3) {
            this.data.refrenshenumber = this.data.refrenshenumber + '-';
        }
        else if (phone.length == 7) {
            this.data.refrenshenumber = this.data.refrenshenumber + '-';
        }
    };
    AddreferencePage.prototype.referencevalidation = function (refphone) {
        console.log(refphone);
        if (refphone.length == 3) {
            this.data.refrenshenumber1 = this.data.refrenshenumber1 + '-';
        }
        else if (refphone.length == 7) {
            this.data.refrenshenumber1 = this.data.refrenshenumber1 + '-';
        }
    };
    AddreferencePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddreferencePage');
        console.log('Neelanshi bhatnagar');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
        this.getdata();
    };
    AddreferencePage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    return AddreferencePage;
}());
AddreferencePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-addreference',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/addreference/addreference.html"*/'<!--\n  Generated template for the AddreferencePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Processing Form</ion-title>\n  </ion-navbar>\n\n<div class="circle-top">\n  <ul>\n    <li class="one-circle"></li>\n    <li class="two-circle"></li>\n    <li  class="three-circle"></li>\n    \n    <div class="circle-line">\n      </div>\n    </ul>\n  </div>\n\n</ion-header>\n\n<ion-content>\n    <div class="content-sec">\n   <div class="text-sec">\n  <h2>Add Reference </h2>\n  </div>\n\n<div class="sign">\n   <form class="form-sec" #processform="ngForm" novalidate>\n    <ion-list>\n         <ion-grid>\n          <ion-row>\n      <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>REFERENCE NAME </ion-label>\n          <ion-input type="text" [(ngModel)]="data.refrenshename" name="refrenshename" #refrenshename="ngModel" required></ion-input>\n        </ion-item>\n        <div class="alert alert-danger" color="danger">\n                  <div *ngIf="refrenshename.errors && (refrenshename.dirty || refrenshename.touched)">\n                    <div [hidden]="!refrenshename.errors.required">\n                      Reference name is required\n                    </div>\n                  </div>\n                </div>\n      </ion-col>\n      <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>REFERENCE PHONE NUMBER (xxx-xxx-xxxx)</ion-label>\n          <ion-input  type="tel" [(ngModel)]="data.refrenshenumber" name="refrenshenumber" #refrenshenumber="ngModel"  pattern="^[0-9]+(-[0-9]+)+$" maxlength="12" required (input)="phonevalidation(data.refrenshenumber)"></ion-input>\n        </ion-item>\n         <div class="alert alert-danger" color="danger">\n                  <div *ngIf="refrenshenumber.errors && (refrenshenumber.dirty || refrenshenumber.touched)">\n                    <div [hidden]="!refrenshenumber.errors.required">\n                      Phone number required\n                    </div>\n                    <div [hidden]="!refrenshenumber.errors.pattern">\n                      Only number allowed in valid format( xxx-xxx-xxx-xxx-xxx)\n                    </div>\n                 \n                  </div>\n                </div>\n      </ion-col>\n      <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>RELATIONSHIP WITH REFERENCE</ion-label>\n          <ion-input type="text" [(ngModel)]="data.refrensherelation" name="refrensherelation" #refrensherelation="ngModel" required></ion-input>\n        </ion-item>\n             <div class="alert alert-danger" color="danger">\n                  <div *ngIf="refrensherelation.errors && (refrensherelation.dirty || refrensherelation.touched)">\n                    <div [hidden]="!refrensherelation.errors.required">\n                    Relationship with reference  is required\n                    </div>\n                  </div>\n                </div>\n      </ion-col>\n      <ion-col col-12 class="left right">\n        <h1 style="font-size: 14px; font-weight: 700;">Any Other Reference</h1>\n        <ion-item>\n          <ion-label stacked>REFERENCE NAME</ion-label>\n          <ion-input type="tel" [(ngModel)]="data.refrenshename1" name="refrenshename1" #refrenshename1="ngModel"></ion-input>\n        </ion-item>\n       \n      </ion-col>\n      <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>REFERENCE PHONE NUMBER (xxx-xxx-xxxx)</ion-label>\n          <ion-input  type="tel" [(ngModel)]="data.refrenshenumber1" name="refrenshenumber1" #refrenshenumber1="ngModel"  pattern="^[0-9]+(-[0-9]+)+$" maxlength="12"  (input)="referencevalidation(data.refrenshenumber1)"></ion-input>\n        </ion-item>\n         <div class="alert alert-danger" color="danger">\n                  <div *ngIf="refrenshenumber1.errors && (refrenshenumber1.dirty || refrenshenumber1.touched)">\n                    <div [hidden]="!refrenshenumber1.errors.required">\n                      Phone number required\n                    </div>\n                    <div [hidden]="!refrenshenumber1.errors.pattern">\n                      Only number allowed in valid format( xxx-xxx-xxx-xxx-xxx)\n                    </div>\n                 \n                  </div>\n                </div>\n      </ion-col>\n      <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>RELATIONSHIP WITH REFERENCE</ion-label>\n          <ion-input type="text" [(ngModel)]="data.refrensherelation1" name="refrensherelation1" #refrensherelation1="ngModel"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>HOW DID YOU HEAR ABOUT RAF</ion-label>\n          <ion-input type="text" [(ngModel)]="data.about" name="about" #about="ngModel"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 class="select">\n         <ion-label stacked class="why">WHY YOU WANT TO USE RAFAHO</ion-label>\n        <ion-item>\n         \n          <!-- <ion-label class="select">Select</ion-label> -->\n          <!--<div class="selectuser">-->\n     <ion-select [(ngModel)]="data.why" name="why" #why="ngModel" >\n        <ion-option value="select"> Select</ion-option>\n    <ion-option value="1"> User Friendly</ion-option>\n    <ion-option value="2">Excellent Part Time Opportunity for affined chefs</ion-option>\n   \n    <ion-option value="3">Give wings to your  new cookery innovations</ion-option>\n    <ion-option value="4">Opportunity to earn more while you work</ion-option>\n  </ion-select>\n  <!--</div>-->\n        </ion-item>\n      </ion-col>\n     </ion-row>\n      </ion-grid>\n    </ion-list>\n       <div class="bottombutton">\n        <button ion-button full (click)="Processing(processform)"  color="theme-header" [disabled]="!processform.valid">Next</button>\n    </div>\n   </form>\n  </div>\n  \n </div>\n \n</ion-content>\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/addreference/addreference.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], AddreferencePage);

//# sourceMappingURL=addreference.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the OrderlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderlistPage = (function () {
    function OrderlistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OrderlistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderlistPage');
    };
    return OrderlistPage;
}());
OrderlistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-orderlist',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/orderlist/orderlist.html"*/'<!--\n  Generated template for the OrderlistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>orderlist</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/orderlist/orderlist.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], OrderlistPage);

//# sourceMappingURL=orderlist.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalenderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CalenderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CalenderPage = (function () {
    function CalenderPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CalenderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CalenderPage');
    };
    return CalenderPage;
}());
CalenderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-calender',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/calender/calender.html"*/'<!--\n  Generated template for the CalenderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Calender</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/calender/calender.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], CalenderPage);

//# sourceMappingURL=calender.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatPage = (function () {
    function ChatPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatPage');
    };
    return ChatPage;
}());
ChatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-chat',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/chat/chat.html"*/'<!--\n  Generated template for the ChatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="theme-header">\n    <ion-title>Chat</ion-title>\n  </ion-navbar>\n\n  <div class="segment-sec">\n  <ion-toolbar>\n  <ion-segment [(ngModel)]="pet">\n    <ion-segment-button value="staff">\n     STAFF\n    </ion-segment-button>\n    <ion-segment-button value="USERS">\n      USERS\n    </ion-segment-button>\n  </ion-segment>\n  </ion-toolbar>\n</div>\n</ion-header>\n\n<ion-content padding>\n\n<div class="chatsec">\n <ul>\n  <li>\n   <span class="userimg"><img src="assets/image/chat_img1.png"></span>\n   <div class="chattxt">\n    <p>Hi, How are you?</p>\n    <span class="timedate"> 12:20am</span>\n   </div>\n  </li>\n\n  <li class="rightchat">\n   <div class="chattxt">\n    <p>Lorem Ipsum is simply and typesetting industry.</p>\n    <span class="timedate"> 12:20am</span>\n   </div>\n  </li>\n\n  <li>\n   <span class="userimg"><img src="assets/image/chat_img1.png"></span>\n   <div class="chattxt">\n    <p>Lorem Ipsum is simply dummy text of the printing and industry.</p>\n    <span class="timedate"> 12:20am</span>\n   </div>\n  </li>\n  <li>\n   <span class="userimg"><img src="assets/image/chat_img1.png"></span>\n   <div class="chattxt">\n    <p>Lorem Ipsum is simply dummy text of the printing and.</p>\n    <span class="timedate"> 12:20am</span>\n   </div>\n  </li>\n  <li class="rightchat">\n   <div class="chattxt">\n    <p>Lorem Ipsum is simply dummy text of the ...</p>\n    <span class="timedate"> 12:20am</span>\n   </div>\n  </li>\n </ul>\n</div>\n\n\n \n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n  <div class="text">\n    <ion-textarea class="enter" placeholder="Enter your text"></ion-textarea>\n  </div>\n  <ion-buttons end>\n      <button ion-button icon-only class="btnprofile"><ion-icon name="paper-plane"></ion-icon></button>     \n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/chat/chat.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], ChatPage);

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signin_signin__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ForgotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotPage = (function () {
    function ForgotPage(navCtrl, navParams, appsetting, http, alertCtrl, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appsetting = appsetting;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.data = '';
    }
    ForgotPage.prototype.Forgot = function (forgotdata) {
        var _this = this;
        console.log('forgot');
        console.log(forgotdata.value);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var postdata = {
            email: forgotdata.value.email
        };
        console.log(postdata);
        //alert(JSON.stringify(postdata));
        var Serialized = this.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            cssClass: 'loader'
        });
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.myGlobalVar + 'forgetpassword', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response);
                Loading.dismiss();
                if (response.status == true) {
                    _this.ToastMsg('Check you email to reset password');
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signin_signin__["a" /* SigninPage */]);
                }
                else {
                    _this.ToastMsg(response.message);
                }
            });
        });
    };
    ForgotPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    ForgotPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
        console.log('Rahul Maurya');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 4000,
                position: 'top'
            });
            toast.present();
        }
    };
    ForgotPage.prototype.ToastMsg = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'middle'
        });
        toast.present();
    };
    ForgotPage.prototype.AlertMsg = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'Continue',
                    role: 'cancel',
                    handler: function () {
                        console.log('Continue clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    ForgotPage.prototype.signin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signin_signin__["a" /* SigninPage */]);
    };
    return ForgotPage;
}());
ForgotPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-forgot',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/forgot/forgot.html"*/'<!--\n  Generated template for the SigninPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header hidden>\n\n  <ion-navbar>\n    <ion-title>Sign In</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="main">\n    <div class="top-img">\n      <img src="assets/image/ionic2-split-pane-banner.png">\n    </div>\n    <div class="text">\n      <h2>WELCOME TO</h2>\n      <h6>RAFAHO SERVICES</h6>\n    </div>\n  </div>\n\n\n\n  <div class="text-sec">\n    <h2>Forgot Password</h2>\n    <h3>WELCOME TO RAFAHO SERVICES</h3>\n  </div>\n  <div class="content-sec">\n    <div class="sign">\n      <form class="form-sec" #ForgotForm="ngForm" (submit)="Forgot(ForgotForm)">\n        <ion-list>\n          <ion-item>\n            <ion-label stacked>EMAIL</ion-label>\n            <ion-input type="email" [(ngModel)]="data.email" name=\'email\' #email="ngModel"  pattern="^[a-z0-9]+(\.[_a-z0-9]+)+([@{1}])+(\.[a-z0-9-]+)+([.{1}])(\.[a-z]{1,15})$"  required></ion-input>\n          </ion-item>\n          <div class="alert alert-danger" color="danger">\n            <div *ngIf="email.errors && (email.dirty || email.touched)">\n              <div [hidden]="!email.errors.required">\n                Email is required\n              </div>\n              <div [hidden]="!email.errors.pattern">\n                Invalid email\n              </div>\n            </div>\n          </div>\n        </ion-list>\n        <div class="btn-sec">\n          <button ion-button type="submit" [disabled]="!ForgotForm.valid">Submit</button>\n        </div>\n      </form>\n    </div>\n    <div class="registerlast">\n      <h3 class="register">Already have an account?\n        <span (click)="signin()">Sign in</span>\n      </h3>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/forgot/forgot.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], ForgotPage);

//# sourceMappingURL=forgot.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditstaffPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stafflist_stafflist__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the EditstaffPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditstaffPage = (function () {
    function EditstaffPage(navCtrl, appsetting, http, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.appsetting = appsetting;
        this.http = http;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.data = '';
        this.editstaf();
    }
    EditstaffPage.prototype.editstaf = function () {
        if (localStorage.getItem('Extrastaff')) {
            this.array = JSON.parse(localStorage.getItem('Extrastaff'));
            console.log(this.array.phonenumber);
            //            console.log(Extrastaff1);
            if (this.array.phonenumber) {
                console.log(this.array.phonenumber.length);
                //  var i;
                //  for(i=0;i<data1.data.phone.length;i++){
                //   if(i==2 && i==6 && i==11 ){
                //     data1.data.phone=data1.data.phone+'-';}
                //   }
                var str = this.array.phonenumber;
                var res = str.substring(0, 3);
                var res1 = str.substring(3, 6);
                var res2 = str.substring(6, 10);
                // var res2 = str.substring(12,9);
                this.array.phonenumber = res + '-' + res1 + '-' + res2;
                this.data = this.array;
                console.log(this.data);
                this.staffid = this.data._id;
                console.log(this.staffid);
                //        this.proffile =this;
                //        this.srcImage = this.proffile.user_image
            }
        }
    };
    EditstaffPage.prototype.editstaffprofile = function (edit) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
        console.log(userid);
        console.log(this.staffid);
        if (edit.value.phonenumber) {
            edit.value.phonenumber = edit.value.phonenumber.replace(/-/g, "");
            var postdata = {
                firstname: edit.value.firstname,
                lastname: edit.value.lastname,
                phonenumber: edit.value.phonenumber,
                profession: edit.value.profession,
                status: edit.value.status,
                //  alternatephone:edit.value.alternatephone,
                staff_id: this.staffid,
                id: userid
            };
            console.log(postdata);
            var serialized = this.serializeObj(postdata);
            this.http.post(this.appsetting.myGlobalVar + 'edit_staff_info', serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                if (data.status == true) {
                    // this.loading.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: "Staff is updated",
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__stafflist_stafflist__["a" /* StafflistPage */]);
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: "Staff is updated",
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__stafflist_stafflist__["a" /* StafflistPage */]);
                }
            });
        }
    };
    EditstaffPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditstaffPage');
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    EditstaffPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    EditstaffPage.prototype.phonevalidation = function (phn) {
        if (phn.length == 3) {
            this.data.phonenumber = this.data.phonenumber + '-';
        }
        else if (phn.length == 7) {
            this.data.phonenumber = this.data.phonenumber + '-';
        }
    };
    EditstaffPage.prototype.backtostafflist = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__stafflist_stafflist__["a" /* StafflistPage */]);
    };
    return EditstaffPage;
}());
EditstaffPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-editstaff',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/editstaff/editstaff.html"*/'<!--\n  Generated template for the EditstaffPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>EDIT STAFF</ion-title>\n     <!--<button style="height:28px;" start ion-button clear (click)="backtostafflist()"><ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon></button>-->\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form class="form-sec" #editInfo="ngForm" novalidate (submit)="editstaffprofile(editInfo)">\n          <ion-list>\n <ion-item>\n        <ion-label stacked>FIRST NAME</ion-label>\n        <ion-input type="text" [(ngModel)]="data.firstname" name=\'firstname\' #firstname="ngModel" required></ion-input>\n        <div class="alert alert-danger" color="danger">\n                  <div *ngIf="firstname.errors && (firstname.dirty || firstname.touched)">\n                    <div [hidden]="!firstname.errors.required">\n                      First name is required\n                    </div>\n                  </div>\n                </div>\n      </ion-item>\n\n     <ion-item>\n        <ion-label stacked>LAST NAME</ion-label>\n        <ion-input type="text" [(ngModel)]="data.lastname" name=\'lastname\' #lastname="ngModel" required></ion-input>\n        <div class="alert alert-danger" color="danger">\n                  <div *ngIf="lastname.errors && (lastname.dirty || lastname.touched)">\n                    <div [hidden]="!lastname.errors.required">\n                       Last name is required\n                    </div>\n                  </div>\n                </div>\n      </ion-item>\n\n     <ion-item>\n        <ion-label stacked>PROFESSION</ion-label>\n        <ion-input type="text" [(ngModel)]="data.profession" name=\'profession\' #profession="ngModel" required></ion-input>\n        <div class="alert alert-danger" color="danger">\n                  <div *ngIf="profession.errors && (profession.dirty || profession.touched)">\n                    <div [hidden]="!profession.errors.required">\n                      Profedssion is required\n                    </div>\n                  </div>\n                </div>\n      </ion-item>\n\n    <ion-item>\n        <ion-label stacked>PHONE NUMBER (xxx-xxx-xxxx)</ion-label>\n        <ion-input type="tel"  [(ngModel)]="data.phonenumber" name=\'phonenumber\' #phonenumber="ngModel" pattern="^[0-9]+(-[0-9]+)+$" maxlength="12" required  (input)="phonevalidation(data.phonenumber)"></ion-input>\n      <div class="alert alert-danger" color="danger">\n          <div *ngIf="phonenumber.errors && (phonenumber.dirty || phonenumber.touched)">\n                    <div [hidden]="!phonenumber.errors.required">\n                      Phone number required\n                    </div>\n                    <div [hidden]="!phonenumber.errors.pattern">\n                      Only number allowed with pattern (xxx-xxx-xxx-xxx-xxx)\n                    </div>\n                  </div>\n                </div>\n        \n          </ion-item>\n         <ion-item>\n                <ion-label stacked>STATUS</ion-label>\n               \n                  <ion-select [(ngModel)]="data.status" name="status" #status="ngModel" >\n                    <ion-option value="1">Active</ion-option>\n                    <ion-option value="0">Inactive</ion-option>\n                  </ion-select>\n                </ion-item>\n    \n        </ion-list>\n         <div class="frgtpwd">\n   <button ion-button type="submit" [disabled]="!editInfo.valid">Save</button>\n  </div>\n           \n    </form>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/editstaff/editstaff.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
], EditstaffPage);

//# sourceMappingURL=editstaff.js.map

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Appsetting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the Appsetting provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Appsetting = (function () {
    function Appsetting(http, toastCtrl) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.myGlobalVar = 'http://rafao.us-west-2.elasticbeanstalk.com/api/'; //'http://ec2-13-59-151-198.us-east-2.compute.amazonaws.com/api/';//'http://fashapp.io/api/';
        console.log('Hello Appsetting Provider');
        // if(localStorage.getItem('UserInfo')){
        //   console.log(localStorage.getItem('UserInfo'));
        //   this.navCtrl.push(TabsPage);
        // }else{
        //   this.navCtrl.push(SigninPage);
        // }
    }
    Appsetting.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
        console.log('rahul');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    return Appsetting;
}());
Appsetting = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */]])
], Appsetting);

//# sourceMappingURL=appsetting.js.map

/***/ }),

/***/ 145:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 145;

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		439,
		29
	],
	"../pages/accountnumber/accountnumber.module": [
		440,
		28
	],
	"../pages/accounts/accounts.module": [
		441,
		27
	],
	"../pages/addproduct/addproduct.module": [
		442,
		26
	],
	"../pages/addreference/addreference.module": [
		443,
		25
	],
	"../pages/addspecialities/addspecialities.module": [
		444,
		24
	],
	"../pages/calender/calender.module": [
		445,
		23
	],
	"../pages/changepassword/changepassword.module": [
		446,
		22
	],
	"../pages/chat/chat.module": [
		447,
		21
	],
	"../pages/editprofile/editprofile.module": [
		448,
		20
	],
	"../pages/editstaff/editstaff.module": [
		449,
		19
	],
	"../pages/extrastaff/extrastaff.module": [
		450,
		18
	],
	"../pages/forgot/forgot.module": [
		451,
		17
	],
	"../pages/frequentquestions/frequentquestions.module": [
		452,
		16
	],
	"../pages/geolocation/geolocation.module": [
		453,
		15
	],
	"../pages/help/help.module": [
		454,
		14
	],
	"../pages/mapmodal/mapmodal.module": [
		455,
		13
	],
	"../pages/mapmodell/mapmodell.module": [
		456,
		1
	],
	"../pages/orderlist/orderlist.module": [
		457,
		12
	],
	"../pages/orderview/orderview.module": [
		458,
		11
	],
	"../pages/payment/payment.module": [
		459,
		10
	],
	"../pages/processingform/processingform.module": [
		460,
		9
	],
	"../pages/profile/profile.module": [
		461,
		8
	],
	"../pages/rafaho/rafaho.module": [
		462,
		0
	],
	"../pages/rafahofeedback/rafahofeedback.module": [
		463,
		7
	],
	"../pages/register/register.module": [
		464,
		6
	],
	"../pages/signin/signin.module": [
		465,
		5
	],
	"../pages/stafflist/stafflist.module": [
		466,
		4
	],
	"../pages/subcriptionbill/subcriptionbill.module": [
		467,
		3
	],
	"../pages/term/term.module": [
		468,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 187;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__processingform_processingform__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forgot_forgot__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tabs_tabs__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SigninPage = (function () {
    function SigninPage(navCtrl, navParams, appsetting, http, alertCtrl, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appsetting = appsetting;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.data = '';
        //    alert('updated yayyiiii');
    }
    SigninPage.prototype.Signin = function (logindata) {
        var _this = this;
        console.log('login');
        console.log(logindata.value);
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* RequestOptions */]({ headers: headers });
        if (logindata.value.password.indexOf(' ') >= 0) {
            var toast = this.toastCtrl.create({
                message: 'Space not allowed in password',
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        }
        else {
            var postdata = {
                email: logindata.value.email,
                password: logindata.value.password,
                role: 'chef'
            };
            console.log(postdata);
            //alert(JSON.stringify(postdata));
            var Serialized = this.serializeObj(postdata);
            var Loading = this.loadingCtrl.create({
                spinner: 'bubbles',
                cssClass: 'loader'
            });
            Loading.present().then(function () {
                _this.http.post(_this.appsetting.myGlobalVar + 'loginuser', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                    //    if(response.status == true && response.userinfo.role== 'chef'){
                    //    console.log('chef');
                    //    }else{
                    //       console.log('pta ni'); 
                    //    }
                    Loading.dismiss();
                    if (response.status == true) {
                        console.log(response.userinfo._id);
                        localStorage.setItem('UserInfo', JSON.stringify(response.userinfo));
                        _this.ToastMsg('Login successfully');
                        //     if((localStorage.getItem('UserInfo'))&& !(localStorage.getItem('Completed')) ){
                        //              this.navCtrl.push(ProcessingformPage);
                        //     }
                        //     else
                        //     {this.navCtrl.push(TabsPage);}
                        if (response.userinfo.prossing_form == 1) {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__tabs_tabs__["a" /* TabsPage */]);
                        }
                        else {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__processingform_processingform__["a" /* ProcessingformPage */]);
                        }
                    }
                    else {
                        _this.ToastMsg(response.message);
                    }
                });
            });
        }
    };
    SigninPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    SigninPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
        console.log('Rahul Maurya');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    SigninPage.prototype.ToastMsg = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'middle'
        });
        toast.present();
    };
    SigninPage.prototype.AlertMsg = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'Continue',
                    role: 'cancel',
                    handler: function () {
                        console.log('Continue clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    SigninPage.prototype.AlertMsg3 = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: 'Invalid chef',
            buttons: [
                {
                    text: 'ok',
                    role: 'submit',
                    handler: function () {
                        console.log('ok clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    SigninPage.prototype.forgot = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__forgot_forgot__["a" /* ForgotPage */]);
    };
    SigninPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    return SigninPage;
}());
SigninPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-signin',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/signin/signin.html"*/'<!--\n  Generated template for the SigninPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header hidden>\n\n  <ion-navbar>\n    <ion-title>Sign In</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="main">\n    <div class="top-img">\n      <img src="assets/image/ionic2-split-pane-banner.png" style="width: 100%;">\n    </div>\n    <div class="text">\n      <h2>WELCOME TO</h2>\n      <h6>RAFAHO SERVICES</h6>\n    </div>\n   \n  </div>\n\n\n\n  <div class="text-sec">\n    <h2>Sign In</h2>\n    <h3>WELCOME TO RAFAHO SERVICES</h3>\n  </div>\n  <div class="content-sec">\n    <div class="sign">\n      <form class="form-sec" #SigninForm="ngForm" (submit)="Signin(SigninForm)">\n        <ion-list>\n          <ion-item>\n            <ion-label stacked>EMAIL</ion-label>\n            <ion-input type="email" autocapitalize="none" [(ngModel)]="data.email" name=\'email\' #email="ngModel" pattern="^[a-z0-9]+(\.[_a-z0-9]+)+([@{1}])+(\.[a-z0-9-]+)+([.{1}])(\.[a-z]{1,15})$"  required></ion-input>\n          </ion-item>\n           <div class="alert alert-danger" color="danger">\n                  <div *ngIf="email.errors && (email.dirty || email.touched)">\n                    <div [hidden]="!email.errors.required">\n                      Email is required\n                    </div>\n                    <div [hidden]="!email.errors.pattern">\n                      Invalid email\n                    </div>\n                  </div>\n                </div>\n          <ion-item>\n            <ion-label stacked>PASSWORD</ion-label>\n            <ion-input type="password" [(ngModel)]="data.password" #password="ngModel" name="password"  minlength="6" required></ion-input>\n          </ion-item>\n         			 <div *ngIf="password.errors && (password.dirty || password.touched)">\n              <div [hidden]="!password.errors.required">\n                Password is required\n              </div>\n							<div [hidden]="!password.errors.minlength">\n								Password must be at least 6 digits\n							</div>\n                                         \n            </div>\n        </ion-list>\n        <div class="btn-sec">\n          <button ion-button full type="submit" [disabled]="!SigninForm.valid">Sign In</button>\n        </div>\n      </form>\n    </div>\n    <div class="forgtpwd" (click)="forgot()">\n      <h1>Forgot password?</h1>\n    </div>\n\n\n    <div class="registerlast">\n      <h3 class="register">Don’t have an account?\n        <span (click)="register()">Register</span>\n      </h3>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/signin/signin.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], SigninPage);

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rafahofeedback_rafahofeedback__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__addproduct_addproduct__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__editprofile_editprofile__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__accountnumber_accountnumber__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__addspecialities_addspecialities__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__term_term__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__frequentquestions_frequentquestions__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__help_help__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__geolocation_geolocation__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__payment_payment__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__changepassword_changepassword__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__signin_signin__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__stafflist_stafflist__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, http, appsetting, loadingCtrl, toastCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.appsetting = appsetting;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.app = app;
        this.Userprofile();
    }
    ProfilePage.prototype.Userprofile = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
        console.log(userid);
        var postdata = {
            id: userid
        };
        var serialized = this.serializeObj(postdata);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            cssClass: 'loader'
        });
        console.log(postdata);
        Loading.present().then(function () {
            _this.http.post(_this.appsetting.myGlobalVar + 'userinfo', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data) {
                Loading.dismiss();
                console.log(data);
                _this.profile = data.data;
                _this.srcImage = _this.profile.user_image;
                console.log(_this.profile);
            });
        });
    };
    ProfilePage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    ProfilePage.prototype.product = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__addproduct_addproduct__["a" /* AddproductPage */]);
    };
    ProfilePage.prototype.feedback = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__rafahofeedback_rafahofeedback__["a" /* RafahofeedbackPage */]);
    };
    ProfilePage.prototype.editprofile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__editprofile_editprofile__["a" /* EditprofilePage */]);
    };
    ProfilePage.prototype.editstaff = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__stafflist_stafflist__["a" /* StafflistPage */]);
    };
    ProfilePage.prototype.accountnumber = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__accountnumber_accountnumber__["a" /* AccountnumberPage */]);
    };
    ProfilePage.prototype.addspecialities = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__addspecialities_addspecialities__["a" /* AddspecialitiesPage */]);
    };
    ProfilePage.prototype.termcondition = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__term_term__["a" /* TermPage */]);
    };
    ProfilePage.prototype.frequentquestions = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__frequentquestions_frequentquestions__["a" /* FrequentquestionsPage */]);
    };
    ProfilePage.prototype.help = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__help_help__["a" /* HelpPage */]);
    };
    ProfilePage.prototype.geolocation = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__geolocation_geolocation__["a" /* GeolocationPage */]);
    };
    ProfilePage.prototype.Payment = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__payment_payment__["a" /* PaymentPage */]);
    };
    ProfilePage.prototype.changepassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__changepassword_changepassword__["a" /* ChangepasswordPage */]);
    };
    ProfilePage.prototype.logout = function () {
        if (localStorage.getItem('UserInfo')) {
            // console.log(localStorage.getItem('UserInfo'));
            localStorage.removeItem('UserInfo');
            // alert("local storage cleared");
            //  this.navCtrl.push(SigninPage);
            this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_15__signin_signin__["a" /* SigninPage */]);
            // this.rootPage = TabsPage;
        }
        // this.navCtrl.push(RegisterPage);
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-profile',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="theme-header">\n    <ion-title>\n     Profile\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n <div class="main_box">\n <div class="left_box">\n \n <img *ngIf="srcImage" class="pick0" [src]="srcImage">\n <img *ngIf="!srcImage" class="pick0" src="assets/image/profile_img.png">\n <div class="content01">\n<h5>{{profile?.firstname}}</h5>\n<p>{{profile?.email}}</p>\n\n<ul>\n  <li>  <ion-icon name="star" color="btncolor"></ion-icon></li>\n  <li>  <ion-icon name="star" color="btncolor"></ion-icon></li>\n  <li>  <ion-icon name="star" color="btncolor"></ion-icon></li>\n  <li>  <ion-icon name="star" color="darkgry"></ion-icon></li>\n  <li>  <ion-icon name="star" color="darkgry"></ion-icon></li>\n  <span class="reviews">20 Reviews</span>\n</ul>\n\n\n </div>\n   </div>\n</div>\n\n  <div class="content-sec">\n       <ion-list>\n          <ion-item (click)="product()">\n           Products\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n        <ion-item (click)="editprofile()">\n            Edit profile\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n             <ion-item (click)="editstaff()">\n            Edit Extra Staff\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n        <ion-item (click)="changepassword()">\n          Change password\n        <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n      </ion-item>\n         <ion-item (click)="accountnumber()">\n            Account number\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n         <ion-item (click)="addspecialities()">\n           Add specialities\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n         <ion-item (click)="termcondition()">\n           Terms & conditions\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n         <ion-item (click)="frequentquestions()">\n            Frequent questions\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n         <ion-item (click)="help()">\n            Help\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n          <!--<ion-item (click)="feedback()">\n            Feedback RAFAHO\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>-->\n\n        <ion-item (click)="geolocation()">\n            Geolocation\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n       <ion-item (click)="logout()">\n            Logout\n          <ion-icon name="arrow-forward-outline" item-end></ion-icon>\n        </ion-item>\n       </ion-list>\n        \n  </div>\n</ion-content>'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/profile/profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_2__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-about',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/about/about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>about</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/about/about.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(382);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_editstaff_editstaff__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_register_register__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_mapmodal_mapmodal__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_signin_signin__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_processingform_processingform__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_addreference_addreference__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_extrastaff_extrastaff__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_orderlist_orderlist__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_accounts_accounts__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_chat_chat__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_profile_profile__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_calender_calender__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_orderview_orderview__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_rafahofeedback_rafahofeedback__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_addproduct_addproduct__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_subcriptionbill_subcriptionbill__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_payment_payment__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_accountnumber_accountnumber__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_editprofile_editprofile__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_addspecialities_addspecialities__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_term_term__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_frequentquestions_frequentquestions__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_help_help__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_geolocation_geolocation__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_forgot_forgot__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_status_bar__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_ionic_tags_input__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_splash_screen__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_native_geocoder__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_geolocation__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_appsetting__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_device__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_stafflist_stafflist__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_changepassword_changepassword__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44_angular2_moment__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_44_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ionic_native_camera__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_signin_signin__["a" /* SigninPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_processingform_processingform__["a" /* ProcessingformPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_addreference_addreference__["a" /* AddreferencePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_extrastaff_extrastaff__["a" /* ExtrastaffPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_orderlist_orderlist__["a" /* OrderlistPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_accounts_accounts__["a" /* AccountsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_calender_calender__["a" /* CalenderPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_orderview_orderview__["a" /* OrderviewPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_rafahofeedback_rafahofeedback__["a" /* RafahofeedbackPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_addproduct_addproduct__["a" /* AddproductPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_subcriptionbill_subcriptionbill__["a" /* SubcriptionbillPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_payment_payment__["a" /* PaymentPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_accountnumber_accountnumber__["a" /* AccountnumberPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_editprofile_editprofile__["a" /* EditprofilePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_editstaff_editstaff__["a" /* EditstaffPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_addspecialities_addspecialities__["a" /* AddspecialitiesPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_term_term__["a" /* TermPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_frequentquestions_frequentquestions__["a" /* FrequentquestionsPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_help_help__["a" /* HelpPage */],
            __WEBPACK_IMPORTED_MODULE_42__pages_stafflist_stafflist__["a" /* StafflistPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_geolocation_geolocation__["a" /* GeolocationPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_forgot_forgot__["a" /* ForgotPage */],
            __WEBPACK_IMPORTED_MODULE_43__pages_changepassword_changepassword__["a" /* ChangepasswordPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_mapmodal_mapmodal__["a" /* MapmodalPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_40__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_44_angular2_moment__["MomentModule"],
            __WEBPACK_IMPORTED_MODULE_35_ionic_tags_input__["a" /* IonTagsInputModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/accountnumber/accountnumber.module#AccountnumberPageModule', name: 'AccountnumberPage', segment: 'accountnumber', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/accounts/accounts.module#AccountsPageModule', name: 'AccountsPage', segment: 'accounts', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/addproduct/addproduct.module#AddproductPageModule', name: 'AddproductPage', segment: 'addproduct', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/addreference/addreference.module#AddreferencePageModule', name: 'AddreferencePage', segment: 'addreference', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/addspecialities/addspecialities.module#AddspecialitiesPageModule', name: 'AddspecialitiesPage', segment: 'addspecialities', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/calender/calender.module#CalenderPageModule', name: 'CalenderPage', segment: 'calender', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/changepassword/changepassword.module#ChangepasswordPageModule', name: 'ChangepasswordPage', segment: 'changepassword', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/editprofile/editprofile.module#EditprofilePageModule', name: 'EditprofilePage', segment: 'editprofile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/editstaff/editstaff.module#EditstaffPageModule', name: 'EditstaffPage', segment: 'editstaff', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/extrastaff/extrastaff.module#ExtrastaffPageModule', name: 'ExtrastaffPage', segment: 'extrastaff', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/forgot/forgot.module#SigninPageModule', name: 'ForgotPage', segment: 'forgot', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/frequentquestions/frequentquestions.module#FrequentquestionsPageModule', name: 'FrequentquestionsPage', segment: 'frequentquestions', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/geolocation/geolocation.module#GeolocationPageModule', name: 'GeolocationPage', segment: 'geolocation', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/mapmodal/mapmodal.module#MapmodalPageModule', name: 'MapmodalPage', segment: 'mapmodal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/mapmodell/mapmodell.module#MapmodellPageModule', name: 'MapmodellPage', segment: 'mapmodell', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/orderlist/orderlist.module#OrderlistPageModule', name: 'OrderlistPage', segment: 'orderlist', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/orderview/orderview.module#OrderviewPageModule', name: 'OrderviewPage', segment: 'orderview', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/payment/payment.module#PaymentPageModule', name: 'PaymentPage', segment: 'payment', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/processingform/processingform.module#ProcessingformPageModule', name: 'ProcessingformPage', segment: 'processingform', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/rafaho/rafaho.module#RafahoPageModule', name: 'RafahoPage', segment: 'rafaho', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/rafahofeedback/rafahofeedback.module#RafahofeedbackPageModule', name: 'RafahofeedbackPage', segment: 'rafahofeedback', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signin/signin.module#SigninPageModule', name: 'SigninPage', segment: 'signin', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/stafflist/stafflist.module#StafflistPageModule', name: 'StafflistPage', segment: 'stafflist', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/subcriptionbill/subcriptionbill.module#SubcriptionbillPageModule', name: 'SubcriptionbillPage', segment: 'subcriptionbill', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/term/term.module#TermPageModule', name: 'TermPage', segment: 'term', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_signin_signin__["a" /* SigninPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_processingform_processingform__["a" /* ProcessingformPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_addreference_addreference__["a" /* AddreferencePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_extrastaff_extrastaff__["a" /* ExtrastaffPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_editstaff_editstaff__["a" /* EditstaffPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_orderlist_orderlist__["a" /* OrderlistPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_accounts_accounts__["a" /* AccountsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_42__pages_stafflist_stafflist__["a" /* StafflistPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_calender_calender__["a" /* CalenderPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_orderview_orderview__["a" /* OrderviewPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_rafahofeedback_rafahofeedback__["a" /* RafahofeedbackPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_addproduct_addproduct__["a" /* AddproductPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_subcriptionbill_subcriptionbill__["a" /* SubcriptionbillPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_payment_payment__["a" /* PaymentPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_accountnumber_accountnumber__["a" /* AccountnumberPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_editprofile_editprofile__["a" /* EditprofilePage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_addspecialities_addspecialities__["a" /* AddspecialitiesPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_term_term__["a" /* TermPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_frequentquestions_frequentquestions__["a" /* FrequentquestionsPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_help_help__["a" /* HelpPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_geolocation_geolocation__["a" /* GeolocationPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_forgot_forgot__["a" /* ForgotPage */],
            __WEBPACK_IMPORTED_MODULE_43__pages_changepassword_changepassword__["a" /* ChangepasswordPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_mapmodal_mapmodal__["a" /* MapmodalPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_34__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_36__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_38__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_37__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
            __WEBPACK_IMPORTED_MODULE_39__providers_appsetting__["a" /* Appsetting */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_45__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_41__ionic_native_device__["a" /* Device */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 191,
	"./af.js": 191,
	"./ar": 192,
	"./ar-dz": 193,
	"./ar-dz.js": 193,
	"./ar-kw": 194,
	"./ar-kw.js": 194,
	"./ar-ly": 195,
	"./ar-ly.js": 195,
	"./ar-ma": 196,
	"./ar-ma.js": 196,
	"./ar-sa": 197,
	"./ar-sa.js": 197,
	"./ar-tn": 198,
	"./ar-tn.js": 198,
	"./ar.js": 192,
	"./az": 199,
	"./az.js": 199,
	"./be": 200,
	"./be.js": 200,
	"./bg": 201,
	"./bg.js": 201,
	"./bm": 202,
	"./bm.js": 202,
	"./bn": 203,
	"./bn.js": 203,
	"./bo": 204,
	"./bo.js": 204,
	"./br": 205,
	"./br.js": 205,
	"./bs": 206,
	"./bs.js": 206,
	"./ca": 207,
	"./ca.js": 207,
	"./cs": 208,
	"./cs.js": 208,
	"./cv": 209,
	"./cv.js": 209,
	"./cy": 210,
	"./cy.js": 210,
	"./da": 211,
	"./da.js": 211,
	"./de": 212,
	"./de-at": 213,
	"./de-at.js": 213,
	"./de-ch": 214,
	"./de-ch.js": 214,
	"./de.js": 212,
	"./dv": 215,
	"./dv.js": 215,
	"./el": 216,
	"./el.js": 216,
	"./en-au": 217,
	"./en-au.js": 217,
	"./en-ca": 218,
	"./en-ca.js": 218,
	"./en-gb": 219,
	"./en-gb.js": 219,
	"./en-ie": 220,
	"./en-ie.js": 220,
	"./en-nz": 221,
	"./en-nz.js": 221,
	"./eo": 222,
	"./eo.js": 222,
	"./es": 223,
	"./es-do": 224,
	"./es-do.js": 224,
	"./es-us": 225,
	"./es-us.js": 225,
	"./es.js": 223,
	"./et": 226,
	"./et.js": 226,
	"./eu": 227,
	"./eu.js": 227,
	"./fa": 228,
	"./fa.js": 228,
	"./fi": 229,
	"./fi.js": 229,
	"./fo": 230,
	"./fo.js": 230,
	"./fr": 231,
	"./fr-ca": 232,
	"./fr-ca.js": 232,
	"./fr-ch": 233,
	"./fr-ch.js": 233,
	"./fr.js": 231,
	"./fy": 234,
	"./fy.js": 234,
	"./gd": 235,
	"./gd.js": 235,
	"./gl": 236,
	"./gl.js": 236,
	"./gom-latn": 237,
	"./gom-latn.js": 237,
	"./gu": 238,
	"./gu.js": 238,
	"./he": 239,
	"./he.js": 239,
	"./hi": 240,
	"./hi.js": 240,
	"./hr": 241,
	"./hr.js": 241,
	"./hu": 242,
	"./hu.js": 242,
	"./hy-am": 243,
	"./hy-am.js": 243,
	"./id": 244,
	"./id.js": 244,
	"./is": 245,
	"./is.js": 245,
	"./it": 246,
	"./it.js": 246,
	"./ja": 247,
	"./ja.js": 247,
	"./jv": 248,
	"./jv.js": 248,
	"./ka": 249,
	"./ka.js": 249,
	"./kk": 250,
	"./kk.js": 250,
	"./km": 251,
	"./km.js": 251,
	"./kn": 252,
	"./kn.js": 252,
	"./ko": 253,
	"./ko.js": 253,
	"./ky": 254,
	"./ky.js": 254,
	"./lb": 255,
	"./lb.js": 255,
	"./lo": 256,
	"./lo.js": 256,
	"./lt": 257,
	"./lt.js": 257,
	"./lv": 258,
	"./lv.js": 258,
	"./me": 259,
	"./me.js": 259,
	"./mi": 260,
	"./mi.js": 260,
	"./mk": 261,
	"./mk.js": 261,
	"./ml": 262,
	"./ml.js": 262,
	"./mr": 263,
	"./mr.js": 263,
	"./ms": 264,
	"./ms-my": 265,
	"./ms-my.js": 265,
	"./ms.js": 264,
	"./my": 266,
	"./my.js": 266,
	"./nb": 267,
	"./nb.js": 267,
	"./ne": 268,
	"./ne.js": 268,
	"./nl": 269,
	"./nl-be": 270,
	"./nl-be.js": 270,
	"./nl.js": 269,
	"./nn": 271,
	"./nn.js": 271,
	"./pa-in": 272,
	"./pa-in.js": 272,
	"./pl": 273,
	"./pl.js": 273,
	"./pt": 274,
	"./pt-br": 275,
	"./pt-br.js": 275,
	"./pt.js": 274,
	"./ro": 276,
	"./ro.js": 276,
	"./ru": 277,
	"./ru.js": 277,
	"./sd": 278,
	"./sd.js": 278,
	"./se": 279,
	"./se.js": 279,
	"./si": 280,
	"./si.js": 280,
	"./sk": 281,
	"./sk.js": 281,
	"./sl": 282,
	"./sl.js": 282,
	"./sq": 283,
	"./sq.js": 283,
	"./sr": 284,
	"./sr-cyrl": 285,
	"./sr-cyrl.js": 285,
	"./sr.js": 284,
	"./ss": 286,
	"./ss.js": 286,
	"./sv": 287,
	"./sv.js": 287,
	"./sw": 288,
	"./sw.js": 288,
	"./ta": 289,
	"./ta.js": 289,
	"./te": 290,
	"./te.js": 290,
	"./tet": 291,
	"./tet.js": 291,
	"./th": 292,
	"./th.js": 292,
	"./tl-ph": 293,
	"./tl-ph.js": 293,
	"./tlh": 294,
	"./tlh.js": 294,
	"./tr": 295,
	"./tr.js": 295,
	"./tzl": 296,
	"./tzl.js": 296,
	"./tzm": 297,
	"./tzm-latn": 298,
	"./tzm-latn.js": 298,
	"./tzm.js": 297,
	"./uk": 299,
	"./uk.js": 299,
	"./ur": 300,
	"./ur.js": 300,
	"./uz": 301,
	"./uz-latn": 302,
	"./uz-latn.js": 302,
	"./uz.js": 301,
	"./vi": 303,
	"./vi.js": 303,
	"./x-pseudo": 304,
	"./x-pseudo.js": 304,
	"./yo": 305,
	"./yo.js": 305,
	"./zh-cn": 306,
	"./zh-cn.js": 306,
	"./zh-hk": 307,
	"./zh-hk.js": 307,
	"./zh-tw": 308,
	"./zh-tw.js": 308
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 415;

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(349);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { StatusBar } from '@ionic-native/status-bar';






var MyApp = (function () {
    function MyApp(platform, splashScreen, statusBar, http, appsetting) {
        var _this = this;
        this.statusBar = statusBar;
        this.http = http;
        this.appsetting = appsetting;
        this.rootPage = '';
        //    console.log(localStorage.getItem('Completed'));
        if (localStorage.getItem('UserInfo')) {
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
            var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* RequestOptions */]({ headers: headers });
            var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
            console.log(userid);
            var postdata = {
                id: userid
            };
            var serialized = this.serializeObj(postdata);
            console.log(postdata);
            this.http.post(this.appsetting.myGlobalVar + 'userinfo', serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                // this.Loading.dismiss();
                console.log(response);
                //			
                if (response.data.prossing_form == 1) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__["a" /* SigninPage */];
                }
            });
        }
        if (localStorage.getItem('UserInfo') && localStorage.getItem('Completed')) {
            // if(localStorage.getItem('UserInfo')){
            console.log(localStorage.getItem('Completed'));
            console.log(localStorage.getItem('UserInfo'));
            this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        }
        else if (localStorage.getItem('Completed')) {
            console.log(localStorage.getItem('Completed'));
            this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__["a" /* SigninPage */];
        }
        else {
            console.log(localStorage.getItem('Completed'));
            this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__["a" /* SigninPage */];
        }
        //  }
        platform.ready().then(function () {
            statusBar.overlaysWebView(true);
            statusBar.hide();
            // ionicConfigProvider.views.swipeBackEnabled(false)
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            // statusBar.styleDefault();
            splashScreen.hide();
        });
        //     
        //            if (platform.is('android')) {
        //                Keyboard.disableScroll(true);
        //            }
        //    alert('jjj');
    }
    MyApp.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/app/app.html"*/'<ion-nav [root]="rootPage" swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-contact',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/contact/contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calender_calender__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__accounts_accounts__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { OrderViewPage } from '../orderview/orderview';



var TabsPage = (function () {
    function TabsPage(navCtrl, navParams, events) {
        // this.navCtrl.push(OrderViewPage);
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__calender_calender__["a" /* CalenderPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__chat_chat__["a" /* ChatPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__accounts_accounts__["a" /* AccountsPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/tabs/tabs.html"*/'<ion-tabs color="navyb" >\n  <ion-tab [root]="tab1Root" tabTitle="RAFAHO"  tabIcon="cls2"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="CALENDAR" tabIcon="cls3"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="CHAT" tabIcon="cls4"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="ACCOUNTS" tabIcon="cls5"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="PROFILE" tabIcon="cls6"></ion-tab>\n \n</ion-tabs>\n\n\n\n\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["d" /* Events */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accountnumber_accountnumber__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymentPage = (function () {
    function PaymentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PaymentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentPage');
    };
    PaymentPage.prototype.accountnumber = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__accountnumber_accountnumber__["a" /* AccountnumberPage */]);
    };
    return PaymentPage;
}());
PaymentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-payment',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/payment/payment.html"*/'<!--\n  Generated template for the PaymentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="theme-header">\n    <ion-title>Payment</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n <div class="top">\n  <h2>Select Payment Method</h2>\n </div>\n  <ion-list>\n        <ion-item (click)="accountnumber()">\n         <ion-thumbnail item-start>\n         <img src="assets/image/paypal.png">\n       </ion-thumbnail>\n            <h3>Paypal</h3>\n            <p>username@gmail.com</p>\n          <ion-icon name="arrow-forward" item-end></ion-icon>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/payment/payment.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], PaymentPage);

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orderview_orderview__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.pet = "ACTIVEORDER";
    }
    HomePage.prototype.order = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__orderview_orderview__["a" /* OrderviewPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/home/home.html"*/'<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Order List\n<p class="aaa">Online chef List</p></ion-title>\n  </ion-navbar>\n<div class="segment-sec">\n  <ion-toolbar>\n    <ion-segment [(ngModel)]="pet">\n    <ion-segment-button class="segment-button segment-activated" value="ACTIVEORDER">\n      NEW ORDER\n    </ion-segment-button>\n    <ion-segment-button value="PENDING ORDER">\n      PENDING ORDER\n    </ion-segment-button>\n    <ion-segment-button value="ORDER HISTORY">\n     ORDER HISTORY\n    </ion-segment-button>\n  </ion-segment>\n  </ion-toolbar>\n</div>\n\n</ion-header>\n\n\n<ion-content>\n<div class="">\n  \n</div>\n\n<div [ngSwitch]="pet" class="box">\n  <ion-list *ngSwitchCase="\'PENDING ORDER\'">\n    <ion-item >\n\n      <ion-thumbnail item-start>\n         <img src="assets/image/img1.png">\n\n      </ion-thumbnail>\n     <h2>User name <span class="rightp">Home Delivery</span></h2>\n    <p>Idli, sambhar, Kerla</p>\n     <p>19 august 2017 20:12am</p>\n    \n    </ion-item>\n  \n  </ion-list>\n\n\n\n  \n\n  <ion-list *ngSwitchCase="\'ACTIVEORDER\'">\n    <ion-item (click)="order()">\n      <ion-thumbnail item-start>\n        <img src="assets/image/img1.png">\n      </ion-thumbnail>\n      <h2>User name <span class="rightp">Cook at Home</span></h2>\n    <p>Idli, sambhar, Kerla</p>\n     <p>19 august 2017 20:12am</p>\n    \n    </ion-item>\n  \n  </ion-list>\n   <ion-list *ngSwitchCase="\'ACTIVEORDER\'">\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/image/img2.png">\n      </ion-thumbnail>\n      <h2>User name<span class="rightp">Cook at Home</span></h2>\n    <p>Idli, sambhar, Kerla</p>\n     <p>19 august 2017 20:12am</p>\n   \n    </ion-item>\n  \n  </ion-list>\n\n <ion-list *ngSwitchCase="\'ACTIVEORDER\'">\n   <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/image/img3.png">\n      </ion-thumbnail>\n      <h2>User name <span class="rightp">Cook at Home</span></h2>\n    <p>Idli, sambhar, Kerla</p>\n     <p>19 august 2017 20:12am</p>\n    \n    </ion-item>\n  \n  </ion-list>\n\n <ion-list *ngSwitchCase="\'ACTIVEORDER\'">\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/image/img4.png">\n      </ion-thumbnail>\n      <h2>User name <span class="rightp">Cook at Home</span></h2>\n    <p>Idli, sambhar, Kerla</p>\n     <p>19 august 2017 20:12am</p>\n   \n    </ion-item>\n  \n  </ion-list>\n\n\n\n <ion-list *ngSwitchCase="\'ACTIVEORDER\'">\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/image/img5.png">\n      </ion-thumbnail>\n      <h2>User name<span class="rightp">Cook at Home</span></h2>\n    <p>Idli, sambhar, Kerla</p>\n     <p>19 august 2017 20:12am</p>\n    </ion-item>\n  \n  </ion-list>\n\n  <div *ngSwitchCase="\'ORDER HISTORY\'">\n   <ion-list >\n     <h1 class="cancel">TOATAL EARNED <span  style="color:black; font-weight: 700;" class="rightp">$ 2000.00</span></h1>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/image/img1.png">\n      </ion-thumbnail>\n      <h2>Luna <span class="rightp">Home Delivery</span></h2>\n       <p>Idli, sambhar, Kerla</p>\n     <p>19 august 2017 20:12am</p>\n  \n    </ion-item>\n\n  \n    <ion-item>\n       <ion-thumbnail item-start>\n        <img src="assets/image/img2.png">\n      </ion-thumbnail>\n      <h2>User name <span class="rightp">Home Delivery</span></h2>\n    <p>Idli, sambhar, Kerla</p>\n     <p>19 august 2017 20:12am</p>\n    \n    </ion-item>\n   </ion-list>\n   <h1 class="cancel">CANCELLED ORDER</h1>\n   <ion-list>\n    <ion-item>\n       <ion-thumbnail item-start>\n        <img src="assets/image/img5.png">\n      </ion-thumbnail>\n      <h2>User name <span style="color:red;" class="rightp">Home Delivery</span></h2>\n    <p>Idli, sambhar, Kerla</p>\n     <p>19 august 2017 20:12am</p>\n   \n    </ion-item>\n  \n    <ion-item>\n       <ion-thumbnail item-start>\n        <img src="assets/image/img4.png">\n      </ion-thumbnail>\n      <h2>User name <span style="color:red;" class="rightp">Cook at Home</span></h2>\n    <p>Idli, sambhar, Kerla</p>\n     <p>19 august 2017 20:12am</p>\n\n    </ion-item>\n  </ion-list>\n  </div>\n\n\n    <ion-list *ngSwitchCase="\'PENDING ORDER\'">\n    <ion-item >\n\n      <ion-thumbnail item-start>\n         <img src="assets/image/img2.png">\n\n      </ion-thumbnail>\n     <h2>User name  <span class="rightp">Home Delivery</span></h2>\n    <p>Idli, sambhar, Kerla</p>\n     <p>19 august 2017 20:12am</p>\n  \n    </ion-item>\n  \n  </ion-list>\n\n  <ion-list *ngSwitchCase="\'PENDING ORDER\'">\n    <ion-item >\n\n      <ion-thumbnail item-start>\n         <img src="assets/image/img3.png">\n\n      </ion-thumbnail>\n     <h2>User name  <span class="rightp">Home Delivery</span></h2>\n    <p>Idli, sambhar, Kerla</p>\n     <p>19 august 2017 20:12am</p>\n    \n    </ion-item>\n  \n  </ion-list>\n\n  <ion-list *ngSwitchCase="\'PENDING ORDER\'">\n    <ion-item >\n\n      <ion-thumbnail item-start>\n         <img src="assets/image/img4.png">\n\n      </ion-thumbnail>\n     <h2>User name  <span class="rightp">Home Delivery</span></h2>\n    <p>Idli, sambhar, Kerla</p>\n     <p>19 august 2017 20:12am</p>\n    \n    </ion-item>\n  \n  </ion-list>\n\n  <ion-list *ngSwitchCase="\'PENDING ORDER\'">\n    <ion-item >\n\n      <ion-thumbnail item-start>\n         <img src="assets/image/img5.png">\n\n      </ion-thumbnail>\n     <h2>User name <span class="rightp">Home Delivery</span></h2>\n    <p>Idli, sambhar, Kerla</p>\n     <p>19 august 2017 20:12am</p>\n   \n    </ion-item>\n  \n  </ion-list>\n\n\n</div>\n</ion-content>'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountnumberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_payment__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AccountnumberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountnumberPage = (function () {
    function AccountnumberPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    AccountnumberPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountnumberPage');
    };
    AccountnumberPage.prototype.showAlert = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__payment_payment__["a" /* PaymentPage */]);
        var alert = this.alertCtrl.create({
            title: 'Payment',
            subTitle: 'Your payment has been successfully processed.',
            cssClass: 'alertDanger'
        });
        alert.present();
    };
    return AccountnumberPage;
}());
AccountnumberPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-accountnumber',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/accountnumber/accountnumber.html"*/'<!--\n  Generated template for the AccountnumberPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Account Number</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="preview">\n\n   <div class="top">\n  <h2>Account Details</h2>\n </div>\n \n \n  <ion-list>\n   <ion-item>\n\n          <ion-label stacked>ACCOUNT NUMBER</ion-label>\n             <ion-input type="text"></ion-input>\n             <div class="image" item-end>\n              <img src="assets/image/visa.png">\n             </div>\n        </ion-item>\n\n  <ion-item>\n    <ion-label stacked>CARDHOLDER</ion-label>\n    <ion-input type="text"></ion-input>\n  </ion-item>\n\n<ion-item>\n    <ion-label stacked>IFSC CODE</ion-label>\n    <ion-input type="text"></ion-input>\n  </ion-item>\n</ion-list>\n\n <div  style="text-align: center;">\n   <button ion-button full  color="theme-header" style="display: block; margin: 0 auto;" (click)="showAlert()">Done</button>\n   </div>\n</ion-content>'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/accountnumber/accountnumber.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], AccountnumberPage);

//# sourceMappingURL=accountnumber.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapmodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//  import {googlemaps} from 'googlemaps';

/**
 * Generated class for the MapmodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MapmodalPage = (function () {
    function MapmodalPage(navCtrl, navParams, viewCtrl, toastCtrl, loadCtrl, platform, geolocation, nativeGeocoder, places) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.loadCtrl = loadCtrl;
        this.platform = platform;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.places = places;
        this.bb = [];
        this.geocoder = new google.maps.Geocoder();
        /**map initialization */
        this.initMap = function () {
            var nill = _this;
            var newShape;
            var map;
            _this.platform.ready().then(function () {
                // alert("working");
                // alert(lat+','+long);
                var Loading = _this.loadCtrl.create({
                    spinner: 'bubbles',
                    cssClass: 'loader'
                });
                Loading.present().then(function () {
                    _this.geolocation.getCurrentPosition().then(function (resp) {
                        _this.lat = resp.coords.latitude;
                        _this.long = resp.coords.longitude;
                        console.log(resp.coords.latitude);
                        console.log(resp.coords.longitude);
                        Loading.dismiss();
                        // this.initMap( resp.coords.latitude , resp.coords.longitude);
                        //  alert('latitude:'+resp.coords.latitude +''+'longitude:'+ resp.coords.longitude);
                        var latLng = new google.maps.LatLng(_this.lat, _this.long);
                        // alert('lat and long:'+latLng);
                        _this.geocoder.geocode({ 'latLng': latLng }, (function (results, status) {
                            if (status == google.maps.GeocoderStatus.OK) {
                                if (results[1]) {
                                    _this.autocomplete.query = results[1].formatted_address;
                                }
                            }
                        }));
                        var mapOptions = {
                            center: latLng,
                            zoom: 18,
                            mapTypeId: google.maps.MapTypeId.ROADMAP,
                            disableDefaultUI: true,
                            zoomControl: true
                        };
                        _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
                        //      alert('circle');
                        console.log(latLng.lat(), latLng.lng());
                        _this.l = latLng.lat();
                        _this.lo = latLng.lng();
                        var circle = new google.maps.Circle({
                            map: _this.map,
                            center: new google.maps.LatLng(_this.l, _this.lo),
                            radius: 30,
                            strokeColor: "#00ff00",
                            fillColor: "red",
                            editable: true,
                        });
                        //     alert('deg');
                        //  alert("mapOptions");
                        var marker = new google.maps.Marker({
                            position: latLng,
                            draggable: true,
                            map: _this.map,
                        });
                        //  alert("marker");
                        google.maps.event.addListener(marker, 'dragend', (function (marker) {
                            var latLng = marker.latLng;
                            _this.crlat = latLng.lat();
                            _this.crlng = latLng.lng();
                            console.log(_this.crlat);
                            console.log(_this.crlng);
                            //  alert(this.crlat);
                            // alert(this.crlng);
                            var latLong = new google.maps.LatLng(_this.crlat, _this.crlng);
                            var circle = new google.maps.Circle({
                                map: _this.map,
                                center: new google.maps.LatLng(_this.crlat, _this.crlng),
                                radius: 30,
                                strokeColor: "#00ff00",
                                fillColor: "red",
                            });
                            _this.geocoder.geocode({ 'latLng': latLong }, (function (results, status) {
                                console.log(results);
                                if (status == google.maps.GeocoderStatus.OK) {
                                    if (results[1]) {
                                        _this.autocomplete.query = results[1].formatted_address;
                                        console.log(_this.autocomplete.query);
                                    }
                                }
                            }));
                            google.maps.event.addListener(circle, 'centre_changed', (function (circle) {
                                var latLng = circle(_this.l, _this.lo);
                                _this.crlat = latLng.lat();
                                _this.crlng = latLng.lng();
                                //         let latLong = new google.maps.LatLng(this.crlat,this.crlng);  
                                //         console.log('working');
                                document.getElementById("info").innerHTML = circle.getCenter(_this.crlat, _this.crlng);
                            }));
                        }));
                        // alert("working1");
                    }).catch(function (error) {
                        var latLng = new google.maps.LatLng(_this.crlat, _this.crlng);
                        _this.geocoder.geocode({ 'latLng': latLng }, (function (results, status) {
                            if (status == google.maps.GeocoderStatus.OK) {
                                if (results[1]) {
                                    _this.autocomplete.query = results[1].formatted_address;
                                }
                            }
                        }));
                        var mapOptions = {
                            center: latLng,
                            zoom: 18,
                            mapTypeId: google.maps.MapTypeId.ROADMAP,
                            disableDefaultUI: true,
                            zoomControl: true
                        };
                        _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
                        //  alert("mapOptions");
                        var marker = new google.maps.Marker({
                            position: latLng,
                            draggable: true,
                            map: _this.map,
                        });
                        //  alert("marker");
                        google.maps.event.addListener(marker, 'dragend', (function (marker) {
                            var latLng = marker.latLng;
                            _this.crlat = latLng.lat();
                            _this.crlng = latLng.lng();
                            console.log(_this.crlat);
                            console.log(_this.crlng);
                            //  alert(this.crlat);
                            // alert(this.crlng);
                            var latLong = new google.maps.LatLng(_this.crlat, _this.crlng);
                            _this.geocoder.geocode({ 'latLng': latLong }, (function (results, status) {
                                console.log(results);
                                if (status == google.maps.GeocoderStatus.OK) {
                                    if (results[1]) {
                                        _this.autocomplete.query = results[1].formatted_address;
                                        console.log(_this.autocomplete.query);
                                    }
                                }
                            }));
                        }));
                        console.log('Error getting location', error);
                    });
                });
                var watch = _this.geolocation.watchPosition();
                watch.subscribe(function (data) {
                    // console.log('My latitude : ', data.coords.latitude);
                    // console.log('My longitude: ', data.coords.longitude);
                    nill.latt = data.coords.latitude;
                    nill.longg = data.coords.longitude;
                    //  alert(nill.latt+','+nill.longg);
                });
            });
        };
        //  this.initMap();
    }
    MapmodalPage.prototype.ngOnInit = function () {
        // alert("neelanshi");
        this.acService = new google.maps.places.AutocompleteService();
        this.infowindow = new google.maps.InfoWindow;
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
    };
    MapmodalPage.prototype.updateSearch = function () {
        var _this = this;
        delete this.crlat;
        delete this.crlng;
        console.log('modal > updateSearch');
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        //let self = this; 
        var config = {
            //types:  ['geocode'], // other types available in the API: 'establishment', 'regions', and 'cities'
            input: this.autocomplete.query,
            componentRestrictions: {}
        };
        this.acService.getPlacePredictions(config, (function (predictions, status) {
            console.log('modal > getPlacePredictions > status > ', status);
            _this.autocompleteItems = [];
            console.log(predictions);
            predictions.forEach((function (prediction) {
                console.log("abc");
                _this.autocompleteItems.push(prediction);
            }));
        }));
    };
    MapmodalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MapmodalPage');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
        this.initMap();
    };
    MapmodalPage.prototype.chooseItem = function (item) {
        var _this = this;
        console.log(item);
        this.autocomplete.query = item.description;
        this.geocoder.geocode({ 'placeId': item.place_id }, (function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    console.log(results[0]);
                    _this.map.setZoom(18);
                    _this.map.setCenter(results[0].geometry.location);
                    _this.crlat = results[0].geometry.location.lat();
                    _this.crlng = results[0].geometry.location.lng();
                    var marker = new google.maps.Marker({
                        map: _this.map,
                        position: results[0].geometry.location
                    });
                    _this.infowindow.open(_this.map, marker);
                    //           var circle = new google.maps.Circle({
                    //           map : this.map,
                    //           center : results[0].geometry.location,
                    //           radius: 30 ,
                    //           strokeColor: "#00ff00" ,
                    //           fillColor: "red"
                    //       });
                    _this.infowindow.setContent(results[0].formatted_address);
                    _this.nativeGeocoder.forwardGeocode(results[0].formatted_address)
                        .then(function (coordinates) {
                        console.log('The coordinates are latitude=' + coordinates.latitude + ' and longitude=' + coordinates.longitude);
                        _this.lat = coordinates.latitude;
                        _this.long = coordinates.longitude;
                        console.log(_this.lat + ' ' + _this.long);
                    })
                        .catch(function (error) { return console.log(error); });
                    var circle = new google.maps.Circle({
                        map: _this.map,
                        center: results[0].geometry.location,
                        radius: 30,
                        strokeColor: "#00ff00",
                        fillColor: "red"
                    });
                    _this.infowindow.open(_this.map, circle);
                }
            }
        }));
        this.autocompleteItems = [];
    };
    MapmodalPage.prototype.clsmodel = function () {
        this.viewCtrl.dismiss();
    };
    MapmodalPage.prototype.closeModal = function () {
        console.log(this.autocomplete.query);
        this.viewCtrl.dismiss({
            address: this.autocomplete.query,
            lati: this.lat,
            longi: this.long
        });
    };
    return MapmodalPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], MapmodalPage.prototype, "mapElement", void 0);
MapmodalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-mapmodal',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/mapmodal/mapmodal.html"*/'<!--\n  Generated template for the MapmodalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <!--<ion-buttons start (click)="dismiss()">\n      <button ion-button icon-only>\n        \n      </button>\n    </ion-buttons>-->\n\n    <ion-title>Choose Location</ion-title>\n    \n    <ion-buttons end (click)="closeModal()">\n        <button clear ion-button>Save</button>\n    </ion-buttons>\n      <ion-buttons start (click)="clsmodel()">\n        <button clear ion-button>Cancel</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-searchbar \n    [(ngModel)]="autocomplete.query" \n    [showCancelButton]="true" \n    (ionInput)="updateSearch()" \n    (ionCancel)="dismiss()"\n    placeholder="Start typing and select ...">\n    </ion-searchbar>\n    <ion-list>\n      <ion-item *ngFor="let item of autocompleteItems" \n      (click)="chooseItem(item)">\n      {{ item.description }}\n      </ion-item>\n      </ion-list>\n        \n<div #map id="map"></div>\n   \n    <!--<button ion-button (click)="saveaddress">Save Location</button>-->\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/mapmodal/mapmodal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__["a" /* NativeGeocoder */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], MapmodalPage);

//# sourceMappingURL=mapmodal.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessingformPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addreference_addreference__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signin_signin__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { Device } from '@ionic-native/device';


/**
 * Generated class for the ProcessingformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProcessingformPage = (function () {
    function ProcessingformPage(navCtrl, toastCtrl, navParams, appsetting, http, 
        // private device: Device,
        alertCtrl, loadingCtrl) {
        //      alert('neelanshiiii');
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.appsetting = appsetting;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.bit = false;
        this.data = {};
    }
    ProcessingformPage.prototype.getdata = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
        var postdata = {
            id: userid
        };
        console.log(postdata);
        var serialized = this.serializeObj(postdata);
        // this.loading.dismiss();
        this.http.post(this.appsetting.myGlobalVar + 'userinfo', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data1) {
            console.log(data1);
            if (data1.data.alternative_phone && data1.data.responsible_contact_number) {
                console.log(data1.data.alternative_phone.length);
                var str = data1.data.alternative_phone;
                var str1 = data1.data.responsible_contact_number;
                var res = str.substring(0, 3);
                var res1 = str.substring(3, 6);
                var res2 = str.substring(6, 10);
                //  var res3 = str.substring(9,12);
                /************************* */
                var res1 = str.substring(0, 3);
                var res11 = str.substring(3, 6);
                var res21 = str.substring(6, 10);
                data1.data.alternative_phone = res + '-' + res1 + '-' + res2;
                data1.data.responsible_contact_number = res1 + '-' + res11 + '-' + res21;
                if (data1.data) {
                    _this.data.companyname = data1.data.company_name;
                    _this.data.position = data1.data.postion;
                    _this.data.phone = data1.data.alternative_phone;
                    _this.data.address = data1.data.home_address;
                    _this.data.contactname = data1.data.responsible_contact_name;
                    _this.data.contactnumber = data1.data.responsible_contact_number;
                    _this.data.occupationchef = data1.data.occupation_of_chef;
                    _this.data.workaddress = data1.data.chef_address;
                }
            }
        });
    };
    ProcessingformPage.prototype.chefadres = function () {
        this.AlertMsg('Is your home address is same as the work place address?');
        console.log(this.data.address);
    };
    ProcessingformPage.prototype.AlertMsg = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        _this.bit = true;
                        if (_this.data.workaddress != '') {
                            _this.data.workaddress = '';
                        }
                        //            this.AlertMsg(msg) 
                        // this.navCtrl.push(RegisterPage)
                    }
                },
                {
                    text: 'Yes',
                    role: 'submit',
                    handler: function () {
                        console.log('Continue clicked');
                        _this.data.workaddress = _this.data.address;
                        //            this.navCtrl.push(ProcessingformPage);
                    }
                }
            ]
        });
        if (this.bit == true) {
        }
        else {
            alert.present();
        }
    };
    ProcessingformPage.prototype.Processing = function (process) {
        var _this = this;
        console.log(process);
        console.log(process.value);
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["e" /* RequestOptions */]({ headers: headers });
        if (process.value.phone && process.value.contactnumber) {
            process.value.phone = process.value.phone.replace(/-/g, "");
            process.value.contactnumber = process.value.contactnumber.replace(/-/g, "");
            var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
            var postdata = {
                id: userid,
                company_name: process.value.companyname,
                position: process.value.position,
                phone_number: process.value.phone,
                home_address: process.value.address,
                chef_address: process.value.workaddress,
                responsible_contact_name: process.value.contactname,
                responsible_contact_number: process.value.contactnumber,
                occupation_of_chef: process.value.occupationchef,
                experience: process.value.experience
            };
            console.log(postdata);
            var Serialized = this.serializeObj(postdata);
            var Loading = this.loadingCtrl.create({
                spinner: 'bubbles',
                cssClass: 'loader'
            });
            Loading.present().then(function () {
                _this.http.post(_this.appsetting.myGlobalVar + 'general_info_update', Serialized, options).map(function (res) { return res.json(); }).subscribe(function (response) {
                    console.log(response);
                    Loading.dismiss();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__addreference_addreference__["a" /* AddreferencePage */]);
                });
            });
        }
    };
    // addreference() {
    //   console.log('ionViewDidLoad ProcessingformPage');
    //   this.navCtrl.push(AddreferencePage);
    // }
    ProcessingformPage.prototype.tabs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
    };
    ProcessingformPage.prototype.phonevalidation = function (phn) {
        console.log(phn.length);
        if (phn.length == 3) {
            this.data.phone = this.data.phone + '-';
        }
        else if (phn.length == 7) {
            this.data.phone = this.data.phone + '-';
        }
    };
    ProcessingformPage.prototype.contactvalidation = function (contactnumber) {
        console.log(contactnumber.length);
        if (contactnumber.length == 3) {
            this.data.contactnumber = this.data.contactnumber + '-';
        }
        else if (contactnumber.length == 7) {
            this.data.contactnumber = this.data.contactnumber + '-';
        }
    };
    ProcessingformPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    ProcessingformPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProcessingformPage');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
        this.getdata();
    };
    ProcessingformPage.prototype.back = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signin_signin__["a" /* SigninPage */]);
    };
    return ProcessingformPage;
}());
ProcessingformPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-processingform',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/processingform/processingform.html"*/'<!--\n  Generated template for the ProcessingformPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="theme-header">\n        <button style="height:28px;" start ion-button clear (click)="back()"><ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon></button>\n    <ion-title>Processing Form</ion-title>\n  </ion-toolbar>\n\n<div class="circle-top">\n  <ul>\n    <li class="one-circle"></li>\n    <li class="two-circle"></li>\n    <li class="three-circle"></li>\n    \n    <div class="circle-line">\n      </div>\n    </ul>\n  </div>\n\n</ion-header>\n\n<ion-content>\n  \n <div class="content-sec">\n   <div class="text-sec">\n  <h2>General Information</h2>\n  </div>\n\n\n\n  \n  <div class="sign">\n      <form class="form-sec" #processform="ngForm" novalidate>\n    <ion-list>\n         <ion-grid>\n          <ion-row>\n      <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>COMPANY NAME</ion-label>\n          <ion-input type="text" [(ngModel)]="data.companyname" name="companyname" #companyname="ngModel" required></ion-input>\n        </ion-item>\n         <div class="alert alert-danger" color="danger">\n                  <div *ngIf="companyname.errors && (companyname.dirty || companyname.touched)">\n                    <div [hidden]="!companyname.errors.required">\n                      Comapany name is required\n                    </div>\n                  </div>\n                </div>\n      </ion-col>\n      <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>POSITION</ion-label>\n          <ion-input type="text" [(ngModel)]="data.position" name="position" #position="ngModel"  required></ion-input>\n        </ion-item>\n          <div class="alert alert-danger" color="danger">\n                  <div *ngIf="position.errors && (position.dirty || position.touched)">\n                    <div [hidden]="!position.errors.required">\n                      Position is required\n                    </div>\n                  </div>\n                </div>\n      </ion-col>\n      <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>ALTERNATIVE PHONE NUMBER (xxx-xxx-xxxx) </ion-label>         \n          <ion-input  type="tel" [(ngModel)]="data.phone" name="phone" #phone="ngModel"  pattern="^[0-9]+(-[0-9]+)+$" maxlength="12" required (input)="phonevalidation(data.phone)"></ion-input>\n        </ion-item>\n        <div class="alert alert-danger" color="danger">\n                  <div *ngIf="phone.errors && (phone.dirty || phone.touched)">\n                    <div [hidden]="!phone.errors.required">\n                      Phone number required\n                    </div>\n                    <div [hidden]="!phone.errors.pattern">\n                      Only number allowed in valid format( xxx-xxx-xxx-xxx-xxx)\n                    </div>\n                 \n                  </div>\n                </div>\n      </ion-col>\n      <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>CHEF HOME ADDRESS</ion-label>\n          <ion-input type="text" [(ngModel)]="data.address" name="address" #address="ngModel" required></ion-input>\n        </ion-item>\n         <div class="alert alert-danger" color="danger">\n                  <div *ngIf="address.errors && (address.dirty || address.touched)">\n                    <div [hidden]="!address.errors.required">\n                     Chef home address is required\n                    </div>\n                  </div>\n                </div>\n      </ion-col>\n                 <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>CHEF KITCHEN ADDRESS</ion-label>\n          <ion-input (focus)="chefadres()" type="text" [(ngModel)]="data.workaddress" name="workaddress" #workaddress="ngModel" required></ion-input>\n        </ion-item>\n         <div class="alert alert-danger" color="danger">\n                  <div *ngIf="workaddress.errors && (workaddress.dirty || workaddress.touched)">\n                    <div [hidden]="!workaddress.errors.required">\n                      Chef kitchen address is required\n                    </div>\n                  </div>\n                </div>\n      </ion-col>\n      <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>RESPONSIBLE CONTACT NAME</ion-label>\n          <ion-input type="text" [(ngModel)]="data.contactname" name="contactname" #contactname="ngModel" required></ion-input>\n        </ion-item>\n         <div class="alert alert-danger" color="danger">\n                  <div *ngIf="contactname.errors && (contactname.dirty || contactname.touched)">\n                    <div [hidden]="!contactname.errors.required">\n                      Contact name is required\n                    </div>\n                  </div>\n                </div>\n      </ion-col>\n      <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>RESPONSIBLE CONTACT NUMBER (xxx-xxx-xxxx)</ion-label>\n          <ion-input  type="tel" [(ngModel)]="data.contactnumber" name="contactnumber" #contactnumber="ngModel" pattern="^[0-9]+(-[0-9]+)+$" maxlength="12" required (input)="contactvalidation(data.contactnumber)"></ion-input>\n        </ion-item>\n      <div class="alert alert-danger" color="danger">\n                  <div *ngIf="contactnumber.errors && (contactnumber.dirty || contactnumber.touched)">\n                    <div [hidden]="!contactnumber.errors.required">\n                      Phone number required\n                    </div>\n                    <div [hidden]="!contactnumber.errors.pattern">\n                      Only number allowed in valid format( xxx-xxx-xxx-xxx-xxx)\n                    </div>\n                 \n                  </div>\n                </div>\n      </ion-col>\n       <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>OCCUPATION OF CHEF</ion-label>\n          <ion-input type="text" [(ngModel)]="data.occupationchef" name="occupationchef" #occupationchef="ngModel" required></ion-input>\n        </ion-item>\n         <div class="alert alert-danger" color="danger">\n                  <div *ngIf="occupationchef.errors && (occupationchef.dirty || occupationchef.touched)">\n                    <div [hidden]="!occupationchef.errors.required">\n                      Occupation of Chef is required\n                    </div>\n                  </div>\n                </div>\n      </ion-col>\n               <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>EXPERIENCE</ion-label>\n          <ion-input type="text" [(ngModel)]="data.experience" name="experience" #experience="ngModel" required></ion-input>\n        </ion-item>\n         <div class="alert alert-danger" color="danger">\n                  <div *ngIf="experience.errors && (experience.dirty || experience.touched)">\n                    <div [hidden]="!experience.errors.required">\n                      Experience is required\n                    </div>\n                  </div>\n                </div>\n      </ion-col>\n<!--               <ion-col col-6 class="left">\n        <ion-item>\n          <ion-label stacked>EXPERIENCE</ion-label>\n          <ion-input type="number" placeholder="In Years" value="0" [(ngModel)]="data.experienceyr" name="experienceyr" #experienceyr="ngModel"  min="0" max="100" required></ion-input>\n        </ion-item>\n         <div class="alert alert-danger" color="danger">\n                  <div *ngIf="experienceyr.errors && (experienceyr.dirty || experienceyr.touched)">\n                    <div [hidden]="!experienceyr.errors.required">\n                    Field is required\n                    </div>\n                  </div>\n                </ion-col>\n               <ion-col col-6 class="right ">\n        <ion-item>\n          <ion-label stacked>EXPERIENCE</ion-label>\n          <ion-input type="number" placeholder="In Months" value="0" [(ngModel)]="data.experiencemn" name="experiencemn" #experiencemn="ngModel" min="0" max="12" required></ion-input>\n        </ion-item>\n         <div class="alert alert-danger" color="danger">\n                  <div *ngIf="experienceyr.errors && (experienceyr.dirty || experienceyr.touched)">\n                    <div [hidden]="!experiencemn.errors.required">\n                    Field is required\n                    </div>\n                  </div>\n                </ion-col>-->\n     </ion-row>\n      </ion-grid>\n    </ion-list>\n          <div class="bottombutton">\n         <button ion-button full color="theme-header" (click)="Processing(processform)" [disabled]="!processform.valid">Next</button>\n    </div>\n   </form>\n  </div>\n </div>\n</ion-content>\n\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/processingform/processingform.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__["a" /* Appsetting */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_appsetting__["a" /* Appsetting */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]) === "function" && _g || Object])
], ProcessingformPage);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=processingform.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtrastaffPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orderlist_orderlist__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ExtrastaffPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExtrastaffPage = (function () {
    // public staff:any = [];
    // public firstname = [];
    function ExtrastaffPage(navCtrl, toastCtrl, navParams, appsetting, http, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.appsetting = appsetting;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        // public extra = [1];
        this.data = {};
        this.arr = [];
        //    alert('extraff profile jdhfjk');
        //console.log(this.extra.length);
    }
    ExtrastaffPage.prototype.Extrastaff = function (staffdata) {
        var _this = this;
        console.log(staffdata.value);
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["e" /* RequestOptions */]({ headers: headers });
        // if(staffdata.value.phone==' '){
        //   console.log(staffdata.value.phone);
        //   staffdata.value.phone= staffdata.value.phone.replace(' ','');}
        if (staffdata.value.phone) {
            console.log('happy');
            staffdata.value.phone = staffdata.value.phone.replace(/-/g, "");
            var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
            var postdata = {
                id: userid,
                firstname: staffdata.value.firstname,
                lastname: staffdata.value.lastname,
                occupation: staffdata.value.occupation,
                phone: staffdata.value.phone,
            };
            console.log(postdata);
            this.arr.push(this.data);
            console.log(this.arr.length);
            if (this.arr.length == 6) {
                this.alert('Only 5 Extra Staff could be added');
            }
            else {
                var serialized = this.serializeObj(postdata);
                this.http.post(this.appsetting.myGlobalVar + 'add_staff_info', serialized, options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (response) {
                    console.log(response);
                    if (response.status == true) {
                        localStorage.setItem('Completed', 'complete');
                        _this.presentConfirm('Extra staff added successfully.<br>You want to add another?');
                        //this.navCtrl.push(TabsPage)
                    }
                }, function (err) {
                    console.log(err);
                });
            }
        }
    };
    ExtrastaffPage.prototype.presentConfirm = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'CANCEL',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                    }
                },
                {
                    text: 'ADD',
                    handler: function () {
                        console.log(_this.data);
                        // this.data.firstname = ' ';
                        // this.data.lastname = ' ';
                        // this.data.occupation = ' ';
                        // this.data.phone = ' ';
                        _this.data = { 'firstname': ' ',
                            'lastname': ' ',
                            'occupation': ' ',
                            'phone': '' };
                        // this.data.vikki=' ';
                        // this.data={};
                        console.log('vikki');
                        console.log(_this.data);
                    }
                }
            ]
        });
        alert.present();
    };
    ExtrastaffPage.prototype.alert = function (msg) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: msg,
            buttons: [
                {
                    text: 'Ok',
                    role: 'submit',
                    handler: function () {
                        console.log('Cancel clicked');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    ExtrastaffPage.prototype.phonevalidation = function (phn) {
        console.log(phn);
        console.log(phn.length);
        if (phn.length == 3) {
            this.data.phone = this.data.phone + '-';
        }
        else if (phn.length == 7) {
            this.data.phone = this.data.phone + '-';
        }
        // else if (phn.value.phone.length == 12) {
        //   phn.value.phone = phn.value.phone + '-';
        // }
    };
    ExtrastaffPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Orderlist');
        console.log(window.navigator.onLine);
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    ExtrastaffPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    // tabs() {
    //   this.navCtrl.push(TabsPage);
    // }
    ExtrastaffPage.prototype.orderlist = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__orderlist_orderlist__["a" /* OrderlistPage */]);
    };
    return ExtrastaffPage;
}());
ExtrastaffPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-extrastaff',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/extrastaff/extrastaff.html"*/'<!--\n  Generated template for the ExtrastaffPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="theme-header">\n    <ion-title>Processing Form</ion-title>\n  </ion-navbar>\n  \n<div class="circle-top">\n  <ul>\n    <li class="one-circle"></li>\n    <li  class="two-circle"></li>\n    <li class="three-circle"></li>\n    <div class="circle-line">\n      </div>\n    </ul>\n  </div>\n\n</ion-header>\n\n<ion-content>\n    <div class="content-text">\n  <h1 style="font-size:14px">Extra Staff</h1>\n  </div>\n  <div class="content-sec">\n  <div class="sign">\n   <form class="form-sec" #extraform="ngForm" novalidate>\n    <ion-list>\n         <ion-grid>\n          <ion-row>\n           <ion-col col-6 class="left">\n        <ion-item>\n          <ion-label stacked>FIRST NAME</ion-label>\n          <ion-input type="text" [(ngModel)]="data.firstname" name=\'firstname\' #firstname="ngModel" required></ion-input>\n        </ion-item>\n        <div class="alert alert-danger" color="danger">\n            <div *ngIf="firstname.errors && (firstname.dirty || firstname.touched)">\n              <div [hidden]="!firstname.errors.required">\n                First name is required\n              </div>\n            </div>\n          </div>\n      </ion-col>\n      <ion-col col-6 class="right">\n        <ion-item>\n          <ion-label stacked>LAST NAME</ion-label>\n             <ion-input type="text" [(ngModel)]="data.lastname" name="lastname" #lastname="ngModel" required></ion-input>\n        </ion-item>\n        <div class="alert alert-danger" color="danger">\n            <div *ngIf="lastname.errors && (lastname.dirty || lastname.touched)">\n              <div [hidden]="!lastname.errors.required">\n                Last name is required\n              </div>\n            </div>\n          </div>\n      </ion-col>\n      <ion-col col-12 class="left right">\n          <ion-item>\n            <ion-label stacked>PROFESSION OR OCCUPATION</ion-label>\n            <ion-input type="text" [(ngModel)]="data.occupation" name="occupation" #occupation="ngModel" required></ion-input>\n            \n          </ion-item>\n          <div class="alert alert-danger" color="danger">\n              <div *ngIf="occupation.errors && (occupation.dirty || occupation.touched)">\n                <div [hidden]="!occupation.errors.required">\n                  Occupation is required\n                </div>\n              </div>\n            </div>\n        </ion-col>\n      <ion-col col-12 class="left right">\n        <ion-item>\n          <ion-label stacked>PHONE NUMBER</ion-label>\n          <ion-input type="tel" (input)="phonevalidation(data.phone)" [(ngModel)]="data.phone" name="phone" #phone="ngModel" required maxlength="12" pattern="^[0-9]+(-[0-9]+)+$"></ion-input>\n        </ion-item>\n        <div class="alert alert-danger" color="danger">\n            <div *ngIf="phone.errors && (phone.dirty || phone.touched) && data.phone != \'\'">\n              <div [hidden]="!phone.errors.required">\n               Phone is required\n              </div>\n              <div [hidden]="!phone.errors.pattern">\n                  Only number allowed\n                </div>\n            </div>\n            \n          </div>\n      </ion-col>\n     </ion-row>\n      </ion-grid>\n    </ion-list>\n     <!-- <button ion-button full color="theme-header" [disabled]="!extraform.valid" (click)="Extrastaff(extraform)">Next</button> -->\n   </form>\n  </div>\n\n \n <div class="plusbtn" >\n <button ion-fab mini (click)="Extrastaff(extraform)" [disabled]="!extraform.valid" ><ion-icon name="add"></ion-icon></button>\n</div>\n </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/extrastaff/extrastaff.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], ExtrastaffPage);

//# sourceMappingURL=extrastaff.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StafflistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editstaff_editstaff__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__extrastaff_extrastaff__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
/**
 * Generated class for the StafflistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StafflistPage = (function () {
    function StafflistPage(navCtrl, navParams, alertCtrl, appsetting, toastCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.appsetting = appsetting;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.data1 = '';
        this.data2 = '';
        this.data3 = '';
        this.data4 = '';
        this.data5 = '';
        this.stafflist();
    }
    StafflistPage.prototype.add = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__extrastaff_extrastaff__["a" /* ExtrastaffPage */]);
    };
    StafflistPage.prototype.stafflist = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
        var postdata = {
            id: userid
        };
        var serialized = this.serializeObj(postdata);
        // this.loading.dismiss();
        this.http.post(this.appsetting.myGlobalVar + 'userinfo', serialized, options).map(function (res) { return res.json(); }).subscribe(function (data1) {
            if (data1.data) {
                console.log(data1.data.extra_staffs);
                _this.array = data1.data.extra_staffs;
                console.log(_this.array);
            }
            localStorage.removeItem('Extrastaff');
            //         localStorage.removeItem('Extrastaff2');
            //          localStorage.removeItem('Extrastaff3');
            //           localStorage.removeItem('Extrastaff4');
            //            localStorage.removeItem('Extrastaff5');
        });
    };
    StafflistPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    StafflistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StafflistPage');
        if (window.navigator.onLine == true) {
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Network connection failed',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    StafflistPage.prototype.backtostafflist = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__profile_profile__["a" /* ProfilePage */]);
    };
    StafflistPage.prototype.ndelete = function (del) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'RAFAHO',
            message: 'Are you sure<br>you want to delete?',
            buttons: [
                {
                    text: 'NO',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        // this.navCtrl.push(RegisterPage)
                    }
                },
                {
                    text: 'YES',
                    role: 'submit',
                    handler: function () {
                        console.log('Continue clicked');
                        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
                        //    var options = new RequestOptions({ headers: headers });
                        var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
                        console.log(userid + ',' + del);
                        var body = {
                            user_id: userid,
                            staff_id: del
                        };
                        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({
                            body: body,
                            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestMethod */].Delete
                        });
                        //    console.log(postdata);
                        var serialized = 'user_id=5a33981e31120335884ecb12&staff_id=5a3398dc31120335884ecb13';
                        console.log(serialized);
                        _this.http.request('http://rafao.us-west-2.elasticbeanstalk.com/api/extra_staff/?', options).map(function (res) { return res.json(); }).subscribe(function (data1) {
                            console.log(data1);
                            if (data1.status == true) {
                                _this.ToastMsg(data1.message);
                                _this.stafflist();
                            }
                            //     this.navCtrl.push(StafflistPage);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    StafflistPage.prototype.ToastMsg = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'middle'
        });
        toast.present();
    };
    StafflistPage.prototype.edit = function (dat) {
        localStorage.setItem('Extrastaff', JSON.stringify(dat));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__editstaff_editstaff__["a" /* EditstaffPage */]);
    };
    return StafflistPage;
}());
StafflistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-stafflist',template:/*ion-inline-start:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/stafflist/stafflist.html"*/'<!--\n  Generated template for the StafflistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n<ion-toolbar color="theme-header">\n    <button style="height:28px; color: #fff; padding: 0 0 0 3px; font-size: 2.7rem;" start ion-button clear (click)="backtostafflist()"><ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon></button>\n    <ion-title>STAFF LIST</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only clear class="btnprofile" (click)="add()"> <ion-icon name="add" style="font-size: 2.2em;" ></ion-icon></button>\n    </ion-buttons>\n<!--    <ion-icon  ios="ios-add" md="md-add"  (click)="add()"></ion-icon>-->\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list >\n    <ion-item *ngFor="let dat of array" >\n    \n        <h2>{{dat?.firstname}} {{dat?.lastname}} <span (click)="edit(dat)"><ion-icon name="create"></ion-icon>\n</span></h2>\n        <p>{{dat?.profession}} </p>\n     <p>{{dat?.phonenumber}} <span (click)="ndelete(dat?._id)"> <ion-icon name="trash"></ion-icon> </span></p>\n<!--    <p item-end class="rightp"  (click)="edit(dat)">Edit Info</p>-->\n<!--     <p item-end class="rightp"  >Delete</p>-->\n    </ion-item>\n  \n  \n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/D/DNeelanshi/rafaho android/chef/chef/src/pages/stafflist/stafflist.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_appsetting__["a" /* Appsetting */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], StafflistPage);

//# sourceMappingURL=stafflist.js.map

/***/ })

},[363]);
//# sourceMappingURL=main.js.map