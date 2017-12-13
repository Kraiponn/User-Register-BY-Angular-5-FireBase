import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import 'sweetalert';

@Injectable()
export class EmployeeService {
  employeeList: AngularFireList<any>;
  selectEmployee: Employee = new Employee();

  constructor(private fireBase: AngularFireDatabase) { }

  getData() {
    this.employeeList = this.fireBase.list('employees');
    return this.employeeList;
  }

  insertEmployee(employee: Employee) {
    this.employeeList.push({
      name: employee.name,
      position: employee.position,
      office: employee.office,
      salary: employee.salary
    });

    swal('Completed', 'Add new employee success.', 'success');
  }

  updateEmployee(emp: Employee) {
      this.employeeList.update(emp.$key, {
          name: emp.name,
          position: emp.position,
          office: emp.office,
          salary: emp.salary
      })
  }

  deleteEmployee(key: string) {
    this.employeeList.remove(key);
    swal('Completed', 'Remove record key: ' + key + ' success.', 'success');
  }

}
