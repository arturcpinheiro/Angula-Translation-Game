import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Sentence } from '../shared/sentence.model'
import { SENTENCES } from './sentence-mock'
import { Heart } from '../shared/heart.model'

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  public sentences: Sentence[] = SENTENCES
  public answer: string = ''
  public round: number = 0
  public roundSentence: Sentence
  public progress: number = 0
  public tries: number = 0
  //show which type finishGame will have
  @Output() public finishGameEvent = new EventEmitter<string>()
 
  public hearts: Heart[] =[
    new Heart(true),
    new Heart(true),
    new Heart(true)
  ]
  
  constructor() { 
    this.roundUp() 
    this.roundSentence = this.sentences[this.round]   
  }

  ngOnInit(): void {
  }

  updateAnswer(answer: Event): void{
    this.answer = (<HTMLInputElement>answer.target).value
  }

  verifyAnswer(): void{
    if(this.roundSentence.sentenceEng == this.answer){
      console.log("yeah")
      this.round++
      this.progress = this.progress + (100/this.sentences.length)
      this.roundUp()
    }
    else{
      this.hearts[this.tries].full = false
      console.log("No")
      this.tries++
    }
    console.log(this.round)
    console.log(this.tries)
    if(this.tries == 3){
      console.log("here")
      this.finishGameEvent.emit('lost') 
    }
    if(this.round == this.sentences.length)
     this.finishGameEvent.emit('won')
  }

  public roundUp(): void{
    this.roundSentence = this.sentences[this.round]
    this.answer = ''
  } 

}
