import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare!';
  lat:number=19.4834951;
  lng:number=-99.1250986;
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
