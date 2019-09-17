import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from 'src/app/shared/employee.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  list : Employee[];
  constructor(private service : EmployeeService,
    private firestore:AngularFirestore,
    private toaster:ToastrService) { }

  ngOnInit() {
    this.service.getTaskList().subscribe(actionArray =>{
      this.list = actionArray.map(item=>{
        return {
          id:item.payload.doc.id,
          ...item.payload.doc.data()
        } as Employee;
      })
    })
  }

  onEdit(emp:Employee){
    this.service.formData = Object.assign({},emp);
  }
  onDelete(id:string){
    if(confirm("Are you sure you want to delete this..?")){
      this.firestore.doc('tasks/'+id).delete();
      this.toaster.warning('Deleted Succesfully','Task Manager');
    }
  }

}
