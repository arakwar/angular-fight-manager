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

  ngOnInit(){
    this.characters.push(new Character('Steeve',150,100));
    this.characters.push(new Character('Bob',75,75));
    this.characters.push(new Character('Bob',50,50));
    this.characters.push(new Character('Bob',25,25));
    this.characters.push(new Character('Bob',100,100));
    this.characters.push(new Character('Bob',50,75));
    this.characters.push(new Character('Bob',75,50));
    this.characters.push(new Character('Bob',25,75));
    this.characters.push(new Character('Bob',75,25));
    this.characters.push(new Character('Bob',100,75));
    this.characters.push(new Character('Bob',75,100));
    this.characters.push(new Character('Bob',125,75));
    this.characters.push(new Character('Bob',75,125));
    this.characters.push(new Character('Bob',150,75));
    this.characters.push(new Character('Bob',75,150));
    this.characters.push(new Character('Bob',175,75));
    this.characters.push(new Character('Bob',75,175));
    this.characters.push(new Character('Bob',200,75));
    this.characters.push(new Character('Bob',75,200));
    this.characters.push(new Character('Bob',225,75));
    this.characters.push(new Character('Bob',75,225));
    this.characters.push(new Character('Bob',250,75));
    this.characters.push(new Character('Bob',75,250));
    this.characters.push(new Character('Bob',275,75));
    this.characters.push(new Character('Bob',75,275));
    this.characters.push(new Character('Bob',300,75));
    this.characters.push(new Character('Bob',75,300));
    this.characters.push(new Character('Bob',325,75));
    this.characters.push(new Character('Bob',75,325));
    this.characters.push(new Character('Bob',350,75));
    this.characters.push(new Character('Bob',375,350));
    this.characters.push(new Character('Bob',75,375));
    this.characters.push(new Character('Bob',400,75));
    this.characters.push(new Character('Bob',75,400));
  }

  selectElement(id){
    this.selectedElement = this.characters[id];
  }

  mouseUp(){
    if(this.selectedElement!=null){
      this.selectedElement.x = Math.floor(this.selectedElement.x/56)*56+28;
      this.selectedElement.y = Math.floor(this.selectedElement.y/56)*56+28;
      this.selectedElement = null;
    }
  }

  mouseMove(event: MouseEvent){
    if(this.selectedElement!=null){
      this.selectedElement.x = event.offsetX;
      this.selectedElement.y = event.offsetY;
    }
  }
}
