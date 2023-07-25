import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VouchersRoutingModule } from './vouchers-routing.module';
import { LandingComponent } from './landing.component';
import { DeliveryNoteComponent } from './delivery-note/delivery-note.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MastersRoutingModule } from '../masters/masters-routing.module';


@NgModule({
  declarations: [
    LandingComponent,
    DeliveryNoteComponent
  ],
  imports: [
    CommonModule,
    VouchersRoutingModule,
    MastersRoutingModule,
    SharedModule,
   ReactiveFormsModule
  ]
})
export class VouchersModule { }
