import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-read',
  templateUrl: './employee-read.component.html',
  styleUrls: ['./employee-read.component.css']
})
export class EmployeeReadComponent {
  employees: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchEmployees();
  }
  
  fetchEmployees() {
    this.http.get<any[]>('your-api-endpoint-url').subscribe(
      response => {
        this.employees = response;
      },
      error => {
        console.log('Error fetching employees:', error);
      }
    );
  }
  

}
