import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AdFormComponent } from './forms/ad-form/ad-form.component';
import { PetsComponent } from './pets/pets.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';

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
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
