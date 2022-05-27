import { Injectable } from '@angular/core';
import {md5} from "./md5"

@Injectable()
export class AuthService {

	private login="";
	private hash="";
	private authorized=false;

	constructor(){
		this.login=localStorage.getItem("login");
		this.hash=localStorage.getItem("hash");
	}


	auth(login, password)
	{
		this.authorized= login==this.login && this.hash==md5(password);
		return(this.authorized);
	}

	signUp(login, password)
	{
		this.login=login;
		
		this.hash=md5(password);

		localStorage.setItem("login", login);
		localStorage.setItem("hash", md5(password));

		this.authorized=true;
	}

	isAuthorized()
	{
		return(this.authorized);
	}


	logoff()
	{
		this.login="";
		this.hash="";
		this.authorized=false;
	}
}