import { ContactsComponent } from './components/contacts/contacts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { MainComponent } from './components/main/main.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  {path: '' , redirectTo:'home', pathMatch:"full"},
  {path: 'home' , component: MainComponent},
  {path: 'menu' , component: MenuComponent},
  {path: 'about' , component: AboutComponent},
  {path: 'contacts' , component: ContactsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
