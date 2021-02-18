import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AddvideoComponent } from './addvideo/addvideo.component';
import { DisplayvideosComponent } from './displayvideos/displayvideos.component';
import { NgxSpinnerModule } from "ngx-spinner";
import {NgxPaginationModule} from 'ngx-pagination';


const routes: Routes = [  
   { path : 'videos',component:DisplayvideosComponent},
   { path : 'addvideo',component:AddvideoComponent},
   { path : '**',component:DisplayvideosComponent}
   

 ];

@NgModule({
  declarations: [
    AppComponent,
    AddvideoComponent,
    DisplayvideosComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    NgxSpinnerModule,
    NgxPaginationModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
