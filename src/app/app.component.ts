
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('divState', [
     state('normal', style({
       'background-color':'red',
       transform: 'translateX(0)'
     })),
     state('highlighted',style({
      'background-color':'blue',
      transform: 'translateX(100px)'
    })),
    transition('normal <=> highlighted',animate(300)),
    // transition(' highlighted =>normal',animate(600))

    ])
  ]
})
export class AppComponent {
  state='normal';
  list = ['Milk', 'Sugar', 'Bread'];
  onDelete(item: any){
this.list.splice(this.list.indexOf(item),1);
  }
  onAdd(item: string) {
    this.list.push(item);
  }
  onAnimate(){
this.state=='normal'? this.state='highlighted': this.state='normal'
  }
}
