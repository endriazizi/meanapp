import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user){
    if(user.name == undefined || user.username == undefined || user.email == undefined || user.password == undefined ){
      return false;
    }else {
      return true;
    }
  }
  validateEmail(email){
    //https://stackoverflow.com/questions/46155/how-to-validate-email-address-in-javascript
    //re stand for regular expression
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);

    //true good email
    //false bad email
  }
}
