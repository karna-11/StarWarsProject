import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoreInfoComponent } from './components/more-info/more-info.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  // {path:'home',component:HomeComponent},
  {path:'more',component:MoreInfoComponent},
  {path:'more/:data',component:MoreInfoComponent},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
