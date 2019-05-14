import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './menu/menu.module#MenuPageModule' },
  // { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  // { path: 'modal', loadChildren: './tab1/modal/modal.module#ModalPageModule' },
  // { path: 'modal', loadChildren: './tab2/modal/modal.module#ModalPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'user-details', loadChildren: './user-details/user-details.module#UserDetailsPageModule' },
  { path: 'gallery-modal', loadChildren: './gallery-modal/gallery-modal.module#GalleryModalPageModule' }
  // { path: 'news', loadChildren: './news/news.module#NewsPageModule' },
  // { path: 'fav-news', loadChildren: './fav-news/fav-news.module#FavNewsPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
