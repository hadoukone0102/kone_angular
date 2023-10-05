import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactif-model',
  templateUrl: './reactif-model.component.html',
  styleUrls: ['./reactif-model.component.css']
})
export class ReactifModelComponent implements OnInit {

  registerForm = new FormGroup({
    nom: new FormControl('', Validators.minLength(4)),
    prenom: new FormControl('', Validators.maxLength(10)),
    contact: new FormControl('',Validators.maxLength(10)),
    email: new FormControl(''),
    niveau: new FormControl(''),
    filiere: new FormControl(''),
    autre: new FormControl(true)
  })

  constructor(){}

  ngOnInit(): void {
   
  }

  public saveData() {
    console.log(this.registerForm);
    console.log('data: ', JSON.stringify(this.registerForm.value));
  }
}
