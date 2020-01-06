import { Component } from '@angular/core';
import{Router}from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cross: boolean = false;
  slideOpts = {
    initialSlide: 1,
    speed: 150,
    autoplay:true
  };
  constructor(private router:Router) {
   
   
  }
  // scrollFunction() {
  //   // var mybutton = document.getElementById("myBtn");
  //   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  //     document.getElementById("myBtn").style.display = "block";
  //   } else {
  //     document.getElementById("myBtn").style.display = "none";
  //   }
  // }
  // topFunction() {
  //   document.body.scrollTop = 0;
  //   document.documentElement.scrollTop = 0;
  // }
  on() {
  
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlaydiv").style.display = "block";
    // document.getElementById("overlaydiv").style.width = "100%";
  }

  off() {
    document.write("gfhgh");
    document.getElementById("overlay").style.display = "none";
    document.getElementById("overlaydiv").style.display = "none";
  }


  // getoffervalue(): void {
   
  //   this.cross = true;
  //   document.write("gfhgh");
  //   document.getElementById("overlay").style.display = "none";
  //   document.getElementById("overlaydiv").style.display = "none";
  // }
  // closecard():void{
  //   this.cross=false;
  // }

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
  MoreDetailsPage()
  {
    this.router.navigate(['moredetails'])
  }
  moredetail()
  {
    this.router.navigate(['moredetail'])
  }
  moredetails1()
  {
    this.router.navigate(['moredetals1'])
  }
  moredetail2()
  {
    this.router.navigate(['moredetail2'])
  }
}
