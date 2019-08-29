import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Parcial2808';
  elementos:any = [
    {nombre: 'Azufre', simbolo:'S', atomico: '16', peso: '32,065', transicion:2  },
    {nombre: 'Hidrogeno', simbolo:'H', atomico: '1', peso: '15,65', transicion:1},
    {nombre: 'Oro', simbolo:'O', atomico: '79', peso: '10,9', transicion:2},
    {nombre: 'Plata', simbolo:'P', atomico: '41', peso: '13', transicion:1},
    {nombre: 'Maganesio', simbolo:'M', atomico: '74', peso: '12', transicion:1},
    {nombre: 'Mercurio', simbolo:'Mer', atomico: '10', peso: '85', transicion:1},
    {nombre: 'Plomo', simbolo:'Plo', atomico: '45', peso: '23', transicion:2},
    {nombre: 'Calcio', simbolo:'Cal', atomico: '78', peso: '5', transicion:2},
    {nombre: 'Carbono', simbolo:'C', atomico: '12', peso: '7,4', transicion:2}
  ]
}


