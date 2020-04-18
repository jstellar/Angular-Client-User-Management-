import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Student } from '../models/Student';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class StudentService {



  baseUrl:string = "http://localhost:8080/users";


  constructor(private http:HttpClient) { }

  public get_students() {

    return this.http.get<Student[]>(this.baseUrl);
  }

  public save(student: Student) {

    return this.http.post<Student>(this.baseUrl, student);

    }

  public delete_student(id:number) {
      return this.http.delete<Student>(this.baseUrl + "/" + id);
    }
}
