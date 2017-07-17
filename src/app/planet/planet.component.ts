import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {

  @Input()
  data: object;

  constructor() {
  }

  ngOnInit() {
  }

  planetStyle(population: any): object {

    if (population === 'unknown') {
      return {
        background: 'red',
        height: '5px',
        width: '5px',
        margin: '0 auto'
      };

    }

    if (population === 0) {
      return {
        background: 'gray',
        height: '20px',
        width: '20px',
        margin: '0 auto'

      }

    }

    if (population >= 0 && population <= 1000) {
      return {
        background: 'yellow',
        height: '50px',
        width: '50px',
        margin: '0 auto'

      }
    }

    if (population >= 1000 && population <= 10000) {
      return {
        background: 'green',
        height: '70px',
        width: '70px',
        margin: '0 auto'

      }
    }

    if (population >= 10000 && population <= 100000) {
      return {
        background: 'white',
        height: '90px',
        width: '90px',
        margin: '0 auto'

      }
    }

    if (population >= 100000 && population <= 1000000) {
      return {
        background: 'cyan',
        height: '100px',
        width: '100px',
        margin: '0 auto'

      }
    }

    if (population >= 1000000 && population <= 10000000) {
      return {
        background: 'magenta',
        height: '150px',
        width: '150px',
        margin: '0 auto'

      }
    }

    if (population >= 10000000 && population <= 100000000) {
      return {
        background: 'blue',
        height: '200px',
        width: '200px',
        margin: '0 auto'

      }
    }

    if (population >= 100000000 && population <= 1000000000) {
      return {
        background: 'brown',
        height: '250px',
        width: '250px',
        margin: '0 auto'

      }
    }
    if (population >= 1000000000 && population <= 10000000000) {
      return {
        background: '#FFC107',
        height: '300px',
        width: '300px',
        margin: '0 auto'

      }
    }

    if (population >= 10000000000 && population <= 100000000000) {
      return {
        background: 'silver',
        height: '320px',
        width: '320px',
        margin: '0 auto'

      }
    }
    if (population >= 100000000000 && population <= 1000000000000) {
      return {
        background: 'gold',
        height: '350px',
        width: '350px',
        margin: '0 auto'

      }
    }
    if (population >= 1000000000000 && population <= 10000000000000) {
      return {
        background: 'indigo',
        height: '400px',
        width: '400px',
        margin: '0 auto'

      }
    }

  }

}
