import { Component, OnInit } from '@angular/core';
import { UsersListService } from './user.service';
import { ModalController, ToastController, AlertController } from '@ionic/angular';
import { ModalPage } from './modal/modal.page';
import { User } from '../user.model';
import { UserDetailsPage } from '../user-details/user-details.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  usersPageTitle = 'Users';
  users: User[];
  newUser: User = {
    id: 0,
    firstname: '',
    lastname: '',
    email: '',
    dateOfBirth: '',
    gender: '',
    track: '',
    profileImg: ''
  };

  constructor(
    private usersService: UsersListService,
    public modalCtrl: ModalController,
    public toastController: ToastController,
    public alertController: AlertController
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.users = this.usersService.getAllUsers();
  }

  async openModal() {
    const myModal = await  this.modalCtrl.create({
      component: ModalPage,
      componentProps: this.newUser
    });

    await myModal.present();

    const modalData = await myModal.onDidDismiss();
    if ( modalData != null && modalData.data != null) {
    this.presentToast();
    this.usersService.addNewUser(modalData.data);
    this.users = this.usersService.getAllUsers();
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'The new student has been added',
      duration: 2000
    });
    toast.present();
  }

  deleteUser(id) {
    console.log(id);
    this.presentAlertConfirm(id);
  }

  async presentAlertConfirm(Id) {
    const alert = await this.alertController.create({
      message: 'Are you sure you want to delete this user',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel: blah');
          }
        },
        {
          text: 'Okay',
          handler: () => {
            this.usersService.deleteUser(Id);
            this.users = this.usersService.getAllUsers();
          }
        }
      ]
    });

    await alert.present();
  }

  async showDetails(user: User) {
    const userDetailsModal = await this.modalCtrl.create({
      component: UserDetailsPage,
      componentProps: user
    });

    await userDetailsModal.present();
  }

}
