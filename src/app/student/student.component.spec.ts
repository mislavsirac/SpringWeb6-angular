import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { StudentComponent } from './student.component';

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [StudentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have empty JMBAG by default', () => {
    expect(component.newStudent.jmbag).toEqual('');
  });

  it('should have null ECTS by default', () => {
    expect(component.newStudent.ects).toBeNull();
  });

  it('should have false paysForCollege by default', () => {
    expect(component.newStudent.birthDate).toEqual('');
  });
});
