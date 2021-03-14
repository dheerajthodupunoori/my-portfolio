import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  public canShowMenuItems:boolean=true;

  ngOnInit(): void {
  }

  // showAllMenu(){
  //   console.log("show all menu clicked");
  //   this.canShowMenuItems=!this.canShowMenuItems;
  // }

}
