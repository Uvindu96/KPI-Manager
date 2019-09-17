import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-usertasks',
  templateUrl: './usertasks.component.html',
  styleUrls: ['./usertasks.component.css']
})
export class UsertasksComponent implements OnInit {

  constructor(private service : UserService,
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
      comment : '',
      progress : ''
    }
  }
  onSubmitProgress(form:NgForm){
    let data = Object.assign({}, form.value);
    delete data.id;
    if(form.value.id==null)
    this.firestore.collection('progress').add(data);
    else
    this.firestore.doc('progress/'+form.value.id).update(data);
    this.restForm(form);
    this.toaster.success('[Admin]-Task Manager','Task Added Complete');
    
  }


 

  
}
