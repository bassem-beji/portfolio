import { Component } from '@angular/core';
import emailjs from 'emailjs-com';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  fullName: string= '';
  emailAddress: string= '';
  mobileNumber: string= '';
  emailSubject: string= '';
  message: string= '';

  sendEmail(form: NgForm) {
    if (form.invalid) {
      // Vérifiez si le formulaire est invalide avant d'envoyer l'e-mail
      return;
    }

    const templateParams = {
      emailAddress: this.emailAddress, // Adresse e-mail de destination
      fullName: this.fullName,
      mobileNumber: this.mobileNumber,
      emailSubject: this.emailSubject,
      message: this.message
    };

    emailjs.send('portfolio', 'template_7btct1e', templateParams, 'sZlUfrHOSMzpwkdDE')
      .then((response) => {
        console.log('Email envoyé avec succès :', response);
        form.resetForm(); // Réinitialise le formulaire après l'envoi
      }, (error) => {
        console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
      });
  }
}
