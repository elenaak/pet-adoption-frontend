import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { CKEditorModule } from 'ng2-ckeditor';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer/footer.component';
import { PetFormComponent } from './forms/pet-form/pet-form.component';
import { MedicalRecordFormComponent } from './forms/medical-record-form/medical-record-form.component';
import { ContactFormComponent } from './forms/contact-form/contact-form.component';
import { AdFormComponent } from './forms/ad-form/ad-form.component';
import { PetsComponent } from './pets/pets.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SearchFiltersComponent } from './pets/search-filters/search-filters.component';
import { SearchListComponent } from './pets/search-list/search-list.component';
import { SearchListItemComponent } from './pets/search-list-item/search-list-item.component';
import { HomePageComponent } from './home-page/home-page.component';
import { JumbotronComponent } from './home-page/jumbotron/jumbotron.component';
import { PetFinderQuizComponent } from './pet-finder-quiz/pet-finder-quiz.component';
import { PetListComponent } from './home-page/pet-list/pet-list.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaQuestionsComponent } from './fa-questions/fa-questions.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthInterceptor } from './auth.interceptor';
import { ProfileComponent } from './profile-details/profile/profile.component';
import { PetFormEditComponent } from './forms/edit-forms/pet-form-edit/pet-form-edit.component';
import { MrFormEditComponent } from './forms/edit-forms/mr-form-edit/mr-form-edit.component';
import { ContactFormEditComponent } from './forms/edit-forms/contact-form-edit/contact-form-edit.component';
import { AdFormEditComponent } from './forms/edit-forms/ad-form-edit/ad-form-edit.component';
import { FavouritePetsComponent } from './favourite-pets/favourite-pets.component';
import { MyAdsComponent } from './profile-details/my-ads/my-ads.component';
import { DeletePetComponent } from './delete-pet/delete-pet.component';
import { AdoptRequestsComponent } from './profile-details/adopt-requests/adopt-requests.component';
import { EditUserComponent } from './profile-details/edit-user/edit-user.component';
import { AdoptRequestCreateComponent } from './adopt-request-create/adopt-request-create.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ArticleComponent } from './article/article.component';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { CatDogArticlesComponent } from './cat-dog-articles/cat-dog-articles.component';
import { PetsHomePageComponent } from './home-page/pets-home-page/pets-home-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './forgot-password/reset-password/reset-password.component';
import { MyArticlesComponent } from './profile-details/my-articles/my-articles.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    LayoutComponent,
    FooterComponent,
    PetFormComponent,
    MedicalRecordFormComponent,
    ContactFormComponent,
    AdFormComponent,
    PetsComponent,
    PetDetailsComponent,
    PaginationComponent,
    SearchFiltersComponent,
    SearchListComponent,
    SearchListItemComponent,
    HomePageComponent,
    JumbotronComponent,
    PetFinderQuizComponent,
    PetListComponent,
    ContactUsComponent,
    FaQuestionsComponent,
    LoginComponent,
    SignUpComponent,
    ProfileComponent,
    PetFormEditComponent,
    MrFormEditComponent,
    ContactFormEditComponent,
    AdFormEditComponent,
    FavouritePetsComponent,
    MyAdsComponent,
    DeletePetComponent,
    AdoptRequestsComponent,
    EditUserComponent,
    AdoptRequestCreateComponent,
    ChangePasswordComponent,
    ArticleComponent,
    ArticleCreateComponent,
    ArticleListComponent,
    CatDogArticlesComponent,
    PetsHomePageComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    MyArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    NgbModule,
    NgSelectModule,
    CKEditorModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
