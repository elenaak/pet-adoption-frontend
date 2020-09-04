import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AdFormComponent } from './forms/ad-form/ad-form.component';
import { PetsComponent } from './pets/pets.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PetFinderQuizComponent } from './pet-finder-quiz/pet-finder-quiz.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaQuestionsComponent } from './fa-questions/fa-questions.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AdFormEditComponent} from './forms/edit-forms/ad-form-edit/ad-form-edit.component';


const routes: Route[] = [{
  path: '',
  redirectTo: '/home', pathMatch: 'full' 
},{
  path: 'home',
  component: HomePageComponent
},{
  path: 'ads/new',
  component: AdFormComponent
},{
  path: 'pets',
  component: PetsComponent
},{
  path:'pet/:id',
  component: PetDetailsComponent
},{
  path:'pet/finder/quiz',
  component: PetFinderQuizComponent
},{
  path:'contact',
  component: ContactUsComponent
},{
  path:'faqs',
  component: FaQuestionsComponent
},{
  path:'login',
  component: LoginComponent
},{
  path:'sign-up',
  component: SignUpComponent
},{
  path:'edit/:id',
  component:AdFormEditComponent
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
