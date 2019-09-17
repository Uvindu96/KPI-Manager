import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/employee.model';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { from } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  

  constructor(private service : EmployeeService,
    private firestore : AngularFirestore,
    private toaster: ToastrService) { }

  ngOnInit() {
   this.restForm();
  }

  restForm(form?: NgForm){
    if(form !=null)
    form.resetForm();
    this.service.formData={
      id : 'null',
      fullName : '',
      task : '',
      startingDate : '',
      endDate : ''
    }
  }

  onSubmit(form:NgForm){
    let data = Object.assign({}, form.value);
    delete data.id;
    if(form.value.id==null)
    this.firestore.collection('tasks').add(data);
    else
    this.firestore.doc('tasks/'+form.value.id).update(data);
    this.restForm(form);
    this.toaster.success('[Admin]-Task Manager','Task Added Complete');
    
  }

}
