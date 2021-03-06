import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  constructor() { }

  @Input() skill:any;

  public data : any;

  ngOnInit(): void {
    this.data = this.skill
    console.log(this.data);
  }

}
