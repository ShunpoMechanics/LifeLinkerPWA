import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuickStartPageRoutingModule } from './quick-start-routing.module';

import { QuickStartPage } from './quick-start.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuickStartPageRoutingModule
  ],
  declarations: [QuickStartPage]
})
export class QuickStartPageModule {}
