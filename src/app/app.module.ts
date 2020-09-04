import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthInterceptor} from './auth.interceptor';
import { ProfileComponent } from './profile-details/profile/profile.component';
import { PetFormEditComponent } from './forms/edit-forms/pet-form-edit/pet-form-edit.component';
import { MrFormEditComponent } from './forms/edit-forms/mr-form-edit/mr-form-edit.component';
import { ContactFormEditComponent } from './forms/edit-forms/contact-form-edit/contact-form-edit.component';
import { AdFormEditComponent } from './forms/edit-forms/ad-form-edit/ad-form-edit.component';
import { FavouritePetsComponent } from './favourite-pets/favourite-pets.component';




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
    LoginComponent,
    SignUpComponent,
    ProfileComponent,
    PetFormEditComponent,
    MrFormEditComponent,
    ContactFormEditComponent,
    AdFormEditComponent,
    FavouritePetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    NgbModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
