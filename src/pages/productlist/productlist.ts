
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,ToastController,LoadingController } from 'ionic-angular';
import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Appsetting } from '../../providers/appsetting';
import {EditproductPage} from '../editproduct/editproduct';
import {ProfilePage} from '../profile/profile';
/**
 * Generated class for the ProductlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productlist',
  templateUrl: 'productlist.html',
})
export class ProductlistPage {
products:any=[];
  constructor(public navCtrl: NavController, 
      public navParams: NavParams,
      private alertCtrl:AlertController,
       private loadingCtrl:LoadingController,
      public appsetting: Appsetting,
      private toastCtrl:ToastController, public http: Http) {
      this.productlist();
  }
productlist(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    var options = new RequestOptions({ headers: headers });
     var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
    var postdata = {
      id: userid
    };
    var serialized = this.serializeObj(postdata);
   var  Loading = this.loadingCtrl.create({
          spinner: 'bubbles',
          cssClass: 'loader',
          dismissOnPageChange: true
        });
      console.log(postdata);
        Loading.present().then(() => { 
            this.http.post(this.appsetting.myGlobalVar + 'userinfo', serialized, options).map(res => res.json()).subscribe(data1 => {
        console.log(data1.data.products);
        Loading.dismiss();
        if(data1.status == true){
        this.products =data1.data.products
        }
    },(err)=>{
        Loading.dismissAll();
    });
    })
}

    serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductlistPage');
  }
  backtoprofile(){
      this.navCtrl.push(ProfilePage);
  }
editpro(dat){
    
    localStorage.setItem('Producttoedit',JSON.stringify(dat));
    this.navCtrl.push(EditproductPage);
}
}
