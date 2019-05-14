import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-gallery-modal',
  templateUrl: './gallery-modal.page.html',
  styleUrls: ['./gallery-modal.page.scss'],
})
export class GalleryModalPage implements OnInit {

  usersImgs = [
    '../../assets/imgs/806962_user_512x512.png',
    '../../assets/imgs/download (2).png',
    '../../assets/imgs/download (3).png',
    '../../assets/imgs/images (1).png',
    '../../assets/imgs/images (2).png',
    '../../assets/imgs/images (3).png',
    '../../assets/imgs/images (4).png',
    '../../assets/imgs/images.png'
  ];

  imgPath = '';

  constructor(private modalCTRL: ModalController) { }

  ngOnInit() {
  }

  selectImg(imgPath) {
    this.imgPath = imgPath;
  }

  sendImg() {
    this.modalCTRL.dismiss(this.imgPath);
    console.log('gallery ' + this.imgPath);
  }


}
