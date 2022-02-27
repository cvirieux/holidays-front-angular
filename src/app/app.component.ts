import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  token: string = '';

  constructor(private http: HttpClient) {
  }

  public test(): void {
    this.http.post<string>(`${environment.backend}/login`, {
      login: 'clement',
      password: 'test'
    }, { responseType: 'text' as 'json' }).subscribe((token) => {
      this.token = token;
    })
  }
}
