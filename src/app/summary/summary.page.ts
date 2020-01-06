import { Component, OnInit } from '@angular/core';
import{Router}from '@angular/router'
import { from } from 'rxjs';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  back()
  {
    this.router.navigate(['/home'])
  }
}
