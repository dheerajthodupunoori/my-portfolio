import { state } from '@angular/animations';
import { transition } from '@angular/animations';
import { animate } from '@angular/animations';
import { style } from '@angular/animations';
import { trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Front } from '../../classes/front';

@Component({
  selector: 'app-individual-work-experience',
  templateUrl: './individual-work-experience.component.html',
  styleUrls: ['./individual-work-experience.component.css'],
  animations: [
    trigger('cardFlip', [
      state('default', style({
        transform: 'none'
      })),
      state('flipped', style({
        transform: 'rotateY(180deg)'
      })),
      transition('default => flipped', [
        animate('400ms')
      ]),
      transition('flipped => default', [
        animate('200ms')
      ])
    ])
  ]
})
export class IndividualWorkExperienceComponent implements OnInit {

  constructor() { }

  state:string="default";

  @Input()
  experience: any;
  background:any;
  bkUrl:any;


  ngOnInit(): void {
// console.log(this.experience.front);
this.background=this.experience.front.Background;
console.log(this.background);

const styles={
     'background-image':  this.background
}
this.bkUrl=styles;
console.log(this.bkUrl);
  }

  cardClicked(){
    console.log(this.state);
    if (this.state === "default") {
      this.state = "flipped";
    } else {
      this.state = "default";
    }
  }

  getUrl(){
    return  `url('${this.background}')`;
  }

}
