import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {

  userDetails: User = {
    id: this.navParams.data.id,
    firstname: this.navParams.data.firstname,
    lastname: this.navParams.data.lastname,
    email: this.navParams.data.email,
    dateOfBirth: this.navParams.data.dateOfBirth,
    gender: this.navParams.data.gender,
    track: this.navParams.data.track,
    profileImg: this.navParams.data.profileImg
  };
  constructor(
    private navParams: NavParams,
    public modalCtrl: ModalController
  ) { }


  ngOnInit() {
    console.log('user details user obj ' + this.userDetails);
    console.log('user details img path ' + this.userDetails.profileImg);
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
