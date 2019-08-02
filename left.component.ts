import { Component, OnInit } from '@angular/core';
import {Router,Event,NavigationEnd  } from '@angular/router';
@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {
currentRoute="/Home"
  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      console.log(event)
      if (event instanceof NavigationEnd) {
        this.currentRoute=event.url;
       
    }

    })
   }

  ngOnInit() {

  
  }

}
