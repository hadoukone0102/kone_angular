import { Component } from '@angular/core';
import { User } from './user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templatemodel',
  templateUrl: './templatemodel.component.html',
  styleUrls: ['./templatemodel.component.css']
})
export class TemplatemodelComponent {

  public user: User=  new User();

  public saveDAta(registerForm: NgForm){
    console.log(registerForm);
    console.log('valuers', JSON.stringify(registerForm.value))
    console.log('hello');
  }





}
