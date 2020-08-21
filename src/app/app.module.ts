import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer/footer.component';
import { PetFormComponent } from './pet-form/pet-form.component';
import { MedicalRecordFormComponent } from './medical-record-form/medical-record-form.component'
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AdFormComponent } from './ad-form/ad-form.component';
import { PetCardComponent } from './pet-card/pet-card.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';

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
    PetCardComponent,
    PetDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
