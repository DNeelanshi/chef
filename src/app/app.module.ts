import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Keyboard } from '@ionic-native/keyboard';
import { AboutPage } from '../pages/about/about';
import{ EditstaffPage}from '../pages/editstaff/editstaff';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { RegisterPage } from '../pages/register/register';
import { MapmodalPage } from '../pages/mapmodal/mapmodal';
import { SigninPage } from '../pages/signin/signin';
import { ProcessingformPage } from '../pages/processingform/processingform';
import { AddreferencePage } from '../pages/addreference/addreference';
import { ExtrastaffPage } from '../pages/extrastaff/extrastaff';
import { OrderlistPage } from '../pages/orderlist/orderlist';
import { AccountsPage } from '../pages/accounts/accounts';
import { ChatPage } from '../pages/chat/chat';
import { ProfilePage } from '../pages/profile/profile';
import { CalenderPage } from '../pages/calender/calender';
import { OrderviewPage } from '../pages/orderview/orderview';
import { RafahofeedbackPage } from '../pages/rafahofeedback/rafahofeedback';
import { AddproductPage } from '../pages/addproduct/addproduct';
import { SubcriptionbillPage } from '../pages/subcriptionbill/subcriptionbill';
import { PaymentPage } from '../pages/payment/payment';
import { AccountnumberPage } from '../pages/accountnumber/accountnumber';
import { EditprofilePage } from '../pages/editprofile/editprofile';
import { AddspecialitiesPage } from '../pages/addspecialities/addspecialities';
import { TermPage} from '../pages/term/term';
import { FrequentquestionsPage} from '../pages/frequentquestions/frequentquestions';
import { HelpPage} from '../pages/help/help';
import { GeolocationPage} from '../pages/geolocation/geolocation';
import { ForgotPage} from '../pages/forgot/forgot';
import { StatusBar } from '@ionic-native/status-bar';
import {IonTagsInputModule} from "ionic-tags-input"; 
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { Geolocation } from '@ionic-native/geolocation';
import { Appsetting } from '../providers/appsetting';
import { HttpModule } from '@angular/http';
import { Device } from '@ionic-native/device';
import{ StafflistPage}from '../pages/stafflist/stafflist';
import { ChangepasswordPage} from '../pages/changepassword/changepassword';
import { MomentModule } from 'angular2-moment';
import { Camera } from '@ionic-native/camera';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    RegisterPage,
    SigninPage,
    ProcessingformPage,
    AddreferencePage,
    ExtrastaffPage,
    OrderlistPage,
    AccountsPage,
    ChatPage,
    ProfilePage,
    CalenderPage,
    OrderviewPage,
    RafahofeedbackPage,
    AddproductPage,
    SubcriptionbillPage,
    PaymentPage,
    AccountnumberPage,
    EditprofilePage,
    EditstaffPage,
    AddspecialitiesPage,
    TermPage,
    FrequentquestionsPage,
    HelpPage,
    StafflistPage,
    GeolocationPage,
    ForgotPage,
    ChangepasswordPage,
    MapmodalPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    MomentModule,
     IonTagsInputModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    RegisterPage,
    SigninPage,
    ProcessingformPage,
    AddreferencePage,
    ExtrastaffPage,
    EditstaffPage,
    OrderlistPage,
    AccountsPage,
    ChatPage,
    StafflistPage,
    ProfilePage,
    CalenderPage,
    OrderviewPage,
    RafahofeedbackPage,
    AddproductPage,
    SubcriptionbillPage,
    PaymentPage,
    AccountnumberPage,
    EditprofilePage,
    AddspecialitiesPage,
    TermPage,
    FrequentquestionsPage,
    HelpPage,
    GeolocationPage,
    ForgotPage,
    ChangepasswordPage,
    MapmodalPage
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    NativeGeocoder,
    Appsetting,
    Keyboard,
    Camera,
    Device,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
  
}
