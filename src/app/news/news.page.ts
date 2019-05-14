import { Component, OnInit } from '@angular/core';
import { FavnewsServiceService } from '../favnews-service.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  allNews = [];
  // cards = [
  //   {
  //     id: 0,
  //     url: 'https://picsum.photos/200',
  //     title: 'First news',
  //     // tslint:disable-next-line:max-line-length
  //     content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
  //   },
  //   {
  //     id: 1,
  //     url: 'https://picsum.photos/200',
  //     title: 'second news',
  //     // tslint:disable-next-line:max-line-length
  //     content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
  //   },
  //   {
  //     id: 2,
  //     url: 'https://picsum.photos/200',
  //     title: 'third news',
  //     // tslint:disable-next-line:max-line-length
  //     content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
  //   },
  //   {
  //     id: 3,
  //     url: 'https://picsum.photos/200',
  //     title: 'fourth news',
  //     // tslint:disable-next-line:max-line-length
  //     content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
  //   },
  //   {
  //     id: 4,
  //     url: 'https://picsum.photos/200',
  //     title: 'fifth news',
  //     // tslint:disable-next-line:max-line-length
  //     content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
  //   },
  // ];

  favNewsArr = [];
  constructor(private favNewsService: FavnewsServiceService) { }

  ngOnInit() {
    this.allNews = this.favNewsService.returnAllNews();
  }
  // ionViewWillEnter() {
  //   this.favNewsArr = this.favNewsService.returnFavNewsArr();
  //   this.favNewsArr.forEach(element => {
  //     this
  //   });
    // console.log('news will ionViewWillEnter');
  // }
  // ionViewDidEnter() {
  //   console.log('news will ionViewDidEnter');
  // }
  // ionViewWillLeave() {
  //   console.log('news will ionViewWillLeave');
  // }
  // ionViewDidLeave() {
  //   console.log('news will ionViewDidLeave');
  // }
  addToFav(news, event) {
    // if ( event.target.getAttribute('name') === 'heart-empty') {
    if ( news.fav ) {
      // event.target.setAttribute('name', 'heart-empty');
      this.favNewsService.removeFavNews(news);
    } else {
      // event.target.setAttribute('name', 'heart');
      this.favNewsService.saveFavNews(news);
    }
  }

}
