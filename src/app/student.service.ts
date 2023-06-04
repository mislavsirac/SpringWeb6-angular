import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course, Student } from './student/student.component';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  
  private apiUrl = 'http://localhost:8080/students'; // Update with your Spring Boot REST API URL
  private apiCourseUrl = 'http://localhost:8080'; // Update with your Spring Boot REST API URL

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }

  createStudent(student: Student): Observable<Student> {
    return this.addStudent(student);
  }

  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.apiUrl, student);
  }

  deleteStudent(studentId: string): Observable<void> {
    const url = `${this.apiUrl}/${studentId}`;
    return this.http.delete<void>(url);
  }
  getStudentByJmbag(jmbag: string): Observable<Student> {
    const url = `${this.apiUrl}/${jmbag}`;
    return this.http.get<Student>(url);
  }
  getCoursesByStudentJmbag(jmbag: string): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiCourseUrl}/courses/students/${jmbag}`);
  }
}
