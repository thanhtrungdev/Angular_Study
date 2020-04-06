import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ContentComponent } from './layouts/content/content.component';

import { ComputerCreateComponent } from './screens/computer-create/computer-create.component';
import { ComputerListComponent } from './screens/computer-list/computer-list.component';
import { CustomerCreateComponent } from './screens/customer-create/customer-create.component';
import { CustomerListComponent } from './screens/customer-list/customer-list.component';
import { ServiceCreateComponent } from './screens/service-create/service-create.component';
import { ServiceListComponent } from './screens/service-list/service-list.component';
import { UseDetailComponent } from './screens/use-detail/use-detail.component';
import { TemplateFormsComponent } from './forms/template-forms/template-forms.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    ComputerCreateComponent,
    ComputerListComponent,
    CustomerCreateComponent,
    CustomerListComponent,
    ServiceCreateComponent,
    ServiceListComponent,
    UseDetailComponent,
    TemplateFormsComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
