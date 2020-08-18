import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PetFormComponent } from './pet-form/pet-form.component'
import { MedicalRecordFormComponent } from './medical-record-form/medical-record-form.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

const routes: Route[] = [{
  path: 'ads/new',
  component: PetFormComponent
},{
  path:'ads/new/medical-record',
  component: MedicalRecordFormComponent
},{
  path:'ads/new/contact',
  component:ContactFormComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
