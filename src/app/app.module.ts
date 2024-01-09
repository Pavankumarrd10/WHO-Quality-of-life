import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignComponent } from './sign/sign.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { QuestionsComponent } from './questions/questions.component';
import { DetailsComponent } from './details/details.component';
 

@NgModule({
  declarations: [
    AppComponent,
    SignComponent,
    HomeComponent,
    QuestionsComponent,
    DetailsComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
