import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private service : UserService) { }

  ngOnInit() {
    
  }

  adminlogin(frm){
    if(frm.value.email=='kpimanager01@gmail.com'){
      this.service.adminLogin(frm.value.email,frm.value.password);
    }
   
  }

}
