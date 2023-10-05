import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Premier/login/login.component';
import { SingupComponent } from './Premier/singup/singup.component';
import { HomeComponent } from './Componetes/home/home.component';
import { HeaderComponent } from './Componetes/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplatemodelComponent } from './Componetes/templatemodel/templatemodel.component';
import { ReactifModelComponent } from './Premier/reactif-model/reactif-model.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProfileEditorComponent } from './Componetes/profile-editor/profile-editor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SingupComponent,
    HomeComponent,
    HeaderComponent,
    TemplatemodelComponent,
    ReactifModelComponent,
    ProfileEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSidenavModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
