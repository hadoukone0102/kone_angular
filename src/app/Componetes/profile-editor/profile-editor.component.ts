import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms'; // Supprimez la virgule en trop
import { Router } from '@angular/router';
import { SessionStorageService } from 'src/app/session-storage.service';
import { KoneService } from 'src/app/kone.service';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {
  myData:any
  constructor(private route: Router, private sessionStorageService: SessionStorageService) { // Ajoutez "private" devant sessionStorageService

  }
  
  validatePhoneNumber(control: AbstractControl): { [key: string]: any } | null {
    const phoneNumber = control.value;
    const phoneNumberPattern = /^\d{9}$/; // Expression régulière pour un numéro de téléphone de 9 chiffres

    if (!phoneNumberPattern.test(phoneNumber)) {
      return { 'invalidPhoneNumber': true };
    }

    return null;
  }

  RedirectToHome() {
    this.route.navigate(['home']);
  }

  profileForm = new FormGroup({
    firstname: new FormControl('', Validators.minLength(4)),
    lastname: new FormControl('', Validators.maxLength(10)),
    contact: new FormControl('', [Validators.maxLength(9), this.validatePhoneNumber]),
    email: new FormControl('', Validators.required),
  })

  OnSubmitForm() {

    let nom = this.profileForm.value.firstname;
    let prenom = this.profileForm.value.lastname;
    let contact = this.profileForm.value.contact;
    let email = this.profileForm.value.email;

    // Stockez les données dans la session
    this.sessionStorageService.setItem('hk', {
      nom,
      prenom,
      contact,
      email
    });

    const myData = this.sessionStorageService.getItem('hk');
    if(myData){
      console.log(myData);
    }else{
      console.log("n'y pense meme pas");
    }
    
    // console.log([nom, prenom, contact, email]);
    // console.log('data', JSON.stringify(this.profileForm.value));
  }

}
