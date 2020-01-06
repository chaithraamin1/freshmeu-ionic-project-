import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Moredetail2Page } from './moredetail2.page';

const routes: Routes = [
  {
    path: '',
    component: Moredetail2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Moredetail2Page]
})
export class Moredetail2PageModule {}
