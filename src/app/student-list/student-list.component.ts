import { Component, OnInit } from '@angular/core';
import { StudentService, Student } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  selectedStudent: Student | undefined;

  constructor(private studentService: StudentService) { }

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
}
