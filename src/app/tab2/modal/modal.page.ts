import { Component, OnInit } from '@angular/core';
import { UsersListService } from '../user.service';
import { NavParams, ModalController } from '@ionic/angular';
import { User } from '../../user.model';
import { GalleryModalPage } from '../../gallery-modal/gallery-modal.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  usersPageTitle = 'user';
  imgPath = '';

  modalUser: User = {
    id: this.navParams.data.id,
    firstname: this.navParams.data.firstname,
    lastname: this.navParams.data.lastname,
    email: this.navParams.data.email,
    dateOfBirth: this.navParams.data.dateOfBirth,
    gender: this.navParams.data.gender,
    track: this.navParams.data.track,
    profileImg: this.imgPath
  };

  constructor(
    private usersList: UsersListService,
    private navParams: NavParams,
    public modalCtrl: ModalController
  ) {}

  ngOnInit() {
  }

  async addImage() {
    const galleryModal = await  this.modalCtrl.create({
      component: GalleryModalPage
    });

    await galleryModal.present();

    const galleryModalReturn = await galleryModal.onDidDismiss();
    this.imgPath = galleryModalReturn.data;
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  sendData() {
    this.modalCtrl.dismiss(this.modalUser);
  }

}
