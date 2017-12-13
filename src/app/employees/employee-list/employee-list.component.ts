import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { Employee } from '../../shared/employee.model';
import { AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList: Employee[];

  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    var x = this.empService.getData();
    x.snapshotChanges().subscribe(item =>{
        this.employeeList = [];
        item.forEach(element =>{
            var y = element.payload.toJSON();
            y['$key'] = element.key;
            this.employeeList.push(y as Employee);
        });
    });
  }

  onItemClick(emp: Employee) {
    this.empService.selectEmployee = Object.assign({}, emp);
  }

}
