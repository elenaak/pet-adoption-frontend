import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AdFormComponent } from './ad-form/ad-form.component';
import { PetCardComponent } from './pet-card/pet-card.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';

const routes: Route[] = [{
  path: 'ads/new',
  component: AdFormComponent
},{
  path: 'pets',
  component: PetCardComponent
},{
  path:'pet/:id',
  component: PetDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
