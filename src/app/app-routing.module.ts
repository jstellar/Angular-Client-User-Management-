import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListStudentComponent } from './list-student/list-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';


const routes: Routes = [
  {path: "list_student", component: ListStudentComponent},
  {path: "add_student", component: AddStudentComponent},
  {path: "edit_student/:id", component: EditStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
