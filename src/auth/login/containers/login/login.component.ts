import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor() { }

  loginUser(event: FormGroup) {
    console.log('about to log in the user. usrname and password = ', event.value);
  }

}
