import { Component, OnInit } from '@angular/core';
import 'sweetalert';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor() {}

  ngOnInit() {
    $('button.btn-alert').click(function(){
      alert('Hello JQuery by Angular CLI');
    });
  }

  showModal() {
    $('#exampleModal').modal('show');
  }

  closeModal() {
    $('#exampleModal').modal('hide');
  }

  activeSweetAlert() {
    swal('Ooop', 'You can join with us', 'success');
  }

}
