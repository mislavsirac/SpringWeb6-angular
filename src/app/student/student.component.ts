import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

export interface Student {
  name: string;
  lastName: string;
  jmbag: string;
  ects: number | null;
  birthDate: string; // Add the dateOfBirth field
  courses: Course[]; // Add the courses property
}

export interface Course {
  id: number;
  name: string;
  ects: number;
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: Student[] = [];
  selectedStudent: Student | undefined;
  newStudent: Student = {
    name: '',
    lastName: '',
    jmbag: '',
    ects: null,
    birthDate: ''
    , courses: []
  };

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.studentService.getStudents().subscribe(students => {
      this.students = students;
      this.selectedStudent = this.students[0];
    });
  }

  createStudent() {
    this.studentService.addStudent(this.newStudent).subscribe(
      (response) => {
        // Handle success response
        console.log('Student created:', response);
        // Clear the form after successful creation
        this.newStudent = {
          name: '',
          lastName: '',
          jmbag: '',
          ects: null,
          birthDate: '', courses: []
        };
        this.getStudents(); // Refresh the student list
      },
      (error) => {
        // Handle error response
        console.error('Error creating student:', error);
      }
    );
  }

  navigateToDetails(student: Student) {
    this.selectedStudent = student;
  }

  deleteStudent(student: Student) {
    this.studentService.deleteStudent(student.jmbag).subscribe(
      (response) => {
        // Handle success response
        console.log('Student deleted:', response);
        this.getStudents(); // Refresh the student list
      },
      (error) => {
        // Handle error response
        console.error('Error deleting student:', error);
      }
    );
  }
}
