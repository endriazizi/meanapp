import { Component, OnInit } from '@angular/core';

//serivces import
import { ValidateService } from '../../services/validate.service';

//flash messages


import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: String;
  username: String;
  email: String;
  password: String;

//anytime we use a service we need to injected into the contructor
  constructor(private validateService: ValidateService, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    console.log(123);
    //print name into console after submit button
    console.log(this.name);
    //create an object to submit
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }

    //Required fields
    if(!this.validateService.validateRegister(user)){
      //console.log('Please fill in all fields');
     this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timout: 3000});
      return false;
    }

    if(!this.validateService.validateRegister(user.email)){
      //console.log('Please use a valide email');
      this.flashMessage.show('Please use a valide email', {cssClass: 'alert-danger', timout: 3000});
      return false;
    }

  }

}
