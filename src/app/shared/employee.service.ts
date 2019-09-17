import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { firestore } from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  formData : Employee;

  constructor(private firestore :AngularFirestore) { }

  getTaskList(){
   return this.firestore.collection('tasks').snapshotChanges();
  }
}
