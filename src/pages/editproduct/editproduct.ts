
import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,AlertController,LoadingController,ModalController } from 'ionic-angular';
import { ProcessingformPage } from '../processingform/processingform';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';
import { Appsetting } from '../../providers/appsetting';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {RlTagInputModule} from 'angular2-tag-input';
import 'rxjs/add/operator/map';
import { Device } from '@ionic-native/device';
import { ProductlistPage } from '../productlist/productlist';
import { ActionSheetController } from 'ionic-angular';
/**
 * Generated class for the EditproductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editproduct',
  templateUrl: 'editproduct.html',
})
export class EditproductPage {
productdetails:any;
 public data:any = [];
 tag:any=[];
 tagss:any=[];
 str2:any=[];
arr:any=[];
 str1:any=[];
 srcImage:any;
  srcImage1:any;
   srcImage2:any;
  constructor(public navCtrl: NavController,
    public toastCtrl:ToastController,
    public navParams: NavParams,
    public geolocation: Geolocation,
    public nativeGeocoder: NativeGeocoder,
    public appsetting : Appsetting,
    public http: Http,
    public tagsinput: RlTagInputModule,
     private camera: Camera,
    private device: Device,
        public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    public loadingCtrl:LoadingController,
   public modalCtrl: ModalController) {
   this.getdata();
  }
  backtopro(){
      this.navCtrl.push(ProductlistPage)
  }
getdata(){
  this.productdetails =JSON.parse(localStorage.getItem('Producttoedit'));
  console.log(this.productdetails);
  this.str2 = this.productdetails.tags.split(',',this.productdetails.tags.length)
  console.log(this.str2);
   this.str1 = this.productdetails.tags.split(',',this.productdetails.product_ingredients.length)
  console.log(this.str1);

     console.log(this.tag);
       if(this.productdetails.product_image1){
  this.srcImage1 = this.productdetails.product_image1}
   if(this.productdetails.product_image2){
  this.srcImage2 = this.productdetails.product_image2}
  this.data.productname=this.productdetails.product_name,
  this.data.productprice=this.productdetails.product_price,
  this.data.discount=this.productdetails.discount,
     
  this.tag = this.str2;
   this.tagss = this.str1; 
  this.data.productdesc=this.productdetails.product_description.replace(/<\/?[^>]+(>|$)/g, ""),
  this.data.diet=this.productdetails.diet_restriction.replace(/<\/?[^>]+(>|$)/g, ""),
  this.data.minorder=this.productdetails.minimum_order,
  this.data.cookingatchef=this.productdetails.cooking_time_at_chef_place+':00:00T',
  this.data.cookingatclient=this.productdetails.cooking_time_at_user_home+':00:00T',
  this.srcImage = this.productdetails.product_image0
  }
 EditProduct(product){
     let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    let options = new RequestOptions({ headers: headers });

 }
        CameraAction(){
    

    console.log('opening');
     let headers = new Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
            let options = new RequestOptions({ headers: headers });
            var userid = JSON.parse(localStorage.getItem('UserInfo'))._id;
    let actionsheet = this.actionSheetCtrl.create({

      title: "Choose Album",
      buttons: [{
        text: 'Camera',
        handler: () => {
          // this.loading.present();
          const options: CameraOptions = {
            quality: 8,
            targetWidth:767,
            targetHeight:600,
            sourceType: 1,
            correctOrientation: true,
            allowEdit:true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
          }
          this.camera.getPicture(options).then((imageUri) => {
//            this.srcImage = 'data:image/jpeg;base64,' + imageUri;
                  //this.srcImage =imageUri;
                  this.arr.push({'image':imageUri});
//                  alert(JSON.stringify(this.arr));
                  this.srcImage = 'data:image/jpeg;base64,'+this.arr[0].image;
    this.srcImage1 = 'data:image/jpeg;base64,'+this.arr[1].image;
    this.srcImage2 = 'data:image/jpeg;base64,'+this.arr[2].image;
    this.arr='';
    this.arr=[];
            
//            alert('camera working');
//            

          }, (err) => {
//            alert(JSON.stringify(err));
            // this.loading.dismiss();
            console.log(err);
          });
        }
      },
      {
        text: 'Gallery',
        handler: () => {
          console.log("Gallery Clicked");
          //	alert("get Picture")
          // this.loading.present();

          const options: CameraOptions = {
            quality: 10,
            sourceType: 0,
             targetWidth:767,
            targetHeight:600,
            correctOrientation: true,
            allowEdit:true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
          }
          this.camera.getPicture(options).then((imageData) => {
//            this.srcImage = 'data:image/jpeg;base64,' + imageData;
//            this.srcImage=imageData;
            this.arr.push({'image':imageData});
//                  alert(JSON.stringify(this.arr));
                  this.srcImage = 'data:image/jpeg;base64,'+this.arr[0].image;
                 this.srcImage1 = 'data:image/jpeg;base64,'+this.arr[1].image;
                 this.srcImage2 = 'data:image/jpeg;base64,'+this.arr[2].image;
               this.arr='';
                this.arr=[];
            
//            alert('gallery working');
          }, (err) => {
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
        handler: () => {
          console.log('Cancel clicked');
          actionsheet.dismiss();

        }
      }]
    });

    actionsheet.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditproductPage');
  }

}
