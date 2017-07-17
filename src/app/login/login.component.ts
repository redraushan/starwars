import {Component, OnInit} from '@angular/core';
import {SwapiService} from '../services/swapi/swapi.service';
import {Router} from '@angular/router';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [SwapiService]
})
export class LoginComponent implements OnInit {
  login: ILogin;

  constructor(private swapi: SwapiService, private _router: Router, private snackbar: MdSnackBar) {
    this.login = {
      username: '',
      password: ''
    }
  }

  ngOnInit() {
  }

  public doLogin(): void {
    this.swapi
      .searchPeople(this.login.username)
      .subscribe(response => {
          if (response.count === 1) {
            if (this.login.password === response.results[0].birth_year) {

              // Store current loggedIn user in localStorage
              localStorage.setItem('currentUser', response.results[0].name);

              this.snackbar.open('LOGIN SUCCESS', 'CLOSE', {
                duration: 3000,
              });

              this._router.navigateByUrl('/home');
            } else {
              this.snackbar.open('LOGIN FAILED', 'CLOSE', {
                duration: 3000,
              });

            }

          }


        },
        error => {
          console.log(error);
        }
      );

  }

}

interface ILogin {
  username: string,
  password: string
}
