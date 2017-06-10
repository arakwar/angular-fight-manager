import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Character } from './character';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  characters : Character[] = [];
  @ViewChild('svg') svg : ElementRef;
  private selectedIndex: number;
  name : string = "";
  type : string = "circle";

  ngOnInit(){

  }

  selectElement(id){
    this.selectedIndex = id;
  }

  mouseUp(){
    if(this.selectedIndex!=null){
      this.characters[this.selectedIndex].x = Math.floor(this.characters[this.selectedIndex].x/56)*56+28;
      this.characters[this.selectedIndex].y = Math.floor(this.characters[this.selectedIndex].y/56)*56+28;
      if(this.characters[this.selectedIndex].x < 56 && this.characters[this.selectedIndex].y < 56){
        this.characters.splice(this.selectedIndex,1);
      }
      this.selectedIndex = null;
    }
  }

  mouseMove(event: MouseEvent){
    if(this.selectedIndex!=null){
      this.characters[this.selectedIndex].x = event.offsetX;
      this.characters[this.selectedIndex].y = event.offsetY;
    }
  }

  addChar(){
    this.characters.push(new Character(this.name,26,26,this.type));
  }
}
