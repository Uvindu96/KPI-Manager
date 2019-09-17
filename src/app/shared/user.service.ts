import { Injectable } from '@angular/core';
import { User } from './user.model';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  formData : User;

  newUser :any;

  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();

  constructor(private userAuth : AngularFireAuth,
    private db : AngularFirestore,
    private router : Router,
    private firestore :AngularFirestore ) { }

    

    createUser(user){
      this.userAuth.auth.createUserWithEmailAndPassword(user.email,user.password)
      .then(userCredential =>{
        this.newUser=user;
        console.log(userCredential);
        this.insertUserData(userCredential).then(()=>{
          this.router.navigate(['/user/login']);
        });
      })
      .catch(error =>{
        this.eventAuthError.next(error);
      }
      )
      
     
    }

    login(email:string,password:string){
      this.userAuth.auth.signInWithEmailAndPassword(email,password).catch(error=>{
        this.eventAuthError.next(error);
      }).then(userCredential=>{
        this.router.navigate(['user/userdetail']);
      })
    }

    insertUserData(userCredential: firebase.auth.UserCredential){
      return this.db.doc('Users/${userCredential.user.uid}').set({
        username : this.newUser.username,
        email : this.newUser.email,
        password : this.newUser.password
        
      })
    }
    adminLogin(email:string,password:string){
      this.userAuth.auth.signInWithEmailAndPassword(email,password).catch(error=>{
        this.eventAuthError.next(error);
      }).then(userCredential=>{
        this.router.navigate(['/user/admin/addtask']);
      })
    }

    getProgress(){
      return this.firestore.collection('progress').snapshotChanges();
     }

    
}
