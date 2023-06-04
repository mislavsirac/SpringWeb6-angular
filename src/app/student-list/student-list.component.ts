import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../student/student.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  selectedStudent: Student | undefined;
  newStudent: Student = { jmbag: '', ects: 0, birthDate: '', name: '',
  lastName: '', courses: [] };

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.studentService.getStudents().subscribe(students => {
      this.students = students;
      this.selectedStudent = this.students[0];
    });
  }

  selectStudent(student: Student) {
    this.selectedStudent = student;
  }

  navigateToDetails(student: Student) {
    if (student.jmbag) {
      console.log("I am here");
      this.router.navigate(['/students/details', student.jmbag]);
    }
  }
  deleteStudent(student: Student) {
    this.router.navigate(['/students/delete', student.jmbag]);
  }
  
  

  createStudent() {
    this.studentService.addStudent(this.newStudent).subscribe(student => {
      this.students.push(student);
      this.newStudent = { jmbag: '', ects: 0, birthDate: '', name: '',
      lastName: '', courses: []};
    });
  }
}
