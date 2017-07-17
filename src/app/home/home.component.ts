import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import {SwapiService} from '../services/swapi/swapi.service';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import {Router} from '@angular/router';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [SwapiService]
})
export class HomeComponent implements OnInit {
  planetKey = new FormControl();
  planetFound: object[];
  population: number[] = [];
  searchLimitReached: boolean;
  initSearchTime: Date;
  searchCount: number;
  currentTime: Date;

  constructor(private swapi: SwapiService, private _http: Http, private _router: Router, private snackbar: MdSnackBar) {
    this.searchLimitReached = false;
    this.initSearchTime = null;
    this.searchCount = 0;
    this.currentTime = new Date();
  }

  ngOnInit() {
    this.planetKey
      .valueChanges
      .debounceTime(600)
      .distinctUntilChanged()
      .subscribe(key => {

        // If current user is not Luke, start the timer
        if (this.isThisLuke()) {
          this.swapi.searchPlanets(key)
            .subscribe(res => {
              this.planetFound = res.results;
            })

        } else {
          if (!this.initSearchTime) {
            this.initSearchTime = new Date();

            // Reset timer after one minute
            setInterval(() => {
              this.initSearchTime = null;
              this.searchCount = 0;
              this.snackbar.open('YOU MAY SEARCH NOW', 'CLOSE', {
                duration: 3000,
              });

            }, 60000);
          }
          this.searchCount += 1;

          if (((new Date().getTime() - this.initSearchTime.getTime()) / 1000) < 60 && this.searchCount <= 15) {
            this.swapi.searchPlanets(key)
              .subscribe(res => {
                this.planetFound = res.results;
              })
          } else {

            this.snackbar.open('SEARCH LIMIT EXCEEDED', 'CLOSE', {
              duration: 3000,
            });
          }

        }


      });

  }

  // Return true if current user is Luke
  private isThisLuke(): boolean {
    return localStorage.getItem('currentUser') === 'Luke Skywalker';

  }

  public doLogout(): void {
    localStorage.removeItem('currentUser');
    this._router.navigateByUrl('/login');

    this.snackbar.open('LOGGED OUT', 'CLOSE', {
      duration: 3000,
    });
  }


}
