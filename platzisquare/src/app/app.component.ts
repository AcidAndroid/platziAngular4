import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare!';
  listo = false;
  listo2 = false;
  stringInterpolation ="Soy string interpolation binding";
  // nombre:string ="Sin nombre aun";

  constructor(){
    setTimeout(()=>{this.listo=true;},5000);
    setInterval(()=>{this.listo2=!this.listo2},2000);  
  }

   mehanclicado() {
    alert('Me tocaste!!');
  }

}
