import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
  backtohome()
  {
    this.router.navigate(['home'])
  }
  bulkorder()
  {
    this.router.navigate(['bulkorder'])
  }
  logout()
  {
    this.router.navigate(['login'])
  }
  summarypage()
  {
    this.router.navigate(['summary'])
  }
}
