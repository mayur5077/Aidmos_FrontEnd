import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';
import { DeliveryNoteComponent } from './delivery-note/delivery-note.component';


const routes: Routes = [

  {path:"",component:LandingComponent, children:[
    {path:"deliverynote", component:DeliveryNoteComponent},


  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VouchersRoutingModule { }
