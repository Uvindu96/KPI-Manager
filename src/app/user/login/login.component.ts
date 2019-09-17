import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authError : any;

  constructor(private service : UserService) { }

  ngOnInit() {
    this.service.eventAuthError$.subscribe(data =>{
      this.authError = data;
    });
  }

   login(frm){
     this.service.login(frm.value.email,frm.value.password);
     }

}
