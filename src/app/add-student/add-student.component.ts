import { Component, OnInit } from '@angular/core';
import { Student } from '../models/Student';
import { StudentService } from '../services/student.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private studentService:StudentService,
    private router:Router) { }

  student:Student = new Student();

  ngOnInit(): void {
  }


  onSubmit() {

      this.studentService.save(this.student).subscribe(data => {
        this.router.navigate(["/list_student"]);
      });


  }

}
