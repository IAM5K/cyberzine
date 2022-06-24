import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QueriesPageRoutingModule } from './queries-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { QueriesPage } from './queries.page';
import { ReplyModalPage } from '../reply-modal/reply-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QueriesPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [QueriesPage,ReplyModalPage],
  entryComponents: [ReplyModalPage]
})
export class QueriesPageModule {}
