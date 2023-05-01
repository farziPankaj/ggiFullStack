import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDataComponent } from './add-data/add-data.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ViewDataComponent } from './view-data/view-data.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'homePage', component: HomePageComponent},
  { path: 'addData', component: AddDataComponent},
  { path: 'viewData', component: ViewDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
