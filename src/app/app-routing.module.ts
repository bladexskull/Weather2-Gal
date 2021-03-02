import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForecastComponent } from './forecast/forecast.component';
import { DetailsComponent } from './details/details.component';
<<<<<<< HEAD

const routes: Routes = [
  { path: '', component: ForecastComponent },
=======
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: ForecastComponent},
>>>>>>> SomeEdits
  { path: 'details', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
