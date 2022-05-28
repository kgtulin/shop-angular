import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/auth.service"
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

declare function $(any);

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

	wareList=null;
	filteredList=null
	colors=["Red", "White", "Black", "Blue", "Yellow", "Green"];
	cart=[];

	constructor(private authService: AuthService, private router: Router, private http: HttpClient) {

	}


	showCart()	{
		let cart=document.getElementById("cart");
		let body=document.body;

		cart.style.display="block";

		cart.style.left=(body.offsetWidth-cart.offsetWidth)/2+"px";
		cart.style.top="100px";
		cart.style.zIndex="100";

	}

	addToCart(item)	{
		this.cart.push(item);
	}


	applyFilter()	{
		let fromDate=new Date($("#fromDate")[0].value);
		let toDate=new Date($("#toDate")[0].value);
		let inStock=$("#inStock")[0].checked as number;
		let fromPrice=$("#fromPrice")[0].value as number;
		let toPrice=$("#toPrice")[0].value as number;
		let color=$("#color")[0].value;

		this.filteredList=this.wareList.filter(function(item){

			if(fromDate)
			{
				let date=new Date(item.issueDate);
				if(date<fromDate)return(false);
			}

			if(toDate)
			{
				let date=new Date(item.issueDate);
				if(date>toDate)return(false);
			}

			if(inStock && !item.inStock)return(false);

			if(fromPrice)
				if(item.price<fromPrice)return(false);

			if(toPrice)
				if(item.price>toPrice)return(false);

			if(color)
				if(item.color!=color)return(false);

			return(true);
		});

	}


	ngOnInit() {

		if(!this.authService.isAuthorized()){

			//this.router.navigateByUrl("/");
			//return;
		}

		this.http.get("/assets/shop.json").subscribe((response)=> {
			this.wareList = response;
			this.filteredList=this.wareList.map(x=>x);
		})

	}

}
