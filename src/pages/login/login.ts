import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../Models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(private AngFiAuth:AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login(user:User)
  {
    try
    {
     const res = this.AngFiAuth.auth.signInWithEmailAndPassword(user.email,user.password);
     if(res)
     {
       this.navCtrl.setRoot(TabsPage);
     }
    }
    catch (e)
    { console.log(e);}
  }

  register()
  {
    this.navCtrl.push('RegisterPage');
  }

}
