import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare!';
 lugares:any =[
   {active:true , nombre:"Floreria la primavera"}
   ,{active:false , nombre:"Krispy Kreme"}
   ,{active:true , nombre:"Loncheria Marrano"}
   ,{active:true , nombre:"Veterinaria perro agradecido"}
   ,{active:false , nombre:"Sushi star"}
 ]
  constructor(){
    
  }

   
}
