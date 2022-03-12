import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuickStartPage } from './quick-start.page';

const routes: Routes = [
  {
    path: '',
    component: QuickStartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuickStartPageRoutingModule {}
