import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    gameResult: string = ''
    public gameGoing: boolean = true

  finishGame(result: string){
   this.gameGoing = false
   this.gameResult = result
  }
  
  public clearGame():void{
    this.gameGoing = true
    this.gameResult = ''
  }

}
