import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrderviewPage } from '../orderview/orderview';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public pet;
  constructor(public navCtrl: NavController) {
    this.pet = "ACTIVEORDER";
  }
  order(){
  this.navCtrl.push(OrderviewPage);
}

}
