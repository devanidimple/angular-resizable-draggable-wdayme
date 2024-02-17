import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  position;
  
  
  newPosition(event){
    const boundingRect = event.currentTarget.getBoundingClientRect();
    const element = event.currentTarget;
    
    // const x = event.pageX - boundingRect.left;
    const x = element.offsetLeft;
    const y = element.offsetTop;

    this.position = "(" + x+", " + y +")";
    console.log('yeah');
  }
}
