import { Component, OnInit } from '@angular/core';
import { FavnewsServiceService } from '../favnews-service.service';

@Component({
  selector: 'app-fav-news',
  templateUrl: './fav-news.page.html',
  styleUrls: ['./fav-news.page.scss'],
})
export class FavNewsPage implements OnInit {

  favNewsArr = [];

  constructor(private favNewsService: FavnewsServiceService) { }

  ngOnInit() {
    this.favNewsArr = this.favNewsService.returnFavNewsArr();
  }
  // ionViewWillEnter() {
  //   console.log('fav will ionViewWillEnter');
  // }
  // ionViewDidEnter() {
  //   console.log('fav will ionViewDidEnter');
  // }
  // ionViewWillLeave() {
  //   console.log('fav will ionViewWillLeave');
  // }
  // ionViewDidLeave() {
  //   console.log('fav will ionViewDidLeave');
  // }
  removeFromFav(news, event) {
    this.favNewsService.removeFavNews(news);
    this.favNewsArr = this.favNewsService.returnFavNewsArr();
  }

}
