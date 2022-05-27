import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../shared/auth.service";

declare function $(any);

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  constructor(private router: Router, private authService:AuthService) {

	}

	signUp()
	{
		let emailTip=$("#emailTip")[0];
		let passwordTip=$("#passwordTip")[0];
		let email=$("#email")[0];
		let password1=$("#password1")[0];
		let password2=$("#password2")[0];
		let error=false;

		
		

		if(email.value.split("@").length!=2)
		{
			error=true;
			emailTip.innerHTML="Email is incorrect";
		}

		if(password1.value=="" || password2.value=="" || password1.value!=password2.value)
		{
			error=true;
			passwordTip.innerHTML="Password is incorrect";
		}

		this.authService.signUp(email.value, password1.value);
		this.router.navigateByUrl("/shop");
	}

  ngOnInit() {
  }

}
