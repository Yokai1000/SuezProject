import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GsmServicesComponent } from './gsm-services/gsm-services.component';
import { ActemiumComponent } from './actemium/actemium.component';
import { SemlexComponent } from './semlex/semlex.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'gsm-services', component: GsmServicesComponent},
  {path: 'actemium', component: ActemiumComponent},
  {path: 'semlex', component: SemlexComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,GsmServicesComponent,ActemiumComponent,SemlexComponent]
