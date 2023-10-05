import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupVar } from './testhk';
@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent {

public phoneNumberInvalid: boolean=false;
// autre concepte
public signup: SignupVar = new SignupVar();

onSinupTest(SinupTest: NgForm){
  console.log(SinupTest)
  console.log('valeurs: ',JSON.stringify(SinupTest.value) )
  console.log('hello');
}

validatePhoneNumber() {
  if (this.signup.contact && this.signup.contact.length !== 10) {
    this.phoneNumberInvalid = true;
  } else {
    this.phoneNumberInvalid = false;
  }
}


  nom: string;
  prenom: string;
  contact: string;
  sexe: string;
  email: string;
  mdp: string;
  MessageErreur: string = '';

  constructor(private router: Router){
    this.nom ='';
    this.prenom ='';
    this.contact='';
    this.sexe='';
    this.email='';
    this.mdp=''
  }
  onSubmit(form: NgForm){
    this.MessageErreur = '';
    if(
      !this.nom ||
      !this.prenom ||
      !this.contact ||
      !this.sexe||
      !this.email ||
      !this.mdp
    ){
      this.MessageErreur='Veuillez remplir les champs.';
    }else{
      console.log(form.value);
    }
  }
}
