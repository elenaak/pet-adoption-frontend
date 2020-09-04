import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AdFormComponent } from './forms/ad-form/ad-form.component';
import { PetsComponent } from './pets/pets.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {ProfileComponent} from './profile-details/profile/profile.component';
import { AdFormEditComponent} from './forms/edit-forms/ad-form-edit/ad-form-edit.component';
import { FavouritePetsComponent } from './favourite-pets/favourite-pets.component';



const routes: Route[] = [{
  path: 'ads/new',
  component: AdFormComponent
},{
  path: 'pets',
  component: PetsComponent
},{
  path:'pet/:id',
  component: PetDetailsComponent
},{
  path:'login',
  component: LoginComponent
},{
  path:'sign-up',
  component: SignUpComponent
},{
  path:'edit/:id',
  component:AdFormEditComponent
},{
  path:'profile',
  component:ProfileComponent
},{
  path:'favourite',
  component:FavouritePetsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
