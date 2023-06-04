import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from './student.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent {
  @Input()
    student!: Student;
  @Output() delete = new EventEmitter<Student>();

  constructor(private route: ActivatedRoute, private studentService: StudentService, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const jmbag = params.get('jmbag');
      if (jmbag) {
        this.studentService.getStudentByJmbag(jmbag).subscribe(student => {
          this.student = student;
        });
      }
    });
  }

  deleteStudent() {
    this.studentService.deleteStudent(this.student.jmbag).subscribe(
      () => {
        // Handle success response
        console.log('Student deleted');
        this.delete.emit(this.student);
        this.router.navigate(['/students']);
      },
      (error) => {
        // Handle error response
        console.error('Error deleting student:', error);
        
      }
    );
  }
  

  
}
