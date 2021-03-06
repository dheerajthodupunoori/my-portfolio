import { Component, OnInit } from '@angular/core';
import * as skills from "../../../assets/data/skills.json";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {


  public skills : any= []

  constructor() { }

  ngOnInit(): void {

    this.skills = skills;
    console.log(this.skills.default);
    
  }

}
