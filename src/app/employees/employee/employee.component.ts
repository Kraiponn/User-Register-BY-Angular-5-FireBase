import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  empService: EmployeeService;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form: NgForm) {
    if(form.value.$key == '' || form.value.$key == null)
      this.employeeService.insertEmployee(form.value);
    else
      this.employeeService.updateEmployee(form.value);

    this.resetForm(form);
  }

  resetForm(form?: NgForm) {
    if(form != null)
      form.reset();

    this.employeeService.selectEmployee = {
      $key: '',
      name: '',
      position: '',
      office: '',
      salary: 0
    }

    // this.employeeService.selectEmployee.$key = '';
  }

  onDelete(form: NgForm) {
    if(confirm("Are you sure to delete this record ?") == true) {
        this.employeeService.deleteEmployee(form.value.$key);
        this.resetForm(form);
    }
  }

}
