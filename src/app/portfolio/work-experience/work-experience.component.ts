import { Component, OnInit } from '@angular/core';
import * as experiences from "../../../assets/data/work-experience.json";
import { Front,WorkExperience } from '../classes/front';


@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  
  public front : Front[] = [];
  public work :any[]=[];
  public data : any = [];

  constructor() { }

  ngOnInit(): void {
    this.data=experiences;
    this.work = this.data.default;
    console.log(this.work[0].front);

    this.work.forEach(experience => {

      this.front.push(experience.front);
      
    });


    console.log(this.front);
  }

}
