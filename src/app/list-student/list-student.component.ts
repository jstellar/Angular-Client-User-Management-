import { Component, OnInit } from '@angular/core';
import { Student } from '../models/Student';
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  students:Student[];

  constructor(private studentService:StudentService,
    private router:Router) { }

  ngOnInit(): void {

      this.studentService.get_students().subscribe(data => {
        this.students = data;

      });
  }

  deleteStudent(id:number, index:number) {
    this.studentService.delete_student(id).subscribe(() => {
      this.students.splice(index, 1);
      // this.reloadData();
    });
  }
}
