import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentComponent } from './student/student.component';
import { StudentDeleteComponent } from './student/student-delete.component';
import { StudentDetailsComponent } from './student/student-details.component';

const routes: Routes = [
  { path: 'students', component: StudentListComponent },
  { path: 'students/create', component: StudentComponent },
  { path: 'students/delete/:jmbag', component: StudentDeleteComponent },
  { path: 'students/details/:jmbag', component: StudentDetailsComponent },
  { path: '', redirectTo: '/students', pathMatch: 'full' },
  { path: '**', redirectTo: '/students' } // Optional wildcard route for handling unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
