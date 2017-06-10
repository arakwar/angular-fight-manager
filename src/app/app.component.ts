import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Character } from './character';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  private characters : Character[] = [];
  @ViewChild('svg') svg : ElementRef;
  private selectedElement: Character = null;
  private selectedIndex: number;

  ngOnInit(){

  }

  selectElement(id){
    this.selectedElement = this.characters[id];
    this.selectedIndex = id;
  }

  mouseUp(){
    if(this.selectedElement!=null){
      this.selectedElement.x = Math.floor(this.selectedElement.x/56)*56+28;
      this.selectedElement.y = Math.floor(this.selectedElement.y/56)*56+28;
      if(this.selectedElement.x < 56 && this.selectedElement.y < 56){
        this.characters.splice(this.selectedIndex,1);
      }
      this.selectedElement = null;
    }
  }

  mouseMove(event: MouseEvent){
    if(this.selectedElement!=null){
      this.selectedElement.x = event.offsetX;
      this.selectedElement.y = event.offsetY;
    }
  }

  addChar(name){
    this.characters.push(new Character(name,26,26));
  }
}
