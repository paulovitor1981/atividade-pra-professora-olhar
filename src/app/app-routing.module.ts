
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticiasService } from './services/noticias.service';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { SuporteComponent } from './views/suporte/suporte.component';

const routes: Routes = [
 { path:"", component: HomeComponent},
 { path:"login" , component: LoginComponent},
 { path:"suporte" , component: SuporteComponent},
{ path: "noticias" , component: NoticiasService},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
