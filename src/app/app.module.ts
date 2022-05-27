import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router"

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ShopComponent } from './shop/shop.component';
import {AuthService} from './shared/auth.service';
import {HttpClientModule} from "@angular/common/http"


@NgModule({
   declarations: [
      AppComponent, LoginComponent,SignupComponent, ShopComponent
   ],
   imports: [
		BrowserModule,
		HttpClientModule,
		RouterModule.forRoot([
			{path: "signup", component:SignupComponent, pathMatch: 'full'},
			{path: "signin", component:LoginComponent, pathMatch: 'full'},
			{path: "shop", component:ShopComponent, pathMatch: 'full'},
			{path: "", component:LoginComponent, pathMatch: 'full'}
    ])],
   providers: [AuthService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
