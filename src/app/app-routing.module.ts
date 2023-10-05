import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Premier/login/login.component';
import { SingupComponent } from './Premier/singup/singup.component';
import { HomeComponent } from './Componetes/home/home.component';
import { TemplatemodelComponent } from './Componetes/templatemodel/templatemodel.component';
import { ReactifModelComponent } from './Premier/reactif-model/reactif-model.component';
import { ProfileEditorComponent } from './Componetes/profile-editor/profile-editor.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'singup', component: SingupComponent},
  {path: 'test', component: TemplatemodelComponent},
  {path: 'reactif', component: ReactifModelComponent},
  {path: 'Documentation', component: ProfileEditorComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
