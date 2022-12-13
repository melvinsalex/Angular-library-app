import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DescriptionComponent } from './description/description.component';
import { FavCmpComponent } from './fav-cmp/fav-cmp.component';
import { GenreCmpComponent } from './genre-cmp/genre-cmp.component';
import { LoginComponent } from './login/login.component';
import { MembershipComponent } from './membership/membership.component';
import { MyGuard} from './sample-service.service';



const routes: Routes = [
  {path:'description/:id',component:DescriptionComponent},
  {path:'',component:LoginComponent},
  {path:'dashboard',canActivate:[MyGuard],component:DashboardComponent},
  {path:'membership',component:MembershipComponent},
  {path:'login',component:LoginComponent},
  {path:'genre-cmp',canActivate:[MyGuard],component:GenreCmpComponent,
  children:[
    {path:'comics',canActivate:[MyGuard],component:GenreCmpComponent},
    {path:'sci-fi',canActivate:[MyGuard],component:GenreCmpComponent},
    {path:'drama',canActivate:[MyGuard],component:GenreCmpComponent}

  ]},

  {path:'fav-cmp',canActivate:[MyGuard],component:FavCmpComponent},
  //  {path: 'book',canActivate:[MyGuard],component:BookComponent,
   



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[MyGuard]

  
})
export class AppRoutingModule { }
