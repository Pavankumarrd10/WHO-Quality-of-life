import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignComponent } from './sign/sign.component';
import { HomeComponent } from './home/home.component';
import { QuestionsComponent } from './questions/questions.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: 'Sign', component:SignComponent },
  { path: 'Home', component:HomeComponent },
  { path: 'Questions', component:QuestionsComponent },
  { path: 'Details', component:DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
