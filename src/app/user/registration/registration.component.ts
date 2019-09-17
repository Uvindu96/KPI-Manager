import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  authError:any;

  constructor(private service : UserService,
    private firestore : AngularFirestore) { }

  ngOnInit() {
    
    this.service.eventAuthError$.subscribe(data =>{
      this.authError = data;
    })
  }


  onCreateUser (form){
    this.service.createUser(form.value);
  }

}
