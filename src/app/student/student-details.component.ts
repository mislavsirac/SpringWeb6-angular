import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
import { Course, Student } from './student.component';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  student!: Student;
  courses: Course[] | undefined;

  constructor(private route: ActivatedRoute, private studentService: StudentService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const jmbag = params.get('jmbag');
      if (jmbag) {
        this.studentService.getStudentByJmbag(jmbag).subscribe(student => {
          this.student = student;
          this.studentService.getCoursesByStudentJmbag(jmbag).subscribe(courses => {
            this.student.courses = courses;
          });
        });
      }
    });
  }
}
