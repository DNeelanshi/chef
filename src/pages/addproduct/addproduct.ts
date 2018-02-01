//import { Component } from '@angular/core';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SubcriptionbillPage } from '../subcriptionbill/subcriptionbill';
//import { ModalController } from 'ionic-angular';
import {IonTagsInputModule} from "ionic-tags-input";  
import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,AlertController,LoadingController,ModalController } from 'ionic-angular';
import { ProcessingformPage } from '../processingform/processingform';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';
import { Appsetting } from '../../providers/appsetting';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Camera, CameraOptions } from '@ionic-native/camera';
import 'rxjs/add/operator/map';
import { Device } from '@ionic-native/device';
import { SigninPage } from '../signin/signin';
import { ProfilePage } from '../profile/profile';
import { ActionSheetController } from 'ionic-angular';
import {FormGroup,FormBuilder} from '@angular/forms';
/**
 * Generated class for the AddproductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addproduct',
  templateUrl: 'addproduct.html',
})
export class AddproductPage {
 public data:any = [];
  commision:any;
  arr:any=[];
   tag = [];
   tagss =[];
     tags:any;
     taggs:any;
   srcImage;srcImage1;srcImage2;
  constructor(public navCtrl: NavController,
    public toastCtrl:ToastController,
    public navParams: NavParams,
    public geolocation: Geolocation,
    public nativeGeocoder: NativeGeocoder,
    public appsetting : Appsetting,
    public http: Http,
    private formBuilder: FormBuilder,
     public taginput: IonTagsInputModule,
    public actionSheetCtrl: ActionSheetController,
      private camera: Camera,
    private device: Device,
    public alertCtrl: AlertController,
    public loadingCtrl:LoadingController,
   public modalCtrl: ModalController) {
   
   this.getcommision();
  }

getcommision(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    let options = new RequestOptions({ headers: headers });
//    var userid=JSON.parse(localStorage.getItem('UserInfo'))._id; 
     this.http.get(this.appsetting.myGlobalVar + 'get_comission').map(res => res.json()).subscribe(data1 => {
         console.log(data1.data.commision_per_product);
         this.commision= data1.data.commision_per_product;
         
     })
}
 commisioncal(){
     var x = (this.commision/100)*this.data.productprice;
     
     console.log(x);
     this.data.rafahoprice = x;
    
     this.data.chefrecieved = this.data.productprice-this.data.rafahoprice;
 }
onChange(val){
    console.log(this.tag.toString())
    this.tags = this.tag.toString();
    console.log(this.tags);
  }
  onChanges(vali){
    console.log(this.tagss.toString())
    this.taggs = this.tagss.toString();
    console.log(this.taggs);
  }
 AddProduct(product){
     let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    let options = new RequestOptions({ headers: headers });
    var userid=JSON.parse(localStorage.getItem('UserInfo'))._id;
      console.log(this.commision);
    var postdata = {
       product_name:product.value.productname,
      product_price:product.value.productprice,
      discount:product.value.discount,
      product_ingredients:this.tagss.toString(),
      product_description:product.value.productdesc,
       diet_restriction:product.value.diet,
      minimum_order:product.value.minorder,
      cooking_time_at_chef_place:product.value.cookingatchef,
    cooking_time_at_user_home:product.value.cookingatclient,
     tags: this.tag.toString(),
    status: 0,
    product_image0: this.srcImage,
    product_image1: this.srcImage1,
     product_image2: this.srcImage2,
       id: userid,
      device_token:this.device.uuid
    }
    console.log(postdata);
    if(postdata.product_ingredients){
        if(postdata.tags){
    if(postdata.product_image0){
       
     var Serialized = this.serializeObj(postdata);
    var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      cssClass: 'loader',
       dismissOnPageChange:true
    });
    
      Loading.present().then(() => {
    this.http.post(this.appsetting.myGlobalVar+'add_products',Serialized,options).map(res=>res.json()).subscribe(response=>{
    

      Loading.dismiss();
      if(response.status == true){
  console.log(response);
        console.log(response.data._id);
        localStorage.setItem('UserInfo',JSON.stringify(response.data));
        this.presentConfirm('Products added successfully.<br>You want to add another?');
        
      }else{
        this.AlertMsg1(response.message)
      }
    } , (err) => {
        console.log(err);
         let toast = this.toastCtrl.create({
        message: 'Something went wrong',
        duration: 3000,
        position: 'middle'
      });
      toast.present();
        Loading.dismissAll();
      })
  })}else{
      let toast = this.toastCtrl.create({
        message: 'Atleast one image have to be selected',
        duration: 3000,
        position: 'middle'
      });
      toast.present();
  } }else{
      let toast = this.toastCtrl.create({
        message: 'Tags need to be filled',
        duration: 3000,
        position: 'middle'
      });
      toast.present();
  }
  }else{
      let toast = this.toastCtrl.create({
        message: 'Product Ingredients need to be filled',
        duration: 3000,
        position: 'middle'
      });
      toast.present();
  }
    
    
    
 }
 backtopro(){
     this.navCtrl.push(ProfilePage);
 }
  backtolist(){
      this.navCtrl.push(ProfilePage);
  }
  presentConfirm(msg) {
    let alert = this.alertCtrl.create({
      title: 'RAFAHO',
      message: msg,
      buttons: [
        {
          text: 'CANCEL',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            this.navCtrl.push(ProfilePage)
          }
        },
        {
          text: 'ADD',
          handler: () => {
            console.log(this.data);
            this.navCtrl.push(AddproductPage);
//            this.data={
//                       'productname':' ',
//                      'addingredients':' ',
//                     
//                    };
//         this.srcImage=''
//             this.srcImage1=''
//             this.srcImage2=''
         
            console.log('Neelanshi');
            console.log(this.data);
            
            
          }
        }
      ]
    });
    alert.present();
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
  
  serializeObj(obj) {
    var result = [];
    for (var property in obj)
      result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));

    return result.join("&");
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddproductPage');
  }
   AlertMsg1(msg){
    let alert = this.alertCtrl.create({
      title: 'RAFAHO',
      message: msg,
      buttons: [
        {
          text: 'OK',
          role: 'submit',
          handler: () => {
            console.log('ok clicked');
            // this.navCtrl.push(ProcessingformPage);
          }
        }
      ]
    });
    alert.present();
  }
   isReadonly() {
    return this.isReadonly;   //return true/false 
  }
subcriptionbill(){
  this.navCtrl.push(SubcriptionbillPage);
}
}
