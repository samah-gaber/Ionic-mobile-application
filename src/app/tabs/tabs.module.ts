import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { UserDetailsPage } from '../user-details/user-details.page';
import { GalleryModalPage } from '../gallery-modal/gallery-modal.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage,
    UserDetailsPage,
    GalleryModalPage
  ],
  entryComponents: [
    UserDetailsPage,
    GalleryModalPage
  ]
})
export class TabsPageModule {}
