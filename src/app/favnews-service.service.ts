import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavnewsServiceService {

  allNews = [
    {
      id: 0,
      url: 'https://picsum.photos/200',
      title: 'First news',
      fav: false,
      // tslint:disable-next-line:max-line-length
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
    },
    {
      id: 1,
      url: 'https://picsum.photos/200',
      title: 'second news',
      fav: false,
      // tslint:disable-next-line:max-line-length
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
    },
    {
      id: 2,
      url: 'https://picsum.photos/200',
      title: 'third news',
      fav: false,
      // tslint:disable-next-line:max-line-length
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
    },
    {
      id: 3,
      url: 'https://picsum.photos/200',
      title: 'fourth news',
      fav: false,
      // tslint:disable-next-line:max-line-length
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
    },
    {
      id: 4,
      url: 'https://picsum.photos/200',
      title: 'fifth news',
      fav: false,
      // tslint:disable-next-line:max-line-length
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
    },
  ];

  favNewsArr = [];
  constructor() { }


  saveFavNews(news) {
    this.allNews.forEach(element => {
      if (element.id === news.id) {
        element.fav = true;
      }
    });
    this.favNewsArr.push(news);
  }

  removeFavNews(news) {
    this.allNews.forEach(element => {
      if (element.id === news.id) {
        element.fav = false;
      }
    });

    this.favNewsArr.forEach(element => {
      if (element.id === news.id) {
        this.favNewsArr.splice( this.favNewsArr.indexOf(element), 1);
      }
    });
  }

  returnFavNewsArr() {
    return this.favNewsArr;
  }

  returnAllNews() {
    return this.allNews;
  }

}
