import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    this.myFunction();
  }
  myFunction(): void {
    
       const typed = new Typed('.multiple-text', {
      strings: ['Computer Science Engineering Student', ],
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 500,
      loop: true
    });






  }
  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/cv.pdf';  // Remplacez '/path/to/cv.pdf' par le chemin d'accès réel à votre fichier PDF
    link.download = 'cv.pdf';
    link.target = '_blank';  // Facultatif : ouvrir le lien dans un nouvel onglet
    link.click();
  }
  
  
}
