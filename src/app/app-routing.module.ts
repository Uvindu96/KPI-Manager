import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { AdminloginComponent } from './user/adminlogin/adminlogin.component';
import { EmployeesComponent } from './employees/employees.component';
import { UsertasksComponent } from './usertasks/usertasks.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { UserdetailComponent } from './userdetail/userdetail.component';

const routes: Routes = [{
  path:'',redirectTo:'/user/login',pathMatch:'full'
},
{
  path:'user', component:UserComponent,
  children:[
    {
      path:'registration',component: RegistrationComponent
    },
    {
      path:'login',component:LoginComponent
    },
    {
      path:'admin',component:AdminloginComponent
    },
    {
      path: 'employees', component: EmployeeComponent
    }
 
  ]
},
  {
    path:'user/admin/addtask',component:EmployeesComponent
  },
  {
    path:'user/usertasks',component:UsertasksComponent
  },
  {
    path :'user/userdetail',component:UserdetailComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
