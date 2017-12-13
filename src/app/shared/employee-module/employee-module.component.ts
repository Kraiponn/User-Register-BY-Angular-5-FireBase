import { Component, OnInit } from '@angular/core';

export class Employee {
  employeeID: number;
  code: string;
  name: string;
}

const employeeArray: Employee[] = [
    { employeeID: 1, code: 'MP', name: 'Kraipon' },
    { employeeID: 2, code: 'AMG', name: 'Sawitree' },
    { employeeID: 3, code: 'TS', name: 'Jiraporn' },
];

@Component({
  selector: 'app-employee-module',
  templateUrl: './employee-module.component.html',
  styleUrls: ['./employee-module.component.css']
})
export class EmployeeModuleComponent implements OnInit {
  employeeCollection = employeeArray;
  selectEmployee: Employee = { employeeID: 0, code: '', name: '' };

  constructor() { }

  ngOnInit() {
  }

  OpenForEdit(employee: Employee): void {
    console.log(employee);
    this.selectEmployee = employee;
  }

  AddOrEdit(): void {
    if(this.selectEmployee.employeeID == 0) {
      this.selectEmployee.employeeID =
      Math.max.apply(Math, this.employeeCollection.map(function(x){ return x.employeeID;})) + 1;
      this.employeeCollection.push(this.selectEmployee);
    }

    this.selectEmployee  = { employeeID: 0, code: '', name: '' };
  }

  deleteEmployee(): void {
    this.employeeCollection = this.employeeCollection.filter(d => d != this.selectEmployee);
    this.selectEmployee = { employeeID: 0, code: '', name: '' };
  }

}
