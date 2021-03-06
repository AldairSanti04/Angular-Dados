import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dado1 = "../assets/img/dice1.png";
  dado2 = "../assets/img/dice2.png";
  numero1: number = 1;
  numero2: number = 2;

  tirarDados(): void{
    this.numero1 = Math.round(Math.random() * 5) + 1;
    this.numero2 = Math.round(Math.random() * 5) + 1;
    this.dado1 =  "../assets/img/dice" + this.numero1 + ".png";
    this.dado2 =  "../assets/img/dice" + this.numero2 + ".png";
  }
}
