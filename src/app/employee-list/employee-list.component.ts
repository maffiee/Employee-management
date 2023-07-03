import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import form-related modules

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employees = [
    { id: 1, name: 'Victory Chollom', position: 'CEO / Developer' },
    { id: 2, name: 'Nanbyen Pontip', position: 'Developer' },
    // Add more employee objects as needed
  ];

  newEmployee: any = {}; // Empty object to store new employee details

  employeeForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.employeeForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      position: ['', Validators.required]
    });
  }

  addEmployee() {

    // Create a copy of the new employee object
    const newEmployee = { ...this.newEmployee };

    // Generate a unique ID for the new employee (you can modify this logic as needed)
    const uniqueId = this.employees.length > 0 ? Math.max(...this.employees.map(employee => employee.id)) + 1 : 1;
    
    // Assign the unique ID to the new employee
    this.newEmployee.id = uniqueId;
    
    // Add the new employee to the employees array
    this.employees.push(this.newEmployee);
    
    // Reset the form and newEmployee object
    this.newEmployee = {};

    // Check if the form is valid
    if (this.employeeForm.invalid) {
      // Mark all form controls as touched to trigger validation errors
      this.employeeForm.markAllAsTouched();
      return;
    }
  }

  editEmployee(employee: any) {
    // Handle edit action for the employee
  }

  confirmDelete(employee: any): void {
    const confirmDialog = confirm(`Are you sure you want to delete ${employee.name}?`);
  
    if (confirmDialog) {
      this.deleteEmployee(employee);
    }
  }

  deleteEmployee(employee: any) {
    const confirmed = confirm("Deleting this record cannot be undone. Are you sure you want to proceed?");
    if (confirmed) {
      // Find the index of the employee in the employees array
      const index = this.employees.findIndex(emp => emp.id === employee.id);
  
      if (index !== -1) {
        // Remove the employee from the employees array
        this.employees.splice(index, 1);
      }
    }
  }
  
}

