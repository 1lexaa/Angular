import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-authorization',
  templateUrl: './form-authorization.component.html',
  styleUrls: ['./form-authorization.component.scss']
})
export class FormAuthorizationComponent {
  username = '';
  password = '';

  constructor(
    private router: Router,
    private cookieService: CookieService,
    private http: HttpClient
  ) {}

  onSubmit() {
    const user = {username: this.username, password: this.password};
    this.http.get<any[]>('http://localhost:3000/users').subscribe(
      response => {
        const foundUser = response.find(u => u.username === user.username && u.password === user.password);
        if (foundUser) {
          this.cookieService.set('authToken', 'true');
          this.router.navigate(['/list-cars']);
        } else {
          alert('Invalid username or password');
        }
      },
      error => {
        alert('Error while logging in');
      }
    );
  }
}
