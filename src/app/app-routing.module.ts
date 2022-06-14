import { InicioComponent } from './inicio/inicio.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemaComponent } from './tema/tema.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';

const routes: Routes = [
  {path:'entrar', component:EntrarComponent},
  {path:'cadastrar', component:CadastrarComponent},
  {path:'',redirectTo:'entrar',pathMatch:'full'},
  {path:'inicio', component:InicioComponent},
  {path: 'tema', component:TemaComponent},
  {path:'tema-edit/:id', component: TemaEditComponent},
  {path:'tema-delete/:id', component: TemaDeleteComponent},
  {path:'postagem-edit/:id', component: PostagemEditComponent},
  {path:'postagem-delete/:id', component: PostagemDeleteComponent},
  {path:'user-edit/:id', component: UserEditComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }