import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Moredetals1Page } from './moredetals1.page';

const routes: Routes = [
  {
    path: '',
    component: Moredetals1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Moredetals1Page]
})
export class Moredetals1PageModule {}
