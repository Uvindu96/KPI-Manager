import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-showprogress',
  templateUrl: './showprogress.component.html',
  styleUrls: ['./showprogress.component.css']
})
export class ShowprogressComponent implements OnInit {

  list : User[];

  constructor(private service : UserService,
    private firestore:AngularFirestore,
    private toaster:ToastrService) { }

  ngOnInit() {
    this.service.getProgress().subscribe(actionArray =>{
      this.list = actionArray.map(item=>{
        return {
          id:item.payload.doc.id,
          ...item.payload.doc.data()
        } as User;
      })
    })
   
  }

  onEdit(prg:User){
    this.service.formData = Object.assign({},prg);
  }

  onDelete(id:string){
    if(confirm("Are you sure you want to delete this..?")){
      this.firestore.doc('progress/'+id).delete();
      this.toaster.warning('Deleted Succesfully','Task Manager');
    }
  }



}
