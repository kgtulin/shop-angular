import {Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from "../shared/auth.service";

declare function $(any);

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor(private router:Router, private authService:AuthService) { }

	signIn()
	{
		let email=$("#email")[0];
		let password=$("#password")[0];
		let tip=$("#tip")[0];

		if(!this.authService.auth(email.value, password.value))
		{
			tip.innerHTML="Login or password are incorrect";
			return;
		}

		this.router.navigateByUrl("/shop");
	}

	ngOnInit() {

	}

}
