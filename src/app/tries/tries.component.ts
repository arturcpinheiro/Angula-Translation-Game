import { Component, OnInit, Input } from '@angular/core';

import { Heart } from '../shared/heart.model'

@Component({
  selector: 'app-tries',
  templateUrl: './tries.component.html',
  styleUrls: ['./tries.component.css']
})
export class TriesComponent implements OnInit {

  @Input() public hearts: Heart[] =[
    new Heart(true),
    new Heart(true),
    new Heart(true)
  ]
  
  //public emptyHeart: string = '/assets/coracao_vazio.png'
  //public filledHeart: string = '/assets/coracao_cheio.png'

  constructor() { console.log(this.hearts[0].existingHeart()) }

  ngOnInit(): void {
  }

}
